import { useTranslations } from "next-intl";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Section7({ articleNumber }: { articleNumber: string }) {
  const t = useTranslations(`template${articleNumber}.section7`);
  return (
    <div className="p-[var(--section-Padding)] bg-[#FCF7F1] flex flex-col gap-[3.5rem]">
      <div>
        <h1 className="text-[#426B1F] text-[2.5rem] font-bold">{t("head")}</h1>
      </div>
      <Accordion className="w-full" type="single" collapsible>
        {Array.from({
          length: articleNumber === "1" ? 11 : 4,
        }).map((_, index) => (
          <AccordionItem key={index} value={`${index}`}>
            <AccordionTrigger className="text-[1.8rem] font-bold">
              {" "}
              {index + 1} : {t(`title${index + 1}`)}
            </AccordionTrigger>
            <AccordionContent className="text-[1.8rem] ">
              {t(`pra${index + 1}`)}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
