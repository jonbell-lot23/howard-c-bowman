"use client";

// app/page.tsx
import { useEffect, useState } from "react";
import { MDXRemote } from "next-mdx-remote";

interface MdxSource {
  compiledSource: string;
  // Add other properties from the API response if needed
}

export default function Page() {
  // Use the MdxSource type for the state
  const [mdxSource, setMdxSource] = useState<MdxSource | null>(null);

  useEffect(() => {
    fetch("/api/mdx")
      .then((res) => res.json())
      .then((data) => {
        // Ensure that the data is of the MdxSource type
        if (
          data &&
          data.mdxSource &&
          typeof data.mdxSource.compiledSource === "string"
        ) {
          setMdxSource(data.mdxSource);
        } else {
          console.error("Invalid data format");
        }
      })
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
