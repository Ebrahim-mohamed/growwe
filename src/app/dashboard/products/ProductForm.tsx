"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  productSchema,
  productEditSchema,
  ProductFormType,
  ProductEditFormType,
} from "@/schema/productSchema";
import { ProjectInput } from "./ProductInput";

type Props = {
  isEditing?: boolean;
  defaultValues?: Partial<ProductFormType>;
  onSubmit?: (formData: FormData) => void | Promise<void>;
  isSubmitting?: boolean;
};

export function ProductForm({
  isEditing = false,
  defaultValues = {},
  onSubmit,
  isSubmitting = false,
}: Props) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ProductFormType>({
    // resolver: zodResolver(isEditing ? productEditSchema : productSchema),
    defaultValues: defaultValues as ProductFormType,
  });

  const watchImage = watch("productImage");

  async function internalSubmit(data: ProductFormType | ProductEditFormType) {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (key === "productImage") return;

      formData.append(key, String(value));
    });

    if (
      data.productImage &&
      data.productImage instanceof FileList &&
      data.productImage.length > 0
    ) {
      formData.append("productImage", data.productImage[0]);
    }

    if (onSubmit) {
      await onSubmit(formData);
      return;
    }
  }

  return (
    <form
      className="flex flex-col gap-6 w-full"
      // onSubmit={handleSubmit(internalSubmit)}
    >
      <ProjectInput
        label="Product Name (EN)"
        {...register("nameEN")}
        errorMessage={errors.nameEN?.message}
      />

      <ProjectInput
        label="Product Name (AR)"
        {...register("nameAR")}
        errorMessage={errors.nameAR?.message}
      />

      <ProjectInput
        label="Description (EN)"
        {...register("desEN")}
        errorMessage={errors.desEN?.message}
      />

      <ProjectInput
        label="Description (AR)"
        {...register("desAR")}
        errorMessage={errors.desAR?.message}
      />

      <ProjectInput
        type="number"
        label="Price"
        {...register("price")}
        errorMessage={errors.price?.message}
      />

      <ProjectInput
        type="number"
        label="Quantity"
        {...register("quantity")}
        errorMessage={errors.quantity?.message}
      />

      <ProjectInput
        label="Type (EN)"
        {...register("typeEN")}
        errorMessage={errors.typeEN?.message}
      />

      <ProjectInput
        label="Type (AR)"
        {...register("typeAR")}
        errorMessage={errors.typeAR?.message}
      />

      <ProjectInput
        label="Size"
        {...register("size")}
        errorMessage={errors.size?.message}
      />

      <ProjectInput
        label="Unit (EN)"
        {...register("unitEN")}
        errorMessage={errors.unitEN?.message}
      />

      <ProjectInput
        label="Unit (AR)"
        {...register("unitAR")}
        errorMessage={errors.unitAR?.message}
      />

      <ProjectInput
        type="file"
        label={`Product Image${isEditing ? " (optional)" : ""}`}
        {...register("productImage")}
        accept="image/*"
        errorMessage={errors.productImage?.message}
      />

      {watchImage instanceof FileList && watchImage.length > 0 && (
        <img
          src={URL.createObjectURL(watchImage[0])}
          className="w-32 h-32 object-cover rounded-md mx-auto"
        />
      )}

      <button
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
