
import moment from 'moment';

//get visible expense
//const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
export default (expenses, { text, sortBy, startDate, endDate }) => {
  //destructure the filter
  return expenses.filter((expense) => {
    const createdAtMoment = moment(expense.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day'):true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day'):true;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()) ;

    //figure out if expense.description as the text variable string inside it
    //look into includes
    //convert both strings to lower case

    return startDateMatch && endDateMatch && textMatch
  }).sort( (a, b) => {
    if(sortBy === 'date'){
      return a.createdAt  < b.createdAt ? 1 : -1;
    }
    else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;

    }
  })

}
