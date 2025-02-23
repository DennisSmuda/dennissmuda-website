<template>
  <section
    class="flex flex-col max-w-lg md:max-w-2xl md:grid p-8 gap-16 md:grid-cols-12 container mx-auto lg:max-w-4xl"
  >
    <article class="ds-prose col-span-7 md:mt-8">
      <h2 data-testid="rotated-heading" class="rotated">
        latest work 🏁
      </h2>
      <FeatureProjectsLatestProjects />
    </article>

    <div class="ds-prose col-span-5 -mt-12 flex flex-col-reverse md:flex-col">
      <div>
        <h2 data-testid="rotated-heading" class="rotated pt-20 md:pt-0">
          making things with 🛠
        </h2>
        <FeatureTagsSidebar />
      </div>

      <!-- Latest Posts -->
      <div>
        <h2 data-testid="rotated-heading" class="rotated">
          latest posts ✏️
        </h2>
        <FeaturePostsLatestPosts />
      </div>
    </div>
  </section>
</template>
