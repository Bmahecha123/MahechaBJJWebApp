import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

export default  class Header extends React.Component {
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
            </header>
        );
    }
}
