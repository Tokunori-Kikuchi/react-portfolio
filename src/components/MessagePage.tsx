import React from 'react'
import { Link } from 'react-router-dom';

const MessagePage = () => {
  return (
    <section id="message" className="section message">
        <div className="section-inner">
            <div className="message-container">
                <div className="message-img">
                    <img src="/images/img_message2.jpg" alt="ご依頼をお考えの方へ" />
                </div>
                <div className="message-contents">
                    <h2 className="section-head">
                        <span className="section-head-main">Message -</span>
                        <span className="section-head-sub">ご依頼をお考えの方へ </span>
                    </h2>
                    <p className="message-text">静的なHTMLコーディングからWordPress化まで対応可能です。デザインカンプの意図をしっかりと理解した上で、迅速、丁寧な対応でコーディング業務をサポートいたします！</p>
                </div>
            </div>
        </div>
    </section>

  )
}

export default MessagePage