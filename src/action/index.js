import axios from 'axios';

export const SELECT_CURRENCY = 'SELECT_CURRENCY';
export const FETCH_CURRENCIES = 'FETCH_CURRENCIES';

const ROOT_URL = "http://localhost:8081";


export function selectCurrency(currency) {
  return {
    type: SELECT_CURRENCY,
    payload: currency
  };
}

export function fetchCurrencies() {
  return {
    type: FETCH_CURRENCIES,
    payload: Promise.all([
      fetchCurrency('BTC_KRW'),
      fetchCurrency('ETC_KRW'),
      fetchCurrency('ETH_KRW'),
      fetchCurrency('XRP_KRW'),
      fetchCurrency('BCH_KRW')
    ])
  };
}

export function fetchCurrency(ticker) {
  return axios.get(`${ROOT_URL}/currencies/${ticker}/last`);
}