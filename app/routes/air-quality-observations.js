import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.query('air_quality_observation', { 'zip_code': params.zip_code });
  },

  setupController: function(controller, model) {
    controller.set('model', model);
    this.store.query('activity', { 'date': moment().format("DD/MM/YYYY") }).then(function(activity) {
      controller.set('activity', activity);
    });
  }
});
