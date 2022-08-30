!function(e,t,i,o){"use strict";function n(t,i,o){if(this.element=e(t),this._defaults=a,this._name=r,"string"==typeof i&&(i=l(i)),o?"string"==typeof o&&(o=l(o)):o={},"string"==typeof i)i=i.replace(/\.\w*$/,"");else if("object"==typeof i)for(var n in i)i.hasOwnProperty(n)&&(i[n]=i[n].replace(/\.\w*$/,""));this.settings=e.extend({},a,o),this.path=i,this.init()}var r="vide",a={volume:1,playbackRate:1,muted:!0,loop:!0,autoplay:!0,position:"50% 50%",posterType:"detect"},s=/iPad|iPhone|iPod/i.test(o.userAgent),c=/Android/i.test(o.userAgent);e[r]={lookup:[]};var l=function(e){var t,i={};t=e.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,",").split(",");var o,n,r,a,s;for(o=0,n=t.length;n>o&&-1!==t[o].replace(/^(http|https|ftp):\/\//,"").search(":");o++)s=t[o].indexOf(":"),r=t[o].substring(0,s),a=t[o].substring(s+1),a||(a=void 0),"string"==typeof a&&(a="true"===a||"false"!==a&&a),"string"==typeof a&&(a=isNaN(a)?a:+a),i[r]=a;return null==r&&null==a?e:i},p=function(e){e=""+e;for(var t,i=e.split(/\s+/),o="50%",n="50%",r=0,a=i.length;a>r;r++)t=i[r],"left"===t?o="0%":"right"===t?o="100%":"top"===t?n="0%":"bottom"===t?n="100%":"center"===t?0===r?o="50%":n="50%":0===r?o=t:n=t;return{x:o,y:n}},d=function(t,i){var o=function(){i(this.src)};e("<img src='"+t+".gif'>").load(o),e("<img src='"+t+".jpg'>").load(o),e("<img src='"+t+".jpeg'>").load(o),e("<img src='"+t+".png'>").load(o)};n.prototype.init=function(){var t=this;this.wrapper=e("<div>");var i=p(this.settings.position);this.wrapper.css({position:"absolute","z-index":-1,top:0,left:0,bottom:0,right:0,overflow:"hidden","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","background-repeat":"no-repeat","background-position":i.x+" "+i.y});var o=this.path;if("object"==typeof this.path&&(this.path.poster?o=this.path.poster:this.path.mp4?o=this.path.mp4:this.path.webm?o=this.path.webm:this.path.ogv&&(o=this.path.ogv)),"detect"===this.settings.posterType?d(o,function(e){t.wrapper.css("background-image","url("+e+")")}):"none"!==this.settings.posterType&&this.wrapper.css("background-image","url("+o+"."+this.settings.posterType+")"),"static"===this.element.css("position")&&this.element.css("position","relative"),this.element.prepend(this.wrapper),!s&&!c){if("object"==typeof this.path){var n="";this.path.mp4&&(n+="<source src='"+this.path.mp4+".mp4' type='video/mp4'>"),this.path.webm&&(n+="<source src='"+this.path.webm+".webm' type='video/webm'>"),this.path.ogv&&(n+="<source src='"+this.path.ogv+".ogv' type='video/ogv'>"),this.video=e("<video>"+n+"</video>")}else this.video=e("<video><source src='"+this.path+".mp4' type='video/mp4'><source src='"+this.path+".webm' type='video/webm'><source src='"+this.path+".ogv' type='video/ogg'></video>");this.video.css("visibility","hidden"),this.video.prop({autoplay:this.settings.autoplay,loop:this.settings.loop,volume:this.settings.volume,muted:this.settings.muted,playbackRate:this.settings.playbackRate}),this.wrapper.append(this.video),this.video.css({margin:"auto",position:"absolute","z-index":-1,top:i.y,left:i.x,"-webkit-transform":"translate(-"+i.x+", -"+i.y+")","-ms-transform":"translate(-"+i.x+", -"+i.y+")",transform:"translate(-"+i.x+", -"+i.y+")"}),this.video.bind("loadedmetadata."+r,function(){t.video.css("visibility","visible"),t.resize()}),e(this.element).bind("resize."+r,function(){t.resize()})}},n.prototype.getVideoObject=function(){return this.video?this.video[0]:null},n.prototype.resize=function(){if(this.video){var e=this.video[0].videoHeight,t=this.video[0].videoWidth,i=this.wrapper.height(),o=this.wrapper.width();this.video.css(o/t>i/e?{width:o+2,height:"auto"}:{width:"auto",height:i+2})}},n.prototype.destroy=function(){this.element.unbind(r),this.video&&this.video.unbind(r),delete e[r].lookup[this.index],this.element.removeData(r),this.wrapper.remove()},e.fn[r]=function(t,i){var o;return this.each(function(){o=e.data(this,r),o&&o.destroy(),o=new n(this,t,i),o.index=e[r].lookup.push(o)-1,e.data(this,r,o)}),this},e(i).ready(function(){e(t).bind("resize."+r,function(){for(var t,i=e[r].lookup.length,o=0;i>o;o++)(t=e[r].lookup[o])&&t.resize()}),e(i).find("[data-"+r+"-bg]").each(function(t,i){var o=e(i),n=o.data(r+"-options"),a=o.data(r+"-bg");o[r](a,n)})})}(window.jQuery,window,document,navigator),/*! Magnific Popup - v0.9.9 - 2014-09-06
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2014 Dmitry Semenov; */
function(e){var t,i,o,n,r,a,s,c="Close",l="BeforeClose",p="MarkupParse",d="Open",u="Change",f="mfp",m="."+f,g="mfp-ready",h="mfp-removing",v="mfp-prevent-close",y=function(){},w=!!window.jQuery,b=e(window),C=function(e,i){t.ev.on(f+e+m,i)},k=function(t,i,o,n){var r=document.createElement("div");return r.className="mfp-"+t,o&&(r.innerHTML=o),n?i&&i.appendChild(r):(r=e(r),i&&r.appendTo(i)),r},I=function(i,o){t.ev.triggerHandler(f+i,o),t.st.callbacks&&(i=i.charAt(0).toLowerCase()+i.slice(1),t.st.callbacks[i]&&t.st.callbacks[i].apply(t,e.isArray(o)?o:[o]))},x=function(i){return i===s&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),s=i),t.currTemplate.closeBtn},T=function(){e.magnificPopup.instance||(t=new y,t.init(),e.magnificPopup.instance=t)},z=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1};y.prototype={constructor:y,init:function(){var i=navigator.appVersion;t.isIE7=-1!==i.indexOf("MSIE 7."),t.isIE8=-1!==i.indexOf("MSIE 8."),t.isLowIE=t.isIE7||t.isIE8,t.isAndroid=/android/gi.test(i),t.isIOS=/iphone|ipad|ipod/gi.test(i),t.supportsTransition=z(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),n=e(document),t.popupsCache={}},open:function(i){o||(o=e(document.body));var r;if(!1===i.isObj){t.items=i.items.toArray(),t.index=0;var s,c=i.items;for(r=0;c.length>r;r++)if(s=c[r],s.parsed&&(s=s.el[0]),s===i.el[0]){t.index=r;break}}else t.items=e.isArray(i.items)?i.items:[i.items],t.index=i.index||0;if(t.isOpen)return void t.updateItemHTML();t.types=[],a="",t.ev=i.mainEl&&i.mainEl.length?i.mainEl.eq(0):n,i.key?(t.popupsCache[i.key]||(t.popupsCache[i.key]={}),t.currTemplate=t.popupsCache[i.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,i),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=k("bg").on("click"+m,function(){t.close()}),t.wrap=k("wrap").attr("tabindex",-1).on("click"+m,function(e){t._checkIfClose(e.target)&&t.close()}),t.container=k("container",t.wrap)),t.contentContainer=k("content"),t.st.preloader&&(t.preloader=k("preloader",t.container,t.st.tLoading));var l=e.magnificPopup.modules;for(r=0;l.length>r;r++){var u=l[r];u=u.charAt(0).toUpperCase()+u.slice(1),t["init"+u].call(t)}I("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(C(p,function(e,t,i,o){i.close_replaceWith=x(o.type)}),a+=" mfp-close-btn-in"):t.wrap.append(x())),t.st.alignTop&&(a+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:b.scrollTop(),position:"absolute"}),(!1===t.st.fixedBgPos||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:n.height(),position:"absolute"}),t.st.enableEscapeKey&&n.on("keyup"+m,function(e){27===e.keyCode&&t.close()}),b.on("resize"+m,function(){t.updateSize()}),t.st.closeOnContentClick||(a+=" mfp-auto-cursor"),a&&t.wrap.addClass(a);var f=t.wH=b.height(),h={};if(t.fixedContentPos&&t._hasScrollBar(f)){var v=t._getScrollbarSize();v&&(h.marginRight=v)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):h.overflow="hidden");var y=t.st.mainClass;return t.isIE7&&(y+=" mfp-ie7"),y&&t._addClassToMFP(y),t.updateItemHTML(),I("BuildControls"),e("html").css(h),t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo||o),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP(g),t._setFocus()):t.bgOverlay.addClass(g),n.on("focusin"+m,t._onFocusIn)},16),t.isOpen=!0,t.updateSize(f),I(d),i},close:function(){t.isOpen&&(I(l),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP(h),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){I(c);var i=h+" "+g+" ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(i+=t.st.mainClass+" "),t._removeClassFromMFP(i),t.fixedContentPos){var o={marginRight:""};t.isIE7?e("body, html").css("overflow",""):o.overflow="",e("html").css(o)}n.off("keyup"+m+" focusin"+m),t.ev.off(m),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&!0!==t.currTemplate[t.currItem.type]||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,I("AfterClose")},updateSize:function(e){if(t.isIOS){var i=document.documentElement.clientWidth/window.innerWidth,o=window.innerHeight*i;t.wrap.css("height",o),t.wH=o}else t.wH=e||b.height();t.fixedContentPos||t.wrap.css("height",t.wH),I("Resize")},updateItemHTML:function(){var i=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),i.parsed||(i=t.parseEl(t.index));var o=i.type;if(I("BeforeChange",[t.currItem?t.currItem.type:"",o]),t.currItem=i,!t.currTemplate[o]){var n=!!t.st[o]&&t.st[o].markup;I("FirstMarkupParse",n),t.currTemplate[o]=!n||e(n)}r&&r!==i.type&&t.container.removeClass("mfp-"+r+"-holder");var a=t["get"+o.charAt(0).toUpperCase()+o.slice(1)](i,t.currTemplate[o]);t.appendContent(a,o),i.preloaded=!0,I(u,i),r=i.type,t.container.prepend(t.contentContainer),I("AfterChange")},appendContent:function(e,i){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&!0===t.currTemplate[i]?t.content.find(".mfp-close").length||t.content.append(x()):t.content=e:t.content="",I("BeforeAppend"),t.container.addClass("mfp-"+i+"-holder"),t.contentContainer.append(t.content)},parseEl:function(i){var o,n=t.items[i];if(n.tagName?n={el:e(n)}:(o=n.type,n={data:n,src:n.src}),n.el){for(var r=t.types,a=0;r.length>a;a++)if(n.el.hasClass("mfp-"+r[a])){o=r[a];break}n.src=n.el.attr("data-mfp-src"),n.src||(n.src=n.el.attr("href"))}return n.type=o||t.st.type||"inline",n.index=i,n.parsed=!0,t.items[i]=n,I("ElementParse",n),t.items[i]},addGroup:function(e,i){var o=function(o){o.mfpEl=this,t._openClick(o,e,i)};i||(i={});var n="click.magnificPopup";i.mainEl=e,i.items?(i.isObj=!0,e.off(n).on(n,o)):(i.isObj=!1,i.delegate?e.off(n).on(n,i.delegate,o):(i.items=e,e.off(n).on(n,o)))},_openClick:function(i,o,n){if((void 0!==n.midClick?n.midClick:e.magnificPopup.defaults.midClick)||2!==i.which&&!i.ctrlKey&&!i.metaKey){var r=void 0!==n.disableOn?n.disableOn:e.magnificPopup.defaults.disableOn;if(r)if(e.isFunction(r)){if(!r.call(t))return!0}else if(r>b.width())return!0;i.type&&(i.preventDefault(),t.isOpen&&i.stopPropagation()),n.el=e(i.mfpEl),n.delegate&&(n.items=o.find(n.delegate)),t.open(n)}},updateStatus:function(e,o){if(t.preloader){i!==e&&t.container.removeClass("mfp-s-"+i),o||"loading"!==e||(o=t.st.tLoading);var n={status:e,text:o};I("UpdateStatus",n),e=n.status,o=n.text,t.preloader.html(o),t.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),t.container.addClass("mfp-s-"+e),i=e}},_checkIfClose:function(i){if(!e(i).hasClass(v)){var o=t.st.closeOnContentClick,n=t.st.closeOnBgClick;if(o&&n)return!0;if(!t.content||e(i).hasClass("mfp-close")||t.preloader&&i===t.preloader[0])return!0;if(i===t.content[0]||e.contains(t.content[0],i)){if(o)return!0}else if(n&&e.contains(document,i))return!0;return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?n.height():document.body.scrollHeight)>(e||b.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(i){return i.target===t.wrap[0]||e.contains(t.wrap[0],i.target)?void 0:(t._setFocus(),!1)},_parseMarkup:function(t,i,o){var n;o.data&&(i=e.extend(o.data,i)),I(p,[t,i,o]),e.each(i,function(e,i){if(void 0===i||!1===i)return!0;if(n=e.split("_"),n.length>1){var o=t.find(m+"-"+n[0]);if(o.length>0){var r=n[1];"replaceWith"===r?o[0]!==i[0]&&o.replaceWith(i):"img"===r?o.is("img")?o.attr("src",i):o.replaceWith('<img src="'+i+'" class="'+o.attr("class")+'" />'):o.attr(n[1],i)}}else t.find(m+"-"+e).html(i)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:y.prototype,modules:[],open:function(t,i){return T(),t=t?e.extend(!0,{},t):{},t.isObj=!0,t.index=i||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,i){i.options&&(e.magnificPopup.defaults[t]=i.options),e.extend(this.proto,i.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},e.fn.magnificPopup=function(i){T();var o=e(this);if("string"==typeof i)if("open"===i){var n,r=w?o.data("magnificPopup"):o[0].magnificPopup,a=parseInt(arguments[1],10)||0;r.items?n=r.items[a]:(n=o,r.delegate&&(n=n.find(r.delegate)),n=n.eq(a)),t._openClick({mfpEl:n},o,r)}else t.isOpen&&t[i].apply(t,Array.prototype.slice.call(arguments,1));else i=e.extend(!0,{},i),w?o.data("magnificPopup",i):o[0].magnificPopup=i,t.addGroup(o,i);return o};var _,E,P,S="inline",O=function(){P&&(E.after(P.addClass(_)).detach(),P=null)};e.magnificPopup.registerModule(S,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push(S),C(c+"."+S,function(){O()})},getInline:function(i,o){if(O(),i.src){var n=t.st.inline,r=e(i.src);if(r.length){var a=r[0].parentNode;a&&a.tagName&&(E||(_=n.hiddenClass,E=k(_),_="mfp-"+_),P=r.after(E).detach().removeClass(_)),t.updateStatus("ready")}else t.updateStatus("error",n.tNotFound),r=e("<div>");return i.inlineElement=r,r}return t.updateStatus("ready"),t._parseMarkup(o,{},i),o}}});var M,B="ajax",F=function(){M&&o.removeClass(M)},A=function(){F(),t.req&&t.req.abort()};e.magnificPopup.registerModule(B,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push(B),M=t.st.ajax.cursor,C(c+"."+B,A),C("BeforeChange."+B,A)},getAjax:function(i){M&&o.addClass(M),t.updateStatus("loading");var n=e.extend({url:i.src,success:function(o,n,r){var a={data:o,xhr:r};I("ParseAjax",a),t.appendContent(e(a.data),B),i.finished=!0,F(),t._setFocus(),setTimeout(function(){t.wrap.addClass(g)},16),t.updateStatus("ready"),I("AjaxContentAdded")},error:function(){F(),i.finished=i.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",i.src))}},t.st.ajax.settings);return t.req=e.ajax(n),""}}});var H,L=function(i){if(i.data&&void 0!==i.data.title)return i.data.title;var o=t.st.image.titleSrc;if(o){if(e.isFunction(o))return o.call(t,i);if(i.el)return i.el.attr(o)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var e=t.st.image,i=".image";t.types.push("image"),C(d+i,function(){"image"===t.currItem.type&&e.cursor&&o.addClass(e.cursor)}),C(c+i,function(){e.cursor&&o.removeClass(e.cursor),b.off("resize"+m)}),C("Resize"+i,t.resizeImage),t.isLowIE&&C("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e&&e.img&&t.st.image.verticalFit){var i=0;t.isLowIE&&(i=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-i)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,H&&clearInterval(H),e.isCheckingImgSize=!1,I("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var i=0,o=e.img[0],n=function(r){H&&clearInterval(H),H=setInterval(function(){return o.naturalWidth>0?void t._onImageHasSize(e):(i>200&&clearInterval(H),i++,void(3===i?n(10):40===i?n(50):100===i&&n(500)))},r)};n(1)},getImage:function(i,o){var n=0,r=function(){i&&(i.img[0].complete?(i.img.off(".mfploader"),i===t.currItem&&(t._onImageHasSize(i),t.updateStatus("ready")),i.hasSize=!0,i.loaded=!0,I("ImageLoadComplete")):(n++,200>n?setTimeout(r,100):a()))},a=function(){i&&(i.img.off(".mfploader"),i===t.currItem&&(t._onImageHasSize(i),t.updateStatus("error",s.tError.replace("%url%",i.src))),i.hasSize=!0,i.loaded=!0,i.loadError=!0)},s=t.st.image,c=o.find(".mfp-img");if(c.length){var l=document.createElement("img");l.className="mfp-img",i.img=e(l).on("load.mfploader",r).on("error.mfploader",a),l.src=i.src,c.is("img")&&(i.img=i.img.clone()),l=i.img[0],l.naturalWidth>0?i.hasSize=!0:l.width||(i.hasSize=!1)}return t._parseMarkup(o,{title:L(i),img_replaceWith:i.img},i),t.resizeImage(),i.hasSize?(H&&clearInterval(H),i.loadError?(o.addClass("mfp-loading"),t.updateStatus("error",s.tError.replace("%url%",i.src))):(o.removeClass("mfp-loading"),t.updateStatus("ready")),o):(t.updateStatus("loading"),i.loading=!0,i.hasSize||(i.imgHidden=!0,o.addClass("mfp-loading"),t.findImageSize(i)),o)}}});var j,$=function(){return void 0===j&&(j=void 0!==document.createElement("p").style.MozTransform),j};e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,i=t.st.zoom,o=".zoom";if(i.enabled&&t.supportsTransition){var n,r,a=i.duration,s=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),o="all "+i.duration/1e3+"s "+i.easing,n={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},r="transition";return n["-webkit-"+r]=n["-moz-"+r]=n["-o-"+r]=n[r]=o,t.css(n),t},p=function(){t.content.css("visibility","visible")};C("BuildControls"+o,function(){if(t._allowZoom()){if(clearTimeout(n),t.content.css("visibility","hidden"),!(e=t._getItemToZoom()))return void p();r=s(e),r.css(t._getOffset()),t.wrap.append(r),n=setTimeout(function(){r.css(t._getOffset(!0)),n=setTimeout(function(){p(),setTimeout(function(){r.remove(),e=r=null,I("ZoomAnimationEnded")},16)},a)},16)}}),C(l+o,function(){if(t._allowZoom()){if(clearTimeout(n),t.st.removalDelay=a,!e){if(!(e=t._getItemToZoom()))return;r=s(e)}r.css(t._getOffset(!0)),t.wrap.append(r),t.content.css("visibility","hidden"),setTimeout(function(){r.css(t._getOffset())},16)}}),C(c+o,function(){t._allowZoom()&&(p(),r&&r.remove(),e=null)})}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return!!t.currItem.hasSize&&t.currItem.img},_getOffset:function(i){var o;o=i?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem);var n=o.offset(),r=parseInt(o.css("padding-top"),10),a=parseInt(o.css("padding-bottom"),10);n.top-=e(window).scrollTop()-r;var s={width:o.width(),height:(w?o.innerHeight():o[0].offsetHeight)-a-r};return $()?s["-moz-transform"]=s.transform="translate("+n.left+"px,"+n.top+"px)":(s.left=n.left,s.top=n.top),s}}});var N="iframe",W="//about:blank",R=function(e){if(t.currTemplate[N]){var i=t.currTemplate[N].find("iframe");i.length&&(e||(i[0].src=W),t.isIE8&&i.css("display",e?"block":"none"))}};e.magnificPopup.registerModule(N,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push(N),C("BeforeChange",function(e,t,i){t!==i&&(t===N?R():i===N&&R(!0))}),C(c+"."+N,function(){R()})},getIframe:function(i,o){var n=i.src,r=t.st.iframe;e.each(r.patterns,function(){return n.indexOf(this.index)>-1?(this.id&&(n="string"==typeof this.id?n.substr(n.lastIndexOf(this.id)+this.id.length,n.length):this.id.call(this,n)),n=this.src.replace("%id%",n),!1):void 0});var a={};return r.srcAction&&(a[r.srcAction]=n),t._parseMarkup(o,a,i),t.updateStatus("ready"),o}}});var Z=function(e){var i=t.items.length;return e>i-1?e-i:0>e?i+e:e},D=function(e,t,i){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,i)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var i=t.st.gallery,o=".mfp-gallery",r=Boolean(e.fn.mfpFastClick);return t.direction=!0,!(!i||!i.enabled)&&(a+=" mfp-gallery",C(d+o,function(){i.navigateByImgClick&&t.wrap.on("click"+o,".mfp-img",function(){return t.items.length>1?(t.next(),!1):void 0}),n.on("keydown"+o,function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()})}),C("UpdateStatus"+o,function(e,i){i.text&&(i.text=D(i.text,t.currItem.index,t.items.length))}),C(p+o,function(e,o,n,r){var a=t.items.length;n.counter=a>1?D(i.tCounter,r.index,a):""}),C("BuildControls"+o,function(){if(t.items.length>1&&i.arrows&&!t.arrowLeft){var o=i.arrowMarkup,n=t.arrowLeft=e(o.replace(/%title%/gi,i.tPrev).replace(/%dir%/gi,"left")).addClass(v),a=t.arrowRight=e(o.replace(/%title%/gi,i.tNext).replace(/%dir%/gi,"right")).addClass(v),s=r?"mfpFastClick":"click";n[s](function(){t.prev()}),a[s](function(){t.next()}),t.isIE7&&(k("b",n[0],!1,!0),k("a",n[0],!1,!0),k("b",a[0],!1,!0),k("a",a[0],!1,!0)),t.container.append(n.add(a))}}),C(u+o,function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout(function(){t.preloadNearbyImages(),t._preloadTimeout=null},16)}),void C(c+o,function(){n.off(o),t.wrap.off("click"+o),t.arrowLeft&&r&&t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(),t.arrowRight=t.arrowLeft=null}))},next:function(){t.direction=!0,t.index=Z(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=Z(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,i=t.st.gallery.preload,o=Math.min(i[0],t.items.length),n=Math.min(i[1],t.items.length);for(e=1;(t.direction?n:o)>=e;e++)t._preloadItem(t.index+e);for(e=1;(t.direction?o:n)>=e;e++)t._preloadItem(t.index-e)},_preloadItem:function(i){if(i=Z(i),!t.items[i].preloaded){var o=t.items[i];o.parsed||(o=t.parseEl(i)),I("LazyLoad",o),"image"===o.type&&(o.img=e('<img class="mfp-img" />').on("load.mfploader",function(){o.hasSize=!0}).on("error.mfploader",function(){o.hasSize=!0,o.loadError=!0,I("LazyLoadError",o)}).attr("src",o.src)),o.preloaded=!0}}}});var q="retina";e.magnificPopup.registerModule(q,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,i=e.ratio;(i=isNaN(i)?i():i)>1&&(C("ImageHasSize."+q,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/i,width:"100%"})}),C("ElementParse."+q,function(t,o){o.src=e.replaceSrc(o,i)}))}}}}),function(){var t="ontouchstart"in window,i=function(){b.off("touchmove"+n+" touchend"+n)},o="mfpFastClick",n="."+o;e.fn.mfpFastClick=function(o){return e(this).each(function(){var r,a=e(this);if(t){var s,c,l,p,d,u;a.on("touchstart"+n,function(e){p=!1,u=1,d=e.originalEvent?e.originalEvent.touches[0]:e.touches[0],c=d.clientX,l=d.clientY,b.on("touchmove"+n,function(e){d=e.originalEvent?e.originalEvent.touches:e.touches,u=d.length,d=d[0],(Math.abs(d.clientX-c)>10||Math.abs(d.clientY-l)>10)&&(p=!0,i())}).on("touchend"+n,function(e){i(),p||u>1||(r=!0,e.preventDefault(),clearTimeout(s),s=setTimeout(function(){r=!1},1e3),o())})})}a.on("click"+n,function(){r||o()})})},e.fn.destroyMfpFastClick=function(){e(this).off("touchstart"+n+" click"+n),t&&b.off("touchmove"+n+" touchend"+n)}}(),T()}(window.jQuery||window.Zepto),function(){var e;$(document).ready(function(){var t,i;return $("#top-header").length>0&&(e(),$(window).resize(function(){return e()}),i=$("#top-video").data("vide").getVideoObject(),t=$("#home-embed"),t.on("play",function(){if(i)return i.pause()}),t.on("pause",function(){if(i)return i.play()})),$(".zoom").each(function(e,t){var i;return i=$(t),i.magnificPopup({items:{src:i.attr("src")},type:"image",closeOnContentClick:!0})}),$("a.menu-dropdown").click(function(){return $(".main-nav").toggleClass("show-menu"),!1}),$(".slideshow > figure:gt(0)").hide(),setInterval(function(){return $(".slideshow > figure:first").fadeOut(1e3).next().fadeIn(1e3).end().appendTo(".slideshow")},4e3)}),e=function(){var e,t;return t=.7*$(window).height(),e=t>310?t:310,$("#top-header").height(e),$(".top-header-background").height(e)}}.call(this);