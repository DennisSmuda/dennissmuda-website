<script>
	import Name from './name.svelte'
</script>

<!-- <section class="hero"> -->
<section class="px-8 pt-16 pb-16">
	<div class="hero -rotate-3">
		<div class="container main-padding">
			<!-- My Name -->
			<div class="title">
				<Name />
			</div>
			<div class="intro">
				<!-- Intro -->
				<p class="intro__paragraph">
					<span class="rainbow font-medium whitespace-nowrap">
						web developer
					</span>
					<span> based in </span>
					<span class="german-color-change">germany 🇩🇪</span>
					<a href="/projects">making 👨🏻‍💻</a> things and
					<a href="/blog">writing ✏️</a> about stuff. feel free to
					<a class="whitespace-nowrap" href="mailto:smuda.dennis@gmail.com">
						get in touch 📫
					</a>
					, or get to
					<a class="whitespace-nowrap" href="/about"> know me 👋</a>
					first.
				</p>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	.title {
		@apply flex flex-col items-center overflow-visible w-full max-w-[420px];
	}

	.intro {
		@apply select-none;
		max-width: 380px;
	}

	.intro__paragraph {
		@apply text-xl text-center block font-thin leading-normal;
	}

	.intro__paragraph a {
		@apply underline underline-offset-2 font-medium;
	}

	.intro__paragraph a:hover {
		@apply no-underline text-pink;
	}

	.hero .container {
		@apply mx-auto flex flex-col items-center gap-8 relative;
		max-width: 1440px;
	}

	@screen md {
		.hero .container {
			@apply flex-row items-end;
		}

		.title {
			width: 45vw;
			max-width: 620px;
		}

		.title,
		.intro__paragraph {
			@apply text-left;
		}

		.title {
			margin-bottom: -1.75vw;
		}
	}
</style>
