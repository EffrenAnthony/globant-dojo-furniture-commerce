export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateRelatedColors(hexColor) {
  let relatedColors = [];
  for (let i = 0; i < 3; i++) {
    let color = '#';
    for (let j = 0; j < 6; j++) {
      let value = (parseInt(hexColor[j], 16) + 85 * i) % 256;
      color += value.toString(16).padStart(2, '0');
    }
    relatedColors.push(color);
  }
  return relatedColors;
}

export function generateRandomColor() {
  let maxVal = 0xffffff; // 16777215
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);
  return `#${randColor.toUpperCase()}`;
}
