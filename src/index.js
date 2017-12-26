// node_modules 폴더에 설치된 모듈 중 리액트라는 라이브러리를 찾고
// 그 라이브러리를 불러와 이를 React 변수에 할당해라
import React from 'react';
import ReactDom from 'react-dom';
import Searchbar from './components/search_bar';

const API_KEY = 'AIzaSyA7NepuWGXCP1-0Jm-o1jg0TlbJzOvaMYE';

// Create a new component, This component should produce some HTML
const App = () => {
    return (
        <div>
            <Searchbar/>
        </div>
    );
};

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDom.render(<App/>, document.querySelector('.container'));