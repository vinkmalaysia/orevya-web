const viewportEntered = new Event("viewportenter");
let viewportObserver;

if (typeof window !== "undefined") {
  viewportObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Trigger only once
          entry.target.dispatchEvent(viewportEntered);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 1, rootMargin: '-5% 0px' }
  );
}

/**
 *
 * Fire callback when element appears for the first time on viewport
 * @param el {EventTarget} Target element
 * @param callback {function?}
 * @returns {function?} Function to clean up event listener or none if server side
 */
export default function (el, callback) {
  if (typeof window === "undefined" || !el) return;

  viewportObserver.observe(el);

  el.addEventListener(viewportEntered.type, e => {
    // Add "play" to target's class
    el.classList.add("play");

    // Callback (only if specified)
    callback?.()
  }, { once: true })

  return () => {
    if(el){
      // Clean up
      viewportObserver.unobserve(el);
      el.removeEventListener(viewportEntered.type, callback);
    }
  };
}
