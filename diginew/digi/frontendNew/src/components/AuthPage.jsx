




// import React, { useState } from 'react';
// import './AuthPage.css';
// import axios from 'axios';
// import { useTranslation } from 'react-i18next';
// import { toast } from 'react-toastify';
// import { Link, useNavigate } from 'react-router-dom';



// const AuthPage = () => {
//   const [activeTab, setActiveTab] = useState('login');
//   const { t } = useTranslation();
//   const navigate = useNavigate();

//   const [loginEmail, setLoginEmail] = useState('');
//   const [loginPassword, setLoginPassword] = useState('');

//   const [signupName, setSignupName] = useState('');
//   const [signupEmail, setSignupEmail] = useState('');
//   const [signupPassword, setSignupPassword] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/login', {
//         email: loginEmail,
//         password: loginPassword,
//       });
//       localStorage.setItem('token', res.data.token);
//       localStorage.setItem('user', JSON.stringify(res.data.user));
//       toast.success(t('auth.loginSuccess'));
//       navigate('/profile');
//     } catch (err) {
//       toast.error(err.response?.data?.message || t('auth.loginError'));
//     }
//   };

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/register', {
//         name: signupName,
//         email: signupEmail,
//         password: signupPassword,
//       });
//       localStorage.setItem('token', res.data.token);
//       localStorage.setItem('user', JSON.stringify(res.data.user));
//       toast.success(t('auth.signupSuccess'));
//       navigate('/profile');
//     } catch (err) {
//       toast.error(err.response?.data?.message || t('auth.signupError'));
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-tabs">
//         <button className={activeTab === 'login' ? 'active' : ''} onClick={() => setActiveTab('login')}>
//           {t('auth.login')}
//         </button>
//         <button className={activeTab === 'signup' ? 'active' : ''} onClick={() => setActiveTab('signup')}>
//           {t('auth.signup')}
//         </button>
//       </div>

//       <div className="auth-form">
//         {activeTab === 'login' ? (
//           <form onSubmit={handleLogin} className="auth-form-inner">
//             <input type="email" placeholder={t('auth.email')} value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} required />
//             <input type="password" placeholder={t('auth.password')} value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} required />
//             <button type="submit">{t('auth.login')}</button>
//             <p className="auth-forgot">
//               <Link to="/forgot-password">{t('auth.forgotPassword')}</Link>
//             </p>
//           </form>
//         ) : (
//           <form onSubmit={handleSignup} className="auth-form-inner">
//             <input type="text" placeholder={t('auth.name')} value={signupName} onChange={(e) => setSignupName(e.target.value)} required />
//             <input type="email" placeholder={t('auth.email')} value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} required />
//             <input type="password" placeholder={t('auth.password')} value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} required />
//             <button type="submit">{t('auth.signup')}</button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AuthPage;




import React, { useState, useContext } from 'react';
import './AuthPage.css';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState('login');
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { setUser, setToken } = useContext(UserContext); // 👈 اضافه شد

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email: loginEmail,
        password: loginPassword,
      });

      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      setUser(res.data.user);       // 👈 کاربر به کانتکست اضافه شود
      setToken(res.data.token);     // 👈 توکن هم در کانتکست ذخیره شود

      toast.success(t('auth.loginSuccess'));
      navigate('/profile');
    } catch (err) {
      toast.error(err.response?.data?.message || t('auth.loginError'));
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        name: signupName,
        email: signupEmail,
        password: signupPassword,
      });

      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      setUser(res.data.user);       // 👈 بعد از ثبت‌نام هم
      setToken(res.data.token);

      toast.success(t('auth.signupSuccess'));
      navigate('/profile');
    } catch (err) {
      toast.error(err.response?.data?.message || t('auth.signupError'));
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-tabs">
        <button className={activeTab === 'login' ? 'active' : ''} onClick={() => setActiveTab('login')}>
          {t('auth.login')}
        </button>
        <button className={activeTab === 'signup' ? 'active' : ''} onClick={() => setActiveTab('signup')}>
          {t('auth.signup')}
        </button>
      </div>

      <div className="auth-form">
        {activeTab === 'login' ? (
          <form onSubmit={handleLogin} className="auth-form-inner">
            <input type="email" placeholder={t('auth.email')} value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} required />
            <input type="password" placeholder={t('auth.password')} value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} required />
            <button type="submit">{t('auth.login')}</button>
            <p className="auth-forgot">
              <Link to="/forgot-password">{t('auth.forgotPassword')}</Link>
            </p>
          </form>
        ) : (
          <form onSubmit={handleSignup} className="auth-form-inner">
            <input type="text" placeholder={t('auth.name')} value={signupName} onChange={(e) => setSignupName(e.target.value)} required />
            <input type="email" placeholder={t('auth.email')} value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} required />
            <input type="password" placeholder={t('auth.password')} value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} required />
            <button type="submit">{t('auth.signup')}</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
