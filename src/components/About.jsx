import React, { Component, Fragment } from 'react';
import withWidth from '@material-ui/core/withWidth';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TrackVisibility from 'react-on-screen';

const styles = {
  textAlign: 'left', 
  paddingBottom: '1%'
};

const AboutComponent = ({ isVisible, width }) => {
  return (
    <div style={styles} className={isVisible ? "sectionView" : "section"}>
      {width === 'xs' || width === 'sm' ? <div /> : (
        <Typography gutterBottom variant="headline" component="h1" style={{ textAlign: 'center', fontFamily: 'Kaushan Script, cursive', fontSize: 50 }}>
          Nice to Meet You
        </Typography>
      )}
      <Grid container spacing={24}>
        {width === 'xs' || width === 'sm' ? <div /> : <Grid item xs={2} />}
        {width === 'xs' || width === 'sm' ? (
          <Fragment>
            <Grid item xs={2} />
            <Grid item xs={2}>
              <Avatar className="avatar" src='https://i.imgur.com/EIAwly7.jpg' onClick={() => window.open('https://i.imgur.com/EIAwly7.jpg')} style={{ width: width === 'xs' || width === 'sm' ? 80 : 150, height: width === 'xs' || width === 'sm' ? 80 : 150, textAlign: 'center' }}/>
            </Grid>
            <Grid item xs={8}>
              <Typography gutterBottom variant="headline" component="h1" style={{ textAlign: 'center', fontFamily: 'Kaushan Script, cursive', fontSize: 30 }}>
                Nice to Meet You
              </Typography>
            </Grid>
          </Fragment>
        ) : (
          <Grid item xs={2}>
            <Avatar className="avatar" src='https://i.imgur.com/EIAwly7.jpg' onClick={() => window.open('https://i.imgur.com/EIAwly7.jpg')} style={{ width: width === 'xs' || width === 'sm' ? 80 : 150, height: width === 'xs' || width === 'sm' ? 80 : 150, textAlign: 'center' }}/>
          </Grid>
        )}
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={24} style={{ textAlign: width === 'xs' || width === 'sm' ? 'center' : 'left' }}>
            <Grid item xs>
              <Typography component="p">
                I am a Software Developer / UI Designer born and raised in Maryland between Baltimore and Washington, DC and now a Digital Nomad.
                My background is in technology risk consulting, where I audited the information systems of my clients, prior to my career in development / design.
                I am most comforable with using the MERN Stack (MongoDB, Express.js, React.js and React Native with Redux, and Node.js) and other technologies.
                Professionally, I look to add value to clients with the latest stacks.
              </Typography>
              <Typography component="br" />
              <Typography component="p">
                In my free time, I love to travel, which was the motivation to be location-independent.
                I also like to stay active. My hobbies include Brazilian jiu-jitsu, Muay Thai, and breakdancing.
                I believe that staying active physically helps clear the mind and keeps the brain functioning clearly.
                I am currently accepting clients who need work done on their websites / apps.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

class About extends Component {
  render() {
    let { width } = this.props;

    return (
      <TrackVisibility offset={500}>
        {({ isVisible }) => <AboutComponent isVisible={isVisible} width={width} />}
      </TrackVisibility>
    )
  }
}

export default withWidth()(About);