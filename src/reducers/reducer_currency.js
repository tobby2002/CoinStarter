import {FETCH_CURRENCIES} from "../action/index";

export const CURRENCIES = {
  all: []
};

export default function (state = CURRENCIES, action) {
  switch (action.type) {
    case FETCH_CURRENCIES:
      CURRENCIES.all = action.payload.map(p => {
        return p.data
      });
      return {all: CURRENCIES.all};
    default:
      return state;
  }
}