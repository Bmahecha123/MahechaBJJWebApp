import React from 'react';

const sectionStyles = {
    display: 'grid'
};

export default class Browse extends React.Component {
    render() {
        return (
            <section style={sectionStyles}>
                <h1>TO DO Browse Page</h1>
                <ul>
                    <li>Show positions in order of most recent. Have filter options to have different ways of ordering content</li>
                    <li>Search bar</li>
                </ul>
            </section>
        );
    }
}   