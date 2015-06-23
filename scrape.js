var request = require('request');
var cheerio = require('cheerio');
var tabletojson = require('tabletojson');
var json2csv = require('json2csv');
var fs = require('fs');


fs.readFile('data.html', function (error, body) {
	if(error) throw error;

  parse(body.toString());
});

function parse(data) {
	var $ = cheerio.load(data);
	var tables = $('body').find('.wikitable');
	var finalJson = [];

	tables.each(function (i, elm) {
		var json = tabletojson.convert('<table>'+$(elm).html()+'</table>')[0];

		json.forEach(function(elm) {
			finalJson.push(elm);
		});
	});

	json2csv({ data: finalJson, fields: [ 'model', 'diagonal', 'resolution', 'ppcm'] }, function(err, csv) {
  	save(csv);
  });
}

function save(data) {
	fs.writeFile('screens.csv', data, function (err) {
	  if (err) return console.log(err);
	  console.log('screens.csv written');
	});
}