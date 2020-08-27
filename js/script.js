$(document).ready(function(){
		$(window).scroll(function(){
			if($(window).scrollTop()>200)
			{
				$(".scrolltop").fadeIn();
			}
			else
			{
				$(".scrolltop").fadeOut();
			}

			$(".scrolltop").click(function(){
				$("html,body").animate({scrollTop:0},1000);
			});
		});
	});