"use client";
import { useForm } from "react-hook-form";
import axios from "axios";
import { API_BASE_URL } from "@/utils/api";
import { signUpType, signUpSchema } from "@/app/schemas/schema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Signup() {
  const { register, handleSubmit } = useForm<signUpType>({
    resolver: zodResolver(signUpSchema),
  });

  async function onSignUp(data: signUpType) {
    try {
      await axios.post(`${API_BASE_URL}/auth/register`, data);
      alert("Registered. Please login.");
      window.location.href = "/login";
    } catch (err) {
      alert(err?.response?.data?.error || "Register failed");
      console.error(err);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSignUp)}>
      <input {...register("userName")} />
      <input {...register("password")} />
      <input {...register("phone")} />
      <input {...register("email")} />
      <button type="submit">Sign up</button>
    </form>
  );
}
