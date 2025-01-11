import { useState, useEffect } from "react";

const useFetchNews = (initialPage = 1, limit = 10, category = "all") => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNews = async (page = currentPage) => {
    setLoading(true);
    setError(null);

    try {
      // Add category to the query string
      const categoryParam = category !== "all" ? `&category=${category}` : "";
      const response = await fetch(
        `http://localhost:5000/api/news?page=${page}&limit=${limit}${categoryParam}`,
      );
      const data = await response.json();

      if (data.success) {
        setNews((prevNews) =>
          page === 1 ? data.data : [...prevNews, ...data.data],
        );
        setTotalPages(data.totalPages);
        setCurrentPage(page);
      } else {
        throw new Error(data.message || "Failed to fetch news.");
      }
    } catch (err) {
      console.error(err);
      setError(err.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(initialPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialPage, limit, category]); // Re-run if category changes

  const loadMore = () => {
    if (currentPage < totalPages && !loading) {
      fetchNews(currentPage + 1);
    }
  };

  return {
    news,
    loading,
    error,
    currentPage,
    totalPages,
    loadMore,
  };
};

export default useFetchNews;
