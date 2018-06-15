import React from 'react';

import { spacing, colors } from '../../theme';

const footerStyles = {
    marginTop: spacing.xsmall,
    marginBottom: spacing.xsmall,
    backgroundColor: colors.footerBackgroundColor,
    margin: 0,
    height: 200,
    
};

export default class Footer extends React.Component {

    render() {
        if (!this.props.isLoggedIn) {
            return (
                <footer style={footerStyles}>
                    
                </footer>
            );
        } else {
            return null;
        }
        
    }
}