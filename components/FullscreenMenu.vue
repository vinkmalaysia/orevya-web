<template>
  <section id="fullscreen-menu-wrapper" class="fixed inset-0 bg-[#eee] lg:hidden" style="z-index: var(--zindex-fullscreen-menu); visibility: hidden">
    <nav class="pt-16">
      <ul class="grid grid-rows-3 text-4xl font-Parisienne text-md text-center">
        <NuxtLink to="/menu">
          <li class="py-4 text-[#333] hover:bg-gray-200 transition-colors duration-700">
            <span>Menu</span>
            <div class="rounded-full border-2 border-[#777] h-12 w-12 mx-auto mt-2">
              <svg viewBox="0 0 16 16" height="48" width="48">
                <g stroke="#777">
                  <line stroke-width=".5" x1="4" y1="7.5" x2="11" y2="7.5" fill="none" stroke-linecap="round" stroke-linejoin="round" />
                  <polyline stroke-width=".5" points="9 5.5 11 7.5 9 9.5" fill="none" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
            </div>
          </li>
        </NuxtLink>
        <NuxtLink to="/careers">
          <li class="py-4 text-[#333] hover:bg-gray-200 transition-colors duration-300">
            <span>Careers</span>
            <div class="rounded-full border-2 border-[#777] h-12 w-12 mx-auto mt-2">
              <svg viewBox="0 0 16 16" height="48" width="48">
                <g stroke="#777">
                  <line stroke-width=".5" x1="4" y1="7.5" x2="11" y2="7.5" fill="none" stroke-linecap="round" stroke-linejoin="round" />
                  <polyline stroke-width=".5" points="9 5.5 11 7.5 9 9.5" fill="none" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
            </div>
          </li>
        </NuxtLink>
        <NuxtLink to="/about">
          <li class="py-4 text-[#333] hover:bg-gray-200 transition-colors duration-700">
            <span>About</span>
            <div class="rounded-full border-2 border-[#777] h-12 w-12 mx-auto mt-2">
              <svg viewBox="0 0 16 16" height="48" width="48">
                <g stroke="#777">
                  <line stroke-width=".5" x1="4" y1="7.5" x2="11" y2="7.5" fill="none" stroke-linecap="round" stroke-linejoin="round" />
                  <polyline stroke-width=".5" points="9 5.5 11 7.5 9 9.5" fill="none" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
            </div>
          </li>
        </NuxtLink>
      </ul>
    </nav>
  </section>
</template>
