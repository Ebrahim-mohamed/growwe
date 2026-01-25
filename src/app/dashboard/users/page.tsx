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
  userName: string;
  email: string;
  phone?: string;
  address?: string;
  country?: string;
  city?: string;
  area?: string;
  isAdmin: boolean;
  orders?: any[];
  createdAt: string;
};

export default function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/users`);
      if (!res.ok) throw new Error("Failed to fetch users");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error(err);
      alert("Error fetching users");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this user?")) return;
    setIsSubmitting(true);
    try {
      const res = await fetch(`${API_BASE_URL}/users/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete user");
      alert("User deleted successfully");
      await fetchUsers();
    } catch (err) {
      console.error(err);
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
            <Table className="w-full text-[0.95rem]">
              <TableHeader className="sticky top-0 bg-gray-100 z-20">
                <TableRow>
                  <TableHead>User Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Country</TableHead>
                  <TableHead>City</TableHead>
                  <TableHead>Area</TableHead>
                  <TableHead>Address</TableHead>
                  <TableHead className="text-center">Orders</TableHead>
                  <TableHead className="text-center">Role</TableHead>
                  <TableHead className="text-center">Created</TableHead>
                  <TableHead className="text-center">Delete</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {users.length > 0 ? (
                  users.map((user) => (
                    <TableRow key={user._id} className="hover:bg-blue-50">
                      <TableCell>{user.userName}</TableCell>

                      <TableCell>
                        <a
                          href={`mailto:${user.email}`}
                          className="text-blue-600 hover:underline"
                        >
                          {user.email}
                        </a>
                      </TableCell>

                      <TableCell>{user.phone || "-"}</TableCell>
                      <TableCell>{user.country || "-"}</TableCell>
                      <TableCell>{user.city || "-"}</TableCell>
                      <TableCell>{user.area || "-"}</TableCell>
                      <TableCell>{user.address || "-"}</TableCell>

                      <TableCell className="text-center">
                        {user.orders?.length ?? 0}
                      </TableCell>

                      <TableCell className="text-center">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            user.isAdmin
                              ? "bg-green-100 text-green-700"
                              : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {user.isAdmin ? "Admin" : "User"}
                        </span>
                      </TableCell>

                      <TableCell className="text-center">
                        {new Date(user.createdAt).toLocaleDateString()}
                      </TableCell>

                      <TableCell className="text-center">
                        <button
                          onClick={() => handleDelete(user._id)}
                          disabled={isSubmitting}
                          className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50"
                        >
                          Delete
                        </button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={11}
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
