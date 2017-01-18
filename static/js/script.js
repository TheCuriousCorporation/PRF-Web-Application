$(document).ready(function() {
	/* Swiper Slider Home Page */
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true
    });
	/* Scroll anchor animate */
	$('.nav a[href^="#"]').click(function(){
        var target = $(this).attr('href');
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + -50 + "px"
        }, {
            duration: 500
        });
        return false; 
   }); 
	
});



