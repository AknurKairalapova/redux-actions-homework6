import { moveOrderToFarm} from '../actions/marketActions';
import {moveOrderToCustomer}  from '../actions/farmActions';
import {sortOrderFn} from './helpers';
import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';

const orders = handleActions({
  [moveOrderToFarm]: (state, action) => [...state, action.payload].sort(sortOrderFn),
  [moveOrderToCustomer]: (state, action) => state.filter(order => order.id !== action.payload.id)
}, []);


export const farm = combineReducers({
  orders
});


export const getOrders = state => state.farm.orders;