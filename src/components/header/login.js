import React from 'react';
import { UserService } from '../../services/user.service';
import { LOCALSTORAGE } from '../../resources/constants';
import './login.css';
import { colors, fontSizing, fontStyles } from '../../theme';

const userService = new UserService();

//styles
const inputStyles = {
    color: colors.primaryTextColor,
    fontSize: fontSizing.small,
    fontWeight: fontStyles.normal,
    boxShadow: colors.boxShadow
};

export default class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        if (localStorage.getItem(LOCALSTORAGE.userName)) {
            let user = await userService.getUser(localStorage.getItem(LOCALSTORAGE.userName));

            if (user.status) {
                alert('Unexpected error encountered, please login again please!');
                this.props.onLogin(false, null);
            } else {
                this.props.onLogin(true, user);
            }
        } else {
            console.log('User is logged out!!!');
        }
    }

    handleLogin = async () => {
        let userName = document.getElementById('userName').value;
        let passWord = document.getElementById('passWord').value;
        let loginBtn = document.getElementById('loginBtn');
        
        loginBtn.disabled = true;
        //DISABLE BUTTON ON CLICK AND REENABLE AFTER REQUEST IS DONE!
        //ON SUCCESSFUL REQUEST SAVE SESSION IN LOCALSTORAGE
        //ON LOGOUT REMOVE SESSION FROM LOCALSTORAGE
        let user = await userService.login(userName, passWord);

        if (user.status) {
            alert('Invalid username or password, please try again')
            loginBtn.disabled = false;
        } else {
            localStorage.setItem(LOCALSTORAGE.userName, user.email);
            localStorage.getItem(LOCALSTORAGE.userName) ?
                console.log('User saved to local storage.') :
                console.log('User has not been saved to local storage.');

            this.props.onLogin(true, user);
        }
    }

    render() {
        console.log('user issssss ', this.props.loggedIn);
        if (!this.props.loggedIn) {
            return (
                <form>
                    <input id="userName" style={inputStyles} type="text" name="username" placeholder="Username" />
                    <input id="passWord" style={inputStyles} type="password" name="password" placeholder="Password" />
                    <button id="loginBtn" style={inputStyles} type="submit" onClick={this.handleLogin}>Login</button>
                </form>
            );
        }
    }
}