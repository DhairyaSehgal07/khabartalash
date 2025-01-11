import NewsList from "@/components/NewsList";
import React from "react";

const HomeScreen = () => {
  return (
    <>
      <h1 className="text-4xl p-4 font-bold text-gray-900">Latest News</h1>
      <NewsList />
    </>
  );
};

export default HomeScreen;
