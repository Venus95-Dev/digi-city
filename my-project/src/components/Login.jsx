import React, { useState } from 'react';
import './Auth.css';

const Auth = () => {
  const [activeForm, setActiveForm] = useState('login'); // 'login', 'signup', 'forgot'

  const renderForm = () => {
    switch (activeForm) {
      case 'login':
        return (
          <form>
            <h2>Login</h2>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Login</button>
            <p>
              <span onClick={() => setActiveForm('forgot')}>Forgot Password?</span>
            </p>
            <p>
              Don't have an account?{' '}
              <span onClick={() => setActiveForm('signup')}>Sign Up</span>
            </p>
          </form>
        );
      case 'signup':
        return (
          <form>
            <h2>Sign Up</h2>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <button type="submit">Sign Up</button>
            <p>
              Already have an account?{' '}
              <span onClick={() => setActiveForm('login')}>Login</span>
            </p>
          </form>
        );
      case 'forgot':
        return (
          <form>
            <h2>Forgot Password</h2>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Send Reset Link</button>
            <p>
              Remembered your password?{' '}
              <span onClick={() => setActiveForm('login')}>Login</span>
            </p>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <div className="auth-container">
      {renderForm()}
    </div>
  );
};

export default Auth;