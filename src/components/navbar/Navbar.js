import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img
          src="https://cdn.brandfetch.io/idJ_HhtG0Z/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1739775212804"
          alt="Slack Logo"
          className="slack-logo"
        />
        <span>Product</span>
        <span>Enterprise</span>
        <span>Resources</span>
        <span>Pricing</span>
      </div>
      <div className="navbar-right">
        <span>Sign in</span>
        <button>Talk to sales</button>
        <button>Try for free</button>
      </div>
    </div>
  );
}
