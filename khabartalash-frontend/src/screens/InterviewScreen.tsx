// import Link from "next/link";
import React from "react";
import { Interview } from "@/utils/types";
import Link from "next/link";

const InterviewScreen = async () => {
  const data = await fetch(`http://localhost:5000/api/interviews`);

  const interviewData = await data.json();

  const interviews = interviewData.data;

  return (
    <>
      <div className="p-4 mt-8">
        <div className="space-y-4">
          {interviews.map((interview: Interview) => (
            <div className="border-2" key={interview._id}>
              <Link
                className="cursor-pointer"
                href={`/interviews/${interview._id}`}
              >
                <div
                  key={interview._id}
                  className="flex items-center space-x-4"
                >
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
                      {interview.title}
                    </h2>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {interview.description}
                    </p>
                    <p className="text-xs text-gray-500 italic">
                      Category: {interview.videoLink}
                    </p>
                    <p>{interview._id}</p>
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
