import * as z from "zod";

// Schema for adding a new product
export const productSchema = z.object({
  nameEN: z.string().min(3, "Enter product name (English)"),
  nameAR: z.string().min(3, "Enter product name (Arabic)"),

  desEN: z.string().min(3, "Enter description (English)"),
  desAR: z.string().min(3, "Enter description (Arabic)"),

  price: z.coerce.number().min(0, "Price must be a number"),
  quantity: z.coerce.number().min(0, "Quantity must be a number"),

  typeEN: z.string().min(1, "Enter type (English)"),
  typeAR: z.string().min(1, "Enter type (Arabic)"),

  size: z.string().min(1, "Enter size"),
  unitEN: z.string().min(1, "Enter unit (English)"),
  unitAR: z.string().min(1, "Enter unit (Arabic)"),

  productImage: z.custom<FileList>(
    (file) => file instanceof FileList && file.length === 1,
    {
      message: "Please choose an image",
    }
  ),
});

// Schema for editing product (image OPTIONAL)
export const productEditSchema = productSchema.extend({
  productImage: z.custom<FileList>(
    (file) => file instanceof FileList,
    "Invalid file"
  ),
});

export type ProductFormType = z.infer<typeof productSchema>;
export type ProductEditFormType = z.infer<typeof productEditSchema>;
