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

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _vueLazyload = require('vue-lazyload');

var _vueLazyload2 = _interopRequireDefault(_vueLazyload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.config.productionTip = false;
_vue2.default.use(_vueAwesomeSwiper2.default);
_vue2.default.use(_vueLazyload2.default, {
  loading: require('./common/image/logo.png')
});

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