import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchTickets, selectTicket} from '../action/index';
import {bindActionCreators} from 'redux';

class TicketList extends Component {

  componentWillMount() {
    this.props.fetchTickets()
  }
  render() {
    return (
      <ul className="list-group col-sm-4">{this.renderList()}</ul>
    )
  }

  renderList() {
    return this.props.tickets.map((ticket) => {
      return (
        <li onClick={() => this.props.selectTicket(ticket)}
            key={ticket.currencyType}
            className="list-group-item">
          <div>{ticket.currencyType}</div>
          <div>{ticket.timestamp}</div>
          <div>{ticket.last}</div>
        </li>
      )
    })
  }
}

function mapStateToProp(state) {
  return {
    tickets: state.tickets.all
  };
}

function mapDispatchToProp(dispatch) {
  return bindActionCreators({selectTicket: selectTicket, fetchTickets: fetchTickets}, dispatch);
}

export default connect(mapStateToProp, mapDispatchToProp)(TicketList);