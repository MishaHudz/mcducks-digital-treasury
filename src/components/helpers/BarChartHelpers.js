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
