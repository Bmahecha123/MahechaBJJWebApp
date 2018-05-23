import React from 'react';
import { Link } from 'react-router-dom';
import { colors, fontSizing, fontStyles, spacing } from '../../theme';
import Login from './login';
import { Modal } from '../common/modal';
import { LOCALSTORAGE } from '../../resources/constants';

import './header.css';

//syles
const headerStyles = {
    marginTop: spacing.xsmall,
    marginBottom: spacing.xsmall
};

const liStyles = {
    backgroundColor: colors.buttonBackgroundColor,
    boxShadow: colors.buttonBoxShadow,
    fontWeight: fontStyles.bold
};

const linkStyles = {
    textDecoration: 'none',
    color: colors.backgroundColor,
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

const h1Styles = {
    padding: 0,
    margin: 0,
    fontWeight: fontStyles.bold,
    fontSize: fontSizing.medium,
    paddingBottom: spacing.xsmall
};

const flexItemStyles = {
    alignSelf: 'center'
};

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: this.props.isLoggedIn,
            isOpen: false
        };
    }

    handleLogin = (isLoggedIn, user) => {
        if (isLoggedIn) {
            this.setState({
                isLoggedIn: isLoggedIn
            });

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
            isLoggedIn: false,
            isOpen: false
        });
    }

    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        if (this.state.isLoggedIn) {
            return (
                <header style={headerStyles}>
                    <nav>
                        <ul>
                            <li><Link style={linkStyles} to='/'><img style={imgStyles} alt='mahecha logo' src={require('../../assets/mahechabjj.png')} /></Link></li>
                            <li style={liStyles}><Link style={linkStyles} to='/browse'>Browse</Link></li>
                            <li style={liStyles}><Link style={linkStyles} to='/about'>About</Link></li>
                            <li style={liStyles}><Link style={linkStyles} to='/blog'>Blog</Link></li>
                            <li style={{ ...liStyles, ...linkStyles }} onClick={this.toggleModal}>Logout</li>
                        </ul>
                    </nav>
                    <h1 style={{ ...flexItemStyles, ...h1Styles }}>Technique Taught to the Point</h1>
                    <Modal isOpen={this.state.isOpen}>
                        <p style={pStyles}>Are you sure you want to log out?!</p>
                        <div style={buttonLayoutStyles}>
                            <button style={buttonStyles} onClick={this.handleLogout}>Yes</button>
                            <button style={buttonStyles} onClick={this.toggleModal}>Close</button>
                        </div>
                    </Modal>
                </header>
            );
        } else {
            return (
                <header style={headerStyles}>
                    <nav>
                        <ul>
                            <li><Link style={linkStyles} to='/'><img style={imgStyles} alt='mahecha logo' src={require('../../assets/mahechabjj.png')} /></Link></li>
                            <li style={liStyles}><Link style={linkStyles} to='/browse'>Browse</Link></li>
                            <li style={liStyles}><Link style={linkStyles} to='/about'>About</Link></li>
                            <li style={liStyles}><Link style={linkStyles} to='/blog'>Blog</Link></li>
                        </ul>
                    </nav>
                    <h1 style={{ ...flexItemStyles, ...h1Styles }}>Technique Taught to the Point</h1>
                    <Login onLogin={this.handleLogin} loggedIn={this.state.isLoggedIn} />
                </header>
            );
        }
    }
}
