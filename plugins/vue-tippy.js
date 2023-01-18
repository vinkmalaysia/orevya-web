import { plugin as VueTippy } from 'vue-tippy'
import 'tippy.js/dist/tippy.css';

export default defineNuxtPlugin((nuxtApp) => {
// Tooltip using VueTippy
  nuxtApp.vueApp.use(VueTippy);
});
