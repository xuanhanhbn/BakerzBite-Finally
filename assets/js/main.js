$('.main-header').on('click', 'li', function() {
    $(this).addClass('header-active').siblings().removeClass('header-active');
  });

let menuChange = document
						.getElementById("nav-menu")
						.querySelectorAll('li');
let newMenu = menuChange[5];
newMenu.addEventListener('click',function(e){
	e.stopPropagation()
	$('.homie').addClass('header-active').siblings().removeClass('header-active');

})
console.log(newMenu);

    /*-------------------
		Quantity change
	--------------------- */
  'use strict';

(function ($) {
  var proQty = $('.pro-qty');
	proQty.prepend('<span class="dec qtybtn">-</span>');
	proQty.append('<span class="inc qtybtn">+</span>');
	proQty.on('click', '.qtybtn', function () {
		var $button = $(this);
		var oldValue = $button.parent().find('input').val();
		if ($button.hasClass('inc')) {
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

