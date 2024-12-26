import React from 'react'
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <section id="about" className="section about">
        <div className="section-inner">
            <div className="about-container">
                <div className="about-img">
                    <img src="/images/img_aboutme.jpg" alt="私について" />
                </div>
                <div className="about-contents">
                    <h2 className="section-head">
                        <span className="section-head-main">About - </span>
                        <span className="section-head-sub">Tokunori Kikuchi</span>
                    </h2>
                    <p className="about-text">1985年生まれ、岩手県在住。<br />大学卒業後、メーカーの営業、資材、製造を経験しました。<br />現在キャリアチェンジし、Web制作を行っております。</p>
                    <p className="about-text">趣味は、ジョギング、登山、キャンプ、サウナ！腕時計を集めるのが好きです！</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutPage