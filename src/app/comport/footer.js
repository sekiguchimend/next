import Styles from './footer.module.css';

export default function Footer() {
    return (
        <>
            <div className={Styles.footer}>
                <div className={Styles.insta}>
                    <h3 className={Styles.h3}>Twitter</h3>
                    <div className={Styles.hrContainer}>
                        <hr className={Styles.hr} />
                    </div>
                    <p>投稿した記事についての投稿をしています。Twitterはフォロー返しているのでぜひフォローしてください。</p>
                    <img src='' />
                </div>
                <div className={Styles.employe}>
                    <h3 className={Styles.h3}>Insta</h3>
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
                        右上の三点を押すとダウンロードまたはインストールという選択肢があるのでそこをクリックすると当サイトを
                        スマホのホーム画面やパソコンのホーム画面にアプリのように表示されます。
                    </p>
                </div>
            </div>
        </>
    );
}