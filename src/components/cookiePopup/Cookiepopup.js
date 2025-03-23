import { useState, useEffect } from "react";
import "./CookiePopup.css";

export default function CookiePopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");
    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-popup">
      <div className="cookie-message">
        <span>Hey there! Want to know something cool?</span>
        <button className="close-button" onClick={handleClose}>
          ✕
        </button>
      </div>
      <div className="cookie-content">
        <p>
          This website uses cookies to enhance user experience and to analyze
          performance and traffic on our website. We also share information
          about your use of our site with our social media, advertising and
          analytics partners. <a href="#">More info</a>
        </p>
        <button className="accept-button" onClick={handleAccept}>
          Accept All Cookies
        </button>
      </div>
    </div>
  );
}
