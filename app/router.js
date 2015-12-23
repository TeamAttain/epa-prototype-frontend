import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('air_quality_observations', { path: '/air_quality_observations/:zip_code' });
});

export default Router;
