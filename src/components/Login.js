import { useState } from "react";
import "../styles/login.css";

function Login() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);
  const phoneNumberRegex = /^\d+$/;
  const emailRegex = /^\S+@\S+\.\S+$/;

  const handleInputChange = (e) => {
    const value = e.target.value.trim();
    setInputValue(value);

    if (value === "") {
      setError("");
      setIsValid(false);
      return;
    }
    // Validate phone number
    if (phoneNumberRegex.test(value)) {
      if (value.length === 10) {
        setError("");
        setIsValid(true);
      } else {
        setError("Please enter a 10-digit phone number.");
        setIsValid(false);
      }
    }
    // Validate email
    else if (emailRegex.test(value)) {
      setError("");
      setIsValid(true);
    } else {
      setError("Please enter a valid email address.");
      setIsValid(false);
    }
  };

  const handleNextClick = () => {
    if (isValid) {
      alert("All good ! 🚀 You're all set to explore. Thanks for signing in!");
      setInputValue("");
      setIsValid(false);
    } else {
      alert("Please fix the errors before proceeding.");
    }
  };

  return (
    <div className="login-box">
      <h2 className="login-heading">Login to Dashboard</h2>
      <div className="input-label">Email or Mobile Number</div>
      <input
        type="text"
        className="input-box"
        value={inputValue}
        onChange={handleInputChange}
        maxLength={phoneNumberRegex.test(inputValue) ? 10 : undefined}
      />
      {error && <div className="error-message">{error}</div>}
      <button onClick={handleNextClick} disabled={!isValid}>
        Next
      </button>
      <div class="divider">
        <span class="line"></span>
        <p class="or">or</p>
        <span class="line"></span>
      </div>
      <button className="google-signin">Sign in with Google</button>
    </div>
  );
}

export default Login;
