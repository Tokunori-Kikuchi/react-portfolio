import React, { useState } from "react";
import axios from "axios";

const ContactPage: React.FC = () => {
  // フォームの入力値を管理するための状態変数
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    request: false,
    purpose: "",
    deadline: "",
    budget: "",
    publish: false,
    contractStatus: false,
    referenceSite: "",
    message: "",
    privacyConsent: false,
  });

  // フォームの入力変更をハンドルする関数
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type,  } = e.target;
    // setFormData({
    //   ...formData,
    //   [name]: type === "checkbox" ? checked : value,
    // });

  // HTMLInputElement 型であることを確認するための型ガード
  if (type === "checkbox" && e.target instanceof HTMLInputElement) {
    setFormData({
      ...formData,
      [name]: checked, // チェックボックスの場合は checked を使用
    });
  } else {
    setFormData({
      ...formData,
      [name]: value, // その他の入力フィールドは value を使用
    });
  }
  };

  // フォーム送信時の処理
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // フォームデータをサーバーに送信
      await axios.post("/api/contact", formData);
      alert("フォームが送信されました!");
    } catch (error) {
      alert("送信に失敗しました。もう一度試してください。");
    }
  };

  // 送信ボタンが有効か無効かを判断する関数
  const isFormValid = () => {
    return Object.values(formData).every((value) => value !== "" && value !== false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>名前 (必須)</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>メールアドレス (必須)</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>依頼内容 (必須)</label>
        <input
          type="checkbox"
          name="request"
          checked={formData.request}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>制作目的 (必須)</label>
        <select
          name="purpose"
          value={formData.purpose}
          onChange={handleChange}
          required
        >
          <option value="">選択してください</option>
          <option value="web">Web制作</option>
          <option value="app">アプリ制作</option>
          <option value="graphic">グラフィックデザイン</option>
        </select>
      </div>

      <div>
        <label>希望納期 (必須)</label>
        <input
          type="date"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>予算 (必須)</label>
        <input
          type="text"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>実績掲載可否</label>
        <input
          type="checkbox"
          name="publish"
          checked={formData.publish}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>契約状況 (必須)</label>
        <input
          type="checkbox"
          name="contractStatus"
          checked={formData.contractStatus}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>参考サイト</label>
        <input
          type="url"
          name="referenceSite"
          value={formData.referenceSite}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>問い合わせ内容</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>プライバシーポリシーへの同意</label>
        <input
          type="checkbox"
          name="privacyConsent"
          checked={formData.privacyConsent}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        disabled={!isFormValid()}
        style={{
          backgroundColor: isFormValid() ? "#4CAF50" : "#ccc",
        }}
      >
        送信
      </button>
    </form>
  );
};

export default ContactPage;
