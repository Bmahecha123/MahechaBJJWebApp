import React from 'react';
import { fontStyles, fontSizing, spacing, colors } from '../../../theme';

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
    padding: 0,
    margin: spacing.small,
    fontSize: fontSizing.large,
    ...hStyles
};

const h2Styles = {
    padding: 0,
    margin: spacing.small,
    fontSize: fontSizing.medium,
    ...hStyles
}; 

const cardStyles = {
    height: '300px',
    width: '300px',
    boxShadow: colors.cardBoxShadow,
    borderRadius: 7,
    margin: spacing.medium,
    backgroundColor: colors.cardBackgroundColor
};

export default class Home extends React.Component {
    render() {
        return (
            <section style={sectionStyles}>
                <h1 style={h1Styles}>Mahecha BJJ</h1>
                <h2 style={h2Styles}>Technique Taught to the Point</h2>
                <div style={cardStyles}>

                </div>
            </section>
        );
    }
}