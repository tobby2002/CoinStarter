import axios from 'axios';

export const SELECT_TICKET = 'SELECT_TICKET';
export const FETCH_TICKET = 'FETCH_TICKET';

const ROOT_URL = "http://localhost:8081";


export function selectTicket(ticket) {
  return {
    type: SELECT_TICKET,
    payload: ticket
  };
}

export function fetchTickets() {
  return {
    type: FETCH_TICKET,
    payload: Promise.all([
      fetchTicket('BTC_KRW'),
      fetchTicket('ETC_KRW'),
      fetchTicket('ETH_KRW'),
      fetchTicket('XRP_KRW'),
      fetchTicket('BCH_KRW')
    ])
  };
}

export function fetchTicket(ticker) {
  return axios.get(`${ROOT_URL}/currencies/${ticker}/last`);
}