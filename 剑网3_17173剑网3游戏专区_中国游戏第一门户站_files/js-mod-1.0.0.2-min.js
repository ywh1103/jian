/**
rely on:
<script type="text/javascript" src="http://ue8.17173.itc.cn/cache/lib/v1/load-1.0_utils-1.0_jquery-1.4.min.js"></script>
<script type="text/javascript" src="http://ue8.17173.itc.cn/cache/lib/v1/jquery.tools-1.2/tabs.all.min.js"></script>
<script type="text/javascript" src="http://ue8.17173.itc.cn/cache/lib/v1/jquery.tools-1.2/scrollable.all.min.js"></script>
*/
	//jQuery.noConflict();
	$(document).ready(function()
    {
		
		//tab
		if($('.js-tab').length>0 || $('.js-tab-click').length>0 || $('.js-tab-auto').length>0)
		{
			$(".js-tab").each(function(){
				$(".mod-tab",$(this)).tabs($("div.mod-panes > div",$(this)),{event:'mouseover'});
			});	
			
			$(".js-tab-click").each(function(){
				$(".mod-tab",$(this)).tabs($("div.mod-panes > div",$(this)),{event:'click'});
			});	
			
			$(".js-tab-auto").each(function(){
				$(".mod-tab",$(this)).tabs($("div.mod-panes > div",$(this)),{event:'mouseover',fadeOutSpeed: "slow",rotate: true}).slideshow().data("slideshow").play();
			});	
		}
		
		//scrollable
		if($('.js-scrollable-auto').length>0 || $('.js-scrollable').length>0 || $('.js-scrollable-vertical-auto').length>0 || $('.js-scrollable-vertical').length>0)
		{
			$(".js-scrollable-auto").scrollable({
				circular: true,
				next: '.next',   
				prev: '.prev'
			}).autoscroll({autoplay: true, interval: 3000}); 
			
			$(".js-scrollable").scrollable({
				circular: true,
				next: '.next',   
				prev: '.prev'
			}).autoscroll({autoplay: false, interval: 3000}); 
			
			
			$(".js-scrollable-vertical-auto").scrollable({
				circular: true,
				vertical: true,
				next: '.next',   
				prev: '.prev'			
			}).autoscroll({autoplay: true, interval: 3000}); 
			
			$(".js-scrollable-vertical").scrollable({
				circular: true,
				vertical: true,
				next: '.next',   
				prev: '.prev'			
			}).autoscroll({autoplay: false, interval: 3000}); 			
		}

		
		
		//li mouseover effects						
		$(".js-hover").each(function(){
			$(this).children().each(function(){
				$(this).hover(
				  function () {
					$(this).addClass("hover");
				  },
				  function () {
					$(this).removeClass("hover");
				  }
				);
			});	
		});
		
		
		//odd style
		$(".js-odd").each(function(){
			$(this).children(":odd").addClass("odd");	
		});
		
		//even style
		$(".js-even").each(function(){
			$(this).children(":even").addClass("even");	
		});
		
		//odd and even style
		$(".js-odd-even").each(function(){
			$(this).children(":odd").addClass("odd");
			$(this).children(":even").addClass("even");	
		});
		
		//add ranking style
		$(".js-ranking").each(function(){
			
			var num=1;
			$("li",$(this)).each(function(i){
				i=i+1;
				num=i;
				$(this).find('.num').text(num);
				$(this).addClass("top"+num);
			
			});	
		});
		
		$(".js-first").each(function(){
			$(this).children(":first").addClass("first");	
		});

		$(".js-last").each(function(){
			$(this).children(":last").addClass("last");	
		});

    });