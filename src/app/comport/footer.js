import Styles from './footer.module.css';
import Link from 'next/link';
export default function Footer() {
    return (
        <>
            <div className={Styles.footer}>
                <div className={Styles.insta}>
                   <Link href="https://x.com/SekiguchiS39523">
                    <h3 className={Styles.h3}>Twitter</h3>
                    </Link>
                    <div className={Styles.hrContainer}>
                        <hr className={Styles.hr} />
                    </div>
                    <p>投稿した記事についての投稿をしています。Twitterはフォロー返しているのでぜひフォローしてください。</p>
                    <img src='' />
                </div>
                <div className={Styles.employe}>
                    <Link href="">
                    <h3 className={Styles.h3}>Insta</h3>
                    </Link>
                    <div className={Styles.hrContainer}>
                        <hr className={Styles.hr} />
                    </div>
                    <p>
                        日常を投稿してます。普段何をしているのかとか気になる方は見に来てください。
                    </p>
                    <img src='' />
                </div>
                <div className={Styles.pwa}>
                    
                    <h3 className={Styles.h3}>アプリ化</h3>
                   
                    <div className={Styles.hrContainer}>
                        <hr className={Styles.hr} />
                    </div>
                    <p>
                        当サイトはpwa化されておりホーム画面に追加できます。
                    </p>
                </div>
            </div>
        </>
    );
}