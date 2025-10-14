import * as z from "zod";

export const loginSchema = z.object({
  userName: z
    .string()
    .nonempty({ message: "userNameError" })
    .min(3, { message: "minUserNameError" }),
  password: z
    .string()
    .nonempty({ message: "passwordError" })
    .min(3, { message: "minPasswordError" }),
});
export type loginType = z.infer<typeof loginSchema>;

export const signUpSchema = z.object({
  userName: z
    .string()
    .nonempty({ message: "userNameError" })
    .min(3, { message: "minUserNameError" }),
  password: z
    .string()
    .nonempty({ message: "passwordError" })
    .min(3, { message: "minPasswordError" }),
  phone: z
    .string()
    .nonempty({ message: "phoneError" })
    .min(3, { message: "minPhoneError" }),
  email: z.email({ message: "emailError" }),
  address: z
    .string()
    .nonempty({ message: "addressError" })
    .min(10, { message: "minAddressError" }),
  country: z
    .string()
    .nonempty({ message: "countryError" })
    .min(3, { message: "minCountryError" }),
  city: z
    .string()
    .nonempty({ message: "cityError" })
    .min(3, { message: "minCityError" }),
  area: z
    .string()
    .nonempty({ message: "areaError" })
    .min(3, { message: "minAreaError" }),
});
export type signUpType = z.infer<typeof signUpSchema>;
