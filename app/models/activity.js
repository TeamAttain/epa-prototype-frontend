import DS from 'ember-data';

export default DS.Model.extend({
  inside: DS.attr("number"),
  outside: DS.attr("number"),
  percentageOutside: DS.attr("number"),
  date: DS.attr("date"),
});
