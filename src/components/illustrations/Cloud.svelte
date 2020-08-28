<style>
  svg {
    animation: float 9s ease alternate infinite;
  }

  .eye {
    /* stroke-dashoffset: -2px; */
    animation: blink 3s linear alternate infinite;
    transform-origin: 0% 55%;
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
  <path
    d="M25 28C30.2 28 32.28 28 38 28"
    stroke="#271A01"
    stroke-opacity="0.69"
    stroke-width="4"
    stroke-linecap="round"
    stroke-linejoin="round" />
  <ellipse cx="16" cy="37.5" rx="10" ry="6.5" fill="white" />
  <line
    class="eye"
    x1="18.8858"
    y1="20.4003"
    x2="19.4003"
    y2="19.1142"
    stroke="#6A6150"
    stroke-width="4"
    stroke-linecap="round" />
  <line
    class="eye"
    x1="41.3534"
    y1="18.5689"
    x2="41.5689"
    y2="19.6466"
    stroke="#6A6150"
    stroke-width="4"
    stroke-linecap="round" />
</svg>
