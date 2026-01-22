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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { refreshAccessToken } from "@/lib/auth";

const API_BASE_URL = "https://api.growwe.com";

type ShippingData = {
  address: string;
  city: string;
  country: string;
  area: string;
  phone: string;
};

export default function ShippingTable() {
  const locale = useLocale();
  const [shippingInfo, setShippingInfo] = useState<ShippingData | null>(null);
  const [editingInfo, setEditingInfo] = useState<ShippingData | null>(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  const fetchShippingData = async () => {
    setLoading(true);
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

      if (res.ok) {
        const data = await res.json();
        setShippingInfo({
          address: data.address,
          city: data.city,
          country: data.country,
          area: data.area,
          phone: data.phone,
        });
      }
    } catch (error) {
      console.error("Error fetching shipping data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShippingData();
  }, []);

  const handleDialogChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) setEditingInfo(null);
  };

  const handleSave = async () => {
    if (!editingInfo) return;

    setSaving(true);
    try {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        alert("Please login first");
        window.location.href = `/${locale}/login`;
        return;
      }

      let res = await fetch(`${API_BASE_URL}/users/me`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
        body: JSON.stringify(editingInfo),
      });

      if (res.status === 401) {
        const newToken = await refreshAccessToken();
        if (newToken) {
          res = await fetch(`${API_BASE_URL}/users/me`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${newToken}`,
            },
            credentials: "include",
            body: JSON.stringify(editingInfo),
          });
        } else {
          alert("Session expired. Please login again");
          window.location.href = `/${locale}/login`;
          return;
        }
      }

      if (res.ok) {
        setShippingInfo(editingInfo);
        setOpen(false);
        setEditingInfo(null);
        alert("Shipping information updated successfully!");
      } else {
        throw new Error("Failed to update shipping information");
      }
    } catch (error) {
      console.error("Error updating shipping data:", error);
      alert("Failed to update shipping information");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen p-6 flex items-center justify-center">
        <p className="text-gray-500">Loading shipping information...</p>
      </div>
    );
  }

  return (
    <div className="w-full  p-6 flex flex-col gap-6">
      <h1 className="text-2xl font-semibold text-gray-800">
        Shipping Information
      </h1>

      <div className="w-full border rounded-2xl shadow-lg bg-white overflow-hidden">
        <div className="w-full overflow-auto">
          <Table className="text-[0.95rem] border-collapse w-full">
            <TableHeader className="sticky top-0 bg-gray-50 z-20 shadow-sm">
              <TableRow className="border-b-2 border-gray-200">
                <TableHead className="px-4 py-2">Address</TableHead>
                <TableHead className="px-4 py-2">City</TableHead>
                <TableHead className="px-4 py-2">Area</TableHead>
                <TableHead className="px-4 py-2">Country</TableHead>
                <TableHead className="px-4 py-2">Phone</TableHead>
                <TableHead className="px-4 py-2 text-center">Modify</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {shippingInfo ? (
                <TableRow className="hover:bg-blue-50">
                  <TableCell className="px-4 py-2">
                    {shippingInfo.address}
                  </TableCell>
                  <TableCell className="px-4 py-2">
                    {shippingInfo.city}
                  </TableCell>
                  <TableCell className="px-4 py-2">
                    {shippingInfo.area}
                  </TableCell>
                  <TableCell className="px-4 py-2">
                    {shippingInfo.country}
                  </TableCell>
                  <TableCell className="px-4 py-2">
                    {shippingInfo.phone}
                  </TableCell>
                  <TableCell className="px-4 py-2 text-center">
                    <Dialog open={open} onOpenChange={handleDialogChange}>
                      <DialogTrigger asChild>
                        <button
                          className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                          onClick={() => setEditingInfo(shippingInfo)}
                        >
                          Modify
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-lg max-h-[70vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-xl font-semibold">
                            Modify Shipping Info
                          </DialogTitle>
                        </DialogHeader>
                        <div className="mt-4 flex flex-col gap-4">
                          <input
                            type="text"
                            placeholder="Address"
                            className="border px-3 py-2 rounded-md w-full"
                            value={editingInfo?.address || ""}
                            onChange={(e) =>
                              setEditingInfo((prev) =>
                                prev
                                  ? { ...prev, address: e.target.value }
                                  : null,
                              )
                            }
                          />
                          <input
                            type="text"
                            placeholder="City"
                            className="border px-3 py-2 rounded-md w-full"
                            value={editingInfo?.city || ""}
                            onChange={(e) =>
                              setEditingInfo((prev) =>
                                prev ? { ...prev, city: e.target.value } : null,
                              )
                            }
                          />
                          <input
                            type="text"
                            placeholder="Area"
                            className="border px-3 py-2 rounded-md w-full"
                            value={editingInfo?.area || ""}
                            onChange={(e) =>
                              setEditingInfo((prev) =>
                                prev ? { ...prev, area: e.target.value } : null,
                              )
                            }
                          />
                          <input
                            type="text"
                            placeholder="Country"
                            className="border px-3 py-2 rounded-md w-full"
                            value={editingInfo?.country || ""}
                            onChange={(e) =>
                              setEditingInfo((prev) =>
                                prev
                                  ? { ...prev, country: e.target.value }
                                  : null,
                              )
                            }
                          />
                          <input
                            type="text"
                            placeholder="Phone"
                            className="border px-3 py-2 rounded-md w-full"
                            value={editingInfo?.phone || ""}
                            onChange={(e) =>
                              setEditingInfo((prev) =>
                                prev
                                  ? { ...prev, phone: e.target.value }
                                  : null,
                              )
                            }
                          />
                          <button
                            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:opacity-50"
                            onClick={handleSave}
                            disabled={saving}
                          >
                            {saving ? "Saving..." : "Save"}
                          </button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={6}
                    className="text-center py-10 text-gray-400"
                  >
                    No shipping information found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
