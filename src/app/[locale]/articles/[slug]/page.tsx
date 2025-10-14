import { NeededArticle } from "../NeededArticle";

export default async function Article({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <NeededArticle articleNumber={slug} />;
}
