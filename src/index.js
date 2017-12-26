import React, {Component} from 'react';
import ReactDom from 'react-dom';
import LeftSideNavigation from './components/left-side-navigation';
import NavigationBar from './components/navigation-bar';
import Main from './components/main';

// Create a new component, This component should produce some HTML
class App extends Component {

    render() {
        return (
            <div>
                <NavigationBar/>
                <div className="container-fluid text-center">
                    <div className="row content">
                        <LeftSideNavigation/>
                        <Main/>
                    </div>
                </div>
            </div>
        );
    }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDom.render(<App/>, document.querySelector('.container'));