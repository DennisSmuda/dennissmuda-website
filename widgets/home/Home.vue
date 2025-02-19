<template>
  <section
    class="flex flex-col-reverse max-w-lg md:max-w-2xl md:grid p-8 gap-16 md:grid-cols-12 container mx-auto lg:max-w-4xl"
  >
    <article class="ds-prose col-span-7 md:mt-20">
      <h2 data-testid="rotated-heading" class="rotated">
        latest work 🏁
      </h2>
      <FeatureProjectsLatestProjects />
    </article>

    <aside class="ds-prose col-span-5 -mt-12">
      <h2 data-testid="rotated-heading" class="rotated">
        making things with 🛠
      </h2>
      <FeatureTagsSidebar />

      <!-- Latest Posts -->
      <h2 data-testid="rotated-heading" class="rotated md:pt-24">
        latest posts ✏️
      </h2>
      <FeaturePostsLatestPosts />

      <!-- Blog CTA -->
      <NuxtLink class="marker-link mt-4" to="/blog">
        check out all posts 📖
      </NuxtLink>
    </aside>
  </section>
</template>
