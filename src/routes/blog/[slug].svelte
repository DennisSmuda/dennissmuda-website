<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Footer from "../../components/Footer.svelte";
  export let post;
</script>

<style>
  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }

  .content :global(pre) {
    border-left: 3px solid var(--accent-color);
    background-color: var(--third-background-color);
    border-radius: 0.5rem;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 1.5rem;
    overflow-x: auto;
    margin: 1.5rem -1.5rem;
  }

  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }

  .content :global(ul) {
    line-height: 1.5;
  }

  .content :global(li) {
    margin: 0 0 0.5em 0;
  }
</style>

<svelte:head>
  <title>{post.title} - Blog | Dennis Smuda</title>
</svelte:head>

<section class="h-padding container container--narrow">
  <div class="content">
    <h1 class="color-change">{post.title}</h1>
    <span>{post.createdAt}</span>

    {@html post.html}
  </div>
</section>

<div class="main-padding" />

<Footer />
