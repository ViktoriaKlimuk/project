function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("1GAPJ");const u=document.querySelector('input[name="delay"]'),l=document.querySelector('input[name="step"]'),d=document.querySelector('input[name="amount"]'),s=document.querySelector('button[type="submit"]'),a=document.querySelector("form");function c(e,t){return new Promise(((n,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}s.addEventListener("click",(function(t){t.preventDefault();for(let t=0;t<d.valueAsNumber;t+=1){const n=u.valueAsNumber+l.valueAsNumber*t;c(t,n).then((({position:t,delay:n})=>{e(i).Notify.success(`Fulfilled promise ${t+1} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.failure(`Rejected promise ${t+1} in ${n}ms`)}))}a.reset()}));
//# sourceMappingURL=13-promises.852c0333.js.map
