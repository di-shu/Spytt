!function(e){var t={};function i(a){if(t[a])return t[a].exports;var s=t[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=t,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(a,s,function(t){return e[t]}.bind(null,s));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=1)}([function(e,t,i){},function(e,t,i){i(2),e.exports=i(0)},function(e,t,i){"use strict";i.r(t);i(0),i(3)},function(e,t){const i=$(".main-filter_select-wrap"),a=($(".main-filter_item"),$(".account-menu"));let s=[],n=[],c=[];const r=$(".main-filter");var o,l;o=".svg",l=function(){console.log("success")},document.querySelectorAll(o).forEach(e=>{fetch(e.src).then(e=>e.text()).then(t=>{const i=(new DOMParser).parseFromString(t,"image/svg+xml").querySelector("svg");i&&(e.id&&(i.id=e.id),e.className&&(i.classList=e.classList),e.parentNode.replaceChild(i,e))}).then(l).catch(e=>console.error(e))}),$("body").on("click",(function(e){const t=$(e.target);t.hasClass("main-selected_filter")||r.find(e.target).length||($(".main-filter_items").removeClass("active-filters_menu"),$(".main-keyword_menu").removeClass("keyword-menu_active")),t.hasClass("account-settings")||a.removeClass("account-menu_active")})),i.on("click",(function(){$(".main-filter_items").removeClass("active-filters_menu"),$(this).find(".main-filter_items").toggleClass("active-filters_menu")})),function(){const e=$(".filter-view_item");e.attr("viewActive",!1),$(".view-active").attr("viewActive",!0),e.on("click",(function(){const t=$(this);e.removeClass("view-active"),e.attr("viewActive",!1),t.addClass("view-active"),t.attr("viewActive",!0),$(".main-videos_section").css("maxWidth",""+t.attr("data-videos"))}))}(),function(){const e=$(".main-keyword_input"),t=$(".main-keyword_input-word");let i=$(".main-keyword_input-word2");const a=$(".main-keyword_menu"),s=$(".main-keyword_menu-item"),n=$(".main-keyword_menu-item2"),r=($(".main-keyword_add"),$(".main-keywords_reset")),o=$(".main-keyword_accept"),l=$(".keyword-delete_wrap"),d=$(".keyword-delete_wrap2");s.attr("keywordActive",!1),$(".keyword-active").attr("keywordActive",!0),e.on("click",(function(){$(this).parent().find(a).toggleClass("keyword-menu_active"),$(this).toggleClass("main-keyword_input-active")})),d.on("click",(function(){$(".first-selected"),$(".second-selected"),$(".selected-all");$(this).parents(".main-keywords_inputs").remove(),""===i.val()&&""===t.val()&&(o.attr("disabled",!0),o.removeClass("accept-active"),r.removeClass("reset-active")),i=$(".main-keyword_input-word2")})),l.on("click",(function(){$(this).parents(".main-keywords_inputs").remove(),$(this).removeClass("keyword-delete_active"),""===i.val()&&""===t.val()&&(o.attr("disabled",!0),o.removeClass("accept-active"),r.removeClass("reset-active"))})),s.on("click",(function(){const t=$(this),i=$(this).parents(".main-keyword_input-wrap").find(".main-keyword_input span");s.attr("keywordActive",!1),s.removeClass("keyword-active"),t.addClass("keyword-active"),t.attr("keywordActive",!0),i.text(t.text()),a.removeClass("keyword-menu_active"),e.removeClass("main-keyword_input-active")})),n.on("click",(function(){const t=$(this),i=$(this).parents(".main-keyword_input-wrap").find(".main-keyword_input span");n.attr("keywordActive",!1),n.removeClass("keyword-active"),t.addClass("keyword-active"),t.attr("keywordActive",!0),i.text(t.text()),a.removeClass("keyword-menu_active"),e.removeClass("main-keyword_input-active")})),t.on("input",(function(){""!==$(this).val()?(l.addClass("keyword-delete_active"),o.attr("disabled",!1),o.addClass("accept-active"),r.addClass("reset-active")):(""===i.val()&&(o.attr("disabled",!0),o.removeClass("accept-active"),r.removeClass("reset-active")),l.removeClass("keyword-delete_active"))})),i.on("input",(function(){""!==$(this).val()?(d.addClass("keyword-delete_active"),o.attr("disabled",!1),o.addClass("accept-active"),r.addClass("reset-active")):(""===t.val()&&(o.attr("disabled",!0),o.removeClass("accept-active"),r.removeClass("reset-active")),d.removeClass("keyword-delete_active"))})),r.on("click",(function(){i.val(""),t.val(""),o.attr("disabled",!0),o.removeClass("accept-active"),$(this).removeClass("reset-active"),l.removeClass("keyword-delete_active"),d.removeClass("keyword-delete_active"),$(".first-selected").addClass("no-active"),$(".second-selected").addClass("no-active"),$(".selected-all").removeClass("no-active")})),o.on("click",(function(){const e=$(".first-selected"),i=($(".second-selected"),$(".selected-all"));c=[],t.each((function(e,t){const i=$(t);""!==i.val()&&c.push(i.val())})),1===c.length?(e.removeClass("no-active"),i.addClass("no-active"),e.html(c[0])):c.length>1&&(e.removeClass("no-active"),i.addClass("no-active"),e.html("- "+c.length+" слова"))}))}(),function(){const e=$(".main-period_1v"),t=$(".main-period_2v");e.attr("periodActive",!1),t.attr("periodActive",!1),$(".period-active").attr("periodActive",!0),e.on("click",(function(){e.removeClass("period-active");const t=$(this);e.attr("periodActive",!1);const i=t.parents(".main-filter_select-wrap").find(".main-selected_filter span");t.toggleClass("period-active"),t.attr("periodActive",t.hasClass("period-active")),i.text(t.text())})),t.on("click",(function(){t.removeClass("period-active");const e=$(this);t.attr("periodActive",!1);e.parents(".main-filter_select-wrap").find(".main-selected_filter span");e.toggleClass("period-active"),e.attr("periodActive",e.hasClass("sorting-active"))}))}(),function(){const e=$(".main-sorting_1v"),t=$(".main-sorting_2v");e.attr("sortActive",!1),t.attr("sortActive",!1),$(".sorting-active").attr("sortActive",!0),e.on("click",(function(){e.removeClass("sorting-active");const t=$(this);e.attr("sortActive",!1);const i=t.parents(".main-filter_select-wrap").find(".main-selected_filter span");t.toggleClass("sorting-active"),t.attr("sortActive",t.hasClass("sorting-active")),i.text(t.text())})),t.on("click",(function(){t.removeClass("sorting-active");const e=$(this);t.attr("sortActive",!1);e.parents(".main-filter_select-wrap").find(".main-selected_filter span");e.toggleClass("sorting-active"),e.attr("sortActive",e.hasClass("sorting-active"))}))}(),function(){const e=$(".filter-categories_app, .filter-categories_game"),t=$(".filter-categories_reset");e.attr("categoryActive",!1),e.on("click",(function(){const i=$(this),a=i.parents(".main-filter_select-wrap").find(".main-selected_filter span");i.toggleClass("category-active"),i.attr("categoryActive",i.hasClass("category-active"));const s=$(".category-active");n=[],s.each((function(e,t){n.push($(t).text())})),1===n.length?(a.text($(".category-active").text()),a.css({display:"inline",color:"#007bff"})):n.length>1?(a.css("display","inline"),a.text(n.length+" выбрано")):0==n.length&&(a.text("Все"),a.css("color","#000")),t.on("click",(function(){n=[],a.text("Все"),a.css("color","#000"),e.removeClass("category-active"),e.attr("categoryActive",!1)}))}))}(),function(){const e=$(".filter-country_item");e.attr("countryActive",!1),e.on("click",(function(){const e=$(this),t=e.parents(".main-filter_select-wrap").find(".main-selected_filter span");e.find(".filter-country");e.toggleClass("country-active"),e.attr("countryActive",e.hasClass("country-active"));const i=$(".country-active");s=[],i.each((function(e,t){s.push({name:$(t).find(".filter-country").text(),icon:$(t).find(".svg").attr("src")})}));const a=$(".selected-countries");if(1==s.length)t.text($(".country-active").text()),t.css({display:"inline",color:"#007bff"}),a.find("svg, img").remove();else if(s.length>1&&s.length<=3){t.css("display","none"),a.find("svg, img").remove();for(let e=0;e<s.length;e++)a.prepend(`\n                <img src="${s.icon}">\n            `)}else 0==s.length?(t.text("Все"),t.css("color","#000"),a.find("svg, img").remove()):s.length>3&&(t.css("display","inline"),a.find("svg, img").remove(),t.text(s.length+" стран(ы)"))}))}(),$(".main-video_src").on("click",(function(){const e=$(this);this.paused?e.get(0).play():e.get(0).pause()})),$(".account-settings").on("click",(function(){a.toggleClass("account-menu_active")}))}]);