import React from 'react';
import { Video } from '../../common/video';
import { spacing, fontSizing, colors } from '../../../theme';
import { Modal } from '../../common/modal';

const sectionStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: spacing.medium
};

const pStyles = {
    color: colors.primaryTextColor,
    padding: 0,
    margin: 0,
    marginTop: spacing.small,
    fontSize: fontSizing.medium
};

const buttonStyles = {
    textDecoration: 'none',
    color: colors.buttonTextColor,
    fontSize: fontSizing.medium,
    backgroundColor: colors.buttonBackgroundColor,
    boxShadow: colors.buttonBoxShadow,

    alignSelf: 'center'
};

//TODO MAY HAVE TO MAKE COMPONENT STATEFUL TO MANAGE STATE OF MODAL..
export class Technique extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showError: false
        };
    }

    toggleError = () => {
        if (!this.props.isLoggedIn) {
            this.setState({
                showError: !this.state.showError
            });
        }
    };

    render() {
        const { technique } = this.props.location.state;
        return (
            <section style={sectionStyles} onClick={!this.state.showError ? this.toggleError : null}>
                <Video
                    style={{ alignSelf: 'center' }}
                    key={technique.name}
                    technique={technique}
                    loggedIn={this.props.isLoggedIn}
                    maxWidth='75%'
                    onClick={!this.state.showError ? this.toggleError : null} />
                <Modal isOpen={this.state.showError}>
                    <p style={pStyles}>Login in Order to View Content!</p>
                    <button style={buttonStyles} onClick={this.toggleError}>Ok</button>
                </Modal>
                <p style={pStyles}>{addSpaces(technique.description)}</p>
            </section>
        );
    }
}

// export const Technique = (props) => {
//     const { loggedIn, technique } = props.location.state;

//     return (
//         <section style={sectionStyles}>
//             <Video style={{ alignSelf: 'center' }} key={technique.name} technique={technique} loggedIn={loggedIn} maxWidth='75%' />
//             <p style={pStyles}>{addSpaces(technique.description)}</p>
//         </section>
//     );
// };

function addSpaces(text) {
    return text.replace('-', '-')
}