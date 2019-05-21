const expenseReducerDefaultState = []

//const expenseReducer = (state = expenseReducerDefaultState, action) => {
export default (state = expenseReducerDefaultState, action) => {
  switch(action.type){
    case 'ADD_EXPENSE':
    //concat returns a new array instead of modifying current one
      return [...state, action.expense];

    case 'REMOVE_EXPENSE':
      //destructure id out
      return state.filter(({id}) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map( (expense) => {
        if(expense.id === action.id){
          //this means, give me all the properties of the expense
          //and give me all the properties of the update object
          //last writes win
          return {
            ...expense,
            ...action.updates
          }
        }
        else{
          return expense;
        }

      })
    default:
      return state;
  }
}
//export default expenseReducer;
