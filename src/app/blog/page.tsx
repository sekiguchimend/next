import Link from "next/link";
import { client } from "../../lib/utils";
import Header from "../comport/header";

// blogItemの型定義
interface BlogItem {
  id: string;
  title: string;
  image?: {
    url: string;
  };
}

// データをフェッチする非同期関数
async function fetchBlogData(): Promise<BlogItem[]> {
  const data = await client.get({ endpoint: "blog" });
  return data.contents;
}

export default async function Home() {
  const blog: BlogItem[] = await fetchBlogData();

  return (
    <>
      <Header />
      <div>
        <div>
          {blog.map((blogItem: BlogItem) => (
            <div key={blogItem.id}>
              <Link href={`/blog/${blogItem.id}`}>
                
                  {/* サムネイル画像 */}
                  {blogItem.image && (
                    <img src={blogItem.image.url} alt={blogItem.title} />
                  )}
                  {/* タイトル */}
                  <div>{blogItem.title}</div>
         
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
