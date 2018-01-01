import React, {Component} from 'react';
import {connect} from 'react-redux';

class TicketDetail extends Component {
  render() {
    if (!this.props.ticket) {
      return (
        <h3> 상세 정보 </h3>
      );
    }
    
    return (
      <div>
        <h3> 상세 정보 </h3>
        <div> last: {this.props.ticket.last} </div>
        <div> bid: {this.props.ticket.bid} </div>
        <div> ask: {this.props.ticket.ask} </div>
        <div> low: {this.props.ticket.low} </div>
        <div> high: {this.props.ticket.high} </div>
        <div> volume: {this.props.ticket.volume} </div>
        <div> change: {this.props.ticket.change} </div>
        <div> changePercent: {this.props.ticket.changePercent} </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ticket: state.activeTicket
  };
}

export default connect(mapStateToProps)(TicketDetail);