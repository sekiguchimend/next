// blog/[id].js
import { client } from "../../../lib/utils";
import styles from "./Lib.module.css";
import Link from "next/link";
import Head from "next/head"; 

// 日付を日本語表記に変換する関数
const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "long", // 月の長い形式（例：1月）
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString("ja-JP", options);
};

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = await client.get({ endpoint: "blog", contentId: id });
    return {
        props: {
            blog: data,
        },
    };
};

export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: "blog" });
    const paths = data.contents.map((content) => `/blog/${content.id}`);
    return {
        paths,
        fallback: false,
    };
};


export default function BlogId({ blog }) {
    console.log('Meta Description:', blog.description);

    return (
        <>
         <Head>
        {/* ページタイトル */}
        <title>{blog.title}</title>
        
        {/* ページの説明 */}
        <meta name="description" content={blog.description} />
        
        {/* ビューポートの設定 */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* 文字エンコーディング */}
        <meta charSet="UTF-8" />
        
        {/* 検索エンジンにインデックスされないようにするには（必要に応じて） */}
        {/* <meta name="robots" content="noindex, nofollow" /> */}
        
        {/* Open Graph プロトコル（ソーシャルメディアでの共有時に使用される） */}
        <meta property="og:title" content={blog.title} />
  <meta property="og:description" content={blog.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://youtubernews.vercel.app/blog/${blog.id}`} />
        <meta property="og:image" content={`https://youtubernews.vercel.app/${blog.image}`}/>

        {/* Twitter カード（ソーシャルメディアでの共有時に使用される） */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
  <meta name="twitter:description" content={blog.description} />
        <meta name="twitter:image" content={`https://youtubernews.vercel.app/${blog.image}`} />
        <meta name="twitter:site" content="@SekiguchiS39523" />
        {/* favicon の設定 */}
        <link rel="icon" href="/ai.png" />
        <link rel="apple-touch-icon" href="/ai.png" />
        
        {/* キャノニカル URL（重複コンテンツを避けるため） */}
        <link rel="canonical" href={`https://youtubernews.vercel.app/blog/${blog.id}`} />

        {/* 他の必要なメタタグ */}
        <meta name="author" content="AIエンジニア" />
        
        {/* その他の外部リソースやスクリプトのリンク */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
        
        {/* プラグインやサードパーティのメタタグ（例：Google Analytics） */}
        {/* Google Analytics */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXX-X"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-XXXXXXX-X');
          `}
        </script> */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5463240386609584"
     crossorigin="anonymous"></script>
      </Head>
        <div className={styles.container}>
          
            <main className={styles.main}>               
                <div className={styles.post}>
                <p className={styles.publishedAt}>公開日：{formatDate(blog.publishedAt)}</p>
                <h3 className={styles.customTitle}>{blog.title}</h3>
                <img className={styles.image} src={blog.image.url} alt={blog.title} />

                    <div dangerouslySetInnerHTML={{ __html: blog.body }}></div>
                </div>
            </main>
            
            <div className={styles.tate}>
                <aside className={styles.profile}>
                    <img src="" />
                    <h4>AIエンジニア</h4>
                    <div className={styles.hrContainer}>
                        <hr className={styles.hr} />
                    </div>
                    
                    <p>AIだけで0から初学者がTwitterを作れるようになるAIスクールを運営中。</p>
                    {/* ここにプロフィールの内容を表示 */}
                </aside>
                
                <div className={styles.matome}>
                    <Link href="/" legacyBehavior>
                        <a>他の記事</a>
                    </Link>
                </div>
            </div>
        </div>
        </>
    );
    
}
