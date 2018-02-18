import {SELECT_TICKET} from "../action/index";
import {TICKETS} from "./reducer_ticket";

export default function (state = null, action) {
  switch (action.type) {
    case SELECT_TICKET:
      return TICKETS.all.find((t) => t.currencyType === action.payload.currencyType);
  }
  return state;
}