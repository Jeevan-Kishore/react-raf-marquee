'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var raf = function raf() {
  var lastTime = 0;
  var vendors = ['webkit', 'moz'];

  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id = window.setTimeout(function () {
      callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };
  if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
    clearTimeout(id);
  };
};

raf();

var Marquee =
/*#__PURE__*/
function (_Component) {
  _inherits(Marquee, _Component);

  function Marquee(props) {
    var _this;

    _classCallCheck(this, Marquee);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Marquee).call(this, props));
    _this.timerMarquee = null;
    _this.domMi = null;
    _this.domMw = null;
    _this.state = {};
    return _this;
  }

  _createClass(Marquee, [{
    key: "initMarquee",
    value: function initMarquee() {
      this.stopMarquee();
      this.runMarquee();
    }
  }, {
    key: "landscapeMarquee",
    value: function landscapeMarquee() {
      var _this2 = this;

      if (!this.domMw || !this.domMi) return;
      var _this$props$scrollSpe = this.props.scrollSpeed,
          scrollSpeed = _this$props$scrollSpe === void 0 ? 1 : _this$props$scrollSpe;

      if (this.domMi.offsetWidth > this.domMw.offsetWidth) {
        this.container2.style.display = 'block';
      }

      if (this.domMw.scrollLeft >= this.domMi.scrollWidth) {
        this.domMw.scrollLeft = 0;
      } else {
        this.domMw.scrollLeft = this.domMw.scrollLeft + scrollSpeed;
      }

      this.timerMarquee = requestAnimationFrame(function () {
        return _this2.landscapeMarquee();
      });
    }
  }, {
    key: "verticalMarquee",
    value: function verticalMarquee() {
      var _this3 = this;

      if (!c.domMw || this.domMi) return;
      var _this$props$scrollSpe2 = this.props.scrollSpeed,
          scrollSpeed = _this$props$scrollSpe2 === void 0 ? 1 : _this$props$scrollSpe2;

      if (this.domMw.scrollTop >= this.domMi.scrollHeight) {
        this.domMw.scrollTop = 0;
      } else {
        this.domMw.scrollTop = this.domMw.scrollTop + scrollSpeed;
      }

      this.timerMarquee = requestAnimationFrame(function () {
        return _this3.verticalMarquee();
      });
    }
  }, {
    key: "runMarquee",
    value: function runMarquee() {
      var _this4 = this;

      this.stopMarquee();

      if (this.props.direction === 'vertical') {
        this.timerMarquee = requestAnimationFrame(function () {
          return _this4.verticalMarquee();
        });
      } else {
        this.timerMarquee = requestAnimationFrame(function () {
          return _this4.landscapeMarquee();
        });
      }
    }
  }, {
    key: "stopMarquee",
    value: function stopMarquee() {
      this.timerMarquee && cancelAnimationFrame(this.timerMarquee);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initMarquee();
      var getMarquee = this.props.getMarquee;
      getMarquee && getMarquee({
        runMarquee: this.runMarquee,
        stopMarquee: this.stopMarquee
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopMarquee();
    }
  }, {
    key: "renderLandscapeMarquee",
    value: function renderLandscapeMarquee() {
      var _this5 = this;

      var _this$props$loopData = this.props.loopData,
          loopData = _this$props$loopData === void 0 ? [] : _this$props$loopData;
      return React__default.createElement("div", {
        className: "marquee-landscape-wrap",
        onMouseEnter: function onMouseEnter() {
          return _this5.stopMarquee();
        },
        onMouseLeave: function onMouseLeave() {
          return _this5.runMarquee();
        },
        ref: function ref(mw) {
          _this5.domMw = mw;
        }
      }, React__default.createElement("div", {
        className: "marquee-landscape-item",
        ref: function ref(mi) {
          _this5.domMi = mi;
        }
      }, loopData.map(function (item, index) {
        return React__default.createElement("div", {
          className: "marquee-landscape-txt",
          key: index
        }, item);
      })), React__default.createElement("div", {
        className: "marquee-landscape-item marquee-landscape-container-2",
        ref: function ref(c2) {
          return _this5.container2 = c2;
        }
      }, loopData.map(function (item, index) {
        return React__default.createElement("div", {
          className: "marquee-landscape-txt",
          key: index
        }, item);
      })));
    }
  }, {
    key: "renderVerticalMarquee",
    value: function renderVerticalMarquee() {
      var _this6 = this;

      var _this$props = this.props,
          _this$props$loopData2 = _this$props.loopData,
          loopData = _this$props$loopData2 === void 0 ? [] : _this$props$loopData2,
          _this$props$verticalI = _this$props.verticalItemHeight,
          verticalItemHeight = _this$props$verticalI === void 0 ? 0 : _this$props$verticalI;
      return React__default.createElement("div", {
        className: "marquee-vertical-wrap",
        ref: function ref(mw) {
          return _this6.domMw = mw;
        }
      }, React__default.createElement("div", {
        className: "marquee-vertical-item",
        ref: function ref(mi) {
          return _this6.domMi = mi;
        }
      }, loopData.map(function (item, index) {
        return React__default.createElement("div", {
          style: {
            height: verticalItemHeight,
            lineHeight: verticalItemHeight
          },
          className: "marquee-vertical-txt",
          key: index
        }, item);
      })), React__default.createElement("div", {
        className: "marquee-vertical-item"
      }, loopData.map(function (item, index) {
        return React__default.createElement("div", {
          style: {
            height: verticalItemHeight,
            lineHeight: verticalItemHeight
          },
          className: "marquee-vertical-txt",
          key: index
        }, item);
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var direction = this.props.direction;
      return React__default.createElement("div", {
        className: "react-marquee-box"
      }, direction === 'landscape' ? this.renderLandscapeMarquee() : this.renderVerticalMarquee());
    }
  }]);

  return Marquee;
}(React.Component);

Marquee.propTypes = {
  loopData: PropTypes.array,
  getMarquee: PropTypes.func,
  direction: PropTypes.string,
  verticalItemHeight: PropTypes.string
};

exports.Marquee = Marquee;
