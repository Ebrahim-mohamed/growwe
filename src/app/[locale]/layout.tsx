import { Inter, Mirza } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

// Base font for body text
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// Font for Arabic or stylized titles
const mirza = Mirza({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"], // include any weights you need
  display: "swap",
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={inter.className}
    >
      <body className="relative overflow-x-hidden">
        <NextIntlClientProvider locale={locale}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

// ✅ Export the Mirza className so you can use it anywhere
export { mirza };
