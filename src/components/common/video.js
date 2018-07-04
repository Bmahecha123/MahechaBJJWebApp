import React from 'react';
import { containerSizing, fontSizing, spacing, cardStyles, cardTitleStyles } from '../../theme';

const containerStyles = {
    maxWidth: containerSizing.medium,
    padding: 0,
    margin: spacing.medium
};

export const Video = (props) => {
    return (
        <div key={props.technique.name} style={containerStyles}>
            <video style={{...cardStyles(containerSizing.medium), pointerEvents: !props.loggedIn ? 'none' : '' }} src={props.technique.files[1].link} controls controlsList="nodownload">
            </video>
            <h2 style={cardTitleStyles(fontSizing.medium)}>{props.technique.name}</h2>
        </div>
    );
};