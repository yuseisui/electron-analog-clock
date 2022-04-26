const defineRotate = (name, angle) => {
  return `
@keyframes ${name}-rotate {
  from {
    transform: rotate(${angle}deg);
  }
  to {
    transform: rotate(calc(${angle}deg + 360deg));
  }
}
`;
};

const date = new Date();
const h = date.getHours();
const m = date.getMinutes();
const s = date.getSeconds();

const hourRotate = defineRotate(
  'hour',
  (h % 12) * 30 + m * 0.5 + s * (0.5 / 60),
);
const minRotate = defineRotate('min', m * 6 + s * 0.1);
const secRotate = defineRotate('sec', s * 6);

const style = document.createElement('style');
style.textContent = hourRotate + minRotate + secRotate;
document.head.append(style);
