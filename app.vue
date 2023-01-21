<template>
  <NuxtLayout>
    <SplashScreen v-if="showSplashScreen" />
    <NuxtPage/>
  </NuxtLayout>
</template>

<style>
:root {
  /* Colors */
  --color-primary: #895a4a;

  /* Global z-index */
  --zindex-splash-screen: 999999;

  --zindex-fullscreen-menu: 5000;
  --zindex-topnav: 5001;
}

body {
  --scrollbar-foreground: #6a5841;
  --scrollbar-background: #f3f4f6;
  scrollbar-color: var(--scrollbar-foreground) var(--scrollbar-background);
}

body:not(.loaded) {
  overflow: hidden;
}

::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-thumb {
  background: var(--scrollbar-foreground);
}

::-webkit-scrollbar-track {
  background: var(--scrollbar-background);
}
</style>

<script setup>
import { gsap } from "gsap";
import SplashScreen from '~/components/SplashScreen.vue';

const showSplashScreen = ref(true);

const nuxtApp = useNuxtApp();

// App load complete
nuxtApp.hook("page:finish", function () {
  // Delay 1 second for custom fonts to load
  setTimeout(function () {
    // Animate hide splash screen
    gsap.to('#splash-screen .logo svg', { autoAlpha: 0, y: -10, duration: 0.8 });
    gsap.to('#splash-screen .progress-bar', { autoAlpha: 0, scaleX: 3, duration: 1 });
    gsap.to('#splash-screen', { autoAlpha: 0, duration: 1, delay: 0.1 })
        .then(() => {
          // Hide splash screen when animation complete
          showSplashScreen.value = false;
        });

    // Show and enable scrolling
    document.body.classList.add("loaded");
  }, 600);
});
</script>
