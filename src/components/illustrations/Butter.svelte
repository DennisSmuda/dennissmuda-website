<style>
  svg {
    animation: float 9s ease alternate infinite;
  }

  .eye {
    /* stroke-dashoffset: -2px; */
    animation: blink 3s linear alternate infinite;
    transform-origin: 0% 35%;
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
    fill="#FFE27C" />
  <path
    d="M11 24.656C16 26.448 18 26.448 23.5 24.656"
    stroke="#271A01"
    stroke-width="4"
    stroke-linecap="round"
    stroke-linejoin="round" />
  <line
    class="eye"
    x1="5"
    y1="20"
    x2="5"
    y2="20.096"
    stroke="#271A01"
    stroke-width="4"
    stroke-linecap="round" />
  <line
    class="eye"
    x1="30"
    y1="20"
    x2="30"
    y2="20.096"
    stroke="#271A01"
    stroke-width="4"
    stroke-linecap="round" />
  <path
    d="M2 63C0.89543 63 -3.91405e-08 62.1046 -8.74228e-08 61L-6.55671e-07 48L34
    48L34 61C34 62.1046 33.1046 63 32 63L2 63Z"
    fill="#E8CC6B"
    fill-opacity="0.68" />
  <line y1="47.5" x2="34" y2="47.5" stroke="#271A01" stroke-opacity="0.24" />
</svg>
