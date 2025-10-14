import { ReactNode } from "react";
import { MostUseHeader } from "../MostUseHeader";

export function FormSection({
  header,
  des,
  children,
}: {
  header: string;
  des: string;
  children: ReactNode;
}) {
  return (
    <div className="p-[var(--section-Padding)] bg-[#FCF7F1] w-full">
      <MostUseHeader header={header} des={des} />
      <div className="flex items-center justify-center mt-[3rem]">
        {children}
      </div>
    </div>
  );
}
