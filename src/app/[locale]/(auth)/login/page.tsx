"use client";
import { FormSection } from "@/app/components/auth/FormSection";
import { Hero } from "@/app/components/auth/Hero";
import { Input } from "@/app/components/contact/Input";
import { loginSchema, loginType } from "@/app/schemas/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function Login() {
  const t = useTranslations("auth.login");
  const locale = useLocale();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<loginType>({
    resolver: zodResolver(loginSchema),
  });
  function onLogin(data: loginType) {
    console.log(data);
  }
  return (
    <div>
      <Hero bg="login-hero" img="add-user" title={t("header")} />
      <FormSection header={t("header")} des={t("des")}>
        <div className="w-1/2 p-6 bg-white rounded-[1.5rem] ">
          <form
            onSubmit={handleSubmit(onLogin)}
            className="w-full items-center justify-center gap-[1.5rem] flex flex-col"
          >
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
            <button
              type="submit"
              className="bg-[#426B1F] text-[1.2rem] text-white font-medium px-4 py-2 block rounded-[1rem] cursor-pointer"
            >
              {t("button")}
            </button>
          </form>
          <div className="w-full flex items-center justify-between text-[1rem] mt-[2rem]">
            <p>
              {t("have'tAccount")}

              <Link
                href={`/${locale}/signup`}
                className="text-[#426B1F] text-[1.2rem]"
              >
                {t("signUp")}
              </Link>
            </p>
            <Link href={`/${locale}/forget`} className="text-[#426B1F]">
              {t("forget")}
            </Link>
          </div>
        </div>
      </FormSection>
    </div>
  );
}
