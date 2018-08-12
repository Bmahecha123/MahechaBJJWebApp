import React from 'react';
import { cardStyles, containerSizing, spacing } from '../../theme';
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

export const BlogDetail = (props) => {
    const { post } = props.location.state;
    console.log('PROPSSSS');
    console.log(props);

    return (
        <section style={sectionStyles}>
            <img style={imgStyles} alt='blog' src={post.photos[0].original_size.url} />
            <article dangerouslySetInnerHTML={{__html: post.caption}}></article>
        </section>
    );
};