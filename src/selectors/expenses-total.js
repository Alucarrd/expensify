


export default ({expenses}) => {
  if(expenses.length === 0)
    return 0
  else
    return expenses.reduce( (acc, expense) => (acc + expense.amount));
}


/*
var totalYears = pilots.reduce(function (accumulator, pilot) {
  return accumulator + pilot.years;
}, 0);

*/
