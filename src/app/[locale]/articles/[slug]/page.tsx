import { NeededArticle } from "../NeededArticle";

export default async function Article({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <NeededArticle
      articleNumber={
        slug === "Organic-Farming-Hydroponic"
          ? "1"
          : slug === "Mulching-in-Agriculture"
            ? "2"
            : slug === "Landscaping"
              ? "3"
              : slug === "Pruning-Plants"
                ? "4"
                : slug === "Irrigation"
                  ? "5"
                  : slug === "Fertilizers"
                    ? "6"
                    : ""
      }
    />
  );
}
