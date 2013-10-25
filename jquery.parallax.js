;(function($) {
	$.fn.parallax = function(ratio) {
		var ratio = ratio || 1;
		return this.each(function() {
			var self = $(this);
			var startY = self.offset().top;
			var startX = self.offset().left;
			$(window).on('scroll', function(e) {
				var scrollY = $(window).scrollTop();
				var scrollX = $(window).scrollLeft();
				self.css({
					top: startY + scrollY * ratio / self.data('depth'),
					left: startX + scrollX * ratio / self.data('depth')
				});
			});
		});
	}
})(jQuery);
$(function() {
	$('.parallax').parallax();
});