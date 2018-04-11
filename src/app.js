import React from 'react';

//components
import Header from './components/header/header';
import Main from './components/main/main';

export default class App extends React.Component {
    constructor() {
        super();
    }

    isUserLoggedIn = () => {
        let cookie = document.cookie.split(';');
    }

    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>
        );
    }
}