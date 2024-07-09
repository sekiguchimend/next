/**
 * v0 by Vercel.
 * @see https://v0.dev/t/AfXYpLG
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import Header from "./comport/header"
export default function Component() {
  return (
    <section className="w-full">
     <Header />
      <main className="container mx-auto px-4 md:px-6 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">リアルタイムテレビ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <img
                alt="Top Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/televi.png"
                width="600"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-2">リアルタイムチャット</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
               テレビを見ながらリアルタイムチャットに参加して皆の反応を見てみよう！
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="/about" prefetch={false}>
                Read More
              </Link>
            </div>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">月曜～水曜</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <img
                alt="Politics Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/getu.jpeg"
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">月曜から夜更かし</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                毎週月曜MCマツコデラックスの番組
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="getu" prefetch={false}>
               リアルタイムチャットに参加
              </Link>
            </div>
            <div>
              <img
                alt="Politics Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/ka.jpeg"
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">踊る!!さんま御殿！</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                毎週火曜日MCさんまの番組
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="ka" prefetch={false}>
               リアルタイムチャットに参加する
              </Link>
            </div>
            <div>
              <img
                alt="Politics Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/sui.jpeg"
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">水曜日のダウンタウン</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                毎週水曜日MCダウンタウンの番組
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="sui" prefetch={false}>
               リアルタイムチャットに参加する
              </Link>
            </div>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">木曜から日曜</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <img
                alt="Business Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/moku.jpeg"
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">テレビ千鳥</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                毎週木曜日MC千鳥の番組
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="moku" prefetch={false}>
               リアルタイムチャットに参加する
              </Link>
            </div>
            <div>
              <img
                alt="Business Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/kin.jpeg"
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">金曜ロードショー</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
                毎週金曜日の番組
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="kin" prefetch={false}>
                リアルタイムチャットに参加する
              </Link>
            </div>
            <div>
              <img
                alt="Business Story Image"
                className="w-full h-64 object-cover object-center rounded-lg"
                height="400"
                src="/niti.jpeg"
                width="600"
              />
              <h3 className="text-xl font-bold mb-2 mt-4">世界の果てまで行ってQ</h3>
              <p className="text-zinc-500 dark:text-zinc-400">
              毎週日曜日の番組
              </p>
              <Link className="text-blue-500 hover:text-blue-700 mt-4" href="niti" prefetch={false}>
                リアルタイムチャットに参加する
              </Link>
            </div>
          </div>
        </section>
       
      </main>
    </section>
  )
}