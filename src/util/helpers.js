export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function relatedColors(hexColor = '#4398D1') {
  let color1, color2, color3;

  // Convertir hexadecimal a RGB
  let r = parseInt(hexColor.substring(1, 2), 16);
  let g = parseInt(hexColor.substring(2, 4), 16);
  let b = parseInt(hexColor.substring(4, 6), 16);

  // Generar tres colores relacionados
  color1 = 'rgb(' + (r + 50) + ',' + (g + 50) + ',' + (b + 50) + ')';
  color2 = 'rgb(' + (r - 50) + ',' + (g - 50) + ',' + (b - 50) + ')';
  color3 = 'rgb(' + (r + 25) + ',' + (g - 25) + ',' + (b + 50) + ')';

  return [color1, color2, color3];
}

// export function generateRelatedColors(hexColor) {
//   let relatedColors = [];
//   for (let i = 0; i < 3; i++) {
//     let color = '#';
//     for (let j = 0; j < 6; j++) {
//       let value = (parseInt(hexColor[j], 16) + 85 * i) % 256;
//       color += value.toString(16).padStart(2, '0');
//     }
//     relatedColors.push(color);
//   }
//   return relatedColors;
// }

// export function generateRandomColor() {
//   let maxVal = 0xffffff; // 16777215
//   let randomNumber = Math.random() * maxVal;
//   randomNumber = Math.floor(randomNumber);
//   randomNumber = randomNumber.toString(16);
//   let randColor = randomNumber.padStart(6, 0);
//   return `#${randColor.toUpperCase()}`;
// }
