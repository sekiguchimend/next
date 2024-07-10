import Head from 'next/head';
import styles from './About.module.css';
import Header from '../comport/header';
import Footer from '../comport/footer';
export default function About() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Head>
          <title>私たちについて</title>
          <meta name="description" content="リアルタイムTVチャットについて" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            About
          </h1>

          <p className={styles.description}>
            私たちのリアルタイムTVチャットプラットフォームでは、視聴者が好きなテレビ番組や他の視聴者とリアルタイムで交流できます。
            スポーツの生中継、リアリティ番組、ドラマシリーズを視聴中に会話に参加して、瞬時に感想を共有しましょう
          </p>

          <h2 className={styles.subtitle}>特徴</h2>
          <ul className={styles.list}>
            <li>リアルタイムメッセージング</li>
            <li>ライブTVスケジュールとの連携</li>
            <li>ユーザープロフィールとカスタマイズ</li>
            <li>絵文字とリアクション</li>
            <li>安全な環境を確保するためのモデレーションツール</li>
          </ul>

          <h2 className={styles.subtitle}>私たちの使命</h2>
          <p className={styles.description}>
            私たちは、テレビ愛好家が繋がり、議論し、一緒にお気に入りの番組を楽しむことができる活気に満ちた包括的なコミュニティを創造することを目指しています。
            意味のある交流と共有の興奮を通じて、テレビ視聴体験を向上させることを目指しています。
          </p>
        </main>

        <footer className={styles.footer}>
          <p>&copy; 2024 リアルタイムTVチャット</p>
        </footer>
      </div>
      <Footer />
    </>
  );
}
