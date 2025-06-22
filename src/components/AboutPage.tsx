import React from 'react';

const AboutPage = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-section-head">
        <span className="section-head-main about-head-main">About</span>
      </div>
      <div className="about-card">
        <div className="about-left">
          <div className="about-vertical-name">
            <span>TOKU</span>
          </div>
          <div className="about-photo">
            <img src="/images/img_aboutme.jpg" alt="TOKU" />
          </div>
        </div>
        <div className="about-right">
          <div className="about-profile">
            <p>1985年生まれ、岩手県在住。<br />
              大学卒業後、メーカーの営業、資材、製造を経験後キャリアチェンジ、<br />
              現在は企業のWebエンジニアとしてフロントからシステムまで幅広く開発を行っています。<br />
            </p>
          </div>
          <div className="about-hobby">
            <button className="about-label">趣 味</button>
            <div className="about-hobby-list">
              ジョギング　登山　キャンプ　サウナ　腕時計集め
            </div>
          </div>
          <div className="about-skill">
            <button className="about-label">スキル</button>
            <div className="about-skill-list">
              <span className="about-skill-tag">HTML</span>
              <span className="about-skill-tag">CSS</span>
              <span className="about-skill-tag">JavaScript</span>
              <span className="about-skill-tag">React</span>
              <span className="about-skill-tag">TypeScript</span>
              <span className="about-skill-tag">PHP</span>
              <span className="about-skill-tag">WordPress</span>
              <span className="about-skill-tag">SQL</span>
              <span className="about-skill-tag">Git</span>
              <span className="about-skill-tag">Python</span>
              <span className="about-skill-tag">Dify</span>
            </div>
          </div>
          <div className="about-sns">
            <span className="about-sns-label">FOLLOW ME</span>
            <a href="https://twitter.com/mosu_man" target="_blank" rel="noopener noreferrer" className="about-sns-link">
              <svg width="24" height="24" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.9441 6.40799C17.9568 6.58444 17.9568 6.76092 17.9568 6.93736C17.9568 12.3191 13.8325 18.5201 6.29441 18.5201C3.97207 18.5201 1.81473 17.8521 0 16.6926C0.329961 16.7304 0.647187 16.743 0.989844 16.743C2.90605 16.743 4.67004 16.1002 6.07867 15.0037C4.27664 14.9659 2.76648 13.7937 2.24617 12.1805C2.5 12.2183 2.75379 12.2435 3.02031 12.2435C3.38832 12.2435 3.75637 12.193 4.09898 12.1049C2.22082 11.7267 0.812148 10.0883 0.812148 8.10949V8.05909C1.35781 8.36158 1.99238 8.55063 2.66492 8.57581C1.56086 7.84479 0.837539 6.59704 0.837539 5.18543C0.837539 4.42922 1.04055 3.73602 1.3959 3.13105C3.41367 5.60136 6.44668 7.21459 9.84766 7.39107C9.78422 7.08858 9.74613 6.77353 9.74613 6.45843C9.74613 4.21496 11.5736 2.38745 13.8451 2.38745C15.0253 2.38745 16.0913 2.87899 16.84 3.67302C17.7664 3.49658 18.6547 3.15626 19.4416 2.68994C19.137 3.63523 18.4898 4.42926 17.6395 4.93337C18.4644 4.84519 19.2639 4.61827 19.9999 4.30322C19.4416 5.10981 18.7436 5.82819 17.9441 6.40799Z" fill="#065471"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;