!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){n(2),e.exports=n(0)},function(e,t,n){"use strict";n.r(t);n(0),n(3)},function(e,t){const n=$(".main-filter_select-wrap"),r=$(".main-filter_item");var i,o;i=".svg",document.querySelectorAll(i).forEach(e=>{fetch(e.src).then(e=>e.text()).then(t=>{const n=(new DOMParser).parseFromString(t,"image/svg+xml").querySelector("svg");n&&(e.id&&(n.id=e.id),e.className&&(n.classList=e.classList),e.parentNode.replaceChild(n,e))}).then(o).catch(e=>console.error(e))}),$("body").on("click",(function(e){const t=$(e.target);console.log(t),t.hasClass("main-selected_filter")||$(".main-filter_items").removeClass("active-filters_menu")})),n.on("click",(function(){$(".main-filter_items").removeClass("active-filters_menu"),$(this).find(".main-filter_items").toggleClass("active-filters_menu")})),r.on("click",(function(){const e=$(this).parents(".main-filter_select-wrap").find(".main-selected_filter span"),t=$(this);e.text(t.text())})),$(".main-video_src").on("click",(function(){const e=$(this);this.paused?e.get(0).play():e.get(0).pause()}))}]);