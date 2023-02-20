export const event = new Event("app:pagetransitionfinish");

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:transition:finish', () => {
    window.dispatchEvent(event);
  })
});
