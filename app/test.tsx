"use client";

// app/page.tsx
import { useEffect, useState } from "react";
import { MDXRemote } from "next-mdx-remote";

export default function Page() {
  const [mdxSource, setMdxSource] = useState(null);

  useEffect(() => {
    fetch("/api/mdx")
      .then((res) => res.json())
      .then((data) => setMdxSource(data.mdxSource))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="prose">
      <h2>hi</h2>
    </div>
  );
}
