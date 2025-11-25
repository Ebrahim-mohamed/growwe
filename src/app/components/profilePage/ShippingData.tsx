"use client";

import { useState } from "react";
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

type ShippingData = {
  address: string;
  city: string;
  country: string;
  postalCode: string;
};

export default function ShippingTable() {
  const [shippingInfo, setShippingInfo] = useState<ShippingData[]>([
    {
      address: "123 Main St",
      city: "Cairo",
      country: "Egypt",
      postalCode: "11511",
    },
  ]);
  const [editingInfo, setEditingInfo] = useState<ShippingData | null>(null);
  const [open, setOpen] = useState(false);

  const handleDialogChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) setEditingInfo(null);
  };

  const handleSave = (updatedInfo: ShippingData) => {
    setShippingInfo([updatedInfo]); // Since only one row
    setOpen(false);
    setEditingInfo(null);
  };

  return (
    <div className="w-full min-h-screen p-6 flex flex-col gap-6">
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
                <TableHead className="px-4 py-2">Country</TableHead>
                <TableHead className="px-4 py-2">Postal Code</TableHead>
                <TableHead className="px-4 py-2 text-center">Modify</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {shippingInfo.length > 0 ? (
                shippingInfo.map((info, index) => (
                  <TableRow key={index} className="hover:bg-blue-50">
                    <TableCell className="px-4 py-2">{info.address}</TableCell>
                    <TableCell className="px-4 py-2">{info.city}</TableCell>
                    <TableCell className="px-4 py-2">{info.country}</TableCell>
                    <TableCell className="px-4 py-2">
                      {info.postalCode}
                    </TableCell>
                    <TableCell className="px-4 py-2 text-center">
                      <Dialog open={open} onOpenChange={handleDialogChange}>
                        <DialogTrigger asChild>
                          <button
                            className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                            onClick={() => setEditingInfo(info)}
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
                                    : null
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
                                  prev
                                    ? { ...prev, city: e.target.value }
                                    : null
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
                                    : null
                                )
                              }
                            />
                            <input
                              type="text"
                              placeholder="Postal Code"
                              className="border px-3 py-2 rounded-md w-full"
                              value={editingInfo?.postalCode || ""}
                              onChange={(e) =>
                                setEditingInfo((prev) =>
                                  prev
                                    ? { ...prev, postalCode: e.target.value }
                                    : null
                                )
                              }
                            />
                            <button
                              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                              onClick={() =>
                                editingInfo && handleSave(editingInfo)
                              }
                            >
                              Save
                            </button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={5}
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
