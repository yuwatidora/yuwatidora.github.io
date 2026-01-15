import { notFound } from "next/navigation";
import { getPostBySlug, markdownToHtml } from "../../../../lib/writing";
import SideMenu from "../../components/SideMenu/SideMenu";
import styles from "../writing.module.css";
import { getAllPosts } from "../../../../lib/writing";

export async function generateStaticParams() {
  const posts = getAllPosts(); // fetch all posts at build time
  return posts.map(post => ({
    slug: post.slug, // must match the dynamic route [slug]
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { frontmatter, content } = post;
  const html = await markdownToHtml(content);

  return (
    <div className={styles.viewpage}>
      <div className={styles.side_menu_space}>
        <SideMenu />
      </div>
      <article className={styles.writingpage} style={{ maxWidth: "100ch" }}>
        <h1>{frontmatter.title}</h1>
        <p style={{ opacity: 0.7 }}>{frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </div>
  );
}
