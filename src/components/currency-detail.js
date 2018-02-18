import React, {Component} from 'react';
import {connect} from 'react-redux';

class CurrencyDetail extends Component {
  render() {
    if (!this.props.currency) {
      return (
        <h3> 상세 정보 </h3>
      );
    }
    
    return (
      <div>
        <h3> 상세 정보 </h3>
        <div> last: {this.props.currency.last} </div>
        <div> bid: {this.props.currency.bid} </div>
        <div> ask: {this.props.currency.ask} </div>
        <div> low: {this.props.currency.low} </div>
        <div> high: {this.props.currency.high} </div>
        <div> volume: {this.props.currency.volume} </div>
        <div> change: {this.props.currency.change} </div>
        <div> changePercent: {this.props.currency.changePercent} </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currency: state.activeCurrency
  };
}

export default connect(mapStateToProps)(CurrencyDetail);