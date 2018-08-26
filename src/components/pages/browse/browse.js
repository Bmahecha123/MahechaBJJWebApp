import React from 'react';
import { Link } from 'react-router-dom';

import { VimeoService } from '../../../services/vimeoService';
import { colors, fontSizing, fontStyles, spacing, cardStyles, containerSizing, cardTitleStyles } from '../../../theme';
import { ENDPOINTS, generateSlug } from '../../../resources/constants';

const flexStyles = {
    display: 'flex',
    justifyContent: 'space-around',
};

const sectionStyles = {
    display: 'flex',
    flexDirection: 'column',

    margin: 0,
    marginTop: spacing.small
};

const linkStyles = {
    width: containerSizing.medium,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textDecoration: 'none',
    margin: spacing.small
};

const ulStyles = {
    ...flexStyles,
    flexDirection: 'row',
    margin: 0,
    padding: 0,
};

const videoListStyles = {
    ...ulStyles,
    flexWrap: 'wrap',
    flexGrow: 1

};

const liStyles = {
    backgroundColor: colors.green,
    boxShadow: colors.cardBoxShadow,
    fontWeight: fontStyles.bold,
    textDecoration: 'none',
    color: colors.buttonTextColor,
    fontSize: fontSizing.medium,
    listStyleType: 'none',
    borderRadius: '7px',
    padding: '5px'
};

const hStyles = {
    fontWeight: fontStyles.bold,
    margin: spacing.small,
    color: colors.primaryTextColor,
    padding: 0
};

const h1Styles = {
    fontSize: fontSizing.large,
    ...hStyles,
    alignSelf: 'center'
};

const h2Styles = {
    fontSize: fontSizing.medium,
    ...hStyles
};

const formStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',

    margin: spacing.small,
    marginBottom: spacing.medium
};

const inputStyles = {
    alignSelf: 'center',
    margin: 0,
    marginRight: spacing.small,

    color: colors.primaryTextColor,
    fontSize: fontSizing.medium,
    fontWeight: fontStyles.normal,
    boxShadow: colors.cardBoxShadow,
    backgroundColor: colors.inputBackgroundColor
};

const buttonStyles = {
    backgroundColor: colors.green,
    boxShadow: colors.cardBoxShadow,
    fontWeight: fontStyles.bold,
    color: colors.buttonTextColor,
    fontSize: fontSizing.medium,
    borderRadius: '7px',
    margin: 0,
    padding: spacing.xsmall
};

const vimeoService = new VimeoService();
const techniqueHeaders = {
    All: 'Gi and No-Gi',
    Gi: 'Gi',
    NoGi: 'No-Gi'
}
// const techniqueTypes = ['All', 'Gi', 'No-Gi'];
let techniqueTypes = new Map();
techniqueTypes.set('All', 'Gi and No-Gi');
techniqueTypes.set('Gi', 'Gi');
techniqueTypes.set('No-Gi', 'No-Gi');

export default class Browse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            techniques: [],
            nextPage: '',
            previousPage: '',
            headerLabel: techniqueTypes.get('All')
        };
    }

    async componentDidMount() {
        console.log('COMPONSNE DID MOUNT');
        await this.loadTechniques();
    }

    async loadTechniques() {
        let endpoint;
        if (this.state.headerLabel === techniqueTypes.get('Gi')) {
            console.log('CALLING GI!');
            endpoint = ENDPOINTS.getGiTechniques(10);
        } else if (this.state.headerLabel === techniqueTypes.get('No-Gi')) {
            console.log('CALLING NOGI!');
            endpoint = ENDPOINTS.getNoGiTechniques(10);
        } else {
            console.log('CALLING GI ADN NOGI!');

            endpoint = ENDPOINTS.getFullAccessTechniques(10);
        }

        //TODO Implement logic to determine whether the user has a NoGi package or a Gi Package or Both....
        try {
            const request = await vimeoService.getVimeoVideos(endpoint);
            this.setState({
                techniques: request.data
            });
        } catch (exception) {
            console.log(exception);
        }
    }

    nextPage = () => {

    };

    previousPage = () => {

    };

    updateTechniqueHeader = async (e) => {
        let text = e.currentTarget.innerText;
        console.log(techniqueTypes.get(text));

        this.setState({
           headerLabel: techniqueTypes.get(text) 
        });
    };

    search = () => {

    };

    render() {
        //TODO ONCE INTERNET CONNECTION IS ESTABLISHED CHECK TO SEE THAT RENDERING IS TAKING PLACE.
        //TODO IMPLEMENT ONCLICK logic to change Technique header
        //TODO LOOK TO IMPLEMENT A CATEGORIES SECTION PERHAPS ON A RIGHT SIDE NAV? LOOK INTO IT!
        console.log(this.state);
        return (
            <section style={sectionStyles}>
                <nav>
                    <ul style={ulStyles}>
                        <li style={liStyles} onClick={(e => this.updateTechniqueHeader(e))}>All</li>
                        <li style={liStyles} onClick={(e => this.updateTechniqueHeader(e))}>Gi</li>
                        <li style={liStyles} onClick={(e => this.updateTechniqueHeader(e))}>No-Gi</li>
                    </ul>
                </nav>
                <h1 style={h1Styles}>{this.state.headerLabel} Techniques</h1>
                <form style={formStyles}>
                    <input style={inputStyles} type="text" />
                    {/* <button style={buttonStyles} type="submit">Search</button> */}
                </form>
                <div style={videoListStyles}>
                    {this.state.techniques.map(technique => {
                        return (
                            <Link key={generateSlug(technique.name)}
                                style={linkStyles}
                                to={{
                                    pathname: `/browse/${generateSlug(technique.name)}`,
                                    state: {
                                        technique: technique
                                    }
                                }}>
                                <img style={{ ...cardStyles(containerSizing.medium), objectFit: 'cover', maxWidth: containerSizing.medium, maxHeight: '100%' }} alt="technique" src={technique.pictures.sizes[4].link} />
                                <h2 style={{ ...h2Styles, ...cardTitleStyles(fontSizing.medium), marginBottom: spacing.medium, maxWidth: containerSizing.medium }}>{technique.name}</h2>
                            </Link>
                        );
                    })}
                </div>
                <ul style={ulStyles}>
                    <li style={liStyles}>Prev</li>
                    <li style={liStyles}>Next</li>
                </ul>
            </section>
        );
    }
}   