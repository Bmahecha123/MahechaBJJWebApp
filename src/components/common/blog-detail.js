import React from 'react';
import { cardStyles, containerSizing, spacing, fontSizing } from '../../theme';
import './blog-detail.css';

const sectionStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center', 
    margin: spacing.medium
};

const imgStyles = {
    ...cardStyles(containerSizing.large), 
    objectFit: 'cover', 
    maxWidth: '100%', 
    maxHeight: '100%'
};

const pStyles = {
    fontSize: fontSizing.medium,
    padding: 0,
    margin: 0,
    marginTop: spacing.medium
}

export const BlogDetail = (props) => {
    const { post } = props.location.state;
    console.log('PROPSSSS');
    console.log(props);

    return (
        <section style={sectionStyles}>
            <img style={imgStyles} alt='blog image' src={post.photos[0].original_size.url} />
            <article dangerouslySetInnerHTML={{__html: post.caption}}></article>
        </section>
    );
};

function stripHtml(html) {
    return html.replace(/<(?:.|\n)*?>/gm, ' ');
}