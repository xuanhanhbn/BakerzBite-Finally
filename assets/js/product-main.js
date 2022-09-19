
  /*-------------------
		Quantity change
	--------------------- */
  'use strict';

(function ($) {
  var proQty = $('.pro-qty');
	proQty.prepend('<span class="decs qtybtns">-</span>');
	proQty.append('<span class="incs qtybtns">+</span>');
	proQty.on('click', '.qtybtns', function () {
		var $button = $(this);
		var oldValue = $button.parent().find('input').val();
		if ($button.hasClass('incs')) {
			var newVal = parseFloat(oldValue) + 1;
		} else {
			// Don't allow decrementing below zero
			if (oldValue > 0) {
				var newVal = parseFloat(oldValue) - 1;
			} else {
				newVal = 0;
			}
		}
		$button.parent().find('input').val(newVal);
	});

})(jQuery);