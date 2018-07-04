import React from 'react';
import { fontStyles, fontSizing, spacing, cardStyles, containerSizing, cardTitleStyles } from '../../../theme';
import { ENDPOINTS } from '../../../resources/constants';
import { VimeoService } from '../../../services/vimeoService';
import { Video } from '../../common/video';
import { BlogService } from '../../../services/blog.service';

const sectionStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
};

const divStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
};

const hStyles = {
    fontWeight: fontStyles.bold,
    margin: spacing.small,
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
            const request = await blogService.getBlogPosts();
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

    render() {
        return (
            <section style={sectionStyles}>
                <h1 style={{ ...h1Styles, marginBottom: 0 }}>Mahecha BJJ</h1>
                <h2 style={{ ...h2Styles, marginTop: 0 }}>Technique Taught to the Point</h2>
                <h2 style={{ ...h2Styles, marginBottom: 0 }}>What's New</h2>
                <div style={divStyles}>
                    {this.state.techniques.map(technique => <Video key={technique.name} technique={technique} loggedIn={this.props.isLoggedIn} />)}
                </div>
                <h2 style={{ ...h2Styles, marginBottom: spacing.medium }}>Recent Blog Posts</h2>
                <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <img style={{ ...cardStyles(containerSizing.medium), objectFit: 'cover', maxWidth: containerSizing.medium, maxHeight: '100%' }} alt="blog photo" src={this.state.blogImage} />
                    <h2 style={{ ...cardTitleStyles(fontSizing.medium), marginBottom: spacing.medium, maxWidth: containerSizing.medium }}>{this.state.blogPosts.summary}</h2>
                </div>
            </section>
        );
    }
}