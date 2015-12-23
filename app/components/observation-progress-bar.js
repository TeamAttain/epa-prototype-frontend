import Ember from 'ember';
import moment from 'moment';

Ember.Handlebars.helper('shortDate', function(date) {
  return moment(date).format('MMM DD');
});

export default Ember.Component.extend({
  categoryMap: [
    '',
    'Good',
    'Moderate',
    'Unhealthy for Sensitive Groups',
    'Unhealthy',
    'Very Unhealthy',
    'Hazardous'
  ],

  categoryScore: function() {
    return "entry--aqi-" + this.categoryMap.indexOf(this.category);
  }.property('category'),

  percentageOutsideBarWidth: function() {
    return Ember.String.htmlSafe("width: " + this.percentageOutside + "%");
  }.property('percentageOutside'),

  totalActivities: function() {
    return this.inside + this.outside;
  }.property('inside', 'outside')
});
