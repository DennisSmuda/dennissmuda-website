<script>
  import Footer from "../components/Footer.svelte";
</script>

<svelte:head>
  <title>About Me | Dennis Smuda</title>
</svelte:head>

<section class="container h-padding">

  <div class="content ">
    <h1 class="color-change">About me</h1>

    <p>
      Nice to meet you! My name is
      <span class="keyword">Dennis</span>
      and I have been working as a web dev for the last 5+ years. I'm constantly
      looking for new challenges and I try to focus on
      <span class="emphasis">creating unique experiences</span>
      - whatever that means.
    </p>

    <h2>I like</h2>
    <ul>
      <li>
        playing music
        <span class="emoji">🎸</span>
      </li>
      <li>
        finding new ways to do things
        <span class="emoji">🤔</span>
      </li>
      <li>
        being part of a team
        <span class="emoji">👑🎩🧢</span>
      </li>
      <li>
        riding my bike
        <div class="emoji">🚲</div>
      </li>
    </ul>

  </div>
</section>

<Footer />
