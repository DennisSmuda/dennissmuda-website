<!-- Some TECH Tags -->
<div class="flex flex-wrap mt-4 gap-4">
	<a href="blog" class="button tag-button tag-button--vue"> Javascript </a>
	<a href="/blog" class="button tag-button tag-button--css"> CSS </a>
	<a href="/blog" class="button tag-button tag-button--vue"> Vue </a>
	<a href="/blog" class="button tag-button tag-button--react"> React </a>
	<a href="/blog" class="button tag-button tag-button--vue"> Svelte </a>
	<a href="/blog" class="button tag-button tag-button--vue"> Godot </a>
	<a href="/blog" class="button tag-button tag-button--tailwind"> Tailwind </a>
	<a href="/blog" class="button tag-button tag-button--vue"> Rust </a>
</div>

<!-- Latest Posts -->
<h2 class="rotated md:pt-24">latest posts ✏️</h2>

<a class="latest-post mt-8" href="/blog/low-res-voxels">
	<span class="latest-post__date"> Jan. 29, 2023 </span>
	<h3 class="latest-post__title">Low-Res Graphics with Voxels 🌊⛵️</h3>
</a>

<a class="latest-post mt-8" href="/blog/godot-chunking-tutorial">
	<span class="latest-post__date"> Jul. 16, 2022 </span>
	<h3 class="latest-post__title">Threaded chunks with Godot 🌎</h3>
</a>
<a class="latest-post mt-8" href="/blog/bevy-run-get-started">
	<span class="latest-post__date"> Mar. 20, 2022 </span>
	<h3 class="latest-post__title">Get started with Rust & Bevy 🎮</h3>
</a>
<a class="latest-post mt-8" href="/blog/serverless-auth-tutorial">
	<span class="latest-post__date"> Jul. 5, 2021 </span>
	<h3 class="latest-post__title">Serverless authentication 🔑</h3>
</a>

<!-- Blog CTA -->
<a class="marker-link mt-4" href="/blog">check out all posts 📖</a>

<style lang="postcss">
	.latest-post {
		@apply no-underline mb-8 block;
	}

	.latest-post:hover .latest-post__title {
		@apply underline underline-offset-2;
	}

	.latest-post__date {
		@apply opacity-50 text-sm;
	}

	.latest-post__title {
		@apply mt-0 leading-6;
	}
</style>
