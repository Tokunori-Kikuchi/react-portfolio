import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { worksData } from './worksData';

const FirstView = () => {
  return (
    <div id="fv" className="fv">
      <div className="fv-container">
        <div className="fv-left">
          <p className="fv-left-sub-text">Webコーダー</p>
          <h1 className="fv-left-main-text">TOKU's PORTFOLIO</h1>
          <p className="fv-left-description">
            静的なHTMLコーディングからWordPress化まで対応可能。
            <br />
            デザインカンプの意図をしっかりと理解した上で、迅速、丁寧な対応コーディング業務をサポート！
            <br />
            <span>※閲覧時に求められるIDとパスワードは「basic」と入力してください。</span>
          </p>
        </div>
        <div className="fv-right">
            <a href="https://twitter.com/your_twitter_account" target="_blank" rel="noopener noreferrer" className="follow-us">
                FOLLOW ME
            </a>
        </div>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="fv-swiper"
      >
        {worksData.map((work) => (
          <SwiperSlide key={work.id}>
            <div className="slide-inner-content">
              <div className="slide-text-content">
                <img src={work.logo} alt={`${work.title} logo`} className="work-logo" />
                <h3 className="work-title">{work.title}</h3>
                <div className="work-tags">
                  {work.tags.map((tag, index) => (
                    <span key={index} className="work-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="slide-visual-content">
                <img src={work.image} alt={work.title} className="work-image" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="fv-contact-button-container">
        <ScrollLink to="contact" smooth={true} duration={500} offset={-80} className="fv-contact-button">
            Contact
            <span className="arrow-circle">
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 1L6.5 6L1.5 11" stroke="#065471" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
        </ScrollLink>
      </div>
    </div>
  );
};

export default FirstView;