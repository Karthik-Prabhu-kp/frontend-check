import "./styles.css";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Carousal from "./components/carousal/Carousal";
import CookiePopup from "./components/cookiePopup/Cookiepopup";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <div className="hero-section">
        <div>
          <span>slack is where the future works</span>
          <p>
            Transform the way you work with one place for everyone and
            everything you need to get stuff done.
          </p>
          <button>try for free</button>
          <button>signup with google</button>
        </div>
        <img src="https://placehold.co/600x400/png" alt="Hero" />
      </div>
      <Carousal />
      <div className="secondary-section">
        <img src="https://placehold.co/600x400/png" alt="Secondary" />
        <div>
          <span>Now is your moment to build a better tomorrow</span>
          <p>
            We've seen what the future can be now its time to decide what it
            will be
          </p>
          <button>watch video</button>
        </div>
      </div>
      <CookiePopup />
    </div>
  );
}
