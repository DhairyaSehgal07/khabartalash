import React from "react";
import { BASE_URL } from "@/utils/const";
import Image from "next/image";
import { Interview } from "@/utils/types";

const page = async ({ params }: { params: Promise<{ id: string[] }> }) => {
  const { id } = await params;

  const data = await fetch(`${BASE_URL}/interviews/${id}`);
  const interviewsData = await data.json();
  const interview: Interview = interviewsData.interview;

  return (
    <>
      <div className="mx-auto max-w-4xl p-4">
        {/* Interview Title */}
        <h1 className="mb-4 text-4xl font-bold text-gray-800">
          {interview.title}
        </h1>

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

        {/* Interview Date */}
        <p className="mb-4 text-sm italic text-gray-500">
          Published on:{" "}
          <span className="font-semibold text-gray-800"> {interview.date}</span>
        </p>

        {/* Video Link */}
        <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-600">
          {interview.videoLink}
        </span>

        {/* Interview Description */}
        <p className="mb-4 mt-6 text-lg text-gray-700">
          {interview.description}
        </p>
      </div>
    </>
  );
};

export default page;
