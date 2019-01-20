import React, { Component, Fragment } from 'react';
import withWidth from '@material-ui/core/withWidth';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TrackVisibility from 'react-on-screen';
import CodeIcon from '@material-ui/icons/Code';

const ProjectsView = ({ isVisible, renderProject, width }) => {
  return (
    <div style={{
      flexGrow: 1,
      backgroundColor: '#eee',
      paddingTop: '2%',
      paddingBottom: '2%',
      paddingRight: width === 'xs' || width === 'sm' ? 0 : '10%'
    }} className={isVisible ? "sectionView" : "section"}>
      <Typography gutterBottom variant="headline" component="h1" style={{ textAlign: 'center', fontFamily: 'Kaushan Script, cursive', fontSize: width === 'xs' || width === 'sm' ? 30 : 50 }}>
        What I've Worked On
      </Typography>
      <Typography component="br" />

      {renderProject('http://jstbquiz.herokuapp.com', 'https://i.imgur.com/z5aaKVg.gif', 'JST.B Brand Equity Quiz', 'React | Node.js | Firebase | SMTP', `A quiz designed to show how well-branded the user's company is. Users answer questions and then the app calculates a score for them and sends an email to my client. Used for intake for JST.B.`, false)}
      {renderProject('http://bookshare-app.herokuapp.com', 'http://i.imgur.com/KiJgkkn.gif', 'BookShare', 'React | Redux | Node.js | AWS S3 | Strip API', `Similar to eBay, BookShare is an app to store a library of books that you own, put them up for sale, and buy books from other users. Uses Google API, Sendgrid, and Amazon Web Services.`, 'https://github.com/FigsAndRice/BookShare-App')}
      {renderProject('http://newsrant.herokuapp.com', 'http://i.imgur.com/FHtWxs1.gif', 'NewsRant', 'React | Flux | Firebase | Node.js | iFrames', `A simple app where you can search for news articles, open chatrooms, and talk about them anonymously with other people interested in the same article.`, 'https://github.com/dalime/NewsRant')}
      {renderProject('http://iconoquiz.herokuapp.com', 'http://i.imgur.com/kPoiQLS.gif', 'IconoQuiz', 'React | Flux | CSS | Node.js | Adobe PhotoShop', `A 2-player game that tests the players' knowledge of fast food restaurant logos. Each right answer earns you a point and the first player to five points wins! Challenge your friend.`, 'https://github.com/humanbying/groupProject2')}

    </div>
  )
};

class Projects extends Component {
  constructor(props) {
    super(props);

    this._renderProject = this._renderProject.bind(this);
  }

  _renderProject(url, imgUrl, title, technologies, description, sourceCode) {
    let { width } = this.props;

    if (width === 'xs' || width === 'sm') {
      return (
        <Fragment>
          <Grid container spacing={24}>
            <Grid item xs={12} style={{ textAlign: 'center' }}>
              <img src={imgUrl} alt="" onClick={() => window.open(url)} className="projectImgSm"/>
            </Grid>
            <Grid item xs={12} sm container style={{ textAlign: 'center' }}>
              <Grid item xs container direction="column" spacing={16}>
                <Grid item xs>
                  <span>
                    <Typography gutterBottom variant="subtitle1" className="projectLink" style={{ fontWeight: 'bold' }} onClick={() => window.open(url)}>
                      {title}
                    </Typography>
                    {sourceCode ? <CodeIcon onClick={() => window.open(sourceCode)} className="projectLink" /> : <div />}
                  </span>
                  <Typography gutterBottom style={{ fontSize: 14, fontStyle: 'italic' }}>{technologies}</Typography>
                  <Typography variant="body1">{description}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Typography component="br" />
      </Fragment>
      )
    }

    return (
      <Fragment>
        <Grid container spacing={24}>
          <Grid item xs={1} />
          <Grid item xs={4} style={{ textAlign: 'right' }}>
            <img src={imgUrl} alt="" onClick={() => window.open(url)} className="projectImg"/>
          </Grid>
          <Grid item xs={10} sm container style={{ textAlign: 'left' }}>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <span>
                  <Typography gutterBottom variant="subtitle1" className="projectLink" style={{ fontWeight: 'bold' }} onClick={() => window.open(url)}>
                    {title}
                  </Typography>
                  {sourceCode ? <CodeIcon onClick={() => window.open(sourceCode)} className="projectLink" /> : <div />}
                </span>
                <Typography gutterBottom style={{ fontSize: 14, fontStyle: 'italic' }}>{technologies}</Typography>
                <Typography variant="body1">{description}</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Typography component="br" />
      </Fragment>
    )
  }

  render() {
    let { width } = this.props;

    return (
      <TrackVisibility offset={width === 'xs' || width === 'sm' ? 2000 : 1500}>
        {({ isVisible }) => <ProjectsView isVisible={isVisible} renderProject={this._renderProject} width={width} />}
      </TrackVisibility>
    )
  }
}

export default withWidth()(Projects);