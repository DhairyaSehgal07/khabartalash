import React from "react";
import Image from "next/image";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  const data = await fetch(`http://localhost:5000/api/news/${id}`);
  const newsData = await data.json();
  const news = newsData.news;

  return (
    <div className="mx-auto max-w-4xl p-4">
      {/* News Title */}
      <h1 className="mb-4 text-4xl font-bold text-gray-800">{news.title}</h1>

      {/* Image */}
      <div className="mb-6">
        <Image
          height={700} // Should be an integer, not a string
          width={500} // Should be an integer, not a string
          src="/placeholder.png"
          alt="Placeholder Image"
          className="h-64 w-full rounded-lg object-cover shadow-md"
        />
      </div>

      {/* News Category */}
      <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-600">
        {news.category}
      </span>

      {/* News Date */}
      <p className="mt-4 text-sm italic text-gray-500">
        Published on:{" "}
        <span className="font-semibold text-gray-800"> {news.date}</span>
      </p>

      {/* News Description */}
      <p className="mb-4 mt-6 text-lg text-gray-700">{news.description}</p>
    </div>
  );
};

export default page;
