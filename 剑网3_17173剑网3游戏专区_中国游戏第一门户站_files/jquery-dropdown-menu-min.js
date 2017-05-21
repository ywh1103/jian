/**
 * Name: dw-tools v.1.0
 * Date: 2012-08-09
 * Version: 1.0
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 * 
 * Author:bsky1wcj
 * Mail:10877098@qq.com
 * Tel:13405967686
 * 
 * 
 * 
 */ 
(function(a){a.fn.dropdownMenu=function(b){var c={dropdownGroup:".dropdown-group",dropdownToggle:".dropdown-toggle",dropdownMenu:".dropdown-menu",event:"click",currentCss:"current"};var b=a.extend({},c,b);return this.each(function(){var g,e,h;h=a(this);g=a(this).find(b.dropdownToggle);e=a(this).find(b.dropdownMenu);if(b.event=="click"){g.click(function(i){d(i)});h.hover(function(){},function(){f()})}else{g.hover(function(i){f();d(i)},function(){f()});e.hover(function(i){f();d(i)},function(){f()})}function d(i){i.stopPropagation();if(g.hasClass(b.currentCss)){g.removeClass(b.currentCss);e.hide()}else{e.show();g.addClass(b.currentCss)}if(e.is(":visible")){h.css("z-index",999992)}}function f(){h.css("z-index",1);g.removeClass(b.currentCss);e.hide()}a(document).click(function(i){f()})})}})(jQuery);