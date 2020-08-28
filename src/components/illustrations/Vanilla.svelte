<style>
  svg {
    animation: float 9s ease alternate infinite;
  }

  .eye {
    /* stroke-dashoffset: -2px; */
    animation: blink 3s linear alternate infinite;
    transform-origin: 0% 50%;
  }
  @keyframes blink {
    0%,
    100% {
      transform: scale(1, 0);
    }
    5%,
    95% {
      transform: scale(1, 1);
    }
  }
  @keyframes float {
    0% {
      transform: translate3d(1px, 2px, 0) rotate(-2deg);
    }
    33% {
      transform: translate3d(-1px, -1px, 0) rotate(0deg);
    }
    66% {
      transform: translate3d(-2px, 1px, 0) rotate(2deg);
    }
    100% {
      transform: translate3d(0px, 3px, 0) rotate(-2deg);
    }
  }
</style>

<svg
  width="67"
  height="71"
  viewBox="0 0 67 71"
  fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <path
    d="M30.5474 47.7427C25.2131 55.131 10.4988 66.0854 6.91656 63.4992C3.33434
    60.9129 12.2408 45.7652 17.575 38.3769C22.9093 30.9886 26.9652 32.413
    30.5474 34.9993C34.1296 37.5856 35.8816 40.3544 30.5474 47.7427Z"
    fill="#E6C75D" />
  <path
    d="M42.875 39.351C46.7507 47.5984 49.1976 65.7788 45.1988 67.6579C41.2
    69.537 32.2699 54.4033 28.3942 46.1558C24.5186 37.9084 27.7308 35.0517
    31.7296 33.1726C35.7283 31.2934 38.9994 31.1035 42.875 39.351Z"
    fill="#E6C75D" />
  <path
    d="M35.0322 28.9196C42.9986 24.4948 60.9717 20.8235 63.1171 24.686C65.2624
    28.5485 50.7676 38.4821 42.8013 42.9069C34.8349 47.3317 31.7674 44.3201
    29.6221 40.4576C27.4767 36.5952 27.0659 33.3444 35.0322 28.9196Z"
    fill="#E6C75D" />
  <path
    d="M23.9759 29.8716C21.5867 21.0777 22.3246 2.74826 26.5883 1.58988C30.8521
    0.431507 37.027 16.8828 39.4162 25.6768C41.8053 34.4707 38.147 36.7281
    33.8833 37.8865C29.6195 39.0449 26.365 38.6655 23.9759 29.8716Z"
    fill="#E6C75D" />
  <path
    d="M19.571 39.7946C12.8682 33.621 3.73806 17.7102 6.73134 14.4604C9.72461
    11.2105 23.7078 21.8523 30.4106 28.0259C37.1134 34.1995 35.2176 38.0577
    32.2243 41.3075C29.231 44.5573 26.2738 45.9683 19.571 39.7946Z"
    fill="#E6C75D" />
  <line
    class="eye"
    x1="27"
    y1="34"
    x2="27"
    y2="32"
    stroke="black"
    stroke-width="4"
    stroke-linecap="round"
    stroke-linejoin="round" />
  <line
    class="eye"
    x1="37"
    y1="33"
    x2="37"
    y2="31"
    stroke="black"
    stroke-width="4"
    stroke-linecap="round"
    stroke-linejoin="round" />
  <path
    d="M28.9872 41.1154C32.2243 42.356 33.5038 42.3191 36.9839 40.885"
    stroke="black"
    stroke-width="4"
    stroke-linecap="round"
    stroke-linejoin="round" />
</svg>
