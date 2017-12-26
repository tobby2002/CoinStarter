import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Header from './components/header';

// Create a new component, This component should produce some HTML
class App extends Component {

    render() {
        return (
            <div>
                <Header/>
            </div>
        );
    }
};

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDom.render(<App/>, document.querySelector('.container'));