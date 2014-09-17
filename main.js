$(document).on('ready', function() {
$('p').css('visibility', 'hidden');
$('#popup').dialog({autoOpen: false});
$('button').click(function() {
	$('#popup').dialog('open');
});
});