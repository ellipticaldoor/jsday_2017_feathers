const assert = require('assert');
const app = require('../../src/app');

describe('\'demo\' service', () => {
  it('registered the service', () => {
    const service = app.service('demo');

    assert.ok(service, 'Registered the service');
  });
});
