export default {
  beforeMount(el, binding) {
    /* binding.value object takes 3 properties:
      icon - The icon class
      color - The color class
      spacing - Margin class
    */
    const { icon, color, spacing } = binding.value;
    let iconClass = `fas fa-`;

    if (icon) {
      iconClass += icon;
    }

    if (color) {
      iconClass += ` ${color}`;
    }

    if (spacing) {
      iconClass += ` ${spacing}`;
    }

    let otherContent = el.innerHTML;
    let iconContent = `<i class="${iconClass}"></i>`;
    let content = iconContent;

    if (binding.modifiers.left) {
      content = iconContent + otherContent;
    }

    el.innerHTML = content;
  },
};
