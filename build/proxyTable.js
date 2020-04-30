const { options } = require('./mockData');
// 配置代理服务
const proxy = {
  '/api': 'http://localhost:3000',
  '/api2': {
    target: "http://localhost:3000",
    pathRewrite: {
      '^/api2': '/auth'
    }
  },
  '/api-test': {
    target: 'http://localhost:3000/some/path',
    pathRewrite: { "^/api-test": "" }
  }
}

// 配置数据模拟服务
const setup = function (app) {
  app.get('/api', (req, res) => {
    res.json(options);
  });
  app.get('/api2', (req, res) => {
    res.json({ auth: true });
  });
}

module.exports = {
  proxy,
  setup
}