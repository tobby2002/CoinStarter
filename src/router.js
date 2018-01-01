import React from 'react';
import {IndexRoute, Route} from 'react-router';

import Home from './components/home';
import Contact from './components/contact';
import App from './components/app';
import BitCoin from './components/bitcoin';
import AltCoin from './components/altcoin';
import Margin from './components/margin';
import Ticket from './components/ticket';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="home" component={Home}/>
    <Route path="contact" component={Contact}/>
      <Route path="bitcoin" component={BitCoin}/>
      <Route path="altcoin" component={AltCoin}/>
      <Route path="margin" component={Margin}/>
    <Route path="ticket" component={Ticket}/>
  </Route>
)