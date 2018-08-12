import React from 'react';
import { BlogService } from '../../../services/blog.service';
import { cardStyles, containerSizing, cardTitleStyles, fontSizing, spacing, fontStyles, colors } from '../../../theme';
import { Link } from 'react-router-dom';

const sectionStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',

    margin: spacing.medium
};

const hStyles = {
    fontWeight: fontStyles.bold,
    margin: spacing.small,
    color: colors.primaryTextColor,
    padding: 0
};

const h2Styles = {
    fontSize: fontSizing.medium,
    ...hStyles
};

const linkStyles = {
    display: 'flex', 
    justifyContent: 'center', 
    flexDirection: 'column', 
    textDecoration: 'none',

    margin: 0,
    padding: 0
};

const blogService = new BlogService();

export default class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogPosts: []
        };
    }

    async componentDidMount() {
        await this.loadBlogPosts();
    }

    async loadBlogPosts() {
        try {
            const request = await blogService.getAllBlogPosts();
            console.log('REQUESTTTT');
            console.log(request);
            this.setState({
                blogPosts: request
            });
        } catch (exception) {
            console.log(exception);
        }
    }

    render() {
        return (
            <section style={sectionStyles}>
                {this.state.blogPosts.map(blogPost => {
                    return (
                        <Link style={linkStyles}
                            to={{
                                pathname: `/blog/${blogPost.slug}`,
                                state: {
                                    post: blogPost
                                }
                            }}
                        >
                            <img style={{ ...cardStyles(containerSizing.medium), objectFit: 'cover', maxWidth: containerSizing.medium, maxHeight: '100%' }} alt="blog photo" src={blogPost.photos[0].original_size.url} />
                            <h2 style={{ ...h2Styles, ...cardTitleStyles(fontSizing.medium), marginBottom: spacing.medium, maxWidth: containerSizing.medium }}>{blogPost.summary}</h2>
                        </Link>
                    );
                })}
            </section>
        );
    }
}