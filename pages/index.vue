<template>
  <main class="max-lg:mt-14">
    <section class="grid md:grid-flow-col md:auto-cols-fr" style="background: linear-gradient(355deg, #533821 0%, #252C2A 100%);">
      <section class="h-[400px] md:h-full">
        <div class="relative bg-[url('/images/interior-2.jpg')] bg-[center_25%] xl:bg-top bg-cover min-w-full h-full max-h-full ">
          <div class="absolute inset-0 bg-[rgba(0,53,71,.5)]"></div>
        </div>
      </section>
      <section class="px-16 lg:px-24 pt-24 pb-24 2xl:py-48">
        <h1 class="font-Jost font-bold text-2xl text-white">OREVYA</h1>
        <h2 class="font-CormorantGaramond text-xl md:text-3xl text-white/80 mb-6">
          <span class="text-5xl md:text-6xl text-[#D2B48C]">Exceptional Cuisine</span>
          <br/>Starts with Superior Ingredients
        </h2>
        <div class="text-center py-2">
          <img src="/images/title-border.png" />
        </div>
        <p class="pt-16 font-Jost text-white/60 text-lg md:text-xl md:leading-relaxed mb-2">
          We carefully select only the freshest and highest quality components for our menu.
          Every dish is crafted with a devotion to detail and a passion for flavor.
        </p>
        <div class="mt-16">
          <div class="rounded-full border border-white h-12 w-12 mx-auto rotate-90">
            <svg viewBox="0 0 16 16" height="48" width="48">
              <g stroke="white">
                <line stroke-width=".5" x1="4" y1="7.5" x2="11" y2="7.5" fill="none" stroke-linecap="round" stroke-linejoin="round" />
                <polyline stroke-width=".5" points="9 5.5 11 7.5 9 9.5" fill="none" stroke-linecap="round" stroke-linejoin="round" />
              </g>
            </svg>
          </div>
        </div>
      </section>
    </section>
    <section class="relative bg-[url('/images/homepage-steak.jpg')] bg-[center_85%] bg-cover h-[250px] lg:h-[400px]">
      <div class="absolute inset-0 bg-black/80"></div>
    </section>
    <!-- Signature Dish Accordion -->
    <section>
      <div class="pt-6 mt-12 text-center">
        <h2 class="text-6xl md:text-8xl font-MrsSaintDelafield text-[#869182]" style="">Signature</h2>
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
          <button class="font-Jost uppercase font-medium transition-[padding] py-0.5 hover:px-2 border-b-[3px] border-[var(--color-primary)] text-[var(--color-secondary)]">View Menu</button>
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
      <iframe class=" w-full h-full max-md:min-h-[350px]" src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=Plaza%20Arkadia,%20Desa%20Parkcity+(Orevya)&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"/>
    </MqResponsive>
  </main>
</template>

<script setup>
import AccordionGallerySlide from '~/components/AccordionGallerySlide.vue';
import AccordionGallerySlideMobile from '~/components/AccordionGallerySlideMobile.vue';

import { MqResponsive } from 'vue3-mq';

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.min.css';

// Signature Dishes
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
</script>
