import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import Splash from './Splash';
import About from './About';
import Experience from './Experience';
import Reviews from './Reviews';
import Skills from './Skills';
import Projects from './Projects';
import Connect from './Connect';

import ScrollableAnchor from 'react-scrollable-anchor';

const styles = {
    breakWhite: {
        height: '4%',
        width: '100%',
        backgroundColor: 'white'
    },
}

class Sections extends Component {
    render() {
        return (
            <div style={{ textAlign: 'center', justifyContent: 'space-evenly' }}>
                <Splash />
                <ScrollableAnchor id={'about'}><div style={styles.sectionBreak} /></ScrollableAnchor>
                <About />
                <Divider />
                <ScrollableAnchor id={'experience'}><div style={styles.sectionBreak} /></ScrollableAnchor>
                <Experience />
                <Divider />
                <ScrollableAnchor id={'reviews'}><div style={styles.sectionBreak} /></ScrollableAnchor>
                <Reviews />
                <Divider />
                <ScrollableAnchor id={'skills'}><div style={styles.sectionBreak} /></ScrollableAnchor>
                <Skills />
                <Divider />
                <ScrollableAnchor id={'projects'}><div style={styles.sectionBreak} /></ScrollableAnchor>
                <Projects />
                <Divider />
                <ScrollableAnchor id={'connect'}><div style={styles.sectionBreak} /></ScrollableAnchor>
                <Connect />
            </div>
        );
    }
};

export default Sections;