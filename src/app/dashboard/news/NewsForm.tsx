"use client";

import { useForm } from "react-hook-form";
import { NewsInput } from "./NewsInput";

export type NewsFormType = {
  titleEN: string;
  titleAR: string;
  desEN: string;
  desAR: string;
  link: string;
  newsImage?: FileList;
};

type Props = {
  isEditing?: boolean;
  defaultValues?: Partial<NewsFormType>;
  previewImage?: string;
  onSubmit?: (formData: FormData) => void | Promise<void>;
  isSubmitting?: boolean;
};

export function NewsForm({
  isEditing = false,
  defaultValues = {},
  previewImage,
  onSubmit,
  isSubmitting = false,
}: Props) {
  const { register, watch, handleSubmit } = useForm<NewsFormType>({
    defaultValues: defaultValues as NewsFormType,
  });

  const watchImage = watch("newsImage");

  const internalSubmit = async (data: NewsFormType) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (key === "newsImage") return;
      formData.append(key, String(value));
    });

    if (data.newsImage && data.newsImage.length > 0) {
      formData.append("newsImage", data.newsImage[0]);
    }

    if (onSubmit) await onSubmit(formData);
  };

  return (
    <form
      className="flex flex-col gap-6 w-full"
      onSubmit={handleSubmit(internalSubmit)}
    >
      <NewsInput label="Title (EN)" {...register("titleEN")} />
      <NewsInput label="Title (AR)" {...register("titleAR")} />
      <NewsInput label="Description (EN)" {...register("desEN")} />
      <NewsInput label="Description (AR)" {...register("desAR")} />
      <NewsInput label="Link" {...register("link")} />
      <NewsInput
        type="file"
        label={`News Image${isEditing ? " (optional)" : ""}`}
        {...register("newsImage")}
        accept="image/*"
      />

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
          ? "Update News"
          : "Add News"}
      </button>
    </form>
  );
}
