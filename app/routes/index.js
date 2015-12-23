import Ember from 'ember';

export default Ember.Route.extend({
  redirect: function(){
    // FIXME Move zip code to some config file
    this.transitionTo("/air_quality_observations/27601");
  }
});
