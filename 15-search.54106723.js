!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){r[e]=n},n.parcelRequired7c6=a);var o=a("bpxeT"),i=a("2TvXO"),s=(o=a("bpxeT"),i=a("2TvXO"),a("dIxxU"));function c(){return u.apply(this,arguments)}function u(){return u=e(o)(e(i).mark((function n(){var t,r,a,o,c=arguments;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:"",r=c.length>1&&void 0!==c[1]?c[1]:"",a="https://pixabay.com/api/?",o=new URLSearchParams({key:"41264181-83fac7734f961e185fe372492",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:40}),e.next=5,s.default.get("".concat(a,"&").concat(o)).then((function(e){return e.data}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),n)}))),u.apply(this,arguments)}function l(e){return e.map((function(e){e.largeImageURL;var n=e.webformatURL,t=e.tags,r=e.likes,a=e.views,o=e.comments,i=e.downloads;return'\n        <div class="photo-card">\n          <img src="'.concat(n,'" alt="').concat(t,'" loading="lazy" width="310px"/>\n          <div class="info">\n            <p class="info-item">\n              <b>Likes</b><br>\n              <b>').concat(r,'</b>\n            </p>\n            <p class="info-item">\n              <b>Views</b><br>\n              <b>').concat(a,'</b>\n            </p>\n            <p class="info-item">\n              <b>Comments</b><br>\n              <b>').concat(o,'</b>\n            </p>\n            <p class="info-item">\n              <b>Downloads</b><br>\n              <b>').concat(i,"</b>\n            </p>\n          </div>\n       </div>\n        ")})).join("")}var p,f=a("ejkSG"),d=function(n){return e(f).Notify.success("Hooray! We found totalHits images.")},y=function(){return e(f).Notify.failure("Sorry, there are no images matching your search query. Please try again")},b=function(){return e(f).Notify.info("We're sorry, but you've reached the end of search results.")},h=function(){return e(f).Loading.arrows("Please wait. We need some seconds...")},m=function(){return e(f).Loading.remove()},v=(document.querySelector("body"),document.querySelector("form")),g=document.querySelector(".loading"),w=document.querySelector(".gallery"),x=1,k="";function L(){return(L=e(o)(e(i).mark((function n(t){var r,a,o;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),w.innerHTML="",x=1,k=t.currentTarget.elements.searchQuery.value.trim(),h(),e.prev=5,e.next=8,c(k,x);case 8:if(r=e.sent,a=r.hits,o=r.totalHits,m(),p=Math.ceil(o/40),""!==k&&0!==o){e.next=16;break}return g.style.display="none",e.abrupt("return",y());case 16:g.style.display="block",d(),w.insertAdjacentHTML("beforeend",l(a)),x>=p&&(g.style.display="none",b()),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(5),e.t0(e.t0.message);case 25:case"end":return e.stop()}}),n,null,[[5,22]])})))).apply(this,arguments)}function T(){return(T=e(o)(e(i).mark((function n(t){var r;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),x+=1,h(),e.prev=3,e.next=6,c(k,x);case 6:r=e.sent.hits,m(),x>=p&&(g.style.display="none",b()),w.insertAdjacentHTML("beforeend",l(r)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),e.t0(e.t0.message);case 15:case"end":return e.stop()}}),n,null,[[3,12]])})))).apply(this,arguments)}g.style.display="none",v.addEventListener("submit",(function(e){return L.apply(this,arguments)})),g.addEventListener("click",(function(e){return T.apply(this,arguments)}))}();
//# sourceMappingURL=15-search.54106723.js.map