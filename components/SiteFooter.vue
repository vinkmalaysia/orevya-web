<template>
  <footer class="bg-[var(--color-secondary)] pt-16 py-8 px-8">
    <section class="xl:hidden h-[250px] lg:h-[350px] w-full pb-8" v-if="$route.path !== '/'">
      <Map class="w-full h-full" />
    </section>
    <section class="grid grid-cols-12 gap-2 md:gap-8">
      <section class="max-xl:hidden row-span-2 col-span-6 rounded-xl overflow-hidden">
        <Map class="w-full h-full" />
      </section>
      <section class="col-span-12 md:col-span-4 xl:col-span-6">
        <!-- Reservation -->
        <div>
          <button class="relative overflow-hidden isolate transition-colors rounded-full border-2 border-white/80 px-6 py-4 mb-8 font-Jost text-sm md:text-md text-white/80 hover:text-[var(--color-primary)] font-bold uppercase before:absolute before:block before:content-[''] before:bg-white/80 before:top-0 before:left-0 before:w-full before:h-0 hover:before:h-full before:transition-all before:duration-200 z-10 before:-z-10">Reservation</button>
        </div>

        <!-- Follow us   -->
        <section class="mb-2">
          <ul>
            <li class="inline-block mx-1 ml-0">
              <a href="https://www.instagram.com/oreyva_kl" aria-label="Follow Us on Instagram" v-tippy="{ content: 'Instagram', delay: 100}">
                <svg class="transition-[fill] fill-[#a2846d] hover:fill-[#D2B48C] cursor-pointer w-[36px] h-[36px] sm:w-[48px] sm:h-[48px]" viewBox="0 0 50 50">
                  <path d="M16 3C8.83248 3 3 8.83248 3 16V34C3 41.1675 8.83248 47 16 47H34C41.1675 47 47 41.1675 47 34V16C47 8.83248 41.1675 3 34 3H16ZM16 5H34C40.0865 5 45 9.91352 45 16V34C45 40.0865 40.0865 45 34 45H16C9.91352 45 5 40.0865 5 34V16C5 9.91352 9.91352 5 16 5ZM37 11C36.4696 11 35.9609 11.2107 35.5858 11.5858C35.2107 11.9609 35 12.4696 35 13C35 13.5304 35.2107 14.0391 35.5858 14.4142C35.9609 14.7893 36.4696 15 37 15C37.5304 15 38.0391 14.7893 38.4142 14.4142C38.7893 14.0391 39 13.5304 39 13C39 12.4696 38.7893 11.9609 38.4142 11.5858C38.0391 11.2107 37.5304 11 37 11ZM25 14C18.9367 14 14 18.9367 14 25C14 31.0633 18.9367 36 25 36C31.0633 36 36 31.0633 36 25C36 18.9367 31.0633 14 25 14ZM25 16C29.9824 16 34 20.0176 34 25C34 29.9824 29.9824 34 25 34C20.0176 34 16 29.9824 16 25C16 20.0176 20.0176 16 25 16Z"/>
                </svg>
              </a>
            </li>
            <li class="inline-block mx-1">
              <a href="https://www.facebook.com/oreyva_kl" aria-label="Follow Us on Facebook" v-tippy="{ content: 'Facebook', delay: 100}">
                <svg class="transition-[fill] fill-[#a2846d] hover:fill-[#D2B48C] cursor-pointer w-[36px] h-[36px] sm:w-[48px] sm:h-[48px]" viewBox="0 0 50 50">
                  <path d="M25 3C12.8616 3 3 12.8616 3 25C3 36.0191 11.1275 45.1384 21.7129 46.7285L22.8613 46.9023V29.5664H17.6641V26.0469H22.8613V21.373C22.8613 18.495 23.552 16.5994 24.6953 15.4102C25.8387 14.2209 27.528 13.6211 29.8789 13.6211C31.7587 13.6211 32.49 13.735 33.1855 13.8203V16.7012H30.7383C29.3497 16.7012 28.2104 17.4759 27.6191 18.5078C27.0278 19.5397 26.8438 20.7718 26.8438 22.0273V26.0449H32.9668L32.4219 29.5645H26.8438V46.9297L27.9785 46.7754C38.7143 45.3194 47 36.1268 47 25C47 12.8616 37.1384 3 25 3ZM25 5C36.0576 5 45 13.9424 45 25C45 34.7298 38.0358 42.7318 28.8438 44.5332V31.5645H34.1367L35.2988 24.0449H28.8438V22.0273C28.8438 20.9899 29.0336 20.0603 29.3535 19.502C29.6735 18.9436 29.9819 18.7012 30.7383 18.7012H35.1855V12.0098L34.3184 11.8926C33.7186 11.8114 32.3492 11.6211 29.8789 11.6211C27.1758 11.6211 24.8556 12.3574 23.2539 14.0234C21.6522 15.6894 20.8613 18.1701 20.8613 21.373V24.0469H15.6641V31.5664H20.8613V44.4707C11.817 42.5548 5 34.6244 5 25C5 13.9424 13.9424 5 25 5Z"/>
                </svg>
              </a>
            </li>
            <li class="inline-block mx-1">
              <a href="#" aria-label="Contact Us via Messenger" v-tippy="{ content: 'Messenger', delay: 100}">
                <svg class="transition-[fill] fill-[#a2846d] hover:fill-[#D2B48C] cursor-pointer w-[36px] h-[36px] sm:w-[48px] sm:h-[48px]" viewBox="0 0 50 50">
                  <path d="M47.1 20.1C45.2 11.7 38.3 4.8 29.9 3C21.5 1.1 12.4 4.4 7.1 11.2C1.9 18 0.999995 27.7 5 35.4C5.1 35.7 5.3 35.9 5.3 36.1C5.3 36.4 5.2 36.7 5.1 37L3.5 42.3C2.9 44.3 3.6 45.4 4.1 45.8C4.9 46.6 6.3 46.8 7.8 46.4L12.9 44.9C13.2 44.8 13.5 44.7 13.7 44.7C13.9 44.7 14.2 44.9 14.6 45.1C17.6 46.7 21.1 47.5 24.8 47.5H24.9C30 47.5 34.9 45.9 38.7 42.9C45.6 37.7 48.9 28.5 47.1 20.1ZM37.6 41.3C34.2 43.9 29.7 45.4 25 45.4H24.9C21.6 45.4 18.4 44.7 15.6 43.2C15.2 43 14.7 42.7 14 42.7C13.9 42.7 13.8 42.7 13.8 42.7C13.3 42.7 12.9 42.8 12.5 42.9L7.4 44.4C6.4 44.7 5.9 44.6 5.7 44.3C5.5 44.1 5.4 43.5 5.6 42.8L7 37.6C7.1 37.1 7.3 36.6 7.2 36C7.2 35.4 6.9 34.9 6.7 34.4C3.2 27.5 4 18.5 8.7 12.4C13.4 6.3 22 3.2 29.5 4.9C37 6.6 43.4 13 45.1 20.5C46.8 28.1 43.7 36.6 37.6 41.3Z"/>
                  <path d="M28.6 27.2L21.4 20L13.5 27.9L14.9 29.3L21.4 22.8L28.6 30L36.5 22.1L35.1 20.7L28.6 27.2Z"/>
                </svg>
              </a>
            </li>
            <li class="inline-block mx-1">
              <a href="#" aria-label="Contact Us via WhatsApp" v-tippy="{ content: 'Whatsapp', delay: 100}">
                <svg class="transition-[fill] fill-[#a2846d] hover:fill-[#D2B48C] cursor-pointer w-[36px] h-[36px] sm:w-[48px] sm:h-[48px]" viewBox="0 0 50 50">
                  <path d="M25.1 46.1C21.4 46.1 17.8 45.1 14.6 43.3L3.99999 46.1L6.89999 35.9C4.89999 32.6 3.79999 28.8 3.79999 24.9C3.79999 13.2 13.3 3.7 25 3.7C36.7 3.7 46.3 13.2 46.3 24.9C46.3 36.6 36.8 46.1 25.1 46.1ZM14.9 41.2L15.3 41.4C18.3 43.2 21.7 44.1 25.1 44.1C35.7 44.1 44.4 35.5 44.4 24.9C44.4 14.3 35.8 5.7 25.1 5.7C14.5 5.7 5.89999 14.3 5.89999 24.9C5.89999 28.5 6.89999 32.1 8.89999 35.2L9.09999 35.6L6.89999 43.3L14.9 41.2Z"/>
                  <path d="M35.5 30.4C35.4 30.3 35.3 30.3 35.1 30.2C33.8 29.6 31.6 28.5 30.8 28.2C30.4 28.7 29.5 29.8 29.1 30.4C24.9 29.3 21.1 26.4 19 22.5C19.1 22.3 19.3 22.1 19.4 22C19.6 21.7 19.9 21.5 20.1 21.2C20.2 21.1 20.6 20.5 20.6 20.4C20.6 20.3 20.6 20.2 20.6 20.1C20.6 20 20.3 19.5 20.3 19.3C20.2 19 20.1 18.7 20 18.5C19.8 18.1 19.7 17.7 19.5 17.4C19.3 17 18.8 15.6 18.6 15.4C18.2 15.4 17.7 15.4 17.3 15.4C17 15.4 16.7 15.5 16.5 15.8C15.3 16.9 14.7 18.3 14.7 19.9C14.9 21.8 15.6 23.7 16.8 25.2C16.8 25.2 19.4 28.1 22.1 30.6C24.3 32.3 26.8 33.8 29.4 34.6C29.9 34.7 30.4 34.8 31 34.8C31.4 34.8 31.8 34.8 32.1 34.7C33.5 34.4 34.6 33.6 35.3 32.5C35.5 31.8 35.6 31.1 35.5 30.4Z"/>
                </svg>
              </a>
            </li>
          </ul>
        </section>
      </section>

      <!-- Hours -->
      <section class="col-span-6 md:col-span-4 lg:col-span-3 2xl:col-span-2 font-Jost text-[#D2B48C]">
        <h3 class="font-medium text-md md:text-lg text-white/95 border-b border-white/60 mb-3 uppercase xl:max-w-[250px]">Kitchen Hours</h3>
        <div>
          <p class="font-bold">Monday to Friday</p>
          <p>
            <time datetime="17:30">5:30pm</time> - <time datetime="22:00">10:00pm</time>
          </p>
        </div>
        <div>
          <p class="font-bold">Saturday - Sunday</p>
          <p>
            <time datetime="11:30">11:30am</time> - <time datetime="15:00">3:00pm</time>
          </p>
          <p>
            <time datetime="18:00">6:00pm</time> - <time datetime="22:00">10:00pm</time>
          </p>
        </div>
      </section>

      <!--  Contact  -->
      <section class="col-span-6 md:col-span-4 lg:col-span-3 2xl:col-span-2 font-Jost text-[#D2B48C]">
        <h3 class="font-medium text-md md:text-lg text-white/95 border-b border-white/60 mb-3 uppercase xl:max-w-[250px]">Contact</h3>
        <p class="leading-tight">D-H-2 Plaza Arkadia, 6, Jalan Intisari, Desa Parkcity, 52200 Kuala Lumpur</p>
        <p class="mt-4 leading-tight">contact@orevya.com</p>
        <p class="mt-4 leading-tight">+6016 5683 8400</p>
      </section>
    </section>

    <!-- Disclaimer -->
    <div class="mt-8 font-Jost">
      <span>
        <NuxtLink to="/privacy" class="[&:not(:first-child)]:ml-3 px-3 py-0.5 rounded-full border border-[#b77e4d] hover:border-[#e1a16a] align-middle text-[#b77e4d] hover:text-[#e1a16a]">Privacy Policy</NuxtLink>
      </span>
      <div class="mt-12 font-medium text-[#E3DCC2] text-sm">&copy; Orevya, All rights reserved. Made by <a href="https://www.vinkwebdesign.com" target="_blank" class="text-[rgb(210,180,140)] hover:text-[#bb9564]">VINK Web Design</a></div>
    </div>
  </footer>
</template>

<script setup>
import Map from '~/components/Map.vue';
</script>
