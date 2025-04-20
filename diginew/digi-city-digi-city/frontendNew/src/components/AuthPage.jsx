// ✅ AuthPage.jsx - صفحه ورود / ثبت‌نام با تب‌بندی
import React, { useState } from 'react';
import './AuthPage.css';
import { useTranslation } from 'react-i18next';

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState('login');
  const { t } = useTranslation();

  return (
    <div className="auth-container">
      <div className="auth-tabs">
        <button
          className={activeTab === 'login' ? 'active' : ''}
          onClick={() => setActiveTab('login')}
        >
          {t('auth.login')}
        </button>
        <button
          className={activeTab === 'signup' ? 'active' : ''}
          onClick={() => setActiveTab('signup')}
        >
          {t('auth.signup')}
        </button>
      </div>

      <div className="auth-form">
        {activeTab === 'login' ? (
          <form>
            <input type="email" placeholder={t('auth.email')} required />
            <input type="password" placeholder={t('auth.password')} required />
            <button type="submit">{t('auth.login')}</button>
          </form>
        ) : (
          <form>
            <input type="text" placeholder={t('auth.name')} required />
            <input type="email" placeholder={t('auth.email')} required />
            <input type="password" placeholder={t('auth.password')} required />
            <button type="submit">{t('auth.signup')}</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
