<style>
  .circles {
    display: flex;
    position: relative;
    z-index: 2;
    /* background-color: var(--second-background-color); */
  }
  .wrapper {
    position: absolute;
  }

  .circle {
    position: absolute;
    z-index: 0;
    width: 50vw;
    height: 50vw;
  }
  .wrapper:first-child {
    left: 0;
    background-color: var(--background-color);
  }
  .wrapper:last-child {
    background-color: var(--second-background-color);
  }

  .wrapper:first-child .circle {
    left: 0;
    top: -25%;
    border-top-right-radius: 50%;
    background-color: var(--second-background-color);
  }
  .wrapper:last-child .circle {
    right: 0;
    border-bottom-left-radius: 50%;
    background-color: var(--background-color);
  }
</style>

<div class="circles">
  <div class="wrapper">
    <div class="circle" />
  </div>
  <div class="wrapper">
    <div class="circle" />
  </div>
</div>
