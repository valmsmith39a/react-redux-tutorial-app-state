// State argument is not application, only the state
// this reducer is responsible for
// note: NEVER change the state here 
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
}
