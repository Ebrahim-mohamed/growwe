"use client";

import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { NewBox } from "./NewBox";

type News = {
  _id: string;
  titleEN: string;
  titleAR: string;
  desEN: string;
  desAR: string;
  newsImage: string;
  link: string;
};

const API_BASE = "http://growwe.com/api";

export function NewsSection() {
  const locale = useLocale();
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/news`)
      .then((res) => res.json())
      .then(setNews)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="p-[var(--section-Padding)] text-center">
        Loading news...
      </div>
    );
  }

  return (
    <div className="p-[var(--section-Padding)] bg-[#E9EFE9]">
      <h1 className="text-[3rem] text-center font-medium mb-[4rem]">
        {locale === "en" ? "Latest News" : "اخر الاخبار"}
      </h1>
      {news.length === 0 ? (
        <p className="text-center text-gray-500 mt-4">
          {locale === "en"
            ? "There is no news until now"
            : "لا يوجد اخبار حتي الان"}
        </p>
      ) : (
        <div className="flex items-stretch justify-between gap-[1rem] max-[550px]:flex-col max-[550px]:items-center">
          {news.map((n) => (
            <NewBox key={n._id} news={n} />
          ))}
        </div>
      )}
    </div>
  );
}
