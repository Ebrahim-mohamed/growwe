import { Hero } from "@/app/components/articles/Hero";
import { Section1 } from "@/app/components/articles/Section1";
import { Section2 } from "@/app/components/articles/Section2";
import { Section3 } from "@/app/components/articles/Section3";
import { Section4 } from "@/app/components/articles/Section4";
import { Section5 } from "@/app/components/articles/Section5";
import { Section6 } from "@/app/components/articles/Section6";
import { Section7 } from "@/app/components/articles/Section7";
import Image from "next/image";

export function NeededArticle({ articleNumber }: { articleNumber: string }) {
  return (
    <div>
      <Hero articleNumber={articleNumber} />
      {articleNumber === "4" ? (
        <div className="relative">
          <div className="absolute right-0 top-[8%]  h-[60rem] aspect-[1/4]">
            <Image
              alt="article image"
              src="/articles/arti.png"
              width={500}
              height={500}
              className=" h-full"
            />
          </div>
          <div>
            <div className="max-[550px]:w-[90%]">
              <Section1 articleNumber={articleNumber} />
            </div>

            <Section2 articleNumber={articleNumber} />
          </div>
        </div>
      ) : (
        <div>
          {articleNumber !== "3" ? (
            <Section1 articleNumber={articleNumber} />
          ) : (
            <div className="relative">
              <div className="absolute right-0 top-[30%] max-[800px]:top-[20%] h-[50rem]  ">
                <Image
                  alt="article image"
                  src={`/articles/article3-section1.png`}
                  width={700}
                  height={700}
                  className="w-full"
                />
              </div>
              <div className="w-[98%] max-[950px]:w-[95%] max-[800px]:w-[90%] max-[550px]:w-[87%]">
                <Section1 articleNumber={articleNumber} />
              </div>
            </div>
          )}
          <Section2 articleNumber={articleNumber} />
        </div>
      )}
      <Section3 articleNumber={articleNumber} />
      <Section4 articleNumber={articleNumber} />
      <Section5 articleNumber={articleNumber} />
      <Section6 articleNumber={articleNumber} />
      <Section7 articleNumber={articleNumber} />
    </div>
  );
}
