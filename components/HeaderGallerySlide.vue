<template>
  <div class="header-gallery relative h-full w-full overflow-hidden after:content-[''] after:inset-0 after:bg-black/5 after:absolute">
    <div class="gallery-img-container absolute inset-0 bg-cover bg-center bg-no-repeat" :style="'background-image: url(\'' + src + '\');'"></div>
  </div>
</template>

<style scoped>
.header-gallery {
  .gallery-img-container {
    transition: transform 1s;

    /* Fix grid gap bug */
    will-change: transform;
    transform: scale(1.005);
  }

  &:hover {
    .gallery-img-container {
      transform: scale(1.08);
    }
  }
}
</style>

<script setup>
defineProps([
  'src',
]);
</script>
