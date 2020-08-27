<style>
  svg {
    animation: float 9s ease alternate infinite;
  }

  .eye {
    /* stroke-dashoffset: -2px; */
    animation: blink 3s linear alternate infinite;
    transform-origin: 0% 45%;
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
  width="34"
  height="63"
  viewBox="0 0 34 63"
  fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <rect
    y="63"
    width="63"
    height="34"
    rx="2"
    transform="rotate(-90 0 63)"
    fill="#ecdd56" />
  <g class="face">
    <path
      d="M11 30.656C16 32.448 18 32.448 23.5 30.656"
      stroke="#271A01"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round" />
    <line
      class="eye"
      x1="5"
      y1="26"
      x2="5"
      y2="26.096"
      stroke="#271A01"
      stroke-width="4"
      stroke-linecap="round" />
    <line
      class="eye"
      x1="30"
      y1="26"
      x2="30"
      y2="26.096"
      stroke="#271A01"
      stroke-width="4"
      stroke-linecap="round" />
  </g>
</svg>
