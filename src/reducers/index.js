import {combineReducers} from 'redux';
import TicketReducer from './reducer_ticket';

const rootReducer = combineReducers({
  tickets: TicketReducer
});

export default rootReducer;
