"use client";

import React, { useRef, useCallback } from "react";
import Link from "next/link";
import useFetchNews from "@/hooks/useFetchNews";
import { News } from "@/utils/types";

const NewsList = () => {
  const { news, loading, error, loadMore, currentPage, totalPages } =
    useFetchNews(1, 10, "all");
  const observer = useRef<IntersectionObserver | null>(null);

  const lastNewsElementRef = useCallback(
    (node: HTMLAnchorElement | null) => {
      if (loading || currentPage >= totalPages) return; // Ensure no calls if loading or no more news
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadMore(); // Fetch next page of news
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, currentPage, totalPages, loadMore],
  );

  return (
    <>
      <div className="p-4">
        <div className="space-y-4">
          {news.map((item: News, index) => (
            <div key={item._id}>
              <Link
                href={`news/${item._id}`}
                ref={index === news.length - 1 ? lastNewsElementRef : null}
                className="block rounded border p-4 shadow-sm transition hover:bg-gray-50"
              >
                <div className="flex flex-col items-start md:flex-row md:space-x-4">
                  <div className="relative h-16 w-16 flex-shrink-0">
                    {/* Uncomment this block if you have valid image URLs */}
                    {/* <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="rounded object-cover"
                  /> */}
                  </div>
                  <div className="mt-4 flex-1 text-left md:mt-0">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h2>
                    <p className="line-clamp-2 text-sm text-gray-600">
                      {item.description}
                    </p>
                    <p className="text-xs italic text-gray-500">
                      Category: {item.category}
                    </p>
                    <p className="text-xs text-gray-500">{item.date}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
          {loading && <p className="text-center text-gray-500">Loading...</p>}
          {!loading && error && (
            <p className="text-center text-red-500">{error}</p>
          )}
          {currentPage >= totalPages && (
            <p className="text-center text-gray-500">No more news available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default NewsList;
