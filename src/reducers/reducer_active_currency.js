import {SELECT_CURRENCY} from "../action/index";
import {CURRENCIES} from "./reducer_currency";

export default function (state = null, action) {
  switch (action.type) {
    case SELECT_CURRENCY:
      return CURRENCIES.all.find((t) => t.currencyType === action.payload.currencyType);
  }
  return state;
}