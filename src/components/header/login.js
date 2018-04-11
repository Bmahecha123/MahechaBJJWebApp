import React from 'react';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
    }
    
    handleLogin = async () => {
        let userName = document.getElementById('userName').value;
        //let passWord = document.getElementById('passWord').value;

        let service = 'http://localhost:8080/'

        let request = await fetch(`${service}/user/getUser`, {
            headers: {
                'X-EMAIL': userName
            },
            mode: 'cors'
        });
        let json = await request.json();
        console.log('Here is the response!');
        console.dir(json);

        this.props.onLogin(true, json);
    } 

    handleLogout = () => {
        this.props.onLogin(false, null);
    }

    render() {
        console.log('logged in issss!' + this.props.loggedIn);
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