import React from 'react';
import { fontStyles, fontSizing, spacing, colors, containerSizing } from '../../../theme';
import { ENDPOINTS } from '../../../resources/constants';
import { VimeoService } from '../../../services/vimeoService';
import './home.css';

const sectionStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
};

const divStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    maxWidth: containerSizing.medium,
    boxShadow: colors.cardBoxShadow,
    borderRadius: 7,
    margin: spacing.medium,
    backgroundColor: colors.cardBackgroundColor,
    objectFit: 'cover'
};

const vimeoService = new VimeoService();

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            techniques: []
        };
    }

    async componentDidMount() {
        try {
            const request = await vimeoService.getVimeoVideos(ENDPOINTS.getFullAccessTechniques(2));
            console.log('MY REQUEST!!', request.data);
            this.setState({
                techniques: request.data
            });
            console.log('techniques', this.state.techniques);
        } catch (exception) {
            console.log('EXCEPTIONNN', exception);
        }        
    }

    render() {
        console.log('renderrrr', this.state.techniques);
        return (
            <section style={sectionStyles}>
                <h1 style={h1Styles}>Mahecha BJJ</h1>
                <h2 style={h2Styles}>Technique Taught to the Point</h2>
                <div style={divStyles}>
                {this.state.techniques.map(technique => {
                    return (
                        <video key={technique.name} style={cardStyles} src={technique.files[1].link} controls controlsList="nodownload">
                        </video>
                    );
                    
                })}
                </div>
            </section>
        );
    }
}