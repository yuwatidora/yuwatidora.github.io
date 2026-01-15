import Link from "next/link";
import { getAllPosts } from "../../../lib/writing";
import SideMenu from "../components/SideMenu/SideMenu";
import styles from "./writing.module.css";

export default function WritingIndex() {
  const posts = getAllPosts();

  return (
    <div className={styles.viewpage}>
      <div className={styles.side_menu_space}>
        <SideMenu />
      </div>
      <main className={styles.writingpage}>
        <p className={styles.heading}>writings</p>
        <div className={styles.intro}>
          {posts.length > 0 ? (
            posts.map((post, index) => (
              <div key={post.slug}>
                <article style={{ marginBottom: "2rem" }}>
                  <h2>
                    <Link href={`/writing/${post.slug}`}>
                      {post.frontmatter.title || post.slug}
                    </Link>
                  </h2>
                  <p style={{ opacity: 0.7, marginBottom: "0.5rem" }}>
                    {post.frontmatter.date}
                  </p>
                  <p>
                    {post.content.slice(0, 120)}...
                  </p>
                </article>
                {index < posts.length - 1 && <hr className={styles.post_divider} />}
              </div>
            ))
          ) : (
            <p>No posts found. Add markdown files to the content/writing directory.</p>
          )}
        </div>
      </main>
    </div>
  );
}
