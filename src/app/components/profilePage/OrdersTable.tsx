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

type Order = {
  _id: string;
  orderNumber: string;
  buyer: {
    firstName: string;
    lastName: string;
    phone: string;
  };
  product: {
    name: string;
  };
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  status: string; // e.g., Pending, Completed, Canceled
};

export default function OrdersTable() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchOrders = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(" /orders");
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
    <div className="w-full min-h-screen p-6 flex flex-col gap-6">
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
                        {order.buyer.firstName} {order.buyer.lastName}
                      </TableCell>
                      <TableCell className="px-4 py-2">
                        {order.buyer.phone}
                      </TableCell>
                      <TableCell className="px-4 py-2">
                        {order.product.name}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-center">
                        {order.quantity}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-center">
                        ${order.unitPrice.toFixed(2)}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-center">
                        ${order.totalPrice.toFixed(2)}
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
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={8}
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
