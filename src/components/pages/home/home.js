import React from 'react';
import { fontStyles, fontSizing, spacing, cardStyles, containerSizing, cardTitleStyles, colors } from '../../../theme';
import { VimeoService } from '../../../services/vimeoService';
import { BlogService } from '../../../services/blog.service';
import { Link } from 'react-router-dom';
import { generateSlug, ENDPOINTS, STUBS } from '../../../resources/constants';

const sectionStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
};

const divStyles = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
};

const divStylesRow = {
    ...divStyles,
    flexDirection: 'row'
};

const divStylesColumn = {
    ...divStyles,
    flexDirection: 'column'
};

const hStyles = {
    fontWeight: fontStyles.bold,
    margin: spacing.small,
    color: colors.primaryTextColor,
    padding: 0
};

const h1Styles = {
    fontSize: fontSizing.large,
    ...hStyles
};

const h2Styles = {
    fontSize: fontSizing.medium,
    ...hStyles
};

const vimeoService = new VimeoService();
const blogService = new BlogService();

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            techniques: STUBS.techniques,
            blogPosts: STUBS.blogPost,
            blogImage: require('../../../assets/loadingImage.png')
        };
    }

    async componentDidMount() {
        await this.loadTechniques();
        await this.loadBlogPosts();
    }

    async loadTechniques() {
        const ENDPONT =  this.configureEndpoint();

        try {
            const request = await vimeoService.getVimeoVideos(ENDPONT);
            if (request.data !== undefined) {
                this.setState({
                    techniques: request.data
                });
            }
        } catch (exception) {
            console.log(exception);
        }
    }

    configureEndpoint() {
        if (this.props.isLoggedIn) {
            if (this.props.packages.giAndNoGiJiuJitsu)
                return ENDPOINTS.getFullAccessTechniques(2);
            else if (this.props.packages.noGiJiuJitsu)
                return ENDPOINTS.getNoGiTechniques(2);
            else
                return ENDPOINTS.getGiTechniques(2);
        } else 
            return ENDPOINTS.getFullAccessTechniques(2);
    }

    async loadBlogPosts() {
        try {
            const request = await blogService.getMostRecentBlogPosts();
            if (request !== undefined) {
                this.setState({
                    blogPosts: request,
                    blogImage: request.photos[0].original_size.url
                });
            }
        } catch (exception) {
            console.log(exception);
        }
    }

    render() {
        return (
            <section style={sectionStyles}>
                <h1 style={{ ...h1Styles, marginBottom: 0 }}>Mahecha BJJ</h1>
                <h2 style={{ ...h2Styles, marginTop: 0 }}>Technique Taught to the Point</h2>
                <h2 style={{ ...h2Styles, marginBottom: 0 }}>What's New</h2>
                <div style={divStylesRow}>
                    {this.state.techniques.map(technique => {
                        return (
                            <Link key={generateSlug(technique.name)} style={{ ...divStylesColumn, padding: 0, margin: spacing.medium, textDecoration: 'none' }}
                                to={{
                                    pathname: `/browse/${generateSlug(technique.name)}`,
                                    state: {
                                        technique: technique
                                    }
                                }}
                                replace={true}>
                                {/* Is this replace required? */}
                                <img style={{ ...cardStyles(containerSizing.medium), objectFit: 'cover', maxWidth: containerSizing.medium, maxHeight: '100%' }} alt="technique" src={technique.pictures.sizes[4].link} />
                                <h2 style={{ ...h2Styles, ...cardTitleStyles(fontSizing.medium), marginBottom: spacing.medium, maxWidth: containerSizing.medium }}>{technique.name}</h2>
                            </Link>
                        );
                    })}
                </div>
                <h2 style={{ ...h2Styles, marginBottom: spacing.medium }}>Recent Blog Posts</h2>

                <Link style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', textDecoration: 'none' }}
                    to={{
                        pathname: `/blog/${this.state.blogPosts.slug}`,
                        state: {
                            post: this.state.blogPosts
                        }
                    }}
                >
                    <img style={{ ...cardStyles(containerSizing.medium), objectFit: 'cover', maxWidth: containerSizing.medium, maxHeight: '100%' }} alt="blog" src={this.state.blogImage} />
                    <h2 style={{ ...h2Styles, ...cardTitleStyles(fontSizing.medium), marginBottom: spacing.medium, maxWidth: containerSizing.medium }}>{this.state.blogPosts.summary}</h2>
                </Link>
            </section>
        );
    }
}