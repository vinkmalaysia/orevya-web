<template>
  <div class="group relative h-full">
    <div class="absolute top-0 w-[100.3%] left-1/2 h-full -translate-x-1/2 overflow-hidden rounded-3xl">
      <img class="absolute w-full h-full top-0 left-1/2 -translate-x-1/2 object-cover" :alt="title" :src="src" />
    </div>
    <div class="absolute inset-0 opacity-50 duration-1000 rounded-b-3xl" style="background: linear-gradient(360deg, rgba(0,0,0) 17.79%, rgba(0,0,0,0) 68.15%);" />
    <figcaption class="font-Jost absolute max-w-[80vw] bottom-0 px-6 pt-3 pb-8" style="text-shadow: rgb(0 0 0 / 50%) 0 4px 18px;">
      <h2 class="uppercase font-extrabold text-xl text-white leading-5 my-0.5">{{ title }}</h2>
      <p class="text-sm mt-2 leading-none text-white/75">{{description }}</p>
    </figcaption>
  </div>
</template>

<script setup>
defineProps([
  'src',
  'title',
  'description',
])
</script>
