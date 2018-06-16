import React from 'react';

//components
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import { colors } from './theme';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false
        };
    }

    handleLogin = (isLoggedIn) => {
        this.setState({
            isLoggedIn: isLoggedIn
        });
    };

    handleLogout = () => {
        this.setState({
            isLoggedIn: false
        });
        console.log('USER LOGGED OUT!!');
    };

    render() {
        console.log('APP LOGIN STATE', this.state.isLoggedIn);
        return (
            <div>
                <Header onLogin={this.handleLogin} onLogout={this.handleLogout} isLoggedIn={this.state.isLoggedIn} />
                <Main isLoggedIn={this.state.isLoggedIn} />
                <Footer isLoggedIn={this.state.isLoggedIn} />
            </div>
        );
    }
}