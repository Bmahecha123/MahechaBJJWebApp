import React from 'react';
import { colors, containerSizing, fontSizing, fontStyles, spacing } from '../../theme';

const containerStyles = {
    maxWidth: containerSizing.medium,
    padding: 0,
    margin: spacing.medium
};

const cardStyles = {
    maxWidth: containerSizing.medium,
    boxShadow: colors.cardBoxShadow,
    margin: 0,
    borderRadius: 7,
    backgroundColor: colors.cardBackgroundColor,
    objectFit: 'cover'
};

const cardTitleStyles = {
    fontSize: fontSizing.medium,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    paddingTop: spacing.small,
    margin: 0,
    fontWeight: fontStyles.bold,
    textAlign: 'center'
};

export const Video = (props) => {
    return (
        <div key={props.technique.name} style={containerStyles}>
            <video style={cardStyles} src={props.technique.files[1].link} controls controlsList="nodownload">
            </video>
            <h2 style={cardTitleStyles}>{props.technique.name}</h2>
        </div>
    );
};