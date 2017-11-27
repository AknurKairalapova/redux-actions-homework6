import {createOrder, moveOrderToFarm} from '../actions/marketActions';
import {sortOrderFn} from './helpers';
import {combineReducers} from 'redux';
import {handleActions} from 'redux-actions';

export const orders = handleActions ({
  [createOrder]: (state, action) => [...state, action.payload].sort(sortOrderFn),
  [moveOrderToFarm]: (state, action) => state.filter(order => order.id !== action.payload.id)
}, []);


export const market = combineReducers({
  orders
});

export const getOrders = state => state.market.orders;