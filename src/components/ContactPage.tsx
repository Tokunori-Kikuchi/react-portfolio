import { Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
// Swiperを使用する場合は、Swiperのコアと必要なモジュール、スタイルをインポート
// import Swiper from 'swiper';
// import { Navigation, Pagination, EffectCube } from 'swiper/modules'; // 必要なモジュールをインポート
// import 'swiper/swiper-bundle.css'; // Swiperの基本的なCSS
// import 'swiper/css/effect-cube'; // Cubeエフェクト用のCSS

const ContactPage = () => {
    interface FormData {
        name: string;
        email: string;
        requestType: string[];
        purpose: string;
        deadline: string;
        budget: string;
        achievements: string;
        contractStatus: string[];
        referenceSite: string;
        message: string;
        privacyPolicy: boolean;
      }

      const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        requestType: [],
        purpose: '選択してください',
        deadline: '',
        budget: '',
        achievements: '掲載可',
        contractStatus: [],
        referenceSite: '',
        message: '',
        privacyPolicy: false,
      });
  const [formStatus, setFormStatus] = useState<'initial' | 'success' | 'error'>('initial');
  const [isFormValid, setIsFormValid] = useState(false);

  // Swiperインスタンスを保持するためのref (Swiperを使用する場合)
  // const swiperRef = useRef<Swiper | null>(null);
  // const swiperContainerRef = useRef<HTMLDivElement>(null); // Swiperのコンテナ要素のref

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target;
    const name = target.name as keyof FormData;

    if (target.type === 'checkbox') {
      const checked = (target as HTMLInputElement).checked;
      const value = (target as HTMLInputElement).value;

      setFormData((prevData) => {
        const existingValue = prevData[name];
        if (name === 'privacyPolicy') {
          return { ...prevData, [name]: checked };
        } else if (Array.isArray(existingValue)) {
          const currentArray = existingValue as string[];
          if (checked) {
            if (!currentArray.includes(value)) {
                 return { ...prevData, [name]: [...currentArray, value] };
            }
            return { ...prevData, [name]: currentArray };
          } else {
            return { ...prevData, [name]: currentArray.filter((item) => item !== value) };
          }
        }
        return prevData;
      });
    } else {
      const value = target.value;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) {
        console.warn("Form is not valid, submission prevented.");
        return;
    }

    setFormStatus('initial'); // 送信試行前にステータスをリセット（再試行の場合など）

    const googleFormData = new FormData(); // Googleフォーム送信用のFormDataオブジェクト
    googleFormData.append('entry.1448049355', formData.name); // お名前 (実際のentry IDに置き換えてください)
    googleFormData.append('emailAddress', formData.email);     // メールアドレス (実際のentry IDに置き換えてください)
    formData.requestType.forEach(value => googleFormData.append('entry.242582638', value)); // ご依頼内容 (実際のentry IDに置き換えてください)
    googleFormData.append('entry.1010719304', formData.purpose); // 制作目的 (実際のentry IDに置き換えてください)
    if (formData.deadline) { // deadlineが空でないことを確認
        const [year, month, day] = formData.deadline.split('-');
        googleFormData.append('entry.2144142783_year', year);
        googleFormData.append('entry.2144142783_month', month);
        googleFormData.append('entry.2144142783_day', day);
    }
    // formData.budget (例: "100,000") からカンマを除去して送信
    const budgetWithoutCommas = formData.budget.replace(/,/g, '');
    googleFormData.append('entry.708906994', budgetWithoutCommas); // ご予算 (実際のentry IDに置き換えてください)
    googleFormData.append('entry.1721355692', formData.achievements); // 実績掲載 (実際のentry IDに置き換えてください)
    formData.contractStatus.forEach(value => googleFormData.append('entry.67399617', value)); // 契約状況 (実際のentry IDに置き換えてください)
    googleFormData.append('entry.512408395', formData.referenceSite); // 参考サイト (実際のentry IDに置き換えてください)
    googleFormData.append('entry.1446779155', formData.message); // お問い合わせ内容 (実際のentry IDに置き換えてください)
    googleFormData.append('entry.1498116345', formData.privacyPolicy ? "個人情報保護方針に同意する" : ""); // プライバシーポリシー同意 (実際のentry IDに置き換えてください)

    // 送信する直前に内容をコンソールに出力して確認
    console.log("Submitting Google Form Data:");
    for (let pair of googleFormData.entries()) {
    console.log(pair[0]+ ': '+ pair[1]);
    }

    try {
      await fetch('https://docs.google.com/forms/u/0/d/e/1FAIpQLSen8AOgYeziD5C66wHQYVSAfLbPgiiUBrTclToY3-dX5PvGxg/formResponse', {
        method: 'POST',
        body: googleFormData,
        mode: 'no-cors' // Google Formsは通常no-corsモードが必要
      });
      // no-corsモードではレスポンスの詳細は確認できないが、エラーがスローされなければ送信試行はされたとみなす
      setFormStatus('success');
      // フォーム送信成功後、フォームデータをリセットする場合
      setFormData({
        name: '',
        email: '',
        requestType: [],
        purpose: '選択してください',
        deadline: '',
        budget: '',
        achievements: '掲載可',
        contractStatus: [],
        referenceSite: '',
        message: '',
        privacyPolicy: false,
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
    }
  };

  useEffect(() => {
    // フォームバリデーションロジック
    // `contact.js` の `checkForm` 関数のロジックをここに集約
    let isValid = true;
    // 必須のテキスト入力フィールドのチェック
    if (!formData.name.trim() || !formData.email.trim() || !formData.budget.trim()) {
        isValid = false;
    }
    // メール形式の簡易チェック (より厳密なチェックも可能)
    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
        isValid = false;
    }
    // 必須の選択フィールド (select)
    if (!formData.purpose || formData.purpose === "選択してください") {
        isValid = false;
    }
    // 必須の日付フィールド
    if (!formData.deadline) {
        isValid = false;
    }
    // 必須のチェックボックスグループ (少なくとも1つ選択)
    if (formData.requestType.length === 0) {
        isValid = false;
    }
    if (formData.contractStatus.length === 0) {
        isValid = false;
    }
    // 必須の単一チェックボックス
    if (!formData.privacyPolicy) {
        isValid = false;
    }
    // achievements (ラジオボタン) は常に何かが選択されている想定 (初期値があるため)

    setIsFormValid(isValid);
  }, [formData]);


  // Swiperの初期化 (Swiperを使用する場合)
  // useEffect(() => {
  //   if (!swiperContainerRef.current) return;

  //   const breakPoint = 767;
  //   let swiperInstance: Swiper | null = null;

  //   const createSwiper = () => {
  //     if (swiperInstance) {
  //       swiperInstance.destroy(true, true);
  //     }
  //     swiperInstance = new Swiper(swiperContainerRef.current!, { // '!' は ref.current が null でないことをアサーション
  //       modules: [Navigation, Pagination, EffectCube], // EffectCube を modules に追加
  //       loop: true,
  //       speed: 600, // script.js では300でしたが、お好みで
  //       pagination: {
  //         el: ".swiper-pagination", // Swiperコンテナ内の対応する要素
  //         clickable: true,
  //       },
  //       navigation: {
  //         nextEl: ".swiper-button-next", // Swiperコンテナ内の対応する要素
  //         prevEl: ".swiper-button-prev", // Swiperコンテナ内の対応する要素
  //       },
  //       effect: window.innerWidth < breakPoint ? "cube" : "slide",
  //     });
  //     swiperRef.current = swiperInstance;
  //   };

  //   const handleResize = () => {
  //     if (!swiperContainerRef.current) return;
  //     const currentEffectIsCube = swiperRef.current?.params.effect === 'cube';
  //     if (breakPoint < window.innerWidth) { // PC表示
  //       if (currentEffectIsCube || !swiperRef.current?.hostEl) { // Cubeの時、またはSwiper未初期化
  //         if (swiperRef.current) swiperRef.current.destroy(true, true);
  //         // PC表示用のSwiper設定で再生成（またはCubeを無効化するなど）
  //         // ここでは例としてエフェクトを変えて再生成
  //         swiperRef.current = new Swiper(swiperContainerRef.current!, { /* PC用設定 */
  //           modules: [Navigation, Pagination],
  //           loop: true, speed: 600, pagination: { el: ".swiper-pagination", clickable: true }, navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }, effect: "slide"
  //         });
  //       }
  //     } else { // SP表示
  //       if (!currentEffectIsCube || !swiperRef.current?.hostEl) { // Slideの時、またはSwiper未初期化
  //         if (swiperRef.current) swiperRef.current.destroy(true, true);
  //         // SP表示用のSwiper設定で再生成
  //         swiperRef.current = new Swiper(swiperContainerRef.current!, { /* SP用設定 */
  //           modules: [Navigation, Pagination, EffectCube],
  //           loop: true, speed: 600, pagination: { el: ".swiper-pagination", clickable: true }, navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }, effect: "cube"
  //         });
  //       }
  //     }
  //   };

  //   // 初期化
  //   handleResize(); // 初回実行で画面サイズに応じたSwiperを生成

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //     if (swiperRef.current) {
  //       swiperRef.current.destroy(true, true);
  //       swiperRef.current = null;
  //     }
  //   };
  // }, []); // 空の依存配列でマウント時とアンマウント時にのみ実行

  return (
    <section id="contact" className="section contact">
        <div className="section-inner">
            {/* Swiperのコンテナ (Swiperを使用する場合) */}
            {/*
            <div ref={swiperContainerRef} className="swiper">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">Slide 1</div>
                    <div className="swiper-slide">Slide 2</div>
                    <div className="swiper-slide">Slide 3</div>
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
            */}

            <div className="contact-head">
                <h2 className="section-head">
                    <span className="section-head-main contact-head-main">Contact -</span>
                    <span className="section-head-sub">お問い合わせ</span>
                </h2>
                <p className="section-lead-text">お仕事のご依頼は、以下の内容を<br />ご記入いただき送信してください。</p>
            </div>
            <div className="section-contents contact-container">
                <div className="contact-form">
                    {formStatus !== 'success' && ( // 送信成功時はフォームを非表示にする
                        <form id="js-form" onSubmit={handleSubmit}>
                            <div className="contact-table">
                                <div className="contact-row">
                                    <div className="contact-item">
                                        <span className="required">お名前</span>
                                    </div>
                                    <div className="contact-body">
                                        <input type="text" name="name" className="form-text" placeholder="お名前" value={formData.name} onChange={handleChange} required/>
                                    </div>
                                </div>
                                <div className="contact-row">
                                    <div className="contact-item">
                                        <span className="required">メール</span>
                                    </div>
                                    <div className="contact-body">
                                        <input type="email" name="email" className="form-text" placeholder="sample@example.com" value={formData.email} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="contact-row">
                                    <div className="contact-item">
                                        <span className="required">ご依頼内容</span>
                                    </div>
                                    <div className="contact-body-checkbox">
                                        <label htmlFor="lp" className="contact-checkbox">
                                            <input id="lp" type="checkbox" name="requestType" value="LP制作" checked={formData.requestType.includes('LP制作')} onChange={handleChange}/>
                                            <span className="contact-checkbox-txt">LP制作</span>
                                        </label>
                                        <label htmlFor="corp" className="contact-checkbox">
                                            <input id="corp" type="checkbox" name="requestType" value="コーポレートサイト" checked={formData.requestType.includes('コーポレートサイト')} onChange={handleChange}/>
                                            <span className="contact-checkbox-txt" >コーポレートサイト</span >
                                        </label>
                                        <label htmlFor="wp" className="contact-checkbox">
                                            <input id="wp" type="checkbox" name="requestType" value="WordPress構築" checked={formData.requestType.includes('WordPress構築')} onChange={handleChange}/>
                                            <span className="contact-checkbox-txt">WordPress構築</span>
                                        </label>
                                        <label htmlFor="fix" className="contact-checkbox">
                                            <input id="fix" type="checkbox" name="requestType" value="修正" checked={formData.requestType.includes('修正')} onChange={handleChange}/>
                                            <span className="contact-checkbox-txt">修正</span>
                                        </label>
                                        <label htmlFor="other-request" className="contact-checkbox"> {/* IDの重複を避けるため変更 */}
                                            <input id="other-request" type="checkbox" name="requestType" value="その他" checked={formData.requestType.includes('その他')} onChange={handleChange}/>
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
                                            <select name="purpose" className="form-select" value={formData.purpose} onChange={handleChange} required>
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
                                        <input type="date" name="deadline" className="form-text" value={formData.deadline} onChange={handleChange} required/>
                                    </div>
                                </div>
                                <div className="contact-row">
                                    <div className="contact-item">
                                        <span className="required">ご予算</span>
                                    </div>
                                    <div className="contact-body">
                                        <input type="text" name="budget" className="form-text" value={formData.budget} onChange={handleChange} required/>
                                    </div>
                                </div>
                                <div className="contact-row">
                                    <div className="contact-item">
                                        <span className="required">実績掲載</span>
                                    </div>
                                    <div className="contact-body-radio">
                                        <label htmlFor="possible" className="contact-radio">
                                            <input id="possible" type="radio" name="achievements" value="掲載可" checked={formData.achievements === '掲載可'} onChange={handleChange}/>
                                            <span className="contact-possibility-text">掲載可</span>
                                        </label>
                                        <label htmlFor="impossible" className="contact-radio">
                                            <input id="impossible" type="radio" name="achievements" value="掲載不可" checked={formData.achievements === '掲載不可'} onChange={handleChange}/>
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
                                            <input id="server" type="checkbox" name="contractStatus" value="サーバー契約済み" checked={formData.contractStatus.includes('サーバー契約済み')} onChange={handleChange}/>
                                            <span className="contact-checkbox-txt">サーバー契約済み</span>
                                        </label>
                                        <label htmlFor="domain" className="contact-checkbox">
                                            <input id="domain" type="checkbox" name="contractStatus" value="独自ドメイン取得済み" checked={formData.contractStatus.includes('独自ドメイン取得済み')} onChange={handleChange}/>
                                            <span className="contact-checkbox-txt">独自ドメイン取得済み</span>
                                        </label>
                                        <label htmlFor="neither" className="contact-checkbox">
                                            <input id="neither" type="checkbox" name="contractStatus" value="サーバー、ドメインともに無い" checked={formData.contractStatus.includes('サーバー、ドメインともに無い')} onChange={handleChange}/>
                                            <span className="contact-checkbox-txt">サーバー、ドメインともに無い</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="contact-row">
                                    <div className="contact-item">参考にしたいサイト</div>
                                    <div className="contact-body">
                                        <input type="text" name="referenceSite" className="form-text" placeholder="https://sample.com" value={formData.referenceSite} onChange={handleChange}/>
                                    </div>
                                </div>
                                <div className="contact-row">
                                    <div className="contact-item">お問い合わせ</div>
                                    <div className="contact-body">
                                        <textarea name="message" className="form-textarea" placeholder="その他ご相談したい内容をどうぞ！" value={formData.message} onChange={handleChange}></textarea>
                                    </div>
                                </div>
                                <div className="privacy-policy">
                                    <div className="contact-row">
                                        <div className="contact-body-checkbox">
                                            <label htmlFor="privacy" className="contact-privacy">
                                                <input id="privacy" type="checkbox" name="privacyPolicy" className="contact-privacy-input" value="同意する" checked={formData.privacyPolicy} onChange={handleChange} required/>
                                            <span className="contact-checkbox-text">
                                                <Link className="contact-privacy-link" to="https://www.kiyac.app/privacypolicy/v39Lk0NNdZxEN7uSkHta" target="_blank" >個人情報保護方針</Link>に同意する</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-footer-submit">
                                {/* `contact.js` の `-active` クラスによるスタイル変更は、
                                    `disabled` 属性とCSSセレクタ ([disabled], :not([disabled])) を使って実現できます。
                                    もし特定のクラス名が必要な場合は、isFormValid に応じてクラス名を追加・削除するロジックをここに書けます。
                                */}
                                <button
                                    id="js-submit"
                                    className={`util-link -submit ${isFormValid ? '-active' : ''}`} // -active クラスを動的に付与
                                    type="submit"
                                    disabled={!isFormValid}
                                >
                                    送信する
                                </button>
                            </div>
                        </form>
                    )}
                    {formStatus === 'success' && (
                        <div className="contact-message" id="js-success">
                            <p>送信完了しました。<br />ありがとうございました。</p>
                        </div>
                    )}
                    {formStatus === 'error' && (
                        <div className="contact-message -error" id="js-error">
                            <p>送信に失敗しました。<br />ページを更新して再度送信してください。</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </section>
  );
}

export default ContactPage;