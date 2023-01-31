<template>
  <main>
    <!-- Small Gallery -->
    <section class="relative h-[120px]">
      <section class="grid grid-cols-4 h-full">
        <HeaderGallerySlide src="/images/dish/ribeye.webp"/>
        <HeaderGallerySlide src="/images/dish/shrimps.jpg"/>
        <HeaderGallerySlide src="/images/dish/seafood-spaghetti.jpg"/>
        <HeaderGallerySlide src="/images/dish/caesar-salad.jpg"/>
      </section>
      <div class="absolute h-full w-full bottom-0 pointer-events-none opacity-80" style="background: linear-gradient(0deg,
        hsla(0, 0%, 100%, 1.0) 0%,
        hsla(0, 0%, 100%, 0.9) 30%,
        hsla(0, 0%, 100%, 0.60) 65%,
        hsla(0, 0%, 100%, 0.2) 91%,
        hsla(0, 0%, 100%, 0.1) 98.2%,
        hsla(0, 0%, 100%, 0) 100%);">
      </div>
    </section>
    <!-- Signature Dish Accordion -->
    <section>
      <div class="pt-6 mt-12 text-center">
        <h3 class="text-6xl font-MrsSaintDelafield text-[#F1E3E1]" style="">Signature</h3>
        <h2 class="font-Jost text-4xl xl:text-[4rem] text-[var(--color-primary)] font-medium xl:font-normal uppercase -translate-y-6" style="">OUR MENU</h2>
      </div>
      <div class="text-center py-3 mb-12">
        <svg viewBox="0 0 100.43 3.32" class="w-[300px] fill-neutral-300 mx-auto">
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
    </section>
    <MqResponsive target="lg-">
      <section class="my-8 md:m-12 md:my-32 grid grid-cols-2">
        <section class="col-span-2 md:col-span-1 flex flex-col items-center justify-center p-12">
          <h3 class="block font-Jost text-4xl text-[var(--color-primary)] font-bold uppercase">Find Us</h3>
          <div class="py-6">
            <svg viewBox="0 0 100.43 3.32" class="w-[300px] fill-neutral-300">
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
              <p class="text-[var(--color-primary)] font-bold">Monday to Friday</p>
              <p class="text-neutral-400">
                <time datetime="17:30">5:30pm</time>
                -
                <time datetime="22:00">10:00pm</time>
              </p>
            </div>
            <div class="mt-3">
              <p class="text-[var(--color-primary)] font-bold">Saturday - Sunday</p>
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
        <iframe class="col-span-2 md:col-span-1 w-full h-[350px]" src="https://maps.google.com/maps?width=100%25&amp;height=350&amp;hl=en&amp;q=Plaza%20Arkadia,%20Desa%20Parkcity+(Orevya)&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"/>
      </section>
    </MqResponsive>
  </main>
</template>

<script setup>
import AccordionGallerySlide from '~/components/AccordionGallerySlide.vue';
import AccordionGallerySlideMobile from '~/components/AccordionGallerySlideMobile.vue';
import HeaderGallerySlide from '~/components/HeaderGallerySlide.vue';

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
  if (swiper.device.ios) {
    swiper.resize.removeObserver();
    window.removeEventListener(
        'resize', swiper.resize.resizeHandler,
    );
  }
};
</script>
