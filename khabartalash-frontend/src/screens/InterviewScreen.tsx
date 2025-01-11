import React from "react";
import { Interview } from "@/utils/types";
import Link from "next/link";

const InterviewScreen = async () => {
  const data = await fetch(`http://localhost:5000/api/interviews`);

  const interviewData = await data.json();

  const interviews = interviewData.data;

  return (
    <>
      <h1 className="p-4 text-4xl font-bold text-gray-900">
        Latest Interviews
      </h1>
      <div className="p-4">
        <div className="space-y-4">
          {interviews.map((interview: Interview) => (
            <div className="border-2" key={interview._id}>
              <Link
                className="block rounded border p-4 shadow-sm transition hover:bg-gray-50"
                href={`/interviews/${interview._id}`}
              >
                <div
                  key={interview._id}
                  className="flex flex-col items-start md:flex-row md:space-x-4"
                >
                  <div className="relative h-16 w-16 flex-shrink-0">
                    {/* Placeholder for potential image */}
                    {/* <Image
                      src={interview.imageUrl}
                      alt={interview.title}
                      fill
                      className="rounded object-cover"
                    /> */}
                  </div>
                  <div className="mt-4 flex-1 text-left md:mt-0">
                    <h2 className="text-lg font-semibold text-gray-800">
                      {interview.title}
                    </h2>
                    {/* Date */}
                    <p className="mb-2 text-xs italic text-gray-500">
                      Published on: {interview.date}
                    </p>
                    {/* Description */}
                    <p className="line-clamp-2 text-sm text-gray-600">
                      {interview.description}
                    </p>
                    {/* Video Link */}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default InterviewScreen;
