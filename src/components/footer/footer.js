import React from 'react';

import { spacing, colors, fontStyles, fontSizing } from '../../theme';

const footerStyles = {
    marginTop: spacing.xsmall,
    marginBottom: spacing.xsmall,
    backgroundColor: colors.footerBackgroundColor,
    margin: 0,

    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
};

const imageStyles = {
    maxHeight: '115px',
    maxWidth: '100%',
    marginTop: spacing.medium,
    marginBottom: spacing.medium
};

const h1Styles = {
    margin: 0,
    padding: 0,
    fontSize: fontSizing.large,
    fontWeight: fontStyles.bold,
    color: colors.buttonTextColor,
    textAlign: 'center',
    marginTop: spacing.small
};

const btnGroupStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
};

export default class Footer extends React.Component {
    render() {
        if (!this.props.isLoggedIn) {
            return (
                <footer style={footerStyles}>
                    <h1 style={h1Styles}>Don't have Mahecha BJJ?</h1>
                    <div style={btnGroupStyles}>
                        <a href="https://itunes.apple.com/us/app/mahecha-bjj/id1330507366?mt=8" target="_blank" rel="noopener noreferrer"><img style={imageStyles} className="icon" src={require('../../assets/app-store-badge.png')} alt="apple store" /></a>
                        <a href="https://play.google.com/store/apps/details?id=com.mahechabjj.mahecha_bjj" target="_blank" rel="noopener noreferrer"><img style={imageStyles} className="icon" src={require('../../assets/google-play-badge.png')} alt="google store" /></a>
                    </div>
                </footer>
            );
        } else {
            return null;
        }
    }
}