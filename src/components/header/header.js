import React from 'react';
import { Link } from 'react-router-dom';

import Login from './login';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: this.props.isLoggedIn
        };
    }

    handleLogin = (isLoggedIn, user) => {
        if (isLoggedIn) {
            this.setState({
                isLoggedIn: isLoggedIn
            });

            console.log('here is the user from the header component!!');
            console.dir(user);
        } else {
            this.setState({
                isLoggedIn: isLoggedIn
            });
        }
    }

    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/browse'>Browse</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                </nav>
                <Login onLogin={this.handleLogin} loggedIn={this.state.isLoggedIn} />
            </header>
        );
    }
}
