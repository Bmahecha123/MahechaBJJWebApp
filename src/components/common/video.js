import React from 'react';
import { fontSizing, cardStyles, cardTitleStyles } from '../../theme';

const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
};

export const Video = (props) => {
    return (
        <div key={props.technique.name} style={{...containerStyles, maxWidth: props.maxWidth}}>
            <video style={{ ...cardStyles('100%'), pointerEvents: !props.loggedIn ? 'none' : ''}} src={props.technique.files[1].link} controls controlsList="nodownload">
            </video>
            <h2 style={cardTitleStyles(fontSizing.medium)}>{props.technique.name}</h2>
        </div>
    );
};