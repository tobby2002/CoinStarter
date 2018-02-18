import {combineReducers} from 'redux';
import CurrencyReducer from './reducer_currency';
import ActiveCurrency from './reducer_active_currency';

const rootReducer = combineReducers({
  currencies: CurrencyReducer,
  activeCurrency: ActiveCurrency
});

export default rootReducer;
