import React from 'react'
import { Link } from 'react-router-dom';

const WorkFlowPage = () => {
  return (
    <section id="flow" className="section flow">
        <div className="section-inner">
            <h2 className="section-head">
                <span className="section-head-main">Work Flow -</span>
                <span className="section-head-sub">制作の流れ</span>
            </h2>
            <p className="section-lead-text">ご相談〜納品までの大まかな流れです。状況に応じて柔軟に対応いたします。</p>
            <div className="section-contents">
                <ol className="flow-list">
                    <li className="flow-item">
                        <p className="flow-item-num">1</p>
                        <div className="flow-item-img">
                            <img src="/images/img_flow1.svg" alt="ご相談・お見積り" />
                        </div>
                        <h3 className="flow-item-name">ご相談・お見積り</h3>
                        <p className="flow-item-text">要件や納期、予算などお気軽にご相談ください。<br />対応内容に応じてお見積りをお送りいたします。</p>
                    </li>
                    <li className="flow-item">
                        <p className="flow-item-num">2</p>
                        <div className="flow-item-img">
                            <img src="/images/img_flow2.svg" alt="コーディング" />
                        </div>
                        <h3 className="flow-item-name">コーディング</h3>
                        <p className="flow-item-text">デザインカンプを元にコーディングを行います。<br />コーディング後は品質チェックを行い調整します。</p>
                    </li>
                    <li className="flow-item">
                        <p className="flow-item-num">3</p>
                        <div className="flow-item-img">
                            <img src="/images/img_flow3.svg" alt="確認" />
                        </div>
                        <h3 className="flow-item-name">確認</h3>
                        <p className="flow-item-text">お客様にコーディングしたサイトをご確認頂きます。<br />不足部分の修正と対応を行います。</p>
                    </li>
                    <li className="flow-item">
                        <p className="flow-item-num">4</p>
                        <div className="flow-item-img">
                            <img src="/images/img_flow4.svg" alt="納品" />
                        </div>
                        <h3 className="flow-item-name">納品</h3>
                        <p className="flow-item-text">コーディング後のファイル一式を納品いたします。<br />本番サーバーへのアップロードも対応可能です。</p>
                    </li>
                </ol>
            </div>
        </div>
    </section>

  )
}

export default WorkFlowPage