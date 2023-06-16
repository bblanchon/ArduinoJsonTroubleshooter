(function(){"use strict";function rt(e,s){const t=Object.create(null),n=e.split(",");for(let o=0;o<n.length;o++)t[n[o]]=!0;return s?o=>!!t[o.toLowerCase()]:o=>!!t[o]}const B={},ns=[],ve=()=>{},$o=()=>!1,Ko=/^on[^a-z]/,As=e=>Ko.test(e),lt=e=>e.startsWith("onUpdate:"),Z=Object.assign,ct=(e,s)=>{const t=e.indexOf(s);t>-1&&e.splice(t,1)},Go=Object.prototype.hasOwnProperty,E=(e,s)=>Go.call(e,s),A=Array.isArray,os=e=>xs(e)==="[object Map]",rn=e=>xs(e)==="[object Set]",I=e=>typeof e=="function",Q=e=>typeof e=="string",pt=e=>typeof e=="symbol",M=e=>e!==null&&typeof e=="object",ln=e=>M(e)&&I(e.then)&&I(e.catch),cn=Object.prototype.toString,xs=e=>cn.call(e),Xo=e=>xs(e).slice(8,-1),pn=e=>xs(e)==="[object Object]",ut=e=>Q(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ns=rt(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zs=e=>{const s=Object.create(null);return t=>s[t]||(s[t]=e(t))},Zo=/-(\w)/g,Se=zs(e=>e.replace(Zo,(s,t)=>t?t.toUpperCase():"")),Qo=/\B([A-Z])/g,as=zs(e=>e.replace(Qo,"-$1").toLowerCase()),Is=zs(e=>e.charAt(0).toUpperCase()+e.slice(1)),dt=zs(e=>e?`on${Is(e)}`:""),Os=(e,s)=>!Object.is(e,s),ht=(e,s)=>{for(let t=0;t<e.length;t++)e[t](s)},Cs=(e,s,t)=>{Object.defineProperty(e,s,{configurable:!0,enumerable:!1,value:t})},ea=e=>{const s=parseFloat(e);return isNaN(s)?e:s},sa=e=>{const s=Q(e)?Number(e):NaN;return isNaN(s)?e:s};let un;const mt=()=>un||(un=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ft(e){if(A(e)){const s={};for(let t=0;t<e.length;t++){const n=e[t],o=Q(n)?aa(n):ft(n);if(o)for(const a in o)s[a]=o[a]}return s}else{if(Q(e))return e;if(M(e))return e}}const ta=/;(?![^(]*\))/g,na=/:([^]+)/,oa=/\/\*[^]*?\*\//g;function aa(e){const s={};return e.replace(oa,"").split(ta).forEach(t=>{if(t){const n=t.split(na);n.length>1&&(s[n[0].trim()]=n[1].trim())}}),s}function fs(e){let s="";if(Q(e))s=e;else if(A(e))for(let t=0;t<e.length;t++){const n=fs(e[t]);n&&(s+=n+" ")}else if(M(e))for(const t in e)e[t]&&(s+=t+" ");return s.trim()}const ia=rt("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function dn(e){return!!e||e===""}const Es=e=>Q(e)?e:e==null?"":A(e)||M(e)&&(e.toString===cn||!I(e.toString))?JSON.stringify(e,hn,2):String(e),hn=(e,s)=>s&&s.__v_isRef?hn(e,s.value):os(s)?{[`Map(${s.size})`]:[...s.entries()].reduce((t,[n,o])=>(t[`${n} =>`]=o,t),{})}:rn(s)?{[`Set(${s.size})`]:[...s.values()]}:M(s)&&!A(s)&&!pn(s)?String(s):s;let je;class ra{constructor(s=!1){this.detached=s,this._active=!0,this.effects=[],this.cleanups=[],this.parent=je,!s&&je&&(this.index=(je.scopes||(je.scopes=[])).push(this)-1)}get active(){return this._active}run(s){if(this._active){const t=je;try{return je=this,s()}finally{je=t}}}on(){je=this}off(){je=this.parent}stop(s){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!s){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function la(e,s=je){s&&s.active&&s.effects.push(e)}function ca(){return je}const gt=e=>{const s=new Set(e);return s.w=0,s.n=0,s},mn=e=>(e.w&Re)>0,fn=e=>(e.n&Re)>0,pa=({deps:e})=>{if(e.length)for(let s=0;s<e.length;s++)e[s].w|=Re},ua=e=>{const{deps:s}=e;if(s.length){let t=0;for(let n=0;n<s.length;n++){const o=s[n];mn(o)&&!fn(o)?o.delete(e):s[t++]=o,o.w&=~Re,o.n&=~Re}s.length=t}},yt=new WeakMap;let gs=0,Re=1;const bt=30;let we;const We=Symbol(""),vt=Symbol("");class jt{constructor(s,t=null,n){this.fn=s,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,la(this,n)}run(){if(!this.active)return this.fn();let s=we,t=Fe;for(;s;){if(s===this)return;s=s.parent}try{return this.parent=we,we=this,Fe=!0,Re=1<<++gs,gs<=bt?pa(this):gn(this),this.fn()}finally{gs<=bt&&ua(this),Re=1<<--gs,we=this.parent,Fe=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){we===this?this.deferStop=!0:this.active&&(gn(this),this.onStop&&this.onStop(),this.active=!1)}}function gn(e){const{deps:s}=e;if(s.length){for(let t=0;t<s.length;t++)s[t].delete(e);s.length=0}}let Fe=!0;const yn=[];function is(){yn.push(Fe),Fe=!1}function rs(){const e=yn.pop();Fe=e===void 0?!0:e}function pe(e,s,t){if(Fe&&we){let n=yt.get(e);n||yt.set(e,n=new Map);let o=n.get(t);o||n.set(t,o=gt()),bn(o)}}function bn(e,s){let t=!1;gs<=bt?fn(e)||(e.n|=Re,t=!mn(e)):t=!e.has(we),t&&(e.add(we),we.deps.push(e))}function Ce(e,s,t,n,o,a){const i=yt.get(e);if(!i)return;let l=[];if(s==="clear")l=[...i.values()];else if(t==="length"&&A(e)){const c=Number(n);i.forEach((u,h)=>{(h==="length"||h>=c)&&l.push(u)})}else switch(t!==void 0&&l.push(i.get(t)),s){case"add":A(e)?ut(t)&&l.push(i.get("length")):(l.push(i.get(We)),os(e)&&l.push(i.get(vt)));break;case"delete":A(e)||(l.push(i.get(We)),os(e)&&l.push(i.get(vt)));break;case"set":os(e)&&l.push(i.get(We));break}if(l.length===1)l[0]&&wt(l[0]);else{const c=[];for(const u of l)u&&c.push(...u);wt(gt(c))}}function wt(e,s){const t=A(e)?e:[...e];for(const n of t)n.computed&&vn(n);for(const n of t)n.computed||vn(n)}function vn(e,s){(e!==we||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const da=rt("__proto__,__v_isRef,__isVue"),jn=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(pt)),ha=_t(),ma=_t(!1,!0),fa=_t(!0),wn=ya();function ya(){const e={};return["includes","indexOf","lastIndexOf"].forEach(s=>{e[s]=function(...t){const n=q(this);for(let a=0,i=this.length;a<i;a++)pe(n,"get",a+"");const o=n[s](...t);return o===-1||o===!1?n[s](...t.map(q)):o}}),["push","pop","shift","unshift","splice"].forEach(s=>{e[s]=function(...t){is();const n=q(this)[s].apply(this,t);return rs(),n}}),e}function ba(e){const s=q(this);return pe(s,"has",e),s.hasOwnProperty(e)}function _t(e=!1,s=!1){return function(n,o,a){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return s;if(o==="__v_raw"&&a===(e?s?Ca:Nn:s?xn:An).get(n))return n;const i=A(n);if(!e){if(i&&E(wn,o))return Reflect.get(wn,o,a);if(o==="hasOwnProperty")return ba}const l=Reflect.get(n,o,a);return(pt(o)?jn.has(o):da(o))||(e||pe(n,"get",o),s)?l:re(l)?i&&ut(o)?l:l.value:M(l)?e?zn(l):St(l):l}}const va=_n(),ja=_n(!0);function _n(e=!1){return function(t,n,o,a){let i=t[n];if(ys(i)&&re(i)&&!re(o))return!1;if(!e&&(!Dt(o)&&!ys(o)&&(i=q(i),o=q(o)),!A(t)&&re(i)&&!re(o)))return i.value=o,!0;const l=A(t)&&ut(n)?Number(n)<t.length:E(t,n),c=Reflect.set(t,n,o,a);return t===q(a)&&(l?Os(o,i)&&Ce(t,"set",n,o):Ce(t,"add",n,o)),c}}function wa(e,s){const t=E(e,s);e[s];const n=Reflect.deleteProperty(e,s);return n&&t&&Ce(e,"delete",s,void 0),n}function _a(e,s){const t=Reflect.has(e,s);return(!pt(s)||!jn.has(s))&&pe(e,"has",s),t}function Ja(e){return pe(e,"iterate",A(e)?"length":We),Reflect.ownKeys(e)}const Jn={get:ha,set:va,deleteProperty:wa,has:_a,ownKeys:Ja},Ta={get:fa,set(e,s){return!0},deleteProperty(e,s){return!0}},Sa=Z({},Jn,{get:ma,set:ja}),Jt=e=>e,Ps=e=>Reflect.getPrototypeOf(e);function qs(e,s,t=!1,n=!1){e=e.__v_raw;const o=q(e),a=q(s);t||(s!==a&&pe(o,"get",s),pe(o,"get",a));const{has:i}=Ps(o),l=n?Jt:t?xt:At;if(i.call(o,s))return l(e.get(s));if(i.call(o,a))return l(e.get(a));e!==o&&e.get(s)}function Rs(e,s=!1){const t=this.__v_raw,n=q(t),o=q(e);return s||(e!==o&&pe(n,"has",e),pe(n,"has",o)),e===o?t.has(e):t.has(e)||t.has(o)}function Fs(e,s=!1){return e=e.__v_raw,!s&&pe(q(e),"iterate",We),Reflect.get(e,"size",e)}function Tn(e){e=q(e);const s=q(this);return Ps(s).has.call(s,e)||(s.add(e),Ce(s,"add",e,e)),this}function Sn(e,s){s=q(s);const t=q(this),{has:n,get:o}=Ps(t);let a=n.call(t,e);a||(e=q(e),a=n.call(t,e));const i=o.call(t,e);return t.set(e,s),a?Os(s,i)&&Ce(t,"set",e,s):Ce(t,"add",e,s),this}function kn(e){const s=q(this),{has:t,get:n}=Ps(s);let o=t.call(s,e);o||(e=q(e),o=t.call(s,e)),n&&n.call(s,e);const a=s.delete(e);return o&&Ce(s,"delete",e,void 0),a}function Dn(){const e=q(this),s=e.size!==0,t=e.clear();return s&&Ce(e,"clear",void 0,void 0),t}function Hs(e,s){return function(n,o){const a=this,i=a.__v_raw,l=q(i),c=s?Jt:e?xt:At;return!e&&pe(l,"iterate",We),i.forEach((u,h)=>n.call(o,c(u),c(h),a))}}function Ms(e,s,t){return function(...n){const o=this.__v_raw,a=q(o),i=os(a),l=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,u=o[e](...n),h=t?Jt:s?xt:At;return!s&&pe(a,"iterate",c?vt:We),{next(){const{value:y,done:j}=u.next();return j?{value:y,done:j}:{value:l?[h(y[0]),h(y[1])]:h(y),done:j}},[Symbol.iterator](){return this}}}}function He(e){return function(...s){return e==="delete"?!1:this}}function ka(){const e={get(a){return qs(this,a)},get size(){return Fs(this)},has:Rs,add:Tn,set:Sn,delete:kn,clear:Dn,forEach:Hs(!1,!1)},s={get(a){return qs(this,a,!1,!0)},get size(){return Fs(this)},has:Rs,add:Tn,set:Sn,delete:kn,clear:Dn,forEach:Hs(!1,!0)},t={get(a){return qs(this,a,!0)},get size(){return Fs(this,!0)},has(a){return Rs.call(this,a,!0)},add:He("add"),set:He("set"),delete:He("delete"),clear:He("clear"),forEach:Hs(!0,!1)},n={get(a){return qs(this,a,!0,!0)},get size(){return Fs(this,!0)},has(a){return Rs.call(this,a,!0)},add:He("add"),set:He("set"),delete:He("delete"),clear:He("clear"),forEach:Hs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=Ms(a,!1,!1),t[a]=Ms(a,!0,!1),s[a]=Ms(a,!1,!0),n[a]=Ms(a,!0,!0)}),[e,t,s,n]}const[Da,Aa,xa,Na]=ka();function Tt(e,s){const t=s?e?Na:xa:e?Aa:Da;return(n,o,a)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?n:Reflect.get(E(t,o)&&o in n?t:n,o,a)}const za={get:Tt(!1,!1)},Ia={get:Tt(!1,!0)},Oa={get:Tt(!0,!1)},An=new WeakMap,xn=new WeakMap,Nn=new WeakMap,Ca=new WeakMap;function Ea(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Pa(e){return e.__v_skip||!Object.isExtensible(e)?0:Ea(Xo(e))}function St(e){return ys(e)?e:kt(e,!1,Jn,za,An)}function qa(e){return kt(e,!1,Sa,Ia,xn)}function zn(e){return kt(e,!0,Ta,Oa,Nn)}function kt(e,s,t,n,o){if(!M(e)||e.__v_raw&&!(s&&e.__v_isReactive))return e;const a=o.get(e);if(a)return a;const i=Pa(e);if(i===0)return e;const l=new Proxy(e,i===2?n:t);return o.set(e,l),l}function ls(e){return ys(e)?ls(e.__v_raw):!!(e&&e.__v_isReactive)}function ys(e){return!!(e&&e.__v_isReadonly)}function Dt(e){return!!(e&&e.__v_isShallow)}function In(e){return ls(e)||ys(e)}function q(e){const s=e&&e.__v_raw;return s?q(s):e}function On(e){return Cs(e,"__v_skip",!0),e}const At=e=>M(e)?St(e):e,xt=e=>M(e)?zn(e):e;function Ra(e){Fe&&we&&(e=q(e),bn(e.dep||(e.dep=gt())))}function Fa(e,s){e=q(e);const t=e.dep;t&&wt(t)}function re(e){return!!(e&&e.__v_isRef===!0)}function Ha(e){return re(e)?e.value:e}const Ma={get:(e,s,t)=>Ha(Reflect.get(e,s,t)),set:(e,s,t,n)=>{const o=e[s];return re(o)&&!re(t)?(o.value=t,!0):Reflect.set(e,s,t,n)}};function Cn(e){return ls(e)?e:new Proxy(e,Ma)}class Ya{constructor(s,t,n,o){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new jt(s,()=>{this._dirty||(this._dirty=!0,Fa(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=n}get value(){const s=q(this);return Ra(s),(s._dirty||!s._cacheable)&&(s._dirty=!1,s._value=s.effect.run()),s._value}set value(s){this._setter(s)}}function Ua(e,s,t=!1){let n,o;const a=I(e);return a?(n=e,o=ve):(n=e.get,o=e.set),new Ya(n,o,a||!o,t)}function dl(e,...s){}function Me(e,s,t,n){let o;try{o=n?e(...n):e()}catch(a){Ys(a,s,t)}return o}function fe(e,s,t,n){if(I(e)){const a=Me(e,s,t,n);return a&&ln(a)&&a.catch(i=>{Ys(i,s,t)}),a}const o=[];for(let a=0;a<e.length;a++)o.push(fe(e[a],s,t,n));return o}function Ys(e,s,t,n=!0){const o=s?s.vnode:null;if(s){let a=s.parent;const i=s.proxy,l=t;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](e,i,l)===!1)return}a=a.parent}const c=s.appContext.config.errorHandler;if(c){Me(c,null,10,[e,i,l]);return}}Ba(e,t,o,n)}function Ba(e,s,t,n=!0){console.error(e)}let bs=!1,Nt=!1;const ae=[];let ke=0;const cs=[];let Ee=null,Ve=0;const En=Promise.resolve();let zt=null;function La(e){const s=zt||En;return e?s.then(this?e.bind(this):e):s}function Wa(e){let s=ke+1,t=ae.length;for(;s<t;){const n=s+t>>>1;vs(ae[n])<e?s=n+1:t=n}return s}function It(e){(!ae.length||!ae.includes(e,bs&&e.allowRecurse?ke+1:ke))&&(e.id==null?ae.push(e):ae.splice(Wa(e.id),0,e),Pn())}function Pn(){!bs&&!Nt&&(Nt=!0,zt=En.then(Fn))}function Va(e){const s=ae.indexOf(e);s>ke&&ae.splice(s,1)}function $a(e){A(e)?cs.push(...e):(!Ee||!Ee.includes(e,e.allowRecurse?Ve+1:Ve))&&cs.push(e),Pn()}function qn(e,s=bs?ke+1:0){for(;s<ae.length;s++){const t=ae[s];t&&t.pre&&(ae.splice(s,1),s--,t())}}function Rn(e){if(cs.length){const s=[...new Set(cs)];if(cs.length=0,Ee){Ee.push(...s);return}for(Ee=s,Ee.sort((t,n)=>vs(t)-vs(n)),Ve=0;Ve<Ee.length;Ve++)Ee[Ve]();Ee=null,Ve=0}}const vs=e=>e.id==null?1/0:e.id,Ka=(e,s)=>{const t=vs(e)-vs(s);if(t===0){if(e.pre&&!s.pre)return-1;if(s.pre&&!e.pre)return 1}return t};function Fn(e){Nt=!1,bs=!0,ae.sort(Ka);const s=ve;try{for(ke=0;ke<ae.length;ke++){const t=ae[ke];t&&t.active!==!1&&Me(t,null,14)}}finally{ke=0,ae.length=0,Rn(),bs=!1,zt=null,(ae.length||cs.length)&&Fn()}}function Ga(e,s,...t){if(e.isUnmounted)return;const n=e.vnode.props||B;let o=t;const a=s.startsWith("update:"),i=a&&s.slice(7);if(i&&i in n){const h=`${i==="modelValue"?"model":i}Modifiers`,{number:y,trim:j}=n[h]||B;j&&(o=t.map(D=>Q(D)?D.trim():D)),y&&(o=t.map(ea))}let l,c=n[l=dt(s)]||n[l=dt(Se(s))];!c&&a&&(c=n[l=dt(as(s))]),c&&fe(c,e,6,o);const u=n[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,fe(u,e,6,o)}}function Hn(e,s,t=!1){const n=s.emitsCache,o=n.get(e);if(o!==void 0)return o;const a=e.emits;let i={},l=!1;if(!I(e)){const c=u=>{const h=Hn(u,s,!0);h&&(l=!0,Z(i,h))};!t&&s.mixins.length&&s.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!a&&!l?(M(e)&&n.set(e,null),null):(A(a)?a.forEach(c=>i[c]=null):Z(i,a),M(e)&&n.set(e,i),i)}function Us(e,s){return!e||!As(s)?!1:(s=s.slice(2).replace(/Once$/,""),E(e,s[0].toLowerCase()+s.slice(1))||E(e,as(s))||E(e,s))}let ge=null,Mn=null;function Bs(e){const s=ge;return ge=e,Mn=e&&e.type.__scopeId||null,s}function Yn(e,s=ge,t){if(!s||e._n)return e;const n=(...o)=>{n._d&&jo(-1);const a=Bs(s);let i;try{i=e(...o)}finally{Bs(a),n._d&&jo(1)}return i};return n._n=!0,n._c=!0,n._d=!0,n}function hl(){}function Ot(e){const{type:s,vnode:t,proxy:n,withProxy:o,props:a,propsOptions:[i],slots:l,attrs:c,emit:u,render:h,renderCache:y,data:j,setupState:D,ctx:P,inheritAttrs:x}=e;let Y,L;const W=Bs(e);try{if(t.shapeFlag&4){const N=o||n;Y=Ae(h.call(N,N,y,a,D,j,P)),L=c}else{const N=s;Y=Ae(N.length>1?N(a,{attrs:c,slots:l,emit:u}):N(a,null)),L=s.props?c:Xa(c)}}catch(N){_s.length=0,Ys(N,e,1),Y=ce(_e)}let V=Y;if(L&&x!==!1){const N=Object.keys(L),{shapeFlag:ne}=V;N.length&&ne&7&&(i&&N.some(lt)&&(L=Za(L,i)),V=Ye(V,L))}return t.dirs&&(V=Ye(V),V.dirs=V.dirs?V.dirs.concat(t.dirs):t.dirs),t.transition&&(V.transition=t.transition),Y=V,Bs(W),Y}const Xa=e=>{let s;for(const t in e)(t==="class"||t==="style"||As(t))&&((s||(s={}))[t]=e[t]);return s},Za=(e,s)=>{const t={};for(const n in e)(!lt(n)||!(n.slice(9)in s))&&(t[n]=e[n]);return t};function Qa(e,s,t){const{props:n,children:o,component:a}=e,{props:i,children:l,patchFlag:c}=s,u=a.emitsOptions;if(s.dirs||s.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return n?Un(n,i,u):!!i;if(c&8){const h=s.dynamicProps;for(let y=0;y<h.length;y++){const j=h[y];if(i[j]!==n[j]&&!Us(u,j))return!0}}}else return(o||l)&&(!l||!l.$stable)?!0:n===i?!1:n?i?Un(n,i,u):!0:!!i;return!1}function Un(e,s,t){const n=Object.keys(s);if(n.length!==Object.keys(e).length)return!0;for(let o=0;o<n.length;o++){const a=n[o];if(s[a]!==e[a]&&!Us(t,a))return!0}return!1}function ei({vnode:e,parent:s},t){for(;s&&s.subTree===e;)(e=s.vnode).el=t,s=s.parent}const si=e=>e.__isSuspense;function ti(e,s){s&&s.pendingBranch?A(e)?s.effects.push(...e):s.effects.push(e):$a(e)}const Ls={};function Ct(e,s,t){return Bn(e,s,t)}function Bn(e,s,{immediate:t,deep:n,flush:o,onTrack:a,onTrigger:i}=B){var l;const c=ca()===((l=te)==null?void 0:l.scope)?te:null;let u,h=!1,y=!1;if(re(e)?(u=()=>e.value,h=Dt(e)):ls(e)?(u=()=>e,n=!0):A(e)?(y=!0,h=e.some(N=>ls(N)||Dt(N)),u=()=>e.map(N=>{if(re(N))return N.value;if(ls(N))return ps(N);if(I(N))return Me(N,c,2)})):I(e)?s?u=()=>Me(e,c,2):u=()=>{if(!(c&&c.isUnmounted))return j&&j(),fe(e,c,3,[D])}:u=ve,s&&n){const N=u;u=()=>ps(N())}let j,D=N=>{j=W.onStop=()=>{Me(N,c,4)}},P;if(Ts)if(D=ve,s?t&&fe(s,c,3,[u(),y?[]:void 0,D]):u(),o==="sync"){const N=er();P=N.__watcherHandles||(N.__watcherHandles=[])}else return ve;let x=y?new Array(e.length).fill(Ls):Ls;const Y=()=>{if(W.active)if(s){const N=W.run();(n||h||(y?N.some((ne,Ne)=>Os(ne,x[Ne])):Os(N,x)))&&(j&&j(),fe(s,c,3,[N,x===Ls?void 0:y&&x[0]===Ls?[]:x,D]),x=N)}else W.run()};Y.allowRecurse=!!s;let L;o==="sync"?L=Y:o==="post"?L=()=>ue(Y,c&&c.suspense):(Y.pre=!0,c&&(Y.id=c.uid),L=()=>It(Y));const W=new jt(u,L);s?t?Y():x=W.run():o==="post"?ue(W.run.bind(W),c&&c.suspense):W.run();const V=()=>{W.stop(),c&&c.scope&&ct(c.scope.effects,W)};return P&&P.push(V),V}function ni(e,s,t){const n=this.proxy,o=Q(e)?e.includes(".")?Ln(n,e):()=>n[e]:e.bind(n,n);let a;I(s)?a=s:(a=s.handler,t=s);const i=te;ds(this);const l=Bn(o,a.bind(n),t);return i?ds(i):Xe(),l}function Ln(e,s){const t=s.split(".");return()=>{let n=e;for(let o=0;o<t.length&&n;o++)n=n[t[o]];return n}}function ps(e,s){if(!M(e)||e.__v_skip||(s=s||new Set,s.has(e)))return e;if(s.add(e),re(e))ps(e.value,s);else if(A(e))for(let t=0;t<e.length;t++)ps(e[t],s);else if(rn(e)||os(e))e.forEach(t=>{ps(t,s)});else if(pn(e))for(const t in e)ps(e[t],s);return e}function $e(e,s,t,n){const o=e.dirs,a=s&&s.dirs;for(let i=0;i<o.length;i++){const l=o[i];a&&(l.oldValue=a[i].value);let c=l.dir[n];c&&(is(),fe(c,t,8,[e.el,l,e,s]),rs())}}function oi(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Xn(()=>{e.isMounted=!0}),Zn(()=>{e.isUnmounting=!0}),e}const ye=[Function,Array],Wn={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ye,onEnter:ye,onAfterEnter:ye,onEnterCancelled:ye,onBeforeLeave:ye,onLeave:ye,onAfterLeave:ye,onLeaveCancelled:ye,onBeforeAppear:ye,onAppear:ye,onAfterAppear:ye,onAppearCancelled:ye},ai={name:"BaseTransition",props:Wn,setup(e,{slots:s}){const t=Bi(),n=oi();let o;return()=>{const a=s.default&&Kn(s.default(),!0);if(!a||!a.length)return;let i=a[0];if(a.length>1){for(const x of a)if(x.type!==_e){i=x;break}}const l=q(e),{mode:c}=l;if(n.isLeaving)return Pt(i);const u=$n(i);if(!u)return Pt(i);const h=Et(u,l,n,t);qt(u,h);const y=t.subTree,j=y&&$n(y);let D=!1;const{getTransitionKey:P}=u.type;if(P){const x=P();o===void 0?o=x:x!==o&&(o=x,D=!0)}if(j&&j.type!==_e&&(!Ge(u,j)||D)){const x=Et(j,l,n,t);if(qt(j,x),c==="out-in")return n.isLeaving=!0,x.afterLeave=()=>{n.isLeaving=!1,t.update.active!==!1&&t.update()},Pt(i);c==="in-out"&&u.type!==_e&&(x.delayLeave=(Y,L,W)=>{const V=Vn(n,j);V[String(j.key)]=j,Y._leaveCb=()=>{L(),Y._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=W})}return i}}};function Vn(e,s){const{leavingVNodes:t}=e;let n=t.get(s.type);return n||(n=Object.create(null),t.set(s.type,n)),n}function Et(e,s,t,n){const{appear:o,mode:a,persisted:i=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:y,onLeave:j,onAfterLeave:D,onLeaveCancelled:P,onBeforeAppear:x,onAppear:Y,onAfterAppear:L,onAppearCancelled:W}=s,V=String(e.key),N=Vn(t,e),ne=(O,G)=>{O&&fe(O,n,9,G)},Ne=(O,G)=>{const U=G[1];ne(O,G),A(O)?O.every(ie=>ie.length<=1)&&U():O.length<=1&&U()},ze={mode:a,persisted:i,beforeEnter(O){let G=l;if(!t.isMounted)if(o)G=x||l;else return;O._leaveCb&&O._leaveCb(!0);const U=N[V];U&&Ge(e,U)&&U.el._leaveCb&&U.el._leaveCb(),ne(G,[O])},enter(O){let G=c,U=u,ie=h;if(!t.isMounted)if(o)G=Y||c,U=L||u,ie=W||h;else return;let T=!1;const K=O._enterCb=he=>{T||(T=!0,he?ne(ie,[O]):ne(U,[O]),ze.delayedLeave&&ze.delayedLeave(),O._enterCb=void 0)};G?Ne(G,[O,K]):K()},leave(O,G){const U=String(e.key);if(O._enterCb&&O._enterCb(!0),t.isUnmounting)return G();ne(y,[O]);let ie=!1;const T=O._leaveCb=K=>{ie||(ie=!0,G(),K?ne(P,[O]):ne(D,[O]),O._leaveCb=void 0,N[U]===e&&delete N[U])};N[U]=e,j?Ne(j,[O,T]):T()},clone(O){return Et(O,s,t,n)}};return ze}function Pt(e){if(Vs(e))return e=Ye(e),e.children=null,e}function $n(e){return Vs(e)?e.children?e.children[0]:void 0:e}function qt(e,s){e.shapeFlag&6&&e.component?qt(e.component.subTree,s):e.shapeFlag&128?(e.ssContent.transition=s.clone(e.ssContent),e.ssFallback.transition=s.clone(e.ssFallback)):e.transition=s}function Kn(e,s=!1,t){let n=[],o=0;for(let a=0;a<e.length;a++){let i=e[a];const l=t==null?i.key:String(t)+String(i.key!=null?i.key:a);i.type===be?(i.patchFlag&128&&o++,n=n.concat(Kn(i.children,s,l))):(s||i.type!==_e)&&n.push(l!=null?Ye(i,{key:l}):i)}if(o>1)for(let a=0;a<n.length;a++)n[a].patchFlag=-2;return n}function Rt(e,s){return I(e)?(()=>Z({name:e.name},s,{setup:e}))():e}const Ws=e=>!!e.type.__asyncLoader,Vs=e=>e.type.__isKeepAlive;function ii(e,s){Gn(e,"a",s)}function ri(e,s){Gn(e,"da",s)}function Gn(e,s,t=te){const n=e.__wdc||(e.__wdc=()=>{let o=t;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if($s(s,n,t),t){let o=t.parent;for(;o&&o.parent;)Vs(o.parent.vnode)&&li(n,s,t,o),o=o.parent}}function li(e,s,t,n){const o=$s(s,e,n,!0);Qn(()=>{ct(n[s],o)},t)}function $s(e,s,t=te,n=!1){if(t){const o=t[e]||(t[e]=[]),a=s.__weh||(s.__weh=(...i)=>{if(t.isUnmounted)return;is(),ds(t);const l=fe(s,t,e,i);return Xe(),rs(),l});return n?o.unshift(a):o.push(a),a}}const Pe=e=>(s,t=te)=>(!Ts||e==="sp")&&$s(e,(...n)=>s(...n),t),ci=Pe("bm"),Xn=Pe("m"),pi=Pe("bu"),ui=Pe("u"),Zn=Pe("bum"),Qn=Pe("um"),di=Pe("sp"),hi=Pe("rtg"),mi=Pe("rtc");function fi(e,s=te){$s("ec",e,s)}const eo="components";function Ft(e,s){return yi(eo,e,!0,s)||e}const gi=Symbol.for("v-ndc");function yi(e,s,t=!0,n=!1){const o=ge||te;if(o){const a=o.type;if(e===eo){const l=Ki(a,!1);if(l&&(l===s||l===Se(s)||l===Is(Se(s))))return a}const i=so(o[e]||a[e],s)||so(o.appContext[e],s);return!i&&n?a:i}}function so(e,s){return e&&(e[s]||e[Se(s)]||e[Is(Se(s))])}function to(e,s,t,n){let o;const a=t&&t[n];if(A(e)||Q(e)){o=new Array(e.length);for(let i=0,l=e.length;i<l;i++)o[i]=s(e[i],i,void 0,a&&a[i])}else if(typeof e=="number"){o=new Array(e);for(let i=0;i<e;i++)o[i]=s(i+1,i,void 0,a&&a[i])}else if(M(e))if(e[Symbol.iterator])o=Array.from(e,(i,l)=>s(i,l,void 0,a&&a[l]));else{const i=Object.keys(e);o=new Array(i.length);for(let l=0,c=i.length;l<c;l++){const u=i[l];o[l]=s(e[u],u,l,a&&a[l])}}else o=[];return t&&(t[n]=o),o}const Ht=e=>e?To(e)?Zt(e)||e.proxy:Ht(e.parent):null,js=Z(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ht(e.parent),$root:e=>Ht(e.root),$emit:e=>e.emit,$options:e=>Ut(e),$forceUpdate:e=>e.f||(e.f=()=>It(e.update)),$nextTick:e=>e.n||(e.n=La.bind(e.proxy)),$watch:e=>ni.bind(e)}),Mt=(e,s)=>e!==B&&!e.__isScriptSetup&&E(e,s),bi={get({_:e},s){const{ctx:t,setupState:n,data:o,props:a,accessCache:i,type:l,appContext:c}=e;let u;if(s[0]!=="$"){const D=i[s];if(D!==void 0)switch(D){case 1:return n[s];case 2:return o[s];case 4:return t[s];case 3:return a[s]}else{if(Mt(n,s))return i[s]=1,n[s];if(o!==B&&E(o,s))return i[s]=2,o[s];if((u=e.propsOptions[0])&&E(u,s))return i[s]=3,a[s];if(t!==B&&E(t,s))return i[s]=4,t[s];Yt&&(i[s]=0)}}const h=js[s];let y,j;if(h)return s==="$attrs"&&pe(e,"get",s),h(e);if((y=l.__cssModules)&&(y=y[s]))return y;if(t!==B&&E(t,s))return i[s]=4,t[s];if(j=c.config.globalProperties,E(j,s))return j[s]},set({_:e},s,t){const{data:n,setupState:o,ctx:a}=e;return Mt(o,s)?(o[s]=t,!0):n!==B&&E(n,s)?(n[s]=t,!0):E(e.props,s)||s[0]==="$"&&s.slice(1)in e?!1:(a[s]=t,!0)},has({_:{data:e,setupState:s,accessCache:t,ctx:n,appContext:o,propsOptions:a}},i){let l;return!!t[i]||e!==B&&E(e,i)||Mt(s,i)||(l=a[0])&&E(l,i)||E(n,i)||E(js,i)||E(o.config.globalProperties,i)},defineProperty(e,s,t){return t.get!=null?e._.accessCache[s]=0:E(t,"value")&&this.set(e,s,t.value,null),Reflect.defineProperty(e,s,t)}};function no(e){return A(e)?e.reduce((s,t)=>(s[t]=null,s),{}):e}let Yt=!0;function vi(e){const s=Ut(e),t=e.proxy,n=e.ctx;Yt=!1,s.beforeCreate&&oo(s.beforeCreate,e,"bc");const{data:o,computed:a,methods:i,watch:l,provide:c,inject:u,created:h,beforeMount:y,mounted:j,beforeUpdate:D,updated:P,activated:x,deactivated:Y,beforeDestroy:L,beforeUnmount:W,destroyed:V,unmounted:N,render:ne,renderTracked:Ne,renderTriggered:ze,errorCaptured:O,serverPrefetch:G,expose:U,inheritAttrs:ie,components:T,directives:K,filters:he}=s;if(u&&ji(u,n,null),i)for(const X in i){const F=i[X];I(F)&&(n[X]=F.bind(t))}if(o){const X=o.call(t,t);M(X)&&(e.data=St(X))}if(Yt=!0,a)for(const X in a){const F=a[X],ss=I(F)?F.bind(t,t):I(F.get)?F.get.bind(t,t):ve,at=!I(F)&&I(F.set)?F.set.bind(t):ve,ts=Xi({get:ss,set:at});Object.defineProperty(n,X,{enumerable:!0,configurable:!0,get:()=>ts.value,set:Ie=>ts.value=Ie})}if(l)for(const X in l)ao(l[X],n,t,X);if(c){const X=I(c)?c.call(t):c;Reflect.ownKeys(X).forEach(F=>{ki(F,X[F])})}h&&oo(h,e,"c");function oe(X,F){A(F)?F.forEach(ss=>X(ss.bind(t))):F&&X(F.bind(t))}if(oe(ci,y),oe(Xn,j),oe(pi,D),oe(ui,P),oe(ii,x),oe(ri,Y),oe(fi,O),oe(mi,Ne),oe(hi,ze),oe(Zn,W),oe(Qn,N),oe(di,G),A(U))if(U.length){const X=e.exposed||(e.exposed={});U.forEach(F=>{Object.defineProperty(X,F,{get:()=>t[F],set:ss=>t[F]=ss})})}else e.exposed||(e.exposed={});ne&&e.render===ve&&(e.render=ne),ie!=null&&(e.inheritAttrs=ie),T&&(e.components=T),K&&(e.directives=K)}function ji(e,s,t=ve){A(e)&&(e=Bt(e));for(const n in e){const o=e[n];let a;M(o)?"default"in o?a=Xs(o.from||n,o.default,!0):a=Xs(o.from||n):a=Xs(o),re(a)?Object.defineProperty(s,n,{enumerable:!0,configurable:!0,get:()=>a.value,set:i=>a.value=i}):s[n]=a}}function oo(e,s,t){fe(A(e)?e.map(n=>n.bind(s.proxy)):e.bind(s.proxy),s,t)}function ao(e,s,t,n){const o=n.includes(".")?Ln(t,n):()=>t[n];if(Q(e)){const a=s[e];I(a)&&Ct(o,a)}else if(I(e))Ct(o,e.bind(t));else if(M(e))if(A(e))e.forEach(a=>ao(a,s,t,n));else{const a=I(e.handler)?e.handler.bind(t):s[e.handler];I(a)&&Ct(o,a,e)}}function Ut(e){const s=e.type,{mixins:t,extends:n}=s,{mixins:o,optionsCache:a,config:{optionMergeStrategies:i}}=e.appContext,l=a.get(s);let c;return l?c=l:!o.length&&!t&&!n?c=s:(c={},o.length&&o.forEach(u=>Ks(c,u,i,!0)),Ks(c,s,i)),M(s)&&a.set(s,c),c}function Ks(e,s,t,n=!1){const{mixins:o,extends:a}=s;a&&Ks(e,a,t,!0),o&&o.forEach(i=>Ks(e,i,t,!0));for(const i in s)if(!(n&&i==="expose")){const l=wi[i]||t&&t[i];e[i]=l?l(e[i],s[i]):s[i]}return e}const wi={data:io,props:ro,emits:ro,methods:ws,computed:ws,beforeCreate:le,created:le,beforeMount:le,mounted:le,beforeUpdate:le,updated:le,beforeDestroy:le,beforeUnmount:le,destroyed:le,unmounted:le,activated:le,deactivated:le,errorCaptured:le,serverPrefetch:le,components:ws,directives:ws,watch:Ji,provide:io,inject:_i};function io(e,s){return s?e?function(){return Z(I(e)?e.call(this,this):e,I(s)?s.call(this,this):s)}:s:e}function _i(e,s){return ws(Bt(e),Bt(s))}function Bt(e){if(A(e)){const s={};for(let t=0;t<e.length;t++)s[e[t]]=e[t];return s}return e}function le(e,s){return e?[...new Set([].concat(e,s))]:s}function ws(e,s){return e?Z(Object.create(null),e,s):s}function ro(e,s){return e?A(e)&&A(s)?[...new Set([...e,...s])]:Z(Object.create(null),no(e),no(s??{})):s}function Ji(e,s){if(!e)return s;if(!s)return e;const t=Z(Object.create(null),e);for(const n in s)t[n]=le(e[n],s[n]);return t}function lo(){return{app:null,config:{isNativeTag:$o,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ti=0;function Si(e,s){return function(n,o=null){I(n)||(n=Z({},n)),o!=null&&!M(o)&&(o=null);const a=lo(),i=new Set;let l=!1;const c=a.app={_uid:Ti++,_component:n,_props:o,_container:null,_context:a,_instance:null,version:sr,get config(){return a.config},set config(u){},use(u,...h){return i.has(u)||(u&&I(u.install)?(i.add(u),u.install(c,...h)):I(u)&&(i.add(u),u(c,...h))),c},mixin(u){return a.mixins.includes(u)||a.mixins.push(u),c},component(u,h){return h?(a.components[u]=h,c):a.components[u]},directive(u,h){return h?(a.directives[u]=h,c):a.directives[u]},mount(u,h,y){if(!l){const j=ce(n,o);return j.appContext=a,h&&s?s(j,u):e(j,u,y),l=!0,c._container=u,u.__vue_app__=c,Zt(j.component)||j.component.proxy}},unmount(){l&&(e(null,c._container),delete c._container.__vue_app__)},provide(u,h){return a.provides[u]=h,c},runWithContext(u){Gs=c;try{return u()}finally{Gs=null}}};return c}}let Gs=null;function ki(e,s){if(te){let t=te.provides;const n=te.parent&&te.parent.provides;n===t&&(t=te.provides=Object.create(n)),t[e]=s}}function Xs(e,s,t=!1){const n=te||ge;if(n||Gs){const o=n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:Gs._context.provides;if(o&&e in o)return o[e];if(arguments.length>1)return t&&I(s)?s.call(n&&n.proxy):s}}function Di(e,s,t,n=!1){const o={},a={};Cs(a,st,1),e.propsDefaults=Object.create(null),co(e,s,o,a);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);t?e.props=n?o:qa(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function Ai(e,s,t,n){const{props:o,attrs:a,vnode:{patchFlag:i}}=e,l=q(o),[c]=e.propsOptions;let u=!1;if((n||i>0)&&!(i&16)){if(i&8){const h=e.vnode.dynamicProps;for(let y=0;y<h.length;y++){let j=h[y];if(Us(e.emitsOptions,j))continue;const D=s[j];if(c)if(E(a,j))D!==a[j]&&(a[j]=D,u=!0);else{const P=Se(j);o[P]=Lt(c,l,P,D,e,!1)}else D!==a[j]&&(a[j]=D,u=!0)}}}else{co(e,s,o,a)&&(u=!0);let h;for(const y in l)(!s||!E(s,y)&&((h=as(y))===y||!E(s,h)))&&(c?t&&(t[y]!==void 0||t[h]!==void 0)&&(o[y]=Lt(c,l,y,void 0,e,!0)):delete o[y]);if(a!==l)for(const y in a)(!s||!E(s,y))&&(delete a[y],u=!0)}u&&Ce(e,"set","$attrs")}function co(e,s,t,n){const[o,a]=e.propsOptions;let i=!1,l;if(s)for(let c in s){if(Ns(c))continue;const u=s[c];let h;o&&E(o,h=Se(c))?!a||!a.includes(h)?t[h]=u:(l||(l={}))[h]=u:Us(e.emitsOptions,c)||(!(c in n)||u!==n[c])&&(n[c]=u,i=!0)}if(a){const c=q(t),u=l||B;for(let h=0;h<a.length;h++){const y=a[h];t[y]=Lt(o,c,y,u[y],e,!E(u,y))}}return i}function Lt(e,s,t,n,o,a){const i=e[t];if(i!=null){const l=E(i,"default");if(l&&n===void 0){const c=i.default;if(i.type!==Function&&!i.skipFactory&&I(c)){const{propsDefaults:u}=o;t in u?n=u[t]:(ds(o),n=u[t]=c.call(null,s),Xe())}else n=c}i[0]&&(a&&!l?n=!1:i[1]&&(n===""||n===as(t))&&(n=!0))}return n}function po(e,s,t=!1){const n=s.propsCache,o=n.get(e);if(o)return o;const a=e.props,i={},l=[];let c=!1;if(!I(e)){const h=y=>{c=!0;const[j,D]=po(y,s,!0);Z(i,j),D&&l.push(...D)};!t&&s.mixins.length&&s.mixins.forEach(h),e.extends&&h(e.extends),e.mixins&&e.mixins.forEach(h)}if(!a&&!c)return M(e)&&n.set(e,ns),ns;if(A(a))for(let h=0;h<a.length;h++){const y=Se(a[h]);uo(y)&&(i[y]=B)}else if(a)for(const h in a){const y=Se(h);if(uo(y)){const j=a[h],D=i[y]=A(j)||I(j)?{type:j}:Z({},j);if(D){const P=fo(Boolean,D.type),x=fo(String,D.type);D[0]=P>-1,D[1]=x<0||P<x,(P>-1||E(D,"default"))&&l.push(y)}}}const u=[i,l];return M(e)&&n.set(e,u),u}function uo(e){return e[0]!=="$"}function ho(e){const s=e&&e.toString().match(/^\s*(function|class) (\w+)/);return s?s[2]:e===null?"null":""}function mo(e,s){return ho(e)===ho(s)}function fo(e,s){return A(s)?s.findIndex(t=>mo(t,e)):I(s)&&mo(s,e)?0:-1}const go=e=>e[0]==="_"||e==="$stable",Wt=e=>A(e)?e.map(Ae):[Ae(e)],xi=(e,s,t)=>{if(s._n)return s;const n=Yn((...o)=>Wt(s(...o)),t);return n._c=!1,n},yo=(e,s,t)=>{const n=e._ctx;for(const o in e){if(go(o))continue;const a=e[o];if(I(a))s[o]=xi(o,a,n);else if(a!=null){const i=Wt(a);s[o]=()=>i}}},bo=(e,s)=>{const t=Wt(s);e.slots.default=()=>t},Ni=(e,s)=>{if(e.vnode.shapeFlag&32){const t=s._;t?(e.slots=q(s),Cs(s,"_",t)):yo(s,e.slots={})}else e.slots={},s&&bo(e,s);Cs(e.slots,st,1)},zi=(e,s,t)=>{const{vnode:n,slots:o}=e;let a=!0,i=B;if(n.shapeFlag&32){const l=s._;l?t&&l===1?a=!1:(Z(o,s),!t&&l===1&&delete o._):(a=!s.$stable,yo(s,o)),i=s}else s&&(bo(e,s),i={default:1});if(a)for(const l in o)!go(l)&&!(l in i)&&delete o[l]};function Vt(e,s,t,n,o=!1){if(A(e)){e.forEach((j,D)=>Vt(j,s&&(A(s)?s[D]:s),t,n,o));return}if(Ws(n)&&!o)return;const a=n.shapeFlag&4?Zt(n.component)||n.component.proxy:n.el,i=o?null:a,{i:l,r:c}=e,u=s&&s.r,h=l.refs===B?l.refs={}:l.refs,y=l.setupState;if(u!=null&&u!==c&&(Q(u)?(h[u]=null,E(y,u)&&(y[u]=null)):re(u)&&(u.value=null)),I(c))Me(c,l,12,[i,h]);else{const j=Q(c),D=re(c);if(j||D){const P=()=>{if(e.f){const x=j?E(y,c)?y[c]:h[c]:c.value;o?A(x)&&ct(x,a):A(x)?x.includes(a)||x.push(a):j?(h[c]=[a],E(y,c)&&(y[c]=h[c])):(c.value=[a],e.k&&(h[e.k]=c.value))}else j?(h[c]=i,E(y,c)&&(y[c]=i)):D&&(c.value=i,e.k&&(h[e.k]=i))};i?(P.id=-1,ue(P,t)):P()}}}const ue=ti;function Ii(e){return Oi(e)}function Oi(e,s){const t=mt();t.__VUE__=!0;const{insert:n,remove:o,patchProp:a,createElement:i,createText:l,createComment:c,setText:u,setElementText:h,parentNode:y,nextSibling:j,setScopeId:D=ve,insertStaticContent:P}=e,x=(r,p,d,f=null,m=null,v=null,_=!1,b=null,w=!!p.dynamicChildren)=>{if(r===p)return;r&&!Ge(r,p)&&(f=it(r),Ie(r,m,v,!0),r=null),p.patchFlag===-2&&(w=!1,p.dynamicChildren=null);const{type:g,ref:S,shapeFlag:J}=p;switch(g){case Zs:Y(r,p,d,f);break;case _e:L(r,p,d,f);break;case Qs:r==null&&W(p,d,f,_);break;case be:T(r,p,d,f,m,v,_,b,w);break;default:J&1?ne(r,p,d,f,m,v,_,b,w):J&6?K(r,p,d,f,m,v,_,b,w):(J&64||J&128)&&g.process(r,p,d,f,m,v,_,b,w,hs)}S!=null&&m&&Vt(S,r&&r.ref,v,p||r,!p)},Y=(r,p,d,f)=>{if(r==null)n(p.el=l(p.children),d,f);else{const m=p.el=r.el;p.children!==r.children&&u(m,p.children)}},L=(r,p,d,f)=>{r==null?n(p.el=c(p.children||""),d,f):p.el=r.el},W=(r,p,d,f)=>{[r.el,r.anchor]=P(r.children,p,d,f,r.el,r.anchor)},V=({el:r,anchor:p},d,f)=>{let m;for(;r&&r!==p;)m=j(r),n(r,d,f),r=m;n(p,d,f)},N=({el:r,anchor:p})=>{let d;for(;r&&r!==p;)d=j(r),o(r),r=d;o(p)},ne=(r,p,d,f,m,v,_,b,w)=>{_=_||p.type==="svg",r==null?Ne(p,d,f,m,v,_,b,w):G(r,p,m,v,_,b,w)},Ne=(r,p,d,f,m,v,_,b)=>{let w,g;const{type:S,props:J,shapeFlag:k,transition:z,dirs:C}=r;if(w=r.el=i(r.type,v,J&&J.is,J),k&8?h(w,r.children):k&16&&O(r.children,w,null,f,m,v&&S!=="foreignObject",_,b),C&&$e(r,null,f,"created"),ze(w,r,r.scopeId,_,f),J){for(const R in J)R!=="value"&&!Ns(R)&&a(w,R,null,J[R],v,r.children,f,m,qe);"value"in J&&a(w,"value",null,J.value),(g=J.onVnodeBeforeMount)&&xe(g,f,r)}C&&$e(r,null,f,"beforeMount");const H=(!m||m&&!m.pendingBranch)&&z&&!z.persisted;H&&z.beforeEnter(w),n(w,p,d),((g=J&&J.onVnodeMounted)||H||C)&&ue(()=>{g&&xe(g,f,r),H&&z.enter(w),C&&$e(r,null,f,"mounted")},m)},ze=(r,p,d,f,m)=>{if(d&&D(r,d),f)for(let v=0;v<f.length;v++)D(r,f[v]);if(m){let v=m.subTree;if(p===v){const _=m.vnode;ze(r,_,_.scopeId,_.slotScopeIds,m.parent)}}},O=(r,p,d,f,m,v,_,b,w=0)=>{for(let g=w;g<r.length;g++){const S=r[g]=b?Ue(r[g]):Ae(r[g]);x(null,S,p,d,f,m,v,_,b)}},G=(r,p,d,f,m,v,_)=>{const b=p.el=r.el;let{patchFlag:w,dynamicChildren:g,dirs:S}=p;w|=r.patchFlag&16;const J=r.props||B,k=p.props||B;let z;d&&Ke(d,!1),(z=k.onVnodeBeforeUpdate)&&xe(z,d,p,r),S&&$e(p,r,d,"beforeUpdate"),d&&Ke(d,!0);const C=m&&p.type!=="foreignObject";if(g?U(r.dynamicChildren,g,b,d,f,C,v):_||F(r,p,b,null,d,f,C,v,!1),w>0){if(w&16)ie(b,p,J,k,d,f,m);else if(w&2&&J.class!==k.class&&a(b,"class",null,k.class,m),w&4&&a(b,"style",J.style,k.style,m),w&8){const H=p.dynamicProps;for(let R=0;R<H.length;R++){const ee=H[R],Te=J[ee],ms=k[ee];(ms!==Te||ee==="value")&&a(b,ee,Te,ms,m,r.children,d,f,qe)}}w&1&&r.children!==p.children&&h(b,p.children)}else!_&&g==null&&ie(b,p,J,k,d,f,m);((z=k.onVnodeUpdated)||S)&&ue(()=>{z&&xe(z,d,p,r),S&&$e(p,r,d,"updated")},f)},U=(r,p,d,f,m,v,_)=>{for(let b=0;b<p.length;b++){const w=r[b],g=p[b],S=w.el&&(w.type===be||!Ge(w,g)||w.shapeFlag&70)?y(w.el):d;x(w,g,S,null,f,m,v,_,!0)}},ie=(r,p,d,f,m,v,_)=>{if(d!==f){if(d!==B)for(const b in d)!Ns(b)&&!(b in f)&&a(r,b,d[b],null,_,p.children,m,v,qe);for(const b in f){if(Ns(b))continue;const w=f[b],g=d[b];w!==g&&b!=="value"&&a(r,b,g,w,_,p.children,m,v,qe)}"value"in f&&a(r,"value",d.value,f.value)}},T=(r,p,d,f,m,v,_,b,w)=>{const g=p.el=r?r.el:l(""),S=p.anchor=r?r.anchor:l("");let{patchFlag:J,dynamicChildren:k,slotScopeIds:z}=p;z&&(b=b?b.concat(z):z),r==null?(n(g,d,f),n(S,d,f),O(p.children,d,S,m,v,_,b,w)):J>0&&J&64&&k&&r.dynamicChildren?(U(r.dynamicChildren,k,d,m,v,_,b),(p.key!=null||m&&p===m.subTree)&&vo(r,p,!0)):F(r,p,d,S,m,v,_,b,w)},K=(r,p,d,f,m,v,_,b,w)=>{p.slotScopeIds=b,r==null?p.shapeFlag&512?m.ctx.activate(p,d,f,_,w):he(p,d,f,m,v,_,w):ks(r,p,w)},he=(r,p,d,f,m,v,_)=>{const b=r.component=Ui(r,f,m);if(Vs(r)&&(b.ctx.renderer=hs),Li(b),b.asyncDep){if(m&&m.registerDep(b,oe),!r.el){const w=b.subTree=ce(_e);L(null,w,p,d)}return}oe(b,r,p,d,m,v,_)},ks=(r,p,d)=>{const f=p.component=r.component;if(Qa(r,p,d))if(f.asyncDep&&!f.asyncResolved){X(f,p,d);return}else f.next=p,Va(f.update),f.update();else p.el=r.el,f.vnode=p},oe=(r,p,d,f,m,v,_)=>{const b=()=>{if(r.isMounted){let{next:S,bu:J,u:k,parent:z,vnode:C}=r,H=S,R;Ke(r,!1),S?(S.el=C.el,X(r,S,_)):S=C,J&&ht(J),(R=S.props&&S.props.onVnodeBeforeUpdate)&&xe(R,z,S,C),Ke(r,!0);const ee=Ot(r),Te=r.subTree;r.subTree=ee,x(Te,ee,y(Te.el),it(Te),r,m,v),S.el=ee.el,H===null&&ei(r,ee.el),k&&ue(k,m),(R=S.props&&S.props.onVnodeUpdated)&&ue(()=>xe(R,z,S,C),m)}else{let S;const{el:J,props:k}=p,{bm:z,m:C,parent:H}=r,R=Ws(p);if(Ke(r,!1),z&&ht(z),!R&&(S=k&&k.onVnodeBeforeMount)&&xe(S,H,p),Ke(r,!0),J&&an){const ee=()=>{r.subTree=Ot(r),an(J,r.subTree,r,m,null)};R?p.type.__asyncLoader().then(()=>!r.isUnmounted&&ee()):ee()}else{const ee=r.subTree=Ot(r);x(null,ee,d,f,r,m,v),p.el=ee.el}if(C&&ue(C,m),!R&&(S=k&&k.onVnodeMounted)){const ee=p;ue(()=>xe(S,H,ee),m)}(p.shapeFlag&256||H&&Ws(H.vnode)&&H.vnode.shapeFlag&256)&&r.a&&ue(r.a,m),r.isMounted=!0,p=d=f=null}},w=r.effect=new jt(b,()=>It(g),r.scope),g=r.update=()=>w.run();g.id=r.uid,Ke(r,!0),g()},X=(r,p,d)=>{p.component=r;const f=r.vnode.props;r.vnode=p,r.next=null,Ai(r,p.props,f,d),zi(r,p.children,d),is(),qn(),rs()},F=(r,p,d,f,m,v,_,b,w=!1)=>{const g=r&&r.children,S=r?r.shapeFlag:0,J=p.children,{patchFlag:k,shapeFlag:z}=p;if(k>0){if(k&128){at(g,J,d,f,m,v,_,b,w);return}else if(k&256){ss(g,J,d,f,m,v,_,b,w);return}}z&8?(S&16&&qe(g,m,v),J!==g&&h(d,J)):S&16?z&16?at(g,J,d,f,m,v,_,b,w):qe(g,m,v,!0):(S&8&&h(d,""),z&16&&O(J,d,f,m,v,_,b,w))},ss=(r,p,d,f,m,v,_,b,w)=>{r=r||ns,p=p||ns;const g=r.length,S=p.length,J=Math.min(g,S);let k;for(k=0;k<J;k++){const z=p[k]=w?Ue(p[k]):Ae(p[k]);x(r[k],z,d,null,m,v,_,b,w)}g>S?qe(r,m,v,!0,!1,J):O(p,d,f,m,v,_,b,w,J)},at=(r,p,d,f,m,v,_,b,w)=>{let g=0;const S=p.length;let J=r.length-1,k=S-1;for(;g<=J&&g<=k;){const z=r[g],C=p[g]=w?Ue(p[g]):Ae(p[g]);if(Ge(z,C))x(z,C,d,null,m,v,_,b,w);else break;g++}for(;g<=J&&g<=k;){const z=r[J],C=p[k]=w?Ue(p[k]):Ae(p[k]);if(Ge(z,C))x(z,C,d,null,m,v,_,b,w);else break;J--,k--}if(g>J){if(g<=k){const z=k+1,C=z<S?p[z].el:f;for(;g<=k;)x(null,p[g]=w?Ue(p[g]):Ae(p[g]),d,C,m,v,_,b,w),g++}}else if(g>k)for(;g<=J;)Ie(r[g],m,v,!0),g++;else{const z=g,C=g,H=new Map;for(g=C;g<=k;g++){const me=p[g]=w?Ue(p[g]):Ae(p[g]);me.key!=null&&H.set(me.key,g)}let R,ee=0;const Te=k-C+1;let ms=!1,Lo=0;const Ds=new Array(Te);for(g=0;g<Te;g++)Ds[g]=0;for(g=z;g<=J;g++){const me=r[g];if(ee>=Te){Ie(me,m,v,!0);continue}let Oe;if(me.key!=null)Oe=H.get(me.key);else for(R=C;R<=k;R++)if(Ds[R-C]===0&&Ge(me,p[R])){Oe=R;break}Oe===void 0?Ie(me,m,v,!0):(Ds[Oe-C]=g+1,Oe>=Lo?Lo=Oe:ms=!0,x(me,p[Oe],d,null,m,v,_,b,w),ee++)}const Wo=ms?Ci(Ds):ns;for(R=Wo.length-1,g=Te-1;g>=0;g--){const me=C+g,Oe=p[me],Vo=me+1<S?p[me+1].el:f;Ds[g]===0?x(null,Oe,d,Vo,m,v,_,b,w):ms&&(R<0||g!==Wo[R]?ts(Oe,d,Vo,2):R--)}}},ts=(r,p,d,f,m=null)=>{const{el:v,type:_,transition:b,children:w,shapeFlag:g}=r;if(g&6){ts(r.component.subTree,p,d,f);return}if(g&128){r.suspense.move(p,d,f);return}if(g&64){_.move(r,p,d,hs);return}if(_===be){n(v,p,d);for(let J=0;J<w.length;J++)ts(w[J],p,d,f);n(r.anchor,p,d);return}if(_===Qs){V(r,p,d);return}if(f!==2&&g&1&&b)if(f===0)b.beforeEnter(v),n(v,p,d),ue(()=>b.enter(v),m);else{const{leave:J,delayLeave:k,afterLeave:z}=b,C=()=>n(v,p,d),H=()=>{J(v,()=>{C(),z&&z()})};k?k(v,C,H):H()}else n(v,p,d)},Ie=(r,p,d,f=!1,m=!1)=>{const{type:v,props:_,ref:b,children:w,dynamicChildren:g,shapeFlag:S,patchFlag:J,dirs:k}=r;if(b!=null&&Vt(b,null,d,r,!0),S&256){p.ctx.deactivate(r);return}const z=S&1&&k,C=!Ws(r);let H;if(C&&(H=_&&_.onVnodeBeforeUnmount)&&xe(H,p,r),S&6)pl(r.component,d,f);else{if(S&128){r.suspense.unmount(d,f);return}z&&$e(r,null,p,"beforeUnmount"),S&64?r.type.remove(r,p,d,m,hs,f):g&&(v!==be||J>0&&J&64)?qe(g,p,d,!1,!0):(v===be&&J&384||!m&&S&16)&&qe(w,p,d),f&&Uo(r)}(C&&(H=_&&_.onVnodeUnmounted)||z)&&ue(()=>{H&&xe(H,p,r),z&&$e(r,null,p,"unmounted")},d)},Uo=r=>{const{type:p,el:d,anchor:f,transition:m}=r;if(p===be){cl(d,f);return}if(p===Qs){N(r);return}const v=()=>{o(d),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(r.shapeFlag&1&&m&&!m.persisted){const{leave:_,delayLeave:b}=m,w=()=>_(d,v);b?b(r.el,v,w):w()}else v()},cl=(r,p)=>{let d;for(;r!==p;)d=j(r),o(r),r=d;o(p)},pl=(r,p,d)=>{const{bum:f,scope:m,update:v,subTree:_,um:b}=r;f&&ht(f),m.stop(),v&&(v.active=!1,Ie(_,r,p,d)),b&&ue(b,p),ue(()=>{r.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&r.asyncDep&&!r.asyncResolved&&r.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},qe=(r,p,d,f=!1,m=!1,v=0)=>{for(let _=v;_<r.length;_++)Ie(r[_],p,d,f,m)},it=r=>r.shapeFlag&6?it(r.component.subTree):r.shapeFlag&128?r.suspense.next():j(r.anchor||r.el),Bo=(r,p,d)=>{r==null?p._vnode&&Ie(p._vnode,null,null,!0):x(p._vnode||null,r,p,null,null,null,d),qn(),Rn(),p._vnode=r},hs={p:x,um:Ie,m:ts,r:Uo,mt:he,mc:O,pc:F,pbc:U,n:it,o:e};let on,an;return s&&([on,an]=s(hs)),{render:Bo,hydrate:on,createApp:Si(Bo,on)}}function Ke({effect:e,update:s},t){e.allowRecurse=s.allowRecurse=t}function vo(e,s,t=!1){const n=e.children,o=s.children;if(A(n)&&A(o))for(let a=0;a<n.length;a++){const i=n[a];let l=o[a];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=o[a]=Ue(o[a]),l.el=i.el),t||vo(i,l)),l.type===Zs&&(l.el=i.el)}}function Ci(e){const s=e.slice(),t=[0];let n,o,a,i,l;const c=e.length;for(n=0;n<c;n++){const u=e[n];if(u!==0){if(o=t[t.length-1],e[o]<u){s[n]=o,t.push(n);continue}for(a=0,i=t.length-1;a<i;)l=a+i>>1,e[t[l]]<u?a=l+1:i=l;u<e[t[a]]&&(a>0&&(s[n]=t[a-1]),t[a]=n)}}for(a=t.length,i=t[a-1];a-- >0;)t[a]=i,i=s[i];return t}const Ei=e=>e.__isTeleport,be=Symbol.for("v-fgt"),Zs=Symbol.for("v-txt"),_e=Symbol.for("v-cmt"),Qs=Symbol.for("v-stc"),_s=[];let Je=null;function de(e=!1){_s.push(Je=e?null:[])}function Pi(){_s.pop(),Je=_s[_s.length-1]||null}let Js=1;function jo(e){Js+=e}function wo(e){return e.dynamicChildren=Js>0?Je||ns:null,Pi(),Js>0&&Je&&Je.push(e),e}function De(e,s,t,n,o,a){return wo(se(e,s,t,n,o,a,!0))}function et(e,s,t,n,o){return wo(ce(e,s,t,n,o,!0))}function $t(e){return e?e.__v_isVNode===!0:!1}function Ge(e,s){return e.type===s.type&&e.key===s.key}const st="__vInternal",_o=({key:e})=>e??null,tt=({ref:e,ref_key:s,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?Q(e)||re(e)||I(e)?{i:ge,r:e,k:s,f:!!t}:e:null);function se(e,s=null,t=null,n=0,o=null,a=e===be?0:1,i=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:s,key:s&&_o(s),ref:s&&tt(s),scopeId:Mn,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:n,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:ge};return l?(Gt(c,t),a&128&&e.normalize(c)):t&&(c.shapeFlag|=Q(t)?8:16),Js>0&&!i&&Je&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&Je.push(c),c}const ce=qi;function qi(e,s=null,t=null,n=0,o=null,a=!1){if((!e||e===gi)&&(e=_e),$t(e)){const l=Ye(e,s,!0);return t&&Gt(l,t),Js>0&&!a&&Je&&(l.shapeFlag&6?Je[Je.indexOf(e)]=l:Je.push(l)),l.patchFlag|=-2,l}if(Gi(e)&&(e=e.__vccOpts),s){s=Ri(s);let{class:l,style:c}=s;l&&!Q(l)&&(s.class=fs(l)),M(c)&&(In(c)&&!A(c)&&(c=Z({},c)),s.style=ft(c))}const i=Q(e)?1:si(e)?128:Ei(e)?64:M(e)?4:I(e)?2:0;return se(e,s,t,n,o,i,a,!0)}function Ri(e){return e?In(e)||st in e?Z({},e):e:null}function Ye(e,s,t=!1){const{props:n,ref:o,patchFlag:a,children:i}=e,l=s?Hi(n||{},s):n;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&_o(l),ref:s&&s.ref?t&&o?A(o)?o.concat(tt(s)):[o,tt(s)]:tt(s):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:s&&e.type!==be?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ye(e.ssContent),ssFallback:e.ssFallback&&Ye(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function nt(e=" ",s=0){return ce(Zs,null,e,s)}function Fi(e,s){const t=ce(Qs,null,e);return t.staticCount=s,t}function Kt(e="",s=!1){return s?(de(),et(_e,null,e)):ce(_e,null,e)}function Ae(e){return e==null||typeof e=="boolean"?ce(_e):A(e)?ce(be,null,e.slice()):typeof e=="object"?Ue(e):ce(Zs,null,String(e))}function Ue(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ye(e)}function Gt(e,s){let t=0;const{shapeFlag:n}=e;if(s==null)s=null;else if(A(s))t=16;else if(typeof s=="object")if(n&65){const o=s.default;o&&(o._c&&(o._d=!1),Gt(e,o()),o._c&&(o._d=!0));return}else{t=32;const o=s._;!o&&!(st in s)?s._ctx=ge:o===3&&ge&&(ge.slots._===1?s._=1:(s._=2,e.patchFlag|=1024))}else I(s)?(s={default:s,_ctx:ge},t=32):(s=String(s),n&64?(t=16,s=[nt(s)]):t=8);e.children=s,e.shapeFlag|=t}function Hi(...e){const s={};for(let t=0;t<e.length;t++){const n=e[t];for(const o in n)if(o==="class")s.class!==n.class&&(s.class=fs([s.class,n.class]));else if(o==="style")s.style=ft([s.style,n.style]);else if(As(o)){const a=s[o],i=n[o];i&&a!==i&&!(A(a)&&a.includes(i))&&(s[o]=a?[].concat(a,i):i)}else o!==""&&(s[o]=n[o])}return s}function xe(e,s,t,n=null){fe(e,s,7,[t,n])}const Mi=lo();let Yi=0;function Ui(e,s,t){const n=e.type,o=(s?s.appContext:e.appContext)||Mi,a={uid:Yi++,vnode:e,type:n,parent:s,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new ra(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:s?s.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:po(n,o),emitsOptions:Hn(n,o),emit:null,emitted:null,propsDefaults:B,inheritAttrs:n.inheritAttrs,ctx:B,data:B,props:B,attrs:B,slots:B,refs:B,setupState:B,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=s?s.root:a,a.emit=Ga.bind(null,a),e.ce&&e.ce(a),a}let te=null;const Bi=()=>te||ge;let Xt,us,Jo="__VUE_INSTANCE_SETTERS__";(us=mt()[Jo])||(us=mt()[Jo]=[]),us.push(e=>te=e),Xt=e=>{us.length>1?us.forEach(s=>s(e)):us[0](e)};const ds=e=>{Xt(e),e.scope.on()},Xe=()=>{te&&te.scope.off(),Xt(null)};function To(e){return e.vnode.shapeFlag&4}let Ts=!1;function Li(e,s=!1){Ts=s;const{props:t,children:n}=e.vnode,o=To(e);Di(e,t,o,s),Ni(e,n);const a=o?Wi(e,s):void 0;return Ts=!1,a}function Wi(e,s){const t=e.type;e.accessCache=Object.create(null),e.proxy=On(new Proxy(e.ctx,bi));const{setup:n}=t;if(n){const o=e.setupContext=n.length>1?$i(e):null;ds(e),is();const a=Me(n,e,0,[e.props,o]);if(rs(),Xe(),ln(a)){if(a.then(Xe,Xe),s)return a.then(i=>{So(e,i,s)}).catch(i=>{Ys(i,e,0)});e.asyncDep=a}else So(e,a,s)}else Do(e,s)}function So(e,s,t){I(s)?e.type.__ssrInlineRender?e.ssrRender=s:e.render=s:M(s)&&(e.setupState=Cn(s)),Do(e,t)}let ko;function Do(e,s,t){const n=e.type;if(!e.render){if(!s&&ko&&!n.render){const o=n.template||Ut(e).template;if(o){const{isCustomElement:a,compilerOptions:i}=e.appContext.config,{delimiters:l,compilerOptions:c}=n,u=Z(Z({isCustomElement:a,delimiters:l},i),c);n.render=ko(o,u)}}e.render=n.render||ve}ds(e),is(),vi(e),rs(),Xe()}function Vi(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(s,t){return pe(e,"get","$attrs"),s[t]}}))}function $i(e){const s=t=>{e.exposed=t||{}};return{get attrs(){return Vi(e)},slots:e.slots,emit:e.emit,expose:s}}function Zt(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Cn(On(e.exposed)),{get(s,t){if(t in s)return s[t];if(t in js)return js[t](e)},has(s,t){return t in s||t in js}}))}function Ki(e,s=!0){return I(e)?e.displayName||e.name:e.name||s&&e.__name}function Gi(e){return I(e)&&"__vccOpts"in e}const Xi=(e,s)=>Ua(e,s,Ts);function Zi(e,s,t){const n=arguments.length;return n===2?M(s)&&!A(s)?$t(s)?ce(e,null,[s]):ce(e,s):ce(e,null,s):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&$t(t)&&(t=[t]),ce(e,s,t))}const Qi=Symbol.for("v-scx"),er=()=>Xs(Qi),sr="3.3.4",tr="http://www.w3.org/2000/svg",Ze=typeof document<"u"?document:null,Ao=Ze&&Ze.createElement("template"),nr={insert:(e,s,t)=>{s.insertBefore(e,t||null)},remove:e=>{const s=e.parentNode;s&&s.removeChild(e)},createElement:(e,s,t,n)=>{const o=s?Ze.createElementNS(tr,e):Ze.createElement(e,t?{is:t}:void 0);return e==="select"&&n&&n.multiple!=null&&o.setAttribute("multiple",n.multiple),o},createText:e=>Ze.createTextNode(e),createComment:e=>Ze.createComment(e),setText:(e,s)=>{e.nodeValue=s},setElementText:(e,s)=>{e.textContent=s},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ze.querySelector(e),setScopeId(e,s){e.setAttribute(s,"")},insertStaticContent(e,s,t,n,o,a){const i=t?t.previousSibling:s.lastChild;if(o&&(o===a||o.nextSibling))for(;s.insertBefore(o.cloneNode(!0),t),!(o===a||!(o=o.nextSibling)););else{Ao.innerHTML=n?`<svg>${e}</svg>`:e;const l=Ao.content;if(n){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}s.insertBefore(l,t)}return[i?i.nextSibling:s.firstChild,t?t.previousSibling:s.lastChild]}};function or(e,s,t){const n=e._vtc;n&&(s=(s?[s,...n]:[...n]).join(" ")),s==null?e.removeAttribute("class"):t?e.setAttribute("class",s):e.className=s}function ar(e,s,t){const n=e.style,o=Q(t);if(t&&!o){if(s&&!Q(s))for(const a in s)t[a]==null&&Qt(n,a,"");for(const a in t)Qt(n,a,t[a])}else{const a=n.display;o?s!==t&&(n.cssText=t):s&&e.removeAttribute("style"),"_vod"in e&&(n.display=a)}}const xo=/\s*!important$/;function Qt(e,s,t){if(A(t))t.forEach(n=>Qt(e,s,n));else if(t==null&&(t=""),s.startsWith("--"))e.setProperty(s,t);else{const n=ir(e,s);xo.test(t)?e.setProperty(as(n),t.replace(xo,""),"important"):e[n]=t}}const No=["Webkit","Moz","ms"],en={};function ir(e,s){const t=en[s];if(t)return t;let n=Se(s);if(n!=="filter"&&n in e)return en[s]=n;n=Is(n);for(let o=0;o<No.length;o++){const a=No[o]+n;if(a in e)return en[s]=a}return s}const zo="http://www.w3.org/1999/xlink";function rr(e,s,t,n,o){if(n&&s.startsWith("xlink:"))t==null?e.removeAttributeNS(zo,s.slice(6,s.length)):e.setAttributeNS(zo,s,t);else{const a=ia(s);t==null||a&&!dn(t)?e.removeAttribute(s):e.setAttribute(s,a?"":t)}}function lr(e,s,t,n,o,a,i){if(s==="innerHTML"||s==="textContent"){n&&i(n,o,a),e[s]=t??"";return}const l=e.tagName;if(s==="value"&&l!=="PROGRESS"&&!l.includes("-")){e._value=t;const u=l==="OPTION"?e.getAttribute("value"):e.value,h=t??"";u!==h&&(e.value=h),t==null&&e.removeAttribute(s);return}let c=!1;if(t===""||t==null){const u=typeof e[s];u==="boolean"?t=dn(t):t==null&&u==="string"?(t="",c=!0):u==="number"&&(t=0,c=!0)}try{e[s]=t}catch{}c&&e.removeAttribute(s)}function cr(e,s,t,n){e.addEventListener(s,t,n)}function pr(e,s,t,n){e.removeEventListener(s,t,n)}function ur(e,s,t,n,o=null){const a=e._vei||(e._vei={}),i=a[s];if(n&&i)i.value=n;else{const[l,c]=dr(s);if(n){const u=a[s]=fr(n,o);cr(e,l,u,c)}else i&&(pr(e,l,i,c),a[s]=void 0)}}const Io=/(?:Once|Passive|Capture)$/;function dr(e){let s;if(Io.test(e)){s={};let n;for(;n=e.match(Io);)e=e.slice(0,e.length-n[0].length),s[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):as(e.slice(2)),s]}let sn=0;const hr=Promise.resolve(),mr=()=>sn||(hr.then(()=>sn=0),sn=Date.now());function fr(e,s){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;fe(gr(n,t.value),s,5,[n])};return t.value=e,t.attached=mr(),t}function gr(e,s){if(A(s)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},s.map(n=>o=>!o._stopped&&n&&n(o))}else return s}const Oo=/^on[a-z]/,yr=(e,s,t,n,o=!1,a,i,l,c)=>{s==="class"?or(e,n,o):s==="style"?ar(e,t,n):As(s)?lt(s)||ur(e,s,t,n,i):(s[0]==="."?(s=s.slice(1),!0):s[0]==="^"?(s=s.slice(1),!1):br(e,s,n,o))?lr(e,s,n,a,i,l,c):(s==="true-value"?e._trueValue=n:s==="false-value"&&(e._falseValue=n),rr(e,s,n,o))};function br(e,s,t,n){return n?!!(s==="innerHTML"||s==="textContent"||s in e&&Oo.test(s)&&I(t)):s==="spellcheck"||s==="draggable"||s==="translate"||s==="form"||s==="list"&&e.tagName==="INPUT"||s==="type"&&e.tagName==="TEXTAREA"||Oo.test(s)&&Q(t)?!1:s in e}const Be="transition",Ss="animation",tn=(e,{slots:s})=>Zi(ai,vr(e),s);tn.displayName="Transition";const Co={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};tn.props=Z({},Wn,Co);const Qe=(e,s=[])=>{A(e)?e.forEach(t=>t(...s)):e&&e(...s)},Eo=e=>e?A(e)?e.some(s=>s.length>1):e.length>1:!1;function vr(e){const s={};for(const T in e)T in Co||(s[T]=e[T]);if(e.css===!1)return s;const{name:t="v",type:n,duration:o,enterFromClass:a=`${t}-enter-from`,enterActiveClass:i=`${t}-enter-active`,enterToClass:l=`${t}-enter-to`,appearFromClass:c=a,appearActiveClass:u=i,appearToClass:h=l,leaveFromClass:y=`${t}-leave-from`,leaveActiveClass:j=`${t}-leave-active`,leaveToClass:D=`${t}-leave-to`}=e,P=jr(o),x=P&&P[0],Y=P&&P[1],{onBeforeEnter:L,onEnter:W,onEnterCancelled:V,onLeave:N,onLeaveCancelled:ne,onBeforeAppear:Ne=L,onAppear:ze=W,onAppearCancelled:O=V}=s,G=(T,K,he)=>{es(T,K?h:l),es(T,K?u:i),he&&he()},U=(T,K)=>{T._isLeaving=!1,es(T,y),es(T,D),es(T,j),K&&K()},ie=T=>(K,he)=>{const ks=T?ze:W,oe=()=>G(K,T,he);Qe(ks,[K,oe]),Po(()=>{es(K,T?c:a),Le(K,T?h:l),Eo(ks)||qo(K,n,x,oe)})};return Z(s,{onBeforeEnter(T){Qe(L,[T]),Le(T,a),Le(T,i)},onBeforeAppear(T){Qe(Ne,[T]),Le(T,c),Le(T,u)},onEnter:ie(!1),onAppear:ie(!0),onLeave(T,K){T._isLeaving=!0;const he=()=>U(T,K);Le(T,y),Jr(),Le(T,j),Po(()=>{T._isLeaving&&(es(T,y),Le(T,D),Eo(N)||qo(T,n,Y,he))}),Qe(N,[T,he])},onEnterCancelled(T){G(T,!1),Qe(V,[T])},onAppearCancelled(T){G(T,!0),Qe(O,[T])},onLeaveCancelled(T){U(T),Qe(ne,[T])}})}function jr(e){if(e==null)return null;if(M(e))return[nn(e.enter),nn(e.leave)];{const s=nn(e);return[s,s]}}function nn(e){return sa(e)}function Le(e,s){s.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(s)}function es(e,s){s.split(/\s+/).forEach(n=>n&&e.classList.remove(n));const{_vtc:t}=e;t&&(t.delete(s),t.size||(e._vtc=void 0))}function Po(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let wr=0;function qo(e,s,t,n){const o=e._endId=++wr,a=()=>{o===e._endId&&n()};if(t)return setTimeout(a,t);const{type:i,timeout:l,propCount:c}=_r(e,s);if(!i)return n();const u=i+"end";let h=0;const y=()=>{e.removeEventListener(u,j),a()},j=D=>{D.target===e&&++h>=c&&y()};setTimeout(()=>{h<c&&y()},l+1),e.addEventListener(u,j)}function _r(e,s){const t=window.getComputedStyle(e),n=P=>(t[P]||"").split(", "),o=n(`${Be}Delay`),a=n(`${Be}Duration`),i=Ro(o,a),l=n(`${Ss}Delay`),c=n(`${Ss}Duration`),u=Ro(l,c);let h=null,y=0,j=0;s===Be?i>0&&(h=Be,y=i,j=a.length):s===Ss?u>0&&(h=Ss,y=u,j=c.length):(y=Math.max(i,u),h=y>0?i>u?Be:Ss:null,j=h?h===Be?a.length:c.length:0);const D=h===Be&&/\b(transform|all)(,|$)/.test(n(`${Be}Property`).toString());return{type:h,timeout:y,propCount:j,hasTransform:D}}function Ro(e,s){for(;e.length<s.length;)e=e.concat(e);return Math.max(...s.map((t,n)=>Fo(t)+Fo(e[n])))}function Fo(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Jr(){return document.body.offsetHeight}const Tr=["ctrl","shift","alt","meta"],Sr={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,s)=>Tr.some(t=>e[`${t}Key`]&&!s.includes(t))},kr=(e,s)=>(t,...n)=>{for(let o=0;o<s.length;o++){const a=Sr[s[o]];if(a&&a(t,s))return}return e(t,...n)},Dr=Z({patchProp:yr},nr);let Ho;function Ar(){return Ho||(Ho=Ii(Dr))}const xr=(...e)=>{const s=Ar().createApp(...e),{mount:t}=s;return s.mount=n=>{const o=Nr(n);if(!o)return;const a=s._component;!I(a)&&!a.render&&!a.template&&(a.template=o.innerHTML),o.innerHTML="";const i=t(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},s};function Nr(e){return Q(e)?document.querySelector(e):e}const ot=(e,s)=>{const t=e.__vccOpts||e;for(const[n,o]of s)t[n]=o;return t},zr=Rt({props:{report:{type:String,required:!0}},methods:{createIssue(){const e=new FormData(this.$refs.issueForm),s=e.get("title");let t="";const n=e.get("description");n&&(t+=`**Description**
${n}

`),t+=`**Troubleshooter's report**
${this.report}

`;const o=e.get("mcu"),a=e.get("framework"),i=e.get("ide");(o||a||i)&&(t+=`**Environment**
`,o&&(t+="* Microcontroller: "+o+`
`),a&&(t+="* Core/Framework: "+a+`
`),i&&(t+="* IDE: "+i+`
`),t+=`
`);const l=e.get("repro");l&&(t+="**Reproduction code**\n```c++\n",t+=l,t+="\n```\n\n");const c=e.get("remarks");c&&(t+=`**Remarks**
${c}

`);const h="https://github.com/bblanchon/ArduinoJson/issues/new?"+new URLSearchParams({title:s,body:t}).toString();console.log("URL",h),window.open(h,"_blank"),$("#assistance-modal").modal("hide")}}}),Ir={class:"modal fade"},Or={class:"modal-dialog modal-dialog-scrollable modal-lg"},Cr=[Fi('<div class="modal-header bg-primary text-white"><h5 class="modal-title">Contact support</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div><div class="modal-body"><div class="alert alert-info"> This form simplifies the creation of an issue on ArduinoJson&#39;s GitHub project page. It ensures you provide all the required information and prefills the issue&#39;s text. After that, you just need to submit the issue.<br><b>A GitHub account is required.</b></div><div class="form-group"><label for="title-input">Title</label><input type="text" name="title" class="form-control" id="title-input" aria-describedby="title-help" required><small id="title-help" class="form-text text-muted">Summarize your issue in one sentence.</small></div><div class="form-group"><label for="description-input">Description</label><textarea name="description" rows="3" class="form-control" id="description-input" aria-describedby="description-help" required placeholder="When I do ..., I expect ..., but instead I get ..."></textarea><small id="description-help" class="form-text text-muted">Describe your issue with a few sentences.</small></div><div class="form-group"><label for="mcu-input">Microcontroller</label><input type="text" name="mcu" class="form-control" id="mcu-input" aria-describedby="mcu-help" placeholder="ESP8266" required><small id="mcu-help" class="form-text text-muted">Which processor or with board do you use?</small></div><div class="form-group"><label for="framework-input">Arduino Core / Framework</label><input type="text" name="framework" class="form-control" id="framework-input" aria-describedby="framework-help" placeholder="ESP8266 core for Arduino v3.0.2"><small id="framework-help" class="form-text text-muted">Please include version number.</small></div><div class="form-group"><label for="ide-input">IDE</label><input type="text" name="ide" class="form-control" id="ide-input" aria-describedby="ide-help" placeholder="Arduino IDE 1.8.16"><small id="ide-help" class="form-text text-muted">Please include version number.</small></div><div class="form-group"><label for="repro-input">Reproduction code</label><textarea name="repro" rows="10" class="form-control text-monospace" style="font-size:80%;" id="repro-input" aria-describedby="repro-help" placeholder="DynamicJsonDocuemnt doc(1024);\\n..."></textarea><small id="repro-help" class="form-text text-muted">Write a few lines of code that demonstrate the issue.</small></div><div class="form-group"><label for="remarks-input">Remarks</label><textarea name="remarks" rows="4" class="form-control" id="remarks-input" aria-describedby="remarks-help"></textarea><small id="remarks-help" class="form-text text-muted">Anything else you need to tell us?</small></div></div><div class="modal-footer"><div class="text-right"><button type="submit" class="btn btn-primary">Submit</button><small class="form-text text-muted"> This button redirects you to GitHub. </small></div></div>',3)];function Er(e,s,t,n,o,a){return de(),De("div",Ir,[se("div",Or,[se("form",{class:"modal-content",ref:"issueForm",onSubmit:s[0]||(s[0]=kr((...i)=>e.createIssue&&e.createIssue(...i),["prevent"]))},Cr,544)])])}const Pr=ot(zr,[["render",Er]]),qr=Rt({inject:["debug"],emits:["check"],props:{option:{type:Object,required:!0}}}),Rr={class:"form-check"},Fr=["id","checked","disabled"],Hr=["for","innerHTML"],Mr={key:0,class:"d-block mb-2 small text-muted"};function Yr(e,s,t,n,o,a){return de(),De("div",Rr,[se("input",{type:"radio",id:e.option.inputId,class:"form-check-input",checked:e.option.selected,onClick:s[0]||(s[0]=i=>e.$emit("check")),disabled:e.option.missing},null,8,Fr),se("label",{class:"form-check-label",for:e.option.inputId,innerHTML:e.option.label},null,8,Hr),e.debug?(de(),De("div",Mr,Es(e.option.summary),1)):Kt("",!0)])}const Ur=ot(qr,[["render",Yr]]),gl="",Br=Rt({inject:["debug"],emits:["choose"],props:{step:{type:Object,required:!0},active:{type:Boolean,default:!1}},components:{TroubleshooterStepOption:Ur},async mounted(){const{top:e,bottom:s}=this.$el.getBoundingClientRect();e+50<window.innerHeight||this.$el.scrollIntoView({behavior:"smooth"})}}),Lr={key:0,class:"troubleshooter-step mb-4"},Wr={class:"small"},Vr={class:"troubleshooter-step-number"},$r={key:0,class:"text-muted text-monospace"},Kr=["innerHTML"],Gr={class:"troubleshooter-step-options"},Xr=["innerHTML"];function Zr(e,s,t,n,o,a){const i=Ft("TroubleshooterStepOption");return e.step.options?(de(),De("div",Lr,[se("h2",Wr,[se("div",Vr,[se("div",{class:fs(["text-white rounded-circle",e.active?"bg-primary":"bg-secondary"])},Es(e.step.number),3)]),e.debug?(de(),De("span",$r,Es(e.step.filename),1)):Kt("",!0)]),se("div",{class:"troubleshooter-step-content",innerHTML:e.step.content},null,8,Kr),se("div",Gr,[(de(!0),De(be,null,to(e.step.options,l=>(de(),et(i,{key:l.hash,option:l,onClick:c=>e.$emit("choose",l)},null,8,["option","onClick"]))),128))])])):(de(),De("div",{key:1,innerHTML:e.step.content,class:"troubleshooter-step-content"},null,8,Xr))}const Qr=ot(Br,[["render",Zr]]),Mo=[{content:`<p>When does your issue happen?</p>
`,options:[{id:"compiletime",page:1,label:"At compile time",summary:"The issue happens at compile time"},{id:"runtime",page:164,label:"At run time",summary:"The issue happens at run time"}]},{content:`<p>Please look at the <strong>first</strong> error in the compiler output, and tell me what it is...</p>
`,options:[{id:"requires-cpp-compiler",page:33,label:"ArduinoJson requires a C++ compiler...",summary:'Error says "ArduinoJson requires a C++ compiler..."'},{id:"assignment-of-read-only-location",page:3,label:"assignment of read-only location",summary:'Error says "assignment of read-only location"'},{id:"ambiguous-string-assign",page:2,label:"ambiguous overload for <code>operator=</code> (operand types are <code>String</code> and ...)",summary:'Error says "ambiguous overload for `operator=` (operand types are `String` and ...)"'},{id:"begin-not-found",page:15,label:"<code>begin</code>: no matching overloaded function found",summary:'Error says "`begin`: no matching overloaded function found"'},{id:"error-constants",page:31,label:"<code>bits/error_constants.h</code>: No such file or directory",summary:'Error says "`bits/error_constants.h`: No such file or directory'},{id:"print-ambiguous",page:32,label:"call of overloaded <code>print(...)</code> is ambiguous",summary:'Error says "call of overloaded `print(...)` is ambiguous"'},{id:"cannot-bind-object-ref",page:29,label:"cannot bind non-const lvalue reference of type <code>ArduinoJson::JsonObject&amp;</code> ...",summary:'Error says "cannot bind non-const lvalue reference of type `ArduinoJson::JsonObject&` ..."'},{id:"pointer-to-object",page:28,label:"<code>const void*</code> is not a pointer-to-object type",summary:'Error says "`const void*` is not a pointer-to-object type"'},{id:"doesnt-name-a-type",page:10,label:"<code>doc</code> does not name a type",summary:'Error says "`doc` does not name a type"'},{id:"dynamicjsonbuffer",page:9,label:"<code>DynamicJsonBuffer</code> is a class from ArduinoJson 5",summary:'Error says "`DynamicJsonBuffer` is a class from ArduinoJson 5"'},{id:"dynamicjsondocument-not-declared",page:16,label:"<code>DynamicJsonDocument</code> was not declared in this scope",summary:'Error says "`DynamicJsonDocument` was not declared in this scope"'},{id:"char-pointer-conversion",page:6,label:"invalid conversion from <code>const char*</code> to <code>char*</code> [-fpermissive]",summary:'Error says "invalid conversion from `const char*` to `char*` [-fpermissive]"'},{id:"invalid-conversion",page:14,label:"invalid use of incomplete type <code>class InvalidConversion&lt;...&gt;</code>",summary:'Error says "invalid use of incomplete type `class InvalidConversion<...>`"'},{id:"jsondocument-copy",page:17,label:"<code>JsonDocument::JsonDocument(const JsonDocument&amp;)</code> is private",summary:'Error says "`JsonDocument::JsonDocument(const JsonDocument&)` is private"'},{id:"macro-min",page:18,label:"macro <code>min</code> passed 3 arguments, but takes just 2",summary:'Error says "macro `min` passed 3 arguments, but takes just 2"'},{id:"basicjsondocument-default-constructor",page:4,label:"no default constructor exists for class <code>BasicJsonDocument</code>",summary:'Error says "no default constructor exists for class `BasicJsonDocument`"'},{id:"no-matching-function",page:20,label:"no matching function for call to ...",summary:'Error says "no matching function for call to ..."'},{id:"passing-volatile-as-this-argument-discards-qualifiers",page:30,label:"passing <code>volatile ...</code> as <code>this</code> argument discards qualifiers [-fpermissive]",summary:'Error says "passing `volatile ...` as `this` argument discards qualifiers [-fpermissive]"'},{id:"cast-void-to-flashstringhelper",page:5,label:"reinterpret_cast from <code>const void</code> to <code>const __FlashStringHelper *</code> is not allowed",summary:'Error says "reinterpret_cast from `const void` to `const __FlashStringHelper *` is not allowed"'},{id:"member-write-in-char-ptr",page:19,label:"request for member <code>write</code> in ..., which is of non-class type <code>char*</code>",summary:'Error says "request for member `write` in ..., which is of non-class type `char*`"'},{id:"staticjsonbuffer",page:9,label:"<code>StaticJsonBuffer</code> is a class from ArduinoJson 5",summary:'Error says "`StaticJsonBuffer` is a class from ArduinoJson 5"'},{id:"staticjsondocument-not-declared",page:16,label:"<code>StaticJsonDocument</code> was not declared in this scope",summary:'Error says "`StaticJsonDocument` was not declared in this scope"'},{id:"range-based-for-requires-begin",page:15,label:"this range-based <code>for</code> statement requires a suitable &quot;begin&quot; function and none was found",summary:'Error says "this range-based `for` statement requires a suitable "begin" function and none was found"'},{id:"not-in-list",page:34,label:"None of the above",summary:"The error is not in the list"}]},{content:`<p>This error occurs when you try to assign a <a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a> to a <a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a>.</p>
<p>Indeed, due to the way these two classes are defined, you can <em>construct</em> a <a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a> from a <a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a>, but you cannot <em>assign</em> a <a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a> to an existing string.</p>
<pre><code class="hljs">String name <span class="hljs-operator">=</span> doc[<span class="hljs-string">&quot;name&quot;</span>]<span class="hljs-comment">;  // contruction -&gt; works</span>
<span class="hljs-attribute">name</span> <span class="hljs-operator">=</span> doc[<span class="hljs-string">&quot;name&quot;</span>]<span class="hljs-comment">;         // assignment  -&gt; fails</span>
</code></pre>
<p>You can easily workaround this problem by explicitly casting the <a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a>, like so:</p>
<pre><code class="hljs"><span class="hljs-attribute">name</span> <span class="hljs-operator">=</span> doc[<span class="hljs-string">&quot;name&quot;</span>].as&lt;String&gt;()<span class="hljs-comment">;</span>
</code></pre>
<p>Please see <a href="/v6/error/ambiguous-overload-for-operator-equal/">error: ambiguous overload for 'operator=' (operand types are 'String' and ...)</a> for details.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Casting the `JsonVariant` fixes the issue"},{id:"failure",page:35,label:"No",summary:"Casting the `JsonVariant` doesn't fix the issue"}]},{content:`<p>This error occurs when you pass a string to <a href="/v6/api/jsonarray/subscript/"><code>JsonArray::operator[]</code></a>; i.e., when you use an array like an object.</p>
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
`,options:[{id:"success",page:162,label:"Yes",summary:"Using an integer or switching to an object fixes the issue"},{id:"failure",page:35,label:"No",summary:"Neither using an integer nor switching to an object fixes the issue"}]},{content:`<p>This is a linting error you may have in Visual Studio Code if your program contains something like this:</p>
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
`,options:[{id:"success",page:162,label:"Yes",summary:"Passing the capacity to the constructor fixes the issue"},{id:"failure",page:35,label:"No",summary:"Passing the capacity to the constructor doesn't fix the issue"}]},{content:`<p>The error should look like this:</p>
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
`,options:[{id:"success",page:162,label:"Yes",summary:"Setting `ARDUINOJSON_ENABLE_PROGMEM` to `0` fixes the issue"},{id:"failure",page:35,label:"No",summary:"Setting `ARDUINOJSON_ENABLE_PROGMEM` to `0` doesn't fix the issue"}]},{content:`<p>This error occurs when you try to store a pointer of type <code>const char*</code> into a variable of type <code>char*</code>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-type">char</span>* eventName = doc[<span class="hljs-string">&quot;event&quot;</span>];
</code></pre>
<p>Indeed, <a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a> returns a <code>const char*</code>, not a <code>char*</code>. You must change the type of the pointer, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-type">const</span> <span class="hljs-type">char</span>* eventName = doc[<span class="hljs-string">&quot;event&quot;</span>];
</code></pre>
<p>There are other similar situations where this error can occur. For more information, please read <a href="/v6/error/invalid-conversion-from-const-char-to-char/">invalid conversion from 'const char*' to 'char*' [-fpermissive]</a>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Changing the pointer type fixes the issue"},{id:"failure",page:35,label:"No",summary:"Changing the pointer type doesn't fix the issue"}]},{content:`<p>I recommend that you download <a href="https://github.com/bblanchon/ArduinoJson/releases/download/v5.13.5/ArduinoJson-v5.13.5.h"><code>ArduinoJson-v5.13.5.h</code></a> and save it among the project files, this way you're sure that the project is distributed with the right version of the library.</p>
<p>You can choose to keep the name <code>ArduinoJson-v5.13.5.h</code> and update the <code>#include</code> directive, or you can rename the file to <code>ArduinoJson.h</code>; either way is fine, as long as the header is in the same folder as the file that includes it.</p>
<p>Please see <a href="/v5/doc/installation/">installation instructions</a> for details</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Downloading ArduinoJson 5 fixes the issue"},{id:"failure",page:35,label:"No",summary:"Downloading ArduinoJson 5 doesn't fix the issue"}]},{content:`<p>Upgrading from v5 to v6 isn't trivial but isn't complicated either.<br>
Please follow the <a href="/v6/doc/upgrade/">upgrade instructions</a>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Upgrading fixes the issue"},{id:"failure",page:35,label:"No",summary:"Upgrading doesn't fix the issue"}]},{content:`<p>This error occurs when you try to use ArduinoJson 6 with a program written for ArduinoJson 5.</p>
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
`,options:[{id:"success",page:162,label:"Yes",summary:"Moving statement to `setup()` fixes the issue"},{id:"failure",page:35,label:"No",summary:"Moving statement to `setup()` doesn't fix the issue"}]},{content:`<p>Somewhere in your program, there is a conversion from <a href="/v6/api/jsonvariantconst/"><code>JsonVariantConst</code></a> to <a href="/v6/api/jsonarray/"><code>JsonArray</code></a>. This conversion is invalid because it would convert a <em>read-only</em> reference to a <em>read-write</em> reference.</p>
<p>To fix this issue, you must use <a href="/v6/api/jsonarrayconst/"><code>JsonArrayConst</code></a> in place of <a href="/v6/api/jsonarray/"><code>JsonArray</code></a>.</p>
<p>For example, if your program contains the expression <code>variant.as&lt;JsonArray&gt;()</code>, you must replace it with <code>variant.as&lt;JsonArrayConst&gt;()</code>. Alternatively, if your program contains a statement like <code>JsonArray array = variant</code>, you must replace it with <code>JsonArrayConst array = variant</code>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Replacing `JsonArray` with `JsonArrayConst` fixes the issue"},{id:"failure",page:35,label:"No",summary:"Replacing `JsonArray` with `JsonArrayConst` doesn't fix the issue"}]},{content:`<p>Somewhere in your program, there is a conversion from <a href="/v6/api/jsonvariantconst/"><code>JsonVariantConst</code></a> to <a href="/v6/api/jsonobject/"><code>JsonObject</code></a>. This conversion is invalid because it would convert a <em>read-only</em> reference to a <em>read-write</em> reference.</p>
<p>To fix this issue, you must use <a href="/v6/api/jsonobjectconst/"><code>JsonObjectConst</code></a> in place of <a href="/v6/api/jsonobject/"><code>JsonObject</code></a>.</p>
<p>For example, if your program contains the expression <code>variant.as&lt;JsonObject&gt;()</code>, you must replace it with <code>variant.as&lt;JsonObjectConst&gt;()</code>. Alternatively, if your program contains a statement like <code>JsonObject obj = variant</code>, you must replace it with <code>JsonObjectConst obj = variant</code>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Replacing `JsonObject` with `JsonObjectConst` fixes the issue"},{id:"failure",page:35,label:"No",summary:"Replacing `JsonObject` with `JsonObjectConst` doesn't fix the issue"}]},{content:`<p>Somewhere in your program, there is a conversion from <a href="/v6/api/jsonvariantconst/"><code>JsonVariantConst</code></a> to <a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a>. This conversion is invalid because it would convert a <em>read-only</em> reference to a <em>read-write</em> reference.</p>
<p>To fix this issue, you must use <a href="/v6/api/jsonvariantconst/"><code>JsonVariantConst</code></a> in place of <a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a>.</p>
<p>For example, if your program contains the expression <code>variant.as&lt;JsonVariant&gt;()</code>, you must replace it with <code>variant.as&lt;JsonVariantConst&gt;()</code>. Alternatively, if your program contains a statement like <code>JsonVariant v = variant</code>, you must replace it with <code>JsonVariantConst v = variant</code>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Replacing `JsonVariant` with `JsonVariantConst` fixes the issue"},{id:"failure",page:35,label:"No",summary:"Replacing `JsonVariant` with `JsonVariantConst` doesn't fix the issue"}]},{content:`<p>Assuming we removed the namespace <code>ArduinoJson6XXX</code> from the error message, what type is incomplete?</p>
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
`,options:[{id:"success",page:162,label:"Yes",summary:"Calling `as<JsonObject>()` or `as<JsonArray>()` solves the issue"},{id:"failure",page:35,label:"No",summary:"Calling `as<JsonObject>()` or `as<JsonArray>()` doesn't solve the issue"}]},{content:`<p>You probably forgot to include the library header.</p>
<p>Please add the following line at the top of your program:</p>
<pre><code class="hljs language-c++"><span class="hljs-meta">#<span class="hljs-keyword">include</span> <span class="hljs-string">&lt;ArduinoJson.h&gt;</span></span>
</code></pre>
<p>Did this fix your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Including `ArduinoJson.h` fixes the issue"},{id:"failure",page:35,label:"No",summary:"Including `ArduinoJson.h` doesn't fix the issue"}]},{content:`<p><a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> doesn't support copying.</p>
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
`,options:[{id:"success",page:162,label:"Yes",summary:"Using a reference solves the issue"},{id:"failure",page:35,label:"No",summary:"Using a reference doesn't solve the issue"}]},{content:`<p>This is a bug in some Arduino cores, most notably the one for <a href="https://en.wikipedia.org/wiki/Atmel_ARM-based_processors#SAM_D">SAMD21</a>.</p>
<p>You can workaround this bug by defining both <a href="/v6/api/config/enable_std_string/"><code>ARDUINOJSON_ENABLE_STD_STRING</code></a> and <a href="/v6/api/config/enable_std_stream/"><code>ARDUINOJSON_ENABLE_STD_STREAM</code></a> to <code>0</code>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-meta">#<span class="hljs-keyword">define</span> ARDUINOJSON_ENABLE_STD_STRING 0</span>
<span class="hljs-meta">#<span class="hljs-keyword">define</span> ARDUINOJSON_ENABLE_STD_STREAM 0</span>
<span class="hljs-meta">#<span class="hljs-keyword">include</span> <span class="hljs-string">&lt;ArduinoJson.h&gt;</span></span>
</code></pre>
<p>You can find more information on this error here: <a href="/v6/error/macro-min-passed-3-arguments-but-takes-just-2/">macro &quot;min&quot; passed 3 arguments, but takes just 2</a></p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Defining `ARDUINOJSON_ENABLE_STD_STRING` and `ARDUINOJSON_ENABLE_STD_STREAM` to `0` solves the issue"},{id:"failure",page:35,label:"No",summary:"Defining `ARDUINOJSON_ENABLE_STD_STRING` and `ARDUINOJSON_ENABLE_STD_STREAM` to `0` doesn't solve the issue"}]},{content:`<p>This error occurs when you pass a <code>char*</code> to <a href="/v6/api/json/serializejson/"><code>serializeJson()</code></a> but forget to pass the third argument.
For example:</p>
<pre><code class="hljs language-c++"><span class="hljs-built_in">serializeJson</span>(doc, ptr);  <span class="hljs-comment">// request for member &#x27;write&#x27; in ..., which is of non-class type &#x27;char*&#x27; </span>
</code></pre>
<p>To fix this error, you must pass the size of the destination buffer as the third argument, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-built_in">serializeJson</span>(doc, ptr, size);  <span class="hljs-comment">// OK</span>
</code></pre>
<p>In the examples, you may have seen that I didn't use the size argument; that's because the second argument was not a <code>char*</code> but a <code>char[N]</code>, and <a href="/v6/api/json/serializejson/"><code>serializeJson()</code></a> was able to infer the value of <code>N</code> from the type.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Passing the buffer size to `serializeJson()` fixed the issue"},{id:"failure",page:35,label:"No",summary:"Passing the buffer size to `serializeJson()` didn't fix the issue"}]},{content:`<p>Which error is it?</p>
`,options:[{id:"basicjsondocument",page:23,label:"no matching function for call to <code>BasicJsonDocument::BasicJsonDocument()</code>",summary:'Error says "no matching function for call to `BasicJsonDocument::BasicJsonDocument()`"'},{id:"converttojson",page:24,label:"no matching function for call to <code>convertToJson(...)</code>",summary:'Error says "no matching function for call to `convertToJson(...)`"'},{id:"deserializejson",page:25,label:"no matching function for call to <code>deserializeJson(StaticJsonDocument&lt;200&gt; (&amp;)(), ...)</code>",summary:'Error says "no matching function for call to `deserializeJson(StaticJsonDocument<200> (&)(), ...)`"'},{id:"unresolved-overloaded-function-type",page:27,label:"no matching function for call to <code>...(&lt;unresolved overloaded function type&gt;)</code>",summary:'Error says "no matching function for call to `...(<unresolved overloaded function type>)`"'},{id:"as-char",page:22,label:"no matching function for call to <code>...as&lt;char&gt;() const</code>",summary:'Error says "no matching function for call to `...as<char>()` const"'},{id:"as-char-ptr",page:21,label:"no matching function for call to <code>...as&lt;char*&gt;() const</code>",summary:'Error says "no matching function for call to `...as<char*>()` const"'},{id:"is-char-ptr",page:26,label:"no matching function for call to <code>...is&lt;char*&gt;() const</code>",summary:'Error says "no matching function for call to `...is<char*>()` const"'},{id:"not-in-list",page:34,label:"None of the above",summary:"The error is not in the list"}]},{content:`<p>This error happens when you write the following:</p>
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
`,options:[{id:"success",page:162,label:"Yes",summary:"Replacing `char*` with `const char*` fixes the issue"},{id:"failure",page:35,label:"No",summary:"Replacing `char*` with `const char*` doesn't fix the issue"}]},{content:`<p>This error happens when you write the following:</p>
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
`,options:[{id:"success",page:162,label:"Yes",summary:"Replacing `char` with `int8_t` fixes the issue"},{id:"failure",page:35,label:"No",summary:"Replacing `char` with `int8_t` doesn't fix the issue"}]},{content:`<p>This error occurs when you forget to pass the capacity to the constructor of <a href="/v6/api/dynamicjsondocument/"><code>DynamicJsonDocument</code></a>, like so:</p>
<pre><code class="hljs language-c++">DynamicJsonDocument doc;
</code></pre>
<p>Instead, you need to specify the capacity of the memory pool, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-function">DynamicJsonDocument <span class="hljs-title">doc</span><span class="hljs-params">(<span class="hljs-number">2048</span>)</span></span>;
</code></pre>
<p>As usual, you can use the <a href="/v6/assistant/">ArduinoJson Assistant</a> to compute the right capacity for your project.</p>
<p>For more information, please read <a href="/v6/error/no-matching-function-for-call-to-basicjsondocument-basicjsondocument/">no matching function for call to 'BasicJsonDocument::BasicJsonDocument()'</a>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Passing the capacity to the constructor fixes the issue"},{id:"failure",page:35,label:"No",summary:"Passing the capacity to the constructor doesn't fix the issue"}]},{content:`<p>This error occurs when you try to insert an unsupported value type in a <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>.</p>
<p>To fix this error, you must either:</p>
<ul>
<li>change the type of value to a supported one (<code>const char*</code>, <code>int</code>, <code>float</code>, etc.)</li>
<li>write a <a href="/news/2021/05/04/version-6-18-0/">custom converter</a> for this type</li>
</ul>
<p>For more information, see <a href="/v6/error/no-matching-function-for-call-to-converttojson/">error: no matching function for call to 'convertToJson(...)'</a>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Converting the value fixes the issue"},{id:"failure",page:35,label:"No",summary:"Converting the value doesn't fix the issue"}]},{content:`<p>This error happens when you write the following:</p>
<pre><code class="hljs language-c++"><span class="hljs-function">StaticJsonDocument&lt;200&gt; <span class="hljs-title">doc</span><span class="hljs-params">()</span></span>;
<span class="hljs-built_in">deserializeJson</span>(doc, input);
</code></pre>
<p>Indeed, the first line doesn't declare a <code>StaticJsonDocument&lt;200&gt;</code> but a function that takes no argument and returns a <code>StaticJsonDocument&lt;200&gt;</code>. This is one of the most common pitfalls in C++ and it's called the <a href="https://en.wikipedia.org/wiki/Most_vexing_parse">Most vexing parse</a>.</p>
<p>To fix this program, you must remove the parentheses, like so:</p>
<pre><code class="hljs language-c++">StaticJsonDocument&lt;<span class="hljs-number">200</span>&gt; doc;
<span class="hljs-built_in">deserializeJson</span>(doc, input);
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:`It's the "Most vexing parse"`},{id:"failure",page:35,label:"No",summary:`It's not the "Most vexing parse"`}]},{content:`<p>This error happens when you write the following:</p>
<pre><code class="hljs language-c++"><span class="hljs-keyword">if</span> (doc[<span class="hljs-string">&quot;key&quot;</span>].<span class="hljs-built_in">is</span>&lt;<span class="hljs-type">char</span>*&gt;())
</code></pre>
<p>Indeed, support for <code>char*</code> was deprecated in <a href="/news/2021/05/04/version-6-18-0/">6.18</a> and removed in <a href="/news/2022/12/26/arduinojson-6-20-0/">6.20</a>.</p>
<p>To fix this error, you must replace <code>char*</code> with <code>const char*</code>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-keyword">if</span> (doc[<span class="hljs-string">&quot;key&quot;</span>].<span class="hljs-built_in">is</span>&lt;<span class="hljs-type">const</span> <span class="hljs-type">char</span>*&gt;())
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Replacing `char*` with `const char*` fixes the issue"},{id:"failure",page:35,label:"No",summary:"Replacing `char*` with `const char*` doesn't fix the issue"}]},{content:`<p>We typically see this error when your program does somethink like this:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">print</span>(doc[<span class="hljs-string">&quot;value&quot;</span>].as&lt;<span class="hljs-type">int</span>&gt;);
</code></pre>
<p>In this case, the compiler produces the following error:</p>
<pre><code class="hljs language-text">no matching function for call to &#x27;HardwareSerial::print(&lt;unresolved overloaded function type&gt;)&#x27;
</code></pre>
<p>This error occurs because <code>as&lt;int&gt;()</code> is a function, so you must call it by appending parenthesis like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">print</span>(doc[<span class="hljs-string">&quot;value&quot;</span>].<span class="hljs-built_in">as</span>&lt;<span class="hljs-type">int</span>&gt;());
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Adding the parentheses fixes the issue"},{id:"failure",page:35,label:"No",summary:"Adding the parentheses doesn't fix the issue"}]},{content:`<p>This error comes from a bug in the <a href="https://github.com/arduino/ArduinoCore-API">Arduino Core API</a> (or <code>Arduino.h</code>, if you prefer).
This bug was fixed by <a href="https://github.com/arduino/ArduinoCore-API/pull/118">arduino/ArduinoCore-API#118</a> in October 2020, but the fix wasn't immediately propagated to derived projects.</p>
<p>First, make sure that every related piece of software is up-to-date.
Then, if the problem persists, please open an issue in the relevant project and mention <a href="https://github.com/arduino/ArduinoCore-API/pull/118">arduino/ArduinoCore-API#118</a> in the description.</p>
<p>As a workaround, you can disable support for <a href="https://www.arduino.cc/reference/en/language/variables/utilities/progmem/"><code>PROGMEM</code></a> in ArduinoJson (your board doesn't support it anyway) by setting <a href="/v6/api/config/enable_progmem/">ARDUINOJSON_ENABLE_PROGMEM</a> to <code>0</code>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-meta">#<span class="hljs-keyword">define</span> ARDUINOJSON_ENABLE_PROGMEM 0</span>
<span class="hljs-meta">#<span class="hljs-keyword">include</span> <span class="hljs-string">&lt;ArduinoJson.h&gt;</span></span>
</code></pre>
<p>Did this fix your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Defining `ARDUINOJSON_ENABLE_PROGMEM` to `0` solves the issue"},{id:"failure",page:35,label:"No",summary:"Defining `ARDUINOJSON_ENABLE_PROGMEM` to `0` doesn't solve the issue"}]},{content:`<p>In your program, there is a line that look like this:</p>
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
`,options:[{id:"success",page:162,label:"Yes",summary:"Replacing `JsonObject&` with `JsonObject` fixes the issue"},{id:"failure",page:35,label:"No",summary:"Replacing `JsonObject&` with `JsonObject` doesn't fix the issue"}]},{content:`<p>This error occurs because you declared a <code>volatile</code> variable, but the member function you're trying to call is not qualified as <code>volatile</code>. In other words, the function is not meant to be called from a <code>volatile</code> instance.</p>
<p><a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> is not safe to use on concurrent threads, so its member cannot be qualified as <code>volatile</code>.</p>
<p>To work around this issue, you must remove the <code>volatile</code> qualifier and use a thread-safe synchronization mechanism. For example, you could push values into a <a href="https://www.freertos.org/Embedded-RTOS-Queues.html">FreeRTOS queue</a> and pull them from the main thread.</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Using a queue solves the issue."},{id:"failure",page:35,label:"No",summary:"Cannot use a queue."}]},{content:`<p>This problem is not related to ArduinoJson, but it's a known issue on Windows.
It's frequent with ESP8266 and ESP32 but can happen with any device.</p>
<p>See:</p>
<ul>
<li><a href="https://github.com/espressif/arduino-esp32/issues/6593">espressif/arduino-esp32#6593</a></li>
<li><a href="https://github.com/bblanchon/ArduinoJson/issues/1871">bblanchon/ArduinoJson#1871</a></li>
</ul>
<p>The problem comes from the file path that is too long for the Windows API.</p>
<p>The solution is to reinstall Arduino (or the toolchain) in another location with a shorter path.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Shortening the path fixes the issue"},{id:"failure",page:35,label:"No",summary:"Shortening the path doesn't fix the issue"}]},{content:`<p>This error usually occurs when you pass a <a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a> to <a href="https://www.arduino.cc/reference/en/language/functions/communication/serial/print/"><code>Serial::print()</code></a> or <a href="https://www.arduino.cc/reference/en/language/functions/communication/serial/println/"><code>Serial::print()</code></a>.</p>
<p>To fix it, you need to explicitly cast the <a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a> to a type supported by <a href="https://www.arduino.cc/reference/en/language/functions/communication/serial/print/"><code>Serial::print()</code></a>, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">print</span>(doc[<span class="hljs-string">&quot;event&quot;</span>].<span class="hljs-built_in">as</span>&lt;<span class="hljs-type">const</span> <span class="hljs-type">char</span>*&gt;());
</code></pre>
<p><a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a> must contain (or more exactly &quot;point to&quot;) a value of the specified type; otherwise, you'll get a default value, like <code>NULL</code> or <code>0</code>. If you want to support any type of value, you must replace the call to <a href="https://www.arduino.cc/reference/en/language/functions/communication/serial/print/"><code>Serial::print()</code></a> with a call to <a href="/v6/api/json/serializejson/"><code>serializeJson()</code></a>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-built_in">serializeJson</span>(doc[<span class="hljs-string">&quot;event&quot;</span>], Serial);
</code></pre>
<p>You can find more information on this error here: <a href="/v6/error/call-of-overloaded-println-is-ambiguous/">call of overloaded 'println(...)' is ambiguous</a></p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Casting the value or using `serializeJson()` solves the issue"},{id:"failure",page:35,label:"No",summary:"Neither casting the value nor using `serializeJson()` solves the issue"}]},{content:`<p>If you try to use ArduinoJson with a C compiler (or a C++ compiler targeting the C language), you'll get the following error message:</p>
<blockquote>
<p>ArduinoJson requires a C++ compiler, please change file extension to .cc or .cpp</p>
</blockquote>
<p>Most of the time, this happens because you gave the extension <code>.c</code> to your main source file.<br>
To fix this issue, you must rename the extension to <code>.cpp</code> so the compiler understands you want to target the C++ language.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Changing the file extension to `.cpp` fixes the error"},{id:"failure",page:35,label:"No",summary:"Changing the file extension to `.cpp` doesn't fix the error"}]},{content:`<p>Please click on the &quot;Contact Support&quot; button below and provide the following information:</p>
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
`,options:[{id:"ok",page:115,label:"<code>Ok</code>",summary:"`deserializeJson()` returns `Ok`"},{id:"emptyinput",page:51,label:"<code>EmptyInput</code>",summary:"`deserializeJson()` returns `EmptyInput`"},{id:"incompleteinput",page:66,label:"<code>IncompleteInput</code>",summary:"`deserializeJson()` returns `IncompleteInput`"},{id:"invalidinput",page:73,label:"<code>InvalidInput</code>",summary:"`deserializeJson()` returns `InvalidInput`"},{id:"nomemory",page:148,label:"<code>NoMemory</code>",summary:"`deserializeJson()` returns `NoMemory`"},{id:"notsupported",page:156,label:"<code>NotSupported</code>",summary:"`deserializeJson()` returns `NotSupported`"},{id:"toodeep",page:161,label:"<code>TooDeep</code>",summary:"`deserializeJson()` returns `TooDeep`"},{id:"crash",page:38,label:"I can't tell because the program crashes",summary:"The program crashes"},{id:"unknown",page:37,label:"I don't know what you're talking about",summary:"The program doesn't check the error"}]},{content:`<p><a href="/v6/api/misc/deserializationerror/"><code>DeserializationError</code></a> is the return type of <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>. It tells whether the operation succeeded and indicates the cause of the error.</p>
<p>Modify your program to show the error code, like so:</p>
<pre><code class="hljs language-c++">DeserializationError error = <span class="hljs-built_in">deserializeJson</span>(doc, input);

Serial.<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;deserializeJson() returned &quot;</span>);
Serial.<span class="hljs-built_in">println</span>(error.<span class="hljs-built_in">c_str</span>());
</code></pre>
<p>Now, what does it show?</p>
`,options:[{id:"ok",page:115,label:"<code>Ok</code>",summary:"`deserializeJson()` returns `Ok`"},{id:"emptyinput",page:51,label:"<code>EmptyInput</code>",summary:"`deserializeJson()` returns `EmptyInput`"},{id:"incompleteinput",page:66,label:"<code>IncompleteInput</code>",summary:"`deserializeJson()` returns `IncompleteInput`"},{id:"invalidinput",page:73,label:"<code>InvalidInput</code>",summary:"`deserializeJson()` returns `InvalidInput`"},{id:"nomemory",page:148,label:"<code>NoMemory</code>",summary:"`deserializeJson()` returns `NoMemory`"},{id:"notsupported",page:156,label:"<code>NotSupported</code>",summary:"`deserializeJson()` returns `NotSupported`"},{id:"toodeep",page:161,label:"<code>TooDeep</code>",summary:"`deserializeJson()` returns `TooDeep`"},{id:"crash",page:38,label:"I can't tell because the program crashes",summary:"The program crashes"}]},{content:`<p>I need to know for sure if the program crashes before or after calling <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>.</p>
<p>Please add some traces around the call to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> and make sure to flush the Serial buffer. You can use the <a href="https://github.com/bblanchon/ArduinoTrace">ArduinoTrace library</a>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-built_in">TRACE</span>();
DeserializationError err = <span class="hljs-built_in">deserializeJson</span>(doc, input);
<span class="hljs-built_in">TRACE</span>();
</code></pre>
<p>How many traces can you see in the Serial Monitor?</p>
`,options:[{id:"before",page:44,label:"None: program crashes before calling <code>deserializeJson()</code>",summary:"Program crashes before calling `deserializeJson()`"},{id:"inside",page:46,label:"Only one: program crashes inside <code>deserializeJson()</code>",summary:"Program crashes inside `deserializeJson()`"},{id:"after",page:39,label:"Two traces: program crashes after calling <code>deserializeJson()</code>",summary:"Program crashes after calling `deserializeJson()`"}]},{content:`<p>Most of the time, when a program crashes after <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>, it's because it dereferences a null pointer returned by the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>.</p>
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
`,options:[{id:"strcmp",page:42,label:"Yes, there is a call to <code>strcmp()</code>",summary:"Program calls `strcmp()`"},{id:"strcpy",page:43,label:"Yes, there is a call to <code>strcpy()</code>",summary:"Program calls `strcpy()`"},{id:"printf",page:41,label:"Yes, there is a call to <code>printf()</code>, <code>sprintf()</code>, or <code>snprintf()</code>",summary:"Program calls `printf()`, `sprintf()`, or `snprintf()`"},{id:"success",page:162,label:"Yes, I found the issue",summary:"Program dereferences a null pointer"},{id:"no-usual-suspect",page:40,label:"No",summary:"Program calls neither `strcmp()`, nor `strcpy()`, not `printf()`"}]},{content:`<p>A programs can also crash after calling <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> because it keeps a pointer to a string stored in the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>.</p>
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
`,options:[{id:"success",page:162,label:"Yes",summary:"Replacing pointer with a `String` solves the issue"},{id:"failure",page:35,label:"No",summary:"Replacing pointer with a `String` doesn't solve the issue"}]},{content:`<p>As far as the standard is concerned, the behavior of <code>printf()</code>, <code>sprintf()</code>, and <code>snprintf()</code> is undefined if a <code>%s</code> refers to a null string.</p>
<p>The simplest solution is to change the default value returned by <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>: instead of returning a null pointer when the value is missing, we can ask it to return an empty string (i.e., <code>&quot;&quot;</code>) or some other replacement (e.g., <code>&quot;&lt;null&gt;&quot;</code>). We can do that with <a href="/v6/api/jsonvariant/or/"><code>operator|</code></a>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// replace this:</span>
<span class="hljs-built_in">printf</span>(<span class="hljs-string">&quot;Event = %s\\n&quot;</span>, doc[<span class="hljs-string">&quot;event&quot;</span>]);

<span class="hljs-comment">// ...with this:</span>
<span class="hljs-built_in">printf</span>(<span class="hljs-string">&quot;Event = %s\\n&quot;</span>, doc[<span class="hljs-string">&quot;event&quot;</span>] | <span class="hljs-string">&quot;&lt;null&gt;&quot;</span>);
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Providing a non-null default solves the issue"},{id:"failure",page:35,label:"No",summary:"Providing a non-null default doesn't solve the issue"}]},{content:`<p>As per the standard, the behavior of <a href="https://en.cppreference.com/w/c/string/byte/strcmp"><code>strcmp()</code></a> is undefined if one of the two arguments is null.</p>
<p>That's not a problem for you because you don't need to call <a href="https://en.cppreference.com/w/c/string/byte/strcmp"><code>strcmp()</code></a>. Indeed, <a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a> supports all comparisons operators (<code>==</code>, <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>), and these operators handle null values correctly.</p>
<p>Please replace calls to <a href="https://en.cppreference.com/w/c/string/byte/strcmp"><code>strcmp()</code></a> with <code>==</code>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// replace this:</span>
<span class="hljs-keyword">if</span> (<span class="hljs-built_in">strcmp</span>(doc[<span class="hljs-string">&quot;event&quot;</span>], <span class="hljs-string">&quot;wakeup&quot;</span>)) ...

<span class="hljs-comment">// ...with this:</span>
<span class="hljs-keyword">if</span> (doc[<span class="hljs-string">&quot;event&quot;</span>] == <span class="hljs-string">&quot;wakeup&quot;</span>) ...
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Replacing `strcmp()` with `==` solves the issue"},{id:"failure",page:35,label:"No",summary:"Replacing `strcmp()` with `==` doesn't solve the issue"}]},{content:`<p>As per the standard, the behavior of <a href="https://en.cppreference.com/w/c/string/byte/strcpy"><code>strcpy()</code></a> (and <a href="https://en.wikibooks.org/wiki/C_Programming/C_Reference/nonstandard/strlcpy"><code>strlcpy()</code></a>) is undefined if one of the pointers is null.</p>
<p>The simplest solution is to change the default value returned by <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>: instead of returning a null pointer when the value is missing, we can ask it to return an empty string (i.e., <code>&quot;&quot;</code>) or some other replacement (e.g., <code>&quot;&lt;null&gt;&quot;</code>). We can do that with <a href="/v6/api/jsonvariant/or/"><code>operator|</code></a>.</p>
<p>Please provide a non-null default for all calls to <a href="https://en.cppreference.com/w/c/string/byte/strcpy"><code>strcpy()</code></a>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// replace this:</span>
<span class="hljs-built_in">strcpy</span>(eventName, doc[<span class="hljs-string">&quot;event&quot;</span>]);

<span class="hljs-comment">// ...with this:</span>
<span class="hljs-built_in">strcpy</span>(eventName, doc[<span class="hljs-string">&quot;event&quot;</span>] | <span class="hljs-string">&quot;&lt;null&gt;&quot;</span>);
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Providing a non-null default solves the issue"},{id:"failure",page:35,label:"No",summary:"Providing a non-null default doesn't solve the issue"}]},{content:`<p>A stack-overflow could cause the crash.</p>
<p>Do you use a <a href="/v6/api/staticjsondocument/"><code>StaticJsonDocument</code></a>?</p>
`,options:[{id:"static",page:50,label:"Yes",summary:"Program uses `StaticJsonDocument`"},{id:"no-static",page:45,label:"No",summary:"Program doesn't use `StaticJsonDocument`"}]},{content:`<p>I still think this could be a stack-overflow.</p>
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
`,options:[{id:"failure",page:35,label:"Yes",summary:"Reducing stack usage doesn't prevent the crash"},{id:"success",page:162,label:"No",summary:"Reducing stack usage prevents the crash"}]},{content:`<p>Passing a dangling pointer could cause a crash.</p>
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
`,options:[{id:"no-dangling-ptr",page:44,label:"Yes",summary:"Removing dangling pointers doesn't prevent the crash"},{id:"success",page:162,label:"No",summary:"Removing dangling pointers prevents the crash"}]},{content:`<p>Well, that's very bad news. It seems that your microcontroller doesn't have enough RAM to hold the JSON document.</p>
<p>Please read <a href="/v6/how-to/reduce-memory-usage/">How to reduce memory usage</a>; it shows several techniques that you can implement to use less RAM.
Hopefully, you'll make enough room for the memory pool.</p>
<p>If it still doesn't fit, you'll have to upgrade to a bigger microcontroller.</p>
`},{content:`<p>Good news!<br>
The memory allocation succeeds; the <a href="/v6/api/dynamicjsondocument/"><code>DynamicJsonDocument</code></a> is simply too small, so you need to increase its capacity.</p>
<p>Use the <a href="/v6/assistant/">ArduinoJson Assistant</a> to compute the right capacity for your input.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Increasing the capacity fixes the issue"},{id:"failure",page:35,label:"No",summary:"Increasing the capacity doesn't fix the issue"}]},{content:`<p>It looks like the allocation failed.</p>
<p>Please print the capacity of the <a href="/v6/api/dynamicjsondocument/"><code>DynamicJsonDocument</code></a> to the serial port, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(doc.<span class="hljs-built_in">capacity</span>());
</code></pre>
<p>What value does it show?</p>
`,options:[{id:"capacity-0",page:47,label:"<code>0</code>",summary:"`doc.capacity()` returns `0`"},{id:"capacity-ok",page:48,label:"The value passed to the constructor of <code>DynamicJsonDocument</code>",summary:"`doc.capacity()` returns the right value"}]},{content:`<p>A big <a href="/v6/api/staticjsondocument/"><code>StaticJsonDocument</code></a> might indeed overflow the stack.
Even if there is a lot of free memory, you can run out of stack because many platforms limit the size at compile time.</p>
<p>For example, ESP8266 limits to 4096 and ESP32 limits to 8192.
These numbers might seem high, but huge part of the stack is already consumed by callers of your program. As a rule, I recommend never allocating a <a href="/v6/api/staticjsondocument/"><code>StaticJsonDocument</code></a> bigger than the half of the limit (so max 2048 on ESP8266 and 4096 on ESP32). If you need more space in your <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, you need to use a <a href="/v6/api/dynamicjsondocument/"><code>DynamicJsonDocument</code></a> instead.</p>
<p>Does switching to a <a href="/v6/api/dynamicjsondocument/"><code>DynamicJsonDocument</code></a> prevent the crash?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Switching to `DynamicJsonDocument` prevents the crash"},{id:"nomemory",page:49,label:"Yes, but now <code>deserializeJson()</code> returns <code>NoMemory</code>",summary:"Switching to `DynamicJsonDocument` produces `NoMemory`"},{id:"dynamicjsondocument-too",page:45,label:"No",summary:"Switching to `DynamicJsonDocument` doesn't prevent the crash"}]},{content:`<p><a href="/v6/api/misc/deserializationerror/#emptyinput"><code>EmptyInput</code></a> means that the input was empty or contained only spaces or comments.</p>
<p>Where does your JSON input come from?</p>
`,options:[{id:"http",page:58,label:"An HTTP response",summary:"Input comes from an HTTP response"},{id:"file",page:52,label:"A file",summary:"Input comes from a file"},{id:"serial",page:65,label:"A serial port",summary:"Input comes from a serial port"},{id:"other",page:63,label:"Something else",summary:"Input comes neither from an HTTP response, nor a file, nor a serial port"}]},{content:`<p><a href="/v6/api/misc/deserializationerror/#emptyinput"><code>EmptyInput</code></a> in the context of a file usually means:</p>
<ul>
<li>the file is closed</li>
<li>the file is opened in the wrong mode</li>
<li>the file is empty</li>
</ul>
<p>Please, make sure that the file is opened in &quot;read&quot; mode and try to print the content to make sure it's not empty.</p>
<p>You can find an example using the SD library in <a href="/v6/example/config/">JsonConfigFile.ino</a> and one using SPIFFS in <a href="/book/">Mastering ArduinoJson</a>.</p>
<p>Did this sole your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"The file was the problem"},{id:"failure",page:35,label:"No",summary:"The file is not the problem"}]},{content:`<p>We tried everything we could on the client side, so I'm starting to suspect an issue with the server.</p>
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
`,options:[{id:"success",page:162,label:"Yes",summary:"Following the redirection fixes the issue"},{id:"follow",page:59,label:"No",summary:"Following the redirection doesn't fix the issue"}]},{content:`<p>A negative number indicates an error on the client side.</p>
<p>With HTTPS, connection failures are often due to the certificate validation.</p>
<p>Please try to disable certificate validation by calling <a href="https://arduino-esp8266.readthedocs.io/en/latest/esp8266wifi/bearssl-client-secure-class.html#setinsecure"><code>WiFiClientSecure::setInsecure()</code></a> before starting the HTTP request.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"certificate-problem",page:55,label:"Yes",summary:"Calling `WiFiClientSecure::setInsecure()` solves the issue."},{id:"certificate-ok",page:54,label:"No",summary:"Calling `WiFiClientSecure::setInsecure()` doesn't solve the issue."}]},{content:`<p>Please check the HTTP status</p>
<p>For example, if you use <code>HTTPClient</code>, what value is returned by <code>http.GET()</code>?</p>
`,options:[{id:"redirect",page:56,label:"<code>300</code> to <code>399</code>",summary:"The status code indicates a redirection"},{id:"negative",page:57,label:"A negative number",summary:"The status code is negative"},{id:"status-ok",page:59,label:"None of the above",summary:"The status code is not in the list"}]},{content:`<p><a href="/v6/api/misc/deserializationerror/#emptyinput"><code>EmptyInput</code></a> could be caused by a timeout while reading the response.</p>
<p>Please increase the value of the timeout by calling <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/streamsettimeout/"><code>Stream::setTimeout()</code></a> before calling <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>. For example:</p>
<pre><code class="hljs language-c++">client.<span class="hljs-built_in">setTimeout</span>(<span class="hljs-number">10000</span>);  <span class="hljs-comment">// 10 seconds</span>
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Increasing the timeout fixes the issue"},{id:"timeout-increased",page:53,label:"No",summary:"Increasing the timeout doesn't fix the issue"}]},{content:`<p>This confirms that the problem comes from the input: it is indeed empty, or at least starts with a NUL character.</p>
<p>You must now find a way to fix your input; I cannot help you with that. Sorry.</p>
`},{content:`<p>Please print the ASCII code for the first character, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(stream.<span class="hljs-built_in">peek</span>());
</code></pre>
<p>What do you see?</p>
`,options:[{id:"zero",page:60,label:"<code>0</code>",summary:"The first character is NUL"},{id:"non-zero",page:35,label:"Something else",summary:"The first character is not NUL"}]},{content:`<p>Please print the ASCII code for the first character, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>((<span class="hljs-type">int</span>)input[<span class="hljs-number">0</span>]);
</code></pre>
<p>What do you see?</p>
`,options:[{id:"zero",page:60,label:"<code>0</code>",summary:"The first character is NUL"},{id:"non-zero",page:35,label:"Something else",summary:"The first character is not NUL"}]},{content:`<p>The input is probably starting with a NUL character.</p>
<p>What type of input are you passing to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>?</p>
`,options:[{id:"string",page:62,label:"A string (<code>const char*</code>, <code>String</code>, <code>std::string</code>...)",summary:"Input type is a string"},{id:"stream",page:61,label:"A stream (<code>Serial</code>, <code>WiFiClient</code>, <code>File</code>...)",summary:"Input type is a stream"}]},{content:`<p><a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> also returns <a href="/v6/api/misc/deserializationerror/#emptyinput"><code>EmptyInput</code></a> when the input contains only spaces.</p>
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
`,options:[{id:"success",page:162,label:"Yes",summary:"Removing CRLF fixes the issue"},{id:"failure",page:35,label:"No",summary:"Removing CRLF doesn't fix the issue"}]},{content:`<p><a href="/v6/api/misc/deserializationerror/#emptyinput"><code>EmptyInput</code></a> can be caused by a timeout while waiting for the input.</p>
<p>In that case, the solution is to wait until some data is available before calling <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>. A simple loop can do the trick:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// wait from an incomming message</span>
<span class="hljs-keyword">while</span> (Serial.<span class="hljs-built_in">available</span>() == <span class="hljs-number">0</span>)
  <span class="hljs-built_in">delay</span>(<span class="hljs-number">100</span>);

<span class="hljs-built_in">deserializeJson</span>(doc, Serial);
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Adding a wait loop fixes the issue"},{id:"available",page:64,label:"No",summary:"Adding a wait loop doesn't fix the issue"}]},{content:`<p><a href="/v6/api/misc/deserializationerror/#incompleteinput"><code>IncompleteInput</code></a> means that <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> managed to parse the beginning of the JSON document, but the end was missing.</p>
<p>What type of input do you pass to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>?</p>
`,options:[{id:"stream",page:69,label:"A stream",summary:"Input comes from a stream"},{id:"string",page:70,label:"A string object (like <code>String</code>)",summary:"Input comes from a string object"},{id:"pointer",page:71,label:"A pointer (like <code>char*</code> or <code>const char*</code>)",summary:"Input comes from a pointer"}]},{content:`<p><a href="/v6/api/misc/deserializationerror/#incompleteinput"><code>IncompleteInput</code></a> can be caused by an interruped connection. For example, this problem happens when the client reads to slowly.</p>
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
`,options:[{id:"success",page:162,label:"Yes",summary:"Adding a buffer solves the issue"},{id:"same-with-buffer",page:68,label:"No",summary:"Adding a buffer doesn't solve the issue"}]},{content:`<p>Maybe seeing where the input stops will give you an idea of what's going wrong.</p>
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
`,options:[{id:"success",page:162,label:"Yes",summary:"Logging helped fixing the issue"},{id:"failure",page:35,label:"No",summary:"Logging didn't help fixing the issue"}]},{content:`<p><a href="/v6/api/misc/deserializationerror/#incompleteinput"><code>IncompleteInput</code></a> can be caused by a timeout.</p>
<p>Please increase the value of the timeout by calling <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/streamsettimeout/"><code>Stream::setTimeout()</code></a> before calling <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>. For example:</p>
<pre><code class="hljs language-c++">stream.<span class="hljs-built_in">setTimeout</span>(<span class="hljs-number">10000</span>);  <span class="hljs-comment">// 10 seconds</span>
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Inreasing the timeout solves the issue"},{id:"timeout-increased",page:67,label:"No",summary:"Inreasing the timeout doesn't solve the issue"}]},{content:`<p>Please print the content of the string to the serial port, like so:</p>
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
`,options:[{id:"success",page:162,label:"Yes",summary:"Calling `String::reserve()` solves the issue"},{id:"same-with-reserve",page:72,label:"No",summary:"Calling `String::reserve()` doesn't solve the issue"}]},{content:`<p>I'll assume that your input is stored in a buffer similar to this one:</p>
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
`,options:[{id:"success",page:162,label:"Yes",summary:"Increasing the buffer size solves the issue"},{id:"larger-buffer",page:72,label:"No",summary:"Increasing the buffer size doesn't solve the issue"}]},{content:`<p>To reduce the memory usage, you should try to pass the source (file, connection, stream, etc) directly to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>, either via the <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/"><code>Stream</code></a> interface or via a <a href="/news/2019/11/01/version-6-13-0/">custom reader</a>. This will avoid the need for an intermediate buffer.</p>
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
`,options:[{id:"success",page:162,label:"Yes",summary:"Reading from stream fixes the issue"},{id:"failure",page:35,label:"No",summary:"Reading from stream doesn't fix the issue"}]},{content:`<p>Where does the input come from?</p>
`,options:[{id:"http",page:82,label:"An HTTP response",summary:"Input comes from HTTP"},{id:"serial",page:109,label:"A serial port",summary:"Input comes from a serial port"},{id:"file",page:81,label:"A file",summary:"Input comes from a file"},{id:"stream",page:112,label:"A stream",summary:"Input comes from a stream"},{id:"string",page:114,label:"A string (like <code>String</code> or <code>const char*</code>)",summary:"Input comes from a string"},{id:"char-ptr",page:76,label:"A char array or pointer (like <code>char[]</code> or <code>char*</code>)",summary:"Input comes from a char array"}]},{content:`<p>If you must keep the two calls to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>, you need to disable the zero-copy mode by passing a read-only input buffer. Casting the pointer will do the trick:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// replace this:</span>
<span class="hljs-built_in">deserializeJson</span>(doc, input, inputSize);

<span class="hljs-comment">// ...with this:</span>
<span class="hljs-built_in">deserializeJson</span>(doc, (<span class="hljs-type">const</span> <span class="hljs-type">char</span>*)input, inputSize);
</code></pre>
<p>Now that the zero-copy mode is disabled, you probably need a larger <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, so don't forget to update the capacity. As usual, use the <a href="/v6/assistant/">ArduinoJson Assistant</a> to compute the right capacity for your project.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Casting the pointer fixes the issue"},{id:"cast",page:114,label:"No",summary:"Casting the pointer doesn't fix the issue"}]},{content:`<p>When you pass a writeable buffer as the input of <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>, ArduinoJson uses the zero-copy mode. Instead of copying the strings from the input into the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, it stores pointers to the input buffer.</p>
<p>While doing this, the parser modifies the input buffer to unescape special characters and add string terminator.
When <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> returns the input buffer doesn't contain a valid JSON document anymore.
For this reason, you cannot call <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> twice with the same input buffer (if the input is writable).</p>
<p>I don't see any reason for calling <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> twice with the same input, so I recommend that your remove the second call.</p>
<p>Can you avoid duplicate calls to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>?</p>
`,options:[{id:"success",page:162,label:"Yes, and it fixes the issue",summary:"Removing the second call fixes the issue"},{id:"second-removed",page:114,label:"Yes, but it doesn't fix the issue",summary:"Removing the second call doesn't fix the issue"},{id:"cannot-remove",page:74,label:"No",summary:"The second call cannot be removed"}]},{content:`<p>Did you call <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> twice with the same input buffer?</p>
`,options:[{id:"two-calls",page:75,label:"Yes",summary:"Program calls `deserializeJson()` twice"},{id:"one-call",page:114,label:"No",summary:"Program doesn't call `deserializeJson()` twice"}]},{content:`<p>So, the JSON document is valid and not preceded by anything; yet, <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> returns <a href="/v6/api/misc/deserializationerror/#invalidinput"><code>InvalidInput</code></a>.</p>
<p>Well... I'm out of idea :-(</p>
`,tags:["needs_assistance"]},{content:`<p><code>254</code> or <code>255</code> is the first byte of the UTF-16 <a href="https://en.wikipedia.org/wiki/Byte_order_mark">Byte Order Mark</a> (BOM). ArduinoJson doesn't support UTF-16; it only supports ASCII and UTF-8. As a workaround, we can ask the server to encode the response with UTF-8.</p>
<p>To do this, add the following header to the HTTP request:</p>
<pre><code class="hljs language-http"><span class="hljs-attribute">Accept</span><span class="hljs-punctuation">: </span>application/json;charset=utf-8
</code></pre>
<p>Did this solve your problem?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"`Accept: application/json;charset=utf-8` solves the issue"},{id:"failure",page:35,label:"No",summary:"`Accept: application/json;charset=utf-8` doesn't solve the issue"}]},{content:`<p><code>239</code> is the first by of the UTF-8 <a href="https://en.wikipedia.org/wiki/Byte_order_mark">Byte Order Mark</a> (BOM).</p>
<p>ArduinoJson doesn't skip the BOM, you need to do it in your program by adding the following lines <strong>before</strong> calling <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// skip BOM</span>
stream.<span class="hljs-built_in">read</span>();  <span class="hljs-comment">// 0xEF</span>
stream.<span class="hljs-built_in">read</span>();  <span class="hljs-comment">// 0xBB</span>
stream.<span class="hljs-built_in">read</span>();  <span class="hljs-comment">// 0xBF</span>
</code></pre>
<p>Admitedly, this is quite hacky, so I recommend that you try to fix the server which should not include a BOM anyway.</p>
<p>Did this fix your problem?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Skipping the first 3 bytes solves the issue"},{id:"failure",page:35,label:"No",summary:"Skipping the first 3 bytes doesn't solve the issue"}]},{content:`<p>We must check that the JSON document is not preceded by a <a href="https://en.wikipedia.org/wiki/Byte_order_mark">Byte Order Mark</a> (BOM).</p>
<p>To do this, we'll peek at the first byte in the file and print the value to the serial port. Insert the following line <em>before</em> the call to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(file.<span class="hljs-built_in">peek</span>());
</code></pre>
<p>What value does it print?</p>
`,options:[{id:"utf8",page:79,label:"<code>239</code>",summary:"Input's first byte suggests a UTF-8 BOM"},{id:"utf16",page:78,label:"<code>254</code> or <code>255</code>",summary:"Input's first byte suggests a UTF-16 BOM"},{id:"no-bom",page:77,label:"Something else",summary:"Input's first byte doesn't suggest a BOM"}]},{content:`<p>We need to make sure that the JSON document is valid.
To do that, please print the input to the serial port, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">print</span>(file.<span class="hljs-built_in">readString</span>());
</code></pre>
<p>Then, copy the content and paste it in a JSON linter, like <a href="https://jsonlint.com/">jsonlint.com</a>.</p>
<p>Is the JSON document valid?</p>
`,options:[{id:"valid",page:80,label:"Yes",summary:"`jsonlint` says the document is valid"},{id:"invalid",page:98,label:"No",summary:"`jsonlint` says the document is invalid"}]},{content:`<p>Do you use an HTTP library?</p>
`,options:[{id:"httpclient",page:83,label:"Yes, I'm using <code>HTTPClient</code>",summary:"Program uses `HTTPClient`"},{id:"http-library",page:96,label:"Yes, but it's not <code>HTTPClient</code>",summary:"Program uses an unknown HTTP library"},{id:"no-library",page:92,label:"No",summary:"Program doesn't use an HTTP library"}]},{content:`<p>Did you check the status code?</p>
`,options:[{id:"status-ok",page:85,label:"Yes",summary:"The program already checks the status code"},{id:"check-status",page:84,label:"No",summary:"The program doesn't check the status code"}]},{content:`<p>Please check the status code like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-type">int</span> status = http.<span class="hljs-built_in">GET</span>();

Serial.<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Status code = &quot;</span>);
Serial.<span class="hljs-built_in">println</span>(status);
</code></pre>
<p>What do you get?</p>
`,options:[{id:"ok",page:85,label:"<code>200</code>",summary:"The status code is `200`"},{id:"positive",page:88,label:"A positive number (but not <code>200</code>)",summary:"The status code is positive"},{id:"negative",page:87,label:"A negative number",summary:"The status code is negative"}]},{content:`<p>Which function of <code>HTTPClient</code> do you call to get the response?</p>
`,options:[{id:"getstream",page:91,label:"<code>getStream()</code>",summary:"Response comes from `HTTPClient::getStream()`"},{id:"getstring",page:114,label:"<code>getString()</code>",summary:"Response comes from `HTTPClient::getString()`"},{id:"readstring",page:86,label:"<code>readString()</code>",summary:"Response comes from `HTTPClient::readString()`"}]},{content:`<p>You're calling the wrong function:</p>
<ul>
<li><code>HTTPClient::getString()</code> extracts the response's body</li>
<li><code>HTTPClient::readString()</code> is inherited from <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/"><code>Stream</code></a> and reads the complete response</li>
</ul>
<p>Unless you have very good reasons, you should call <code>getString()</code> not <code>readString()</code>.</p>
<p>Do calling <code>HTTPClient::getString()</code> solves your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Calling `HTTPClient::getString()` solves the issue"},{id:"getstring",page:114,label:"No",summary:"Calling `HTTPClient::getString()` doesn't solves the issue"}]},{content:`<p>A negative number indicates an error on the client side.</p>
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
`,options:[{id:"success",page:162,label:"Yes",summary:"Calling `HTTPClient::useHTTP10(true)` solves the issue"},{id:"changed",page:90,label:"No",summary:"Calling `HTTPClient::useHTTP10(true)` doesn't solve the issue"}]},{content:`<p>We need to make sure that the JSON document is valid.
To do that, please print the content of the response to the serial port like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">print</span>(http.<span class="hljs-built_in">getStream</span>().<span class="hljs-built_in">readString</span>());
</code></pre>
<p>Then, copy the response and paste it in a JSON linter, like <a href="https://jsonlint.com/">jsonlint.com</a>.</p>
<p>Is the JSON document valid?</p>
`,options:[{id:"valid",page:110,label:"Yes",summary:"jsonlint says the document is valid"},{id:"invalid",page:98,label:"No",summary:"jsonlint says the document is invalid"}]},{content:`<p>Did you call <code>HTTPClient::useHTTP10(true)</code>?</p>
`,options:[{id:"http10-true",page:90,label:"Yes",summary:"Program calls `HTTPClient::useHTTP10(true)`"},{id:"http10-false",page:89,label:"No",summary:"Program doesn't call `HTTPClient::useHTTP10(true)`"}]},{content:`<p>Before calling <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>, did you skip the HTTP headers?</p>
`,options:[{id:"headers-skipped",page:95,label:"Yes",summary:"HTTP headers are skipped"},{id:"headers-not-skipped",page:94,label:"No",summary:"HTTP headers are not skipped"}]},{content:`<p>On some Arduino core (most notably <a href="https://github.com/arduino/ArduinoCore-avr/blob/master/cores/arduino/Stream.h">AVR core</a>), <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/streamfind/"><code>Stream::find()</code></a> takes a <code>char*</code> instead of a <code>const char*</code>. In this case, you'll get a compiler warning, which you can fix by extracting a char array, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-type">char</span> endOfHeaders[] = <span class="hljs-string">&quot;\\r\\n\\r\\n&quot;</span>;
client.<span class="hljs-built_in">find</span>(endOfHeaders);
</code></pre>
<p>Did this fix your problem?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Using a `char[]` fixes the warning"},{id:"failure",page:35,label:"No",summary:"Using a `char[]` doesn't fix the warning"}]},{content:`<p>Just like the HTTP request, the response contains some headers, followed by an empty line, and then followed by the body.
The body is the part that contains the JSON document; therefore, before calling <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>, you must skip the headers.</p>
<p>To skip the headers, call <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/streamfind/"><code>Stream::find()</code></a>, like so:</p>
<pre><code class="hljs language-c++">client.<span class="hljs-built_in">find</span>(<span class="hljs-string">&quot;\\r\\n\\r\\n&quot;</span>);
</code></pre>
<p>This function consumes the input stream until it finds the empty line (<code>\\r\\n\\r\\n</code>).</p>
<p>See the example <a href="/v6/example/http-client/">JsonHttpClient.ino</a> for a complete implementation.</p>
<p>Did this fix your problem?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Skipping HTTP headers solves the issue"},{id:"warning",page:93,label:"Yes, but there is a compiler warning about <code>client.find()</code>",summary:"Skipping HTTP headers solves the issue, but there is a warning"},{id:"header-skipped",page:95,label:"No",summary:"Skipping HTTP headers doesn't solve the issue"}]},{content:`<p>When you use HTTP 1.1, the server can send the response with <a href="https://en.wikipedia.org/wiki/Chunked_transfer_encoding">Chunked Transfer Encoding</a>.
As a result, the response's body may contain some hexadecimal number at the begining of each chunk.
The most straightforward workaround is to downgrade the connection to HTTP 1.0.</p>
<p>To do this, replace <code>HTTP/1.1</code> with <code>HTTP/1.0</code> in the first line of the request.</p>
<p>Did this solve your problem?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Using `HTTP/1.0` solves the issue"},{id:"http10",page:97,label:"No",summary:"Using `HTTP/1.0` doesn't solve the issue"}]},{content:`<p>Unfortunately, I only know how to use the following HTTP libraries:</p>
<ul>
<li><a href="https://github.com/esp8266/Arduino/tree/master/libraries/ESP8266HTTPClient">ESP8266HTTPClient</a></li>
<li><a href="https://github.com/espressif/arduino-esp32/tree/master/libraries/HTTPClient">HTTPClient for ESP32</a></li>
</ul>
`,tags:["needs_assistance"]},{content:`<p>What's the type of the input that you pass to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a></p>
`,options:[{id:"stream",page:110,label:"A stream",summary:"The input is a stream"},{id:"string",page:113,label:"A string",summary:"The input is a string"}]},{content:`<p>What is wrong with this JSON document?</p>
`,options:[{id:"comments",page:99,label:"It contains comments",summary:"The document contains comments"},{id:"other-error",page:100,label:"Something else",summary:"The document doesn't contain comments"}]},{content:`<p><a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> can read JSON documents that contain comments, but the support is disabled by default to reduce the footprint of the library.</p>
<p>To enable the support for comments, define <a href="/v6/api/config/enable_comments/"><code>ARDUINOJSON_ENABLE_COMMENTS</code></a> to <code>1</code> before including <code>ArduinoJson.h</code>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-meta">#<span class="hljs-keyword">define</span> ARDUINOJSON_ENABLE_COMMENTS 1</span>
<span class="hljs-meta">#<span class="hljs-keyword">include</span> <span class="hljs-string">&lt;ArduinoJson.h&gt;</span></span>
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Setting ARDUINOJSON_ENABLE_COMMENTS to 1 solves the issue"},{id:"failure",page:35,label:"No",summary:"Setting ARDUINOJSON_ENABLE_COMMENTS to 1 doesn't solve the issue"}]},{content:`<p>Well, if the JSON document is invalid, you have to fix it, otherwise ArduinoJson won't be able to parse it.</p>
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
`,options:[{id:"success",page:162,label:"Yes",summary:"Increasing serial buffer size solves the issue"},{id:"larger-buffer",page:110,label:"No",summary:"Increasing serial buffer size doesn't solves the issue"}]},{content:`<p>Any electric wire acts as an antenna; the longer the wire, the stronger the effect. This antenna picks up every electromagnetic field in the environment, which induces a current in the wire. On long wires, this current is strong enough to introduce errors in the communication.</p>
<p>Reducing the length of the cable certainly improve the error ratio, but is rarely applicable.
We can, however, improve the quality of the cable.
For example, you can replace the wires with a coaxial cable: the shielding will prevent the inner wire from acting as an antenna.</p>
<p>Please upgrade or shorten your cable.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Upgrading the cables solves the issue"},{id:"improved",page:104,label:"Somehow",summary:"Upgrading the cables improves the situation"},{id:"no-improvment",page:105,label:"No",summary:"Upgrading the cables doesn't solve the issue"}]},{content:`<p><a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> may return <a href="/v6/api/misc/deserializationerror/#invalidinput"><code>InvalidInput</code></a> because it starts reading the input mid-stream.</p>
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
`,options:[{id:"success",page:162,label:"Yes",summary:"Flushing the serial buffer fixes the issue"},{id:"flush",page:108,label:"No",summary:"Flushing the serial buffer doesn't fix the issue"}]},{content:`<p><a href="https://en.wikipedia.org/wiki/Error_correction_code">Error-correction codes (ECC)</a> are a way of transmitting the data with redundant information that allows the receiver to fix most of the errors.
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
`,options:[{id:"success",page:162,label:"Yes",summary:"Error-correction codes fix the issue"},{id:"ecc",page:105,label:"No",summary:"Error-correction codes doesn't fix the issue"}]},{content:`<p>We need to make sure that the JSON document is valid.
To do that, please print the input to the serial port, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">print</span>(Serial1.<span class="hljs-built_in">readString</span>());
</code></pre>
<p>Note that <a href="https://www.arduino.cc/reference/en/language/functions/communication/serial/readstring/"><code>Serial1.readString()</code></a> will wait for a timeout before returning, so the statement may appear frozen. Be patient.</p>
<p>Then, copy the response and paste it in a JSON linter, like <a href="https://jsonlint.com/">jsonlint.com</a>.</p>
<p>Is the JSON document valid?</p>
`,options:[{id:"valid",page:101,label:"Yes",summary:"`jsonlint` says the document is valid"},{id:"invalid",page:98,label:"No",summary:"`jsonlint` says the document is invalid"}]},{content:`<p>Any kind of communication is subject to errors: sometimes you send a <code>1</code> and receive a <code>0</code>.
The problem with the serial port is that there is no built-in way to fix these errors.
However, we can take some measures to reduce the error ratio to something acceptable.</p>
<p>The faster the communication, the higher the error ratio, so the first thing to try is to reduce the communication speed.
Please try to reduce the baud rate.</p>
<p class="short-warning">If your program receives from one port and logs to another one, <strong>make sure the latter runs at a much higher speed</strong>. Logging must be at least ten times faster, or it will slow down the receiving port, which may drop incoming bytes.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Reducing baud rate fixes the issue"},{id:"better",page:102,label:"Somehow",summary:"Reducing baud rate improves the situation"},{id:"not-better",page:105,label:"No",summary:"Reducing baud rate doesn't fix the issue"}]},{content:`<p>The <a href="https://en.wikipedia.org/wiki/AVR_microcontrollers">AVR</a> implementation of <a href="https://www.arduino.cc/en/Reference/SoftwareSerial"><code>SoftwareSerial</code></a> is <strong>notoriously unreliable</strong> 😱.
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
`,options:[{id:"success",page:162,label:"Yes",summary:"Removing `SoftwareSerial` solves the issue"},{id:"removed",page:108,label:"No",summary:"Removing `SoftwareSerial` doesn't solve the issue"}]},{content:`<p>Not all microcontrollers use the same voltage for the serial port.
Some use 5V logic; others use 3.3V.</p>
<p>For example, the Arduino UNO uses 5V whereas the ESP8266 uses 3.3V.</p>
<p>If you need to wire two devices with different voltages, you need a <a href="https://www.amazon.com/dp/B00NAY2BBY?tag=bblanchon0b-20">logic-level converter</a>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"The issue is a voltage mismatch"},{id:"voltage-ok",page:106,label:"No",summary:"The issue is not a voltage mismatch"}]},{content:`<p>Are you using <a href="https://www.arduino.cc/en/Reference/SoftwareSerial"><code>SoftwareSerial</code></a>?</p>
`,options:[{id:"software",page:107,label:"Yes",summary:"Program uses `SoftwareSerial`"},{id:"hardware",page:103,label:"No",summary:"Program doesn't use `SoftwareSerial`"}]},{content:`<p>We must check that the JSON document is not preceded by a  <a href="https://en.wikipedia.org/wiki/Byte_order_mark">Byte Order Mark</a> (BOM).</p>
<p>To do this, we'll peek at the first byte in the stream and print the value to the serial. Insert the following line before the call to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(stream.<span class="hljs-built_in">peek</span>());
</code></pre>
<p>What value does it print?</p>
`,options:[{id:"utf8",page:79,label:"<code>239</code>",summary:"Input's first byte suggests a UTF-8 BOM"},{id:"utf16",page:78,label:"<code>254</code> or <code>255</code>",summary:"Input's first byte suggests a UTF-16 BOM"},{id:"no-bom",page:77,label:"Something else",summary:"Input's first byte doesn't suggest a BOM"}]},{content:`<p>Sometimes, the input is invalid because some bytes were dropped when receiving the document.
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
`,options:[{id:"success",page:162,label:"Yes",summary:"Adding a buffer solves the issue"},{id:"buffer",page:110,label:"No",summary:"Adding a buffer doesn't solve the issue"}]},{content:`<p>We need to make sure that the JSON document is valid.
To do that, please print the input to the serial port, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">print</span>(stream.<span class="hljs-built_in">readString</span>());
</code></pre>
<p>Then, copy the response and paste it in a JSON linter, like <a href="https://jsonlint.com/">jsonlint.com</a>.</p>
<p>Is the JSON document valid?</p>
`,options:[{id:"valid",page:111,label:"Yes",summary:"`jsonlint` says the document is valid"},{id:"invalid",page:98,label:"No",summary:"`jsonlint` says the document is invalid"}]},{content:`<p>We must check that the JSON document is not preceded by a  <a href="https://en.wikipedia.org/wiki/Byte_order_mark">Byte Order Mark</a> (BOM).</p>
<p>To do this, we'll print the first byte to the serial port. Insert the following line before the call to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(input[<span class="hljs-number">0</span>]);
</code></pre>
<p>What value does it print?</p>
`,options:[{id:"utf8",page:79,label:"<code>239</code>",summary:"Input's first byte suggests a UTF-8 BOM"},{id:"utf16",page:78,label:"<code>254</code> or <code>255</code>",summary:"Input's first byte suggests a UTF-16 BOM"},{id:"no-bom",page:77,label:"Something else",summary:"Input's first byte doesn't suggest a BOM"}]},{content:`<p>We need to make sure that the JSON document is valid.
To do that, please print the content of the string to the serial port, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">print</span>(input);
</code></pre>
<p>Then, copy the response and paste it in a JSON linter, like <a href="https://jsonlint.com/">jsonlint.com</a>.</p>
<p>Is the JSON document valid?</p>
`,options:[{id:"valid",page:113,label:"Yes",summary:"`jsonlint` says the document is valid"},{id:"invalid",page:98,label:"No",summary:"`jsonlint` says the document is invalid"}]},{content:`<p>So, what's the problem then?</p>
`,options:[{id:"slow",page:139,label:"It's slow",summary:"Deserialisation is slow"},{id:"invalid",page:116,label:"I expected <code>InvalidInput</code> instead of <code>Ok</code>",summary:"`Ok` is incorrect; it should be `InvalidInput`"},{id:"crash",page:39,label:"My program crashes after calling <code>deserializeJson()</code>",summary:"Program crashes after calling `deserializeJson()`"},{id:"empty",page:128,label:"<code>JsonDocument</code> returns empty/null values",summary:"Program fails to extract values from the `JsonDocument`"},{id:"garbage",page:120,label:"<code>JsonDocument</code> returns garbage",summary:"`JsonDocument` returns garbage"},{id:"changing-strings",page:120,label:"The strings in the <code>JsonDocument</code> change for no reason",summary:"The strings in the `JsonDocument` change for no reason"},{id:"altered",page:124,label:"<code>deserializeJson()</code> alters the content of the input",summary:"Input buffer is modified"},{id:"truncated-strings",page:140,label:"Some strings are truncated",summary:"Some strings are truncated"}]},{content:`<p>What's the first character of your input?</p>
`,options:[{id:"brace",page:117,label:"An opening brace: <code>{</code>",summary:"The first character is `{`"},{id:"bracket",page:118,label:"An opening bracket: <code>[</code>",summary:"The first character is `[`"},{id:"quote",page:119,label:"A quote: <code>&quot;</code>",summary:'The first character is `"`'},{id:"other",page:147,label:"None of the above",summary:'The first character is neither `{`, nor `[`, nor `"`'}]},{content:`<p><a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> stops reading as soon as the JSON document ends.
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
`,options:[{id:"success",page:162,label:"Yes",summary:"Garbage characters follow the input"},{id:"lint",page:127,label:"No",summary:"No garbage characters follow the input"}]},{content:`<p><a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> stops reading as soon as the JSON document ends.
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
`,options:[{id:"success",page:162,label:"Yes",summary:"Garbage characters follow the input"},{id:"lint",page:127,label:"No",summary:"No garbage characters follow the input"}]},{content:`<p><a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> stops reading as soon as the JSON document ends.
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
`,options:[{id:"success",page:162,label:"Yes",summary:"Garbage characters follow the input"},{id:"lint",page:127,label:"No",summary:"No garbage characters follow the input"}]},{content:`<p>What is the type of the second argument passed to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>?</p>
`,options:[{id:"char-ptr",page:123,label:"<code>char*</code> (or <code>char[]</code>)",summary:"Input type is `char*`"},{id:"const-char-ptr",page:35,label:"<code>const char*</code>",summary:"Input type is `const char*`"},{id:"string",page:35,label:"<code>String</code> (or <code>std::string</code>)",summary:"Input type is `String`"},{id:"stream",page:35,label:"<code>Stream</code> (or <code>std::istream)</code>",summary:"Input type is `Stream`"}]},{content:`<p>The easiest solution is to disable the zero-copy mode by passing a read-only input buffer. Casting the pointer will do the trick:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// replace this:</span>
<span class="hljs-built_in">deserializeJson</span>(doc, input, inputSize);

<span class="hljs-comment">// ...with this:</span>
<span class="hljs-built_in">deserializeJson</span>(doc, (<span class="hljs-type">const</span> <span class="hljs-type">char</span>*)input, inputSize);
</code></pre>
<p>Now that the zero-copy mode is disabled, you probably need a larger <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, so don't forget to update the capacity. As usual, use the <a href="/v6/assistant/">ArduinoJson Assistant</a> to compute the right capacity for your project.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Casting the pointer fixes the issue"},{id:"cast",page:35,label:"No",summary:"Casting the pointer doesn't fix the issue"}]},{content:`<p>The easiest solution is to remove the buffer and pass the input stream directly to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>.</p>
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
`,options:[{id:"success",page:162,label:"Yes",summary:"Passing the stream to `deserializeJson()` fixes the issue"},{id:"cast",page:35,label:"No",summary:"Passing the stream to `deserializeJson()` doesn't fix the issue"}]},{content:`<p>When you pass a writeable buffer as the input of <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>, ArduinoJson uses the zero-copy mode. Instead of copying the strings from the input into the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, it stores pointers to the input buffer.
Therefore, the input buffer must stay alive during the whole lifetime of the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>; otherwise, all the strings in the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> will be dangling pointers.</p>
<p>Does your program fills this buffer from a <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/"><code>Stream</code></a> (like <a href="https://www.arduino.cc/en/Reference/SD"><code>File</code></a>, <a href="https://www.arduino.cc/reference/en/language/functions/communication/serial/"><code>Serial</code></a>, <a href="https://www.arduino.cc/en/Reference/EthernetClient"><code>EthernetClient</code></a>, <a href="https://www.arduino.cc/en/Reference/WiFiClient"><code>WifiClient</code></a>...)?</p>
`,options:[{id:"success",page:122,label:"Yes, the input comes from a stream",summary:"Input comes from a stream"},{id:"cast",page:121,label:"No, it doesn't",summary:"Input doesn't come from a stream"}]},{content:`<p>When you pass a writeable buffer as the input of <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>, ArduinoJson uses the zero-copy mode. Instead of copying the strings from the input into the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, it stores pointers to the input buffer.</p>
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
`,options:[{id:"success",page:162,label:"Yes",summary:"Casting the pointer fixes the issue"},{id:"cast",page:35,label:"No",summary:"Casting the pointer doesn't fix the issue"}]},{content:`<p>ArduinoJson isn't very picky about the input: its implementation favors code size and speed over strict conformance.
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
`,options:[{id:"acceptable",page:162,label:"Yes",summary:"`deserializeJson()` tolerates the error, and that's OK"},{id:"unacceptable",page:147,label:"No",summary:"`deserializeJson()` should not let this error pass"}]},{content:`<p>So, <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> returns <code>Ok</code>, and jsonlint confirms that the input is valid.</p>
<p>I don't see any issue here; maybe you should <a href="/v6/troubleshooter/">start over</a>?</p>
`},{content:`<p>Let's make sure that your input is actually invalid.</p>
<p>Please go to <a href="https://jsonlint.com/">jsonlint.com</a>, paste your input, and press &quot;Validate JSON.&quot;</p>
<p>What does it say?</p>
`,options:[{id:"valid",page:126,label:"Document is valid",summary:"jsonlint says the document is valid"},{id:"invalid",page:125,label:"Document is invalid",summary:"jsonlint says the document is invalid"}]},{content:`<p>Do you use a filter (with <code>DeserializationOption::Filter</code>)?</p>
`,options:[{id:"filter",page:131,label:"Yes",summary:"Program uses `DeserializationOption::Filter`"},{id:"no-filter",page:135,label:"No",summary:"Program doesn't use `DeserializationOption::Filter`"}]},{content:`<p>When a program fails to extract the values from a <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, it's often because there is a confusion between arrays and objects.</p>
<p>For example, a common mistake is to write:</p>
<pre><code class="hljs language-c++"><span class="hljs-type">const</span> <span class="hljs-type">char</span>* temperature = doc[<span class="hljs-string">&quot;list&quot;</span>][<span class="hljs-string">&quot;main&quot;</span>][<span class="hljs-string">&quot;temp&quot;</span>];
</code></pre>
<p>instead of</p>
<pre><code class="hljs language-c++"><span class="hljs-type">const</span> <span class="hljs-type">char</span>* temperature = doc[<span class="hljs-string">&quot;list&quot;</span>][<span class="hljs-number">0</span>][<span class="hljs-string">&quot;main&quot;</span>][<span class="hljs-string">&quot;temp&quot;</span>];
</code></pre>
<p>You can find other examples in <a href="/v6/issues/cannot-get-values/">deserializeJson() succeeds but I cannot read any value</a>, but the simplest solution is to use the <a href="/v6/assistant/">ArduinoJson Assistant</a> because the last step shows how to extract the values.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Issue is a confusion between array and object"},{id:"array-object",page:35,label:"No",summary:"Issue is not a confusion between array and object"}]},{content:`<p>Maybe the filter excludes the part that it should keep. Let's verify that it's doing its job correctly.</p>
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
`,options:[{id:"success",page:162,label:"Yes",summary:"Fixing the filter solves the issue"},{id:"filter-ok",page:135,label:"No",summary:"Fixing the filter doesn't solve the issue"}]},{content:`<p>Please print the filter to the serial port like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-built_in">serializeJsonPretty</span>(filter, Serial);
</code></pre>
<p>Does the filter look as you expected?</p>
`,options:[{id:"size-ok",page:130,label:"Yes",summary:"The filter looks correct"},{id:"too-small",page:132,label:"No, some values are missing",summary:"The filter lacks some values"}]},{content:`<p>The filter's <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> is too small; please increase its capacity and try again.</p>
<p>If you want, you can use the <a href="/v6/assistant/">ArduinoJson Assistant</a> to compute the required capacity.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Increasing the filter's capacity fixes the issue"},{id:"size-increased",page:130,label:"No",summary:"Increasing the filter's capacity doesn't fix the issue"}]},{content:`<p>Which function do you call to deserialize the input?</p>
`,options:[{id:"json",page:35,label:"<code>deserializeJson()</code>",summary:"Program calls `deserializeJson()`"},{id:"msgpack",page:134,label:"<code>deserializeMsgPack()</code>",summary:"Program calls `deserializeMsgPack()`"}]},{content:`<p>It seems that your program fed <a href="/v6/api/msgpack/deserializemsgpack/"><code>deserializeMsgPack()</code></a> with garbage input.</p>
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
`,options:[{id:"success",page:162,label:"Yes",summary:"The input was incorrect"},{id:"not-garbage",page:35,label:"No",summary:"The input is correct"}]},{content:`<p>Please print the content of the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> to the serial port like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-built_in">serializeJson</span>(doc, Serial);
Serial.<span class="hljs-built_in">println</span>(); <span class="hljs-comment">// adds a line break (optional)</span>
</code></pre>
<p>What's the first character?</p>
`,options:[{id:"quote",page:138,label:"A quote (<code>&quot;</code>)",summary:"Serialized document starts with a quote"},{id:"bracket",page:129,label:"A square bracket (<code>[</code>)",summary:"Serialized document starts with a square bracket"},{id:"brace",page:129,label:"A curly brace (<code>{</code>)",summary:"Serialized document starts with a curly brace"},{id:"not-in-list",page:133,label:"None of the above",summary:"Serialized document starts with neither a quote, a bracket, nor a brace."}]},{content:`<p>If you cannot fix the server, you can at least reverse the double serialization (stringification) to get back the original object.</p>
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
`,options:[{id:"success",page:162,label:"Yes",summary:"Calling `deserializeJson()` twice fixes the issue"},{id:"call-twice",page:35,label:"No",summary:"Calling `deserializeJson()` twice doesn't fix the issue"}]},{content:`<p>In the server implementation, please look at the view that returns the faulty JSON.
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
`,options:[{id:"success",page:162,label:"Yes",summary:"Fixing the server fixes the issue"},{id:"server-ok",page:136,label:"No",summary:"Fixing the server doesn't fix the issue"}]},{content:`<p>If you see a double-quote at the beginning of the JSON input, it means that the whole document is neither an object or an array; it's a string. This happens when the input was incorrectly generated, by serializing (stringifying) to JSON twice.</p>
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
`,options:[{id:"server-fixable",page:137,label:"Yes",summary:"User can modify the server"},{id:"server-unfixable",page:136,label:"No",summary:"User cannot modify the server"}]},{content:`<p>Indeed, <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> can be pretty slow with unbuffered implementations of <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/"><code>Stream</code></a> (such as <code>File</code> and <code>WiFiClient</code>) because it reads characters one by one.</p>
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
`,options:[{id:"success",page:162,label:"Yes",summary:"`ReadBufferingStream` solves the issue"},{id:"buffered",page:35,label:"No",summary:"`ReadBufferingStream` doesn't solve the issue"}]},{content:`<p>Does the JSON input contain the Unicode character <code>\\u0000</code>?</p>
`,options:[{id:"nul",page:163,label:"Yes",summary:"The input contains `\\u0000`"},{id:"no-nul",page:146,label:"No",summary:"The input doesn't contain `\\u0000`"}]},{content:`<p>When you call <code>HTTPClient::getStream()</code>, you bypass the part that handles <a href="https://en.wikipedia.org/wiki/Chunked_transfer_encoding">Chunked Transfer Encoding</a>.
As a result, the response's body may be split in multiple chunks, making some strings look like they are truncated (in reality, they contain a line-break).</p>
<p>The most straightforward workaround is to downgrade the connection to HTTP 1.0.
To do this, add the following line <strong>before</strong> sending the request:</p>
<pre><code class="hljs language-c++">http.<span class="hljs-built_in">useHTTP10</span>(<span class="hljs-literal">true</span>);  <span class="hljs-comment">// avoid Chunked Transfer Encoding</span>
</code></pre>
<p>Did this solve your problem?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Calling `HTTPClient::useHTTP10(true)` solves the issue"},{id:"http10",page:35,label:"No",summary:"Calling `HTTPClient::useHTTP10(true)` doesn't solve the issue"}]},{content:`<p>Which function of <code>HTTPClient</code> do you call to get the response?</p>
`,options:[{id:"getstream",page:141,label:"<code>getStream()</code>",summary:"Response comes from `HTTPClient::getStream()`"},{id:"getstring",page:35,label:"<code>getString()</code>",summary:"Response comes from `HTTPClient::getString()`"}]},{content:`<p>When you use HTTP 1.1, the server can send the response with <a href="https://en.wikipedia.org/wiki/Chunked_transfer_encoding">Chunked Transfer Encoding</a>.
As a result, the response's body may be split in multiple chunks, making some strings look like they are truncated (in reality, they contain a line-break).</p>
<p>The most straightforward workaround is to downgrade the connection to HTTP 1.0.
To do this, replace <code>HTTP/1.1</code> with <code>HTTP/1.0</code> in the first line of the request.</p>
<p>Did this solve your problem?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Using `HTTP/1.0` solves the issue"},{id:"http10",page:35,label:"No",summary:"Using `HTTP/1.0` doesn't solve the issue"}]},{content:`<p>Unfortunately, I only know how to use the following HTTP libraries:</p>
<ul>
<li><a href="https://github.com/esp8266/Arduino/tree/master/libraries/ESP8266HTTPClient">ESP8266HTTPClient</a></li>
<li><a href="https://github.com/espressif/arduino-esp32/tree/master/libraries/HTTPClient">HTTPClient for ESP32</a></li>
</ul>
`,tags:["needs_assistance"]},{content:`<p>Do you use an HTTP library?</p>
`,options:[{id:"httpclient",page:142,label:"Yes, I'm using <code>HTTPClient</code>",summary:"Program uses `HTTPClient`"},{id:"http-library",page:144,label:"Yes, but it's not <code>HTTPClient</code>",summary:"Program uses an unknown HTTP library"},{id:"no-library",page:143,label:"No",summary:"Program doesn't use an HTTP library"}]},{content:`<p>Does the JSON input come from an HTTP response?</p>
`,options:[{id:"http",page:145,label:"Yes",summary:"The input comes from an HTTP response"},{id:"no-nul",page:35,label:"No",summary:"The input doesn't come from an HTTP response"}]},{content:`<p><a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> accepted a JSON document that was clearly invalid.<br>
You need to talk to a human about that.</p>
`,tags:["needs_assistance"]},{content:`<p><a href="/v6/api/misc/deserializationerror/#nomemory"><code>NoMemory</code></a> means that the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> is too small to hold the entire document.</p>
<p>Please use the <a href="/v6/assistant/">ArduinoJson Assistant</a> to compute the right capacity for your document.
Use the recommended capacity when creating <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> and retry.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Increasing the capacity of the `JsonDocument` fixes the issue"},{id:"increased-capacity",page:155,label:"No",summary:"Increasing the capacity of the `JsonDocument` doesn't fix the issue"}]},{content:`<p>I'm pretty confident the Assistant computes the right capacity; however, some settings can affect the result:</p>
<ol>
<li><em>Input type</em>, in step 1, should match the type of the argument passed to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a></li>
<li><em>Deduplicate values when measuring the capacity</em>, in step 3, should be unchecked, most likely.</li>
<li><em>Deduplicate keys when measuring the capacity</em>, in step 3, it should be unchecked if the keys are dynamic or if you used placeholders.</li>
</ol>
<p>Please verify that these settings are correct.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Changing the Assistant settings solves the issue"},{id:"failure",page:35,label:"No",summary:"Changing the Assistant settings doesn't solve the issue"}]},{content:`<p><code>doc.capacity()</code> returns <code>0</code>, which means <code>allocate()</code> returned <code>NULL</code>.</p>
<p>I think that, because <code>doc</code> is declared global, <code>allocate()</code> is called too early and the heap isn't ready.
I know this happens on ESP32 with the <code>SpiRamJsonDocument</code> shown in <a href="/v6/how-to/use-external-ram-on-esp32/">How to use external RAM on ESP32?</a>.</p>
<p>Please try to make <code>doc</code> a local variable.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Making `doc` local fixes the issue."},{id:"failure",page:35,label:"No",summary:"Making `doc` local doesn't fix the issue."}]},{content:`<p>Is <code>doc</code> a global variable?</p>
`,options:[{id:"global",page:150,label:"Yes",summary:"`doc` is a global variable"},{id:"local",page:149,label:"No",summary:"`doc` is not a global variable"}]},{content:`<p>Let's verify that the memory allocation succeeded.</p>
<p>Please print the capacity of the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> to the serial port, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(doc.<span class="hljs-built_in">capacity</span>());
</code></pre>
<p>What value does it show?</p>
`,options:[{id:"capacity-0",page:151,label:"<code>0</code>",summary:"`doc.capacity()` returns `0`"},{id:"capacity-ok",page:149,label:"The value passed to the constructor of <code>DynamicJsonDocument</code>",summary:"`doc.capacity()` returns the right value"}]},{content:`<p>Well, that's very bad news. It seems that your microcontroller doesn't have enough RAM to hold the JSON document.</p>
<p>Please read <a href="/v6/how-to/reduce-memory-usage/">How to reduce memory usage</a>.
It shows several techniques you can use to use less RAM.
Hopefully, you'll make enough room for the memory pool.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Reducing memory usage fixes the issue"},{id:"failure",page:35,label:"No",summary:"Reducing memory usage doesn't fix the issue"}]},{content:`<p>It's possible that the <a href="/v6/api/dynamicjsondocument/"><code>DynamicJsonDocument</code></a> failed to allocate the memory pool.</p>
<p>Please print the capacity of the <a href="/v6/api/dynamicjsondocument/"><code>DynamicJsonDocument</code></a> to the serial port, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(doc.<span class="hljs-built_in">capacity</span>());
</code></pre>
<p>What value does it show?</p>
`,options:[{id:"capacity-0",page:153,label:"<code>0</code>",summary:"`doc.capacity()` returns `0`"},{id:"capacity-ok",page:149,label:"The value passed to the constructor of <code>DynamicJsonDocument</code>",summary:"`doc.capacity()` returns the right value"}]},{content:`<p>What kind of <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> are you using?</p>
`,options:[{id:"basic",page:152,label:"<code>BasicJsonDocument&lt;T&gt;</code>",summary:"The document is a `BasicJsonDocument<T>`"},{id:"dynamicjsondocument",page:154,label:"<code>DynamicJsonDocument</code>",summary:"The `JsonDocument` is a `DynamicJsonDocument`"},{id:"staticjsondocument",page:149,label:"<code>StaticJsonDocument</code>",summary:"The `JsonDocument` is a `StaticJsonDocument`"}]},{content:`<p><a href="/v6/api/misc/deserializationerror/#notsupported"><code>NotSupported</code></a> means that the document was valid but contained features not supported by the library.</p>
<p>This error code was removed in <a href="/news/2021/05/04/version-6-18-0/">ArduinoJson 6.18</a>, so you should not see it anymore.</p>
<p>Can you upgrade the library?</p>
`,options:[{id:"can-uprade",page:160,label:"Yes",summary:"Library can be upgraded"},{id:"cannot-upgrade",page:158,label:"No",summary:"Library cannot be upgraded"}]},{content:`<p>So, I guess that you're not using <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> but <a href="/v6/api/msgpack/deserializemsgpack/"><code>deserializeMsgPack()</code></a>, right?</p>
<p>Indeed, before <a href="/news/2021/05/04/version-6-18-0/">ArduinoJson 6.18</a>, <a href="/v6/api/msgpack/deserializemsgpack/"><code>deserializeMsgPack()</code></a> returned <a href="/v6/api/misc/deserializationerror/#notsupported"><code>NotSupported</code></a> as soon as the input contains an unsupported MsgPack value type:</p>
<ul>
<li>a binary value</li>
<li>an extension value</li>
<li>an object key that is not a string</li>
</ul>
<p>If that's your case, then you must upgrade the library. Instead of returning an error, newer versions simply ignore the unsupported values and replace them with nulls.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Upgrading solve the issue"},{id:"upgraded",page:35,label:"No",summary:"Upgrading doesn't solve the issue"}]},{content:`<p><a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> returns <a href="/v6/api/misc/deserializationerror/#notsupported"><code>NotSupported</code></a> when is read an UTF-16 escape sequence but support is disabled.</p>
<p>To fix this issue, you must enable support UTF-16 escape sequences by defining <a href="/v6/api/config/decode_unicode/"><code>ARDUINOJSON_DECODE_UNICODE</code></a> to <code>1</code> before including <code>ArduinoJson.h</code>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-meta">#<span class="hljs-keyword">define</span> ARDUINOJSON_DECODE_UNICODE 1</span>
<span class="hljs-meta">#<span class="hljs-keyword">include</span> <span class="hljs-string">&lt;ArduinoJson.h&gt;</span></span>
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Defining `ARDUINOJSON_DECODE_UNICODE` solves the issue"},{id:"decode-unicode-set",page:157,label:"No",summary:"Defining `ARDUINOJSON_DECODE_UNICODE` doesn't solve the issue"}]},{content:`<p>If you're still seeing <code>NotSupported</code> after upgrading the library, it means that your code is not using the upgraded library.</p>
<p>Several versions of ArduinoJson are installed on your machine; you must either:</p>
<ul>
<li>removed the duplicates</li>
<li>upgrade the duplicates</li>
<li>make sure your project uses the right one</li>
</ul>
<p>To find the duplicates, run a disk search for a file named <code>ArduinoJson.h</code>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Removing duplicates fixes the issue"},{id:"duplicates-removed",page:158,label:"No",summary:"Removing duplicates doesn't fix the issue"}]},{content:`<p>Please upgrade ArduinoJson to the latest version.<br>
You may need to consult the <a href="https://github.com/bblanchon/ArduinoJson/blob/6.x/CHANGELOG.md">change log</a> to make sure there aren't any breaking changes that could break your existing code.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Upgrading solves the issue"},{id:"updraded",page:159,label:"No",summary:"Upgrading doesn't solves the issue"}]},{content:`<p><a href="/v6/api/misc/deserializationerror/#toodeep"><code>TooDeep</code></a> means that the input document has too many levels of nesting.</p>
<p><a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> is implemented with a recursive function: it's fast, small, and efficient, but it can cause a stack-overflow if the input document has too many levels. To protect your program against malicious input that could trigger a stack-overflow on purpose, ArduinoJson sets a limit on how many levels it accepts.</p>
<p>The default nesting limit is configured by <a href="/v6/api/config/default_nesting_limit/"><code>ARDUINOJSON_DEFAULT_NESTING_LIMIT</code></a>, which is set to <code>10</code> by default. To increase the limit, you can change this setting, or you can pass an extra argument to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-built_in">deserializeJson</span>(doc, input, DeserializationOption::<span class="hljs-built_in">NestingLimit</span>(<span class="hljs-number">20</span>));
</code></pre>
<p>The <a href="/v6/assistant/">ArduinoJson Assistant</a> shows an alert when your input overpasses the default limit and includes the appropriate <code>DeserializationOption::NestingLimit</code> in the sample program.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Increasing the limit fixes the issue"},{id:"limit-increased",page:35,label:"No",summary:"Increasing the limit doesn't fix the issue"}]},{content:`<p class="display-4">🙋🏻‍♂️</p>
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
`,options:[{id:"success",page:162,label:"Yes",summary:"Using `JsonString` solves the issue"},{id:"failure",page:35,label:"No",summary:"Using `JsonString` doesn't solves the issue"}]},{content:`<p>Does your issue concern serialization or deserialization?</p>
`,options:[{id:"serialization",page:165,label:"Serialization",summary:"The issue concerns serialization"},{id:"deserialization",page:36,label:"Deserialization",summary:"The issue concerns deserialization"}]},{content:`<p>What's the problem?</p>
`,options:[{id:"crash",page:166,label:"The program crashes",summary:"Program crashes"},{id:"empty",page:176,label:"The output is empty (e.g. <code>{}</code>, <code>[]</code>, or <code>null</code>)",summary:"Output is empty"},{id:"incomplete",page:205,label:"The output is incomplete",summary:"Output is incomplete"},{id:"garbage",page:188,label:"The output contains garbage",summary:"Output contains garbage"},{id:"empty-strings",page:182,label:"The output contains empty strings",summary:"Output contains empty strings"},{id:"null",page:205,label:"The output contains <code>null</code>",summary:"Output contains null"},{id:"float",page:185,label:"Floating-point values contain too many decimal digits",summary:"Floating-point values contain too many decimal digits"},{id:"slow",page:213,label:"It's slow",summary:"Serialization is slow"}]},{content:`<p>Do you use <a href="/v6/api/dynamicjsondocument/"><code>DynamicJsonDocument</code></a> or <a href="/v6/api/staticjsondocument/"><code>StaticJsonDocument</code></a>?</p>
`,options:[{id:"dynamicjsondocument",page:174,label:"<code>DynamicJsonDocument</code>",summary:"Program uses `DynamicJsonDocument`"},{id:"staticjsondocument",page:175,label:"<code>StaticJsonDocument</code>",summary:"Program uses `StaticJsonDocument`"}]},{content:`<p>Please replace all those string pointers with literals.</p>
<p>For example, replace:</p>
<pre><code class="hljs language-c++">doc[<span class="hljs-string">&quot;name&quot;</span>] = name;
</code></pre>
<p>with:</p>
<pre><code class="hljs language-c++">doc[<span class="hljs-string">&quot;name&quot;</span>] = <span class="hljs-string">&quot;name&quot;</span>;
</code></pre>
<p>Does your program still crash?</p>
`,options:[{id:"crash-with-literals",page:170,label:"Yes",summary:"Replacing string pointers with literals doesn't fix the crash"},{id:"no-crash-with-literals",page:168,label:"No",summary:"Replacing string pointers with literals fixes the crash"}]},{content:`<p>One of these string pointers is probably dangling or points to a non-zero-terminated string.</p>
<p>Please print them all to the serial port to find the faulty pointer.</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">print</span>(name);
doc[<span class="hljs-string">&quot;name&quot;</span>] = <span class="hljs-string">&quot;name&quot;</span>;
</code></pre>
<p>Can you locate the faulty string in the output?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Printing the string reveals the faulty pointer"},{id:"no-faulty-pointer",page:35,label:"No",summary:"Printing the string doesn't show any faulty pointer"}]},{content:`<p>Does your program insert string pointers in the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>?<br>
(for example, <code>doc[&quot;name&quot;] = name</code> where <code>name</code> is a <code>const char*</code>)</p>
`,options:[{id:"charptr",page:167,label:"Yes",summary:"Program inserts string pointers into the `JsonDocument`"},{id:"no-charptr",page:170,label:"No",summary:"Program doesn't insert string pointers into the `JsonDocument`"}]},{content:`<p>What is the type of the second argument passed to <a href="/v6/api/json/serializejson/"><code>serializeJson()</code></a>?</p>
`,options:[{id:"char-array",page:171,label:"<code>char[]</code>",summary:"Output type is `char[]`"},{id:"char-ptr",page:172,label:"<code>char*</code>",summary:"Output type is `char*`"},{id:"arduino-string",page:35,label:"<code>String</code>",summary:"Output type is `String`"},{id:"arduino-stream",page:35,label:"<code>Stream</code>",summary:"Output type is `Stream`"}]},{content:`<p>I think this output buffer could cause a <a href="https://en.wikipedia.org/wiki/Stack_buffer_overflow">stack overflow</a>.</p>
<p>Please try with a <a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a> instead of a <code>char[]</code>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Switching to `String` solves the issue"},{id:"failure",page:35,label:"No",summary:"Switching to `String` doesn't solve the issue"}]},{content:`<p>I think the output pointer is dangling.</p>
<p>Please try to use a <code>char[]</code> instead:</p>
<pre><code class="hljs language-c++"><span class="hljs-type">char</span> output[<span class="hljs-number">128</span>];
<span class="hljs-built_in">serializeJson</span>(doc, output);
</code></pre>
<p>Does your program still crash?</p>
`,options:[{id:"crash-with-char-array",page:35,label:"Yes",summary:"Replacing the output pointer with an array doesn't fix the crash"},{id:"no-crash-with-char-array",page:162,label:"No",summary:"Replacing the output pointer with an array fixes the crash"}]},{content:`<p>When you use <code>PROGMEM</code> with ArduinoJson (and any other Arduino code, really), you must make sure that the addresses in Flash memory aren't interpreted as addresses in RAM.</p>
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
`,options:[{id:"success",page:162,label:"Yes",summary:"Casting the pointer solves the issue"},{id:"failure",page:35,label:"No",summary:"Casting the pointer doesn't solve the issue"}]},{content:`<p>Do you use <code>PROGMEM</code> (Flash memory) in your program?</p>
`,options:[{id:"progmem",page:173,label:"Yes",summary:"Program uses `PROGMEM`"},{id:"no-progmem",page:169,label:"No",summary:"Program doesn't use `PROGMEM`"}]},{content:`<p>Because a <a href="/v6/api/staticjsondocument/"><code>StaticJsonDocument</code></a> resides on the stack, it may cause a <a href="https://en.wikipedia.org/wiki/Stack_buffer_overflow">stack-overflow</a>.</p>
<p>Some platforms can detect stack overflows, in which case they raise an exception; others let the program do nothing and let the program crash on its own.
The tricky part with stack overflows is that the program doesn't always crash; it can also expose all kind of weird behavior.</p>
<p>If you have no idea of what I'm talking about, please have a look a &quot;The missing C++ course&quot; in <a href="/book/">Mastering ArduioJson</a>, it explains the roles of the different areas of memory, as well as many other important stuffs.</p>
<p>Please switch to a <a href="/v6/api/dynamicjsondocument/"><code>DynamicJsonDocument</code></a></p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Switching to `DynamicJsonDocument` fixes the issue"},{id:"dynamicjsondocument-tried",page:174,label:"No",summary:"Switching to `DynamicJsonDocument` doesn't fix the issue"}]},{content:`<p>Please print the capacity of the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> to the serial port, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(doc.<span class="hljs-built_in">capacity</span>());
</code></pre>
<p>What value does it show?</p>
`,options:[{id:"capacity-0",page:180,label:"<code>0</code>",summary:"`doc.capacity()` returns `0`"},{id:"capacity-ok",page:181,label:"a positive integer",summary:"`doc.capacity()` looks good"}]},{content:`<p><code>doc.capacity()</code> returns <code>0</code>, which means <code>allocate()</code> returned <code>NULL</code>.</p>
<p>I think that, because <code>doc</code> is declared global, <code>allocate()</code> is called too early and the heap isn't ready.
I know this happens on ESP32 with the <code>SpiRamJsonDocument</code> shown in <a href="/v6/how-to/use-external-ram-on-esp32/">How to use external RAM on ESP32?</a>.</p>
<p>Please try to make <code>doc</code> a local variable.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Making `doc` local fixes the issue."},{id:"failure",page:35,label:"No",summary:"Making `doc` local doesn't fix the issue."}]},{content:`<p>Is <code>doc</code> a global variable?</p>
`,options:[{id:"global",page:177,label:"Yes",summary:"`doc` is a global variable"},{id:"local",page:179,label:"No",summary:"`doc` is not a global variable"}]},{content:`<p>Well, that's very bad news. It seems that your microcontroller doesn't have enough RAM to hold the JSON document.</p>
<p>Please read <a href="/v6/how-to/reduce-memory-usage/">How to reduce memory usage</a>.
It shows several techniques you can use to use less RAM.
Hopefully, you'll make enough room for the memory pool.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Reducing memory usage fixes the issue"},{id:"failure",page:35,label:"No",summary:"Reducing memory usage doesn't fix the issue"}]},{content:`<p>What kind of <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> do you use?</p>
`,options:[{id:"basic",page:178,label:"<code>BasicJsonDocument&lt;T&gt;</code>",summary:"The document is a `BasicJsonDocument<T>`"},{id:"dynamic",page:179,label:"<code>DynamicJsonDocument</code>",summary:"The document is a `DynamicJsonDocument`"},{id:"static",page:35,label:"<code>StaticJsonDocument</code>",summary:"The document is a `StaticJsonDocument`"}]},{content:`<p>Please print the value of <a href="/v6/api/jsondocument/overflowed/"><code>JsonDocument::overflowed()</code></a>, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(doc.<span class="hljs-built_in">overflowed</span>());
</code></pre>
<p>What value does it print?</p>
`,options:[{id:"overflowed-1",page:212,label:"<code>1</code> (or <code>true</code>)",summary:"`JsonDocument::overflowed()` returns `true`"},{id:"overflowed-0",page:35,label:"<code>0</code> (or <code>false</code>)",summary:"`JsonDocument::overflowed()` returns `false`"}]},{content:`<p>Do you call <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> before calling <a href="/v6/api/json/serializejson/"><code>serializeJson()</code></a>? (with the same <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>)</p>
`,options:[{id:"deserialize-yes",page:184,label:"Yes",summary:"Program calls `deserializeJson()`"},{id:"deserialize-no",page:35,label:"No",summary:"Program doesn't call `deserializeJson()`"}]},{content:`<p>When you pass a writeable buffer as the input of <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>, ArduinoJson uses the <strong>zero-copy mode</strong>. Instead of copying the strings from the input into the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, it stores pointers to the input buffer.
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
`,options:[{id:"success",page:162,label:"Yes",summary:"Casting the pointer fixes the issue"},{id:"casting-fails",page:35,label:"No",summary:"Casting the pointer doesn't fix the issue"}]},{content:`<p>What's the type of the second argument passed to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>?</p>
`,options:[{id:"char-ptr",page:183,label:"<code>char*</code> (or <code>char[]</code>)",summary:"Input type is `char*`"},{id:"const-char-ptr",page:35,label:"<code>const char*</code>",summary:"Input type is `const char*`"},{id:"string",page:35,label:"<code>String</code> (or <code>std::string</code>)",summary:"Input type is `String`"},{id:"stream",page:35,label:"<code>Stream</code> (or <code>std::istream)</code>",summary:"Input type is `Stream`"}]},{content:`<p>Supposing that the JSON output looks like this:</p>
<pre><code class="hljs language-json"><span class="hljs-punctuation">{</span><span class="hljs-attr">&quot;value&quot;</span><span class="hljs-punctuation">:</span><span class="hljs-number">23.79999924</span><span class="hljs-punctuation">}</span>
</code></pre>
<p>I'm assuming you expect it to look like that:</p>
<pre><code class="hljs language-json"><span class="hljs-punctuation">{</span><span class="hljs-attr">&quot;value&quot;</span><span class="hljs-punctuation">:</span><span class="hljs-number">24.8</span><span class="hljs-punctuation">}</span>
</code></pre>
<p>Please change the type of the variable from <code>float</code> to <code>double</code> and try again.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Replacing `float` with `double` fixes the issue"},{id:"double",page:187,label:"No",summary:"Replacing `float` with `double` doesn't fix the issue"}]},{content:`<p>I'm surprised that the previous solution didn't work.</p>
<p>We can try to change ArduinoJson's storage type to see if it solves your issue.</p>
<p>Please define <a href="/v6/api/config/use_double/">ARDUINOJSON_USE_DOUBLE</a> to <code>0</code> before including <code>ArduinoJson.h</code>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-meta">#<span class="hljs-keyword">define</span> ARDUINOJSON_USE_DOUBLE 0</span>
<span class="hljs-meta">#<span class="hljs-keyword">include</span> <span class="hljs-string">&lt;ArduinoJson.h&gt;</span></span>
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Defining `ARDUINOJSON_USE_DOUBLE` to `0` fixes the issue"},{id:"failure",page:35,label:"No",summary:"Defining `ARDUINOJSON_USE_DOUBLE` to `0` doesn't fix the issue"}]},{content:`<p>Please add the following function somewhere in your program:</p>
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
`,options:[{id:"success",page:162,label:"Yes",summary:"Rounding the value fixes the issue"},{id:"double",page:186,label:"No",summary:"Rounding the value doesn't fix the issue"}]},{content:`<p>What function produces the garbage?</p>
`,options:[{id:"json",page:195,label:"<code>serializeJson()</code> (or <code>serializeJsonPretty()</code>)",summary:"`serializeJson()` produces garbage"},{id:"msg",page:200,label:"<code>serializeMsgPack()</code>",summary:"`serializeMsgPack()` produces garbage"}]},{content:`<p>When you pass a writeable buffer as the input of <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>, ArduinoJson uses the <strong>zero-copy mode</strong>. Instead of copying the strings from the input into the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, it stores pointers to the input buffer.
Therefore, the input buffer must stay alive during the whole lifetime of the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>; otherwise, all the strings in the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> will be dangling pointers.</p>
<p>The easiest solution is to disable the zero-copy mode by passing a read-only input buffer. Casting the pointer will do the trick:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// replace this:</span>
<span class="hljs-built_in">deserializeJson</span>(doc, input, inputSize);

<span class="hljs-comment">// ...with this:</span>
<span class="hljs-built_in">deserializeJson</span>(doc, (<span class="hljs-type">const</span> <span class="hljs-type">char</span>*)input, inputSize);
</code></pre>
<p>Now that the zero-copy mode is disabled, you probably need a larger <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, so don't forget to update the capacity. As usual, use the <a href="/v6/assistant/">ArduinoJson Assistant</a> to compute the right capacity for your project.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Casting the pointer fixes the issue"},{id:"casting-fails",page:204,label:"No",summary:"Casting the pointer doesn't fix the issue"}]},{content:`<p>What's the type of the second argument passed to <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a>?</p>
`,options:[{id:"char-ptr",page:189,label:"<code>char*</code> (or <code>char[]</code>)",summary:"Input type is `char*`"},{id:"const-char-ptr",page:204,label:"<code>const char*</code>",summary:"Input type is `const char*`"},{id:"string",page:204,label:"<code>String</code> (or <code>std::string</code>)",summary:"Input type is `String`"},{id:"stream",page:204,label:"<code>Stream</code> (or <code>std::istream)</code>",summary:"Input type is `Stream`"}]},{content:`<p>You can insert <a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a> objects in a <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, but make sure you don't store the result of <a href="https://www.arduino.cc/reference/en/language/variables/data-types/string/functions/c_str/"><code>String::c_str()</code></a>.</p>
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
`,options:[{id:"success",page:162,label:"Yes",summary:"Removing `.c_str()` fixes the issue"},{id:"failure",page:35,label:"No",summary:"Removing `.c_str()` doesn't fix the issue"}]},{content:`<p>Do you use <a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a> in your program?</p>
`,options:[{id:"string",page:191,label:"Yes",summary:"Program uses `String`"},{id:"no-string",page:35,label:"No",summary:"Program doesn't use `String`"}]},{content:`<p><a href="/v6/api/staticjsondocument/"><code>StaticJsonDocument</code></a> stores its memory pool in the stack.
A large memory pool can overflow the stack a produce all kinds of strange behavior.
In particural, a <a href="https://en.wikipedia.org/wiki/Stack_buffer_overflow">stack overflow</a> can cause garbage in <a href="/v6/api/json/serializejson/"><code>serializeJson()</code></a>'s output.</p>
<p>Please switch to a <a href="/v6/api/dynamicjsondocument/"><code>DynamicJsonDocument</code></a>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Switching to `DynamicJsonDocument` fixes the issue"},{id:"dynamic",page:192,label:"No",summary:"Switching to `DynamicJsonDocument` doesn't fix the issue"}]},{content:`<p>Which kind of <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> do you use?</p>
`,options:[{id:"dynamic",page:192,label:"<code>DynamicJsonDocument</code>",summary:"Program uses `DynamicJsonDocument`"},{id:"static",page:193,label:"<code>StaticJsonDocument</code>",summary:"Program uses `StaticJsonDocument`"}]},{content:`<p>Do you call <a href="/v6/api/json/deserializejson/"><code>deserializeJson()</code></a> before calling <a href="/v6/api/json/serializejson/"><code>serializeJson()</code></a>? (with the same <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>)</p>
`,options:[{id:"deserialize-yes",page:190,label:"Yes",summary:"Program calls `deserializeJson()`"},{id:"deserialize-no",page:204,label:"No",summary:"Program doesn't call `deserializeJson()`"}]},{content:`<p><a href="/v6/api/jsonarray/"><code>JsonArray</code></a> doesn't contain any data: it is a reference to an object stored in the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>. It becomes invalid as soon as the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> is destroyed; this could explain the garbage you see in the output.</p>
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
`,options:[{id:"success",page:162,label:"Yes",summary:"Extending the lifetime of the `JsonDocument` solves the issue"},{id:"not-destroyed",page:203,label:"No",summary:"Extending the lifetime of the `JsonDocument` doesn't solve the issue"}]},{content:`<p><a href="/v6/api/jsonobject/"><code>JsonObject</code></a> doesn't contain any data: it is a reference to an object stored in the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>. It becomes invalid as soon as the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> is destroyed; this could explain the garbage you see in the output.</p>
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
`,options:[{id:"success",page:162,label:"Yes",summary:"Extending the lifetime of the `JsonDocument` solves the issue"},{id:"not-destroyed",page:203,label:"No",summary:"Extending the lifetime of the `JsonDocument` doesn't solve the issue"}]},{content:`<p><a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a> doesn't contain any data: it is a reference to an object stored in the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>. It becomes invalid as soon as the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> is destroyed; this could explain the garbage you see in the output.</p>
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
`,options:[{id:"success",page:162,label:"Yes",summary:"Extending the lifetime of the `JsonDocument` solves the issue"},{id:"not-destroyed",page:203,label:"No",summary:"Extending the lifetime of the `JsonDocument` doesn't solve the issue"}]},{content:`<p><a href="/v6/api/msgpack/serializemsgpack/"><code>serializeMsgPack()</code></a> share a lot of code with <a href="/v6/api/json/serializejson/"><code>serializeJson()</code></a>. There is no reason you should produce garbage with one and not the other. You may have found a bug.</p>
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
`,options:[{id:"json",page:195,label:"Yes, <code>serializeJson()</code> produces garbage too",summary:"`serializeJson()` produces garbage too"},{id:"deserialize-no",page:199,label:"No, <code>serializeJson()</code> doesn't produces garbage",summary:"`serializeJson()` doesn't produces garbage"}]},{content:`<p><a href="/v6/api/jsondocument/garbagecollect/"><code>JsonDocument::garbageCollect()</code></a> invalidates all previously acquired <a href="/v6/api/jsonarray/"><code>JsonArray</code></a>, <a href="/v6/api/jsonobject/"><code>JsonObject</code></a>, and <a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a>.</p>
<p>After you call it, make sure to reassign  every references, like so:</p>
<pre><code class="hljs language-c++">JsonObject cfg = doc.<span class="hljs-built_in">createNestedObject</span>(<span class="hljs-string">&quot;config&quot;</span>);
<span class="hljs-comment">// ...</span>
doc.<span class="hljs-built_in">garbageCollect</span>();
cfg = doc[<span class="hljs-string">&quot;config&quot;</span>];
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Reassigning references fixes the issue"},{id:"reassigned",page:194,label:"No",summary:"Reassigning references doesn't fix the issue"}]},{content:`<p><a href="/v6/api/basicjsondocument/shrinktofit/"><code>JsonDocument::shrinkToFit()</code></a> invalidates all previously acquired <a href="/v6/api/jsonarray/"><code>JsonArray</code></a>, <a href="/v6/api/jsonobject/"><code>JsonObject</code></a>, and <a href="/v6/api/jsonvariant/"><code>JsonVariant</code></a>.</p>
<p>After you call it, make sure to reassign  every references, like so:</p>
<pre><code class="hljs language-c++">JsonObject cfg = doc.<span class="hljs-built_in">createNestedObject</span>(<span class="hljs-string">&quot;config&quot;</span>);
<span class="hljs-comment">// ...</span>
doc.<span class="hljs-built_in">shrinkToFit</span>();
cfg = doc[<span class="hljs-string">&quot;config&quot;</span>];
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Reassigning references fixes the issue"},{id:"reassigned",page:194,label:"No",summary:"Reassigning references doesn't fix the issue"}]},{content:`<p>Do you use one of the following function?</p>
`,options:[{id:"garbagecollect",page:201,label:"<code>JsonDocument::garbageCollect()</code>",summary:"Program calls `JsonDocument::garbageCollect()`"},{id:"shrinktofit",page:202,label:"<code>JsonDocument::shrinkToFit()</code>",summary:"Program calls `JsonDocument::shrinkToFit()`"},{id:"none",page:194,label:"No",summary:"Program doesn't call an invalidating function"}]},{content:`<p>What is the type of the first argument passed to <a href="/v6/api/json/serializejson/"><code>serializeJson()</code></a>?</p>
`,options:[{id:"document",page:194,label:"<code>JsonDocument</code>",summary:"Program calls `serializeJson(const JsonDocument&, ...)`"},{id:"array",page:196,label:"<code>JsonArray</code> (or <code>JsonArrayConst</code>)",summary:"Program calls `serializeJson(JsonArrayConst, ...)`"},{id:"object",page:197,label:"<code>JsonObject</code> (or <code>JsonObjectConst</code>)",summary:"Program calls `serializeJson(JsonObjectConst, ...)`"},{id:"variant",page:198,label:"<code>JsonVariant</code> (or <code>JsonVariantConst</code>)",summary:"Program calls `serializeJson(JsonVariantConst, ...)`"}]},{content:`<p>Does your program call <a href="/v6/api/json/serializejson/"><code>serializeJson()</code></a> in a loop?</p>
`,options:[{id:"loop",page:209,label:"Yes",summary:"Program calls `serializeJson()` in a loop"},{id:"no-loop",page:210,label:"No",summary:"Program doesn't call `serializeJson()` in a loop"}]},{content:`<p>The ArduinoJson Assistant suggested a too small capacity because you didn't configure it properly.</p>
<p>Here are the things to watch for:</p>
<ol>
<li>the processor type in step 1</li>
<li>the tweaks in step 3, and &quot;Assume keys are const char* in particular</li>
</ol>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Reconfiguring the ArduinoJson Assistant solves the issue"},{id:"still-wrong",page:35,label:"No",summary:"Reconfiguring the ArduinoJson Assistant doesn't solve the issue."}]},{content:`<p>Please replace the call to <a href="/v6/api/jsondocument/clear/"><code>JsonDocument::clear()</code></a> with <a href="/v6/api/jsondocument/garbagecollect/"><code>JsonDocument::garbageCollect()</code></a>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Calling `JsonDocument::garbageCollect()` solves the issue"},{id:"gc",page:210,label:"No",summary:"Calling `JsonDocument::garbageCollect()` doesn't solve the issue"}]},{content:`<p>We can try to clear the content of the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>.</p>
<p>Please call <a href="/v6/api/jsondocument/clear/"><code>JsonDocument::clear()</code></a> at the beginning of the loop.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Calling `JsonDocument::clear()` solves the issue"},{id:"clear",page:210,label:"No",summary:"Calling `JsonDocument::clear()` doesn't solve the issue"},{id:"missing",page:207,label:"Yes, but now some values are missing",summary:"Calling `JsonDocument::clear()` solves the issue but removes other values"}]},{content:`<p>Calling <a href="/v6/api/json/serializejson/"><code>serializeJson()</code></a> is safe, but you'll run into issues if you modify the same <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> in a loop.</p>
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
`,options:[{id:"success",page:162,label:"Yes",summary:"Moving the `JsonDocument` inside the loop solves the issue"},{id:"inside",page:210,label:"No",summary:"Moving the `JsonDocument` inside the loop doesn't solve the issue"},{id:"outside",page:208,label:"I cannot move the declaration inside the loop",summary:"The `JsonDocument` cannot be moved inside the loop"}]},{content:`<p>Please print the value of <a href="/v6/api/jsondocument/overflowed/"><code>JsonDocument::overflowed()</code></a>, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(doc.<span class="hljs-built_in">overflowed</span>());
</code></pre>
<p>What value does it print?</p>
`,options:[{id:"overflowed-1",page:212,label:"<code>1</code> (or <code>true</code>)",summary:"`JsonDocument::overflowed()` returns `true`"},{id:"overflowed-0",page:211,label:"<code>0</code> (or <code>false</code>)",summary:"`JsonDocument::overflowed()` returns `false`"}]},{content:`<p>Does one of the strings in the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a> contains a NUL (i.e.,  ASCII code 0, or <code>\\u0000</code>)?</p>
`,options:[{id:"nul",page:163,label:"Yes",summary:"One or more strings contain a NUL"},{id:"no-nul",page:35,label:"No",summary:"No string contains a NUL"}]},{content:`<p><a href="/v6/api/jsondocument/overflowed/"><code>JsonDocument::overflowed()</code></a> returns <code>true</code> when you try to insert a value in the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>, but there isn't enough room to store it.</p>
<p>The solution is to increase the capacity of the <a href="/v6/api/jsondocument/"><code>JsonDocument</code></a>.<br>
As usual, use the <a href="/v6/assistant/">ArduinoJson Assistant</a> to compute the right capacity for your project.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:162,label:"Yes",summary:"Increasing the capacity of the `JsonDocument` solves the issue."},{id:"assistant-is-wrong",page:206,label:"Yes, but the required capacity is greater than what the ArduinJson Assistant says.",summary:"The required capacity is greater than what the ArduinJson Assistant says."},{id:"capacity-increased",page:35,label:"No",summary:"Increasing the capacity of the `JsonDocument` doesn't solve the issue."}]},{content:`<p><a href="/v6/api/json/serializejson/"><code>serializeJson()</code></a> writes the JSON document mostly one character at a time, which can be pretty slow with unbuffered streams (such as <a href="https://www.arduino.cc/en/Reference/EthernetClient"><code>EthernetClient</code></a>, <a href="https://www.arduino.cc/en/Reference/WiFiClient"><code>WifiClient</code></a>, <a href="https://www.arduino.cc/en/Reference/SD"><code>File</code></a>, and <a href="https://github.com/knolleary/pubsubclient/">PubSubClient</a>).</p>
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
`,options:[{id:"success",page:162,label:"Yes",summary:"Adding `WriteBufferingStream` fixes the issue"},{id:"failure",page:35,label:"No",summary:"Adding `WriteBufferingStream` doesn't fix the issue"}]}];function Yo(e,s,t){var o;const n=Mo[e];return{...n,number:t||1,hash:s||"#",options:(o=n.options)==null?void 0:o.map((a,i)=>({...a,inputId:`option-${e}-${i}`,hash:(s?s+"/":"#")+a.id,missing:!Mo[a.page],selected:!1}))}}function el(e){var t;const s=[Yo(0)];if(e){let n=s[0];for(let o of e.substring(1).split("/")){const a=(t=n.options)==null?void 0:t.find(i=>i.id===o);if(!a){console.error(`Option "${o}" not found`);break}if(a.selected=!0,n.selectedOption=a,n=Yo(a.page,a.hash,n.number+1),!n)break;s.push(n)}}return s}function sl(e){return e.map(s=>s.selectedOption).filter(s=>!!s).map((s,t)=>`${t+1}. ${s.summary}`).join(`
`)}const yl="",tl=e=>new Promise(s=>setTimeout(s,e)),nl={components:{AssistanceModal:Pr,TroubleshooterStep:Qr},data(){return{reportCopied:!1,hash:""}},mounted(){this.hash=location.hash,window.addEventListener("hashchange",()=>this.hash=location.hash)},computed:{needsAssistance(){var s;return!!((s=this.steps[this.steps.length-1].tags)!=null&&s.includes("needs_assistance"))},steps(){return el(this.hash)},report(){return sl(this.steps)}},methods:{choose(e){document.location.assign(e.hash),ga("set","page",document.location.pathname+document.location.hash),ga("send","pageview"),window.plausible("ArduinoJson Troubleshooter",{props:{hash:document.location.hash}})},async copyReport(){await navigator.clipboard.writeText(this.report),this.reportCopied=!0,await tl(2e3),this.reportCopied=!1}}},ol=se("div",null,[se("p",null,"Hi!"),se("p",null,[nt(" I'm the "),se("i",null,"ArduinoJson Troubleshooter"),nt(", and I'm here to help you fix your problem. I'll ask you a series of questions and give you some instructions along the way. ")]),se("p",null,"Ready? Here we go!")],-1),al={key:0},il=se("button",{type:"button",class:"btn btn-primary","data-toggle":"modal","data-target":"#assistance-modal"}," Contact support ",-1),rl=["disabled"];function ll(e,s,t,n,o,a){const i=Ft("TroubleshooterStep"),l=Ft("AssistanceModal");return de(),De("div",null,[ol,(de(!0),De(be,null,to(a.steps,(c,u)=>(de(),et(tn,{key:u,name:"fade",mode:"out-in"},{default:Yn(()=>[(de(),et(i,{key:c.hash,step:c,onChoose:a.choose,active:u==a.steps.length-1},null,8,["step","onChoose","active"]))]),_:2},1024))),128)),a.needsAssistance?(de(),De("div",al,[il,nt(),se("button",{class:fs(["btn",{"btn-outline-primary":!o.reportCopied,"btn-success":o.reportCopied}]),disabled:o.reportCopied,onClick:s[0]||(s[0]=(...c)=>a.copyReport&&a.copyReport(...c))},Es(o.reportCopied?"✓ Report copied":"Copy troubleshooter's report"),11,rl),ce(l,{id:"assistance-modal",report:a.report},null,8,["report"])])):Kt("",!0)])}xr(ot(nl,[["render",ll]])).provide("debug",!1).mount("#troubleshooter-app")})();
