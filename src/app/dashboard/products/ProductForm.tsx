"use client";

import { useForm } from "react-hook-form";
import { ProjectInput } from "./ProductInput";

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
  productImage?: FileList;
};

type Props = {
  isEditing?: boolean;
  defaultValues?: Partial<ProductFormType>;
  previewImage?: string; // existing image from backend
  onSubmit?: (formData: FormData) => void | Promise<void>;
  isSubmitting?: boolean;
};

export function ProductForm({
  isEditing = false,
  defaultValues = {},
  previewImage,
  onSubmit,
  isSubmitting = false,
}: Props) {
  const { register, watch, handleSubmit } = useForm<ProductFormType>({
    defaultValues: defaultValues as ProductFormType,
  });

  const watchImage = watch("productImage");

  const internalSubmit = async (data: ProductFormType) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (key === "productImage") return;
      formData.append(key, String(value));
    });

    if (data.productImage && data.productImage.length > 0) {
      formData.append("productImage", data.productImage[0]);
    }

    if (onSubmit) await onSubmit(formData);
  };

  return (
    <form
      className="flex flex-col gap-6 w-full"
      onSubmit={handleSubmit(internalSubmit)}
    >
      <ProjectInput label="Product Name (EN)" {...register("nameEN")} />
      <ProjectInput label="Product Name (AR)" {...register("nameAR")} />
      <ProjectInput label="Description (EN)" {...register("desEN")} />
      <ProjectInput label="Description (AR)" {...register("desAR")} />
      <ProjectInput type="number" label="Price" {...register("price")} />
      <ProjectInput type="number" label="Quantity" {...register("quantity")} />
      <ProjectInput label="Type (EN)" {...register("typeEN")} />
      <ProjectInput label="Type (AR)" {...register("typeAR")} />
      <ProjectInput label="Size" {...register("size")} />
      <ProjectInput label="Unit (EN)" {...register("unitEN")} />
      <ProjectInput label="Unit (AR)" {...register("unitAR")} />
      <ProjectInput
        type="file"
        label={`Product Image${isEditing ? " (optional)" : ""}`}
        {...register("productImage")}
        accept="image/*"
      />

      {/* Preview */}
      {watchImage && watchImage.length > 0 ? (
        <img
          src={URL.createObjectURL(watchImage[0])}
          className="w-32 h-32 object-cover rounded-md mx-auto"
        />
      ) : previewImage ? (
        <img
          src={previewImage}
          className="w-32 h-32 object-cover rounded-md mx-auto"
        />
      ) : null}

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
