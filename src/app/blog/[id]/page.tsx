// app/blog/[id]/page.tsx
import { Metadata } from 'next';
import { client } from '../../../lib/utils';
import styles from './Lib.module.css';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  image: {
    url: string;
  };
  body: string;
}

// 日付を日本語表記に変換する関数
const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(dateString).toLocaleDateString('ja-JP', options);
};

interface BlogIdProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: BlogIdProps): Promise<Metadata> {
  const { id } = params;
  const data = await client.get({ endpoint: 'blog', contentId: id });

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://next-rho-rust.vercel.app/blog/${data.id}`,
      images: [
        {
          url: data.image.url,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      description: data.description,
      images: data.image.url,
      site: '@SekiguchiS39523',
    },
  };
}

const BlogId = async ({ params }: BlogIdProps) => {
  const { id } = params;
  const data = await client.get({ endpoint: 'blog', contentId: id });

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>               
          <div className={styles.post}>
            <p className={styles.publishedAt}>公開日：{formatDate(data.publishedAt)}</p>
            <h3 className={styles.customTitle}>{data.title}</h3>
            <img className={styles.image} src={data.image.url} alt={data.title} />
            <div dangerouslySetInnerHTML={{ __html: data.body }}></div>
          </div>
        </main>
        
        <div className={styles.tate}>
        <aside className={styles.profile}>
  <img src="/telecha.jpeg" alt="プロフィール画像" />
  <h4>テレチャ</h4>
  <div className={styles.hrContainer}>
    <hr className={styles.hr} />
  </div>
  <p>テレビを見ながらリアルタイムチャットで皆の反応を見れるSNS</p>
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
};

export default BlogId;
