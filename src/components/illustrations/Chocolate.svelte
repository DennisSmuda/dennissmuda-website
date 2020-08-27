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
    fill="#634201" />
  <path
    d="M2 63C0.89543 63 -3.91405e-08 62.1046 -8.74228e-08 61L-2.62268e-07 57L34
    57L34 61C34 62.1046 33.1046 63 32 63L2 63Z"
    fill="#472F00" />
  <line y1="56.5" x2="34" y2="56.5" stroke="#171001" stroke-opacity="0.73" />
  <line y1="45.5" x2="34" y2="45.5" stroke="#171001" stroke-opacity="0.35" />
  <line y1="35.5" x2="34" y2="35.5" stroke="#171001" stroke-opacity="0.35" />
  <line y1="25.5" x2="34" y2="25.5" stroke="#171001" stroke-opacity="0.35" />
  <line y1="15.5" x2="34" y2="15.5" stroke="#171001" stroke-opacity="0.35" />
  <line y1="5.5" x2="34" y2="5.5" stroke="#171001" stroke-opacity="0.35" />
  <line x1="10.5" x2="10.5" y2="56" stroke="#171001" stroke-opacity="0.35" />
  <line x1="23.5" x2="23.5" y2="56" stroke="#171001" stroke-opacity="0.35" />
  <path
    d="M10.2547 30.7924C14.6075 33.4588 16.4884 33.8448 22.0098 33.2045"
    stroke="#FFE7CB"
    stroke-width="4"
    stroke-linecap="round"
    stroke-linejoin="round" />
  <line
    class="eye"
    x1="9"
    y1="22"
    x2="9"
    y2="23.1"
    stroke="#FFE7CB"
    stroke-width="4"
    stroke-linecap="round" />
  <line
    class="eye"
    x1="25"
    y1="22"
    x2="25"
    y2="23.1"
    stroke="#FFE7CB"
    stroke-width="4"
    stroke-linecap="round" />
</svg>
