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
import Link from "next/link";
import { NewsForm, NewsFormType } from "./NewsForm";

type News = {
  _id: string;
  newsImage: string;
  titleEN: string;
  titleAR: string;
  desEN: string;
  desAR: string;
  link: string;
};

export default function NewsPage() {
  const [newsList, setNewsList] = useState<News[]>([]);
  const [editingNews, setEditingNews] = useState<News | null>(null);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const API_BASE = "https://api.growwe.com"; // Backend URL

  const fetchNews = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${API_BASE}/news`);
      if (!res.ok) throw new Error("Failed to fetch news");
      const data = await res.json();
      setNewsList(data);
    } catch (err) {
      console.error(err);
      alert("Failed to load news");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleAddOrEdit = async (formData: FormData) => {
    setIsSubmitting(true);
    try {
      const url = editingNews
        ? `${API_BASE}/news/${editingNews._id}`
        : `${API_BASE}/news`;
      const method = editingNews ? "PUT" : "POST";

      const res = await fetch(url, { method, body: formData });
      if (!res.ok) throw new Error("Failed to save news");

      alert(editingNews ? "News updated!" : "News added!");
      setEditingNews(null);
      setOpen(false);
      await fetchNews();
    } catch (err) {
      console.error(err);
      alert("Failed to save news");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this news item?")) return;
    try {
      const res = await fetch(`${API_BASE}/news/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete news");
      alert("News deleted!");
      await fetchNews();
    } catch (err) {
      console.error(err);
      alert("Failed to delete news");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6 flex flex-col gap-6">
      <div className="flex items-center gap-6 w-full">
        <h1 className="text-2xl font-semibold text-gray-800">
          News Management
        </h1>

        <Dialog
          open={open}
          onOpenChange={(isOpen) => {
            setOpen(isOpen);
            if (!isOpen) setEditingNews(null);
          }}
        >
          <DialogTrigger asChild>
            <button
              onClick={() => setOpen(true)}
              className="px-5 py-2.5 bg-green-600 text-white font-medium text-base rounded-xl hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              + Add News
            </button>
          </DialogTrigger>

          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold">
                {editingNews ? "Edit News" : "Add a New News Item"}
              </DialogTitle>
            </DialogHeader>

            <div className="mt-4">
              <NewsForm
                isEditing={!!editingNews}
                isSubmitting={isSubmitting}
                defaultValues={
                  editingNews
                    ? {
                        titleEN: editingNews.titleEN,
                        titleAR: editingNews.titleAR,
                        desEN: editingNews.desEN,
                        desAR: editingNews.desAR,
                        link: editingNews.link,
                      }
                    : undefined
                }
                previewImage={
                  editingNews?.newsImage
                    ? `${API_BASE}/uploads/${editingNews.newsImage}`
                    : undefined
                }
                onSubmit={handleAddOrEdit}
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {isLoading && (
        <div className="w-full text-center py-10 text-gray-500">
          Loading news...
        </div>
      )}

      {!isLoading && (
        <div className="w-full border rounded-2xl shadow-lg bg-white overflow-hidden">
          <div className="max-h-[calc(100vh-12rem)] overflow-auto">
            <Table className="text-[0.95rem] border-collapse w-full">
              <TableHeader className="sticky top-0 bg-gray-50 z-20 shadow-sm">
                <TableRow className="border-b-2 border-gray-200">
                  <TableHead className="px-4 py-2">Image</TableHead>
                  <TableHead className="px-4 py-2">Title (EN)</TableHead>
                  <TableHead className="px-4 py-2">Title (AR)</TableHead>
                  <TableHead className="px-4 py-2">Description (EN)</TableHead>
                  <TableHead className="px-4 py-2">Description (AR)</TableHead>
                  <TableHead className="px-4 py-2">Link</TableHead>
                  <TableHead className="px-4 py-2 text-center">Edit</TableHead>
                  <TableHead className="px-4 py-2 text-center">
                    Delete
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {newsList.length > 0 ? (
                  newsList.map((n) => (
                    <TableRow key={n._id} className="hover:bg-blue-50">
                      <TableCell className="px-4 py-2">
                        <Link
                          href={`${API_BASE}/uploads/${n.newsImage}`}
                          target="_blank"
                          className="text-green-600 hover:underline"
                        >
                          View Image
                        </Link>
                      </TableCell>

                      <TableCell className="px-4 py-2">{n.titleEN}</TableCell>
                      <TableCell className="px-4 py-2">{n.titleAR}</TableCell>
                      <TableCell className="px-4 py-2">{n.desEN}</TableCell>
                      <TableCell className="px-4 py-2">{n.desAR}</TableCell>
                      <TableCell className="px-4 py-2">{n.link}</TableCell>

                      <TableCell className="px-4 py-2 text-center">
                        <button
                          onClick={() => {
                            setEditingNews(n);
                            setOpen(true);
                          }}
                          className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                          Edit
                        </button>
                      </TableCell>

                      <TableCell className="px-4 py-2 text-center">
                        <button
                          onClick={() => handleDelete(n._id)}
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
                      colSpan={8}
                      className="text-center py-10 text-gray-400"
                    >
                      No news found. Click Add News to start.
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
