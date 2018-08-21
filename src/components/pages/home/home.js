import React from 'react';
import { fontStyles, fontSizing, spacing, cardStyles, containerSizing, cardTitleStyles, colors } from '../../../theme';
import { VimeoService } from '../../../services/vimeoService';
import { Video } from '../../common/video';
import { BlogService } from '../../../services/blog.service';
import { Modal } from '../../common/modal';
import { Link } from 'react-router-dom';

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

const linkStyles = {
    textDecoration: 'none',
    color: colors.buttonTextColor,
    fontSize: fontSizing.medium
};

const buttonStyles = {
    ...linkStyles,
    backgroundColor: colors.buttonBackgroundColor,
    boxShadow: colors.buttonBoxShadow,

    alignSelf: 'center'
};

const pStyles = {
    fontSize: fontSizing.medium,
    padding: 0,
    margin: 0,
    marginBottom: spacing.small,
    textAlign: 'center',
    color: colors.primaryTextColor
};

const vimeoService = new VimeoService();
const blogService = new BlogService();

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            techniques: [],
            blogPosts: {},
            blogImage: ""
        };
    }

    async componentDidMount() {
        await this.loadTechniques();
        await this.loadBlogPosts();
    }

    async loadTechniques() {
        try {
            const request = await vimeoService.getVimeoVideos(2);
            this.setState({
                techniques: request.data
            });
        } catch (exception) {
            console.log('EXCEPTIONNNN', exception);
        }
    }

    async loadBlogPosts() {
        try {
            const request = await blogService.getMostRecentBlogPosts();
            console.log('REQUESTTTT');
            console.log(request);
            this.setState({
                blogPosts: request,
                blogImage: request.photos[0].original_size.url
            });
        } catch (exception) {
            console.log(exception);
        }
    }

    generateSlug = text => {
        return text.replace(' ', '_');
    }

    render() {
        console.log('STATE');
        console.dir(this.state);
        return (
            <section style={sectionStyles}>
                <h1 style={{ ...h1Styles, marginBottom: 0 }}>Mahecha BJJ</h1>
                <h2 style={{ ...h2Styles, marginTop: 0 }}>Technique Taught to the Point</h2>
                <h2 style={{ ...h2Styles, marginBottom: 0 }}>What's New</h2>
                <div style={divStylesRow}>
                    {this.state.techniques.map(technique => {
                        // <Video key={technique.name} technique={technique} loggedIn={this.props.isLoggedIn} />
                        {/* Implement similar configuration as blog post image for video! */ }
                        return (
                            <Link key={this.generateSlug(technique.name)} style={{ ...divStylesColumn, padding: 0, margin: spacing.medium, textDecoration: 'none' }}
                                to={{
                                    pathname: `/browse/${this.generateSlug(technique.name)}`,
                                    state: {
                                        //loggedIn: this.props.isLoggedIn,
                                        technique: technique
                                    }
                                }}
                                replace={true}>
                                <img style={{ ...cardStyles(containerSizing.medium), objectFit: 'cover', maxWidth: containerSizing.medium, maxHeight: '100%' }} alt="blog" src={technique.pictures.sizes[4].link} />
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