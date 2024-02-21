"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7672],{69825:function(e,t,n){var r=n(63956),o=n(54423),i=n(93981),u=n(87821),a=n(51552),c=n(25546),s=n(89388),l=n(29541),f=["testId","name","onChange","value","disabled","decimals","onMouseOver","onFocus","className","placeholder","onBlur","suffix","max","autofocus","style","enableDynamicSizing"];function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var p=i.forwardRef((function(e,t){e.testId;var n=e.name,p=e.onChange,m=e.value,v=e.disabled,h=void 0!==v&&v,b=e.decimals,g=void 0===b?6:b,w=e.onMouseOver,O=e.onFocus,x=e.className,k=e.placeholder,P=e.onBlur,j=e.suffix,D=e.max,y=e.autofocus,M=void 0!==y&&y,Z=e.style,S=e.enableDynamicSizing,C=(0,o.Z)(e,f),I=(0,a.MG)().constants.MAX_INPUT_LIMIT,N=i.useMemo((function(){return C.isAllowed||function(e){var t=e.floatValue;return D?!t||t<=Number(D):!t||t<=I}}),[I,C.isAllowed,D]),T=String(m).length>=9?"text-base md:text-xl":"text-xl",A=","===c.A5?".":",",_=","===c.A5?",":".",R=i.useRef(null),L=(0,i.useState)(Z),E=L[0],W=L[1];return(0,i.useEffect)((function(){var e;S&&W(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({width:null===(e=R.current)||void 0===e?void 0:e.clientWidth},Z))}),[m,Z,S]),(0,l.jsx)(u.Z,{autoComplete:"off",name:n,inputMode:"decimal",onBlur:P,"data-lpignore":"true",decimalSeparator:_,value:null!==m&&void 0!==m?m:"",allowedDecimalSeparators:[".",","],thousandSeparator:A,decimalScale:g,allowNegative:!1,allowLeadingZeros:!1,disabled:h,isAllowed:N,onValueChange:function(e){e.value!==(null===m||void 0===m?void 0:m.toString())&&p&&p(e)},isNumericString:!0,placeholder:h?"":null!==k&&void 0!==k?k:"0.00",className:(0,s.cn)("h-full w-full bg-transparent disabled:cursor-not-allowed disabled:opacity-100 disabled:text-black dark:text-white text-right font-semibold dark:placeholder:text-white/25",T,x),onMouseOver:w||void 0,onFocus:O||void 0,getInputRef:t,suffix:j,autoFocus:M,style:E})}));t.Z=p},41264:function(e,t,n){n.d(t,{Z:function(){return f},i:function(){return l}});var r=n(97620),o=n(6923),i=n(93981),u=n(48645),a=n(13170),c=n(29541),s=function(e){var t=e.percentage,n=e.strokeWidth,r=void 0===n?2:n,o=e.sqSize,i=void 0===o?14:o,u=(i-r)/2,a="0 0 ".concat(i," ").concat(i),s=u*Math.PI*2,l=s-s*t/100;return(0,c.jsxs)("svg",{width:i,height:i,viewBox:a,children:[(0,c.jsx)("circle",{className:"fill-transparent stroke-black-10 dark:stroke-white-75",cx:i/2,cy:i/2,r:u,strokeWidth:"".concat(r,"px")}),(0,c.jsx)("circle",{className:"fill-transparent stroke-black",strokeLinecap:"round",strokeLinejoin:"round",cx:i/2,cy:i/2,r:u,strokeWidth:"".concat(r+.4,"px"),transform:"rotate(-90 ".concat(i/2," ").concat(i/2,")"),style:{strokeDasharray:s,strokeDashoffset:l}})]})},l=function(e){var t=e.isSubmitting,n=e.lastRefreshTimestamp,c=e.value,s=e.refresh,l=i.useState((0,o.Z)((new Date).getTime(),n)),f=(0,r.Z)(l,2),d=f[0],p=f[1];return(0,u.Z)((function(){if(!t){var e=(0,o.Z)((new Date).getTime(),n);p(e),e>=a.GJ&&(c||0)>0&&s()}}),1e3),{timeDiff:d}},f=function(e){var t=e.lastRefreshTimestamp,n=e.isSubmitting,r=e.value,o=e.refresh,u=l({isSubmitting:n,lastRefreshTimestamp:t,value:r,refresh:o}).timeDiff,f=i.useCallback((function(e){e.stopPropagation(),o()}),[o]);return(0,c.jsx)("div",{className:"cursor-pointer",onClick:f,children:(0,c.jsx)(s,{sqSize:10,percentage:u/a.GJ*100})})}},59295:function(e,t,n){n.d(t,{c:function(){return i}});var r=n(13838),o=n(25546),i=function(e,t){var n=e.inAmount,i=e.inputDecimal,u=e.outAmount,a=e.outputDecimal,c=(0,o.lt)(n,i),s=(0,o.lt)(u,a),l=t?new r.Z(s).div(c):new r.Z(c).div(s);return Number.isNaN(l.toNumber())?0:l.lessThan(.1)?Number(l.toPrecision(Math.max(t?a:i,1))):l.toDP(t?a:i).toNumber()}},3561:function(e,t,n){n(93981);var r=n(29541);t.Z=function(e){var t=e.fill,n=void 0===t?"white":t,o=e.width,i=void 0===o?12:o,u=e.height,a=void 0===u?12:u;return(0,r.jsxs)("svg",{width:i,height:a,viewBox:"0 0 12 12",fill:n,xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("g",{clipPath:"url(#clip0_9115_125056)",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6ZM5.95362 7.63052C5.60347 7.63083 5.31644 7.35363 5.30407 7.0038L5.15183 2.7132C5.14549 2.53686 5.21146 2.36591 5.33389 2.23905C5.45631 2.11218 5.62504 2.04082 5.80138 2.04082H6.10586C6.2822 2.04082 6.45093 2.11218 6.57336 2.23905C6.69578 2.36591 6.76175 2.53686 6.75541 2.7132L6.60317 7.0038C6.5908 7.35363 6.30377 7.63083 5.95362 7.63052ZM5.95352 10.0669C6.45812 10.0669 6.86694 9.65807 6.86694 9.15347C6.86694 8.64887 6.45812 8.24004 5.95352 8.24004C5.44891 8.24004 5.04009 8.64887 5.04009 9.15347C5.04009 9.65807 5.44891 10.0669 5.95352 10.0669Z",fill:n})}),(0,r.jsx)("defs",{children:(0,r.jsx)("clipPath",{id:"clip0_9115_125056",children:(0,r.jsx)("rect",{width:"12",height:"12",fill:n})})})]})}},14640:function(e,t,n){var r=n(7761),o=n(93981),i=n(70835),u=n(51552);t.Z=function(e){var t=e.selectedRoute,n=e.hasEnoughSOL,a=(0,i.so)(),c=(0,i.gJ)(),s=(0,u.Os)().connected;return{errors:o.useMemo((function(){var e=[];return 100*Number((null===t||void 0===t?void 0:t.quoteResponse.priceImpactPct)||0)>5&&e.push(r.ag._("Price impact more than 5%")),a.isDanger&&e.push(r.ag._("{0}% more expensive than CoinGecko rate",{0:a.formattedPercent})),s&&!n&&c&&(c.openOrdersDeposits.length||c.ataDeposits.length?e.push(r.ag._("You need at least {0} SOL to pay for fees and deposits",{0:c.minimumSOLForTransaction/Math.pow(10,9)})):e.push(r.ag._("You need at least {0} SOL to pay for fees",{0:c.minimumSOLForTransaction/Math.pow(10,9)}))),e}),[null===t||void 0===t?void 0:t.quoteResponse.priceImpactPct,a.isDanger,a.formattedPercent,s,n,c])}}},70835:function(e,t,n){n.d(t,{so:function(){return M},Gl:function(){return P},on:function(){return D},gJ:function(){return y}});var r=n(63956),o=n(93981),i=n(13838),u=n(9364),a=n(3011),c=n(99864),s=n(27195),l=n(8857),f=n.n(l),d=n(88680),p=n(41144),m=n(59295);var v=n(51552),h=n(12197),b=n(44495);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=(0,u.cn)({inputTokenInfo:void 0,outputTokenInfo:void 0}),x=(0,u.cn)(null),k=(0,u.cn)({isCheaper:!1,isMoreExp:!1,isWithinTwoPercent:!1,isWithinFivePercent:!1,isDanger:!1,isWarning:!1,percent:0,formattedPercent:"",rate:null,rateDiff:null,apiURL:""}),P=function(e,t,n){var r=(0,v.Bn)().getTokenInfo,u=(0,v.jB)().useWSol,c=(0,a.b9)(O),l=(0,a.b9)(x),g=(0,a.b9)(k),P=(0,v.gZ)().addressToTokenAccountMap,D=(0,o.useMemo)((function(){var e=new Map;return P.forEach((function(t,n){e.set(t.info.mint.toBase58(),t.pubkey.toBase58())})),e}),[P]),y=(0,o.useMemo)((function(){return[r(t),r(n)]}),[r,t,n]),M=y[0],Z=y[1];(0,b.Z)((function(){c({inputTokenInfo:M,outputTokenInfo:Z})}),[M,Z,c]),(0,b.Z)((function(){l(e?j(e,D,!u):null)}),[e,l,D,u]);var S=function(e){var t,n,r=e.inputAmount,u=e.inputTokenInfo,a=e.outputAmount,c=e.outputTokenInfo,l=(null===u||void 0===u||null===(t=u.extensions)||void 0===t?void 0:t.coingeckoId)||"",v=(null===c||void 0===c||null===(n=c.extensions)||void 0===n?void 0:n.coingeckoId)||"",h=(0,o.useMemo)((function(){return"https://api.coingecko.com/api/v3/simple/price?ids=".concat(l,",").concat(v,"&vs_currencies=usd")}),[l,v]),b=(0,d.aM)([h],(0,s.Z)(f().mark((function e(){var t,n,r,o,u,a;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l&&v){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,p.ZP.get(h).json();case 5:return u=e.sent,a=null!==(t=u[l])&&void 0!==t&&t.usd&&null!==(n=u[v])&&void 0!==n&&n.usd?new i.Z(null===(r=u[l])||void 0===r?void 0:r.usd).div(new i.Z(null===(o=u[v])||void 0===o?void 0:o.usd)):null,e.abrupt("return",a);case 10:return e.prev=10,e.t0=e.catch(2),e.abrupt("return",null);case 13:case"end":return e.stop()}}),e,null,[[2,10]])}))),{refetchInterval:3e4,staleTime:3e4}),g=(0,o.useMemo)((function(){return b.data?b.data.toNumber():null}),[b.data]),w=(0,o.useMemo)((function(){if(g&&u&&c&&r&&a){var e=(0,m.c)({inAmount:r,inputDecimal:u.decimals,outAmount:a,outputDecimal:c.decimals},!0);if(e&&g)return new i.Z(e).div(g).toDecimalPlaces(3).toNumber()}return null}),[g,r,a,u,c]);return(0,o.useMemo)((function(){return{rate:g,rateDiff:w,apiURL:h}}),[g,w,h])}({inputTokenInfo:M,outputTokenInfo:Z,inputAmount:null===e||void 0===e?void 0:e.inAmount,outputAmount:null===e||void 0===e?void 0:e.outAmount}),C=(0,o.useMemo)((function(){var e=null===S||void 0===S?void 0:S.rateDiff;if("number"!==typeof e)return k.init;var t=e>=1,n=e<1,r=n?1-e<=.02:e-1<=.02,o=n?1-e<=.05:e-1<=.05,u=!t&&!r&&o,a=!t&&!o,c=n?new i.Z(1).minus(e).mul(100).toDecimalPlaces(3).toNumber():new i.Z(e).minus(1).mul(100).toDecimalPlaces(3).toNumber();return w({isCheaper:t,isMoreExp:n,isWithinTwoPercent:r,isWithinFivePercent:o,isWarning:u,isDanger:a,percent:c,formattedPercent:h.uf.format(c)},S)}),[S]);(0,b.Z)((function(){g(C)}),[g,C])},j=function(e,t,n){var r=new i.Z(e.priceImpactPct||0).mul(100).toNumber();return w({isHighImpact:r>5,isMediumImpact:r>=2&&r<=5,priceImpact:r},(0,c.rR)(e,t,new Map,n,!0))},D=function(){return(0,a.Dv)(O)},y=function(){return(0,a.Dv)(x)},M=function(){return(0,a.Dv)(k)}}}]);
//# sourceMappingURL=7672-6e3c6302e49994f6.js.map