import React from 'react';
import { UserService } from '../../services/user.service';

const userService = new UserService();

export default class Login extends React.Component {

    constructor(props) {
        super(props);
    }
    
    handleLogin = async () => {
        let userName = document.getElementById('userName').value;
        let passWord = document.getElementById('passWord').value;
        
        let user = await userService.login(userName, passWord);
        console.dir(user);
        this.props.onLogin(true, user);
    } 

    handleLogout = () => {
        this.props.onLogin(false, null);
    }

    render() {
        console.log('user issssss ', this.props.loggedIn);
        if (this.props.loggedIn) {
            return (
                <button onClick={this.handleLogout}>Logout</button>
            );
        } else {
            return (
                <div>
                    <input id="userName" type="text" name="username" placeholder="SpiderGuard123@gmail.com" />
                    <input id="passWord" type="password" name="password" placeholder="Password" />
                    <button onClick={this.handleLogin}>Login</button>
                </div>
            );
        }
    }
}