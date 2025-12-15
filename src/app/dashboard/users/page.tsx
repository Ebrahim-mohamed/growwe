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

type User = {
  _id: string;
  firstName?: string;
  lastName?: string;
  userName?: string;
  email?: string;
  phone?: string;
  country?: string;
  address?: string;
  postalCode?: string;
  city?: string;
  ordersCount?: number;
  role?: string;
};

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/users`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
      // you can show toast here
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const onDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this user?")) return;
    setIsSubmitting(true);
    try {
      const res = await fetch(`${API_BASE_URL}/users/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      alert("User deleted successfully!");
      await fetchUsers();
    } catch (error) {
      console.error(error);
      alert("Failed to delete user");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6 flex flex-col gap-6">
      <h1 className="text-2xl font-semibold text-gray-800">Users Management</h1>

      {isLoading && (
        <div className="w-full text-center py-10 text-gray-500">
          Loading users...
        </div>
      )}

      {!isLoading && (
        <div className="w-full border rounded-2xl shadow-lg bg-white overflow-hidden">
          <div className="max-h-[calc(100vh-12rem)] overflow-auto">
            <Table className="text-[0.95rem] border-collapse w-full">
              <TableHeader className="sticky top-0 bg-gray-50 z-20 shadow-sm">
                <TableRow className="border-b-2 border-gray-200">
                  <TableHead className="px-4 py-2">First Name</TableHead>
                  <TableHead className="px-4 py-2">Last Name</TableHead>
                  <TableHead className="px-4 py-2">Email</TableHead>
                  <TableHead className="px-4 py-2">Phone</TableHead>
                  <TableHead className="px-4 py-2">Address</TableHead>
                  <TableHead className="px-4 py-2">Country</TableHead>
                  <TableHead className="px-4 py-2">City</TableHead>
                  <TableHead className="px-4 py-2">Postal Code</TableHead>
                  <TableHead className="px-4 py-2 text-center">
                    Orders
                  </TableHead>
                  <TableHead className="px-4 py-2 text-center">
                    Delete
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {users.length > 0 ? (
                  users.map((user) => (
                    <TableRow key={user._id} className="hover:bg-blue-50">
                      <TableCell className="px-4 py-2">
                        {user.firstName || "-"}
                      </TableCell>
                      <TableCell className="px-4 py-2">
                        {user.lastName || "-"}
                      </TableCell>
                      <TableCell className="px-4 py-2">
                        <a
                          href={`mailto:${user.email}`}
                          className="text-blue-600 hover:underline"
                        >
                          {user.email || "-"}
                        </a>
                      </TableCell>
                      <TableCell className="px-4 py-2">
                        {user.phone || "-"}
                      </TableCell>
                      <TableCell className="px-4 py-2">
                        {user.address || "-"}
                      </TableCell>
                      <TableCell className="px-4 py-2">
                        {user.country || "-"}
                      </TableCell>
                      <TableCell className="px-4 py-2">
                        {user.city || "-"}
                      </TableCell>
                      <TableCell className="px-4 py-2">
                        {user.postalCode || "-"}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-center">
                        {user.ordersCount ?? 0}
                      </TableCell>

                      <TableCell className="px-4 py-2 text-center">
                        <button
                          onClick={() => onDelete(user._id)}
                          disabled={isSubmitting}
                          className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Delete
                        </button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={10}
                      className="text-center py-10 text-gray-400"
                    >
                      No users found.
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
