// app/mdx-loader.server.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

export async function loadMDX(fileName: string) {
  const filePath = path.join(process.cwd(), fileName);
  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);

  const mdxSource = await serialize(content, { scope: data });
  return { mdxSource, frontMatter: data };
}
