const state = [{ address: 'Sacramento, CA, USA', id: 38.5815719 }];

export default (state = [], action) => {
  switch (action.type) {
    case 'add_plan':
      return [...state, action.payload];
      break;
    case 'DELETE':
      break;
    case 'update_task':
      var newState = state;
      var number = 0;
      for (var i = 0; i < newState[action.payload.num].categories.length; i++) {
        if (
          newState[action.payload.num].categories[i].name ===
          action.payload.name
        ) {
          number = i;
        }
      }
      var obj = { name: action.payload.task, price: action.payload.price };
      newState[action.payload.num].categories[number].tasks.push(obj);
      newState[action.payload.num].categories[number].totalPrice += parseInt(
        action.payload.price
      );
      return [...state];
    case 'new_category':
      var obj = {
        name: action.payload.newCategory,
        tasks: [],
        totalPrice: 0
      };
      state[action.payload.num].categories.push(obj);
      return [...state];
    default:
      return state;
  }
};
