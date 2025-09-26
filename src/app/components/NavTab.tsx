import { useLocale } from "next-intl";
import Link from "next/link";

export function NavTab({ name, to }: { name: string; to: string }) {
  const locale = useLocale();
  return (
    <Link
      href={`${locale}/${to}`}
      className="text-[1.5rem] text-white font-medium"
    >
      {name}
    </Link>
  );
}
