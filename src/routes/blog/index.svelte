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
  </div>
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
              <h3 class="title">{post.title}</h3>
              <span class="created">{post.createdAt}</span>
            </div>
            <span class="description">{post.description}</span>
            <div class="tags">
              <div class="tech-tags">
                {#each post.tags as tag}
                  <div class="tag tag--{tag.value}">{tag.name}</div>
                {/each}
              </div>
            </div>
          </a>
        </li>
      {/each}
    </ul>
  </div>
</section>

<div class="main-padding" />

<style>
  .big-paragraph {
    margin-top: -1rem;
  }
  ul {
    margin-top: 4rem;
    margin-bottom: 4rem;
    padding-left: 0;
  }
  li {
    /* height: 5rem; */
    margin-top: 5rem;
  }
  li:after {
    top: 0rem;
    left: -1rem;
    height: 1.5rem;
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
    border-radius: 0.5rem;
  }

  .created {
    color: var(--copy-color);
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
      gap: 1rem;
    }
    li:after {
      height: 2rem;
    }
    ul li:hover::after {
      height: 100%;
    }
  }

  .title {
    font-weight: 900;
    font-size: 2rem;
    color: var(--copy-color);
    white-space: initial;
    line-height: 1.125;
    transition: color 0.3s;
  }

  a:hover .title {
    color: var(--primary-color);
  }
  a:hover .description {
    opacity: 1;
  }

  .description {
    color: var(--copy-color);
    white-space: initial;
    width: calc(100% - 2.5rem);
    max-width: 420px;
    opacity: 0.75;
    transition: opacity 0.3s;
  }
  .tags * {
    width: initial;
  }

  .tags {
    display: block;
    margin-top: 0.5rem;
    width: initial;
  }
  .tag {
    display: inline;
  }
</style>
