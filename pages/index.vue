<script setup lang="ts">
const { data: projects } = await useAsyncData(() =>
  queryCollection('projects').order('order', 'DESC').limit(3).all(),
)

const { data: posts } = await useAsyncData(() =>
  queryCollection('blog').order('order', 'DESC').limit(3).all(),
)
</script>

<template>
  <FeatureIntro>
    <FeatureName />
  </FeatureIntro>

  <!-- Project List + Sidebar -->
  <section
    class="flex flex-col-reverse max-w-lg md:max-w-2xl md:grid p-8 gap-16 md:grid-cols-12 container mx-auto lg:max-w-4xl"
  >
    <article class="ds-prose col-span-7 md:mt-20">
      <h2 class="rotated">
        latest work 🏁
      </h2>

      <FeatureProjectListProject
        v-for="project in projects"
        :key="project.id"
        :title="project.headline"
        :subtitle="project.subline"
        :description="project.description"
        :url="project.url"
      />
    </article>

    <aside class="ds-prose col-span-5 -mt-12">
      <h2 class="rotated">
        making things with 🛠
      </h2>
      <FeatureTagsSidebar />

      <!-- Latest Posts -->
      <h2 class="rotated md:pt-24">
        latest posts ✏️
      </h2>
      <!-- <FeaturedPosts /> -->
      <FeatureLatestPostsPost
        v-for="post in posts"
        :id="post.id"
        :key="post.id"
        :title="post.title"
        :subtitle="post.description"
        :description="post.description"
        :slug="post.slug"
        :created-at="post.createdAt"
      />

      <!-- Blog CTA -->
      <NuxtLink class="marker-link mt-4" to="/blog">
        check out all posts 📖
      </NuxtLink>
    </aside>
  </section>
</template>
