export function sortData(data) {
  const values = Object.values(data);
  const keys = Object.keys(data);

  const oldValues = [...values];

  if (keys.length === 2) {
    return data;
  }

  const sortedObj = { total: 0 };

  values.sort((a, b) => b - a);
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    const valueIndex = oldValues.indexOf(value);
    oldValues[valueIndex] = null;
    const key = keys[valueIndex];
    sortedObj[key] = value;
  }

  return sortedObj;
}

export function getGradient(chart, element, topColor, bottomColor) {
  if (!element) return;
  const { height } = element;
  const {
    ctx,
    chartArea: { top, bottom },
  } = chart;
  //   console.log('top', top, 'bottom', bottom);
  //   console.log(element);
  let correctTop = height ? top + bottom - height : top;

  const gradientSegment = ctx.createLinearGradient(0, bottom, 0, correctTop);
  gradientSegment.addColorStop(0, bottomColor);
  gradientSegment.addColorStop(1, topColor);
  return gradientSegment;
}

export function getMobileGradient(chart, element, topColor, bottomColor) {
  if (!element) return;
  const { width } = element;
  const {
    ctx,
    chartArea: { left, right },
  } = chart;

  //   console.log('left', left, 'right', right);
  //   console.log(element);

  let correctRight = width ? left + width : right;

  const gradientSegment = ctx.createLinearGradient(left, 0, correctRight, 0);
  gradientSegment.addColorStop(0, bottomColor);
  gradientSegment.addColorStop(1, topColor);
  return gradientSegment;
}
