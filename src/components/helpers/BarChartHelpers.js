export function sortData(data) {
  const values = Object.values(data);

  const oldValues = [...values];

  const keys = Object.keys(data);
  const sortedObj = {};

  values.sort((a, b) => b - a);
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    const key = keys[oldValues.indexOf(value)];
    sortedObj[key] = value;
  }

  return sortedObj;
}

export function getGradient(chart, element, topColor, bottomColor) {
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
