const demo = require('./demo/demo.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(demo);
};
