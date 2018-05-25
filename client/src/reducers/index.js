const initialState = [{ address: 'Sacramento, CA, USA', id: 38.5815719 }];

export default (state = [], action) => {
  switch (action.type) {
    case 'add_plan':
      console.log('Your are Adding');
      return [...state, action.payload];
      break;
    case 'DELETE':
      console.log('Your are Deleteing');
      break;
    default:
      return state;
  }
  console.log(initialState);
};
