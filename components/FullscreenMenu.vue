<template>
  <section id="fullscreen-menu-wrapper" class="fixed inset-0 bg-[#eee] lg:hidden" style="z-index: var(--zindex-fullscreen-menu); visibility: hidden">
    <nav class="pt-16">
      <ul class="grid grid-rows-3 text-3xl font-Parisienne text-md text-center gap-1">
        <NuxtLink v-for="item in items" :to="item.to" @click="$emit('link-click')">
          <li class="py-4 text-neutral-800 hover:text-[#ba6900] hover:bg-gray-200 transition-colors duration-700">{{ item.title }}</li>
        </NuxtLink>
      </ul>
    </nav>
  </section>
</template>

<script setup>
defineEmits([
  "link-click",
])

// Menu items
const items = [
  {
    to: "/menu",
    title: "Menu",
  },
  {
    to: "/careers",
    title: "Careers",
  },
  {
    to: "/about",
    title: "About",
  },
];
</script>
