<template>
  <section class="px-8 py-16">
    <!-- TODO: remove rotate -->
    <div class="hero  ---rotate-3">
      <div class="container main-padding">
        <div class="title">
          <slot />
        </div>

        <div class="intro">
          <h1 class="intro__paragraph">
            <span class="sr-only">Hi I'm Dennis Smuda, a</span>
            <span class="rainbow font-medium whitespace-nowrap">web developer</span> <span>based in</span> <span class="german-color-change">germany 🇩🇪</span> <NuxtLink to="/work">
              making 👨🏻‍💻
            </NuxtLink> things and
            <NuxtLink to="/blog">
              writing ✏️
            </NuxtLink> about stuff. feel free to
            <a class="whitespace-nowrap" href="mailto:smuda.dennis@gmail.com">get in touch 📫</a>
            , or get to
            <NuxtLink to="/about" class="whitespace-nowrap">
              know me 👋
            </NuxtLink>
            first.
          </h1>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.intro {
  view-transition-name: page-description;
}
</style>

<style lang="css" scoped>
.title {
  @apply flex flex-col items-center overflow-visible w-full max-w-[420px];
}

.intro {
  @apply select-none;
  max-width: 380px;
}

h1.intro__paragraph {
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
  h1.intro__paragraph {
    @apply text-left;
  }

  .title {
  margin-bottom: -1.75vw;
  }
}
</style>
