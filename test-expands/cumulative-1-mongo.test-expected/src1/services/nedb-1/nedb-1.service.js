
// Initializes the `nedb1` service on path `/nedb-1`
const createService = require('feathers-mongodb');
const hooks = require('./nedb-1.hooks');
// !<DEFAULT> code: imports
// let $jsonSchema = require('./nedb-1.mongo');
// !end
// !code: init // !end

let moduleExports = function (app) {
  let paginate = app.get('paginate');
  let mongoClient = app.get('mongoClient');
  let options = { paginate };
  // !code: func_init // !end

  // Initialize our service with any options it requires
  // !<DEFAULT> code: extend
  app.use('/nedb-1', createService(options));
  // !end

  // Get our initialized service so that we can register hooks
  const service = app.service('nedb-1');

  // eslint-disable-next-line no-unused-vars
  let promise = mongoClient.then(db => {
    return db.createCollection('nedb-1', {
      // !<DEFAULT> code: create_collection
      // validator: { $jsonSchema: $jsonSchema },
      // validationLevel: 'strict', // The MongoDB default
      // validationAction: 'error', // The MongoDB default
      // !end
    });
  })
    .then(serviceModel => {
      service.Model = serviceModel;
    });

  service.hooks(hooks);
  // !code: func_return // !end
};
// !code: more // !end

// !code: exports // !end
module.exports = moduleExports;

// !code: funcs // !end
// !code: end // !end
