import { useEventListener } from '@vueuse/core';
import { event } from '~/plugins/pagetransition';

export default function (listener) {
  return useEventListener(window, event.type, listener);
}
