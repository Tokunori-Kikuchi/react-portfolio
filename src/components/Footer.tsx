import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-inner">
            <div className="footer-left">
                <ul className="footer-sns">
                    <li className="footer-nav-item twitter-button">
                        <Link to="https://twitter.com/mosu_man" target="_blank" className="footer-nav-link button button-border">
                            <span className="button-icon">
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.9441 6.40799C17.9568 6.58444 17.9568 6.76092 17.9568 6.93736C17.9568 12.3191 13.8325 18.5201 6.29441 18.5201C3.97207 18.5201 1.81473 17.8521 0 16.6926C0.329961 16.7304 0.647187 16.743 0.989844 16.743C2.90605 16.743 4.67004 16.1002 6.07867 15.0037C4.27664 14.9659 2.76648 13.7937 2.24617 12.1805C2.5 12.2183 2.75379 12.2435 3.02031 12.2435C3.38832 12.2435 3.75637 12.193 4.09898 12.1049C2.22082 11.7267 0.812148 10.0883 0.812148 8.10949V8.05909C1.35781 8.36158 1.99238 8.55063 2.66492 8.57581C1.56086 7.84479 0.837539 6.59704 0.837539 5.18543C0.837539 4.42922 1.04055 3.73602 1.3959 3.13105C3.41367 5.60136 6.44668 7.21459 9.84766 7.39107C9.78422 7.08858 9.74613 6.77353 9.74613 6.45843C9.74613 4.21496 11.5736 2.38745 13.8451 2.38745C15.0253 2.38745 16.0913 2.87899 16.84 3.67302C17.7664 3.49658 18.6547 3.15626 19.4416 2.68994C19.137 3.63523 18.4898 4.42926 17.6395 4.93337C18.4644 4.84519 19.2639 4.61827 19.9999 4.30322C19.4416 5.10981 18.7436 5.82819 17.9441 6.40799Z"
                                    className="button-icon-path"
                                />
                                </svg>
                            </span>
                            <span className="button-text">Twitter -</span>
                        </Link>
                    </li>
                </ul>
                <ul className="footer-nav-list">
                    <li className="footer-nav-item">
                        <Link to="https://www.kiyac.app/privacypolicy/v39Lk0NNdZxEN7uSkHta" target="_blank" className="footer-nav-item-link">個人情報保護方針</Link>
                    </li>
                </ul>
            </div>
            <div className="footer-right">
                <div className="footer-logo">
                    <div className="footer-logo-main">WebWiseWords</div>
                    <div className="footer-logo-sub">- TK's Portfolio -</div>
                </div>
                <p className="copyright"><small lang="en">&copy;totonou-code</small></p>
            </div>
        </div>
    </footer>
  )
}

export default Footer