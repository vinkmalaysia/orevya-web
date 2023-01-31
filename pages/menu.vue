<template>
  <main class="relative py-24 isolate overflow-hidden">
    <div class="absolute top-[200px] left-[0px] -z-10 pointer-events-none">
      <div class="absolute left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full border border-black/10" />
    </div>
    <section>
      <div class="text-center mb-12">
        <h1 class="inline-block px-4 py-1 font-Jost border-y border-[var(--color-secondary)] text-2xl xl:text-4xl text-[var(--color-secondary)] font-medium xl:font-normal uppercase">Our Menu</h1>
      </div>
      <section class="flex flex-col 2xl:flex-row justify-center">
        <section class="menu-section">
          <h2 class="menu-heading">Appetizer</h2>
          <div class="menu-decor my-6">
            <svg viewBox="0 0 102.34 4.84">
              <path d="M99.58,4.84c-.06,0-.11,0-.17,0-2.22-.13-3.94-1.95-3.99-4.13H6.92c-.06,2.18-1.78,3.99-3.99,4.13C1.41,4.92,.1,3.76,0,2.24-.06,1.23,.72,.36,1.73,.3c.34-.02,.67,.09,.92,.32,.25,.23,.41,.54,.43,.87,.01,.19-.14,.36-.33,.37-.19,.01-.36-.14-.37-.33,0-.15-.08-.29-.19-.39-.11-.1-.26-.15-.41-.14-.63,.04-1.1,.58-1.07,1.2,.07,1.13,1.05,2,2.18,1.93,1.95-.12,3.45-1.8,3.33-3.76l-.02-.37H96.15l-.02,.37c-.12,1.95,1.37,3.64,3.33,3.76,1.13,.07,2.11-.8,2.18-1.93,.04-.63-.44-1.17-1.07-1.2-.15,0-.3,.04-.41,.14-.11,.1-.18,.24-.19,.39-.01,.19-.18,.34-.37,.33-.19-.01-.34-.18-.33-.37,.02-.34,.17-.65,.43-.87,.25-.23,.58-.34,.92-.32,1.01,.06,1.79,.94,1.73,1.95-.09,1.46-1.31,2.59-2.75,2.59Z"/>
            </svg>
          </div>
          <ul class="menu-list">
            <li>Crab Cake</li>
            <li>Hokkaido Scallops</li>
            <li>Baked Portobello with Shrimp</li>
            <li>Organic Caesar Salad</li>
            <li>Lobster Bisque</li>
            <li>Mushroom Soup</li>
            <li>Fritto Misto</li>
            <li>Caesar Salad</li>
          </ul>
        </section>
        <section class="menu-section">
          <h2 class="menu-heading">Main</h2>
          <div class="menu-decor my-6">
            <svg class="w-[150px] mx-auto" viewBox="0 0 102.34 4.84">
              <path d="M99.58,4.84c-.06,0-.11,0-.17,0-2.22-.13-3.94-1.95-3.99-4.13H6.92c-.06,2.18-1.78,3.99-3.99,4.13C1.41,4.92,.1,3.76,0,2.24-.06,1.23,.72,.36,1.73,.3c.34-.02,.67,.09,.92,.32,.25,.23,.41,.54,.43,.87,.01,.19-.14,.36-.33,.37-.19,.01-.36-.14-.37-.33,0-.15-.08-.29-.19-.39-.11-.1-.26-.15-.41-.14-.63,.04-1.1,.58-1.07,1.2,.07,1.13,1.05,2,2.18,1.93,1.95-.12,3.45-1.8,3.33-3.76l-.02-.37H96.15l-.02,.37c-.12,1.95,1.37,3.64,3.33,3.76,1.13,.07,2.11-.8,2.18-1.93,.04-.63-.44-1.17-1.07-1.2-.15,0-.3,.04-.41,.14-.11,.1-.18,.24-.19,.39-.01,.19-.18,.34-.37,.33-.19-.01-.34-.18-.33-.37,.02-.34,.17-.65,.43-.87,.25-.23,.58-.34,.92-.32,1.01,.06,1.79,.94,1.73,1.95-.09,1.46-1.31,2.59-2.75,2.59Z"/>
            </svg>
          </div>
          <ul class="menu-list">
            <li>Fish & Chips</li>
            <li>Classic Wagyu Beef</li>
            <li>Australian Rib-Eye</li>
            <li>Beef Tenderloin</li>
            <li>Rosemary Lamb</li>
            <li>Baked Pork Ribs</li>
            <li>Signature Pork Burger</li>
            <li>Grilled Maine Lobster</li>
            <li>Seafood Spaghetti</li>
            <li>Mushroom Pasta</li>
            <li>Chicken Chop</li>
          </ul>
        </section>
        <section class="menu-section">
          <h2 class="menu-heading">Dessert</h2>
          <div class="menu-decor my-6">
            <svg class="w-[150px] mx-auto" viewBox="0 0 102.34 4.84">
              <path d="M99.58,4.84c-.06,0-.11,0-.17,0-2.22-.13-3.94-1.95-3.99-4.13H6.92c-.06,2.18-1.78,3.99-3.99,4.13C1.41,4.92,.1,3.76,0,2.24-.06,1.23,.72,.36,1.73,.3c.34-.02,.67,.09,.92,.32,.25,.23,.41,.54,.43,.87,.01,.19-.14,.36-.33,.37-.19,.01-.36-.14-.37-.33,0-.15-.08-.29-.19-.39-.11-.1-.26-.15-.41-.14-.63,.04-1.1,.58-1.07,1.2,.07,1.13,1.05,2,2.18,1.93,1.95-.12,3.45-1.8,3.33-3.76l-.02-.37H96.15l-.02,.37c-.12,1.95,1.37,3.64,3.33,3.76,1.13,.07,2.11-.8,2.18-1.93,.04-.63-.44-1.17-1.07-1.2-.15,0-.3,.04-.41,.14-.11,.1-.18,.24-.19,.39-.01,.19-.18,.34-.37,.33-.19-.01-.34-.18-.33-.37,.02-.34,.17-.65,.43-.87,.25-.23,.58-.34,.92-.32,1.01,.06,1.79,.94,1.73,1.95-.09,1.46-1.31,2.59-2.75,2.59Z"/>
            </svg>
          </div>
          <ul class="menu-list">
            <li>Tiramisu Cake</li>
            <li>Crème Brûlée</li>
            <li>Meringues Chantilly</li>
            <li>Choux Pastry</li>
          </ul>
        </section>
      </section>
    </section>
  </main>
</template>

<style scoped>
.menu-section {
  @apply text-center font-Jost text-lg mx-4 md:mx-24 xl:mx-48 2xl:mx-0 mb-6 py-24 px-24 2xl:px-28;
  background-image: radial-gradient(circle at center 20%, #263932, #2f1b1b);
}

.menu-heading {
  @apply font-MrsSaintDelafield font-medium text-6xl text-[#D2B48C];
}

.menu-decor svg {
  @apply w-[150px] fill-[#D2B48C] mx-auto;
}

.menu-list li {
  @apply py-3 text-xl text-white/80;
}
</style>
