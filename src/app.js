import React from 'react';

//components
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import { throws } from 'assert';

const appStyles = {
    display: 'grid',
    gridTemplateRows: 'min-content auto min-content'
};

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            packages: {}
        };
    }

    handleLogin = (isLoggedIn, packages) => {
        console.log('MAIN PACKAGES', packages);
        this.setState({
            isLoggedIn: isLoggedIn,
            packages: packages
        });
    };

    handleLogout = () => {
        this.setState({
            isLoggedIn: false
        });
        console.log('USER LOGGED OUT!!');
    };

    render() {
        console.log('APP STATE', this.state);
        return (
            <div style={appStyles}>
                <Header onLogin={this.handleLogin} onLogout={this.handleLogout} isLoggedIn={this.state.isLoggedIn} />
                <Main isLoggedIn={this.state.isLoggedIn} packages={this.state.packages} />
                <Footer isLoggedIn={this.state.isLoggedIn} />
            </div>
        );
    }
}