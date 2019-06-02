import React, { Component, Fragment } from 'react';
import Routes from './Routes';
import NavBar from './NavBar';

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <NavBar />
                <Routes />
            </Fragment>
        );
    }
};

export default Layout;