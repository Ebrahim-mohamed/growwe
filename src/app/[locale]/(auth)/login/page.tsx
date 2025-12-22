"use client";

import { useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { zodResolver } from "@hookform/resolvers/zod";

import { API_BASE_URL } from "@/utils/api";
import { setAccessToken } from "@/lib/auth";
import { loginSchema, loginType } from "@/app/schemas/schema";

type LoginErrorResponse = {
  error?: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<loginType>({
    resolver: zodResolver(loginSchema),
  });

  async function onLogin(data: loginType) {
    try {
      const res = await axios.post(`${API_BASE_URL}/auth/login`, data, {
        withCredentials: true,
      });

      setAccessToken(res.data.accessToken);
      window.location.href = "/";
    } catch (error) {
      const err = error as AxiosError<LoginErrorResponse>;

      const message =
        err.response?.data?.error || err.message || "Login failed";

      alert(message);
      console.error(err);
    }
  }

  return (
    <form onSubmit={handleSubmit(onLogin)}>
      <input {...register("userName")} placeholder="Username" />
      {errors.userName && <p>{errors.userName.message}</p>}

      <input {...register("password")} type="password" placeholder="Password" />
      {errors.password && <p>{errors.password.message}</p>}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
