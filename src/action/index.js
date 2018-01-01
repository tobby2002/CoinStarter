export function selectTicket(ticket) {
  return {
    type: 'TICKET_SELECTED',
    payload: ticket
  }
}