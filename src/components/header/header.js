import React from 'react';
import { Link } from 'react-router-dom';
import { colors, fontSizing, fontStyles, spacing } from '../../theme';
import Login from './login';
import { Modal } from '../common/modal';
import { LOCALSTORAGE } from '../../resources/constants';

import './header.css';

//syles
const headerStyles = {
    backgroundColor: colors.headerBackgroundColor,
    margin: 0
};

const liStyles = {
    backgroundColor: colors.buttonBackgroundColor,
    boxShadow: colors.buttonBoxShadow,
    fontWeight: fontStyles.bold
};

const linkStyles = {
    textDecoration: 'none',
    color: colors.buttonTextColor,
    fontSize: fontSizing.medium
};

const buttonStyles = {
    ...linkStyles,
    backgroundColor: colors.buttonBackgroundColor,
    boxShadow: colors.buttonBoxShadow
};

const pStyles = {
    fontSize: fontSizing.medium,
    padding: 0,
    margin: 0,
    marginBottom: spacing.small,
    textAlign: 'center'
};

const buttonLayoutStyles = {
    padding: 0,
    margin: 0,

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
};

const imgStyles = {
    maxWidth: spacing.xxxlarge
};

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: this.props.isLoggedIn,
            isOpen: false
        };
    }

    handleLogin = (isLoggedIn, packages) => {
        this.setState({
            isLoggedIn: isLoggedIn,
            isOpen: false
        });
        this.props.onLogin(isLoggedIn, packages);
    }

    handleLogout = () => {
        localStorage.removeItem(LOCALSTORAGE.userName);

        !localStorage.getItem(LOCALSTORAGE.userName) ?
            console.log('User removed from local storage.') :
            console.log('User has not been removed from local storage.');

        this.setState({
            isLoggedIn: false,
            isOpen: false
        });

        this.props.onLogout();
    }

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <header style={headerStyles}>
                <nav>
                    <ul>
                        <li><Link style={linkStyles} to='/'><img style={imgStyles} alt='mahecha logo' src={require('../../assets/mahechabjj.png')} /></Link></li>
                        <li style={liStyles}><Link style={linkStyles} to='/home'>Home</Link></li>
                        <li style={liStyles}><Link style={linkStyles} to='/browse'>Browse</Link></li>
                        <li style={liStyles}><Link style={linkStyles} to='/blog'>Blog</Link></li>
                        {this.state.isLoggedIn && <li style={{ ...liStyles, ...linkStyles }} onClick={this.toggleModal}>Logout</li>}
                    </ul>
                </nav>
                {!this.state.isLoggedIn && <Login onLogin={this.handleLogin} loggedIn={this.state.isLoggedIn} />}
                <Modal isOpen={this.state.isOpen}>
                    <p style={pStyles}>Are you sure you want to log out?!</p>
                    <div style={buttonLayoutStyles}>
                        <button style={buttonStyles} onClick={this.handleLogout}>Yes</button>
                        <button style={buttonStyles} onClick={this.toggleModal}>Close</button>
                    </div>
                </Modal>
            </header>
        );
    }
}
