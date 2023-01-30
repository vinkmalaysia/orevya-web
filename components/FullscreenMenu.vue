<template>
  <section id="fullscreen-menu-wrapper" class="fixed inset-0 bg-[#eee] lg:hidden" style="z-index: var(--zindex-fullscreen-menu); visibility: hidden">
    <nav class="pt-16">
      <ul class="grid grid-rows-3 text-4xl font-Parisienne text-md text-center">
        <NuxtLink v-for="item in items" :to="item.to" @click="$emit('link-click')">
          <li class="py-4 text-[#333] hover:bg-gray-200 transition-colors duration-700">
            <span>{{ item.title }}</span>
            <div class="rounded-full border-2 border-[#777] h-12 w-12 mx-auto mt-2">
              <svg viewBox="0 0 16 16" height="48" width="48">
                <g stroke="#777">
                  <line stroke-width=".5" x1="4" y1="7.5" x2="11" y2="7.5" fill="none" stroke-linecap="round" stroke-linejoin="round" />
                  <polyline stroke-width=".5" points="9 5.5 11 7.5 9 9.5" fill="none" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
            </div>
          </li>
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
