<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts };
      });
  }
</script>

<script>
  import { playClick } from "../../utils/Sounds";

  export let posts;
</script>

<svelte:head>
  <title>Blog | Dennis Smuda</title>
</svelte:head>

<section class="h-padding container container--narrow">
  <div class="content">
    <h1 class="color-change">Writing</h1>
    <p class="big-paragraph">
      some thoughts
      <br />
      and words
    </p>
    <!-- </section>
<section class="h-padding secondary-background"> -->
    <div class="container container--narrow">
      <ul>
        {#each posts as post}
          <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
          <li>
            <!-- {JSON.stringify(post)} -->
            <a rel="prefetch" href="blog/{post.slug}" on:click={playClick}>
              <div class="title-line">
                <span class="title">{post.title}</span>
                <span class="created">{post.createdAt}</span>
              </div>
              <span class="description">{post.description}</span>
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>

<div class="main-padding" />

<style>
  ul {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
  li {
    /* height: 5rem; */
  }
  li:after {
    top: 0rem;
    height: 2rem;
  }
  li:hover:after {
    height: 100%;
    transform: translateY(0);
  }

  li a {
    /* margin-top: 0.5rem; */
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
  }

  .created {
  }

  .title-line {
    display: flex;
    flex-direction: column-reverse;
  }

  @media screen and (min-width: 560px) {
    .title-line {
      flex-direction: row;
      justify-content: space-between;
      align-items: baseline;
    }
    li:after {
      top: 0.75rem;
    }
    ul li:hover::after {
      height: calc(100% - 0.75rem);
    }
  }

  .title {
    font-weight: 900;
    font-size: 2rem;
    color: var(--primary-color);
  }
  .description {
    color: var(--copy-color);
    white-space: initial;
    width: calc(100% - 2.5rem);
  }
</style>
