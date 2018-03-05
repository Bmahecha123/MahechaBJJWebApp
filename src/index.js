import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    render() {
        return (
            <div className="main">
                <img className="image" src={require('./assets/mahechabjj.png')} alt="mahechabjj" />
                <div className="appstore">
                    <a href="https://itunes.apple.com/us/app/mahecha-bjj/id1330507366?mt=8" target="_blank" rel="noopener noreferrer"><img className="icon" src={require('./assets/applestore.png')} alt="apple store" /></a>
                    <a href="https://play.google.com/store/apps/details?id=com.mahechabjj.mahecha_bjj" target="_blank" rel="noopener noreferrer"><img className="icon" src={require('./assets/googlestore.png')} alt="google store" /></a>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);