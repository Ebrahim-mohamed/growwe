"use client";

import { useTranslations } from "next-intl";
import { MostUseHeader } from "../MostUseHeader";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "./Input";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { isValidPhoneNumber } from "react-phone-number-input";

// ==================== ZOD SCHEMA ====================
const contactSchema = z.object({
  firstName: z.string().min(3, { message: "firstNameError" }),
  lastName: z.string().min(3, { message: "lastNameError" }),
  email: z.string().email({ message: "emailError" }),
  phoneNumber: z
    .string()
    .min(1, { message: "phoneNumberError" })
    .refine((val) => isValidPhoneNumber(val), { message: "phoneNumberError" }),
  subject: z.string().min(1, { message: "subjectError" }),
  message: z.string().min(50, { message: "messageError" }),
});

type ContactData = z.infer<typeof contactSchema>;

// ==================== COMPONENT ====================
export function FormSection() {
  const t = useTranslations("contact.formSection");

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      phoneNumber: "",
    },
  });

  function submit(data: ContactData) {
    console.log("FORM DATA:", data);
  }

  return (
    <div className="w-full p-[var(--section-Padding)] flex items-center flex-col justify-center gap-[1.5rem]">
      <MostUseHeader header={t("header")} des={t("des")} />

      <div className="flex items-stretch justify-between w-[60%] max-[1200px]:w-[80%] rounded-[0.6rem] shadow-[0_0_60px_30px_rgba(0,0,0,0.03)] gap-[3rem] overflow-hidden py-[1.5rem] pl-[1.5rem] pr-[5rem] max-[550px]:pr-[1.5rem] max-[550px]:flex-col max-[550px]:items-center">
        <div className="flex-1 p-[1.5rem]">
          <form
            onSubmit={handleSubmit(submit)}
            className="flex flex-col gap-[4rem]"
          >
            {/* FIRST + LAST NAME */}
            <div className="flex w-full gap-[3rem]">
              <Input
                label={t("firstLabel")}
                {...register("firstName")}
                errorMessage={
                  errors.firstName?.message && t(errors.firstName.message)
                }
                place={t("firstPlace")}
              />
              <Input
                label={t("lastLabel")}
                {...register("lastName")}
                errorMessage={
                  errors.lastName?.message && t(errors.lastName.message)
                }
                place={t("lastPlace")}
              />
            </div>

            {/* EMAIL + PHONE */}
            <div className="flex w-full gap-[3rem]">
              <Input
                label={t("emailLabel")}
                {...register("email")}
                errorMessage={errors.email?.message && t(errors.email.message)}
                place={t("emailPlace")}
              />

              {/* PHONE NUMBER */}
              <div className="w-full flex flex-col gap-[0.5rem] relative">
                <label className="text-black font-medium">
                  {t("phoneLabel")}
                </label>

                <Controller
                  name="phoneNumber"
                  control={control}
                  render={({ field }) => (
                    <PhoneInput
                      {...field}
                      defaultCountry="SA"
                      placeholder={t("phonePlace")}
                      className="w-full outline-none"
                    />
                  )}
                />

                <div className="w-full h-[0.02rem] bg-[#8D8D8D] mt-1"></div>

                {errors.phoneNumber?.message && (
                  <p className="absolute bottom-[-1.5rem] text-red-800 font-medium text-[0.8rem]">
                    {t(errors.phoneNumber.message)}
                  </p>
                )}
              </div>
            </div>

            {/* MESSAGE */}
            <Input
              label={t("messageLabel")}
              {...register("message")}
              errorMessage={
                errors.message?.message && t(errors.message.message)
              }
              place={t("messagePlace")}
            />

            {/* BUTTON */}
            <div className="w-full flex justify-end mt-[4rem]">
              <button
                type="submit"
                className="py-[0.5rem] px-[2.2rem] rounded-[0.3rem] bg-black text-white text-[1rem] font-semibold shadow-[0_0_14px_0_rgba(0,0,0,0.12)] hover:cursor-pointer"
              >
                {t("button")}
              </button>
            </div>
          </form>
        </div>
      </div>

      <p className="text-black text-[1.3rem]">{t("footer")}</p>
    </div>
  );
}
