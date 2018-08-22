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

const ulStyles = {
    ...flexStyles,
    flexDirection: 'row',
    margin: 0,
    padding: 0,
};

const videoListStyles = {
    ...ulStyles,
    flexWrap: 'wrap'
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

const vimeoService = new VimeoService();
const techniqueTypes = {
    All: 'Gi and No-Gi',
    Gi: 'Gi',
    NoGi: 'No-Gi'
}

export default class Browse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            techniques: [],
            nextPage: '',
            previousPage: '',
            headerLabel: techniqueTypes.All
        };
    }

    async componentDidMount() {
        await this.loadTechniques();
    }

    async loadTechniques() {
        let endpoint;
        if (this.state.headerLabel === techniqueTypes.Gi) {
            endpoint = ENDPOINTS.getGiTechniques(10);
        } else if (this.state.headerLabel === techniqueTypes.NoGi) {
            endpoint = ENDPOINTS.getNoGiTechniques(10);
        } else {
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

    updateTechniqueHeader = e => {
        console.log('EVENTTTT');
        console.dir(e)
    };

    render() {
        //TODO ONCE INTERNET CONNECTION IS ESTABLISHED CHECK TO SEE THAT RENDERING IS TAKING PLACE.
        //TODO IMPLEMENT ONCLICK logic to change Technique header
        //TODO LOOK TO IMPLEMENT A CATEGORIES SECTION PERHAPS ON A RIGHT SIDE NAV? LOOK INTO IT!
        return (
            <section style={sectionStyles}>
                <nav>
                    <ul style={ulStyles}>
                        <li style={liStyles}>All</li>
                        <li style={liStyles}>Gi</li>
                        <li style={liStyles}>No-Gi</li>
                    </ul>
                </nav>
                <h1 style={h1Styles}>{this.state.headerLabel} Techniques</h1>
                <div style={videoListStyles}>
                    {/* {this.state.techniques.map(technique => {
                        return (
                            <Link key={generateSlug(technique.name)}
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
                    })} */}
                </div>
                <ul style={ulStyles}>
                    <li style={liStyles}>Prev</li>
                    <li style={liStyles}>Next</li>
                </ul>
            </section>
        );
    }
}   