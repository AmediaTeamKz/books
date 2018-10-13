$(function(){

	


	$(document).scroll(function(){

	})
	$('button.btn-hum').click(function(){
		if(!$('.top-menu').hasClass('open')){
			$('.top-menu').fadeIn().css({'display':'flex'}).addClass('open')
		}else{
			$('.top-menu').removeClass('open').fadeOut()
		}
	})


	$('a[href="#"]').click(function(e){
		e.preventDefault();
	})
	$('.main').click(function(e){
		e.preventDefault();
			$(this).next('ul').addClass('active').fadeIn()

	})

	$('.wrp-submenu').hover(function(){
		$(this).children('li').children('.parent-sub').addClass('active')
			$('.parent-sub').mouseenter(function(){
				$(this).next('.sublbltr').addClass('active').css({'display':'block'})
			})
			// $('.parent-sub').mouseleave(function(){
			// })
			$('.wrp-submenu li a').hover(function(){
			if($(this).hasClass('parent-sub')){
				$(this).next('.sublbltr').removeClass('active').css({'display':'none'})
			}				
			})

	})
	$('.wrp-submenu').mouseleave(function(){
		$(this).removeClass('active').fadeOut()
		$(this).children('li').children('.sublbltr').removeClass('active').fadeOut()
	})
 	$('[tab-index]').click(function(){
 		var t = $(this),
 			i = t.attr('tab-index');
 			$('[tab-index]').removeClass('active')
 			t.addClass('active')
 			$('.tabs-content li.active')
 				.addClass('out')
 				.removeClass('active')
 			
 			$('[index='+i+']')
 				.removeClass('out')
 				.addClass('active')

 	})


 		$(document).on('click','.click-faq',function(e){
		e.preventDefault();
		var t = $(this),
			n = $('.click-faq'),
			h = t.hasClass('opened'),
			f = $('.click-faq').hasClass('opened'),
			m = t.children('.arr'),
			b = t.next('.desc');
			n.next().not(t.next()).slideUp(500)
					.prev()
					.children('.arr')
					.css({'transform':'scaleY(1)'})
					.parent()
					.removeClass('opened');
			b.slideToggle(500)
					.prev()
					.children('.arr')
					.css({'transform':'scaleY(-1)'})
					.parent()
					.addClass('opened')
			if(h)
				t.toggleClass('opened')
				 .children('.arr')
				 .css({'transform':'scaleY(1)'})
			else
				m.css({'transform':'scaleY(-1)'})
	})

})