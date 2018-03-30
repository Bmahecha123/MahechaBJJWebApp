import React from 'react';
import ReactDOM from 'react-dom';

//components
import Header from './components/header/header';
import Main from './components/main/main';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        );
    }
}