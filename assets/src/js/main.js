var $navigation = $(".navigation");
var $overlay = $(".overlay");
$(".menu-icon").click(function() {
	$overlay.fadeIn();
	$navigation.css("display", "flex")
	    .hide()
	    .fadeIn();
});

$(".menu-close").click(function() {
	$navigation.fadeOut();
	$overlay.fadeOut();
});

$navigation.click(function(e){
	if (e.target.class === $(this).class){
		$(this).fadeOut();
		$overlay.fadeOut();
	}
});

$("document").ready(function(){	
	distinct($(".tag"),$(".all-tags"));
	distinct($(".author"),$(".all-authors"));
});

var distinct = function($class, $container){
	//Hide duplicate
	$class.each(function(){
		var $this = $(this);
		var $el = $container.find("[data-id='" + $this.data("id") + "']");
		if ($el.length > 1){
			$el.hide();
			$el.first().show();
		} 
	});

	//Entirely remove hidden elements
	$class.each(function()	{
		var $el = $(this);
		if(!$el.is(':visible')){
			$el.remove();
		}
	});
}