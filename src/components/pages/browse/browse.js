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

export default class Browse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            techniques: [],
            paging: {},
        };
    }

    async componentDidMount() {
        await this.loadTechniques(ENDPOINTS.getFullAccessTechniques(12));
    }

    async loadTechniques(endpoint) {

        //TODO Implement logic to determine whether the user has a NoGi package or a Gi Package or Both....
        try {
            const request = await vimeoService.getVimeoVideos(endpoint);
            this.setState({
                techniques: request.data,
                paging: request.paging
            });
        } catch (exception) {
            console.log(exception);
        }
    }

    updateContent = async (e, endpoint) => {
        await this.loadTechniques(endpoint);
    };

    search = (e, page) => {

    };

    render() {
        //TODO IMPLEMENT ONCLICK logic to change Technique header
        //TODO LOOK TO IMPLEMENT A CATEGORIES SECTION PERHAPS ON A RIGHT SIDE NAV? LOOK INTO IT!
        return (
            <section style={sectionStyles}>
                <nav>
                    <ul style={ulStyles}>
                        <li style={liStyles} onClick={(e => this.updateContent(e, ENDPOINTS.getFullAccessTechniques(12)))}>All</li>
                        <li style={liStyles} onClick={(e => this.updateContent(e, ENDPOINTS.getGiTechniques(12)))}>Gi</li>
                        <li style={liStyles} onClick={(e => this.updateContent(e, ENDPOINTS.getNoGiTechniques(12)))}>No-Gi</li>
                    </ul>
                </nav>
                <h1 style={h1Styles}>{this.state.headerLabel} Techniques</h1>
                {/* <form style={formStyles}>
                    <input style={inputStyles} type="text" />
                    <button style={buttonStyles} type="submit">Search</button>
                </form> */}
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
                <ul style={{...ulStyles, justifyContent: 'center'}}>
                    {this.state.paging.first && <li style={{...liStyles, margin: spacing.medium}} onClick={(e => this.updateContent(e, ENDPOINTS.vimeoPaging(this.state.paging.first)))}>First</li>}
                    {this.state.paging.previous && <li style={{...liStyles, margin: spacing.medium}} onClick={(e => this.updateContent(e, ENDPOINTS.vimeoPaging(this.state.paging.previous)))}>Prev</li>}
                    {this.state.paging.next && <li style={{...liStyles, margin: spacing.medium}} onClick={(e => this.updateContent(e, ENDPOINTS.vimeoPaging(this.state.paging.next)))}>Next</li>}
                    {this.state.paging.last && <li style={{...liStyles, margin: spacing.medium}} onClick={(e => this.updateContent(e, ENDPOINTS.vimeoPaging(this.state.paging.last)))}>Last</li>}
                </ul>
            </section>
        );
    }
}   