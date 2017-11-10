// Initializes the `demo` service on path `/demo`
const createService = require('feathers-memory');
const hooks = require('./demo.hooks');
const filters = require('./demo.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');

  const options = {
    name: 'demo',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/demo', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('demo');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
