var svg = d3
    .select("#myDiv")
    .append("svg");

labelGroup = svg.append("g");

labelGroup.append("text")
    .attr("value", "Data1")
    .text("Click me for Data Source 1");

labelGroup.append("text")
    .attr("value", "Data2")
    .text("Click me for Data Source 2");
    
d3.selectAll("h2")
    .on("click"), function(){
        console.log("Hello");
    }



// svg.selectAll("text")
//     .on("click"), function() {
//         var value = d3.select(this).attr("value");
//         if (value !== "Data2"){

//             Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/2011_us_ag_exports.csv', function(err, rows){
//                 function unpack(rows, key) {
//                     return rows.map(function(row) { return row[key]; });
//                 }

//                 var data1 = [{
//                     type: 'choropleth',
//                     locationmode: 'USA-states',
//                     locations: unpack(rows, 'code'),
//                     z: unpack(rows, 'total exports'),
//                     text: unpack(rows, 'state'),
//                     zmin: 0,
//                     zmax: 17000,
//                     colorscale: [
//                         [0, 'rgb(242,240,247)'], [0.2, 'rgb(218,218,235)'],
//                         [0.4, 'rgb(188,189,220)'], [0.6, 'rgb(158,154,200)'],
//                         [0.8, 'rgb(117,107,177)'], [1, 'rgb(84,39,143)']
//                     ],
//                     colorbar: {
//                         title: 'Millions USD',
//                         thickness: 0.2
//                     },
//                     marker: {
//                         line:{
//                             color: 'rgb(255,255,255)',
//                             width: 2
//                         }
//                     }
//                 }];


//                 var layout1 = {
//                     title: '2011 US Agriculture Exports by State',
//                     geo:{
//                         scope: 'usa',
//                         showlakes: true,
//                         lakecolor: 'rgb(255,255,255)'
//                     }
//                 };

//                 Plotly.plot(myDiv, data1, layout1, {showLink: false});
//             });
//         }
//         else {

//             Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/2014_usa_states.csv', function(err, rows){
//                             function unpack(rows, key) {
//             return rows.map(function(row) { return row[key]; });
//             }
//             var data2 = [{
//                 type: 'choropleth',
//                 locationmode: 'USA-states',
//                 locations: unpack(rows, 'Postal'),
//                 z: unpack(rows, 'Population'),
//                 text: unpack(rows, 'State'),
//                 autocolorscale: true
//             }];

//             var layout2 = {
//             title: '2014 US Popultaion by State',
//                 geo:{
//                     scope: 'usa',
//                     countrycolor: 'rgb(255, 255, 255)',
//                     showland: true,
//                     landcolor: 'rgb(217, 217, 217)',
//                     showlakes: true,
//                     lakecolor: 'rgb(255, 255, 255)',
//                     subunitcolor: 'rgb(255, 255, 255)',
//                     lonaxis: {},
//                     lataxis: {}
//                 }
//             };
//             Plotly.plot(myDiv, data2, layout2, {showLink: false});
//             });
//         }
//     }

