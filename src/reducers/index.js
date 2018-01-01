import {combineReducers} from 'redux';
import TicketReducer from './reducer_ticket';
import ActiveTicket from './reducer_active_ticket';

const rootReducer = combineReducers({
  tickets: TicketReducer,
  activeTicket: ActiveTicket
});

export default rootReducer;
