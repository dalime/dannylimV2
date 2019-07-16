import React, { Component } from 'react';
import compose from 'recompose/compose';
import withWidth from '@material-ui/core/withWidth';
import { withStyles } from '@material-ui/core/styles';
import TrackVisibility from 'react-on-screen';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AliceCarousel from 'react-alice-carousel';
import { Star, ArrowBack, ArrowForward } from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import "react-alice-carousel/lib/alice-carousel.css";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    textAlign: 'center',
    flexGrow: 1
  },
  bottomMargin: {
    marginBottom: '10px',
  },
});

class ReviewsComponent extends Component {
  constructor() {
    super();

    this.state = {
      currentIndex: 0,
    };

    this._slideTo = this._slideTo.bind(this);
    this._onSlideChanged = this._onSlideChanged.bind(this);
    this._slideNext = this._slideNext.bind(this);
    this._slidePrev = this._slidePrev.bind(this);
    this._renderReview = this._renderReview.bind(this);
  }

  _slideTo = (i) => this.setState({ currentIndex: i })

  _onSlideChanged = (e) => this.setState({ currentIndex: e.item })

  _slideNext = () => this.setState({ currentIndex: this.state.currentIndex + 1 })

  _slidePrev = () => this.setState({ currentIndex: this.state.currentIndex - 1 })

  _renderReview(title, text, rating) {
    return (
      <div>
        </Typography>
        <div className="row" style={styles.bottomMargin}>
          {[...Array(rating)].map((e, i) => <Star key={i} color="primary" style={{ color: '#00e676' }}/>)}
        </div>
        <Typography variant="body1" style={{ fontSize: '1rem' }}>{text}</Typography>
      </div>
    );
  }

  render() {
    const { isVisible, width } = this.props;
    const { currentIndex } = this.state;

    return (
      <div style={styles.root} className={isVisible ? "sectionView" : "section"}>
        <Typography gutterBottom variant="headline" component="h1" style={{ textAlign: 'center', fontFamily: 'Open Sans, sans-serif', fontSize: width === 'xs' || width === 'sm' ? 30 : 50 }}>
          Reviews
        </Typography>
        <Grid container spacing={24}>
          <Grid item xs={2}><IconButton onClick={() => this._slidePrev()}><ArrowBack /></IconButton></Grid>
          <Grid item xs={8}>
            <div style={{ paddingLeft: '5px', paddingRight: '5px' }}>
            <AliceCarousel 
              dotsDisabled={true}
              mouseDragEnabled
              autoPlay
              autoPlayInterval={2000}
              stopAutoPlayOnHover
              buttonsDisabled
              slideToIndex={currentIndex}
              onSlideChanged={this._onSlideChanged}
            >
              {this._renderReview('React Developer Needed to Update Web App', `Danny was very professional and timely. He was quick to respond and understood what I needed. Even on the skype calls, he had positive, insightful feedbacks that were useful to further the project's potential. Overall, I would use Danny again for future projects. Thank you Danny!`, 5)}
              {this._renderReview('Bilingual Korean-English Wordpress developer/designer needed to update site.', `Danny went above and beyond to migrate old site to Wordpress. He clearly communicated project details and implemented additional features on request. Additionally he included quality assurance and an easy handoff process. Will be working with him again.`, 5)}
              {this._renderReview('WordPress Blog Website', `Very organized, professional, and fun to work with.`, 5)}
              {this._renderReview('Need help with WordPress/Woocommerce site', `I could not be any more happier to had hire Danny Lim for my business project. When I say he went well above and beyond- I mean he REALLY went above and beyond. I was simply looking for a general sketch for my new website but he provided extra analysis, market research, and other business insights... Not to mention, I am VERY satisfied on the new design and how much research was put into the idea... Thank you so much and I will most definitely reach back out to Danny for any of my future website needs!!!`, 5)}
              {this._renderReview('Website redesign, SEO, and Social Media Marketing.', `Danny continues to show excellence in his craft!`, 5)}
            </AliceCarousel>
            </div>
          </Grid>
          <Grid item xs={2}><IconButton onClick={() => this._slideNext()}><ArrowForward /></IconButton></Grid>
        </Grid>
      </div>
    );
  }
}

class Reviews extends Component {
  render() {
    let { width } = this.props;

    return (
      <TrackVisibility offset={width === 'xs' || width === 'sm' ? 400 : 200}>
        {({ isVisible }) => <ReviewsComponent isVisible={isVisible} width={width} />}
      </TrackVisibility>
      
    )
  }
};

export default compose(withStyles(styles), withWidth())(Reviews);