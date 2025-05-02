




import React, { useState } from 'react'
import './AuthPage.css'
import axios from 'axios'
import { useTranslation } from 'react-i18next'
import { toast } from 'react-toastify';


const AuthPage = () => {
  const [activeTab, setActiveTab] = useState('login')
  const { t } = useTranslation()

  // States for login
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [loginMessage, setLoginMessage] = useState('')

  // States for signup
  const [signupName, setSignupName] = useState('')
  const [signupEmail, setSignupEmail] = useState('')
  const [signupPassword, setSignupPassword] = useState('')
  const [signupMessage, setSignupMessage] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        
        email: loginEmail,
        password: loginPassword,
      })
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('user', JSON.stringify(res.data.user))
      toast.success('✅ ورود با موفقیت انجام شد!');
      setLoginMessage(t('auth.success'))
      setTimeout(() => {
        window.location.reload()
      }, 1500);
    } catch (err) {
      toast.error(err.response?.data?.message || '❌ خطا در ورود');
      setLoginMessage(err.response?.data?.message || t('auth.error'))
    }
  }

  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        name: signupName,
        email: signupEmail,
        password: signupPassword,
      })
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('user', JSON.stringify(res.data.user))
      toast.success('✅ ثبت‌نام با موفقیت انجام شد!');
      setSignupMessage(t('auth.success'))

      setTimeout(() => {
        window.location.reload()
      }, 1500);
    } catch (err) {
      toast.error(err.response?.data?.message || '❌ خطا در ثبت‌نام');
      setSignupMessage(err.response?.data?.message || t('auth.error'))
    }
  }

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
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder={t('auth.email')}
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder={t('auth.password')}
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              required
            />
            <button type="submit">{t('auth.login')}</button>
            {loginMessage && <p className="auth-message">{loginMessage}</p>}
          </form>
        ) : (
          <form onSubmit={handleSignup}>
            <input
              type="text"
              placeholder={t('auth.name')}
              value={signupName}
              onChange={(e) => setSignupName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder={t('auth.email')}
              value={signupEmail}
              onChange={(e) => setSignupEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder={t('auth.password')}
              value={signupPassword}
              onChange={(e) => setSignupPassword(e.target.value)}
              required
            />
            <button type="submit">{t('auth.signup')}</button>
            {signupMessage && <p className="auth-message">{signupMessage}</p>}
          </form>
        )}
      </div>
    </div>
  )
}

export default AuthPage
