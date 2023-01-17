<template>
  <div class="group relative h-full transition-[flex-grow] duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] grow hover:grow-[4] overflow-hidden">
    <div class="absolute top-0 w-[100.3%] left-1/2 h-full -translate-x-1/2 overflow-hidden">
      <img class="absolute pointer-events-none w-full h-full top-0 left-1/2 -translate-x-1/2 object-cover" :alt="title" :src="src" />
    </div>
    <div class="absolute inset-0 opacity-0 transition-[opacity] group-hover:opacity-30 duration-1000" style="background: linear-gradient(360deg, rgba(0,0,0) 17.79%, rgba(0,0,0,0) 68.15%);" />
    <figcaption class="font-Jost absolute w-[800px] min-h-[180px] bottom-0 p-[50px] opacity-0 group-hover:opacity-100 -translate-y-6 group-hover:translate-y-0 transition-[transform,opacity] group-hover:delay-[200ms,300ms] !duration-[1000ms,_600ms]">
      <h2 class="uppercase font-extrabold text-2xl text-white before:content-[''] before:inline-block before:border-4 before:rounded-full before:mr-2 before:my-0.5 before:border-neutral-300 before:w-[12px] before:h-[12px]">{{ title }}</h2>
      <p class="text-xl text-white/75 opacity-0 group-hover:opacity-100 -translate-y-6 group-hover:translate-y-0 transition-[transform,opacity] group-hover:delay-[500ms,700ms] !duration-[1000ms,_600ms]">{{description }}</p>
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
