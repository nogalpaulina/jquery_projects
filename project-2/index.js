$(".question").click(function() {
	$(this).next().fadeToggle("slow");
	if ($(this).css('font-size') === '17px') {
		$(this).animate({fontSize: '20px'}, "slow");
	} else {
		$(this).animate({fontSize: '17px'}, "slow");
	}
	$(this).children().toggleClass("collapse");
});
