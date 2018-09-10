import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as utils from '../utils/raf';

utils.raf();

class Marquee extends Component {

  constructor(props) {
    super(props);

    this.timerMarquee = null;
    this.domMi = null;
    this.domMw = null;

    this.state = {};
  }

  initMarquee() {
    this.stopMarquee();
    this.runMarquee();
  }

  landscapeMarquee() {
    if(!this.domMw || !this.domMi) return;

    const { scrollSpeed = 1 } = this.props;

    if(this.domMi.offsetWidth > this.domMw.offsetWidth) {
      this.container2.style.display = 'block';
    }

    if(this.domMw.scrollLeft >= this.domMi.scrollWidth){
      this.domMw.scrollLeft = 0
    }else{
      this.domMw.scrollLeft = this.domMw.scrollLeft + scrollSpeed;
    }
    this.timerMarquee = requestAnimationFrame(() => this.landscapeMarquee());
  }

  verticalMarquee() {
    if(!c.domMw || this.domMi) return;

    const { scrollSpeed = 1 } = this.props;

    if(this.domMw.scrollTop >= this.domMi.scrollHeight) {
      this.domMw.scrollTop = 0
    } else {
      this.domMw.scrollTop = this.domMw.scrollTop + scrollSpeed;
    }
    this.timerMarquee = requestAnimationFrame(() => this.verticalMarquee());
  }

  runMarquee() {
    this.stopMarquee();
    if (this.props.direction === 'vertical') {
      this.timerMarquee = requestAnimationFrame(() => this.verticalMarquee());
    } else {
      this.timerMarquee = requestAnimationFrame(() => this.landscapeMarquee());
    }
  }

  stopMarquee() {
    this.timerMarquee && cancelAnimationFrame(this.timerMarquee)
  }

  componentDidMount() {
    this.initMarquee();
    const { getMarquee } = this.props;
    getMarquee && getMarquee({
      runMarquee: this.runMarquee,
      stopMarquee: this.stopMarquee
    });

  }

  componentWillUnmount() {
    this.stopMarquee();
  }

  renderLandscapeMarquee() {
    const { loopData = []} = this.props;
    return <div className="marquee-landscape-wrap" onMouseEnter={() => this.stopMarquee()} onMouseLeave={() => this.runMarquee()} ref={(mw) => { this.domMw = mw; }}>
      <div className="marquee-landscape-item" ref={(mi) => { this.domMi = mi; }}>
        {loopData.map((item, index) => (<div className="marquee-landscape-txt" key={index}>{item}</div>))}
      </div>
      <div className="marquee-landscape-item marquee-landscape-container-2" ref={c2 => this.container2 = c2}>
        {loopData.map((item, index) => (<div className="marquee-landscape-txt" key={index}>{item}</div>))}
      </div>
    </div>
  }

  renderVerticalMarquee() {
    const { loopData = [], verticalItemHeight = 0 } = this.props;
    return <div className="marquee-vertical-wrap" ref={mw => this.domMw = mw }>
      <div className="marquee-vertical-item" ref={mi => this.domMi = mi }>
        {loopData.map((item, index) => {
          return (<div style={{height:verticalItemHeight, lineHeight:verticalItemHeight}} className="marquee-vertical-txt" key={index}>{item}</div>)
        })}
      </div>
      <div className="marquee-vertical-item">
        {loopData.map((item, index) => (<div style={{height:verticalItemHeight, lineHeight:verticalItemHeight}} className="marquee-vertical-txt" key={index}>{item}</div>))}
      </div>
    </div>
  }

  render() {

    const { direction } = this.props;

    return <div className="react-marquee-box">
      {direction === 'landscape' ? this.renderLandscapeMarquee() : this.renderVerticalMarquee()}
    </div>;
  }
}

Marquee.propTypes = {
  loopData: PropTypes.array,
  getMarquee: PropTypes.func,
  direction: PropTypes.string,
  verticalItemHeight: PropTypes.string
};

export {
  Marquee
}