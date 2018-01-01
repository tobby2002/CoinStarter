import React, {Component} from 'react'
import TicketList from './ticket-list';
import TicketDetail from './ticket-detail';

export default class Ticket extends Component {
  render() {
    return (
      <div className="col-sm-10 text-left">
        <h2>
          현재 시세 확인
        </h2>
  
        <div>
          <TicketList/>
          <TicketDetail/>
        </div>
      </div>
    );
  }
}