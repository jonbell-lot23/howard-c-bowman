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
    <div className="prose m-auto mt-24 font-serif text-lg">
      {mdxSource && (
        <MDXRemote
          compiledSource={""}
          scope={undefined}
          frontmatter={undefined}
          {...(mdxSource ? mdxSource : {})}
        />
      )}
    </div>
  );
}
