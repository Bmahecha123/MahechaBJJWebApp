import React from 'react';
import { Link } from 'react-router-dom';
import { colors, fontSizing, fontStyles } from '../../theme';
import Login from './login';
import { LOCALSTORAGE } from '../../resources/constants';

import './header.css';

//syles
const liStyles = {
    boxShadow: colors.boxShadow,
    fontWeight: fontStyles.bold,
    color: colors.primaryTextColor
};

const ulStyles = {

};

const linkStyles = {
    textDecoration: 'none',
    color: colors.primaryTextColor,
    fontSize: fontSizing.medium
};

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

    handleLogout = () => {
        localStorage.removeItem(LOCALSTORAGE.userName);

        !localStorage.getItem(LOCALSTORAGE.userName) ?
            console.log('User removed from local storage.') :
            console.log('User has not been removed from local storage.');

        this.setState({
            isLoggedIn: false
        });
    }

    render() {
        if (this.state.isLoggedIn) {
            return (
                <header>
                    <nav>
                        <ul style={ulStyles}>
                            <li style={liStyles}><Link style={linkStyles} to='/'>Home</Link></li>
                            <li style={liStyles}><Link style={linkStyles} to='/browse'>Browse</Link></li>
                            <li style={liStyles}><Link style={linkStyles} to='/about'>About</Link></li>
                            <li style={liStyles}><Link style={linkStyles} to='/blog'>Blog</Link></li>
                            <li style={{...liStyles, ...linkStyles}} onClick={this.handleLogout}>Logout</li>
                        </ul>
                    </nav>
                </header>
            );
        } else {
            return (
                <header>
                    <nav>
                        <ul style={ulStyles}>
                            <li style={liStyles}><Link style={linkStyles} to='/'>Home</Link></li>
                            <li style={liStyles}><Link style={linkStyles} to='/browse'>Browse</Link></li>
                            <li style={liStyles}><Link style={linkStyles} to='/about'>About</Link></li>
                            <li style={liStyles}><Link style={linkStyles} to='/blog'>Blog</Link></li>
                        </ul>
                    </nav>
                    <Login onLogin={this.handleLogin} loggedIn={this.state.isLoggedIn} />
                </header>
            );
        }
    }
}
