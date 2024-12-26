import React from 'react'
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <section id="contact" className="section contact">
        <div className="section-inner">
            <div className="contact-head">
                <h2 className="section-head">
                    <span className="section-head-main">Contact -</span>
                    <span className="section-head-sub">お問い合わせ</span>
                </h2>
                <p className="section-lead-text">お仕事のご依頼は、以下の内容を<br />ご記入いただき送信してください。</p>
            </div>
            <div className="section-contents contact-container">
                <div className="contact-form">
                    <form id="js-form" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSen8AOgYeziD5C66wHQYVSAfLbPgiiUBrTclToY3-dX5PvGxg/formResponse">
                        <div className="contact-table">
                            <div className="contact-row">
                                <div className="contact-item">
                                    <span className="required">お名前</span>
                                </div>
                                <div className="contact-body">
                                    <input type="text" name="entry.1448049355" className="form-text" placeholder="お名前" required/>
                                </div>
                            </div>
                            <div className="contact-row">
                                <div className="contact-item">
                                    <span className="required">メール</span>
                                </div>
                                <div className="contact-body">
                                    <input type="email" name="emailAddress" className="form-text" placeholder="sample@example.com" required />
                                </div>
                            </div>
                            <div className="contact-row">
                                <div className="contact-item">
                                    <span className="required">ご依頼内容</span>
                                </div>
                                <div className="contact-body-checkbox">
                                    <label htmlFor="lp" className="contact-checkbox">
                                        <input id="lp" type="checkbox" name="entry.242582638" value="LP制作" />
                                        <span className="contact-checkbox-txt">LP制作</span>
                                    </label>
                                    <label htmlFor="corp" className="contact-checkbox">
                                        <input id="corp" type="checkbox" name="entry.242582638" value="コーポレートサイト" />
                                        <span className="contact-checkbox-txt" >コーポレートサイト</span >
                                    </label>
                                    <label htmlFor="wp" className="contact-checkbox">
                                        <input id="wp" type="checkbox" name="entry.242582638" value="WordPress構築"/>
                                        <span className="contact-checkbox-txt">WordPress構築</span>
                                    </label>
                                    <label htmlFor="fix" className="contact-checkbox">
                                        <input id="fix" type="checkbox" name="entry.242582638" value="修正"/>
                                        <span className="contact-checkbox-txt">修正</span>
                                    </label>
                                    <label htmlFor="other" className="contact-checkbox">
                                        <input id="other" type="checkbox" name="entry.242582638" value="その他"/>
                                        <span className="contact-checkbox-txt">その他</span>
                                    </label>
                                </div>
                            </div>
                            <div className="contact-row">
                                <div className="contact-item">
                                    <span className="required">制作目的</span>
                                </div>
                                <div className="contact-body">
                                    <div className="select-wrap">
                                        <select name="entry.1010719304" className="form-select" defaultValue="選択してください">
                                            <option value="選択してください" disabled>選択してください</option>
                                            <option value="集客増加">集客増加</option>
                                            <option value="売上アップ">売上アップ</option>
                                            <option value="ブランディング">ブランディング</option>
                                            <option value="その他">その他</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-row">
                                <div className="contact-item">
                                    <span className="required">希望納期</span>
                                </div>
                                <div className="contact-body">
                                    <input type="date" name="entry.2144142783" className="form-text" required/>
                                </div>
                            </div>
                            <div className="contact-row">
                                <div className="contact-item">
                                    <span className="required">ご予算</span>
                                </div>
                                <div className="contact-body">
                                    <input type="text" name="entry.708906994" className="form-text" required/>
                                </div>
                            </div>
                            <div className="contact-row">
                                <div className="contact-item">
                                    <span className="required">実績掲載</span>
                                </div>
                                <div className="contact-body-radio">
                                    <label htmlFor="possible" className="contact-radio">
                                        <input id="possible" type="radio" name="entry.1721355692" value="掲載可" defaultChecked={true}/>
                                        <span className="contact-possibility-text">掲載可</span>
                                    </label>
                                    <label htmlFor="impossible" className="contact-radio">
                                        <input id="impossible" type="radio" name="entry.1721355692" value="掲載不可"/>
                                        <span className="contact-possibility-text">掲載不可</span>
                                    </label>
                                </div>
                            </div>
                            <div className="contact-row">
                                <div className="contact-item">
                                    <span className="required">契約状況</span>
                                </div>
                                <div className="contact-body-checkbox">
                                    <label htmlFor="server" className="contact-checkbox">
                                        <input id="server" type="checkbox" name="entry.67399617" value="サーバー契約済み"/>
                                        <span className="contact-checkbox-txt">サーバー契約済み</span>
                                    </label>
                                    <label htmlFor="domain" className="contact-checkbox">
                                        <input id="domain" type="checkbox" name="entry.67399617" value="独自ドメイン取得済み"/>
                                        <span className="contact-checkbox-txt">独自ドメイン取得済み</span>
                                    </label>
                                    <label htmlFor="neither" className="contact-checkbox">
                                        <input id="neither" type="checkbox" name="entry.67399617" value="サーバー、ドメインともに無い"/>
                                        <span className="contact-checkbox-txt">サーバー、ドメインともに無い</span>
                                    </label>
                                </div>
                            </div>
                            <div className="contact-row">
                                <div className="contact-item">参考にしたいサイト</div>
                                <div className="contact-body">
                                    <input type="text" name="entry.512408395" className="form-text" placeholder="https://sample.com"/>
                                </div>
                            </div>
                            <div className="contact-row">
                                <div className="contact-item">お問い合わせ</div>
                                <div className="contact-body">
                                    <textarea name="entry.1446779155" className="form-textarea" placeholder="その他ご相談したい内容をどうぞ！"></textarea>
                                </div>
                            </div>
                            <div className="privacy-policy">
                                <div className="contact-row">
                                    <div className="contact-body-checkbox">
                                        <label htmlFor="privacy" className="contact-privacy">
                                            <input id="privacy" type="checkbox" name="entry.1498116345" className="contact-privacy-input" value="個人情報保護方針に同意する" required/>
                                        <span className="contact-checkbox-text">
                                            <Link className="contact-privacy-link" to="https://www.kiyac.app/privacypolicy/v39Lk0NNdZxEN7uSkHta" target="_blank" >個人情報保護方針</Link>に同意する</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact-footer-submit">
                            <button id="js-submit" className="util-link -submit" type="submit" disabled>送信する</button>
                        </div>
                    </form>
                    <div className="contact-message" id="js-success">
                        <p>送信完了しました。<br />ありがとうございました。</p>
                    </div>
                    <div className="contact-message -error" id="js-error">
                        <p>送信に失敗しました。<br />ページを更新して再度送信してください。</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default ContactPage