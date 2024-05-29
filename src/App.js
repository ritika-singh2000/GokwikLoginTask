import "./styles/styles.css";
import Login from "./components/Login";

function App() {
  return (
    <div className="outer-container">
      <div className="inner-container">
        <div className="footer">
          Need help? <span className="contact-link">Contact Us</span>
        </div>
      </div>
      <div className="login-container">
        <Login />
      </div>
    </div>
  );
}

export default App;
