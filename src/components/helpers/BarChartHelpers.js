export function sortData(data) {
  const values = Object.values(data);
  const keys = Object.keys(data);
  const sortedObj = {};

  values.sort((a, b) => b - a);

  for (var i = 0; i < values.length; i++) {
    var value = values[i];
    var key = keys[values.indexOf(value)];
    sortedObj[key] = value;
  }

  return sortedObj;
}
