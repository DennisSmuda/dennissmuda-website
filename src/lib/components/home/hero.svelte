<script>
	// import { playClick } from "../utils/Sounds";
	// import { fade } from "svelte/transition";
	const playClick = () => {
		console.log('PLay Click')
	}
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
				<!-- <h1 class="emoji">👋</h1> -->
				<!-- Intro -->
				<p class="intro__paragraph">
					<span class="rainbow font-medium whitespace-nowrap"
						>web developer</span
					>
					<!-- <br /> -->
					<span> based in </span>
					<span class="german-color-change">germany 🇩🇪</span>
					<a href="/projects">making 👨🏻‍💻</a> things and
					<a href="/blog">writing ✏️</a> about stuff. feel free to
					<a class="whitespace-nowrap" href="mailto:smuda.dennis@gmail.com"
						>get in touch 📫</a
					>
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
		display: flex;
		flex-direction: column;
		align-items: center;
		overflow: visible;
		width: 100%;
		max-width: 420px;
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
		max-width: 1440px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
		position: relative;
		/* overflow: hidden; */
	}

	.button-row {
		margin-top: 1.5rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		flex-direction: row;
		align-items: baseline;
	}
	.keyword {
		animation: colorChange 20s linear alternate infinite;
	}
	.reach-me {
		transform: rotate(32deg);
	}
	@screen md {
		.hero .container {
			flex-direction: row;
			align-items: flex-end;
		}
		.title {
			/* width: calc(100% - 22rem); */
			width: 45vw;
			max-width: 620px;
		}
		.title,
		.intro__paragraph {
			text-align: left;
		}
		.title {
			margin-bottom: -1.75vw;
		}

		.button-row {
			@apply justify-start;
		}
	}
</style>
