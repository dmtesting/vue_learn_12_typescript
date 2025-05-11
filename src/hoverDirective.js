let defaultColor;
let element;

const mouseover = (evt) => {
  evt.target.style.color = "red";
};

const mouseout = (evt) => {
  evt.target.style.color = defaultColor;
};

export default {
  mounted(el, binding) {
    element = el;
    defaultColor = binding.value;

    element.addEventListener("mouseover", mouseover);
    element.addEventListener("mouseout", mouseout);
  },
  unmounted() {
    element.removeEventListener("mouseover", mouseover);
    element.removeEventListener("mouseout", mouseout);
  },
};
