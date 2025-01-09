"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { News } from "@/utils/types";

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const observer = useRef();

  const fetchNews = async (pageNumber) => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:5000/api/news?page=${pageNumber}&limit=10`
      );
      const data = await response.json();
      console.log("news data: ", data);
      if (data.success) {
        setNews((prevNews) => [...prevNews, ...data.data]);
        setHasMore(data.data.length > 0); // Check if more news is available
      }
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(page);
  }, [page]);

  const lastNewsElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPage) => prevPage + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div className="p-4 mt-8">
      <div className="space-y-4">
        {news.map((item: News, index) => (
          <div key={item._id}>
            <Link
              href={`news/${item._id}`}
              ref={index === news.length - 1 ? lastNewsElementRef : null}
              className="block p-4 border rounded shadow-sm hover:bg-gray-50 transition"
            >
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16 flex-shrink-0">
                  {/* <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="rounded object-cover"
                /> */}
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h2>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {item.description}
                  </p>
                  <p className="text-xs text-gray-500 italic">
                    Category: {item.category}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
        {loading && <p className="text-center text-gray-500">Loading...</p>}
        {!hasMore && (
          <p className="text-center text-gray-500">No more news available.</p>
        )}
      </div>
    </div>
  );
};

export default NewsList;
