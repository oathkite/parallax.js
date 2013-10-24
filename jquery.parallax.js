;(function($) {
	$.fn.parallax = function() {
		return this.each(function() {
			var self = $(this);
			var startY = self.offset().top;
			var startX = self.offset().left;
			$(window).on('scroll', function(e) {
				var scrollY = startY - $(window).scrollTop();
				var scrollX = startX - $(window).scrollLeft();
				self.css({
					top: startY + scrollY / (self.data('depth') * 2),
					left: startX + scrollX / (self.data('depth') * 2)
				});
			});
		});
	}
})(jQuery);
$(function() {
	$('.parallax').parallax();
});