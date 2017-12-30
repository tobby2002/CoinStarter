import React, {Component} from 'react';
import LeftSideNavigation from './left-side-navigation';
import NavigationBar from './navigation-bar';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar/>
        <div className="container-fluid text-center">
          <div className="row content">
            <LeftSideNavigation/>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}