<style>
  svg {
    animation: float 9s ease alternate infinite;
  }

  .eye {
    /* stroke-dashoffset: -2px; */
    animation: blink 3s linear alternate infinite;
    transform-origin: 0% 62%;
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
  width="45"
  height="63"
  viewBox="0 0 45 63"
  fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <path
    d="M45 40C45 52.4264 34.9264 62.5 22.5 62.5C10.0736 62.5 0 52.4264 0 40C0
    27.5736 10.0736 0 22.5 0C34.9264 0 45 27.5736 45 40Z"
    fill="#FFF9F4" />
  <mask
    id="mask0"
    mask-type="alpha"
    maskUnits="userSpaceOnUse"
    x="0"
    y="0"
    width="45"
    height="63">
    <path
      d="M45 40.5C45 52.9264 34.9264 63 22.5 63C10.0736 63 0 52.9264 0 40.5C0
      28.0736 10.0736 0.5 22.5 0.5C34.9264 0.5 45 28.0736 45 40.5Z"
      fill="#FFF9F4" />
  </mask>
  <g mask="url(#mask0)">
    <path
      d="M-1.49999 59.5C12 62 21.1146 67.0978 28.5 62C10.7224 59.7597 -1 52.5
      0.500032 22.5L-1.49999 59.5Z"
      fill="#6A5F4D"
      fill-opacity="0.42" />
  </g>
  <path
    d="M18.0001 41.156C23.0001 42.948 25.0001 42.948 30.5001 41.156"
    stroke="#271A01"
    stroke-opacity="0.69"
    stroke-width="4"
    stroke-linecap="round"
    stroke-linejoin="round" />
  <line
    class="eye"
    x1="10.1643"
    y1="36.4547"
    x2="9.56242"
    y2="37.9984"
    stroke="#271A01"
    stroke-opacity="0.69"
    stroke-width="4"
    stroke-linecap="round" />
  <line
    class="eye"
    x1="37.3016"
    y1="36.144"
    x2="37.6441"
    y2="38.1984"
    stroke="#271A01"
    stroke-opacity="0.69"
    stroke-width="4"
    stroke-linecap="round" />
</svg>
