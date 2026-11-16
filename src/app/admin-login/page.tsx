
import AdminLoginForm from "@/components/dashboard/AdminLoginForm";

export default function AdminLoginPage() {
  return (
    <html>
      <body>

    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#080B12] px-5">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="relative z-10 w-full flex justify-center items-center">
        <AdminLoginForm />
      </div>
    </main>
      </body>
    </html>
  );
}
