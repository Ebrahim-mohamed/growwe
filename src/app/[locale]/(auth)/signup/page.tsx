"use client";

import { useForm } from "react-hook-form";
import axios, { AxiosError } from "axios";
import { zodResolver } from "@hookform/resolvers/zod";

import { API_BASE_URL } from "@/utils/api";
import { signUpType, signUpSchema } from "@/app/schemas/schema";

type SignUpErrorResponse = {
  error?: string;
};

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<signUpType>({
    resolver: zodResolver(signUpSchema),
  });

  async function onSignUp(data: signUpType) {
    try {
      await axios.post(`${API_BASE_URL}/auth/register`, data);
      alert("Registered successfully. Please login.");
      window.location.href = "/login";
    } catch (error) {
      const err = error as AxiosError<SignUpErrorResponse>;
      const message =
        err.response?.data?.error || err.message || "Register failed";
      alert(message);
      console.error(err);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSignUp)}>
      <input {...register("userName")} placeholder="Username" />
      {errors.userName && <p>{errors.userName.message}</p>}

      <input {...register("password")} type="password" placeholder="Password" />
      {errors.password && <p>{errors.password.message}</p>}

      <input {...register("phone")} placeholder="Phone" />
      {errors.phone && <p>{errors.phone.message}</p>}

      <input {...register("email")} type="email" placeholder="Email" />
      {errors.email && <p>{errors.email.message}</p>}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Signing up..." : "Sign up"}
      </button>
    </form>
  );
}
