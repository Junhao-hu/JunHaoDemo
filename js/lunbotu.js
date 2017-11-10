var i=0;
		var timer;
		$(function(){
			showTime();
			$('#img-anm li').hover(function(){
				i=$(this).index();
				show();
				clearInterval(timer);
			},function(){
				showTime();
			});
		});
		function show(){
			$('#img-anm li').eq(i).animate({mar}).siblings('#img-anm li').animate(300);
		};
		function showTime(){
			timer=setInterval(function(){
				show();
				i++;
				if (i==4) {
					i=0;
				};
			},2500);
		};
