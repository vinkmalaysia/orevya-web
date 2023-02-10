<template>
  <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <Link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
  <Link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
  <Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
  <Meta name="description" content="Savor the Blend of Western and Malaysian Tastes" />
  <Meta itemprop="name" content="OREVYA" />
  <Meta itemprop="description" content="Savor the Blend of Western and Malaysian Tastes" />
  <Meta name="twitter:card" content="summary" />
  <Meta name="twitter:title" content="OREVYA" />
  <Meta name="twitter:description" content="Savor the Blend of Western and Malaysian Tastes" />
  <Meta name="og:title" content="OREVYA" />
  <Meta name="og:description" content="Savor the Blend of Western and Malaysian Tastes" />
  <Meta name="og:site_name" content="OREVYA" />
  <Meta name="og:type" content="website" />
  <Title>OREVYA</Title>
  <SplashScreen v-if="showSplashScreen" />
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<style>
:root {
  /* Colors */
  --color-primary: #895a4a;
  --color-secondary: #252C2A;

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

/* Global route transition */
 .page-enter-active,
 .page-leave-active {
   transition: opacity .6s;
 }

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>

<script setup>
import { gsap } from "gsap";

import SplashScreen from '~/components/SplashScreen.vue';

const nuxtApp = useNuxtApp();
const showSplashScreen = ref(true);

// Enable smooth scroll
if (typeof window !== 'undefined') {
  import("smoothscroll-for-websites");
}

// App mount complete
nuxtApp.hook("app:mounted", function () {

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
