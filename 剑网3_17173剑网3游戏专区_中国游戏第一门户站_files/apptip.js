!function(){function c(a){var b=document.getElementsByTagName("head").item(0),c=document.createElement("link");c.href=""+a,c.rel="stylesheet",c.type="text/css",b.appendChild(c)}function d(){c("http://ue.17173cdn.com/a/money/2014/app-tip/apptip.css");var a=document.createElement("div"),d=document.getElementsByClassName("ad-zhanneituiguang")[0],e=!1,f=location.host,g="http://a.17173.com/cms/rest/qr?id=A0011502540";d&&d.parentNode.removeChild(d),navigator.userAgent.indexOf("MicroMessenger")>-1&&(e=!0),a.id="app_tip_box",a.style.width="100%",a.style.bottom=0,a.style.left=0,a.style.zIndex=12e3,a.style.overflow="hidden",a.style.position="fixed";for(var h=0;h<b.length;h++)if(f.indexOf(b[h].d)>-1){g="http://a.17173.com/cms/rest/qr?id=A"+b[h].id;break}e?a.innerHTML='<a href="http://a.17173.com/m/index.htm"><span></span></a><span class="app-tip-close" id="app-tip-close"></span>':a.innerHTML='<a target="_blank" href="'+g+'"><span></span></a><span class="app-tip-close" id="app-tip-close"></span>',document.body.appendChild(a),document.getElementById("app-tip-close").addEventListener("click",function(){document.body.removeChild(document.getElementById("app_tip_box")),window.localStorage.setItem("tip_close_time",Math.floor((new Date).getTime()/1e3))})}function f(){var a=document.querySelectorAll("meta[name=viewport]");if(a.length){var b=a[0].getAttribute("content");c(b.indexOf("device-width")>-1?"http://ue.17173cdn.com/a/money/2014/app-tip/apptip_meta.css":"http://ue.17173cdn.com/a/money/2014/app-tip/apptip.css")}else{c("http://ue.17173cdn.com/a/money/2014/app-tip/apptip.css");var d=document.createElement("meta");d.setAttribute("name","viewport"),d.setAttribute("content","maximum-scale=1"),document.head.appendChild(d)}}var a=function(){for(var a=navigator.userAgent,b=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],c=!1,d=0;d<b.length;d++)if(a.indexOf(b[d])>-1){c=!0;break}return c}();if(a&&("undefined"==typeof _showApptip||_showApptip)){var b=[{d:"news.17173.com",id:"0011502170"},{d:"newgame.17173.com",id:"0011502180"},{d:"hao.17173.com",id:"0011502190"},{d:"bbs.17173.com",id:"0011502200"},{d:"shouyou.com",id:"0011502210"},{d:"yeyou.com",id:"0011502220"},{d:"dnf.17173.com",id:"0011502530"},{d:"lol.17173.com",id:"0011502530"},{d:"cf.17173.com",id:"0011502530"},{d:"xyq.17173.com",id:"0011502530"},{d:"bns.17173.com",id:"0011502530"},{d:"wow.17173.com",id:"0011502530"},{d:"tl.17173.com",id:"0011502530"},{d:"hs.17173.com",id:"0011502530"},{d:"dota2.17173.com",id:"0011502530"},{d:"jx3.17173.com",id:"0011502530"}];if(location.host.indexOf("m.shouyou.com")<0&&location.host.indexOf("m.17173.com")<0&&location.host.indexOf("cha.17173.com")<0)d();else if(location.host.indexOf("cha.17173.com")>-1){var e=window.localStorage.getItem("tip_close_time");(null===e||(new Date).getTime()/1e3-e>7200)&&d()}f()}}();