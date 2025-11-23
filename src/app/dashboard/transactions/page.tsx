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

type Transaction = {
  _id: string;
  user: {
    firstName: string;
    lastName: string;
    phone: string;
  };
  price: number;
  date: string;
};

export default function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTransactions = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("https://api.ebmksa.com/transactions");
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setTransactions(data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6 flex flex-col gap-6">
      <h1 className="text-2xl font-semibold text-gray-800">Transactions</h1>

      {isLoading && (
        <div className="w-full text-center py-10 text-gray-500">
          Loading transactions...
        </div>
      )}

      {!isLoading && (
        <div className="w-full border rounded-2xl shadow-lg bg-white overflow-hidden">
          <div className="max-h-[calc(100vh-12rem)] overflow-auto">
            <Table className="text-[0.95rem] border-collapse w-full">
              <TableHeader className="sticky top-0 bg-gray-50 z-20 shadow-sm">
                <TableRow className="border-b-2 border-gray-200">
                  <TableHead className="px-4 py-2">Transaction ID</TableHead>
                  <TableHead className="px-4 py-2">First Name</TableHead>
                  <TableHead className="px-4 py-2">Last Name</TableHead>
                  <TableHead className="px-4 py-2">Phone</TableHead>
                  <TableHead className="px-4 py-2 text-center">Price</TableHead>
                  <TableHead className="px-4 py-2 text-center">Date</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {transactions.length > 0 ? (
                  transactions.map((tx) => (
                    <TableRow key={tx._id} className="hover:bg-blue-50">
                      <TableCell className="px-4 py-2">{tx._id}</TableCell>
                      <TableCell className="px-4 py-2">
                        {tx.user.firstName}
                      </TableCell>
                      <TableCell className="px-4 py-2">
                        {tx.user.lastName}
                      </TableCell>
                      <TableCell className="px-4 py-2">
                        {tx.user.phone}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-center">
                        ${tx.price.toFixed(2)}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-center">
                        {new Date(tx.date).toLocaleString()}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={6}
                      className="text-center py-10 text-gray-400"
                    >
                      No transactions found.
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
