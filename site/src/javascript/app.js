var parse = require('csv-parse');
var $ = require('jQuery');

var $body = $('body');

$.get('data/screens.csv', function(data) {
	parse(data, function(err, output){
	  layout(output);
	});
});

function layout(data) {
	$(data).each(function(i, row) {
		var width = row[2].split('x')[0];
		var height = row[2].split('x')[1];

		$body
		.append(
			$('<div/>')
			.css(
					{
						position: 'absolute', 
						top: '0',
						left: '0',
						width: width+'px', 
						height: height+'px', 
						border: '1px solid red' 
					}
			)
		);

		// $body
		// .append($('<div/>').text(row[0]))
		// .append($('<div/>').css({width: row[3]+'px', background: 'red', height: '1px'}));
	});
}