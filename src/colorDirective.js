export default {
  mounted(el, binding) {
    el.style[binding.arg] = binding.value;
    if (binding.modifiers.blink) {
      setInterval(() => {
        el.style.opacity = el.style.opacity === "0" ? 1 : 0;
      }, 500);
    }
  },
  updated(el, binding) {
    el.style[binding.arg] = binding.value;
  },
};
