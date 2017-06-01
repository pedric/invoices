// Set class to sortoption
$("th").on('click', function(){
    $("th").removeClass('active');
    $(this).addClass('active');
});

// Open filter area above invoice list
toggleSearchBar = function(){
	if($(".invoice-list form").height() > 0) {
    $(".invoice-list form").animate({"height": "0px"}, 200);
	} else {
		$(".invoice-list form").animate({"height": "90px"}, 200);
	}
}

// Set class->style to active invoice
toggleActiveInvoice = function(e) {
    $("tbody tr").removeClass('active');
    $(e).addClass('active');
}

// Toggle menu from the right
toggleMenu = function() {
	var w = window.innerWidth;
	var menuState = $("header nav").css("left");
	menuState = menuState.replace("px", "");
	menuState = parseInt(menuState);
	if(menuState > 0) {
		$("header nav").animate({"left": "0px"}, 300, function() {
			$("header nav ul").animate({"opacity": 1}, 100);
		});
	} else {
		$("header nav ul").animate({"opacity": 0}, 100, function() {
			$("header nav").animate({"left": w + "px"}, 300);
		});
	}
}
