"use client";

import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { refreshAccessToken } from "@/lib/auth";

const API_BASE_URL = "https://api.growwe.com";

type Order = {
  _id: string;
  orderNumber: string;
  items: Array<{
    product: {
      nameEN: string;
      nameAR: string;
      price: number;
    };
    quantity: number;
    price: number;
  }>;
  totalPrice: number;
  status: string;
  createdAt: string;
};

export default function OrdersTable() {
  const locale = useLocale();
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchOrders = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        window.location.href = `/${locale}/login`;
        return;
      }

      let res = await fetch(`${API_BASE_URL}/users/me`, {
        headers: { Authorization: `Bearer ${token}` },
        credentials: "include",
      });

      if (res.status === 401) {
        const newToken = await refreshAccessToken();
        if (newToken) {
          res = await fetch(`${API_BASE_URL}/users/me`, {
            headers: { Authorization: `Bearer ${newToken}` },
            credentials: "include",
          });
        } else {
          window.location.href = `/${locale}/login`;
          return;
        }
      }

      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

      const userData = await res.json();

      // Now fetch the actual orders
      if (userData.orders && userData.orders.length > 0) {
        const orderIds = userData.orders;
        const orderPromises = orderIds.map((orderId: string) =>
          fetch(`${API_BASE_URL}/orders/${orderId}`, {
            headers: { Authorization: `Bearer ${token}` },
            credentials: "include",
          }).then((r) => r.json()),
        );

        const fetchedOrders = await Promise.all(orderPromises);
        setOrders(fetchedOrders);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="w-full  p-6 flex flex-col gap-6">
      <h1 className="text-2xl font-semibold text-gray-800">
        Orders Management
      </h1>

      {isLoading && (
        <div className="w-full text-center py-10 text-gray-500">
          Loading orders...
        </div>
      )}

      {!isLoading && (
        <div className="w-full border rounded-2xl shadow-lg bg-white overflow-hidden">
          <div className="w-full overflow-auto">
            <Table className="text-[0.95rem] border-collapse w-full">
              <TableHeader className="sticky top-0 bg-gray-50 z-20 shadow-sm">
                <TableRow className="border-b-2 border-gray-200">
                  <TableHead className="px-4 py-2">Order #</TableHead>
                  <TableHead className="px-4 py-2">Date</TableHead>
                  <TableHead className="px-4 py-2">Products</TableHead>
                  <TableHead className="px-4 py-2 text-center">
                    Total Items
                  </TableHead>
                  <TableHead className="px-4 py-2 text-center">
                    Total Price
                  </TableHead>
                  <TableHead className="px-4 py-2 text-center">
                    Status
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {orders.length > 0 ? (
                  orders.map((order) => {
                    const totalItems = order.items.reduce(
                      (sum, item) => sum + item.quantity,
                      0,
                    );

                    return (
                      <TableRow key={order._id} className="hover:bg-blue-50">
                        <TableCell className="px-4 py-2">
                          {order.orderNumber}
                        </TableCell>
                        <TableCell className="px-4 py-2">
                          {new Date(order.createdAt).toLocaleDateString()}
                        </TableCell>
                        <TableCell className="px-4 py-2">
                          {order.items.map((item, idx) => (
                            <div key={idx}>
                              {locale === "ar"
                                ? item.product.nameAR
                                : item.product.nameEN}{" "}
                              (x{item.quantity})
                            </div>
                          ))}
                        </TableCell>
                        <TableCell className="px-4 py-2 text-center">
                          {totalItems}
                        </TableCell>
                        <TableCell className="px-4 py-2 text-center">
                          EGP {order.totalPrice.toFixed(2)}
                        </TableCell>
                        <TableCell className="px-4 py-2 text-center">
                          {order.status === "Completed" && (
                            <span className="text-green-600 font-medium">
                              {order.status}
                            </span>
                          )}
                          {order.status === "Pending" && (
                            <span className="text-yellow-600 font-medium">
                              {order.status}
                            </span>
                          )}
                          {(order.status === "Canceled" ||
                            order.status === "Failed") && (
                            <span className="text-red-600 font-medium">
                              {order.status}
                            </span>
                          )}
                        </TableCell>
                      </TableRow>
                    );
                  })
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={6}
                      className="text-center py-10 text-gray-400"
                    >
                      No orders found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
}
