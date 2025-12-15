"use client";

import { useForm } from "react-hook-form";
import { ProductInput } from "./ProductInput";
import { useState, useEffect } from "react";

export type ProductFormType = {
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
  category: "soil" | "mulch";
  productImage?: FileList;
};

type Props = {
  isEditing?: boolean;
  defaultValues?: Partial<ProductFormType> & { productImage?: string };
  productId?: string;
  previewImage?: string;
  onSubmit: (formData: FormData, productId?: string) => Promise<void>;
};

export function ProductForm({
  isEditing = false,
  defaultValues = {},
  productId,
  previewImage: initialPreview,
  onSubmit,
}: Props) {
  const { register, watch, handleSubmit, reset } = useForm<ProductFormType>({
    defaultValues: defaultValues
      ? {
          ...defaultValues,
          productImage: undefined, // FileList cannot be pre-filled
        }
      : undefined,
  });

  const watchImage = watch("productImage");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | undefined>(
    initialPreview
  );

  useEffect(() => {
    if (watchImage && watchImage.length > 0) {
      setPreviewImage(URL.createObjectURL(watchImage[0]));
    }
  }, [watchImage]);

  const internalSubmit = async (data: ProductFormType) => {
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (key === "productImage") return;
        if (value !== undefined) formData.append(key, String(value));
      });

      if (data.productImage && data.productImage.length > 0) {
        formData.append("productImage", data.productImage[0]);
      }

      await onSubmit(formData, productId);
      reset();
      setPreviewImage(undefined);
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      className="flex flex-col gap-6 w-full"
      onSubmit={handleSubmit(internalSubmit)}
    >
      <ProductInput label="Product Name (EN)" {...register("nameEN")} />
      <ProductInput label="Product Name (AR)" {...register("nameAR")} />
      <ProductInput label="Description (EN)" {...register("desEN")} />
      <ProductInput label="Description (AR)" {...register("desAR")} />
      <ProductInput type="number" label="Price" {...register("price")} />
      <ProductInput type="number" label="Quantity" {...register("quantity")} />
      <ProductInput label="Type (EN)" {...register("typeEN")} />
      <ProductInput label="Type (AR)" {...register("typeAR")} />
      <ProductInput label="Size" {...register("size")} />
      <ProductInput label="Unit (EN)" {...register("unitEN")} />
      <ProductInput label="Unit (AR)" {...register("unitAR")} />

      <div className="flex flex-col gap-2">
        <label className="text-black text-[1rem] font-normal">Category</label>
        <select
          {...register("category", { required: true })}
          className="bg-[#A0ACB440] w-full border rounded-lg p-3"
        >
          <option value="">Select category</option>
          <option value="soil">Soil</option>
          <option value="mulch">Mulch</option>
        </select>
      </div>

      <ProductInput
        type="file"
        label={`Product Image${isEditing ? " (optional)" : ""}`}
        {...register("productImage")}
        accept="image/*"
      />

      {previewImage && (
        <img
          src={previewImage}
          className="w-32 h-32 object-cover rounded-md mx-auto"
        />
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="px-6 py-2 bg-[#4082BF] text-white rounded-md w-fit mx-auto"
      >
        {isSubmitting
          ? "Submitting..."
          : isEditing
          ? "Update Product"
          : "Add Product"}
      </button>
    </form>
  );
}
