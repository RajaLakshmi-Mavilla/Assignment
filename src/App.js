import React from "react";
import Sign from "./Components/Sign";
import ProfileViews from "./Components/ProfileViews";
import FreQue from "./Components/FreQue";
import Blog from "./Components/Blog";
import Footer from "./Components/Footer";
import "./styles.css";
const MyIcon = () => (
  <svg
    width="38"
    height="38"
    viewBox="0 0 38 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_dd_6948_193)">
      <g clip-path="url(#clip0_6948_193)">
        <rect x="3" y="2" width="32" height="32" rx="8" fill="white" />
        <rect
          x="3"
          y="2"
          width="32"
          height="32"
          rx="8"
          fill="url(#paint0_linear_6948_193)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19 4.03861C11.2895 4.03861 5.03885 10.2892 5.03885 17.9998C5.03885 25.7103 11.2895 31.9609 19 31.9609C26.7106 31.9609 32.9612 25.7103 32.9612 17.9998C32.9612 10.2892 26.7106 4.03861 19 4.03861ZM4.96118 17.9998C4.96118 10.2463 11.2466 3.96094 19 3.96094C26.7535 3.96094 33.0389 10.2463 33.0389 17.9998C33.0389 25.7532 26.7535 32.0386 19 32.0386C11.2466 32.0386 4.96118 25.7532 4.96118 17.9998Z"
          fill="#D0D5DD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19 14.0777C16.8338 14.0777 15.0777 15.8338 15.0777 18C15.0777 20.1662 16.8338 21.9223 19 21.9223C21.1662 21.9223 22.9223 20.1662 22.9223 18C22.9223 15.8338 21.1662 14.0777 19 14.0777ZM15 18C15 15.7909 16.7909 14 19 14C21.2091 14 23 15.7909 23 18C23 20.2091 21.2091 22 19 22C16.7909 22 15 20.2091 15 18Z"
          fill="#D0D5DD"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19 15.3199C17.5201 15.3199 16.3204 16.5196 16.3204 17.9995C16.3204 19.4794 17.5201 20.6791 19 20.6791C20.4799 20.6791 21.6796 19.4794 21.6796 17.9995C21.6796 16.5196 20.4799 15.3199 19 15.3199ZM16.2427 17.9995C16.2427 16.4767 17.4772 15.2422 19 15.2422C20.5228 15.2422 21.7573 16.4767 21.7573 17.9995C21.7573 19.5223 20.5228 20.7568 19 20.7568C17.4772 20.7568 16.2427 19.5223 16.2427 17.9995Z"
          fill="#D0D5DD"
        />
        <path d="M18.9612 2H19.0389V34H18.9612V2Z" fill="#D0D5DD" />
        <path
          d="M35 17.9609L35 18.0386L3 18.0386L3 17.9609L35 17.9609Z"
          fill="#D0D5DD"
        />
        <path d="M29.6019 2H29.6796V34H29.6019V2Z" fill="#D0D5DD" />
        <path d="M13.6407 2H13.7184V34H13.6407V2Z" fill="#D0D5DD" />
        <path d="M24.2816 2H24.3592V34H24.2816V2Z" fill="#D0D5DD" />
        <path d="M8.32037 2H8.39804V34H8.32037V2Z" fill="#D0D5DD" />
        <path
          d="M35 28.6016L35 28.6792L3 28.6792L3 28.6016L35 28.6016Z"
          fill="#D0D5DD"
        />
        <path
          d="M35 12.6406L35 12.7183L3 12.7183L3 12.6406L35 12.6406Z"
          fill="#D0D5DD"
        />
        <path
          d="M35 23.2812L35 23.3589L3 23.3589L3 23.2812L35 23.2812Z"
          fill="#D0D5DD"
        />
        <path
          d="M35 7.32031L35 7.39798L3 7.39798L3 7.32031L35 7.32031Z"
          fill="#D0D5DD"
        />
        <g filter="url(#filter1_dd_6948_193)">
          <circle cx="19" cy="18" r="8" fill="url(#paint1_linear_6948_193)" />
        </g>
        <g filter="url(#filter2_b_6948_193)">
          <path
            d="M3 18H35V21.2C35 25.6804 35 27.9206 34.1281 29.6319C33.3611 31.1372 32.1372 32.3611 30.6319 33.1281C28.9206 34 26.6804 34 22.2 34H15.8C11.3196 34 9.07937 34 7.36808 33.1281C5.86278 32.3611 4.63893 31.1372 3.87195 29.6319C3 27.9206 3 25.6804 3 21.2V18Z"
            fill="white"
            fill-opacity="0.2"
          />
        </g>
      </g>
      <rect
        x="3.1"
        y="2.1"
        width="31.8"
        height="31.8"
        rx="7.9"
        stroke="#D0D5DD"
        stroke-width="0.2"
      />
    </g>
    <defs>
      <filter
        id="filter0_dd_6948_193"
        x="0"
        y="0"
        width="38"
        height="38"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_6948_193"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_6948_193"
          result="effect2_dropShadow_6948_193"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_6948_193"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_dd_6948_193"
        x="8"
        y="8"
        width="22"
        height="22"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_6948_193"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_dropShadow_6948_193"
          result="effect2_dropShadow_6948_193"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect2_dropShadow_6948_193"
          result="shape"
        />
      </filter>
      <filter
        id="filter2_b_6948_193"
        x="-2"
        y="13"
        width="42"
        height="26"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="2.5" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_6948_193"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_6948_193"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_6948_193"
        x1="19"
        y1="2"
        x2="19"
        y2="34"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="white" />
        <stop offset="1" stop-color="#D0D5DD" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_6948_193"
        x1="15"
        y1="26"
        x2="23"
        y2="10"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#53389E" />
        <stop offset="1" stop-color="#6941C6" />
      </linearGradient>
      <clipPath id="clip0_6948_193">
        <rect x="3" y="2" width="32" height="32" rx="8" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
const Drop = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 7.5L10 12.5L15 7.5"
      stroke="#475467"
      stroke-width="1.66667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
const Profile = () => (
  <div className="profile-container">
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.08">
        <rect
          x="0.375"
          y="0.375"
          width="39.25"
          height="39.25"
          rx="19.625"
          stroke="#101828"
          strokeWidth="0.75"
        />
      </g>
    </svg>
  </div>
);

const App = () => (
  <div>
    <div class="container">
      <div class="div1">
        <MyIcon />
        <h1>Untitled</h1>
        <p> Home</p>
        <p> Products</p>
        <p>
          <Drop />
        </p>
        <p> Resources</p>
        <p>
          <Drop />
        </p>
        <p> Pricing</p>
      </div>
      <div class="div2">
        <Profile />
      </div>
    </div>

    <div className="col">
      <div className="Sign">
        <Sign />
      </div>
      <div className="Profile">
        <ProfileViews />
      </div>
      <div className="faq-container">
        <FreQue />
      </div>
      <div className="faq-container">
        <Blog />
      </div>
      <div className="faq-container">
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
