import React from "react";
import { notFound } from "next/navigation";

interface ContactPageProps {
  searchParams: Promise<{
    id?: string;
    name?: string;
  }>;
}

const ContactPage = async ({ searchParams }: ContactPageProps) => {
  const { id, name } = await searchParams;

  if (!id && !name) {
    notFound();
  }

  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <div style={{ padding: "20px", fontSize: "18px" }}>
      <h1>Contact Page</h1>
      <p>
        <strong>ID:</strong> {id ?? "Not provided"}
      </p>
      <p>
        <strong>Name:</strong> {name ?? "Not provided"}
      </p>
    </div>
  );
};

export default ContactPage;
