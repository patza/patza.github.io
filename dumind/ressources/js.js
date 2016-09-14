$(document).ready(function() {
	
	$('.bc-societe .title-image-square').hide();

	$('.bc-societe').click(function() {
		$('.bc-societe .overlay-big-square').hide();
		$('.bc-societe .title-image-square').show();
	});

	$('.bc-interviews .title-image-rectangle').hide();
	$('.bc-interviews').click(function() {
		$('.bc-interviews .overlay-big-square').hide();
		$('.bc-interviews .title-image-rectangle').show();		
	});



	function	resetStyle() {
		$('.bc-societe .overlay-big-square').show();
		$('.bc-societe .title-image-square').hide();
		$('.bc-interviews .overlay-big-square').show();
		$('.bc-interviews .title-image-rectangle').hide();		

	}
	window.setTimeout(resetStyle, 10000);
});