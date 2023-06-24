export function deleteHelper(payload) {
  let monthsExpenses;
  let monthsIncomes;
  if (Object.keys(payload)[0] === 'expenses') {
    monthsExpenses = payload.monthsStats;
  } else if (Object.keys(payload)[0] === 'incomes') {
    monthsIncomes = payload.monthsStats;
  }
  return [monthsExpenses, monthsIncomes];
}
