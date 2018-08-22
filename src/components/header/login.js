import React from 'react';
import { UserService } from '../../services/user.service';
import { LOCALSTORAGE } from '../../resources/constants';
import './login.css';
import { colors, fontSizing, fontStyles, spacing } from '../../theme';
import { Modal } from '../common/modal';

const userService = new UserService();

//styles
const formStyles = {
    margin: spacing.small
};

const inputStyles = {
    color: colors.primaryTextColor,
    fontSize: fontSizing.small,
    fontWeight: fontStyles.normal,
    boxShadow: colors.buttonBoxShadow,
    backgroundColor: colors.inputBackgroundColor
};

const inputButtonStyles = {
    backgroundColor: colors.buttonBackgroundColor,
    color: colors.buttonTextColor
};

const pStyles = {
    color: colors.primaryTextColor,
    fontSize: fontSizing.medium,
    padding: 0,
    margin: 0,
    marginBottom: spacing.small,
    textAlign: 'center',
};

const buttonStyles = {
    padding: spacing.xsmall,
    margin: 0,
    backgroundColor: colors.buttonBackgroundColor,
    color: colors.mainBackgroundColor,
    fontSize: fontSizing.medium,
    boxShadow: colors.buttonBoxShadow,

    alignSelf: 'center'
};

export default class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    async componentDidMount() {
        if (localStorage.getItem(LOCALSTORAGE.userName)) {
            let user = await userService.getUser(localStorage.getItem(LOCALSTORAGE.userName));
            
            if (user.status) {
                this.setState({
                    isOpen: true,
                    modalMessage: 'Unexpected error occurred, please try to login again!'
                });
                this.props.onLogin(false);
            } else {
                this.props.onLogin(true);
            }
        }
    }

    handleLogin = async () => {
        let userName = document.getElementById('userName').value;
        let passWord = document.getElementById('passWord').value;
        let loginBtn = document.getElementById('loginBtn');

        loginBtn.disabled = true;

        if (!userName || !passWord) {
            this.setState({
                isOpen: true,
                modalMessage: 'Empty username or password, please try again.'
            });
            loginBtn.disabled = false;

            return;
        }
        
        //DISABLE BUTTON ON CLICK AND REENABLE AFTER REQUEST IS DONE!
        //ON SUCCESSFUL REQUEST SAVE SESSION IN LOCALSTORAGE
        //ON LOGOUT REMOVE SESSION FROM LOCALSTORAGE
        let user = await userService.login(userName, passWord);

        if (user.status) {
            this.setState({
                isOpen: true,
                modalMessage: 'Invalid username or password, please try again'
            });
            loginBtn.disabled = false;
        } else {
            localStorage.setItem(LOCALSTORAGE.userName, user.email);
            localStorage.getItem(LOCALSTORAGE.userName) ?
                console.log('User saved to local storage.') :
                console.log('User has not been saved to local storage.');

            this.props.onLogin(true);
        }
    }

    toggleModal = () => {
        this.setState({
            isOpen: false
        });
    }

    render() {
        console.log('user issssss ', this.props.loggedIn);
        if (this.state.isOpen) {
            return (
                <Modal isOpen={this.state.isOpen}>
                    <p style={pStyles}>{this.state.modalMessage}</p>
                    <button style={buttonStyles} onClick={this.toggleModal}>Ok</button>
                </Modal>
            );
        }
        else if (!this.props.loggedIn) {
            return (
                <form style={formStyles}>
                    <input id="userName" style={inputStyles} type="text" name="username" placeholder="Username" />
                    <input id="passWord" style={inputStyles} type="password" name="password" placeholder="Password" />
                    <button id="loginBtn" style={{...inputStyles, ...inputButtonStyles}} type="submit" onClick={this.handleLogin}>Login</button>
                </form>
            );
        }
    }
}