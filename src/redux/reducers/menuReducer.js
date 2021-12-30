const initialState = false;


export default function menuReducer(state = initialState, action) {
  const {type, data} = action;
  switch (type) {
    case 'CHANGE_MENU_STATUS':
      return data;
    default:
      return state;
  }
}

export const changeMenuStatus = (obj) => ({
  type: 'CHANGE_MENU_STATUS',
  data: obj,
});
