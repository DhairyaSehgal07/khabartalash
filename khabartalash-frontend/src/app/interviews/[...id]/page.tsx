import React from "react";

const page = async ({ params }: { params: Promise<{ id: string[] }> }) => {
  const { id } = await params;

  return (
    <>
      <h1>Interview ID: {id}</h1>
    </>
  );
};

export default page;
