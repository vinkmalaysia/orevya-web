<template>
  <main ref="rootEl">
    <Title>OREVYA - About Us</Title>
    <section class="grid xl:grid-cols-2">
      <section class="lg:p-16 lg:pb-0">
        <div class="h-full w-full overflow-hidden" v-motion :initial="{ x: 150, opacity: 0 }" :visibleOnce="defaultTransition">
          <nuxt-picture src="/images/interior-1.jpg" alt="Interior view of Orevya" sizes="sm:100vw md:100vw lg:100vw xl:75vw 50vw" :imgAttrs="{ class: 'h-full object-cover' }" />
        </div>
      </section>
      <section class="p-12 lg:p-16 font-Jost text-black/70 text-lg md:text-2xl md:leading-relaxed">
        <h1 class="mb-16 font-CormorantGaramond text-4xl md:text-6xl text-[var(--color-primary)] xl:mt-24" data-gsap-animate="intro">Experience the Taste of Western Delights</h1>
        <p class="mb-12" data-gsap-animate="intro">Welcome to <strong>Orevya</strong>, a premier dining destination located in Kuala Lumpur, Malaysia. Our restaurant serves a delicious selection of Western and fusion cuisine, featuring classic dishes made with only the freshest and finest ingredients. Our elegant and classy dining room sets the perfect atmosphere for your dinner.</p>
        <p class="mb-12" data-gsap-animate="intro">At <strong>Orevya</strong>, our vision is to provide guests with delicious, expertly prepared food and exceptional service in a stylish and sophisticated setting. Our knowledgeable staff is dedicated to ensuring that every aspect of your dining experience is unforgettable.</p>
      </section>
    </section>
    <div class="py-6 lg:p-16">
      <div class="inline-block rounded-full w-12 h-12 border border-neutral-600 mx-2"></div>
      <div class="inline-block rounded-full w-12 h-12 border border-neutral-600"></div>
      <div class="inline-block rounded-full w-12 h-12 border border-neutral-600 mx-2"></div>
      <div class="w-full">
        <div class="h-[1px] w-full bg-neutral-600"></div>
      </div>
    </div>
    <section class="lg:p-16 text-lg md:text-2xl md:leading-relaxed pb-16">
      <div class="h-64 w-full bg-[var(--color-primary)]" style="background: repeating-linear-gradient( -45deg, var(--color-primary), var(--color-primary) 4px, var(--color-secondary) 4px, var(--color-secondary) 24px );"></div>
      <section class="grid md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 -mt-24">
        <section>
          <div class="inline-block w-full" v-motion :initial="{ y: 100, opacity: 0 }" :visibleOnce="defaultTransition">
            <nuxt-picture src="/images/maria-portrait-1.jpg" alt="Portrait of Chef Maria Rodriguez, owner of Orevya" :imgAttrs="{ class: 'w-full' }" />
          </div>
        </section>
        <section class="md:col-span-2 lg:grid-cols-1 xl:grid-cols-3 p-12 2xl:p-32 md:mt-24 font-Jost text-black/70">
          <h1 class="pt-6 pb-12 font-CormorantGaramond text-4xl md:text-6xl text-[var(--color-primary)]" v-motion :initial="{ y: 100, opacity: 0 }" :visibleOnce="defaultTransition">Meet Our Owner</h1>
          <p class="mb-12" v-motion :initial="{ y: 100, opacity: 0 }" :visibleOnce="defaultTransition">We are owned and operated by <strong>Chef Maria Rodriguez</strong>, a passionate chef and restaurateur who has dedicated their career to creating exceptional dining experiences for guests.</p>
          <p class="mb-12" v-motion :initial="{ y: 100, opacity: 0 }" :visibleOnce="defaultTransition">Chef Maria Rodriguez is a talented chef with over 20 years of experience in the culinary industry. Born in Spain and raised in France, she brings a unique blend of European flavors and techniques to her menu of Western cuisine. Her commitment to quality, fresh ingredients and innovative dishes make every dining experience at <strong>Orevya</strong> truly unforgettable.</p>
          <div>
            <img src="/images/owner-signature.png" width="290" v-motion :initial="{ y: 100, opacity: 0 }" :visibleOnce="defaultTransition">
          </div>
        </section>
      </section>
    </section>
  </main>
  </template>

<style scoped>
strong {
  color: var(--color-primary);
  font-weight: 500;
}
</style>

<script setup>
import { gsap } from 'gsap';
const rootEl = ref();

onMounted(() => {
  usePageTransitionEvent(() => {
    gsap.from(rootEl.value.querySelectorAll("[data-gsap-animate='intro']"), {
      x: 100,
      autoAlpha: 0,
      duration: 0.6,
      stagger: 0.2,
    });
  });
})

const defaultTransition = {
  x: 0,
  y: 0,
  opacity: 1,
  transition: {
    type: 'easeIn',
    duration: 600,
    delay: 200,
  },
};
</script>
