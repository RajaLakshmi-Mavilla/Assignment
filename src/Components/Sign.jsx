import React from "react";
import "./index.css";
const Arrow = () => (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.83334 8.00016H13.1667M13.1667 8.00016L8.5 3.3335M13.1667 8.00016L8.5 12.6668"
      stroke="#9E77ED"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const Demo = () => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z"
      stroke="#344054"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10 8.96533C10 8.48805 10 8.24941 10.0997 8.11618C10.1867 8.00007 10.3197 7.92744 10.4644 7.9171C10.6304 7.90525 10.8311 8.03429 11.2326 8.29239L15.9532 11.3271C16.3016 11.551 16.4758 11.663 16.5359 11.8054C16.5885 11.9298 16.5885 12.0702 16.5359 12.1946C16.4758 12.337 16.3016 12.449 15.9532 12.6729L11.2326 15.7076C10.8311 15.9657 10.6304 16.0948 10.4644 16.0829C10.3197 16.0726 10.1867 15.9999 10.0997 15.8838C10 15.7506 10 15.512 10 15.0347V8.96533Z"
      stroke="#344054"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const Sign = () => {
  return (
    <div className="btn-container">
      <div className="button-container">
        <button className="btn">New feature</button>
        <button className="btny">
          Check out the team dashboard <Arrow />
        </button>
      </div>

      <h1>Beautiful analytics to grow smarter</h1>

      <p className="para">
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </p>

      <div className="btn-ds">
        <button className="btn-demo">
          <Demo /> Demo
        </button>
        <button className="btn-sign">Sign up</button>
      </div>
    </div>
  );
};

export default Sign;