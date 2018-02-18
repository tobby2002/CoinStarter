import React, {Component} from 'react'
import CurrencyList from './currency-list';
import CurrencyDetail from './currency-detail';

export default class Ticker extends Component {
  render() {
    return (
      <div className="col-sm-10 text-left">
        <h2>
          현재 시세 확인
        </h2>
  
        <div>
          <CurrencyList/>
          <CurrencyDetail/>
        </div>
      </div>
    );
  }
}