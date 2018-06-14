import React from 'react';

import { spacing, colors } from '../../theme';

const footerStyles = {
    marginTop: spacing.xsmall,
    marginBottom: spacing.xsmall,
    backgroundColor: colors.footerBackgroundColor,
    margin: 0,
    height: 200,
    width: '100%'
};

export default class Footer extends React.Component {

    render() {
        return (
            <footer style={footerStyles}>
                
            </footer>
        );
    }
}