import React, { Component } from 'react';

export default class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      component: ''
    }
  }

  componentWillMount() {
    // ANIMATION ON MOUNT
    this.setState({component: 'componentIn'});
  }

  render() {
    return (
      <div className={this.state.component}>
        <div className="container text-left" style={{marginTop: '15%', textAlign: 'left'}}>
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                {/* <iframe
                    title="blog"
                    style={{position: 'absolute', top: "0px", height: "100vh", width: "100%"}}
                    src="http://dalime5.wordpress.com/"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
