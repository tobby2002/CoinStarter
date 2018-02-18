import {FETCH_TICKET} from "../action/index";

export const TICKETS = {
  all: []
};

export default function (state = TICKETS, action) {
  switch (action.type) {
    case FETCH_TICKET:
      TICKETS.all = action.payload.map(p => {
        return p.data
      });
      return {all: TICKETS.all};
    default:
      return state;
  }
}