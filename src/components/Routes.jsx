import React, { Component } from 'react';
import Splash from './Splash';
import About from './About';
import Experience from './Experience';
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
    breakBlack: {
        height: '4%',
        width: '100%',
        backgroundColor: '#eee'
    }
}

class Base extends Component {
    render() {
        return (
            <div style={{ textAlign: 'center', justifyContent: 'space-evenly' }}>
                <Splash />
                <ScrollableAnchor id={'about'}><div style={styles.breakWhite} /></ScrollableAnchor>
                <About />
                <ScrollableAnchor id={'experience'}><div style={styles.breakBlack} /></ScrollableAnchor>
                <Experience />
                <ScrollableAnchor id={'skills'}><div style={styles.breakWhite} /></ScrollableAnchor>
                <Skills />
                <ScrollableAnchor id={'projects'}><div style={styles.breakBlack} /></ScrollableAnchor>
                <Projects />
                <ScrollableAnchor id={'connect'}><div style={styles.breakWhite} /></ScrollableAnchor>
                <Connect />
            </div>
        );
    }
};

export default Base;