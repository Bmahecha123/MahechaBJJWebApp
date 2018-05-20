import React from 'react';

//components
import Header from './components/header/header';
import Main from './components/main/main';
import { colors } from './theme';

export default class App extends React.Component {
    render() {
        return (
            <div style={{backgroundColor: colors.backgroundColor}}>
                <Header />
                <Main />
            </div>
        );
    }
}