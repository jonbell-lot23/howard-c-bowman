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
    <div className="prose m-auto mt-16 mb-64 font-serif text-lg px-8 md:mt-24 md:text-base">
      {mdxSource && (
        <MDXRemote
          compiledSource={mdxSource.compiledSource}
          scope={undefined}
          frontmatter={undefined}
        />
      )}
    </div>
  );
}
