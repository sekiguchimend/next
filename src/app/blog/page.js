import Link from "next/link";
import { client } from "../../lib/utils";
// データをフェッチする非同期関数
async function fetchBlogData() {
  const data = await client.get({ endpoint: "blog" });
  return data.contents;
}

export default async function Home() {
  const blog = await fetchBlogData();

  return (
    <>
      
      <div >
        <div >
          {blog.map((blogItem) => (
            <div key={blogItem.id} >
              <Link href={`/blog/${blogItem.id}`}>
                {/* サムネイル画像 */}
                {blogItem.image && (
                  <img src={blogItem.image.url} alt={blogItem.title} />
                )}
                {/* タイトル */}
                <div >{blogItem.title}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
