import React from "react";
import Image from "next/image";

const page = async ({ params }) => {
  const { id } = params;

  const data = await fetch(`http://localhost:5000/api/news/${id}`);
  const newsData = await data.json();
  const news = newsData.news;

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* News Title */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{news.title}</h1>

      {/* Image */}
      <div className="mb-6">
        <Image
          height={700} // Should be an integer, not a string
          width={500} // Should be an integer, not a string
          src="/placeholder.png"
          alt="Placeholder Image"
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* News Category */}
      <span className="inline-block text-sm font-semibold text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
        {news.category}
      </span>

      {/* News Description */}
      <p className="text-lg mt-6 text-gray-700 mb-4">{news.description}</p>
    </div>
  );
};

export default page;
