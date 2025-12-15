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
import { ProductForm, ProductFormType } from "./ProductForm";
import Link from "next/link";

type Product = {
  _id: string;
  productImage: string; // filename from backend
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
  category: string;
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const API_BASE = "http://localhost:3001"; // backend URL

  // Fetch products
  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${API_BASE}/products`);
      if (!res.ok) throw new Error("Failed to fetch products");
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error(err);
      alert("Error fetching products");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Add or Update
  const handleAddOrEdit = async (formData: FormData, productId?: string) => {
    setIsSubmitting(true);
    try {
      const url = productId
        ? `${API_BASE}/products/${productId}`
        : `${API_BASE}/products`;
      const method = productId ? "PUT" : "POST";

      const res = await fetch(url, { method, body: formData });
      if (!res.ok) {
        const err = await res.json();
        alert("Error: " + err.error);
        return;
      }

      alert(productId ? "Product updated!" : "Product added!");
      setEditingProduct(null);
      setOpen(false);
      await fetchProducts();
    } catch (err) {
      console.error(err);
      alert("Failed to save product");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Delete product
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    try {
      const res = await fetch(`${API_BASE}/products/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete product");
      alert("Product deleted!");
      await fetchProducts();
    } catch (err) {
      console.error(err);
      alert("Failed to delete product");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6 flex flex-col gap-6">
      {/* Header + Add Product */}
      <div className="flex items-center gap-6 w-full">
        <h1 className="text-2xl font-semibold text-gray-800">
          Products Management
        </h1>

        <Dialog
          open={open}
          onOpenChange={(val) => {
            setOpen(val);
            if (!val) setEditingProduct(null);
          }}
        >
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
                    ? ({
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
                        category: editingProduct.category as "soil" | "mulch", // assert type
                      } as Partial<ProductFormType> & { productImage?: string })
                    : undefined
                }
                productId={editingProduct?._id}
                isEditing={!!editingProduct}
                onSubmit={handleAddOrEdit}
                previewImage={
                  editingProduct?.productImage
                    ? `${API_BASE}/uploads/${editingProduct.productImage}`
                    : undefined
                }
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Loading */}
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
                  <TableHead className="px-4 py-2">Category</TableHead>
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
                          href={`${API_BASE}/uploads/${p.productImage}`}
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
                      <TableCell className="px-4 py-2">{p.category}</TableCell>
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
                          onClick={() => handleDelete(p._id)}
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
