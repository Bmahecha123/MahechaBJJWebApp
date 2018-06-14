import React from 'react';
import { colors, spacing } from '../../theme';

//backdrop
const modalStyles = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(53, 64, 134, 0.60)',
    paddingTop: 100
};

//modal
const modalContentStyles = {
    backgroundColor: colors.mainBackgroundColor,
    borderRadius: 5,
    maxWidth: 500,
    minHeight: spacing.xlarge,
    margin: '0 auto',
    padding: spacing.medium,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
};

export const Modal = (props) => {
    if (props.isOpen) {
        return (
            <div style={modalStyles}>
                <div style={modalContentStyles}>
                    {props.children}
                </div>
            </div>
        );
    }
    else {
        return null;
    }
};