!function(t){var e={};function a(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=1)}([function(t,e,a){"use strict";var n=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}();var o=window,s=Math;function i(t){return s.random()*t}var r=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.timer=null,this.arr=[],this.index=0}return n(t,[{key:"to",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this.arr.push({fn:t,time:e}),this}},{key:"start",value:function(){var t=this;t.over||(t.pause(),t.timer=setTimeout(function(){requestAnimationFrame(t.arr[t.index].fn),t.index++,t.index===t.arr.length?(t.over=!0,t.pause()):t.start()},t.arr[t.index].time))}},{key:"pause",value:function(){clearTimeout(this.timer)}}]),t}(),c={view:{w:$(o).width(),h:$(o).height()},move:function(t){clearTimeout(a);var e=[],a=null;t.each(function(t,a){e.push($(a)),$(a).bind("animationEnd webkitAnimationEnd",i)});var n=e.length,o=null,s="";function i(){$(this).removeClass($(this).prop("csName")).prop("isAnimated",!1)}return{start:function t(){for(clearTimeout(a),o=e[Math.floor(Math.random()*n)];o.prop("isAnimated");)o=e[Math.floor(Math.random()*n)];o.prop("isAnimated",!0),Math.random()>.5?(s="left t"+Math.ceil(8*Math.random())+" bl"+Math.ceil(8*Math.random()),o.addClass(s).prop("csName",s)):(s="right t"+Math.ceil(8*Math.random())+" br"+Math.ceil(9*Math.random()),o.addClass(s).prop("csName",s)),a=setTimeout(function(){requestAnimationFrame(t)},4e3)},pause:function(){clearTimeout(a),t.each(function(t,e){$(e).prop("isAnimated")&&$(e).removeClass($(e).prop("csName")).prop("isAnimated",!1)})}}},timeout:r,hash:function(t){if(!t){var e=[o.location.hash,0],a=e[0],n=e[1];if(a=a.substr(1,a.length),a){switch(a){case"page1":n=0;break;case"page2":n=1;break;case"page3":n=2;break;case"page4":n=3;break;case"page5":n=4;break;default:a="page1",n=0}return n}return window.location.hash="page1",0}o.location.hash="page1"===t||"page2"===t||"page3"===t||"page4"===t||"page5"===t?t:"page1"},canvas:function(t){var e=this,a=null,n=t.el,o=n[0].getContext("2d");n.attr("width",e.view.w),n.attr("height",e.view.h);var r=[],c=t.len;function l(){clearTimeout(a),o.clearRect(0,0,n.attr("width"),n.attr("height")),o.fillStyle="#fff";for(var i=0;i<c;i++)"down"===t.dir&&(r[i].y+=r[i].speedY,r[i].y>e.view.h-150&&(r[i].y=0)),"up"===t.dir&&(r[i].y-=r[i].speedY,r[i].y<0&&(r[i].y=e.view.h+r[i].r)),r[i].num--,-360===r[i].num&&(r[i].num=0),r[i].x=r[i].startX-r[i].range*s.sin(s.PI/180*r[i].num),o.beginPath(),o.arc(r[i].x,r[i].y,r[i].r,0,2*s.PI),o.fill(),o.closePath();a=requestAnimationFrame(l)}return function(){o.clearRect(0,0,n.attr("width"),n.attr("height")),r=[];for(var t=0;t<c;t++){var a=i(e.view.w);r.push({x:a,y:i(e.view.h),speedY:i(6)+1,r:i(5),startX:a,num:0,range:i(200)})}}(),l(),{start:function(){cancelAnimationFrame(a),requestAnimationFrame(l)},pause:function(){cancelAnimationFrame(a)}}}};t.exports=c},function(t,e,a){"use strict";a(2),a(10),a(18),a(20),a(25),a(3)},function(t,e,a){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(t){$.fn.extend({onScroll:function(t){var e=null,a=void 0,n=void 0;return $(this).bind("mousewheel || DOMMouseScroll",function(o){a=o.originalEvent.wheelDelta,n=o.originalEvent.detail,e=a?a<0:!(n<0),t&&t(e,o)}),$(this)},tf:function(t,e){if(o=t,"object"===(void 0===o?"undefined":n(o))&&"[object object]"==Object.prototype.toString.call(o).toLowerCase()&&!o.length)for(var a in t)$(this).tf(a,t[a]);var o;var s=$(this)[0];s.data||(s.data={});void 0===s.tf&&(s.tf="");if(void 0===e)return s.data[t];var i="",r="";switch(t){case"x":i="translateX",r="px";break;case"y":i="translateY",r="px";break;case"z":i="translateZ",r="px";break;case"skew":i="skew",r="deg";break;case"skewX":i="skewX",r="deg";break;case"skewY":i="skewY",r="deg";break;case"rotate":i="rotate",r="deg";break;case"rotateX":i="rotateX",r="deg";break;case"rotateY":i="rotateY",r="deg";break;case"scale":i="scale",r="";break;case"scaleX":i="scaleX",r="";break;case"scaleY":i="scaleX",r=""}"%"!==(e+="").charAt(e.length-1)&&(e=parseFloat(e));!function(){var a=i+"("+e+r+")";if(s.data[t]){for(var n=s.tf.split(" "),o=0;o<n.length;o++)-1!=n[o].indexOf(i)&&(n[o]=a);s.tf=n.join(" ")}else s.tf+=a+" ";s.style.transform=s.style.WebkitTransform=s.style.MozTransform=s.style.OTransform=s.style.MsTransform=s.tf,s.data[t]=e}()}}),t.requestAnimationFrame=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.msRequestAnimationFrame,t.cancelAnimationFrame=t.cancelAnimationFrame||t.mozCancelAnimationFrame||t.msCancelAnimationFrame}(window)},function(t,e,a){"use strict";var n=$(".nav-a"),o=0,s=0,i=!0,r=[];var c=$(".page"),l=$("#swiper-box"),u=c.length;function d(){o>=u&&(o=0),o<0&&(o=u-1),o!==s&&(r[s].pause(),n.eq(s).removeClass("hover"),n.eq(o).addClass("hover"),l[0].className="page"+o)}a(9)(function(){l.onScroll(function(t){i&&(i=!1,t?o++:o--,d())})[0].className="page"+o,n.click(function(){i&&(i=!1,o=n.index($(this)),d())}),l.bind("transitionend webkitTransitionend",function(t){t.target===this&&(r[o]||(r[o]=function(t){switch(t){case 0:return a(4);case 1:return a(5);case 2:return a(6);case 3:return a(7);case 4:return a(8)}}(o)),r[o].start(),s=o,i=!0)})})},function(t,e,a){"use strict";var n=$("#pageFirst"),o=$("#car-wrapper"),s=$("#car-box"),i=$("#car-body"),r=s.find(".mainLuntai"),c=$("#manBox1"),l=c.find(".man:first"),u=$("#dialog1"),d=$("#arrow-down"),f=a(0),m=f.move($(".car")),p=new f.timeout;p.to(function(){n.addClass("light"),r.addClass("rotate"),i.addClass("shake"),o.addClass("ac")}).to(function(){r.removeClass("rotate"),i.removeClass("shake")},2e3).to(function(){l.removeClass("bp2").addClass("bp1"),c.addClass("jump")},200).to(function(){c.removeClass("jump").addClass("down")},500).to(function(){l.removeClass("bp1").addClass("bp2"),r.addClass("rotate"),i.addClass("shake")},500).to(function(){s.addClass("ac")},500).to(function(){u.addClass("ac"),d.addClass("ac")},300).to(function(){s.remove()},1700),t.exports={start:function(){m.start(),p.start()},pause:function(){m.pause(),p.pause()}}},function(t,e,a){"use strict";var n=$("#skill-box"),o=n.find(".honeybee-title"),s=n.find(".honeybee"),i=n.find(".honeybee-box"),r=$("#chair"),c=null,l=0,u=$("#manBox2"),d=u[0],f=u.find(".man:first"),m=$("#boat-box"),p=$("#stick"),v=$("#air-balloon"),b=-76,h=-50;s.hover(function(){$(this).removeClass("jello").addClass("rubberBand animated")},function(){$(this).removeClass("rubberBand animated")}),o.hover(function(){$(this).removeClass("jello").addClass("rubberBand animated")},function(){$(this).removeClass("rubberBand animated")});var C=new(a(0).timeout);function g(){c.addClass("jello animated"),i.eq(l).addClass("ac")}function y(t){f.toggleClass("bp3 bp4"),p.addClass("beat"),requestAnimationFrame(g)}function w(){d.style.cssText="left: "+(c.offset().left+b)+"px; top: "+(c.offset().top+h)+"px;"}function x(t){l=t,f.toggleClass("bp4 bp3"),p.removeClass("beat"),c=s.eq(t),requestAnimationFrame(w)}v.removeClass("pause"),C.to(function(){o.addClass("ac"),s.addClass("ac")}).to(function(){u.addClass("ac")},300).to(function(){f.toggleClass("bp5 bp6"),c=s.eq(0),u.addClass("ts1"),requestAnimationFrame(w),m.remove()},1200).to(function(){f.toggleClass("bp6 bp3"),p.addClass("ac")},300).to(function(){p.removeClass("ts"),y()},550).to(function(){x(4)},100).to(function(){y()},300).to(function(){x(1)},100).to(function(){y()},300).to(function(){x(5)},100).to(function(){y()},300).to(function(){x(2)},100).to(function(){y()},300).to(function(){x(6)},100).to(function(){y()},300).to(function(){x(3)},100).to(function(){y()},300).to(function(){x(7)},100).to(function(){y()},300).to(function(){f.toggleClass("bp4 bp6"),p.removeClass("ac"),d.style.cssText="left: "+(r.offset().left-115)+"px; top: "+(r.offset().top+35)+"px;"},300).to(function(){f.toggleClass("bp6 bp8"),$("#dialog2").addClass("ac")},300),t.exports={start:function(){C.start(),v.removeClass("pause")},pause:function(){v.addClass("pause"),C.pause()}}},function(t,e,a){"use strict";var n=$("#experience");n.onScroll(function(t,e){n[0].offsetHeight<n[0].scrollHeight&&e.stopPropagation()});var o=$(".ex-date-num"),s=$(".ex-des"),i=$("#submarine-box"),r=a(0).canvas({el:$("#water-canvas"),dir:"up",len:20});o.addClass("ac"),s.addClass("ac"),i.addClass("ac"),t.exports=r},function(t,e,a){"use strict";var n,o,s,i,r=a(0);n=$(".sign-wrapper"),o=$(".sign-box"),s=$(".work-box"),i=null,n.each(function(t,e){i=$(e),function(t){i.hover(function(){o.eq(t).removeClass("delay ac"),s.eq(t).addClass("delay ac")},function(){s.eq(t).removeClass("delay ac"),o.eq(t).addClass("delay ac")})}(t)});var c=$("#manBox3"),l=c.find(".man:first"),u=r.canvas({el:$("#snow-canvas"),dir:"down",len:50}),d=new r.timeout,f=$(".work-item"),m=$("#word-box");d.to(function(){f.addClass("ac")}).to(function(){m.addClass("ac")},500).to(function(){c[0].style.cssText="left:"+($("#work-box").offset().left-145)+"px; bottom:28%;"},50).to(function(){l.addClass("bp7")},1e3),t.exports={start:function(){d.start(),u.start()},pause:function(){d.pause(),u.pause()}}},function(t,e,a){"use strict";var n=$("#plane-box"),o=$(".contact-item"),s=$(".cube"),i=$("#manBox5"),r=i.find(".man:first"),c=$(".parachute"),l=a(0),u=l.move($(".boat")),d=new l.timeout;d.to(function(){n.addClass("ac"),i.addClass("ac"),o.addClass("ac")}).to(function(){c.addClass("hide"),s.addClass("ac"),r.addClass("bp8"),n.remove()},2e3),t.exports={start:function(){u.start(),d.start()},pause:function(){u.pause(),d.pause()}}},function(t,e,a){"use strict";t.exports=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},e=$("body:first"),n=$("#pageFirst"),o=$("#logo"),s=$(".nav-a"),i=$('<div id="ball" class="ballShake">100%</div>'),r=$('<div id="bg1" class="bg"></div>'),c=$('<div id="bg2" class="bg"></div>');e.append(i,r,c);var l=$(".bg");$(".page").not("#pageThird").append('\n        <div class="bird"></div>\n        <div class="cloud cloud1"></div>\n        <div class="cloud cloud2"></div>\n        <div class="cloud cloud3"></div>\n        <div class="cloud cloud4"></div>\n        <div class="cloud cloud5"></div>\n        <div class="sun"></div>\n  ');var u=$(".sun");$("#birdHid").remove(),(new(a(0).timeout)).to(function(){i.removeClass("ballShake")},500).to(function(){i.text("").addClass("ac")},30).to(function(){l.addClass("ac"),n.addClass("show")},550).to(function(){i.remove(),r.addClass("lift"),c.addClass("lift")},100).to(t).to(function(){o.addClass("ac"),s.addClass("ac"),u.addClass("ac")},200).to(function(){l.remove(),u.addClass("sunRotate")},1200).start(),o.hover(function(){$(this).addClass("rubberBand")},function(){$(this).removeClass("rubberBand")})}},function(t,e){},,,,,,,,function(t,e){},,function(t,e){},,,,,function(t,e){}]);