$(document).ready(function(){


$(".btn_mnu").click(function() {
$(this).toggleClass("active");
});


//	Phone Mask
jQuery(function($){
   $("#user_phone, #user_phone_footer, #user_phone_premium, #user_phone_order").mask("+38-(999)-999-99-99",{placeholder:" "});
});
// галерея

function openModal(){
	$('.order').on('click', function(){
		var title = $(this).parent('li').find($('.title-shop'));
		var imgProduct = $(this).parent('li').find($('.img-tovar img'));
		$('.modal_order, .overlay').fadeIn(500);
		$('.content_modal').prepend(title.clone());
		$('.bg_product_modal').css({'background':'url("' + imgProduct.attr('src') + '") center', 'background-size':'cover'});
	});

	$('.close, .overlay').on('click', function(){
		$('body').css({'overflow':'auto', '-webkit-overflow-scrolling':'auto'});
		$('.modal_order, .modal_order_premium, .overlay').hide();
		$('.modal_order').find($('.title-shop')).remove();
		$('.modal_order_premium').find($('.title_premium h2')).remove();
	});

	$('.more_premium').on('click', function(){
			var premiumTitle = $(this).parent('.right_content_premium').find($('h2'));
			$('body').css({'overflow':'hidden', '-webkit-overflow-scrolling':'hidden'});
			$('.modal_order_premium, .overlay').fadeIn(500);
			$('.title_premium').prepend($('.right_content_premium h2').clone());
	});
}
openModal();

function openPolitika(){

	$('#politika').on('click', function(){
		$('.overlay').show();
		$('.politikas').show();
	});

	$('.overlay').on('click', function(){
		$('.overlay').hide();
		$('.politikas').hide();
	});	

	$('#otkaz').on('click', function(){
		$('.overlay').show();
		$('.otkaz').show();
	});

	$('.overlay').on('click', function(){
		$('.overlay').hide();
		$('.otkaz').hide();
	});

	$('#soglasie').on('click', function(){
		$('.overlay').show();
		$('.soglasie').show();
	});

	$('.overlay').on('click', function(){
		$('.overlay').hide();
		$('.soglasie').hide();
	});


}

openPolitika();

// конец галереии

});