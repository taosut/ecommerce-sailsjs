var Promise = require('bluebird');
/**
 * Creates database representations of the Model types.
 *
 * @public
 */
exports.createModels = function () {
  sails.log.verbose('permissions: syncing waterline models');

  var models = _.compact(_.map(sails.controllers, function (controller, name) {
    var conf = controller._config
      , modelName = conf && conf.model && conf.model.name
      , model = sails.models[modelName || name]
    ;
    return model && model.globalId && model.identity && {
      name: model.globalId,
      identity: model.identity,
      attributes: _.omit(model.attributes, _.functions(model.attributes))
    };
  }));

  return Promise.map(models, function (model) {
    return Model.findOrCreate({ name: model.name }, model);
  });
};
