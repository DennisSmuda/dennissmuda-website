<template>
  <section class="px-8 pt-32 pb-16">
    <div class="hero -rotate-3">
      <div class="container main-padding">
        <div class="title">
          <Name />
        </div>

        <div class="intro">
          <p class="intro__paragraph svelte-tx45cf">
            <span class="rainbow font-medium whitespace-nowrap">web developer</span> <span>based in</span> <span class="german-color-change">germany 🇩🇪</span> <a href="/work" class="svelte-tx45cf">making 👨🏻‍💻</a> things and
            <a href="/blog" class="svelte-tx45cf">writing ✏️</a> about stuff. feel free to
            <a class="whitespace-nowrap svelte-tx45cf" href="mailto:smuda.dennis@gmail.com">get in touch 📫</a>
            , or get to
            <a class="whitespace-nowrap svelte-tx45cf" href="/about">know me 👋</a>
            first.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section>
    <h2>
      Projects
    </h2>
  </section>
</template>

<style scoped>
.intro {
  view-transition-name: page-description;
}
</style>

<style lang="css">
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
