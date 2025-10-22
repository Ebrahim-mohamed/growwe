"use client";
import { useTranslations } from "next-intl";
import { MostUseHeader } from "../MostUseHeader";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "./Input";
import { RadioDiv } from "./RadioDiv";
import { InfoBox } from "./InfoBox";
const contactSchema = z.object({
  firstName: z.string().min(3, { message: "firstNameError" }),
  lastName: z.string().min(3, { message: "lastNameError" }),
  email: z.email({ message: "emailError" }),
  phoneNumber: z.string().length(11, { message: "phoneNumberError" }),
  subject: z.string().min(1, { message: "subjectError" }),
  message: z.string().min(50, { message: "messageError" }),
});
type contactData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
};
const options = ["opt1", "opt2", "opt3"];
const info = ["phone", "mail", "location"];
export function FormSection() {
  const t = useTranslations("contact.formSection");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });
  function submit(data: contactData) {
    console.log(data);
  }
  return (
    <div className="w-full p-[var(--section-Padding)] flex items-center flex-col justify-center gap-[1.5rem]">
      <MostUseHeader header={t("header")} des={t("des")} />
      <div className="flex items-stretch justify-between w-full rounded-[0.6rem] shadow-[0_0_60px_30px_rgba(0,0,0,0.03)] gap-[3rem] overflow-hidden py-[1.5rem] pl-[1.5rem] pr-[5rem] max-[550px]:flex-col">
        <div className="w-[45%] bg-[#426B1F] text-white py-[1.5rem] px-[2.2rem] rounded-[0.6rem] max-[550px]:w-full">
          <div className="mb-[4rem] ">
            <h2 className="text-[2.5rem] font-semibold">
              {t("contactInfoHeader")}
            </h2>
            <p className="text-[#C9C9C9] text-[1.5rem] font-normal">
              {t("contactInfoDes")}
            </p>
          </div>
          <div className="flex flex-col gap-[3rem]">
            {info.map((inf) => (
              <InfoBox icon={inf} name={t(inf)} key={inf} />
            ))}
          </div>
        </div>
        <div className="flex-1 p-[1.5rem]">
          <form
            onSubmit={handleSubmit(submit)}
            className="flex flex-col gap-[4rem]"
          >
            <div className="flex w-full gap-[3rem]">
              <Input
                label={t("firstLabel")}
                {...register("firstName")}
                errorMessage={
                  errors.firstName?.message && t(errors.firstName?.message)
                }
                place={t("firstPlace")}
              />
              <Input
                label={t("lastLabel")}
                {...register("lastName")}
                errorMessage={
                  errors.lastName?.message && t(errors.lastName?.message)
                }
                place={t("lastPlace")}
              />
            </div>
            <div className="flex w-full gap-[3rem]">
              <Input
                label={t("emailLabel")}
                {...register("email")}
                errorMessage={errors.email?.message && t(errors.email?.message)}
                place={t("emailPlace")}
              />
              <Input
                label={t("phoneLabel")}
                {...register("phoneNumber")}
                errorMessage={
                  errors.phoneNumber?.message && t(errors.phoneNumber?.message)
                }
                place={t("phonePlace")}
              />
            </div>
            <div className="relative">
              <h1 className="text-black text-[1.1rem] font-semibold mb-[1.2rem]">
                {t("subjectHeader")}
              </h1>
              <div className="flex items-center justify-between w-full">
                {options.map((opt) => (
                  <RadioDiv
                    value={t(opt)}
                    key={t(opt)}
                    {...register("subject")}
                  />
                ))}
              </div>
              {errors.subject?.message && (
                <p className="absolute bottom-[-1.5rem] left-0  text-red-800 font-medium text-[0.8rem]">
                  {t(errors.subject?.message)}
                </p>
              )}
            </div>
            <Input
              label={t("messageLabel")}
              {...register("message")}
              errorMessage={
                errors.message?.message && t(errors.message?.message)
              }
              place={t("messagePlace")}
            />
            <div className="w-full flex justify-end mt-[4rem]">
              <button
                type="submit"
                className="py-[0.5rem] px-[2.2rem] rounded-[0.3rem] bg-black text-white text-[1rem] font-semibold shadow-[0_0_14px_0_rgba(0,0,0,0.12)] w-fit hover:cursor-pointer"
              >
                {t("button")}
              </button>
            </div>
          </form>
        </div>
      </div>
      <p className="text-black text-[1.5rem]">{t("footer")}</p>
    </div>
  );
}
