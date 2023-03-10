<template>
  <section ref="wrapper" class="fixed inset-0 pt-[60px] bg-[#eee] lg:hidden z-[var(--zindex-fullscreen-menu)]">
    <nav class="menu-links flex justify-center w-full min-h-full max-h-full overflow-y-auto">
      <ul class="w-full grid grid-flow-row auto-rows-min text-3xl font-CormorantGaramond text-md text-center gap-1">
        <NuxtLink v-for="item in items" :to="item.to" @click="$emit('link-click')">
          <li class="py-4 text-neutral-800 hover:text-[#ba6900] hover:bg-gray-200 transition-colors duration-700">{{ item.title }}</li>
        </NuxtLink>
      </ul>
    </nav>
  </section>
</template>

<style scoped>
nav.menu-links {
  margin-top: 4rem;
}

@media (min-height: 280px) and (max-height: 400px) {
  nav.menu-links {
    @apply items-center;
  }
}

@media (max-height: 400px) {
  nav.menu-links {
    margin-top: 0;
  }
}
</style>

<script setup>
import { gsap } from 'gsap';

const props = defineProps([
  "visible",
]);

defineEmits([
  "link-click",
])

// Menu items
const items = [
  { to: "/menu", title: "Menu" },
  { to: "/careers", title: "Careers" },
  { to: "/about", title: "About" },
];

const wrapper = ref();
const revealAnimation = ref();

// Play expand/collapse animation
watch(() => props.visible,
  visible => {
    if (revealAnimation.value) {
      revealAnimation.value.reversed(!visible).resume();
    }
  }
);

onMounted(() => {
  let q = gsap.utils.selector(wrapper.value);

  // Define mobile menu transition animation
  revealAnimation.value = gsap
      .timeline({ paused: true })
      .addLabel("hidden")
      .fromTo(wrapper.value, {
        autoAlpha: 0,
        y: -100,
      }, {
        autoAlpha: 1,
        y: 0,
        duration: 0.4,
        ease: "expo.inOut",
      })
      .fromTo(q("nav > ul > a"), {
        autoAlpha: 0,
        y: 30,
      }, {
        autoAlpha: 1,
        y: 0,
        duration: .5,
        stagger: 0.1,
        ease: 'expo.inOut',
      }, "<0.1")
      .addLabel("visible")
      .seek(props.visible ? "visible" : "hidden");
});

onUnmounted(() => {
  // Clean up gsap animation
  revealAnimation.value?.kill?.()
  revealAnimation.value = null;
})
</script>
