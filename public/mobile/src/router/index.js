'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _classify = require('../components/classify/classify.vue');

var _classify2 = _interopRequireDefault(_classify);

var _details = require('../components/details/details.vue');

var _details2 = _interopRequireDefault(_details);

var _goodsDetails = require('../components/goodsDetails/goodsDetails.vue');

var _goodsDetails2 = _interopRequireDefault(_goodsDetails);

var _index = require('../components/index/index.vue');

var _index2 = _interopRequireDefault(_index);

var _login = require('../components/loggin/login.vue');

var _login2 = _interopRequireDefault(_login);

var _register = require('../components/register/register.vue');

var _register2 = _interopRequireDefault(_register);

var _shoppingCart = require('../components/shoppingCart/shoppingCart.vue');

var _shoppingCart2 = _interopRequireDefault(_shoppingCart);

var _userInfo = require('../components/userInfo/userInfo.vue');

var _userInfo2 = _interopRequireDefault(_userInfo);

var _nearby = require('../components/nearby/nearby.vue');

var _nearby2 = _interopRequireDefault(_nearby);

var _search = require('../components/search/search.vue');

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

exports.default = new _vueRouter2.default({
  routes: [{
    path: '/',
    name: 'Index',
    component: _index2.default
  }, {
    path: '/Login',
    name: 'Login',
    component: _login2.default
  }, {
    path: '/Register',
    name: 'Register',
    component: _register2.default
  }, {
    path: '/Classify',
    name: 'Classify',
    component: _classify2.default
  }, {
    path: '/UserInfo',
    name: 'UserInfo',
    component: _userInfo2.default
  }, {
    path: '/ShoppingCart',
    name: 'ShoppingCart',
    component: _shoppingCart2.default
  }, {
    path: '/Details',
    name: 'Details',
    component: _details2.default
  }, {
    path: '/GoodsDetails',
    name: 'GoodsDetails',
    component: _goodsDetails2.default
  }, {
    path: '/Nearby',
    name: 'Nearby',
    component: _nearby2.default
  }, {
    path: '/Search',
    name: 'Search',
    component: _search2.default
  }]
});
//# sourceMappingURL=index.js.map