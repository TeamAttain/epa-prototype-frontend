import Ember from 'ember';

export default Ember.Route.extend({
  redirect: function(){
    this.transitionTo("/air_quality_observations/27601");
  }
});
