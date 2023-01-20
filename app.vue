<template>
  <NuxtLayout>
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
