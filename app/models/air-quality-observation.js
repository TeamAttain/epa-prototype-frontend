import DS from 'ember-data';

export default DS.Model.extend({
  aqi: DS.attr('string'),
  category: DS.attr('string'),
  zipCode: DS.attr('string'),
  dateObserved: DS.attr('date'),
  parameterName: DS.attr('string')
});
