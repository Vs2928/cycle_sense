import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import "./ModernLogin.css";

const ModernLogin = () => {
  const [isActive, setIsActive] = useState(false);
  const [signUpData, setSignUpData] = useState({ name: "", email: "", password: "" });
  const [signInData, setSignInData] = useState({ email: "", password: "" });

  const handleSignUpChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const handleSignInChange = (e) => {
    setSignInData({ ...signInData, [e.target.name]: e.target.value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("Sign Up Data:", signUpData);
    // Implement API request for sign-up
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log("Sign In Data:", signInData);
    // Implement API request for sign-in
  };

  return (
    <div className="body1">
      <div className={`container ${isActive ? "active" : ""}`} id="container">
        {/* Sign-Up Form */}
        <div className="form-container sign-up">
          <form onSubmit={handleSignUp}>
            <h1>Create Account</h1>
            <div className="social-icons">
              <a onClick={() => alert("Google Login")}><i className="fa-brands fa-google-plus-g"></i></a>
              <a onClick={() => alert("Facebook Login")}><i className="fa-brands fa-facebook-f"></i></a>
              <a onClick={() => alert("GitHub Login")}><i className="fa-brands fa-github"></i></a>
              <a onClick={() => alert("LinkedIn Login")}><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" name="name" placeholder="Name" value={signUpData.name} onChange={handleSignUpChange} required />
            <input type="email" name="email" placeholder="Email" value={signUpData.email} onChange={handleSignUpChange} required />
            <input type="password" name="password" placeholder="Password" value={signUpData.password} onChange={handleSignUpChange} required />
            <button type="submit">Sign Up</button>
          </form>
        </div>

        {/* Sign-In Form */}
        <div className="form-container sign-in">
          <form onSubmit={handleSignIn}>
            <h1>Sign In</h1>
            <div className="social-icons">
              <a onClick={() => alert("Google Login")}><i className="fa-brands fa-google-plus-g"></i></a>
              <a onClick={() => alert("Facebook Login")}><i className="fa-brands fa-facebook-f"></i></a>
              <a onClick={() => alert("GitHub Login")}><i className="fa-brands fa-github"></i></a>
              <a onClick={() => alert("LinkedIn Login")}><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
            <span>or use your email and password</span>
            <input type="email" name="email" placeholder="Email" value={signInData.email} onChange={handleSignInChange} required />
            <input type="password" name="password" placeholder="Password" value={signInData.password} onChange={handleSignInChange} required />
            <a href="#">Forgot Your Password?</a>
            <button type="submit">Log in</button>
          </form>
        </div>

        {/* Toggle Container */}
        <div className="toggle-container">
          <div className="toggle">
            {/* Left Toggle (for Sign In) */}
            <div className="toggle-panel toggle-left">
              <h1>Hello, Friend!</h1>
              <p>Register with your details</p>
              <button className="hidden" onClick={() => setIsActive(false)}>Sign In</button>
            </div>

            {/* Right Toggle (for Sign Up) */}
            <div className="toggle-panel toggle-right">
              <h1>Welcome Back!</h1>
              <p>Enter your details to sign in</p>
              <button className="hidden" onClick={() => setIsActive(true)}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>

      {/* Add a back button */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Link to="/" className="btn">Back to Home</Link>
      </div>
    </div>
  );
};

export default ModernLogin;