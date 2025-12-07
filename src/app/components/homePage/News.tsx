import { useLocale } from "next-intl";
import { NewBox } from "./NewBox";

const news = [
  {
    headerEn: "New technology awarness.",
    headerAr: " بشسبسيتمبنسيمبشسبستنيباتن",
    praEn:
      "Delightful remarkably mr on announcing themselves entreaties favourable. ",
    praAr: "شسيبتنمشسيتبنمشستنميبتنمشسيتبمسينبمسشيبتمستيبنمتسينمبتسينمبتمسي",
    image: "1",
    link: "#",
  },
  {
    headerEn: "Client meeting discussion.",
    headerAr: " بشسبسيتمبنسيمبشسبستنيباتن",
    praEn:
      "About to in so terms voice at. Equal an would is found seems of. The particular friendship",
    praAr: "شسيبتنمشسيتبنمشستنميبتنمشسيتبمسينبمسشيبتمستيبنمتسينمبتسينمبتمسي",
    image: "2",
    link: "#",
  },
  {
    headerEn: "Fast growth for business",
    headerAr: " بشسبسيتمبنسيمبشسبستنيباتن",
    praEn:
      "It more shed went up is roof if loud case. Delay music in lived noise an. Beyond genius really enough.",
    praAr: "شسيبتنمشسيتبنمشستنميبتنمشسيتبمسينبمسشيبتمستيبنمتسينمبتسينمبتمسي",
    image: "3",
    link: "#",
  },
];
export function NewsSection() {
  const locale = useLocale();
  return (
    <div className="p-[var(--section-Padding)] bg-[#E9EFE9]">
      <h1 className="text-[3rem] text-center font-medium mb-[4rem]">
        {locale === "en" ? "Latest News" : "اخر الاخبار"}
      </h1>
      <div className=" flex items-stretch justify-between gap-[1rem] max-[550px]:flex-col max-[550px]:items-center">
        {news.map((n) => (
          <NewBox key={n.link} {...n} />
        ))}
      </div>
    </div>
  );
}
