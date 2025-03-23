import "./Carousal.css";

const companyLogos = [
  "https://imgs.search.brave.com/0NryEqVy3l-5wTQYsNX0RKe8yjbEUrq09POzM7i0MvA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/amtoZXd5NHVma3U4/MS5wbmc_d2lkdGg9/NjQwJmNyb3A9c21h/cnQmYXV0bz13ZWJw/JnM9ZGQxNTliNmU0/OGQ3MzVjMzdkNzg2/Y2MwZTdjZWZiMjFm/NTYyZGYzMw",
  "https://imgs.search.brave.com/uHGKwrucgrcArC2P4uaK893ic_VXu59ACZTtqkZQZ5Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9Mb25lbHlf/UGxhbmV0L0xvbmVs/eV9QbGFuZXQtTG9n/by53aW5lLnN2Zw",
  "https://imgs.search.brave.com/ZMeIr8-0780X7f3fGtlGdK_TUpWrIwAYnSRZzoBmM3w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9JbnR1aXQv/SW50dWl0LUxvZ28u/d2luZS5zdmc",
  "https://imgs.search.brave.com/KgNyY1AF24BXo-IWYm5yo1Z4psGMH69mMAalI3YzK1g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzY0/NjNmYzQzMjcxZmJl/NDlmMjYzNmJmYy81/MGE5NTgzNS05ZmUz/LTQzMGItOGVlZC05/N2EwNzlmNGRkYzEv/Q2FydmFuYStCcmFu/ZCtMb2dvLmpwZw",
  "https://imgs.search.brave.com/xKd-wtm7LbVYYkzgyrULBPXbP4UPPRBGROJ74pl7eEk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb3Jw/b3JhdGUudGFyZ2V0/LmNvbS9nZXRtZWRp/YS84OTBmMzE5Mi1j/ZTM1LTQ5NmEtYTNj/Zi0xNWZjMGE4MTA1/ZDAvVGFyZ2V0X0J1/bGxzZXllLUxvZ29f/UmVkLmpwZz93aWR0/aD0xMTQ0",
];

export default function Carousal() {
  return (
    <div className="carousal">
      {companyLogos.map((logoUrl, index) => (
        <img
          key={index}
          src={logoUrl}
          alt={`Company Logo ${index + 1}`}
          className="company-logo"
        />
      ))}
    </div>
  );
}
