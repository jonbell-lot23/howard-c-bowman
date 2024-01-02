// pages/api/mdx.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), "app", "book.mdx");
  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);

  const mdxSource = await serialize(content, { scope: data });
  res.status(200).json({ mdxSource });
}
