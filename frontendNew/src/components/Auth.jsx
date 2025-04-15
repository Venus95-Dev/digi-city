

import React, { useState } from 'react';
import './Auth.css';
import { useTranslation } from 'react-i18next';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const { t } = useTranslation();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(isLogin ? t('auth.loginSuccess') : t('auth.signupSuccess'));
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? t('auth.loginTitle') : t('auth.signupTitle')}</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="email">{t('auth.email')}</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">{t('auth.password')}</label>
          <input type="password" id="password" required />
        </div>
        <button type="submit">
          {isLogin ? t('auth.loginBtn') : t('auth.signupBtn')}
        </button>
      </form>
      <p>
        {isLogin ? t('auth.noAccount') : t('auth.haveAccount')}{' '}
        <span className="toggle-link" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? t('auth.signupBtn') : t('auth.loginBtn')}
        </span>
      </p>
    </div>
  );
};

export default Auth;
