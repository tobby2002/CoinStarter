import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectTicket} from '../action/index';
import {bindActionCreators} from 'redux';

class TicketList extends Component {
  
  render() {
    return (
      <ul className="list-group-col-sm4">{this.renderList()}</ul>
    )
  }
  
  renderList() {
    return this.props.tickets.map((ticket) => {
      return (
        <li onClick={() => this.props.selectTicket(ticket)}
            key={ticket.title}
            className="list-group-item">
          <div>
            {ticket.title} <br/>
            {ticket.timestamp} <br/>
            {ticket.last}
          </div>
        </li>
      )
    })
  }
}

function mapStateToProp(state) {
  return {
    tickets: state.tickets
  };
}

function mapDispatchToProp(dispatch) {
  return bindActionCreators({selectTicket: selectTicket}, dispatch);
}

export default connect(mapStateToProp, mapDispatchToProp)(TicketList);