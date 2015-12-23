import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('observation-progress-bar', 'Integration | Component | observation progress bar', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{observation-progress-bar
    category="Good"
    dateObserved="12 Dec 2012"
    aqi="123"
    percentageOutside="30"
    inside="70"
    outside="30"
  }}`);

  assert.equal(this.$('.entry').attr('class').trim(), 'entry entry--aqi-1');
  assert.equal(this.$('.entry__aqi').text().trim(), '123');
  assert.equal(this.$('.progress-bar').attr('style').trim(), 'width: 30%');
  assert.equal(this.$('.entry__date').text().trim(), 'Dec 12');
});
