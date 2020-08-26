<style>
  #cookie {
    animation: float 9s ease alternate infinite;
  }

  #eye-1,
  #eye-2 {
    stroke-dasharray: 4px;
    /* stroke-dashoffset: -2px; */
    animation: blink 5s linear alternate infinite;
  }
  @keyframes blink {
    0%,
    100% {
      stroke-dashoffset: -3px;
    }
    5%,
    95% {
      stroke-dashoffset: 0px;
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
  id="cookie"
  width="81"
  height="80"
  viewBox="0 0 81 80"
  fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <circle cx="41" cy="40" r="40" fill="#F7D29C" />
  <mask
    id="mask0"
    mask-type="alpha"
    maskUnits="userSpaceOnUse"
    x="1"
    y="0"
    width="80"
    height="80">
    <circle cx="41" cy="40" r="40" fill="#F7D29C" />
  </mask>
  <g mask="url(#mask0)">
    <path
      d="M72.8726 64.7585C64.2343 76.1139 12.6528 83.5678 -0.364502
      32.8253L3.24362 86.1326L66.9094 89.9103L72.8726 64.7585Z"
      fill="#270606"
      fill-opacity="0.1" />
  </g>
  <ellipse
    cx="6.99999"
    cy="49"
    rx="2"
    ry="4"
    transform="rotate(-10.0189 6.99999 49)"
    fill="#634201" />
  <circle cx="64.5" cy="51.5" r="3.5" fill="#634201" />
  <ellipse
    cx="27.6874"
    cy="9.41322"
    rx="5"
    ry="3"
    transform="rotate(-18.2248 27.6874 9.41322)"
    fill="#634201" />
  <ellipse
    cx="34.7555"
    cy="63.43"
    rx="2.0403"
    ry="3"
    transform="rotate(93.9989 34.7555 63.43)"
    fill="#634201" />
  <ellipse
    cx="57.5726"
    cy="14.512"
    rx="6.5"
    ry="5"
    transform="rotate(15 57.5726 14.512)"
    fill="#634201" />
  <ellipse
    cx="66.1251"
    cy="71.0461"
    rx="6.29509"
    ry="3.34689"
    transform="rotate(-37.3409 66.1251 71.0461)"
    fill="#634201" />
  <ellipse
    cx="6.04604"
    cy="24.1252"
    rx="6.29509"
    ry="3.34689"
    transform="rotate(-60 6.04604 24.1252)"
    fill="#634201" />
  <ellipse
    cx="21.338"
    cy="73.1189"
    rx="4.17891"
    ry="3.34689"
    transform="rotate(34.2695 21.338 73.1189)"
    fill="#634201" />
  <g class="face">
    <path
      d="M35 46C40 49.5 42 49.5 47.5 46"
      stroke="#271A01"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round" />
    <line
      id="eye-1"
      x1="29"
      y1="35"
      x2="29"
      y2="39"
      stroke="#271A01"
      stroke-width="4"
      stroke-linecap="round" />
    <line
      id="eye-2"
      x1="54"
      y1="35"
      x2="54"
      y2="39"
      stroke="#271A01"
      stroke-width="4"
      stroke-linecap="round" />
  </g>
</svg>
