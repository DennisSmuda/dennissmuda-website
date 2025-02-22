---
slug: 'hello-world'
title: 'Hello World 👋'
description: 'Introducing my new website, and a quick story about how I animated my name.'
createdAt: 'Sept. 21, 2020'
published: true
tags: [{ name: 'casual', value: 'casual' }, { name: 'svelte', value: 'svelte' }]
order: 1
---

Cool, you made it! Welcome to my website, I hope you like what you've seen so far. Continue reading if you'd like to kow more about it.

Of course, I'm most excited about trying out (and loving) <a href="https://svelte.dev/" target="_blank" rel="noreferrer">svelte</a>. I highly recommend checking it out - the interactive tutorial is perfect to get your feet wet, with no setup whatsoever.

## Enter Svelte

`SvelteKit` is a framework on top of `svelte` like `next.js` is a framework based on `react` - to put it simply.
It comes "batteries included" and still manages to come across as something with a very small surface area.

If you want to try it out yourself, this is how you get started:

```bash
# in your terminal
npm init svelte@next my-app
cd my-app
npm install
npm run dev -- --open
```

## Goodies

One of the best parts about working with svelte is it's ease of use. After years of working with nuxt/vue.js, I always valued the fact that state-management and routing were "first-party" - unlike in react-land, where you can find, mix and match packages however you choose. And there is _a lot_ to chose from.

Svelte takes things a bit further. Because everything gets "compiled away", they even provide first-party animation classes. No additional dependencies required, this is how my name gets animated on the <a href="/">homepage</a>:

```javascript
import { onMount } from 'svelte' // lifecycle
import { spring } from 'svelte/motion' // spring-animation
import { fly } from 'svelte/transition' // transition

const sizeSpring = spring(0)

onMount(() => {
  mounted = true

  setTimeout(() => {
    sizeSpring.set(13)
  }, 700)
})
```

The `mounted` variable will make sure that our letters get appended to the DOM after the component has mounted.
Within the markup, we can now setup events on the svg element similar to a lot of other current frameworks.

```jsx
<svg
  on:mousedown={() => size.set(64)}
  on:mouseup={() => size.set(32)}
>
  <g class="firstname">
    {mounted
      && (
        <path
          in:fly={{ y: -20, delay: 0 }}
          d="M14.36 68.4C14.36 61.52 15.6..."
        />
      )}
  </g>
</svg>
```

As you can see - it's pretty simple to understand if you know basic javascript and a few concepts from single page applications. Plus, I didn't even have to install anything, and I can trust the compiler, that only the code that is "needed", actually gets send to the client.

So far, I'm having a blast trying out svelte - I even made a "full app" with it - it's called BackyTracky and you can check it out <a href="https://backytracky.com/" target="_blank" rel="noreferrer">here</a>.

## Further Information

If you want to know more about svelte, I highly recommend watching this <a href="https://www.youtube.com/watch?v=AdNJ3fydeao" target="_blank" rel="noreferrer">talk by Richard Harris</a>, the creator of svelte himself.
