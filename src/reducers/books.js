const initialState = {
  activeBook: null,
  books: [
    { title: 'JS: The Good Parts' },
    { title: 'Harry Potter' },
    { title: 'The Dark Tower' },
    { title: 'Eloquent Ruby' }
  ]
};

function booksReducer(state = initialState, action) {
  switch (action.type) {
    case 'SELECT':
      return { ...state, activeBook: action.payload };
    default:
      return state;
  }
}

export default booksReducer;
