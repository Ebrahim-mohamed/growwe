import { useTranslations } from "next-intl";

export function NeededArticle({ articleNumber }: { articleNumber: string }) {
  const t = useTranslations(`gardening.articles.article${articleNumber}`);
  return <div>{t("header")}</div>;
}
