import { Hero } from "@/app/components/articles/Hero";
import { Section1 } from "@/app/components/articles/Section1";
import { Section2 } from "@/app/components/articles/Section2";
import { Section3 } from "@/app/components/articles/Section3";
import { Section4 } from "@/app/components/articles/Section4";
import { Section5 } from "@/app/components/articles/Section5";
import { Section6 } from "@/app/components/articles/Section6";
import { Section7 } from "@/app/components/articles/Section7";

export function NeededArticle({ articleNumber }: { articleNumber: string }) {
  return (
    <div>
      <Hero articleNumber={articleNumber} />
      <Section1 articleNumber={articleNumber} />
      <Section2 articleNumber={articleNumber} />
      <Section3 articleNumber={articleNumber} />
      <Section4 articleNumber={articleNumber} />
      <Section5 articleNumber={articleNumber} />
      <Section6 articleNumber={articleNumber} />
      <Section7 articleNumber={articleNumber} />
    </div>
  );
}
