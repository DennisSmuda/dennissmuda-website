<style>
  .goo-button-container {
    position: relative;
    -webkit-filter: url("#goo");
    filter: url("../goo#goo");
  }
  .button {
    background-color: tomato;
  }

  .particle {
    position: absolute;
    top: calc(50% - 1rem);
    width: 2rem;
    height: 2rem;
    transform: translate3d(-1rem, 1rem, 0);
    background-color: tomato;
    animation: bubble 1.5s ease alternate infinite;
  }

  .particle:nth-child(2) {
    left: 25%;
    animation: bubble 2.5s ease alternate infinite;
  }

  .particle:nth-child(3) {
    animation-delay: 0.5s;
    left: 10%;
  }

  .particle:nth-child(4) {
    animation-delay: 1.25s;
    left: 70%;
  }

  @keyframes bubble {
    0% {
      transform: translate3d(-1rem, 0rem, 0);
    }
    100% {
      transform: translate3d(-1rem, 4rem, 0);
    }
  }
</style>

<section class="main-padding">
  <h2>Gooey</h2>
  <div class="goo-button-container">
    <div class="button">JO</div>
    <div class="particle" />
    <div class="particle" />
    <div class="particle" />
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    <defs>
      <filter id="goo">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -9"
          result="goo" />
        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
      </filter>
    </defs>
  </svg>
</section>
