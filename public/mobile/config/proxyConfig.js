'use strict';

module.exports = {
  proxy: {
    '/apis': {
      target: 'http://localhost:3000',
      changeOrigin: true,
      pathRewrite: {
        '^/apis': ''
      }
    }
  }
};
//# sourceMappingURL=proxyConfig.js.map