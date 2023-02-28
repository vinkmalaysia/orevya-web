<template>
  <div class="max-lg:pt-[60px] pb-24">
    <Title>OREVYA - Privacy Policy</Title>
    <main class="md-doc-wrapper">
      <Doc />
    </main>
  </div>
</template>

<style scoped>
.md-doc-wrapper {
  @apply font-Jost text-base leading-7 mx-12 md:mx-24 lg:mx-6 max-w-[1200px];

  :deep(h1), :deep(h2), :deep(h3) {
    @apply font-semibold;
  }

  :deep(h1) {
    @apply text-5xl my-12;
  }

  :deep(h2) {
    @apply text-2xl my-2;
  }

  :deep(p) {
    @apply my-6;
  }

  :deep(ul) {
    @apply m-4 list-disc ml-8;
  }

  :deep(ol) {
    @apply m-4 list-[lower-alpha] ml-8;
  }

  :deep(li) {
    @apply my-2;
  }
}
</style>

<script setup>
// Edit the document (root)/PRIVACY.md
import Doc from '/PRIVACY.md'
</script>
