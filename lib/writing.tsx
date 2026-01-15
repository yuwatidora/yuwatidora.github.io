import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content", "writings");

type Post = {
  slug: string;
  frontmatter: {
    title?: string;
    date?: string;
  };
  content: string;
};

export function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".md"));
}

export function getPostBySlug(slug: string): Post | null {
  if (!slug || typeof slug !== 'string') {
    return null;
  }
  
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    frontmatter: data,
    content,
  };
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is Post => Boolean(post));

  return posts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date || "1970-01-01").getTime();
    const dateB = new Date(b.frontmatter.date || "1970-01-01").getTime();
    return dateB - dateA;
  });
}

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
