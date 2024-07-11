import Link from "next/link";
import { client } from "../../lib/utils";
import Header from "../comport/header";
import styles from "./Home.module.css"
import Footer from "../comport/footer";
interface BlogItem {
  id: string;
  title: string;
  image?: {
    url: string;
  };
}

async function fetchBlogData(): Promise<BlogItem[]> {
  const data = await client.get({ endpoint: "blog" });
  return data.contents;
}

export default async function Home() {
  const blog: BlogItem[] = await fetchBlogData();

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.blogGrid}>
          {blog.map((blogItem: BlogItem) => (
            <div key={blogItem.id} className={styles.blogItem}>
              <Link href={`/blog/${blogItem.id}`} className={styles.blogLink}>
                {blogItem.image && (
                  <img
                    src={blogItem.image.url}
                    alt={blogItem.title}
                    className={styles.blogImage}
                  />
                )}
                <div className={styles.blogTitle}>{blogItem.title}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}