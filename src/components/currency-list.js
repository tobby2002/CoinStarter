import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchCurrencies, selectCurrency} from '../action/index';
import {bindActionCreators} from 'redux';

class CurrencyList extends Component {

  componentWillMount() {
    this.props.fetchCurrencies()
  }
  render() {
    return (
      <ul className="list-group col-sm-4">{this.renderList()}</ul>
    )
  }

  renderList() {
    return this.props.currencies.map((currency) => {
      return (
        <li onClick={() => this.props.selectCurrency(currency)}
            key={currency.currencyType}
            className="list-group-item">
          <div>{currency.currencyType}</div>
          <div>{currency.timestamp}</div>
          <div>{currency.last}</div>
        </li>
      )
    })
  }
}

function mapStateToProp(state) {
  return {
    currencies: state.currencies.all
  };
}

function mapDispatchToProp(dispatch) {
  return bindActionCreators({selectCurrency: selectCurrency, fetchCurrencies: fetchCurrencies}, dispatch);
}

export default connect(mapStateToProp, mapDispatchToProp)(CurrencyList);