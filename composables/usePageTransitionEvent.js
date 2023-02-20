import { useEventListener } from '@vueuse/core';
import { event } from '~/plugins/pagetransition';

/**
 * Create an event listener to subscribe to page transition finished event
 * @param listener
 * @returns {function} Function to clean up the event listener
 */
export default function (listener) {
  return useEventListener(window, event.type, listener);
}
