'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _App = require('./App.vue');

var _App2 = _interopRequireDefault(_App);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _vueAwesomeSwiper = require('vue-awesome-swiper');

var _vueAwesomeSwiper2 = _interopRequireDefault(_vueAwesomeSwiper);

require('./common/less/base.less');

var _vueLazyload = require('vue-lazyload');

var _vueLazyload2 = _interopRequireDefault(_vueLazyload);

var _vDistpicker = require('v-distpicker');

var _vDistpicker2 = _interopRequireDefault(_vDistpicker);

var _vueCroppa = require('vue-croppa');

var _vueCroppa2 = _interopRequireDefault(_vueCroppa);

var _vueSocket = require('vue-socket.io');

var _vueSocket2 = _interopRequireDefault(_vueSocket);

var _socket = require('socket.io-client');

var _socket2 = _interopRequireDefault(_socket);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.config.productionTip = false;
_vue2.default.use(_vueAwesomeSwiper2.default);
_vue2.default.use(_vueLazyload2.default, {
  loading: require('./common/image/logo.png')
});
_vue2.default.component('v-distpicker', _vDistpicker2.default);
_vue2.default.use(_vueCroppa2.default);
_vue2.default.use(_vueSocket2.default, (0, _socket2.default)('http://localhost:3000'));

/* eslint-disable no-new */
new _vue2.default({
  el: '#app',
  router: _router2.default,
  render: function render(h) {
    return h(_App2.default);
  },
  data: {
    Hub: new _vue2.default()
  }
});
//# sourceMappingURL=main.js.map