

// Action creator
export function selectBook (book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.
  // Returns an action.
  // Action: 1) Type (always), 2) Payload (sometimes)
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
  // Whatever returns is the action
}
