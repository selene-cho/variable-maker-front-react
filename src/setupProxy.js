const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      // 백엔드 주소
      target: 'http://223.130.128.91',
      changeOrigin: true,
    })
  );
};

// const createProxyMiddleware = require('http-proxy-middleware');
// module.exports = (app) => {
//   app.use(
//     createProxyMiddleware('/api', {
//       target: 'http://223.130.128.91',
//       changeOrigin: true,
//     })
//   );
// };
