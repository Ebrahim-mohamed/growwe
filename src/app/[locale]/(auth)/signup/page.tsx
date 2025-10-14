"use client";
import { FormSection } from "@/app/components/auth/FormSection";
import { Hero } from "@/app/components/auth/Hero";
import { Input } from "@/app/components/contact/Input";
import { signUpSchema, signUpType } from "@/app/schemas/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";

export default function Signup() {
  const t = useTranslations("auth.signup");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<signUpType>({
    resolver: zodResolver(signUpSchema),
  });
  function onSignUp(data: signUpType) {
    console.log(data);
  }
  return (
    <div>
      <Hero bg="login-hero" img="add-user" title={t("header")} />
      <FormSection header={t("header")} des={t("des")}>
        <div className="w-[60%] p-10 bg-white rounded-[1.5rem] ">
          <form
            onSubmit={handleSubmit(onSignUp)}
            className="w-full items-center justify-center gap-[1.5rem] flex flex-col"
          >
            <h2 className="text-[2rem] text-black font-medium mb-[1.5rem]">
              {t("personal")}
            </h2>
            <div className="flex gap-[3rem] w-full">
              <Input
                label={t("userNameLabel")}
                place={t("userNamePlaceholder")}
                errorMessage={
                  errors.userName?.message
                    ? t(errors.userName?.message)
                    : undefined
                }
                {...register("userName")}
              />
              <Input
                label={t("passwordLabel")}
                place={t("passwordPlaceholder")}
                type="password"
                errorMessage={
                  errors.password?.message
                    ? t(errors.password?.message)
                    : undefined
                }
                {...register("password")}
              />
            </div>
            <div className="flex gap-[3rem] w-full">
              <Input
                label={t("phoneLabel")}
                place={t("phonePlaceholder")}
                errorMessage={
                  errors.phone?.message ? t(errors.phone?.message) : undefined
                }
                {...register("phone")}
              />
              <Input
                label={t("emailLabel")}
                place={t("emailPlaceholder")}
                errorMessage={
                  errors.email?.message ? t(errors.email?.message) : undefined
                }
                {...register("email")}
              />
            </div>
            <h2 className="text-[2rem] text-black font-medium my-[1.5rem]">
              {t("shipping")}
            </h2>
            <div className="flex gap-[3rem] w-full">
              <Input
                label={t("addressLabel")}
                place={t("addressPlaceholder")}
                errorMessage={
                  errors.address?.message
                    ? t(errors.address?.message)
                    : undefined
                }
                {...register("address")}
              />
              <Input
                label={t("countryLabel")}
                place={t("countryPlaceholder")}
                errorMessage={
                  errors.country?.message
                    ? t(errors.country?.message)
                    : undefined
                }
                {...register("country")}
              />
            </div>
            <div className="flex gap-[3rem] w-full">
              <Input
                label={t("cityLabel")}
                place={t("cityPlaceholder")}
                errorMessage={
                  errors.city?.message ? t(errors.city?.message) : undefined
                }
                {...register("city")}
              />
              <Input
                label={t("areaLabel")}
                place={t("areaPlaceholder")}
                errorMessage={
                  errors.area?.message ? t(errors.area?.message) : undefined
                }
                {...register("area")}
              />
            </div>
            <button
              type="submit"
              className="bg-[#426B1F] text-[1.2rem] text-white font-medium px-6 py-2 block rounded-[4rem] cursor-pointer mt-[2rem]"
            >
              {t("button")}
            </button>
          </form>
        </div>
      </FormSection>
    </div>
  );
}
