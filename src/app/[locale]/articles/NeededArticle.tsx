import { Hero } from "@/app/components/articles/Hero";
import { Section1 } from "@/app/components/articles/Section1";
import { Section2 } from "@/app/components/articles/Section2";
import { Section3 } from "@/app/components/articles/Section3";
import { Section6 } from "@/app/components/articles/Section6";
import { Section7 } from "@/app/components/articles/Section7";

export function NeededArticle({ articleNumber }: { articleNumber: string }) {
  return (
    <div>
      <Hero articleNumber={articleNumber} />
      <Section1 articleNumber={articleNumber} />
      <Section2 articleNumber={articleNumber} />
      <Section3 articleNumber={articleNumber} />
      <Section6 articleNumber={articleNumber} />
      <Section7 articleNumber={articleNumber} />
    </div>
  );
}
