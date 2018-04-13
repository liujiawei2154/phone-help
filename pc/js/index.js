$(function() {
	
	//回到顶部
	var topcontrol = $('#topcontrol');
	//导航栏对象
	var nav = $('.nav-wrap');
	//导航栏相对网页原点位置
	var navPos = nav.offset().top;
	//导航栏的实际高度
	var navHeight = nav.outerHeight();
	
	
	//滚动条事件
	$(window).scroll(function() {
		
		//获得滚动条的位置
		var sTop = $(window).scrollTop();
		
		//动态显示隐藏回到顶部按钮(超过两百像素显示)
		if (sTop >= 200) {
			topcontrol.fadeIn(300);
		}else {
			topcontrol.fadeOut(300);
			
		}
		//自动给导航栏添加fixed样式
		if (sTop >= navPos) {
			if (!nav.hasClass('fix')) {
				nav.addClass('fix');
				//banner下添加空白占位，保留原来导航栏的位置
				$('.banner').css('margin-bottom',navHeight);
				
			}
		} else {
			if (nav.hasClass('fix')) {
				nav.removeClass('fix');
				$('.banner').css('margin-bottom',0);
			}
		}
		//滚动监听导航自动高亮
//		function navActive(target) {
//			
//			//如果没有active样式
//			if( !$('target').hasClass('active') ) {
//				
//				$('.nav-wrap li').removeClass('active');//删除所有高亮样式
//				
//				$('target').addClass('active');//单独加高亮
//			}
//			
//		}
		
		//进入海量正版免费下区域导航自动高亮
		var introStart = $('#post-intro').offset().top - navHeight;
		var introEnd = $('#post-intro').offset().top + $('#post-intro').outerHeight() - navHeight;
		
		if(sTop >= introStart && sTop < introEnd) {
//			navActive('.intro');
			if ( !$('.intro').hasClass('active') ) {
			    $('.intro').addClass('active');
				
			}
		}else {
			if ( $('.intro').hasClass('active') ) {
			    $('.intro').removeClass('active');
				
			}
		}
		//进入无需账号密码区域导航自动高亮
		var usageStart = $('#post-usage').offset().top - navHeight;
		var usageEnd = $('#post-usage').offset().top + $('#post-usage').outerHeight() - navHeight;
		
		if(sTop >= usageStart && sTop < usageEnd) {
//			navActive('.intro');
			if ( !$('.usage').hasClass('active') ) {
			    $('.usage').removeClass('active');
				
			}
		}else {
			if ( $('.usage').hasClass('active') ) {
			    $('.usage').removeClass('active');
				
			}
		}
		//进入手机瘦身区域导航自动高亮
		var choiceStart = $('#choiceness').offset().top - navHeight;
		var choiceEnd = $('#choiceness').offset().top + $('#choiceness').outerHeight() - navHeight;
		
		if(sTop >= choiceStart && sTop < choiceEnd) {
//			navActive('.intro');
			if ( !$('.choice').hasClass('active') ) {
			    $('.choice').removeClass('active');
				
			}
		}else {
			if ( $('.choice').hasClass('active') ) {
			    $('.choice').removeClass('active');
				
			}
		}
		
		
		
	});
	
	//回到顶部的功能
	topcontrol.click(function() {
		
		$('html,body').animate({scrollTop:0},1000);
		
		
	});
	//网页锚点链接切换过渡
	$('.nav-wrap a').click(function() {
		
		//获得板块相对于网页原点的位置
		var top = $(this.hash).offset().top - navHeight + 7;
		
		$('html,body').animate({scrollTop:top},1000);
		
		return false;
		
	});
	
	
	
	
})
