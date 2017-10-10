'use strict';

module.exports = function(app) {

  var controller = require('../controllers/Controller');

  app.route('/backend/providers')
    .get(controller.list_all_providers)
    .post(controller.create_a_provider);

  app.route('/backend/providers/:providerId')
    .get(controller.read_a_provider)
    .put(controller.update_a_provider)
    .delete(controller.delete_a_provider);
};
