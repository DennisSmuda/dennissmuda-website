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
  width="69"
  height="44"
  viewBox="0 0 69 44"
  fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="14" cy="10" rx="14" ry="10" fill="#F1F1F1" />
  <ellipse
    cx="33.3481"
    cy="21.9994"
    rx="24.6348"
    ry="17.7065"
    transform="rotate(-3.06772 33.3481 21.9994)"
    fill="white" />

  <ellipse cx="52.5" cy="31" rx="16.5" ry="13" fill="white" />
  <g>
    <path
      d="M25 28C30.2 28 32.28 28 38 28"
      stroke="#271A01"
      stroke-opacity="0.69"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round" />
    <line
      x1="2"
      y1="-2"
      x2="3.86486"
      y2="-2"
      transform="matrix(-0.350371 0.936611 -0.926431 -0.376464 16.0549 16)"
      stroke="#271A01"
      stroke-opacity="0.69"
      stroke-width="4"
      stroke-linecap="round" />
    <line
      x1="2"
      y1="-2"
      x2="4.33293"
      y2="-2"
      transform="matrix(0.157905 0.987454 -0.985246 0.171145 42.0275 16.662)"
      stroke="#271A01"
      stroke-opacity="0.69"
      stroke-width="4"
      stroke-linecap="round" />
  </g>
  <ellipse cx="16" cy="37.5" rx="10" ry="6.5" fill="white" />
</svg>
