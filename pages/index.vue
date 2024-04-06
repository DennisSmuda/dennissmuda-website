<template>
  <Home />

  <!-- Project List + Sidebar -->
  <section
    class="flex flex-col-reverse max-w-lg md:max-w-2xl md:grid p-8 gap-16 md:grid-cols-12 container mx-auto lg:max-w-4xl"
  >
    <article class="ds-prose col-span-7 md:mt-20">
      <h2 class="rotated">
        latest work 🏁
      </h2>
      <ClientOnly>
        <FeaturedProjects />
      </ClientOnly>
    </article>

    <aside class="ds-prose col-span-5 -mt-12">
      <SidebarTags />
      <SidebarPosts />
    </aside>
  </section>
</template>
