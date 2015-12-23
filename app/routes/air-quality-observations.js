import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
  model: function(params) {
    this.store.set('zip_code', params.zip_code);
    return this.store.query('air_quality_observation', { 'zip_code': params.zip_code });
  },

  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('zip_code', this.store.get('zip_code'));
    this.store.query('activity', { 'zip_code': this.store.get('zip_code'), 'date': moment().format("DD/MM/YYYY") }).then(function(activity) {
      controller.set('activity', activity);
    });
  }
});
