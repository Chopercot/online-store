(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[54],{309:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return l}));var s=n(31),c=n(18),r=n(7),o=n(3);const a=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const{paymentMethodsInitialized:t,expressPaymentMethodsInitialized:n,availablePaymentMethods:a,availableExpressPaymentMethods:i}=Object(r.useSelect)(e=>{const t=e(o.PAYMENT_STORE_KEY);return{paymentMethodsInitialized:t.paymentMethodsInitialized(),expressPaymentMethodsInitialized:t.expressPaymentMethodsInitialized(),availableExpressPaymentMethods:t.getAvailableExpressPaymentMethods(),availablePaymentMethods:t.getAvailablePaymentMethods()}}),l=Object.values(a).map(e=>{let{name:t}=e;return t}),u=Object.values(i).map(e=>{let{name:t}=e;return t}),d=Object(c.getPaymentMethods)(),b=Object(c.getExpressPaymentMethods)(),m=Object.keys(d).reduce((e,t)=>(l.includes(t)&&(e[t]=d[t]),e),{}),g=Object.keys(b).reduce((e,t)=>(u.includes(t)&&(e[t]=b[t]),e),{}),h=Object(s.a)(m),p=Object(s.a)(g);return{paymentMethods:e?p:h,isInitialized:e?n:t}},i=()=>a(!1),l=()=>a(!0)},31:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var s=n(0),c=n(13),r=n.n(c);function o(e){const t=Object(s.useRef)(e);return r()(e,t.current)||(t.current=e),t.current}},321:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var s=n(3),c=n(7),r=n(1),o=n(11),a=n(86),i=n(309);const l=()=>{const{isCalculating:e,isBeforeProcessing:t,isProcessing:n,isAfterProcessing:l,isComplete:u,hasError:d}=Object(c.useSelect)(e=>{const t=e(s.CHECKOUT_STORE_KEY);return{isCalculating:t.isCalculating(),isBeforeProcessing:t.isBeforeProcessing(),isProcessing:t.isProcessing(),isAfterProcessing:t.isAfterProcessing(),isComplete:t.isComplete(),hasError:t.hasError()}}),{activePaymentMethod:b,isExpressPaymentMethodActive:m}=Object(c.useSelect)(e=>{const t=e(s.PAYMENT_STORE_KEY);return{activePaymentMethod:t.getActivePaymentMethod(),isExpressPaymentMethodActive:t.isExpressPaymentMethodActive()}}),{onSubmit:g}=Object(a.b)(),{paymentMethods:h={}}=Object(i.b)(),p=n||l||t,O=u&&!d,j=(h[b]||{}).placeOrderButtonLabel||Object(r.__)("Place Order","woocommerce");return{submitButtonText:Object(o.__experimentalApplyCheckoutFilter)({filterName:"placeOrderButtonLabel",defaultValue:j}),onSubmit:g,isCalculating:e,isDisabled:n||m,waitingForProcessing:p,waitingForRedirect:O}}},421:function(e,t){},488:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(1),r=n(5),o=n.n(r),a=n(11),i=n(321),l=n(10),u=n(7),d=n(3),b=n(36);const m=b.j?`<a href="${b.j}" target="_blank">${Object(c.__)("Terms and Conditions","woocommerce")}</a>`:Object(c.__)("Terms and Conditions","woocommerce"),g=b.f?`<a href="${b.f}" target="_blank">${Object(c.__)("Privacy Policy","woocommerce")}</a>`:Object(c.__)("Privacy Policy","woocommerce"),h=Object(c.sprintf)(
/* translators: %1$s terms page link, %2$s privacy page link. */
Object(c.__)("By proceeding with your purchase you agree to our %1$s and %2$s","woocommerce"),m,g),p=Object(c.sprintf)(
/* translators: %1$s terms page link, %2$s privacy page link. */
Object(c.__)("You must accept our %1$s and %2$s to continue with your purchase.","woocommerce"),m,g);n(421),t.default=Object(l.withInstanceId)(e=>{let{text:t,checkbox:n,instanceId:r,className:l}=e;const[b,m]=Object(s.useState)(!1),{isDisabled:g}=Object(i.a)(),O="terms-and-conditions-"+r,{setValidationErrors:j,clearValidationError:_}=Object(u.useDispatch)(d.VALIDATION_STORE_KEY),y=Object(u.useSelect)(e=>e(d.VALIDATION_STORE_KEY).getValidationError(O)),P=!(null==y||!y.message||null!=y&&y.hidden);return Object(s.useEffect)(()=>{if(n)return b?_(O):j({[O]:{message:Object(c.__)("Please read and accept the terms and conditions.","woocommerce"),hidden:!0}}),()=>{_(O)}},[n,b,O,_,j]),Object(s.createElement)("div",{className:o()("wc-block-checkout__terms",{"wc-block-checkout__terms--disabled":g},l)},n?Object(s.createElement)(s.Fragment,null,Object(s.createElement)(a.CheckboxControl,{id:"terms-and-conditions",checked:b,onChange:()=>m(e=>!e),hasError:P,disabled:g},Object(s.createElement)("span",{dangerouslySetInnerHTML:{__html:t||p}}))):Object(s.createElement)("span",{dangerouslySetInnerHTML:{__html:t||h}}))})}}]);