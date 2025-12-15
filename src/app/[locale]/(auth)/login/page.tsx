"use client";
import { useForm } from "react-hook-form";
import axios from "axios";
import { API_BASE_URL } from "@/utils/api";
import { setAccessToken } from "@/lib/auth";
import { loginSchema, loginType } from "@/app/schemas/schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Login() {
  const { register, handleSubmit } = useForm<loginType>({
    resolver: zodResolver(loginSchema),
  });

  async function onLogin(data: loginType) {
    try {
      const res = await axios.post(`${API_BASE_URL}/auth/login`, data, {
        withCredentials: true,
      });
      setAccessToken(res.data.accessToken);
      // redirect or reload
      window.location.href = "/";
    } catch (err) {
      alert(err?.response?.data?.error || "Login failed");
      console.error(err);
    }
  }

  return (
    <form onSubmit={handleSubmit(onLogin)}>
      <input {...register("userName")} />
      <input {...register("password")} type="password" />
      <button type="submit">Login</button>
    </form>
  );
}
