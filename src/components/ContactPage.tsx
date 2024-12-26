import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ContactPage = () => {
    interface FormData {
        name: string;
        email: string;
        requestType: string[];  // Change to string[] to accommodate the checkbox values
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
        purpose: '',
        deadline: '',
        budget: '',
        achievements: '',
        contractStatus: [],
        referenceSite: '',
        message: '',
        privacyPolicy: false,
      });
  const [formStatus, setFormStatus] = useState<'initial' | 'success' | 'error'>('initial');
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: prevData[name] ? [...prevData[name], value] : [value],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // You can add your Google Form submission logic here

    // Simulate successful submission
    setTimeout(() => {
      setFormStatus('success');
    }, 1000);
  };

  useEffect(() => {
    const isValid = Object.values(formData).every((field) => field !== '' && field !== [] && field !== false);
    setIsFormValid(isValid);
  }, [formData]);

  const toggleVisibility = (status: 'success' | 'error') => {
    if (status === 'success') {
      document.getElementById('js-form')?.classList.add('slide-up');
      document.getElementById('js-success')?.classList.add('slide-down');
    } else {
      document.getElementById('js-form')?.classList.add('slide-up');
      document.getElementById('js-error')?.classList.add('slide-down');
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="section-inner">
        <div className="contact-head">
          <h2 className="section-head">
            <span className="section-head-main">Contact -</span>
            <span className="section-head-sub">お問い合わせ</span>
          </h2>
          <p className="section-lead-text">
            お仕事のご依頼は、以下の内容を
            <br />
            ご記入いただき送信してください。
          </p>
        </div>
        <div className="section-contents contact-container">
          <div className="contact-form">
            <form id="js-form" onSubmit={handleSubmit}>
              <div className="contact-table">
                <div className="contact-row">
                  <div className="contact-item">
                    <span className="required">お名前</span>
                  </div>
                  <div className="contact-body">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      className="form-text"
                      placeholder="お名前"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="contact-row">
                  <div className="contact-item">
                    <span className="required">メール</span>
                  </div>
                  <div className="contact-body">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      className="form-text"
                      placeholder="sample@example.com"
                      required
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="contact-row">
                  <div className="contact-item">
                    <span className="required">ご依頼内容</span>
                  </div>
                  <div className="contact-body-checkbox">
                    <label htmlFor="lp" className="contact-checkbox">
                      <input
                        id="lp"
                        type="checkbox"
                        name="requestType"
                        value="LP制作"
                        checked={formData.requestType.includes('LP制作')}
                        onChange={handleChange}
                      />
                      <span className="contact-checkbox-txt">LP制作</span>
                    </label>
                    <label htmlFor="corp" className="contact-checkbox">
                      <input
                        id="corp"
                        type="checkbox"
                        name="requestType"
                        value="コーポレートサイト"
                        checked={formData.requestType.includes('コーポレートサイト')}
                        onChange={handleChange}
                      />
                      <span className="contact-checkbox-txt">コーポレートサイト</span>
                    </label>
                    <label htmlFor="wp" className="contact-checkbox">
                      <input
                        id="wp"
                        type="checkbox"
                        name="requestType"
                        value="WordPress構築"
                        checked={formData.requestType.includes('WordPress構築')}
                        onChange={handleChange}
                      />
                      <span className="contact-checkbox-txt">WordPress構築</span>
                    </label>
                    <label htmlFor="fix" className="contact-checkbox">
                      <input
                        id="fix"
                        type="checkbox"
                        name="requestType"
                        value="修正"
                        checked={formData.requestType.includes('修正')}
                        onChange={handleChange}
                      />
                      <span className="contact-checkbox-txt">修正</span>
                    </label>
                    <label htmlFor="other" className="contact-checkbox">
                      <input
                        id="other"
                        type="checkbox"
                        name="requestType"
                        value="その他"
                        checked={formData.requestType.includes("その他")}
                        onChange={handleChange}
                      />
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
                      <select
                        name="purpose"
                        className="form-select"
                        value={formData.purpose}
                        onChange={handleChange}
                      >
                        <option value="選択してください" disabled>
                          選択してください
                        </option>
                        <option value="集客増加">集客増加</option>
                        <option value="売上アップ">売上アップ</option>
                        <option value="ブランディング">ブランディング</option>
                        <option value="その他">その他</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* More form fields here... */}
              </div>
              <div className="contact-footer-submit">
                <button
                  id="js-submit"
                  className="util-link -submit"
                  type="submit"
                  disabled={!isFormValid}
                >
                  送信する
                </button>
              </div>
            </form>
            <div className="contact-message" id="js-success" style={{ display: formStatus === 'success' ? 'block' : 'none' }}>
              <p>送信完了しました。<br />ありがとうございました。</p>
            </div>
            <div className="contact-message -error" id="js-error" style={{ display: formStatus === 'error' ? 'block' : 'none' }}>
              <p>送信に失敗しました。<br />ページを更新して再度送信してください。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
