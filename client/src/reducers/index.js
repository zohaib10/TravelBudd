const initialState = [];

export default (state = initialState, action) => {
  console.log(initialState);
  switch (action.type) {
    case 'add_plan':
      console.log('Your are Adding');
      initialState.push(action.payload);
      break;
    case 'DELETE':
      console.log('Your are Deleteing');
      break;
    default:
      return state;
  }
};
