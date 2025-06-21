import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // スクロール状態を監視
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Drawer（メニュー）の表示/非表示を切り替える関数
  const toggleDrawer = () => {
    if (!isDrawerOpen) setIsAnimating(true);
    setIsDrawerOpen((prev) => !prev);
  };

  // Drawerが閉じるアニメーションが完了したらdisplayを切り替える
  useEffect(() => {
    if (!isDrawerOpen && isAnimating) {
      const timeout = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [isDrawerOpen, isAnimating]);

  // Widthのリサイズを監視
  useEffect(()=> {
    const handleResize = ()=> {
      setIsWideScreen(window.innerWidth >= 768);
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return ()=> {
      window.removeEventListener('resize',handleResize);
    };
  }, []);

  // ナビゲーションリンクのクリック時にドロワーを閉じる
  const handleNavClick = () => {
    if (!isWideScreen && isDrawerOpen) {
      setIsDrawerOpen(false);
    }
  };

  // Drawerに適用するクラス名を決定
  const drawerClass = `
    header-contents
    ${isWideScreen || isDrawerOpen ? 'open' : 'closed'}
    ${isAnimating ? 'animating' : ''}
  `;

  // ヘッダーに適用するクラス名を決定
  const headerClass = `header ${isScrolled ? 'scrolled' : ''}`;

  return (
    <header className={headerClass}>
      <div className="header-container">
        <div className="header-logo">
          <div className="header-logo-main">
            <ScrollLink
              to="fv"
              smooth={true}
              duration={500}
              offset={-80}
              className="header-nav-Link"
              onClick={handleNavClick}
            >
              <img src="/images/logo.png" alt="サイトロゴ" />
            </ScrollLink>
          </div>
        </div>

        {/* メニューボタン */}
        <button
          className={`header-menu-button ${isDrawerOpen ? 'is-checked' : ''}`}
          type="button"
          onClick={toggleDrawer}
        ></button>

        {/* Drawer（メニュー）の内容 */}
        <div id="js-drawer" className={drawerClass}>
          <div className="drawer-nav-container">
            <nav className="header-nav">
              <ul className="header-nav-list">
                <li className="header-nav-item">
                  <ScrollLink to="works" smooth={true} duration={500} offset={-80} className="header-nav-Link" onClick={handleNavClick}>
                    Works
                  </ScrollLink>
                </li>
                <li className="header-nav-item">
                  <ScrollLink to="service" smooth={true} duration={500} offset={-80} className="header-nav-Link" onClick={handleNavClick}>
                    Service
                  </ScrollLink>
                </li>
                <li className="header-nav-item">
                  <ScrollLink to="flow" smooth={true} duration={500} offset={-80} className="header-nav-Link" onClick={handleNavClick}>
                    Work Flow
                  </ScrollLink>
                </li>
                <li className="header-nav-item">
                  <ScrollLink to="about" smooth={true} duration={500} offset={-80} className="header-nav-Link" onClick={handleNavClick}>
                    About
                  </ScrollLink>
                </li>
              </ul>
            </nav>
            <ScrollLink to="contact" smooth={true} duration={500} offset={-80} className="drawer-contact-button" onClick={handleNavClick}>
              <span>Contact</span>
              <span className="arrow-circle">
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.5 1L6.5 6L1.5 11" stroke="#065471" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            </ScrollLink>
            <div className="drawer-bottom-logo">
              <ScrollLink to="fv" smooth={true} duration={500} offset={-80} onClick={handleNavClick}>
                <img src="/images/logo.png" alt="WebWiseWords" />
              </ScrollLink>
            </div>
          </div>
          <div className="drawer-image-container"></div>
        </div>
      </div>
    </header>
  )
}

export default Header