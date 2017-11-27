import {createOrder, moveOrderToFarm} from '../actions/marketActions';
import {moveOrderToCustomer}  from '../actions/farmActions';
import {combineReducers} from 'redux';
import {handleAction} from 'redux-actions';

export const profit = handleAction (
    createOrder,
    (state, action) => state + action.payload.price,
    0
);

export const marketExpanse = handleAction (
    createOrder,
    (state, action) => state + 20,
    0
);

export const farmExpanse = handleAction (
    moveOrderToFarm,
    (state, action) => state + 100,
    0
);

export const deliveryExpanse = handleAction (
    moveOrderToCustomer,
    (state, action) => state + 20,
    0
);


export const budget = combineReducers({
    profit,
    marketExpanse,
    farmExpanse,
    deliveryExpanse
});


export const getProfit = state => state.budget.profit;
export const getMarketExpanse = state => state.budget.marketExpanse;
export const getFarmExpanse = state => state.budget.farmExpanse;
export const getDeliveryExpanse = state => state.budget.deliveryExpanse;