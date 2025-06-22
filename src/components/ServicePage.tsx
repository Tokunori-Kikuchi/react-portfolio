import React from 'react'
import { Link } from 'react-router-dom';

const ServicePage = () => {
  return (
    <section id="service" className="section service">
        <div className="section-inner">
            <h2 className="section-head">
                <span className="section-head-main">Service -</span>
                <span className="section-head-sub">提供サービス</span>
            </h2>
            <p className="section-lead-text">行っているサービス内容です。「Web制作を頼みたい」「既存のWebサイトを修正・改善したい」など、是非、お気軽にご相談ください。</p>
            <div className="section-contents">
                <ul className="service-list">
                    <li className="service-item">
                        <div className="service-item-img">
                            <img src={process.env.PUBLIC_URL + '/images/img_service1.svg'} alt="ホームページ制作" />
                        </div>
                        <h3 className="service-item-name">ホームページ制作</h3>
                        <p className="service-item-text">ご要望に応じて柔軟にご提案させていただきます。目的を達成するためのホームページを一緒に作成していきましょう！</p>
                    </li>
                    <li className="service-item">
                        <div className="service-item-img">
                            <img src={process.env.PUBLIC_URL + '/images/img_service2.svg'} alt="ホームページ修正" />
                        </div>
                        <h3 className="service-item-name">ホームページ修正</h3>
                        <p className="service-item-text">文言の変更や表示崩れなど、ホームページでのちょっとしたお困りごとに対応いたします。</p>
                    </li>
                    <li className="service-item">
                        <div className="service-item-img">
                            <img src={process.env.PUBLIC_URL + '/images/img_service3.svg'} alt="ホームページ相談" />
                        </div>
                        <h3 className="service-item-name">ホームページ相談</h3>
                        <p className="service-item-text">ホームページ制作に関するご相談を無料でお受けしております。些細なことでもお気軽にご相談ください！</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default ServicePage