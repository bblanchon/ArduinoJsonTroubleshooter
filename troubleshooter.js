(function(){"use strict";function ln(e,s){const n=Object.create(null),t=e.split(",");for(let o=0;o<t.length;o++)n[t[o]]=!0;return s?o=>!!n[o.toLowerCase()]:o=>!!n[o]}const B={},ts=[],je=()=>{},$o=()=>!1,Ko=/^on[^a-z]/,As=e=>Ko.test(e),cn=e=>e.startsWith("onUpdate:"),Z=Object.assign,pn=(e,s)=>{const n=e.indexOf(s);n>-1&&e.splice(n,1)},Go=Object.prototype.hasOwnProperty,P=(e,s)=>Go.call(e,s),A=Array.isArray,os=e=>Ds(e)==="[object Map]",rt=e=>Ds(e)==="[object Set]",I=e=>typeof e=="function",Q=e=>typeof e=="string",un=e=>typeof e=="symbol",M=e=>e!==null&&typeof e=="object",lt=e=>M(e)&&I(e.then)&&I(e.catch),ct=Object.prototype.toString,Ds=e=>ct.call(e),Xo=e=>Ds(e).slice(8,-1),pt=e=>Ds(e)==="[object Object]",dn=e=>Q(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ns=ln(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zs=e=>{const s=Object.create(null);return n=>s[n]||(s[n]=e(n))},Zo=/-(\w)/g,Se=zs(e=>e.replace(Zo,(s,n)=>n?n.toUpperCase():"")),Qo=/\B([A-Z])/g,as=zs(e=>e.replace(Qo,"-$1").toLowerCase()),Is=zs(e=>e.charAt(0).toUpperCase()+e.slice(1)),hn=zs(e=>e?`on${Is(e)}`:""),Os=(e,s)=>!Object.is(e,s),mn=(e,s)=>{for(let n=0;n<e.length;n++)e[n](s)},Cs=(e,s,n)=>{Object.defineProperty(e,s,{configurable:!0,enumerable:!1,value:n})},ea=e=>{const s=parseFloat(e);return isNaN(s)?e:s},sa=e=>{const s=Q(e)?Number(e):NaN;return isNaN(s)?e:s};let ut;const fn=()=>ut||(ut=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function gn(e){if(A(e)){const s={};for(let n=0;n<e.length;n++){const t=e[n],o=Q(t)?aa(t):gn(t);if(o)for(const a in o)s[a]=o[a]}return s}else{if(Q(e))return e;if(M(e))return e}}const na=/;(?![^(]*\))/g,ta=/:([^]+)/,oa=/\/\*[^]*?\*\//g;function aa(e){const s={};return e.replace(oa,"").split(na).forEach(n=>{if(n){const t=n.split(ta);t.length>1&&(s[t[0].trim()]=t[1].trim())}}),s}function fs(e){let s="";if(Q(e))s=e;else if(A(e))for(let n=0;n<e.length;n++){const t=fs(e[n]);t&&(s+=t+" ")}else if(M(e))for(const n in e)e[n]&&(s+=n+" ");return s.trim()}const ia=ln("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function dt(e){return!!e||e===""}const Ps=e=>Q(e)?e:e==null?"":A(e)||M(e)&&(e.toString===ct||!I(e.toString))?JSON.stringify(e,ht,2):String(e),ht=(e,s)=>s&&s.__v_isRef?ht(e,s.value):os(s)?{[`Map(${s.size})`]:[...s.entries()].reduce((n,[t,o])=>(n[`${t} =>`]=o,n),{})}:rt(s)?{[`Set(${s.size})`]:[...s.values()]}:M(s)&&!A(s)&&!pt(s)?String(s):s;let ve;class ra{constructor(s=!1){this.detached=s,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ve,!s&&ve&&(this.index=(ve.scopes||(ve.scopes=[])).push(this)-1)}get active(){return this._active}run(s){if(this._active){const n=ve;try{return ve=this,s()}finally{ve=n}}}on(){ve=this}off(){ve=this.parent}stop(s){if(this._active){let n,t;for(n=0,t=this.effects.length;n<t;n++)this.effects[n].stop();for(n=0,t=this.cleanups.length;n<t;n++)this.cleanups[n]();if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!s){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function la(e,s=ve){s&&s.active&&s.effects.push(e)}function ca(){return ve}const yn=e=>{const s=new Set(e);return s.w=0,s.n=0,s},mt=e=>(e.w&Re)>0,ft=e=>(e.n&Re)>0,pa=({deps:e})=>{if(e.length)for(let s=0;s<e.length;s++)e[s].w|=Re},ua=e=>{const{deps:s}=e;if(s.length){let n=0;for(let t=0;t<s.length;t++){const o=s[t];mt(o)&&!ft(o)?o.delete(e):s[n++]=o,o.w&=~Re,o.n&=~Re}s.length=n}},bn=new WeakMap;let gs=0,Re=1;const jn=30;let we;const We=Symbol(""),vn=Symbol("");class wn{constructor(s,n=null,t){this.fn=s,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,la(this,t)}run(){if(!this.active)return this.fn();let s=we,n=Fe;for(;s;){if(s===this)return;s=s.parent}try{return this.parent=we,we=this,Fe=!0,Re=1<<++gs,gs<=jn?pa(this):gt(this),this.fn()}finally{gs<=jn&&ua(this),Re=1<<--gs,we=this.parent,Fe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){we===this?this.deferStop=!0:this.active&&(gt(this),this.onStop&&this.onStop(),this.active=!1)}}function gt(e){const{deps:s}=e;if(s.length){for(let n=0;n<s.length;n++)s[n].delete(e);s.length=0}}let Fe=!0;const yt=[];function is(){yt.push(Fe),Fe=!1}function rs(){const e=yt.pop();Fe=e===void 0?!0:e}function pe(e,s,n){if(Fe&&we){let t=bn.get(e);t||bn.set(e,t=new Map);let o=t.get(n);o||t.set(n,o=yn()),bt(o)}}function bt(e,s){let n=!1;gs<=jn?ft(e)||(e.n|=Re,n=!mt(e)):n=!e.has(we),n&&(e.add(we),we.deps.push(e))}function Ce(e,s,n,t,o,a){const i=bn.get(e);if(!i)return;let l=[];if(s==="clear")l=[...i.values()];else if(n==="length"&&A(e)){const c=Number(t);i.forEach((u,h)=>{(h==="length"||h>=c)&&l.push(u)})}else switch(n!==void 0&&l.push(i.get(n)),s){case"add":A(e)?dn(n)&&l.push(i.get("length")):(l.push(i.get(We)),os(e)&&l.push(i.get(vn)));break;case"delete":A(e)||(l.push(i.get(We)),os(e)&&l.push(i.get(vn)));break;case"set":os(e)&&l.push(i.get(We));break}if(l.length===1)l[0]&&Jn(l[0]);else{const c=[];for(const u of l)u&&c.push(...u);Jn(yn(c))}}function Jn(e,s){const n=A(e)?e:[...e];for(const t of n)t.computed&&jt(t);for(const t of n)t.computed||jt(t)}function jt(e,s){(e!==we||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const da=ln("__proto__,__v_isRef,__isVue"),vt=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(un)),ha=_n(),ma=_n(!1,!0),fa=_n(!0),wt=ya();function ya(){const e={};return["includes","indexOf","lastIndexOf"].forEach(s=>{e[s]=function(...n){const t=q(this);for(let a=0,i=this.length;a<i;a++)pe(t,"get",a+"");const o=t[s](...n);return o===-1||o===!1?t[s](...n.map(q)):o}}),["push","pop","shift","unshift","splice"].forEach(s=>{e[s]=function(...n){is();const t=q(this)[s].apply(this,n);return rs(),t}}),e}function ba(e){const s=q(this);return pe(s,"has",e),s.hasOwnProperty(e)}function _n(e=!1,s=!1){return function(t,o,a){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return s;if(o==="__v_raw"&&a===(e?s?Ca:Nt:s?Dt:At).get(t))return t;const i=A(t);if(!e){if(i&&P(wt,o))return Reflect.get(wt,o,a);if(o==="hasOwnProperty")return ba}const l=Reflect.get(t,o,a);return(un(o)?vt.has(o):da(o))||(e||pe(t,"get",o),s)?l:re(l)?i&&dn(o)?l:l.value:M(l)?e?zt(l):kn(l):l}}const ja=Jt(),va=Jt(!0);function Jt(e=!1){return function(n,t,o,a){let i=n[t];if(ys(i)&&re(i)&&!re(o))return!1;if(!e&&(!An(o)&&!ys(o)&&(i=q(i),o=q(o)),!A(n)&&re(i)&&!re(o)))return i.value=o,!0;const l=A(n)&&dn(t)?Number(t)<n.length:P(n,t),c=Reflect.set(n,t,o,a);return n===q(a)&&(l?Os(o,i)&&Ce(n,"set",t,o):Ce(n,"add",t,o)),c}}function wa(e,s){const n=P(e,s);e[s];const t=Reflect.deleteProperty(e,s);return t&&n&&Ce(e,"delete",s,void 0),t}function Ja(e,s){const n=Reflect.has(e,s);return(!un(s)||!vt.has(s))&&pe(e,"has",s),n}function _a(e){return pe(e,"iterate",A(e)?"length":We),Reflect.ownKeys(e)}const _t={get:ha,set:ja,deleteProperty:wa,has:Ja,ownKeys:_a},Ta={get:fa,set(e,s){return!0},deleteProperty(e,s){return!0}},Sa=Z({},_t,{get:ma,set:va}),Tn=e=>e,Es=e=>Reflect.getPrototypeOf(e);function qs(e,s,n=!1,t=!1){e=e.__v_raw;const o=q(e),a=q(s);n||(s!==a&&pe(o,"get",s),pe(o,"get",a));const{has:i}=Es(o),l=t?Tn:n?Nn:Dn;if(i.call(o,s))return l(e.get(s));if(i.call(o,a))return l(e.get(a));e!==o&&e.get(s)}function Rs(e,s=!1){const n=this.__v_raw,t=q(n),o=q(e);return s||(e!==o&&pe(t,"has",e),pe(t,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function Fs(e,s=!1){return e=e.__v_raw,!s&&pe(q(e),"iterate",We),Reflect.get(e,"size",e)}function Tt(e){e=q(e);const s=q(this);return Es(s).has.call(s,e)||(s.add(e),Ce(s,"add",e,e)),this}function St(e,s){s=q(s);const n=q(this),{has:t,get:o}=Es(n);let a=t.call(n,e);a||(e=q(e),a=t.call(n,e));const i=o.call(n,e);return n.set(e,s),a?Os(s,i)&&Ce(n,"set",e,s):Ce(n,"add",e,s),this}function kt(e){const s=q(this),{has:n,get:t}=Es(s);let o=n.call(s,e);o||(e=q(e),o=n.call(s,e)),t&&t.call(s,e);const a=s.delete(e);return o&&Ce(s,"delete",e,void 0),a}function xt(){const e=q(this),s=e.size!==0,n=e.clear();return s&&Ce(e,"clear",void 0,void 0),n}function Hs(e,s){return function(t,o){const a=this,i=a.__v_raw,l=q(i),c=s?Tn:e?Nn:Dn;return!e&&pe(l,"iterate",We),i.forEach((u,h)=>t.call(o,c(u),c(h),a))}}function Ms(e,s,n){return function(...t){const o=this.__v_raw,a=q(o),i=os(a),l=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,u=o[e](...t),h=n?Tn:s?Nn:Dn;return!s&&pe(a,"iterate",c?vn:We),{next(){const{value:y,done:v}=u.next();return v?{value:y,done:v}:{value:l?[h(y[0]),h(y[1])]:h(y),done:v}},[Symbol.iterator](){return this}}}}function He(e){return function(...s){return e==="delete"?!1:this}}function ka(){const e={get(a){return qs(this,a)},get size(){return Fs(this)},has:Rs,add:Tt,set:St,delete:kt,clear:xt,forEach:Hs(!1,!1)},s={get(a){return qs(this,a,!1,!0)},get size(){return Fs(this)},has:Rs,add:Tt,set:St,delete:kt,clear:xt,forEach:Hs(!1,!0)},n={get(a){return qs(this,a,!0)},get size(){return Fs(this,!0)},has(a){return Rs.call(this,a,!0)},add:He("add"),set:He("set"),delete:He("delete"),clear:He("clear"),forEach:Hs(!0,!1)},t={get(a){return qs(this,a,!0,!0)},get size(){return Fs(this,!0)},has(a){return Rs.call(this,a,!0)},add:He("add"),set:He("set"),delete:He("delete"),clear:He("clear"),forEach:Hs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=Ms(a,!1,!1),n[a]=Ms(a,!0,!1),s[a]=Ms(a,!1,!0),t[a]=Ms(a,!0,!0)}),[e,n,s,t]}const[xa,Aa,Da,Na]=ka();function Sn(e,s){const n=s?e?Na:Da:e?Aa:xa;return(t,o,a)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?t:Reflect.get(P(n,o)&&o in t?n:t,o,a)}const za={get:Sn(!1,!1)},Ia={get:Sn(!1,!0)},Oa={get:Sn(!0,!1)},At=new WeakMap,Dt=new WeakMap,Nt=new WeakMap,Ca=new WeakMap;function Pa(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ea(e){return e.__v_skip||!Object.isExtensible(e)?0:Pa(Xo(e))}function kn(e){return ys(e)?e:xn(e,!1,_t,za,At)}function qa(e){return xn(e,!1,Sa,Ia,Dt)}function zt(e){return xn(e,!0,Ta,Oa,Nt)}function xn(e,s,n,t,o){if(!M(e)||e.__v_raw&&!(s&&e.__v_isReactive))return e;const a=o.get(e);if(a)return a;const i=Ea(e);if(i===0)return e;const l=new Proxy(e,i===2?t:n);return o.set(e,l),l}function ls(e){return ys(e)?ls(e.__v_raw):!!(e&&e.__v_isReactive)}function ys(e){return!!(e&&e.__v_isReadonly)}function An(e){return!!(e&&e.__v_isShallow)}function It(e){return ls(e)||ys(e)}function q(e){const s=e&&e.__v_raw;return s?q(s):e}function Ot(e){return Cs(e,"__v_skip",!0),e}const Dn=e=>M(e)?kn(e):e,Nn=e=>M(e)?zt(e):e;function Ra(e){Fe&&we&&(e=q(e),bt(e.dep||(e.dep=yn())))}function Fa(e,s){e=q(e);const n=e.dep;n&&Jn(n)}function re(e){return!!(e&&e.__v_isRef===!0)}function Ha(e){return re(e)?e.value:e}const Ma={get:(e,s,n)=>Ha(Reflect.get(e,s,n)),set:(e,s,n,t)=>{const o=e[s];return re(o)&&!re(n)?(o.value=n,!0):Reflect.set(e,s,n,t)}};function Ct(e){return ls(e)?e:new Proxy(e,Ma)}class Ya{constructor(s,n,t,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new wn(s,()=>{this._dirty||(this._dirty=!0,Fa(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=t}get value(){const s=q(this);return Ra(s),(s._dirty||!s._cacheable)&&(s._dirty=!1,s._value=s.effect.run()),s._value}set value(s){this._setter(s)}}function Ua(e,s,n=!1){let t,o;const a=I(e);return a?(t=e,o=je):(t=e.get,o=e.set),new Ya(t,o,a||!o,n)}function dl(e,...s){}function Me(e,s,n,t){let o;try{o=t?e(...t):e()}catch(a){Ys(a,s,n)}return o}function fe(e,s,n,t){if(I(e)){const a=Me(e,s,n,t);return a&&lt(a)&&a.catch(i=>{Ys(i,s,n)}),a}const o=[];for(let a=0;a<e.length;a++)o.push(fe(e[a],s,n,t));return o}function Ys(e,s,n,t=!0){const o=s?s.vnode:null;if(s){let a=s.parent;const i=s.proxy,l=n;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](e,i,l)===!1)return}a=a.parent}const c=s.appContext.config.errorHandler;if(c){Me(c,null,10,[e,i,l]);return}}Ba(e,n,o,t)}function Ba(e,s,n,t=!0){console.error(e)}let bs=!1,zn=!1;const ae=[];let ke=0;const cs=[];let Pe=null,Ve=0;const Pt=Promise.resolve();let In=null;function La(e){const s=In||Pt;return e?s.then(this?e.bind(this):e):s}function Wa(e){let s=ke+1,n=ae.length;for(;s<n;){const t=s+n>>>1;js(ae[t])<e?s=t+1:n=t}return s}function On(e){(!ae.length||!ae.includes(e,bs&&e.allowRecurse?ke+1:ke))&&(e.id==null?ae.push(e):ae.splice(Wa(e.id),0,e),Et())}function Et(){!bs&&!zn&&(zn=!0,In=Pt.then(Ft))}function Va(e){const s=ae.indexOf(e);s>ke&&ae.splice(s,1)}function $a(e){A(e)?cs.push(...e):(!Pe||!Pe.includes(e,e.allowRecurse?Ve+1:Ve))&&cs.push(e),Et()}function qt(e,s=bs?ke+1:0){for(;s<ae.length;s++){const n=ae[s];n&&n.pre&&(ae.splice(s,1),s--,n())}}function Rt(e){if(cs.length){const s=[...new Set(cs)];if(cs.length=0,Pe){Pe.push(...s);return}for(Pe=s,Pe.sort((n,t)=>js(n)-js(t)),Ve=0;Ve<Pe.length;Ve++)Pe[Ve]();Pe=null,Ve=0}}const js=e=>e.id==null?1/0:e.id,Ka=(e,s)=>{const n=js(e)-js(s);if(n===0){if(e.pre&&!s.pre)return-1;if(s.pre&&!e.pre)return 1}return n};function Ft(e){zn=!1,bs=!0,ae.sort(Ka);const s=je;try{for(ke=0;ke<ae.length;ke++){const n=ae[ke];n&&n.active!==!1&&Me(n,null,14)}}finally{ke=0,ae.length=0,Rt(),bs=!1,In=null,(ae.length||cs.length)&&Ft()}}function Ga(e,s,...n){if(e.isUnmounted)return;const t=e.vnode.props||B;let o=n;const a=s.startsWith("update:"),i=a&&s.slice(7);if(i&&i in t){const h=`${i==="modelValue"?"model":i}Modifiers`,{number:y,trim:v}=t[h]||B;v&&(o=n.map(x=>Q(x)?x.trim():x)),y&&(o=n.map(ea))}let l,c=t[l=hn(s)]||t[l=hn(Se(s))];!c&&a&&(c=t[l=hn(as(s))]),c&&fe(c,e,6,o);const u=t[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,fe(u,e,6,o)}}function Ht(e,s,n=!1){const t=s.emitsCache,o=t.get(e);if(o!==void 0)return o;const a=e.emits;let i={},l=!1;if(!I(e)){const c=u=>{const h=Ht(u,s,!0);h&&(l=!0,Z(i,h))};!n&&s.mixins.length&&s.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!a&&!l?(M(e)&&t.set(e,null),null):(A(a)?a.forEach(c=>i[c]=null):Z(i,a),M(e)&&t.set(e,i),i)}function Us(e,s){return!e||!As(s)?!1:(s=s.slice(2).replace(/Once$/,""),P(e,s[0].toLowerCase()+s.slice(1))||P(e,as(s))||P(e,s))}let ge=null,Mt=null;function Bs(e){const s=ge;return ge=e,Mt=e&&e.type.__scopeId||null,s}function Yt(e,s=ge,n){if(!s||e._n)return e;const t=(...o)=>{t._d&&vo(-1);const a=Bs(s);let i;try{i=e(...o)}finally{Bs(a),t._d&&vo(1)}return i};return t._n=!0,t._c=!0,t._d=!0,t}function hl(){}function Cn(e){const{type:s,vnode:n,proxy:t,withProxy:o,props:a,propsOptions:[i],slots:l,attrs:c,emit:u,render:h,renderCache:y,data:v,setupState:x,ctx:E,inheritAttrs:D}=e;let Y,L;const W=Bs(e);try{if(n.shapeFlag&4){const N=o||t;Y=Ae(h.call(N,N,y,a,x,v,E)),L=c}else{const N=s;Y=Ae(N.length>1?N(a,{attrs:c,slots:l,emit:u}):N(a,null)),L=s.props?c:Xa(c)}}catch(N){Js.length=0,Ys(N,e,1),Y=ce(Je)}let V=Y;if(L&&D!==!1){const N=Object.keys(L),{shapeFlag:te}=V;N.length&&te&7&&(i&&N.some(cn)&&(L=Za(L,i)),V=Ye(V,L))}return n.dirs&&(V=Ye(V),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),Y=V,Bs(W),Y}const Xa=e=>{let s;for(const n in e)(n==="class"||n==="style"||As(n))&&((s||(s={}))[n]=e[n]);return s},Za=(e,s)=>{const n={};for(const t in e)(!cn(t)||!(t.slice(9)in s))&&(n[t]=e[t]);return n};function Qa(e,s,n){const{props:t,children:o,component:a}=e,{props:i,children:l,patchFlag:c}=s,u=a.emitsOptions;if(s.dirs||s.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return t?Ut(t,i,u):!!i;if(c&8){const h=s.dynamicProps;for(let y=0;y<h.length;y++){const v=h[y];if(i[v]!==t[v]&&!Us(u,v))return!0}}}else return(o||l)&&(!l||!l.$stable)?!0:t===i?!1:t?i?Ut(t,i,u):!0:!!i;return!1}function Ut(e,s,n){const t=Object.keys(s);if(t.length!==Object.keys(e).length)return!0;for(let o=0;o<t.length;o++){const a=t[o];if(s[a]!==e[a]&&!Us(n,a))return!0}return!1}function ei({vnode:e,parent:s},n){for(;s&&s.subTree===e;)(e=s.vnode).el=n,s=s.parent}const si=e=>e.__isSuspense;function ni(e,s){s&&s.pendingBranch?A(e)?s.effects.push(...e):s.effects.push(e):$a(e)}const Ls={};function Pn(e,s,n){return Bt(e,s,n)}function Bt(e,s,{immediate:n,deep:t,flush:o,onTrack:a,onTrigger:i}=B){var l;const c=ca()===((l=ne)==null?void 0:l.scope)?ne:null;let u,h=!1,y=!1;if(re(e)?(u=()=>e.value,h=An(e)):ls(e)?(u=()=>e,t=!0):A(e)?(y=!0,h=e.some(N=>ls(N)||An(N)),u=()=>e.map(N=>{if(re(N))return N.value;if(ls(N))return ps(N);if(I(N))return Me(N,c,2)})):I(e)?s?u=()=>Me(e,c,2):u=()=>{if(!(c&&c.isUnmounted))return v&&v(),fe(e,c,3,[x])}:u=je,s&&t){const N=u;u=()=>ps(N())}let v,x=N=>{v=W.onStop=()=>{Me(N,c,4)}},E;if(Ts)if(x=je,s?n&&fe(s,c,3,[u(),y?[]:void 0,x]):u(),o==="sync"){const N=er();E=N.__watcherHandles||(N.__watcherHandles=[])}else return je;let D=y?new Array(e.length).fill(Ls):Ls;const Y=()=>{if(W.active)if(s){const N=W.run();(t||h||(y?N.some((te,Ne)=>Os(te,D[Ne])):Os(N,D)))&&(v&&v(),fe(s,c,3,[N,D===Ls?void 0:y&&D[0]===Ls?[]:D,x]),D=N)}else W.run()};Y.allowRecurse=!!s;let L;o==="sync"?L=Y:o==="post"?L=()=>ue(Y,c&&c.suspense):(Y.pre=!0,c&&(Y.id=c.uid),L=()=>On(Y));const W=new wn(u,L);s?n?Y():D=W.run():o==="post"?ue(W.run.bind(W),c&&c.suspense):W.run();const V=()=>{W.stop(),c&&c.scope&&pn(c.scope.effects,W)};return E&&E.push(V),V}function ti(e,s,n){const t=this.proxy,o=Q(e)?e.includes(".")?Lt(t,e):()=>t[e]:e.bind(t,t);let a;I(s)?a=s:(a=s.handler,n=s);const i=ne;ds(this);const l=Bt(o,a.bind(t),n);return i?ds(i):Xe(),l}function Lt(e,s){const n=s.split(".");return()=>{let t=e;for(let o=0;o<n.length&&t;o++)t=t[n[o]];return t}}function ps(e,s){if(!M(e)||e.__v_skip||(s=s||new Set,s.has(e)))return e;if(s.add(e),re(e))ps(e.value,s);else if(A(e))for(let n=0;n<e.length;n++)ps(e[n],s);else if(rt(e)||os(e))e.forEach(n=>{ps(n,s)});else if(pt(e))for(const n in e)ps(e[n],s);return e}function $e(e,s,n,t){const o=e.dirs,a=s&&s.dirs;for(let i=0;i<o.length;i++){const l=o[i];a&&(l.oldValue=a[i].value);let c=l.dir[t];c&&(is(),fe(c,n,8,[e.el,l,e,s]),rs())}}function oi(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Xt(()=>{e.isMounted=!0}),Zt(()=>{e.isUnmounting=!0}),e}const ye=[Function,Array],Wt={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ye,onEnter:ye,onAfterEnter:ye,onEnterCancelled:ye,onBeforeLeave:ye,onLeave:ye,onAfterLeave:ye,onLeaveCancelled:ye,onBeforeAppear:ye,onAppear:ye,onAfterAppear:ye,onAppearCancelled:ye},ai={name:"BaseTransition",props:Wt,setup(e,{slots:s}){const n=Bi(),t=oi();let o;return()=>{const a=s.default&&Kt(s.default(),!0);if(!a||!a.length)return;let i=a[0];if(a.length>1){for(const D of a)if(D.type!==Je){i=D;break}}const l=q(e),{mode:c}=l;if(t.isLeaving)return qn(i);const u=$t(i);if(!u)return qn(i);const h=En(u,l,t,n);Rn(u,h);const y=n.subTree,v=y&&$t(y);let x=!1;const{getTransitionKey:E}=u.type;if(E){const D=E();o===void 0?o=D:D!==o&&(o=D,x=!0)}if(v&&v.type!==Je&&(!Ge(u,v)||x)){const D=En(v,l,t,n);if(Rn(v,D),c==="out-in")return t.isLeaving=!0,D.afterLeave=()=>{t.isLeaving=!1,n.update.active!==!1&&n.update()},qn(i);c==="in-out"&&u.type!==Je&&(D.delayLeave=(Y,L,W)=>{const V=Vt(t,v);V[String(v.key)]=v,Y._leaveCb=()=>{L(),Y._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=W})}return i}}};function Vt(e,s){const{leavingVNodes:n}=e;let t=n.get(s.type);return t||(t=Object.create(null),n.set(s.type,t)),t}function En(e,s,n,t){const{appear:o,mode:a,persisted:i=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:y,onLeave:v,onAfterLeave:x,onLeaveCancelled:E,onBeforeAppear:D,onAppear:Y,onAfterAppear:L,onAppearCancelled:W}=s,V=String(e.key),N=Vt(n,e),te=(O,G)=>{O&&fe(O,t,9,G)},Ne=(O,G)=>{const U=G[1];te(O,G),A(O)?O.every(ie=>ie.length<=1)&&U():O.length<=1&&U()},ze={mode:a,persisted:i,beforeEnter(O){let G=l;if(!n.isMounted)if(o)G=D||l;else return;O._leaveCb&&O._leaveCb(!0);const U=N[V];U&&Ge(e,U)&&U.el._leaveCb&&U.el._leaveCb(),te(G,[O])},enter(O){let G=c,U=u,ie=h;if(!n.isMounted)if(o)G=Y||c,U=L||u,ie=W||h;else return;let T=!1;const K=O._enterCb=he=>{T||(T=!0,he?te(ie,[O]):te(U,[O]),ze.delayedLeave&&ze.delayedLeave(),O._enterCb=void 0)};G?Ne(G,[O,K]):K()},leave(O,G){const U=String(e.key);if(O._enterCb&&O._enterCb(!0),n.isUnmounting)return G();te(y,[O]);let ie=!1;const T=O._leaveCb=K=>{ie||(ie=!0,G(),K?te(E,[O]):te(x,[O]),O._leaveCb=void 0,N[U]===e&&delete N[U])};N[U]=e,v?Ne(v,[O,T]):T()},clone(O){return En(O,s,n,t)}};return ze}function qn(e){if(Vs(e))return e=Ye(e),e.children=null,e}function $t(e){return Vs(e)?e.children?e.children[0]:void 0:e}function Rn(e,s){e.shapeFlag&6&&e.component?Rn(e.component.subTree,s):e.shapeFlag&128?(e.ssContent.transition=s.clone(e.ssContent),e.ssFallback.transition=s.clone(e.ssFallback)):e.transition=s}function Kt(e,s=!1,n){let t=[],o=0;for(let a=0;a<e.length;a++){let i=e[a];const l=n==null?i.key:String(n)+String(i.key!=null?i.key:a);i.type===be?(i.patchFlag&128&&o++,t=t.concat(Kt(i.children,s,l))):(s||i.type!==Je)&&t.push(l!=null?Ye(i,{key:l}):i)}if(o>1)for(let a=0;a<t.length;a++)t[a].patchFlag=-2;return t}function Fn(e,s){return I(e)?(()=>Z({name:e.name},s,{setup:e}))():e}const Ws=e=>!!e.type.__asyncLoader,Vs=e=>e.type.__isKeepAlive;function ii(e,s){Gt(e,"a",s)}function ri(e,s){Gt(e,"da",s)}function Gt(e,s,n=ne){const t=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if($s(s,t,n),n){let o=n.parent;for(;o&&o.parent;)Vs(o.parent.vnode)&&li(t,s,n,o),o=o.parent}}function li(e,s,n,t){const o=$s(s,e,t,!0);Qt(()=>{pn(t[s],o)},n)}function $s(e,s,n=ne,t=!1){if(n){const o=n[e]||(n[e]=[]),a=s.__weh||(s.__weh=(...i)=>{if(n.isUnmounted)return;is(),ds(n);const l=fe(s,n,e,i);return Xe(),rs(),l});return t?o.unshift(a):o.push(a),a}}const Ee=e=>(s,n=ne)=>(!Ts||e==="sp")&&$s(e,(...t)=>s(...t),n),ci=Ee("bm"),Xt=Ee("m"),pi=Ee("bu"),ui=Ee("u"),Zt=Ee("bum"),Qt=Ee("um"),di=Ee("sp"),hi=Ee("rtg"),mi=Ee("rtc");function fi(e,s=ne){$s("ec",e,s)}const eo="components";function Hn(e,s){return yi(eo,e,!0,s)||e}const gi=Symbol.for("v-ndc");function yi(e,s,n=!0,t=!1){const o=ge||ne;if(o){const a=o.type;if(e===eo){const l=Ki(a,!1);if(l&&(l===s||l===Se(s)||l===Is(Se(s))))return a}const i=so(o[e]||a[e],s)||so(o.appContext[e],s);return!i&&t?a:i}}function so(e,s){return e&&(e[s]||e[Se(s)]||e[Is(Se(s))])}function no(e,s,n,t){let o;const a=n&&n[t];if(A(e)||Q(e)){o=new Array(e.length);for(let i=0,l=e.length;i<l;i++)o[i]=s(e[i],i,void 0,a&&a[i])}else if(typeof e=="number"){o=new Array(e);for(let i=0;i<e;i++)o[i]=s(i+1,i,void 0,a&&a[i])}else if(M(e))if(e[Symbol.iterator])o=Array.from(e,(i,l)=>s(i,l,void 0,a&&a[l]));else{const i=Object.keys(e);o=new Array(i.length);for(let l=0,c=i.length;l<c;l++){const u=i[l];o[l]=s(e[u],u,l,a&&a[l])}}else o=[];return n&&(n[t]=o),o}const Mn=e=>e?To(e)?Qn(e)||e.proxy:Mn(e.parent):null,vs=Z(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Mn(e.parent),$root:e=>Mn(e.root),$emit:e=>e.emit,$options:e=>Bn(e),$forceUpdate:e=>e.f||(e.f=()=>On(e.update)),$nextTick:e=>e.n||(e.n=La.bind(e.proxy)),$watch:e=>ti.bind(e)}),Yn=(e,s)=>e!==B&&!e.__isScriptSetup&&P(e,s),bi={get({_:e},s){const{ctx:n,setupState:t,data:o,props:a,accessCache:i,type:l,appContext:c}=e;let u;if(s[0]!=="$"){const x=i[s];if(x!==void 0)switch(x){case 1:return t[s];case 2:return o[s];case 4:return n[s];case 3:return a[s]}else{if(Yn(t,s))return i[s]=1,t[s];if(o!==B&&P(o,s))return i[s]=2,o[s];if((u=e.propsOptions[0])&&P(u,s))return i[s]=3,a[s];if(n!==B&&P(n,s))return i[s]=4,n[s];Un&&(i[s]=0)}}const h=vs[s];let y,v;if(h)return s==="$attrs"&&pe(e,"get",s),h(e);if((y=l.__cssModules)&&(y=y[s]))return y;if(n!==B&&P(n,s))return i[s]=4,n[s];if(v=c.config.globalProperties,P(v,s))return v[s]},set({_:e},s,n){const{data:t,setupState:o,ctx:a}=e;return Yn(o,s)?(o[s]=n,!0):t!==B&&P(t,s)?(t[s]=n,!0):P(e.props,s)||s[0]==="$"&&s.slice(1)in e?!1:(a[s]=n,!0)},has({_:{data:e,setupState:s,accessCache:n,ctx:t,appContext:o,propsOptions:a}},i){let l;return!!n[i]||e!==B&&P(e,i)||Yn(s,i)||(l=a[0])&&P(l,i)||P(t,i)||P(vs,i)||P(o.config.globalProperties,i)},defineProperty(e,s,n){return n.get!=null?e._.accessCache[s]=0:P(n,"value")&&this.set(e,s,n.value,null),Reflect.defineProperty(e,s,n)}};function to(e){return A(e)?e.reduce((s,n)=>(s[n]=null,s),{}):e}let Un=!0;function ji(e){const s=Bn(e),n=e.proxy,t=e.ctx;Un=!1,s.beforeCreate&&oo(s.beforeCreate,e,"bc");const{data:o,computed:a,methods:i,watch:l,provide:c,inject:u,created:h,beforeMount:y,mounted:v,beforeUpdate:x,updated:E,activated:D,deactivated:Y,beforeDestroy:L,beforeUnmount:W,destroyed:V,unmounted:N,render:te,renderTracked:Ne,renderTriggered:ze,errorCaptured:O,serverPrefetch:G,expose:U,inheritAttrs:ie,components:T,directives:K,filters:he}=s;if(u&&vi(u,t,null),i)for(const X in i){const F=i[X];I(F)&&(t[X]=F.bind(n))}if(o){const X=o.call(n,n);M(X)&&(e.data=kn(X))}if(Un=!0,a)for(const X in a){const F=a[X],ss=I(F)?F.bind(n,n):I(F.get)?F.get.bind(n,n):je,an=!I(F)&&I(F.set)?F.set.bind(n):je,ns=Xi({get:ss,set:an});Object.defineProperty(t,X,{enumerable:!0,configurable:!0,get:()=>ns.value,set:Ie=>ns.value=Ie})}if(l)for(const X in l)ao(l[X],t,n,X);if(c){const X=I(c)?c.call(n):c;Reflect.ownKeys(X).forEach(F=>{ki(F,X[F])})}h&&oo(h,e,"c");function oe(X,F){A(F)?F.forEach(ss=>X(ss.bind(n))):F&&X(F.bind(n))}if(oe(ci,y),oe(Xt,v),oe(pi,x),oe(ui,E),oe(ii,D),oe(ri,Y),oe(fi,O),oe(mi,Ne),oe(hi,ze),oe(Zt,W),oe(Qt,N),oe(di,G),A(U))if(U.length){const X=e.exposed||(e.exposed={});U.forEach(F=>{Object.defineProperty(X,F,{get:()=>n[F],set:ss=>n[F]=ss})})}else e.exposed||(e.exposed={});te&&e.render===je&&(e.render=te),ie!=null&&(e.inheritAttrs=ie),T&&(e.components=T),K&&(e.directives=K)}function vi(e,s,n=je){A(e)&&(e=Ln(e));for(const t in e){const o=e[t];let a;M(o)?"default"in o?a=Xs(o.from||t,o.default,!0):a=Xs(o.from||t):a=Xs(o),re(a)?Object.defineProperty(s,t,{enumerable:!0,configurable:!0,get:()=>a.value,set:i=>a.value=i}):s[t]=a}}function oo(e,s,n){fe(A(e)?e.map(t=>t.bind(s.proxy)):e.bind(s.proxy),s,n)}function ao(e,s,n,t){const o=t.includes(".")?Lt(n,t):()=>n[t];if(Q(e)){const a=s[e];I(a)&&Pn(o,a)}else if(I(e))Pn(o,e.bind(n));else if(M(e))if(A(e))e.forEach(a=>ao(a,s,n,t));else{const a=I(e.handler)?e.handler.bind(n):s[e.handler];I(a)&&Pn(o,a,e)}}function Bn(e){const s=e.type,{mixins:n,extends:t}=s,{mixins:o,optionsCache:a,config:{optionMergeStrategies:i}}=e.appContext,l=a.get(s);let c;return l?c=l:!o.length&&!n&&!t?c=s:(c={},o.length&&o.forEach(u=>Ks(c,u,i,!0)),Ks(c,s,i)),M(s)&&a.set(s,c),c}function Ks(e,s,n,t=!1){const{mixins:o,extends:a}=s;a&&Ks(e,a,n,!0),o&&o.forEach(i=>Ks(e,i,n,!0));for(const i in s)if(!(t&&i==="expose")){const l=wi[i]||n&&n[i];e[i]=l?l(e[i],s[i]):s[i]}return e}const wi={data:io,props:ro,emits:ro,methods:ws,computed:ws,beforeCreate:le,created:le,beforeMount:le,mounted:le,beforeUpdate:le,updated:le,beforeDestroy:le,beforeUnmount:le,destroyed:le,unmounted:le,activated:le,deactivated:le,errorCaptured:le,serverPrefetch:le,components:ws,directives:ws,watch:_i,provide:io,inject:Ji};function io(e,s){return s?e?function(){return Z(I(e)?e.call(this,this):e,I(s)?s.call(this,this):s)}:s:e}function Ji(e,s){return ws(Ln(e),Ln(s))}function Ln(e){if(A(e)){const s={};for(let n=0;n<e.length;n++)s[e[n]]=e[n];return s}return e}function le(e,s){return e?[...new Set([].concat(e,s))]:s}function ws(e,s){return e?Z(Object.create(null),e,s):s}function ro(e,s){return e?A(e)&&A(s)?[...new Set([...e,...s])]:Z(Object.create(null),to(e),to(s??{})):s}function _i(e,s){if(!e)return s;if(!s)return e;const n=Z(Object.create(null),e);for(const t in s)n[t]=le(e[t],s[t]);return n}function lo(){return{app:null,config:{isNativeTag:$o,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ti=0;function Si(e,s){return function(t,o=null){I(t)||(t=Z({},t)),o!=null&&!M(o)&&(o=null);const a=lo(),i=new Set;let l=!1;const c=a.app={_uid:Ti++,_component:t,_props:o,_container:null,_context:a,_instance:null,version:sr,get config(){return a.config},set config(u){},use(u,...h){return i.has(u)||(u&&I(u.install)?(i.add(u),u.install(c,...h)):I(u)&&(i.add(u),u(c,...h))),c},mixin(u){return a.mixins.includes(u)||a.mixins.push(u),c},component(u,h){return h?(a.components[u]=h,c):a.components[u]},directive(u,h){return h?(a.directives[u]=h,c):a.directives[u]},mount(u,h,y){if(!l){const v=ce(t,o);return v.appContext=a,h&&s?s(v,u):e(v,u,y),l=!0,c._container=u,u.__vue_app__=c,Qn(v.component)||v.component.proxy}},unmount(){l&&(e(null,c._container),delete c._container.__vue_app__)},provide(u,h){return a.provides[u]=h,c},runWithContext(u){Gs=c;try{return u()}finally{Gs=null}}};return c}}let Gs=null;function ki(e,s){if(ne){let n=ne.provides;const t=ne.parent&&ne.parent.provides;t===n&&(n=ne.provides=Object.create(t)),n[e]=s}}function Xs(e,s,n=!1){const t=ne||ge;if(t||Gs){const o=t?t.parent==null?t.vnode.appContext&&t.vnode.appContext.provides:t.parent.provides:Gs._context.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&I(s)?s.call(t&&t.proxy):s}}function xi(e,s,n,t=!1){const o={},a={};Cs(a,sn,1),e.propsDefaults=Object.create(null),co(e,s,o,a);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=t?o:qa(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function Ai(e,s,n,t){const{props:o,attrs:a,vnode:{patchFlag:i}}=e,l=q(o),[c]=e.propsOptions;let u=!1;if((t||i>0)&&!(i&16)){if(i&8){const h=e.vnode.dynamicProps;for(let y=0;y<h.length;y++){let v=h[y];if(Us(e.emitsOptions,v))continue;const x=s[v];if(c)if(P(a,v))x!==a[v]&&(a[v]=x,u=!0);else{const E=Se(v);o[E]=Wn(c,l,E,x,e,!1)}else x!==a[v]&&(a[v]=x,u=!0)}}}else{co(e,s,o,a)&&(u=!0);let h;for(const y in l)(!s||!P(s,y)&&((h=as(y))===y||!P(s,h)))&&(c?n&&(n[y]!==void 0||n[h]!==void 0)&&(o[y]=Wn(c,l,y,void 0,e,!0)):delete o[y]);if(a!==l)for(const y in a)(!s||!P(s,y))&&(delete a[y],u=!0)}u&&Ce(e,"set","$attrs")}function co(e,s,n,t){const[o,a]=e.propsOptions;let i=!1,l;if(s)for(let c in s){if(Ns(c))continue;const u=s[c];let h;o&&P(o,h=Se(c))?!a||!a.includes(h)?n[h]=u:(l||(l={}))[h]=u:Us(e.emitsOptions,c)||(!(c in t)||u!==t[c])&&(t[c]=u,i=!0)}if(a){const c=q(n),u=l||B;for(let h=0;h<a.length;h++){const y=a[h];n[y]=Wn(o,c,y,u[y],e,!P(u,y))}}return i}function Wn(e,s,n,t,o,a){const i=e[n];if(i!=null){const l=P(i,"default");if(l&&t===void 0){const c=i.default;if(i.type!==Function&&!i.skipFactory&&I(c)){const{propsDefaults:u}=o;n in u?t=u[n]:(ds(o),t=u[n]=c.call(null,s),Xe())}else t=c}i[0]&&(a&&!l?t=!1:i[1]&&(t===""||t===as(n))&&(t=!0))}return t}function po(e,s,n=!1){const t=s.propsCache,o=t.get(e);if(o)return o;const a=e.props,i={},l=[];let c=!1;if(!I(e)){const h=y=>{c=!0;const[v,x]=po(y,s,!0);Z(i,v),x&&l.push(...x)};!n&&s.mixins.length&&s.mixins.forEach(h),e.extends&&h(e.extends),e.mixins&&e.mixins.forEach(h)}if(!a&&!c)return M(e)&&t.set(e,ts),ts;if(A(a))for(let h=0;h<a.length;h++){const y=Se(a[h]);uo(y)&&(i[y]=B)}else if(a)for(const h in a){const y=Se(h);if(uo(y)){const v=a[h],x=i[y]=A(v)||I(v)?{type:v}:Z({},v);if(x){const E=fo(Boolean,x.type),D=fo(String,x.type);x[0]=E>-1,x[1]=D<0||E<D,(E>-1||P(x,"default"))&&l.push(y)}}}const u=[i,l];return M(e)&&t.set(e,u),u}function uo(e){return e[0]!=="$"}function ho(e){const s=e&&e.toString().match(/^\s*(function|class) (\w+)/);return s?s[2]:e===null?"null":""}function mo(e,s){return ho(e)===ho(s)}function fo(e,s){return A(s)?s.findIndex(n=>mo(n,e)):I(s)&&mo(s,e)?0:-1}const go=e=>e[0]==="_"||e==="$stable",Vn=e=>A(e)?e.map(Ae):[Ae(e)],Di=(e,s,n)=>{if(s._n)return s;const t=Yt((...o)=>Vn(s(...o)),n);return t._c=!1,t},yo=(e,s,n)=>{const t=e._ctx;for(const o in e){if(go(o))continue;const a=e[o];if(I(a))s[o]=Di(o,a,t);else if(a!=null){const i=Vn(a);s[o]=()=>i}}},bo=(e,s)=>{const n=Vn(s);e.slots.default=()=>n},Ni=(e,s)=>{if(e.vnode.shapeFlag&32){const n=s._;n?(e.slots=q(s),Cs(s,"_",n)):yo(s,e.slots={})}else e.slots={},s&&bo(e,s);Cs(e.slots,sn,1)},zi=(e,s,n)=>{const{vnode:t,slots:o}=e;let a=!0,i=B;if(t.shapeFlag&32){const l=s._;l?n&&l===1?a=!1:(Z(o,s),!n&&l===1&&delete o._):(a=!s.$stable,yo(s,o)),i=s}else s&&(bo(e,s),i={default:1});if(a)for(const l in o)!go(l)&&!(l in i)&&delete o[l]};function $n(e,s,n,t,o=!1){if(A(e)){e.forEach((v,x)=>$n(v,s&&(A(s)?s[x]:s),n,t,o));return}if(Ws(t)&&!o)return;const a=t.shapeFlag&4?Qn(t.component)||t.component.proxy:t.el,i=o?null:a,{i:l,r:c}=e,u=s&&s.r,h=l.refs===B?l.refs={}:l.refs,y=l.setupState;if(u!=null&&u!==c&&(Q(u)?(h[u]=null,P(y,u)&&(y[u]=null)):re(u)&&(u.value=null)),I(c))Me(c,l,12,[i,h]);else{const v=Q(c),x=re(c);if(v||x){const E=()=>{if(e.f){const D=v?P(y,c)?y[c]:h[c]:c.value;o?A(D)&&pn(D,a):A(D)?D.includes(a)||D.push(a):v?(h[c]=[a],P(y,c)&&(y[c]=h[c])):(c.value=[a],e.k&&(h[e.k]=c.value))}else v?(h[c]=i,P(y,c)&&(y[c]=i)):x&&(c.value=i,e.k&&(h[e.k]=i))};i?(E.id=-1,ue(E,n)):E()}}}const ue=ni;function Ii(e){return Oi(e)}function Oi(e,s){const n=fn();n.__VUE__=!0;const{insert:t,remove:o,patchProp:a,createElement:i,createText:l,createComment:c,setText:u,setElementText:h,parentNode:y,nextSibling:v,setScopeId:x=je,insertStaticContent:E}=e,D=(r,p,d,f=null,m=null,j=null,J=!1,b=null,w=!!p.dynamicChildren)=>{if(r===p)return;r&&!Ge(r,p)&&(f=rn(r),Ie(r,m,j,!0),r=null),p.patchFlag===-2&&(w=!1,p.dynamicChildren=null);const{type:g,ref:S,shapeFlag:_}=p;switch(g){case Zs:Y(r,p,d,f);break;case Je:L(r,p,d,f);break;case Qs:r==null&&W(p,d,f,J);break;case be:T(r,p,d,f,m,j,J,b,w);break;default:_&1?te(r,p,d,f,m,j,J,b,w):_&6?K(r,p,d,f,m,j,J,b,w):(_&64||_&128)&&g.process(r,p,d,f,m,j,J,b,w,hs)}S!=null&&m&&$n(S,r&&r.ref,j,p||r,!p)},Y=(r,p,d,f)=>{if(r==null)t(p.el=l(p.children),d,f);else{const m=p.el=r.el;p.children!==r.children&&u(m,p.children)}},L=(r,p,d,f)=>{r==null?t(p.el=c(p.children||""),d,f):p.el=r.el},W=(r,p,d,f)=>{[r.el,r.anchor]=E(r.children,p,d,f,r.el,r.anchor)},V=({el:r,anchor:p},d,f)=>{let m;for(;r&&r!==p;)m=v(r),t(r,d,f),r=m;t(p,d,f)},N=({el:r,anchor:p})=>{let d;for(;r&&r!==p;)d=v(r),o(r),r=d;o(p)},te=(r,p,d,f,m,j,J,b,w)=>{J=J||p.type==="svg",r==null?Ne(p,d,f,m,j,J,b,w):G(r,p,m,j,J,b,w)},Ne=(r,p,d,f,m,j,J,b)=>{let w,g;const{type:S,props:_,shapeFlag:k,transition:z,dirs:C}=r;if(w=r.el=i(r.type,j,_&&_.is,_),k&8?h(w,r.children):k&16&&O(r.children,w,null,f,m,j&&S!=="foreignObject",J,b),C&&$e(r,null,f,"created"),ze(w,r,r.scopeId,J,f),_){for(const R in _)R!=="value"&&!Ns(R)&&a(w,R,null,_[R],j,r.children,f,m,qe);"value"in _&&a(w,"value",null,_.value),(g=_.onVnodeBeforeMount)&&De(g,f,r)}C&&$e(r,null,f,"beforeMount");const H=(!m||m&&!m.pendingBranch)&&z&&!z.persisted;H&&z.beforeEnter(w),t(w,p,d),((g=_&&_.onVnodeMounted)||H||C)&&ue(()=>{g&&De(g,f,r),H&&z.enter(w),C&&$e(r,null,f,"mounted")},m)},ze=(r,p,d,f,m)=>{if(d&&x(r,d),f)for(let j=0;j<f.length;j++)x(r,f[j]);if(m){let j=m.subTree;if(p===j){const J=m.vnode;ze(r,J,J.scopeId,J.slotScopeIds,m.parent)}}},O=(r,p,d,f,m,j,J,b,w=0)=>{for(let g=w;g<r.length;g++){const S=r[g]=b?Ue(r[g]):Ae(r[g]);D(null,S,p,d,f,m,j,J,b)}},G=(r,p,d,f,m,j,J)=>{const b=p.el=r.el;let{patchFlag:w,dynamicChildren:g,dirs:S}=p;w|=r.patchFlag&16;const _=r.props||B,k=p.props||B;let z;d&&Ke(d,!1),(z=k.onVnodeBeforeUpdate)&&De(z,d,p,r),S&&$e(p,r,d,"beforeUpdate"),d&&Ke(d,!0);const C=m&&p.type!=="foreignObject";if(g?U(r.dynamicChildren,g,b,d,f,C,j):J||F(r,p,b,null,d,f,C,j,!1),w>0){if(w&16)ie(b,p,_,k,d,f,m);else if(w&2&&_.class!==k.class&&a(b,"class",null,k.class,m),w&4&&a(b,"style",_.style,k.style,m),w&8){const H=p.dynamicProps;for(let R=0;R<H.length;R++){const ee=H[R],Te=_[ee],ms=k[ee];(ms!==Te||ee==="value")&&a(b,ee,Te,ms,m,r.children,d,f,qe)}}w&1&&r.children!==p.children&&h(b,p.children)}else!J&&g==null&&ie(b,p,_,k,d,f,m);((z=k.onVnodeUpdated)||S)&&ue(()=>{z&&De(z,d,p,r),S&&$e(p,r,d,"updated")},f)},U=(r,p,d,f,m,j,J)=>{for(let b=0;b<p.length;b++){const w=r[b],g=p[b],S=w.el&&(w.type===be||!Ge(w,g)||w.shapeFlag&70)?y(w.el):d;D(w,g,S,null,f,m,j,J,!0)}},ie=(r,p,d,f,m,j,J)=>{if(d!==f){if(d!==B)for(const b in d)!Ns(b)&&!(b in f)&&a(r,b,d[b],null,J,p.children,m,j,qe);for(const b in f){if(Ns(b))continue;const w=f[b],g=d[b];w!==g&&b!=="value"&&a(r,b,g,w,J,p.children,m,j,qe)}"value"in f&&a(r,"value",d.value,f.value)}},T=(r,p,d,f,m,j,J,b,w)=>{const g=p.el=r?r.el:l(""),S=p.anchor=r?r.anchor:l("");let{patchFlag:_,dynamicChildren:k,slotScopeIds:z}=p;z&&(b=b?b.concat(z):z),r==null?(t(g,d,f),t(S,d,f),O(p.children,d,S,m,j,J,b,w)):_>0&&_&64&&k&&r.dynamicChildren?(U(r.dynamicChildren,k,d,m,j,J,b),(p.key!=null||m&&p===m.subTree)&&jo(r,p,!0)):F(r,p,d,S,m,j,J,b,w)},K=(r,p,d,f,m,j,J,b,w)=>{p.slotScopeIds=b,r==null?p.shapeFlag&512?m.ctx.activate(p,d,f,J,w):he(p,d,f,m,j,J,w):ks(r,p,w)},he=(r,p,d,f,m,j,J)=>{const b=r.component=Ui(r,f,m);if(Vs(r)&&(b.ctx.renderer=hs),Li(b),b.asyncDep){if(m&&m.registerDep(b,oe),!r.el){const w=b.subTree=ce(Je);L(null,w,p,d)}return}oe(b,r,p,d,m,j,J)},ks=(r,p,d)=>{const f=p.component=r.component;if(Qa(r,p,d))if(f.asyncDep&&!f.asyncResolved){X(f,p,d);return}else f.next=p,Va(f.update),f.update();else p.el=r.el,f.vnode=p},oe=(r,p,d,f,m,j,J)=>{const b=()=>{if(r.isMounted){let{next:S,bu:_,u:k,parent:z,vnode:C}=r,H=S,R;Ke(r,!1),S?(S.el=C.el,X(r,S,J)):S=C,_&&mn(_),(R=S.props&&S.props.onVnodeBeforeUpdate)&&De(R,z,S,C),Ke(r,!0);const ee=Cn(r),Te=r.subTree;r.subTree=ee,D(Te,ee,y(Te.el),rn(Te),r,m,j),S.el=ee.el,H===null&&ei(r,ee.el),k&&ue(k,m),(R=S.props&&S.props.onVnodeUpdated)&&ue(()=>De(R,z,S,C),m)}else{let S;const{el:_,props:k}=p,{bm:z,m:C,parent:H}=r,R=Ws(p);if(Ke(r,!1),z&&mn(z),!R&&(S=k&&k.onVnodeBeforeMount)&&De(S,H,p),Ke(r,!0),_&&it){const ee=()=>{r.subTree=Cn(r),it(_,r.subTree,r,m,null)};R?p.type.__asyncLoader().then(()=>!r.isUnmounted&&ee()):ee()}else{const ee=r.subTree=Cn(r);D(null,ee,d,f,r,m,j),p.el=ee.el}if(C&&ue(C,m),!R&&(S=k&&k.onVnodeMounted)){const ee=p;ue(()=>De(S,H,ee),m)}(p.shapeFlag&256||H&&Ws(H.vnode)&&H.vnode.shapeFlag&256)&&r.a&&ue(r.a,m),r.isMounted=!0,p=d=f=null}},w=r.effect=new wn(b,()=>On(g),r.scope),g=r.update=()=>w.run();g.id=r.uid,Ke(r,!0),g()},X=(r,p,d)=>{p.component=r;const f=r.vnode.props;r.vnode=p,r.next=null,Ai(r,p.props,f,d),zi(r,p.children,d),is(),qt(),rs()},F=(r,p,d,f,m,j,J,b,w=!1)=>{const g=r&&r.children,S=r?r.shapeFlag:0,_=p.children,{patchFlag:k,shapeFlag:z}=p;if(k>0){if(k&128){an(g,_,d,f,m,j,J,b,w);return}else if(k&256){ss(g,_,d,f,m,j,J,b,w);return}}z&8?(S&16&&qe(g,m,j),_!==g&&h(d,_)):S&16?z&16?an(g,_,d,f,m,j,J,b,w):qe(g,m,j,!0):(S&8&&h(d,""),z&16&&O(_,d,f,m,j,J,b,w))},ss=(r,p,d,f,m,j,J,b,w)=>{r=r||ts,p=p||ts;const g=r.length,S=p.length,_=Math.min(g,S);let k;for(k=0;k<_;k++){const z=p[k]=w?Ue(p[k]):Ae(p[k]);D(r[k],z,d,null,m,j,J,b,w)}g>S?qe(r,m,j,!0,!1,_):O(p,d,f,m,j,J,b,w,_)},an=(r,p,d,f,m,j,J,b,w)=>{let g=0;const S=p.length;let _=r.length-1,k=S-1;for(;g<=_&&g<=k;){const z=r[g],C=p[g]=w?Ue(p[g]):Ae(p[g]);if(Ge(z,C))D(z,C,d,null,m,j,J,b,w);else break;g++}for(;g<=_&&g<=k;){const z=r[_],C=p[k]=w?Ue(p[k]):Ae(p[k]);if(Ge(z,C))D(z,C,d,null,m,j,J,b,w);else break;_--,k--}if(g>_){if(g<=k){const z=k+1,C=z<S?p[z].el:f;for(;g<=k;)D(null,p[g]=w?Ue(p[g]):Ae(p[g]),d,C,m,j,J,b,w),g++}}else if(g>k)for(;g<=_;)Ie(r[g],m,j,!0),g++;else{const z=g,C=g,H=new Map;for(g=C;g<=k;g++){const me=p[g]=w?Ue(p[g]):Ae(p[g]);me.key!=null&&H.set(me.key,g)}let R,ee=0;const Te=k-C+1;let ms=!1,Lo=0;const xs=new Array(Te);for(g=0;g<Te;g++)xs[g]=0;for(g=z;g<=_;g++){const me=r[g];if(ee>=Te){Ie(me,m,j,!0);continue}let Oe;if(me.key!=null)Oe=H.get(me.key);else for(R=C;R<=k;R++)if(xs[R-C]===0&&Ge(me,p[R])){Oe=R;break}Oe===void 0?Ie(me,m,j,!0):(xs[Oe-C]=g+1,Oe>=Lo?Lo=Oe:ms=!0,D(me,p[Oe],d,null,m,j,J,b,w),ee++)}const Wo=ms?Ci(xs):ts;for(R=Wo.length-1,g=Te-1;g>=0;g--){const me=C+g,Oe=p[me],Vo=me+1<S?p[me+1].el:f;xs[g]===0?D(null,Oe,d,Vo,m,j,J,b,w):ms&&(R<0||g!==Wo[R]?ns(Oe,d,Vo,2):R--)}}},ns=(r,p,d,f,m=null)=>{const{el:j,type:J,transition:b,children:w,shapeFlag:g}=r;if(g&6){ns(r.component.subTree,p,d,f);return}if(g&128){r.suspense.move(p,d,f);return}if(g&64){J.move(r,p,d,hs);return}if(J===be){t(j,p,d);for(let _=0;_<w.length;_++)ns(w[_],p,d,f);t(r.anchor,p,d);return}if(J===Qs){V(r,p,d);return}if(f!==2&&g&1&&b)if(f===0)b.beforeEnter(j),t(j,p,d),ue(()=>b.enter(j),m);else{const{leave:_,delayLeave:k,afterLeave:z}=b,C=()=>t(j,p,d),H=()=>{_(j,()=>{C(),z&&z()})};k?k(j,C,H):H()}else t(j,p,d)},Ie=(r,p,d,f=!1,m=!1)=>{const{type:j,props:J,ref:b,children:w,dynamicChildren:g,shapeFlag:S,patchFlag:_,dirs:k}=r;if(b!=null&&$n(b,null,d,r,!0),S&256){p.ctx.deactivate(r);return}const z=S&1&&k,C=!Ws(r);let H;if(C&&(H=J&&J.onVnodeBeforeUnmount)&&De(H,p,r),S&6)pl(r.component,d,f);else{if(S&128){r.suspense.unmount(d,f);return}z&&$e(r,null,p,"beforeUnmount"),S&64?r.type.remove(r,p,d,m,hs,f):g&&(j!==be||_>0&&_&64)?qe(g,p,d,!1,!0):(j===be&&_&384||!m&&S&16)&&qe(w,p,d),f&&Uo(r)}(C&&(H=J&&J.onVnodeUnmounted)||z)&&ue(()=>{H&&De(H,p,r),z&&$e(r,null,p,"unmounted")},d)},Uo=r=>{const{type:p,el:d,anchor:f,transition:m}=r;if(p===be){cl(d,f);return}if(p===Qs){N(r);return}const j=()=>{o(d),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(r.shapeFlag&1&&m&&!m.persisted){const{leave:J,delayLeave:b}=m,w=()=>J(d,j);b?b(r.el,j,w):w()}else j()},cl=(r,p)=>{let d;for(;r!==p;)d=v(r),o(r),r=d;o(p)},pl=(r,p,d)=>{const{bum:f,scope:m,update:j,subTree:J,um:b}=r;f&&mn(f),m.stop(),j&&(j.active=!1,Ie(J,r,p,d)),b&&ue(b,p),ue(()=>{r.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&r.asyncDep&&!r.asyncResolved&&r.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},qe=(r,p,d,f=!1,m=!1,j=0)=>{for(let J=j;J<r.length;J++)Ie(r[J],p,d,f,m)},rn=r=>r.shapeFlag&6?rn(r.component.subTree):r.shapeFlag&128?r.suspense.next():v(r.anchor||r.el),Bo=(r,p,d)=>{r==null?p._vnode&&Ie(p._vnode,null,null,!0):D(p._vnode||null,r,p,null,null,null,d),qt(),Rt(),p._vnode=r},hs={p:D,um:Ie,m:ns,r:Uo,mt:he,mc:O,pc:F,pbc:U,n:rn,o:e};let at,it;return s&&([at,it]=s(hs)),{render:Bo,hydrate:at,createApp:Si(Bo,at)}}function Ke({effect:e,update:s},n){e.allowRecurse=s.allowRecurse=n}function jo(e,s,n=!1){const t=e.children,o=s.children;if(A(t)&&A(o))for(let a=0;a<t.length;a++){const i=t[a];let l=o[a];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=o[a]=Ue(o[a]),l.el=i.el),n||jo(i,l)),l.type===Zs&&(l.el=i.el)}}function Ci(e){const s=e.slice(),n=[0];let t,o,a,i,l;const c=e.length;for(t=0;t<c;t++){const u=e[t];if(u!==0){if(o=n[n.length-1],e[o]<u){s[t]=o,n.push(t);continue}for(a=0,i=n.length-1;a<i;)l=a+i>>1,e[n[l]]<u?a=l+1:i=l;u<e[n[a]]&&(a>0&&(s[t]=n[a-1]),n[a]=t)}}for(a=n.length,i=n[a-1];a-- >0;)n[a]=i,i=s[i];return n}const Pi=e=>e.__isTeleport,be=Symbol.for("v-fgt"),Zs=Symbol.for("v-txt"),Je=Symbol.for("v-cmt"),Qs=Symbol.for("v-stc"),Js=[];let _e=null;function de(e=!1){Js.push(_e=e?null:[])}function Ei(){Js.pop(),_e=Js[Js.length-1]||null}let _s=1;function vo(e){_s+=e}function wo(e){return e.dynamicChildren=_s>0?_e||ts:null,Ei(),_s>0&&_e&&_e.push(e),e}function xe(e,s,n,t,o,a){return wo(se(e,s,n,t,o,a,!0))}function en(e,s,n,t,o){return wo(ce(e,s,n,t,o,!0))}function Kn(e){return e?e.__v_isVNode===!0:!1}function Ge(e,s){return e.type===s.type&&e.key===s.key}const sn="__vInternal",Jo=({key:e})=>e??null,nn=({ref:e,ref_key:s,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Q(e)||re(e)||I(e)?{i:ge,r:e,k:s,f:!!n}:e:null);function se(e,s=null,n=null,t=0,o=null,a=e===be?0:1,i=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:s,key:s&&Jo(s),ref:s&&nn(s),scopeId:Mt,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:t,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:ge};return l?(Xn(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=Q(n)?8:16),_s>0&&!i&&_e&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&_e.push(c),c}const ce=qi;function qi(e,s=null,n=null,t=0,o=null,a=!1){if((!e||e===gi)&&(e=Je),Kn(e)){const l=Ye(e,s,!0);return n&&Xn(l,n),_s>0&&!a&&_e&&(l.shapeFlag&6?_e[_e.indexOf(e)]=l:_e.push(l)),l.patchFlag|=-2,l}if(Gi(e)&&(e=e.__vccOpts),s){s=Ri(s);let{class:l,style:c}=s;l&&!Q(l)&&(s.class=fs(l)),M(c)&&(It(c)&&!A(c)&&(c=Z({},c)),s.style=gn(c))}const i=Q(e)?1:si(e)?128:Pi(e)?64:M(e)?4:I(e)?2:0;return se(e,s,n,t,o,i,a,!0)}function Ri(e){return e?It(e)||sn in e?Z({},e):e:null}function Ye(e,s,n=!1){const{props:t,ref:o,patchFlag:a,children:i}=e,l=s?Hi(t||{},s):t;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Jo(l),ref:s&&s.ref?n&&o?A(o)?o.concat(nn(s)):[o,nn(s)]:nn(s):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:s&&e.type!==be?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ye(e.ssContent),ssFallback:e.ssFallback&&Ye(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function tn(e=" ",s=0){return ce(Zs,null,e,s)}function Fi(e,s){const n=ce(Qs,null,e);return n.staticCount=s,n}function Gn(e="",s=!1){return s?(de(),en(Je,null,e)):ce(Je,null,e)}function Ae(e){return e==null||typeof e=="boolean"?ce(Je):A(e)?ce(be,null,e.slice()):typeof e=="object"?Ue(e):ce(Zs,null,String(e))}function Ue(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ye(e)}function Xn(e,s){let n=0;const{shapeFlag:t}=e;if(s==null)s=null;else if(A(s))n=16;else if(typeof s=="object")if(t&65){const o=s.default;o&&(o._c&&(o._d=!1),Xn(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=s._;!o&&!(sn in s)?s._ctx=ge:o===3&&ge&&(ge.slots._===1?s._=1:(s._=2,e.patchFlag|=1024))}else I(s)?(s={default:s,_ctx:ge},n=32):(s=String(s),t&64?(n=16,s=[tn(s)]):n=8);e.children=s,e.shapeFlag|=n}function Hi(...e){const s={};for(let n=0;n<e.length;n++){const t=e[n];for(const o in t)if(o==="class")s.class!==t.class&&(s.class=fs([s.class,t.class]));else if(o==="style")s.style=gn([s.style,t.style]);else if(As(o)){const a=s[o],i=t[o];i&&a!==i&&!(A(a)&&a.includes(i))&&(s[o]=a?[].concat(a,i):i)}else o!==""&&(s[o]=t[o])}return s}function De(e,s,n,t=null){fe(e,s,7,[n,t])}const Mi=lo();let Yi=0;function Ui(e,s,n){const t=e.type,o=(s?s.appContext:e.appContext)||Mi,a={uid:Yi++,vnode:e,type:t,parent:s,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new ra(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:s?s.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:po(t,o),emitsOptions:Ht(t,o),emit:null,emitted:null,propsDefaults:B,inheritAttrs:t.inheritAttrs,ctx:B,data:B,props:B,attrs:B,slots:B,refs:B,setupState:B,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=s?s.root:a,a.emit=Ga.bind(null,a),e.ce&&e.ce(a),a}let ne=null;const Bi=()=>ne||ge;let Zn,us,_o="__VUE_INSTANCE_SETTERS__";(us=fn()[_o])||(us=fn()[_o]=[]),us.push(e=>ne=e),Zn=e=>{us.length>1?us.forEach(s=>s(e)):us[0](e)};const ds=e=>{Zn(e),e.scope.on()},Xe=()=>{ne&&ne.scope.off(),Zn(null)};function To(e){return e.vnode.shapeFlag&4}let Ts=!1;function Li(e,s=!1){Ts=s;const{props:n,children:t}=e.vnode,o=To(e);xi(e,n,o,s),Ni(e,t);const a=o?Wi(e,s):void 0;return Ts=!1,a}function Wi(e,s){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ot(new Proxy(e.ctx,bi));const{setup:t}=n;if(t){const o=e.setupContext=t.length>1?$i(e):null;ds(e),is();const a=Me(t,e,0,[e.props,o]);if(rs(),Xe(),lt(a)){if(a.then(Xe,Xe),s)return a.then(i=>{So(e,i,s)}).catch(i=>{Ys(i,e,0)});e.asyncDep=a}else So(e,a,s)}else xo(e,s)}function So(e,s,n){I(s)?e.type.__ssrInlineRender?e.ssrRender=s:e.render=s:M(s)&&(e.setupState=Ct(s)),xo(e,n)}let ko;function xo(e,s,n){const t=e.type;if(!e.render){if(!s&&ko&&!t.render){const o=t.template||Bn(e).template;if(o){const{isCustomElement:a,compilerOptions:i}=e.appContext.config,{delimiters:l,compilerOptions:c}=t,u=Z(Z({isCustomElement:a,delimiters:l},i),c);t.render=ko(o,u)}}e.render=t.render||je}ds(e),is(),ji(e),rs(),Xe()}function Vi(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(s,n){return pe(e,"get","$attrs"),s[n]}}))}function $i(e){const s=n=>{e.exposed=n||{}};return{get attrs(){return Vi(e)},slots:e.slots,emit:e.emit,expose:s}}function Qn(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ct(Ot(e.exposed)),{get(s,n){if(n in s)return s[n];if(n in vs)return vs[n](e)},has(s,n){return n in s||n in vs}}))}function Ki(e,s=!0){return I(e)?e.displayName||e.name:e.name||s&&e.__name}function Gi(e){return I(e)&&"__vccOpts"in e}const Xi=(e,s)=>Ua(e,s,Ts);function Zi(e,s,n){const t=arguments.length;return t===2?M(s)&&!A(s)?Kn(s)?ce(e,null,[s]):ce(e,s):ce(e,null,s):(t>3?n=Array.prototype.slice.call(arguments,2):t===3&&Kn(n)&&(n=[n]),ce(e,s,n))}const Qi=Symbol.for("v-scx"),er=()=>Xs(Qi),sr="3.3.4",nr="http://www.w3.org/2000/svg",Ze=typeof document<"u"?document:null,Ao=Ze&&Ze.createElement("template"),tr={insert:(e,s,n)=>{s.insertBefore(e,n||null)},remove:e=>{const s=e.parentNode;s&&s.removeChild(e)},createElement:(e,s,n,t)=>{const o=s?Ze.createElementNS(nr,e):Ze.createElement(e,n?{is:n}:void 0);return e==="select"&&t&&t.multiple!=null&&o.setAttribute("multiple",t.multiple),o},createText:e=>Ze.createTextNode(e),createComment:e=>Ze.createComment(e),setText:(e,s)=>{e.nodeValue=s},setElementText:(e,s)=>{e.textContent=s},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ze.querySelector(e),setScopeId(e,s){e.setAttribute(s,"")},insertStaticContent(e,s,n,t,o,a){const i=n?n.previousSibling:s.lastChild;if(o&&(o===a||o.nextSibling))for(;s.insertBefore(o.cloneNode(!0),n),!(o===a||!(o=o.nextSibling)););else{Ao.innerHTML=t?`<svg>${e}</svg>`:e;const l=Ao.content;if(t){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}s.insertBefore(l,n)}return[i?i.nextSibling:s.firstChild,n?n.previousSibling:s.lastChild]}};function or(e,s,n){const t=e._vtc;t&&(s=(s?[s,...t]:[...t]).join(" ")),s==null?e.removeAttribute("class"):n?e.setAttribute("class",s):e.className=s}function ar(e,s,n){const t=e.style,o=Q(n);if(n&&!o){if(s&&!Q(s))for(const a in s)n[a]==null&&et(t,a,"");for(const a in n)et(t,a,n[a])}else{const a=t.display;o?s!==n&&(t.cssText=n):s&&e.removeAttribute("style"),"_vod"in e&&(t.display=a)}}const Do=/\s*!important$/;function et(e,s,n){if(A(n))n.forEach(t=>et(e,s,t));else if(n==null&&(n=""),s.startsWith("--"))e.setProperty(s,n);else{const t=ir(e,s);Do.test(n)?e.setProperty(as(t),n.replace(Do,""),"important"):e[t]=n}}const No=["Webkit","Moz","ms"],st={};function ir(e,s){const n=st[s];if(n)return n;let t=Se(s);if(t!=="filter"&&t in e)return st[s]=t;t=Is(t);for(let o=0;o<No.length;o++){const a=No[o]+t;if(a in e)return st[s]=a}return s}const zo="http://www.w3.org/1999/xlink";function rr(e,s,n,t,o){if(t&&s.startsWith("xlink:"))n==null?e.removeAttributeNS(zo,s.slice(6,s.length)):e.setAttributeNS(zo,s,n);else{const a=ia(s);n==null||a&&!dt(n)?e.removeAttribute(s):e.setAttribute(s,a?"":n)}}function lr(e,s,n,t,o,a,i){if(s==="innerHTML"||s==="textContent"){t&&i(t,o,a),e[s]=n??"";return}const l=e.tagName;if(s==="value"&&l!=="PROGRESS"&&!l.includes("-")){e._value=n;const u=l==="OPTION"?e.getAttribute("value"):e.value,h=n??"";u!==h&&(e.value=h),n==null&&e.removeAttribute(s);return}let c=!1;if(n===""||n==null){const u=typeof e[s];u==="boolean"?n=dt(n):n==null&&u==="string"?(n="",c=!0):u==="number"&&(n=0,c=!0)}try{e[s]=n}catch{}c&&e.removeAttribute(s)}function cr(e,s,n,t){e.addEventListener(s,n,t)}function pr(e,s,n,t){e.removeEventListener(s,n,t)}function ur(e,s,n,t,o=null){const a=e._vei||(e._vei={}),i=a[s];if(t&&i)i.value=t;else{const[l,c]=dr(s);if(t){const u=a[s]=fr(t,o);cr(e,l,u,c)}else i&&(pr(e,l,i,c),a[s]=void 0)}}const Io=/(?:Once|Passive|Capture)$/;function dr(e){let s;if(Io.test(e)){s={};let t;for(;t=e.match(Io);)e=e.slice(0,e.length-t[0].length),s[t[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):as(e.slice(2)),s]}let nt=0;const hr=Promise.resolve(),mr=()=>nt||(hr.then(()=>nt=0),nt=Date.now());function fr(e,s){const n=t=>{if(!t._vts)t._vts=Date.now();else if(t._vts<=n.attached)return;fe(gr(t,n.value),s,5,[t])};return n.value=e,n.attached=mr(),n}function gr(e,s){if(A(s)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},s.map(t=>o=>!o._stopped&&t&&t(o))}else return s}const Oo=/^on[a-z]/,yr=(e,s,n,t,o=!1,a,i,l,c)=>{s==="class"?or(e,t,o):s==="style"?ar(e,n,t):As(s)?cn(s)||ur(e,s,n,t,i):(s[0]==="."?(s=s.slice(1),!0):s[0]==="^"?(s=s.slice(1),!1):br(e,s,t,o))?lr(e,s,t,a,i,l,c):(s==="true-value"?e._trueValue=t:s==="false-value"&&(e._falseValue=t),rr(e,s,t,o))};function br(e,s,n,t){return t?!!(s==="innerHTML"||s==="textContent"||s in e&&Oo.test(s)&&I(n)):s==="spellcheck"||s==="draggable"||s==="translate"||s==="form"||s==="list"&&e.tagName==="INPUT"||s==="type"&&e.tagName==="TEXTAREA"||Oo.test(s)&&Q(n)?!1:s in e}const Be="transition",Ss="animation",tt=(e,{slots:s})=>Zi(ai,jr(e),s);tt.displayName="Transition";const Co={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};tt.props=Z({},Wt,Co);const Qe=(e,s=[])=>{A(e)?e.forEach(n=>n(...s)):e&&e(...s)},Po=e=>e?A(e)?e.some(s=>s.length>1):e.length>1:!1;function jr(e){const s={};for(const T in e)T in Co||(s[T]=e[T]);if(e.css===!1)return s;const{name:n="v",type:t,duration:o,enterFromClass:a=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=a,appearActiveClass:u=i,appearToClass:h=l,leaveFromClass:y=`${n}-leave-from`,leaveActiveClass:v=`${n}-leave-active`,leaveToClass:x=`${n}-leave-to`}=e,E=vr(o),D=E&&E[0],Y=E&&E[1],{onBeforeEnter:L,onEnter:W,onEnterCancelled:V,onLeave:N,onLeaveCancelled:te,onBeforeAppear:Ne=L,onAppear:ze=W,onAppearCancelled:O=V}=s,G=(T,K,he)=>{es(T,K?h:l),es(T,K?u:i),he&&he()},U=(T,K)=>{T._isLeaving=!1,es(T,y),es(T,x),es(T,v),K&&K()},ie=T=>(K,he)=>{const ks=T?ze:W,oe=()=>G(K,T,he);Qe(ks,[K,oe]),Eo(()=>{es(K,T?c:a),Le(K,T?h:l),Po(ks)||qo(K,t,D,oe)})};return Z(s,{onBeforeEnter(T){Qe(L,[T]),Le(T,a),Le(T,i)},onBeforeAppear(T){Qe(Ne,[T]),Le(T,c),Le(T,u)},onEnter:ie(!1),onAppear:ie(!0),onLeave(T,K){T._isLeaving=!0;const he=()=>U(T,K);Le(T,y),_r(),Le(T,v),Eo(()=>{T._isLeaving&&(es(T,y),Le(T,x),Po(N)||qo(T,t,Y,he))}),Qe(N,[T,he])},onEnterCancelled(T){G(T,!1),Qe(V,[T])},onAppearCancelled(T){G(T,!0),Qe(O,[T])},onLeaveCancelled(T){U(T),Qe(te,[T])}})}function vr(e){if(e==null)return null;if(M(e))return[ot(e.enter),ot(e.leave)];{const s=ot(e);return[s,s]}}function ot(e){return sa(e)}function Le(e,s){s.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(s)}function es(e,s){s.split(/\s+/).forEach(t=>t&&e.classList.remove(t));const{_vtc:n}=e;n&&(n.delete(s),n.size||(e._vtc=void 0))}function Eo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let wr=0;function qo(e,s,n,t){const o=e._endId=++wr,a=()=>{o===e._endId&&t()};if(n)return setTimeout(a,n);const{type:i,timeout:l,propCount:c}=Jr(e,s);if(!i)return t();const u=i+"end";let h=0;const y=()=>{e.removeEventListener(u,v),a()},v=x=>{x.target===e&&++h>=c&&y()};setTimeout(()=>{h<c&&y()},l+1),e.addEventListener(u,v)}function Jr(e,s){const n=window.getComputedStyle(e),t=E=>(n[E]||"").split(", "),o=t(`${Be}Delay`),a=t(`${Be}Duration`),i=Ro(o,a),l=t(`${Ss}Delay`),c=t(`${Ss}Duration`),u=Ro(l,c);let h=null,y=0,v=0;s===Be?i>0&&(h=Be,y=i,v=a.length):s===Ss?u>0&&(h=Ss,y=u,v=c.length):(y=Math.max(i,u),h=y>0?i>u?Be:Ss:null,v=h?h===Be?a.length:c.length:0);const x=h===Be&&/\b(transform|all)(,|$)/.test(t(`${Be}Property`).toString());return{type:h,timeout:y,propCount:v,hasTransform:x}}function Ro(e,s){for(;e.length<s.length;)e=e.concat(e);return Math.max(...s.map((n,t)=>Fo(n)+Fo(e[t])))}function Fo(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function _r(){return document.body.offsetHeight}const Tr=["ctrl","shift","alt","meta"],Sr={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,s)=>Tr.some(n=>e[`${n}Key`]&&!s.includes(n))},kr=(e,s)=>(n,...t)=>{for(let o=0;o<s.length;o++){const a=Sr[s[o]];if(a&&a(n,s))return}return e(n,...t)},xr=Z({patchProp:yr},tr);let Ho;function Ar(){return Ho||(Ho=Ii(xr))}const Dr=(...e)=>{const s=Ar().createApp(...e),{mount:n}=s;return s.mount=t=>{const o=Nr(t);if(!o)return;const a=s._component;!I(a)&&!a.render&&!a.template&&(a.template=o.innerHTML),o.innerHTML="";const i=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},s};function Nr(e){return Q(e)?document.querySelector(e):e}const on=(e,s)=>{const n=e.__vccOpts||e;for(const[t,o]of s)n[t]=o;return n},zr=Fn({props:{report:{type:String,required:!0}},methods:{createIssue(){const e=new FormData(this.$refs.issueForm),s=e.get("title");let n="";const t=e.get("description");t&&(n+=`**Description**
${t}

`),n+=`**Troubleshooter's report**
${this.report}

`;const o=e.get("mcu"),a=e.get("framework"),i=e.get("ide");(o||a||i)&&(n+=`**Environment**
`,o&&(n+="* Microcontroller: "+o+`
`),a&&(n+="* Core/Framework: "+a+`
`),i&&(n+="* IDE: "+i+`
`),n+=`
`);const l=e.get("repro");l&&(n+="**Reproduction code**\n```c++\n",n+=l,n+="\n```\n\n");const c=e.get("remarks");c&&(n+=`**Remarks**
${c}

`);const h="https://github.com/bblanchon/ArduinoJson/issues/new?"+new URLSearchParams({title:s,body:n}).toString();console.log("URL",h),window.open(h,"_blank"),$("#assistance-modal").modal("hide")}}}),Ir={class:"modal fade"},Or={class:"modal-dialog modal-dialog-scrollable modal-lg"},Cr=[Fi('<div class="modal-header bg-primary text-white"><h5 class="modal-title">Contact support</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div><div class="modal-body"><div class="alert alert-info"> This form simplifies the creation of an issue on ArduinoJson&#39;s GitHub project page. It ensures you provide all the required information and prefills the issue&#39;s text. After that, you just need to submit the issue.<br><b>A GitHub account is required.</b></div><div class="form-group"><label for="title-input">Title</label><input type="text" name="title" class="form-control" id="title-input" aria-describedby="title-help" required><small id="title-help" class="form-text text-muted">Summarize your issue in one sentence.</small></div><div class="form-group"><label for="description-input">Description</label><textarea name="description" rows="3" class="form-control" id="description-input" aria-describedby="description-help" required placeholder="When I do ..., I expect ..., but instead I get ..."></textarea><small id="description-help" class="form-text text-muted">Describe your issue with a few sentences.</small></div><div class="form-group"><label for="mcu-input">Microcontroller</label><input type="text" name="mcu" class="form-control" id="mcu-input" aria-describedby="mcu-help" placeholder="ESP8266" required><small id="mcu-help" class="form-text text-muted">Which processor or with board do you use?</small></div><div class="form-group"><label for="framework-input">Arduino Core / Framework</label><input type="text" name="framework" class="form-control" id="framework-input" aria-describedby="framework-help" placeholder="ESP8266 core for Arduino v3.0.2"><small id="framework-help" class="form-text text-muted">Please include version number.</small></div><div class="form-group"><label for="ide-input">IDE</label><input type="text" name="ide" class="form-control" id="ide-input" aria-describedby="ide-help" placeholder="Arduino IDE 1.8.16"><small id="ide-help" class="form-text text-muted">Please include version number.</small></div><div class="form-group"><label for="repro-input">Reproduction code</label><textarea name="repro" rows="10" class="form-control text-monospace" style="font-size:80%;" id="repro-input" aria-describedby="repro-help" placeholder="DynamicJsonDocuemnt doc(1024);\\n..."></textarea><small id="repro-help" class="form-text text-muted">Write a few lines of code that demonstrate the issue.</small></div><div class="form-group"><label for="remarks-input">Remarks</label><textarea name="remarks" rows="4" class="form-control" id="remarks-input" aria-describedby="remarks-help"></textarea><small id="remarks-help" class="form-text text-muted">Anything else you need to tell us?</small></div></div><div class="modal-footer"><div class="text-right"><button type="submit" class="btn btn-primary">Submit</button><small class="form-text text-muted"> This button redirects you to GitHub. </small></div></div>',3)];function Pr(e,s,n,t,o,a){return de(),xe("div",Ir,[se("div",Or,[se("form",{class:"modal-content",ref:"issueForm",onSubmit:s[0]||(s[0]=kr((...i)=>e.createIssue&&e.createIssue(...i),["prevent"]))},Cr,544)])])}const Er=on(zr,[["render",Pr]]),qr=Fn({inject:["debug"],emits:["check"],props:{option:{type:Object,required:!0}}}),Rr={class:"form-check"},Fr=["id","checked","disabled"],Hr=["for","innerHTML"],Mr={key:0,class:"d-block mb-2 small text-muted"};function Yr(e,s,n,t,o,a){return de(),xe("div",Rr,[se("input",{type:"radio",id:e.option.inputId,class:"form-check-input",checked:e.option.selected,onClick:s[0]||(s[0]=i=>e.$emit("check")),disabled:e.option.missing},null,8,Fr),se("label",{class:"form-check-label",for:e.option.inputId,innerHTML:e.option.label},null,8,Hr),e.debug?(de(),xe("div",Mr,Ps(e.option.summary),1)):Gn("",!0)])}const Ur=on(qr,[["render",Yr]]),gl="",Br=Fn({inject:["debug"],emits:["choose"],props:{step:{type:Object,required:!0},active:{type:Boolean,default:!1}},components:{TroubleshooterStepOption:Ur},async mounted(){const{top:e,bottom:s}=this.$el.getBoundingClientRect();e+50<window.innerHeight||this.$el.scrollIntoView({behavior:"smooth"})}}),Lr={key:0,class:"troubleshooter-step mb-4"},Wr={class:"small"},Vr={class:"troubleshooter-step-number"},$r={key:0,class:"text-muted text-monospace"},Kr=["innerHTML"],Gr={class:"troubleshooter-step-options"},Xr=["innerHTML"];function Zr(e,s,n,t,o,a){const i=Hn("TroubleshooterStepOption");return e.step.options?(de(),xe("div",Lr,[se("h2",Wr,[se("div",Vr,[se("div",{class:fs(["text-white rounded-circle",e.active?"bg-primary":"bg-secondary"])},Ps(e.step.number),3)]),e.debug?(de(),xe("span",$r,Ps(e.step.filename),1)):Gn("",!0)]),se("div",{class:"troubleshooter-step-content",innerHTML:e.step.content},null,8,Kr),se("div",Gr,[(de(!0),xe(be,null,no(e.step.options,l=>(de(),en(i,{key:l.hash,option:l,onClick:c=>e.$emit("choose",l)},null,8,["option","onClick"]))),128))])])):(de(),xe("div",{key:1,innerHTML:e.step.content,class:"troubleshooter-step-content"},null,8,Xr))}const Qr=on(Br,[["render",Zr]]),Mo=[{content:`<p>When does your issue happen?</p>
`,options:[{id:"compiletime",page:1,label:"At compile time",summary:"The issue happens at compile time"},{id:"runtime",page:167,label:"At run time",summary:"The issue happens at run time"}]},{content:`<p>Please look at the <strong>first</strong> error in the compiler output, and tell me what it is...</p>
`,options:[{id:"requires-cpp-compiler",page:36,label:"ArduinoJson requires a C++ compiler...",summary:'Error says "ArduinoJson requires a C++ compiler..."'},{id:"assignment-of-read-only-location",page:3,label:"assignment of read-only location",summary:'Error says "assignment of read-only location"'},{id:"ambiguous-string-assign",page:2,label:"ambiguous overload for <code>operator=</code> (operand types are <code>String</code> and ...)",summary:'Error says "ambiguous overload for `operator=` (operand types are `String` and ...)"'},{id:"begin-not-found",page:15,label:"<code>begin</code>: no matching overloaded function found",summary:'Error says "`begin`: no matching overloaded function found"'},{id:"error-constants",page:34,label:"<code>bits/error_constants.h</code>: No such file or directory",summary:'Error says "`bits/error_constants.h`: No such file or directory'},{id:"print-ambiguous",page:35,label:"call of overloaded <code>print(...)</code> is ambiguous",summary:'Error says "call of overloaded `print(...)` is ambiguous"'},{id:"cannot-bind-object-ref",page:32,label:"cannot bind non-const lvalue reference of type <code>ArduinoJson::JsonObject&amp;</code> ...",summary:'Error says "cannot bind non-const lvalue reference of type `ArduinoJson::JsonObject&` ..."'},{id:"class-has-no-member-named-read",page:27,label:"<code>class Xxx</code> has no member named <code>read</code>",summary:'Error says "`class Xxx` has no member named `read`"'},{id:"pointer-to-object",page:31,label:"<code>const void*</code> is not a pointer-to-object type",summary:'Error says "`const void*` is not a pointer-to-object type"'},{id:"doesnt-name-a-type",page:10,label:"<code>doc</code> does not name a type",summary:'Error says "`doc` does not name a type"'},{id:"dynamicjsonbuffer",page:9,label:"<code>DynamicJsonBuffer</code> is a class from ArduinoJson 5",summary:'Error says "`DynamicJsonBuffer` is a class from ArduinoJson 5"'},{id:"dynamicjsondocument-not-declared",page:28,label:"<code>DynamicJsonDocument</code> was not declared in this scope",summary:'Error says "`DynamicJsonDocument` was not declared in this scope"'},{id:"char-pointer-conversion",page:6,label:"invalid conversion from <code>const char*</code> to <code>char*</code> [-fpermissive]",summary:'Error says "invalid conversion from `const char*` to `char*` [-fpermissive]"'},{id:"invalid-conversion",page:14,label:"invalid use of incomplete type <code>class InvalidConversion&lt;...&gt;</code>",summary:'Error says "invalid use of incomplete type `class InvalidConversion<...>`"'},{id:"jsondocument-copy",page:16,label:"<code>JsonDocument::JsonDocument(const JsonDocument&amp;)</code> is private",summary:'Error says "`JsonDocument::JsonDocument(const JsonDocument&)` is private"'},{id:"macro-min",page:17,label:"macro <code>min</code> passed 3 arguments, but takes just 2",summary:'Error says "macro `min` passed 3 arguments, but takes just 2"'},{id:"basicjsondocument-default-constructor",page:4,label:"no default constructor exists for class <code>BasicJsonDocument</code>",summary:'Error says "no default constructor exists for class `BasicJsonDocument`"'},{id:"no-matching-function",page:19,label:"no matching function for call to ...",summary:'Error says "no matching function for call to ..."'},{id:"passing-volatile-as-this-argument-discards-qualifiers",page:33,label:"passing <code>volatile ...</code> as <code>this</code> argument discards qualifiers [-fpermissive]",summary:'Error says "passing `volatile ...` as `this` argument discards qualifiers [-fpermissive]"'},{id:"cast-void-to-flashstringhelper",page:5,label:"reinterpret_cast from <code>const void</code> to <code>const __FlashStringHelper *</code> is not allowed",summary:'Error says "reinterpret_cast from `const void` to `const __FlashStringHelper *` is not allowed"'},{id:"member-write-in-char-ptr",page:18,label:"request for member <code>write</code> in ..., which is of non-class type <code>char*</code>",summary:'Error says "request for member `write` in ..., which is of non-class type `char*`"'},{id:"staticjsonbuffer",page:9,label:"<code>StaticJsonBuffer</code> is a class from ArduinoJson 5",summary:'Error says "`StaticJsonBuffer` is a class from ArduinoJson 5"'},{id:"staticjsondocument-not-declared",page:28,label:"<code>StaticJsonDocument</code> was not declared in this scope",summary:'Error says "`StaticJsonDocument` was not declared in this scope"'},{id:"struct-has-no-member-named-read",page:27,label:"<code>struct Xxx</code> has no member named <code>read</code>",summary:'Error says "`struct Xxx` has no member named `read`"'},{id:"range-based-for-requires-begin",page:15,label:"this range-based <code>for</code> statement requires a suitable &quot;begin&quot; function and none was found",summary:'Error says "this range-based `for` statement requires a suitable "begin" function and none was found"'},{id:"not-in-list",page:37,label:"None of the above",summary:"The error is not in the list"}]},{content:`<p>This error occurs when you try to assign a <a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a> to a <a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a>.</p>
<p>Indeed, due to the way these two classes are defined, you can <em>construct</em> a <a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a> from a <a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a>, but you cannot <em>assign</em> a <a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a> to an existing string.</p>
<pre><code class="hljs language-c++">String name = doc[<span class="hljs-string">&quot;name&quot;</span>];  <span class="hljs-comment">// contruction -&gt; works</span>
name = doc[<span class="hljs-string">&quot;name&quot;</span>];         <span class="hljs-comment">// assignment  -&gt; fails</span>
</code></pre>
<p>You can easily workaround this problem by explicitly casting the <a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a>, like so:</p>
<pre><code class="hljs language-c++">name = doc[<span class="hljs-string">&quot;name&quot;</span>].<span class="hljs-built_in">as</span>&lt;String&gt;();
</code></pre>
<p>Please see <a href="/v6/error/ambiguous-overload-for-operator-equal/">error: ambiguous overload for 'operator=' (operand types are 'String' and ...)</a> for details.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Casting the `JsonVariant` fixes the issue"},{id:"failure",page:38,label:"No",summary:"Casting the `JsonVariant` doesn't fix the issue"}]},{content:`<p>This error occurs when you pass a string to <a href="/v6/api/jsonarray/subscript/"><code>JsonArray::operator[]</code></a>; i.e., when you use an array like an object.</p>
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
`,options:[{id:"success",page:165,label:"Yes",summary:"Using an integer or switching to an object fixes the issue"},{id:"failure",page:38,label:"No",summary:"Neither using an integer nor switching to an object fixes the issue"}]},{content:`<p>This is a linting error you may have in Visual Studio Code if your program contains something like this:</p>
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
`,options:[{id:"success",page:165,label:"Yes",summary:"Passing the capacity to the constructor fixes the issue"},{id:"failure",page:38,label:"No",summary:"Passing the capacity to the constructor doesn't fix the issue"}]},{content:`<p>The error should look like this:</p>
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
`,options:[{id:"success",page:165,label:"Yes",summary:"Setting `ARDUINOJSON_ENABLE_PROGMEM` to `0` fixes the issue"},{id:"failure",page:38,label:"No",summary:"Setting `ARDUINOJSON_ENABLE_PROGMEM` to `0` doesn't fix the issue"}]},{content:`<p>This error occurs when you try to store a pointer of type <code>const char*</code> into a variable of type <code>char*</code>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-type">char</span>* eventName = doc[<span class="hljs-string">&quot;event&quot;</span>];
</code></pre>
<p>Indeed, <a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a> returns a <code>const char*</code>, not a <code>char*</code>. You must change the type of the pointer, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-type">const</span> <span class="hljs-type">char</span>* eventName = doc[<span class="hljs-string">&quot;event&quot;</span>];
</code></pre>
<p>There are other similar situations where this error can occur. For more information, please read <a href="/v6/error/invalid-conversion-from-const-char-to-char/">invalid conversion from 'const char*' to 'char*' [-fpermissive]</a>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Changing the pointer type fixes the issue"},{id:"failure",page:38,label:"No",summary:"Changing the pointer type doesn't fix the issue"}]},{content:`<p>I recommend that you download <a href="https://github.com/bblanchon/ArduinoJson/releases/download/v5.13.5/ArduinoJson-v5.13.5.h"><code>ArduinoJson-v5.13.5.h</code></a> and save it among the project files, this way you're sure that the project is distributed with the right version of the library.</p>
<p>You can choose to keep the name <code>ArduinoJson-v5.13.5.h</code> and update the <code>#include</code> directive, or you can rename the file to <code>ArduinoJson.h</code>; either way is fine, as long as the header is in the same folder as the file that includes it.</p>
<p>Please see <a href="/v5/doc/installation/">installation instructions</a> for details</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Downloading ArduinoJson 5 fixes the issue"},{id:"failure",page:38,label:"No",summary:"Downloading ArduinoJson 5 doesn't fix the issue"}]},{content:`<p>Upgrading from v5 to v6 isn't trivial but isn't complicated either.<br>
Please follow the <a href="/v6/doc/upgrade/">upgrade instructions</a>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Upgrading fixes the issue"},{id:"failure",page:38,label:"No",summary:"Upgrading doesn't fix the issue"}]},{content:`<p>This error occurs when you try to use ArduinoJson 6 with a program written for ArduinoJson 5.</p>
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
`,options:[{id:"success",page:165,label:"Yes",summary:"Moving statement to `setup()` fixes the issue"},{id:"failure",page:38,label:"No",summary:"Moving statement to `setup()` doesn't fix the issue"}]},{content:`<p>Somewhere in your program, there is a conversion from <a href="/v6/api/jsonvariantconst/"><code>JsonVariantConst</code></a> to <a href="/v6/api/jsonarray/"><code>JsonArray</code></a>. This conversion is invalid because it would convert a <em>read-only</em> reference to a <em>read-write</em> reference.</p>
<p>To fix this issue, you must use <a href="/v6/api/jsonarrayconst/"><code>JsonArrayConst</code></a> in place of <a href="/v6/api/jsonarray/"><code>JsonArray</code></a>.</p>
<p>For example, if your program contains the expression <code>variant.as&lt;JsonArray&gt;()</code>, you must replace it with <code>variant.as&lt;JsonArrayConst&gt;()</code>. Alternatively, if your program contains a statement like <code>JsonArray array = variant</code>, you must replace it with <code>JsonArrayConst array = variant</code>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Replacing `JsonArray` with `JsonArrayConst` fixes the issue"},{id:"failure",page:38,label:"No",summary:"Replacing `JsonArray` with `JsonArrayConst` doesn't fix the issue"}]},{content:`<p>Somewhere in your program, there is a conversion from <a href="/v6/api/jsonvariantconst/"><code>JsonVariantConst</code></a> to <a href="/v6/api/jsonobject/"><code>JsonObject</code></a>. This conversion is invalid because it would convert a <em>read-only</em> reference to a <em>read-write</em> reference.</p>
<p>To fix this issue, you must use <a href="/v6/api/jsonobjectconst/"><code>JsonObjectConst</code></a> in place of <a href="/v6/api/jsonobject/"><code>JsonObject</code></a>.</p>
<p>For example, if your program contains the expression <code>variant.as&lt;JsonObject&gt;()</code>, you must replace it with <code>variant.as&lt;JsonObjectConst&gt;()</code>. Alternatively, if your program contains a statement like <code>JsonObject obj = variant</code>, you must replace it with <code>JsonObjectConst obj = variant</code>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Replacing `JsonObject` with `JsonObjectConst` fixes the issue"},{id:"failure",page:38,label:"No",summary:"Replacing `JsonObject` with `JsonObjectConst` doesn't fix the issue"}]},{content:`<p>Somewhere in your program, there is a conversion from <a href="/v6/api/jsonvariantconst/"><code>JsonVariantConst</code></a> to <a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a>. This conversion is invalid because it would convert a <em>read-only</em> reference to a <em>read-write</em> reference.</p>
<p>To fix this issue, you must use <a href="/v6/api/jsonvariantconst/"><code>JsonVariantConst</code></a> in place of <a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a>.</p>
<p>For example, if your program contains the expression <code>variant.as&lt;JsonVariant&gt;()</code>, you must replace it with <code>variant.as&lt;JsonVariantConst&gt;()</code>. Alternatively, if your program contains a statement like <code>JsonVariant v = variant</code>, you must replace it with <code>JsonVariantConst v = variant</code>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Replacing `JsonVariant` with `JsonVariantConst` fixes the issue"},{id:"failure",page:38,label:"No",summary:"Replacing `JsonVariant` with `JsonVariantConst` doesn't fix the issue"}]},{content:`<p>Assuming we removed the namespace <code>ArduinoJson6XXX</code> from the error message, what type is incomplete?</p>
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
`,options:[{id:"success",page:165,label:"Yes",summary:"Calling `as<JsonObject>()` or `as<JsonArray>()` solves the issue"},{id:"failure",page:38,label:"No",summary:"Calling `as<JsonObject>()` or `as<JsonArray>()` doesn't solve the issue"}]},{content:`<p><a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> doesn't support copying.</p>
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
`,options:[{id:"success",page:165,label:"Yes",summary:"Using a reference solves the issue"},{id:"failure",page:38,label:"No",summary:"Using a reference doesn't solve the issue"}]},{content:`<p>This is a bug in some Arduino cores, most notably the one for <a href="https://en.wikipedia.org/wiki/Atmel_ARM-based_processors#SAM_D">SAMD21</a>.</p>
<p>You can workaround this bug by defining both <a href="/v6/api/config/enable_std_string/"><code>ARDUINOJSON_ENABLE_STD_STRING</code></a> and <a href="/v6/api/config/enable_std_stream/"><code>ARDUINOJSON_ENABLE_STD_STREAM</code></a> to <code>0</code>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-meta">#<span class="hljs-keyword">define</span> ARDUINOJSON_ENABLE_STD_STRING 0</span>
<span class="hljs-meta">#<span class="hljs-keyword">define</span> ARDUINOJSON_ENABLE_STD_STREAM 0</span>
<span class="hljs-meta">#<span class="hljs-keyword">include</span> <span class="hljs-string">&lt;ArduinoJson.h&gt;</span></span>
</code></pre>
<p>You can find more information on this error here: <a href="/v6/error/macro-min-passed-3-arguments-but-takes-just-2/">macro &quot;min&quot; passed 3 arguments, but takes just 2</a></p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Defining `ARDUINOJSON_ENABLE_STD_STRING` and `ARDUINOJSON_ENABLE_STD_STREAM` to `0` solves the issue"},{id:"failure",page:38,label:"No",summary:"Defining `ARDUINOJSON_ENABLE_STD_STRING` and `ARDUINOJSON_ENABLE_STD_STREAM` to `0` doesn't solve the issue"}]},{content:`<p>This error occurs when you pass a <code>char*</code> to <a href="/v6/api/json/serializejson/"><code>serializeJson()</code></a> but forget to pass the third argument.
For example:</p>
<pre><code class="hljs language-c++"><span class="hljs-built_in">serializeJson</span>(doc, ptr);  <span class="hljs-comment">// request for member &#x27;write&#x27; in ..., which is of non-class type &#x27;char*&#x27; </span>
</code></pre>
<p>To fix this error, you must pass the size of the destination buffer as the third argument, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-built_in">serializeJson</span>(doc, ptr, size);  <span class="hljs-comment">// OK</span>
</code></pre>
<p>In the examples, you may have seen that I didn't use the size argument; that's because the second argument was not a <code>char*</code> but a <code>char[N]</code>, and <a href="/v6/api/json/serializejson/"><code>serializeJson()</code></a> was able to infer the value of <code>N</code> from the type.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Passing the buffer size to `serializeJson()` fixed the issue"},{id:"failure",page:38,label:"No",summary:"Passing the buffer size to `serializeJson()` didn't fix the issue"}]},{content:`<p>Which error is it?</p>
`,options:[{id:"basicjsondocument",page:22,label:"no matching function for call to <code>BasicJsonDocument::BasicJsonDocument()</code>",summary:'Error says "no matching function for call to `BasicJsonDocument::BasicJsonDocument()`"'},{id:"converttojson",page:23,label:"no matching function for call to <code>convertToJson(...)</code>",summary:'Error says "no matching function for call to `convertToJson(...)`"'},{id:"deserializejson",page:24,label:"no matching function for call to <code>deserializeJson(StaticJsonDocument&lt;200&gt; (&amp;)(), ...)</code>",summary:'Error says "no matching function for call to `deserializeJson(StaticJsonDocument<200> (&)(), ...)`"'},{id:"unresolved-overloaded-function-type",page:26,label:"no matching function for call to <code>...(&lt;unresolved overloaded function type&gt;)</code>",summary:'Error says "no matching function for call to `...(<unresolved overloaded function type>)`"'},{id:"as-char",page:21,label:"no matching function for call to <code>...as&lt;char&gt;() const</code>",summary:'Error says "no matching function for call to `...as<char>()` const"'},{id:"as-char-ptr",page:20,label:"no matching function for call to <code>...as&lt;char*&gt;() const</code>",summary:'Error says "no matching function for call to `...as<char*>()` const"'},{id:"is-char-ptr",page:25,label:"no matching function for call to <code>...is&lt;char*&gt;() const</code>",summary:'Error says "no matching function for call to `...is<char*>()` const"'},{id:"not-in-list",page:37,label:"None of the above",summary:"The error is not in the list"}]},{content:`<p>This error happens when you write the following:</p>
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
`,options:[{id:"success",page:165,label:"Yes",summary:"Replacing `char*` with `const char*` fixes the issue"},{id:"failure",page:38,label:"No",summary:"Replacing `char*` with `const char*` doesn't fix the issue"}]},{content:`<p>This error happens when you write the following:</p>
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
`,options:[{id:"success",page:165,label:"Yes",summary:"Replacing `char` with `int8_t` fixes the issue"},{id:"failure",page:38,label:"No",summary:"Replacing `char` with `int8_t` doesn't fix the issue"}]},{content:`<p>This error occurs when you forget to pass the capacity to the constructor of <a href="/v6/api/dynamicjsondocument/"><code>DynamicJsonDocument</code></a>, like so:</p>
<pre><code class="hljs language-c++">DynamicJsonDocument doc;
</code></pre>
<p>Instead, you need to specify the capacity of the memory pool, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-function">DynamicJsonDocument <span class="hljs-title">doc</span><span class="hljs-params">(<span class="hljs-number">2048</span>)</span></span>;
</code></pre>
<p>As usual, you can use the <a href="/v6/assistant/">ArduinoJson Assistant</a> to compute the right capacity for your project.</p>
<p>For more information, please read <a href="/v6/error/no-matching-function-for-call-to-basicjsondocument-basicjsondocument/">no matching function for call to 'BasicJsonDocument::BasicJsonDocument()'</a>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Passing the capacity to the constructor fixes the issue"},{id:"failure",page:38,label:"No",summary:"Passing the capacity to the constructor doesn't fix the issue"}]},{content:`<p>This error occurs when you try to insert an unsupported value type in a <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>.</p>
<p>To fix this error, you must either:</p>
<ul>
<li>change the type of value to a supported one (<code>const char*</code>, <code>int</code>, <code>float</code>, etc.)</li>
<li>write a <a href="/news/2021/05/04/version-6-18-0/">custom converter</a> for this type</li>
</ul>
<p>For more information, see <a href="/v6/error/no-matching-function-for-call-to-converttojson/">error: no matching function for call to 'convertToJson(...)'</a>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Converting the value fixes the issue"},{id:"failure",page:38,label:"No",summary:"Converting the value doesn't fix the issue"}]},{content:`<p>This error happens when you write the following:</p>
<pre><code class="hljs language-c++"><span class="hljs-function">StaticJsonDocument&lt;200&gt; <span class="hljs-title">doc</span><span class="hljs-params">()</span></span>;
<span class="hljs-built_in">deserializeJson</span>(doc, input);
</code></pre>
<p>Indeed, the first line doesn't declare a <code>StaticJsonDocument&lt;200&gt;</code> but a function that takes no argument and returns a <code>StaticJsonDocument&lt;200&gt;</code>. This is one of the most common pitfalls in C++ and it's called the <a href="https://en.wikipedia.org/wiki/Most_vexing_parse">Most vexing parse</a>.</p>
<p>To fix this program, you must remove the parentheses, like so:</p>
<pre><code class="hljs language-c++">StaticJsonDocument&lt;<span class="hljs-number">200</span>&gt; doc;
<span class="hljs-built_in">deserializeJson</span>(doc, input);
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:`It's the "Most vexing parse"`},{id:"failure",page:38,label:"No",summary:`It's not the "Most vexing parse"`}]},{content:`<p>This error happens when you write the following:</p>
<pre><code class="hljs language-c++"><span class="hljs-keyword">if</span> (doc[<span class="hljs-string">&quot;key&quot;</span>].<span class="hljs-built_in">is</span>&lt;<span class="hljs-type">char</span>*&gt;())
</code></pre>
<p>Indeed, support for <code>char*</code> was deprecated in <a href="/news/2021/05/04/version-6-18-0/">6.18</a> and removed in <a href="/news/2022/12/26/arduinojson-6-20-0/">6.20</a>.</p>
<p>To fix this error, you must replace <code>char*</code> with <code>const char*</code>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-keyword">if</span> (doc[<span class="hljs-string">&quot;key&quot;</span>].<span class="hljs-built_in">is</span>&lt;<span class="hljs-type">const</span> <span class="hljs-type">char</span>*&gt;())
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Replacing `char*` with `const char*` fixes the issue"},{id:"failure",page:38,label:"No",summary:"Replacing `char*` with `const char*` doesn't fix the issue"}]},{content:`<p>We typically see this error when your program does somethink like this:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">print</span>(doc[<span class="hljs-string">&quot;value&quot;</span>].as&lt;<span class="hljs-type">int</span>&gt;);
</code></pre>
<p>In this case, the compiler produces the following error:</p>
<pre><code class="hljs language-text">no matching function for call to &#x27;HardwareSerial::print(&lt;unresolved overloaded function type&gt;)&#x27;
</code></pre>
<p>This error occurs because <code>as&lt;int&gt;()</code> is a function, so you must call it by appending parenthesis like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">print</span>(doc[<span class="hljs-string">&quot;value&quot;</span>].<span class="hljs-built_in">as</span>&lt;<span class="hljs-type">int</span>&gt;());
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Adding the parentheses fixes the issue"},{id:"failure",page:38,label:"No",summary:"Adding the parentheses doesn't fix the issue"}]},{content:`<p>This error occurs when you pass an invalid input type to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>.</p>
<p>For example, if you write this:</p>
<pre><code class="hljs language-c++"><span class="hljs-keyword">class</span> <span class="hljs-title class_">Input</span> {
  <span class="hljs-comment">// ...</span>
};

<span class="hljs-function"><span class="hljs-type">void</span> <span class="hljs-title">parseInput</span><span class="hljs-params">(Input input)</span> </span>{
  StaticJsonDocument&lt;<span class="hljs-number">200</span>&gt; doc;
  <span class="hljs-built_in">deserializeJson</span>(doc, input);
  <span class="hljs-comment">// ...</span>
}
</code></pre>
<p>You'll get a long compiler output that includes this error:</p>
<pre><code class="hljs language-text">ArduinoJson/Deserialization/Reader.hpp:21:21: error: &#x27;class Input&#x27; has no member named &#x27;read&#x27;
     return source_-&gt;read();  // Error here? You passed an unsupported input type
</code></pre>
<p>Please double-check that you called <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> with the right arguments.</p>
<p>If you do want to read from an unsupported input type (like <code>Input</code> in the example above), you must implement <code>read()</code> and <code>readBytes()</code> in this class or an <a href="https://en.wikipedia.org/wiki/Adapter_pattern">adapter class</a>.
Please see <a href="/v6/api/json/deserializejson/#custom-reader">custom readers</a> for more details.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Passing a supported input type to `deserializeJson()` fixed the issue"},{id:"failure",page:38,label:"No",summary:"Passing a supported input type to `deserializeJson()` didn't fix the issue"}]},{content:`<p>Please open the file where this error occurs.</p>
<p>Which header does this file includes?</p>
`,options:[{id:"arduinojson-h",page:38,label:"<code>ArduinoJson.h</code>",summary:"The file includes `ArduinoJson.h`"},{id:"arduinojson-hpp",page:29,label:"<code>ArduinoJson.hpp</code>",summary:"The file includes `ArduinoJson.hpp`"},{id:"none",page:30,label:"None of the above",summary:"The file includes neither `ArduinoJson.h` nor  `ArduinoJson.hpp`"}]},{content:`<p>Unlike <code>ArduinoJson.h</code>, <code>ArduinoJson.hpp</code> keeps everything in the <code>ArduinoJson</code> namespace.</p>
<p>Please add the following statement after the <code>#include</code> statements:</p>
<pre><code class="hljs language-c++"><span class="hljs-keyword">using</span> <span class="hljs-keyword">namespace</span> ArduinoJson;
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Adding `using namespace ArduinoJson` fixes the issue"},{id:"failure",page:38,label:"No",summary:"Adding `using namespace ArduinoJson`doesn't fix the issue"}]},{content:`<p>Please add the following line at the top of your program:</p>
<pre><code class="hljs language-c++"><span class="hljs-meta">#<span class="hljs-keyword">include</span> <span class="hljs-string">&lt;ArduinoJson.h&gt;</span></span>
</code></pre>
<p>Did this fix your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Including `ArduinoJson.h` fixes the issue"},{id:"failure",page:38,label:"No",summary:"Including `ArduinoJson.h` doesn't fix the issue"}]},{content:`<p>This error comes from a bug in the <a href="https://github.com/arduino/ArduinoCore-API">Arduino Core API</a> (or <code>Arduino.h</code>, if you prefer).
This bug was fixed by <a href="https://github.com/arduino/ArduinoCore-API/pull/118">arduino/ArduinoCore-API#118</a> in October 2020, but the fix wasn't immediately propagated to derived projects.</p>
<p>First, make sure that every related piece of software is up-to-date.
Then, if the problem persists, please open an issue in the relevant project and mention <a href="https://github.com/arduino/ArduinoCore-API/pull/118">arduino/ArduinoCore-API#118</a> in the description.</p>
<p>As a workaround, you can disable support for <a href="https://www.arduino.cc/reference/en/language/variables/utilities/progmem/"><code>PROGMEM</code></a> in ArduinoJson (your board doesn't support it anyway) by setting <a href="/v6/api/config/enable_progmem/">ARDUINOJSON_ENABLE_PROGMEM</a> to <code>0</code>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-meta">#<span class="hljs-keyword">define</span> ARDUINOJSON_ENABLE_PROGMEM 0</span>
<span class="hljs-meta">#<span class="hljs-keyword">include</span> <span class="hljs-string">&lt;ArduinoJson.h&gt;</span></span>
</code></pre>
<p>Did this fix your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Defining `ARDUINOJSON_ENABLE_PROGMEM` to `0` solves the issue"},{id:"failure",page:38,label:"No",summary:"Defining `ARDUINOJSON_ENABLE_PROGMEM` to `0` doesn't solve the issue"}]},{content:`<p>In your program, there is a line that look like this:</p>
<pre><code class="hljs language-c++">JsonObject&amp; obj = doc[<span class="hljs-string">&quot;key&quot;</span>].<span class="hljs-built_in">as</span>&lt;JsonObject&gt;();
</code></pre>
<p>This line produces the following compilation error:</p>
<pre><code class="hljs language-text">cannot bind non-const lvalue reference of type &#x27;ArduinoJson::JsonObject&amp;&#x27; {aka &#x27;ArduinoJson6185_91::ObjectRef&amp;&#x27;} to an rvalue of type &#x27;ArduinoJson6185_91::enable_if&lt;true, ArduinJson6185_91::ObjectRef&gt;::type&#x27; {aka &#x27;ArduinoJson6185_91::ObjectRef&#x27;}
</code></pre>
<p>In other words, &quot;cannot assign <code>JsonObject</code> to <code>JsonObject&amp;</code>&quot;.
The compiler refuses to save a reference to a temporary variable because the reference would inevitably dangle.</p>
<p>To fix this issue, you must remove the ampersand (<code>&amp;</code>) after <a href="/v6/api/jsonobject/"><code>JsonObject</code></a>, like so:</p>
<pre><code class="hljs language-c++">JsonObject obj = doc[<span class="hljs-string">&quot;key&quot;</span>].<span class="hljs-built_in">as</span>&lt;JsonObject&gt;();
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Replacing `JsonObject&` with `JsonObject` fixes the issue"},{id:"failure",page:38,label:"No",summary:"Replacing `JsonObject&` with `JsonObject` doesn't fix the issue"}]},{content:`<p>This error occurs because you declared a <code>volatile</code> variable, but the member function you're trying to call is not qualified as <code>volatile</code>. In other words, the function is not meant to be called from a <code>volatile</code> instance.</p>
<p><a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> is not safe to use on concurrent threads, so its member cannot be qualified as <code>volatile</code>.</p>
<p>To work around this issue, you must remove the <code>volatile</code> qualifier and use a thread-safe synchronization mechanism. For example, you could push values into a <a href="https://www.freertos.org/Embedded-RTOS-Queues.html">FreeRTOS queue</a> and pull them from the main thread.</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Using a queue solves the issue."},{id:"failure",page:38,label:"No",summary:"Cannot use a queue."}]},{content:`<p>This problem is not related to ArduinoJson, but it's a known issue on Windows.
It's frequent with ESP8266 and ESP32 but can happen with any device.</p>
<p>See:</p>
<ul>
<li><a href="https://github.com/espressif/arduino-esp32/issues/6593">espressif/arduino-esp32#6593</a></li>
<li><a href="https://github.com/bblanchon/ArduinoJson/issues/1871">bblanchon/ArduinoJson#1871</a></li>
</ul>
<p>The problem comes from the file path that is too long for the Windows API.</p>
<p>The solution is to reinstall Arduino (or the toolchain) in another location with a shorter path.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Shortening the path fixes the issue"},{id:"failure",page:38,label:"No",summary:"Shortening the path doesn't fix the issue"}]},{content:`<p>This error usually occurs when you pass a <a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a> to <a href="https://www.arduino.cc/reference/en/language/functions/communication/serial/print/"><code>Serial::print()</code></a> or <a href="https://www.arduino.cc/reference/en/language/functions/communication/serial/println/"><code>Serial::print()</code></a>.</p>
<p>To fix it, you need to explicitly cast the <a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a> to a type supported by <a href="https://www.arduino.cc/reference/en/language/functions/communication/serial/print/"><code>Serial::print()</code></a>, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">print</span>(doc[<span class="hljs-string">&quot;event&quot;</span>].<span class="hljs-built_in">as</span>&lt;<span class="hljs-type">const</span> <span class="hljs-type">char</span>*&gt;());
</code></pre>
<p><a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a> must contain (or more exactly &quot;point to&quot;) a value of the specified type; otherwise, you'll get a default value, like <code>NULL</code> or <code>0</code>. If you want to support any type of value, you must replace the call to <a href="https://www.arduino.cc/reference/en/language/functions/communication/serial/print/"><code>Serial::print()</code></a> with a call to <a href="/v6/api/json/serializejson/"><code>serializeJson()</code></a>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-built_in">serializeJson</span>(doc[<span class="hljs-string">&quot;event&quot;</span>], Serial);
</code></pre>
<p>You can find more information on this error here: <a href="/v6/error/call-of-overloaded-println-is-ambiguous/">call of overloaded 'println(...)' is ambiguous</a></p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Casting the value or using `serializeJson()` solves the issue"},{id:"failure",page:38,label:"No",summary:"Neither casting the value nor using `serializeJson()` solves the issue"}]},{content:`<p>If you try to use ArduinoJson with a C compiler (or a C++ compiler targeting the C language), you'll get the following error message:</p>
<blockquote>
<p>ArduinoJson requires a C++ compiler, please change file extension to .cc or .cpp</p>
</blockquote>
<p>Most of the time, this happens because you gave the extension <code>.c</code> to your main source file.<br>
To fix this issue, you must rename the extension to <code>.cpp</code> so the compiler understands you want to target the C++ language.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Changing the file extension to `.cpp` fixes the error"},{id:"failure",page:38,label:"No",summary:"Changing the file extension to `.cpp` doesn't fix the error"}]},{content:`<p>Please click on the &quot;Contact Support&quot; button below and provide the following information:</p>
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
`,options:[{id:"ok",page:118,label:"<code>Ok</code>",summary:"`deserializeJson()` returns `Ok`"},{id:"emptyinput",page:54,label:"<code>EmptyInput</code>",summary:"`deserializeJson()` returns `EmptyInput`"},{id:"incompleteinput",page:69,label:"<code>IncompleteInput</code>",summary:"`deserializeJson()` returns `IncompleteInput`"},{id:"invalidinput",page:76,label:"<code>InvalidInput</code>",summary:"`deserializeJson()` returns `InvalidInput`"},{id:"nomemory",page:151,label:"<code>NoMemory</code>",summary:"`deserializeJson()` returns `NoMemory`"},{id:"notsupported",page:159,label:"<code>NotSupported</code>",summary:"`deserializeJson()` returns `NotSupported`"},{id:"toodeep",page:164,label:"<code>TooDeep</code>",summary:"`deserializeJson()` returns `TooDeep`"},{id:"crash",page:41,label:"I can't tell because the program crashes",summary:"The program crashes"},{id:"unknown",page:40,label:"I don't know what you're talking about",summary:"The program doesn't check the error"}]},{content:`<p><a href="/v6/api/misc/deserializationerror/"><code>DeserializationError</code></a> is the return type of <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>. It tells whether the operation succeeded and indicates the cause of the error.</p>
<p>Modify your program to show the error code, like so:</p>
<pre><code class="hljs language-c++">DeserializationError error = <span class="hljs-built_in">deserializeJson</span>(doc, input);

Serial.<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;deserializeJson() returned &quot;</span>);
Serial.<span class="hljs-built_in">println</span>(error.<span class="hljs-built_in">c_str</span>());
</code></pre>
<p>Now, what does it show?</p>
`,options:[{id:"ok",page:118,label:"<code>Ok</code>",summary:"`deserializeJson()` returns `Ok`"},{id:"emptyinput",page:54,label:"<code>EmptyInput</code>",summary:"`deserializeJson()` returns `EmptyInput`"},{id:"incompleteinput",page:69,label:"<code>IncompleteInput</code>",summary:"`deserializeJson()` returns `IncompleteInput`"},{id:"invalidinput",page:76,label:"<code>InvalidInput</code>",summary:"`deserializeJson()` returns `InvalidInput`"},{id:"nomemory",page:151,label:"<code>NoMemory</code>",summary:"`deserializeJson()` returns `NoMemory`"},{id:"notsupported",page:159,label:"<code>NotSupported</code>",summary:"`deserializeJson()` returns `NotSupported`"},{id:"toodeep",page:164,label:"<code>TooDeep</code>",summary:"`deserializeJson()` returns `TooDeep`"},{id:"crash",page:41,label:"I can't tell because the program crashes",summary:"The program crashes"}]},{content:`<p>I need to know for sure if the program crashes before or after calling <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>.</p>
<p>Please add some traces around the call to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> and make sure to flush the Serial buffer. You can use the <a href="https://github.com/bblanchon/ArduinoTrace">ArduinoTrace library</a>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-built_in">TRACE</span>();
DeserializationError err = <span class="hljs-built_in">deserializeJson</span>(doc, input);
<span class="hljs-built_in">TRACE</span>();
</code></pre>
<p>How many traces can you see in the Serial Monitor?</p>
`,options:[{id:"before",page:47,label:"None: program crashes before calling <code>deserializeJson()</code>",summary:"Program crashes before calling `deserializeJson()`"},{id:"inside",page:49,label:"Only one: program crashes inside <code>deserializeJson()</code>",summary:"Program crashes inside `deserializeJson()`"},{id:"after",page:42,label:"Two traces: program crashes after calling <code>deserializeJson()</code>",summary:"Program crashes after calling `deserializeJson()`"}]},{content:`<p>Most of the time, when a program crashes after <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>, it's because it dereferences a null pointer returned by the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>.</p>
<p>Here are the most common pitfalls:</p>
<pre><code class="hljs language-c++"><span class="hljs-keyword">if</span> (<span class="hljs-built_in">strcmp</span>(doc[<span class="hljs-string">&quot;key&quot;</span>], <span class="hljs-string">&quot;value&quot;</span>) == <span class="hljs-number">0</span>) {
  <span class="hljs-comment">// ...</span>
}

<span class="hljs-built_in">strcpy</span>(buffer, doc[<span class="hljs-string">&quot;key&quot;</span>]);

<span class="hljs-built_in">printf</span>(<span class="hljs-string">&quot;Value = %s\\n&quot;</span>, doc[<span class="hljs-string">&quot;key&quot;</span>])
<span class="hljs-built_in">sprintf</span>(buffer, <span class="hljs-string">&quot;Value = %s\\n&quot;</span>, doc[<span class="hljs-string">&quot;key&quot;</span>])
<span class="hljs-built_in">snprintf</span>(buffer, <span class="hljs-built_in">sizeof</span>(buffer), <span class="hljs-string">&quot;Value = %s\\n&quot;</span>, doc[<span class="hljs-string">&quot;key&quot;</span>])
</code></pre>
<p>For each of these lines, if <code>&quot;key&quot;</code> isn't in the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, the program behavior is undefined and is very likely to crash.</p>
<p>Do you see something like this in your code?</p>
`,options:[{id:"strcmp",page:45,label:"Yes, there is a call to <code>strcmp()</code>",summary:"Program calls `strcmp()`"},{id:"strcpy",page:46,label:"Yes, there is a call to <code>strcpy()</code>",summary:"Program calls `strcpy()`"},{id:"printf",page:44,label:"Yes, there is a call to <code>printf()</code>, <code>sprintf()</code>, or <code>snprintf()</code>",summary:"Program calls `printf()`, `sprintf()`, or `snprintf()`"},{id:"success",page:165,label:"Yes, I found the issue",summary:"Program dereferences a null pointer"},{id:"no-usual-suspect",page:43,label:"No",summary:"Program calls neither `strcmp()`, nor `strcpy()`, not `printf()`"}]},{content:`<p>A programs can also crash after calling <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> because it keeps a pointer to a string stored in the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>.</p>
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
`,options:[{id:"success",page:165,label:"Yes",summary:"Replacing pointer with a `String` solves the issue"},{id:"failure",page:38,label:"No",summary:"Replacing pointer with a `String` doesn't solve the issue"}]},{content:`<p>As far as the standard is concerned, the behavior of <code>printf()</code>, <code>sprintf()</code>, and <code>snprintf()</code> is undefined if a <code>%s</code> refers to a null string.</p>
<p>The simplest solution is to change the default value returned by <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>: instead of returning a null pointer when the value is missing, we can ask it to return an empty string (i.e., <code>&quot;&quot;</code>) or some other replacement (e.g., <code>&quot;&lt;null&gt;&quot;</code>). We can do that with <a href="/v6/api/jsonvariant/or/"><code>operator|</code></a>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// replace this:</span>
<span class="hljs-built_in">printf</span>(<span class="hljs-string">&quot;Event = %s\\n&quot;</span>, doc[<span class="hljs-string">&quot;event&quot;</span>]);

<span class="hljs-comment">// ...with this:</span>
<span class="hljs-built_in">printf</span>(<span class="hljs-string">&quot;Event = %s\\n&quot;</span>, doc[<span class="hljs-string">&quot;event&quot;</span>] | <span class="hljs-string">&quot;&lt;null&gt;&quot;</span>);
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Providing a non-null default solves the issue"},{id:"failure",page:38,label:"No",summary:"Providing a non-null default doesn't solve the issue"}]},{content:`<p>As per the standard, the behavior of <a href="https://en.cppreference.com/w/c/string/byte/strcmp"><code>strcmp()</code></a> is undefined if one of the two arguments is null.</p>
<p>That's not a problem for you because you don't need to call <a href="https://en.cppreference.com/w/c/string/byte/strcmp"><code>strcmp()</code></a>. Indeed, <a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a> supports all comparisons operators (<code>==</code>, <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>), and these operators handle null values correctly.</p>
<p>Please replace calls to <a href="https://en.cppreference.com/w/c/string/byte/strcmp"><code>strcmp()</code></a> with <code>==</code>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// replace this:</span>
<span class="hljs-keyword">if</span> (<span class="hljs-built_in">strcmp</span>(doc[<span class="hljs-string">&quot;event&quot;</span>], <span class="hljs-string">&quot;wakeup&quot;</span>)) ...

<span class="hljs-comment">// ...with this:</span>
<span class="hljs-keyword">if</span> (doc[<span class="hljs-string">&quot;event&quot;</span>] == <span class="hljs-string">&quot;wakeup&quot;</span>) ...
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Replacing `strcmp()` with `==` solves the issue"},{id:"failure",page:38,label:"No",summary:"Replacing `strcmp()` with `==` doesn't solve the issue"}]},{content:`<p>As per the standard, the behavior of <a href="https://en.cppreference.com/w/c/string/byte/strcpy"><code>strcpy()</code></a> (and <a href="https://en.wikibooks.org/wiki/C_Programming/C_Reference/nonstandard/strlcpy"><code>strlcpy()</code></a>) is undefined if one of the pointers is null.</p>
<p>The simplest solution is to change the default value returned by <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>: instead of returning a null pointer when the value is missing, we can ask it to return an empty string (i.e., <code>&quot;&quot;</code>) or some other replacement (e.g., <code>&quot;&lt;null&gt;&quot;</code>). We can do that with <a href="/v6/api/jsonvariant/or/"><code>operator|</code></a>.</p>
<p>Please provide a non-null default for all calls to <a href="https://en.cppreference.com/w/c/string/byte/strcpy"><code>strcpy()</code></a>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// replace this:</span>
<span class="hljs-built_in">strcpy</span>(eventName, doc[<span class="hljs-string">&quot;event&quot;</span>]);

<span class="hljs-comment">// ...with this:</span>
<span class="hljs-built_in">strcpy</span>(eventName, doc[<span class="hljs-string">&quot;event&quot;</span>] | <span class="hljs-string">&quot;&lt;null&gt;&quot;</span>);
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Providing a non-null default solves the issue"},{id:"failure",page:38,label:"No",summary:"Providing a non-null default doesn't solve the issue"}]},{content:`<p>A stack-overflow could cause the crash.</p>
<p>Do you use a <a href="/v6/api/staticjsondocument/"><code>StaticJsonDocument</code></a>?</p>
`,options:[{id:"static",page:53,label:"Yes",summary:"Program uses `StaticJsonDocument`"},{id:"no-static",page:48,label:"No",summary:"Program doesn't use `StaticJsonDocument`"}]},{content:`<p>I still think this could be a stack-overflow.</p>
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
`,options:[{id:"failure",page:38,label:"Yes",summary:"Reducing stack usage doesn't prevent the crash"},{id:"success",page:165,label:"No",summary:"Reducing stack usage prevents the crash"}]},{content:`<p>Passing a dangling pointer could cause a crash.</p>
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
`,options:[{id:"no-dangling-ptr",page:47,label:"Yes",summary:"Removing dangling pointers doesn't prevent the crash"},{id:"success",page:165,label:"No",summary:"Removing dangling pointers prevents the crash"}]},{content:`<p>Well, that's very bad news. It seems that your microcontroller doesn't have enough RAM to hold the JSON document.</p>
<p>Please read <a href="/v6/how-to/reduce-memory-usage/">How to reduce memory usage</a>; it shows several techniques that you can implement to use less RAM.
Hopefully, you'll make enough room for the memory pool.</p>
<p>If it still doesn't fit, you'll have to upgrade to a bigger microcontroller.</p>
`},{content:`<p>Good news!<br>
The memory allocation succeeds; the <a href="/v6/api/dynamicjsondocument/"><code>DynamicJsonDocument</code></a> is simply too small, so you need to increase its capacity.</p>
<p>Use the <a href="/v6/assistant/">ArduinoJson Assistant</a> to compute the right capacity for your input.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Increasing the capacity fixes the issue"},{id:"failure",page:38,label:"No",summary:"Increasing the capacity doesn't fix the issue"}]},{content:`<p>It looks like the allocation failed.</p>
<p>Please print the capacity of the <a href="/v6/api/dynamicjsondocument/"><code>DynamicJsonDocument</code></a> to the serial port, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(doc.<span class="hljs-built_in">capacity</span>());
</code></pre>
<p>What value does it show?</p>
`,options:[{id:"capacity-0",page:50,label:"<code>0</code>",summary:"`doc.capacity()` returns `0`"},{id:"capacity-ok",page:51,label:"The value passed to the constructor of <code>DynamicJsonDocument</code>",summary:"`doc.capacity()` returns the right value"}]},{content:`<p>A big <a href="/v6/api/staticjsondocument/"><code>StaticJsonDocument</code></a> might indeed overflow the stack.
Even if there is a lot of free memory, you can run out of stack because many platforms limit the size at compile time.</p>
<p>For example, ESP8266 limits to 4096 and ESP32 limits to 8192.
These numbers might seem high, but huge part of the stack is already consumed by callers of your program. As a rule, I recommend never allocating a <a href="/v6/api/staticjsondocument/"><code>StaticJsonDocument</code></a> bigger than the half of the limit (so max 2048 on ESP8266 and 4096 on ESP32). If you need more space in your <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, you need to use a <a href="/v6/api/dynamicjsondocument/"><code>DynamicJsonDocument</code></a> instead.</p>
<p>Does switching to a <a href="/v6/api/dynamicjsondocument/"><code>DynamicJsonDocument</code></a> prevent the crash?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Switching to `DynamicJsonDocument` prevents the crash"},{id:"nomemory",page:52,label:"Yes, but now <code>deserializeJson()</code> returns <code>NoMemory</code>",summary:"Switching to `DynamicJsonDocument` produces `NoMemory`"},{id:"dynamicjsondocument-too",page:48,label:"No",summary:"Switching to `DynamicJsonDocument` doesn't prevent the crash"}]},{content:`<p><a href="/v6/api/misc/deserializationerror/#emptyinput"><code>EmptyInput</code></a> means that the input was empty or contained only spaces or comments.</p>
<p>Where does your JSON input come from?</p>
`,options:[{id:"http",page:61,label:"An HTTP response",summary:"Input comes from an HTTP response"},{id:"file",page:55,label:"A file",summary:"Input comes from a file"},{id:"serial",page:68,label:"A serial port",summary:"Input comes from a serial port"},{id:"other",page:66,label:"Something else",summary:"Input comes neither from an HTTP response, nor a file, nor a serial port"}]},{content:`<p><a href="/v6/api/misc/deserializationerror/#emptyinput"><code>EmptyInput</code></a> in the context of a file usually means:</p>
<ul>
<li>the file is closed</li>
<li>the file is opened in the wrong mode</li>
<li>the file is empty</li>
</ul>
<p>Please, make sure that the file is opened in &quot;read&quot; mode and try to print the content to make sure it's not empty.</p>
<p>You can find an example using the SD library in <a href="/v6/example/config/">JsonConfigFile.ino</a> and one using SPIFFS in <a href="/book/">Mastering ArduinoJson</a>.</p>
<p>Did this sole your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"The file was the problem"},{id:"failure",page:38,label:"No",summary:"The file is not the problem"}]},{content:`<p>We tried everything we could on the client side, so I'm starting to suspect an issue with the server.</p>
<p>Please try to perform the same HTTP request from your computer.
For example, you can use <a href="https://curl.se/">cURL</a>, <a href="https://httpie.io/">HTTPie</a>, <a href="https://paw.cloud/">Paw</a>, <a href="https://www.postman.com/">Postman</a>, or <a href="https://www.thunderclient.com/">ThunderClient</a>.</p>
<p>Hopefully, this will help you solve your issue.</p>
<p>There is nothing more I can do for you since this issue is not related to ArduinoJson.</p>
`,tags:["needs_assistance"]},{content:`<p>As I said, a negative status number indicates an error on the client side.</p>
<p>Here are the possible values that I'm aware of:</p>
<table class="table">
<thead>
<tr>
<th style="text-align:left">Symbol</th>
<th style="text-align:left">Value</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code>HTTPC_ERROR_CONNECTION_FAILED</code></td>
<td style="text-align:left"><code>-1</code></td>
</tr>
<tr>
<td style="text-align:left"><code>HTTPC_ERROR_SEND_HEADER_FAILED</code></td>
<td style="text-align:left"><code>-2</code></td>
</tr>
<tr>
<td style="text-align:left"><code>HTTPC_ERROR_SEND_PAYLOAD_FAILED</code></td>
<td style="text-align:left"><code>-3</code></td>
</tr>
<tr>
<td style="text-align:left"><code>HTTPC_ERROR_NOT_CONNECTED</code></td>
<td style="text-align:left"><code>-4</code></td>
</tr>
<tr>
<td style="text-align:left"><code>HTTPC_ERROR_CONNECTION_LOST</code></td>
<td style="text-align:left"><code>-5</code></td>
</tr>
<tr>
<td style="text-align:left"><code>HTTPC_ERROR_NO_STREAM</code></td>
<td style="text-align:left"><code>-6</code></td>
</tr>
<tr>
<td style="text-align:left"><code>HTTPC_ERROR_NO_HTTP_SERVER</code></td>
<td style="text-align:left"><code>-7</code></td>
</tr>
<tr>
<td style="text-align:left"><code>HTTPC_ERROR_TOO_LESS_RAM</code></td>
<td style="text-align:left"><code>-8</code></td>
</tr>
<tr>
<td style="text-align:left"><code>HTTPC_ERROR_ENCODING</code></td>
<td style="text-align:left"><code>-9</code></td>
</tr>
<tr>
<td style="text-align:left"><code>HTTPC_ERROR_STREAM_WRITE</code></td>
<td style="text-align:left"><code>-10</code></td>
</tr>
<tr>
<td style="text-align:left"><code>HTTPC_ERROR_READ_TIMEOUT</code></td>
<td style="text-align:left"><code>-11</code></td>
</tr>
</tbody>
</table>
<p>Hopefully, this will help you solve your issue.</p>
<p>There is nothing more I can do for you since this issue is not related to ArduinoJson.</p>
`,tags:["needs_assistance"]},{content:`<p>This confirms that the problem comes from the certificate validation.</p>
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
`},{content:`<p>The server returned a <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Redirections">redirection code</a>, but the client didn't follow the redirection.</p>
<p>If you use an HTTP library, make sure that you enabled the &quot;follow redirection&quot; feature.
For example, if you use <code>HTTPClient</code> on ESP8266 or ESP32, you must call the following function before sending the request:</p>
<pre><code class="hljs language-c++">http.<span class="hljs-built_in">setFollowRedirects</span>(HTTPC_FORCE_FOLLOW_REDIRECTS);
</code></pre>
<p>If you don't use an HTTP library, you need to extract the <code>Location</code> header from the response and make a new request.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Following the redirection fixes the issue"},{id:"follow",page:62,label:"No",summary:"Following the redirection doesn't fix the issue"}]},{content:`<p>A negative number indicates an error on the client side.</p>
<p>With HTTPS, connection failures are often due to the certificate validation.</p>
<p>Please try to disable certificate validation by calling <a href="https://arduino-esp8266.readthedocs.io/en/latest/esp8266wifi/bearssl-client-secure-class.html#setinsecure"><code>WiFiClientSecure::setInsecure()</code></a> before starting the HTTP request.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"certificate-problem",page:58,label:"Yes",summary:"Calling `WiFiClientSecure::setInsecure()` solves the issue."},{id:"certificate-ok",page:57,label:"No",summary:"Calling `WiFiClientSecure::setInsecure()` doesn't solve the issue."}]},{content:`<p>Please check the HTTP status</p>
<p>For example, if you use <code>HTTPClient</code>, what value is returned by <code>http.GET()</code>?</p>
`,options:[{id:"redirect",page:59,label:"<code>300</code> to <code>399</code>",summary:"The status code indicates a redirection"},{id:"negative",page:60,label:"A negative number",summary:"The status code is negative"},{id:"status-ok",page:62,label:"None of the above",summary:"The status code is not in the list"}]},{content:`<p><a href="/v6/api/misc/deserializationerror/#emptyinput"><code>EmptyInput</code></a> could be caused by a timeout while reading the response.</p>
<p>Please increase the value of the timeout by calling <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/streamsettimeout/"><code>Stream::setTimeout()</code></a> before calling <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>. For example:</p>
<pre><code class="hljs language-c++">client.<span class="hljs-built_in">setTimeout</span>(<span class="hljs-number">10000</span>);  <span class="hljs-comment">// 10 seconds</span>
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Increasing the timeout fixes the issue"},{id:"timeout-increased",page:56,label:"No",summary:"Increasing the timeout doesn't fix the issue"}]},{content:`<p>This confirms that the problem comes from the input: it is indeed empty, or at least starts with a NUL character.</p>
<p>You must now find a way to fix your input; I cannot help you with that. Sorry.</p>
`},{content:`<p>Please print the ASCII code for the first character, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(stream.<span class="hljs-built_in">peek</span>());
</code></pre>
<p>What do you see?</p>
`,options:[{id:"zero",page:63,label:"<code>0</code>",summary:"The first character is NUL"},{id:"non-zero",page:38,label:"Something else",summary:"The first character is not NUL"}]},{content:`<p>Please print the ASCII code for the first character, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>((<span class="hljs-type">int</span>)input[<span class="hljs-number">0</span>]);
</code></pre>
<p>What do you see?</p>
`,options:[{id:"zero",page:63,label:"<code>0</code>",summary:"The first character is NUL"},{id:"non-zero",page:38,label:"Something else",summary:"The first character is not NUL"}]},{content:`<p>The input is probably starting with a NUL character.</p>
<p>What type of input are you passing to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>?</p>
`,options:[{id:"string",page:65,label:"A string (<code>const char*</code>, <code>String</code>, <code>std::string</code>...)",summary:"Input type is a string"},{id:"stream",page:64,label:"A stream (<code>Serial</code>, <code>WiFiClient</code>, <code>File</code>...)",summary:"Input type is a stream"}]},{content:`<p><a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> also returns <a href="/v6/api/misc/deserializationerror/#emptyinput"><code>EmptyInput</code></a> when the input contains only spaces.</p>
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
`,options:[{id:"success",page:165,label:"Yes",summary:"Removing CRLF fixes the issue"},{id:"failure",page:38,label:"No",summary:"Removing CRLF doesn't fix the issue"}]},{content:`<p><a href="/v6/api/misc/deserializationerror/#emptyinput"><code>EmptyInput</code></a> can be caused by a timeout while waiting for the input.</p>
<p>In that case, the solution is to wait until some data is available before calling <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>. A simple loop can do the trick:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// wait from an incomming message</span>
<span class="hljs-keyword">while</span> (Serial.<span class="hljs-built_in">available</span>() == <span class="hljs-number">0</span>)
  <span class="hljs-built_in">delay</span>(<span class="hljs-number">100</span>);

<span class="hljs-built_in">deserializeJson</span>(doc, Serial);
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Adding a wait loop fixes the issue"},{id:"available",page:67,label:"No",summary:"Adding a wait loop doesn't fix the issue"}]},{content:`<p><a href="/v6/api/misc/deserializationerror/#incompleteinput"><code>IncompleteInput</code></a> means that <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> managed to parse the beginning of the JSON document, but the end was missing.</p>
<p>What type of input do you pass to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>?</p>
`,options:[{id:"stream",page:72,label:"A stream",summary:"Input comes from a stream"},{id:"string",page:73,label:"A string object (like <code>String</code>)",summary:"Input comes from a string object"},{id:"pointer",page:74,label:"A pointer (like <code>char*</code> or <code>const char*</code>)",summary:"Input comes from a pointer"}]},{content:`<p><a href="/v6/api/misc/deserializationerror/#incompleteinput"><code>IncompleteInput</code></a> can be caused by an interruped connection. For example, this problem happens when the client reads to slowly.</p>
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
`,options:[{id:"success",page:165,label:"Yes",summary:"Adding a buffer solves the issue"},{id:"same-with-buffer",page:71,label:"No",summary:"Adding a buffer doesn't solve the issue"}]},{content:`<p>Maybe seeing where the input stops will give you an idea of what's going wrong.</p>
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
`,options:[{id:"success",page:165,label:"Yes",summary:"Logging helped fixing the issue"},{id:"failure",page:38,label:"No",summary:"Logging didn't help fixing the issue"}]},{content:`<p><a href="/v6/api/misc/deserializationerror/#incompleteinput"><code>IncompleteInput</code></a> can be caused by a timeout.</p>
<p>Please increase the value of the timeout by calling <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/streamsettimeout/"><code>Stream::setTimeout()</code></a> before calling <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>. For example:</p>
<pre><code class="hljs language-c++">stream.<span class="hljs-built_in">setTimeout</span>(<span class="hljs-number">10000</span>);  <span class="hljs-comment">// 10 seconds</span>
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Inreasing the timeout solves the issue"},{id:"timeout-increased",page:70,label:"No",summary:"Inreasing the timeout doesn't solve the issue"}]},{content:`<p>Please print the content of the string to the serial port, like so:</p>
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
`,options:[{id:"0",page:165,label:"Yes",summary:"Calling `String::reserve()` solves the issue"},{id:"1",page:75,label:"No",summary:"Calling `String::reserve()` doesn't solve the issue"}]},{content:`<p>I'll assume that your input is stored in a buffer similar to this one:</p>
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
`,options:[{id:"0",page:165,label:"Yes",summary:"Increasing the buffer size solves the issue"},{id:"1",page:75,label:"No",summary:"Increasing the buffer size doesn't solve the issue"}]},{content:`<p>To reduce the memory usage, you should try to pass the source (file, connection, stream, etc) directly to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>, either via the <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/"><code>Stream</code></a> interface or via a <a href="/news/2019/11/01/version-6-13-0/">custom reader</a>. This will avoid the need for an intermediate buffer.</p>
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
`,options:[{id:"0",page:165,label:"Yes",summary:"Reading from stream fixes the issue"},{id:"1",page:38,label:"No",summary:"Reading from stream doesn't fix the issue"}]},{content:`<p>Where does the input come from?</p>
`,options:[{id:"http",page:85,label:"An HTTP response",summary:"Input comes from HTTP"},{id:"serial",page:112,label:"A serial port",summary:"Input comes from a serial port"},{id:"file",page:84,label:"A file",summary:"Input comes from a file"},{id:"stream",page:115,label:"A stream",summary:"Input comes from a stream"},{id:"string",page:117,label:"A string (like <code>String</code> or <code>const char*</code>)",summary:"Input comes from a string"},{id:"char-ptr",page:79,label:"A char array or pointer (like <code>char[]</code> or <code>char*</code>)",summary:"Input comes from a char array"}]},{content:`<p>If you must keep the two calls to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>, you need to disable the zero-copy mode by passing a read-only input buffer. Casting the pointer will do the trick:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// replace this:</span>
<span class="hljs-built_in">deserializeJson</span>(doc, input, inputSize);

<span class="hljs-comment">// ...with this:</span>
<span class="hljs-built_in">deserializeJson</span>(doc, (<span class="hljs-type">const</span> <span class="hljs-type">char</span>*)input, inputSize);
</code></pre>
<p>Now that the zero-copy mode is disabled, you probably need a larger <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, so don't forget to update the capacity. As usual, use the <a href="/v6/assistant/">ArduinoJson Assistant</a> to compute the right capacity for your project.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Casting the pointer fixes the issue"},{id:"cast",page:117,label:"No",summary:"Casting the pointer doesn't fix the issue"}]},{content:`<p>When you pass a writeable buffer as the input of <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>, ArduinoJson uses the zero-copy mode. Instead of copying the strings from the input into the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, it stores pointers to the input buffer.</p>
<p>While doing this, the parser modifies the input buffer to unescape special characters and add string terminator.
When <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> returns the input buffer doesn't contain a valid JSON document anymore.
For this reason, you cannot call <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> twice with the same input buffer (if the input is writable).</p>
<p>I don't see any reason for calling <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> twice with the same input, so I recommend that your remove the second call.</p>
<p>Can you avoid duplicate calls to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>?</p>
`,options:[{id:"success",page:165,label:"Yes, and it fixes the issue",summary:"Removing the second call fixes the issue"},{id:"second-removed",page:117,label:"Yes, but it doesn't fix the issue",summary:"Removing the second call doesn't fix the issue"},{id:"cannot-remove",page:77,label:"No",summary:"The second call cannot be removed"}]},{content:`<p>Did you call <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> twice with the same input buffer?</p>
`,options:[{id:"two-calls",page:78,label:"Yes",summary:"Program calls `deserializeJson()` twice"},{id:"one-call",page:117,label:"No",summary:"Program doesn't call `deserializeJson()` twice"}]},{content:`<p>So, the JSON document is valid and not preceded by anything; yet, <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> returns <a href="/v6/api/misc/deserializationerror/#invalidinput"><code>InvalidInput</code></a>.</p>
<p>Well... I'm out of idea :-(</p>
`,tags:["needs_assistance"]},{content:`<p><code>254</code> or <code>255</code> is the first byte of the UTF-16 <a href="https://en.wikipedia.org/wiki/Byte_order_mark">Byte Order Mark</a> (BOM). ArduinoJson doesn't support UTF-16; it only supports ASCII and UTF-8. As a workaround, we can ask the server to encode the response with UTF-8.</p>
<p>To do this, add the following header to the HTTP request:</p>
<pre><code class="hljs language-http"><span class="hljs-attribute">Accept</span><span class="hljs-punctuation">: </span>application/json;charset=utf-8
</code></pre>
<p>Did this solve your problem?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"`Accept: application/json;charset=utf-8` solves the issue"},{id:"failure",page:38,label:"No",summary:"`Accept: application/json;charset=utf-8` doesn't solve the issue"}]},{content:`<p><code>239</code> is the first by of the UTF-8 <a href="https://en.wikipedia.org/wiki/Byte_order_mark">Byte Order Mark</a> (BOM).</p>
<p>ArduinoJson doesn't skip the BOM, you need to do it in your program by adding the following lines <strong>before</strong> calling <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// skip BOM</span>
stream.<span class="hljs-built_in">read</span>();  <span class="hljs-comment">// 0xEF</span>
stream.<span class="hljs-built_in">read</span>();  <span class="hljs-comment">// 0xBB</span>
stream.<span class="hljs-built_in">read</span>();  <span class="hljs-comment">// 0xBF</span>
</code></pre>
<p>Admitedly, this is quite hacky, so I recommend that you try to fix the server which should not include a BOM anyway.</p>
<p>Did this fix your problem?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Skipping the first 3 bytes solves the issue"},{id:"failure",page:38,label:"No",summary:"Skipping the first 3 bytes doesn't solve the issue"}]},{content:`<p>We must check that the JSON document is not preceded by a <a href="https://en.wikipedia.org/wiki/Byte_order_mark">Byte Order Mark</a> (BOM).</p>
<p>To do this, we'll peek at the first byte in the file and print the value to the serial port. Insert the following line <em>before</em> the call to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(file.<span class="hljs-built_in">peek</span>());
</code></pre>
<p>What value does it print?</p>
`,options:[{id:"utf8",page:82,label:"<code>239</code>",summary:"Input's first byte suggests a UTF-8 BOM"},{id:"utf16",page:81,label:"<code>254</code> or <code>255</code>",summary:"Input's first byte suggests a UTF-16 BOM"},{id:"no-bom",page:80,label:"Something else",summary:"Input's first byte doesn't suggest a BOM"}]},{content:`<p>We need to make sure that the JSON document is valid.
To do that, please print the input to the serial port, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">print</span>(file.<span class="hljs-built_in">readString</span>());
</code></pre>
<p>Then, copy the content and paste it in a JSON linter, like <a href="https://jsonlint.com/">jsonlint.com</a>.</p>
<p>Is the JSON document valid?</p>
`,options:[{id:"valid",page:83,label:"Yes",summary:"`jsonlint` says the document is valid"},{id:"invalid",page:101,label:"No",summary:"`jsonlint` says the document is invalid"}]},{content:`<p>Do you use an HTTP library?</p>
`,options:[{id:"httpclient",page:86,label:"Yes, I'm using <code>HTTPClient</code>",summary:"Program uses `HTTPClient`"},{id:"http-library",page:99,label:"Yes, but it's not <code>HTTPClient</code>",summary:"Program uses an unknown HTTP library"},{id:"no-library",page:95,label:"No",summary:"Program doesn't use an HTTP library"}]},{content:`<p>Did you check the status code?</p>
`,options:[{id:"status-ok",page:88,label:"Yes",summary:"The program already checks the status code"},{id:"check-status",page:87,label:"No",summary:"The program doesn't check the status code"}]},{content:`<p>Please check the status code like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-type">int</span> status = http.<span class="hljs-built_in">GET</span>();

Serial.<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Status code = &quot;</span>);
Serial.<span class="hljs-built_in">println</span>(status);
</code></pre>
<p>What do you get?</p>
`,options:[{id:"ok",page:88,label:"<code>200</code>",summary:"The status code is `200`"},{id:"positive",page:91,label:"A positive number (but not <code>200</code>)",summary:"The status code is positive"},{id:"negative",page:90,label:"A negative number",summary:"The status code is negative"}]},{content:`<p>Which function of <code>HTTPClient</code> do you call to get the response?</p>
`,options:[{id:"getstream",page:94,label:"<code>getStream()</code>",summary:"Response comes from `HTTPClient::getStream()`"},{id:"getstring",page:117,label:"<code>getString()</code>",summary:"Response comes from `HTTPClient::getString()`"},{id:"readstring",page:89,label:"<code>readString()</code>",summary:"Response comes from `HTTPClient::readString()`"}]},{content:`<p>You're calling the wrong function:</p>
<ul>
<li><code>HTTPClient::getString()</code> extracts the response's body</li>
<li><code>HTTPClient::readString()</code> is inherited from <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/"><code>Stream</code></a> and reads the complete response</li>
</ul>
<p>Unless you have very good reasons, you should call <code>getString()</code> not <code>readString()</code>.</p>
<p>Do calling <code>HTTPClient::getString()</code> solves your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Calling `HTTPClient::getString()` solves the issue"},{id:"getstring",page:117,label:"No",summary:"Calling `HTTPClient::getString()` doesn't solves the issue"}]},{content:`<p>A negative number indicates an error on the client side.</p>
<p>Here are the possible values that I'm aware of:</p>
<table class="table">
<thead>
<tr>
<th style="text-align:left">Symbol</th>
<th style="text-align:left">Value</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code>HTTPC_ERROR_CONNECTION_FAILED</code></td>
<td style="text-align:left"><code>-1</code></td>
</tr>
<tr>
<td style="text-align:left"><code>HTTPC_ERROR_SEND_HEADER_FAILED</code></td>
<td style="text-align:left"><code>-2</code></td>
</tr>
<tr>
<td style="text-align:left"><code>HTTPC_ERROR_SEND_PAYLOAD_FAILED</code></td>
<td style="text-align:left"><code>-3</code></td>
</tr>
<tr>
<td style="text-align:left"><code>HTTPC_ERROR_NOT_CONNECTED</code></td>
<td style="text-align:left"><code>-4</code></td>
</tr>
<tr>
<td style="text-align:left"><code>HTTPC_ERROR_CONNECTION_LOST</code></td>
<td style="text-align:left"><code>-5</code></td>
</tr>
<tr>
<td style="text-align:left"><code>HTTPC_ERROR_NO_STREAM</code></td>
<td style="text-align:left"><code>-6</code></td>
</tr>
<tr>
<td style="text-align:left"><code>HTTPC_ERROR_NO_HTTP_SERVER</code></td>
<td style="text-align:left"><code>-7</code></td>
</tr>
<tr>
<td style="text-align:left"><code>HTTPC_ERROR_TOO_LESS_RAM</code></td>
<td style="text-align:left"><code>-8</code></td>
</tr>
<tr>
<td style="text-align:left"><code>HTTPC_ERROR_ENCODING</code></td>
<td style="text-align:left"><code>-9</code></td>
</tr>
<tr>
<td style="text-align:left"><code>HTTPC_ERROR_STREAM_WRITE</code></td>
<td style="text-align:left"><code>-10</code></td>
</tr>
<tr>
<td style="text-align:left"><code>HTTPC_ERROR_READ_TIMEOUT</code></td>
<td style="text-align:left"><code>-11</code></td>
</tr>
</tbody>
</table>
<p>Hopefully, this will help you solve your issue.</p>
<p>There is nothing more I can do for you since this issue is not related to ArduinoJson.</p>
`,tags:["needs_assistance"]},{content:`<p>A positive number indicates an HTTP status returned by the server.</p>
<p>That's partly good news because it means you managed to reach the server.
Now you just have to figure out what went wrong.</p>
<p>First, you should look for the <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status">definition of the status code</a>.</p>
<p>Then, you should print the body of the response like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(http.<span class="hljs-built_in">getString</span>());
</code></pre>
<p>Hopefully, this will help you solve your issue.</p>
<p>There is nothing more I can do for you since this issue is not related to ArduinoJson.</p>
`,tags:["needs_assistance"]},{content:`<p>When you call <code>HTTPClient::getStream()</code>, you bypass the part that handles <a href="https://en.wikipedia.org/wiki/Chunked_transfer_encoding">Chunked Transfer Encoding</a>.
As a result, the response's body may contain some hexadecimal number at the begining of each chunk.
The most straightforward workaround is to downgrade the connection to HTTP 1.0.</p>
<p>To do this, add the following line <strong>before</strong> sending the request:</p>
<pre><code class="hljs language-c++">http.<span class="hljs-built_in">useHTTP10</span>(<span class="hljs-literal">true</span>);  <span class="hljs-comment">// avoid Chunked Transfer Encoding</span>
</code></pre>
<p>Did this solve your problem?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Calling `HTTPClient::useHTTP10(true)` solves the issue"},{id:"changed",page:93,label:"No",summary:"Calling `HTTPClient::useHTTP10(true)` doesn't solve the issue"}]},{content:`<p>We need to make sure that the JSON document is valid.
To do that, please print the content of the response to the serial port like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">print</span>(http.<span class="hljs-built_in">getStream</span>().<span class="hljs-built_in">readString</span>());
</code></pre>
<p>Then, copy the response and paste it in a JSON linter, like <a href="https://jsonlint.com/">jsonlint.com</a>.</p>
<p>Is the JSON document valid?</p>
`,options:[{id:"valid",page:113,label:"Yes",summary:"jsonlint says the document is valid"},{id:"invalid",page:101,label:"No",summary:"jsonlint says the document is invalid"}]},{content:`<p>Did you call <code>HTTPClient::useHTTP10(true)</code>?</p>
`,options:[{id:"http10-true",page:93,label:"Yes",summary:"Program calls `HTTPClient::useHTTP10(true)`"},{id:"http10-false",page:92,label:"No",summary:"Program doesn't call `HTTPClient::useHTTP10(true)`"}]},{content:`<p>Before calling <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>, did you skip the HTTP headers?</p>
`,options:[{id:"headers-skipped",page:98,label:"Yes",summary:"HTTP headers are skipped"},{id:"headers-not-skipped",page:97,label:"No",summary:"HTTP headers are not skipped"}]},{content:`<p>On some Arduino core (most notably <a href="https://github.com/arduino/ArduinoCore-avr/blob/master/cores/arduino/Stream.h">AVR core</a>), <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/streamfind/"><code>Stream::find()</code></a> takes a <code>char*</code> instead of a <code>const char*</code>. In this case, you'll get a compiler warning, which you can fix by extracting a char array, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-type">char</span> endOfHeaders[] = <span class="hljs-string">&quot;\\r\\n\\r\\n&quot;</span>;
client.<span class="hljs-built_in">find</span>(endOfHeaders);
</code></pre>
<p>Did this fix your problem?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Using a `char[]` fixes the warning"},{id:"failure",page:38,label:"No",summary:"Using a `char[]` doesn't fix the warning"}]},{content:`<p>Just like the HTTP request, the response contains some headers, followed by an empty line, and then followed by the body.
The body is the part that contains the JSON document; therefore, before calling <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>, you must skip the headers.</p>
<p>To skip the headers, call <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/streamfind/"><code>Stream::find()</code></a>, like so:</p>
<pre><code class="hljs language-c++">client.<span class="hljs-built_in">find</span>(<span class="hljs-string">&quot;\\r\\n\\r\\n&quot;</span>);
</code></pre>
<p>This function consumes the input stream until it finds the empty line (<code>\\r\\n\\r\\n</code>).</p>
<p>See the example <a href="/v6/example/http-client/">JsonHttpClient.ino</a> for a complete implementation.</p>
<p>Did this fix your problem?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Skipping HTTP headers solves the issue"},{id:"warning",page:96,label:"Yes, but there is a compiler warning about <code>client.find()</code>",summary:"Skipping HTTP headers solves the issue, but there is a warning"},{id:"header-skipped",page:98,label:"No",summary:"Skipping HTTP headers doesn't solve the issue"}]},{content:`<p>When you use HTTP 1.1, the server can send the response with <a href="https://en.wikipedia.org/wiki/Chunked_transfer_encoding">Chunked Transfer Encoding</a>.
As a result, the response's body may contain some hexadecimal number at the begining of each chunk.
The most straightforward workaround is to downgrade the connection to HTTP 1.0.</p>
<p>To do this, replace <code>HTTP/1.1</code> with <code>HTTP/1.0</code> in the first line of the request.</p>
<p>Did this solve your problem?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Using `HTTP/1.0` solves the issue"},{id:"http10",page:100,label:"No",summary:"Using `HTTP/1.0` doesn't solve the issue"}]},{content:`<p>Unfortunately, I only know how to use the following HTTP libraries:</p>
<ul>
<li><a href="https://github.com/esp8266/Arduino/tree/master/libraries/ESP8266HTTPClient">ESP8266HTTPClient</a></li>
<li><a href="https://github.com/espressif/arduino-esp32/tree/master/libraries/HTTPClient">HTTPClient for ESP32</a></li>
</ul>
`,tags:["needs_assistance"]},{content:`<p>What's the type of the input that you pass to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a></p>
`,options:[{id:"stream",page:113,label:"A stream",summary:"The input is a stream"},{id:"string",page:116,label:"A string",summary:"The input is a string"}]},{content:`<p>What is wrong with this JSON document?</p>
`,options:[{id:"comments",page:102,label:"It contains comments",summary:"The document contains comments"},{id:"other-error",page:103,label:"Something else",summary:"The document doesn't contain comments"}]},{content:`<p><a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> can read JSON documents that contain comments, but the support is disabled by default to reduce the footprint of the library.</p>
<p>To enable the support for comments, define <a href="/v6/api/config/enable_comments/"><code>ARDUINOJSON_ENABLE_COMMENTS</code></a> to <code>1</code> before including <code>ArduinoJson.h</code>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-meta">#<span class="hljs-keyword">define</span> ARDUINOJSON_ENABLE_COMMENTS 1</span>
<span class="hljs-meta">#<span class="hljs-keyword">include</span> <span class="hljs-string">&lt;ArduinoJson.h&gt;</span></span>
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Setting ARDUINOJSON_ENABLE_COMMENTS to 1 solves the issue"},{id:"failure",page:38,label:"No",summary:"Setting ARDUINOJSON_ENABLE_COMMENTS to 1 doesn't solve the issue"}]},{content:`<p>Well, if the JSON document is invalid, you have to fix it, otherwise ArduinoJson won't be able to parse it.</p>
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
`,options:[{id:"success",page:165,label:"Yes",summary:"Increasing serial buffer size solves the issue"},{id:"larger-buffer",page:113,label:"No",summary:"Increasing serial buffer size doesn't solves the issue"}]},{content:`<p>Any electric wire acts as an antenna; the longer the wire, the stronger the effect. This antenna picks up every electromagnetic field in the environment, which induces a current in the wire. On long wires, this current is strong enough to introduce errors in the communication.</p>
<p>Reducing the length of the cable certainly improve the error ratio, but is rarely applicable.
We can, however, improve the quality of the cable.
For example, you can replace the wires with a coaxial cable: the shielding will prevent the inner wire from acting as an antenna.</p>
<p>Please upgrade or shorten your cable.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Upgrading the cables solves the issue"},{id:"improved",page:107,label:"Somehow",summary:"Upgrading the cables improves the situation"},{id:"no-improvment",page:108,label:"No",summary:"Upgrading the cables doesn't solve the issue"}]},{content:`<p><a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> may return <a href="/v6/api/misc/deserializationerror/#invalidinput"><code>InvalidInput</code></a> because it starts reading the input mid-stream.</p>
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
`,options:[{id:"success",page:165,label:"Yes",summary:"Flushing the serial buffer fixes the issue"},{id:"flush",page:111,label:"No",summary:"Flushing the serial buffer doesn't fix the issue"}]},{content:`<p><a href="https://en.wikipedia.org/wiki/Error_correction_code">Error-correction codes (ECC)</a> are a way of transmitting the data with redundant information that allows the receiver to fix most of the errors.
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
`,options:[{id:"success",page:165,label:"Yes",summary:"Error-correction codes fix the issue"},{id:"ecc",page:108,label:"No",summary:"Error-correction codes doesn't fix the issue"}]},{content:`<p>We need to make sure that the JSON document is valid.
To do that, please print the input to the serial port, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">print</span>(Serial1.<span class="hljs-built_in">readString</span>());
</code></pre>
<p>Note that <a href="https://www.arduino.cc/reference/en/language/functions/communication/serial/readstring/"><code>Serial1.readString()</code></a> will wait for a timeout before returning, so the statement may appear frozen. Be patient.</p>
<p>Then, copy the response and paste it in a JSON linter, like <a href="https://jsonlint.com/">jsonlint.com</a>.</p>
<p>Is the JSON document valid?</p>
`,options:[{id:"valid",page:104,label:"Yes",summary:"`jsonlint` says the document is valid"},{id:"invalid",page:101,label:"No",summary:"`jsonlint` says the document is invalid"}]},{content:`<p>Any kind of communication is subject to errors: sometimes you send a <code>1</code> and receive a <code>0</code>.
The problem with the serial port is that there is no built-in way to fix these errors.
However, we can take some measures to reduce the error ratio to something acceptable.</p>
<p>The faster the communication, the higher the error ratio, so the first thing to try is to reduce the communication speed.
Please try to reduce the baud rate.</p>
<p class="short-warning">If your program receives from one port and logs to another one, <strong>make sure the latter runs at a much higher speed</strong>. Logging must be at least ten times faster, or it will slow down the receiving port, which may drop incoming bytes.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Reducing baud rate fixes the issue"},{id:"better",page:105,label:"Somehow",summary:"Reducing baud rate improves the situation"},{id:"not-better",page:108,label:"No",summary:"Reducing baud rate doesn't fix the issue"}]},{content:`<p>The <a href="https://en.wikipedia.org/wiki/AVR_microcontrollers">AVR</a> implementation of <a href="https://www.arduino.cc/en/Reference/SoftwareSerial"><code>SoftwareSerial</code></a> is <strong>notoriously unreliable</strong> 😱.
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
`,options:[{id:"success",page:165,label:"Yes",summary:"Removing `SoftwareSerial` solves the issue"},{id:"removed",page:111,label:"No",summary:"Removing `SoftwareSerial` doesn't solve the issue"}]},{content:`<p>Not all microcontrollers use the same voltage for the serial port.
Some use 5V logic; others use 3.3V.</p>
<p>For example, the Arduino UNO uses 5V whereas the ESP8266 uses 3.3V.</p>
<p>If you need to wire two devices with different voltages, you need a <a href="https://www.amazon.com/dp/B00NAY2BBY?tag=bblanchon0b-20">logic-level converter</a>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"The issue is a voltage mismatch"},{id:"voltage-ok",page:109,label:"No",summary:"The issue is not a voltage mismatch"}]},{content:`<p>Are you using <a href="https://www.arduino.cc/en/Reference/SoftwareSerial"><code>SoftwareSerial</code></a>?</p>
`,options:[{id:"software",page:110,label:"Yes",summary:"Program uses `SoftwareSerial`"},{id:"hardware",page:106,label:"No",summary:"Program doesn't use `SoftwareSerial`"}]},{content:`<p>We must check that the JSON document is not preceded by a  <a href="https://en.wikipedia.org/wiki/Byte_order_mark">Byte Order Mark</a> (BOM).</p>
<p>To do this, we'll peek at the first byte in the stream and print the value to the serial. Insert the following line before the call to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(stream.<span class="hljs-built_in">peek</span>());
</code></pre>
<p>What value does it print?</p>
`,options:[{id:"utf8",page:82,label:"<code>239</code>",summary:"Input's first byte suggests a UTF-8 BOM"},{id:"utf16",page:81,label:"<code>254</code> or <code>255</code>",summary:"Input's first byte suggests a UTF-16 BOM"},{id:"no-bom",page:80,label:"Something else",summary:"Input's first byte doesn't suggest a BOM"}]},{content:`<p>Sometimes, the input is invalid because some bytes were dropped when receiving the document.
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
`,options:[{id:"success",page:165,label:"Yes",summary:"Adding a buffer solves the issue"},{id:"buffer",page:113,label:"No",summary:"Adding a buffer doesn't solve the issue"}]},{content:`<p>We need to make sure that the JSON document is valid.
To do that, please print the input to the serial port, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">print</span>(stream.<span class="hljs-built_in">readString</span>());
</code></pre>
<p>Then, copy the response and paste it in a JSON linter, like <a href="https://jsonlint.com/">jsonlint.com</a>.</p>
<p>Is the JSON document valid?</p>
`,options:[{id:"valid",page:114,label:"Yes",summary:"`jsonlint` says the document is valid"},{id:"invalid",page:101,label:"No",summary:"`jsonlint` says the document is invalid"}]},{content:`<p>We must check that the JSON document is not preceded by a  <a href="https://en.wikipedia.org/wiki/Byte_order_mark">Byte Order Mark</a> (BOM).</p>
<p>To do this, we'll print the first byte to the serial port. Insert the following line before the call to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(input[<span class="hljs-number">0</span>]);
</code></pre>
<p>What value does it print?</p>
`,options:[{id:"utf8",page:82,label:"<code>239</code>",summary:"Input's first byte suggests a UTF-8 BOM"},{id:"utf16",page:81,label:"<code>254</code> or <code>255</code>",summary:"Input's first byte suggests a UTF-16 BOM"},{id:"no-bom",page:80,label:"Something else",summary:"Input's first byte doesn't suggest a BOM"}]},{content:`<p>We need to make sure that the JSON document is valid.
To do that, please print the content of the string to the serial port, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">print</span>(input);
</code></pre>
<p>Then, copy the response and paste it in a JSON linter, like <a href="https://jsonlint.com/">jsonlint.com</a>.</p>
<p>Is the JSON document valid?</p>
`,options:[{id:"valid",page:116,label:"Yes",summary:"`jsonlint` says the document is valid"},{id:"invalid",page:101,label:"No",summary:"`jsonlint` says the document is invalid"}]},{content:`<p>So, what's the problem then?</p>
`,options:[{id:"slow",page:142,label:"It's slow",summary:"Deserialisation is slow"},{id:"invalid",page:119,label:"I expected <code>InvalidInput</code> instead of <code>Ok</code>",summary:"`Ok` is incorrect; it should be `InvalidInput`"},{id:"crash",page:42,label:"My program crashes after calling <code>deserializeJson()</code>",summary:"Program crashes after calling `deserializeJson()`"},{id:"empty",page:131,label:"<code>JsonDocument</code> returns empty/null values",summary:"Program fails to extract values from the `JsonDocument`"},{id:"garbage",page:123,label:"<code>JsonDocument</code> returns garbage",summary:"`JsonDocument` returns garbage"},{id:"changing-strings",page:123,label:"The strings in the <code>JsonDocument</code> change for no reason",summary:"The strings in the `JsonDocument` change for no reason"},{id:"altered",page:127,label:"<code>deserializeJson()</code> alters the content of the input",summary:"Input buffer is modified"},{id:"truncated-strings",page:143,label:"Some strings are truncated",summary:"Some strings are truncated"}]},{content:`<p>What's the first character of your input?</p>
`,options:[{id:"brace",page:120,label:"An opening brace: <code>{</code>",summary:"The first character is `{`"},{id:"bracket",page:121,label:"An opening bracket: <code>[</code>",summary:"The first character is `[`"},{id:"quote",page:122,label:"A quote: <code>&quot;</code>",summary:'The first character is `"`'},{id:"other",page:150,label:"None of the above",summary:'The first character is neither `{`, nor `[`, nor `"`'}]},{content:`<p><a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> stops reading as soon as the JSON document ends.
In your case, it will read the input until it reaches the matching <code>}</code> and ignore any remaining characters.</p>
<p>Suppose the input looks like this:</p>
<pre><code class="hljs language-json"><span class="hljs-punctuation">{</span><span class="hljs-attr">&quot;key&quot;</span><span class="hljs-punctuation">:</span><span class="hljs-string">&quot;value&quot;</span><span class="hljs-punctuation">}</span>GARBAGE
</code></pre>
<p>Here, <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> reads the JSON object <code>{&quot;key&quot;:&quot;value&quot;}</code> and returns <code>Ok</code> ignoring the <code>GARBAGE</code> part.</p>
<p>This feature enables:</p>
<ol>
<li><a href="/v6/how-to/deserialize-a-very-large-document/#deserialization/in-chunks">deserializing in chunks</a>,</li>
<li>parsing <a href="https://en.wikipedia.org/wiki/JSON_streaming">JSON Streams</a>,</li>
<li>reading from non-zero-terminated input strings.</li>
</ol>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Garbage characters follow the input"},{id:"lint",page:130,label:"No",summary:"No garbage characters follow the input"}]},{content:`<p><a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> stops reading as soon as the JSON document ends.
In your case, it will read the input until it reaches the matching <code>]</code> and ignore any remaining characters.</p>
<p>Suppose the input looks like this:</p>
<pre><code class="hljs language-json"><span class="hljs-punctuation">[</span><span class="hljs-number">1</span><span class="hljs-punctuation">,</span><span class="hljs-number">2</span><span class="hljs-punctuation">,</span><span class="hljs-number">3</span><span class="hljs-punctuation">]</span>GARBAGE
</code></pre>
<p>Here, <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> reads the JSON array <code>[1,2,3]</code> and returns <code>Ok</code> ignoring the <code>GARBAGE</code> part.</p>
<p>This feature enables:</p>
<ol>
<li><a href="/v6/how-to/deserialize-a-very-large-document/#deserialization/in-chunks">deserializing in chunks</a>,</li>
<li>parsing <a href="https://en.wikipedia.org/wiki/JSON_streaming">JSON Streams</a>,</li>
<li>reading from non-zero-terminated input strings.</li>
</ol>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Garbage characters follow the input"},{id:"lint",page:130,label:"No",summary:"No garbage characters follow the input"}]},{content:`<p><a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> stops reading as soon as the JSON document ends.
In your case, it will read the input until it reaches the matching <code>&quot;</code> and ignore any remaining characters.</p>
<p>Suppose the input looks like this:</p>
<pre><code class="hljs language-json"><span class="hljs-string">&quot;hello&quot;</span>GARBAGE
</code></pre>
<p>Here, <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> reads the JSON string <code>&quot;hello&quot;</code> and returns <code>Ok</code> ignoring the <code>GARBAGE</code> part.</p>
<p>This feature enables:</p>
<ol>
<li><a href="/v6/how-to/deserialize-a-very-large-document/#deserialization/in-chunks">deserializing in chunks</a>,</li>
<li>parsing <a href="https://en.wikipedia.org/wiki/JSON_streaming">JSON Streams</a>,</li>
<li>reading from non-zero-terminated input strings.</li>
</ol>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Garbage characters follow the input"},{id:"lint",page:130,label:"No",summary:"No garbage characters follow the input"}]},{content:`<p>What is the type of the second argument passed to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>?</p>
`,options:[{id:"char-ptr",page:126,label:"<code>char*</code> (or <code>char[]</code>)",summary:"Input type is `char*`"},{id:"const-char-ptr",page:38,label:"<code>const char*</code>",summary:"Input type is `const char*`"},{id:"string",page:38,label:"<code>String</code> (or <code>std::string</code>)",summary:"Input type is `String`"},{id:"stream",page:38,label:"<code>Stream</code> (or <code>std::istream)</code>",summary:"Input type is `Stream`"}]},{content:`<p>The easiest solution is to disable the zero-copy mode by passing a read-only input buffer. Casting the pointer will do the trick:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// replace this:</span>
<span class="hljs-built_in">deserializeJson</span>(doc, input, inputSize);

<span class="hljs-comment">// ...with this:</span>
<span class="hljs-built_in">deserializeJson</span>(doc, (<span class="hljs-type">const</span> <span class="hljs-type">char</span>*)input, inputSize);
</code></pre>
<p>Now that the zero-copy mode is disabled, you probably need a larger <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, so don't forget to update the capacity. As usual, use the <a href="/v6/assistant/">ArduinoJson Assistant</a> to compute the right capacity for your project.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Casting the pointer fixes the issue"},{id:"cast",page:38,label:"No",summary:"Casting the pointer doesn't fix the issue"}]},{content:`<p>The easiest solution is to remove the buffer and pass the input stream directly to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>.</p>
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
`,options:[{id:"success",page:165,label:"Yes",summary:"Passing the stream to `deserializeJson()` fixes the issue"},{id:"cast",page:38,label:"No",summary:"Passing the stream to `deserializeJson()` doesn't fix the issue"}]},{content:`<p>When you pass a writeable buffer as the input of <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>, ArduinoJson uses the zero-copy mode. Instead of copying the strings from the input into the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, it stores pointers to the input buffer.
Therefore, the input buffer must stay alive during the whole lifetime of the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>; otherwise, all the strings in the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> will be dangling pointers.</p>
<p>Does your program fills this buffer from a <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/"><code>Stream</code></a> (like <a href="https://www.arduino.cc/en/Reference/SD"><code>File</code></a>, <a href="https://www.arduino.cc/reference/en/language/functions/communication/serial/"><code>Serial</code></a>, <a href="https://www.arduino.cc/en/Reference/EthernetClient"><code>EthernetClient</code></a>, <a href="https://www.arduino.cc/en/Reference/WiFiClient"><code>WifiClient</code></a>...)?</p>
`,options:[{id:"success",page:125,label:"Yes, the input comes from a stream",summary:"Input comes from a stream"},{id:"cast",page:124,label:"No, it doesn't",summary:"Input doesn't come from a stream"}]},{content:`<p>When you pass a writeable buffer as the input of <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>, ArduinoJson uses the zero-copy mode. Instead of copying the strings from the input into the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, it stores pointers to the input buffer.</p>
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
`,options:[{id:"success",page:165,label:"Yes",summary:"Casting the pointer fixes the issue"},{id:"cast",page:38,label:"No",summary:"Casting the pointer doesn't fix the issue"}]},{content:`<p>ArduinoJson isn't very picky about the input: its implementation favors code size and speed over strict conformance.
After all, size and speed are what matter the most for embedded software, right?</p>
<p>This means that ArduinoJson's parser may accept documents that would be rejected by other parsers.</p>
<p>For example, <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> tolerates the following substitutions:</p>
<ul>
<li><code>'hello'</code> instead of <code>&quot;hello&quot;</code> (single quotes)</li>
<li><code>nULL</code> or <code>n0n3</code> instead if <code>null</code> (only checks first character and length)</li>
<li><code>tRUE</code> or <code>t0t0</code> instead of <code>true</code> (ditto)</li>
<li><code>fALSE</code> or <code>fAkk3</code> instead of <code>false</code> (ditto)</li>
</ul>
<p>It also ignores the follwing UTF-8 errors:</p>
<ul>
<li><code>&quot;\\ud83d&quot;</code> (a leading surrogate without a trailing surrogate)</li>
<li><code>&quot;\\udda4&quot;</code> (a trailing surrogate without a leading surrogate)</li>
<li><code>&quot;\\ud83d\\ud83d&quot;</code> (two leading surrogates)</li>
</ul>
<p>Lastly, it supports C++-style comments when <a href="/v6/api/config/enable_comments/">ARDUINOSJSON_ENABLE_COMMENTS</a> is set to <code>1</code>.</p>
<p>As a result, you cannot use <a href="/v6/api/json/deserializejson/"><code>deserializeJson</code></a> as a JSON validator because you'd get many false-negatives.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"acceptable",page:165,label:"Yes",summary:"`deserializeJson()` tolerates the error, and that's OK"},{id:"unacceptable",page:150,label:"No",summary:"`deserializeJson()` should not let this error pass"}]},{content:`<p>So, <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> returns <code>Ok</code>, and jsonlint confirms that the input is valid.</p>
<p>I don't see any issue here; maybe you should <a href="/v6/troubleshooter/">start over</a>?</p>
`},{content:`<p>Let's make sure that your input is actually invalid.</p>
<p>Please go to <a href="https://jsonlint.com/">jsonlint.com</a>, paste your input, and press &quot;Validate JSON.&quot;</p>
<p>What does it say?</p>
`,options:[{id:"valid",page:129,label:"Document is valid",summary:"jsonlint says the document is valid"},{id:"invalid",page:128,label:"Document is invalid",summary:"jsonlint says the document is invalid"}]},{content:`<p>Do you use a filter (with <code>DeserializationOption::Filter</code>)?</p>
`,options:[{id:"filter",page:134,label:"Yes",summary:"Program uses `DeserializationOption::Filter`"},{id:"no-filter",page:138,label:"No",summary:"Program doesn't use `DeserializationOption::Filter`"}]},{content:`<p>When a program fails to extract the values from a <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, it's often because there is a confusion between arrays and objects.</p>
<p>For example, a common mistake is to write:</p>
<pre><code class="hljs language-c++"><span class="hljs-type">const</span> <span class="hljs-type">char</span>* temperature = doc[<span class="hljs-string">&quot;list&quot;</span>][<span class="hljs-string">&quot;main&quot;</span>][<span class="hljs-string">&quot;temp&quot;</span>];
</code></pre>
<p>instead of</p>
<pre><code class="hljs language-c++"><span class="hljs-type">const</span> <span class="hljs-type">char</span>* temperature = doc[<span class="hljs-string">&quot;list&quot;</span>][<span class="hljs-number">0</span>][<span class="hljs-string">&quot;main&quot;</span>][<span class="hljs-string">&quot;temp&quot;</span>];
</code></pre>
<p>You can find other examples in <a href="/v6/issues/cannot-get-values/">deserializeJson() succeeds but I cannot read any value</a>, but the simplest solution is to use the <a href="/v6/assistant/">ArduinoJson Assistant</a> because the last step shows how to extract the values.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Issue is a confusion between array and object"},{id:"array-object",page:38,label:"No",summary:"Issue is not a confusion between array and object"}]},{content:`<p>Maybe the filter excludes the part that it should keep. Let's verify that it's doing its job correctly.</p>
<p>Open the <a href="/v6/assistant/">ArduinoJson Assistant</a>:</p>
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
`,options:[{id:"success",page:165,label:"Yes",summary:"Fixing the filter solves the issue"},{id:"filter-ok",page:138,label:"No",summary:"Fixing the filter doesn't solve the issue"}]},{content:`<p>Please print the filter to the serial port like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-built_in">serializeJsonPretty</span>(filter, Serial);
</code></pre>
<p>Does the filter look as you expected?</p>
`,options:[{id:"size-ok",page:133,label:"Yes",summary:"The filter looks correct"},{id:"too-small",page:135,label:"No, some values are missing",summary:"The filter lacks some values"}]},{content:`<p>The filter's <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> is too small; please increase its capacity and try again.</p>
<p>If you want, you can use the <a href="/v6/assistant/">ArduinoJson Assistant</a> to compute the required capacity.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Increasing the filter's capacity fixes the issue"},{id:"size-increased",page:133,label:"No",summary:"Increasing the filter's capacity doesn't fix the issue"}]},{content:`<p>Which function do you call to deserialize the input?</p>
`,options:[{id:"json",page:38,label:"<code>deserializeJson()</code>",summary:"Program calls `deserializeJson()`"},{id:"msgpack",page:137,label:"<code>deserializeMsgPack()</code>",summary:"Program calls `deserializeMsgPack()`"}]},{content:`<p>It seems that your program fed <a href="/v6/api/msgpack/deserializemsgpack/"><code>deserializeMsgPack()</code></a> with garbage input.</p>
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
`,options:[{id:"success",page:165,label:"Yes",summary:"The input was incorrect"},{id:"not-garbage",page:38,label:"No",summary:"The input is correct"}]},{content:`<p>Please print the content of the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> to the serial port like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-built_in">serializeJson</span>(doc, Serial);
Serial.<span class="hljs-built_in">println</span>(); <span class="hljs-comment">// adds a line break (optional)</span>
</code></pre>
<p>What's the first character?</p>
`,options:[{id:"quote",page:141,label:"A quote (<code>&quot;</code>)",summary:"Serialized document starts with a quote"},{id:"bracket",page:132,label:"A square bracket (<code>[</code>)",summary:"Serialized document starts with a square bracket"},{id:"brace",page:132,label:"A curly brace (<code>{</code>)",summary:"Serialized document starts with a curly brace"},{id:"not-in-list",page:136,label:"None of the above",summary:"Serialized document starts with neither a quote, a bracket, nor a brace."}]},{content:`<p>If you cannot fix the server, you can at least reverse the double serialization (stringification) to get back the original object.</p>
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
`,options:[{id:"success",page:165,label:"Yes",summary:"Calling `deserializeJson()` twice fixes the issue"},{id:"call-twice",page:38,label:"No",summary:"Calling `deserializeJson()` twice doesn't fix the issue"}]},{content:`<p>In the server implementation, please look at the view that returns the faulty JSON.
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
`,options:[{id:"success",page:165,label:"Yes",summary:"Fixing the server fixes the issue"},{id:"server-ok",page:139,label:"No",summary:"Fixing the server doesn't fix the issue"}]},{content:`<p>If you see a double-quote at the beginning of the JSON input, it means that the whole document is neither an object or an array; it's a string. This happens when the input was incorrectly generated, by serializing (stringifying) to JSON twice.</p>
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
`,options:[{id:"server-fixable",page:140,label:"Yes",summary:"User can modify the server"},{id:"server-unfixable",page:139,label:"No",summary:"User cannot modify the server"}]},{content:`<p>Indeed, <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> can be pretty slow with unbuffered implementations of <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/"><code>Stream</code></a> (such as <code>File</code> and <code>WiFiClient</code>) because it reads characters one by one.</p>
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
`,options:[{id:"success",page:165,label:"Yes",summary:"`ReadBufferingStream` solves the issue"},{id:"buffered",page:38,label:"No",summary:"`ReadBufferingStream` doesn't solve the issue"}]},{content:`<p>Does the JSON input contain the Unicode character <code>\\u0000</code>?</p>
`,options:[{id:"nul",page:166,label:"Yes",summary:"The input contains `\\u0000`"},{id:"no-nul",page:149,label:"No",summary:"The input doesn't contain `\\u0000`"}]},{content:`<p>When you call <code>HTTPClient::getStream()</code>, you bypass the part that handles <a href="https://en.wikipedia.org/wiki/Chunked_transfer_encoding">Chunked Transfer Encoding</a>.
As a result, the response's body may be split in multiple chunks, making some strings look like they are truncated (in reality, they contain a line-break).</p>
<p>The most straightforward workaround is to downgrade the connection to HTTP 1.0.
To do this, add the following line <strong>before</strong> sending the request:</p>
<pre><code class="hljs language-c++">http.<span class="hljs-built_in">useHTTP10</span>(<span class="hljs-literal">true</span>);  <span class="hljs-comment">// avoid Chunked Transfer Encoding</span>
</code></pre>
<p>Did this solve your problem?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Calling `HTTPClient::useHTTP10(true)` solves the issue"},{id:"http10",page:38,label:"No",summary:"Calling `HTTPClient::useHTTP10(true)` doesn't solve the issue"}]},{content:`<p>Which function of <code>HTTPClient</code> do you call to get the response?</p>
`,options:[{id:"getstream",page:144,label:"<code>getStream()</code>",summary:"Response comes from `HTTPClient::getStream()`"},{id:"getstring",page:38,label:"<code>getString()</code>",summary:"Response comes from `HTTPClient::getString()`"}]},{content:`<p>When you use HTTP 1.1, the server can send the response with <a href="https://en.wikipedia.org/wiki/Chunked_transfer_encoding">Chunked Transfer Encoding</a>.
As a result, the response's body may be split in multiple chunks, making some strings look like they are truncated (in reality, they contain a line-break).</p>
<p>The most straightforward workaround is to downgrade the connection to HTTP 1.0.
To do this, replace <code>HTTP/1.1</code> with <code>HTTP/1.0</code> in the first line of the request.</p>
<p>Did this solve your problem?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Using `HTTP/1.0` solves the issue"},{id:"http10",page:38,label:"No",summary:"Using `HTTP/1.0` doesn't solve the issue"}]},{content:`<p>Unfortunately, I only know how to use the following HTTP libraries:</p>
<ul>
<li><a href="https://github.com/esp8266/Arduino/tree/master/libraries/ESP8266HTTPClient">ESP8266HTTPClient</a></li>
<li><a href="https://github.com/espressif/arduino-esp32/tree/master/libraries/HTTPClient">HTTPClient for ESP32</a></li>
</ul>
`,tags:["needs_assistance"]},{content:`<p>Do you use an HTTP library?</p>
`,options:[{id:"httpclient",page:145,label:"Yes, I'm using <code>HTTPClient</code>",summary:"Program uses `HTTPClient`"},{id:"http-library",page:147,label:"Yes, but it's not <code>HTTPClient</code>",summary:"Program uses an unknown HTTP library"},{id:"no-library",page:146,label:"No",summary:"Program doesn't use an HTTP library"}]},{content:`<p>Does the JSON input come from an HTTP response?</p>
`,options:[{id:"http",page:148,label:"Yes",summary:"The input comes from an HTTP response"},{id:"no-nul",page:38,label:"No",summary:"The input doesn't come from an HTTP response"}]},{content:`<p><a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> accepted a JSON document that was clearly invalid.<br>
You need to talk to a human about that.</p>
`,tags:["needs_assistance"]},{content:`<p><a href="/v6/api/misc/deserializationerror/#nomemory"><code>NoMemory</code></a> means that the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> is too small to hold the entire document.</p>
<p>Please use the <a href="/v6/assistant/">ArduinoJson Assistant</a> to compute the right capacity for your document.
Use the recommended capacity when creating <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> and retry.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Increasing the capacity of the `JsonDocument` fixes the issue"},{id:"increased-capacity",page:158,label:"No",summary:"Increasing the capacity of the `JsonDocument` doesn't fix the issue"}]},{content:`<p>I'm pretty confident the Assistant computes the right capacity; however, some settings can affect the result:</p>
<ol>
<li><em>Input type</em>, in step 1, should match the type of the argument passed to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a></li>
<li><em>Deduplicate values when measuring the capacity</em>, in step 3, should be unchecked, most likely.</li>
<li><em>Deduplicate keys when measuring the capacity</em>, in step 3, it should be unchecked if the keys are dynamic or if you used placeholders.</li>
</ol>
<p>Please verify that these settings are correct.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Changing the Assistant settings solves the issue"},{id:"failure",page:38,label:"No",summary:"Changing the Assistant settings doesn't solve the issue"}]},{content:`<p><code>doc.capacity()</code> returns <code>0</code>, which means <code>allocate()</code> returned <code>NULL</code>.</p>
<p>I think that, because <code>doc</code> is declared global, <code>allocate()</code> is called too early and the heap isn't ready.
I know this happens on ESP32 with the <code>SpiRamJsonDocument</code> shown in <a href="/v6/how-to/use-external-ram-on-esp32/">How to use external RAM on ESP32?</a>.</p>
<p>Please try to make <code>doc</code> a local variable.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Making `doc` local fixes the issue."},{id:"failure",page:38,label:"No",summary:"Making `doc` local doesn't fix the issue."}]},{content:`<p>Is <code>doc</code> a global variable?</p>
`,options:[{id:"global",page:153,label:"Yes",summary:"`doc` is a global variable"},{id:"local",page:152,label:"No",summary:"`doc` is not a global variable"}]},{content:`<p>Let's verify that the memory allocation succeeded.</p>
<p>Please print the capacity of the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> to the serial port, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(doc.<span class="hljs-built_in">capacity</span>());
</code></pre>
<p>What value does it show?</p>
`,options:[{id:"capacity-0",page:154,label:"<code>0</code>",summary:"`doc.capacity()` returns `0`"},{id:"capacity-ok",page:152,label:"The value passed to the constructor of <code>DynamicJsonDocument</code>",summary:"`doc.capacity()` returns the right value"}]},{content:`<p>Well, that's very bad news. It seems that your microcontroller doesn't have enough RAM to hold the JSON document.</p>
<p>Please read <a href="/v6/how-to/reduce-memory-usage/">How to reduce memory usage</a>.
It shows several techniques you can use to use less RAM.
Hopefully, you'll make enough room for the memory pool.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Reducing memory usage fixes the issue"},{id:"failure",page:38,label:"No",summary:"Reducing memory usage doesn't fix the issue"}]},{content:`<p>It's possible that the <a href="/v6/api/dynamicjsondocument/"><code>DynamicJsonDocument</code></a> failed to allocate the memory pool.</p>
<p>Please print the capacity of the <a href="/v6/api/dynamicjsondocument/"><code>DynamicJsonDocument</code></a> to the serial port, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(doc.<span class="hljs-built_in">capacity</span>());
</code></pre>
<p>What value does it show?</p>
`,options:[{id:"capacity-0",page:156,label:"<code>0</code>",summary:"`doc.capacity()` returns `0`"},{id:"capacity-ok",page:152,label:"The value passed to the constructor of <code>DynamicJsonDocument</code>",summary:"`doc.capacity()` returns the right value"}]},{content:`<p>What kind of <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> are you using?</p>
`,options:[{id:"basic",page:155,label:"<code>BasicJsonDocument&lt;T&gt;</code>",summary:"The document is a `BasicJsonDocument<T>`"},{id:"dynamicjsondocument",page:157,label:"<code>DynamicJsonDocument</code>",summary:"The `JsonDocument` is a `DynamicJsonDocument`"},{id:"staticjsondocument",page:152,label:"<code>StaticJsonDocument</code>",summary:"The `JsonDocument` is a `StaticJsonDocument`"}]},{content:`<p><a href="/v6/api/misc/deserializationerror/#notsupported"><code>NotSupported</code></a> means that the document was valid but contained features not supported by the library.</p>
<p>This error code was removed in <a href="/news/2021/05/04/version-6-18-0/">ArduinoJson 6.18</a>, so you should not see it anymore.</p>
<p>Can you upgrade the library?</p>
`,options:[{id:"can-uprade",page:163,label:"Yes",summary:"Library can be upgraded"},{id:"cannot-upgrade",page:161,label:"No",summary:"Library cannot be upgraded"}]},{content:`<p>So, I guess that you're not using <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> but <a href="/v6/api/msgpack/deserializemsgpack/"><code>deserializeMsgPack()</code></a>, right?</p>
<p>Indeed, before <a href="/news/2021/05/04/version-6-18-0/">ArduinoJson 6.18</a>, <a href="/v6/api/msgpack/deserializemsgpack/"><code>deserializeMsgPack()</code></a> returned <a href="/v6/api/misc/deserializationerror/#notsupported"><code>NotSupported</code></a> as soon as the input contains an unsupported MsgPack value type:</p>
<ul>
<li>a binary value</li>
<li>an extension value</li>
<li>an object key that is not a string</li>
</ul>
<p>If that's your case, then you must upgrade the library. Instead of returning an error, newer versions simply ignore the unsupported values and replace them with nulls.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Upgrading solve the issue"},{id:"upgraded",page:38,label:"No",summary:"Upgrading doesn't solve the issue"}]},{content:`<p><a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> returns <a href="/v6/api/misc/deserializationerror/#notsupported"><code>NotSupported</code></a> when is read an UTF-16 escape sequence but support is disabled.</p>
<p>To fix this issue, you must enable support UTF-16 escape sequences by defining <a href="/v6/api/config/decode_unicode/"><code>ARDUINOJSON_DECODE_UNICODE</code></a> to <code>1</code> before including <code>ArduinoJson.h</code>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-meta">#<span class="hljs-keyword">define</span> ARDUINOJSON_DECODE_UNICODE 1</span>
<span class="hljs-meta">#<span class="hljs-keyword">include</span> <span class="hljs-string">&lt;ArduinoJson.h&gt;</span></span>
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Defining `ARDUINOJSON_DECODE_UNICODE` solves the issue"},{id:"decode-unicode-set",page:160,label:"No",summary:"Defining `ARDUINOJSON_DECODE_UNICODE` doesn't solve the issue"}]},{content:`<p>If you're still seeing <code>NotSupported</code> after upgrading the library, it means that your code is not using the upgraded library.</p>
<p>Several versions of ArduinoJson are installed on your machine; you must either:</p>
<ul>
<li>removed the duplicates</li>
<li>upgrade the duplicates</li>
<li>make sure your project uses the right one</li>
</ul>
<p>To find the duplicates, run a disk search for a file named <code>ArduinoJson.h</code>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Removing duplicates fixes the issue"},{id:"duplicates-removed",page:161,label:"No",summary:"Removing duplicates doesn't fix the issue"}]},{content:`<p>Please upgrade ArduinoJson to the latest version.<br>
You may need to consult the <a href="https://github.com/bblanchon/ArduinoJson/blob/6.x/CHANGELOG.md">change log</a> to make sure there aren't any breaking changes that could break your existing code.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Upgrading solves the issue"},{id:"updraded",page:162,label:"No",summary:"Upgrading doesn't solves the issue"}]},{content:`<p><a href="/v6/api/misc/deserializationerror/#toodeep"><code>TooDeep</code></a> means that the input document has too many levels of nesting.</p>
<p><a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> is implemented with a recursive function: it's fast, small, and efficient, but it can cause a stack-overflow if the input document has too many levels. To protect your program against malicious input that could trigger a stack-overflow on purpose, ArduinoJson sets a limit on how many levels it accepts.</p>
<p>The default nesting limit is configured by <a href="/v6/api/config/default_nesting_limit/"><code>ARDUINOJSON_DEFAULT_NESTING_LIMIT</code></a>, which is set to <code>10</code> by default. To increase the limit, you can change this setting, or you can pass an extra argument to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-built_in">deserializeJson</span>(doc, input, DeserializationOption::<span class="hljs-built_in">NestingLimit</span>(<span class="hljs-number">20</span>));
</code></pre>
<p>The <a href="/v6/assistant/">ArduinoJson Assistant</a> shows an alert when your input overpasses the default limit and includes the appropriate <code>DeserializationOption::NestingLimit</code> in the sample program.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Increasing the limit fixes the issue"},{id:"limit-increased",page:38,label:"No",summary:"Increasing the limit doesn't fix the issue"}]},{content:`<p class="display-4">🙋🏻‍♂️</p>
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
`,options:[{id:"success",page:165,label:"Yes",summary:"Using `JsonString` solves the issue"},{id:"failure",page:38,label:"No",summary:"Using `JsonString` doesn't solves the issue"}]},{content:`<p>Does your issue concern serialization or deserialization?</p>
`,options:[{id:"serialization",page:168,label:"Serialization",summary:"The issue concerns serialization"},{id:"deserialization",page:39,label:"Deserialization",summary:"The issue concerns deserialization"}]},{content:`<p>What's the problem?</p>
`,options:[{id:"crash",page:169,label:"The program crashes",summary:"Program crashes"},{id:"empty",page:179,label:"The output is empty (e.g. <code>{}</code>, <code>[]</code>, or <code>null</code>)",summary:"Output is empty"},{id:"incomplete",page:208,label:"The output is incomplete",summary:"Output is incomplete"},{id:"garbage",page:191,label:"The output contains garbage",summary:"Output contains garbage"},{id:"empty-strings",page:185,label:"The output contains empty strings",summary:"Output contains empty strings"},{id:"null",page:208,label:"The output contains <code>null</code>",summary:"Output contains null"},{id:"float",page:188,label:"Floating-point values contain too many decimal digits",summary:"Floating-point values contain too many decimal digits"},{id:"slow",page:216,label:"It's slow",summary:"Serialization is slow"}]},{content:`<p>Do you use <a href="/v6/api/dynamicjsondocument/"><code>DynamicJsonDocument</code></a> or <a href="/v6/api/staticjsondocument/"><code>StaticJsonDocument</code></a>?</p>
`,options:[{id:"dynamicjsondocument",page:177,label:"<code>DynamicJsonDocument</code>",summary:"Program uses `DynamicJsonDocument`"},{id:"staticjsondocument",page:178,label:"<code>StaticJsonDocument</code>",summary:"Program uses `StaticJsonDocument`"}]},{content:`<p>Please replace all those string pointers with literals.</p>
<p>For example, replace:</p>
<pre><code class="hljs language-c++">doc[<span class="hljs-string">&quot;name&quot;</span>] = name;
</code></pre>
<p>with:</p>
<pre><code class="hljs language-c++">doc[<span class="hljs-string">&quot;name&quot;</span>] = <span class="hljs-string">&quot;name&quot;</span>;
</code></pre>
<p>Does your program still crash?</p>
`,options:[{id:"crash-with-literals",page:173,label:"Yes",summary:"Replacing string pointers with literals doesn't fix the crash"},{id:"no-crash-with-literals",page:171,label:"No",summary:"Replacing string pointers with literals fixes the crash"}]},{content:`<p>One of these string pointers is probably dangling or points to a non-zero-terminated string.</p>
<p>Please print them all to the serial port to find the faulty pointer.</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">print</span>(name);
doc[<span class="hljs-string">&quot;name&quot;</span>] = <span class="hljs-string">&quot;name&quot;</span>;
</code></pre>
<p>Can you locate the faulty string in the output?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Printing the string reveals the faulty pointer"},{id:"no-faulty-pointer",page:38,label:"No",summary:"Printing the string doesn't show any faulty pointer"}]},{content:`<p>Does your program insert string pointers in the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>?<br>
(for example, <code>doc[&quot;name&quot;] = name</code> where <code>name</code> is a <code>const char*</code>)</p>
`,options:[{id:"charptr",page:170,label:"Yes",summary:"Program inserts string pointers into the `JsonDocument`"},{id:"no-charptr",page:173,label:"No",summary:"Program doesn't insert string pointers into the `JsonDocument`"}]},{content:`<p>What is the type of the second argument passed to <a href="/v6/api/json/serializejson/"><code>serializeJson()</code></a>?</p>
`,options:[{id:"char-array",page:174,label:"<code>char[]</code>",summary:"Output type is `char[]`"},{id:"char-ptr",page:175,label:"<code>char*</code>",summary:"Output type is `char*`"},{id:"arduino-string",page:38,label:"<code>String</code>",summary:"Output type is `String`"},{id:"arduino-stream",page:38,label:"<code>Stream</code>",summary:"Output type is `Stream`"}]},{content:`<p>I think this output buffer could cause a <a href="https://en.wikipedia.org/wiki/Stack_buffer_overflow">stack overflow</a>.</p>
<p>Please try with a <a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a> instead of a <code>char[]</code>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Switching to `String` solves the issue"},{id:"failure",page:38,label:"No",summary:"Switching to `String` doesn't solve the issue"}]},{content:`<p>I think the output pointer is dangling.</p>
<p>Please try to use a <code>char[]</code> instead:</p>
<pre><code class="hljs language-c++"><span class="hljs-type">char</span> output[<span class="hljs-number">128</span>];
<span class="hljs-built_in">serializeJson</span>(doc, output);
</code></pre>
<p>Does your program still crash?</p>
`,options:[{id:"crash-with-char-array",page:38,label:"Yes",summary:"Replacing the output pointer with an array doesn't fix the crash"},{id:"no-crash-with-char-array",page:165,label:"No",summary:"Replacing the output pointer with an array fixes the crash"}]},{content:`<p>When you use <code>PROGMEM</code> with ArduinoJson (and any other Arduino code, really), you must make sure that the addresses in Flash memory aren't interpreted as addresses in RAM.</p>
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
`,options:[{id:"success",page:165,label:"Yes",summary:"Casting the pointer solves the issue"},{id:"failure",page:38,label:"No",summary:"Casting the pointer doesn't solve the issue"}]},{content:`<p>Do you use <code>PROGMEM</code> (Flash memory) in your program?</p>
`,options:[{id:"progmem",page:176,label:"Yes",summary:"Program uses `PROGMEM`"},{id:"no-progmem",page:172,label:"No",summary:"Program doesn't use `PROGMEM`"}]},{content:`<p>Because a <a href="/v6/api/staticjsondocument/"><code>StaticJsonDocument</code></a> resides on the stack, it may cause a <a href="https://en.wikipedia.org/wiki/Stack_buffer_overflow">stack-overflow</a>.</p>
<p>Some platforms can detect stack overflows, in which case they raise an exception; others let the program do nothing and let the program crash on its own.
The tricky part with stack overflows is that the program doesn't always crash; it can also expose all kind of weird behavior.</p>
<p>If you have no idea of what I'm talking about, please have a look a &quot;The missing C++ course&quot; in <a href="/book/">Mastering ArduioJson</a>, it explains the roles of the different areas of memory, as well as many other important stuffs.</p>
<p>Please switch to a <a href="/v6/api/dynamicjsondocument/"><code>DynamicJsonDocument</code></a></p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Switching to `DynamicJsonDocument` fixes the issue"},{id:"dynamicjsondocument-tried",page:177,label:"No",summary:"Switching to `DynamicJsonDocument` doesn't fix the issue"}]},{content:`<p>Please print the capacity of the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> to the serial port, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(doc.<span class="hljs-built_in">capacity</span>());
</code></pre>
<p>What value does it show?</p>
`,options:[{id:"capacity-0",page:183,label:"<code>0</code>",summary:"`doc.capacity()` returns `0`"},{id:"capacity-ok",page:184,label:"a positive integer",summary:"`doc.capacity()` looks good"}]},{content:`<p><code>doc.capacity()</code> returns <code>0</code>, which means <code>allocate()</code> returned <code>NULL</code>.</p>
<p>I think that, because <code>doc</code> is declared global, <code>allocate()</code> is called too early and the heap isn't ready.
I know this happens on ESP32 with the <code>SpiRamJsonDocument</code> shown in <a href="/v6/how-to/use-external-ram-on-esp32/">How to use external RAM on ESP32?</a>.</p>
<p>Please try to make <code>doc</code> a local variable.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Making `doc` local fixes the issue."},{id:"failure",page:38,label:"No",summary:"Making `doc` local doesn't fix the issue."}]},{content:`<p>Is <code>doc</code> a global variable?</p>
`,options:[{id:"global",page:180,label:"Yes",summary:"`doc` is a global variable"},{id:"local",page:182,label:"No",summary:"`doc` is not a global variable"}]},{content:`<p>Well, that's very bad news. It seems that your microcontroller doesn't have enough RAM to hold the JSON document.</p>
<p>Please read <a href="/v6/how-to/reduce-memory-usage/">How to reduce memory usage</a>.
It shows several techniques you can use to use less RAM.
Hopefully, you'll make enough room for the memory pool.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Reducing memory usage fixes the issue"},{id:"failure",page:38,label:"No",summary:"Reducing memory usage doesn't fix the issue"}]},{content:`<p>What kind of <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> do you use?</p>
`,options:[{id:"basic",page:181,label:"<code>BasicJsonDocument&lt;T&gt;</code>",summary:"The document is a `BasicJsonDocument<T>`"},{id:"dynamic",page:182,label:"<code>DynamicJsonDocument</code>",summary:"The document is a `DynamicJsonDocument`"},{id:"static",page:38,label:"<code>StaticJsonDocument</code>",summary:"The document is a `StaticJsonDocument`"}]},{content:`<p>Please print the value of <a href="/v6/api/jsondocument/overflowed/"><code>JsonDocument::overflowed()</code></a>, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(doc.<span class="hljs-built_in">overflowed</span>());
</code></pre>
<p>What value does it print?</p>
`,options:[{id:"overflowed-1",page:215,label:"<code>1</code> (or <code>true</code>)",summary:"`JsonDocument::overflowed()` returns `true`"},{id:"overflowed-0",page:38,label:"<code>0</code> (or <code>false</code>)",summary:"`JsonDocument::overflowed()` returns `false`"}]},{content:`<p>Do you call <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> before calling <a href="/v6/api/json/serializejson/"><code>serializeJson()</code></a>? (with the same <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>)</p>
`,options:[{id:"deserialize-yes",page:187,label:"Yes",summary:"Program calls `deserializeJson()`"},{id:"deserialize-no",page:38,label:"No",summary:"Program doesn't call `deserializeJson()`"}]},{content:`<p>When you pass a writeable buffer as the input of <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>, ArduinoJson uses the <strong>zero-copy mode</strong>. Instead of copying the strings from the input into the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, it stores pointers to the input buffer.
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
`,options:[{id:"success",page:165,label:"Yes",summary:"Casting the pointer fixes the issue"},{id:"casting-fails",page:38,label:"No",summary:"Casting the pointer doesn't fix the issue"}]},{content:`<p>What's the type of the second argument passed to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>?</p>
`,options:[{id:"char-ptr",page:186,label:"<code>char*</code> (or <code>char[]</code>)",summary:"Input type is `char*`"},{id:"const-char-ptr",page:38,label:"<code>const char*</code>",summary:"Input type is `const char*`"},{id:"string",page:38,label:"<code>String</code> (or <code>std::string</code>)",summary:"Input type is `String`"},{id:"stream",page:38,label:"<code>Stream</code> (or <code>std::istream)</code>",summary:"Input type is `Stream`"}]},{content:`<p>Supposing that the JSON output looks like this:</p>
<pre><code class="hljs language-json"><span class="hljs-punctuation">{</span><span class="hljs-attr">&quot;value&quot;</span><span class="hljs-punctuation">:</span><span class="hljs-number">24.79999924</span><span class="hljs-punctuation">}</span>
</code></pre>
<p>I'm assuming you expect it to look like that:</p>
<pre><code class="hljs language-json"><span class="hljs-punctuation">{</span><span class="hljs-attr">&quot;value&quot;</span><span class="hljs-punctuation">:</span><span class="hljs-number">24.8</span><span class="hljs-punctuation">}</span>
</code></pre>
<p>Please change the type of the variable from <code>float</code> to <code>double</code> and try again.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Replacing `float` with `double` fixes the issue"},{id:"double",page:190,label:"No",summary:"Replacing `float` with `double` doesn't fix the issue"}]},{content:`<p>I'm surprised that the previous solution didn't work.</p>
<p>We can try to change ArduinoJson's storage type to see if it solves your issue.</p>
<p>Please define <a href="/v6/api/config/use_double/">ARDUINOJSON_USE_DOUBLE</a> to <code>0</code> before including <code>ArduinoJson.h</code>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-meta">#<span class="hljs-keyword">define</span> ARDUINOJSON_USE_DOUBLE 0</span>
<span class="hljs-meta">#<span class="hljs-keyword">include</span> <span class="hljs-string">&lt;ArduinoJson.h&gt;</span></span>
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Defining `ARDUINOJSON_USE_DOUBLE` to `0` fixes the issue"},{id:"failure",page:38,label:"No",summary:"Defining `ARDUINOJSON_USE_DOUBLE` to `0` doesn't fix the issue"}]},{content:`<p>Please add the following function somewhere in your program:</p>
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
`,options:[{id:"success",page:165,label:"Yes",summary:"Rounding the value fixes the issue"},{id:"double",page:189,label:"No",summary:"Rounding the value doesn't fix the issue"}]},{content:`<p>What function produces the garbage?</p>
`,options:[{id:"json",page:198,label:"<code>serializeJson()</code> (or <code>serializeJsonPretty()</code>)",summary:"`serializeJson()` produces garbage"},{id:"msg",page:203,label:"<code>serializeMsgPack()</code>",summary:"`serializeMsgPack()` produces garbage"}]},{content:`<p>When you pass a writeable buffer as the input of <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>, ArduinoJson uses the <strong>zero-copy mode</strong>. Instead of copying the strings from the input into the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, it stores pointers to the input buffer.
Therefore, the input buffer must stay alive during the whole lifetime of the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>; otherwise, all the strings in the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> will be dangling pointers.</p>
<p>The easiest solution is to disable the zero-copy mode by passing a read-only input buffer. Casting the pointer will do the trick:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// replace this:</span>
<span class="hljs-built_in">deserializeJson</span>(doc, input, inputSize);

<span class="hljs-comment">// ...with this:</span>
<span class="hljs-built_in">deserializeJson</span>(doc, (<span class="hljs-type">const</span> <span class="hljs-type">char</span>*)input, inputSize);
</code></pre>
<p>Now that the zero-copy mode is disabled, you probably need a larger <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, so don't forget to update the capacity. As usual, use the <a href="/v6/assistant/">ArduinoJson Assistant</a> to compute the right capacity for your project.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Casting the pointer fixes the issue"},{id:"casting-fails",page:207,label:"No",summary:"Casting the pointer doesn't fix the issue"}]},{content:`<p>What's the type of the second argument passed to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>?</p>
`,options:[{id:"char-ptr",page:192,label:"<code>char*</code> (or <code>char[]</code>)",summary:"Input type is `char*`"},{id:"const-char-ptr",page:207,label:"<code>const char*</code>",summary:"Input type is `const char*`"},{id:"string",page:207,label:"<code>String</code> (or <code>std::string</code>)",summary:"Input type is `String`"},{id:"stream",page:207,label:"<code>Stream</code> (or <code>std::istream)</code>",summary:"Input type is `Stream`"}]},{content:`<p>You can insert <a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a> objects in a <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, but make sure you don't store the result of <a href="https://www.arduino.cc/reference/en/language/variables/data-types/string/functions/c_str/"><code>String::c_str()</code></a>.</p>
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
`,options:[{id:"success",page:165,label:"Yes",summary:"Removing `.c_str()` fixes the issue"},{id:"failure",page:38,label:"No",summary:"Removing `.c_str()` doesn't fix the issue"}]},{content:`<p>Do you use <a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a> in your program?</p>
`,options:[{id:"string",page:194,label:"Yes",summary:"Program uses `String`"},{id:"no-string",page:38,label:"No",summary:"Program doesn't use `String`"}]},{content:`<p><a href="/v6/api/staticjsondocument/"><code>StaticJsonDocument</code></a> stores its memory pool in the stack.
A large memory pool can overflow the stack a produce all kinds of strange behavior.
In particural, a <a href="https://en.wikipedia.org/wiki/Stack_buffer_overflow">stack overflow</a> can cause garbage in <a href="/v6/api/json/serializejson/"><code>serializeJson()</code></a>'s output.</p>
<p>Please switch to a <a href="/v6/api/dynamicjsondocument/"><code>DynamicJsonDocument</code></a>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Switching to `DynamicJsonDocument` fixes the issue"},{id:"dynamic",page:195,label:"No",summary:"Switching to `DynamicJsonDocument` doesn't fix the issue"}]},{content:`<p>Which kind of <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> do you use?</p>
`,options:[{id:"dynamic",page:195,label:"<code>DynamicJsonDocument</code>",summary:"Program uses `DynamicJsonDocument`"},{id:"static",page:196,label:"<code>StaticJsonDocument</code>",summary:"Program uses `StaticJsonDocument`"}]},{content:`<p>Do you call <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> before calling <a href="/v6/api/json/serializejson/"><code>serializeJson()</code></a>? (with the same <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>)</p>
`,options:[{id:"deserialize-yes",page:193,label:"Yes",summary:"Program calls `deserializeJson()`"},{id:"deserialize-no",page:207,label:"No",summary:"Program doesn't call `deserializeJson()`"}]},{content:`<p><a href="/v6/api/jsonarray/"><code>JsonArray</code></a> doesn't contain any data: it is a reference to an object stored in the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>. It becomes invalid as soon as the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> is destroyed; this could explain the garbage you see in the output.</p>
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
`,options:[{id:"success",page:165,label:"Yes",summary:"Extending the lifetime of the `JsonDocument` solves the issue"},{id:"not-destroyed",page:206,label:"No",summary:"Extending the lifetime of the `JsonDocument` doesn't solve the issue"}]},{content:`<p><a href="/v6/api/jsonobject/"><code>JsonObject</code></a> doesn't contain any data: it is a reference to an object stored in the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>. It becomes invalid as soon as the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> is destroyed; this could explain the garbage you see in the output.</p>
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
`,options:[{id:"success",page:165,label:"Yes",summary:"Extending the lifetime of the `JsonDocument` solves the issue"},{id:"not-destroyed",page:206,label:"No",summary:"Extending the lifetime of the `JsonDocument` doesn't solve the issue"}]},{content:`<p><a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a> doesn't contain any data: it is a reference to an object stored in the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>. It becomes invalid as soon as the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> is destroyed; this could explain the garbage you see in the output.</p>
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
`,options:[{id:"success",page:165,label:"Yes",summary:"Extending the lifetime of the `JsonDocument` solves the issue"},{id:"not-destroyed",page:206,label:"No",summary:"Extending the lifetime of the `JsonDocument` doesn't solve the issue"}]},{content:`<p><a href="/v6/api/msgpack/serializemsgpack/"><code>serializeMsgPack()</code></a> share a lot of code with <a href="/v6/api/json/serializejson/"><code>serializeJson()</code></a>. There is no reason you should produce garbage with one and not the other. You may have found a bug.</p>
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
`,options:[{id:"json",page:198,label:"Yes, <code>serializeJson()</code> produces garbage too",summary:"`serializeJson()` produces garbage too"},{id:"deserialize-no",page:202,label:"No, <code>serializeJson()</code> doesn't produces garbage",summary:"`serializeJson()` doesn't produces garbage"}]},{content:`<p><a href="/v6/api/jsondocument/garbagecollect/"><code>JsonDocument::garbageCollect()</code></a> invalidates all previously acquired <a href="/v6/api/jsonarray/"><code>JsonArray</code></a>, <a href="/v6/api/jsonobject/"><code>JsonObject</code></a>, and <a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a>.</p>
<p>After you call it, make sure to reassign  every references, like so:</p>
<pre><code class="hljs language-c++">JsonObject cfg = doc.<span class="hljs-built_in">createNestedObject</span>(<span class="hljs-string">&quot;config&quot;</span>);
<span class="hljs-comment">// ...</span>
doc.<span class="hljs-built_in">garbageCollect</span>();
cfg = doc[<span class="hljs-string">&quot;config&quot;</span>];
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Reassigning references fixes the issue"},{id:"reassigned",page:197,label:"No",summary:"Reassigning references doesn't fix the issue"}]},{content:`<p><a href="/v6/api/basicjsondocument/shrinktofit/"><code>JsonDocument::shrinkToFit()</code></a> invalidates all previously acquired <a href="/v6/api/jsonarray/"><code>JsonArray</code></a>, <a href="/v6/api/jsonobject/"><code>JsonObject</code></a>, and <a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a>.</p>
<p>After you call it, make sure to reassign  every references, like so:</p>
<pre><code class="hljs language-c++">JsonObject cfg = doc.<span class="hljs-built_in">createNestedObject</span>(<span class="hljs-string">&quot;config&quot;</span>);
<span class="hljs-comment">// ...</span>
doc.<span class="hljs-built_in">shrinkToFit</span>();
cfg = doc[<span class="hljs-string">&quot;config&quot;</span>];
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Reassigning references fixes the issue"},{id:"reassigned",page:197,label:"No",summary:"Reassigning references doesn't fix the issue"}]},{content:`<p>Do you use one of the following function?</p>
`,options:[{id:"garbagecollect",page:204,label:"<code>JsonDocument::garbageCollect()</code>",summary:"Program calls `JsonDocument::garbageCollect()`"},{id:"shrinktofit",page:205,label:"<code>JsonDocument::shrinkToFit()</code>",summary:"Program calls `JsonDocument::shrinkToFit()`"},{id:"none",page:197,label:"No",summary:"Program doesn't call an invalidating function"}]},{content:`<p>What is the type of the first argument passed to <a href="/v6/api/json/serializejson/"><code>serializeJson()</code></a>?</p>
`,options:[{id:"document",page:197,label:"<code>JsonDocument</code>",summary:"Program calls `serializeJson(const JsonDocument&, ...)`"},{id:"array",page:199,label:"<code>JsonArray</code> (or <code>JsonArrayConst</code>)",summary:"Program calls `serializeJson(JsonArrayConst, ...)`"},{id:"object",page:200,label:"<code>JsonObject</code> (or <code>JsonObjectConst</code>)",summary:"Program calls `serializeJson(JsonObjectConst, ...)`"},{id:"variant",page:201,label:"<code>JsonVariant</code> (or <code>JsonVariantConst</code>)",summary:"Program calls `serializeJson(JsonVariantConst, ...)`"}]},{content:`<p>Does your program call <a href="/v6/api/json/serializejson/"><code>serializeJson()</code></a> in a loop?</p>
`,options:[{id:"loop",page:212,label:"Yes",summary:"Program calls `serializeJson()` in a loop"},{id:"no-loop",page:213,label:"No",summary:"Program doesn't call `serializeJson()` in a loop"}]},{content:`<p>The ArduinoJson Assistant suggested a too small capacity because you didn't configure it properly.</p>
<p>Here are the things to watch for:</p>
<ol>
<li>the processor type in step 1</li>
<li>the tweaks in step 3, and &quot;Assume keys are const char* in particular</li>
</ol>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Reconfiguring the ArduinoJson Assistant solves the issue"},{id:"still-wrong",page:38,label:"No",summary:"Reconfiguring the ArduinoJson Assistant doesn't solve the issue."}]},{content:`<p>Please replace the call to <a href="/v6/api/jsondocument/clear/"><code>JsonDocument::clear()</code></a> with <a href="/v6/api/jsondocument/garbagecollect/"><code>JsonDocument::garbageCollect()</code></a>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Calling `JsonDocument::garbageCollect()` solves the issue"},{id:"gc",page:213,label:"No",summary:"Calling `JsonDocument::garbageCollect()` doesn't solve the issue"}]},{content:`<p>We can try to clear the content of the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>.</p>
<p>Please call <a href="/v6/api/jsondocument/clear/"><code>JsonDocument::clear()</code></a> at the beginning of the loop.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Calling `JsonDocument::clear()` solves the issue"},{id:"clear",page:213,label:"No",summary:"Calling `JsonDocument::clear()` doesn't solve the issue"},{id:"missing",page:210,label:"Yes, but now some values are missing",summary:"Calling `JsonDocument::clear()` solves the issue but removes other values"}]},{content:`<p>Calling <a href="/v6/api/json/serializejson/"><code>serializeJson()</code></a> is safe, but you'll run into issues if you modify the same <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> in a loop.</p>
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
`,options:[{id:"success",page:165,label:"Yes",summary:"Moving the `JsonDocument` inside the loop solves the issue"},{id:"inside",page:213,label:"No",summary:"Moving the `JsonDocument` inside the loop doesn't solve the issue"},{id:"outside",page:211,label:"I cannot move the declaration inside the loop",summary:"The `JsonDocument` cannot be moved inside the loop"}]},{content:`<p>Please print the value of <a href="/v6/api/jsondocument/overflowed/"><code>JsonDocument::overflowed()</code></a>, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(doc.<span class="hljs-built_in">overflowed</span>());
</code></pre>
<p>What value does it print?</p>
`,options:[{id:"overflowed-1",page:215,label:"<code>1</code> (or <code>true</code>)",summary:"`JsonDocument::overflowed()` returns `true`"},{id:"overflowed-0",page:214,label:"<code>0</code> (or <code>false</code>)",summary:"`JsonDocument::overflowed()` returns `false`"}]},{content:`<p>Does one of the strings in the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> contains a NUL (i.e.,  ASCII code 0, or <code>\\u0000</code>)?</p>
`,options:[{id:"nul",page:166,label:"Yes",summary:"One or more strings contain a NUL"},{id:"no-nul",page:38,label:"No",summary:"No string contains a NUL"}]},{content:`<p><a href="/v6/api/jsondocument/overflowed/"><code>JsonDocument::overflowed()</code></a> returns <code>true</code> when you try to insert a value in the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, but there isn't enough room to store it.</p>
<p>The solution is to increase the capacity of the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>.<br>
As usual, use the <a href="/v6/assistant/">ArduinoJson Assistant</a> to compute the right capacity for your project.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:165,label:"Yes",summary:"Increasing the capacity of the `JsonDocument` solves the issue."},{id:"assistant-is-wrong",page:209,label:"Yes, but the required capacity is greater than what the ArduinJson Assistant says.",summary:"The required capacity is greater than what the ArduinJson Assistant says."},{id:"capacity-increased",page:38,label:"No",summary:"Increasing the capacity of the `JsonDocument` doesn't solve the issue."}]},{content:`<p><a href="/v6/api/json/serializejson/"><code>serializeJson()</code></a> writes the JSON document mostly one character at a time, which can be pretty slow with unbuffered streams (such as <a href="https://www.arduino.cc/en/Reference/EthernetClient"><code>EthernetClient</code></a>, <a href="https://www.arduino.cc/en/Reference/WiFiClient"><code>WifiClient</code></a>, <a href="https://www.arduino.cc/en/Reference/SD"><code>File</code></a>, and <a href="https://github.com/knolleary/pubsubclient/">PubSubClient</a>).</p>
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
`,options:[{id:"success",page:165,label:"Yes",summary:"Adding `WriteBufferingStream` fixes the issue"},{id:"failure",page:38,label:"No",summary:"Adding `WriteBufferingStream` doesn't fix the issue"}]}];function Yo(e,s,n){var o;const t=Mo[e];return{...t,number:n||1,hash:s||"#",options:(o=t.options)==null?void 0:o.map((a,i)=>({...a,inputId:`option-${e}-${i}`,hash:(s?s+"/":"#")+a.id,missing:!Mo[a.page],selected:!1}))}}function el(e){var n;const s=[Yo(0)];if(e){let t=s[0];for(let o of e.substring(1).split("/")){const a=(n=t.options)==null?void 0:n.find(i=>i.id===o);if(!a){console.error(`Option "${o}" not found`);break}if(a.selected=!0,t.selectedOption=a,t=Yo(a.page,a.hash,t.number+1),!t)break;s.push(t)}}return s}function sl(e){return e.map(s=>s.selectedOption).filter(s=>!!s).map((s,n)=>`${n+1}. ${s.summary}`).join(`
`)}const yl="",nl=e=>new Promise(s=>setTimeout(s,e)),tl={components:{AssistanceModal:Er,TroubleshooterStep:Qr},data(){return{reportCopied:!1,hash:""}},mounted(){this.hash=location.hash,window.addEventListener("hashchange",()=>this.hash=location.hash)},computed:{needsAssistance(){var s;return!!((s=this.steps[this.steps.length-1].tags)!=null&&s.includes("needs_assistance"))},steps(){return el(this.hash)},report(){return sl(this.steps)}},methods:{choose(e){document.location.assign(e.hash),ga("set","page",document.location.pathname+document.location.hash),ga("send","pageview"),window.plausible("ArduinoJson Troubleshooter",{props:{hash:document.location.hash}})},async copyReport(){await navigator.clipboard.writeText(this.report),this.reportCopied=!0,await nl(2e3),this.reportCopied=!1}}},ol=se("div",null,[se("p",null,"Hi!"),se("p",null,[tn(" I'm the "),se("i",null,"ArduinoJson Troubleshooter"),tn(", and I'm here to help you fix your problem. I'll ask you a series of questions and give you some instructions along the way. ")]),se("p",null,"Ready? Here we go!")],-1),al={key:0},il=se("button",{type:"button",class:"btn btn-primary","data-toggle":"modal","data-target":"#assistance-modal"}," Contact support ",-1),rl=["disabled"];function ll(e,s,n,t,o,a){const i=Hn("TroubleshooterStep"),l=Hn("AssistanceModal");return de(),xe("div",null,[ol,(de(!0),xe(be,null,no(a.steps,(c,u)=>(de(),en(tt,{key:u,name:"fade",mode:"out-in"},{default:Yt(()=>[(de(),en(i,{key:c.hash,step:c,onChoose:a.choose,active:u==a.steps.length-1},null,8,["step","onChoose","active"]))]),_:2},1024))),128)),a.needsAssistance?(de(),xe("div",al,[il,tn(),se("button",{class:fs(["btn",{"btn-outline-primary":!o.reportCopied,"btn-success":o.reportCopied}]),disabled:o.reportCopied,onClick:s[0]||(s[0]=(...c)=>a.copyReport&&a.copyReport(...c))},Ps(o.reportCopied?"✓ Report copied":"Copy troubleshooter's report"),11,rl),ce(l,{id:"assistance-modal",report:a.report},null,8,["report"])])):Gn("",!0)])}Dr(on(tl,[["render",ll]])).provide("debug",!1).mount("#troubleshooter-app")})();
