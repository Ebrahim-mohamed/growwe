"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { API_BASE_URL } from "@/utils/api";

type Order = {
  _id: string;
  orderNumber: string;
  buyer:
    | {
        firstName?: string;
        lastName?: string;
        phone?: string;
        email?: string;
      }
    | string; // populated object or id
  product:
    | {
        name?: string;
      }
    | string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  status: string;
  createdAt?: string;
};

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchOrders = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/orders`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setOrders(data);
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
    <div className="w-full min-h-screen bg-gray-50 p-6 flex flex-col gap-6">
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
          <div className="max-h-[calc(100vh-12rem)] overflow-auto">
            <Table className="text-[0.95rem] border-collapse w-full">
              <TableHeader className="sticky top-0 bg-gray-50 z-20 shadow-sm">
                <TableRow className="border-b-2 border-gray-200">
                  <TableHead className="px-4 py-2">Order #</TableHead>
                  <TableHead className="px-4 py-2">Buyer Name</TableHead>
                  <TableHead className="px-4 py-2">Buyer Phone</TableHead>
                  <TableHead className="px-4 py-2">Product Name</TableHead>
                  <TableHead className="px-4 py-2 text-center">
                    Quantity
                  </TableHead>
                  <TableHead className="px-4 py-2 text-center">
                    Unit Price
                  </TableHead>
                  <TableHead className="px-4 py-2 text-center">
                    Total Price
                  </TableHead>
                  <TableHead className="px-4 py-2 text-center">
                    Status
                  </TableHead>
                  <TableHead className="px-4 py-2 text-center">Date</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {orders.length > 0 ? (
                  orders.map((order) => (
                    <TableRow key={order._id} className="hover:bg-blue-50">
                      <TableCell className="px-4 py-2">
                        {order.orderNumber}
                      </TableCell>
                      <TableCell className="px-4 py-2">
                        {typeof order.buyer === "object"
                          ? `${order.buyer.firstName || ""} ${
                              order.buyer.lastName || ""
                            }`
                          : "-"}
                      </TableCell>
                      <TableCell className="px-4 py-2">
                        {typeof order.buyer === "object"
                          ? order.buyer.phone || "-"
                          : "-"}
                      </TableCell>
                      <TableCell className="px-4 py-2">
                        {typeof order.product === "object"
                          ? order.product.name || "-"
                          : "-"}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-center">
                        {order.quantity}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-center">
                        ${order.unitPrice?.toFixed?.(2) ?? order.unitPrice}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-center">
                        ${order.totalPrice?.toFixed?.(2) ?? order.totalPrice}
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
                        {order.status === "Canceled" && (
                          <span className="text-red-600 font-medium">
                            {order.status}
                          </span>
                        )}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-center">
                        {new Date(order.createdAt || "").toLocaleString()}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={9}
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
