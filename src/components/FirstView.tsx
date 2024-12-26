import React from 'react'
import { Link } from 'react-router-dom';

const FirstView = () => {
  return (
    <div id="fv" className="fv">
      <picture className="fv-img">
        <source media="(min-width: 768px)" srcSet="/images/img_fv.png" />
        <img src="/images/sp/img_fv.png" alt="スマートフォン版ファーストビュー" loading="lazy"/>
      </picture>
      <div className="fv-contents">
        <h1 className="fv-heading">
          <span className="fv-heading-main">Web Corder -</span>
          <span className="fv-heading-sub">ご覧いただきありがとうございます。<br />WEBコーダーをしているTOKUと申します。</span>
        </h1>
      </div>
    </div>
  )
}

export default FirstView