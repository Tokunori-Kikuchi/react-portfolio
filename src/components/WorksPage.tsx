import React from 'react'
import { Link } from 'react-router-dom';

const WorksPage = () => {
  return (
    <section id="works" className="section works">
        <div className="section-inner">
            <h2 className="section-head">
                <span className="section-head-main">Works -</span>
                <span className="section-head-sub">実績紹介 </span>
            </h2>
            <p className="section-lead-text">
                これまで制作したWebサイトです。また、当サイトも自ら制作していますので実績の一つとして御覧ください。<br />
                ※閲覧時に求められるIDとパスワードは「basic」と入力してください。
            </p>
            <div className="section-contents">
                <div className="swiper">
                    <ul className="works-list swiper-wrapper">
                        <li className="works-item swiper-slide">
                            <div className="works-item-img">
                                <img src="/images/img_works001.jpg" alt="ポートフォリオサイト"/>
                            </div>
                            <h3 className="works-item-name">ポートフォリオサイト</h3>
                            <Link to="#" target="_blank" className="works-item-link">詳しく見る</Link>
                        </li>
                        <li className="works-item swiper-slide">
                            <div className="works-item-img">
                                <img src="/images/img_works002.jpg" alt="仮想スイーツ店公式サイト（サンプル）"/>
                            </div>
                            <h3 className="works-item-name">仮想スイーツ店公式サイト（サンプル）</h3>
                            <Link to="https://webwisewords.net//works/sweet_delight/index.html" target="_blank" className="works-item-link">詳しく見る</Link>
                        </li>
                        <li className="works-item swiper-slide">
                            <div className="works-item-img">
                                <img
                                src="/images/img_works003.jpg"
                                alt="仮想企業The_CompanyのLP"
                                />
                            </div>
                            <h3 className="works-item-name">仮想企業のLP</h3>
                            <Link to="https://webwisewords.net/works/The_Company/index.html" target="_blank" className="works-item-link">詳しく見る</Link>
                        </li>
                        <li className="works-item swiper-slide">
                            <div className="works-item-img">
                                <img src="/images/img_works004.jpg" alt="デイトラにて教材提供頂いたsobolon様のLP"/>
                            </div>
                            <h3 className="works-item-name">sobolon様(デイトラ制作物)</h3>
                            <Link to="https://webwisewords.net/works/sobolon/index.html" target="_blank" className="works-item-link">詳しく見る</Link>
                        </li>
                        <li className="works-item swiper-slide">
                            <div className="works-item-img">
                                <img src="/images/img_works005.jpg" alt="仮想企業Sample_CorpのLP"/>
                            </div>
                            <h3 className="works-item-name">仮想企業のLP</h3>
                            <Link to="https://webwisewords.net/works/Sample_Corp/index.html" target="_blank" className="works-item-link">詳しく見る</Link>
                        </li>
                        <li className="works-item swiper-slide">
                            <div className="works-item-img">
                                <img src="/images/img_works006.jpg" alt="仮想企業PacificmallのWebサイト"/>
                            </div>
                            <h3 className="works-item-name">仮想企業のWebサイト（WordPress）</h3>
                            <Link to="https://totonou-code.com/pacificmall/" target="_blank" className="works-item-link">詳しく見る</Link>
                        </li>
                        <li className="works-item swiper-slide">
                            <div className="works-item-img">
                                <img src="./images/img_works007.jpg" alt="デイトラ教材オリジナルテーマブログ" />
                            </div>
                            <h3 className="works-item-name">オリジナルテーマブログ（WordPress）</h3>
                            <Link to="https://totonou-code.com/TF-30/" target="_blank" className="works-item-link">詳しく見る</Link>
                        </li>
                        <li className="works-item swiper-slide">
                            <div className="works-item-img">
                                <img src="/images/img_works008.jpg" alt="仮想企業e-tigaのLP"/>
                            </div>
                            <h3 className="works-item-name">仮想企業 + アプリe-tigaのLP</h3>
                            <Link to="https://webwisewords.net/works/e-tiga/index.html" target="_blank" className="works-item-link">詳しく見る</Link>
                        </li>
                        <li className="works-item swiper-slide">
                            <div className="works-item-img">
                                <img src="/images/img_works009.jpg" alt="仮想アプリOHAのLP" />
                            </div>
                            <h3 className="works-item-name">仮想アプリOHAのLP</h3>
                            <Link to="https://webwisewords.net/works/oha/index.html" target="_blank" className="works-item-link">詳しく見る</Link>
                        </li>
                        <li className="works-item swiper-slide">
                            <div className="works-item-img">
                                <img src="/images/img_works010.jpg" alt="喫茶店WEB_CAFEのHP"/>
                            </div>
                            <h3 className="works-item-name">喫茶店WEB_CAFEのHP</h3>
                            <Link to="https://webwisewords.net/works/WEB_CAFE/index.html" target="_blank" className="works-item-link">詳しく見る</Link>
                        </li>
                        <li className="works-item swiper-slide">
                            <div className="works-item-img">
                                <img src="/images/img_works999.jpg" alt="初めて制作したLP" />
                            </div>
                            <h3 className="works-item-name">初めて制作したLP</h3>
                            <Link to="https://webwisewords.net/works/first_LP/index.html" target="_blank" className="works-item-link" >詳しく見る</Link>
                        </li>
                    </ul>

                {/* If we need pagination */}
                <div className="swiper-pagination"></div>

                {/* If we need navigation buttons */}
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>

                {/* If we need scrollbar */}
                <div className="swiper-scrollbar"></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WorksPage
