$(document).ready(function() {
      
    $('ul.programs_catalog_tabs').on('click', 'li:not(.catalog_tab_active)', function() {
      $(this)
        .addClass('programs_catalog_tab_active').siblings().removeClass('programs_catalog_tab_active')
        .closest('section.programs').find('div.programs_wrapper').removeClass('programs_wrapper_active').eq($(this).index()).addClass('programs_wrapper_active');
    });
  });

  $(document).ready(function($) {
	$('.menu_btn').click(function() {
		$('.menu_popup-fade').fadeIn(150);
		return false;
	});	
	
	$('.menu_popup_close').click(function() {
	$(this).parents('.popup-fade').fadeOut(250);
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.menu_popup-fade').fadeOut();
		}
	});
	
	$('.menu_popup-fade').click(function(e) {
		if ($(e.target).closest('.menu_popup').length == 0) {
			$(this).fadeOut();					
		}
	});
});
$(document).ready(function($) {
	$('.about_wrapper_btn').click(function() {
		$('.about_popup-fade').fadeIn(150);
		return false;
	});	
	
	$('.about_popup_close').click(function() {
	$(this).parents('.about_popup-fade').fadeOut(250);
		return false;
	});		
 
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.about_popup-fade').fadeOut();
		}
	});
	
	$('.about_popup-fade').click(function(e) {
		if ($(e.target).closest('.about_popup').length == 0) {
			$(this).fadeOut();					
		}
	});
});

// window.addEventListener('DOMContentLoaded', () => {
//     const menu = document.querySelector('.menu'),
//     menuItem = document.querySelectorAll('.menu_item'),
//     hamburger = document.querySelector('.hamburger');

//     hamburger.addEventListener('click', () => {
//         hamburger.classList.toggle('hamburger_active');
//         menu.classList.toggle('menu_active');
//     });

//     menuItem.forEach(item => {
//         item.addEventListener('click', () => {
//             hamburger.classList.toggle('hamburger_active');
//             menu.classList.toggle('menu_active');
//         })
//     })
// })