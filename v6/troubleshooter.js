(function(){"use strict";function an(e,s){const n=Object.create(null),t=e.split(",");for(let o=0;o<t.length;o++)n[t[o]]=!0;return s?o=>!!n[o.toLowerCase()]:o=>!!n[o]}function rn(e){if(x(e)){const s={};for(let n=0;n<e.length;n++){const t=e[n],o=Z(t)?Wo(t):rn(t);if(o)for(const a in o)s[a]=o[a]}return s}else{if(Z(e))return e;if(Y(e))return e}}const Uo=/;(?![^(]*\))/g,Bo=/:([^]+)/,Lo=/\/\*.*?\*\//gs;function Wo(e){const s={};return e.replace(Lo,"").split(Uo).forEach(n=>{if(n){const t=n.split(Bo);t.length>1&&(s[t[0].trim()]=t[1].trim())}}),s}function fs(e){let s="";if(Z(e))s=e;else if(x(e))for(let n=0;n<e.length;n++){const t=fs(e[n]);t&&(s+=t+" ")}else if(Y(e))for(const n in e)e[n]&&(s+=n+" ");return s.trim()}const $o=an("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function ot(e){return!!e||e===""}const Ds=e=>Z(e)?e:e==null?"":x(e)||Y(e)&&(e.toString===lt||!I(e.toString))?JSON.stringify(e,at,2):String(e),at=(e,s)=>s&&s.__v_isRef?at(e,s.value):as(s)?{[`Map(${s.size})`]:[...s.entries()].reduce((n,[t,o])=>(n[`${t} =>`]=o,n),{})}:it(s)?{[`Set(${s.size})`]:[...s.values()]}:Y(s)&&!x(s)&&!ct(s)?String(s):s,L={},os=[],je=()=>{},Vo=()=>!1,Ko=/^on[^a-z]/,As=e=>Ko.test(e),ln=e=>e.startsWith("onUpdate:"),te=Object.assign,cn=(e,s)=>{const n=e.indexOf(s);n>-1&&e.splice(n,1)},Go=Object.prototype.hasOwnProperty,E=(e,s)=>Go.call(e,s),x=Array.isArray,as=e=>xs(e)==="[object Map]",it=e=>xs(e)==="[object Set]",I=e=>typeof e=="function",Z=e=>typeof e=="string",pn=e=>typeof e=="symbol",Y=e=>e!==null&&typeof e=="object",rt=e=>Y(e)&&I(e.then)&&I(e.catch),lt=Object.prototype.toString,xs=e=>lt.call(e),Xo=e=>xs(e).slice(8,-1),ct=e=>xs(e)==="[object Object]",un=e=>Z(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,zs=an(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ns=e=>{const s=Object.create(null);return n=>s[n]||(s[n]=e(n))},Zo=/-(\w)/g,Se=Ns(e=>e.replace(Zo,(s,n)=>n?n.toUpperCase():"")),Qo=/\B([A-Z])/g,is=Ns(e=>e.replace(Qo,"-$1").toLowerCase()),Is=Ns(e=>e.charAt(0).toUpperCase()+e.slice(1)),dn=Ns(e=>e?`on${Is(e)}`:""),Os=(e,s)=>!Object.is(e,s),hn=(e,s)=>{for(let n=0;n<e.length;n++)e[n](s)},Cs=(e,s,n)=>{Object.defineProperty(e,s,{configurable:!0,enumerable:!1,value:n})},mn=e=>{const s=parseFloat(e);return isNaN(s)?e:s};let pt;const ea=()=>pt||(pt=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Te;class sa{constructor(s=!1){this.detached=s,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Te,!s&&Te&&(this.index=(Te.scopes||(Te.scopes=[])).push(this)-1)}run(s){if(this.active){const n=Te;try{return Te=this,s()}finally{Te=n}}}on(){Te=this}off(){Te=this.parent}stop(s){if(this.active){let n,t;for(n=0,t=this.effects.length;n<t;n++)this.effects[n].stop();for(n=0,t=this.cleanups.length;n<t;n++)this.cleanups[n]();if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!s){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this.active=!1}}}function na(e,s=Te){s&&s.active&&s.effects.push(e)}const fn=e=>{const s=new Set(e);return s.w=0,s.n=0,s},ut=e=>(e.w&qe)>0,dt=e=>(e.n&qe)>0,ta=({deps:e})=>{if(e.length)for(let s=0;s<e.length;s++)e[s].w|=qe},oa=e=>{const{deps:s}=e;if(s.length){let n=0;for(let t=0;t<s.length;t++){const o=s[t];ut(o)&&!dt(o)?o.delete(e):s[n++]=o,o.w&=~qe,o.n&=~qe}s.length=n}},gn=new WeakMap;let gs=0,qe=1;const yn=30;let ve;const We=Symbol(""),bn=Symbol("");class jn{constructor(s,n=null,t){this.fn=s,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,na(this,t)}run(){if(!this.active)return this.fn();let s=ve,n=Re;for(;s;){if(s===this)return;s=s.parent}try{return this.parent=ve,ve=this,Re=!0,qe=1<<++gs,gs<=yn?ta(this):ht(this),this.fn()}finally{gs<=yn&&oa(this),qe=1<<--gs,ve=this.parent,Re=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ve===this?this.deferStop=!0:this.active&&(ht(this),this.onStop&&this.onStop(),this.active=!1)}}function ht(e){const{deps:s}=e;if(s.length){for(let n=0;n<s.length;n++)s[n].delete(e);s.length=0}}let Re=!0;const mt=[];function rs(){mt.push(Re),Re=!1}function ls(){const e=mt.pop();Re=e===void 0?!0:e}function de(e,s,n){if(Re&&ve){let t=gn.get(e);t||gn.set(e,t=new Map);let o=t.get(n);o||t.set(n,o=fn()),ft(o)}}function ft(e,s){let n=!1;gs<=yn?dt(e)||(e.n|=qe,n=!ut(e)):n=!e.has(ve),n&&(e.add(ve),ve.deps.push(e))}function Oe(e,s,n,t,o,a){const i=gn.get(e);if(!i)return;let r=[];if(s==="clear")r=[...i.values()];else if(n==="length"&&x(e)){const c=mn(t);i.forEach((u,h)=>{(h==="length"||h>=c)&&r.push(u)})}else switch(n!==void 0&&r.push(i.get(n)),s){case"add":x(e)?un(n)&&r.push(i.get("length")):(r.push(i.get(We)),as(e)&&r.push(i.get(bn)));break;case"delete":x(e)||(r.push(i.get(We)),as(e)&&r.push(i.get(bn)));break;case"set":as(e)&&r.push(i.get(We));break}if(r.length===1)r[0]&&vn(r[0]);else{const c=[];for(const u of r)u&&c.push(...u);vn(fn(c))}}function vn(e,s){const n=x(e)?e:[...e];for(const t of n)t.computed&&gt(t);for(const t of n)t.computed||gt(t)}function gt(e,s){(e!==ve||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const aa=an("__proto__,__v_isRef,__isVue"),yt=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(pn)),ia=wn(),ra=wn(!1,!0),la=wn(!0),bt=ca();function ca(){const e={};return["includes","indexOf","lastIndexOf"].forEach(s=>{e[s]=function(...n){const t=q(this);for(let a=0,i=this.length;a<i;a++)de(t,"get",a+"");const o=t[s](...n);return o===-1||o===!1?t[s](...n.map(q)):o}}),["push","pop","shift","unshift","splice"].forEach(s=>{e[s]=function(...n){rs();const t=q(this)[s].apply(this,n);return ls(),t}}),e}function wn(e=!1,s=!1){return function(t,o,a){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return s;if(o==="__v_raw"&&a===(e?s?ka:Dt:s?kt:Tt).get(t))return t;const i=x(t);if(!e&&i&&E(bt,o))return Reflect.get(bt,o,a);const r=Reflect.get(t,o,a);return(pn(o)?yt.has(o):aa(o))||(e||de(t,"get",o),s)?r:ie(r)?i&&un(o)?r:r.value:Y(r)?e?At(r):Sn(r):r}}const pa=jt(),ua=jt(!0);function jt(e=!1){return function(n,t,o,a){let i=n[t];if(ys(i)&&ie(i)&&!ie(o))return!1;if(!e&&(!kn(o)&&!ys(o)&&(i=q(i),o=q(o)),!x(n)&&ie(i)&&!ie(o)))return i.value=o,!0;const r=x(n)&&un(t)?Number(t)<n.length:E(n,t),c=Reflect.set(n,t,o,a);return n===q(a)&&(r?Os(o,i)&&Oe(n,"set",t,o):Oe(n,"add",t,o)),c}}function da(e,s){const n=E(e,s);e[s];const t=Reflect.deleteProperty(e,s);return t&&n&&Oe(e,"delete",s,void 0),t}function ha(e,s){const n=Reflect.has(e,s);return(!pn(s)||!yt.has(s))&&de(e,"has",s),n}function ma(e){return de(e,"iterate",x(e)?"length":We),Reflect.ownKeys(e)}const vt={get:ia,set:pa,deleteProperty:da,has:ha,ownKeys:ma},fa={get:la,set(e,s){return!0},deleteProperty(e,s){return!0}},ya=te({},vt,{get:ra,set:ua}),Jn=e=>e,Ps=e=>Reflect.getPrototypeOf(e);function Es(e,s,n=!1,t=!1){e=e.__v_raw;const o=q(e),a=q(s);n||(s!==a&&de(o,"get",s),de(o,"get",a));const{has:i}=Ps(o),r=t?Jn:n?An:Dn;if(i.call(o,s))return r(e.get(s));if(i.call(o,a))return r(e.get(a));e!==o&&e.get(s)}function qs(e,s=!1){const n=this.__v_raw,t=q(n),o=q(e);return s||(e!==o&&de(t,"has",e),de(t,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function Rs(e,s=!1){return e=e.__v_raw,!s&&de(q(e),"iterate",We),Reflect.get(e,"size",e)}function wt(e){e=q(e);const s=q(this);return Ps(s).has.call(s,e)||(s.add(e),Oe(s,"add",e,e)),this}function Jt(e,s){s=q(s);const n=q(this),{has:t,get:o}=Ps(n);let a=t.call(n,e);a||(e=q(e),a=t.call(n,e));const i=o.call(n,e);return n.set(e,s),a?Os(s,i)&&Oe(n,"set",e,s):Oe(n,"add",e,s),this}function _t(e){const s=q(this),{has:n,get:t}=Ps(s);let o=n.call(s,e);o||(e=q(e),o=n.call(s,e)),t&&t.call(s,e);const a=s.delete(e);return o&&Oe(s,"delete",e,void 0),a}function St(){const e=q(this),s=e.size!==0,n=e.clear();return s&&Oe(e,"clear",void 0,void 0),n}function Fs(e,s){return function(t,o){const a=this,i=a.__v_raw,r=q(i),c=s?Jn:e?An:Dn;return!e&&de(r,"iterate",We),i.forEach((u,h)=>t.call(o,c(u),c(h),a))}}function Ms(e,s,n){return function(...t){const o=this.__v_raw,a=q(o),i=as(a),r=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,u=o[e](...t),h=n?Jn:s?An:Dn;return!s&&de(a,"iterate",c?bn:We),{next(){const{value:y,done:v}=u.next();return v?{value:y,done:v}:{value:r?[h(y[0]),h(y[1])]:h(y),done:v}},[Symbol.iterator](){return this}}}}function Fe(e){return function(...s){return e==="delete"?!1:this}}function ba(){const e={get(a){return Es(this,a)},get size(){return Rs(this)},has:qs,add:wt,set:Jt,delete:_t,clear:St,forEach:Fs(!1,!1)},s={get(a){return Es(this,a,!1,!0)},get size(){return Rs(this)},has:qs,add:wt,set:Jt,delete:_t,clear:St,forEach:Fs(!1,!0)},n={get(a){return Es(this,a,!0)},get size(){return Rs(this,!0)},has(a){return qs.call(this,a,!0)},add:Fe("add"),set:Fe("set"),delete:Fe("delete"),clear:Fe("clear"),forEach:Fs(!0,!1)},t={get(a){return Es(this,a,!0,!0)},get size(){return Rs(this,!0)},has(a){return qs.call(this,a,!0)},add:Fe("add"),set:Fe("set"),delete:Fe("delete"),clear:Fe("clear"),forEach:Fs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=Ms(a,!1,!1),n[a]=Ms(a,!0,!1),s[a]=Ms(a,!1,!0),t[a]=Ms(a,!0,!0)}),[e,n,s,t]}const[ja,va,wa,Ja]=ba();function _n(e,s){const n=s?e?Ja:wa:e?va:ja;return(t,o,a)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?t:Reflect.get(E(n,o)&&o in t?n:t,o,a)}const _a={get:_n(!1,!1)},Sa={get:_n(!1,!0)},Ta={get:_n(!0,!1)},Tt=new WeakMap,kt=new WeakMap,Dt=new WeakMap,ka=new WeakMap;function Da(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Aa(e){return e.__v_skip||!Object.isExtensible(e)?0:Da(Xo(e))}function Sn(e){return ys(e)?e:Tn(e,!1,vt,_a,Tt)}function xa(e){return Tn(e,!1,ya,Sa,kt)}function At(e){return Tn(e,!0,fa,Ta,Dt)}function Tn(e,s,n,t,o){if(!Y(e)||e.__v_raw&&!(s&&e.__v_isReactive))return e;const a=o.get(e);if(a)return a;const i=Aa(e);if(i===0)return e;const r=new Proxy(e,i===2?t:n);return o.set(e,r),r}function cs(e){return ys(e)?cs(e.__v_raw):!!(e&&e.__v_isReactive)}function ys(e){return!!(e&&e.__v_isReadonly)}function kn(e){return!!(e&&e.__v_isShallow)}function xt(e){return cs(e)||ys(e)}function q(e){const s=e&&e.__v_raw;return s?q(s):e}function zt(e){return Cs(e,"__v_skip",!0),e}const Dn=e=>Y(e)?Sn(e):e,An=e=>Y(e)?At(e):e;function za(e){Re&&ve&&(e=q(e),ft(e.dep||(e.dep=fn())))}function Na(e,s){e=q(e),e.dep&&vn(e.dep)}function ie(e){return!!(e&&e.__v_isRef===!0)}function Ia(e){return ie(e)?e.value:e}const Oa={get:(e,s,n)=>Ia(Reflect.get(e,s,n)),set:(e,s,n,t)=>{const o=e[s];return ie(o)&&!ie(n)?(o.value=n,!0):Reflect.set(e,s,n,t)}};function Nt(e){return cs(e)?e:new Proxy(e,Oa)}var It;class Ca{constructor(s,n,t,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[It]=!1,this._dirty=!0,this.effect=new jn(s,()=>{this._dirty||(this._dirty=!0,Na(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=t}get value(){const s=q(this);return za(s),(s._dirty||!s._cacheable)&&(s._dirty=!1,s._value=s.effect.run()),s._value}set value(s){this._setter(s)}}It="__v_isReadonly";function Pa(e,s,n=!1){let t,o;const a=I(e);return a?(t=e,o=je):(t=e.get,o=e.set),new Ca(t,o,a||!o,n)}function tl(e,...s){}function Me(e,s,n,t){let o;try{o=t?e(...t):e()}catch(a){Hs(a,s,n)}return o}function fe(e,s,n,t){if(I(e)){const a=Me(e,s,n,t);return a&&rt(a)&&a.catch(i=>{Hs(i,s,n)}),a}const o=[];for(let a=0;a<e.length;a++)o.push(fe(e[a],s,n,t));return o}function Hs(e,s,n,t=!0){const o=s?s.vnode:null;if(s){let a=s.parent;const i=s.proxy,r=n;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](e,i,r)===!1)return}a=a.parent}const c=s.appContext.config.errorHandler;if(c){Me(c,null,10,[e,i,r]);return}}Ea(e,n,o,t)}function Ea(e,s,n,t=!0){console.error(e)}let bs=!1,xn=!1;const oe=[];let ke=0;const ps=[];let Ce=null,$e=0;const Ot=Promise.resolve();let zn=null;function qa(e){const s=zn||Ot;return e?s.then(this?e.bind(this):e):s}function Ra(e){let s=ke+1,n=oe.length;for(;s<n;){const t=s+n>>>1;js(oe[t])<e?s=t+1:n=t}return s}function Nn(e){(!oe.length||!oe.includes(e,bs&&e.allowRecurse?ke+1:ke))&&(e.id==null?oe.push(e):oe.splice(Ra(e.id),0,e),Ct())}function Ct(){!bs&&!xn&&(xn=!0,zn=Ot.then(qt))}function Fa(e){const s=oe.indexOf(e);s>ke&&oe.splice(s,1)}function Ma(e){x(e)?ps.push(...e):(!Ce||!Ce.includes(e,e.allowRecurse?$e+1:$e))&&ps.push(e),Ct()}function Pt(e,s=bs?ke+1:0){for(;s<oe.length;s++){const n=oe[s];n&&n.pre&&(oe.splice(s,1),s--,n())}}function Et(e){if(ps.length){const s=[...new Set(ps)];if(ps.length=0,Ce){Ce.push(...s);return}for(Ce=s,Ce.sort((n,t)=>js(n)-js(t)),$e=0;$e<Ce.length;$e++)Ce[$e]();Ce=null,$e=0}}const js=e=>e.id==null?1/0:e.id,Ha=(e,s)=>{const n=js(e)-js(s);if(n===0){if(e.pre&&!s.pre)return-1;if(s.pre&&!e.pre)return 1}return n};function qt(e){xn=!1,bs=!0,oe.sort(Ha);const s=je;try{for(ke=0;ke<oe.length;ke++){const n=oe[ke];n&&n.active!==!1&&Me(n,null,14)}}finally{ke=0,oe.length=0,Et(),bs=!1,zn=null,(oe.length||ps.length)&&qt()}}function Ya(e,s,...n){if(e.isUnmounted)return;const t=e.vnode.props||L;let o=n;const a=s.startsWith("update:"),i=a&&s.slice(7);if(i&&i in t){const h=`${i==="modelValue"?"model":i}Modifiers`,{number:y,trim:v}=t[h]||L;v&&(o=n.map(D=>Z(D)?D.trim():D)),y&&(o=n.map(mn))}let r,c=t[r=dn(s)]||t[r=dn(Se(s))];!c&&a&&(c=t[r=dn(is(s))]),c&&fe(c,e,6,o);const u=t[r+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[r])return;e.emitted[r]=!0,fe(u,e,6,o)}}function Rt(e,s,n=!1){const t=s.emitsCache,o=t.get(e);if(o!==void 0)return o;const a=e.emits;let i={},r=!1;if(!I(e)){const c=u=>{const h=Rt(u,s,!0);h&&(r=!0,te(i,h))};!n&&s.mixins.length&&s.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!a&&!r?(Y(e)&&t.set(e,null),null):(x(a)?a.forEach(c=>i[c]=null):te(i,a),Y(e)&&t.set(e,i),i)}function Ys(e,s){return!e||!As(s)?!1:(s=s.slice(2).replace(/Once$/,""),E(e,s[0].toLowerCase()+s.slice(1))||E(e,is(s))||E(e,s))}let ge=null,Ft=null;function Us(e){const s=ge;return ge=e,Ft=e&&e.type.__scopeId||null,s}function Mt(e,s=ge,n){if(!s||e._n)return e;const t=(...o)=>{t._d&&go(-1);const a=Us(s);let i;try{i=e(...o)}finally{Us(a),t._d&&go(1)}return i};return t._n=!0,t._c=!0,t._d=!0,t}function ol(){}function In(e){const{type:s,vnode:n,proxy:t,withProxy:o,props:a,propsOptions:[i],slots:r,attrs:c,emit:u,render:h,renderCache:y,data:v,setupState:D,ctx:C,inheritAttrs:A}=e;let V,R;const ce=Us(e);try{if(n.shapeFlag&4){const U=o||t;V=Ae(h.call(U,U,y,a,D,v,C)),R=c}else{const U=s;V=Ae(U.length>1?U(a,{attrs:c,slots:r,emit:u}):U(a,null)),R=s.props?c:Ua(c)}}catch(U){ws.length=0,Hs(U,e,1),V=le(we)}let N=V;if(R&&A!==!1){const U=Object.keys(R),{shapeFlag:se}=N;U.length&&se&7&&(i&&U.some(ln)&&(R=Ba(R,i)),N=He(N,R))}return n.dirs&&(N=He(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),V=N,Us(ce),V}const Ua=e=>{let s;for(const n in e)(n==="class"||n==="style"||As(n))&&((s||(s={}))[n]=e[n]);return s},Ba=(e,s)=>{const n={};for(const t in e)(!ln(t)||!(t.slice(9)in s))&&(n[t]=e[t]);return n};function La(e,s,n){const{props:t,children:o,component:a}=e,{props:i,children:r,patchFlag:c}=s,u=a.emitsOptions;if(s.dirs||s.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return t?Ht(t,i,u):!!i;if(c&8){const h=s.dynamicProps;for(let y=0;y<h.length;y++){const v=h[y];if(i[v]!==t[v]&&!Ys(u,v))return!0}}}else return(o||r)&&(!r||!r.$stable)?!0:t===i?!1:t?i?Ht(t,i,u):!0:!!i;return!1}function Ht(e,s,n){const t=Object.keys(s);if(t.length!==Object.keys(e).length)return!0;for(let o=0;o<t.length;o++){const a=t[o];if(s[a]!==e[a]&&!Ys(n,a))return!0}return!1}function Wa({vnode:e,parent:s},n){for(;s&&s.subTree===e;)(e=s.vnode).el=n,s=s.parent}const $a=e=>e.__isSuspense;function Va(e,s){s&&s.pendingBranch?x(e)?s.effects.push(...e):s.effects.push(e):Ma(e)}function Ka(e,s){if(ee){let n=ee.provides;const t=ee.parent&&ee.parent.provides;t===n&&(n=ee.provides=Object.create(t)),n[e]=s}}function Bs(e,s,n=!1){const t=ee||ge;if(t){const o=t.parent==null?t.vnode.appContext&&t.vnode.appContext.provides:t.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&I(s)?s.call(t.proxy):s}}const Ls={};function On(e,s,n){return Yt(e,s,n)}function Yt(e,s,{immediate:n,deep:t,flush:o,onTrack:a,onTrigger:i}=L){const r=ee;let c,u=!1,h=!1;if(ie(e)?(c=()=>e.value,u=kn(e)):cs(e)?(c=()=>e,t=!0):x(e)?(h=!0,u=e.some(N=>cs(N)||kn(N)),c=()=>e.map(N=>{if(ie(N))return N.value;if(cs(N))return us(N);if(I(N))return Me(N,r,2)})):I(e)?s?c=()=>Me(e,r,2):c=()=>{if(!(r&&r.isUnmounted))return y&&y(),fe(e,r,3,[v])}:c=je,s&&t){const N=c;c=()=>us(N())}let y,v=N=>{y=R.onStop=()=>{Me(N,r,4)}},D;if(_s)if(v=je,s?n&&fe(s,r,3,[c(),h?[]:void 0,v]):c(),o==="sync"){const N=Li();D=N.__watcherHandles||(N.__watcherHandles=[])}else return je;let C=h?new Array(e.length).fill(Ls):Ls;const A=()=>{if(R.active)if(s){const N=R.run();(t||u||(h?N.some((U,se)=>Os(U,C[se])):Os(N,C)))&&(y&&y(),fe(s,r,3,[N,C===Ls?void 0:h&&C[0]===Ls?[]:C,v]),C=N)}else R.run()};A.allowRecurse=!!s;let V;o==="sync"?V=A:o==="post"?V=()=>pe(A,r&&r.suspense):(A.pre=!0,r&&(A.id=r.uid),V=()=>Nn(A));const R=new jn(c,V);s?n?A():C=R.run():o==="post"?pe(R.run.bind(R),r&&r.suspense):R.run();const ce=()=>{R.stop(),r&&r.scope&&cn(r.scope.effects,R)};return D&&D.push(ce),ce}function Ga(e,s,n){const t=this.proxy,o=Z(e)?e.includes(".")?Ut(t,e):()=>t[e]:e.bind(t,t);let a;I(s)?a=s:(a=s.handler,n=s);const i=ee;ds(this);const r=Yt(o,a.bind(t),n);return i?ds(i):Ze(),r}function Ut(e,s){const n=s.split(".");return()=>{let t=e;for(let o=0;o<n.length&&t;o++)t=t[n[o]];return t}}function us(e,s){if(!Y(e)||e.__v_skip||(s=s||new Set,s.has(e)))return e;if(s.add(e),ie(e))us(e.value,s);else if(x(e))for(let n=0;n<e.length;n++)us(e[n],s);else if(it(e)||as(e))e.forEach(n=>{us(n,s)});else if(ct(e))for(const n in e)us(e[n],s);return e}function Xa(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Kt(()=>{e.isMounted=!0}),Gt(()=>{e.isUnmounting=!0}),e}const ye=[Function,Array],Bt={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ye,onEnter:ye,onAfterEnter:ye,onEnterCancelled:ye,onBeforeLeave:ye,onLeave:ye,onAfterLeave:ye,onLeaveCancelled:ye,onBeforeAppear:ye,onAppear:ye,onAfterAppear:ye,onAppearCancelled:ye},setup(e,{slots:s}){const n=Pi(),t=Xa();let o;return()=>{const a=s.default&&$t(s.default(),!0);if(!a||!a.length)return;let i=a[0];if(a.length>1){for(const A of a)if(A.type!==we){i=A;break}}const r=q(e),{mode:c}=r;if(t.isLeaving)return Pn(i);const u=Wt(i);if(!u)return Pn(i);const h=Cn(u,r,t,n);En(u,h);const y=n.subTree,v=y&&Wt(y);let D=!1;const{getTransitionKey:C}=u.type;if(C){const A=C();o===void 0?o=A:A!==o&&(o=A,D=!0)}if(v&&v.type!==we&&(!Xe(u,v)||D)){const A=Cn(v,r,t,n);if(En(v,A),c==="out-in")return t.isLeaving=!0,A.afterLeave=()=>{t.isLeaving=!1,n.update.active!==!1&&n.update()},Pn(i);c==="in-out"&&u.type!==we&&(A.delayLeave=(V,R,ce)=>{const N=Lt(t,v);N[String(v.key)]=v,V._leaveCb=()=>{R(),V._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=ce})}return i}}};function Lt(e,s){const{leavingVNodes:n}=e;let t=n.get(s.type);return t||(t=Object.create(null),n.set(s.type,t)),t}function Cn(e,s,n,t){const{appear:o,mode:a,persisted:i=!1,onBeforeEnter:r,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:y,onLeave:v,onAfterLeave:D,onLeaveCancelled:C,onBeforeAppear:A,onAppear:V,onAfterAppear:R,onAppearCancelled:ce}=s,N=String(e.key),U=Lt(n,e),se=(O,K)=>{O&&fe(O,t,9,K)},Le=(O,K)=>{const B=K[1];se(O,K),x(O)?O.every(ae=>ae.length<=1)&&B():O.length<=1&&B()},ze={mode:a,persisted:i,beforeEnter(O){let K=r;if(!n.isMounted)if(o)K=A||r;else return;O._leaveCb&&O._leaveCb(!0);const B=U[N];B&&Xe(e,B)&&B.el._leaveCb&&B.el._leaveCb(),se(K,[O])},enter(O){let K=c,B=u,ae=h;if(!n.isMounted)if(o)K=V||c,B=R||u,ae=ce||h;else return;let S=!1;const W=O._enterCb=he=>{S||(S=!0,he?se(ae,[O]):se(B,[O]),ze.delayedLeave&&ze.delayedLeave(),O._enterCb=void 0)};K?Le(K,[O,W]):W()},leave(O,K){const B=String(e.key);if(O._enterCb&&O._enterCb(!0),n.isUnmounting)return K();se(y,[O]);let ae=!1;const S=O._leaveCb=W=>{ae||(ae=!0,K(),W?se(C,[O]):se(D,[O]),O._leaveCb=void 0,U[B]===e&&delete U[B])};U[B]=e,v?Le(v,[O,S]):S()},clone(O){return Cn(O,s,n,t)}};return ze}function Pn(e){if($s(e))return e=He(e),e.children=null,e}function Wt(e){return $s(e)?e.children?e.children[0]:void 0:e}function En(e,s){e.shapeFlag&6&&e.component?En(e.component.subTree,s):e.shapeFlag&128?(e.ssContent.transition=s.clone(e.ssContent),e.ssFallback.transition=s.clone(e.ssFallback)):e.transition=s}function $t(e,s=!1,n){let t=[],o=0;for(let a=0;a<e.length;a++){let i=e[a];const r=n==null?i.key:String(n)+String(i.key!=null?i.key:a);i.type===be?(i.patchFlag&128&&o++,t=t.concat($t(i.children,s,r))):(s||i.type!==we)&&t.push(r!=null?He(i,{key:r}):i)}if(o>1)for(let a=0;a<t.length;a++)t[a].patchFlag=-2;return t}function qn(e){return I(e)?{setup:e,name:e.name}:e}const Ws=e=>!!e.type.__asyncLoader,$s=e=>e.type.__isKeepAlive;function Za(e,s){Vt(e,"a",s)}function Qa(e,s){Vt(e,"da",s)}function Vt(e,s,n=ee){const t=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(Vs(s,t,n),n){let o=n.parent;for(;o&&o.parent;)$s(o.parent.vnode)&&ei(t,s,n,o),o=o.parent}}function ei(e,s,n,t){const o=Vs(s,e,t,!0);Xt(()=>{cn(t[s],o)},n)}function Vs(e,s,n=ee,t=!1){if(n){const o=n[e]||(n[e]=[]),a=s.__weh||(s.__weh=(...i)=>{if(n.isUnmounted)return;rs(),ds(n);const r=fe(s,n,e,i);return Ze(),ls(),r});return t?o.unshift(a):o.push(a),a}}const Pe=e=>(s,n=ee)=>(!_s||e==="sp")&&Vs(e,(...t)=>s(...t),n),si=Pe("bm"),Kt=Pe("m"),ni=Pe("bu"),ti=Pe("u"),Gt=Pe("bum"),Xt=Pe("um"),oi=Pe("sp"),ai=Pe("rtg"),ii=Pe("rtc");function ri(e,s=ee){Vs("ec",e,s)}function Ve(e,s,n,t){const o=e.dirs,a=s&&s.dirs;for(let i=0;i<o.length;i++){const r=o[i];a&&(r.oldValue=a[i].value);let c=r.dir[t];c&&(rs(),fe(c,n,8,[e.el,r,e,s]),ls())}}const Zt="components";function Rn(e,s){return ci(Zt,e,!0,s)||e}const li=Symbol();function ci(e,s,n=!0,t=!1){const o=ge||ee;if(o){const a=o.type;if(e===Zt){const r=Mi(a,!1);if(r&&(r===s||r===Se(s)||r===Is(Se(s))))return a}const i=Qt(o[e]||a[e],s)||Qt(o.appContext[e],s);return!i&&t?a:i}}function Qt(e,s){return e&&(e[s]||e[Se(s)]||e[Is(Se(s))])}function eo(e,s,n,t){let o;const a=n&&n[t];if(x(e)||Z(e)){o=new Array(e.length);for(let i=0,r=e.length;i<r;i++)o[i]=s(e[i],i,void 0,a&&a[i])}else if(typeof e=="number"){o=new Array(e);for(let i=0;i<e;i++)o[i]=s(i+1,i,void 0,a&&a[i])}else if(Y(e))if(e[Symbol.iterator])o=Array.from(e,(i,r)=>s(i,r,void 0,a&&a[r]));else{const i=Object.keys(e);o=new Array(i.length);for(let r=0,c=i.length;r<c;r++){const u=i[r];o[r]=s(e[u],u,r,a&&a[r])}}else o=[];return n&&(n[t]=o),o}const Fn=e=>e?jo(e)?Gn(e)||e.proxy:Fn(e.parent):null,vs=te(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Fn(e.parent),$root:e=>Fn(e.root),$emit:e=>e.emit,$options:e=>Yn(e),$forceUpdate:e=>e.f||(e.f=()=>Nn(e.update)),$nextTick:e=>e.n||(e.n=qa.bind(e.proxy)),$watch:e=>Ga.bind(e)}),Mn=(e,s)=>e!==L&&!e.__isScriptSetup&&E(e,s),pi={get({_:e},s){const{ctx:n,setupState:t,data:o,props:a,accessCache:i,type:r,appContext:c}=e;let u;if(s[0]!=="$"){const D=i[s];if(D!==void 0)switch(D){case 1:return t[s];case 2:return o[s];case 4:return n[s];case 3:return a[s]}else{if(Mn(t,s))return i[s]=1,t[s];if(o!==L&&E(o,s))return i[s]=2,o[s];if((u=e.propsOptions[0])&&E(u,s))return i[s]=3,a[s];if(n!==L&&E(n,s))return i[s]=4,n[s];Hn&&(i[s]=0)}}const h=vs[s];let y,v;if(h)return s==="$attrs"&&de(e,"get",s),h(e);if((y=r.__cssModules)&&(y=y[s]))return y;if(n!==L&&E(n,s))return i[s]=4,n[s];if(v=c.config.globalProperties,E(v,s))return v[s]},set({_:e},s,n){const{data:t,setupState:o,ctx:a}=e;return Mn(o,s)?(o[s]=n,!0):t!==L&&E(t,s)?(t[s]=n,!0):E(e.props,s)||s[0]==="$"&&s.slice(1)in e?!1:(a[s]=n,!0)},has({_:{data:e,setupState:s,accessCache:n,ctx:t,appContext:o,propsOptions:a}},i){let r;return!!n[i]||e!==L&&E(e,i)||Mn(s,i)||(r=a[0])&&E(r,i)||E(t,i)||E(vs,i)||E(o.config.globalProperties,i)},defineProperty(e,s,n){return n.get!=null?e._.accessCache[s]=0:E(n,"value")&&this.set(e,s,n.value,null),Reflect.defineProperty(e,s,n)}};let Hn=!0;function ui(e){const s=Yn(e),n=e.proxy,t=e.ctx;Hn=!1,s.beforeCreate&&so(s.beforeCreate,e,"bc");const{data:o,computed:a,methods:i,watch:r,provide:c,inject:u,created:h,beforeMount:y,mounted:v,beforeUpdate:D,updated:C,activated:A,deactivated:V,beforeDestroy:R,beforeUnmount:ce,destroyed:N,unmounted:U,render:se,renderTracked:Le,renderTriggered:ze,errorCaptured:O,serverPrefetch:K,expose:B,inheritAttrs:ae,components:S,directives:W,filters:he}=s;if(u&&di(u,t,null,e.appContext.config.unwrapInjectedRef),i)for(const G in i){const M=i[G];I(M)&&(t[G]=M.bind(n))}if(o){const G=o.call(n,n);Y(G)&&(e.data=Sn(G))}if(Hn=!0,a)for(const G in a){const M=a[G],ns=I(M)?M.bind(n,n):I(M.get)?M.get.bind(n,n):je,tn=!I(M)&&I(M.set)?M.set.bind(n):je,ts=Yi({get:ns,set:tn});Object.defineProperty(t,G,{enumerable:!0,configurable:!0,get:()=>ts.value,set:Ne=>ts.value=Ne})}if(r)for(const G in r)no(r[G],t,n,G);if(c){const G=I(c)?c.call(n):c;Reflect.ownKeys(G).forEach(M=>{Ka(M,G[M])})}h&&so(h,e,"c");function ne(G,M){x(M)?M.forEach(ns=>G(ns.bind(n))):M&&G(M.bind(n))}if(ne(si,y),ne(Kt,v),ne(ni,D),ne(ti,C),ne(Za,A),ne(Qa,V),ne(ri,O),ne(ii,Le),ne(ai,ze),ne(Gt,ce),ne(Xt,U),ne(oi,K),x(B))if(B.length){const G=e.exposed||(e.exposed={});B.forEach(M=>{Object.defineProperty(G,M,{get:()=>n[M],set:ns=>n[M]=ns})})}else e.exposed||(e.exposed={});se&&e.render===je&&(e.render=se),ae!=null&&(e.inheritAttrs=ae),S&&(e.components=S),W&&(e.directives=W)}function di(e,s,n=je,t=!1){x(e)&&(e=Un(e));for(const o in e){const a=e[o];let i;Y(a)?"default"in a?i=Bs(a.from||o,a.default,!0):i=Bs(a.from||o):i=Bs(a),ie(i)&&t?Object.defineProperty(s,o,{enumerable:!0,configurable:!0,get:()=>i.value,set:r=>i.value=r}):s[o]=i}}function so(e,s,n){fe(x(e)?e.map(t=>t.bind(s.proxy)):e.bind(s.proxy),s,n)}function no(e,s,n,t){const o=t.includes(".")?Ut(n,t):()=>n[t];if(Z(e)){const a=s[e];I(a)&&On(o,a)}else if(I(e))On(o,e.bind(n));else if(Y(e))if(x(e))e.forEach(a=>no(a,s,n,t));else{const a=I(e.handler)?e.handler.bind(n):s[e.handler];I(a)&&On(o,a,e)}}function Yn(e){const s=e.type,{mixins:n,extends:t}=s,{mixins:o,optionsCache:a,config:{optionMergeStrategies:i}}=e.appContext,r=a.get(s);let c;return r?c=r:!o.length&&!n&&!t?c=s:(c={},o.length&&o.forEach(u=>Ks(c,u,i,!0)),Ks(c,s,i)),Y(s)&&a.set(s,c),c}function Ks(e,s,n,t=!1){const{mixins:o,extends:a}=s;a&&Ks(e,a,n,!0),o&&o.forEach(i=>Ks(e,i,n,!0));for(const i in s)if(!(t&&i==="expose")){const r=hi[i]||n&&n[i];e[i]=r?r(e[i],s[i]):s[i]}return e}const hi={data:to,props:Ke,emits:Ke,methods:Ke,computed:Ke,beforeCreate:re,created:re,beforeMount:re,mounted:re,beforeUpdate:re,updated:re,beforeDestroy:re,beforeUnmount:re,destroyed:re,unmounted:re,activated:re,deactivated:re,errorCaptured:re,serverPrefetch:re,components:Ke,directives:Ke,watch:fi,provide:to,inject:mi};function to(e,s){return s?e?function(){return te(I(e)?e.call(this,this):e,I(s)?s.call(this,this):s)}:s:e}function mi(e,s){return Ke(Un(e),Un(s))}function Un(e){if(x(e)){const s={};for(let n=0;n<e.length;n++)s[e[n]]=e[n];return s}return e}function re(e,s){return e?[...new Set([].concat(e,s))]:s}function Ke(e,s){return e?te(te(Object.create(null),e),s):s}function fi(e,s){if(!e)return s;if(!s)return e;const n=te(Object.create(null),e);for(const t in s)n[t]=re(e[t],s[t]);return n}function gi(e,s,n,t=!1){const o={},a={};Cs(a,Qs,1),e.propsDefaults=Object.create(null),oo(e,s,o,a);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=t?o:xa(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function yi(e,s,n,t){const{props:o,attrs:a,vnode:{patchFlag:i}}=e,r=q(o),[c]=e.propsOptions;let u=!1;if((t||i>0)&&!(i&16)){if(i&8){const h=e.vnode.dynamicProps;for(let y=0;y<h.length;y++){let v=h[y];if(Ys(e.emitsOptions,v))continue;const D=s[v];if(c)if(E(a,v))D!==a[v]&&(a[v]=D,u=!0);else{const C=Se(v);o[C]=Bn(c,r,C,D,e,!1)}else D!==a[v]&&(a[v]=D,u=!0)}}}else{oo(e,s,o,a)&&(u=!0);let h;for(const y in r)(!s||!E(s,y)&&((h=is(y))===y||!E(s,h)))&&(c?n&&(n[y]!==void 0||n[h]!==void 0)&&(o[y]=Bn(c,r,y,void 0,e,!0)):delete o[y]);if(a!==r)for(const y in a)(!s||!E(s,y))&&(delete a[y],u=!0)}u&&Oe(e,"set","$attrs")}function oo(e,s,n,t){const[o,a]=e.propsOptions;let i=!1,r;if(s)for(let c in s){if(zs(c))continue;const u=s[c];let h;o&&E(o,h=Se(c))?!a||!a.includes(h)?n[h]=u:(r||(r={}))[h]=u:Ys(e.emitsOptions,c)||(!(c in t)||u!==t[c])&&(t[c]=u,i=!0)}if(a){const c=q(n),u=r||L;for(let h=0;h<a.length;h++){const y=a[h];n[y]=Bn(o,c,y,u[y],e,!E(u,y))}}return i}function Bn(e,s,n,t,o,a){const i=e[n];if(i!=null){const r=E(i,"default");if(r&&t===void 0){const c=i.default;if(i.type!==Function&&I(c)){const{propsDefaults:u}=o;n in u?t=u[n]:(ds(o),t=u[n]=c.call(null,s),Ze())}else t=c}i[0]&&(a&&!r?t=!1:i[1]&&(t===""||t===is(n))&&(t=!0))}return t}function ao(e,s,n=!1){const t=s.propsCache,o=t.get(e);if(o)return o;const a=e.props,i={},r=[];let c=!1;if(!I(e)){const h=y=>{c=!0;const[v,D]=ao(y,s,!0);te(i,v),D&&r.push(...D)};!n&&s.mixins.length&&s.mixins.forEach(h),e.extends&&h(e.extends),e.mixins&&e.mixins.forEach(h)}if(!a&&!c)return Y(e)&&t.set(e,os),os;if(x(a))for(let h=0;h<a.length;h++){const y=Se(a[h]);io(y)&&(i[y]=L)}else if(a)for(const h in a){const y=Se(h);if(io(y)){const v=a[h],D=i[y]=x(v)||I(v)?{type:v}:Object.assign({},v);if(D){const C=co(Boolean,D.type),A=co(String,D.type);D[0]=C>-1,D[1]=A<0||C<A,(C>-1||E(D,"default"))&&r.push(y)}}}const u=[i,r];return Y(e)&&t.set(e,u),u}function io(e){return e[0]!=="$"}function ro(e){const s=e&&e.toString().match(/^\s*function (\w+)/);return s?s[1]:e===null?"null":""}function lo(e,s){return ro(e)===ro(s)}function co(e,s){return x(s)?s.findIndex(n=>lo(n,e)):I(s)&&lo(s,e)?0:-1}const po=e=>e[0]==="_"||e==="$stable",Ln=e=>x(e)?e.map(Ae):[Ae(e)],bi=(e,s,n)=>{if(s._n)return s;const t=Mt((...o)=>Ln(s(...o)),n);return t._c=!1,t},uo=(e,s,n)=>{const t=e._ctx;for(const o in e){if(po(o))continue;const a=e[o];if(I(a))s[o]=bi(o,a,t);else if(a!=null){const i=Ln(a);s[o]=()=>i}}},ho=(e,s)=>{const n=Ln(s);e.slots.default=()=>n},ji=(e,s)=>{if(e.vnode.shapeFlag&32){const n=s._;n?(e.slots=q(s),Cs(s,"_",n)):uo(s,e.slots={})}else e.slots={},s&&ho(e,s);Cs(e.slots,Qs,1)},vi=(e,s,n)=>{const{vnode:t,slots:o}=e;let a=!0,i=L;if(t.shapeFlag&32){const r=s._;r?n&&r===1?a=!1:(te(o,s),!n&&r===1&&delete o._):(a=!s.$stable,uo(s,o)),i=s}else s&&(ho(e,s),i={default:1});if(a)for(const r in o)!po(r)&&!(r in i)&&delete o[r]};function mo(){return{app:null,config:{isNativeTag:Vo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wi=0;function Ji(e,s){return function(t,o=null){I(t)||(t=Object.assign({},t)),o!=null&&!Y(o)&&(o=null);const a=mo(),i=new Set;let r=!1;const c=a.app={_uid:wi++,_component:t,_props:o,_container:null,_context:a,_instance:null,version:Wi,get config(){return a.config},set config(u){},use(u,...h){return i.has(u)||(u&&I(u.install)?(i.add(u),u.install(c,...h)):I(u)&&(i.add(u),u(c,...h))),c},mixin(u){return a.mixins.includes(u)||a.mixins.push(u),c},component(u,h){return h?(a.components[u]=h,c):a.components[u]},directive(u,h){return h?(a.directives[u]=h,c):a.directives[u]},mount(u,h,y){if(!r){const v=le(t,o);return v.appContext=a,h&&s?s(v,u):e(v,u,y),r=!0,c._container=u,u.__vue_app__=c,Gn(v.component)||v.component.proxy}},unmount(){r&&(e(null,c._container),delete c._container.__vue_app__)},provide(u,h){return a.provides[u]=h,c}};return c}}function Wn(e,s,n,t,o=!1){if(x(e)){e.forEach((v,D)=>Wn(v,s&&(x(s)?s[D]:s),n,t,o));return}if(Ws(t)&&!o)return;const a=t.shapeFlag&4?Gn(t.component)||t.component.proxy:t.el,i=o?null:a,{i:r,r:c}=e,u=s&&s.r,h=r.refs===L?r.refs={}:r.refs,y=r.setupState;if(u!=null&&u!==c&&(Z(u)?(h[u]=null,E(y,u)&&(y[u]=null)):ie(u)&&(u.value=null)),I(c))Me(c,r,12,[i,h]);else{const v=Z(c),D=ie(c);if(v||D){const C=()=>{if(e.f){const A=v?E(y,c)?y[c]:h[c]:c.value;o?x(A)&&cn(A,a):x(A)?A.includes(a)||A.push(a):v?(h[c]=[a],E(y,c)&&(y[c]=h[c])):(c.value=[a],e.k&&(h[e.k]=c.value))}else v?(h[c]=i,E(y,c)&&(y[c]=i)):D&&(c.value=i,e.k&&(h[e.k]=i))};i?(C.id=-1,pe(C,n)):C()}}}const pe=Va;function _i(e){return Si(e)}function Si(e,s){const n=ea();n.__VUE__=!0;const{insert:t,remove:o,patchProp:a,createElement:i,createText:r,createComment:c,setText:u,setElementText:h,parentNode:y,nextSibling:v,setScopeId:D=je,insertStaticContent:C}=e,A=(l,p,d,f=null,m=null,j=null,J=!1,b=null,w=!!p.dynamicChildren)=>{if(l===p)return;l&&!Xe(l,p)&&(f=on(l),Ne(l,m,j,!0),l=null),p.patchFlag===-2&&(w=!1,p.dynamicChildren=null);const{type:g,ref:T,shapeFlag:_}=p;switch(g){case Gs:V(l,p,d,f);break;case we:R(l,p,d,f);break;case Xs:l==null&&ce(p,d,f,J);break;case be:S(l,p,d,f,m,j,J,b,w);break;default:_&1?se(l,p,d,f,m,j,J,b,w):_&6?W(l,p,d,f,m,j,J,b,w):(_&64||_&128)&&g.process(l,p,d,f,m,j,J,b,w,hs)}T!=null&&m&&Wn(T,l&&l.ref,j,p||l,!p)},V=(l,p,d,f)=>{if(l==null)t(p.el=r(p.children),d,f);else{const m=p.el=l.el;p.children!==l.children&&u(m,p.children)}},R=(l,p,d,f)=>{l==null?t(p.el=c(p.children||""),d,f):p.el=l.el},ce=(l,p,d,f)=>{[l.el,l.anchor]=C(l.children,p,d,f,l.el,l.anchor)},N=({el:l,anchor:p},d,f)=>{let m;for(;l&&l!==p;)m=v(l),t(l,d,f),l=m;t(p,d,f)},U=({el:l,anchor:p})=>{let d;for(;l&&l!==p;)d=v(l),o(l),l=d;o(p)},se=(l,p,d,f,m,j,J,b,w)=>{J=J||p.type==="svg",l==null?Le(p,d,f,m,j,J,b,w):K(l,p,m,j,J,b,w)},Le=(l,p,d,f,m,j,J,b)=>{let w,g;const{type:T,props:_,shapeFlag:k,transition:z,dirs:P}=l;if(w=l.el=i(l.type,j,_&&_.is,_),k&8?h(w,l.children):k&16&&O(l.children,w,null,f,m,j&&T!=="foreignObject",J,b),P&&Ve(l,null,f,"created"),_){for(const F in _)F!=="value"&&!zs(F)&&a(w,F,null,_[F],j,l.children,f,m,Ee);"value"in _&&a(w,"value",null,_.value),(g=_.onVnodeBeforeMount)&&xe(g,f,l)}ze(w,l,l.scopeId,J,f),P&&Ve(l,null,f,"beforeMount");const H=(!m||m&&!m.pendingBranch)&&z&&!z.persisted;H&&z.beforeEnter(w),t(w,p,d),((g=_&&_.onVnodeMounted)||H||P)&&pe(()=>{g&&xe(g,f,l),H&&z.enter(w),P&&Ve(l,null,f,"mounted")},m)},ze=(l,p,d,f,m)=>{if(d&&D(l,d),f)for(let j=0;j<f.length;j++)D(l,f[j]);if(m){let j=m.subTree;if(p===j){const J=m.vnode;ze(l,J,J.scopeId,J.slotScopeIds,m.parent)}}},O=(l,p,d,f,m,j,J,b,w=0)=>{for(let g=w;g<l.length;g++){const T=l[g]=b?Ye(l[g]):Ae(l[g]);A(null,T,p,d,f,m,j,J,b)}},K=(l,p,d,f,m,j,J)=>{const b=p.el=l.el;let{patchFlag:w,dynamicChildren:g,dirs:T}=p;w|=l.patchFlag&16;const _=l.props||L,k=p.props||L;let z;d&&Ge(d,!1),(z=k.onVnodeBeforeUpdate)&&xe(z,d,p,l),T&&Ve(p,l,d,"beforeUpdate"),d&&Ge(d,!0);const P=m&&p.type!=="foreignObject";if(g?B(l.dynamicChildren,g,b,d,f,P,j):J||M(l,p,b,null,d,f,P,j,!1),w>0){if(w&16)ae(b,p,_,k,d,f,m);else if(w&2&&_.class!==k.class&&a(b,"class",null,k.class,m),w&4&&a(b,"style",_.style,k.style,m),w&8){const H=p.dynamicProps;for(let F=0;F<H.length;F++){const X=H[F],_e=_[X],ms=k[X];(ms!==_e||X==="value")&&a(b,X,_e,ms,m,l.children,d,f,Ee)}}w&1&&l.children!==p.children&&h(b,p.children)}else!J&&g==null&&ae(b,p,_,k,d,f,m);((z=k.onVnodeUpdated)||T)&&pe(()=>{z&&xe(z,d,p,l),T&&Ve(p,l,d,"updated")},f)},B=(l,p,d,f,m,j,J)=>{for(let b=0;b<p.length;b++){const w=l[b],g=p[b],T=w.el&&(w.type===be||!Xe(w,g)||w.shapeFlag&70)?y(w.el):d;A(w,g,T,null,f,m,j,J,!0)}},ae=(l,p,d,f,m,j,J)=>{if(d!==f){if(d!==L)for(const b in d)!zs(b)&&!(b in f)&&a(l,b,d[b],null,J,p.children,m,j,Ee);for(const b in f){if(zs(b))continue;const w=f[b],g=d[b];w!==g&&b!=="value"&&a(l,b,g,w,J,p.children,m,j,Ee)}"value"in f&&a(l,"value",d.value,f.value)}},S=(l,p,d,f,m,j,J,b,w)=>{const g=p.el=l?l.el:r(""),T=p.anchor=l?l.anchor:r("");let{patchFlag:_,dynamicChildren:k,slotScopeIds:z}=p;z&&(b=b?b.concat(z):z),l==null?(t(g,d,f),t(T,d,f),O(p.children,d,T,m,j,J,b,w)):_>0&&_&64&&k&&l.dynamicChildren?(B(l.dynamicChildren,k,d,m,j,J,b),(p.key!=null||m&&p===m.subTree)&&fo(l,p,!0)):M(l,p,d,T,m,j,J,b,w)},W=(l,p,d,f,m,j,J,b,w)=>{p.slotScopeIds=b,l==null?p.shapeFlag&512?m.ctx.activate(p,d,f,J,w):he(p,d,f,m,j,J,w):Ts(l,p,w)},he=(l,p,d,f,m,j,J)=>{const b=l.component=Ci(l,f,m);if($s(l)&&(b.ctx.renderer=hs),Ei(b),b.asyncDep){if(m&&m.registerDep(b,ne),!l.el){const w=b.subTree=le(we);R(null,w,p,d)}return}ne(b,l,p,d,m,j,J)},Ts=(l,p,d)=>{const f=p.component=l.component;if(La(l,p,d))if(f.asyncDep&&!f.asyncResolved){G(f,p,d);return}else f.next=p,Fa(f.update),f.update();else p.el=l.el,f.vnode=p},ne=(l,p,d,f,m,j,J)=>{const b=()=>{if(l.isMounted){let{next:T,bu:_,u:k,parent:z,vnode:P}=l,H=T,F;Ge(l,!1),T?(T.el=P.el,G(l,T,J)):T=P,_&&hn(_),(F=T.props&&T.props.onVnodeBeforeUpdate)&&xe(F,z,T,P),Ge(l,!0);const X=In(l),_e=l.subTree;l.subTree=X,A(_e,X,y(_e.el),on(_e),l,m,j),T.el=X.el,H===null&&Wa(l,X.el),k&&pe(k,m),(F=T.props&&T.props.onVnodeUpdated)&&pe(()=>xe(F,z,T,P),m)}else{let T;const{el:_,props:k}=p,{bm:z,m:P,parent:H}=l,F=Ws(p);if(Ge(l,!1),z&&hn(z),!F&&(T=k&&k.onVnodeBeforeMount)&&xe(T,H,p),Ge(l,!0),_&&tt){const X=()=>{l.subTree=In(l),tt(_,l.subTree,l,m,null)};F?p.type.__asyncLoader().then(()=>!l.isUnmounted&&X()):X()}else{const X=l.subTree=In(l);A(null,X,d,f,l,m,j),p.el=X.el}if(P&&pe(P,m),!F&&(T=k&&k.onVnodeMounted)){const X=p;pe(()=>xe(T,H,X),m)}(p.shapeFlag&256||H&&Ws(H.vnode)&&H.vnode.shapeFlag&256)&&l.a&&pe(l.a,m),l.isMounted=!0,p=d=f=null}},w=l.effect=new jn(b,()=>Nn(g),l.scope),g=l.update=()=>w.run();g.id=l.uid,Ge(l,!0),g()},G=(l,p,d)=>{p.component=l;const f=l.vnode.props;l.vnode=p,l.next=null,yi(l,p.props,f,d),vi(l,p.children,d),rs(),Pt(),ls()},M=(l,p,d,f,m,j,J,b,w=!1)=>{const g=l&&l.children,T=l?l.shapeFlag:0,_=p.children,{patchFlag:k,shapeFlag:z}=p;if(k>0){if(k&128){tn(g,_,d,f,m,j,J,b,w);return}else if(k&256){ns(g,_,d,f,m,j,J,b,w);return}}z&8?(T&16&&Ee(g,m,j),_!==g&&h(d,_)):T&16?z&16?tn(g,_,d,f,m,j,J,b,w):Ee(g,m,j,!0):(T&8&&h(d,""),z&16&&O(_,d,f,m,j,J,b,w))},ns=(l,p,d,f,m,j,J,b,w)=>{l=l||os,p=p||os;const g=l.length,T=p.length,_=Math.min(g,T);let k;for(k=0;k<_;k++){const z=p[k]=w?Ye(p[k]):Ae(p[k]);A(l[k],z,d,null,m,j,J,b,w)}g>T?Ee(l,m,j,!0,!1,_):O(p,d,f,m,j,J,b,w,_)},tn=(l,p,d,f,m,j,J,b,w)=>{let g=0;const T=p.length;let _=l.length-1,k=T-1;for(;g<=_&&g<=k;){const z=l[g],P=p[g]=w?Ye(p[g]):Ae(p[g]);if(Xe(z,P))A(z,P,d,null,m,j,J,b,w);else break;g++}for(;g<=_&&g<=k;){const z=l[_],P=p[k]=w?Ye(p[k]):Ae(p[k]);if(Xe(z,P))A(z,P,d,null,m,j,J,b,w);else break;_--,k--}if(g>_){if(g<=k){const z=k+1,P=z<T?p[z].el:f;for(;g<=k;)A(null,p[g]=w?Ye(p[g]):Ae(p[g]),d,P,m,j,J,b,w),g++}}else if(g>k)for(;g<=_;)Ne(l[g],m,j,!0),g++;else{const z=g,P=g,H=new Map;for(g=P;g<=k;g++){const me=p[g]=w?Ye(p[g]):Ae(p[g]);me.key!=null&&H.set(me.key,g)}let F,X=0;const _e=k-P+1;let ms=!1,Mo=0;const ks=new Array(_e);for(g=0;g<_e;g++)ks[g]=0;for(g=z;g<=_;g++){const me=l[g];if(X>=_e){Ne(me,m,j,!0);continue}let Ie;if(me.key!=null)Ie=H.get(me.key);else for(F=P;F<=k;F++)if(ks[F-P]===0&&Xe(me,p[F])){Ie=F;break}Ie===void 0?Ne(me,m,j,!0):(ks[Ie-P]=g+1,Ie>=Mo?Mo=Ie:ms=!0,A(me,p[Ie],d,null,m,j,J,b,w),X++)}const Ho=ms?Ti(ks):os;for(F=Ho.length-1,g=_e-1;g>=0;g--){const me=P+g,Ie=p[me],Yo=me+1<T?p[me+1].el:f;ks[g]===0?A(null,Ie,d,Yo,m,j,J,b,w):ms&&(F<0||g!==Ho[F]?ts(Ie,d,Yo,2):F--)}}},ts=(l,p,d,f,m=null)=>{const{el:j,type:J,transition:b,children:w,shapeFlag:g}=l;if(g&6){ts(l.component.subTree,p,d,f);return}if(g&128){l.suspense.move(p,d,f);return}if(g&64){J.move(l,p,d,hs);return}if(J===be){t(j,p,d);for(let _=0;_<w.length;_++)ts(w[_],p,d,f);t(l.anchor,p,d);return}if(J===Xs){N(l,p,d);return}if(f!==2&&g&1&&b)if(f===0)b.beforeEnter(j),t(j,p,d),pe(()=>b.enter(j),m);else{const{leave:_,delayLeave:k,afterLeave:z}=b,P=()=>t(j,p,d),H=()=>{_(j,()=>{P(),z&&z()})};k?k(j,P,H):H()}else t(j,p,d)},Ne=(l,p,d,f=!1,m=!1)=>{const{type:j,props:J,ref:b,children:w,dynamicChildren:g,shapeFlag:T,patchFlag:_,dirs:k}=l;if(b!=null&&Wn(b,null,d,l,!0),T&256){p.ctx.deactivate(l);return}const z=T&1&&k,P=!Ws(l);let H;if(P&&(H=J&&J.onVnodeBeforeUnmount)&&xe(H,p,l),T&6)sl(l.component,d,f);else{if(T&128){l.suspense.unmount(d,f);return}z&&Ve(l,null,p,"beforeUnmount"),T&64?l.type.remove(l,p,d,m,hs,f):g&&(j!==be||_>0&&_&64)?Ee(g,p,d,!1,!0):(j===be&&_&384||!m&&T&16)&&Ee(w,p,d),f&&Ro(l)}(P&&(H=J&&J.onVnodeUnmounted)||z)&&pe(()=>{H&&xe(H,p,l),z&&Ve(l,null,p,"unmounted")},d)},Ro=l=>{const{type:p,el:d,anchor:f,transition:m}=l;if(p===be){el(d,f);return}if(p===Xs){U(l);return}const j=()=>{o(d),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(l.shapeFlag&1&&m&&!m.persisted){const{leave:J,delayLeave:b}=m,w=()=>J(d,j);b?b(l.el,j,w):w()}else j()},el=(l,p)=>{let d;for(;l!==p;)d=v(l),o(l),l=d;o(p)},sl=(l,p,d)=>{const{bum:f,scope:m,update:j,subTree:J,um:b}=l;f&&hn(f),m.stop(),j&&(j.active=!1,Ne(J,l,p,d)),b&&pe(b,p),pe(()=>{l.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ee=(l,p,d,f=!1,m=!1,j=0)=>{for(let J=j;J<l.length;J++)Ne(l[J],p,d,f,m)},on=l=>l.shapeFlag&6?on(l.component.subTree):l.shapeFlag&128?l.suspense.next():v(l.anchor||l.el),Fo=(l,p,d)=>{l==null?p._vnode&&Ne(p._vnode,null,null,!0):A(p._vnode||null,l,p,null,null,null,d),Pt(),Et(),p._vnode=l},hs={p:A,um:Ne,m:ts,r:Ro,mt:he,mc:O,pc:M,pbc:B,n:on,o:e};let nt,tt;return s&&([nt,tt]=s(hs)),{render:Fo,hydrate:nt,createApp:Ji(Fo,nt)}}function Ge({effect:e,update:s},n){e.allowRecurse=s.allowRecurse=n}function fo(e,s,n=!1){const t=e.children,o=s.children;if(x(t)&&x(o))for(let a=0;a<t.length;a++){const i=t[a];let r=o[a];r.shapeFlag&1&&!r.dynamicChildren&&((r.patchFlag<=0||r.patchFlag===32)&&(r=o[a]=Ye(o[a]),r.el=i.el),n||fo(i,r)),r.type===Gs&&(r.el=i.el)}}function Ti(e){const s=e.slice(),n=[0];let t,o,a,i,r;const c=e.length;for(t=0;t<c;t++){const u=e[t];if(u!==0){if(o=n[n.length-1],e[o]<u){s[t]=o,n.push(t);continue}for(a=0,i=n.length-1;a<i;)r=a+i>>1,e[n[r]]<u?a=r+1:i=r;u<e[n[a]]&&(a>0&&(s[t]=n[a-1]),n[a]=t)}}for(a=n.length,i=n[a-1];a-- >0;)n[a]=i,i=s[i];return n}const ki=e=>e.__isTeleport,be=Symbol(void 0),Gs=Symbol(void 0),we=Symbol(void 0),Xs=Symbol(void 0),ws=[];let Je=null;function ue(e=!1){ws.push(Je=e?null:[])}function Di(){ws.pop(),Je=ws[ws.length-1]||null}let Js=1;function go(e){Js+=e}function yo(e){return e.dynamicChildren=Js>0?Je||os:null,Di(),Js>0&&Je&&Je.push(e),e}function De(e,s,n,t,o,a){return yo(Q(e,s,n,t,o,a,!0))}function Zs(e,s,n,t,o){return yo(le(e,s,n,t,o,!0))}function $n(e){return e?e.__v_isVNode===!0:!1}function Xe(e,s){return e.type===s.type&&e.key===s.key}const Qs="__vInternal",bo=({key:e})=>e??null,en=({ref:e,ref_key:s,ref_for:n})=>e!=null?Z(e)||ie(e)||I(e)?{i:ge,r:e,k:s,f:!!n}:e:null;function Q(e,s=null,n=null,t=0,o=null,a=e===be?0:1,i=!1,r=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:s,key:s&&bo(s),ref:s&&en(s),scopeId:Ft,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:t,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:ge};return r?(Kn(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=Z(n)?8:16),Js>0&&!i&&Je&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&Je.push(c),c}const le=Ai;function Ai(e,s=null,n=null,t=0,o=null,a=!1){if((!e||e===li)&&(e=we),$n(e)){const r=He(e,s,!0);return n&&Kn(r,n),Js>0&&!a&&Je&&(r.shapeFlag&6?Je[Je.indexOf(e)]=r:Je.push(r)),r.patchFlag|=-2,r}if(Hi(e)&&(e=e.__vccOpts),s){s=xi(s);let{class:r,style:c}=s;r&&!Z(r)&&(s.class=fs(r)),Y(c)&&(xt(c)&&!x(c)&&(c=te({},c)),s.style=rn(c))}const i=Z(e)?1:$a(e)?128:ki(e)?64:Y(e)?4:I(e)?2:0;return Q(e,s,n,t,o,i,a,!0)}function xi(e){return e?xt(e)||Qs in e?te({},e):e:null}function He(e,s,n=!1){const{props:t,ref:o,patchFlag:a,children:i}=e,r=s?Ni(t||{},s):t;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:r,key:r&&bo(r),ref:s&&s.ref?n&&o?x(o)?o.concat(en(s)):[o,en(s)]:en(s):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:s&&e.type!==be?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&He(e.ssContent),ssFallback:e.ssFallback&&He(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx}}function sn(e=" ",s=0){return le(Gs,null,e,s)}function zi(e,s){const n=le(Xs,null,e);return n.staticCount=s,n}function Vn(e="",s=!1){return s?(ue(),Zs(we,null,e)):le(we,null,e)}function Ae(e){return e==null||typeof e=="boolean"?le(we):x(e)?le(be,null,e.slice()):typeof e=="object"?Ye(e):le(Gs,null,String(e))}function Ye(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:He(e)}function Kn(e,s){let n=0;const{shapeFlag:t}=e;if(s==null)s=null;else if(x(s))n=16;else if(typeof s=="object")if(t&65){const o=s.default;o&&(o._c&&(o._d=!1),Kn(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=s._;!o&&!(Qs in s)?s._ctx=ge:o===3&&ge&&(ge.slots._===1?s._=1:(s._=2,e.patchFlag|=1024))}else I(s)?(s={default:s,_ctx:ge},n=32):(s=String(s),t&64?(n=16,s=[sn(s)]):n=8);e.children=s,e.shapeFlag|=n}function Ni(...e){const s={};for(let n=0;n<e.length;n++){const t=e[n];for(const o in t)if(o==="class")s.class!==t.class&&(s.class=fs([s.class,t.class]));else if(o==="style")s.style=rn([s.style,t.style]);else if(As(o)){const a=s[o],i=t[o];i&&a!==i&&!(x(a)&&a.includes(i))&&(s[o]=a?[].concat(a,i):i)}else o!==""&&(s[o]=t[o])}return s}function xe(e,s,n,t=null){fe(e,s,7,[n,t])}const Ii=mo();let Oi=0;function Ci(e,s,n){const t=e.type,o=(s?s.appContext:e.appContext)||Ii,a={uid:Oi++,vnode:e,type:t,parent:s,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new sa(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:s?s.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ao(t,o),emitsOptions:Rt(t,o),emit:null,emitted:null,propsDefaults:L,inheritAttrs:t.inheritAttrs,ctx:L,data:L,props:L,attrs:L,slots:L,refs:L,setupState:L,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=s?s.root:a,a.emit=Ya.bind(null,a),e.ce&&e.ce(a),a}let ee=null;const Pi=()=>ee||ge,ds=e=>{ee=e,e.scope.on()},Ze=()=>{ee&&ee.scope.off(),ee=null};function jo(e){return e.vnode.shapeFlag&4}let _s=!1;function Ei(e,s=!1){_s=s;const{props:n,children:t}=e.vnode,o=jo(e);gi(e,n,o,s),ji(e,t);const a=o?qi(e,s):void 0;return _s=!1,a}function qi(e,s){const n=e.type;e.accessCache=Object.create(null),e.proxy=zt(new Proxy(e.ctx,pi));const{setup:t}=n;if(t){const o=e.setupContext=t.length>1?Fi(e):null;ds(e),rs();const a=Me(t,e,0,[e.props,o]);if(ls(),Ze(),rt(a)){if(a.then(Ze,Ze),s)return a.then(i=>{vo(e,i,s)}).catch(i=>{Hs(i,e,0)});e.asyncDep=a}else vo(e,a,s)}else Jo(e,s)}function vo(e,s,n){I(s)?e.type.__ssrInlineRender?e.ssrRender=s:e.render=s:Y(s)&&(e.setupState=Nt(s)),Jo(e,n)}let wo;function Jo(e,s,n){const t=e.type;if(!e.render){if(!s&&wo&&!t.render){const o=t.template||Yn(e).template;if(o){const{isCustomElement:a,compilerOptions:i}=e.appContext.config,{delimiters:r,compilerOptions:c}=t,u=te(te({isCustomElement:a,delimiters:r},i),c);t.render=wo(o,u)}}e.render=t.render||je}ds(e),rs(),ui(e),ls(),Ze()}function Ri(e){return new Proxy(e.attrs,{get(s,n){return de(e,"get","$attrs"),s[n]}})}function Fi(e){const s=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=Ri(e))},slots:e.slots,emit:e.emit,expose:s}}function Gn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Nt(zt(e.exposed)),{get(s,n){if(n in s)return s[n];if(n in vs)return vs[n](e)},has(s,n){return n in s||n in vs}}))}function Mi(e,s=!0){return I(e)?e.displayName||e.name:e.name||s&&e.__name}function Hi(e){return I(e)&&"__vccOpts"in e}const Yi=(e,s)=>Pa(e,s,_s);function Ui(e,s,n){const t=arguments.length;return t===2?Y(s)&&!x(s)?$n(s)?le(e,null,[s]):le(e,s):le(e,null,s):(t>3?n=Array.prototype.slice.call(arguments,2):t===3&&$n(n)&&(n=[n]),le(e,s,n))}const Bi=Symbol(""),Li=()=>Bs(Bi),Wi="3.2.45",$i="http://www.w3.org/2000/svg",Qe=typeof document<"u"?document:null,_o=Qe&&Qe.createElement("template"),Vi={insert:(e,s,n)=>{s.insertBefore(e,n||null)},remove:e=>{const s=e.parentNode;s&&s.removeChild(e)},createElement:(e,s,n,t)=>{const o=s?Qe.createElementNS($i,e):Qe.createElement(e,n?{is:n}:void 0);return e==="select"&&t&&t.multiple!=null&&o.setAttribute("multiple",t.multiple),o},createText:e=>Qe.createTextNode(e),createComment:e=>Qe.createComment(e),setText:(e,s)=>{e.nodeValue=s},setElementText:(e,s)=>{e.textContent=s},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Qe.querySelector(e),setScopeId(e,s){e.setAttribute(s,"")},insertStaticContent(e,s,n,t,o,a){const i=n?n.previousSibling:s.lastChild;if(o&&(o===a||o.nextSibling))for(;s.insertBefore(o.cloneNode(!0),n),!(o===a||!(o=o.nextSibling)););else{_o.innerHTML=t?`<svg>${e}</svg>`:e;const r=_o.content;if(t){const c=r.firstChild;for(;c.firstChild;)r.appendChild(c.firstChild);r.removeChild(c)}s.insertBefore(r,n)}return[i?i.nextSibling:s.firstChild,n?n.previousSibling:s.lastChild]}};function Ki(e,s,n){const t=e._vtc;t&&(s=(s?[s,...t]:[...t]).join(" ")),s==null?e.removeAttribute("class"):n?e.setAttribute("class",s):e.className=s}function Gi(e,s,n){const t=e.style,o=Z(n);if(n&&!o){for(const a in n)Xn(t,a,n[a]);if(s&&!Z(s))for(const a in s)n[a]==null&&Xn(t,a,"")}else{const a=t.display;o?s!==n&&(t.cssText=n):s&&e.removeAttribute("style"),"_vod"in e&&(t.display=a)}}const So=/\s*!important$/;function Xn(e,s,n){if(x(n))n.forEach(t=>Xn(e,s,t));else if(n==null&&(n=""),s.startsWith("--"))e.setProperty(s,n);else{const t=Xi(e,s);So.test(n)?e.setProperty(is(t),n.replace(So,""),"important"):e[t]=n}}const To=["Webkit","Moz","ms"],Zn={};function Xi(e,s){const n=Zn[s];if(n)return n;let t=Se(s);if(t!=="filter"&&t in e)return Zn[s]=t;t=Is(t);for(let o=0;o<To.length;o++){const a=To[o]+t;if(a in e)return Zn[s]=a}return s}const ko="http://www.w3.org/1999/xlink";function Zi(e,s,n,t,o){if(t&&s.startsWith("xlink:"))n==null?e.removeAttributeNS(ko,s.slice(6,s.length)):e.setAttributeNS(ko,s,n);else{const a=$o(s);n==null||a&&!ot(n)?e.removeAttribute(s):e.setAttribute(s,a?"":n)}}function Qi(e,s,n,t,o,a,i){if(s==="innerHTML"||s==="textContent"){t&&i(t,o,a),e[s]=n??"";return}if(s==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const c=n??"";(e.value!==c||e.tagName==="OPTION")&&(e.value=c),n==null&&e.removeAttribute(s);return}let r=!1;if(n===""||n==null){const c=typeof e[s];c==="boolean"?n=ot(n):n==null&&c==="string"?(n="",r=!0):c==="number"&&(n=0,r=!0)}try{e[s]=n}catch{}r&&e.removeAttribute(s)}function er(e,s,n,t){e.addEventListener(s,n,t)}function sr(e,s,n,t){e.removeEventListener(s,n,t)}function nr(e,s,n,t,o=null){const a=e._vei||(e._vei={}),i=a[s];if(t&&i)i.value=t;else{const[r,c]=tr(s);if(t){const u=a[s]=ir(t,o);er(e,r,u,c)}else i&&(sr(e,r,i,c),a[s]=void 0)}}const Do=/(?:Once|Passive|Capture)$/;function tr(e){let s;if(Do.test(e)){s={};let t;for(;t=e.match(Do);)e=e.slice(0,e.length-t[0].length),s[t[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):is(e.slice(2)),s]}let Qn=0;const or=Promise.resolve(),ar=()=>Qn||(or.then(()=>Qn=0),Qn=Date.now());function ir(e,s){const n=t=>{if(!t._vts)t._vts=Date.now();else if(t._vts<=n.attached)return;fe(rr(t,n.value),s,5,[t])};return n.value=e,n.attached=ar(),n}function rr(e,s){if(x(s)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},s.map(t=>o=>!o._stopped&&t&&t(o))}else return s}const Ao=/^on[a-z]/,lr=(e,s,n,t,o=!1,a,i,r,c)=>{s==="class"?Ki(e,t,o):s==="style"?Gi(e,n,t):As(s)?ln(s)||nr(e,s,n,t,i):(s[0]==="."?(s=s.slice(1),!0):s[0]==="^"?(s=s.slice(1),!1):cr(e,s,t,o))?Qi(e,s,t,a,i,r,c):(s==="true-value"?e._trueValue=t:s==="false-value"&&(e._falseValue=t),Zi(e,s,t,o))};function cr(e,s,n,t){return t?!!(s==="innerHTML"||s==="textContent"||s in e&&Ao.test(s)&&I(n)):s==="spellcheck"||s==="draggable"||s==="translate"||s==="form"||s==="list"&&e.tagName==="INPUT"||s==="type"&&e.tagName==="TEXTAREA"||Ao.test(s)&&Z(n)?!1:s in e}const Ue="transition",Ss="animation",et=(e,{slots:s})=>Ui(Bt,pr(e),s);et.displayName="Transition";const xo={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};et.props=te({},Bt.props,xo);const es=(e,s=[])=>{x(e)?e.forEach(n=>n(...s)):e&&e(...s)},zo=e=>e?x(e)?e.some(s=>s.length>1):e.length>1:!1;function pr(e){const s={};for(const S in e)S in xo||(s[S]=e[S]);if(e.css===!1)return s;const{name:n="v",type:t,duration:o,enterFromClass:a=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:r=`${n}-enter-to`,appearFromClass:c=a,appearActiveClass:u=i,appearToClass:h=r,leaveFromClass:y=`${n}-leave-from`,leaveActiveClass:v=`${n}-leave-active`,leaveToClass:D=`${n}-leave-to`}=e,C=ur(o),A=C&&C[0],V=C&&C[1],{onBeforeEnter:R,onEnter:ce,onEnterCancelled:N,onLeave:U,onLeaveCancelled:se,onBeforeAppear:Le=R,onAppear:ze=ce,onAppearCancelled:O=N}=s,K=(S,W,he)=>{ss(S,W?h:r),ss(S,W?u:i),he&&he()},B=(S,W)=>{S._isLeaving=!1,ss(S,y),ss(S,D),ss(S,v),W&&W()},ae=S=>(W,he)=>{const Ts=S?ze:ce,ne=()=>K(W,S,he);es(Ts,[W,ne]),No(()=>{ss(W,S?c:a),Be(W,S?h:r),zo(Ts)||Io(W,t,A,ne)})};return te(s,{onBeforeEnter(S){es(R,[S]),Be(S,a),Be(S,i)},onBeforeAppear(S){es(Le,[S]),Be(S,c),Be(S,u)},onEnter:ae(!1),onAppear:ae(!0),onLeave(S,W){S._isLeaving=!0;const he=()=>B(S,W);Be(S,y),mr(),Be(S,v),No(()=>{S._isLeaving&&(ss(S,y),Be(S,D),zo(U)||Io(S,t,V,he))}),es(U,[S,he])},onEnterCancelled(S){K(S,!1),es(N,[S])},onAppearCancelled(S){K(S,!0),es(O,[S])},onLeaveCancelled(S){B(S),es(se,[S])}})}function ur(e){if(e==null)return null;if(Y(e))return[st(e.enter),st(e.leave)];{const s=st(e);return[s,s]}}function st(e){return mn(e)}function Be(e,s){s.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(s)}function ss(e,s){s.split(/\s+/).forEach(t=>t&&e.classList.remove(t));const{_vtc:n}=e;n&&(n.delete(s),n.size||(e._vtc=void 0))}function No(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let dr=0;function Io(e,s,n,t){const o=e._endId=++dr,a=()=>{o===e._endId&&t()};if(n)return setTimeout(a,n);const{type:i,timeout:r,propCount:c}=hr(e,s);if(!i)return t();const u=i+"end";let h=0;const y=()=>{e.removeEventListener(u,v),a()},v=D=>{D.target===e&&++h>=c&&y()};setTimeout(()=>{h<c&&y()},r+1),e.addEventListener(u,v)}function hr(e,s){const n=window.getComputedStyle(e),t=C=>(n[C]||"").split(", "),o=t(`${Ue}Delay`),a=t(`${Ue}Duration`),i=Oo(o,a),r=t(`${Ss}Delay`),c=t(`${Ss}Duration`),u=Oo(r,c);let h=null,y=0,v=0;s===Ue?i>0&&(h=Ue,y=i,v=a.length):s===Ss?u>0&&(h=Ss,y=u,v=c.length):(y=Math.max(i,u),h=y>0?i>u?Ue:Ss:null,v=h?h===Ue?a.length:c.length:0);const D=h===Ue&&/\b(transform|all)(,|$)/.test(t(`${Ue}Property`).toString());return{type:h,timeout:y,propCount:v,hasTransform:D}}function Oo(e,s){for(;e.length<s.length;)e=e.concat(e);return Math.max(...s.map((n,t)=>Co(n)+Co(e[t])))}function Co(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function mr(){return document.body.offsetHeight}const fr=["ctrl","shift","alt","meta"],gr={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,s)=>fr.some(n=>e[`${n}Key`]&&!s.includes(n))},yr=(e,s)=>(n,...t)=>{for(let o=0;o<s.length;o++){const a=gr[s[o]];if(a&&a(n,s))return}return e(n,...t)},br=te({patchProp:lr},Vi);let Po;function jr(){return Po||(Po=_i(br))}const vr=(...e)=>{const s=jr().createApp(...e),{mount:n}=s;return s.mount=t=>{const o=wr(t);if(!o)return;const a=s._component;!I(a)&&!a.render&&!a.template&&(a.template=o.innerHTML),o.innerHTML="";const i=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},s};function wr(e){return Z(e)?document.querySelector(e):e}const nn=(e,s)=>{const n=e.__vccOpts||e;for(const[t,o]of s)n[t]=o;return n},Jr=qn({props:{report:{type:String,required:!0}},methods:{createIssue(){const e=new FormData(this.$refs.issueForm),s=e.get("title");let n="";const t=e.get("description");t&&(n+=`**Description**
${t}

`),n+=`**Troubleshooter's report**
${this.report}

`;const o=e.get("mcu"),a=e.get("framework"),i=e.get("ide");(o||a||i)&&(n+=`**Environment**
`,o&&(n+="* Microcontroller: "+o+`
`),a&&(n+="* Core/Framework: "+a+`
`),i&&(n+="* IDE: "+i+`
`),n+=`
`);const r=e.get("repro");r&&(n+="**Reproduction code**\n```c++\n",n+=r,n+="\n```\n\n");const c=e.get("remarks");c&&(n+=`**Remarks**
${c}

`);const h="https://github.com/bblanchon/ArduinoJson/issues/new?"+new URLSearchParams({title:s,body:n}).toString();console.log("URL",h),window.open(h,"_blank"),$("#assistance-modal").modal("hide")}}}),_r={class:"modal fade"},Sr={class:"modal-dialog modal-dialog-scrollable modal-lg"},Tr=[zi('<div class="modal-header bg-primary text-white"><h5 class="modal-title">Contact support</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div><div class="modal-body"><div class="alert alert-info"> This form simplifies the creation of an issue on ArduinoJson&#39;s GitHub project page. It ensures you provide all the required information and prefills the issue&#39;s text. After that, you just need to submit the issue.<br><b>A GitHub account is required.</b></div><div class="form-group"><label for="title-input">Title</label><input type="text" name="title" class="form-control" id="title-input" aria-describedby="title-help" required><small id="title-help" class="form-text text-muted">Summarize your issue in one sentence.</small></div><div class="form-group"><label for="description-input">Description</label><textarea name="description" rows="3" class="form-control" id="description-input" aria-describedby="description-help" required placeholder="When I do ..., I expect ..., but instead I get ..."></textarea><small id="description-help" class="form-text text-muted">Describe your issue with a few sentences.</small></div><div class="form-group"><label for="mcu-input">Microcontroller</label><input type="text" name="mcu" class="form-control" id="mcu-input" aria-describedby="mcu-help" placeholder="ESP8266" required><small id="mcu-help" class="form-text text-muted">Which processor or with board do you use?</small></div><div class="form-group"><label for="framework-input">Arduino Core / Framework</label><input type="text" name="framework" class="form-control" id="framework-input" aria-describedby="framework-help" placeholder="ESP8266 core for Arduino v3.0.2"><small id="framework-help" class="form-text text-muted">Please include version number.</small></div><div class="form-group"><label for="ide-input">IDE</label><input type="text" name="ide" class="form-control" id="ide-input" aria-describedby="ide-help" placeholder="Arduino IDE 1.8.16"><small id="ide-help" class="form-text text-muted">Please include version number.</small></div><div class="form-group"><label for="repro-input">Reproduction code</label><textarea name="repro" rows="10" class="form-control text-monospace" style="font-size:80%;" id="repro-input" aria-describedby="repro-help" placeholder="DynamicJsonDocuemnt doc(1024);\\n..."></textarea><small id="repro-help" class="form-text text-muted">Write a few lines of code that demonstrate the issue.</small></div><div class="form-group"><label for="remarks-input">Remarks</label><textarea name="remarks" rows="4" class="form-control" id="remarks-input" aria-describedby="remarks-help"></textarea><small id="remarks-help" class="form-text text-muted">Anything else you need to tell us?</small></div></div><div class="modal-footer"><div class="text-right"><button type="submit" class="btn btn-primary">Submit</button><small class="form-text text-muted"> This button redirects you to GitHub. </small></div></div>',3)];function kr(e,s,n,t,o,a){return ue(),De("div",_r,[Q("div",Sr,[Q("form",{class:"modal-content",ref:"issueForm",onSubmit:s[0]||(s[0]=yr((...i)=>e.createIssue&&e.createIssue(...i),["prevent"]))},Tr,544)])])}const Dr=nn(Jr,[["render",kr]]),Ar=qn({inject:["debug"],emits:["check"],props:{option:{type:Object,required:!0}}}),xr={class:"form-check"},zr=["id","checked","disabled"],Nr=["for","innerHTML"],Ir={key:0,class:"d-block mb-2 small text-muted"};function Or(e,s,n,t,o,a){return ue(),De("div",xr,[Q("input",{type:"radio",id:e.option.inputId,class:"form-check-input",checked:e.option.selected,onClick:s[0]||(s[0]=i=>e.$emit("check")),disabled:e.option.missing},null,8,zr),Q("label",{class:"form-check-label",for:e.option.inputId,innerHTML:e.option.label},null,8,Nr),e.debug?(ue(),De("div",Ir,Ds(e.option.summary),1)):Vn("",!0)])}const Cr=nn(Ar,[["render",Or]]),rl="",Pr=qn({inject:["debug"],emits:["choose"],props:{step:{type:Object,required:!0},active:{type:Boolean,default:!1}},components:{TroubleshooterStepOption:Cr},async mounted(){const{top:e,bottom:s}=this.$el.getBoundingClientRect();e+50<window.innerHeight||this.$el.scrollIntoView({behavior:"smooth"})}}),Er={key:0,class:"troubleshooter-step mb-4"},qr={class:"small"},Rr={class:"troubleshooter-step-number"},Fr={key:0,class:"text-muted text-monospace"},Mr=["innerHTML"],Hr={class:"troubleshooter-step-options"},Yr=["innerHTML"];function Ur(e,s,n,t,o,a){const i=Rn("TroubleshooterStepOption");return e.step.options?(ue(),De("div",Er,[Q("h2",qr,[Q("div",Rr,[Q("div",{class:fs(["text-white rounded-circle",e.active?"bg-primary":"bg-secondary"])},Ds(e.step.number),3)]),e.debug?(ue(),De("span",Fr,Ds(e.step.filename),1)):Vn("",!0)]),Q("div",{class:"troubleshooter-step-content",innerHTML:e.step.content},null,8,Mr),Q("div",Hr,[(ue(!0),De(be,null,eo(e.step.options,r=>(ue(),Zs(i,{key:r.hash,option:r,onClick:c=>e.$emit("choose",r)},null,8,["option","onClick"]))),128))])])):(ue(),De("div",{key:1,innerHTML:e.step.content,class:"troubleshooter-step-content"},null,8,Yr))}const Br=nn(Pr,[["render",Ur]]),Eo=[{content:`<p>When does your issue happen?</p>
`,options:[{id:"compiletime",page:1,label:"At compile time",summary:"The issue happens at compile time"},{id:"runtime",page:153,label:"At run time",summary:"The issue happens at run time"}]},{content:`<p>Please look at the <strong>first</strong> error in the compiler output, and tell me what it is...</p>
`,options:[{id:"assignment-of-read-only-location",page:3,label:"assignment of read-only location",summary:'Error says "assignment of read-only location"'},{id:"ambiguous-string-assign",page:2,label:"ambiguous overload for <code>operator=</code> (operand types are <code>String</code> and ...)",summary:'Error says "ambiguous overload for `operator=` (operand types are `String` and ...)"'},{id:"begin-not-found",page:15,label:"<code>begin</code>: no matching overloaded function found",summary:'Error says "`begin`: no matching overloaded function found"'},{id:"error-constants",page:31,label:"<code>bits/error_constants.h</code>: No such file or directory",summary:'Error says "`bits/error_constants.h`: No such file or directory'},{id:"print-ambiguous",page:32,label:"call of overloaded <code>print(...)</code> is ambiguous",summary:'Error says "call of overloaded `print(...)` is ambiguous"'},{id:"cannot-bind-object-ref",page:29,label:"cannot bind non-const lvalue reference of type <code>ArduinoJson::JsonObject&amp;</code> ...",summary:'Error says "cannot bind non-const lvalue reference of type `ArduinoJson::JsonObject&` ..."'},{id:"pointer-to-object",page:28,label:"<code>const void*</code> is not a pointer-to-object type",summary:'Error says "`const void*` is not a pointer-to-object type"'},{id:"doesnt-name-a-type",page:10,label:"<code>doc</code> does not name a type",summary:'Error says "`doc` does not name a type"'},{id:"dynamicjsonbuffer",page:9,label:"<code>DynamicJsonBuffer</code> is a class from ArduinoJson 5",summary:'Error says "`DynamicJsonBuffer` is a class from ArduinoJson 5"'},{id:"dynamicjsondocument-not-declared",page:16,label:"<code>DynamicJsonDocument</code> was not declared in this scope",summary:'Error says "`DynamicJsonDocument` was not declared in this scope"'},{id:"char-pointer-conversion",page:6,label:"invalid conversion from <code>const char*</code> to <code>char*</code> [-fpermissive]",summary:'Error says "invalid conversion from `const char*` to `char*` [-fpermissive]"'},{id:"invalid-conversion",page:14,label:"invalid use of incomplete type <code>class InvalidConversion&lt;...&gt;</code>",summary:'Error says "invalid use of incomplete type `class InvalidConversion<...>`"'},{id:"jsondocument-copy",page:17,label:"<code>JsonDocument::JsonDocument(const JsonDocument&amp;)</code> is private",summary:'Error says "`JsonDocument::JsonDocument(const JsonDocument&)` is private"'},{id:"macro-min",page:18,label:"macro <code>min</code> passed 3 arguments, but takes just 2",summary:'Error says "macro `min` passed 3 arguments, but takes just 2"'},{id:"basicjsondocument-default-constructor",page:4,label:"no default constructor exists for class <code>BasicJsonDocument</code>",summary:'Error says "no default constructor exists for class `BasicJsonDocument`"'},{id:"no-matching-function",page:20,label:"no matching function for call to ...",summary:'Error says "no matching function for call to ..."'},{id:"passing-volatile-as-this-argument-discards-qualifiers",page:30,label:"passing <code>volatile ...</code> as <code>this</code> argument discards qualifiers [-fpermissive]",summary:'Error says "passing `volatile ...` as `this` argument discards qualifiers [-fpermissive]"'},{id:"cast-void-to-flashstringhelper",page:5,label:"reinterpret_cast from <code>const void</code> to <code>const __FlashStringHelper *</code> is not allowed",summary:'Error says "reinterpret_cast from `const void` to `const __FlashStringHelper *` is not allowed"'},{id:"member-write-in-char-ptr",page:19,label:"request for member <code>write</code> in ..., which is of non-class type <code>char*</code>",summary:'Error says "request for member `write` in ..., which is of non-class type `char*`"'},{id:"staticjsonbuffer",page:9,label:"<code>StaticJsonBuffer</code> is a class from ArduinoJson 5",summary:'Error says "`StaticJsonBuffer` is a class from ArduinoJson 5"'},{id:"staticjsondocument-not-declared",page:16,label:"<code>StaticJsonDocument</code> was not declared in this scope",summary:'Error says "`StaticJsonDocument` was not declared in this scope"'},{id:"range-based-for-requires-begin",page:15,label:"this range-based <code>for</code> statement requires a suitable &quot;begin&quot; function and none was found",summary:'Error says "this range-based `for` statement requires a suitable "begin" function and none was found"'},{id:"not-in-list",page:33,label:"None of the above",summary:"The error is not in the list"}]},{content:`<p>This error occurs when you try to assign a <a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a> to a <a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a>.</p>
<p>Indeed, due to the way these two classes are defined, you can <em>construct</em> a <a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a> from a <a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a>, but you cannot <em>assign</em> a <a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a> to an existing string.</p>
<pre><code class="hljs">String name <span class="hljs-operator">=</span> doc[<span class="hljs-string">&quot;name&quot;</span>]<span class="hljs-comment">;  // contruction -&gt; works</span>
<span class="hljs-attribute">name</span> <span class="hljs-operator">=</span> doc[<span class="hljs-string">&quot;name&quot;</span>]<span class="hljs-comment">;         // assignment  -&gt; fails</span>
</code></pre>
<p>You can easily workaround this problem by explicitly casting the <a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a>, like so:</p>
<pre><code class="hljs"><span class="hljs-attribute">name</span> <span class="hljs-operator">=</span> doc[<span class="hljs-string">&quot;name&quot;</span>].as&lt;String&gt;()<span class="hljs-comment">;</span>
</code></pre>
<p>Please see <a href="/v6/error/ambiguous-overload-for-operator-equal/">error: ambiguous overload for 'operator=' (operand types are 'String' and ...)</a> for details.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Casting the `JsonVariant` fixes the issue"},{id:"failure",page:34,label:"No",summary:"Casting the `JsonVariant` doesn't fix the issue"}]},{content:`<p>This error occurs when you pass a string to <a href="/v6/api/jsonarray/subscript/"><code>JsonArray::operator[]</code></a>; i.e., when you use an array like an object.</p>
<p>For example, if you try to compile the following code:</p>
<pre><code class="hljs language-c++">StaticJsonDocument&lt;<span class="hljs-number">128</span>&gt; doc;
JsonArray array = doc.<span class="hljs-built_in">createNestedArray</span>(<span class="hljs-string">&quot;array&quot;</span>);
array[<span class="hljs-string">&quot;key&quot;</span>] = <span class="hljs-string">&quot;value&quot;</span>;  <span class="hljs-comment">// ERROR</span>
</code></pre>
<p>...you'll get the following error message:</p>
<pre><code class="hljs language-text">error: assignment of read-only location &#x27;*(((const char*)&quot;key&quot;) + ((sizetype)data.ArduinoJson6194_F1::ArrayRef::&lt;anonymous&gt;.ArduinoJson6194_F1::ArrayRefBase&lt;ArduinoJson6194_F1::CollectionData&gt;::operator bool()))&#x27;
   38 |   data[&quot;key&quot;] = &quot;value&quot;;
      |   ~~~~~~~~~~~~^~~~~~~~~
</code></pre>
<p>The solution is to use the array correctly or to switch to an object.</p>
<p>So do either this:</p>
<pre><code class="hljs language-c++">StaticJsonDocument&lt;<span class="hljs-number">128</span>&gt; doc;
JsonArray array = doc.<span class="hljs-built_in">createNestedArray</span>(<span class="hljs-string">&quot;array&quot;</span>);
array[<span class="hljs-number">0</span>] = <span class="hljs-string">&quot;value&quot;</span>;
</code></pre>
<p>...or that:</p>
<pre><code class="hljs language-c++">StaticJsonDocument&lt;<span class="hljs-number">128</span>&gt; doc;
JsonArray obj = doc.<span class="hljs-built_in">createNestedObject</span>(<span class="hljs-string">&quot;obj&quot;</span>);
obj[<span class="hljs-string">&quot;key&quot;</span>] = <span class="hljs-string">&quot;value&quot;</span>;
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Using an integer or switching to an object fixes the issue"},{id:"failure",page:34,label:"No",summary:"Neither using an integer nor switching to an object fixes the issue"}]},{content:`<p>This is a linting error you may have in Visual Studio Code if your program contains something like this:</p>
<pre><code class="hljs language-c++">DynamicJsonDocument doc;
</code></pre>
<p>If you try to compile this code, you will get the following error:</p>
<pre><code class="hljs language-text">no matching function for call to &#x27;ArduinoJson6194_F1::BasicJsonDocument&lt;ArduinoJson6194_F1::DefaultAllocator&gt;::BasicJsonDocument()&#x27;
</code></pre>
<p>These errors occur when you forget to pass the capacity to the constructor of <a href="/v6/api/dynamicjsondocument/"><code>DynamicJsonDocument</code></a>.</p>
<p>To fix them, you must specify the capacity of the memory pool, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-function">DynamicJsonDocument <span class="hljs-title">doc</span><span class="hljs-params">(<span class="hljs-number">2048</span>)</span></span>;
</code></pre>
<p>As usual, you can use the <a href="/v6/assistant/">ArduinoJson Assistant</a> to compute the right capacity for your project.</p>
<p>For more information, please read <a href="/v6/error/no-matching-function-for-call-to-basicjsondocument-basicjsondocument/">no matching function for call to 'BasicJsonDocument::BasicJsonDocument()'</a>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Passing the capacity to the constructor fixes the issue"},{id:"failure",page:34,label:"No",summary:"Passing the capacity to the constructor doesn't fix the issue"}]},{content:`<p>The error should look like this:</p>
<pre><code class="hljs language-text">.../src/ArduinoJson/Polyfills/pgmspace_generic.hpp:14:10: error: reinterpret_cast from &#x27;const void&#x27; to &#x27;const __FlashStringHelper *&#x27; is not allowed
  return reinterpret_cast&lt;T&gt;(pgm_read_ptr(p));
         ^~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
</code></pre>
<p>This error indicate that the return type of <code>pgm_read_ptr()</code> is incorrect: it should be <code>const void*</code>, but the error message shows it's <code>const void</code>.</p>
<p>This is a common bug in cores (or &quot;framework&quot;) that emulate the original <code>pgmspace.h</code> header.
It already poped up in:</p>
<ul>
<li>ArduinoFake (issue <a href="https://github.com/bblanchon/ArduinoJson/issues/1676">#1676</a>)</li>
<li>ESP8266 (issue <a href="https://github.com/bblanchon/ArduinoJson/issues/1442">#1442</a>)</li>
<li>Industruino (issue <a href="https://github.com/bblanchon/ArduinoJson/issues/1519">#1519</a>)</li>
<li>Particle Argon (issue <a href="https://github.com/bblanchon/ArduinoJson/issues/1591">#1591</a>)</li>
<li>Teknic ClearCore (issue <a href="https://github.com/bblanchon/ArduinoJson/issues/1381">#1381</a>)</li>
<li>Others (issue <a href="https://github.com/bblanchon/ArduinoJson/issues/1536">#1536</a>)</li>
</ul>
<p>The root of this bug was fixed in October 2020 in <a href="https://github.com/arduino/ArduinoCore-API/pull/118">arduino/ArduinoCore-API#118</a>, but many clones are still using the old code.</p>
<p>To fix this issue, update your Arduino Core (or &quot;framework&quot;) to the newest version.</p>
<p>If the same error still occurs, please contact the relevant support team.
In the meantime, you can work around this issue by disabling PROGMEM support in ArduinoJson by setting <a href="/v6/api/config/enable_progmem/"><code>ARDUINOJSON_ENABLE_PROGMEM</code></a> to <code>0</code>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-meta">#<span class="hljs-keyword">define</span> ARDUINOJSON_ENABLE_PROGMEM 0</span>
<span class="hljs-meta">#<span class="hljs-keyword">include</span> <span class="hljs-string">&lt;ArduinoJson.h&gt;</span></span>
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Setting `ARDUINOJSON_ENABLE_PROGMEM` to `0` fixes the issue"},{id:"failure",page:34,label:"No",summary:"Setting `ARDUINOJSON_ENABLE_PROGMEM` to `0` doesn't fix the issue"}]},{content:`<p>This error occurs when you try to store a pointer of type <code>const char*</code> into a variable of type <code>char*</code>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-type">char</span>* eventName = doc[<span class="hljs-string">&quot;event&quot;</span>];
</code></pre>
<p>Indeed, <a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a> returns a <code>const char*</code>, not a <code>char*</code>. You must change the type of the pointer, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-type">const</span> <span class="hljs-type">char</span>* eventName = doc[<span class="hljs-string">&quot;event&quot;</span>];
</code></pre>
<p>There are other similar situations where this error can occur. For more information, please read <a href="/v6/error/invalid-conversion-from-const-char-to-char/">invalid conversion from 'const char*' to 'char*' [-fpermissive]</a>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Changing the pointer type fixes the issue"},{id:"failure",page:34,label:"No",summary:"Changing the pointer type doesn't fix the issue"}]},{content:`<p>I recommend that you download <a href="https://github.com/bblanchon/ArduinoJson/releases/download/v5.13.5/ArduinoJson-v5.13.5.h"><code>ArduinoJson-v5.13.5.h</code></a> and save it among the project files, this way you're sure that the project is distributed with the right version of the library.</p>
<p>You can choose to keep the name <code>ArduinoJson-v5.13.5.h</code> and update the <code>#include</code> directive, or you can rename the file to <code>ArduinoJson.h</code>; either way is fine, as long as the header is in the same folder as the file that includes it.</p>
<p>Please see <a href="/v5/doc/installation/">installation instructions</a> for details</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Downloading ArduinoJson 5 fixes the issue"},{id:"failure",page:34,label:"No",summary:"Downloading ArduinoJson 5 doesn't fix the issue"}]},{content:`<p>Upgrading from v5 to v6 isn't trivial but isn't complicated either.<br>
Please follow the <a href="/v6/doc/upgrade/">upgrade instructions</a>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Upgrading fixes the issue"},{id:"failure",page:34,label:"No",summary:"Upgrading doesn't fix the issue"}]},{content:`<p>This error occurs when you try to use ArduinoJson 6 with a program written for ArduinoJson 5.</p>
<p>Can you upgrade the program or do you prefer keeping it as it is?</p>
`,options:[{id:"upgrade",page:8,label:"I'd like to upgrade to ArduinoJson 6",summary:"User prefers upgrading to ArduinoJson 6"},{id:"keep-v5",page:7,label:"I prefer not touching the program",summary:"User prefers keeping ArduinoJson 5"}]},{content:`<p>This error usually occurs when you write statements at the global scope, which isn't possible in C++.</p>
<p>Unlike many popular languages like Python or JavaScript, the C++ language doesn't allow statements at the global scope.
Instead, you must move all statements into a function.
The entry point for a regular C++ program is the <code>main()</code> function, but in an Arduino program, it's the <code>setup()</code> function.</p>
<p>For example, if your program is like this:</p>
<pre><code class="hljs language-c++">StaticJsonDocument&lt;<span class="hljs-number">200</span>&gt; doc;
doc[<span class="hljs-string">&quot;hello&quot;</span>] = <span class="hljs-string">&quot;world&quot;</span>;
<span class="hljs-built_in">serializeJson</span>(doc, Serial);
</code></pre>
<p>...you must rewrite it like this:</p>
<pre><code class="hljs language-c++"><span class="hljs-function"><span class="hljs-type">void</span> <span class="hljs-title">setup</span><span class="hljs-params">()</span> </span>{
  StaticJsonDocument&lt;<span class="hljs-number">200</span>&gt; doc;
  doc[<span class="hljs-string">&quot;hello&quot;</span>] = <span class="hljs-string">&quot;world&quot;</span>;
  <span class="hljs-built_in">serializeJson</span>(doc, Serial);
}
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Moving statement to `setup()` fixes the issue"},{id:"failure",page:34,label:"No",summary:"Moving statement to `setup()` doesn't fix the issue"}]},{content:`<p>Somewhere in your program, there is a conversion from <a href="/v6/api/jsonvariantconst/"><code>JsonVariantConst</code></a> to <a href="/v6/api/jsonarray/"><code>JsonArray</code></a>. This conversion is invalid because it would convert a <em>read-only</em> reference to a <em>read-write</em> reference.</p>
<p>To fix this issue, you must use <a href="/v6/api/jsonarrayconst/"><code>JsonArrayConst</code></a> in place of <a href="/v6/api/jsonarray/"><code>JsonArray</code></a>.</p>
<p>For example, if your program contains the expression <code>variant.as&lt;JsonArray&gt;()</code>, you must replace it with <code>variant.as&lt;JsonArrayConst&gt;()</code>. Alternatively, if your program contains a statement like <code>JsonArray array = variant</code>, you must replace it with <code>JsonArrayConst array = variant</code>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Replacing `JsonArray` with `JsonArrayConst` fixes the issue"},{id:"failure",page:34,label:"No",summary:"Replacing `JsonArray` with `JsonArrayConst` doesn't fix the issue"}]},{content:`<p>Somewhere in your program, there is a conversion from <a href="/v6/api/jsonvariantconst/"><code>JsonVariantConst</code></a> to <a href="/v6/api/jsonobject/"><code>JsonObject</code></a>. This conversion is invalid because it would convert a <em>read-only</em> reference to a <em>read-write</em> reference.</p>
<p>To fix this issue, you must use <a href="/v6/api/jsonobjectconst/"><code>JsonObjectConst</code></a> in place of <a href="/v6/api/jsonobject/"><code>JsonObject</code></a>.</p>
<p>For example, if your program contains the expression <code>variant.as&lt;JsonObject&gt;()</code>, you must replace it with <code>variant.as&lt;JsonObjectConst&gt;()</code>. Alternatively, if your program contains a statement like <code>JsonObject obj = variant</code>, you must replace it with <code>JsonObjectConst obj = variant</code>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Replacing `JsonObject` with `JsonObjectConst` fixes the issue"},{id:"failure",page:34,label:"No",summary:"Replacing `JsonObject` with `JsonObjectConst` doesn't fix the issue"}]},{content:`<p>Somewhere in your program, there is a conversion from <a href="/v6/api/jsonvariantconst/"><code>JsonVariantConst</code></a> to <a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a>. This conversion is invalid because it would convert a <em>read-only</em> reference to a <em>read-write</em> reference.</p>
<p>To fix this issue, you must use <a href="/v6/api/jsonvariantconst/"><code>JsonVariantConst</code></a> in place of <a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a>.</p>
<p>For example, if your program contains the expression <code>variant.as&lt;JsonVariant&gt;()</code>, you must replace it with <code>variant.as&lt;JsonVariantConst&gt;()</code>. Alternatively, if your program contains a statement like <code>JsonVariant v = variant</code>, you must replace it with <code>JsonVariantConst v = variant</code>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Replacing `JsonVariant` with `JsonVariantConst` fixes the issue"},{id:"failure",page:34,label:"No",summary:"Replacing `JsonVariant` with `JsonVariantConst` doesn't fix the issue"}]},{content:`<p>Assuming we removed the namespace <code>ArduinoJson6XXX</code> from the error message, what type is incomplete?</p>
`,options:[{id:"array",page:11,label:"<code>class InvalidConversion&lt;VariantConstRef, ArrayRef&gt;</code>",summary:"Specialization is `InvalidConversion<VariantConstRef, ArrayRef>`"},{id:"object",page:12,label:"<code>class InvalidConversion&lt;VariantConstRef, ObjectRef&gt;</code>",summary:"Specialization is `InvalidConversion<VariantConstRef, ObjectRef>`"},{id:"variant",page:13,label:"<code>class InvalidConversion&lt;VariantConstRef, VariantRef&gt;</code>",summary:"Specialization is `InvalidConversion<VariantConstRef, VariantRef>`"}]},{content:`<p>You get this error when you try to iterate over a <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> or a <a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a>.</p>
<p>For example, it happens if you do this:</p>
<pre><code class="hljs language-c++"><span class="hljs-keyword">for</span> (JsonPair p : doc[<span class="hljs-string">&quot;config&quot;</span>]) {
  <span class="hljs-comment">// ...</span>
}
</code></pre>
<p>Indeed, you cannot iterate a <a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a> like so because there is an ambiguity: the <a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a> could point to either an array or an object, and this information is only available at runtime.</p>
<p>For this reason, we need to tell the compiler which type of structure we expect by casting the <a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a> to a <a href="/v6/api/jsonarray/"><code>JsonArray</code></a> or <a href="/v6/api/jsonobject/"><code>JsonObject</code></a>.
For example, we could solve the above snippet like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-keyword">for</span> (JsonPair p : doc[<span class="hljs-string">&quot;config&quot;</span>].<span class="hljs-built_in">as</span>&lt;JsonObject&gt;()) {
  <span class="hljs-comment">// ...</span>
}
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Calling `as<JsonObject>()` or `as<JsonArray>()` solves the issue"},{id:"failure",page:34,label:"No",summary:"Calling `as<JsonObject>()` or `as<JsonArray>()` doesn't solve the issue"}]},{content:`<p>You probably forgot to include the library header.</p>
<p>Please add the following line at the top of your program:</p>
<pre><code class="hljs language-c++"><span class="hljs-meta">#<span class="hljs-keyword">include</span> <span class="hljs-string">&lt;ArduinoJson.h&gt;</span></span>
</code></pre>
<p>Did this fix your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Including `ArduinoJson.h` fixes the issue"},{id:"failure",page:34,label:"No",summary:"Including `ArduinoJson.h` doesn't fix the issue"}]},{content:`<p><a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> doesn't support copying.</p>
<p>If you need to pass a <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> to a function, you can use a reference, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-function"><span class="hljs-type">void</span> <span class="hljs-title">myFunction</span><span class="hljs-params">(JsonDocument&amp; doc)</span>
<span class="hljs-comment">// or</span>
<span class="hljs-type">void</span> <span class="hljs-title">myFunction</span><span class="hljs-params">(<span class="hljs-type">const</span> JsonDocument&amp; doc)</span>
</span></code></pre>
<p>You can even make this function more reusable by allowing it to support any part of a JSON document, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-function"><span class="hljs-type">void</span> <span class="hljs-title">myFunction</span><span class="hljs-params">(JsonVariant var)</span>
<span class="hljs-comment">// or</span>
<span class="hljs-type">void</span> <span class="hljs-title">myFunction</span><span class="hljs-params">(JsonVariantConst var)</span>
</span></code></pre>
<p>If you must make a copy, use either <a href="/v6/api/dynamicjsondocument/"><code>DynamicJsonDocument</code></a> or <a href="/v6/api/staticjsondocument/"><code>StaticJsonDocument</code></a>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Using a reference solves the issue"},{id:"failure",page:34,label:"No",summary:"Using a reference doesn't solve the issue"}]},{content:`<p>This is a bug in some Arduino cores, most notably the one for <a href="https://en.wikipedia.org/wiki/Atmel_ARM-based_processors#SAM_D">SAMD21</a>.</p>
<p>You can workaround this bug by defining both <a href="/v6/api/config/enable_std_string/"><code>ARDUINOJSON_ENABLE_STD_STRING</code></a> and <a href="/v6/api/config/enable_std_stream/"><code>ARDUINOJSON_ENABLE_STD_STREAM</code></a> to <code>0</code>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-meta">#<span class="hljs-keyword">define</span> ARDUINOJSON_ENABLE_STD_STRING 0</span>
<span class="hljs-meta">#<span class="hljs-keyword">define</span> ARDUINOJSON_ENABLE_STD_STREAM 0</span>
<span class="hljs-meta">#<span class="hljs-keyword">include</span> <span class="hljs-string">&lt;ArduinoJson.h&gt;</span></span>
</code></pre>
<p>You can find more information on this error here: <a href="/v6/error/macro-min-passed-3-arguments-but-takes-just-2/">macro &quot;min&quot; passed 3 arguments, but takes just 2</a></p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Defining `ARDUINOJSON_ENABLE_STD_STRING` and `ARDUINOJSON_ENABLE_STD_STREAM` to `0` solves the issue"},{id:"failure",page:34,label:"No",summary:"Defining `ARDUINOJSON_ENABLE_STD_STRING` and `ARDUINOJSON_ENABLE_STD_STREAM` to `0` doesn't solve the issue"}]},{content:`<p>This error occurs when you pass a <code>char*</code> to <a href="/v6/api/json/serializejson/"><code>serializeJson()</code></a> but forget to pass the third argument.
For example:</p>
<pre><code class="hljs language-c++"><span class="hljs-built_in">serializeJson</span>(doc, ptr);  <span class="hljs-comment">// request for member &#x27;write&#x27; in ..., which is of non-class type &#x27;char*&#x27; </span>
</code></pre>
<p>To fix this error, you must pass the size of the destination buffer as the third argument, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-built_in">serializeJson</span>(doc, ptr, size);  <span class="hljs-comment">// OK</span>
</code></pre>
<p>In the examples, you may have seen that I didn't use the size argument; that's because the second argument was not a <code>char*</code> but a <code>char[N]</code>, and <a href="/v6/api/json/serializejson/"><code>serializeJson()</code></a> was able to infer the value of <code>N</code> from the type.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Passing the buffer size to `serializeJson()` fixed the issue"},{id:"failure",page:34,label:"No",summary:"Passing the buffer size to `serializeJson()` didn't fix the issue"}]},{content:`<p>Which error is it?</p>
`,options:[{id:"basicjsondocument",page:23,label:"no matching function for call to <code>BasicJsonDocument::BasicJsonDocument()</code>",summary:'Error says "no matching function for call to `BasicJsonDocument::BasicJsonDocument()`"'},{id:"converttojson",page:24,label:"no matching function for call to <code>convertToJson(...)</code>",summary:'Error says "no matching function for call to `convertToJson(...)`"'},{id:"deserializejson",page:25,label:"no matching function for call to <code>deserializeJson(StaticJsonDocument&lt;200&gt; (&amp;)(), ...)</code>",summary:'Error says "no matching function for call to `deserializeJson(StaticJsonDocument<200> (&)(), ...)`"'},{id:"unresolved-overloaded-function-type",page:27,label:"no matching function for call to <code>...(&lt;unresolved overloaded function type&gt;)</code>",summary:'Error says "no matching function for call to `...(<unresolved overloaded function type>)`"'},{id:"as-char",page:22,label:"no matching function for call to <code>...as&lt;char&gt;() const</code>",summary:'Error says "no matching function for call to `...as<char>()` const"'},{id:"as-char-ptr",page:21,label:"no matching function for call to <code>...as&lt;char*&gt;() const</code>",summary:'Error says "no matching function for call to `...as<char*>()` const"'},{id:"is-char-ptr",page:26,label:"no matching function for call to <code>...is&lt;char*&gt;() const</code>",summary:'Error says "no matching function for call to `...is<char*>()` const"'},{id:"not-in-list",page:33,label:"None of the above",summary:"The error is not in the list"}]},{content:`<p>This error happens when you write the following:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(doc[<span class="hljs-string">&quot;key&quot;</span>].<span class="hljs-built_in">as</span>&lt;<span class="hljs-type">char</span>*&gt;());
<span class="hljs-comment">// or</span>
<span class="hljs-type">char</span>* value = doc[<span class="hljs-string">&quot;key&quot;</span>];
</code></pre>
<p>Indeed, support for <code>char*</code> was deprecated in <a href="/news/2021/05/04/version-6-18-0/">6.18</a> and removed in <a href="/news/2022/12/26/arduinojson-6-20-0/">6.20</a>.</p>
<p>To fix this error, you must replace <code>char*</code> with <code>const char*</code>, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(doc[<span class="hljs-string">&quot;key&quot;</span>].<span class="hljs-built_in">as</span>&lt;<span class="hljs-type">const</span> <span class="hljs-type">char</span>*&gt;());
<span class="hljs-comment">// or</span>
<span class="hljs-type">const</span> <span class="hljs-type">char</span>* value = doc[<span class="hljs-string">&quot;key&quot;</span>];
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Replacing `char*` with `const char*` fixes the issue"},{id:"failure",page:34,label:"No",summary:"Replacing `char*` with `const char*` doesn't fix the issue"}]},{content:`<p>This error happens when you write the following:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(doc[<span class="hljs-string">&quot;key&quot;</span>].<span class="hljs-built_in">as</span>&lt;<span class="hljs-type">char</span>*&gt;());
<span class="hljs-comment">// or</span>
<span class="hljs-type">char</span> value = doc[<span class="hljs-string">&quot;key&quot;</span>];
</code></pre>
<p>Indeed, support for <code>char</code> was deprecated in <a href="/news/2021/05/04/version-6-18-0/">6.18</a> and removed in <a href="/news/2022/12/26/arduinojson-6-20-0/">6.20</a>.</p>
<p>To fix this error, you must replace <code>char</code> with <code>int8_t</code>, <code>uint8_t</code>, or any other integral type, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(doc[<span class="hljs-string">&quot;key&quot;</span>].<span class="hljs-built_in">as</span>&lt;<span class="hljs-type">int8_t</span>&gt;());
<span class="hljs-comment">// or</span>
<span class="hljs-type">int8_t</span> value = doc[<span class="hljs-string">&quot;key&quot;</span>];
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Replacing `char` with `int8_t` fixes the issue"},{id:"failure",page:34,label:"No",summary:"Replacing `char` with `int8_t` doesn't fix the issue"}]},{content:`<p>This error occurs when you forget to pass the capacity to the constructor of <a href="/v6/api/dynamicjsondocument/"><code>DynamicJsonDocument</code></a>, like so:</p>
<pre><code class="hljs language-c++">DynamicJsonDocument doc;
</code></pre>
<p>Instead, you need to specify the capacity of the memory pool, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-function">DynamicJsonDocument <span class="hljs-title">doc</span><span class="hljs-params">(<span class="hljs-number">2048</span>)</span></span>;
</code></pre>
<p>As usual, you can use the <a href="/v6/assistant/">ArduinoJson Assistant</a> to compute the right capacity for your project.</p>
<p>For more information, please read <a href="/v6/error/no-matching-function-for-call-to-basicjsondocument-basicjsondocument/">no matching function for call to 'BasicJsonDocument::BasicJsonDocument()'</a>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Passing the capacity to the constructor fixes the issue"},{id:"failure",page:34,label:"No",summary:"Passing the capacity to the constructor doesn't fix the issue"}]},{content:`<p>This error occurs when you try to insert an unsupported value type in a <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>.</p>
<p>To fix this error, you must either:</p>
<ul>
<li>change the type of value to a supported one (<code>const char*</code>, <code>int</code>, <code>float</code>, etc.)</li>
<li>write a <a href="/news/2021/05/04/version-6-18-0/">custom converter</a> for this type</li>
</ul>
<p>For more information, see <a href="/v6/error/no-matching-function-for-call-to-converttojson/">error: no matching function for call to 'convertToJson(...)'</a>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Converting the value fixes the issue"},{id:"failure",page:34,label:"No",summary:"Converting the value doesn't fix the issue"}]},{content:`<p>This error happens when you write the following:</p>
<pre><code class="hljs language-c++"><span class="hljs-function">StaticJsonDocument&lt;200&gt; <span class="hljs-title">doc</span><span class="hljs-params">()</span></span>;
<span class="hljs-built_in">deserializeJson</span>(doc, input);
</code></pre>
<p>Indeed, the first line doesn't declare a <code>StaticJsonDocument&lt;200&gt;</code> but a function that takes no argument and returns a <code>StaticJsonDocument&lt;200&gt;</code>. This is one of the most common pitfalls in C++ and it's called the <a href="https://en.wikipedia.org/wiki/Most_vexing_parse">Most vexing parse</a>.</p>
<p>To fix this program, you must remove the parentheses, like so:</p>
<pre><code class="hljs language-c++">StaticJsonDocument&lt;<span class="hljs-number">200</span>&gt; doc;
<span class="hljs-built_in">deserializeJson</span>(doc, input);
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:`It's the "Most vexing parse"`},{id:"failure",page:34,label:"No",summary:`It's not the "Most vexing parse"`}]},{content:`<p>This error happens when you write the following:</p>
<pre><code class="hljs language-c++"><span class="hljs-keyword">if</span> (doc[<span class="hljs-string">&quot;key&quot;</span>].<span class="hljs-built_in">is</span>&lt;<span class="hljs-type">char</span>*&gt;())
</code></pre>
<p>Indeed, support for <code>char*</code> was deprecated in <a href="/news/2021/05/04/version-6-18-0/">6.18</a> and removed in <a href="/news/2022/12/26/arduinojson-6-20-0/">6.20</a>.</p>
<p>To fix this error, you must replace <code>char*</code> with <code>const char*</code>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-keyword">if</span> (doc[<span class="hljs-string">&quot;key&quot;</span>].<span class="hljs-built_in">is</span>&lt;<span class="hljs-type">const</span> <span class="hljs-type">char</span>*&gt;())
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Replacing `char*` with `const char*` fixes the issue"},{id:"failure",page:34,label:"No",summary:"Replacing `char*` with `const char*` doesn't fix the issue"}]},{content:`<p>We typically see this error when your program does somethink like this:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">print</span>(doc[<span class="hljs-string">&quot;value&quot;</span>].as&lt;<span class="hljs-type">int</span>&gt;);
</code></pre>
<p>In this case, the compiler produces the following error:</p>
<pre><code class="hljs language-text">no matching function for call to &#x27;HardwareSerial::print(&lt;unresolved overloaded function type&gt;)&#x27;
</code></pre>
<p>This error occurs because <code>as&lt;int&gt;()</code> is a function, so you must call it by appending parenthesis like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">print</span>(doc[<span class="hljs-string">&quot;value&quot;</span>].<span class="hljs-built_in">as</span>&lt;<span class="hljs-type">int</span>&gt;());
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Adding the parentheses fixes the issue"},{id:"failure",page:34,label:"No",summary:"Adding the parentheses doesn't fix the issue"}]},{content:`<p>This error comes from a bug in the <a href="https://github.com/arduino/ArduinoCore-API">Arduino Core API</a> (or <code>Arduino.h</code>, if you prefer).
This bug was fixed by <a href="https://github.com/arduino/ArduinoCore-API/pull/118">arduino/ArduinoCore-API#118</a> in October 2020, but the fix wasn't immediately propagated to derived projects.</p>
<p>First, make sure that every related piece of software is up-to-date.
Then, if the problem persists, please open an issue in the relevant project and mention <a href="https://github.com/arduino/ArduinoCore-API/pull/118">arduino/ArduinoCore-API#118</a> in the description.</p>
<p>As a workaround, you can disable support for <a href="https://www.arduino.cc/reference/en/language/variables/utilities/progmem/"><code>PROGMEM</code></a> in ArduinoJson (your board doesn't support it anyway) by setting <a href="/v6/api/config/enable_progmem/">ARDUINOJSON_ENABLE_PROGMEM</a> to <code>0</code>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-meta">#<span class="hljs-keyword">define</span> ARDUINOJSON_ENABLE_PROGMEM 0</span>
<span class="hljs-meta">#<span class="hljs-keyword">include</span> <span class="hljs-string">&lt;ArduinoJson.h&gt;</span></span>
</code></pre>
<p>Did this fix your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Defining `ARDUINOJSON_ENABLE_PROGMEM` to `0` solves the issue"},{id:"failure",page:34,label:"No",summary:"Defining `ARDUINOJSON_ENABLE_PROGMEM` to `0` doesn't solve the issue"}]},{content:`<p>In your program, there is a line that look like this:</p>
<pre><code class="hljs language-c++">JsonObject&amp; obj = doc[<span class="hljs-string">&quot;key&quot;</span>].<span class="hljs-built_in">as</span>&lt;JsonObject&gt;();
</code></pre>
<p>This line produces the following compilation error:</p>
<pre><code class="hljs language-text">cannot bind non-const lvalue reference of type &#x27;ArduinoJson::JsonObject&amp;&#x27; {aka &#x27;ArduinoJson6185_91::ObjectRef&amp;&#x27;} to an rvalue of type &#x27;ArduinoJson6185_91::enable_if&lt;true, ArduinJson6185_91::ObjectRef&gt;::type&#x27; {aka &#x27;ArduinoJson6185_91::ObjectRef&#x27;}
</code></pre>
<p class="code-wrap"></p>
<p>In other words, &quot;cannot assign <code>JsonObject</code> to <code>JsonObject&amp;</code>&quot;.
The compiler refuses to save a reference to a temporary variable because the reference would inevitably dangle.</p>
<p>To fix this issue, you must remove the ampersand (<code>&amp;</code>) after <a href="/v6/api/jsonobject/"><code>JsonObject</code></a>, like so:</p>
<pre><code class="hljs language-c++">JsonObject obj = doc[<span class="hljs-string">&quot;key&quot;</span>].<span class="hljs-built_in">as</span>&lt;JsonObject&gt;();
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Replacing `JsonObject&` with `JsonObject` fixes the issue"},{id:"failure",page:34,label:"No",summary:"Replacing `JsonObject&` with `JsonObject` doesn't fix the issue"}]},{content:`<p>This error occurs because you declared a <code>volatile</code> variable, but the member function you're trying to call is not qualified as <code>volatile</code>. In other words, the function is not meant to be called from a <code>volatile</code> instance.</p>
<p><a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> is not safe to use on concurrent threads, so its member cannot be qualified as <code>volatile</code>.</p>
<p>To work around this issue, you must remove the <code>volatile</code> qualifier and use a thread-safe synchronization mechanism. For example, you could push values into a <a href="https://www.freertos.org/Embedded-RTOS-Queues.html">FreeRTOS queue</a> and pull them from the main thread.</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Using a queue solves the issue."},{id:"failure",page:34,label:"No",summary:"Cannot use a queue."}]},{content:`<p>This problem is not related to ArduinoJson, but it's a known issue on Windows.
It's frequent with ESP8266 and ESP32 but can happen with any device.</p>
<p>See:</p>
<ul>
<li><a href="https://github.com/espressif/arduino-esp32/issues/6593">espressif/arduino-esp32#6593</a></li>
<li><a href="https://github.com/bblanchon/ArduinoJson/issues/1871">bblanchon/ArduinoJson#1871</a></li>
</ul>
<p>The problem comes from the file path that is too long for the Windows API.</p>
<p>The solution is to reinstall Arduino (or the toolchain) in another location with a shorter path.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Shortening the path fixes the issue"},{id:"failure",page:34,label:"No",summary:"Shortening the path doesn't fix the issue"}]},{content:`<p>This error usually occurs when you pass a <a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a> to <a href="https://www.arduino.cc/reference/en/language/functions/communication/serial/print/"><code>Serial::print()</code></a> or <a href="https://www.arduino.cc/reference/en/language/functions/communication/serial/println/"><code>Serial::print()</code></a>.</p>
<p>To fix it, you need to explicitly cast the <a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a> to a type supported by <a href="https://www.arduino.cc/reference/en/language/functions/communication/serial/print/"><code>Serial::print()</code></a>, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">print</span>(doc[<span class="hljs-string">&quot;event&quot;</span>].<span class="hljs-built_in">as</span>&lt;<span class="hljs-type">const</span> <span class="hljs-type">char</span>*&gt;());
</code></pre>
<p><a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a> must contain (or more exactly &quot;point to&quot;) a value of the specified type; otherwise, you'll get a default value, like <code>NULL</code> or <code>0</code>. If you want to support any type of value, you must replace the call to <a href="https://www.arduino.cc/reference/en/language/functions/communication/serial/print/"><code>Serial::print()</code></a> with a call to <a href="/v6/api/json/serializejson/"><code>serializeJson()</code></a>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-built_in">serializeJson</span>(doc[<span class="hljs-string">&quot;event&quot;</span>], Serial);
</code></pre>
<p>You can find more information on this error here: <a href="/v6/error/call-of-overloaded-println-is-ambiguous/">call of overloaded 'println(...)' is ambiguous</a></p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Casting the value or using `serializeJson()` solves the issue"},{id:"failure",page:34,label:"No",summary:"Neither casting the value nor using `serializeJson()` solves the issue"}]},{content:`<p>Please click on the &quot;Contact Support&quot; button below and provide the following information:</p>
<ul>
<li>Compiler output (including the error message, of course!)</li>
<li>Target platform</li>
<li>Runtime/core version</li>
</ul>
<p>If you can, please also include an <a href="https://stackoverflow.com/help/mcve">MCVE</a>.</p>
`,tags:["needs_assistance"]},{content:`<p class="display-4">🤷🏻‍♂️</p>
<p>Well, I'm out of ideas: you need to talk to a human.</p>
<p>Please click the &quot;Contact Support&quot; button below and provide all the relevant information.</p>
`,tags:["needs_assistance"]},{content:`<p>What is the value of <a href="/v6/api/misc/deserializationerror/"><code>DeserializationError</code></a>?</p>
`,options:[{id:"ok",page:106,label:"<code>Ok</code>",summary:"`deserializeJson()` returns `Ok`"},{id:"emptyinput",page:49,label:"<code>EmptyInput</code>",summary:"`deserializeJson()` returns `EmptyInput`"},{id:"incompleteinput",page:61,label:"<code>IncompleteInput</code>",summary:"`deserializeJson()` returns `IncompleteInput`"},{id:"invalidinput",page:68,label:"<code>InvalidInput</code>",summary:"`deserializeJson()` returns `InvalidInput`"},{id:"nomemory",page:137,label:"<code>NoMemory</code>",summary:"`deserializeJson()` returns `NoMemory`"},{id:"notsupported",page:145,label:"<code>NotSupported</code>",summary:"`deserializeJson()` returns `NotSupported`"},{id:"toodeep",page:150,label:"<code>TooDeep</code>",summary:"`deserializeJson()` returns `TooDeep`"},{id:"crash",page:37,label:"I can't tell because the program crashes",summary:"The program crashes"},{id:"unknown",page:36,label:"I don't know what you're talking about",summary:"The program doesn't check the error"}]},{content:`<p><a href="/v6/api/misc/deserializationerror/"><code>DeserializationError</code></a> is the return type of <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>. It tells whether the operation succeeded and indicates the cause of the error.</p>
<p>Modify your program to show the error code, like so:</p>
<pre><code class="hljs language-c++">DeserializationError error = <span class="hljs-built_in">deserializeJson</span>(doc, input);

Serial.<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;deserializeJson() returned &quot;</span>);
Serial.<span class="hljs-built_in">println</span>(error.<span class="hljs-built_in">c_str</span>());
</code></pre>
<p>Now, what does it show?</p>
`,options:[{id:"ok",page:106,label:"<code>Ok</code>",summary:"`deserializeJson()` returns `Ok`"},{id:"emptyinput",page:49,label:"<code>EmptyInput</code>",summary:"`deserializeJson()` returns `EmptyInput`"},{id:"incompleteinput",page:61,label:"<code>IncompleteInput</code>",summary:"`deserializeJson()` returns `IncompleteInput`"},{id:"invalidinput",page:68,label:"<code>InvalidInput</code>",summary:"`deserializeJson()` returns `InvalidInput`"},{id:"nomemory",page:137,label:"<code>NoMemory</code>",summary:"`deserializeJson()` returns `NoMemory`"},{id:"notsupported",page:145,label:"<code>NotSupported</code>",summary:"`deserializeJson()` returns `NotSupported`"},{id:"toodeep",page:150,label:"<code>TooDeep</code>",summary:"`deserializeJson()` returns `TooDeep`"},{id:"crash",page:37,label:"I can't tell because the program crashes",summary:"The program crashes"}]},{content:`<p>I need to know for sure if the program crashes before or after calling <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>.</p>
<p>Please add some traces around the call to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> and make sure to flush the Serial buffer. You can use the <a href="https://github.com/bblanchon/ArduinoTrace">ArduinoTrace library</a>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-built_in">TRACE</span>();
DeserializationError err = <span class="hljs-built_in">deserializeJson</span>(doc, input);
<span class="hljs-built_in">TRACE</span>();
</code></pre>
<p>How many traces can you see in the Serial Monitor?</p>
`,options:[{id:"before",page:42,label:"None: program crashes before calling <code>deserializeJson()</code>",summary:"Program crashes before calling `deserializeJson()`"},{id:"inside",page:44,label:"Only one: program crashes inside <code>deserializeJson()</code>",summary:"Program crashes inside `deserializeJson()`"},{id:"after",page:41,label:"Two traces: program crashes after calling <code>deserializeJson()</code>",summary:"Program crashes after calling `deserializeJson()`"}]},{content:`<p>A programs can also crash after calling <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> because it keeps a pointer to a string stored in the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>.</p>
<p>Indeed, when <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> returns a <code>const char*</code>, it doesn't return a copy of the string, but the address of the string in the memory pool. When the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> is destructed, the memory pool gets released and the pointer dangles. Later, when the program tries to use the string, it reads at an invalid memory location and crashes.</p>
<p>For example, it happens with the following program:</p>
<pre><code class="hljs language-c++"><span class="hljs-type">const</span> <span class="hljs-type">char</span>* username;

<span class="hljs-function"><span class="hljs-type">void</span> <span class="hljs-title">loadConfig</span><span class="hljs-params">()</span> </span>{
  File file = SD.<span class="hljs-built_in">open</span>(filename);
  StaticJsonDocument&lt;<span class="hljs-number">512</span>&gt; doc;
  <span class="hljs-built_in">deserializeJson</span>(doc, file);
  username = doc[<span class="hljs-string">&quot;username&quot;</span>];  <span class="hljs-comment">// ⚠️ stores the pointer</span>
  file.<span class="hljs-built_in">close</span>();
}

<span class="hljs-function"><span class="hljs-type">void</span> <span class="hljs-title">setup</span><span class="hljs-params">()</span> </span>{
  Serial.<span class="hljs-built_in">begin</span>(<span class="hljs-number">9600</span>);
  <span class="hljs-built_in">loadConfig</span>();
  Serial.<span class="hljs-built_in">println</span>(username);  <span class="hljs-comment">// 💥 BOOM!</span>
}
</code></pre>
<p>This is a simplified example; in a real project, things would be more tangled. For example, the variable could be in a <code>struct</code> or a class <code>class</code>, and the program could use the string much later.</p>
<p>To fix this program, you must make a copy of the string and not simply store the pointer. For example, you can use a <a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a>, like so:</p>
<pre><code class="hljs language-c++">String username;

<span class="hljs-function"><span class="hljs-type">void</span> <span class="hljs-title">loadConfig</span><span class="hljs-params">()</span> </span>{
  File file = SD.<span class="hljs-built_in">open</span>(filename);
  StaticJsonDocument&lt;<span class="hljs-number">512</span>&gt; doc;
  <span class="hljs-built_in">deserializeJson</span>(doc, file);
  username = doc[<span class="hljs-string">&quot;username&quot;</span>];  <span class="hljs-comment">// ✅ stores a copy</span>
  file.<span class="hljs-built_in">close</span>();
}

<span class="hljs-function"><span class="hljs-type">void</span> <span class="hljs-title">setup</span><span class="hljs-params">()</span> </span>{
  Serial.<span class="hljs-built_in">begin</span>(<span class="hljs-number">9600</span>);
  <span class="hljs-built_in">loadConfig</span>();
  Serial.<span class="hljs-built_in">println</span>(username);  <span class="hljs-comment">// ✅ reads the copy</span>
}
</code></pre>
<p>Alternatively, you can use a <code>char[]</code> and <a href="https://en.cppreference.com/w/c/string/byte/strcpy"><code>strcpy()</code></a>; I invite you to check the <a href="/v6/example/config/">JsonConfigFile.ino</a> for the details.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Replacing pointer with a `String` solves the issue"},{id:"failure",page:34,label:"No",summary:"Replacing pointer with a `String` doesn't solve the issue"}]},{content:`<p>As per the standard, the behavior of <a href="https://en.cppreference.com/w/c/string/byte/strcmp"><code>strcmp()</code></a> is undefined if one of the two arguments is null.</p>
<p>That's not a problem for you because you don't need to call <a href="https://en.cppreference.com/w/c/string/byte/strcmp"><code>strcmp()</code></a>. Indeed, <a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a> supports all comparisons operators (<code>==</code>, <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>), and these operators handle null values correctly.</p>
<p>Please replace calls to <a href="https://en.cppreference.com/w/c/string/byte/strcmp"><code>strcmp()</code></a> with <code>==</code>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// replace this:</span>
<span class="hljs-keyword">if</span> (<span class="hljs-built_in">strcmp</span>(doc[<span class="hljs-string">&quot;event&quot;</span>], <span class="hljs-string">&quot;wakeup&quot;</span>)) ...

<span class="hljs-comment">// ...with this:</span>
<span class="hljs-keyword">if</span> (doc[<span class="hljs-string">&quot;event&quot;</span>] == <span class="hljs-string">&quot;wakeup&quot;</span>) ...
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Replacing `strcmp()` with `==` solves the issue"},{id:"failure",page:34,label:"No",summary:"Replacing `strcmp()` with `==` doesn't solve the issue"}]},{content:`<p>As per the standard, the behavior of <a href="https://en.cppreference.com/w/c/string/byte/strcpy"><code>strcpy()</code></a> (and <a href="https://en.wikibooks.org/wiki/C_Programming/C_Reference/nonstandard/strlcpy"><code>strlcpy()</code></a>) is undefined if one of the pointers is null.</p>
<p>The simplest solution is to change the default value returned by <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>: instead of returning a null pointer when the value is missing, we can ask it to return an empty string (i.e., <code>&quot;&quot;</code>) or some other replacement (e.g., <code>&quot;&lt;null&gt;&quot;</code>). We can do that with <a href="/v6/api/jsonvariant/or/"><code>operator|</code></a>.</p>
<p>Please provide a non-null default for all calls to <a href="https://en.cppreference.com/w/c/string/byte/strcpy"><code>strcpy()</code></a>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// replace this:</span>
<span class="hljs-built_in">strcpy</span>(eventName, doc[<span class="hljs-string">&quot;event&quot;</span>]);

<span class="hljs-comment">// ...with this:</span>
<span class="hljs-built_in">strcpy</span>(eventName, doc[<span class="hljs-string">&quot;event&quot;</span>] | <span class="hljs-string">&quot;&lt;null&gt;&quot;</span>);
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Providing a non-null default solves the issue"},{id:"failure",page:34,label:"No",summary:"Providing a non-null default doesn't solve the issue"}]},{content:`<p>Most of the time, when a program crashes after <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>, it's because it dereferences a null pointer returned by the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>.</p>
<p>Take the following statement for example:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// void myFunction(const char*) defined somewhere</span>

<span class="hljs-built_in">myFunction</span>(doc[<span class="hljs-string">&quot;value&quot;</span>]);
</code></pre>
<p>If the key <code>&quot;value&quot;</code> isn't in the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, the function <code>myFunction()</code> will receive a null pointer, which can cause a crash if the function isn't prepared for this.</p>
<p>Do you see something like this in your code?</p>
`,options:[{id:"strcmp",page:39,label:"Yes, there is a call to <code>strcmp()</code>",summary:"Program calls `strcmp()`"},{id:"strcpy",page:40,label:"Yes, there is a call to <code>strcpy()</code>",summary:"Program calls `strcpy()`"},{id:"success",page:151,label:"Yes, I found the issue",summary:"Program dereferences a null pointer"},{id:"no-usual-suspect",page:38,label:"No",summary:"Program calls neither `strcmp()` nor `strcpy()`"}]},{content:`<p>A stack-overflow could cause the crash.</p>
<p>Do you use a <a href="/v6/api/staticjsondocument/"><code>StaticJsonDocument</code></a>?</p>
`,options:[{id:"static",page:48,label:"Yes",summary:"Program uses `StaticJsonDocument`"},{id:"no-static",page:43,label:"No",summary:"Program doesn't use `StaticJsonDocument`"}]},{content:`<p>I still think this could be a stack-overflow.</p>
<p>Please check in your code if there aren't some large variable in the stack. Look for things like:</p>
<ul>
<li><code>char buffer[1024]</code></li>
<li><code>int matrix[64][64][64]</code></li>
<li><code>alloca(1024)</code></li>
</ul>
<p>If you read the JSON from a stream and place it in a buffer, you should instead pass the stream directly to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>. This techniques uses less RAM because ArduioJson will only copy the required parts in the <a href="/v6/api/dynamicjsondocument/"><code>DynamicJsonDocument</code></a> and ignore all the spaces and ponctuation. Of course, you would need a bigger capacity: use the <a href="/v6/assistant/">ArduinoJson Assistant</a> to compute the right value.</p>
<p>If there are other large buffers, you can move them to the heap by using one of the following:</p>
<ul>
<li><a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a></li>
<li><a href="https://en.cppreference.com/w/cpp/container/vector"><code>std::vector</code></a></li>
<li><a href="https://en.cppreference.com/w/cpp/string/basic_string">\`std::string</a></li>
<li><a href="https://en.cppreference.com/w/cpp/memory/unique_ptr"><code>std::unique_ptr</code></a></li>
</ul>
<p>In the last resort, you can use <a href="https://en.cppreference.com/w/c/memory/malloc"><code>malloc()</code></a> and <a href="https://en.cppreference.com/w/c/memory/free"><code>free()</code></a>.</p>
<p>Does your program still crash?</p>
`,options:[{id:"failure",page:34,label:"Yes",summary:"Reducing stack usage doesn't prevent the crash"},{id:"success",page:151,label:"No",summary:"Reducing stack usage prevents the crash"}]},{content:`<p>Passing a dangling pointer could cause a crash.</p>
<p>If you pass a pointer to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>, make sure that this pointer is still valid. For example, if the pointer is returned by a function, inspect the function to make sure pointer is not refering to a stack variable:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// 💀 DON&#x27;T DO THAT!!!</span>
<span class="hljs-function"><span class="hljs-type">const</span> <span class="hljs-type">char</span>* <span class="hljs-title">readInput</span><span class="hljs-params">()</span> </span>{
  <span class="hljs-type">char</span> buffer[<span class="hljs-number">256</span>];
  <span class="hljs-comment">// yada yada yada...</span>
  <span class="hljs-keyword">return</span> buffer;
}

<span class="hljs-comment">// Possible workaround</span>
<span class="hljs-function">String <span class="hljs-title">readInput</span><span class="hljs-params">()</span> </span>{
  String buffer;
  <span class="hljs-comment">// yada yada yada...</span>
  <span class="hljs-keyword">return</span> buffer;
}
</code></pre>
<p>If you pass <a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a> to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>, make sure you don't call <code>c_str()</code> in between:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// 💀 DON&#x27;T DO THAT!!!</span>
<span class="hljs-type">const</span> <span class="hljs-type">char</span>* input = <span class="hljs-built_in">readInput</span>().<span class="hljs-built_in">c_str</span>();

<span class="hljs-comment">// Possible workaround</span>
String input = <span class="hljs-built_in">readInput</span>();
</code></pre>
<p>Please review your code to make sure you're not passsing a dangling pointer to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>.</p>
<p>Does your program still crash?</p>
`,options:[{id:"no-dangling-ptr",page:42,label:"Yes",summary:"Removing dangling pointers doesn't prevent the crash"},{id:"success",page:151,label:"No",summary:"Removing dangling pointers prevents the crash"}]},{content:`<p>Well, that's very bad news. It seems that your microcontroller doesn't have enough RAM to hold the JSON document.</p>
<p>Please read <a href="/v6/how-to/reduce-memory-usage/">How to reduce memory usage</a>; it shows several techniques that you can implement to use less RAM.
Hopefully, you'll make enough room for the memory pool.</p>
<p>If it still doesn't fit, you'll have to upgrade to a bigger microcontroller.</p>
`},{content:`<p>Good news!<br>
The memory allocation succeeds; the <a href="/v6/api/dynamicjsondocument/"><code>DynamicJsonDocument</code></a> is simply too small, so you need to increase its capacity.</p>
<p>Use the <a href="/v6/assistant/">ArduinoJson Assistant</a> to compute the right capacity for your input.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Increasing the capacity fixes the issue"},{id:"failure",page:34,label:"No",summary:"Increasing the capacity doesn't fix the issue"}]},{content:`<p>It looks like the allocation failed.</p>
<p>Please print the capacity of the <a href="/v6/api/dynamicjsondocument/"><code>DynamicJsonDocument</code></a> to the serial port, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(doc.<span class="hljs-built_in">capacity</span>());
</code></pre>
<p>What value does it show?</p>
`,options:[{id:"capacity-0",page:45,label:"<code>0</code>",summary:"`doc.capacity()` returns `0`"},{id:"capacity-ok",page:46,label:"The value passed to the constructor of <code>DynamicJsonDocument</code>",summary:"`doc.capacity()` returns the right value"}]},{content:`<p>A big <a href="/v6/api/staticjsondocument/"><code>StaticJsonDocument</code></a> might indeed overflow the stack.
Even if there is a lot of free memory, you can run out of stack because many platforms limit the size at compile time.</p>
<p>For example, ESP8266 limits to 4096 and ESP32 limits to 8192.
These numbers might seem high, but huge part of the stack is already consumed by callers of your program. As a rule, I recommend never allocating a <a href="/v6/api/staticjsondocument/"><code>StaticJsonDocument</code></a> bigger than the half of the limit (so max 2048 on ESP8266 and 4096 on ESP32). If you need more space in your <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, you need to use a <a href="/v6/api/dynamicjsondocument/"><code>DynamicJsonDocument</code></a> instead.</p>
<p>Does switching to a <a href="/v6/api/dynamicjsondocument/"><code>DynamicJsonDocument</code></a> prevent the crash?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Switching to `DynamicJsonDocument` prevents the crash"},{id:"nomemory",page:47,label:"Yes, but now <code>deserializeJson()</code> returns <code>NoMemory</code>",summary:"Switching to `DynamicJsonDocument` produces `NoMemory`"},{id:"dynamicjsondocument-too",page:43,label:"No",summary:"Switching to `DynamicJsonDocument` doesn't prevent the crash"}]},{content:`<p><a href="/v6/api/misc/deserializationerror/#emptyinput"><code>EmptyInput</code></a> means that the input was empty or contained only spaces or comments.</p>
<p>Where does your JSON input come from?</p>
`,options:[{id:"http",page:53,label:"An HTTP response",summary:"Input comes from an HTTP response"},{id:"file",page:50,label:"A file",summary:"Input comes from a file"},{id:"serial",page:60,label:"A serial port",summary:"Input comes from a serial port"},{id:"other",page:58,label:"Something else",summary:"Input comes neither from an HTTP response, nor a file, nor a serial port"}]},{content:`<p><a href="/v6/api/misc/deserializationerror/#emptyinput"><code>EmptyInput</code></a> in the context of a file usually means:</p>
<ul>
<li>the file is closed</li>
<li>the file is opened in the wrong mode</li>
<li>the file is empty</li>
</ul>
<p>Please, make sure that the file is opened in &quot;read&quot; mode and try to print the content to make sure it's not empty.</p>
<p>You can find an example using the SD library in <a href="/v6/example/config/">JsonConfigFile.ino</a> and one using SPIFFS in <a href="/book/">Mastering ArduinoJson</a>.</p>
<p>Did this sole your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"The file was the problem"},{id:"failure",page:34,label:"No",summary:"The file is not the problem"}]},{content:`<p>This confirms that the problem comes from the certificate validation.</p>
<p>Disabling certificate validation might represent a risk, though, because your program cannot guarantee the remote server's identity.
Sometimes this is acceptable, but in most cases, you should select an appropriate certificate validation strategy by calling <a href="https://arduino-esp8266.readthedocs.io/en/latest/esp8266wifi/bearssl-client-secure-class.html#setknownkey-const-bearssl-publickey-pk"><code>setKnownKey()</code></a>, <a href="https://arduino-esp8266.readthedocs.io/en/latest/esp8266wifi/bearssl-client-secure-class.html#setfingerprint-const-uint8-t-fp-20-setfingerprint-const-char-fpstr"><code>setFingerprint()</code></a>, or <a href="https://arduino-esp8266.readthedocs.io/en/latest/esp8266wifi/bearssl-client-secure-class.html#settrustanchors-bearssl-x509list-ta"><code>WiFiClientSecure::setTrustAnchors()</code></a>.</p>
<p>Anyway, I'm glad I could help.<br>
I would be very grateful if, in return, you could <a href="https://github.com/bblanchon/ArduinoJson/stargazers">star ArduinoJson on GitHub</a>. ❤</p>
<p>If you want to support the project (and learn a lot of stuff as well), you can purchase <a href="/book/">Mastering ArduinoJson</a>.<br>
Alternatively, you can <a href="https://github.com/sponsors/bblanchon">sponsor the project on GitHub</a>.</p>
<p>Should you have any idea on how I could improve myself, please <a href="https://github.com/bblanchon/ArduinoJson/issues/new">open an issue on GitHub</a>.</p>
<p>Bye!</p>
<p>--<br>
<em>ArduinoJson Troubleshooter</em></p>
`},{content:`<p>With HTTPS, <a href="/v6/api/misc/deserializationerror/#emptyinput"><code>EmptyInput</code></a> can be due to an error during the validation of the certificate.</p>
<p>Please try to disable certificate validation by calling <a href="https://arduino-esp8266.readthedocs.io/en/latest/esp8266wifi/bearssl-client-secure-class.html#setinsecure"><code>WiFiClientSecure::setInsecure()</code></a> before starting the HTTP request.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"certificate-problem",page:51,label:"Yes",summary:"Calling `WiFiClientSecure::setInsecure()` solves the issue."},{id:"certificate-ok",page:54,label:"No",summary:"Calling `WiFiClientSecure::setInsecure()` doesn't solve the issue."}]},{content:`<p><a href="/v6/api/misc/deserializationerror/#emptyinput"><code>EmptyInput</code></a> in the context of an HTTP response usually means that the server returns a <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections">redirection code</a> (like <a href="https://en.wikipedia.org/wiki/HTTP_301">301 Moved Permanently</a> or <a href="https://en.wikipedia.org/wiki/HTTP_302">302 Found</a>), but the client doesn't follow the redirection.</p>
<p>Please check the HTTP status code in the response. If it's 301 or 302, you must modify your program to handle the redirection.</p>
<p>If you use an HTTP library, make sure that you enabled the &quot;follow redirection&quot; feature.
For example, if you use <code>HTTPClient</code> on ESP8266 or ESP32, you must call the following function before sending the request:</p>
<pre><code class="hljs language-c++">http.<span class="hljs-built_in">setFollowRedirects</span>(HTTPC_FORCE_FOLLOW_REDIRECTS);
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Following redirection fixes the issue"},{id:"no-redirection",page:52,label:"No",summary:"It's not a redirection"}]},{content:`<p><a href="/v6/api/misc/deserializationerror/#emptyinput"><code>EmptyInput</code></a> could be caused by a timeout while reading the response.</p>
<p>Please increase the value of the timeout by calling <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/streamsettimeout/"><code>Stream::setTimeout()</code></a> before calling <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>. For example:</p>
<pre><code class="hljs language-c++">client.<span class="hljs-built_in">setTimeout</span>(<span class="hljs-number">10000</span>);  <span class="hljs-comment">// 10 seconds</span>
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Increasing the timeout fixes the issue"},{id:"timeout-increased",page:34,label:"No",summary:"Increasing the timeout doesn't fix the issue"}]},{content:`<p>This confirms that the problem comes from the input: it is indeed empty, or at least starts with a NUL character.</p>
<p>You must now find a way to fix your input; I cannot help you with that. Sorry.</p>
`},{content:`<p>Please print the ASCII code for the first character, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(stream.<span class="hljs-built_in">peek</span>());
</code></pre>
<p>What do you see?</p>
`,options:[{id:"zero",page:55,label:"<code>0</code>",summary:"The first character is NUL"},{id:"non-zero",page:34,label:"Something else",summary:"The first character is not NUL"}]},{content:`<p>Please print the ASCII code for the first character, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>((<span class="hljs-type">int</span>)input[<span class="hljs-number">0</span>]);
</code></pre>
<p>What do you see?</p>
`,options:[{id:"zero",page:55,label:"<code>0</code>",summary:"The first character is NUL"},{id:"non-zero",page:34,label:"Something else",summary:"The first character is not NUL"}]},{content:`<p>The input is probably starting with a NUL character.</p>
<p>What type of input are you passing to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>?</p>
`,options:[{id:"string",page:57,label:"A string (<code>const char*</code>, <code>String</code>, <code>std::string</code>...)",summary:"Input type is a string"},{id:"stream",page:56,label:"A stream (<code>Serial</code>, <code>WiFiClient</code>, <code>File</code>...)",summary:"Input type is a stream"}]},{content:`<p><a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> also returns <a href="/v6/api/misc/deserializationerror/#emptyinput"><code>EmptyInput</code></a> when the input contains only spaces.</p>
<p>For example, this can happen when you call <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> repeatedly and there are spaces (or line breaks) between the documents. Suppose you use the following program to parse JSON input from the serial port:</p>
<pre><code class="hljs language-c++"><span class="hljs-function"><span class="hljs-type">void</span> <span class="hljs-title">loop</span><span class="hljs-params">()</span> </span>{
  <span class="hljs-comment">// wait from an incomming message</span>
  <span class="hljs-keyword">while</span> (Serial.<span class="hljs-built_in">available</span>() == <span class="hljs-number">0</span>)
    <span class="hljs-built_in">delay</span>(<span class="hljs-number">100</span>);
    
  StaticJsonDocument&lt;<span class="hljs-number">1024</span>&gt; doc;
  DeserializationError err = <span class="hljs-built_in">deserializeJson</span>(doc, Serial);
  
  ...
}
</code></pre>
<p>If you use the default settings of the Arduino Serial Monitor, <code>err</code> will contains <a href="/v6/api/misc/deserializationerror/#ok"><code>Ok</code></a> and then <a href="/v6/api/misc/deserializationerror/#emptyinput"><code>EmptyInput</code></a> each time you press &quot;Send&quot;.</p>
<p>Indeed, by default the Arduino Serial Monitor appends <a href="https://fr.wikipedia.org/wiki/Carriage_Return_Line_Feed">CRLF</a> at the end of the message, so when you enter <code>{&quot;hello&quot;:&quot;world&quot;}</code> in the input box, what is really sent is <code>{&quot;hello&quot;:&quot;world&quot;}\\r\\n</code>.
Since <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> stops reading immediately at the end of the object, the <code>\\r\\n</code> remains in the serial buffer.
Therefore, <a href="https://www.arduino.cc/reference/en/language/functions/communication/serial/available/"><code>Serial::available()</code></a> returns <code>2</code> and the program calls <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> again.
<a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> reads <code>\\r\\n</code>, which are just white spaces for him, so it continues reading until a timeout occurs (1s by default), and it finally returns <a href="/v6/api/misc/deserializationerror/#emptyinput"><code>EmptyInput</code></a>.</p>
<p>You can fix this problem by changing the configuration of the Serial Monitor to &quot;No line ending&quot;.
If you cannot remove the CR+LF at the end of the message, you must add a flush loop after <code>deserializeJson(doc, Serial)</code>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-keyword">while</span> (<span class="hljs-built_in">isspace</span>(Serial.<span class="hljs-built_in">peek</span>())
  Serial.<span class="hljs-built_in">read</span>();
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Removing CRLF fixes the issue"},{id:"failure",page:34,label:"No",summary:"Removing CRLF doesn't fix the issue"}]},{content:`<p><a href="/v6/api/misc/deserializationerror/#emptyinput"><code>EmptyInput</code></a> can be caused by a timeout while waiting for the input.</p>
<p>In that case, the solution is to wait until some data is available before calling <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>. A simple loop can do the trick:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// wait from an incomming message</span>
<span class="hljs-keyword">while</span> (Serial.<span class="hljs-built_in">available</span>() == <span class="hljs-number">0</span>)
  <span class="hljs-built_in">delay</span>(<span class="hljs-number">100</span>);

<span class="hljs-built_in">deserializeJson</span>(doc, Serial);
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Adding a wait loop fixes the issue"},{id:"available",page:59,label:"No",summary:"Adding a wait loop doesn't fix the issue"}]},{content:`<p><a href="/v6/api/misc/deserializationerror/#incompleteinput"><code>IncompleteInput</code></a> means that <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> managed to parse the beginning of the JSON document, but the end was missing.</p>
<p>What type of input do you pass to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>?</p>
`,options:[{id:"stream",page:64,label:"A stream",summary:"Input comes from a stream"},{id:"string",page:65,label:"A string object (like <code>String</code>)",summary:"Input comes from a string object"},{id:"pointer",page:66,label:"A pointer (like <code>char*</code> or <code>const char*</code>)",summary:"Input comes from a pointer"}]},{content:`<p><a href="/v6/api/misc/deserializationerror/#incompleteinput"><code>IncompleteInput</code></a> can be caused by an interruped connection. For example, this problem happens when the client reads to slowly.</p>
<p>Indeed, because it reads bytes one by one, <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> can be slow with some implementations of <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/"><code>Stream</code></a>. To speed up the reading, we must add a buffer between the <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/"><code>Stream</code></a> and <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>. The easiest way to do this is to use <code>ReadBufferingStream</code> from the <a href="https://github.com/bblanchon/ArduinoStreamUtils">StreamUtils library</a>:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// replace the following line:</span>
<span class="hljs-built_in">deserializeJson</span>(doc, stream);

<span class="hljs-comment">// with these two lines:</span>
<span class="hljs-function">ReadBufferingStream <span class="hljs-title">bufferedStream</span><span class="hljs-params">(stream, <span class="hljs-number">64</span>)</span></span>;
<span class="hljs-built_in">deserializeJson</span>(doc, bufferedStream);
</code></pre>
<p>Thanks to <code>ReadBufferingStream</code>, the program will read the input in chunks of 64 bytes, which will be much faster.
Hopefully, this will keep the connection opened till the end of the message.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Adding a buffer solves the issue"},{id:"same-with-buffer",page:63,label:"No",summary:"Adding a buffer doesn't solve the issue"}]},{content:`<p>Maybe seeing where the input stops will give you an idea of what's going wrong.</p>
<p>We can log the characters read by <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> by inserting a <code>ReadLoggingStream</code>, another class from the <a href="https://github.com/bblanchon/ArduinoStreamUtils">StreamUtils library</a>:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// replace the following line</span>
<span class="hljs-built_in">deserializeJson</span>(doc, wifiClient);

<span class="hljs-comment">// with these two lines:</span>
<span class="hljs-function">ReadLoggingStream <span class="hljs-title">loggingStream</span><span class="hljs-params">(stream, Serial)</span></span>;
<span class="hljs-built_in">deserializeJson</span>(doc, loggingStream);
</code></pre>
<p>Thanks to <code>ReadLoggingStream</code>, this program prints every character read by <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>. Therefore, you'll be able to see where the input stops; hopefully, this will give you a better understanding of the problem.</p>
<p>When using <code>ReadLoggingStream</code>, it's crucial that you configure the serial port with a very high baud rate; otherwise the log will slow down the reading process, which is a problem as I explained previously.</p>
<p>Did this information help you solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Logging helped fixing the issue"},{id:"failure",page:34,label:"No",summary:"Logging didn't help fixing the issue"}]},{content:`<p><a href="/v6/api/misc/deserializationerror/#incompleteinput"><code>IncompleteInput</code></a> can be caused by a timeout.</p>
<p>Please increase the value of the timeout by calling <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/streamsettimeout/"><code>Stream::setTimeout()</code></a> before calling <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>. For example:</p>
<pre><code class="hljs language-c++">stream.<span class="hljs-built_in">setTimeout</span>(<span class="hljs-number">10000</span>);  <span class="hljs-comment">// 10 seconds</span>
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Inreasing the timeout solves the issue"},{id:"timeout-increased",page:62,label:"No",summary:"Inreasing the timeout doesn't solve the issue"}]},{content:`<p>Please print the content of the string to the serial port, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(input);
</code></pre>
<p>You should see that the JSON document is truncated.
This can be caused by a lack of RAM: the string object failed to allocate a buffer large enough for the whole document.</p>
<p>This issue may come from <a href="https://cpp4arduino.com/2018/11/06/what-is-heap-fragmentation.html">heap fragmentated</a>.
Fixing this problem is very hard because it involve fixing the whole program, not just the JSON deserialization.</p>
<p>Yet, you can try to preallocate the buffer by calling <a href="https://www.arduino.cc/reference/en/language/variables/data-types/string/functions/reserve/"><code>String::reserve()</code></a> before loading the content of the input, like so:</p>
<pre><code class="hljs language-c++">input.<span class="hljs-built_in">reserve</span>(<span class="hljs-number">1024</span>);  <span class="hljs-comment">// adapt the value to the size of your input</span>
</code></pre>
<p>Hopefully, you'll be able to reserve a buffer large enough to store the whole string.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Calling `String::reserve()` solves the issue"},{id:"same-with-reserve",page:67,label:"No",summary:"Calling `String::reserve()` doesn't solve the issue"}]},{content:`<p>I'll assume that your input is stored in a buffer similar to this one:</p>
<pre><code class="hljs language-c++"><span class="hljs-type">char</span> input[<span class="hljs-number">1024</span>];
<span class="hljs-type">size_t</span> input_size;
</code></pre>
<p>Please print the content of the string to the serial port, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">write</span>(input, input_size);
</code></pre>
<p>You should see that the JSON document is truncated.
This is probably caused by the size of the buffer: it's too small to store the complete document.</p>
<p>Please increase the capacity of the buffer, but remember that the size of the stack is limited so you may need to move your buffer to the heap.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Increasing the buffer size solves the issue"},{id:"larger-buffer",page:67,label:"No",summary:"Increasing the buffer size doesn't solve the issue"}]},{content:`<p>To reduce the memory usage, you should try to pass the source (file, connection, stream, etc) directly to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>, either via the <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/"><code>Stream</code></a> interface or via a <a href="/news/2019/11/01/version-6-13-0/">custom reader</a>. This will avoid the need for an intermediate buffer.</p>
<p>As usual, make sure the capacity of the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> is adapted to your needs by using the <a href="/v6/assistant/">ArduinoJson Assistant</a></p>
<p>Additionaly, you can add a <a href="/news/2020/03/22/version-6-15-0/">filter</a> to remove all unneeded information from the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>.</p>
<p>You can see examples here:</p>
<ul>
<li><a href="/v6/example/config/">JsonConfigFile.ino</a></li>
<li><a href="/v6/example/http-client/">JsonHttpClient.ino</a></li>
<li><a href="/v6/doc/deserialization/">Deserialization tutorial</a></li>
<li><a href="/book/">Mastering ArduinoJson</a></li>
</ul>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Reading from stream fixes the issue"},{id:"failure",page:34,label:"No",summary:"Reading from stream doesn't fix the issue"}]},{content:`<p>Where does the input come from?</p>
`,options:[{id:"http",page:82,label:"An HTTP response",summary:"Input comes from HTTP"},{id:"serial",page:100,label:"A serial port",summary:"Input comes from a serial port"},{id:"file",page:76,label:"A file",summary:"Input comes from a file"},{id:"stream",page:103,label:"A stream",summary:"Input comes from a stream"},{id:"string",page:105,label:"A string (like <code>String</code> or <code>const char*</code>)",summary:"Input comes from a string"},{id:"char-ptr",page:71,label:"A char array or pointer (like <code>char[]</code> or <code>char*</code>)",summary:"Input comes from a char array"}]},{content:`<p>If you must keep the two calls to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>, you need to disable the zero-copy mode by passing a read-only input buffer. Casting the pointer will do the trick:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// replace this:</span>
<span class="hljs-built_in">deserializeJson</span>(doc, input, inputSize);

<span class="hljs-comment">// ...with this:</span>
<span class="hljs-built_in">deserializeJson</span>(doc, (<span class="hljs-type">const</span> <span class="hljs-type">char</span>*)input, inputSize);
</code></pre>
<p>Now that the zero-copy mode is disabled, you probably need a larger <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, so don't forget to update the capacity. As usual, use the <a href="/v6/assistant/">ArduinoJson Assistant</a> to compute the right capacity for your project.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Casting the pointer fixes the issue"},{id:"cast",page:105,label:"No",summary:"Casting the pointer doesn't fix the issue"}]},{content:`<p>When you pass a writeable buffer as the input of <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>, ArduinoJson uses the zero-copy mode. Instead of copying the strings from the input into the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, it stores pointers to the input buffer.</p>
<p>While doing this, the parser modifies the input buffer to unescape special characters and add string terminator.
When <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> returns the input buffer doesn't contain a valid JSON document anymore.
For this reason, you cannot call <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> twice with the same input buffer (if the input is writable).</p>
<p>I don't see any reason for calling <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> twice with the same input, so I recommend that your remove the second call.</p>
<p>Can you avoid duplicate calls to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>?</p>
`,options:[{id:"success",page:151,label:"Yes, and it fixes the issue",summary:"Removing the second call fixes the issue"},{id:"second-removed",page:105,label:"Yes, but it doesn't fix the issue",summary:"Removing the second call doesn't fix the issue"},{id:"cannot-remove",page:69,label:"No",summary:"The second call cannot be removed"}]},{content:`<p>Did you call <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> twice with the same input buffer?</p>
`,options:[{id:"two-calls",page:70,label:"Yes",summary:"Program calls `deserializeJson()` twice"},{id:"one-call",page:105,label:"No",summary:"Program doesn't call `deserializeJson()` twice"}]},{content:`<p>So, the JSON document is valid and not preceded by anything; yet, <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> returns <a href="/v6/api/misc/deserializationerror/#invalidinput"><code>InvalidInput</code></a>.</p>
<p>Well... I'm out of idea :-(</p>
`,tags:["needs_assistance"]},{content:`<p><code>254</code> or <code>255</code> is the first byte of the UTF-16 <a href="https://en.wikipedia.org/wiki/Byte_order_mark">Byte Order Mark</a> (BOM). ArduinoJson doesn't support UTF-16; it only supports ASCII and UTF-8. As a workaround, we can ask the server to encode the response with UTF-8.</p>
<p>To do this, add the following header to the HTTP request:</p>
<pre><code class="hljs language-http"><span class="hljs-attribute">Accept</span><span class="hljs-punctuation">: </span>application/json;charset=utf-8
</code></pre>
<p>Did this solve your problem?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"`Accept: application/json;charset=utf-8` solves the issue"},{id:"failure",page:34,label:"No",summary:"`Accept: application/json;charset=utf-8` doesn't solve the issue"}]},{content:`<p><code>239</code> is the first by of the UTF-8 <a href="https://en.wikipedia.org/wiki/Byte_order_mark">Byte Order Mark</a> (BOM).</p>
<p>ArduinoJson doesn't skip the BOM, you need to do it in your program by adding the following lines <strong>before</strong> calling <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// skip BOM</span>
stream.<span class="hljs-built_in">read</span>();  <span class="hljs-comment">// 0xEF</span>
stream.<span class="hljs-built_in">read</span>();  <span class="hljs-comment">// 0xBB</span>
stream.<span class="hljs-built_in">read</span>();  <span class="hljs-comment">// 0xBF</span>
</code></pre>
<p>Admitedly, this is quite hacky, so I recommend that you try to fix the server which should not include a BOM anyway.</p>
<p>Did this fix your problem?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Skipping the first 3 bytes solves the issue"},{id:"failure",page:34,label:"No",summary:"Skipping the first 3 bytes doesn't solve the issue"}]},{content:`<p>We must check that the JSON document is not preceded by a <a href="https://en.wikipedia.org/wiki/Byte_order_mark">Byte Order Mark</a> (BOM).</p>
<p>To do this, we'll peek at the first byte in the file and print the value to the serial port. Insert the following line <em>before</em> the call to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(file.<span class="hljs-built_in">peek</span>());
</code></pre>
<p>What value does it print?</p>
`,options:[{id:"utf8",page:74,label:"<code>239</code>",summary:"Input's first byte suggests a UTF-8 BOM"},{id:"utf16",page:73,label:"<code>254</code> or <code>255</code>",summary:"Input's first byte suggests a UTF-16 BOM"},{id:"no-bom",page:72,label:"Something else",summary:"Input's first byte doesn't suggest a BOM"}]},{content:`<p>We need to make sure that the JSON document is valid.
To do that, please print the input to the serial port, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">print</span>(file.<span class="hljs-built_in">readString</span>());
</code></pre>
<p>Then, copy the content and paste it in a JSON linter, like <a href="https://jsonlint.com/">jsonlint.com</a>.</p>
<p>Is the JSON document valid?</p>
`,options:[{id:"valid",page:75,label:"Yes",summary:"`jsonlint` says the document is valid"},{id:"invalid",page:89,label:"No",summary:"`jsonlint` says the document is invalid"}]},{content:`<p>Unfortunately, I only know how to use the following HTTP libraries:</p>
<ul>
<li><a href="https://github.com/esp8266/Arduino/tree/master/libraries/ESP8266HTTPClient">ESP8266HTTPClient</a></li>
<li><a href="https://github.com/espressif/arduino-esp32/tree/master/libraries/HTTPClient">HTTPClient for ESP32</a></li>
</ul>
`,tags:["needs_assistance"]},{content:`<p>On some Arduino core (most notably <a href="https://github.com/arduino/ArduinoCore-avr/blob/master/cores/arduino/Stream.h">AVR core</a>), <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/streamfind/"><code>Stream::find()</code></a> takes a <code>char*</code> instead of a <code>const char*</code>. In this case, you'll get a compiler warning, which you can fix by extracting a char array, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-type">char</span> endOfHeaders[] = <span class="hljs-string">&quot;\\r\\n\\r\\n&quot;</span>;
client.<span class="hljs-built_in">find</span>(endOfHeaders);
</code></pre>
<p>Did this fix your problem?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Using a `char[]` fixes the warning"},{id:"failure",page:34,label:"No",summary:"Using a `char[]` doesn't fix the warning"}]},{content:`<p>Just like the HTTP request, the response contains some headers, followed by an empty line, and then followed by the body.
The body is the part that contains the JSON document; therefore, before calling <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>, you must skip the headers.</p>
<p>To skip the headers, call <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/streamfind/"><code>Stream::find()</code></a>, like so:</p>
<pre><code class="hljs language-c++">client.<span class="hljs-built_in">find</span>(<span class="hljs-string">&quot;\\r\\n\\r\\n&quot;</span>);
</code></pre>
<p>This function consumes the input stream until it finds the empty line (<code>\\r\\n\\r\\n</code>).</p>
<p>See the example <a href="/v6/example/http-client/">JsonHttpClient.ino</a> for a complete implementation.</p>
<p>Did this fix your problem?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Skipping HTTP headers solves the issue"},{id:"warning",page:78,label:"Yes, but there is a compiler warning about <code>client.find()</code>",summary:"Skipping HTTP headers solves the issue, but there is a warning"},{id:"header-skipped",page:80,label:"No",summary:"Skipping HTTP headers doesn't solve the issue"}]},{content:`<p>When you use HTTP 1.1, the server can send the response with <a href="https://en.wikipedia.org/wiki/Chunked_transfer_encoding">Chunked Transfer Encoding</a>.
As a result, the response's body may contain some hexadecimal number at the begining of each chunk.
The most straightforward workaround is to downgrade the connection to HTTP 1.0.</p>
<p>To do this, replace <code>HTTP/1.1</code> with <code>HTTP/1.0</code> in the first line of the request.</p>
<p>Did this solve your problem?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Using `HTTP/1.0` solves the issue"},{id:"http10",page:88,label:"No",summary:"Using `HTTP/1.0` doesn't solve the issue"}]},{content:`<p>Before calling <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>, did you skip the HTTP headers?</p>
`,options:[{id:"headers-skipped",page:80,label:"Yes",summary:"HTTP headers are skipped"},{id:"headers-not-skipped",page:79,label:"No",summary:"HTTP headers are not skipped"}]},{content:`<p>Do you use an HTTP library?</p>
`,options:[{id:"httpclient",page:87,label:"Yes, I'm using <code>HTTPClient</code>",summary:"Program uses `HTTPClient`"},{id:"http-library",page:77,label:"Yes, but it's not <code>HTTPClient</code>",summary:"Program uses an unknown HTTP library"},{id:"no-library",page:81,label:"No",summary:"Program doesn't use an HTTP library"}]},{content:`<p>You're calling the wrong function:</p>
<ul>
<li><code>HTTPClient::getString()</code> extracts the response's body</li>
<li><code>HTTPClient::readString()</code> is inherited from <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/"><code>Stream</code></a> and reads the complete response</li>
</ul>
<p>Unless you have very good reasons, you should call <code>getString()</code> not <code>readString()</code>.</p>
<p>Do calling <code>HTTPClient::getString()</code> solves your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Calling `HTTPClient::getString()` solves the issue"},{id:"getstring",page:105,label:"No",summary:"Calling `HTTPClient::getString()` doesn't solves the issue"}]},{content:`<p>When you call <code>HTTPClient::getStream()</code>, you bypass the part that handles <a href="https://en.wikipedia.org/wiki/Chunked_transfer_encoding">Chunked Transfer Encoding</a>.
As a result, the response's body may contain some hexadecimal number at the begining of each chunk.
The most straightforward workaround is to downgrade the connection to HTTP 1.0.</p>
<p>To do this, add the following line <strong>before</strong> sending the request:</p>
<pre><code class="hljs language-c++">http.<span class="hljs-built_in">useHTTP10</span>(<span class="hljs-literal">true</span>);  <span class="hljs-comment">// avoid Chunked Transfer Encoding</span>
</code></pre>
<p>Did this solve your problem?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Calling `HTTPClient::useHTTP10(true)` solves the issue"},{id:"changed",page:85,label:"No",summary:"Calling `HTTPClient::useHTTP10(true)` doesn't solve the issue"}]},{content:`<p>We need to make sure that the JSON document is valid.
To do that, please print the content of the response to the serial port like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">print</span>(http.<span class="hljs-built_in">getStream</span>().<span class="hljs-built_in">readString</span>());
</code></pre>
<p>Then, copy the response and paste it in a JSON linter, like <a href="https://jsonlint.com/">jsonlint.com</a>.</p>
<p>Is the JSON document valid?</p>
`,options:[{id:"valid",page:101,label:"Yes",summary:"jsonlint says the document is valid"},{id:"invalid",page:89,label:"No",summary:"jsonlint says the document is invalid"}]},{content:`<p>Did you call <code>HTTPClient::useHTTP10(true)</code>?</p>
`,options:[{id:"http10-true",page:85,label:"Yes",summary:"Program calls `HTTPClient::useHTTP10(true)`"},{id:"http10-false",page:84,label:"No",summary:"Program doesn't call `HTTPClient::useHTTP10(true)`"}]},{content:`<p>Which function of <code>HTTPClient</code> do you call to get the response?</p>
`,options:[{id:"getstream",page:86,label:"<code>getStream()</code>",summary:"Response comes from `HTTPClient::getStream()`"},{id:"getstring",page:105,label:"<code>getString()</code>",summary:"Response comes from `HTTPClient::getString()`"},{id:"readstring",page:83,label:"<code>readString()</code>",summary:"Response comes from `HTTPClient::readString()`"}]},{content:`<p>What's the type of the input that you pass to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a></p>
`,options:[{id:"stream",page:101,label:"A stream",summary:"The input is a stream"},{id:"string",page:104,label:"A string",summary:"The input is a string"}]},{content:`<p>What is wrong with this JSON document?</p>
`,options:[{id:"comments",page:90,label:"It contains comments",summary:"The document contains comments"},{id:"other-error",page:91,label:"Something else",summary:"The document doesn't contain comments"}]},{content:`<p><a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> can read JSON documents that contain comments, but the support is disabled by default to reduce the footprint of the library.</p>
<p>To enable the support for comments, define <a href="/v6/api/config/enable_comments/"><code>ARDUINOJSON_ENABLE_COMMENTS</code></a> to <code>1</code> before including <code>ArduinoJson.h</code>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-meta">#<span class="hljs-keyword">define</span> ARDUINOJSON_ENABLE_COMMENTS 1</span>
<span class="hljs-meta">#<span class="hljs-keyword">include</span> <span class="hljs-string">&lt;ArduinoJson.h&gt;</span></span>
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Setting ARDUINOJSON_ENABLE_COMMENTS to 1 solves the issue"},{id:"failure",page:34,label:"No",summary:"Setting ARDUINOJSON_ENABLE_COMMENTS to 1 doesn't solve the issue"}]},{content:`<p>Well, if the JSON document is invalid, you have to fix it, otherwise ArduinoJson won't be able to parse it.</p>
<p>The ball is in your court; there is nothing more I can do.</p>
`},{content:`<p>Sometimes, the input is invalid because some bytes were dropped when receiving the document.</p>
<p>This problem occurs when the sender writes bytes faster than the receiver reads them, filling up the receiver's serial buffer until it overflows and drops incoming bytes.
For example, this problem happens when the receiver is busy doing some other task while the sender is transmitting.
It also occurs when the receiver logs incoming data at a slower rate; that's why it's crucial to get the &quot;debug&quot; serial port running much faster than the &quot;communication&quot; serial.</p>
<p>You could solve this issue by increasing the serial buffer size; the details depend on each platform.
For Arduino UNO, the default is 64 and can be changed by defining the <code>SERIAL_RX_BUFFER_SIZE</code> macro.
For <a href="https://en.wikipedia.org/wiki/ESP8266">ESP8266</a> and <a href="https://en.wikipedia.org/wiki/ESP32">ESP32</a>, the default is 256 and can be changed by calling <code>setRxBufferSize()</code>.</p>
<p>If your JSON document is significantly larger than the buffer, please try to increase the buffer size.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Increasing serial buffer size solves the issue"},{id:"larger-buffer",page:101,label:"No",summary:"Increasing serial buffer size doesn't solves the issue"}]},{content:`<p>Any electric wire acts as an antenna; the longer the wire, the stronger the effect. This antenna picks up every electromagnetic field in the environment, which induces a current in the wire. On long wires, this current is strong enough to introduce errors in the communication.</p>
<p>Reducing the length of the cable certainly improve the error ratio, but is rarely applicable.
We can, however, improve the quality of the cable.
For example, you can replace the wires with a coaxial cable: the shielding will prevent the inner wire from acting as an antenna.</p>
<p>Please upgrade or shorten your cable.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Upgrading the cables solves the issue"},{id:"improved",page:95,label:"Somehow",summary:"Upgrading the cables improves the situation"},{id:"no-improvment",page:96,label:"No",summary:"Upgrading the cables doesn't solve the issue"}]},{content:`<p><a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> may return <a href="/v6/api/misc/deserializationerror/#invalidinput"><code>InvalidInput</code></a> because it starts reading the input mid-stream.</p>
<p>For example, it can happen if your program calls <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> in a loop like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-function"><span class="hljs-type">void</span> <span class="hljs-title">loop</span><span class="hljs-params">()</span> </span>{
  <span class="hljs-keyword">if</span> (Serial1.<span class="hljs-built_in">available</span>()) {
    StaticJsonDocument&lt;<span class="hljs-number">64</span>&gt; doc;
    DeserializationError err = <span class="hljs-built_in">deserializeJson</span>(doc, Serial1);

    <span class="hljs-keyword">if</span> (err) {
      Serial.<span class="hljs-built_in">println</span>(err.<span class="hljs-built_in">c_str</span>());
      <span class="hljs-keyword">return</span>;
    }
}
</code></pre>
<p>The problem with this program is that, if <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> returns an error (such as <a href="/v6/api/misc/deserializationerror/#nomemory"><code>NoMemory</code></a>), any subsequent call to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> will return <a href="/v6/api/misc/deserializationerror/#invalidinput"><code>InvalidInput</code></a>. Indeed, <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> stops reading as soon as it encounters an error, so the remainder of the document is still in the serial buffer.</p>
<p>The solution is to flush the serial buffer any time an error is detected:</p>
<pre><code class="hljs language-c++"><span class="hljs-function"><span class="hljs-type">void</span> <span class="hljs-title">loop</span><span class="hljs-params">()</span> </span>{
  <span class="hljs-keyword">if</span> (Serial1.<span class="hljs-built_in">available</span>()) {
    StaticJsonDocument&lt;<span class="hljs-number">64</span>&gt; doc;
    DeserializationError err = <span class="hljs-built_in">deserializeJson</span>(doc, Serial1);

    <span class="hljs-keyword">if</span> (err) {
      Serial.<span class="hljs-built_in">println</span>(err.<span class="hljs-built_in">c_str</span>());

      <span class="hljs-keyword">while</span> (Serial1.<span class="hljs-built_in">available</span>() &gt; <span class="hljs-number">0</span>)
        Serial1.<span class="hljs-built_in">read</span>();

      <span class="hljs-keyword">return</span>;
    }
}
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Flushing the serial buffer fixes the issue"},{id:"flush",page:99,label:"No",summary:"Flushing the serial buffer doesn't fix the issue"}]},{content:`<p><a href="https://en.wikipedia.org/wiki/Error_correction_code">Error-correction codes (ECC)</a> are a way of transmitting the data with redundant information that allows the receiver to fix most of the errors.
The most basic error-correction code is <a href="https://en.wikipedia.org/wiki/Hamming(7,4)">Hamming(7,4)</a>, which transmits 7 bits for every 4 bits of actual data.
In other words, it adds 3 bits of redundancy for every 4 bits that you send.
The magic with this code is that it can correct any 1-bit error in the 7 bits.</p>
<p>The simplest way to implement <a href="https://en.wikipedia.org/wiki/Hamming(7,4)">Hamming(7,4)</a> on Arduino is to use the <code>HammingStream</code> class from the <a href="https://github.com/bblanchon/ArduinoStreamUtils">StreamUtils</a> library:</p>
<pre><code class="hljs language-c++"><span class="hljs-function">HammingStream&lt;7, 4&gt; <span class="hljs-title">eccLinkSerial</span><span class="hljs-params">(linkSerial)</span></span>;
</code></pre>
<p>Now, you can use <code>eccSerial1</code> in place of the original <code>Serial1</code>; it will automatically encode and decode the information.</p>
<p>As <a href="https://en.wikipedia.org/wiki/Hamming(7,4)">Hamming(7,4)</a> only transmits 7 bits of data, you can safely downgrade the serial link from 8 to 7 bits.
You can do this by passing <code>SERIAL_7N1</code> as the second argument of <a href="https://www.arduino.cc/reference/en/language/functions/communication/serial/begin/"><code>Serial::begin()</code></a>.
This feature is not supported by <a href="https://www.arduino.cc/en/Reference/SoftwareSerial"><code>SoftwareSerial</code></a>, which is yet another reason to avoid it.</p>
<p>Error-correction codes are very powerful, but they'll never eliminate errors completely. For example, <a href="https://en.wikipedia.org/wiki/Hamming(7,4)">Hamming(7,4)</a> can only fix a 1-bit error, so if two or more bits are swapped, it will not fix them.
To get more confidence in the integrity of the received data, the ultimate solution is to add an error detection scheme, like a checksum.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Error-correction codes fix the issue"},{id:"ecc",page:96,label:"No",summary:"Error-correction codes doesn't fix the issue"}]},{content:`<p>We need to make sure that the JSON document is valid.
To do that, please print the input to the serial port, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">print</span>(Serial1.<span class="hljs-built_in">readString</span>());
</code></pre>
<p>Note that <a href="https://www.arduino.cc/reference/en/language/functions/communication/serial/readstring/"><code>Serial1.readString()</code></a> will wait for a timeout before returning, so the statement may appear frozen. Be patient.</p>
<p>Then, copy the response and paste it in a JSON linter, like <a href="https://jsonlint.com/">jsonlint.com</a>.</p>
<p>Is the JSON document valid?</p>
`,options:[{id:"valid",page:92,label:"Yes",summary:"`jsonlint` says the document is valid"},{id:"invalid",page:89,label:"No",summary:"`jsonlint` says the document is invalid"}]},{content:`<p>Any kind of communication is subject to errors: sometimes you send a <code>1</code> and receive a <code>0</code>.
The problem with the serial port is that there is no built-in way to fix these errors.
However, we can take some measures to reduce the error ratio to something acceptable.</p>
<p>The faster the communication, the higher the error ratio, so the first thing to try is to reduce the communication speed.
Please try to reduce the baud rate.</p>
<p class="short-warning">If your program receives from one port and logs to another one, <strong>make sure the latter runs at a much higher speed</strong>. Logging must be at least ten times faster, or it will slow down the receiving port, which may drop incoming bytes.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Reducing baud rate fixes the issue"},{id:"better",page:93,label:"Somehow",summary:"Reducing baud rate improves the situation"},{id:"not-better",page:96,label:"No",summary:"Reducing baud rate doesn't fix the issue"}]},{content:`<p>The <a href="https://en.wikipedia.org/wiki/AVR_microcontrollers">AVR</a> implementation of <a href="https://www.arduino.cc/en/Reference/SoftwareSerial"><code>SoftwareSerial</code></a> is <strong>notoriously unreliable</strong> 😱.
The main problem is that it disables interrupts when sending data, which causes many issues like dropping incoming bytes on the regular <a href="https://www.arduino.cc/reference/en/language/functions/communication/serial/"><code>Serial</code></a>.</p>
<p>You may consider the following alternative libraries, but none of them is perfect:</p>
<ul>
<li><a href="https://github.com/PaulStoffregen/AltSoftSerial">AltSoftSerial</a></li>
<li><a href="https://github.com/MustBeArt/SlowSoftSerial">SlowSoftSerial</a></li>
<li><a href="https://github.com/SlashDevin/NeoSWSerial">NeoSoftSerial</a></li>
</ul>
<p>However, I highly recommend that you use a hardware implementation (such as <code>Serial</code> or <code>Serial1</code>). Don't hesitate to upgrade your board to get one with more than one <a href="https://en.wikipedia.org/wiki/Universal_asynchronous_receiver-transmitter">UART</a>.</p>
<p>For example, if you're currently using an Arduino UNO, which has only one UART, you can upgrade to the Arduino Leonardo, which has three.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Removing `SoftwareSerial` solves the issue"},{id:"removed",page:99,label:"No",summary:"Removing `SoftwareSerial` doesn't solve the issue"}]},{content:`<p>Not all microcontrollers use the same voltage for the serial port.
Some use 5V logic; others use 3.3V.</p>
<p>For example, the Arduino UNO uses 5V whereas the ESP8266 uses 3.3V.</p>
<p>If you need to wire two devices with different voltages, you need a <a href="https://www.amazon.com/dp/B00NAY2BBY?tag=bblanchon0b-20">logic-level converter</a>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"The issue is a voltage mismatch"},{id:"voltage-ok",page:97,label:"No",summary:"The issue is not a voltage mismatch"}]},{content:`<p>Are you using <a href="https://www.arduino.cc/en/Reference/SoftwareSerial"><code>SoftwareSerial</code></a>?</p>
`,options:[{id:"software",page:98,label:"Yes",summary:"Program uses `SoftwareSerial`"},{id:"hardware",page:94,label:"No",summary:"Program doesn't use `SoftwareSerial`"}]},{content:`<p>We must check that the JSON document is not preceded by a  <a href="https://en.wikipedia.org/wiki/Byte_order_mark">Byte Order Mark</a> (BOM).</p>
<p>To do this, we'll peek at the first byte in the stream and print the value to the serial. Insert the following line before the call to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(stream.<span class="hljs-built_in">peek</span>());
</code></pre>
<p>What value does it print?</p>
`,options:[{id:"utf8",page:74,label:"<code>239</code>",summary:"Input's first byte suggests a UTF-8 BOM"},{id:"utf16",page:73,label:"<code>254</code> or <code>255</code>",summary:"Input's first byte suggests a UTF-16 BOM"},{id:"no-bom",page:72,label:"Something else",summary:"Input's first byte doesn't suggest a BOM"}]},{content:`<p>Sometimes, the input is invalid because some bytes were dropped when receiving the document.
Usually, this happens when the receiver reads the stream too slowly, which overflows a buffer somewhere in the path.</p>
<p>Indeed, because it reads bytes one by one, <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> can be slow with some implementations of <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/"><code>Stream</code></a>. To speed up the reading, we must add a buffer between the <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/"><code>Stream</code></a> and <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>. The easiest way to do this is to use <code>ReadBufferingStream</code> from the <a href="https://github.com/bblanchon/ArduinoStreamUtils">StreamUtils library</a>:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// replace the following line:</span>
<span class="hljs-built_in">deserializeJson</span>(doc, stream);

<span class="hljs-comment">// with these two lines:</span>
<span class="hljs-function">ReadBufferingStream <span class="hljs-title">bufferedStream</span><span class="hljs-params">(stream, <span class="hljs-number">64</span>)</span></span>;
<span class="hljs-built_in">deserializeJson</span>(doc, bufferedStream);
</code></pre>
<p>Thanks to <code>ReadBufferingStream</code>, the program will read the input in chunks of 64 bytes, which will be much faster.
Hopefully, it will be fast enough to read the whole message without droping any byte.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Adding a buffer solves the issue"},{id:"buffer",page:101,label:"No",summary:"Adding a buffer doesn't solve the issue"}]},{content:`<p>We need to make sure that the JSON document is valid.
To do that, please print the input to the serial port, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">print</span>(stream.<span class="hljs-built_in">readString</span>());
</code></pre>
<p>Then, copy the response and paste it in a JSON linter, like <a href="https://jsonlint.com/">jsonlint.com</a>.</p>
<p>Is the JSON document valid?</p>
`,options:[{id:"valid",page:102,label:"Yes",summary:"`jsonlint` says the document is valid"},{id:"invalid",page:89,label:"No",summary:"`jsonlint` says the document is invalid"}]},{content:`<p>We must check that the JSON document is not preceded by a  <a href="https://en.wikipedia.org/wiki/Byte_order_mark">Byte Order Mark</a> (BOM).</p>
<p>To do this, we'll print the first byte to the serial port. Insert the following line before the call to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(input[<span class="hljs-number">0</span>]);
</code></pre>
<p>What value does it print?</p>
`,options:[{id:"utf8",page:74,label:"<code>239</code>",summary:"Input's first byte suggests a UTF-8 BOM"},{id:"utf16",page:73,label:"<code>254</code> or <code>255</code>",summary:"Input's first byte suggests a UTF-16 BOM"},{id:"no-bom",page:72,label:"Something else",summary:"Input's first byte doesn't suggest a BOM"}]},{content:`<p>We need to make sure that the JSON document is valid.
To do that, please print the content of the string to the serial port, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">print</span>(input);
</code></pre>
<p>Then, copy the response and paste it in a JSON linter, like <a href="https://jsonlint.com/">jsonlint.com</a>.</p>
<p>Is the JSON document valid?</p>
`,options:[{id:"valid",page:104,label:"Yes",summary:"`jsonlint` says the document is valid"},{id:"invalid",page:89,label:"No",summary:"`jsonlint` says the document is invalid"}]},{content:`<p>So, what's the problem then?</p>
`,options:[{id:"slow",page:128,label:"It's slow",summary:"Deserialisation is slow"},{id:"invalid",page:107,label:"I expected <code>InvalidInput</code> instead of <code>Ok</code>",summary:"`Ok` is incorrect; it should be `InvalidInput`"},{id:"crash",page:41,label:"My program crashes after calling <code>deserializeJson()</code>",summary:"Program crashes after calling `deserializeJson()`"},{id:"empty",page:119,label:"<code>JsonDocument</code> returns empty/null values",summary:"Program fails to extract values from the `JsonDocument`"},{id:"garbage",page:111,label:"<code>JsonDocument</code> returns garbage",summary:"`JsonDocument` returns garbage"},{id:"changing-strings",page:111,label:"The strings in the <code>JsonDocument</code> change for no reason",summary:"The strings in the `JsonDocument` change for no reason"},{id:"altered",page:115,label:"<code>deserializeJson()</code> alters the content of the input",summary:"Input buffer is modified"},{id:"truncated-strings",page:129,label:"Some strings are truncated",summary:"Some strings are truncated"}]},{content:`<p>What's the first character of your input?</p>
`,options:[{id:"brace",page:108,label:"An opening brace: <code>{</code>",summary:"The first character is `{`"},{id:"bracket",page:109,label:"An opening bracket: <code>[</code>",summary:"The first character is `[`"},{id:"quote",page:110,label:"A quote: <code>&quot;</code>",summary:'The first character is `"`'},{id:"other",page:136,label:"None of the above",summary:'The first character is neither `{`, nor `[`, nor `"`'}]},{content:`<p><a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> stops reading as soon as the JSON document ends.
In your case, it will read the input until it reaches the matching <code>}</code> and ignore any remaining characters.</p>
<p>Suppose the input looks like this:</p>
<pre><code class="hljs language-json"><span class="hljs-punctuation">{</span><span class="hljs-attr">&quot;key&quot;</span><span class="hljs-punctuation">:</span><span class="hljs-string">&quot;value&quot;</span><span class="hljs-punctuation">}</span>GARBAGE
</code></pre>
<p>Here, <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> reads the JSON object <code>{&quot;key&quot;:&quot;value&quot;}</code> and returns <code>Ok</code> ignoring the <code>GARBAGE</code> part.</p>
<p>This feature enables <a href="/v6/how-to/deserialize-a-very-large-document/#deserialization/in-chunks">deserializing in chunks</a> and allows non-zero-terminated input strings.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Garbage characters follow the input"},{id:"lint",page:118,label:"No",summary:"No garbage characters follow the input"}]},{content:`<p><a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> stops reading as soon as the JSON document ends.
In your case, it will read the input until it reaches the matching <code>]</code> and ignore any remaining characters.</p>
<p>Suppose the input looks like this:</p>
<pre><code class="hljs language-json"><span class="hljs-punctuation">[</span><span class="hljs-number">1</span><span class="hljs-punctuation">,</span><span class="hljs-number">2</span><span class="hljs-punctuation">,</span><span class="hljs-number">3</span><span class="hljs-punctuation">]</span>GARBAGE
</code></pre>
<p>Here, <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> reads the JSON array <code>[1,2,3]</code> and returns <code>Ok</code> ignoring the <code>GARBAGE</code> part.</p>
<p>This feature enables <a href="/v6/how-to/deserialize-a-very-large-document/#deserialization/in-chunks">deserializing in chunks</a> and allows non-zero-terminated input strings.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Garbage characters follow the input"},{id:"lint",page:118,label:"No",summary:"No garbage characters follow the input"}]},{content:`<p><a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> stops reading as soon as the JSON document ends.
In your case, it will read the input until it reaches the matching <code>&quot;</code> and ignore any remaining characters.</p>
<p>Suppose the input looks like this:</p>
<pre><code class="hljs language-json"><span class="hljs-string">&quot;hello&quot;</span>GARBAGE
</code></pre>
<p>Here, <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> reads the JSON string <code>&quot;hello&quot;</code> and returns <code>Ok</code> ignoring the <code>GARBAGE</code> part.</p>
<p>This feature enables <a href="/v6/how-to/deserialize-a-very-large-document/#deserialization/in-chunks">deserializing in chunks</a> and allows non-zero-terminated input strings.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Garbage characters follow the input"},{id:"lint",page:118,label:"No",summary:"No garbage characters follow the input"}]},{content:`<p>What is the type of the second argument passed to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>?</p>
`,options:[{id:"char-ptr",page:114,label:"<code>char*</code> (or <code>char[]</code>)",summary:"Input type is `char*`"},{id:"const-char-ptr",page:34,label:"<code>const char*</code>",summary:"Input type is `const char*`"},{id:"string",page:34,label:"<code>String</code> (or <code>std::string</code>)",summary:"Input type is `String`"},{id:"stream",page:34,label:"<code>Stream</code> (or <code>std::istream)</code>",summary:"Input type is `Stream`"}]},{content:`<p>The easiest solution is to disable the zero-copy mode by passing a read-only input buffer. Casting the pointer will do the trick:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// replace this:</span>
<span class="hljs-built_in">deserializeJson</span>(doc, input, inputSize);

<span class="hljs-comment">// ...with this:</span>
<span class="hljs-built_in">deserializeJson</span>(doc, (<span class="hljs-type">const</span> <span class="hljs-type">char</span>*)input, inputSize);
</code></pre>
<p>Now that the zero-copy mode is disabled, you probably need a larger <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, so don't forget to update the capacity. As usual, use the <a href="/v6/assistant/">ArduinoJson Assistant</a> to compute the right capacity for your project.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Casting the pointer fixes the issue"},{id:"cast",page:34,label:"No",summary:"Casting the pointer doesn't fix the issue"}]},{content:`<p>The easiest solution is to remove the buffer and pass the input stream directly to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>.</p>
<p>For example, assuming the JSON document comes from a file:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// replace this:</span>
<span class="hljs-function">std::unique_ptr&lt;<span class="hljs-type">char</span>[]&gt; <span class="hljs-title">buf</span><span class="hljs-params">(<span class="hljs-keyword">new</span> <span class="hljs-type">char</span>[size])</span></span>;
file.<span class="hljs-built_in">readBytes</span>(buf.<span class="hljs-built_in">get</span>(), size);
<span class="hljs-built_in">deserializeJson</span>(doc, buf.<span class="hljs-built_in">get</span>());

<span class="hljs-comment">// ...with this:</span>
<span class="hljs-built_in">deserializeJson</span>(doc, file);
</code></pre>
<p>Now that the zero-copy mode is disabled, you probably need a larger <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, so don't forget to update the capacity. As usual, use the <a href="/v6/assistant/">ArduinoJson Assistant</a> to compute the right capacity for your project.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Passing the stream to `deserializeJson()` fixes the issue"},{id:"cast",page:34,label:"No",summary:"Passing the stream to `deserializeJson()` doesn't fix the issue"}]},{content:`<p>When you pass a writeable buffer as the input of <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>, ArduinoJson uses the zero-copy mode. Instead of copying the strings from the input into the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, it stores pointers to the input buffer.
Therefore, the input buffer must stay alive during the whole lifetime of the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>; otherwise, all the strings in the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> will be dangling pointers.</p>
<p>Does your program fills this buffer from a <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/"><code>Stream</code></a> (like <a href="https://www.arduino.cc/en/Reference/SD"><code>File</code></a>, <a href="https://www.arduino.cc/reference/en/language/functions/communication/serial/"><code>Serial</code></a>, <a href="https://www.arduino.cc/en/Reference/EthernetClient"><code>EthernetClient</code></a>, <a href="https://www.arduino.cc/en/Reference/WiFiClient"><code>WifiClient</code></a>...)?</p>
`,options:[{id:"success",page:113,label:"Yes, the input comes from a stream",summary:"Input comes from a stream"},{id:"cast",page:112,label:"No, it doesn't",summary:"Input doesn't come from a stream"}]},{content:`<p>When you pass a writeable buffer as the input of <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>, ArduinoJson uses the zero-copy mode. Instead of copying the strings from the input into the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, it stores pointers to the input buffer.</p>
<p>While doing this, the parser modifies the input buffer to unescape special characters and add string terminator.
When <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> returns the input buffer doesn't contain a valid JSON document anymore.</p>
<p>For more information, please see <a href="/v6/issues/altered-input/">Why is the input modified?</a></p>
<p>If you must preserve the input as it is, you must disable the zero-copy mode by passing a read-only input buffer. Casting the pointer will do the trick:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// replace this:</span>
<span class="hljs-built_in">deserializeJson</span>(doc, input, inputSize);

<span class="hljs-comment">// ...with this:</span>
<span class="hljs-built_in">deserializeJson</span>(doc, (<span class="hljs-type">const</span> <span class="hljs-type">char</span>*)input, inputSize);
</code></pre>
<p>Now that the zero-copy mode is disabled, you probably need a larger <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, so don't forget to update the capacity. As usual, use the <a href="/v6/assistant/">ArduinoJson Assistant</a> to compute the right capacity for your project.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Casting the pointer fixes the issue"},{id:"cast",page:34,label:"No",summary:"Casting the pointer doesn't fix the issue"}]},{content:`<blockquote>
<p>ArduinoJson isn't very picky about the input: its implementation favors code size and speed over strict conformance.
After all, size and speed are what matter the most for embedded software, right?</p>
<p>This means that ArduinoJson's parser may accept documents that would be rejected by other parsers.</p>
<p>For example, <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> tolerates the following substitutions:</p>
<ul>
<li><code>'hello'</code> instead of <code>&quot;hello&quot;</code> (single quotes)</li>
<li><code>nULL</code> or <code>n0n3</code> instead if <code>null</code> (only checks first character and length)</li>
<li><code>tRUE</code> or <code>t0t0</code> instead of <code>true</code> (ditto)</li>
<li><code>fALSE</code> or <code>fAkk3</code> instead of <code>false</code> (ditto)</li>
</ul>
</blockquote>
<p>It also ignores the follwing UTF-8 errors:</p>
<ul>
<li><code>&quot;\\ud83d&quot;</code> (a leading surrogate without a trailing surrogate)</li>
<li><code>&quot;\\udda4&quot;</code> (a trailing surrogate without a leading surrogate)</li>
<li><code>&quot;\\ud83d\\ud83d&quot;</code> (two leading surrogates)</li>
</ul>
<p>Lastly, it supports C++-style comments when <a href="/v6/api/config/enable_comments/">ARDUINOSJSON_ENABLE_COMMENTS</a> is set to <code>1</code>.</p>
<p>As a result, you cannot use <a href="/v6/api/json/deserializejson/"><code>deserializeJson</code></a> as a JSON validator because you'd get many false-negatives.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"acceptable",page:151,label:"Yes",summary:"`deserializeJson()` tolerates the error, and that's OK"},{id:"unacceptable",page:136,label:"No",summary:"`deserializeJson()` should not let this error pass"}]},{content:`<p>So, <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> returns <code>Ok</code>, and jsonlint confirms that the input is valid.</p>
<p>I don't see any issue here; maybe you should <a href="/v6/troubleshooter/">start over</a>?</p>
`},{content:`<p>Let's make sure that your input is actually invalid.</p>
<p>Please go to <a href="https://jsonlint.com/">jsonlint.com</a>, paste your input, and press &quot;Validate JSON.&quot;</p>
<p>What does it say?</p>
`,options:[{id:"valid",page:117,label:"Document is valid",summary:"jsonlint says the document is valid"},{id:"invalid",page:116,label:"Document is invalid",summary:"jsonlint says the document is invalid"}]},{content:`<p>Do you use a filter (with <code>DeserializationOption::Filter</code>)?</p>
`,options:[{id:"filter",page:121,label:"Yes",summary:"Program uses `DeserializationOption::Filter`"},{id:"no-filter",page:124,label:"No",summary:"Program doesn't use `DeserializationOption::Filter`"}]},{content:`<p>When a program fails to extract the values from a <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, it's often because there is a confusion between arrays and objects.</p>
<p>For example, a common mistake is to write:</p>
<pre><code class="hljs language-c++"><span class="hljs-type">const</span> <span class="hljs-type">char</span>* temperature = doc[<span class="hljs-string">&quot;list&quot;</span>][<span class="hljs-string">&quot;main&quot;</span>][<span class="hljs-string">&quot;temp&quot;</span>];
</code></pre>
<p>instead of</p>
<pre><code class="hljs language-c++"><span class="hljs-type">const</span> <span class="hljs-type">char</span>* temperature = doc[<span class="hljs-string">&quot;list&quot;</span>][<span class="hljs-number">0</span>][<span class="hljs-string">&quot;main&quot;</span>][<span class="hljs-string">&quot;temp&quot;</span>];
</code></pre>
<p>You can find other examples in <a href="/v6/issues/cannot-get-values/">deserializeJson() succeeds but I cannot read any value</a>, but the simplest solution is to use the <a href="/v6/assistant/">ArduinoJson Assistant</a> because the last step shows how to extract the values.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Issue is a confusion between array and object"},{id:"array-object",page:34,label:"No",summary:"Issue is not a confusion between array and object"}]},{content:`<p>Maybe the filter excludes the part that it should keep. Let's verify that it's doing its job correctly:</p>
<p>Please print the filter to the serial port like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-built_in">serializeJsonPretty</span>(filter, Serial);
</code></pre>
<p>Then, open the <a href="/v6/assistant/">ArduinoJson Assistant</a>:</p>
<ul>
<li>in step 1: choose &quot;Deserialize and filter&quot;</li>
<li>in step 2:
<ul>
<li>in the &quot;input&quot; column, paste a sample input</li>
<li>in the &quot;filter&quot; column, paste the filter that your program just printed</li>
</ul>
</li>
</ul>
<p>The column &quot;filtered input&quot; shows the result of applying the filter to the input.<br>
Make sure the result is what you expect, and adjust the filter as needed.<br>
Once happy with the result, you can move to step 4 and copy the block that fills the filter.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Fixing the filter solves the issue"},{id:"filter-ok",page:124,label:"No",summary:"Fixing the filter doesn't solve the issue"}]},{content:`<p>Which function do you call to deserialize the input?</p>
`,options:[{id:"json",page:34,label:"<code>deserializeJson()</code>",summary:"Program calls `deserializeJson()`"},{id:"msgpack",page:123,label:"<code>deserializeMsgPack()</code>",summary:"Program calls `deserializeMsgPack()`"}]},{content:`<p>It seems that your program fed <a href="/v6/api/msgpack/deserializemsgpack/"><code>deserializeMsgPack()</code></a> with garbage input.</p>
<p>Indeed, any byte in the following ranges is a valid one-byte MessagePack document:</p>
<ul>
<li><code>0x00</code>-<code>0x7f</code>: positive fixint</li>
<li><code>0xc0</code>: nil</li>
<li><code>0xc2</code>: false</li>
<li><code>0xc3</code>: true</li>
<li><code>0xe0</code>-<code>0xff</code>: negative fixint</li>
</ul>
<p>As you can see, these values cover about 63% of all possible values for a random byte; that's why they are very likely to occur.</p>
<p>When the first byte in the input is one of these, <a href="/v6/api/msgpack/deserializemsgpack"><code>deserializeMsgPack()</code></a> saves the corresponding value in the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> and immediately returns <a href="/v6/api/misc/deserializationerror/#ok"><code>Ok</code></a>, which is the correct behavior.</p>
<p>To fix this issue, you must repair the input.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"The input was incorrect"},{id:"not-garbage",page:34,label:"No",summary:"The input is correct"}]},{content:`<p>Please print the content of the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> to the serial port like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-built_in">serializeJson</span>(doc, Serial);
Serial.<span class="hljs-built_in">println</span>(); <span class="hljs-comment">// adds a line break (optional)</span>
</code></pre>
<p>What's the first character?</p>
`,options:[{id:"quote",page:127,label:"A quote (<code>&quot;</code>)",summary:"Serialized document starts with a quote"},{id:"bracket",page:120,label:"A square bracket (<code>[</code>)",summary:"Serialized document starts with a square bracket"},{id:"brace",page:120,label:"A curly brace (<code>{</code>)",summary:"Serialized document starts with a curly brace"},{id:"not-in-list",page:122,label:"None of the above",summary:"Serialized document starts with neither a quote, a bracket, nor a brace."}]},{content:`<p>If you cannot fix the server, you can at least reverse the double serialization (stringification) to get back the original object.</p>
<p>To do this, you must call <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> twice, like so:</p>
<pre><code class="hljs language-c++">StaticJsonDocument&lt;<span class="hljs-number">512</span>&gt; doc1, doc2;
<span class="hljs-built_in">deserializeJson</span>(doc1, input);
<span class="hljs-built_in">deserializeJson</span>(doc2, doc1.<span class="hljs-built_in">as</span>&lt;<span class="hljs-type">const</span> <span class="hljs-type">char</span>*&gt;());
String value = doc2[<span class="hljs-string">&quot;hello&quot;</span>];
</code></pre>
<p>In this snippet, <code>doc1</code> is only used during the second deserialization and can be safely discarded after that.
The cleanest way to do this is to wrap the double deserialization in a function, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-function">DeserilizationError <span class="hljs-title">deserializeJsonTwice</span><span class="hljs-params">(JsonDocument&amp; doc, Stream&amp; input)</span> </span>{
  StaticJsonDocument&lt;<span class="hljs-number">512</span>&gt; tmp;
  DeserializationError err = <span class="hljs-built_in">deserializeJson</span>(tmp, input);
  <span class="hljs-keyword">if</span> (err) <span class="hljs-keyword">return</span> err;
  <span class="hljs-keyword">return</span> <span class="hljs-built_in">deserializeJson</span>(doc, tmp.<span class="hljs-built_in">as</span>&lt;<span class="hljs-type">const</span> <span class="hljs-type">char</span>*&gt;());
}
</code></pre>
<p>Of course, if you need to use the <a href="/news/2020/03/22/version-6-15-0/">filtering feature</a>, you must pass <code>DeserializationOption::Filter</code> to the second call to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Calling `deserializeJson()` twice fixes the issue"},{id:"call-twice",page:34,label:"No",summary:"Calling `deserializeJson()` twice doesn't fix the issue"}]},{content:`<p>In the server implementation, please look at the view that returns the faulty JSON.
You will probably find that this function explicitly stringifies the response to JSON, which is incorrect because the underlying framework already does it for you.</p>
<p>Of course the details will depend on the framework you used to implement the server, but in any case, you'll have to remove a call to a function that stringifies to JSON. Here are some example:</p>
<ul>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify"><code>JSON.stringify()</code></a> in JavaScript</li>
<li><a href="https://www.php.net/manual/en/function.json-encode.php"><code>json_encode()</code></a> in PHP</li>
<li><a href="https://docs.python.org/3/library/json.html"><code>json.dumps()</code></a> in Python</li>
<li><a href="https://ruby-doc.org/stdlib-2.6.3/libdoc/json/rdoc/JSON.html"><code>JSON.generate()</code></a> in Ruby</li>
<li><a href="https://docs.microsoft.com/en-us/dotnet/api/system.text.json.jsonserializer.serialize"><code>JsonSerializer.Serialize()</code></a> on .NET</li>
<li><a href="https://www.javadoc.io/doc/com.google.code.gson/gson/latest/com.google.gson/com/google/gson/Gson.html"><code>gson.toJson()</code></a> in Java</li>
<li><a href="https://golang.org/pkg/encoding/json/"><code>json.Marshal()</code></a> in Go</li>
</ul>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Fixing the server fixes the issue"},{id:"server-ok",page:125,label:"No",summary:"Fixing the server doesn't fix the issue"}]},{content:`<p>If you see a double-quote at the beginning of the JSON input, it means that the whole document is neither an object or an array; it's a string. This happens when the input was incorrectly generated, by serializing (stringifying) to JSON twice.</p>
<p>For example, the following document:</p>
<pre><code class="hljs language-json"><span class="hljs-string">&quot;{\\&quot;hello\\&quot;:\\&quot;world\\&quot;}&quot;</span>
</code></pre>
<p>...is not a JSON <em>object</em> but a <em>string</em>.
It's the result of the JSON serialization (stringification) of the following JSON document:</p>
<pre><code class="hljs language-json"><span class="hljs-punctuation">{</span><span class="hljs-attr">&quot;hello&quot;</span><span class="hljs-punctuation">:</span><span class="hljs-string">&quot;world&quot;</span><span class="hljs-punctuation">}</span>
</code></pre>
<p>...which was alread serialized (stringified) to JSON.</p>
<p>So, the bug isn't in the Arduino code, but on the other size, most likely a server.</p>
<p>Can you modify the code of the server?</p>
`,options:[{id:"server-fixable",page:126,label:"Yes",summary:"User can modify the server"},{id:"server-unfixable",page:125,label:"No",summary:"User cannot modify the server"}]},{content:`<p>Indeed, <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> can be pretty slow with unbuffered implementations of <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/"><code>Stream</code></a> (such as <code>File</code> and <code>WiFiClient</code>) because it reads characters one by one.</p>
<p>Why does it reads bytes one by one?<br>
Because it has to stop exactly at the end of the document to support <a href="https://en.wikipedia.org/wiki/JSON_streaming">JSON streaming</a> and similar techniques.</p>
<p>To speed up the process, we need to insert a buffer between the <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/"><code>Stream</code></a> and <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>.  The easiest way to do this is to use <code>ReadBufferingStream</code> from the <a href="https://github.com/bblanchon/ArduinoStreamUtils">StreamUtils library</a>:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// replace the following line:</span>
<span class="hljs-built_in">deserializeJson</span>(doc, stream);

<span class="hljs-comment">// with these two lines:</span>
<span class="hljs-function">ReadBufferingStream <span class="hljs-title">bufferedStream</span><span class="hljs-params">(stream, <span class="hljs-number">64</span>)</span></span>;
<span class="hljs-built_in">deserializeJson</span>(doc, bufferedStream);
</code></pre>
<p>Thanks to <code>ReadBufferingStream</code>, the program will read the input in chunks of 64 bytes, which will be much faster.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"`ReadBufferingStream` solves the issue"},{id:"buffered",page:34,label:"No",summary:"`ReadBufferingStream` doesn't solve the issue"}]},{content:`<p>Does the JSON input contain the Unicode character <code>\\u0000</code>?</p>
`,options:[{id:"nul",page:152,label:"Yes",summary:"The input contains `\\u0000`"},{id:"no-nul",page:135,label:"No",summary:"The input doesn't contain `\\u0000`"}]},{content:`<p>When you call <code>HTTPClient::getStream()</code>, you bypass the part that handles <a href="https://en.wikipedia.org/wiki/Chunked_transfer_encoding">Chunked Transfer Encoding</a>.
As a result, the response's body may be split in multiple chunks, making some strings look like they are truncated (in reality, they contain a line-break).</p>
<p>The most straightforward workaround is to downgrade the connection to HTTP 1.0.
To do this, add the following line <strong>before</strong> sending the request:</p>
<pre><code class="hljs language-c++">http.<span class="hljs-built_in">useHTTP10</span>(<span class="hljs-literal">true</span>);  <span class="hljs-comment">// avoid Chunked Transfer Encoding</span>
</code></pre>
<p>Did this solve your problem?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Calling `HTTPClient::useHTTP10(true)` solves the issue"},{id:"http10",page:34,label:"No",summary:"Calling `HTTPClient::useHTTP10(true)` doesn't solve the issue"}]},{content:`<p>Which function of <code>HTTPClient</code> do you call to get the response?</p>
`,options:[{id:"getstream",page:130,label:"<code>getStream()</code>",summary:"Response comes from `HTTPClient::getStream()`"},{id:"getstring",page:34,label:"<code>getString()</code>",summary:"Response comes from `HTTPClient::getString()`"}]},{content:`<p>When you use HTTP 1.1, the server can send the response with <a href="https://en.wikipedia.org/wiki/Chunked_transfer_encoding">Chunked Transfer Encoding</a>.
As a result, the response's body may be split in multiple chunks, making some strings look like they are truncated (in reality, they contain a line-break).</p>
<p>The most straightforward workaround is to downgrade the connection to HTTP 1.0.
To do this, replace <code>HTTP/1.1</code> with <code>HTTP/1.0</code> in the first line of the request.</p>
<p>Did this solve your problem?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Using `HTTP/1.0` solves the issue"},{id:"http10",page:34,label:"No",summary:"Using `HTTP/1.0` doesn't solve the issue"}]},{content:`<p>Unfortunately, I only know how to use the following HTTP libraries:</p>
<ul>
<li><a href="https://github.com/esp8266/Arduino/tree/master/libraries/ESP8266HTTPClient">ESP8266HTTPClient</a></li>
<li><a href="https://github.com/espressif/arduino-esp32/tree/master/libraries/HTTPClient">HTTPClient for ESP32</a></li>
</ul>
`,tags:["needs_assistance"]},{content:`<p>Do you use an HTTP library?</p>
`,options:[{id:"httpclient",page:131,label:"Yes, I'm using <code>HTTPClient</code>",summary:"Program uses `HTTPClient`"},{id:"http-library",page:133,label:"Yes, but it's not <code>HTTPClient</code>",summary:"Program uses an unknown HTTP library"},{id:"no-library",page:132,label:"No",summary:"Program doesn't use an HTTP library"}]},{content:`<p>Does the JSON input come from an HTTP response?</p>
`,options:[{id:"http",page:134,label:"Yes",summary:"The input comes from an HTTP response"},{id:"no-nul",page:34,label:"No",summary:"The input doesn't come from an HTTP response"}]},{content:`<p><a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> accepted a JSON document that was clearly invalid.<br>
You need to talk to a human about that.</p>
`,tags:["needs_assistance"]},{content:`<p><a href="/v6/api/misc/deserializationerror/#nomemory"><code>NoMemory</code></a> means that the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> is too small to hold the entire document.</p>
<p>Please use the <a href="/v6/assistant/">ArduinoJson Assistant</a> to compute the right capacity for your document.
Use the recommended capacity when creating <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> and retry.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Increasing the capacity of the `JsonDocument` fixes the issue"},{id:"increased-capacity",page:144,label:"No",summary:"Increasing the capacity of the `JsonDocument` doesn't fix the issue"}]},{content:`<p>I'm pretty confident the Assistant computes the right capacity; however, some settings can affect the result:</p>
<ol>
<li><em>Input type</em>, in step 1, should match the type of the argument passed to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a></li>
<li><em>Deduplicate values when measuring the capacity</em>, in step 3, should be unchecked, most likely.</li>
<li><em>Deduplicate keys when measuring the capacity</em>, in step 3, it should be unchecked if the keys are dynamic or if you used placeholders.</li>
</ol>
<p>Please verify that these settings are correct.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Changing the Assistant settings solves the issue"},{id:"failure",page:34,label:"No",summary:"Changing the Assistant settings doesn't solve the issue"}]},{content:`<p><code>doc.capacity()</code> returns <code>0</code>, which means <code>allocate()</code> returned <code>NULL</code>.</p>
<p>I think that, because <code>doc</code> is declared global, <code>allocate()</code> is called too early and the heap isn't ready.
I know this happens on ESP32 with the <code>SpiRamJsonDocument</code> shown in <a href="/v6/how-to/use-external-ram-on-esp32/">How to use external RAM on ESP32?</a>.</p>
<p>Please try to make <code>doc</code> a local variable.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Making `doc` local fixes the issue."},{id:"failure",page:34,label:"No",summary:"Making `doc` local doesn't fix the issue."}]},{content:`<p>Is <code>doc</code> a global variable?</p>
`,options:[{id:"global",page:139,label:"Yes",summary:"`doc` is a global variable"},{id:"local",page:138,label:"No",summary:"`doc` is not a global variable"}]},{content:`<p>Let's verify that the memory allocation succeeded.</p>
<p>Please print the capacity of the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> to the serial port, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(doc.<span class="hljs-built_in">capacity</span>());
</code></pre>
<p>What value does it show?</p>
`,options:[{id:"capacity-0",page:140,label:"<code>0</code>",summary:"`doc.capacity()` returns `0`"},{id:"capacity-ok",page:138,label:"The value passed to the constructor of <code>DynamicJsonDocument</code>",summary:"`doc.capacity()` returns the right value"}]},{content:`<p>Well, that's very bad news. It seems that your microcontroller doesn't have enough RAM to hold the JSON document.</p>
<p>Please read <a href="/v6/how-to/reduce-memory-usage/">How to reduce memory usage</a>.
It shows several techniques you can use to use less RAM.
Hopefully, you'll make enough room for the memory pool.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Reducing memory usage fixes the issue"},{id:"failure",page:34,label:"No",summary:"Reducing memory usage doesn't fix the issue"}]},{content:`<p>It's possible that the <a href="/v6/api/dynamicjsondocument/"><code>DynamicJsonDocument</code></a> failed to allocate the memory pool.</p>
<p>Please print the capacity of the <a href="/v6/api/dynamicjsondocument/"><code>DynamicJsonDocument</code></a> to the serial port, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(doc.<span class="hljs-built_in">capacity</span>());
</code></pre>
<p>What value does it show?</p>
`,options:[{id:"capacity-0",page:142,label:"<code>0</code>",summary:"`doc.capacity()` returns `0`"},{id:"capacity-ok",page:138,label:"The value passed to the constructor of <code>DynamicJsonDocument</code>",summary:"`doc.capacity()` returns the right value"}]},{content:`<p>What kind of <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> are you using?</p>
`,options:[{id:"basic",page:141,label:"<code>BasicJsonDocument&lt;T&gt;</code>",summary:"The document is a `BasicJsonDocument<T>`"},{id:"dynamicjsondocument",page:143,label:"<code>DynamicJsonDocument</code>",summary:"The `JsonDocument` is a `DynamicJsonDocument`"},{id:"staticjsondocument",page:138,label:"<code>StaticJsonDocument</code>",summary:"The `JsonDocument` is a `StaticJsonDocument`"}]},{content:`<p><a href="/v6/api/misc/deserializationerror/#notsupported"><code>NotSupported</code></a> means that the document was valid but contained features not supported by the library.</p>
<p>This error code was removed in <a href="/news/2021/05/04/version-6-18-0/">ArduinoJson 6.18</a>, so you should not see it anymore.</p>
<p>Can you upgrade the library?</p>
`,options:[{id:"can-uprade",page:149,label:"Yes",summary:"Library can be upgraded"},{id:"cannot-upgrade",page:147,label:"No",summary:"Library cannot be upgraded"}]},{content:`<p>So, I guess that you're not using <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> but <a href="/v6/api/msgpack/deserializemsgpack/"><code>deserializeMsgPack()</code></a>, right?</p>
<p>Indeed, before <a href="/news/2021/05/04/version-6-18-0/">ArduinoJson 6.18</a>, <a href="/v6/api/msgpack/deserializemsgpack/"><code>deserializeMsgPack()</code></a> returned <a href="/v6/api/misc/deserializationerror/#notsupported"><code>NotSupported</code></a> as soon as the input contains an unsupported MsgPack value type:</p>
<ul>
<li>a binary value</li>
<li>an extension value</li>
<li>an object key that is not a string</li>
</ul>
<p>If that's your case, then you must upgrade the library. Instead of returning an error, newer versions simply ignore the unsupported values and replace them with nulls.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Upgrading solve the issue"},{id:"upgraded",page:34,label:"No",summary:"Upgrading doesn't solve the issue"}]},{content:`<p><a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> returns <a href="/v6/api/misc/deserializationerror/#notsupported"><code>NotSupported</code></a> when is read an UTF-16 escape sequence but support is disabled.</p>
<p>To fix this issue, you must enable support UTF-16 escape sequences by defining <a href="/v6/api/config/decode_unicode/"><code>ARDUINOJSON_DECODE_UNICODE</code></a> to <code>1</code> before including <code>ArduinoJson.h</code>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-meta">#<span class="hljs-keyword">define</span> ARDUINOJSON_DECODE_UNICODE 1</span>
<span class="hljs-meta">#<span class="hljs-keyword">include</span> <span class="hljs-string">&lt;ArduinoJson.h&gt;</span></span>
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Defining `ARDUINOJSON_DECODE_UNICODE` solves the issue"},{id:"decode-unicode-set",page:146,label:"No",summary:"Defining `ARDUINOJSON_DECODE_UNICODE` doesn't solve the issue"}]},{content:`<p>If you're still seeing <code>NotSupported</code> after upgrading the library, it means that your code is not using the upgraded library.</p>
<p>Several versions of ArduinoJson are installed on your machine; you must either:</p>
<ul>
<li>removed the duplicates</li>
<li>upgrade the duplicates</li>
<li>make sure your project uses the right one</li>
</ul>
<p>To find the duplicates, run a disk search for a file named <code>ArduinoJson.h</code>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Removing duplicates fixes the issue"},{id:"duplicates-removed",page:147,label:"No",summary:"Removing duplicates doesn't fix the issue"}]},{content:`<p>Please upgrade ArduinoJson to the latest version.<br>
You may need to consult the <a href="https://github.com/bblanchon/ArduinoJson/blob/6.x/CHANGELOG.md">change log</a> to make sure there aren't any breaking changes that could break your existing code.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Upgrading solves the issue"},{id:"updraded",page:148,label:"No",summary:"Upgrading doesn't solves the issue"}]},{content:`<p><a href="/v6/api/misc/deserializationerror/#toodeep"><code>TooDeep</code></a> means that the input document has too many levels of nesting.</p>
<p><a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> is implemented with a recursive function: it's fast, small, and efficient, but it can cause a stack-overflow if the input document has too many levels. To protect your program against malicious input that could trigger a stack-overflow on purpose, ArduinoJson sets a limit on how many levels it accepts.</p>
<p>The default nesting limit is configured by <a href="/v6/api/config/default_nesting_limit/"><code>ARDUINOJSON_DEFAULT_NESTING_LIMIT</code></a>, which is set to <code>10</code> by default. To increase the limit, you can change this setting, or you can pass an extra argument to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-built_in">deserializeJson</span>(doc, input, DeserializationOption::<span class="hljs-built_in">NestingLimit</span>(<span class="hljs-number">20</span>));
</code></pre>
<p>The <a href="/v6/assistant/">ArduinoJson Assistant</a> shows an alert when your input overpasses the default limit and includes the appropriate <code>DeserializationOption::NestingLimit</code> in the sample program.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Increasing the limit fixes the issue"},{id:"limit-increased",page:34,label:"No",summary:"Increasing the limit doesn't fix the issue"}]},{content:`<p class="display-4">🙋🏻‍♂️</p>
<p>Awesome! I'm glad I could help.</p>
<p>I would be very grateful if, in return, you could <a href="https://github.com/bblanchon/ArduinoJson/stargazers">star ArduinoJson on GitHub</a>. ❤</p>
<p>If you want to support the project (and learn a lot of stuff as well), you can purchase <a href="/book/">Mastering ArduinoJson</a>.<br>
Alternatively, you can <a href="https://github.com/sponsors/bblanchon">sponsor the project on GitHub</a>.</p>
<p>Should you have any idea on how I could improve myself, please <a href="https://github.com/bblanchon/ArduinoJson/issues/new">open an issue on GitHub</a>.</p>
<p>Bye!</p>
<p>--<br>
<em>ArduinoJson Troubleshooter</em></p>
`},{content:`<p>First, ArduinoJson only supports NUL characters since <a href="/news/2022/01/08/arduinojson-6-19-0/">version 6.19</a>, so make sure you are up-to-date.</p>
<p>Next, the Arduino <a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a> class doesn't support NUL characters, so you have to use another string type, like <a href="/v6/api/jsonstring/"><code>JsonString</code></a>, like this:</p>
<pre><code class="hljs language-c++">JsonString myString = doc[<span class="hljs-string">&quot;myString&quot;</span>];
<span class="hljs-type">const</span> <span class="hljs-type">char</span>* myStringData = myString.<span class="hljs-built_in">c_str</span>();
<span class="hljs-type">size_t</span> myStringSize = myString.<span class="hljs-built_in">size</span>();
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Using `JsonString` solves the issue"},{id:"failure",page:34,label:"No",summary:"Using `JsonString` doesn't solves the issue"}]},{content:`<p>Does your issue concern serialization or deserialization?</p>
`,options:[{id:"serialization",page:154,label:"Serialization",summary:"The issue concerns serialization"},{id:"deserialization",page:35,label:"Deserialization",summary:"The issue concerns deserialization"}]},{content:`<p>What's the problem?</p>
`,options:[{id:"crash",page:155,label:"The program crashes",summary:"Program crashes"},{id:"empty",page:165,label:"The output is empty (e.g. <code>{}</code>, <code>[]</code>, or <code>null</code>)",summary:"Output is empty"},{id:"incomplete",page:193,label:"The output is incomplete",summary:"Output is incomplete"},{id:"garbage",page:176,label:"The output contains garbage",summary:"Output contains garbage"},{id:"empty-strings",page:170,label:"The output contains empty strings",summary:"Output contains empty strings"},{id:"null",page:193,label:"The output contains <code>null</code>",summary:"Output contains null"},{id:"float",page:173,label:"Floating-point values contain too many decimal digits",summary:"Floating-point values contain too many decimal digits"},{id:"slow",page:200,label:"It's slow",summary:"Serialization is slow"}]},{content:`<p>Do you use <a href="/v6/api/dynamicjsondocument/"><code>DynamicJsonDocument</code></a> or <a href="/v6/api/staticjsondocument/"><code>StaticJsonDocument</code></a>?</p>
`,options:[{id:"dynamicjsondocument",page:163,label:"<code>DynamicJsonDocument</code>",summary:"Program uses `DynamicJsonDocument`"},{id:"staticjsondocument",page:164,label:"<code>StaticJsonDocument</code>",summary:"Program uses `StaticJsonDocument`"}]},{content:`<p>Please replace all those string pointers with literals.</p>
<p>For example, replace:</p>
<pre><code class="hljs language-c++">doc[<span class="hljs-string">&quot;name&quot;</span>] = name;
</code></pre>
<p>with:</p>
<pre><code class="hljs language-c++">doc[<span class="hljs-string">&quot;name&quot;</span>] = <span class="hljs-string">&quot;name&quot;</span>;
</code></pre>
<p>Does your program still crash?</p>
`,options:[{id:"crash-with-literals",page:159,label:"Yes",summary:"Replacing string pointers with literals doesn't fix the crash"},{id:"no-crash-with-literals",page:157,label:"No",summary:"Replacing string pointers with literals fixes the crash"}]},{content:`<p>One of these string pointers is probably dangling or points to a non-zero-terminated string.</p>
<p>Please print them all to the serial port to find the faulty pointer.</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">print</span>(name);
doc[<span class="hljs-string">&quot;name&quot;</span>] = <span class="hljs-string">&quot;name&quot;</span>;
</code></pre>
<p>Can you locate the faulty string in the output?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Printing the string reveals the faulty pointer"},{id:"no-faulty-pointer",page:34,label:"No",summary:"Printing the string doesn't show any faulty pointer"}]},{content:`<p>Does your program insert string pointers in the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>?<br>
(for example, <code>doc[&quot;name&quot;] = name</code> where <code>name</code> is a <code>const char*</code>)</p>
`,options:[{id:"charptr",page:156,label:"Yes",summary:"Program inserts string pointers into the `JsonDocument`"},{id:"no-charptr",page:159,label:"No",summary:"Program doesn't insert string pointers into the `JsonDocument`"}]},{content:`<p>What is the type of the second argument passed to <a href="/v6/api/json/serializejson/"><code>serializeJson()</code></a>?</p>
`,options:[{id:"char-array",page:160,label:"<code>char[]</code>",summary:"Output type is `char[]`"},{id:"char-ptr",page:161,label:"<code>char*</code>",summary:"Output type is `char*`"},{id:"arduino-string",page:34,label:"<code>String</code>",summary:"Output type is `String`"},{id:"arduino-stream",page:34,label:"<code>Stream</code>",summary:"Output type is `Stream`"}]},{content:`<p>I think this output buffer could cause a <a href="https://en.wikipedia.org/wiki/Stack_buffer_overflow">stack overflow</a>.</p>
<p>Please try with a <a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a> instead of a <code>char[]</code>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Switching to `String` solves the issue"},{id:"failure",page:34,label:"No",summary:"Switching to `String` doesn't solve the issue"}]},{content:`<p>I think the output pointer is dangling.</p>
<p>Please try to use a <code>char[]</code> instead:</p>
<pre><code class="hljs language-c++"><span class="hljs-type">char</span> output[<span class="hljs-number">128</span>];
<span class="hljs-built_in">serializeJson</span>(doc, output);
</code></pre>
<p>Does your program still crash?</p>
`,options:[{id:"crash-with-char-array",page:34,label:"Yes",summary:"Replacing the output pointer with an array doesn't fix the crash"},{id:"no-crash-with-char-array",page:151,label:"No",summary:"Replacing the output pointer with an array fixes the crash"}]},{content:`<p>When you use <code>PROGMEM</code> with ArduinoJson (and any other Arduino code, really), you must make sure that the addresses in Flash memory aren't interpreted as addresses in RAM.</p>
<p>Indeed, <a href="https://en.wikipedia.org/wiki/Harvard_architecture">Harvard architectures</a> (like <a href="https://en.wikipedia.org/wiki/AVR_microcontrollers">AVR</a> and <a href="https://en.wikipedia.org/wiki/ESP8266">ESP8266</a>) use different addresses spaces for RAM and Flash. This means that the same address can refer to either Flash or RAM, so the CPU has no way to tell that some pointers target RAM and some others target Flash. That's why the program needs to treat the two areas separately.</p>
<p>Getting back to your program, you must make sure that ArduinoJson can clearly identify Flash strings as such. The <code>PROGMEM</code> attribute itself isn't sufficient because it doesn't alter the C++ type of the string. That's why ArduinoJson needs you to pass a pointer of type <code>const __FlashStringHelper*</code> when you refer to a Flash string.</p>
<p>For example, the following program is incorrect and very likely to crash:</p>
<pre><code class="hljs language-c++"><span class="hljs-type">const</span> <span class="hljs-type">char</span> PROGMEM key[] = <span class="hljs-string">&quot;the answer&quot;</span>;

doc[key] = <span class="hljs-number">42</span>; <span class="hljs-comment">// &lt;- BOOOOOM!!!!</span>
</code></pre>
<p>Because, it saw a string of type <code>const char*</code>, ArduinoJson assumed the pointer was refering to the RAM address space.
To fix this issue, you must cast the pointer to \`\`const __FlashStringHelper*\`, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-type">const</span> <span class="hljs-type">char</span> PROGMEM key_data[] = <span class="hljs-string">&quot;the answer&quot;</span>;
<span class="hljs-type">const</span> __FlashStringHelper* key = (<span class="hljs-type">const</span> __FlashStringHelper*)key_data;

doc[key] = <span class="hljs-number">42</span>;
</code></pre>
<p>As you can see, this is quite ugly. Fortunately, Arduino provides the F(), which declares the Flash string and return the appropriate type:</p>
<pre><code class="hljs language-c++">doc[<span class="hljs-built_in">F</span>(<span class="hljs-string">&quot;the answer&quot;</span>)] = <span class="hljs-number">42</span>;
</code></pre>
<p>There is one drawback with the <code>F()</code>, though: it doesn't perform <a href="https://cpp4arduino.com/2018/10/23/what-is-string-interning.html">string interning</a>.
This means that every call to the macro creates a new string in the program memory, even if the same string was already present.
So, be careful with this macro; otherwise, you'll end up with multiple copies of the same string, and the program will be bigger than it should.
If you need to use the Flash string in several places, you better define a variable, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-keyword">auto</span> key = <span class="hljs-built_in">F</span>(<span class="hljs-string">&quot;the answer&quot;</span>);

doc[key] = <span class="hljs-number">42</span>;
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Casting the pointer solves the issue"},{id:"failure",page:34,label:"No",summary:"Casting the pointer doesn't solve the issue"}]},{content:`<p>Do you use <code>PROGMEM</code> (Flash memory) in your program?</p>
`,options:[{id:"progmem",page:162,label:"Yes",summary:"Program uses `PROGMEM`"},{id:"no-progmem",page:158,label:"No",summary:"Program doesn't use `PROGMEM`"}]},{content:`<p>Because a <a href="/v6/api/staticjsondocument/"><code>StaticJsonDocument</code></a> resides on the stack, it may cause a <a href="https://en.wikipedia.org/wiki/Stack_buffer_overflow">stack-overflow</a>.</p>
<p>Some platforms can detect stack overflows, in which case they raise an exception; others let the program do nothing and let the program crash on its own.
The tricky part with stack overflows is that the program doesn't always crash; it can also expose all kind of weird behavior.</p>
<p>If you have no idea of what I'm talking about, please have a look a &quot;The missing C++ course&quot; in <a href="/book/">Mastering ArduioJson</a>, it explains the roles of the different areas of memory, as well as many other important stuffs.</p>
<p>Please switch to a <a href="/v6/api/dynamicjsondocument/"><code>DynamicJsonDocument</code></a></p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Switching to `DynamicJsonDocument` fixes the issue"},{id:"dynamicjsondocument-tried",page:163,label:"No",summary:"Switching to `DynamicJsonDocument` doesn't fix the issue"}]},{content:`<p>Please print the capacity of the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> to the serial port, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(doc.<span class="hljs-built_in">capacity</span>());
</code></pre>
<p>What value does it show?</p>
`,options:[{id:"capacity-0",page:169,label:"<code>0</code>",summary:"`doc.capacity()` returns `0`"},{id:"capacity-ok",page:34,label:"a positive integer",summary:"`doc.capacity()` looks good"}]},{content:`<p><code>doc.capacity()</code> returns <code>0</code>, which means <code>allocate()</code> returned <code>NULL</code>.</p>
<p>I think that, because <code>doc</code> is declared global, <code>allocate()</code> is called too early and the heap isn't ready.
I know this happens on ESP32 with the <code>SpiRamJsonDocument</code> shown in <a href="/v6/how-to/use-external-ram-on-esp32/">How to use external RAM on ESP32?</a>.</p>
<p>Please try to make <code>doc</code> a local variable.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Making `doc` local fixes the issue."},{id:"failure",page:34,label:"No",summary:"Making `doc` local doesn't fix the issue."}]},{content:`<p>Is <code>doc</code> a global variable?</p>
`,options:[{id:"global",page:166,label:"Yes",summary:"`doc` is a global variable"},{id:"local",page:168,label:"No",summary:"`doc` is not a global variable"}]},{content:`<p>Well, that's very bad news. It seems that your microcontroller doesn't have enough RAM to hold the JSON document.</p>
<p>Please read <a href="/v6/how-to/reduce-memory-usage/">How to reduce memory usage</a>.
It shows several techniques you can use to use less RAM.
Hopefully, you'll make enough room for the memory pool.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Reducing memory usage fixes the issue"},{id:"failure",page:34,label:"No",summary:"Reducing memory usage doesn't fix the issue"}]},{content:`<p>What kind of <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> do you use?</p>
`,options:[{id:"basic",page:167,label:"<code>BasicJsonDocument&lt;T&gt;</code>",summary:"The document is a `BasicJsonDocument<T>`"},{id:"dynamic",page:168,label:"<code>DynamicJsonDocument</code>",summary:"The document is a `DynamicJsonDocument`"},{id:"static",page:34,label:"<code>StaticJsonDocument</code>",summary:"The document is a `StaticJsonDocument`"}]},{content:`<p>Do you call <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> before calling <a href="/v6/api/json/serializejson/"><code>serializeJson()</code></a>? (with the same <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>)</p>
`,options:[{id:"deserialize-yes",page:172,label:"Yes",summary:"Program calls `deserializeJson()`"},{id:"deserialize-no",page:34,label:"No",summary:"Program doesn't call `deserializeJson()`"}]},{content:`<p>When you pass a writeable buffer as the input of <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>, ArduinoJson uses the <strong>zero-copy mode</strong>. Instead of copying the strings from the input into the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, it stores pointers to the input buffer.
Therefore, the input buffer must stay alive during the whole lifetime of the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>; otherwise, all the strings in the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> will be dangling pointers.
Usually, this produces grabage in the output, but it can sometimes produce empty strings.</p>
<p>The easiest solution is to disable the zero-copy mode by passing a read-only input buffer. Casting the pointer will do the trick:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// replace this:</span>
<span class="hljs-built_in">deserializeJson</span>(doc, input, inputSize);

<span class="hljs-comment">// ...with this:</span>
<span class="hljs-built_in">deserializeJson</span>(doc, (<span class="hljs-type">const</span> <span class="hljs-type">char</span>*)input, inputSize);
</code></pre>
<p>Now that the zero-copy mode is disabled, you probably need a larger <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, so don't forget to update the capacity. As usual, use the <a href="/v6/assistant/">ArduinoJson Assistant</a> to compute the right capacity for your project.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Casting the pointer fixes the issue"},{id:"casting-fails",page:34,label:"No",summary:"Casting the pointer doesn't fix the issue"}]},{content:`<p>What's the type of the second argument passed to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>?</p>
`,options:[{id:"char-ptr",page:171,label:"<code>char*</code> (or <code>char[]</code>)",summary:"Input type is `char*`"},{id:"const-char-ptr",page:34,label:"<code>const char*</code>",summary:"Input type is `const char*`"},{id:"string",page:34,label:"<code>String</code> (or <code>std::string</code>)",summary:"Input type is `String`"},{id:"stream",page:34,label:"<code>Stream</code> (or <code>std::istream)</code>",summary:"Input type is `Stream`"}]},{content:`<p>Supposing that the JSON output looks like this:</p>
<pre><code class="hljs language-json"><span class="hljs-punctuation">{</span><span class="hljs-attr">&quot;value&quot;</span><span class="hljs-punctuation">:</span><span class="hljs-number">23.79999924</span><span class="hljs-punctuation">}</span>
</code></pre>
<p>I'm assuming you expect it to look like that:</p>
<pre><code class="hljs language-json"><span class="hljs-punctuation">{</span><span class="hljs-attr">&quot;value&quot;</span><span class="hljs-punctuation">:</span><span class="hljs-number">24.8</span><span class="hljs-punctuation">}</span>
</code></pre>
<p>Please change the type of the variable from <code>float</code> to <code>double</code> and try again.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Replacing `float` with `double` fixes the issue"},{id:"double",page:175,label:"No",summary:"Replacing `float` with `double` doesn't fix the issue"}]},{content:`<p>I'm surprised that the previous solution didn't work.</p>
<p>We can try to change ArduinoJson's storage type to see if it solves your issue.</p>
<p>Please define <a href="/v6/api/config/use_double/">ARDUINOJSON_USE_DOUBLE</a> to <code>0</code> before including <code>ArduinoJson.h</code>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-meta">#<span class="hljs-keyword">define</span> ARDUINOJSON_USE_DOUBLE 0</span>
<span class="hljs-meta">#<span class="hljs-keyword">include</span> <span class="hljs-string">&lt;ArduinoJson.h&gt;</span></span>
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Defining `ARDUINOJSON_USE_DOUBLE` to `0` fixes the issue"},{id:"failure",page:34,label:"No",summary:"Defining `ARDUINOJSON_USE_DOUBLE` to `0` doesn't fix the issue"}]},{content:`<p>Please add the following function somewhere in your program:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// rounds a number to 2 decimal places</span>
<span class="hljs-comment">// example: round(3.14159) -&gt; 3.14</span>
<span class="hljs-function"><span class="hljs-type">double</span> <span class="hljs-title">round2</span><span class="hljs-params">(<span class="hljs-type">double</span> value)</span> </span>{
   <span class="hljs-keyword">return</span> (<span class="hljs-type">int</span>)(value * <span class="hljs-number">100</span> + <span class="hljs-number">0.5</span>) / <span class="hljs-number">100.0</span>;
}
</code></pre>
<p>Now, call this function when inserting the value in the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>; for example:</p>
<pre><code class="hljs language-c++">doc[<span class="hljs-string">&quot;value&quot;</span>] = <span class="hljs-built_in">round2</span>(value);
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Rounding the value fixes the issue"},{id:"double",page:174,label:"No",summary:"Rounding the value doesn't fix the issue"}]},{content:`<p>What function produces the garbage?</p>
`,options:[{id:"json",page:183,label:"<code>serializeJson()</code> (or <code>serializeJsonPretty()</code>)",summary:"`serializeJson()` produces garbage"},{id:"msg",page:188,label:"<code>serializeMsgPack()</code>",summary:"`serializeMsgPack()` produces garbage"}]},{content:`<p>When you pass a writeable buffer as the input of <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>, ArduinoJson uses the <strong>zero-copy mode</strong>. Instead of copying the strings from the input into the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, it stores pointers to the input buffer.
Therefore, the input buffer must stay alive during the whole lifetime of the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>; otherwise, all the strings in the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> will be dangling pointers.</p>
<p>The easiest solution is to disable the zero-copy mode by passing a read-only input buffer. Casting the pointer will do the trick:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// replace this:</span>
<span class="hljs-built_in">deserializeJson</span>(doc, input, inputSize);

<span class="hljs-comment">// ...with this:</span>
<span class="hljs-built_in">deserializeJson</span>(doc, (<span class="hljs-type">const</span> <span class="hljs-type">char</span>*)input, inputSize);
</code></pre>
<p>Now that the zero-copy mode is disabled, you probably need a larger <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, so don't forget to update the capacity. As usual, use the <a href="/v6/assistant/">ArduinoJson Assistant</a> to compute the right capacity for your project.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Casting the pointer fixes the issue"},{id:"casting-fails",page:192,label:"No",summary:"Casting the pointer doesn't fix the issue"}]},{content:`<p>What's the type of the second argument passed to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>?</p>
`,options:[{id:"char-ptr",page:177,label:"<code>char*</code> (or <code>char[]</code>)",summary:"Input type is `char*`"},{id:"const-char-ptr",page:192,label:"<code>const char*</code>",summary:"Input type is `const char*`"},{id:"string",page:192,label:"<code>String</code> (or <code>std::string</code>)",summary:"Input type is `String`"},{id:"stream",page:192,label:"<code>Stream</code> (or <code>std::istream)</code>",summary:"Input type is `Stream`"}]},{content:`<p>You can insert <a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a> objects in a <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, but make sure you don't store the result of <a href="https://www.arduino.cc/reference/en/language/variables/data-types/string/functions/c_str/"><code>String::c_str()</code></a>.</p>
<p>The pointer returned by <a href="https://www.arduino.cc/reference/en/language/variables/data-types/string/functions/c_str/"><code>String::c_str()</code></a> is valid only if you don't modify or destroy the string.
Indeed, this function returns the address of the internal buffer of the <a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a> instance.
This buffer is freed by <a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a>'s destructor and may be reallocated each time the  <a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a> changes. It's crucial that you don't save the pointer returned of <a href="https://www.arduino.cc/reference/en/language/variables/data-types/string/functions/c_str/"><code>String::c_str()</code></a>; otherwise, the pointer may be dangling.</p>
<p>For example, the following lines create a dangling pointer:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// DON&#x27;T DO THAT!!!  💀</span>
doc[<span class="hljs-string">&quot;address&quot;</span>] = address.<span class="hljs-built_in">toString</span>().<span class="hljs-built_in">c_str</span>();
<span class="hljs-comment">// ...</span>
<span class="hljs-built_in">serializeJson</span>(doc, Serial);  <span class="hljs-comment">// &lt;- likely to produce garbage</span>
</code></pre>
<p>Here, <code>address.toString()</code> returns a temporary <a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a> which is destructed after executing the first statement. When <a href="/v6/api/json/serializejson/"><code>serializeJson()</code></a> runs, the pointer stored in the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> will be pointing to an invalid location. It may work by accident, but if the memory location is reused by another variable, it will print garbage to the serial port.</p>
<p>The solution is to duplicate string instead of saving a pointer.
Since ArduinoJson automatically duplicates <a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a> instances, all you need to do is  removing the call to <a href="https://www.arduino.cc/reference/en/language/variables/data-types/string/functions/c_str/"><code>String::c_str()</code></a>, like so:</p>
<pre><code class="hljs language-c++">doc[<span class="hljs-string">&quot;address&quot;</span>] = address.<span class="hljs-built_in">toString</span>(); <span class="hljs-comment">// &lt;- duplicates</span>
<span class="hljs-comment">// ...</span>
<span class="hljs-built_in">serializeJson</span>(doc, Serial);
</code></pre>
<p>Now, ArduinoJson sees a <a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a> and knows that it needs to make a copy of the string in the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Removing `.c_str()` fixes the issue"},{id:"failure",page:34,label:"No",summary:"Removing `.c_str()` doesn't fix the issue"}]},{content:`<p>Do you use <a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a> in your program?</p>
`,options:[{id:"string",page:179,label:"Yes",summary:"Program uses `String`"},{id:"no-string",page:34,label:"No",summary:"Program doesn't use `String`"}]},{content:`<p><a href="/v6/api/staticjsondocument/"><code>StaticJsonDocument</code></a> stores its memory pool in the stack.
A large memory pool can overflow the stack a produce all kinds of strange behavior.
In particural, a <a href="https://en.wikipedia.org/wiki/Stack_buffer_overflow">stack overflow</a> can cause garbage in <a href="/v6/api/json/serializejson/"><code>serializeJson()</code></a>'s output.</p>
<p>Please switch to a <a href="/v6/api/dynamicjsondocument/"><code>DynamicJsonDocument</code></a>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Switching to `DynamicJsonDocument` fixes the issue"},{id:"dynamic",page:180,label:"No",summary:"Switching to `DynamicJsonDocument` doesn't fix the issue"}]},{content:`<p>Which kind of <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> do you use?</p>
`,options:[{id:"dynamic",page:180,label:"<code>DynamicJsonDocument</code>",summary:"Program uses `DynamicJsonDocument`"},{id:"static",page:181,label:"<code>StaticJsonDocument</code>",summary:"Program uses `StaticJsonDocument`"}]},{content:`<p>Do you call <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> before calling <a href="/v6/api/json/serializejson/"><code>serializeJson()</code></a>? (with the same <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>)</p>
`,options:[{id:"deserialize-yes",page:178,label:"Yes",summary:"Program calls `deserializeJson()`"},{id:"deserialize-no",page:192,label:"No",summary:"Program doesn't call `deserializeJson()`"}]},{content:`<p><a href="/v6/api/jsonarray/"><code>JsonArray</code></a> doesn't contain any data: it is a reference to an object stored in the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>. It becomes invalid as soon as the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> is destroyed; this could explain the garbage you see in the output.</p>
<p>For example, here is a function that creates a dangling <a href="/v6/api/jsonarray/"><code>JsonArray</code></a>:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// DON&#x27;T DO THAT!!!  💀</span>
<span class="hljs-function">JsonArray <span class="hljs-title">createArray</span><span class="hljs-params">()</span> </span>{
  StaticJsonDocument&lt;<span class="hljs-number">200</span>&gt; doc;
  JsonArray arr = doc.<span class="hljs-built_in">to</span>&lt;JsonArray&gt;();
  arr.<span class="hljs-built_in">add</span>(<span class="hljs-string">&quot;hello&quot;</span>);
  arr.<span class="hljs-built_in">add</span>(<span class="hljs-string">&quot;world&quot;</span>);
  <span class="hljs-keyword">return</span> arr;
}
</code></pre>
<p>The <a href="/v6/api/jsonarray/"><code>JsonArray</code></a> returned by this function points to a destructed <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, and therefore is likely to produce garbage or crash the program.</p>
<p>The best way to fix this function is to pass the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> as an argument:</p>
<pre><code class="hljs language-c++"><span class="hljs-function">JsonArray <span class="hljs-title">createArray</span><span class="hljs-params">(JsonDocument&amp; doc)</span> </span>{
  JsonArray arr = doc.<span class="hljs-built_in">to</span>&lt;JsonArray&gt;();
  arr.<span class="hljs-built_in">add</span>(<span class="hljs-string">&quot;hello&quot;</span>);
  arr.<span class="hljs-built_in">add</span>(<span class="hljs-string">&quot;world&quot;</span>);
  <span class="hljs-keyword">return</span> arr;
}
</code></pre>
<p>This way, you can keep the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> alive when you call <a href="/v6/api/json/serializejson/"><code>serializeJson()</code></a></p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Extending the lifetime of the `JsonDocument` solves the issue"},{id:"not-destroyed",page:191,label:"No",summary:"Extending the lifetime of the `JsonDocument` doesn't solve the issue"}]},{content:`<p><a href="/v6/api/jsonobject/"><code>JsonObject</code></a> doesn't contain any data: it is a reference to an object stored in the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>. It becomes invalid as soon as the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> is destroyed; this could explain the garbage you see in the output.</p>
<p>For example, here is a function that creates a dangling <a href="/v6/api/jsonobject/"><code>JsonObject</code></a>:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// DON&#x27;T DO THAT!!!  💀</span>
<span class="hljs-function">JsonObject <span class="hljs-title">createObject</span><span class="hljs-params">()</span> </span>{
  StaticJsonDocument&lt;<span class="hljs-number">200</span>&gt; doc;
  JsonObject obj = doc.<span class="hljs-built_in">to</span>&lt;JsonObject&gt;();
  obj[<span class="hljs-string">&quot;hello&quot;</span>] = <span class="hljs-string">&quot;world&quot;</span>;
  <span class="hljs-keyword">return</span> obj;
}
</code></pre>
<p>The <a href="/v6/api/jsonobject/"><code>JsonObject</code></a> returned by this function points to a destructed <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, and therefore is likely to produce garbage or crash the program.</p>
<p>The best way to fix this function is to pass the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> as an argument:</p>
<pre><code class="hljs language-c++"><span class="hljs-function">JsonObject <span class="hljs-title">createObject</span><span class="hljs-params">(JsonDocument&amp; doc)</span> </span>{
  JsonObject obj = doc.<span class="hljs-built_in">to</span>&lt;JsonObject&gt;();
  obj[<span class="hljs-string">&quot;hello&quot;</span>] = <span class="hljs-string">&quot;world&quot;</span>;
  <span class="hljs-keyword">return</span> obj;
}
</code></pre>
<p>This way, you can keep the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> alive when you call <a href="/v6/api/json/serializejson/"><code>serializeJson()</code></a></p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Extending the lifetime of the `JsonDocument` solves the issue"},{id:"not-destroyed",page:191,label:"No",summary:"Extending the lifetime of the `JsonDocument` doesn't solve the issue"}]},{content:`<p><a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a> doesn't contain any data: it is a reference to an object stored in the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>. It becomes invalid as soon as the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> is destroyed; this could explain the garbage you see in the output.</p>
<p>For example, here is a function that creates a dangling <a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a>:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// DON&#x27;T DO THAT!!!  💀</span>
<span class="hljs-function">JsonVariant <span class="hljs-title">createVariant</span><span class="hljs-params">()</span> </span>{
  StaticJsonDocument&lt;<span class="hljs-number">200</span>&gt; doc;
  JsonVariant var = doc.<span class="hljs-built_in">to</span>&lt;JsonVariant&gt;();
  var[<span class="hljs-string">&quot;hello&quot;</span>] = <span class="hljs-string">&quot;world&quot;</span>;
  <span class="hljs-keyword">return</span> var;
}
</code></pre>
<p>The <a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a> returned by this function points to a destructed <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, and therefore is likely to produce garbage or crash the program.</p>
<p>The best way to fix this function is to pass the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> as an argument:</p>
<pre><code class="hljs language-c++"><span class="hljs-function">JsonVariant <span class="hljs-title">createVariant</span><span class="hljs-params">(JsonDocument&amp; doc)</span> </span>{
  JsonVariant var = doc.<span class="hljs-built_in">to</span>&lt;JsonVariant&gt;();
  var[<span class="hljs-string">&quot;hello&quot;</span>] = <span class="hljs-string">&quot;world&quot;</span>;
  <span class="hljs-keyword">return</span> var;
}
</code></pre>
<p>This way, you can keep the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> alive when you call <a href="/v6/api/json/serializejson/"><code>serializeJson()</code></a></p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Extending the lifetime of the `JsonDocument` solves the issue"},{id:"not-destroyed",page:191,label:"No",summary:"Extending the lifetime of the `JsonDocument` doesn't solve the issue"}]},{content:`<p><a href="/v6/api/msgpack/serializemsgpack/"><code>serializeMsgPack()</code></a> share a lot of code with <a href="/v6/api/json/serializejson/"><code>serializeJson()</code></a>. There is no reason you should produce garbage with one and not the other. You may have found a bug.</p>
`,tags:["needs_assistance"]},{content:`<p><a href="https://msgpack.org/">MessagePack</a> is a binary format, so if you print a document to the serial port, the result would look weird.</p>
<p>For example, the following program:</p>
<pre><code class="hljs language-c++">StaticJsonDocument&lt;<span class="hljs-number">256</span>&gt; doc;
doc[<span class="hljs-string">&quot;val&quot;</span>] = <span class="hljs-number">42</span>;
<span class="hljs-built_in">serializeMsgPack</span>(doc, Serial);
</code></pre>
<p>produces:</p>
<pre><code class="hljs language-text">⸮⸮val*
</code></pre>
<p>Yes. This is the expected result.</p>
<p>Now that this question is cleared, let's move on with the diagnostic.</p>
<p>I need you to edit your program to replace <a href="/v6/api/msgpack/serializemsgpack/"><code>serializeMsgPack()</code></a> with <a href="/v6/api/json/serializejson/"><code>serializeJson()</code></a>.</p>
<p>Do you see the garbage in the JSON output?</p>
`,options:[{id:"json",page:183,label:"Yes, <code>serializeJson()</code> produces garbage too",summary:"`serializeJson()` produces garbage too"},{id:"deserialize-no",page:187,label:"No, <code>serializeJson()</code> doesn't produces garbage",summary:"`serializeJson()` doesn't produces garbage"}]},{content:`<p><a href="/v6/api/jsondocument/garbagecollect/"><code>JsonDocument::garbageCollect()</code></a> invalidates all previously acquired <a href="/v6/api/jsonarray/"><code>JsonArray</code></a>, <a href="/v6/api/jsonobject/"><code>JsonObject</code></a>, and <a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a>.</p>
<p>After you call it, make sure to reassign  every references, like so:</p>
<pre><code class="hljs language-c++">JsonObject cfg = doc.<span class="hljs-built_in">createNestedObject</span>(<span class="hljs-string">&quot;config&quot;</span>);
<span class="hljs-comment">// ...</span>
doc.<span class="hljs-built_in">garbageCollect</span>();
cfg = doc[<span class="hljs-string">&quot;config&quot;</span>];
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Reassigning references fixes the issue"},{id:"reassigned",page:182,label:"No",summary:"Reassigning references doesn't fix the issue"}]},{content:`<p><a href="/v6/api/basicjsondocument/shrinktofit/"><code>JsonDocument::shrinkToFit()</code></a> invalidates all previously acquired <a href="/v6/api/jsonarray/"><code>JsonArray</code></a>, <a href="/v6/api/jsonobject/"><code>JsonObject</code></a>, and <a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a>.</p>
<p>After you call it, make sure to reassign  every references, like so:</p>
<pre><code class="hljs language-c++">JsonObject cfg = doc.<span class="hljs-built_in">createNestedObject</span>(<span class="hljs-string">&quot;config&quot;</span>);
<span class="hljs-comment">// ...</span>
doc.<span class="hljs-built_in">shrinkToFit</span>();
cfg = doc[<span class="hljs-string">&quot;config&quot;</span>];
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Reassigning references fixes the issue"},{id:"reassigned",page:182,label:"No",summary:"Reassigning references doesn't fix the issue"}]},{content:`<p>Do you use one of the following function?</p>
`,options:[{id:"garbagecollect",page:189,label:"<code>JsonDocument::garbageCollect()</code>",summary:"Program calls `JsonDocument::garbageCollect()`"},{id:"shrinktofit",page:190,label:"<code>JsonDocument::shrinkToFit()</code>",summary:"Program calls `JsonDocument::shrinkToFit()`"},{id:"none",page:182,label:"No",summary:"Program doesn't call an invalidating function"}]},{content:`<p>What is the type of the first argument passed to <a href="/v6/api/json/serializejson/"><code>serializeJson()</code></a>?</p>
`,options:[{id:"document",page:182,label:"<code>JsonDocument</code>",summary:"Program calls `serializeJson(const JsonDocument&, ...)`"},{id:"array",page:184,label:"<code>JsonArray</code> (or <code>JsonArrayConst</code>)",summary:"Program calls `serializeJson(JsonArrayConst, ...)`"},{id:"object",page:185,label:"<code>JsonObject</code> (or <code>JsonObjectConst</code>)",summary:"Program calls `serializeJson(JsonObjectConst, ...)`"},{id:"variant",page:186,label:"<code>JsonVariant</code> (or <code>JsonVariantConst</code>)",summary:"Program calls `serializeJson(JsonVariantConst, ...)`"}]},{content:`<p>Does your program call <a href="/v6/api/json/serializejson/"><code>serializeJson()</code></a> in a loop?</p>
`,options:[{id:"loop",page:196,label:"Yes",summary:"Program calls `serializeJson()` in a loop"},{id:"no-loop",page:197,label:"No",summary:"Program doesn't call `serializeJson()` in a loop"}]},{content:`<p>Please replace the call to <a href="/v6/api/jsondocument/clear/"><code>JsonDocument::clear()</code></a> with <a href="/v6/api/jsondocument/garbagecollect/"><code>JsonDocument::garbageCollect()</code></a>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Calling `JsonDocument::garbageCollect()` solves the issue"},{id:"gc",page:197,label:"No",summary:"Calling `JsonDocument::garbageCollect()` doesn't solve the issue"}]},{content:`<p>We can try to clear the content of the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>.</p>
<p>Please call <a href="/v6/api/jsondocument/clear/"><code>JsonDocument::clear()</code></a> at the beginning of the loop.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Calling `JsonDocument::clear()` solves the issue"},{id:"clear",page:197,label:"No",summary:"Calling `JsonDocument::clear()` doesn't solve the issue"},{id:"missing",page:194,label:"Yes, but now some values are missing",summary:"Calling `JsonDocument::clear()` solves the issue but removes other values"}]},{content:`<p>Calling <a href="/v6/api/json/serializejson/"><code>serializeJson()</code></a> is safe, but you'll run into issues if you modify the same <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> in a loop.</p>
<p>The best workaround is to move the declaration of the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> inside the loop.</p>
<p>For example:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// Before</span>
StaticJsonDocument&lt;<span class="hljs-number">128</span>&gt; doc;
<span class="hljs-keyword">for</span> (<span class="hljs-type">int</span> i=<span class="hljs-number">0</span>; i&lt;<span class="hljs-number">10</span>; i++) {
  doc[<span class="hljs-string">&quot;userid&quot;</span>] = <span class="hljs-built_in">String</span>(<span class="hljs-string">&quot;user&quot;</span>) + i;
  <span class="hljs-built_in">serializeJson</span>(doc, Serial);
}

<span class="hljs-comment">// After</span>
<span class="hljs-keyword">for</span> (<span class="hljs-type">int</span> i=<span class="hljs-number">0</span>; i&lt;<span class="hljs-number">10</span>; i++) {
  StaticJsonDocument&lt;<span class="hljs-number">128</span>&gt; doc;
  doc[<span class="hljs-string">&quot;userid&quot;</span>] = <span class="hljs-built_in">String</span>(<span class="hljs-string">&quot;user&quot;</span>) + i;
  <span class="hljs-built_in">serializeJson</span>(doc, Serial);
}
</code></pre>
<p>Please read <a href="/v6/issues/memory-leak/">I found a memory leak in the library!</a> for an explanation.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Moving the `JsonDocument` inside the loop solves the issue"},{id:"inside",page:197,label:"No",summary:"Moving the `JsonDocument` inside the loop doesn't solve the issue"},{id:"outside",page:195,label:"I cannot move the declaration inside the loop",summary:"The `JsonDocument` cannot be moved inside the loop"}]},{content:`<p>Please print the value of <a href="/v6/api/jsondocument/overflowed/"><code>JsonDocument::overflowed()</code></a>, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(doc.<span class="hljs-built_in">overflowed</span>());
</code></pre>
<p>What value does it print?</p>
`,options:[{id:"overflowed-1",page:199,label:"<code>1</code> (or <code>true</code>)",summary:"`JsonDocument::overflowed()` returns `true`"},{id:"overflowed-0",page:198,label:"<code>0</code> (or <code>false</code>)",summary:"`JsonDocument::overflowed()` returns `false`"}]},{content:`<p>Does one of the strings in the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> contains a NUL (i.e.,  ASCII code 0, or <code>\\u0000</code>)?</p>
`,options:[{id:"nul",page:152,label:"Yes",summary:"One or more strings contain a NUL"},{id:"no-nul",page:34,label:"No",summary:"No string contains a NUL"}]},{content:`<p><a href="/v6/api/jsondocument/overflowed/"><code>JsonDocument::overflowed()</code></a> returns <code>true</code> when you tried to insert a value in the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> but there isn't enough room to store it.</p>
<p>The solution is to increase the capacity of the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>. Don't forget to account for the size of the duplicated strings. As usual, use the <a href="/v6/assistant/">ArduinoJson Assistant</a> to compute the right capacity for your project.</p>
<p>For more explanations on this issue, please see <a href="/v6/issues/incomplete-output/">Why is the output incomplete?</a>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Increasing the capacity of the `JsonDocument` solves the issue."},{id:"capacity-increased",page:34,label:"No",summary:"Increasing the capacity of the `JsonDocument` doesn't solve the issue."}]},{content:`<p><a href="/v6/api/json/serializejson/"><code>serializeJson()</code></a> writes the JSON document mostly one character at a time, which can be pretty slow with unbuffered streams (such as <a href="https://www.arduino.cc/en/Reference/EthernetClient"><code>EthernetClient</code></a>, <a href="https://www.arduino.cc/en/Reference/WiFiClient"><code>WifiClient</code></a>, <a href="https://www.arduino.cc/en/Reference/SD"><code>File</code></a>, and <a href="https://github.com/knolleary/pubsubclient/">PubSubClient</a>).</p>
<p>To speed up the serialization process, you must insert a buffer between the stream and <a href="/v6/api/json/serializejson/"><code>serializeJson()</code></a>.
The easiest way to do so it by using the <code>WriteBufferingStream</code> from the <a href="https://github.com/bblanchon/ArduinoStreamUtils">StreamUtils</a> library.</p>
<p>Replace the following:</p>
<pre><code class="hljs language-c++"><span class="hljs-built_in">serializeJson</span>(doc, stream);
</code></pre>
<p>with</p>
<pre><code class="hljs language-c++"><span class="hljs-function">WriteBufferingStream <span class="hljs-title">bufferedStream</span><span class="hljs-params">(stream, <span class="hljs-number">64</span>)</span></span>;
<span class="hljs-built_in">serializeJson</span>(doc, bufferedStream);
bufferedStream.<span class="hljs-built_in">flush</span>();
</code></pre>
<p>The first line creates a new stream <code>bufferedStream</code> that implements buffering on top of the original (this is the <a href="https://en.wikipedia.org/wiki/Decorator_pattern">decorator pattern</a>).<br>
The second line writes the JSON document to the <a href="https://www.arduino.cc/en/Reference/WiFiClient"><code>WiFiClient</code></a> through the buffer.<br>
The last line flushes the buffer to make sure we send the end of the document.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:151,label:"Yes",summary:"Adding `WriteBufferingStream` fixes the issue"},{id:"failure",page:34,label:"No",summary:"Adding `WriteBufferingStream` doesn't fix the issue"}]}];function qo(e,s,n){var o;const t=Eo[e];return{...t,number:n||1,hash:s||"#",options:(o=t.options)==null?void 0:o.map((a,i)=>({...a,inputId:`option-${e}-${i}`,hash:(s?s+"/":"#")+a.id,missing:!Eo[a.page],selected:!1}))}}function Lr(e){var n;const s=[qo(0)];if(e){let t=s[0];for(let o of e.substring(1).split("/")){const a=(n=t.options)==null?void 0:n.find(i=>i.id===o);if(!a){console.error(`Option "${o}" not found`);break}if(a.selected=!0,t.selectedOption=a,t=qo(a.page,a.hash,t.number+1),!t)break;s.push(t)}}return s}function Wr(e){return e.map(s=>s.selectedOption).filter(s=>!!s).map((s,n)=>`${n+1}. ${s.summary}`).join(`
`)}const ll="",$r=e=>new Promise(s=>setTimeout(s,e)),Vr={components:{AssistanceModal:Dr,TroubleshooterStep:Br},data(){return{reportCopied:!1,hash:""}},mounted(){this.hash=location.hash,window.addEventListener("hashchange",()=>this.hash=location.hash)},computed:{needsAssistance(){var s;return!!((s=this.steps[this.steps.length-1].tags)!=null&&s.includes("needs_assistance"))},steps(){return Lr(this.hash)},report(){return Wr(this.steps)}},methods:{choose(e){document.location.assign(e.hash),ga("set","page",document.location.pathname+document.location.hash),ga("send","pageview")},async copyReport(){await navigator.clipboard.writeText(this.report),this.reportCopied=!0,await $r(2e3),this.reportCopied=!1}}},Kr=Q("div",null,[Q("p",null,"Hi!"),Q("p",null,[sn(" I'm the "),Q("i",null,"ArduinoJson Troubleshooter"),sn(", and I'm here to help you fix your problem. I'll ask you a series of questions and give you some instructions along the way. ")]),Q("p",null,"Ready? Here we go!")],-1),Gr={key:0},Xr=Q("button",{type:"button",class:"btn btn-primary","data-toggle":"modal","data-target":"#assistance-modal"}," Contact support ",-1),Zr=["disabled"];function Qr(e,s,n,t,o,a){const i=Rn("TroubleshooterStep"),r=Rn("AssistanceModal");return ue(),De("div",null,[Kr,(ue(!0),De(be,null,eo(a.steps,(c,u)=>(ue(),Zs(et,{key:u,name:"fade",mode:"out-in"},{default:Mt(()=>[(ue(),Zs(i,{key:c.hash,step:c,onChoose:a.choose,active:u==a.steps.length-1},null,8,["step","onChoose","active"]))]),_:2},1024))),128)),a.needsAssistance?(ue(),De("div",Gr,[Xr,sn(),Q("button",{class:fs(["btn",{"btn-outline-primary":!o.reportCopied,"btn-success":o.reportCopied}]),disabled:o.reportCopied,onClick:s[0]||(s[0]=(...c)=>a.copyReport&&a.copyReport(...c))},Ds(o.reportCopied?"✓ Report copied":"Copy troubleshooter's report"),11,Zr),le(r,{id:"assistance-modal",report:a.report},null,8,["report"])])):Vn("",!0)])}vr(nn(Vr,[["render",Qr]])).provide("debug",!1).mount("#troubleshooter-app")})();
