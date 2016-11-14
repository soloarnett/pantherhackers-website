function enable_navLinks(){
	/*
		FUNCTION NAME:	enable_navLinks
		PARAMETERS:		none
		DESCRIPTION:	enables the normal behavior of the nav links without changing the nav bar hash
	*/
	
	// Menu Button
	prevent_NormalBehavior('a.top-link.menu'); /*
		DESCRIPTION:	prevents this link from running its default behavior. Link will need to be explicitly run in js.
	*/

	// Close Button
	prevent_NormalBehavior('a.top-link.close'); /*
		DESCRIPTION:	prevents this link from running its default behavior. Link will need to be explicitly run in js.
	*/

	// Bottom Close Button for Mobile
	prevent_NormalBehavior('a#bottom-closer.top-link'); /*
		DESCRIPTION:	prevents this link from running its default behavior. Link will need to be explicitly run in js.
	*/

	// PH Opener
	prevent_NormalBehavior('a.top-link.ph-mid.open'); /*
		DESCRIPTION:	prevents this link from running its default behavior. Link will need to be explicitly run in js.
	*/

	// PH Closer
	prevent_NormalBehavior('a.top-link.ph-mid.closed'); /*
		DESCRIPTION:	prevents this link from running its default behavior. Link will need to be explicitly run in js.
	*/

	/////////////////////////////////////////// enable_navLinks start below ///////////////////////////////////////////
	
	// Menu Button
	$('a.top-link.menu').bind('click',  function(){
		$('#nav:not(.open)').addClass('open');
	});

	// Close Button
	$('a.top-link.close').bind('click',  function(){
		$('#nav.open').removeClass('open');
	});

	// Bottom Close Button for Mobile
	$('a#bottom-closer.top-link').bind('click',  function(){
		$('#nav.open').removeClass('open');
	});

	// PH Opener
	$('a.top-link.ph-mid.closed').bind('click',  function(){
		$('#nav:not(.open)').addClass('open');
	});

	// PH Closer
	$('a.top-link.ph-mid.open').bind('click',  function(){
		$('#nav.open').removeClass('open');
	});
}












/////////////////////////////////////////// READY ///////////////////////////////////////////

$(document).ready(function(){

	enable_navLinks(); /*
		DESCRIPTION:	enables the normal behavior of the menu and close buttons
	*/
	
	
});