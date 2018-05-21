import React from 'react';
import { fontStyles, fontSizing } from '../../../theme';

const sectionStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
};

const hStyles = {
    fontWeight: fontStyles.bold
};

const h1Styles = {
    fontSize: fontSizing.xlarge
};

const h2Styles = {

};

export default class Home extends React.Component {
    render() {
        return (
            <section style={sectionStyles}>
                <ul>
                    <li>Get basic layout figured out... Flex or Grid.</li>
                    <li>Model similarly to how it is set up on Mobile App. What's new Section and most recent Blog post</li>
                    
                </ul>
            </section>
        );
    }
}