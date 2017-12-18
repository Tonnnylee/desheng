$(function(){
	$('a').on('click', function(){ return false; });
	// set item banner
	$('.ts-item').first().show();
	$('.ts-item').each(function () {
	    var $this = $(this),
	        _imgSrc  = $this.find('.ts-banner img').attr('src');
	    if(_imgSrc)
	    $this.css('background-image', 'url(' + _imgSrc + ')');
	});
	$('.ts-control li').on('mouseover', function(){
	    var  $this = $(this),
	        _index = $this.index();
	      $("li.is-active").removeClass("is-active");
	      $(this).addClass("is-active");

	      $('.ts-item.is-active').removeClass('is-active');
	      $('.ts-item').eq(_index).addClass('is-active');

	    return false;
	});
	var ww = $(window).width();
});
