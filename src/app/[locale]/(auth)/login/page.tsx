"use client";
import { FormSection } from "@/app/components/auth/FormSection";
import { Hero } from "@/app/components/auth/Hero";
import { Input } from "@/app/components/contact/Input";
import { loginSchema, loginType } from "@/app/schemas/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";

const API_BASE_URL = "http://localhost:3002";

export default function Login() {
  const t = useTranslations("auth.login");
  const locale = useLocale();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<loginType>({ resolver: zodResolver(loginSchema) });

  async function onLogin(data: loginType) {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Login failed");
      }

      localStorage.setItem("accessToken", result.accessToken);
      router.push(`/${locale}`);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <Hero bg="login-hero" img="add-user" title={t("header")} />
      <FormSection header={t("header")} des={t("des")}>
        <div className="w-1/2 max-[1000px]:w-[60%] max-[600px]:w-[70%] max-[500px]:w-[80%] max-[450px]:w-[95%] p-6 bg-white rounded-[1.5rem]">
          <form
            onSubmit={handleSubmit(onLogin)}
            className="w-full items-center justify-center gap-[1.5rem] flex flex-col"
          >
            {error && (
              <div className="w-full p-3 bg-red-100 text-red-700 rounded-lg">
                {error}
              </div>
            )}

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
              disabled={loading}
              className="bg-[#426B1F] text-[1.2rem] text-white font-medium px-4 py-2 block rounded-[1rem] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Loading..." : t("button")}
            </button>
          </form>

          <div className="w-full flex items-center justify-between text-[1rem] mt-[2rem]">
            <p>
              {t("have'tAccount")}{" "}
              <Link
                href={`/${locale}/signup`}
                className="text-[#426B1F] text-[1.2rem]"
              >
                {t("signUp")}
              </Link>
            </p>
            {/* <Link href={`/${locale}/forget`} className="text-[#426B1F]">
              {t("forget")}
            </Link> */}
          </div>
        </div>
      </FormSection>
    </div>
  );
}
