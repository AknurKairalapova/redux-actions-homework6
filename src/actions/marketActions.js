import {createAction, createActions} from 'redux-actions';


export const {createOrder, moveOrderToFarm} = createActions( {
  CREATE_ORDER: undefined,
  MOVE_ORDER_TO_FARM: undefined
});



//>>>>>CREATEACTION
// export const createOrder = createAction (
//   'CREATE_ORDER'
// );

// export const moveOrderToFarm = createAction (
//   'MOVE_ORDER_TO_FARM'
// );

//>>>>>>>ACTION FUNCTION
// export const createOrder = payload => ({
//   type: CREATE_ORDER,
//   payload
// });
