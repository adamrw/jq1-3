$(document).on('ready', function() {
	$('p').css('visibility', 'hidden');
	$('button').click(function() {
		$('body').append('<div class="popup"><p>Lorem ipsum dolor sit amet, consectetur  elit. Consequuntur quae fugiat praesentium voluptate? Minus eius, dicta sint facere voluptate dolores ad harum tempora animi architecto molestiae obcaecati, quas repellendus alias?</p><button class="pbutton">Close</button></div>');
		$('.pbutton').click(function() {
			$('.popup').remove();
		});
	});

	
	
});
