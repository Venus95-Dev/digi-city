import React, { useState } from 'react';
import './Auth.css';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      alert('Logged in successfully!');
    } else {
      alert('Signed up successfully!');
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'Log In' : 'Sign Up'}</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" required />
        </div>
        <button type="submit">{isLogin ? 'Log In' : 'Sign Up'}</button>
      </form>
      <p>
        {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
        <span
          className="toggle-link"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? 'Sign Up' : 'Log In'}
        </span>
      </p>
    </div>
  );
};

export default Auth;
