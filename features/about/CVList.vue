<template>
  <div class="cv-wrapper text-black dark:text-white">
    <div class="timeline" />
    <a
      href="https://www.ftapi.com/"
      class="cv-entry"
      target="_blank"
      rel="noreferrer"
    >
      <span class="timeline__dot" />
      <span class="cv-entry__end-date">currently at</span>
      <h3 class="cv-entry__headline">FTAPI 🔒</h3>
      <p class="cv-entry__description">
        secure data-transfer with vue, graphql and java.
      </p>
    </a>
    <a
      href="https://urlaubsguru.de/"
      class="cv-entry"
      target="_blank"
      rel="noreferrer"
    >
      <span class="timeline__dot" />
      <span class="cv-entry__end-date">until 2022 </span>
      <h3 class="cv-entry__headline">Urlaubsguru 🏝</h3>
      <p class="cv-entry__description">
        frontend rework with vue/nuxt (2.x) and graphql including a component
        library in storybook.
      </p>
    </a>
    <a
      href="https://voll.digital/"
      class="cv-entry"
      target="_blank"
      rel="noreferrer"
    >
      <span class="timeline__dot" />
      <span class="cv-entry__end-date">until 2019</span>
      <h3 class="cv-entry__headline">VOLL digital 🐣</h3>
      <p class="cv-entry__description">
        websites with symfony, gatsby, ember.js, processwire, etc...
      </p>
    </a>
  </div>
</template>

<style lang="css" scoped>
	.cv-wrapper {
		@apply relative mb-24;
	}

	.cv-entry {
		@apply no-underline relative mb-12 block;
	}

	.cv-entry:hover .cv-entry__headline {
		@apply underline underline-offset-2;
	}

	.cv-entry__headline {
		@apply mt-1 mb-0;
	}

	.cv-entry__end-date {
		@apply opacity-50;
	}

	.cv-entry__description {
		@apply opacity-50;
	}
</style>
