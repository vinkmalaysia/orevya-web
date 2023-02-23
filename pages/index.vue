<template>
  <main class="max-lg:mt-14" ref="rootEl">
    <section class="grid md:grid-flow-col md:auto-cols-fr">
      <section class="h-[150px] md:h-full bg-[#252C2A]">
        <div class="relative bg-[url('/images/interior-2.jpg')] bg-[center_25%] xl:bg-top bg-cover min-w-full h-full max-h-full" data-gsap-animate="hero">
          <div class="absolute inset-0 bg-[rgba(0,53,71,.5)]"></div>
        </div>
      </section>
      <section class="px-16 lg:px-24 pt-24 pb-24 2xl:py-48" style="background: linear-gradient(355deg, #533821 0%, #252C2A 100%);">
        <h1 class="font-Jost font-bold text-2xl text-white" data-gsap-animate="hero">OREVYA</h1>
        <p class="font-CormorantGaramond font-semibold text-5xl leading-12 md:text-6xl my-6 text-[#D2B48C]" data-gsap-animate="hero">Exceptional Cuisine</p>
        <p class="font-CormorantGaramond text-xl md:text-3xl text-white/80 my-6" data-gsap-animate="hero">Starts with Superior Ingredients</p>
        <div class="text-center py-2" data-gsap-animate="hero">
          <nuxt-img src="/images/title-border.png" height="17" width="110" role="presentation" />
        </div>
        <p class="pt-16 font-Jost text-white/60 text-lg md:text-xl md:leading-relaxed mb-2" data-gsap-animate="hero">
          We carefully select only the freshest and highest quality components for our menu.
          Every dish is crafted with a devotion to detail and a passion for flavor.
        </p>
        <div class="mt-16">
          <button class="group rounded-full border border-white/60 hover:border-white transition-colors mx-auto" @click="scrollToSignaturesSection" data-gsap-animate="hero-skip">
            <svg viewBox="0 0 16 16" class="h-12 w-12 rotate-90">
              <g class="stroke-white/80 group-hover:stroke-white transition-colors">
                <line stroke-width=".5" x1="4" y1="8" x2="11" y2="8" fill="none" stroke-linecap="round" stroke-linejoin="round" />
                <polyline stroke-width=".5" points="9 6 11 8 9 10" fill="none" stroke-linecap="round" stroke-linejoin="round" />
              </g>
            </svg>
          </button>
        </div>
      </section>
    </section>
    <section class="relative h-[250px] lg:h-[400px]" data-gsap-animate="hero-steak">
      <nuxt-picture src="/images/homepage-steak.jpg" sizes="sm:100vw lg:800px" :imgAttrs="{ class: 'w-full h-full object-cover object-[center_85%]' }" role="presentation" />
      <div class="absolute inset-0 bg-black/80"></div>
    </section>
    <!-- Signature Dish Accordion -->
    <section id="section-homepage-signature">
      <div class="pt-6 mt-12 text-center">
        <h2 class="text-7xl md:text-8xl !leading-[7rem] md:!leading-[11rem] font-MrsSaintDelafield text-[var(--color-primary)]" data-gsap-animate="signature" v-html="signatureTitle"></h2>
      </div>
      <div class="text-center py-3 mb-12">
        <svg viewBox="0 0 100.43 3.32" class="w-[200px] md:w-[300px] fill-neutral-300 mx-auto">
          <path d="M2.56,1.58c0,.71-.57,1.28-1.28,1.28S0,2.29,0,1.58,.57,.3,1.28,.3s1.28,.57,1.28,1.28Z"/>
          <path d="M99.23,1.92h-32.44c-.16,0-.3-.13-.3-.3s.13-.3,.3-.3h32.44c.16,0,.3,.13,.3,.3s-.13,.3-.3,.3Z"/>
          <path d="M50.3,.48c5.74,0,9.57,.67,10.35,1.18-.77,.51-4.6,1.18-10.35,1.18s-9.57-.67-10.35-1.18c.77-.51,4.6-1.18,10.35-1.18m0-.48c-6.03,0-10.91,.74-10.91,1.66s4.89,1.66,10.91,1.66,10.91-.74,10.91-1.66-4.89-1.66-10.91-1.66h0Z"/>
          <path d="M38.26,1.58c0,.71-.57,1.28-1.28,1.28s-1.28-.57-1.28-1.28,.57-1.28,1.28-1.28,1.28,.57,1.28,1.28Z"/>
          <path d="M100.43,1.58c0,.71-.57,1.28-1.28,1.28s-1.28-.57-1.28-1.28,.57-1.28,1.28-1.28,1.28,.57,1.28,1.28Z"/>
          <path d="M64.91,1.66c0,.71-.57,1.28-1.28,1.28s-1.28-.57-1.28-1.28,.57-1.28,1.28-1.28,1.28,.57,1.28,1.28Z"/>
          <path d="M33.82,1.88H1.38c-.16,0-.3-.13-.3-.3s.13-.3,.3-.3H33.82c.16,0,.3,.13,.3,.3s-.13,.3-.3,.3Z"/>
        </svg>
      </div>
      <ClientOnly>
        <MqResponsive group>
          <template #lg->
            <Swiper
              tag="section"
              :slides-per-view="1.2"
              :space-between="12"
              :centered-slides="true"
              :centered-slides-bounds="true"
              :center-insufficient-slides="true"
              :grab-cursor="true"
              :slides-offset-before="12"
              :slides-offset-after="12"
              :breakpoints="{
                768: {
                  slidesPerView: 1.4,
                  slidesOffsetBefore: 0,
                  slidesOffsetAfter: 0,
                },
                1024: {
                  slidesPerView: 2.2,
                },
              }"
              @afterInit="onSwiperAfterInit"
              class="h-[350px] w-0 min-w-full landscape:lg:h-[250px]"
            >
              <!-- min-w-0 bug for swiper.js -->
              <!-- @see https://github.com/nolimits4web/swiper/issues/3599 -->
              <SwiperSlide
                v-for="({ src, title, description }, key) in signatureDishes"
                :key="key"
              >
                <AccordionGallerySlideMobile
                  :src="src"
                  :title="title"
                  :description="description"
                />
              </SwiperSlide>
            </Swiper>
          </template>
          <template #xl+>
            <div class="flex gap-3 h-[800px]">
              <AccordionGallerySlide
                v-for="({ src, title, description }, key) in signatureDishes"
                :key="key"
                :src="src"
                :title="title"
                :description="description"
              />
            </div>
          </template>
        </MqResponsive>
        <template #fallback>
          <div class="flex gap-3 h-[800px]">
            <AccordionGallerySlide
              v-for="({ src, title, description }, key) in signatureDishes"
              :key="key"
              :src="src"
              :title="title"
              :description="description"
            />
          </div>
        </template>
      </ClientOnly>
      <div class="text-center mt-8 xl:my-16">
        <NuxtLink to="/menu">
          <button class="font-Jost text-sm uppercase font-medium transition-[padding] py-4 px-12 hover:px-14 bg-[var(--color-primary)] text-white">View Menu</button>
        </NuxtLink>
      </div>
    </section>
    <MqResponsive tag="section" target="lg-" class="mt-24 md:mb-24 grid grid-flow-row md:grid-flow-col md:auto-cols-fr">
      <section class="max-md:bg-[var(--color-secondary)] flex flex-col items-center justify-center py-24">
        <h3 class="block font-CormorantGaramond font-medium text-[#D2B48C] md:text-[var(--color-secondary)] text-4xl md:text-5xl uppercase">Find Us</h3>
        <div class="py-6">
          <svg viewBox="0 0 100.43 3.32" class="w-[150px] fill-neutral-200 md:fill-[var(--color-primary)] opacity-30">
            <path d="M2.56,1.58c0,.71-.57,1.28-1.28,1.28S0,2.29,0,1.58,.57,.3,1.28,.3s1.28,.57,1.28,1.28Z"/>
            <path d="M99.23,1.92h-32.44c-.16,0-.3-.13-.3-.3s.13-.3,.3-.3h32.44c.16,0,.3,.13,.3,.3s-.13,.3-.3,.3Z"/>
            <path d="M50.3,.48c5.74,0,9.57,.67,10.35,1.18-.77,.51-4.6,1.18-10.35,1.18s-9.57-.67-10.35-1.18c.77-.51,4.6-1.18,10.35-1.18m0-.48c-6.03,0-10.91,.74-10.91,1.66s4.89,1.66,10.91,1.66,10.91-.74,10.91-1.66-4.89-1.66-10.91-1.66h0Z"/>
            <path d="M38.26,1.58c0,.71-.57,1.28-1.28,1.28s-1.28-.57-1.28-1.28,.57-1.28,1.28-1.28,1.28,.57,1.28,1.28Z"/>
            <path d="M100.43,1.58c0,.71-.57,1.28-1.28,1.28s-1.28-.57-1.28-1.28,.57-1.28,1.28-1.28,1.28,.57,1.28,1.28Z"/>
            <path d="M64.91,1.66c0,.71-.57,1.28-1.28,1.28s-1.28-.57-1.28-1.28,.57-1.28,1.28-1.28,1.28,.57,1.28,1.28Z"/>
            <path d="M33.82,1.88H1.38c-.16,0-.3-.13-.3-.3s.13-.3,.3-.3H33.82c.16,0,.3,.13,.3,.3s-.13,.3-.3,.3Z"/>
          </svg>
        </div>
        <div class="font-Jost text-xl text-center leading-6 my-6">
          <div>
            <p class="text-base text-[#D2B48C] md:text-[var(--color-primary)] font-bold">Monday to Friday</p>
            <p class="text-neutral-400">
              <time datetime="17:30">5:30pm</time>
              -
              <time datetime="22:00">10:00pm</time>
            </p>
          </div>
          <div class="mt-3">
            <p class="text-base text-[#D2B48C] md:text-[var(--color-primary)] font-bold">Saturday - Sunday</p>
            <p class="text-neutral-400">
              <time datetime="11:30">11:30am</time>
              -
              <time datetime="15:00">3:00pm</time>
            </p>
            <p class="text-neutral-400">
              <time datetime="18:00">6:00pm</time>
              -
              <time datetime="22:00">10:00pm</time>
            </p>
          </div>
        </div>
      </section>
      <Map class="w-full h-full max-md:min-h-[350px]" />
    </MqResponsive>
  </main>
</template>

<style scoped>
[data-gsap-animate='signature'] {
  overflow: hidden;

  :deep(.char) {
    visibility: hidden;

    &::before {
      visibility: visible;
      opacity: 0;
      transition: all 0.6s cubic-bezier(0.4,0,0.6,1);
      transition-delay: calc(0.05s * var(--char-index));
      transform: translateY(75%);
    }
  }

  &.play :deep(.char)::before {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

<script setup>
import AccordionGallerySlide from '~/components/AccordionGallerySlide.vue';
import AccordionGallerySlideMobile from '~/components/AccordionGallerySlideMobile.vue';
import Map from '~/components/Map.vue';

import { MqResponsive } from 'vue3-mq';

// Splitting.js styles
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.min.css';

import { gsap } from "gsap";

const rootEl = ref();
const unmountCleanupList = [];

// Animations
let heroTransition = gsap.timeline()

// Signature Dishes
const signatureTitle = ref("Signature");
const signatureDishes = [
  {
    src: '/images/dish/beef-tenderloin.jpg',
    title: 'Beef Tenderloin',
    description: 'Slow-smoked, spice-infused beef tenderloin, served with a sprinkle of salt and pepper on top of the natural flavor.',
  },
  {
    src: '/images/dish/mushroom-pasta.jpg',
    title: 'Mushroom Pasta',
    description: 'Spaghetti noodles tossed with sautéed mushrooms, garlic, and onions in a rich cream sauce.',
  },
  {
    src: '/images/dish/lamb-chop.jpg',
    title: 'Rosemary Lamb',
    description: 'Tender lamb chops marinated in rosemary and garlic, grilled to perfection.',
  },
  {
    src: '/images/dish/chicken-chop.jpg',
    title: 'Chicken Chop',
    description: 'Traditional fried chicken chop with fries.',
  },
  {
    src: '/images/dish/pork-burger.jpg',
    title: 'Signature Pork Burger',
    description: 'Our signature juicy pork burger grilled with a secret black pepper sauce.',
  },
];

function scrollToSignaturesSection () {
  document.getElementById('section-homepage-signature').scrollIntoView({ behavior: "smooth" });
}

function onSwiperAfterInit (swiper) {
  // Disable swiper resize handler on ios
  // Workaround ios bug
  // @see https://github.com/nolimits4web/swiper/issues/5091
  if (swiper.device.ios && swiper.resize) {
    swiper.resize.removeObserver();
    window.removeEventListener(
        'resize', swiper.resize.resizeHandler,
    );
  }
};

let signatureTitleAnim;

onMounted(() => {
  // Split signature title characters for reveal animation
  import("splitting").then(Splitting => {
    signatureTitle.value = Splitting.html({ content: 'Signature', by: 'chars' });
  });

  // Wait for page transition end
  usePageTransitionEvent(() => {
    // Play signature title reveal animation
    const el = document.querySelector("[data-gsap-animate='signature']");
    unmountCleanupList.push(
      useInViewOnce(el, () => el.classList.add("play"))
    );

    // Hero section transition
    gsap
      .timeline()
      .from(rootEl.value.querySelectorAll("[data-gsap-animate='hero']"), {
        y: 100,
        autoAlpha: 0,
        duration: 0.6,
        delay: 0.4,
        stagger: 0.2,
      })
      .from(rootEl.value.querySelectorAll("[data-gsap-animate='hero-steak']"), {
        autoAlpha: 0,
        duration: 0.6,
        delay: 0.05,
      }, "<")
      .from(rootEl.value.querySelectorAll("[data-gsap-animate='hero-skip']"), {
        y: -150,
        autoAlpha: 0,
        duration: 0.6,
      })
      .restart();
  });
})

onBeforeUnmount(() => {
  // Clean up
  while (unmountCleanupList.length > 0) {
    const i = unmountCleanupList.shift();
    if (typeof i === 'function') i();
  }
});
</script>
