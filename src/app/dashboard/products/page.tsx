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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ProductForm } from "./ProductForm";
import Link from "next/link";

type Product = {
  _id: string;
  productImage: string; // image filename or URL
  nameEN: string;
  nameAR: string;
  desEN: string;
  desAR: string;
  price: number;
  quantity: number;
  typeEN: string;
  typeAR: string;
  size: string;
  unitEN: string;
  unitAR: string;
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch products
  const fetchProducts = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const res = await fetch("https://api.ebmksa.com/products");
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Add or Edit product
  const handleAddOrEdit = async (formData: FormData) => {
    setIsSubmitting(true);
    try {
      const url = editingProduct
        ? `https://api.ebmksa.com/products/${editingProduct._id}`
        : "https://api.ebmksa.com/products";
      const method = editingProduct ? "PUT" : "POST";

      const res = await fetch(url, { method, body: formData });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      alert(editingProduct ? "Product updated!" : "Product added!");
      setEditingProduct(null);
      setOpen(false);
      await fetchProducts();
    } catch (error) {
      console.error(error);
      alert("Failed to save product");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Delete product
  const onDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    try {
      const res = await fetch(`https://api.ebmksa.com/products/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      alert("Product deleted!");
      await fetchProducts();
    } catch (error) {
      console.error(error);
      alert("Failed to delete product");
    }
  };

  const handleDialogChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) setEditingProduct(null);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6 flex flex-col gap-6">
      {/* Header + Add Product */}
      <div className="flex items-center gap-6 w-full">
        <h1 className="text-2xl font-semibold text-gray-800">
          Products Management
        </h1>

        <Dialog open={open} onOpenChange={handleDialogChange}>
          <DialogTrigger asChild>
            <button
              onClick={() => setOpen(true)}
              className="px-5 py-2.5 bg-green-600 text-white font-medium text-base rounded-xl hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              + Add Product
            </button>
          </DialogTrigger>

          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold">
                {editingProduct ? "Edit Product" : "Add a New Product"}
              </DialogTitle>
            </DialogHeader>

            <div className="mt-4">
              <ProductForm
                defaultValues={
                  editingProduct
                    ? {
                        nameEN: editingProduct.nameEN,
                        nameAR: editingProduct.nameAR,
                        desEN: editingProduct.desEN,
                        desAR: editingProduct.desAR,
                        price: editingProduct.price,
                        quantity: editingProduct.quantity,
                        typeEN: editingProduct.typeEN,
                        typeAR: editingProduct.typeAR,
                        size: editingProduct.size,
                        unitEN: editingProduct.unitEN,
                        unitAR: editingProduct.unitAR,
                        productImage: undefined,
                      }
                    : undefined
                }
                onSubmit={handleAddOrEdit}
                isSubmitting={isSubmitting}
                isEditing={!!editingProduct}
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="w-full text-center py-10 text-gray-500">
          Loading products...
        </div>
      )}

      {/* Table */}
      {!isLoading && (
        <div className="w-full border rounded-2xl shadow-lg bg-white overflow-hidden">
          <div className="max-h-[calc(100vh-12rem)] overflow-auto">
            <Table className="text-[0.95rem] border-collapse w-full">
              <TableHeader className="sticky top-0 bg-gray-50 z-20 shadow-sm">
                <TableRow className="border-b-2 border-gray-200">
                  <TableHead className="px-4 py-2">Image</TableHead>
                  <TableHead className="px-4 py-2">Name (EN)</TableHead>
                  <TableHead className="px-4 py-2">Name (AR)</TableHead>
                  <TableHead className="px-4 py-2">Description (EN)</TableHead>
                  <TableHead className="px-4 py-2">Description (AR)</TableHead>
                  <TableHead className="px-4 py-2 text-center">Price</TableHead>
                  <TableHead className="px-4 py-2 text-center">
                    Quantity
                  </TableHead>
                  <TableHead className="px-4 py-2">Type (EN)</TableHead>
                  <TableHead className="px-4 py-2">Type (AR)</TableHead>
                  <TableHead className="px-4 py-2">Size</TableHead>
                  <TableHead className="px-4 py-2">Unit (EN)</TableHead>
                  <TableHead className="px-4 py-2">Unit (AR)</TableHead>
                  <TableHead className="px-4 py-2 text-center">Edit</TableHead>
                  <TableHead className="px-4 py-2 text-center">
                    Delete
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {products.length > 0 ? (
                  products.map((p) => (
                    <TableRow key={p._id} className="hover:bg-blue-50">
                      <TableCell className="px-4 py-2">
                        <Link
                          href={`https://api.ebmksa.com/uploads/${p.productImage}`}
                          target="_blank"
                          className="text-green-600 hover:underline"
                        >
                          View Image
                        </Link>
                      </TableCell>

                      <TableCell className="px-4 py-2">{p.nameEN}</TableCell>
                      <TableCell className="px-4 py-2">{p.nameAR}</TableCell>
                      <TableCell className="px-4 py-2">{p.desEN}</TableCell>
                      <TableCell className="px-4 py-2">{p.desAR}</TableCell>
                      <TableCell className="px-4 py-2 text-center">
                        {p.price}
                      </TableCell>
                      <TableCell className="px-4 py-2 text-center">
                        {p.quantity}
                      </TableCell>
                      <TableCell className="px-4 py-2">{p.typeEN}</TableCell>
                      <TableCell className="px-4 py-2">{p.typeAR}</TableCell>
                      <TableCell className="px-4 py-2">{p.size}</TableCell>
                      <TableCell className="px-4 py-2">{p.unitEN}</TableCell>
                      <TableCell className="px-4 py-2">{p.unitAR}</TableCell>

                      <TableCell className="px-4 py-2 text-center">
                        <button
                          onClick={() => {
                            setEditingProduct(p);
                            setOpen(true);
                          }}
                          className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                          Edit
                        </button>
                      </TableCell>

                      <TableCell className="px-4 py-2 text-center">
                        <button
                          onClick={() => onDelete(p._id)}
                          className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700"
                        >
                          Delete
                        </button>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={14}
                      className="text-center py-10 text-gray-400"
                    >
                      No products found. Click Add Product to start.
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
