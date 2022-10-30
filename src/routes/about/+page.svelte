<script>
	import Header from '$lib/components/header.svelte'
	import CvList from '$lib/components/about/cv-list.svelte'
	import Tags from '$lib/components/about/tech-tags.svelte'
</script>

<svelte:head>
	<title>About Me | Dennis Smuda</title>
	<meta
		name="description"
		content="Nice to meet you! This page tells you a little bit about myself, and what I'm doing."
	/>
	<meta property="og:title" content="About Dennis Smuda" />
	<meta
		property="og:description"
		content="Nice to meet you! This page tells you a little bit about myself, and what I'm doing."
	/>
</svelte:head>

<Header title="about me  👨🏻‍💻️" subtitle="been where done what?" />

<section class="container lg:max-w-4xl mx-auto px-8">
	<div class="ds-prose ">
		<p>
			Nice to meet you! My name is
			<span class="keyword">Dennis</span>
			and I have been working as a
			<span class="color-change font-medium">web developer</span>
			for the
			<em>last {new Date().getFullYear() - 2014}+ years</em>. I have worked on
			projects ranging from small company and personal websites to full fledged
			web applications.
		</p>
		<p>
			I deeply enjoy building things that can be interacted with, especially if
			it's something <span class="emphasis">fun</span>
			or <em>useful</em> <span class="opacity-50">... or both!</span>
		</p>

		<h2 class="rotated">Where I've been 🗺</h2>
		<CvList />

		<h2 class="rotated">I use 🛠</h2>
		<p>
			Whatever mix of tools gets me there.
			<br />
			Here are some of
			<span class="emphasis">my favorites:</span>
		</p>
		<Tags />

		<!-- I LIke -->
		<h2 class="rotated">I like ❤️‍🔥</h2>
		<ul>
			<li>
				<div>
					to play music
					<span class="emoji">🎶 🎸 🎹 🥁 🎧</span>
				</div>
			</li>
			<li>
				<div>
					learning new things
					<span class="emoji">🤔 📖 ✨</span>
				</div>
			</li>
			<li>
				<div>
					being part of a team
					<span class="emoji">🎩 🧢 👒 ⛑</span>
				</div>
			</li>
			<li>
				<div>
					riding my bike
					<span class="emoji">🚴‍♂️ 💨</span>
				</div>
			</li>
			<li>
				<div>
					cheese
					<span class="emoji">🧀</span>
				</div>
			</li>
		</ul>
	</div>
</section>

<div class="main-padding" />

<style lang="postcss">
	ul li div {
		@apply w-full block text-ellipsis;
	}

	.emoji {
		@apply text-2xl;
	}
</style>
