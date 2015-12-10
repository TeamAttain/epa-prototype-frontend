import Ember from 'ember';
import d3 from 'npm:d3';

export default Ember.Component.extend({
  draw: function() {
    var dataset = [ 5, 10, 15, 20, 25, 40 ];

    d3.select('.graph').selectAll('div')
      .data(dataset)
      .enter()
      .append('div')
      .attr('class', 'bar')
      .style('height', function (d) {
        return d + 'px';
      });
  },

  didInsertElement: function() {
    this.draw();
  }

  // epaDataGraph: function() {
  //   // var air_quality_endpoint = 'http://www.airnowapi.org/aq/observation/zipCode/current/?format=text/csv&zipCode=27519&distance=25&API_KEY=AE1DB20B-63E4-411C-9C99-289D088D653A'
  //   // // Set the dimensions of the canvas / graph
  //   // var margin = {top: 30, right: 20, bottom: 30, left: 50},
  //   //     width = 600 - margin.left - margin.right,
  //   //     height = 270 - margin.top - margin.bottom;
  //   //
  //   // // Parse the date / time
  //   // var parseDate = d3.time.format("%d-%b-%y").parse;
  //   //
  //   // // Set the ranges
  //   // var x = d3.time.scale().range([0, width]);
  //   // var y = d3.scale.linear().range([height, 0]);
  //   //
  //   // // Define the axes
  //   // var xAxis = d3.svg.axis().scale(x)
  //   //     .orient("bottom").ticks(5);
  //   //
  //   // var yAxis = d3.svg.axis().scale(y)
  //   //     .orient("left").ticks(5);
  //   //
  //   // // Define the line
  //   // var valueline = d3.svg.line()
  //   //     .x(function(d) { return x(d.date); })
  //   //     .y(function(d) { return y(d.close); });
  //   //
  //   // // Adds the svg canvas
  //   // var svg = d3.select("body")
  //   //     .append("svg")
  //   //         .attr("width", width + margin.left + margin.right)
  //   //         .attr("height", height + margin.top + margin.bottom)
  //   //     .append("g")
  //   //         .attr("transform", 
  //   //               "translate(" + margin.left + "," + margin.top + ")");
  //   //
  //   // // Get the data
  //   // d3.csv("data.csv", function(error, data) {
  //   //     data.forEach(function(d) {
  //   //         d.date = parseDate(d.date);
  //   //         d.close = +d.close;
  //   //     });
  //   //
  //   //     // Scale the range of the data
  //   //     x.domain(d3.extent(data, function(d) { return d.date; }));
  //   //     y.domain([0, d3.max(data, function(d) { return d.close; })]);
  //   //
  //   //     // Add the valueline path.
  //   //     svg.append("path")
  //   //         .attr("class", "line")
  //   //         .attr("d", valueline(data));
  //   //
  //   //     // Add the X Axis
  //   //     svg.append("g")
  //   //         .attr("class", "x axis")
  //   //         .attr("transform", "translate(0," + height + ")")
  //   //         .call(xAxis);
  //   //
  //   //     // Add the Y Axis
  //   //     svg.append("g")
  //   //         .attr("class", "y axis")
  //   //         .call(yAxis);
  //   //
  //   // });
  // }.on('didInsertElement')
});
