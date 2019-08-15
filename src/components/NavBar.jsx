import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withWidth from '@material-ui/core/withWidth';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { goToAnchor } from 'react-scrollable-anchor';

const styles = {
    menuButton: {
        marginLeft: 20,
        marginRight: 20,
        textTransform: 'capitalize',
        textDecoration: 'none',
        color: 'white'
    }
};

class NavBar extends Component {
    constructor() {
        super();

        this.state = {
            anchorEl: null,
            menuOpen: false
        };

        this._push = this._push.bind(this);
        this._toggleMenu = this._toggleMenu.bind(this);
    }

    _push(route) {
        this._toggleMenu();
        return goToAnchor(route, false);
    }

    _toggleMenu() {
        let { menuOpen } = this.state;
        this.setState({ menuOpen: !menuOpen });
    }

    render() {
        const { width } = this.props;
        let { menuOpen, anchorEl } = this.state;

        if (width === 'xs' || width === 'sm') {
            return (
                <AppBar position="fixed" className="navBar" style={{ backgroundColor: '#424242' }}>
                    <Toolbar>
                        <IconButton 
                            style={{
                                marginLeft: -12,
                                marginRight: 20,
                                textTransform: 'capitalize',
                                textDecoration: 'none',
                                color: 'white',
                                float: 'right'
                            }} 
                            color="inherit" 
                            onClick={this._toggleMenu}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Typography className="navbarLink" variant="title" onClick={() => {
                            this._push('');
                            this.setState({ menuOpen: false });
                        }} color="inherit" style={{ marginRight: 20, fontFamily: 'Open Sans, sans-serif', textTransform: 'capitalize', textDecoration: 'none' }}>
                            Danny Lim
                        </Typography>
                    
                        <Menu
                            anchorEl={anchorEl}
                            getContentAnchorEl={null}
                            anchorOrigin={{ vertical: "top", horizontal: "left" }}
                            transformOrigin={{ vertical: "top", horizontal: "left" }}
                            open={menuOpen}
                            onClose={this._toggleMenu}
                        >
                            <MenuList style={{ backgroundColor: '#424242' }}>
                                <MenuItem onClick={this._push.bind(null, 'about')} style={{ backgroundColor: '#424242' }}>
                                    <Typography className="navbarLink" component="h3" style={styles.menuButton} onClick={this._push.bind(null, 'about')}>About</Typography>
                                </MenuItem>
                                <MenuItem onClick={this._push.bind(null, 'experience')} style={{ backgroundColor: '#424242' }}>
                                    <Typography className="navbarLink" component="h3" style={styles.menuButton} onClick={this._push.bind(null, 'experience')}>Experience</Typography>
                                </MenuItem>
                                <MenuItem onClick={this._push.bind(null, 'reviews')} style={{ backgroundColor: '#424242' }}>
                                    <Typography className="navbarLink" component="h3" style={styles.menuButton} onClick={this._push.bind(null, 'reviews')}>Reviews</Typography>
                                </MenuItem>
                                <MenuItem onClick={this._push.bind(null, 'skills')} style={{ backgroundColor: '#424242' }}>
                                    <Typography className="navbarLink" component="h3" style={styles.menuButton} onClick={this._push.bind(null, 'skills')}>Skills</Typography>
                                </MenuItem>
                                <MenuItem onClick={this._push.bind(null, 'projects')} style={{ backgroundColor: '#424242' }}>
                                    <Typography className="navbarLink" component="h3" style={styles.menuButton} onClick={this._push.bind(null, 'projects')}>Projects</Typography>
                                </MenuItem>
                                <MenuItem onClick={this._push.bind(null, 'connect')} style={{ backgroundColor: '#424242' }}>
                                    <Typography className="navbarLink" component="h3" style={styles.menuButton} onClick={this._push.bind(null, 'connect')}>Connect</Typography>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Toolbar>
                </AppBar>
            )
        }

        return (
            <AppBar position="fixed" className="navBar" style={{ backgroundColor: '#424242' }}>
                <Toolbar>
                    <Typography className="navbarLink" variant="title" onClick={this._push.bind(null, '')} color="inherit" style={{ marginRight: 20, fontFamily: 'Open Sans, sans-serif', textTransform: 'capitalize', textDecoration: 'none' }}>
                        Danny Lim
                    </Typography>
                    <Typography className="navbarLink" component="h3" style={styles.menuButton} onClick={this._push.bind(null, 'about')}>About</Typography>
                    <Typography className="navbarLink" component="h3" style={styles.menuButton} onClick={this._push.bind(null, 'experience')}>Experience</Typography>
                    <Typography className="navbarLink" component="h3" style={styles.menuButton} onClick={this._push.bind(null, 'reviews')}>Reviews</Typography>
                    <Typography className="navbarLink" component="h3" style={styles.menuButton} onClick={this._push.bind(null, 'skills')}>Skills</Typography>
                    <Typography className="navbarLink" component="h3" style={styles.menuButton} onClick={this._push.bind(null, 'projects')}>Projects</Typography>
                    <Typography className="navbarLink" component="h3" style={styles.menuButton} onClick={this._push.bind(null, 'connect')}>Connect</Typography>
                </Toolbar>
            </AppBar>
        );
    }
};

NavBar.propTypes = {
    width: PropTypes.string.isRequired,
};

export default withWidth()(NavBar);