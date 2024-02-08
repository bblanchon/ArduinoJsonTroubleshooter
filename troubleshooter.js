(function(){"use strict";/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function pn(e,s){const n=new Set(e.split(","));return s?t=>n.has(t.toLowerCase()):t=>n.has(t)}const W={},as=[],ye=()=>{},ra=()=>!1,Ds=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),un=e=>e.startsWith("onUpdate:"),ee=Object.assign,dn=(e,s)=>{const n=e.indexOf(s);n>-1&&e.splice(n,1)},la=Object.prototype.hasOwnProperty,E=(e,s)=>la.call(e,s),D=Array.isArray,is=e=>xs(e)==="[object Map]",ut=e=>xs(e)==="[object Set]",q=e=>typeof e=="function",Q=e=>typeof e=="string",rs=e=>typeof e=="symbol",U=e=>e!==null&&typeof e=="object",dt=e=>(U(e)||q(e))&&q(e.then)&&q(e.catch),ht=Object.prototype.toString,xs=e=>ht.call(e),ca=e=>xs(e).slice(8,-1),mt=e=>xs(e)==="[object Object]",hn=e=>Q(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,qs=pn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ns=e=>{const s=Object.create(null);return n=>s[n]||(s[n]=e(n))},pa=/-(\w)/g,ke=Ns(e=>e.replace(pa,(s,n)=>n?n.toUpperCase():"")),ua=/\B([A-Z])/g,ls=Ns(e=>e.replace(ua,"-$1").toLowerCase()),Is=Ns(e=>e.charAt(0).toUpperCase()+e.slice(1)),mn=Ns(e=>e?`on${Is(e)}`:""),$e=(e,s)=>!Object.is(e,s),fn=(e,s)=>{for(let n=0;n<e.length;n++)e[n](s)},Os=(e,s,n)=>{Object.defineProperty(e,s,{configurable:!0,enumerable:!1,value:n})},da=e=>{const s=parseFloat(e);return isNaN(s)?e:s},ha=e=>{const s=Q(e)?Number(e):NaN;return isNaN(s)?e:s};let ft;const gt=()=>ft||(ft=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function gn(e){if(D(e)){const s={};for(let n=0;n<e.length;n++){const t=e[n],o=Q(t)?ba(t):gn(t);if(o)for(const a in o)s[a]=o[a]}return s}else if(Q(e)||U(e))return e}const ma=/;(?![^(]*\))/g,fa=/:([^]+)/,ya=/\/\*[^]*?\*\//g;function ba(e){const s={};return e.replace(ya,"").split(ma).forEach(n=>{if(n){const t=n.split(fa);t.length>1&&(s[t[0].trim()]=t[1].trim())}}),s}function ms(e){let s="";if(Q(e))s=e;else if(D(e))for(let n=0;n<e.length;n++){const t=ms(e[n]);t&&(s+=t+" ")}else if(U(e))for(const n in e)e[n]&&(s+=n+" ");return s.trim()}const ja=pn("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function yt(e){return!!e||e===""}const zs=e=>Q(e)?e:e==null?"":D(e)||U(e)&&(e.toString===ht||!q(e.toString))?JSON.stringify(e,bt,2):String(e),bt=(e,s)=>s&&s.__v_isRef?bt(e,s.value):is(s)?{[`Map(${s.size})`]:[...s.entries()].reduce((n,[t,o],a)=>(n[yn(t,a)+" =>"]=o,n),{})}:ut(s)?{[`Set(${s.size})`]:[...s.values()].map(n=>yn(n))}:rs(s)?yn(s):U(s)&&!D(s)&&!mt(s)?String(s):s,yn=(e,s="")=>{var n;return rs(e)?`Symbol(${(n=e.description)!=null?n:s})`:e};/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Je;class wa{constructor(s=!1){this.detached=s,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Je,!s&&Je&&(this.index=(Je.scopes||(Je.scopes=[])).push(this)-1)}get active(){return this._active}run(s){if(this._active){const n=Je;try{return Je=this,s()}finally{Je=n}}}on(){Je=this}off(){Je=this.parent}stop(s){if(this._active){let n,t;for(n=0,t=this.effects.length;n<t;n++)this.effects[n].stop();for(n=0,t=this.cleanups.length;n<t;n++)this.cleanups[n]();if(this.scopes)for(n=0,t=this.scopes.length;n<t;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!s){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function va(e,s=Je){s&&s.active&&s.effects.push(e)}function Ja(){return Je}let Ge;class bn{constructor(s,n,t,o){this.fn=s,this.trigger=n,this.scheduler=t,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,va(this,o)}get dirty(){if(this._dirtyLevel===1){Re();for(let s=0;s<this._depsLength;s++){const n=this.deps[s];if(n.computed&&(Sa(n.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),Fe()}return this._dirtyLevel>=2}set dirty(s){this._dirtyLevel=s?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let s=Ce,n=Ge;try{return Ce=!0,Ge=this,this._runnings++,jt(this),this.fn()}finally{wt(this),this._runnings--,Ge=n,Ce=s}}stop(){var s;this.active&&(jt(this),wt(this),(s=this.onStop)==null||s.call(this),this.active=!1)}}function Sa(e){return e.value}function jt(e){e._trackId++,e._depsLength=0}function wt(e){if(e.deps&&e.deps.length>e._depsLength){for(let s=e._depsLength;s<e.deps.length;s++)vt(e.deps[s],e);e.deps.length=e._depsLength}}function vt(e,s){const n=e.get(s);n!==void 0&&s._trackId!==n&&(e.delete(s),e.size===0&&e.cleanup())}let Ce=!0,jn=0;const Jt=[];function Re(){Jt.push(Ce),Ce=!1}function Fe(){const e=Jt.pop();Ce=e===void 0?!0:e}function wn(){jn++}function vn(){for(jn--;!jn&&Jn.length;)Jn.shift()()}function St(e,s,n){if(s.get(e)!==e._trackId){s.set(e,e._trackId);const t=e.deps[e._depsLength];t!==s?(t&&vt(t,e),e.deps[e._depsLength++]=s):e._depsLength++}}const Jn=[];function _t(e,s,n){wn();for(const t of e.keys())if(t._dirtyLevel<s&&e.get(t)===t._trackId){const o=t._dirtyLevel;t._dirtyLevel=s,o===0&&(t._shouldSchedule=!0,t.trigger())}Tt(e),vn()}function Tt(e){for(const s of e.keys())s.scheduler&&s._shouldSchedule&&(!s._runnings||s.allowRecurse)&&e.get(s)===s._trackId&&(s._shouldSchedule=!1,Jn.push(s.scheduler))}const kt=(e,s)=>{const n=new Map;return n.cleanup=e,n.computed=s,n},Sn=new WeakMap,Ke=Symbol(""),_n=Symbol("");function ue(e,s,n){if(Ce&&Ge){let t=Sn.get(e);t||Sn.set(e,t=new Map);let o=t.get(n);o||t.set(n,o=kt(()=>t.delete(n))),St(Ge,o)}}function Oe(e,s,n,t,o,a){const i=Sn.get(e);if(!i)return;let l=[];if(s==="clear")l=[...i.values()];else if(n==="length"&&D(e)){const c=Number(t);i.forEach((u,d)=>{(d==="length"||!rs(d)&&d>=c)&&l.push(u)})}else switch(n!==void 0&&l.push(i.get(n)),s){case"add":D(e)?hn(n)&&l.push(i.get("length")):(l.push(i.get(Ke)),is(e)&&l.push(i.get(_n)));break;case"delete":D(e)||(l.push(i.get(Ke)),is(e)&&l.push(i.get(_n)));break;case"set":is(e)&&l.push(i.get(Ke));break}wn();for(const c of l)c&&_t(c,2);vn()}const _a=pn("__proto__,__v_isRef,__isVue"),At=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(rs)),Dt=Ta();function Ta(){const e={};return["includes","indexOf","lastIndexOf"].forEach(s=>{e[s]=function(...n){const t=C(this);for(let a=0,i=this.length;a<i;a++)ue(t,"get",a+"");const o=t[s](...n);return o===-1||o===!1?t[s](...n.map(C)):o}}),["push","pop","shift","unshift","splice"].forEach(s=>{e[s]=function(...n){Re(),wn();const t=C(this)[s].apply(this,n);return vn(),Fe(),t}}),e}function ka(e){const s=C(this);return ue(s,"has",e),s.hasOwnProperty(e)}class xt{constructor(s=!1,n=!1){this._isReadonly=s,this._shallow=n}get(s,n,t){const o=this._isReadonly,a=this._shallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return a;if(n==="__v_raw")return t===(o?a?Fa:Ct:a?Pt:Et).get(s)||Object.getPrototypeOf(s)===Object.getPrototypeOf(t)?s:void 0;const i=D(s);if(!o){if(i&&E(Dt,n))return Reflect.get(Dt,n,t);if(n==="hasOwnProperty")return ka}const l=Reflect.get(s,n,t);return(rs(n)?At.has(n):_a(n))||(o||ue(s,"get",n),a)?l:de(l)?i&&hn(n)?l:l.value:U(l)?o?Rt(l):An(l):l}}class qt extends xt{constructor(s=!1){super(!1,s)}set(s,n,t,o){let a=s[n];if(!this._shallow){const c=fs(a);if(!xn(t)&&!fs(t)&&(a=C(a),t=C(t)),!D(s)&&de(a)&&!de(t))return c?!1:(a.value=t,!0)}const i=D(s)&&hn(n)?Number(n)<s.length:E(s,n),l=Reflect.set(s,n,t,o);return s===C(o)&&(i?$e(t,a)&&Oe(s,"set",n,t):Oe(s,"add",n,t)),l}deleteProperty(s,n){const t=E(s,n);s[n];const o=Reflect.deleteProperty(s,n);return o&&t&&Oe(s,"delete",n,void 0),o}has(s,n){const t=Reflect.has(s,n);return(!rs(n)||!At.has(n))&&ue(s,"has",n),t}ownKeys(s){return ue(s,"iterate",D(s)?"length":Ke),Reflect.ownKeys(s)}}class Aa extends xt{constructor(s=!1){super(!0,s)}set(s,n){return!0}deleteProperty(s,n){return!0}}const Da=new qt,xa=new Aa,qa=new qt(!0),Tn=e=>e,Es=e=>Reflect.getPrototypeOf(e);function Ps(e,s,n=!1,t=!1){e=e.__v_raw;const o=C(e),a=C(s);n||($e(s,a)&&ue(o,"get",s),ue(o,"get",a));const{has:i}=Es(o),l=t?Tn:n?Nn:qn;if(i.call(o,s))return l(e.get(s));if(i.call(o,a))return l(e.get(a));e!==o&&e.get(s)}function Cs(e,s=!1){const n=this.__v_raw,t=C(n),o=C(e);return s||($e(e,o)&&ue(t,"has",e),ue(t,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function Rs(e,s=!1){return e=e.__v_raw,!s&&ue(C(e),"iterate",Ke),Reflect.get(e,"size",e)}function Nt(e){e=C(e);const s=C(this);return Es(s).has.call(s,e)||(s.add(e),Oe(s,"add",e,e)),this}function It(e,s){s=C(s);const n=C(this),{has:t,get:o}=Es(n);let a=t.call(n,e);a||(e=C(e),a=t.call(n,e));const i=o.call(n,e);return n.set(e,s),a?$e(s,i)&&Oe(n,"set",e,s):Oe(n,"add",e,s),this}function Ot(e){const s=C(this),{has:n,get:t}=Es(s);let o=n.call(s,e);o||(e=C(e),o=n.call(s,e)),t&&t.call(s,e);const a=s.delete(e);return o&&Oe(s,"delete",e,void 0),a}function zt(){const e=C(this),s=e.size!==0,n=e.clear();return s&&Oe(e,"clear",void 0,void 0),n}function Fs(e,s){return function(t,o){const a=this,i=a.__v_raw,l=C(i),c=s?Tn:e?Nn:qn;return!e&&ue(l,"iterate",Ke),i.forEach((u,d)=>t.call(o,c(u),c(d),a))}}function Ms(e,s,n){return function(...t){const o=this.__v_raw,a=C(o),i=is(a),l=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,u=o[e](...t),d=n?Tn:s?Nn:qn;return!s&&ue(a,"iterate",c?_n:Ke),{next(){const{value:y,done:w}=u.next();return w?{value:y,done:w}:{value:l?[d(y[0]),d(y[1])]:d(y),done:w}},[Symbol.iterator](){return this}}}}function Me(e){return function(...s){return e==="delete"?!1:e==="clear"?void 0:this}}function Na(){const e={get(a){return Ps(this,a)},get size(){return Rs(this)},has:Cs,add:Nt,set:It,delete:Ot,clear:zt,forEach:Fs(!1,!1)},s={get(a){return Ps(this,a,!1,!0)},get size(){return Rs(this)},has:Cs,add:Nt,set:It,delete:Ot,clear:zt,forEach:Fs(!1,!0)},n={get(a){return Ps(this,a,!0)},get size(){return Rs(this,!0)},has(a){return Cs.call(this,a,!0)},add:Me("add"),set:Me("set"),delete:Me("delete"),clear:Me("clear"),forEach:Fs(!0,!1)},t={get(a){return Ps(this,a,!0,!0)},get size(){return Rs(this,!0)},has(a){return Cs.call(this,a,!0)},add:Me("add"),set:Me("set"),delete:Me("delete"),clear:Me("clear"),forEach:Fs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{e[a]=Ms(a,!1,!1),n[a]=Ms(a,!0,!1),s[a]=Ms(a,!1,!0),t[a]=Ms(a,!0,!0)}),[e,n,s,t]}const[Ia,Oa,za,Ea]=Na();function kn(e,s){const n=s?e?Ea:za:e?Oa:Ia;return(t,o,a)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?t:Reflect.get(E(n,o)&&o in t?n:t,o,a)}const Pa={get:kn(!1,!1)},Ca={get:kn(!1,!0)},Ra={get:kn(!0,!1)},Et=new WeakMap,Pt=new WeakMap,Ct=new WeakMap,Fa=new WeakMap;function Ma(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ya(e){return e.__v_skip||!Object.isExtensible(e)?0:Ma(ca(e))}function An(e){return fs(e)?e:Dn(e,!1,Da,Pa,Et)}function Ha(e){return Dn(e,!1,qa,Ca,Pt)}function Rt(e){return Dn(e,!0,xa,Ra,Ct)}function Dn(e,s,n,t,o){if(!U(e)||e.__v_raw&&!(s&&e.__v_isReactive))return e;const a=o.get(e);if(a)return a;const i=Ya(e);if(i===0)return e;const l=new Proxy(e,i===2?t:n);return o.set(e,l),l}function cs(e){return fs(e)?cs(e.__v_raw):!!(e&&e.__v_isReactive)}function fs(e){return!!(e&&e.__v_isReadonly)}function xn(e){return!!(e&&e.__v_isShallow)}function Ft(e){return cs(e)||fs(e)}function C(e){const s=e&&e.__v_raw;return s?C(s):e}function Mt(e){return Os(e,"__v_skip",!0),e}const qn=e=>U(e)?An(e):e,Nn=e=>U(e)?Rt(e):e;class Yt{constructor(s,n,t,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new bn(()=>s(this._value),()=>In(this,1),()=>this.dep&&Tt(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=t}get value(){const s=C(this);return(!s._cacheable||s.effect.dirty)&&$e(s._value,s._value=s.effect.run())&&In(s,2),Ua(s),s.effect._dirtyLevel>=1&&In(s,1),s._value}set value(s){this._setter(s)}get _dirty(){return this.effect.dirty}set _dirty(s){this.effect.dirty=s}}function Ba(e,s,n=!1){let t,o;const a=q(e);return a?(t=e,o=ye):(t=e.get,o=e.set),new Yt(t,o,a||!o,n)}function Ua(e){Ce&&Ge&&(e=C(e),St(Ge,e.dep||(e.dep=kt(()=>e.dep=void 0,e instanceof Yt?e:void 0))))}function In(e,s=2,n){e=C(e);const t=e.dep;t&&_t(t,s)}function de(e){return!!(e&&e.__v_isRef===!0)}function La(e){return de(e)?e.value:e}const Wa={get:(e,s,n)=>La(Reflect.get(e,s,n)),set:(e,s,n,t)=>{const o=e[s];return de(o)&&!de(n)?(o.value=n,!0):Reflect.set(e,s,n,t)}};function Ht(e){return cs(e)?e:new Proxy(e,Wa)}/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const gs=[];function _l(e,...s){Re();const n=gs.length?gs[gs.length-1].component:null,t=n&&n.appContext.config.warnHandler,o=Va();if(t)ze(t,n,11,[e+s.join(""),n&&n.proxy,o.map(({vnode:a})=>`at <${Fo(n,a.type)}>`).join(`
`),o]);else{const a=[`[Vue warn]: ${e}`,...s];o.length&&a.push(`
`,...$a(o)),console.warn(...a)}Fe()}function Va(){let e=gs[gs.length-1];if(!e)return[];const s=[];for(;e;){const n=s[0];n&&n.vnode===e?n.recurseCount++:s.push({vnode:e,recurseCount:0});const t=e.component&&e.component.parent;e=t&&t.vnode}return s}function $a(e){const s=[];return e.forEach((n,t)=>{s.push(...t===0?[]:[`
`],...Ga(n))}),s}function Ga({vnode:e,recurseCount:s}){const n=s>0?`... (${s} recursive calls)`:"",t=e.component?e.component.parent==null:!1,o=` at <${Fo(e.component,e.type,t)}`,a=">"+n;return e.props?[o,...Ka(e.props),a]:[o+a]}function Ka(e){const s=[],n=Object.keys(e);return n.slice(0,3).forEach(t=>{s.push(...Bt(t,e[t]))}),n.length>3&&s.push(" ..."),s}function Bt(e,s,n){return Q(s)?(s=JSON.stringify(s),n?s:[`${e}=${s}`]):typeof s=="number"||typeof s=="boolean"||s==null?n?s:[`${e}=${s}`]:de(s)?(s=Bt(e,C(s.value),!0),n?s:[`${e}=Ref<`,s,">"]):q(s)?[`${e}=fn${s.name?`<${s.name}>`:""}`]:(s=C(s),n?s:[`${e}=`,s])}function ze(e,s,n,t){let o;try{o=t?e(...t):e()}catch(a){Ys(a,s,n)}return o}function be(e,s,n,t){if(q(e)){const a=ze(e,s,n,t);return a&&dt(a)&&a.catch(i=>{Ys(i,s,n)}),a}const o=[];for(let a=0;a<e.length;a++)o.push(be(e[a],s,n,t));return o}function Ys(e,s,n,t=!0){const o=s?s.vnode:null;if(s){let a=s.parent;const i=s.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,i,l)===!1)return}a=a.parent}const c=s.appContext.config.errorHandler;if(c){ze(c,null,10,[e,i,l]);return}}Za(e,n,o,t)}function Za(e,s,n,t=!0){console.error(e)}let ys=!1,On=!1;const ie=[];let Ae=0;const ps=[];let Ye=null,Ze=0;const Ut=Promise.resolve();let zn=null;function Xa(e){const s=zn||Ut;return e?s.then(this?e.bind(this):e):s}function Qa(e){let s=Ae+1,n=ie.length;for(;s<n;){const t=s+n>>>1,o=ie[t],a=bs(o);a<e||a===e&&o.pre?s=t+1:n=t}return s}function En(e){(!ie.length||!ie.includes(e,ys&&e.allowRecurse?Ae+1:Ae))&&(e.id==null?ie.push(e):ie.splice(Qa(e.id),0,e),Lt())}function Lt(){!ys&&!On&&(On=!0,zn=Ut.then($t))}function ei(e){const s=ie.indexOf(e);s>Ae&&ie.splice(s,1)}function si(e){D(e)?ps.push(...e):(!Ye||!Ye.includes(e,e.allowRecurse?Ze+1:Ze))&&ps.push(e),Lt()}function Wt(e,s,n=ys?Ae+1:0){for(;n<ie.length;n++){const t=ie[n];if(t&&t.pre){if(e&&t.id!==e.uid)continue;ie.splice(n,1),n--,t()}}}function Vt(e){if(ps.length){const s=[...new Set(ps)].sort((n,t)=>bs(n)-bs(t));if(ps.length=0,Ye){Ye.push(...s);return}for(Ye=s,Ze=0;Ze<Ye.length;Ze++)Ye[Ze]();Ye=null,Ze=0}}const bs=e=>e.id==null?1/0:e.id,ni=(e,s)=>{const n=bs(e)-bs(s);if(n===0){if(e.pre&&!s.pre)return-1;if(s.pre&&!e.pre)return 1}return n};function $t(e){On=!1,ys=!0,ie.sort(ni);try{for(Ae=0;Ae<ie.length;Ae++){const s=ie[Ae];s&&s.active!==!1&&ze(s,null,14)}}finally{Ae=0,ie.length=0,Vt(),ys=!1,zn=null,(ie.length||ps.length)&&$t()}}function ti(e,s,...n){if(e.isUnmounted)return;const t=e.vnode.props||W;let o=n;const a=s.startsWith("update:"),i=a&&s.slice(7);if(i&&i in t){const d=`${i==="modelValue"?"model":i}Modifiers`,{number:y,trim:w}=t[d]||W;w&&(o=n.map(k=>Q(k)?k.trim():k)),y&&(o=n.map(da))}let l,c=t[l=mn(s)]||t[l=mn(ke(s))];!c&&a&&(c=t[l=mn(ls(s))]),c&&be(c,e,6,o);const u=t[l+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,be(u,e,6,o)}}function Gt(e,s,n=!1){const t=s.emitsCache,o=t.get(e);if(o!==void 0)return o;const a=e.emits;let i={},l=!1;if(!q(e)){const c=u=>{const d=Gt(u,s,!0);d&&(l=!0,ee(i,d))};!n&&s.mixins.length&&s.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!a&&!l?(U(e)&&t.set(e,null),null):(D(a)?a.forEach(c=>i[c]=null):ee(i,a),U(e)&&t.set(e,i),i)}function Hs(e,s){return!e||!Ds(s)?!1:(s=s.slice(2).replace(/Once$/,""),E(e,s[0].toLowerCase()+s.slice(1))||E(e,ls(s))||E(e,s))}let je=null,Kt=null;function Bs(e){const s=je;return je=e,Kt=e&&e.type.__scopeId||null,s}function Zt(e,s=je,n){if(!s||e._n)return e;const t=(...o)=>{t._d&&qo(-1);const a=Bs(s);let i;try{i=e(...o)}finally{Bs(a),t._d&&qo(1)}return i};return t._n=!0,t._c=!0,t._d=!0,t}function Tl(){}function Pn(e){const{type:s,vnode:n,proxy:t,withProxy:o,props:a,propsOptions:[i],slots:l,attrs:c,emit:u,render:d,renderCache:y,data:w,setupState:k,ctx:R,inheritAttrs:N}=e;let F,Y;const ae=Bs(e);try{if(n.shapeFlag&4){const H=o||t,Z=H;F=xe(d.call(Z,H,y,a,k,w,R)),Y=c}else{const H=s;F=xe(H.length>1?H(a,{attrs:c,slots:l,emit:u}):H(a,null)),Y=s.props?c:oi(c)}}catch(H){vs.length=0,Ys(H,e,1),F=ce(Se)}let P=F;if(Y&&N!==!1){const H=Object.keys(Y),{shapeFlag:Z}=P;H.length&&Z&7&&(i&&H.some(un)&&(Y=ai(Y,i)),P=Be(P,Y))}return n.dirs&&(P=Be(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),F=P,Bs(ae),F}const oi=e=>{let s;for(const n in e)(n==="class"||n==="style"||Ds(n))&&((s||(s={}))[n]=e[n]);return s},ai=(e,s)=>{const n={};for(const t in e)(!un(t)||!(t.slice(9)in s))&&(n[t]=e[t]);return n};function ii(e,s,n){const{props:t,children:o,component:a}=e,{props:i,children:l,patchFlag:c}=s,u=a.emitsOptions;if(s.dirs||s.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return t?Xt(t,i,u):!!i;if(c&8){const d=s.dynamicProps;for(let y=0;y<d.length;y++){const w=d[y];if(i[w]!==t[w]&&!Hs(u,w))return!0}}}else return(o||l)&&(!l||!l.$stable)?!0:t===i?!1:t?i?Xt(t,i,u):!0:!!i;return!1}function Xt(e,s,n){const t=Object.keys(s);if(t.length!==Object.keys(e).length)return!0;for(let o=0;o<t.length;o++){const a=t[o];if(s[a]!==e[a]&&!Hs(n,a))return!0}return!1}function ri({vnode:e,parent:s},n){for(;s;){const t=s.subTree;if(t.suspense&&t.suspense.activeBranch===e&&(t.el=e.el),t===e)(e=s.vnode).el=n,s=s.parent;else break}}const Qt="components";function Cn(e,s){return ci(Qt,e,!0,s)||e}const li=Symbol.for("v-ndc");function ci(e,s,n=!0,t=!1){const o=je||oe;if(o){const a=o.type;if(e===Qt){const l=Ro(a,!1);if(l&&(l===s||l===ke(s)||l===Is(ke(s))))return a}const i=eo(o[e]||a[e],s)||eo(o.appContext[e],s);return!i&&t?a:i}}function eo(e,s){return e&&(e[s]||e[ke(s)]||e[Is(ke(s))])}const pi=e=>e.__isSuspense;function ui(e,s){s&&s.pendingBranch?D(e)?s.effects.push(...e):s.effects.push(e):si(e)}const di=Symbol.for("v-scx"),hi=()=>Zs(di),Us={};function Rn(e,s,n){return so(e,s,n)}function so(e,s,{immediate:n,deep:t,flush:o,once:a,onTrack:i,onTrigger:l}=W){if(s&&a){const O=s;s=(...pe)=>{O(...pe),Z()}}const c=oe,u=O=>t===!0?O:us(O,t===!1?1:void 0);let d,y=!1,w=!1;if(de(e)?(d=()=>e.value,y=xn(e)):cs(e)?(d=()=>u(e),y=!0):D(e)?(w=!0,y=e.some(O=>cs(O)||xn(O)),d=()=>e.map(O=>{if(de(O))return O.value;if(cs(O))return u(O);if(q(O))return ze(O,c,2)})):q(e)?s?d=()=>ze(e,c,2):d=()=>(k&&k(),be(e,c,3,[R])):d=ye,s&&t){const O=d;d=()=>us(O())}let k,R=O=>{k=P.onStop=()=>{ze(O,c,4),k=P.onStop=void 0}},N;if(an)if(R=ye,s?n&&be(s,c,3,[d(),w?[]:void 0,R]):d(),o==="sync"){const O=hi();N=O.__watcherHandles||(O.__watcherHandles=[])}else return ye;let F=w?new Array(e.length).fill(Us):Us;const Y=()=>{if(!(!P.active||!P.dirty))if(s){const O=P.run();(t||y||(w?O.some((pe,I)=>$e(pe,F[I])):$e(O,F)))&&(k&&k(),be(s,c,3,[O,F===Us?void 0:w&&F[0]===Us?[]:F,R]),F=O)}else P.run()};Y.allowRecurse=!!s;let ae;o==="sync"?ae=Y:o==="post"?ae=()=>he(Y,c&&c.suspense):(Y.pre=!0,c&&(Y.id=c.uid),ae=()=>En(Y));const P=new bn(d,ye,ae),H=Ja(),Z=()=>{P.stop(),H&&dn(H.effects,P)};return s?n?Y():F=P.run():o==="post"?he(P.run.bind(P),c&&c.suspense):P.run(),N&&N.push(Z),Z}function mi(e,s,n){const t=this.proxy,o=Q(e)?e.includes(".")?no(t,e):()=>t[e]:e.bind(t,t);let a;q(s)?a=s:(a=s.handler,n=s);const i=Ss(this),l=so(o,a.bind(t),n);return i(),l}function no(e,s){const n=s.split(".");return()=>{let t=e;for(let o=0;o<n.length&&t;o++)t=t[n[o]];return t}}function us(e,s,n=0,t){if(!U(e)||e.__v_skip)return e;if(s&&s>0){if(n>=s)return e;n++}if(t=t||new Set,t.has(e))return e;if(t.add(e),de(e))us(e.value,s,n,t);else if(D(e))for(let o=0;o<e.length;o++)us(e[o],s,n,t);else if(ut(e)||is(e))e.forEach(o=>{us(o,s,n,t)});else if(mt(e))for(const o in e)us(e[o],s,n,t);return e}function Xe(e,s,n,t){const o=e.dirs,a=s&&s.dirs;for(let i=0;i<o.length;i++){const l=o[i];a&&(l.oldValue=a[i].value);let c=l.dir[t];c&&(Re(),be(c,n,8,[e.el,l,e,s]),Fe())}}const He=Symbol("_leaveCb"),Ls=Symbol("_enterCb");function fi(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return lo(()=>{e.isMounted=!0}),co(()=>{e.isUnmounting=!0}),e}const we=[Function,Array],to={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:we,onEnter:we,onAfterEnter:we,onEnterCancelled:we,onBeforeLeave:we,onLeave:we,onAfterLeave:we,onLeaveCancelled:we,onBeforeAppear:we,onAppear:we,onAfterAppear:we,onAppearCancelled:we},gi={name:"BaseTransition",props:to,setup(e,{slots:s}){const n=er(),t=fi();let o;return()=>{const a=s.default&&io(s.default(),!0);if(!a||!a.length)return;let i=a[0];if(a.length>1){for(const N of a)if(N.type!==Se){i=N;break}}const l=C(e),{mode:c}=l;if(t.isLeaving)return Mn(i);const u=ao(i);if(!u)return Mn(i);const d=Fn(u,l,t,n);Yn(u,d);const y=n.subTree,w=y&&ao(y);let k=!1;const{getTransitionKey:R}=u.type;if(R){const N=R();o===void 0?o=N:N!==o&&(o=N,k=!0)}if(w&&w.type!==Se&&(!es(u,w)||k)){const N=Fn(w,l,t,n);if(Yn(w,N),c==="out-in")return t.isLeaving=!0,N.afterLeave=()=>{t.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Mn(i);c==="in-out"&&u.type!==Se&&(N.delayLeave=(F,Y,ae)=>{const P=oo(t,w);P[String(w.key)]=w,F[He]=()=>{Y(),F[He]=void 0,delete d.delayedLeave},d.delayedLeave=ae})}return i}}};function oo(e,s){const{leavingVNodes:n}=e;let t=n.get(s.type);return t||(t=Object.create(null),n.set(s.type,t)),t}function Fn(e,s,n,t){const{appear:o,mode:a,persisted:i=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:y,onLeave:w,onAfterLeave:k,onLeaveCancelled:R,onBeforeAppear:N,onAppear:F,onAfterAppear:Y,onAppearCancelled:ae}=s,P=String(e.key),H=oo(n,e),Z=(I,X)=>{I&&be(I,t,9,X)},O=(I,X)=>{const L=X[1];Z(I,X),D(I)?I.every(re=>re.length<=1)&&L():I.length<=1&&L()},pe={mode:a,persisted:i,beforeEnter(I){let X=l;if(!n.isMounted)if(o)X=N||l;else return;I[He]&&I[He](!0);const L=H[P];L&&es(e,L)&&L.el[He]&&L.el[He](),Z(X,[I])},enter(I){let X=c,L=u,re=d;if(!n.isMounted)if(o)X=F||c,L=Y||u,re=ae||d;else return;let _=!1;const G=I[Ls]=fe=>{_||(_=!0,fe?Z(re,[I]):Z(L,[I]),pe.delayedLeave&&pe.delayedLeave(),I[Ls]=void 0)};X?O(X,[I,G]):G()},leave(I,X){const L=String(e.key);if(I[Ls]&&I[Ls](!0),n.isUnmounting)return X();Z(y,[I]);let re=!1;const _=I[He]=G=>{re||(re=!0,X(),G?Z(R,[I]):Z(k,[I]),I[He]=void 0,H[L]===e&&delete H[L])};H[L]=e,w?O(w,[I,_]):_()},clone(I){return Fn(I,s,n,t)}};return pe}function Mn(e){if(Vs(e))return e=Be(e),e.children=null,e}function ao(e){return Vs(e)?e.children?e.children[0]:void 0:e}function Yn(e,s){e.shapeFlag&6&&e.component?Yn(e.component.subTree,s):e.shapeFlag&128?(e.ssContent.transition=s.clone(e.ssContent),e.ssFallback.transition=s.clone(e.ssFallback)):e.transition=s}function io(e,s=!1,n){let t=[],o=0;for(let a=0;a<e.length;a++){let i=e[a];const l=n==null?i.key:String(n)+String(i.key!=null?i.key:a);i.type===ve?(i.patchFlag&128&&o++,t=t.concat(io(i.children,s,l))):(s||i.type!==Se)&&t.push(l!=null?Be(i,{key:l}):i)}if(o>1)for(let a=0;a<t.length;a++)t[a].patchFlag=-2;return t}/*! #__NO_SIDE_EFFECTS__ */function Hn(e,s){return q(e)?ee({name:e.name},s,{setup:e}):e}const Ws=e=>!!e.type.__asyncLoader,Vs=e=>e.type.__isKeepAlive;function yi(e,s){ro(e,"a",s)}function bi(e,s){ro(e,"da",s)}function ro(e,s,n=oe){const t=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if($s(s,t,n),n){let o=n.parent;for(;o&&o.parent;)Vs(o.parent.vnode)&&ji(t,s,n,o),o=o.parent}}function ji(e,s,n,t){const o=$s(s,e,t,!0);po(()=>{dn(t[s],o)},n)}function $s(e,s,n=oe,t=!1){if(n){const o=n[e]||(n[e]=[]),a=s.__weh||(s.__weh=(...i)=>{if(n.isUnmounted)return;Re();const l=Ss(n),c=be(s,n,e,i);return l(),Fe(),c});return t?o.unshift(a):o.push(a),a}}const Ee=e=>(s,n=oe)=>(!an||e==="sp")&&$s(e,(...t)=>s(...t),n),wi=Ee("bm"),lo=Ee("m"),vi=Ee("bu"),Ji=Ee("u"),co=Ee("bum"),po=Ee("um"),Si=Ee("sp"),_i=Ee("rtg"),Ti=Ee("rtc");function ki(e,s=oe){$s("ec",e,s)}function uo(e,s,n,t){let o;const a=n&&n[t];if(D(e)||Q(e)){o=new Array(e.length);for(let i=0,l=e.length;i<l;i++)o[i]=s(e[i],i,void 0,a&&a[i])}else if(typeof e=="number"){o=new Array(e);for(let i=0;i<e;i++)o[i]=s(i+1,i,void 0,a&&a[i])}else if(U(e))if(e[Symbol.iterator])o=Array.from(e,(i,l)=>s(i,l,void 0,a&&a[l]));else{const i=Object.keys(e);o=new Array(i.length);for(let l=0,c=i.length;l<c;l++){const u=i[l];o[l]=s(e[u],u,l,a&&a[l])}}else o=[];return n&&(n[t]=o),o}const Bn=e=>e?zo(e)?nt(e)||e.proxy:Bn(e.parent):null,js=ee(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Bn(e.parent),$root:e=>Bn(e.root),$emit:e=>e.emit,$options:e=>Wn(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,En(e.update)}),$nextTick:e=>e.n||(e.n=Xa.bind(e.proxy)),$watch:e=>mi.bind(e)}),Un=(e,s)=>e!==W&&!e.__isScriptSetup&&E(e,s),Ai={get({_:e},s){const{ctx:n,setupState:t,data:o,props:a,accessCache:i,type:l,appContext:c}=e;let u;if(s[0]!=="$"){const k=i[s];if(k!==void 0)switch(k){case 1:return t[s];case 2:return o[s];case 4:return n[s];case 3:return a[s]}else{if(Un(t,s))return i[s]=1,t[s];if(o!==W&&E(o,s))return i[s]=2,o[s];if((u=e.propsOptions[0])&&E(u,s))return i[s]=3,a[s];if(n!==W&&E(n,s))return i[s]=4,n[s];Ln&&(i[s]=0)}}const d=js[s];let y,w;if(d)return s==="$attrs"&&ue(e,"get",s),d(e);if((y=l.__cssModules)&&(y=y[s]))return y;if(n!==W&&E(n,s))return i[s]=4,n[s];if(w=c.config.globalProperties,E(w,s))return w[s]},set({_:e},s,n){const{data:t,setupState:o,ctx:a}=e;return Un(o,s)?(o[s]=n,!0):t!==W&&E(t,s)?(t[s]=n,!0):E(e.props,s)||s[0]==="$"&&s.slice(1)in e?!1:(a[s]=n,!0)},has({_:{data:e,setupState:s,accessCache:n,ctx:t,appContext:o,propsOptions:a}},i){let l;return!!n[i]||e!==W&&E(e,i)||Un(s,i)||(l=a[0])&&E(l,i)||E(t,i)||E(js,i)||E(o.config.globalProperties,i)},defineProperty(e,s,n){return n.get!=null?e._.accessCache[s]=0:E(n,"value")&&this.set(e,s,n.value,null),Reflect.defineProperty(e,s,n)}};function ho(e){return D(e)?e.reduce((s,n)=>(s[n]=null,s),{}):e}let Ln=!0;function Di(e){const s=Wn(e),n=e.proxy,t=e.ctx;Ln=!1,s.beforeCreate&&mo(s.beforeCreate,e,"bc");const{data:o,computed:a,methods:i,watch:l,provide:c,inject:u,created:d,beforeMount:y,mounted:w,beforeUpdate:k,updated:R,activated:N,deactivated:F,beforeDestroy:Y,beforeUnmount:ae,destroyed:P,unmounted:H,render:Z,renderTracked:O,renderTriggered:pe,errorCaptured:I,serverPrefetch:X,expose:L,inheritAttrs:re,components:_,directives:G,filters:fe}=s;if(u&&xi(u,t,null),i)for(const K in i){const B=i[K];q(B)&&(t[K]=B.bind(n))}if(o){const K=o.call(n,n);U(K)&&(e.data=An(K))}if(Ln=!0,a)for(const K in a){const B=a[K],ts=q(B)?B.bind(n,n):q(B.get)?B.get.bind(n,n):ye,ln=!q(B)&&q(B.set)?B.set.bind(n):ye,os=lr({get:ts,set:ln});Object.defineProperty(t,K,{enumerable:!0,configurable:!0,get:()=>os.value,set:Ne=>os.value=Ne})}if(l)for(const K in l)fo(l[K],t,n,K);if(c){const K=q(c)?c.call(n):c;Reflect.ownKeys(K).forEach(B=>{Ei(B,K[B])})}d&&mo(d,e,"c");function ne(K,B){D(B)?B.forEach(ts=>K(ts.bind(n))):B&&K(B.bind(n))}if(ne(wi,y),ne(lo,w),ne(vi,k),ne(Ji,R),ne(yi,N),ne(bi,F),ne(ki,I),ne(Ti,O),ne(_i,pe),ne(co,ae),ne(po,H),ne(Si,X),D(L))if(L.length){const K=e.exposed||(e.exposed={});L.forEach(B=>{Object.defineProperty(K,B,{get:()=>n[B],set:ts=>n[B]=ts})})}else e.exposed||(e.exposed={});Z&&e.render===ye&&(e.render=Z),re!=null&&(e.inheritAttrs=re),_&&(e.components=_),G&&(e.directives=G)}function xi(e,s,n=ye){D(e)&&(e=Vn(e));for(const t in e){const o=e[t];let a;U(o)?"default"in o?a=Zs(o.from||t,o.default,!0):a=Zs(o.from||t):a=Zs(o),de(a)?Object.defineProperty(s,t,{enumerable:!0,configurable:!0,get:()=>a.value,set:i=>a.value=i}):s[t]=a}}function mo(e,s,n){be(D(e)?e.map(t=>t.bind(s.proxy)):e.bind(s.proxy),s,n)}function fo(e,s,n,t){const o=t.includes(".")?no(n,t):()=>n[t];if(Q(e)){const a=s[e];q(a)&&Rn(o,a)}else if(q(e))Rn(o,e.bind(n));else if(U(e))if(D(e))e.forEach(a=>fo(a,s,n,t));else{const a=q(e.handler)?e.handler.bind(n):s[e.handler];q(a)&&Rn(o,a,e)}}function Wn(e){const s=e.type,{mixins:n,extends:t}=s,{mixins:o,optionsCache:a,config:{optionMergeStrategies:i}}=e.appContext,l=a.get(s);let c;return l?c=l:!o.length&&!n&&!t?c=s:(c={},o.length&&o.forEach(u=>Gs(c,u,i,!0)),Gs(c,s,i)),U(s)&&a.set(s,c),c}function Gs(e,s,n,t=!1){const{mixins:o,extends:a}=s;a&&Gs(e,a,n,!0),o&&o.forEach(i=>Gs(e,i,n,!0));for(const i in s)if(!(t&&i==="expose")){const l=qi[i]||n&&n[i];e[i]=l?l(e[i],s[i]):s[i]}return e}const qi={data:go,props:yo,emits:yo,methods:ws,computed:ws,beforeCreate:le,created:le,beforeMount:le,mounted:le,beforeUpdate:le,updated:le,beforeDestroy:le,beforeUnmount:le,destroyed:le,unmounted:le,activated:le,deactivated:le,errorCaptured:le,serverPrefetch:le,components:ws,directives:ws,watch:Ii,provide:go,inject:Ni};function go(e,s){return s?e?function(){return ee(q(e)?e.call(this,this):e,q(s)?s.call(this,this):s)}:s:e}function Ni(e,s){return ws(Vn(e),Vn(s))}function Vn(e){if(D(e)){const s={};for(let n=0;n<e.length;n++)s[e[n]]=e[n];return s}return e}function le(e,s){return e?[...new Set([].concat(e,s))]:s}function ws(e,s){return e?ee(Object.create(null),e,s):s}function yo(e,s){return e?D(e)&&D(s)?[...new Set([...e,...s])]:ee(Object.create(null),ho(e),ho(s??{})):s}function Ii(e,s){if(!e)return s;if(!s)return e;const n=ee(Object.create(null),e);for(const t in s)n[t]=le(e[t],s[t]);return n}function bo(){return{app:null,config:{isNativeTag:ra,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Oi=0;function zi(e,s){return function(t,o=null){q(t)||(t=ee({},t)),o!=null&&!U(o)&&(o=null);const a=bo(),i=new WeakSet;let l=!1;const c=a.app={_uid:Oi++,_component:t,_props:o,_container:null,_context:a,_instance:null,version:pr,get config(){return a.config},set config(u){},use(u,...d){return i.has(u)||(u&&q(u.install)?(i.add(u),u.install(c,...d)):q(u)&&(i.add(u),u(c,...d))),c},mixin(u){return a.mixins.includes(u)||a.mixins.push(u),c},component(u,d){return d?(a.components[u]=d,c):a.components[u]},directive(u,d){return d?(a.directives[u]=d,c):a.directives[u]},mount(u,d,y){if(!l){const w=ce(t,o);return w.appContext=a,y===!0?y="svg":y===!1&&(y=void 0),d&&s?s(w,u):e(w,u,y),l=!0,c._container=u,u.__vue_app__=c,nt(w.component)||w.component.proxy}},unmount(){l&&(e(null,c._container),delete c._container.__vue_app__)},provide(u,d){return a.provides[u]=d,c},runWithContext(u){Ks=c;try{return u()}finally{Ks=null}}};return c}}let Ks=null;function Ei(e,s){if(oe){let n=oe.provides;const t=oe.parent&&oe.parent.provides;t===n&&(n=oe.provides=Object.create(t)),n[e]=s}}function Zs(e,s,n=!1){const t=oe||je;if(t||Ks){const o=t?t.parent==null?t.vnode.appContext&&t.vnode.appContext.provides:t.parent.provides:Ks._context.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&q(s)?s.call(t&&t.proxy):s}}function Pi(e,s,n,t=!1){const o={},a={};Os(a,sn,1),e.propsDefaults=Object.create(null),jo(e,s,o,a);for(const i in e.propsOptions[0])i in o||(o[i]=void 0);n?e.props=t?o:Ha(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function Ci(e,s,n,t){const{props:o,attrs:a,vnode:{patchFlag:i}}=e,l=C(o),[c]=e.propsOptions;let u=!1;if((t||i>0)&&!(i&16)){if(i&8){const d=e.vnode.dynamicProps;for(let y=0;y<d.length;y++){let w=d[y];if(Hs(e.emitsOptions,w))continue;const k=s[w];if(c)if(E(a,w))k!==a[w]&&(a[w]=k,u=!0);else{const R=ke(w);o[R]=$n(c,l,R,k,e,!1)}else k!==a[w]&&(a[w]=k,u=!0)}}}else{jo(e,s,o,a)&&(u=!0);let d;for(const y in l)(!s||!E(s,y)&&((d=ls(y))===y||!E(s,d)))&&(c?n&&(n[y]!==void 0||n[d]!==void 0)&&(o[y]=$n(c,l,y,void 0,e,!0)):delete o[y]);if(a!==l)for(const y in a)(!s||!E(s,y))&&(delete a[y],u=!0)}u&&Oe(e,"set","$attrs")}function jo(e,s,n,t){const[o,a]=e.propsOptions;let i=!1,l;if(s)for(let c in s){if(qs(c))continue;const u=s[c];let d;o&&E(o,d=ke(c))?!a||!a.includes(d)?n[d]=u:(l||(l={}))[d]=u:Hs(e.emitsOptions,c)||(!(c in t)||u!==t[c])&&(t[c]=u,i=!0)}if(a){const c=C(n),u=l||W;for(let d=0;d<a.length;d++){const y=a[d];n[y]=$n(o,c,y,u[y],e,!E(u,y))}}return i}function $n(e,s,n,t,o,a){const i=e[n];if(i!=null){const l=E(i,"default");if(l&&t===void 0){const c=i.default;if(i.type!==Function&&!i.skipFactory&&q(c)){const{propsDefaults:u}=o;if(n in u)t=u[n];else{const d=Ss(o);t=u[n]=c.call(null,s),d()}}else t=c}i[0]&&(a&&!l?t=!1:i[1]&&(t===""||t===ls(n))&&(t=!0))}return t}function wo(e,s,n=!1){const t=s.propsCache,o=t.get(e);if(o)return o;const a=e.props,i={},l=[];let c=!1;if(!q(e)){const d=y=>{c=!0;const[w,k]=wo(y,s,!0);ee(i,w),k&&l.push(...k)};!n&&s.mixins.length&&s.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!a&&!c)return U(e)&&t.set(e,as),as;if(D(a))for(let d=0;d<a.length;d++){const y=ke(a[d]);vo(y)&&(i[y]=W)}else if(a)for(const d in a){const y=ke(d);if(vo(y)){const w=a[d],k=i[y]=D(w)||q(w)?{type:w}:ee({},w);if(k){const R=_o(Boolean,k.type),N=_o(String,k.type);k[0]=R>-1,k[1]=N<0||R<N,(R>-1||E(k,"default"))&&l.push(y)}}}const u=[i,l];return U(e)&&t.set(e,u),u}function vo(e){return e[0]!=="$"}function Jo(e){const s=e&&e.toString().match(/^\s*(function|class) (\w+)/);return s?s[2]:e===null?"null":""}function So(e,s){return Jo(e)===Jo(s)}function _o(e,s){return D(s)?s.findIndex(n=>So(n,e)):q(s)&&So(s,e)?0:-1}const To=e=>e[0]==="_"||e==="$stable",Gn=e=>D(e)?e.map(xe):[xe(e)],Ri=(e,s,n)=>{if(s._n)return s;const t=Zt((...o)=>Gn(s(...o)),n);return t._c=!1,t},ko=(e,s,n)=>{const t=e._ctx;for(const o in e){if(To(o))continue;const a=e[o];if(q(a))s[o]=Ri(o,a,t);else if(a!=null){const i=Gn(a);s[o]=()=>i}}},Ao=(e,s)=>{const n=Gn(s);e.slots.default=()=>n},Fi=(e,s)=>{if(e.vnode.shapeFlag&32){const n=s._;n?(e.slots=C(s),Os(s,"_",n)):ko(s,e.slots={})}else e.slots={},s&&Ao(e,s);Os(e.slots,sn,1)},Mi=(e,s,n)=>{const{vnode:t,slots:o}=e;let a=!0,i=W;if(t.shapeFlag&32){const l=s._;l?n&&l===1?a=!1:(ee(o,s),!n&&l===1&&delete o._):(a=!s.$stable,ko(s,o)),i=s}else s&&(Ao(e,s),i={default:1});if(a)for(const l in o)!To(l)&&i[l]==null&&delete o[l]};function Kn(e,s,n,t,o=!1){if(D(e)){e.forEach((w,k)=>Kn(w,s&&(D(s)?s[k]:s),n,t,o));return}if(Ws(t)&&!o)return;const a=t.shapeFlag&4?nt(t.component)||t.component.proxy:t.el,i=o?null:a,{i:l,r:c}=e,u=s&&s.r,d=l.refs===W?l.refs={}:l.refs,y=l.setupState;if(u!=null&&u!==c&&(Q(u)?(d[u]=null,E(y,u)&&(y[u]=null)):de(u)&&(u.value=null)),q(c))ze(c,l,12,[i,d]);else{const w=Q(c),k=de(c),R=e.f;if(w||k){const N=()=>{if(R){const F=w?E(y,c)?y[c]:d[c]:c.value;o?D(F)&&dn(F,a):D(F)?F.includes(a)||F.push(a):w?(d[c]=[a],E(y,c)&&(y[c]=d[c])):(c.value=[a],e.k&&(d[e.k]=c.value))}else w?(d[c]=i,E(y,c)&&(y[c]=i)):k&&(c.value=i,e.k&&(d[e.k]=i))};o||R?N():(N.id=-1,he(N,n))}}}const he=ui;function Yi(e){return Hi(e)}function Hi(e,s){const n=gt();n.__VUE__=!0;const{insert:t,remove:o,patchProp:a,createElement:i,createText:l,createComment:c,setText:u,setElementText:d,parentNode:y,nextSibling:w,setScopeId:k=ye,insertStaticContent:R}=e,N=(r,p,h,m=null,f=null,j=null,J=void 0,b=null,v=!!p.dynamicChildren)=>{if(r===p)return;r&&!es(r,p)&&(m=cn(r),Ne(r,f,j,!0),r=null),p.patchFlag===-2&&(v=!1,p.dynamicChildren=null);const{type:g,ref:S,shapeFlag:A}=p;switch(g){case Xs:F(r,p,h,m);break;case Se:Y(r,p,h,m);break;case Qs:r==null&&ae(p,h,m,J);break;case ve:_(r,p,h,m,f,j,J,b,v);break;default:A&1?Z(r,p,h,m,f,j,J,b,v):A&6?G(r,p,h,m,f,j,J,b,v):(A&64||A&128)&&g.process(r,p,h,m,f,j,J,b,v,ds)}S!=null&&f&&Kn(S,r&&r.ref,j,p||r,!p)},F=(r,p,h,m)=>{if(r==null)t(p.el=l(p.children),h,m);else{const f=p.el=r.el;p.children!==r.children&&u(f,p.children)}},Y=(r,p,h,m)=>{r==null?t(p.el=c(p.children||""),h,m):p.el=r.el},ae=(r,p,h,m)=>{[r.el,r.anchor]=R(r.children,p,h,m,r.el,r.anchor)},P=({el:r,anchor:p},h,m)=>{let f;for(;r&&r!==p;)f=w(r),t(r,h,m),r=f;t(p,h,m)},H=({el:r,anchor:p})=>{let h;for(;r&&r!==p;)h=w(r),o(r),r=h;o(p)},Z=(r,p,h,m,f,j,J,b,v)=>{p.type==="svg"?J="svg":p.type==="math"&&(J="mathml"),r==null?O(p,h,m,f,j,J,b,v):X(r,p,f,j,J,b,v)},O=(r,p,h,m,f,j,J,b)=>{let v,g;const{props:S,shapeFlag:A,transition:T,dirs:x}=r;if(v=r.el=i(r.type,j,S&&S.is,S),A&8?d(v,r.children):A&16&&I(r.children,v,null,m,f,Zn(r,j),J,b),x&&Xe(r,null,m,"created"),pe(v,r,r.scopeId,J,m),S){for(const M in S)M!=="value"&&!qs(M)&&a(v,M,null,S[M],j,r.children,m,f,Pe);"value"in S&&a(v,"value",null,S.value,j),(g=S.onVnodeBeforeMount)&&qe(g,m,r)}x&&Xe(r,null,m,"beforeMount");const z=Bi(f,T);z&&T.beforeEnter(v),t(v,p,h),((g=S&&S.onVnodeMounted)||z||x)&&he(()=>{g&&qe(g,m,r),z&&T.enter(v),x&&Xe(r,null,m,"mounted")},f)},pe=(r,p,h,m,f)=>{if(h&&k(r,h),m)for(let j=0;j<m.length;j++)k(r,m[j]);if(f){let j=f.subTree;if(p===j){const J=f.vnode;pe(r,J,J.scopeId,J.slotScopeIds,f.parent)}}},I=(r,p,h,m,f,j,J,b,v=0)=>{for(let g=v;g<r.length;g++){const S=r[g]=b?Ue(r[g]):xe(r[g]);N(null,S,p,h,m,f,j,J,b)}},X=(r,p,h,m,f,j,J)=>{const b=p.el=r.el;let{patchFlag:v,dynamicChildren:g,dirs:S}=p;v|=r.patchFlag&16;const A=r.props||W,T=p.props||W;let x;if(h&&Qe(h,!1),(x=T.onVnodeBeforeUpdate)&&qe(x,h,p,r),S&&Xe(p,r,h,"beforeUpdate"),h&&Qe(h,!0),g?L(r.dynamicChildren,g,b,h,m,Zn(p,f),j):J||B(r,p,b,null,h,m,Zn(p,f),j,!1),v>0){if(v&16)re(b,p,A,T,h,m,f);else if(v&2&&A.class!==T.class&&a(b,"class",null,T.class,f),v&4&&a(b,"style",A.style,T.style,f),v&8){const z=p.dynamicProps;for(let M=0;M<z.length;M++){const V=z[M],te=A[V],Te=T[V];(Te!==te||V==="value")&&a(b,V,te,Te,f,r.children,h,m,Pe)}}v&1&&r.children!==p.children&&d(b,p.children)}else!J&&g==null&&re(b,p,A,T,h,m,f);((x=T.onVnodeUpdated)||S)&&he(()=>{x&&qe(x,h,p,r),S&&Xe(p,r,h,"updated")},m)},L=(r,p,h,m,f,j,J)=>{for(let b=0;b<p.length;b++){const v=r[b],g=p[b],S=v.el&&(v.type===ve||!es(v,g)||v.shapeFlag&70)?y(v.el):h;N(v,g,S,null,m,f,j,J,!0)}},re=(r,p,h,m,f,j,J)=>{if(h!==m){if(h!==W)for(const b in h)!qs(b)&&!(b in m)&&a(r,b,h[b],null,J,p.children,f,j,Pe);for(const b in m){if(qs(b))continue;const v=m[b],g=h[b];v!==g&&b!=="value"&&a(r,b,g,v,J,p.children,f,j,Pe)}"value"in m&&a(r,"value",h.value,m.value,J)}},_=(r,p,h,m,f,j,J,b,v)=>{const g=p.el=r?r.el:l(""),S=p.anchor=r?r.anchor:l("");let{patchFlag:A,dynamicChildren:T,slotScopeIds:x}=p;x&&(b=b?b.concat(x):x),r==null?(t(g,h,m),t(S,h,m),I(p.children||[],h,S,f,j,J,b,v)):A>0&&A&64&&T&&r.dynamicChildren?(L(r.dynamicChildren,T,h,f,j,J,b),(p.key!=null||f&&p===f.subTree)&&Do(r,p,!0)):B(r,p,h,S,f,j,J,b,v)},G=(r,p,h,m,f,j,J,b,v)=>{p.slotScopeIds=b,r==null?p.shapeFlag&512?f.ctx.activate(p,h,m,J,v):fe(p,h,m,f,j,J,v):ks(r,p,v)},fe=(r,p,h,m,f,j,J)=>{const b=r.component=Qi(r,m,f);if(Vs(r)&&(b.ctx.renderer=ds),sr(b),b.asyncDep){if(f&&f.registerDep(b,ne),!r.el){const v=b.subTree=ce(Se);Y(null,v,p,h)}}else ne(b,r,p,h,f,j,J)},ks=(r,p,h)=>{const m=p.component=r.component;if(ii(r,p,h))if(m.asyncDep&&!m.asyncResolved){K(m,p,h);return}else m.next=p,ei(m.update),m.effect.dirty=!0,m.update();else p.el=r.el,m.vnode=p},ne=(r,p,h,m,f,j,J)=>{const b=()=>{if(r.isMounted){let{next:S,bu:A,u:T,parent:x,vnode:z}=r;{const hs=xo(r);if(hs){S&&(S.el=z.el,K(r,S,J)),hs.asyncDep.then(()=>{r.isUnmounted||b()});return}}let M=S,V;Qe(r,!1),S?(S.el=z.el,K(r,S,J)):S=z,A&&fn(A),(V=S.props&&S.props.onVnodeBeforeUpdate)&&qe(V,x,S,z),Qe(r,!0);const te=Pn(r),Te=r.subTree;r.subTree=te,N(Te,te,y(Te.el),cn(Te),r,f,j),S.el=te.el,M===null&&ri(r,te.el),T&&he(T,f),(V=S.props&&S.props.onVnodeUpdated)&&he(()=>qe(V,x,S,z),f)}else{let S;const{el:A,props:T}=p,{bm:x,m:z,parent:M}=r,V=Ws(p);if(Qe(r,!1),x&&fn(x),!V&&(S=T&&T.onVnodeBeforeMount)&&qe(S,M,p),Qe(r,!0),A&&pt){const te=()=>{r.subTree=Pn(r),pt(A,r.subTree,r,f,null)};V?p.type.__asyncLoader().then(()=>!r.isUnmounted&&te()):te()}else{const te=r.subTree=Pn(r);N(null,te,h,m,r,f,j),p.el=te.el}if(z&&he(z,f),!V&&(S=T&&T.onVnodeMounted)){const te=p;he(()=>qe(S,M,te),f)}(p.shapeFlag&256||M&&Ws(M.vnode)&&M.vnode.shapeFlag&256)&&r.a&&he(r.a,f),r.isMounted=!0,p=h=m=null}},v=r.effect=new bn(b,ye,()=>En(g),r.scope),g=r.update=()=>{v.dirty&&v.run()};g.id=r.uid,Qe(r,!0),g()},K=(r,p,h)=>{p.component=r;const m=r.vnode.props;r.vnode=p,r.next=null,Ci(r,p.props,m,h),Mi(r,p.children,h),Re(),Wt(r),Fe()},B=(r,p,h,m,f,j,J,b,v=!1)=>{const g=r&&r.children,S=r?r.shapeFlag:0,A=p.children,{patchFlag:T,shapeFlag:x}=p;if(T>0){if(T&128){ln(g,A,h,m,f,j,J,b,v);return}else if(T&256){ts(g,A,h,m,f,j,J,b,v);return}}x&8?(S&16&&Pe(g,f,j),A!==g&&d(h,A)):S&16?x&16?ln(g,A,h,m,f,j,J,b,v):Pe(g,f,j,!0):(S&8&&d(h,""),x&16&&I(A,h,m,f,j,J,b,v))},ts=(r,p,h,m,f,j,J,b,v)=>{r=r||as,p=p||as;const g=r.length,S=p.length,A=Math.min(g,S);let T;for(T=0;T<A;T++){const x=p[T]=v?Ue(p[T]):xe(p[T]);N(r[T],x,h,null,f,j,J,b,v)}g>S?Pe(r,f,j,!0,!1,A):I(p,h,m,f,j,J,b,v,A)},ln=(r,p,h,m,f,j,J,b,v)=>{let g=0;const S=p.length;let A=r.length-1,T=S-1;for(;g<=A&&g<=T;){const x=r[g],z=p[g]=v?Ue(p[g]):xe(p[g]);if(es(x,z))N(x,z,h,null,f,j,J,b,v);else break;g++}for(;g<=A&&g<=T;){const x=r[A],z=p[T]=v?Ue(p[T]):xe(p[T]);if(es(x,z))N(x,z,h,null,f,j,J,b,v);else break;A--,T--}if(g>A){if(g<=T){const x=T+1,z=x<S?p[x].el:m;for(;g<=T;)N(null,p[g]=v?Ue(p[g]):xe(p[g]),h,z,f,j,J,b,v),g++}}else if(g>T)for(;g<=A;)Ne(r[g],f,j,!0),g++;else{const x=g,z=g,M=new Map;for(g=z;g<=T;g++){const ge=p[g]=v?Ue(p[g]):xe(p[g]);ge.key!=null&&M.set(ge.key,g)}let V,te=0;const Te=T-z+1;let hs=!1,oa=0;const As=new Array(Te);for(g=0;g<Te;g++)As[g]=0;for(g=x;g<=A;g++){const ge=r[g];if(te>=Te){Ne(ge,f,j,!0);continue}let Ie;if(ge.key!=null)Ie=M.get(ge.key);else for(V=z;V<=T;V++)if(As[V-z]===0&&es(ge,p[V])){Ie=V;break}Ie===void 0?Ne(ge,f,j,!0):(As[Ie-z]=g+1,Ie>=oa?oa=Ie:hs=!0,N(ge,p[Ie],h,null,f,j,J,b,v),te++)}const aa=hs?Ui(As):as;for(V=aa.length-1,g=Te-1;g>=0;g--){const ge=z+g,Ie=p[ge],ia=ge+1<S?p[ge+1].el:m;As[g]===0?N(null,Ie,h,ia,f,j,J,b,v):hs&&(V<0||g!==aa[V]?os(Ie,h,ia,2):V--)}}},os=(r,p,h,m,f=null)=>{const{el:j,type:J,transition:b,children:v,shapeFlag:g}=r;if(g&6){os(r.component.subTree,p,h,m);return}if(g&128){r.suspense.move(p,h,m);return}if(g&64){J.move(r,p,h,ds);return}if(J===ve){t(j,p,h);for(let A=0;A<v.length;A++)os(v[A],p,h,m);t(r.anchor,p,h);return}if(J===Qs){P(r,p,h);return}if(m!==2&&g&1&&b)if(m===0)b.beforeEnter(j),t(j,p,h),he(()=>b.enter(j),f);else{const{leave:A,delayLeave:T,afterLeave:x}=b,z=()=>t(j,p,h),M=()=>{A(j,()=>{z(),x&&x()})};T?T(j,z,M):M()}else t(j,p,h)},Ne=(r,p,h,m=!1,f=!1)=>{const{type:j,props:J,ref:b,children:v,dynamicChildren:g,shapeFlag:S,patchFlag:A,dirs:T}=r;if(b!=null&&Kn(b,null,h,r,!0),S&256){p.ctx.deactivate(r);return}const x=S&1&&T,z=!Ws(r);let M;if(z&&(M=J&&J.onVnodeBeforeUnmount)&&qe(M,p,r),S&6)Jl(r.component,h,m);else{if(S&128){r.suspense.unmount(h,m);return}x&&Xe(r,null,p,"beforeUnmount"),S&64?r.type.remove(r,p,h,f,ds,m):g&&(j!==ve||A>0&&A&64)?Pe(g,p,h,!1,!0):(j===ve&&A&384||!f&&S&16)&&Pe(v,p,h),m&&na(r)}(z&&(M=J&&J.onVnodeUnmounted)||x)&&he(()=>{M&&qe(M,p,r),x&&Xe(r,null,p,"unmounted")},h)},na=r=>{const{type:p,el:h,anchor:m,transition:f}=r;if(p===ve){vl(h,m);return}if(p===Qs){H(r);return}const j=()=>{o(h),f&&!f.persisted&&f.afterLeave&&f.afterLeave()};if(r.shapeFlag&1&&f&&!f.persisted){const{leave:J,delayLeave:b}=f,v=()=>J(h,j);b?b(r.el,j,v):v()}else j()},vl=(r,p)=>{let h;for(;r!==p;)h=w(r),o(r),r=h;o(p)},Jl=(r,p,h)=>{const{bum:m,scope:f,update:j,subTree:J,um:b}=r;m&&fn(m),f.stop(),j&&(j.active=!1,Ne(J,r,p,h)),b&&he(b,p),he(()=>{r.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&r.asyncDep&&!r.asyncResolved&&r.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Pe=(r,p,h,m=!1,f=!1,j=0)=>{for(let J=j;J<r.length;J++)Ne(r[J],p,h,m,f)},cn=r=>r.shapeFlag&6?cn(r.component.subTree):r.shapeFlag&128?r.suspense.next():w(r.anchor||r.el);let lt=!1;const ta=(r,p,h)=>{r==null?p._vnode&&Ne(p._vnode,null,null,!0):N(p._vnode||null,r,p,null,null,null,h),lt||(lt=!0,Wt(),Vt(),lt=!1),p._vnode=r},ds={p:N,um:Ne,m:os,r:na,mt:fe,mc:I,pc:B,pbc:L,n:cn,o:e};let ct,pt;return s&&([ct,pt]=s(ds)),{render:ta,hydrate:ct,createApp:zi(ta,ct)}}function Zn({type:e,props:s},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&s&&s.encoding&&s.encoding.includes("html")?void 0:n}function Qe({effect:e,update:s},n){e.allowRecurse=s.allowRecurse=n}function Bi(e,s){return(!e||e&&!e.pendingBranch)&&s&&!s.persisted}function Do(e,s,n=!1){const t=e.children,o=s.children;if(D(t)&&D(o))for(let a=0;a<t.length;a++){const i=t[a];let l=o[a];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=o[a]=Ue(o[a]),l.el=i.el),n||Do(i,l)),l.type===Xs&&(l.el=i.el)}}function Ui(e){const s=e.slice(),n=[0];let t,o,a,i,l;const c=e.length;for(t=0;t<c;t++){const u=e[t];if(u!==0){if(o=n[n.length-1],e[o]<u){s[t]=o,n.push(t);continue}for(a=0,i=n.length-1;a<i;)l=a+i>>1,e[n[l]]<u?a=l+1:i=l;u<e[n[a]]&&(a>0&&(s[t]=n[a-1]),n[a]=t)}}for(a=n.length,i=n[a-1];a-- >0;)n[a]=i,i=s[i];return n}function xo(e){const s=e.subTree.component;if(s)return s.asyncDep&&!s.asyncResolved?s:xo(s)}const Li=e=>e.__isTeleport,ve=Symbol.for("v-fgt"),Xs=Symbol.for("v-txt"),Se=Symbol.for("v-cmt"),Qs=Symbol.for("v-stc"),vs=[];let _e=null;function me(e=!1){vs.push(_e=e?null:[])}function Wi(){vs.pop(),_e=vs[vs.length-1]||null}let Js=1;function qo(e){Js+=e}function No(e){return e.dynamicChildren=Js>0?_e||as:null,Wi(),Js>0&&_e&&_e.push(e),e}function De(e,s,n,t,o,a){return No(se(e,s,n,t,o,a,!0))}function en(e,s,n,t,o){return No(ce(e,s,n,t,o,!0))}function Xn(e){return e?e.__v_isVNode===!0:!1}function es(e,s){return e.type===s.type&&e.key===s.key}const sn="__vInternal",Io=({key:e})=>e??null,nn=({ref:e,ref_key:s,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Q(e)||de(e)||q(e)?{i:je,r:e,k:s,f:!!n}:e:null);function se(e,s=null,n=null,t=0,o=null,a=e===ve?0:1,i=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:s,key:s&&Io(s),ref:s&&nn(s),scopeId:Kt,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:t,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:je};return l?(et(c,n),a&128&&e.normalize(c)):n&&(c.shapeFlag|=Q(n)?8:16),Js>0&&!i&&_e&&(c.patchFlag>0||a&6)&&c.patchFlag!==32&&_e.push(c),c}const ce=Vi;function Vi(e,s=null,n=null,t=0,o=null,a=!1){if((!e||e===li)&&(e=Se),Xn(e)){const l=Be(e,s,!0);return n&&et(l,n),Js>0&&!a&&_e&&(l.shapeFlag&6?_e[_e.indexOf(e)]=l:_e.push(l)),l.patchFlag|=-2,l}if(rr(e)&&(e=e.__vccOpts),s){s=$i(s);let{class:l,style:c}=s;l&&!Q(l)&&(s.class=ms(l)),U(c)&&(Ft(c)&&!D(c)&&(c=ee({},c)),s.style=gn(c))}const i=Q(e)?1:pi(e)?128:Li(e)?64:U(e)?4:q(e)?2:0;return se(e,s,n,t,o,i,a,!0)}function $i(e){return e?Ft(e)||sn in e?ee({},e):e:null}function Be(e,s,n=!1){const{props:t,ref:o,patchFlag:a,children:i}=e,l=s?Ki(t||{},s):t;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Io(l),ref:s&&s.ref?n&&o?D(o)?o.concat(nn(s)):[o,nn(s)]:nn(s):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:s&&e.type!==ve?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Be(e.ssContent),ssFallback:e.ssFallback&&Be(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function tn(e=" ",s=0){return ce(Xs,null,e,s)}function Gi(e,s){const n=ce(Qs,null,e);return n.staticCount=s,n}function Qn(e="",s=!1){return s?(me(),en(Se,null,e)):ce(Se,null,e)}function xe(e){return e==null||typeof e=="boolean"?ce(Se):D(e)?ce(ve,null,e.slice()):typeof e=="object"?Ue(e):ce(Xs,null,String(e))}function Ue(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Be(e)}function et(e,s){let n=0;const{shapeFlag:t}=e;if(s==null)s=null;else if(D(s))n=16;else if(typeof s=="object")if(t&65){const o=s.default;o&&(o._c&&(o._d=!1),et(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=s._;!o&&!(sn in s)?s._ctx=je:o===3&&je&&(je.slots._===1?s._=1:(s._=2,e.patchFlag|=1024))}else q(s)?(s={default:s,_ctx:je},n=32):(s=String(s),t&64?(n=16,s=[tn(s)]):n=8);e.children=s,e.shapeFlag|=n}function Ki(...e){const s={};for(let n=0;n<e.length;n++){const t=e[n];for(const o in t)if(o==="class")s.class!==t.class&&(s.class=ms([s.class,t.class]));else if(o==="style")s.style=gn([s.style,t.style]);else if(Ds(o)){const a=s[o],i=t[o];i&&a!==i&&!(D(a)&&a.includes(i))&&(s[o]=a?[].concat(a,i):i)}else o!==""&&(s[o]=t[o])}return s}function qe(e,s,n,t=null){be(e,s,7,[n,t])}const Zi=bo();let Xi=0;function Qi(e,s,n){const t=e.type,o=(s?s.appContext:e.appContext)||Zi,a={uid:Xi++,vnode:e,type:t,parent:s,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new wa(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:s?s.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wo(t,o),emitsOptions:Gt(t,o),emit:null,emitted:null,propsDefaults:W,inheritAttrs:t.inheritAttrs,ctx:W,data:W,props:W,attrs:W,slots:W,refs:W,setupState:W,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=s?s.root:a,a.emit=ti.bind(null,a),e.ce&&e.ce(a),a}let oe=null;const er=()=>oe||je;let on,st;{const e=gt(),s=(n,t)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(t),a=>{o.length>1?o.forEach(i=>i(a)):o[0](a)}};on=s("__VUE_INSTANCE_SETTERS__",n=>oe=n),st=s("__VUE_SSR_SETTERS__",n=>an=n)}const Ss=e=>{const s=oe;return on(e),e.scope.on(),()=>{e.scope.off(),on(s)}},Oo=()=>{oe&&oe.scope.off(),on(null)};function zo(e){return e.vnode.shapeFlag&4}let an=!1;function sr(e,s=!1){s&&st(s);const{props:n,children:t}=e.vnode,o=zo(e);Pi(e,n,o,s),Fi(e,t);const a=o?nr(e,s):void 0;return s&&st(!1),a}function nr(e,s){const n=e.type;e.accessCache=Object.create(null),e.proxy=Mt(new Proxy(e.ctx,Ai));const{setup:t}=n;if(t){const o=e.setupContext=t.length>1?or(e):null,a=Ss(e);Re();const i=ze(t,e,0,[e.props,o]);if(Fe(),a(),dt(i)){if(i.then(Oo,Oo),s)return i.then(l=>{Eo(e,l,s)}).catch(l=>{Ys(l,e,0)});e.asyncDep=i}else Eo(e,i,s)}else Co(e,s)}function Eo(e,s,n){q(s)?e.type.__ssrInlineRender?e.ssrRender=s:e.render=s:U(s)&&(e.setupState=Ht(s)),Co(e,n)}let Po;function Co(e,s,n){const t=e.type;if(!e.render){if(!s&&Po&&!t.render){const o=t.template||Wn(e).template;if(o){const{isCustomElement:a,compilerOptions:i}=e.appContext.config,{delimiters:l,compilerOptions:c}=t,u=ee(ee({isCustomElement:a,delimiters:l},i),c);t.render=Po(o,u)}}e.render=t.render||ye}{const o=Ss(e);Re();try{Di(e)}finally{Fe(),o()}}}function tr(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(s,n){return ue(e,"get","$attrs"),s[n]}}))}function or(e){const s=n=>{e.exposed=n||{}};return{get attrs(){return tr(e)},slots:e.slots,emit:e.emit,expose:s}}function nt(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Ht(Mt(e.exposed)),{get(s,n){if(n in s)return s[n];if(n in js)return js[n](e)},has(s,n){return n in s||n in js}}))}const ar=/(?:^|[-_])(\w)/g,ir=e=>e.replace(ar,s=>s.toUpperCase()).replace(/[-_]/g,"");function Ro(e,s=!0){return q(e)?e.displayName||e.name:e.name||s&&e.__name}function Fo(e,s,n=!1){let t=Ro(s);if(!t&&s.__file){const o=s.__file.match(/([^/\\]+)\.\w+$/);o&&(t=o[1])}if(!t&&e&&e.parent){const o=a=>{for(const i in a)if(a[i]===s)return i};t=o(e.components||e.parent.type.components)||o(e.appContext.components)}return t?ir(t):n?"App":"Anonymous"}function rr(e){return q(e)&&"__vccOpts"in e}const lr=(e,s)=>Ba(e,s,an);function cr(e,s,n){const t=arguments.length;return t===2?U(s)&&!D(s)?Xn(s)?ce(e,null,[s]):ce(e,s):ce(e,null,s):(t>3?n=Array.prototype.slice.call(arguments,2):t===3&&Xn(n)&&(n=[n]),ce(e,s,n))}const pr="3.4.15";/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const ur="http://www.w3.org/2000/svg",dr="http://www.w3.org/1998/Math/MathML",Le=typeof document<"u"?document:null,Mo=Le&&Le.createElement("template"),hr={insert:(e,s,n)=>{s.insertBefore(e,n||null)},remove:e=>{const s=e.parentNode;s&&s.removeChild(e)},createElement:(e,s,n,t)=>{const o=s==="svg"?Le.createElementNS(ur,e):s==="mathml"?Le.createElementNS(dr,e):Le.createElement(e,n?{is:n}:void 0);return e==="select"&&t&&t.multiple!=null&&o.setAttribute("multiple",t.multiple),o},createText:e=>Le.createTextNode(e),createComment:e=>Le.createComment(e),setText:(e,s)=>{e.nodeValue=s},setElementText:(e,s)=>{e.textContent=s},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Le.querySelector(e),setScopeId(e,s){e.setAttribute(s,"")},insertStaticContent(e,s,n,t,o,a){const i=n?n.previousSibling:s.lastChild;if(o&&(o===a||o.nextSibling))for(;s.insertBefore(o.cloneNode(!0),n),!(o===a||!(o=o.nextSibling)););else{Mo.innerHTML=t==="svg"?`<svg>${e}</svg>`:t==="mathml"?`<math>${e}</math>`:e;const l=Mo.content;if(t==="svg"||t==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}s.insertBefore(l,n)}return[i?i.nextSibling:s.firstChild,n?n.previousSibling:s.lastChild]}},We="transition",_s="animation",Ts=Symbol("_vtc"),tt=(e,{slots:s})=>cr(gi,mr(e),s);tt.displayName="Transition";const Yo={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};tt.props=ee({},to,Yo);const ss=(e,s=[])=>{D(e)?e.forEach(n=>n(...s)):e&&e(...s)},Ho=e=>e?D(e)?e.some(s=>s.length>1):e.length>1:!1;function mr(e){const s={};for(const _ in e)_ in Yo||(s[_]=e[_]);if(e.css===!1)return s;const{name:n="v",type:t,duration:o,enterFromClass:a=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=a,appearActiveClass:u=i,appearToClass:d=l,leaveFromClass:y=`${n}-leave-from`,leaveActiveClass:w=`${n}-leave-active`,leaveToClass:k=`${n}-leave-to`}=e,R=fr(o),N=R&&R[0],F=R&&R[1],{onBeforeEnter:Y,onEnter:ae,onEnterCancelled:P,onLeave:H,onLeaveCancelled:Z,onBeforeAppear:O=Y,onAppear:pe=ae,onAppearCancelled:I=P}=s,X=(_,G,fe)=>{ns(_,G?d:l),ns(_,G?u:i),fe&&fe()},L=(_,G)=>{_._isLeaving=!1,ns(_,y),ns(_,k),ns(_,w),G&&G()},re=_=>(G,fe)=>{const ks=_?pe:ae,ne=()=>X(G,_,fe);ss(ks,[G,ne]),Bo(()=>{ns(G,_?c:a),Ve(G,_?d:l),Ho(ks)||Uo(G,t,N,ne)})};return ee(s,{onBeforeEnter(_){ss(Y,[_]),Ve(_,a),Ve(_,i)},onBeforeAppear(_){ss(O,[_]),Ve(_,c),Ve(_,u)},onEnter:re(!1),onAppear:re(!0),onLeave(_,G){_._isLeaving=!0;const fe=()=>L(_,G);Ve(_,y),br(),Ve(_,w),Bo(()=>{_._isLeaving&&(ns(_,y),Ve(_,k),Ho(H)||Uo(_,t,F,fe))}),ss(H,[_,fe])},onEnterCancelled(_){X(_,!1),ss(P,[_])},onAppearCancelled(_){X(_,!0),ss(I,[_])},onLeaveCancelled(_){L(_),ss(Z,[_])}})}function fr(e){if(e==null)return null;if(U(e))return[ot(e.enter),ot(e.leave)];{const s=ot(e);return[s,s]}}function ot(e){return ha(e)}function Ve(e,s){s.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Ts]||(e[Ts]=new Set)).add(s)}function ns(e,s){s.split(/\s+/).forEach(t=>t&&e.classList.remove(t));const n=e[Ts];n&&(n.delete(s),n.size||(e[Ts]=void 0))}function Bo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let gr=0;function Uo(e,s,n,t){const o=e._endId=++gr,a=()=>{o===e._endId&&t()};if(n)return setTimeout(a,n);const{type:i,timeout:l,propCount:c}=yr(e,s);if(!i)return t();const u=i+"end";let d=0;const y=()=>{e.removeEventListener(u,w),a()},w=k=>{k.target===e&&++d>=c&&y()};setTimeout(()=>{d<c&&y()},l+1),e.addEventListener(u,w)}function yr(e,s){const n=window.getComputedStyle(e),t=R=>(n[R]||"").split(", "),o=t(`${We}Delay`),a=t(`${We}Duration`),i=Lo(o,a),l=t(`${_s}Delay`),c=t(`${_s}Duration`),u=Lo(l,c);let d=null,y=0,w=0;s===We?i>0&&(d=We,y=i,w=a.length):s===_s?u>0&&(d=_s,y=u,w=c.length):(y=Math.max(i,u),d=y>0?i>u?We:_s:null,w=d?d===We?a.length:c.length:0);const k=d===We&&/\b(transform|all)(,|$)/.test(t(`${We}Property`).toString());return{type:d,timeout:y,propCount:w,hasTransform:k}}function Lo(e,s){for(;e.length<s.length;)e=e.concat(e);return Math.max(...s.map((n,t)=>Wo(n)+Wo(e[t])))}function Wo(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function br(){return document.body.offsetHeight}function jr(e,s,n){const t=e[Ts];t&&(s=(s?[s,...t]:[...t]).join(" ")),s==null?e.removeAttribute("class"):n?e.setAttribute("class",s):e.className=s}const wr=Symbol("_vod"),vr=Symbol("");function Jr(e,s,n){const t=e.style,o=t.display,a=Q(n);if(n&&!a){if(s&&!Q(s))for(const i in s)n[i]==null&&at(t,i,"");for(const i in n)at(t,i,n[i])}else if(a){if(s!==n){const i=t[vr];i&&(n+=";"+i),t.cssText=n}}else s&&e.removeAttribute("style");wr in e&&(t.display=o)}const Vo=/\s*!important$/;function at(e,s,n){if(D(n))n.forEach(t=>at(e,s,t));else if(n==null&&(n=""),s.startsWith("--"))e.setProperty(s,n);else{const t=Sr(e,s);Vo.test(n)?e.setProperty(ls(t),n.replace(Vo,""),"important"):e[t]=n}}const $o=["Webkit","Moz","ms"],it={};function Sr(e,s){const n=it[s];if(n)return n;let t=ke(s);if(t!=="filter"&&t in e)return it[s]=t;t=Is(t);for(let o=0;o<$o.length;o++){const a=$o[o]+t;if(a in e)return it[s]=a}return s}const Go="http://www.w3.org/1999/xlink";function _r(e,s,n,t,o){if(t&&s.startsWith("xlink:"))n==null?e.removeAttributeNS(Go,s.slice(6,s.length)):e.setAttributeNS(Go,s,n);else{const a=ja(s);n==null||a&&!yt(n)?e.removeAttribute(s):e.setAttribute(s,a?"":n)}}function Tr(e,s,n,t,o,a,i){if(s==="innerHTML"||s==="textContent"){t&&i(t,o,a),e[s]=n??"";return}const l=e.tagName;if(s==="value"&&l!=="PROGRESS"&&!l.includes("-")){e._value=n;const u=l==="OPTION"?e.getAttribute("value"):e.value,d=n??"";u!==d&&(e.value=d),n==null&&e.removeAttribute(s);return}let c=!1;if(n===""||n==null){const u=typeof e[s];u==="boolean"?n=yt(n):n==null&&u==="string"?(n="",c=!0):u==="number"&&(n=0,c=!0)}try{e[s]=n}catch{}c&&e.removeAttribute(s)}function kr(e,s,n,t){e.addEventListener(s,n,t)}function Ar(e,s,n,t){e.removeEventListener(s,n,t)}const Ko=Symbol("_vei");function Dr(e,s,n,t,o=null){const a=e[Ko]||(e[Ko]={}),i=a[s];if(t&&i)i.value=t;else{const[l,c]=xr(s);if(t){const u=a[s]=Ir(t,o);kr(e,l,u,c)}else i&&(Ar(e,l,i,c),a[s]=void 0)}}const Zo=/(?:Once|Passive|Capture)$/;function xr(e){let s;if(Zo.test(e)){s={};let t;for(;t=e.match(Zo);)e=e.slice(0,e.length-t[0].length),s[t[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ls(e.slice(2)),s]}let rt=0;const qr=Promise.resolve(),Nr=()=>rt||(qr.then(()=>rt=0),rt=Date.now());function Ir(e,s){const n=t=>{if(!t._vts)t._vts=Date.now();else if(t._vts<=n.attached)return;be(Or(t,n.value),s,5,[t])};return n.value=e,n.attached=Nr(),n}function Or(e,s){if(D(s)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},s.map(t=>o=>!o._stopped&&t&&t(o))}else return s}const Xo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,zr=(e,s,n,t,o,a,i,l,c)=>{const u=o==="svg";s==="class"?jr(e,t,u):s==="style"?Jr(e,n,t):Ds(s)?un(s)||Dr(e,s,n,t,i):(s[0]==="."?(s=s.slice(1),!0):s[0]==="^"?(s=s.slice(1),!1):Er(e,s,t,u))?Tr(e,s,t,a,i,l,c):(s==="true-value"?e._trueValue=t:s==="false-value"&&(e._falseValue=t),_r(e,s,t,u))};function Er(e,s,n,t){if(t)return!!(s==="innerHTML"||s==="textContent"||s in e&&Xo(s)&&q(n));if(s==="spellcheck"||s==="draggable"||s==="translate"||s==="form"||s==="list"&&e.tagName==="INPUT"||s==="type"&&e.tagName==="TEXTAREA")return!1;if(s==="width"||s==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return Xo(s)&&Q(n)?!1:s in e}const Pr=["ctrl","shift","alt","meta"],Cr={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,s)=>Pr.some(n=>e[`${n}Key`]&&!s.includes(n))},Rr=(e,s)=>{const n=e._withMods||(e._withMods={}),t=s.join(".");return n[t]||(n[t]=(o,...a)=>{for(let i=0;i<s.length;i++){const l=Cr[s[i]];if(l&&l(o,s))return}return e(o,...a)})},Fr=ee({patchProp:zr},hr);let Qo;function Mr(){return Qo||(Qo=Yi(Fr))}const Yr=(...e)=>{const s=Mr().createApp(...e),{mount:n}=s;return s.mount=t=>{const o=Br(t);if(!o)return;const a=s._component;!q(a)&&!a.render&&!a.template&&(a.template=o.innerHTML),o.innerHTML="";const i=n(o,!1,Hr(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),i},s};function Hr(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Br(e){return Q(e)?document.querySelector(e):e}const rn=(e,s)=>{const n=e.__vccOpts||e;for(const[t,o]of s)n[t]=o;return n},Ur=Hn({props:{report:{type:String,required:!0}},methods:{createIssue(){const e=new FormData(this.$refs.issueForm),s=e.get("title");let n="";const t=e.get("description");t&&(n+=`**Description**
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

`);const d="https://github.com/bblanchon/ArduinoJson/issues/new?"+new URLSearchParams({title:s,body:n}).toString();console.log("URL",d),window.open(d,"_blank"),$("#assistance-modal").modal("hide")}}}),Lr={class:"modal fade"},Wr={class:"modal-dialog modal-dialog-scrollable modal-lg"},Vr=[Gi('<div class="modal-header bg-primary text-white"><h5 class="modal-title">Contact support</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button></div><div class="modal-body"><div class="alert alert-info"> This form simplifies the creation of an issue on ArduinoJson&#39;s GitHub project page. It ensures you provide all the required information and prefills the issue&#39;s text. After that, you just need to submit the issue.<br><b>A GitHub account is required.</b></div><div class="form-group"><label for="title-input">Title</label><input type="text" name="title" class="form-control" id="title-input" aria-describedby="title-help" required><small id="title-help" class="form-text text-muted">Summarize your issue in one sentence.</small></div><div class="form-group"><label for="description-input">Description</label><textarea name="description" rows="3" class="form-control" id="description-input" aria-describedby="description-help" required placeholder="When I do ..., I expect ..., but instead I get ..."></textarea><small id="description-help" class="form-text text-muted">Describe your issue with a few sentences.</small></div><div class="form-group"><label for="mcu-input">Microcontroller</label><input type="text" name="mcu" class="form-control" id="mcu-input" aria-describedby="mcu-help" placeholder="ESP8266" required><small id="mcu-help" class="form-text text-muted">Which processor or with board do you use?</small></div><div class="form-group"><label for="framework-input">Arduino Core / Framework</label><input type="text" name="framework" class="form-control" id="framework-input" aria-describedby="framework-help" placeholder="ESP8266 core for Arduino v3.0.2"><small id="framework-help" class="form-text text-muted">Please include version number.</small></div><div class="form-group"><label for="ide-input">IDE</label><input type="text" name="ide" class="form-control" id="ide-input" aria-describedby="ide-help" placeholder="Arduino IDE 1.8.16"><small id="ide-help" class="form-text text-muted">Please include version number.</small></div><div class="form-group"><label for="repro-input">Reproduction code</label><textarea name="repro" rows="10" class="form-control text-monospace" style="font-size:80%;" id="repro-input" aria-describedby="repro-help" placeholder="DynamicJsonDocuemnt doc(1024);\\n..."></textarea><small id="repro-help" class="form-text text-muted">Write a few lines of code that demonstrate the issue.</small></div><div class="form-group"><label for="remarks-input">Remarks</label><textarea name="remarks" rows="4" class="form-control" id="remarks-input" aria-describedby="remarks-help"></textarea><small id="remarks-help" class="form-text text-muted">Anything else you need to tell us?</small></div></div><div class="modal-footer"><div class="text-right"><button type="submit" class="btn btn-primary">Submit</button><small class="form-text text-muted"> This button redirects you to GitHub. </small></div></div>',3)];function $r(e,s,n,t,o,a){return me(),De("div",Lr,[se("div",Wr,[se("form",{class:"modal-content",ref:"issueForm",onSubmit:s[0]||(s[0]=Rr((...i)=>e.createIssue&&e.createIssue(...i),["prevent"]))},Vr,544)])])}const Gr=rn(Ur,[["render",$r]]),Kr=Hn({inject:["debug"],emits:["check"],props:{option:{type:Object,required:!0}}}),Zr={class:"form-check"},Xr=["id","checked","disabled"],Qr=["for","innerHTML"],el={key:0,class:"d-block mb-2 small text-muted"};function sl(e,s,n,t,o,a){return me(),De("div",Zr,[se("input",{type:"radio",id:e.option.inputId,class:"form-check-input",checked:e.option.selected,onClick:s[0]||(s[0]=i=>e.$emit("check")),disabled:e.option.missing},null,8,Xr),se("label",{class:"form-check-label",for:e.option.inputId,innerHTML:e.option.label},null,8,Qr),e.debug?(me(),De("div",el,zs(e.option.summary),1)):Qn("",!0)])}const nl=Hn({inject:["debug"],emits:["choose"],props:{step:{type:Object,required:!0},active:{type:Boolean,default:!1}},components:{TroubleshooterStepOption:rn(Kr,[["render",sl]])},async mounted(){const{top:e,bottom:s}=this.$el.getBoundingClientRect();e+50<window.innerHeight||this.$el.scrollIntoView({behavior:"smooth"})}}),tl={key:0,class:"troubleshooter-step mb-4"},ol={class:"troubleshooter-step-number"},al=["innerHTML"],il={class:"troubleshooter-step-options"},rl={key:0,class:"small"},ll=["href"],cl=["innerHTML"];function pl(e,s,n,t,o,a){const i=Cn("TroubleshooterStepOption");return e.step.options?(me(),De("div",tl,[se("h2",null,[se("div",ol,[se("div",{class:ms(["text-white rounded-circle",e.active?"bg-primary":"bg-secondary"])},zs(e.step.number),3)])]),se("div",{class:"troubleshooter-step-content",innerHTML:e.step.content},null,8,al),se("div",il,[(me(!0),De(ve,null,uo(e.step.options,l=>(me(),en(i,{key:l.hash,option:l,onClick:c=>e.$emit("choose",l)},null,8,["option","onClick"]))),128))]),e.debug?(me(),De("p",rl,[se("a",{href:"vscode://file/"+e.step.fullPath.replaceAll("\\","/")},zs(e.step.filename),9,ll)])):Qn("",!0)])):(me(),De("div",{key:1,innerHTML:e.step.content,class:"troubleshooter-step-content"},null,8,cl))}const ul=rn(nl,[["render",pl]]),ea=[{content:`<p>Which version of ArduinoJson are you using?</p>
`,options:[{id:"v5",page:4,label:"ArduinoJson 5",summary:"The program uses ArduinoJson 5"},{id:"v6",page:33,label:"ArduinoJson 6",summary:"The program uses ArduinoJson 6"},{id:"v7",page:269,label:"ArduinoJson 7",summary:"The program uses ArduinoJson 7"}]},{content:`<p class="display-4">🤷🏻‍♂️</p>
<p>Well, I'm out of ideas: you need to talk to a human.</p>
<p>Please click the &quot;Contact Support&quot; button below and provide all the relevant information.</p>
`,tags:["needs_assistance"]},{content:`<p class="display-4">🙋🏻‍♂️</p>
<p>Awesome! I'm glad I could help.</p>
<p>I would be very grateful if, in return, you could <a href="https://github.com/bblanchon/ArduinoJson/stargazers">star ArduinoJson on GitHub</a>. ❤</p>
<p>If you want to support the project (and learn a lot of stuff as well), you can purchase <a href="/book/">Mastering ArduinoJson</a>.<br>
Alternatively, you can <a href="https://github.com/sponsors/bblanchon">sponsor the project on GitHub</a>.</p>
<p>Should you have any idea on how I could improve myself, please <a href="https://github.com/bblanchon/ArduinoJson/issues/new">open an issue on GitHub</a>.</p>
<p>Bye!</p>
<p>--<br>
<em>ArduinoJson Troubleshooter</em></p>
`},{content:`<p>Please click on the &quot;Contact Support&quot; button below and provide the following information:</p>
<ul>
<li>Compiler output (including the error message, of course!)</li>
<li>Target platform</li>
<li>Runtime/core version</li>
</ul>
<p>If you can, please also include an <a href="https://stackoverflow.com/help/mcve">MCVE</a>.</p>
`,tags:["needs_assistance"]},{content:`<p>When does your issue happen?</p>
`,options:[{id:"compiletime",page:5,label:"At compile time",summary:"The issue happens at compile time"},{id:"runtime",page:10,label:"At run time",summary:"The issue happens at run time"}]},{content:`<p>Please look at the <strong>first</strong> error in the compiler output, and tell me what it is...</p>
`,options:[{id:"requires-cpp-compiler",page:85,label:"ArduinoJson requires a C++ compiler...",summary:'Error says "ArduinoJson requires a C++ compiler..."'},{id:"equals",page:6,label:"'equals' is not a member of 'ArduinoJson::Internals::StringTraits&lt;const int&amp;, void&gt;'",summary:`Error says "'equals' is not a member of 'ArduinoJson::Internals::StringTraits<const int&, void>'"`},{id:"const-char-ptr-to-char",page:8,label:"invalid conversion from 'const char*' to 'char*' [-fpermissive]",summary:`Error says "invalid conversion from 'const char*' to 'char*' [-fpermissive]"`},{id:"const-char-ptr-to-int",page:7,label:"invalid conversion from 'const char*' to 'int' [-fpermissive]",summary:`Error says "invalid conversion from 'const char*' to 'int' [-fpermissive]"`},{id:"cxaguard",page:9,label:"undefined reference to <code>__cxa_guard_acquire</code> and <code>__cxa_guard_release</code>",summary:'Error says "undefined reference to `__cxa_guard_acquire` and `__cxa_guard_release`"'},{id:"not-in-list",page:3,label:"None of the above",summary:"The error is not in the list"}]},{content:`<p>This error occurs when you index a <code>JsonObject</code> with an integer instead of a string.</p>
<p>For example, it happens with the following code:</p>
<pre><code class="hljs language-c++"><span class="hljs-type">int</span> i = <span class="hljs-number">0</span>;
<span class="hljs-keyword">auto</span> value = obj[i];
</code></pre>
<p>The compiler generates an error similar to this one:</p>
<pre><code class="hljs language-text">error: &#x27;equals&#x27; is not a member of &#x27;ArduinoJson::Internals::StringTraits&lt;const int&amp;, void&gt;&#x27;
</code></pre>
<p>Indeed, a <code>JsonObject</code> can only be indexed by a string, like this:</p>
<pre><code class="hljs language-c++"><span class="hljs-type">const</span> <span class="hljs-type">char</span>* key = <span class="hljs-string">&quot;key&quot;</span>;
<span class="hljs-keyword">auto</span> value = obj[key];
</code></pre>
<p>If you do need to access the members of the <code>JsonObject</code> one by one, consider iterating over the key-value pairs:</p>
<pre><code class="hljs language-c++"><span class="hljs-keyword">for</span> (JsonPair&amp; kv : obj) {
    Serial.<span class="hljs-built_in">println</span>(kv.key);
    Serial.<span class="hljs-built_in">println</span>(kv.value.<span class="hljs-built_in">as</span>&lt;<span class="hljs-type">char</span>*&gt;());
}
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Iterating fixes the issue"},{id:"failure",page:1,label:"No",summary:"Iterating doesn't fix the issue"}]},{content:`<p>Let's say you have the following JSON to parse:</p>
<pre><code class="hljs language-json"><span class="hljs-punctuation">{</span>
  <span class="hljs-attr">&quot;modules&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;name&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;hello&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;id&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">10</span>
    <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
    <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;name&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;world&quot;</span><span class="hljs-punctuation">,</span>
      <span class="hljs-attr">&quot;id&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-number">20</span>
    <span class="hljs-punctuation">}</span>
  <span class="hljs-punctuation">]</span>
<span class="hljs-punctuation">}</span>
</code></pre>
<p>If you write the following program:</p>
<pre><code class="hljs language-c++">JsonObject&amp; root =  jsonBuffer.<span class="hljs-built_in">parseOject</span>(input);
JsonArray&amp; modules = root[<span class="hljs-string">&quot;modules&quot;</span>];

<span class="hljs-type">const</span> <span class="hljs-type">char</span>* name = modules[<span class="hljs-string">&quot;hello&quot;</span>][<span class="hljs-number">0</span>];
</code></pre>
<p>You'll get the following compilation error:</p>
<pre><code class="hljs language-text">error: invalid conversion from &#x27;const char*&#x27; to &#x27;size_t {aka unsigned int}&#x27; [-fpermissive]
</code></pre>
<p>This is because <code>modules</code> is an array of object, as such it's indexed by an integer, not by a string.</p>
<p>The solution is:</p>
<pre><code class="hljs language-c++"><span class="hljs-type">const</span> <span class="hljs-type">char</span>* name = modules[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;hello&quot;</span>];
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Using a string fixes the issue"},{id:"failure",page:1,label:"No",summary:"Using a string doesn't fix the issue"}]},{content:`<p>ArduinoJson returns keys and values as <code>const char*</code>.</p>
<p>If you try to put these values into a <code>char*</code>, the compiler will issue an error (or a warning) like the following:</p>
<pre><code class="hljs language-text">invalid conversion from &#x27;ArduinoJson::Internals::JsonVariantAs&lt;char*&gt;::type {aka const char*}&#x27; to &#x27;char*&#x27; [-fpermissive]
</code></pre>
<p>This happens with any of the following expression:</p>
<pre><code class="hljs language-c++"><span class="hljs-type">char</span>* sensor = root[<span class="hljs-string">&quot;sensor&quot;</span>];
<span class="hljs-type">char</span>* sensor = root[<span class="hljs-string">&quot;sensor&quot;</span>].<span class="hljs-built_in">as</span>&lt;<span class="hljs-type">char</span>*&gt;();

<span class="hljs-comment">// in a function whose return type is char*</span>
<span class="hljs-keyword">return</span> root[<span class="hljs-string">&quot;sensor&quot;</span>].<span class="hljs-built_in">as</span>&lt;<span class="hljs-type">char</span>*&gt;();
</code></pre>
<p>The solution is to replace <code>char*</code> by <code>const char*</code></p>
<pre><code class="hljs language-c++"><span class="hljs-type">const</span> <span class="hljs-type">char</span>* sensor = root[<span class="hljs-string">&quot;sensor&quot;</span>];
<span class="hljs-type">const</span> <span class="hljs-type">char</span>* sensor = root[<span class="hljs-string">&quot;sensor&quot;</span>].<span class="hljs-built_in">as</span>&lt;<span class="hljs-type">char</span>*&gt;();

<span class="hljs-comment">// change the return type of the function</span>
<span class="hljs-keyword">return</span> root[<span class="hljs-string">&quot;sensor&quot;</span>].<span class="hljs-built_in">as</span>&lt;<span class="hljs-type">char</span>*&gt;();
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Using a string fixes the issue"},{id:"failure",page:1,label:"No",summary:"Using a string doesn't fix the issue"}]},{content:`<p>You need to add the following flag:</p>
<blockquote class="alert alert-info">
<p><code>-fno-threadsafe-statics</code></p>
<p>Do not emit the extra code to use the routines specified in the C++ ABI for thread-safe initialization of local statics.
You can use this option to reduce code size slightly in code that doesn't need to be thread-safe.</p>
</blockquote>
<p>If you use the Arduino IDE, you need to edit the <code>platform.txt</code> of the board you're using:</p>
<ul>
<li>The file is located at <code>%LOCALAPPDATA%\\Arduino15\\papckages\\&lt;brand&gt;\\hardware\\&lt;board&gt;\\&lt;version&gt;\\platform.txt</code></li>
<li>The line to change is <code>compiler.cpp.flags</code></li>
</ul>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Adding `-fno-threadsafe-statics` fixes the issue"},{id:"failure",page:1,label:"No",summary:"Adding `-fno-threadsafe-statics` doesn't fix the issue"}]},{content:`<p>Does your issue concern serialization or deserialization?</p>
`,options:[{id:"serialization",page:24,label:"Serialization",summary:"The issue concerns serialization"},{id:"deserialization",page:11,label:"Deserialization",summary:"The issue concerns deserialization"}]},{content:`<p>What's the problem?</p>
`,options:[{id:"parsing-fails",page:16,label:"Parsing fails",summary:"Parsing fails"},{id:"first-ok",page:23,label:"The first parsing succeeds but the next ones fail",summary:"The first parsing succeeds but the next ones fail"},{id:"no-values",page:21,label:"Parsing succeeds but I can't read the values",summary:"Parsing succeeds but program can't read the values"},{id:"input-modified",page:13,label:"The input is modified",summary:"The input is modified"},{id:"other",page:1,label:"None of the above",summary:"The problem is not in the list"}]},{content:`<p>In rare cases, the <a href="https://cpp4arduino.com/2018/11/06/what-is-heap-fragmentation.html">fragmentation of the heap</a> can have the same effect as a memory leak.</p>
<p>Indeed, when the heap is highly fragmented, it's not possible to allocate any significant chunk of memory. Even worse, for devices that don't limit the size of the stack, it's possible that the heap and the stack overlap (see chapter 2: <em>The missing C++ course</em> of <a href="/book/">Mastering ArduinoJson</a>).</p>
<p>This problem is likely to occur on devices with very limited RAM, like the Arduino UNO.
If you use such device, you should avoid using the heap entirely. That means: no more <code>String</code> and no more <code>DynamicJsonBuffer</code>, instead use only <code>char*</code> and <code>StaticJsonBuffer</code>.</p>
<pre><code class="hljs language-diff"><span class="hljs-deletion">- String json = &quot;{\\&quot;hello\\&quot;:\\&quot;world\\&quot;}&quot;;</span>
<span class="hljs-addition">+ char[] json = &quot;{\\&quot;hello\\&quot;:\\&quot;world\\&quot;}&quot;;</span>
<span class="hljs-deletion">- DynamicJsonBuffer jsonBuffer;</span>
<span class="hljs-addition">+ StaticJsonBuffer&lt;capacity&gt; jsonBuffer;</span>
  jsonBuffer.parseObject(json);
</code></pre>
<p>As usual, use the <a href="/v5/assistant/">Assistant</a> to compute the optimal capacity.</p>
<p>Did this fix your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Allocating on the stack fixes the issue"},{id:"failure",page:1,label:"No",summary:"Allocating on the stack doesn't fix the issue"}]},{content:`<p>What is the type of the first argument of <code>parseArray()</code> or <code>parseObject()</code>?</p>
`,options:[{id:"const-char-ptr",page:1,label:"<code>const char*</code>",summary:"Input is a `const char*`"},{id:"char-ptr",page:14,label:"<code>char*</code>",summary:"Input is a `char*`"},{id:"char-array",page:14,label:"<code>char[]</code>",summary:"Input is a `char[]`"},{id:"std-string",page:1,label:"<code>std::string</code>",summary:"Input is a `std::string`"},{id:"std-istream",page:1,label:"<code>std::istream</code>",summary:"Input is a `std::istream`"},{id:"string",page:1,label:"<code>String</code>",summary:"Input is a `String`"},{id:"stream",page:1,label:"<code>Stream</code>",summary:"Input is a `Stream`"},{id:"flash",page:1,label:"<code>const __FlashStringHelper*</code>",summary:"Input is a `const __FlashStringHelper*`"},{id:"other",page:1,label:"Something else",summary:"Input type is not in the list"}]},{content:`<p>When the input is a <code>char*</code> or a <code>char[]</code>, ArduinoJson enables the zero-copy mode.</p>
<p>In this mode, the JSON parser <strong>modifies the input in-place</strong>.
The following modifications are performed:</p>
<ol>
<li><code>'\\0'</code> are inserted at the end of each string</li>
<li>Escaped special characters (like <code>\\n</code>) are unescaped</li>
</ol>
<p>Example:</p>
<pre><code class="hljs language-c++"><span class="hljs-type">char</span>[] json = <span class="hljs-string">&quot;{\\&quot;hello\\&quot;:\\&quot;world\\&quot;}&quot;</span>;
jsonBuffer.<span class="hljs-built_in">parseObject</span>(json);
</code></pre>
<p>After executing the line above, the <code>input</code> variable probably contains something like: <code>&quot;hello\\0world\\0&quot;</code>.</p>
<p>This is the expected behavior, but if it's a problem for you, you can disable the zero-copy mode by casting the input to <code>const char*</code>:</p>
<pre><code class="hljs language-c++">jsonBuffer.<span class="hljs-built_in">parseObject</span>(<span class="hljs-built_in">reinterpret_cast</span>&lt;<span class="hljs-type">const</span> <span class="hljs-type">char</span>*&gt;(json));
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Casting to `const char*` fixes the issue"},{id:"failure",page:1,label:"No",summary:"Casting to `const char*` doesn't fix the issue"}]},{content:`<p>Unlike the <code>StaticJsonBuffer</code> which has a fixed size, the <code>DynamicJsonBuffer</code> will automatically grow when full.
If the <a href="https://en.wikipedia.org/wiki/Memory_management#HEAP">heap memory</a> is exhausted, the <code>DynamicJsonBuffer</code> will fail to allocate memory and the parsing will fail.</p>
<p>If you are in this situation:</p>
<ul>
<li>Make sure you have enough RAM, use <a href="/v5/assistant/">ArduinoJson Assistant</a> to compute the required size.</li>
<li>Make sure you don't <a href="/v5/faq/how-to-reuse-a-jsonbuffer/">reuse the same <code>JsonBuffer</code></a>.
In particular make sure you don't use a <a href="/v5/faq/why-shouldnt-i-use-a-global-jsonbuffer/">global <code>JsonBuffer</code></a>.</li>
</ul>
<p>See also: <a href="/v5/faq/how-to-reduce-memory-usage/">How to reduce memory usage?</a></p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Resetting the buffer, or reducing memory usage fixed the issue"},{id:"input-valid",page:20,label:"No",summary:"Allocation doesn't fail"}]},{content:`<p>This seems obvious, but a lot of issues are caused by an invalid input.</p>
<p>In particular, if you're writing an HTTP client, you need to</p>
<ol>
<li>Skip the HTTP headers.</li>
<li>Use HTTP 1.0 to prevent <a href="https://en.wikipedia.org/wiki/Chunked_transfer_encoding">chunked transfer encoding</a></li>
<li>Increase the timeout</li>
</ol>
<p>See <a href="/v5/example/http-client/">JsonHttpClient.ino</a> for a reference implementation.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"The input was invalid"},{id:"input-valid",page:19,label:"No",summary:"The input is valid"}]},{content:`<p>This can happen if you're parsing an array or an object with many nesting levels, i.e. with a very deep layout.</p>
<p>You can solve this in two ways:</p>
<ol>
<li>You can pass an additional argument to <code>parseObject()</code> to specify the new limit.</li>
<li>You can define <code>ARDUINOJSON_DEFAULT_NESTING_LIMIT</code> which is the default for this argument</li>
</ol>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Increasing the nesting limit fixes the issue"},{id:"failure",page:1,label:"No",summary:"Increasing the nesting limit doesn't fix the issue"}]},{content:`<p>A <code>StaticJsonBuffer</code> is usually allocated on the <a href="https://en.wikipedia.org/wiki/Stack-based_memory_allocation">stack</a>, if it's too big it will overlap with other variables. This usually leads to a crash or a reboot of the device.</p>
<p>If you are in this situation, you can either:</p>
<ul>
<li>Reduce the size of the <code>StaticJsonBuffer</code>, use <a href="/v5/assistant/">ArduinoJson Assistant</a> to compute the required size.</li>
<li>Switch to a <code>DynamicJsonBuffer</code> which is allocated on the heap.</li>
</ul>
<p>For example, a ESP8266 has 4KB of stack memory. This means you only have 4096 bytes to store all your local variables, function parameters and calls return addresses. If the <a href="/v5/assistant/">ArduinoJson Assistant</a> says you need more than 1KB of RAM for the <code>JsonBuffer</code>, then you should use a <code>DynamicJsonBuffer</code>.</p>
<p>See also: <a href="/v5/faq/how-to-reduce-memory-usage/">How to reduce memory usage?</a></p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Switching to a `DynamicJsonBuffer` fixes the issue"},{id:"failure",page:15,label:"No",summary:"Switching to a `DynamicJsonBuffer` doesn't fix the issue"}]},{content:`<p>A <code>JsonBuffer</code> is a memory pool where the JSON parser stores the tokens of the parsed object.</p>
<p><code>StaticJsonBuffer</code> is an implementation of a <code>JsonBuffer</code> with fixed memory allocation.</p>
<p>This means that you need to specify the right size for the <code>StaticJsonBuffer</code>, otherwise the parser will not be able to allocate the memory it needs, and therefore it will return an error.</p>
<p>Use <a href="/v5/assistant/">ArduinoJson Assistant</a> to compute the required size.</p>
<p>See also: <a href="/v5/faq/how-to-reduce-memory-usage/">How to reduce memory usage?</a></p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Increasing the capacity fixes the issue"},{id:"input-valid",page:18,label:"No",summary:"Increasing the capacity doesn't fix the issue"}]},{content:`<p>Maybe you called <code>parseObject()</code> instead of <code>parseArray()</code></p>
<p>This is a very common question as people are often confused when the JSON input contains mixed arrays and objects.</p>
<p>The answer is very simple: it's the type of the root that matters.
This means that you just need to look at the first character: it's either a <code>[</code>, for an array, or a <code>{</code>, for an object.</p>
<p>For example, if the input is:</p>
<pre><code class="hljs language-json"><span class="hljs-punctuation">{</span><span class="hljs-attr">&quot;mickey&quot;</span><span class="hljs-punctuation">:</span><span class="hljs-punctuation">[</span><span class="hljs-string">&quot;mouse&quot;</span><span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span><span class="hljs-attr">&quot;donald&quot;</span><span class="hljs-punctuation">:</span><span class="hljs-punctuation">[</span><span class="hljs-string">&quot;duck&quot;</span><span class="hljs-punctuation">]</span><span class="hljs-punctuation">}</span>
</code></pre>
<p>then you must call <code>parseObject()</code> because the root is an object.</p>
<p>And, if the input is:</p>
<pre><code class="hljs language-json"><span class="hljs-punctuation">[</span><span class="hljs-punctuation">{</span><span class="hljs-attr">&quot;mickey&quot;</span><span class="hljs-punctuation">:</span><span class="hljs-string">&quot;mouse&quot;</span><span class="hljs-punctuation">,</span><span class="hljs-attr">&quot;donald&quot;</span><span class="hljs-punctuation">:</span><span class="hljs-string">&quot;duck&quot;</span><span class="hljs-punctuation">}</span><span class="hljs-punctuation">]</span>
</code></pre>
<p>then you must call <code>parseArray()</code> because the root is an array.</p>
<p>Finally, if you cannot know in advance the type of the root, simply use <code>JsonBuffer::parse()</code> which returns a <code>JsonVariant</code>.</p>
<p>See also: <a href="/v5/faq/parsing-succeeds-but-i-cant-read-the-values/">Parsing succeeds but I can't read the values!</a></p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"The wrong `parseXxx()` function was called"},{id:"failure",page:17,label:"No",summary:"The program calls the right `parseXxx()` function"}]},{content:`<p>99.999% of the time, this is caused by a confusion between arrays and objects.</p>
<p>This often happens when the JSON document contains <code>[{</code> or <code>:[</code>.</p>
<h5>Example 1: an array of object</h5>
<pre><code class="hljs language-json"><span class="hljs-punctuation">[</span><span class="hljs-punctuation">{</span><span class="hljs-attr">&quot;hello&quot;</span><span class="hljs-punctuation">:</span><span class="hljs-string">&quot;world&quot;</span><span class="hljs-punctuation">}</span><span class="hljs-punctuation">]</span>
</code></pre>
<pre><code class="hljs language-diff">  JsonObject&amp; root = jsonBuffer.parseObject(json);
<span class="hljs-deletion">- const char* world = root[&quot;hello&quot;];</span>
<span class="hljs-addition">+ const char* world = root[0][&quot;hello&quot;];</span>
</code></pre>
<h5>Example 2: an array in an object</h5>
<pre><code class="hljs language-json"><span class="hljs-punctuation">{</span><span class="hljs-attr">&quot;hello&quot;</span><span class="hljs-punctuation">:</span><span class="hljs-punctuation">[</span><span class="hljs-string">&quot;world&quot;</span><span class="hljs-punctuation">]</span><span class="hljs-punctuation">}</span>
</code></pre>
<pre><code class="hljs language-diff">  JsonObject&amp; root = jsonBuffer.parseObject(json);
<span class="hljs-deletion">- const char* world = root[&quot;hello&quot;];</span>
<span class="hljs-addition">+ const char* world = root[&quot;hello&quot;][0];</span>
</code></pre>
<h5>Example 3: an object in an array in an object</h5>
<pre><code class="hljs language-json"><span class="hljs-punctuation">{</span><span class="hljs-attr">&quot;hello&quot;</span><span class="hljs-punctuation">:</span><span class="hljs-punctuation">[</span><span class="hljs-punctuation">{</span><span class="hljs-attr">&quot;new&quot;</span><span class="hljs-punctuation">:</span><span class="hljs-string">&quot;world&quot;</span><span class="hljs-punctuation">}</span><span class="hljs-punctuation">]</span><span class="hljs-punctuation">}</span>
</code></pre>
<pre><code class="hljs language-diff">  JsonObject&amp; root = jsonBuffer.parseObject(json);
<span class="hljs-deletion">- const char* world = root[&quot;hello&quot;][&quot;new&quot;];</span>
<span class="hljs-addition">+ const char* world = root[&quot;hello&quot;][0][&quot;new&quot;];</span>
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"The problem was a confusion between array and objects"},{id:"failure",page:1,label:"No",summary:"The problem was not a confusion between array and objects"}]},{content:`<p>Your issue could be due to the &quot;zero-copy&quot; mode.</p>
<p>This mode is active when the input is writable (<code>char[]</code> or a <code>char*</code>).
In this mode, ArduinoJson modifies the input string in place: it inserts null terminators and unescapes special characters.
If you call <code>parseObject()</code> twice with the same input buffer, the first will work, but the second will fail because the input buffer doesn't contain a valid JSON document anymore.</p>
<p>The solution is simply to parse the input only once, or get a fresh input at each iteration.</p>
<pre><code class="hljs language-diff"><span class="hljs-deletion">- char json[256];</span>
<span class="hljs-deletion">- readJsonFromSomewhere(json, sizeof(json));</span>
  
  for (int i=0; i&lt;10; i++) {
<span class="hljs-addition">+     char json[256];</span>
<span class="hljs-addition">+     readJsonFromSomewhere(json, sizeof(json));</span>

      StaticJsonBuffer&lt;200&gt; jsonBuffer;
  
      JsonObject&amp; root = jsonBuffer.parse(json);
      if (root.success()) {
          Serial.println(&quot;parseObject() succeeded&quot;);
      } else {
          Serial.println(&quot;parseObject() failed!&quot;);
      }
  }
</code></pre>
<p>If you don't want ArduinoJson to modify the input buffer, i.e. if you want to disable the zero-copy mode, you need to pass the input as a read-only type, like <code>const char*</code>:</p>
<pre><code class="hljs language-diff">  char json[256];
  readJsonFromSomewhere(json, sizeof(json));
  
  for (int i=0; i&lt;10; i++) {
      StaticJsonBuffer&lt;400&gt; jsonBuffer;
  
<span class="hljs-deletion">-     JsonObject&amp; root = jsonBuffer.parse(json);</span>
<span class="hljs-addition">+     JsonObject&amp; root = jsonBuffer.parse((const char*)json);</span>
      if (root.success()) {
         Serial.println(&quot;parseObject() succeeded&quot;);
      } else {
         Serial.println(&quot;parseObject() failed!&quot;);
      }
  }
</code></pre>
<p>In this case, you also need to increase the capacity of the <code>JsonBuffer</code> because it will have to hold a partial copy of the input. As usual, use the <a href="/v5/assistant/">Assistant</a> to compute the optimal capacity.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"The problem was due to a reused input"},{id:"failure",page:12,label:"No",summary:"The program doesn't reuse the input"}]},{content:`<p>This can happen if you reuse the same <code>JsonBuffer</code>.
The solution is simply to NOT reuse the <code>JsonBuffer</code>.
Here is an example:</p>
<pre><code class="hljs language-diff"><span class="hljs-deletion">- StaticJsonBuffer&lt;200&gt; jsonBuffer;</span>

 for (int i=0; i&lt;10; i++) {
     char json[256];
     readJsonFromSomewhere(json, sizeof(json));
 
<span class="hljs-addition">+    StaticJsonBuffer&lt;200&gt; jsonBuffer;</span>
     JsonObject&amp; root = jsonBuffer.parse(json);
     if (root.success()) {
       Serial.println(&quot;parseObject() succeeded&quot;);
     } else {
       Serial.println(&quot;parseObject() failed!&quot;);
     }
 }
</code></pre>
<p>Note that, contrary to common belief, moving a <code>StaticJsonBuffer</code> inside of a loop has no negative impact on performance.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Creating a new `JsonBuffer` fixes the issue"},{id:"failure",page:22,label:"No",summary:"The program doesn't reuse the `JsonBuffer`"}]},{content:`<p>What's the problem?</p>
`,options:[{id:"incomplete",page:28,label:"Some parts are missing",summary:"Some parts are missing"},{id:"garbage",page:25,label:"The output contains garbage",summary:"The output contains garbage"},{id:"slow",page:32,label:"It's slow",summary:"Serializing is slow"},{id:"other",page:1,label:"Something else",summary:"The problem is not in the list"}]},{content:`<p>Garbage in the output always has the same cause: the <code>JsonObject</code> contains pointers to destructed variables.</p>
<p>This problem happens when the <code>JsonObject</code> is constructed with variables that are destroyed before the call to <code>printTo()</code></p>
<p>A typical example is the following:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// DON&#x27;T DO THAT!!!</span>
<span class="hljs-function">JsonObject&amp; <span class="hljs-title">createObject</span><span class="hljs-params">()</span> </span>{
  StaticJsonBuffer&lt;<span class="hljs-number">200</span>&gt; jsonBuffer;
  JsonObject&amp; obj = jsonBuffer.<span class="hljs-built_in">createObject</span>();
  obj[<span class="hljs-string">&quot;hello&quot;</span>] = <span class="hljs-string">&quot;world&quot;</span>;
  <span class="hljs-keyword">return</span> obj;
}
</code></pre>
<p>The best way to fix this function is to pass the <code>JsonBuffer</code> as an argument:</p>
<pre><code class="hljs language-c++"><span class="hljs-function"><span class="hljs-keyword">template</span>&lt;<span class="hljs-keyword">typename</span> TJsonBuffer&gt;
JsonObject&amp; <span class="hljs-title">createObject</span><span class="hljs-params">(TJsonBuffer&amp; jsonBuffer)</span> </span>{
  JsonObject&amp; obj = jsonBuffer.<span class="hljs-built_in">createObject</span>();
  obj[<span class="hljs-string">&quot;hello&quot;</span>] = <span class="hljs-string">&quot;world&quot;</span>;
  <span class="hljs-keyword">return</span> obj;
}
</code></pre>
<p>Note that this function uses a template to allow any kind of <code>JsonBuffer</code> to be used, not just <code>StaticJsonBuffer&lt;200&gt;</code>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"buffer-ok",page:2,label:"Yes",summary:"Passing the JsonBuffer as an argument fixes the issue"},{id:"failure",page:26,label:"No",summary:"Passing the JsonBuffer as an argument doesn't fix the issue"}]},{content:`<p>Sometime, it's not the <code>JsonBuffer</code> that is destructed, but a string that was added to the <code>JsonObject</code>.</p>
<p>For example, the following program fills a <code>JsonObject</code> with a temporary <code>String</code>:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// DON&#x27;T DO THAT!!!</span>
JsonObject&amp; obj = jsonBuffer.<span class="hljs-built_in">createObject</span>();
obj[<span class="hljs-string">&quot;address&quot;</span>] = address.<span class="hljs-built_in">toString</span>().<span class="hljs-built_in">c_str</span>();
obj.<span class="hljs-built_in">printTo</span>(Serial); <span class="hljs-comment">// &lt;- likely to produce garbage</span>
</code></pre>
<p>The problem is that the call to <code>address.toString()</code> produce a temporary <code>String</code> that is destructed as soon as the line is executed.</p>
<p>By calling <a href="https://www.arduino.cc/reference/en/language/variables/data-types/string/functions/c_str/"><code>String::c_str()</code></a>, the program gets a pointer to the temporary string and gives it to ArduinoJson. Since ArduinoJson sees a <code>const char*</code> it doesn't duplicate the string and simply saves the pointer.</p>
<p>The problem can be avoided by removing the call to <a href="https://www.arduino.cc/reference/en/language/variables/data-types/string/functions/c_str/"><code>String::c_str()</code></a>:</p>
<pre><code class="hljs language-c++">JsonObject&amp; obj = jsonBuffer.<span class="hljs-built_in">createObject</span>();
obj[<span class="hljs-string">&quot;address&quot;</span>] = address.<span class="hljs-built_in">toString</span>(); <span class="hljs-comment">// &lt;- duplicates</span>
obj.<span class="hljs-built_in">printTo</span>(Serial);
</code></pre>
<p>Now, ArduinoJson sees a <a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a> and knows that it needs to make a copy of the string in the <code>JsonBuffer</code>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"no-cstr",page:2,label:"Yes",summary:"Removing `c_str()` fixes the issue"},{id:"failure",page:27,label:"No",summary:"Removing `c_str()` doesn't fix the issue"}]},{content:`<p>It could also be dangling pointers to the input.</p>
<p>For example, the following function uses the zero-copy mode, but doesn't keep the input in memory:</p>
<pre><code class="hljs language-c++"><span class="hljs-function">JsonObject&amp;  <span class="hljs-title">loadPlastic</span><span class="hljs-params">(DynamicJsonBuffer&amp; jsonBuffer)</span></span>{
  File file = SPIFFS.<span class="hljs-built_in">open</span>(HISTORY_FILE, <span class="hljs-string">&quot;r&quot;</span>);

  <span class="hljs-comment">// DON&#x27;T DO THAT!!!</span>
  <span class="hljs-type">size_t</span> size = file.<span class="hljs-built_in">size</span>();
  <span class="hljs-function">std::unique_ptr&lt;<span class="hljs-type">char</span>[]&gt; <span class="hljs-title">buf</span> <span class="hljs-params">(<span class="hljs-keyword">new</span> <span class="hljs-type">char</span>[size])</span></span>;
  file.<span class="hljs-built_in">readBytes</span>(buf.<span class="hljs-built_in">get</span>(), size);
  JsonObject&amp; root = jsonBuffer.<span class="hljs-built_in">parseObject</span>(buf.<span class="hljs-built_in">get</span>());

  file.<span class="hljs-built_in">close</span>();
  <span class="hljs-keyword">return</span> root;
}
</code></pre>
<p>Indeed, when called with a <code>char*</code> (or a <code>char[]</code>), <code>JsonBuffer::parseObject()</code> uses the zero-copy mode. In this mode, the <code>JsonObject</code> stores pointers to bytes in the input.</p>
<p>The zero-copy mode is very efficient, but it requires that the input variable has a longer lifetime than the <code>JsonObject</code>.</p>
<p>To fix this function, just change the type of the input to something that is read-only.
In this particular case, it's possible to pass the <code>file</code> directly:</p>
<pre><code class="hljs language-c++"><span class="hljs-function">JsonObject&amp;  <span class="hljs-title">loadPlastic</span><span class="hljs-params">(DynamicJsonBuffer&amp; jsonBuffer)</span></span>{
  File file = SPIFFS.<span class="hljs-built_in">open</span>(HISTORY_FILE, <span class="hljs-string">&quot;r&quot;</span>);
  JsonObject&amp; root = jsonBuffer.<span class="hljs-built_in">parseObject</span>(file);
  file.<span class="hljs-built_in">close</span>();
  <span class="hljs-keyword">return</span> root;
}
</code></pre>
<p>Now, ArduinoJson will duplicates the relevant pieces of the input in the <code>JsonBuffer</code>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"zero-copy-disabled",page:2,label:"Yes",summary:"Disabling the zero-copy mode fixes the issue"},{id:"failure",page:1,label:"No",summary:"Disabling the zero-copy mode doesn't fix the issue"}]},{content:`<p>What kind of <code>JsonBuffer</code> are you using?</p>
`,options:[{id:"static",page:30,label:"<code>StaticJsonBuffer</code>",summary:"The program uses a `StaticJsonBuffer`"},{id:"dynamic",page:29,label:"<code>DynamicJsonBuffer</code>",summary:"The program uses a `DynamicJsonBuffer`"}]},{content:`<p>Please try to specify the capacity to its constructor; this will reduce the <a href="https://cpp4arduino.com/2018/11/06/what-is-heap-fragmentation.html">heap fragmentation</a>.<br>
Use the <a href="/v5/assistant/">ArduinoJson Assistant</a> to compute the right capacity for your JSON output.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Setting the capacity fixes the issue"},{id:"failure",page:1,label:"No",summary:"Setting the capacity doesn't fix the issue"}]},{content:`<p>Please try to increase the capacity of the  <code>StaticJsonBuffer</code>.<br>
Use the <a href="/v5/assistant/">ArduinoJson Assistant</a> to compute the right capacity for your JSON output.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Increasing the capacity fixes the issue"},{id:"crash",page:31,label:"Now, my program crashes!",summary:"Increasing the capacity makes the program crash"},{id:"failure",page:1,label:"No",summary:"Increasing the capacity doesn't fix the issue"}]},{content:`<p>The <code>StaticJsonBuffer</code> is too big and causes a stack-overflow</p>
<p>Please switch to a <code>DynamicJsonBuffer</code> and pass the capacity to the constructor, like so:</p>
<pre><code class="hljs language-diff"><span class="hljs-deletion">- StaticJsonBuffer&lt;6000&gt; jsonBuffer;</span>
<span class="hljs-addition">+ DynamicJsonBuffer jsonBuffer(6000);</span>
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Switching to a `DynamicJsonBuffer` fixes the issue"},{id:"failure",page:1,label:"No",summary:"Switching to a `DynamicJsonBuffer` doesn't fix the issue"}]},{content:`<p>First of all, ArduinoJson is <strong>not slow</strong> by itself. It's slow when used in conjunction with the <code>WifiClient</code> from the ESP8266 core.</p>
<p>The problem is that there is no buffer between ArduinoJson and the WifiClient.</p>
<p>To solve this, either:</p>
<ol>
<li>Enable the <a href="https://en.wikipedia.org/wiki/Nagle%27s_algorithm">Nagle algorithm</a> on <code>WifiClient</code> by calling <code>setNoDelay(false)</code>.</li>
<li>Serialize to a buffer and send the whole buffer in one shot.</li>
<li>Insert a <a href="https://github.com/bblanchon/ArduinoStreamUtils"><code>BufferedPrint</code></a> proxy between ArduinoJson and <code>WifiClient</code>.</li>
</ol>
`,options:[{id:"success",page:2,label:"Yes",summary:"Adding a buffer fixes the issue"},{id:"failure",page:1,label:"No",summary:"Adding a buffer doesn't fix the issue"}]},{content:`<p>When does your issue happen?</p>
`,options:[{id:"compiletime",page:34,label:"At compile time",summary:"The issue happens at compile time"},{id:"runtime",page:86,label:"At run time",summary:"The issue happens at run time"}]},{content:`<p>Please look at the <strong>first</strong> error in the compiler output, and tell me what it is...</p>
`,options:[{id:"requires-cpp-compiler",page:85,label:"ArduinoJson requires a C++ compiler...",summary:'Error says "ArduinoJson requires a C++ compiler..."'},{id:"assignment-of-read-only-location",page:36,label:"assignment of read-only location",summary:'Error says "assignment of read-only location"'},{id:"ambiguous-string-assign",page:35,label:"ambiguous overload for <code>operator=</code> (operand types are <code>String</code> and ...)",summary:'Error says "ambiguous overload for `operator=` (operand types are `String` and ...)"'},{id:"begin-not-found",page:54,label:"<code>begin</code>: no matching overloaded function found",summary:'Error says "`begin`: no matching overloaded function found"'},{id:"error-constants",page:75,label:"<code>bits/error_constants.h</code>: No such file or directory",summary:'Error says "`bits/error_constants.h`: No such file or directory'},{id:"print-ambiguous",page:76,label:"call of overloaded <code>print(...)</code> is ambiguous",summary:'Error says "call of overloaded `print(...)` is ambiguous"'},{id:"cannot-bind-object-ref",page:73,label:"cannot bind non-const lvalue reference of type <code>ArduinoJson::JsonObject&amp;</code> ...",summary:'Error says "cannot bind non-const lvalue reference of type `ArduinoJson::JsonObject&` ..."'},{id:"class-has-no-member-named-read",page:68,label:"<code>class Xxx</code> has no member named <code>read</code>",summary:'Error says "`class Xxx` has no member named `read`"'},{id:"pointer-to-object",page:72,label:"<code>const void*</code> is not a pointer-to-object type",summary:'Error says "`const void*` is not a pointer-to-object type"'},{id:"doesnt-name-a-type",page:45,label:"<code>doc</code> does not name a type",summary:'Error says "`doc` does not name a type"'},{id:"dynamicjsonbuffer",page:40,label:"<code>DynamicJsonBuffer</code> is a class from ArduinoJson 5",summary:'Error says "`DynamicJsonBuffer` is a class from ArduinoJson 5"'},{id:"dynamicjsondocument-not-declared",page:69,label:"<code>DynamicJsonDocument</code> was not declared in this scope",summary:'Error says "`DynamicJsonDocument` was not declared in this scope"'},{id:"expected-identifier-before-numeric-constant",page:47,label:"expected identifier before numeric constant",summary:'Error says "expected identifier before numeric constant"'},{id:"expected-identifier-before-string-constant",page:49,label:"expected identifier before string constant",summary:'Error says "expected identifier before string constant"'},{id:"char-pointer-conversion",page:39,label:"invalid conversion from <code>const char*</code> to <code>char*</code> [-fpermissive]",summary:'Error says "invalid conversion from `const char*` to `char*` [-fpermissive]"'},{id:"invalid-conversion",page:50,label:"invalid use of incomplete type <code>class InvalidConversion&lt;...&gt;</code>",summary:'Error says "invalid use of incomplete type `class InvalidConversion<...>`"'},{id:"jsondocument-copy",page:55,label:"<code>JsonDocument::JsonDocument(const JsonDocument&amp;)</code> is private",summary:'Error says "`JsonDocument::JsonDocument(const JsonDocument&)` is private"'},{id:"jsondocument-constructor",page:56,label:"<code>JsonDocument::JsonDocument()</code> is protected within this context",summary:'Error says "`JsonDocument::JsonDocument()` is protected within this context"'},{id:"macro-min",page:57,label:"macro <code>min</code> passed 3 arguments, but takes just 2",summary:'Error says "macro `min` passed 3 arguments, but takes just 2"'},{id:"basicjsondocument-default-constructor",page:37,label:"no default constructor exists for class <code>BasicJsonDocument</code>",summary:'Error says "no default constructor exists for class `BasicJsonDocument`"'},{id:"no-matching-function",page:58,label:"no matching function for call to ...",summary:'Error says "no matching function for call to ..."'},{id:"passing-volatile-as-this-argument-discards-qualifiers",page:74,label:"passing <code>volatile ...</code> as <code>this</code> argument discards qualifiers [-fpermissive]",summary:'Error says "passing `volatile ...` as `this` argument discards qualifiers [-fpermissive]"'},{id:"cast-void-to-flashstringhelper",page:38,label:"reinterpret_cast from <code>const void</code> to <code>const __FlashStringHelper *</code> is not allowed",summary:'Error says "reinterpret_cast from `const void` to `const __FlashStringHelper *` is not allowed"'},{id:"request-for-member",page:77,label:"request for member ...",summary:'Error says "request for member ..."'},{id:"staticjsonbuffer",page:40,label:"<code>StaticJsonBuffer</code> is a class from ArduinoJson 5",summary:'Error says "`StaticJsonBuffer` is a class from ArduinoJson 5"'},{id:"staticjsondocument-not-declared",page:69,label:"<code>StaticJsonDocument</code> was not declared in this scope",summary:'Error says "`StaticJsonDocument` was not declared in this scope"'},{id:"struct-has-no-member-named-read",page:68,label:"<code>struct Xxx</code> has no member named <code>read</code>",summary:'Error says "`struct Xxx` has no member named `read`"'},{id:"range-based-for-requires-begin",page:54,label:"this range-based <code>for</code> statement requires a suitable &quot;begin&quot; function and none was found",summary:'Error says "this range-based `for` statement requires a suitable "begin" function and none was found"'},{id:"not-in-list",page:3,label:"None of the above",summary:"The error is not in the list"}]},{content:`<p>This error occurs when you try to assign a <code>JsonVariant</code> to a <a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a>.</p>
<p>Indeed, due to the way these two classes are defined, you can <em>construct</em> a <a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a> from a <code>JsonVariant</code>, but you cannot <em>assign</em> a <code>JsonVariant</code> to an existing string.</p>
<pre><code class="hljs language-c++">String name = doc[<span class="hljs-string">&quot;name&quot;</span>];  <span class="hljs-comment">// contruction -&gt; works</span>
name = doc[<span class="hljs-string">&quot;name&quot;</span>];         <span class="hljs-comment">// assignment  -&gt; fails</span>
</code></pre>
<p>You can easily workaround this problem by explicitly casting the <code>JsonVariant</code>, like so:</p>
<pre><code class="hljs language-c++">name = doc[<span class="hljs-string">&quot;name&quot;</span>].<span class="hljs-built_in">as</span>&lt;String&gt;();
</code></pre>
<p>Please see <a href="/v6/error/ambiguous-overload-for-operator-equal/">error: ambiguous overload for 'operator=' (operand types are 'String' and ...)</a> for details.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Casting the `JsonVariant` fixes the issue"},{id:"failure",page:1,label:"No",summary:"Casting the `JsonVariant` doesn't fix the issue"}]},{content:`<p>This error occurs when you pass a string to <code>JsonArray::operator[]</code>; i.e., when you use an array like an object.</p>
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
JsonObject obj = doc.<span class="hljs-built_in">createNestedObject</span>(<span class="hljs-string">&quot;obj&quot;</span>);
obj[<span class="hljs-string">&quot;key&quot;</span>] = <span class="hljs-string">&quot;value&quot;</span>;
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Using an integer or switching to an object fixes the issue"},{id:"failure",page:1,label:"No",summary:"Neither using an integer nor switching to an object fixes the issue"}]},{content:`<p>This is a linting error you may have in Visual Studio Code if your program contains something like this:</p>
<pre><code class="hljs language-c++">DynamicJsonDocument doc;
</code></pre>
<p>If you try to compile this code, you will get the following error:</p>
<pre><code class="hljs language-text">no matching function for call to &#x27;ArduinoJson6194_F1::BasicJsonDocument&lt;ArduinoJson6194_F1::DefaultAllocator&gt;::BasicJsonDocument()&#x27;
</code></pre>
<p>These errors occur when you forget to pass the capacity to the constructor of <code>DynamicJsonDocument</code>.</p>
<p>To fix them, you must specify the capacity of the memory pool, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-function">DynamicJsonDocument <span class="hljs-title">doc</span><span class="hljs-params">(<span class="hljs-number">2048</span>)</span></span>;
</code></pre>
<p>As usual, you can use the <a href="/v6/assistant/">ArduinoJson Assistant</a> to compute the right capacity for your project.</p>
<p>For more information, please read <a href="/v6/error/no-matching-function-for-call-to-basicjsondocument-basicjsondocument/">no matching function for call to 'BasicJsonDocument::BasicJsonDocument()'</a>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Passing the capacity to the constructor fixes the issue"},{id:"failure",page:1,label:"No",summary:"Passing the capacity to the constructor doesn't fix the issue"}]},{content:`<p>The error should look like this:</p>
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
In the meantime, you can work around this issue by disabling PROGMEM support in ArduinoJson by setting <code>ARDUINOJSON_ENABLE_PROGMEM</code> to <code>0</code>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-meta">#<span class="hljs-keyword">define</span> ARDUINOJSON_ENABLE_PROGMEM 0</span>
<span class="hljs-meta">#<span class="hljs-keyword">include</span> <span class="hljs-string">&lt;ArduinoJson.h&gt;</span></span>
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Setting `ARDUINOJSON_ENABLE_PROGMEM` to `0` fixes the issue"},{id:"failure",page:1,label:"No",summary:"Setting `ARDUINOJSON_ENABLE_PROGMEM` to `0` doesn't fix the issue"}]},{content:`<p>This error occurs when you try to store a pointer of type <code>const char*</code> into a variable of type <code>char*</code>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-type">char</span>* eventName = doc[<span class="hljs-string">&quot;event&quot;</span>];
</code></pre>
<p>Indeed, <code>JsonVariant</code> returns a <code>const char*</code>, not a <code>char*</code>. You must change the type of the pointer, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-type">const</span> <span class="hljs-type">char</span>* eventName = doc[<span class="hljs-string">&quot;event&quot;</span>];
</code></pre>
<p>There are other similar situations where this error can occur. For more information, please read <a href="/v6/error/invalid-conversion-from-const-char-to-char/">invalid conversion from 'const char*' to 'char*' [-fpermissive]</a>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Changing the pointer type fixes the issue"},{id:"failure",page:1,label:"No",summary:"Changing the pointer type doesn't fix the issue"}]},{content:`<p>This error occurs when you try to use ArduinoJson 6 with a program written for ArduinoJson 5.</p>
<p>Is your program directly using ArduinoJson, or is it using a library that depends on ArduinoJson?</p>
`,options:[{id:"upgrade",page:41,label:"My program uses ArduinoJson directly",summary:"Program uses ArduinoJson directly"},{id:"keep-v5",page:43,label:"My program uses a library that depends on ArduinoJson",summary:"Program uses a library that depends on ArduinoJson"}]},{content:`<p>Can you upgrade the program or do you prefer keeping it as it is?</p>
`,options:[{id:"upgrade",page:44,label:"I'd like to upgrade to ArduinoJson 6",summary:"User prefers upgrading to ArduinoJson 6"},{id:"keep-v5",page:42,label:"I prefer not touching the program",summary:"User prefers keeping ArduinoJson 5"}]},{content:`<p>I recommend that you download <a href="https://github.com/bblanchon/ArduinoJson/releases/download/v5.13.5/ArduinoJson-v5.13.5.h"><code>ArduinoJson-v5.13.5.h</code></a> and save it among the project files, this way you're sure that the project is distributed with the right version of the library.</p>
<p>You can choose to keep the name <code>ArduinoJson-v5.13.5.h</code> and update the <code>#include</code> directive, or you can rename the file to <code>ArduinoJson.h</code>; either way is fine, as long as the header is in the same folder as the file that includes it.</p>
<p>Please see <a href="/v5/doc/installation/">installation instructions</a> for details</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Downloading ArduinoJson 5 fixes the issue"},{id:"failure",page:1,label:"No",summary:"Downloading ArduinoJson 5 doesn't fix the issue"}]},{content:`<p>Since you cannot upgrade the code of the library depending on ArduinoJson, the simplest solution is to downgrade ArduinoJson to version 5.</p>
<p>On the Arduino IDE, click on the Library Manager icon, then search ArduinoJson and install version 5.13.5.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Installing ArduinoJson 5 fixes the issue"},{id:"failure",page:1,label:"No",summary:"Installing ArduinoJson 5 doesn't fix the issue"}]},{content:`<p>Upgrading from v5 to v6 isn't trivial but isn't complicated either.<br>
Please follow the <a href="/v6/doc/upgrade/">upgrade instructions</a>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Upgrading fixes the issue"},{id:"failure",page:1,label:"No",summary:"Upgrading doesn't fix the issue"}]},{content:`<p>This error usually occurs when you write statements at the global scope, which isn't possible in C++.</p>
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
`,options:[{id:"success",page:2,label:"Yes",summary:"Moving statement to `setup()` fixes the issue"},{id:"failure",page:1,label:"No",summary:"Moving statement to `setup()` doesn't fix the issue"}]},{content:`<p>This error occurs when you try to declare the member like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-keyword">class</span> <span class="hljs-title class_">MyStruct</span> {
  <span class="hljs-function">DynamicJsonDocument <span class="hljs-title">doc</span><span class="hljs-params">(<span class="hljs-number">1024</span>)</span></span>;
};
</code></pre>
<p>Indeed, this is not valid C++ syntax: you cannot call the constructor from the declaration of the member. Instead, you must call the member's constructor in the constructor of the class:</p>
<pre><code class="hljs language-c++"><span class="hljs-keyword">class</span> <span class="hljs-title class_">MyStruct</span> {
  DynamicJsonDocument doc;

  <span class="hljs-built_in">MyStruct</span>() : <span class="hljs-built_in">doc</span>(<span class="hljs-number">1024</span>) {}
};
</code></pre>
<p>Did this solve this issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Calling `DynamicJsonDocument`'s constructor in the class constructor fixes the issue"},{id:"failure",page:1,label:"No",summary:"Calling `DynamicJsonDocument`'s constructor in the class constructor doesn't fix the issue"}]},{content:`<p>Did you try to declare a <code>DynamicJsonDocument</code> as a member of a <code>class</code> or a <code>struct</code>?</p>
`,options:[{id:"success",page:46,label:"Yes",summary:"`DynamicJsonDocument` is used as a member of a `class` or a `struct`"},{id:"failure",page:1,label:"No",summary:"`DynamicJsonDocument` isn't used as a member of a `class` or a `struct`"}]},{content:`<p>This a known bug in the RAK RUI core for Arduino.
It's tracked in the following issues:</p>
<ul>
<li><a href="https://github.com/RAKWireless/RAK-STM32-RUI/issues/10">RAKWireless/RAK-STM32-RUI#10</a></li>
<li><a href="https://github.com/RAKWireless/RAK-nRF52-RUI/issues/5">RAKWireless/RAK-nRF52-RUI#5</a></li>
<li><a href="https://github.com/RAKWireless/RAK-APOLLO3-RUI/issues/2">RAKWireless/RAK-APOLLO3-RUI#2</a></li>
</ul>
<p>You should be able to work around this issue by adding the following line at the beginning of your sketch:</p>
<pre><code class="hljs language-c++"><span class="hljs-meta">#<span class="hljs-keyword">undef</span> str_</span>
</code></pre>
<p>Did this solve this issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Adding `#undef str_` fixes the issue"},{id:"failure",page:1,label:"No",summary:"Adding `#undef str_` doesn't fix the issue"}]},{content:`<p>Are you using a WisBlock RUI3?<br>
(such as RAK3172, RAK4630, RAK4631, or RAK11720)</p>
`,options:[{id:"success",page:48,label:"Yes",summary:"Program targets a WisBlock RUI3"},{id:"failure",page:1,label:"No",summary:"Program doesn't target a WisBlock RUI3"}]},{content:`<p>Assuming we removed the namespaces from the error message, what type is incomplete?</p>
`,options:[{id:"array",page:51,label:"<code>class InvalidConversion&lt;JsonVariantCont, JsonArray&gt;</code>",summary:"Specialization is `InvalidConversion<JsonVariantCont, JsonArray>`"},{id:"object",page:52,label:"<code>class InvalidConversion&lt;JsonVariantCont, JsonObject&gt;</code>",summary:"Specialization is `InvalidConversion<JsonVariantCont, JsonObject>`"},{id:"variant",page:53,label:"<code>class InvalidConversion&lt;JsonVariantCont, JsonVariant&gt;</code>",summary:"Specialization is `InvalidConversion<JsonVariantCont, JsonVariant>`"}]},{content:`<p>Somewhere in your program, there is a conversion from <code>JsonVariantConst</code> to <code>JsonArray</code>. This conversion is invalid because it would convert a <em>read-only</em> reference to a <em>read-write</em> reference.</p>
<p>To fix this issue, you must use <code>JsonArrayConst</code> in place of <code>JsonArray</code>.</p>
<p>For example, if your program contains the expression <code>variant.as&lt;JsonArray&gt;()</code>, you must replace it with <code>variant.as&lt;JsonArrayConst&gt;()</code>. Alternatively, if your program contains a statement like <code>JsonArray array = variant</code>, you must replace it with <code>JsonArrayConst array = variant</code>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Replacing `JsonArray` with `JsonArrayConst` fixes the issue"},{id:"failure",page:1,label:"No",summary:"Replacing `JsonArray` with `JsonArrayConst` doesn't fix the issue"}]},{content:`<p>Somewhere in your program, there is a conversion from <code>JsonVariantConst</code> to <code>JsonObject</code>. This conversion is invalid because it would convert a <em>read-only</em> reference to a <em>read-write</em> reference.</p>
<p>To fix this issue, you must use <code>JsonObjectConst</code> in place of <code>JsonObject</code>.</p>
<p>For example, if your program contains the expression <code>variant.as&lt;JsonObject&gt;()</code>, you must replace it with <code>variant.as&lt;JsonObjectConst&gt;()</code>. Alternatively, if your program contains a statement like <code>JsonObject obj = variant</code>, you must replace it with <code>JsonObjectConst obj = variant</code>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Replacing `JsonObject` with `JsonObjectConst` fixes the issue"},{id:"failure",page:1,label:"No",summary:"Replacing `JsonObject` with `JsonObjectConst` doesn't fix the issue"}]},{content:`<p>Somewhere in your program, there is a conversion from <code>JsonVariantConst</code> to <code>JsonVariant</code>. This conversion is invalid because it would convert a <em>read-only</em> reference to a <em>read-write</em> reference.</p>
<p>To fix this issue, you must use <code>JsonVariantConst</code> in place of <code>JsonVariant</code>.</p>
<p>For example, if your program contains the expression <code>variant.as&lt;JsonVariant&gt;()</code>, you must replace it with <code>variant.as&lt;JsonVariantConst&gt;()</code>. Alternatively, if your program contains a statement like <code>JsonVariant v = variant</code>, you must replace it with <code>JsonVariantConst v = variant</code>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Replacing `JsonVariant` with `JsonVariantConst` fixes the issue"},{id:"failure",page:1,label:"No",summary:"Replacing `JsonVariant` with `JsonVariantConst` doesn't fix the issue"}]},{content:`<p>You get this error when you try to iterate over a <code>JsonDocument</code> or a <code>JsonVariant</code>.</p>
<p>For example, it happens if you do this:</p>
<pre><code class="hljs language-c++"><span class="hljs-keyword">for</span> (JsonPair p : doc[<span class="hljs-string">&quot;config&quot;</span>]) {
  <span class="hljs-comment">// ...</span>
}
</code></pre>
<p>Indeed, you cannot iterate a <code>JsonVariant</code> like so because there is an ambiguity: the <code>JsonVariant</code> could point to either an array or an object, and this information is only available at runtime.</p>
<p>For this reason, we need to tell the compiler which type of structure we expect by casting the <code>JsonVariant</code> to a <code>JsonArray</code> or <code>JsonObject</code>.
For example, we could solve the above snippet like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-keyword">for</span> (JsonPair p : doc[<span class="hljs-string">&quot;config&quot;</span>].<span class="hljs-built_in">as</span>&lt;JsonObject&gt;()) {
  <span class="hljs-comment">// ...</span>
}
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Calling `as<JsonObject>()` or `as<JsonArray>()` solves the issue"},{id:"failure",page:1,label:"No",summary:"Calling `as<JsonObject>()` or `as<JsonArray>()` doesn't solve the issue"}]},{content:`<p><code>JsonDocument</code> doesn't support copying.</p>
<p>If you need to pass a <code>JsonDocument</code> to a function, you can use a reference, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-function"><span class="hljs-type">void</span> <span class="hljs-title">myFunction</span><span class="hljs-params">(JsonDocument&amp; doc)</span>
<span class="hljs-comment">// or</span>
<span class="hljs-type">void</span> <span class="hljs-title">myFunction</span><span class="hljs-params">(<span class="hljs-type">const</span> JsonDocument&amp; doc)</span>
</span></code></pre>
<p>You can even make this function more reusable by allowing it to support any part of a JSON document, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-function"><span class="hljs-type">void</span> <span class="hljs-title">myFunction</span><span class="hljs-params">(JsonVariant var)</span>
<span class="hljs-comment">// or</span>
<span class="hljs-type">void</span> <span class="hljs-title">myFunction</span><span class="hljs-params">(JsonVariantConst var)</span>
</span></code></pre>
<p>If you must make a copy, use either <code>DynamicJsonDocument</code> or <code>StaticJsonDocument</code>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Using a reference solves the issue"},{id:"failure",page:1,label:"No",summary:"Using a reference doesn't solve the issue"}]},{content:`<p>This error occurs when you declare a variable of type <code>JsonDocument</code>, like so:</p>
<pre><code class="hljs language-c++">JsonDocument doc;
</code></pre>
<p>Indeed, in ArduinoJson 6, <code>JsonDocument</code> is a base class that cannot be instantiated.
Instead, you must use one of the derived classes:</p>
<ul>
<li><code>DynamicJsonDocument</code> for a memory pool on the heap</li>
<li><code>StaticJsonDocument</code> for a memory pool on the stack</li>
</ul>
<p>In both cases, you must specify the capacity of the memory pool, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-function">DynamicJsonDocument <span class="hljs-title">doc</span><span class="hljs-params">(<span class="hljs-number">1024</span>)</span></span>;
<span class="hljs-comment">// or</span>
StaticJsonDocument&lt;<span class="hljs-number">1024</span>&gt; doc;
</code></pre>
<p>Please use the <a href="/v6/assistant/">ArduinoJson Assistant</a> to find the right capacity for your application.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Using a `DynamicJsonDocument`/`StaticJsonDocument` solves the issue"},{id:"failure",page:1,label:"No",summary:"Using a `DynamicJsonDocument`/`StaticJsonDocument` doesn't solve the issue"}]},{content:`<p>This is a bug in some Arduino cores, most notably the one for <a href="https://en.wikipedia.org/wiki/Atmel_ARM-based_processors#SAM_D">SAMD21</a>.</p>
<p>You can workaround this bug by defining both <code>ARDUINOJSON_ENABLE_STD_STRING</code> and <code>ARDUINOJSON_ENABLE_STD_STREAM</code> to <code>0</code>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-meta">#<span class="hljs-keyword">define</span> ARDUINOJSON_ENABLE_STD_STRING 0</span>
<span class="hljs-meta">#<span class="hljs-keyword">define</span> ARDUINOJSON_ENABLE_STD_STREAM 0</span>
<span class="hljs-meta">#<span class="hljs-keyword">include</span> <span class="hljs-string">&lt;ArduinoJson.h&gt;</span></span>
</code></pre>
<p>You can find more information on this error here: <a href="/v6/error/macro-min-passed-3-arguments-but-takes-just-2/">macro &quot;min&quot; passed 3 arguments, but takes just 2</a></p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Defining `ARDUINOJSON_ENABLE_STD_STRING` and `ARDUINOJSON_ENABLE_STD_STREAM` to `0` solves the issue"},{id:"failure",page:1,label:"No",summary:"Defining `ARDUINOJSON_ENABLE_STD_STRING` and `ARDUINOJSON_ENABLE_STD_STREAM` to `0` doesn't solve the issue"}]},{content:`<p>Which error is it?</p>
`,options:[{id:"basicjsondocument",page:63,label:"no matching function for call to <code>BasicJsonDocument::BasicJsonDocument()</code>",summary:'Error says "no matching function for call to `BasicJsonDocument::BasicJsonDocument()`"'},{id:"converttojson",page:64,label:"no matching function for call to <code>convertToJson(...)</code>",summary:'Error says "no matching function for call to `convertToJson(...)`"'},{id:"deserializejson",page:65,label:"no matching function for call to <code>deserializeJson(StaticJsonDocument&lt;200&gt; (&amp;)(), ...)</code>",summary:'Error says "no matching function for call to `deserializeJson(StaticJsonDocument<200> (&)(), ...)`"'},{id:"unresolved-overloaded-function-type",page:67,label:"no matching function for call to <code>...(&lt;unresolved overloaded function type&gt;)</code>",summary:'Error says "no matching function for call to `...(<unresolved overloaded function type>)`"'},{id:"add-jsonarray",page:59,label:"no matching function for call to <code>...add&lt;JsonArray&gt;()</code>",summary:'Error says "no matching function for call to `...add<JsonArray>()`"'},{id:"add-jsonobject",page:60,label:"no matching function for call to <code>...add&lt;JsonObject&gt;()</code>",summary:'Error says "no matching function for call to `...add<JsonObject>()`"'},{id:"as-char",page:62,label:"no matching function for call to <code>...as&lt;char&gt;() const</code>",summary:'Error says "no matching function for call to `...as<char>()` const"'},{id:"as-char-ptr",page:61,label:"no matching function for call to <code>...as&lt;char*&gt;() const</code>",summary:'Error says "no matching function for call to `...as<char*>()` const"'},{id:"is-char-ptr",page:66,label:"no matching function for call to <code>...is&lt;char*&gt;() const</code>",summary:'Error says "no matching function for call to `...is<char*>()` const"'},{id:"not-in-list",page:3,label:"None of the above",summary:"The error is not in the list"}]},{content:`<p><code>add&lt;JsonArray&gt;()</code> is the new syntax introduced in ArduinoJson 7 to replace <code>createNestedArray()</code>.
It's not available in ArduinoJson 6.</p>
<p>To fix this error, you must replace <code>add&lt;JsonArray&gt;()</code> with <code>createNestedArray()</code>, like so:</p>
<pre><code class="hljs language-diff"><span class="hljs-deletion">- JsonArray childArray = parentArray.add&lt;JsonArray&gt;();</span>
<span class="hljs-addition">+ JsonArray childArray = parentArray.createNestedArray();</span>
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Replacing `add<JsonArray>()` with `createNestedArray()` fixes the issue"},{id:"failure",page:1,label:"No",summary:"Replacing `add<JsonArray>()` with `createNestedArray()` doesn't fix the issue"}]},{content:`<p><code>add&lt;JsonObject&gt;()</code> is the new syntax introduced in ArduinoJson 7 to replace <code>createNestedObject()</code>.
It's not available in ArduinoJson 6.</p>
<p>To fix this error, you must replace <code>add&lt;JsonObject&gt;()</code> with <code>createNestedObject()</code>, like so:</p>
<pre><code class="hljs language-diff"><span class="hljs-deletion">- JsonObject object = array.add&lt;JsonObject&gt;();</span>
<span class="hljs-addition">+ JsonObject object = array.createNestedObject();</span>
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Replacing `add<JsonObject>()` with `createNestedObject()` fixes the issue"},{id:"failure",page:1,label:"No",summary:"Replacing `add<JsonObject>()` with `createNestedObject()` doesn't fix the issue"}]},{content:`<p>This error happens when you write the following:</p>
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
`,options:[{id:"success",page:2,label:"Yes",summary:"Replacing `char*` with `const char*` fixes the issue"},{id:"failure",page:1,label:"No",summary:"Replacing `char*` with `const char*` doesn't fix the issue"}]},{content:`<p>This error happens when you write the following:</p>
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
`,options:[{id:"success",page:2,label:"Yes",summary:"Replacing `char` with `int8_t` fixes the issue"},{id:"failure",page:1,label:"No",summary:"Replacing `char` with `int8_t` doesn't fix the issue"}]},{content:`<p>This error occurs when you forget to pass the capacity to the constructor of <code>DynamicJsonDocument</code>, like so:</p>
<pre><code class="hljs language-c++">DynamicJsonDocument doc;
</code></pre>
<p>Instead, you need to specify the capacity of the memory pool, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-function">DynamicJsonDocument <span class="hljs-title">doc</span><span class="hljs-params">(<span class="hljs-number">2048</span>)</span></span>;
</code></pre>
<p>As usual, you can use the <a href="/v6/assistant/">ArduinoJson Assistant</a> to compute the right capacity for your project.</p>
<p>For more information, please read <a href="/v6/error/no-matching-function-for-call-to-basicjsondocument-basicjsondocument/">no matching function for call to 'BasicJsonDocument::BasicJsonDocument()'</a>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Passing the capacity to the constructor fixes the issue"},{id:"failure",page:1,label:"No",summary:"Passing the capacity to the constructor doesn't fix the issue"}]},{content:`<p>This error occurs when you try to insert an unsupported value type in a <code>JsonDocument</code>.</p>
<p>To fix this error, you must either:</p>
<ul>
<li>change the type of value to a supported one (<code>const char*</code>, <code>int</code>, <code>float</code>, etc.)</li>
<li>write a <a href="/news/2021/05/04/version-6-18-0/">custom converter</a> for this type</li>
</ul>
<p>For more information, see <a href="/v6/error/no-matching-function-for-call-to-converttojson/">error: no matching function for call to 'convertToJson(...)'</a>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Converting the value fixes the issue"},{id:"failure",page:1,label:"No",summary:"Converting the value doesn't fix the issue"}]},{content:`<p>This error happens when you write the following:</p>
<pre><code class="hljs language-c++"><span class="hljs-function">StaticJsonDocument&lt;200&gt; <span class="hljs-title">doc</span><span class="hljs-params">()</span></span>;
<span class="hljs-built_in">deserializeJson</span>(doc, input);
</code></pre>
<p>Indeed, the first line doesn't declare a <code>StaticJsonDocument&lt;200&gt;</code> but a function that takes no argument and returns a <code>StaticJsonDocument&lt;200&gt;</code>. This is one of the most common pitfalls in C++ and it's called the <a href="https://en.wikipedia.org/wiki/Most_vexing_parse">Most vexing parse</a>.</p>
<p>To fix this program, you must remove the parentheses, like so:</p>
<pre><code class="hljs language-c++">StaticJsonDocument&lt;<span class="hljs-number">200</span>&gt; doc;
<span class="hljs-built_in">deserializeJson</span>(doc, input);
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:`It's the "Most vexing parse"`},{id:"failure",page:1,label:"No",summary:`It's not the "Most vexing parse"`}]},{content:`<p>This error happens when you write the following:</p>
<pre><code class="hljs language-c++"><span class="hljs-keyword">if</span> (doc[<span class="hljs-string">&quot;key&quot;</span>].<span class="hljs-built_in">is</span>&lt;<span class="hljs-type">char</span>*&gt;())
</code></pre>
<p>Indeed, support for <code>char*</code> was deprecated in <a href="/news/2021/05/04/version-6-18-0/">6.18</a> and removed in <a href="/news/2022/12/26/arduinojson-6-20-0/">6.20</a>.</p>
<p>To fix this error, you must replace <code>char*</code> with <code>const char*</code>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-keyword">if</span> (doc[<span class="hljs-string">&quot;key&quot;</span>].<span class="hljs-built_in">is</span>&lt;<span class="hljs-type">const</span> <span class="hljs-type">char</span>*&gt;())
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Replacing `char*` with `const char*` fixes the issue"},{id:"failure",page:1,label:"No",summary:"Replacing `char*` with `const char*` doesn't fix the issue"}]},{content:`<p>We typically see this error when your program does somethink like this:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">print</span>(doc[<span class="hljs-string">&quot;value&quot;</span>].as&lt;<span class="hljs-type">int</span>&gt;);
</code></pre>
<p>In this case, the compiler produces the following error:</p>
<pre><code class="hljs language-text">no matching function for call to &#x27;HardwareSerial::print(&lt;unresolved overloaded function type&gt;)&#x27;
</code></pre>
<p>This error occurs because <code>as&lt;int&gt;()</code> is a function, so you must call it by appending parenthesis like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">print</span>(doc[<span class="hljs-string">&quot;value&quot;</span>].<span class="hljs-built_in">as</span>&lt;<span class="hljs-type">int</span>&gt;());
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Adding the parentheses fixes the issue"},{id:"failure",page:1,label:"No",summary:"Adding the parentheses doesn't fix the issue"}]},{content:`<p>This error occurs when you pass an invalid input type to <code>deserializeJson()</code>.</p>
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
<p>Please double-check that you called <code>deserializeJson()</code> with the right arguments.</p>
<p>If you do want to read from an unsupported input type (like <code>Input</code> in the example above), you must implement <code>read()</code> and <code>readBytes()</code> in this class or an <a href="https://en.wikipedia.org/wiki/Adapter_pattern">adapter class</a>.
Please see <a href="/v6/api/json/deserializejson/#custom-reader">custom readers</a> for more details.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Passing a supported input type to `deserializeJson()` fixed the issue"},{id:"failure",page:1,label:"No",summary:"Passing a supported input type to `deserializeJson()` didn't fix the issue"}]},{content:`<p>Please open the file where this error occurs.</p>
<p>Which header does this file includes?</p>
`,options:[{id:"arduinojson-h",page:1,label:"<code>ArduinoJson.h</code>",summary:"The file includes `ArduinoJson.h`"},{id:"arduinojson-hpp",page:70,label:"<code>ArduinoJson.hpp</code>",summary:"The file includes `ArduinoJson.hpp`"},{id:"none",page:71,label:"None of the above",summary:"The file includes neither `ArduinoJson.h` nor  `ArduinoJson.hpp`"}]},{content:`<p>Unlike <code>ArduinoJson.h</code>, <code>ArduinoJson.hpp</code> keeps everything in the <code>ArduinoJson</code> namespace.</p>
<p>Please add the following statement after the <code>#include</code> statements:</p>
<pre><code class="hljs language-c++"><span class="hljs-keyword">using</span> <span class="hljs-keyword">namespace</span> ArduinoJson;
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Adding `using namespace ArduinoJson` fixes the issue"},{id:"failure",page:1,label:"No",summary:"Adding `using namespace ArduinoJson`doesn't fix the issue"}]},{content:`<p>Please add the following line at the top of your program:</p>
<pre><code class="hljs language-c++"><span class="hljs-meta">#<span class="hljs-keyword">include</span> <span class="hljs-string">&lt;ArduinoJson.h&gt;</span></span>
</code></pre>
<p>Did this fix your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Including `ArduinoJson.h` fixes the issue"},{id:"failure",page:1,label:"No",summary:"Including `ArduinoJson.h` doesn't fix the issue"}]},{content:`<p>This error comes from a bug in the <a href="https://github.com/arduino/ArduinoCore-API">Arduino Core API</a> (or <code>Arduino.h</code>, if you prefer).
This bug was fixed by <a href="https://github.com/arduino/ArduinoCore-API/pull/118">arduino/ArduinoCore-API#118</a> in October 2020, but the fix wasn't immediately propagated to derived projects.</p>
<p>First, make sure that every related piece of software is up-to-date.
Then, if the problem persists, please open an issue in the relevant project and mention <a href="https://github.com/arduino/ArduinoCore-API/pull/118">arduino/ArduinoCore-API#118</a> in the description.</p>
<p>As a workaround, you can disable support for <a href="https://www.arduino.cc/reference/en/language/variables/utilities/progmem/"><code>PROGMEM</code></a> in ArduinoJson (your board doesn't support it anyway) by setting ARDUINOJSON_ENABLE_PROGMEM to <code>0</code>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-meta">#<span class="hljs-keyword">define</span> ARDUINOJSON_ENABLE_PROGMEM 0</span>
<span class="hljs-meta">#<span class="hljs-keyword">include</span> <span class="hljs-string">&lt;ArduinoJson.h&gt;</span></span>
</code></pre>
<p>Did this fix your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Defining `ARDUINOJSON_ENABLE_PROGMEM` to `0` solves the issue"},{id:"failure",page:1,label:"No",summary:"Defining `ARDUINOJSON_ENABLE_PROGMEM` to `0` doesn't solve the issue"}]},{content:`<p>In your program, there is a line that look like this:</p>
<pre><code class="hljs language-c++">JsonObject&amp; obj = doc[<span class="hljs-string">&quot;key&quot;</span>].<span class="hljs-built_in">as</span>&lt;JsonObject&gt;();
</code></pre>
<p>This line produces the following compilation error:</p>
<pre><code class="hljs language-text">cannot bind non-const lvalue reference of type &#x27;ArduinoJson::JsonObject&amp;&#x27; {aka &#x27;ArduinoJson6185_91::ObjectRef&amp;&#x27;} to an rvalue of type &#x27;ArduinoJson6185_91::enable_if&lt;true, ArduinJson6185_91::ObjectRef&gt;::type&#x27; {aka &#x27;ArduinoJson6185_91::ObjectRef&#x27;}
</code></pre>
<p>In other words, &quot;cannot assign <code>JsonObject</code> to <code>JsonObject&amp;</code>&quot;.
The compiler refuses to save a reference to a temporary variable because the reference would inevitably dangle.</p>
<p>To fix this issue, you must remove the ampersand (<code>&amp;</code>) after <code>JsonObject</code>, like so:</p>
<pre><code class="hljs language-c++">JsonObject obj = doc[<span class="hljs-string">&quot;key&quot;</span>].<span class="hljs-built_in">as</span>&lt;JsonObject&gt;();
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Replacing `JsonObject&` with `JsonObject` fixes the issue"},{id:"failure",page:1,label:"No",summary:"Replacing `JsonObject&` with `JsonObject` doesn't fix the issue"}]},{content:`<p>This error occurs because you declared a <code>volatile</code> variable, but the member function you're trying to call is not qualified as <code>volatile</code>. In other words, the function is not meant to be called from a <code>volatile</code> instance.</p>
<p><code>JsonDocument</code> is not safe to use on concurrent threads, so its member cannot be qualified as <code>volatile</code>.</p>
<p>To work around this issue, you must remove the <code>volatile</code> qualifier and use a thread-safe synchronization mechanism. For example, you could push values into a <a href="https://www.freertos.org/Embedded-RTOS-Queues.html">FreeRTOS queue</a> and pull them from the main thread.</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Using a queue solves the issue."},{id:"failure",page:1,label:"No",summary:"Cannot use a queue."}]},{content:`<p>This problem is not related to ArduinoJson, but it's a known issue on Windows.
It's frequent with ESP8266 and ESP32 but can happen with any device.</p>
<p>See:</p>
<ul>
<li><a href="https://github.com/espressif/arduino-esp32/issues/6593">espressif/arduino-esp32#6593</a></li>
<li><a href="https://github.com/bblanchon/ArduinoJson/issues/1871">bblanchon/ArduinoJson#1871</a></li>
</ul>
<p>The problem comes from the file path that is too long for the Windows API.</p>
<p>The solution is to reinstall Arduino (or the toolchain) in another location with a shorter path.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Shortening the path fixes the issue"},{id:"failure",page:1,label:"No",summary:"Shortening the path doesn't fix the issue"}]},{content:`<p>This error usually occurs when you pass a <code>JsonVariant</code> to <a href="https://www.arduino.cc/reference/en/language/functions/communication/serial/print/"><code>Serial::print()</code></a> or <a href="https://www.arduino.cc/reference/en/language/functions/communication/serial/println/"><code>Serial::print()</code></a>.</p>
<p>To fix it, you need to explicitly cast the <code>JsonVariant</code> to a type supported by <a href="https://www.arduino.cc/reference/en/language/functions/communication/serial/print/"><code>Serial::print()</code></a>, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">print</span>(doc[<span class="hljs-string">&quot;event&quot;</span>].<span class="hljs-built_in">as</span>&lt;<span class="hljs-type">const</span> <span class="hljs-type">char</span>*&gt;());
</code></pre>
<p><code>JsonVariant</code> must contain (or more exactly &quot;point to&quot;) a value of the specified type; otherwise, you'll get a default value, like <code>NULL</code> or <code>0</code>. If you want to support any type of value, you must replace the call to <a href="https://www.arduino.cc/reference/en/language/functions/communication/serial/print/"><code>Serial::print()</code></a> with a call to <code>serializeJson()</code>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-built_in">serializeJson</span>(doc[<span class="hljs-string">&quot;event&quot;</span>], Serial);
</code></pre>
<p>You can find more information on this error here: <a href="/v6/error/call-of-overloaded-println-is-ambiguous/">call of overloaded 'println(...)' is ambiguous</a></p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Casting the value or using `serializeJson()` solves the issue"},{id:"failure",page:1,label:"No",summary:"Neither casting the value nor using `serializeJson()` solves the issue"}]},{content:`<p>Which error message matches best?</p>
`,options:[{id:"read",page:78,label:"request for member <code>read</code> in ...",summary:'Error says "request for member `read` in ...'},{id:"write",page:82,label:"request for member <code>write</code> in ...",summary:'Error says "request for member `write` in ...'},{id:"not-in-list",page:3,label:"None of the above",summary:"The error is not in the list"}]},{content:`<p>Look carefully at the error message, does it contain one of the following phrases?</p>
`,options:[{id:"arduino-string-ptr",page:81,label:"which is of pointer type <code>arduino::String*</code>",summary:'Error says "which is of pointer type `arduino::String*`"'},{id:"std-string-ptr",page:80,label:"which is of pointer type <code>std::__cxx11::basic_string&lt;char&gt;*</code>",summary:'Error says "which is of pointer type `std::__cxx11::basic_string<char>*`"'},{id:"string-ptr",page:81,label:"which is of pointer type <code>String*</code>",summary:'Error says "which is of pointer type `String*`"'},{id:"not-in-list",page:79,label:"None of the above",summary:"The error is not in the list"}]},{content:`<p>This error occurs when you pass a an unsupported type as the second parameter of <code>deserializeJson()</code>.
The following types are supported:</p>
<ul>
<li><code>const char*</code></li>
<li><code>String</code></li>
<li><code>Stream</code></li>
<li><code>std::string</code></li>
<li><code>std::string_view</code></li>
<li><code>std::istream</code></li>
</ul>
<p>You can add support for other types by defining <a href="https://arduinojson.org/news/2019/11/01/version-6-13-0/#custom-reader">custom reader classes</a>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Changing the second argument of `deserializeJson()` fixes the issue"},{id:"failure",page:1,label:"No",summary:"Changing the second argument of `deserializeJson()` doesn't fix the issue"}]},{content:`<p>This error occurs when you pass a pointer to a <code>std::string</code> to <code>deserializeJson()</code>.
The solution is to pass the string by reference instead of by pointer:</p>
<pre><code class="hljs language-diff">  std::string input = &quot;{\\&quot;hello\\&quot;:\\&quot;world\\&quot;}&quot;;
<span class="hljs-deletion">- deserializeJson(doc, &amp;input);</span>
<span class="hljs-addition">+ deserializeJson(doc, input);</span>
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Passing the string by value fixes the issue"},{id:"failure",page:1,label:"No",summary:"Passing the string by value doesn't fix the issue"}]},{content:`<p>This error occurs when you pass a pointer to a <code>String</code> to <code>deserializeJson()</code>.
The solution is to pass the string by reference instead of by pointer:</p>
<pre><code class="hljs language-diff">  String input = &quot;{\\&quot;hello\\&quot;:\\&quot;world\\&quot;}&quot;;
<span class="hljs-deletion">- deserializeJson(doc, &amp;input);</span>
<span class="hljs-addition">+ deserializeJson(doc, input);</span>
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Passing the string by value fixes the issue"},{id:"failure",page:1,label:"No",summary:"Passing the string by value doesn't fix the issue"}]},{content:`<p>Look carefully at the error message, does it contain one of the following phrases?</p>
`,options:[{id:"char-ptr",page:83,label:"which is of non-class type <code>char*</code>",summary:'Error says "which is of non-class type `char*`"'},{id:"not-in-list",page:84,label:"None of the above",summary:"The error is not in the list"}]},{content:`<p>This error occurs when you pass a <code>char*</code> to <code>serializeJson()</code> but forget to pass the third argument.
For example:</p>
<pre><code class="hljs language-c++"><span class="hljs-built_in">serializeJson</span>(doc, ptr);  <span class="hljs-comment">// request for member &#x27;write&#x27; in ..., which is of non-class type &#x27;char*&#x27; </span>
</code></pre>
<p>To fix this error, you must pass the size of the destination buffer as the third argument, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-built_in">serializeJson</span>(doc, ptr, size);  <span class="hljs-comment">// OK</span>
</code></pre>
<p>In the examples, you may have seen that I didn't use the size argument; that's because the second argument was not a <code>char*</code> but a <code>char[N]</code>, and <code>serializeJson()</code> was able to infer the value of <code>N</code> from the type.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Passing the buffer size to `serializeJson()` fixed the issue"},{id:"failure",page:1,label:"No",summary:"Passing the buffer size to `serializeJson()` didn't fix the issue"}]},{content:`<p>This error occurs when you pass a an unsupported type as the second parameter of <code>serializeJson()</code>.
The following types are supported:</p>
<ul>
<li><code>char*</code></li>
<li><code>String</code></li>
<li><code>Print</code></li>
<li><code>std::string</code></li>
<li><code>std::ostream</code></li>
</ul>
<p>You can add support for other types by defining <a href="https://arduinojson.org/news/2019/11/01/version-6-13-0/#custom-writer">custom writer classes</a>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Changing the second argument of `serializeJson()` fixes the issue"},{id:"failure",page:1,label:"No",summary:"Changing the second argument of `serializeJson()` doesn't fix the issue"}]},{content:`<p>If you try to use ArduinoJson with a C compiler (or a C++ compiler targeting the C language), you'll get the following error message:</p>
<blockquote>
<p>ArduinoJson requires a C++ compiler, please change file extension to .cc or .cpp</p>
</blockquote>
<p>Most of the time, this happens because you gave the extension <code>.c</code> to your main source file.<br>
To fix this issue, you must rename the extension to <code>.cpp</code> so the compiler understands you want to target the C++ language.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Changing the file extension to `.cpp` fixes the error"},{id:"failure",page:1,label:"No",summary:"Changing the file extension to `.cpp` doesn't fix the error"}]},{content:`<p>Does your issue concern serialization or deserialization?</p>
`,options:[{id:"serialization",page:216,label:"Serialization",summary:"The issue concerns serialization"},{id:"deserialization",page:87,label:"Deserialization",summary:"The issue concerns deserialization"}]},{content:`<p>What is the value of <code>DeserializationError</code>?</p>
`,options:[{id:"ok",page:166,label:"<code>Ok</code>",summary:"`deserializeJson()` returns `Ok`"},{id:"emptyinput",page:102,label:"<code>EmptyInput</code>",summary:"`deserializeJson()` returns `EmptyInput`"},{id:"incompleteinput",page:117,label:"<code>IncompleteInput</code>",summary:"`deserializeJson()` returns `IncompleteInput`"},{id:"invalidinput",page:124,label:"<code>InvalidInput</code>",summary:"`deserializeJson()` returns `InvalidInput`"},{id:"nomemory",page:201,label:"<code>NoMemory</code>",summary:"`deserializeJson()` returns `NoMemory`"},{id:"notsupported",page:209,label:"<code>NotSupported</code>",summary:"`deserializeJson()` returns `NotSupported`"},{id:"toodeep",page:214,label:"<code>TooDeep</code>",summary:"`deserializeJson()` returns `TooDeep`"},{id:"crash",page:89,label:"I can't tell because the program crashes",summary:"The program crashes"},{id:"unknown",page:88,label:"I don't know what you're talking about",summary:"The program doesn't check the error"}]},{content:`<p><code>DeserializationError</code> is the return type of <code>deserializeJson()</code>. It tells whether the operation succeeded and indicates the cause of the error.</p>
<p>Modify your program to show the error code, like so:</p>
<pre><code class="hljs language-c++">DeserializationError error = <span class="hljs-built_in">deserializeJson</span>(doc, input);

Serial.<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;deserializeJson() returned &quot;</span>);
Serial.<span class="hljs-built_in">println</span>(error.<span class="hljs-built_in">c_str</span>());
</code></pre>
<p>Now, what does it show?</p>
`,options:[{id:"ok",page:166,label:"<code>Ok</code>",summary:"`deserializeJson()` returns `Ok`"},{id:"emptyinput",page:102,label:"<code>EmptyInput</code>",summary:"`deserializeJson()` returns `EmptyInput`"},{id:"incompleteinput",page:117,label:"<code>IncompleteInput</code>",summary:"`deserializeJson()` returns `IncompleteInput`"},{id:"invalidinput",page:124,label:"<code>InvalidInput</code>",summary:"`deserializeJson()` returns `InvalidInput`"},{id:"nomemory",page:201,label:"<code>NoMemory</code>",summary:"`deserializeJson()` returns `NoMemory`"},{id:"notsupported",page:209,label:"<code>NotSupported</code>",summary:"`deserializeJson()` returns `NotSupported`"},{id:"toodeep",page:214,label:"<code>TooDeep</code>",summary:"`deserializeJson()` returns `TooDeep`"},{id:"crash",page:89,label:"I can't tell because the program crashes",summary:"The program crashes"}]},{content:`<p>I need to know for sure if the program crashes before or after calling <code>deserializeJson()</code>.</p>
<p>Please add some traces around the call to <code>deserializeJson()</code> and make sure to flush the Serial buffer. You can use the <a href="https://github.com/bblanchon/ArduinoTrace">ArduinoTrace library</a>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-built_in">TRACE</span>();
DeserializationError err = <span class="hljs-built_in">deserializeJson</span>(doc, input);
<span class="hljs-built_in">TRACE</span>();
</code></pre>
<p>How many traces can you see in the Serial Monitor?</p>
`,options:[{id:"before",page:95,label:"None: program crashes before calling <code>deserializeJson()</code>",summary:"Program crashes before calling `deserializeJson()`"},{id:"inside",page:97,label:"Only one: program crashes inside <code>deserializeJson()</code>",summary:"Program crashes inside `deserializeJson()`"},{id:"after",page:90,label:"Two traces: program crashes after calling <code>deserializeJson()</code>",summary:"Program crashes after calling `deserializeJson()`"}]},{content:`<p>Sometimes, a program crashes after calling <code>deserializeJson()</code> because it keeps a pointer to a string stored in the <code>JsonDocument</code>.</p>
<p>Indeed, when <code>JsonDocument</code> returns a <code>const char*</code>, it doesn't return a copy of the string, but the address of the string in the memory pool. When the <code>JsonDocument</code> is destructed, the memory pool gets released and the pointer dangles. Later, when the program tries to use the string, it reads at an invalid memory location and crashes.</p>
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
`,options:[{id:"success",page:2,label:"Yes",summary:"Replacing pointer with a `String` solves the issue"},{id:"no-dangling-pointer",page:92,label:"No",summary:"Replacing pointer with a `String` doesn't solve the issue"}]},{content:`<p>As far as the standard is concerned, the behavior of <code>printf()</code>, <code>sprintf()</code>, and <code>snprintf()</code> is undefined if a <code>%s</code> refers to a null string.</p>
<p>The simplest solution is to change the default value returned by <code>JsonDocument</code>: instead of returning a null pointer when the value is missing, we can ask it to return an empty string (i.e., <code>&quot;&quot;</code>) or some other replacement (e.g., <code>&quot;&lt;null&gt;&quot;</code>). We can do that with <code>operator|</code>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// replace this:</span>
<span class="hljs-built_in">printf</span>(<span class="hljs-string">&quot;Event = %s\\n&quot;</span>, doc[<span class="hljs-string">&quot;event&quot;</span>]);

<span class="hljs-comment">// ...with this:</span>
<span class="hljs-built_in">printf</span>(<span class="hljs-string">&quot;Event = %s\\n&quot;</span>, doc[<span class="hljs-string">&quot;event&quot;</span>] | <span class="hljs-string">&quot;&lt;null&gt;&quot;</span>);
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Providing a non-null default solves the issue"},{id:"failure",page:1,label:"No",summary:"Providing a non-null default doesn't solve the issue"}]},{content:`<p>Most of the time, when a program crashes after <code>deserializeJson()</code>, it's because it dereferences a null pointer returned by the <code>JsonDocument</code>.</p>
<p>Here are the most common pitfalls:</p>
<pre><code class="hljs language-c++"><span class="hljs-keyword">if</span> (<span class="hljs-built_in">strcmp</span>(doc[<span class="hljs-string">&quot;key&quot;</span>], <span class="hljs-string">&quot;value&quot;</span>) == <span class="hljs-number">0</span>) {
  <span class="hljs-comment">// ...</span>
}

<span class="hljs-built_in">strcpy</span>(buffer, doc[<span class="hljs-string">&quot;key&quot;</span>]);

<span class="hljs-built_in">printf</span>(<span class="hljs-string">&quot;Value = %s\\n&quot;</span>, doc[<span class="hljs-string">&quot;key&quot;</span>])
<span class="hljs-built_in">sprintf</span>(buffer, <span class="hljs-string">&quot;Value = %s\\n&quot;</span>, doc[<span class="hljs-string">&quot;key&quot;</span>])
<span class="hljs-built_in">snprintf</span>(buffer, <span class="hljs-built_in">sizeof</span>(buffer), <span class="hljs-string">&quot;Value = %s\\n&quot;</span>, doc[<span class="hljs-string">&quot;key&quot;</span>])
</code></pre>
<p>For each of these lines, if <code>&quot;key&quot;</code> isn't in the <code>JsonDocument</code>, the program behavior is undefined and is very likely to crash.</p>
<p>Do you see something like this in your code?</p>
`,options:[{id:"strcmp",page:93,label:"Yes, there is a call to <code>strcmp()</code>",summary:"Program calls `strcmp()`"},{id:"strcpy",page:94,label:"Yes, there is a call to <code>strcpy()</code>",summary:"Program calls `strcpy()`"},{id:"printf",page:91,label:"Yes, there is a call to <code>printf()</code>, <code>sprintf()</code>, or <code>snprintf()</code>",summary:"Program calls `printf()`, `sprintf()`, or `snprintf()`"},{id:"no-usual-suspect",page:1,label:"No",summary:"Program calls neither `strcmp()`, nor `strcpy()`, not `printf()`"}]},{content:`<p>As per the standard, the behavior of <a href="https://en.cppreference.com/w/c/string/byte/strcmp"><code>strcmp()</code></a> is undefined if one of the two arguments is null.</p>
<p>That's not a problem for you because you don't need to call <a href="https://en.cppreference.com/w/c/string/byte/strcmp"><code>strcmp()</code></a>. Indeed, <code>JsonVariant</code> supports all comparisons operators (<code>==</code>, <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>), and these operators handle null values correctly.</p>
<p>Please replace calls to <a href="https://en.cppreference.com/w/c/string/byte/strcmp"><code>strcmp()</code></a> with <code>==</code>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// replace this:</span>
<span class="hljs-keyword">if</span> (<span class="hljs-built_in">strcmp</span>(doc[<span class="hljs-string">&quot;event&quot;</span>], <span class="hljs-string">&quot;wakeup&quot;</span>)) ...

<span class="hljs-comment">// ...with this:</span>
<span class="hljs-keyword">if</span> (doc[<span class="hljs-string">&quot;event&quot;</span>] == <span class="hljs-string">&quot;wakeup&quot;</span>) ...
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Replacing `strcmp()` with `==` solves the issue"},{id:"failure",page:1,label:"No",summary:"Replacing `strcmp()` with `==` doesn't solve the issue"}]},{content:`<p>As per the standard, the behavior of <a href="https://en.cppreference.com/w/c/string/byte/strcpy"><code>strcpy()</code></a> (and <a href="https://en.wikibooks.org/wiki/C_Programming/C_Reference/nonstandard/strlcpy"><code>strlcpy()</code></a>) is undefined if one of the pointers is null.</p>
<p>The simplest solution is to change the default value returned by <code>JsonDocument</code>: instead of returning a null pointer when the value is missing, we can ask it to return an empty string (i.e., <code>&quot;&quot;</code>) or some other replacement (e.g., <code>&quot;&lt;null&gt;&quot;</code>). We can do that with <code>operator|</code>.</p>
<p>Please provide a non-null default for all calls to <a href="https://en.cppreference.com/w/c/string/byte/strcpy"><code>strcpy()</code></a>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// replace this:</span>
<span class="hljs-built_in">strcpy</span>(eventName, doc[<span class="hljs-string">&quot;event&quot;</span>]);

<span class="hljs-comment">// ...with this:</span>
<span class="hljs-built_in">strcpy</span>(eventName, doc[<span class="hljs-string">&quot;event&quot;</span>] | <span class="hljs-string">&quot;&lt;null&gt;&quot;</span>);
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Providing a non-null default solves the issue"},{id:"failure",page:1,label:"No",summary:"Providing a non-null default doesn't solve the issue"}]},{content:`<p>A stack-overflow could cause the crash.</p>
<p>Do you use a <code>StaticJsonDocument</code>?</p>
`,options:[{id:"static",page:101,label:"Yes",summary:"Program uses `StaticJsonDocument`"},{id:"no-static",page:96,label:"No",summary:"Program doesn't use `StaticJsonDocument`"}]},{content:`<p>I still think this could be a stack-overflow.</p>
<p>Please check in your code if there aren't some large variable in the stack. Look for things like:</p>
<ul>
<li><code>char buffer[1024]</code></li>
<li><code>int matrix[64][64][64]</code></li>
<li><code>alloca(1024)</code></li>
</ul>
<p>If you read the JSON from a stream and place it in a buffer, you should instead pass the stream directly to <code>deserializeJson()</code>. This techniques uses less RAM because ArduioJson will only copy the required parts in the <code>DynamicJsonDocument</code> and ignore all the spaces and punctuation. Of course, you would need a bigger capacity: use the <a href="/v6/assistant/">ArduinoJson Assistant</a> to compute the right value.</p>
<p>If there are other large buffers, you can move them to the heap by using one of the following:</p>
<ul>
<li><a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a></li>
<li><a href="https://en.cppreference.com/w/cpp/container/vector"><code>std::vector</code></a></li>
<li><a href="https://en.cppreference.com/w/cpp/string/basic_string">\`std::string</a></li>
<li><a href="https://en.cppreference.com/w/cpp/memory/unique_ptr"><code>std::unique_ptr</code></a></li>
</ul>
<p>In the last resort, you can use <a href="https://en.cppreference.com/w/c/memory/malloc"><code>malloc()</code></a> and <a href="https://en.cppreference.com/w/c/memory/free"><code>free()</code></a>.</p>
<p>Does your program still crash?</p>
`,options:[{id:"failure",page:1,label:"Yes",summary:"Reducing stack usage doesn't prevent the crash"},{id:"success",page:2,label:"No",summary:"Reducing stack usage prevents the crash"}]},{content:`<p>Passing a dangling pointer could cause a crash.</p>
<p>If you pass a pointer to <code>deserializeJson()</code>, make sure that this pointer is still valid. For example, if the pointer is returned by a function, inspect the function to make sure pointer is not refering to a stack variable:</p>
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
<p>If you pass <a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a> to <code>deserializeJson()</code>, make sure you don't call <code>c_str()</code> in between:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// 💀 DON&#x27;T DO THAT!!!</span>
<span class="hljs-type">const</span> <span class="hljs-type">char</span>* input = <span class="hljs-built_in">readInput</span>().<span class="hljs-built_in">c_str</span>();

<span class="hljs-comment">// Possible workaround</span>
String input = <span class="hljs-built_in">readInput</span>();
</code></pre>
<p>Please review your code to make sure you're not passsing a dangling pointer to <code>deserializeJson()</code>.</p>
<p>Does your program still crash?</p>
`,options:[{id:"no-dangling-ptr",page:95,label:"Yes",summary:"Removing dangling pointers doesn't prevent the crash"},{id:"success",page:2,label:"No",summary:"Removing dangling pointers prevents the crash"}]},{content:`<p>Well, that's very bad news. It seems that your microcontroller doesn't have enough RAM to hold the JSON document.</p>
<p>Please read <a href="/v6/how-to/reduce-memory-usage/">How to reduce memory usage</a>; it shows several techniques that you can implement to use less RAM.
Hopefully, you'll make enough room for the memory pool.</p>
<p>If it still doesn't fit, you'll have to upgrade to a bigger microcontroller.</p>
`},{content:`<p>Good news!<br>
The memory allocation succeeds; the <code>DynamicJsonDocument</code> is simply too small, so you need to increase its capacity.</p>
<p>Use the <a href="/v6/assistant/">ArduinoJson Assistant</a> to compute the right capacity for your input.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Increasing the capacity fixes the issue"},{id:"failure",page:1,label:"No",summary:"Increasing the capacity doesn't fix the issue"}]},{content:`<p>It looks like the allocation failed.</p>
<p>Please print the capacity of the <code>DynamicJsonDocument</code> to the serial port, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(doc.<span class="hljs-built_in">capacity</span>());
</code></pre>
<p>What value does it show?</p>
`,options:[{id:"capacity-0",page:98,label:"<code>0</code>",summary:"`doc.capacity()` returns `0`"},{id:"capacity-ok",page:99,label:"The value passed to the constructor of <code>DynamicJsonDocument</code>",summary:"`doc.capacity()` returns the right value"}]},{content:`<p>A big <code>StaticJsonDocument</code> might indeed overflow the stack.
Even if there is a lot of free memory, you can run out of stack because many platforms limit the size at compile time.</p>
<p>For example, ESP8266 limits to 4096 and ESP32 limits to 8192.
These numbers might seem high, but huge part of the stack is already consumed by callers of your program. As a rule, I recommend never allocating a <code>StaticJsonDocument</code> bigger than the half of the limit (so max 2048 on ESP8266 and 4096 on ESP32). If you need more space in your <code>JsonDocument</code>, you need to use a <code>DynamicJsonDocument</code> instead.</p>
<p>Does switching to a <code>DynamicJsonDocument</code> prevent the crash?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Switching to `DynamicJsonDocument` prevents the crash"},{id:"nomemory",page:100,label:"Yes, but now <code>deserializeJson()</code> returns <code>NoMemory</code>",summary:"Switching to `DynamicJsonDocument` produces `NoMemory`"},{id:"dynamicjsondocument-too",page:96,label:"No",summary:"Switching to `DynamicJsonDocument` doesn't prevent the crash"}]},{content:`<p><code>EmptyInput</code> means that the input was empty or contained only spaces or comments.</p>
<p>Where does your JSON input come from?</p>
`,options:[{id:"http",page:109,label:"An HTTP response",summary:"Input comes from an HTTP response"},{id:"file",page:103,label:"A file",summary:"Input comes from a file"},{id:"serial",page:116,label:"A serial port",summary:"Input comes from a serial port"},{id:"other",page:114,label:"Something else",summary:"Input comes neither from an HTTP response, nor a file, nor a serial port"}]},{content:`<p><code>EmptyInput</code> in the context of a file usually means:</p>
<ul>
<li>the file is closed</li>
<li>the file is opened in the wrong mode</li>
<li>the file is empty</li>
<li>the current position is at the end of the file</li>
</ul>
<p>Please, make sure that the file is opened in &quot;read&quot; mode and try to print the content to make sure it's not empty.</p>
<p>You can find an example using the SD library in <a href="/v6/example/config/">JsonConfigFile.ino</a> and one using SPIFFS in <a href="/book/">Mastering ArduinoJson</a>.</p>
<p>Did this sole your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"The file was the problem"},{id:"failure",page:1,label:"No",summary:"The file is not the problem"}]},{content:`<p>We tried everything we could on the client side, so I'm starting to suspect an issue with the server.</p>
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
`,options:[{id:"success",page:2,label:"Yes",summary:"Following the redirection fixes the issue"},{id:"follow",page:110,label:"No",summary:"Following the redirection doesn't fix the issue"}]},{content:`<p>A negative number indicates an error on the client side.</p>
<p>With HTTPS, connection failures are often due to the certificate validation.</p>
<p>Please try to disable certificate validation by calling <a href="https://arduino-esp8266.readthedocs.io/en/latest/esp8266wifi/bearssl-client-secure-class.html#setinsecure"><code>WiFiClientSecure::setInsecure()</code></a> before starting the HTTP request.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"certificate-problem",page:106,label:"Yes",summary:"Calling `WiFiClientSecure::setInsecure()` solves the issue."},{id:"certificate-ok",page:105,label:"No",summary:"Calling `WiFiClientSecure::setInsecure()` doesn't solve the issue."}]},{content:`<p>Please check the HTTP status</p>
<p>For example, if you use <code>HTTPClient</code>, what value is returned by <code>http.GET()</code>?</p>
`,options:[{id:"redirect",page:107,label:"<code>300</code> to <code>399</code>",summary:"The status code indicates a redirection"},{id:"negative",page:108,label:"A negative number",summary:"The status code is negative"},{id:"status-ok",page:110,label:"None of the above",summary:"The status code is not in the list"}]},{content:`<p><code>EmptyInput</code> could be caused by a timeout while reading the response.</p>
<p>Please increase the value of the timeout by calling <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/streamsettimeout/"><code>Stream::setTimeout()</code></a> before calling <code>deserializeJson()</code>. For example:</p>
<pre><code class="hljs language-c++">client.<span class="hljs-built_in">setTimeout</span>(<span class="hljs-number">10000</span>);  <span class="hljs-comment">// 10 seconds</span>
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Increasing the timeout fixes the issue"},{id:"timeout-increased",page:104,label:"No",summary:"Increasing the timeout doesn't fix the issue"}]},{content:`<p>This confirms that the problem comes from the input: it is indeed empty, or at least starts with a NUL character.</p>
<p>You must now find a way to fix your input; I cannot help you with that. Sorry.</p>
`},{content:`<p>Please print the ASCII code for the first character, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(stream.<span class="hljs-built_in">peek</span>());
</code></pre>
<p>What do you see?</p>
`,options:[{id:"zero",page:111,label:"<code>0</code>",summary:"The first character is NUL"},{id:"non-zero",page:1,label:"Something else",summary:"The first character is not NUL"}]},{content:`<p>Please print the ASCII code for the first character, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>((<span class="hljs-type">int</span>)input[<span class="hljs-number">0</span>]);
</code></pre>
<p>What do you see?</p>
`,options:[{id:"zero",page:111,label:"<code>0</code>",summary:"The first character is NUL"},{id:"non-zero",page:1,label:"Something else",summary:"The first character is not NUL"}]},{content:`<p>The input is probably starting with a NUL character.</p>
<p>What type of input are you passing to <code>deserializeJson()</code>?</p>
`,options:[{id:"string",page:113,label:"A string (<code>const char*</code>, <code>String</code>, <code>std::string</code>...)",summary:"Input type is a string"},{id:"stream",page:112,label:"A stream (<code>Serial</code>, <code>WiFiClient</code>, <code>File</code>...)",summary:"Input type is a stream"}]},{content:`<p><code>deserializeJson()</code> also returns <code>EmptyInput</code> when the input contains only spaces.</p>
<p>For example, this can happen when you call <code>deserializeJson()</code> repeatedly and there are spaces (or line breaks) between the documents. Suppose you use the following program to parse JSON input from the serial port:</p>
<pre><code class="hljs language-c++"><span class="hljs-function"><span class="hljs-type">void</span> <span class="hljs-title">loop</span><span class="hljs-params">()</span> </span>{
  <span class="hljs-comment">// wait from an incoming message</span>
  <span class="hljs-keyword">while</span> (Serial.<span class="hljs-built_in">available</span>() == <span class="hljs-number">0</span>)
    <span class="hljs-built_in">delay</span>(<span class="hljs-number">100</span>);
    
  StaticJsonDocument&lt;<span class="hljs-number">1024</span>&gt; doc;
  DeserializationError err = <span class="hljs-built_in">deserializeJson</span>(doc, Serial);
  
  ...
}
</code></pre>
<p>If you use the default settings of the Arduino Serial Monitor, <code>err</code> will contains <code>Ok</code> and then <code>EmptyInput</code> each time you press &quot;Send&quot;.</p>
<p>Indeed, by default the Arduino Serial Monitor appends <a href="https://fr.wikipedia.org/wiki/Carriage_Return_Line_Feed">CRLF</a> at the end of the message, so when you enter <code>{&quot;hello&quot;:&quot;world&quot;}</code> in the input box, what is really sent is <code>{&quot;hello&quot;:&quot;world&quot;}\\r\\n</code>.
Since <code>deserializeJson()</code> stops reading immediately at the end of the object, the <code>\\r\\n</code> remains in the serial buffer.
Therefore, <a href="https://www.arduino.cc/reference/en/language/functions/communication/serial/available/"><code>Serial::available()</code></a> returns <code>2</code> and the program calls <code>deserializeJson()</code> again.
<code>deserializeJson()</code> reads <code>\\r\\n</code>, which are just white spaces for him, so it continues reading until a timeout occurs (1s by default), and it finally returns <code>EmptyInput</code>.</p>
<p>You can fix this problem by changing the configuration of the Serial Monitor to &quot;No line ending&quot;.
If you cannot remove the CR+LF at the end of the message, you must add a flush loop after <code>deserializeJson(doc, Serial)</code>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-keyword">while</span> (<span class="hljs-built_in">isspace</span>(Serial.<span class="hljs-built_in">peek</span>())
  Serial.<span class="hljs-built_in">read</span>();
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Removing CRLF fixes the issue"},{id:"failure",page:1,label:"No",summary:"Removing CRLF doesn't fix the issue"}]},{content:`<p><code>EmptyInput</code> can be caused by a timeout while waiting for the input.</p>
<p>In that case, the solution is to wait until some data is available before calling <code>deserializeJson()</code>. A simple loop can do the trick:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// wait from an incoming message</span>
<span class="hljs-keyword">while</span> (Serial.<span class="hljs-built_in">available</span>() == <span class="hljs-number">0</span>)
  <span class="hljs-built_in">delay</span>(<span class="hljs-number">100</span>);

<span class="hljs-built_in">deserializeJson</span>(doc, Serial);
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Adding a wait loop fixes the issue"},{id:"available",page:115,label:"No",summary:"Adding a wait loop doesn't fix the issue"}]},{content:`<p><code>IncompleteInput</code> means that <code>deserializeJson()</code> managed to parse the beginning of the JSON document, but the end was missing.</p>
<p>What type of input do you pass to <code>deserializeJson()</code>?</p>
`,options:[{id:"stream",page:120,label:"A stream",summary:"Input comes from a stream"},{id:"string",page:121,label:"A string object (like <code>String</code>)",summary:"Input comes from a string object"},{id:"pointer",page:122,label:"A pointer (like <code>char*</code> or <code>const char*</code>)",summary:"Input comes from a pointer"}]},{content:`<p><code>IncompleteInput</code> can be caused by an interruped connection. For example, this problem happens when the client reads to slowly.</p>
<p>Indeed, because it reads bytes one by one, <code>deserializeJson()</code> can be slow with some implementations of <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/"><code>Stream</code></a>. To speed up the reading, we must add a buffer between the <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/"><code>Stream</code></a> and <code>deserializeJson()</code>. The easiest way to do this is to use <code>ReadBufferingStream</code> from the <a href="https://github.com/bblanchon/ArduinoStreamUtils">StreamUtils library</a>:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// replace the following line:</span>
<span class="hljs-built_in">deserializeJson</span>(doc, stream);

<span class="hljs-comment">// with these two lines:</span>
<span class="hljs-function">ReadBufferingStream <span class="hljs-title">bufferedStream</span><span class="hljs-params">(stream, <span class="hljs-number">64</span>)</span></span>;
<span class="hljs-built_in">deserializeJson</span>(doc, bufferedStream);
</code></pre>
<p>Thanks to <code>ReadBufferingStream</code>, the program will read the input in chunks of 64 bytes, which will be much faster.
Hopefully, this will keep the connection opened till the end of the message.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Adding a buffer solves the issue"},{id:"same-with-buffer",page:119,label:"No",summary:"Adding a buffer doesn't solve the issue"}]},{content:`<p>Maybe seeing where the input stops will give you an idea of what's going wrong.</p>
<p>We can log the characters read by <code>deserializeJson()</code> by inserting a <code>ReadLoggingStream</code>, another class from the <a href="https://github.com/bblanchon/ArduinoStreamUtils">StreamUtils library</a>:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// replace the following line</span>
<span class="hljs-built_in">deserializeJson</span>(doc, wifiClient);

<span class="hljs-comment">// with these two lines:</span>
<span class="hljs-function">ReadLoggingStream <span class="hljs-title">loggingStream</span><span class="hljs-params">(stream, Serial)</span></span>;
<span class="hljs-built_in">deserializeJson</span>(doc, loggingStream);
</code></pre>
<p>Thanks to <code>ReadLoggingStream</code>, this program prints every character read by <code>deserializeJson()</code>. Therefore, you'll be able to see where the input stops; hopefully, this will give you a better understanding of the problem.</p>
<p>When using <code>ReadLoggingStream</code>, it's crucial that you configure the serial port with a very high baud rate; otherwise the log will slow down the reading process, which is a problem as I explained previously.</p>
<p>Did this information help you solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Logging helped fixing the issue"},{id:"failure",page:1,label:"No",summary:"Logging didn't help fixing the issue"}]},{content:`<p><code>IncompleteInput</code> can be caused by a timeout.</p>
<p>Please increase the value of the timeout by calling <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/streamsettimeout/"><code>Stream::setTimeout()</code></a> before calling <code>deserializeJson()</code>. For example:</p>
<pre><code class="hljs language-c++">stream.<span class="hljs-built_in">setTimeout</span>(<span class="hljs-number">10000</span>);  <span class="hljs-comment">// 10 seconds</span>
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Inreasing the timeout solves the issue"},{id:"timeout-increased",page:118,label:"No",summary:"Inreasing the timeout doesn't solve the issue"}]},{content:`<p>Please print the content of the string to the serial port, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(input);
</code></pre>
<p>You should see that the JSON document is truncated.
This can be caused by a lack of RAM: the string object failed to allocate a buffer large enough for the whole document.</p>
<p>This issue may come from <a href="https://cpp4arduino.com/2018/11/06/what-is-heap-fragmentation.html">heap fragmentation</a>.
Fixing this problem is very hard because it involve fixing the whole program, not just the JSON deserialization.</p>
<p>Yet, you can try to preallocate the buffer by calling <a href="https://www.arduino.cc/reference/en/language/variables/data-types/string/functions/reserve/"><code>String::reserve()</code></a> before loading the content of the input, like so:</p>
<pre><code class="hljs language-c++">input.<span class="hljs-built_in">reserve</span>(<span class="hljs-number">1024</span>);  <span class="hljs-comment">// adapt the value to the size of your input</span>
</code></pre>
<p>Hopefully, you'll be able to reserve a buffer large enough to store the whole string.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"0",page:2,label:"Yes",summary:"Calling `String::reserve()` solves the issue"},{id:"1",page:123,label:"No",summary:"Calling `String::reserve()` doesn't solve the issue"}]},{content:`<p>I'll assume that your input is stored in a buffer similar to this one:</p>
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
`,options:[{id:"0",page:2,label:"Yes",summary:"Increasing the buffer size solves the issue"},{id:"1",page:123,label:"No",summary:"Increasing the buffer size doesn't solve the issue"}]},{content:`<p>To reduce the memory usage, you should try to pass the source (file, connection, stream, etc) directly to <code>deserializeJson()</code>, either via the <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/"><code>Stream</code></a> interface or via a <a href="/news/2019/11/01/version-6-13-0/">custom reader</a>. This will avoid the need for an intermediate buffer.</p>
<p>As usual, make sure the capacity of the <code>JsonDocument</code> is adapted to your needs by using the <a href="/v6/assistant/">ArduinoJson Assistant</a></p>
<p>Additionaly, you can add a <a href="/news/2020/03/22/version-6-15-0/">filter</a> to remove all unneeded information from the <code>JsonDocument</code>.</p>
<p>You can see examples here:</p>
<ul>
<li><a href="/v6/example/config/">JsonConfigFile.ino</a></li>
<li><a href="/v6/example/http-client/">JsonHttpClient.ino</a></li>
<li><a href="/v6/doc/deserialization/">Deserialization tutorial</a></li>
<li><a href="/book/">Mastering ArduinoJson</a></li>
</ul>
<p>Did this solve your issue?</p>
`,options:[{id:"0",page:2,label:"Yes",summary:"Reading from stream fixes the issue"},{id:"1",page:1,label:"No",summary:"Reading from stream doesn't fix the issue"}]},{content:`<p>Where does the input come from?</p>
`,options:[{id:"http",page:133,label:"An HTTP response",summary:"Input comes from HTTP"},{id:"serial",page:160,label:"A serial port",summary:"Input comes from a serial port"},{id:"file",page:132,label:"A file",summary:"Input comes from a file"},{id:"stream",page:163,label:"A stream",summary:"Input comes from a stream"},{id:"string",page:165,label:"A string (like <code>String</code> or <code>const char*</code>)",summary:"Input comes from a string"},{id:"char-ptr",page:127,label:"A char array or pointer (like <code>char[]</code> or <code>char*</code>)",summary:"Input comes from a char array"}]},{content:`<p>If you must keep the two calls to <code>deserializeJson()</code>, you need to disable the zero-copy mode by passing a read-only input buffer. Casting the pointer will do the trick:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// replace this:</span>
<span class="hljs-built_in">deserializeJson</span>(doc, input, inputSize);

<span class="hljs-comment">// ...with this:</span>
<span class="hljs-built_in">deserializeJson</span>(doc, (<span class="hljs-type">const</span> <span class="hljs-type">char</span>*)input, inputSize);
</code></pre>
<p>Now that the zero-copy mode is disabled, you probably need a larger <code>JsonDocument</code>, so don't forget to update the capacity. As usual, use the <a href="/v6/assistant/">ArduinoJson Assistant</a> to compute the right capacity for your project.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Casting the pointer fixes the issue"},{id:"cast",page:165,label:"No",summary:"Casting the pointer doesn't fix the issue"}]},{content:`<p>When you pass a writeable buffer as the input of <code>deserializeJson()</code>, ArduinoJson uses the zero-copy mode. Instead of copying the strings from the input into the <code>JsonDocument</code>, it stores pointers to the input buffer.</p>
<p>While doing this, the parser modifies the input buffer to unescape special characters and add string terminator.
When <code>deserializeJson()</code> returns the input buffer doesn't contain a valid JSON document anymore.
For this reason, you cannot call <code>deserializeJson()</code> twice with the same input buffer (if the input is writable).</p>
<p>I don't see any reason for calling <code>deserializeJson()</code> twice with the same input, so I recommend that your remove the second call.</p>
<p>Can you avoid duplicate calls to <code>deserializeJson()</code>?</p>
`,options:[{id:"success",page:2,label:"Yes, and it fixes the issue",summary:"Removing the second call fixes the issue"},{id:"second-removed",page:165,label:"Yes, but it doesn't fix the issue",summary:"Removing the second call doesn't fix the issue"},{id:"cannot-remove",page:125,label:"No",summary:"The second call cannot be removed"}]},{content:`<p>Did you call <code>deserializeJson()</code> twice with the same input buffer?</p>
`,options:[{id:"two-calls",page:126,label:"Yes",summary:"Program calls `deserializeJson()` twice"},{id:"one-call",page:165,label:"No",summary:"Program doesn't call `deserializeJson()` twice"}]},{content:`<p>So, the JSON document is valid and not preceded by anything; yet, <code>deserializeJson()</code> returns <code>InvalidInput</code>.</p>
<p>Well... I'm out of idea :-(</p>
`,tags:["needs_assistance"]},{content:`<p><code>254</code> or <code>255</code> is the first byte of the UTF-16 <a href="https://en.wikipedia.org/wiki/Byte_order_mark">Byte Order Mark</a> (BOM). ArduinoJson doesn't support UTF-16; it only supports ASCII and UTF-8. As a workaround, we can ask the server to encode the response with UTF-8.</p>
<p>To do this, add the following header to the HTTP request:</p>
<pre><code class="hljs language-http"><span class="hljs-attribute">Accept</span><span class="hljs-punctuation">: </span>application/json;charset=utf-8
</code></pre>
<p>Did this solve your problem?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"`Accept: application/json;charset=utf-8` solves the issue"},{id:"failure",page:1,label:"No",summary:"`Accept: application/json;charset=utf-8` doesn't solve the issue"}]},{content:`<p><code>239</code> is the first by of the UTF-8 <a href="https://en.wikipedia.org/wiki/Byte_order_mark">Byte Order Mark</a> (BOM).</p>
<p>ArduinoJson doesn't skip the BOM, you need to do it in your program by adding the following lines <strong>before</strong> calling <code>deserializeJson()</code>:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// skip BOM</span>
stream.<span class="hljs-built_in">read</span>();  <span class="hljs-comment">// 0xEF</span>
stream.<span class="hljs-built_in">read</span>();  <span class="hljs-comment">// 0xBB</span>
stream.<span class="hljs-built_in">read</span>();  <span class="hljs-comment">// 0xBF</span>
</code></pre>
<p>Admitedly, this is quite hacky, so I recommend that you try to fix the server which should not include a BOM anyway.</p>
<p>Did this fix your problem?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Skipping the first 3 bytes solves the issue"},{id:"failure",page:1,label:"No",summary:"Skipping the first 3 bytes doesn't solve the issue"}]},{content:`<p>We must check that the JSON document is not preceded by a <a href="https://en.wikipedia.org/wiki/Byte_order_mark">Byte Order Mark</a> (BOM).</p>
<p>To do this, we'll peek at the first byte in the file and print the value to the serial port. Insert the following line <em>before</em> the call to <code>deserializeJson()</code>:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(file.<span class="hljs-built_in">peek</span>());
</code></pre>
<p>What value does it print?</p>
`,options:[{id:"utf8",page:130,label:"<code>239</code>",summary:"Input's first byte suggests a UTF-8 BOM"},{id:"utf16",page:129,label:"<code>254</code> or <code>255</code>",summary:"Input's first byte suggests a UTF-16 BOM"},{id:"no-bom",page:128,label:"Something else",summary:"Input's first byte doesn't suggest a BOM"}]},{content:`<p>We need to make sure that the JSON document is valid.
To do that, please print the input to the serial port, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">print</span>(file.<span class="hljs-built_in">readString</span>());
</code></pre>
<p>Then, copy the content and paste it in a JSON linter, like <a href="https://jsonlint.com/">jsonlint.com</a>.</p>
<p>Is the JSON document valid?</p>
`,options:[{id:"valid",page:131,label:"Yes",summary:"`jsonlint` says the document is valid"},{id:"invalid",page:149,label:"No",summary:"`jsonlint` says the document is invalid"}]},{content:`<p>Do you use an HTTP library?</p>
`,options:[{id:"httpclient",page:134,label:"Yes, I'm using <code>HTTPClient</code>",summary:"Program uses `HTTPClient`"},{id:"http-library",page:147,label:"Yes, but it's not <code>HTTPClient</code>",summary:"Program uses an unknown HTTP library"},{id:"no-library",page:143,label:"No",summary:"Program doesn't use an HTTP library"}]},{content:`<p>Did you check the status code?</p>
`,options:[{id:"status-ok",page:136,label:"Yes",summary:"The program already checks the status code"},{id:"check-status",page:135,label:"No",summary:"The program doesn't check the status code"}]},{content:`<p>Please check the status code like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-type">int</span> status = http.<span class="hljs-built_in">GET</span>();

Serial.<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Status code = &quot;</span>);
Serial.<span class="hljs-built_in">println</span>(status);
</code></pre>
<p>What do you get?</p>
`,options:[{id:"ok",page:136,label:"<code>200</code>",summary:"The status code is `200`"},{id:"positive",page:139,label:"A positive number (but not <code>200</code>)",summary:"The status code is positive"},{id:"negative",page:138,label:"A negative number",summary:"The status code is negative"}]},{content:`<p>Which function of <code>HTTPClient</code> do you call to get the response?</p>
`,options:[{id:"getstream",page:142,label:"<code>getStream()</code>",summary:"Response comes from `HTTPClient::getStream()`"},{id:"getstring",page:165,label:"<code>getString()</code>",summary:"Response comes from `HTTPClient::getString()`"},{id:"readstring",page:137,label:"<code>readString()</code>",summary:"Response comes from `HTTPClient::readString()`"}]},{content:`<p>You're calling the wrong function:</p>
<ul>
<li><code>HTTPClient::getString()</code> extracts the response's body</li>
<li><code>HTTPClient::readString()</code> is inherited from <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/"><code>Stream</code></a> and reads the complete response</li>
</ul>
<p>Unless you have very good reasons, you should call <code>getString()</code> not <code>readString()</code>.</p>
<p>Do calling <code>HTTPClient::getString()</code> solves your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Calling `HTTPClient::getString()` solves the issue"},{id:"getstring",page:165,label:"No",summary:"Calling `HTTPClient::getString()` doesn't solves the issue"}]},{content:`<p>A negative number indicates an error on the client side.</p>
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
`,options:[{id:"success",page:2,label:"Yes",summary:"Calling `HTTPClient::useHTTP10(true)` solves the issue"},{id:"changed",page:141,label:"No",summary:"Calling `HTTPClient::useHTTP10(true)` doesn't solve the issue"}]},{content:`<p>We need to make sure that the JSON document is valid.
To do that, please print the content of the response to the serial port like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">print</span>(http.<span class="hljs-built_in">getStream</span>().<span class="hljs-built_in">readString</span>());
</code></pre>
<p>Then, copy the response and paste it in a JSON linter, like <a href="https://jsonlint.com/">jsonlint.com</a>.</p>
<p>Is the JSON document valid?</p>
`,options:[{id:"valid",page:161,label:"Yes",summary:"jsonlint says the document is valid"},{id:"invalid",page:149,label:"No",summary:"jsonlint says the document is invalid"}]},{content:`<p>Did you call <code>HTTPClient::useHTTP10(true)</code>?</p>
`,options:[{id:"http10-true",page:141,label:"Yes",summary:"Program calls `HTTPClient::useHTTP10(true)`"},{id:"http10-false",page:140,label:"No",summary:"Program doesn't call `HTTPClient::useHTTP10(true)`"}]},{content:`<p>Before calling <code>deserializeJson()</code>, did you skip the HTTP headers?</p>
`,options:[{id:"headers-skipped",page:146,label:"Yes",summary:"HTTP headers are skipped"},{id:"headers-not-skipped",page:145,label:"No",summary:"HTTP headers are not skipped"}]},{content:`<p>On some Arduino core (most notably <a href="https://github.com/arduino/ArduinoCore-avr/blob/master/cores/arduino/Stream.h">AVR core</a>), <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/streamfind/"><code>Stream::find()</code></a> takes a <code>char*</code> instead of a <code>const char*</code>. In this case, you'll get a compiler warning, which you can fix by extracting a char array, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-type">char</span> endOfHeaders[] = <span class="hljs-string">&quot;\\r\\n\\r\\n&quot;</span>;
client.<span class="hljs-built_in">find</span>(endOfHeaders);
</code></pre>
<p>Did this fix your problem?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Using a `char[]` fixes the warning"},{id:"failure",page:1,label:"No",summary:"Using a `char[]` doesn't fix the warning"}]},{content:`<p>Just like the HTTP request, the response contains some headers, followed by an empty line, and then followed by the body.
The body is the part that contains the JSON document; therefore, before calling <code>deserializeJson()</code>, you must skip the headers.</p>
<p>To skip the headers, call <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/streamfind/"><code>Stream::find()</code></a>, like so:</p>
<pre><code class="hljs language-c++">client.<span class="hljs-built_in">find</span>(<span class="hljs-string">&quot;\\r\\n\\r\\n&quot;</span>);
</code></pre>
<p>This function consumes the input stream until it finds the empty line (<code>\\r\\n\\r\\n</code>).</p>
<p>See the example <a href="/v6/example/http-client/">JsonHttpClient.ino</a> for a complete implementation.</p>
<p>Did this fix your problem?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Skipping HTTP headers solves the issue"},{id:"warning",page:144,label:"Yes, but there is a compiler warning about <code>client.find()</code>",summary:"Skipping HTTP headers solves the issue, but there is a warning"},{id:"header-skipped",page:146,label:"No",summary:"Skipping HTTP headers doesn't solve the issue"}]},{content:`<p>When you use HTTP 1.1, the server can send the response with <a href="https://en.wikipedia.org/wiki/Chunked_transfer_encoding">Chunked Transfer Encoding</a>.
As a result, the response's body may contain some hexadecimal number at the begining of each chunk.
The most straightforward workaround is to downgrade the connection to HTTP 1.0.</p>
<p>To do this, replace <code>HTTP/1.1</code> with <code>HTTP/1.0</code> in the first line of the request.</p>
<p>Did this solve your problem?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Using `HTTP/1.0` solves the issue"},{id:"http10",page:148,label:"No",summary:"Using `HTTP/1.0` doesn't solve the issue"}]},{content:`<p>Unfortunately, I only know how to use the following HTTP libraries:</p>
<ul>
<li><a href="https://github.com/esp8266/Arduino/tree/master/libraries/ESP8266HTTPClient">ESP8266HTTPClient</a></li>
<li><a href="https://github.com/espressif/arduino-esp32/tree/master/libraries/HTTPClient">HTTPClient for ESP32</a></li>
</ul>
`,tags:["needs_assistance"]},{content:`<p>What's the type of the input that you pass to <code>deserializeJson()</code>?</p>
`,options:[{id:"stream",page:161,label:"A stream",summary:"The input is a stream"},{id:"string",page:164,label:"A string",summary:"The input is a string"}]},{content:`<p>What is wrong with this JSON document?</p>
`,options:[{id:"comments",page:150,label:"It contains comments",summary:"The document contains comments"},{id:"other-error",page:151,label:"Something else",summary:"The document doesn't contain comments"}]},{content:`<p><code>deserializeJson()</code> can read JSON documents that contain comments, but the support is disabled by default to reduce the footprint of the library.</p>
<p>To enable the support for comments, define <code>ARDUINOJSON_ENABLE_COMMENTS</code> to <code>1</code> before including <code>ArduinoJson.h</code>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-meta">#<span class="hljs-keyword">define</span> ARDUINOJSON_ENABLE_COMMENTS 1</span>
<span class="hljs-meta">#<span class="hljs-keyword">include</span> <span class="hljs-string">&lt;ArduinoJson.h&gt;</span></span>
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Setting ARDUINOJSON_ENABLE_COMMENTS to 1 solves the issue"},{id:"failure",page:1,label:"No",summary:"Setting ARDUINOJSON_ENABLE_COMMENTS to 1 doesn't solve the issue"}]},{content:`<p>Well, if the JSON document is invalid, you have to fix it, otherwise ArduinoJson won't be able to parse it.</p>
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
`,options:[{id:"success",page:2,label:"Yes",summary:"Increasing serial buffer size solves the issue"},{id:"larger-buffer",page:161,label:"No",summary:"Increasing serial buffer size doesn't solves the issue"}]},{content:`<p>Any electric wire acts as an antenna; the longer the wire, the stronger the effect. This antenna picks up every electromagnetic field in the environment, which induces a current in the wire. On long wires, this current is strong enough to introduce errors in the communication.</p>
<p>Reducing the length of the cable certainly improve the error ratio, but is rarely applicable.
We can, however, improve the quality of the cable.
For example, you can replace the wires with a coaxial cable: the shielding will prevent the inner wire from acting as an antenna.</p>
<p>Please upgrade or shorten your cable.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Upgrading the cables solves the issue"},{id:"improved",page:155,label:"Somehow",summary:"Upgrading the cables improves the situation"},{id:"no-improvment",page:156,label:"No",summary:"Upgrading the cables doesn't solve the issue"}]},{content:`<p><code>deserializeJson()</code> may return <code>InvalidInput</code> because it starts reading the input mid-stream.</p>
<p>For example, it can happen if your program calls <code>deserializeJson()</code> in a loop like so:</p>
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
<p>The problem with this program is that, if <code>deserializeJson()</code> returns an error (such as <code>NoMemory</code>), any subsequent call to <code>deserializeJson()</code> will return <code>InvalidInput</code>. Indeed, <code>deserializeJson()</code> stops reading as soon as it encounters an error, so the remainder of the document is still in the serial buffer.</p>
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
`,options:[{id:"success",page:2,label:"Yes",summary:"Flushing the serial buffer fixes the issue"},{id:"flush",page:159,label:"No",summary:"Flushing the serial buffer doesn't fix the issue"}]},{content:`<p><a href="https://en.wikipedia.org/wiki/Error_correction_code">Error-correction codes (ECC)</a> are a way of transmitting the data with redundant information that allows the receiver to fix most of the errors.
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
`,options:[{id:"success",page:2,label:"Yes",summary:"Error-correction codes fix the issue"},{id:"ecc",page:156,label:"No",summary:"Error-correction codes doesn't fix the issue"}]},{content:`<p>We need to make sure that the JSON document is valid.
To do that, please print the input to the serial port, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">print</span>(Serial1.<span class="hljs-built_in">readString</span>());
</code></pre>
<p>Note that <a href="https://www.arduino.cc/reference/en/language/functions/communication/serial/readstring/"><code>Serial1.readString()</code></a> will wait for a timeout before returning, so the statement may appear frozen. Be patient.</p>
<p>Then, copy the response and paste it in a JSON linter, like <a href="https://jsonlint.com/">jsonlint.com</a>.</p>
<p>Is the JSON document valid?</p>
`,options:[{id:"valid",page:152,label:"Yes",summary:"`jsonlint` says the document is valid"},{id:"invalid",page:149,label:"No",summary:"`jsonlint` says the document is invalid"}]},{content:`<p>Any kind of communication is subject to errors: sometimes you send a <code>1</code> and receive a <code>0</code>.
The problem with the serial port is that there is no built-in way to fix these errors.
However, we can take some measures to reduce the error ratio to something acceptable.</p>
<p>The faster the communication, the higher the error ratio, so the first thing to try is to reduce the communication speed.
Please try to reduce the baud rate.</p>
<p class="short-warning">If your program receives from one port and logs to another one, <strong>make sure the latter runs at a much higher speed</strong>. Logging must be at least ten times faster, or it will slow down the receiving port, which may drop incoming bytes.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Reducing baud rate fixes the issue"},{id:"better",page:153,label:"Somehow",summary:"Reducing baud rate improves the situation"},{id:"not-better",page:156,label:"No",summary:"Reducing baud rate doesn't fix the issue"}]},{content:`<p>The <a href="https://en.wikipedia.org/wiki/AVR_microcontrollers">AVR</a> implementation of <a href="https://www.arduino.cc/en/Reference/SoftwareSerial"><code>SoftwareSerial</code></a> is <strong>notoriously unreliable</strong> 😱.
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
`,options:[{id:"success",page:2,label:"Yes",summary:"Removing `SoftwareSerial` solves the issue"},{id:"removed",page:159,label:"No",summary:"Removing `SoftwareSerial` doesn't solve the issue"}]},{content:`<p>Not all microcontrollers use the same voltage for the serial port.
Some use 5V logic; others use 3.3V.</p>
<p>For example, the Arduino UNO uses 5V whereas the ESP8266 uses 3.3V.</p>
<p>If you need to wire two devices with different voltages, you need a <a href="https://www.amazon.com/dp/B00NAY2BBY?tag=bblanchon0b-20">logic-level converter</a>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"The issue is a voltage mismatch"},{id:"voltage-ok",page:157,label:"No",summary:"The issue is not a voltage mismatch"}]},{content:`<p>Are you using <a href="https://www.arduino.cc/en/Reference/SoftwareSerial"><code>SoftwareSerial</code></a>?</p>
`,options:[{id:"software",page:158,label:"Yes",summary:"Program uses `SoftwareSerial`"},{id:"hardware",page:154,label:"No",summary:"Program doesn't use `SoftwareSerial`"}]},{content:`<p>We must check that the JSON document is not preceded by a  <a href="https://en.wikipedia.org/wiki/Byte_order_mark">Byte Order Mark</a> (BOM).</p>
<p>To do this, we'll peek at the first byte in the stream and print the value to the serial. Insert the following line before the call to <code>deserializeJson()</code>:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(stream.<span class="hljs-built_in">peek</span>());
</code></pre>
<p>What value does it print?</p>
`,options:[{id:"utf8",page:130,label:"<code>239</code>",summary:"Input's first byte suggests a UTF-8 BOM"},{id:"utf16",page:129,label:"<code>254</code> or <code>255</code>",summary:"Input's first byte suggests a UTF-16 BOM"},{id:"no-bom",page:128,label:"Something else",summary:"Input's first byte doesn't suggest a BOM"}]},{content:`<p>Sometimes, the input is invalid because some bytes were dropped when receiving the document.
Usually, this happens when the receiver reads the stream too slowly, which overflows a buffer somewhere in the path.</p>
<p>Indeed, because it reads bytes one by one, <code>deserializeJson()</code> can be slow with some implementations of <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/"><code>Stream</code></a>. To speed up the reading, we must add a buffer between the <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/"><code>Stream</code></a> and <code>deserializeJson()</code>. The easiest way to do this is to use <code>ReadBufferingStream</code> from the <a href="https://github.com/bblanchon/ArduinoStreamUtils">StreamUtils library</a>:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// replace the following line:</span>
<span class="hljs-built_in">deserializeJson</span>(doc, stream);

<span class="hljs-comment">// with these two lines:</span>
<span class="hljs-function">ReadBufferingStream <span class="hljs-title">bufferedStream</span><span class="hljs-params">(stream, <span class="hljs-number">64</span>)</span></span>;
<span class="hljs-built_in">deserializeJson</span>(doc, bufferedStream);
</code></pre>
<p>Thanks to <code>ReadBufferingStream</code>, the program will read the input in chunks of 64 bytes, which will be much faster.
Hopefully, it will be fast enough to read the whole message without droping any byte.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Adding a buffer solves the issue"},{id:"buffer",page:161,label:"No",summary:"Adding a buffer doesn't solve the issue"}]},{content:`<p>We need to make sure that the JSON document is valid.
To do that, please print the input to the serial port, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">print</span>(stream.<span class="hljs-built_in">readString</span>());
</code></pre>
<p>Then, copy the response and paste it in a JSON linter, like <a href="https://jsonlint.com/">jsonlint.com</a>.</p>
<p>Is the JSON document valid?</p>
`,options:[{id:"valid",page:162,label:"Yes",summary:"`jsonlint` says the document is valid"},{id:"invalid",page:149,label:"No",summary:"`jsonlint` says the document is invalid"}]},{content:`<p>We must check that the JSON document is not preceded by a  <a href="https://en.wikipedia.org/wiki/Byte_order_mark">Byte Order Mark</a> (BOM).</p>
<p>To do this, we'll print the first byte to the serial port. Insert the following line before the call to <code>deserializeJson()</code>:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(input[<span class="hljs-number">0</span>]);
</code></pre>
<p>What value does it print?</p>
`,options:[{id:"utf8",page:130,label:"<code>239</code>",summary:"Input's first byte suggests a UTF-8 BOM"},{id:"utf16",page:129,label:"<code>254</code> or <code>255</code>",summary:"Input's first byte suggests a UTF-16 BOM"},{id:"no-bom",page:128,label:"Something else",summary:"Input's first byte doesn't suggest a BOM"}]},{content:`<p>We need to make sure that the JSON document is valid.
To do that, please print the content of the string to the serial port, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">print</span>(input);
</code></pre>
<p>Then, copy the response and paste it in a JSON linter, like <a href="https://jsonlint.com/">jsonlint.com</a>.</p>
<p>Is the JSON document valid?</p>
`,options:[{id:"valid",page:164,label:"Yes",summary:"`jsonlint` says the document is valid"},{id:"invalid",page:149,label:"No",summary:"`jsonlint` says the document is invalid"}]},{content:`<p>So, what's the problem then?</p>
`,options:[{id:"slow",page:192,label:"It's slow",summary:"Deserialisation is slow"},{id:"invalid",page:167,label:"I expected <code>InvalidInput</code> instead of <code>Ok</code>",summary:"`Ok` is incorrect; it should be `InvalidInput`"},{id:"crash",page:90,label:"My program crashes after calling <code>deserializeJson()</code>",summary:"Program crashes after calling `deserializeJson()`"},{id:"empty",page:181,label:"<code>JsonDocument</code> returns empty/null values",summary:"Program fails to extract values from the `JsonDocument`"},{id:"missing",page:179,label:"Some values are missing",summary:"Some values are missing"},{id:"garbage",page:171,label:"<code>JsonDocument</code> returns garbage",summary:"`JsonDocument` returns garbage"},{id:"changing-strings",page:171,label:"The strings in the <code>JsonDocument</code> change for no reason",summary:"The strings in the `JsonDocument` change for no reason"},{id:"altered",page:175,label:"<code>deserializeJson()</code> alters the content of the input",summary:"Input buffer is modified"},{id:"truncated-strings",page:193,label:"Some strings are truncated",summary:"Some strings are truncated"}]},{content:`<p>What's the first character of your input?</p>
`,options:[{id:"brace",page:168,label:"An opening brace: <code>{</code>",summary:"The first character is `{`"},{id:"bracket",page:169,label:"An opening bracket: <code>[</code>",summary:"The first character is `[`"},{id:"quote",page:170,label:"A quote: <code>&quot;</code>",summary:'The first character is `"`'},{id:"other",page:200,label:"None of the above",summary:'The first character is neither `{`, nor `[`, nor `"`'}]},{content:`<p><code>deserializeJson()</code> stops reading as soon as the JSON document ends.
In your case, it will read the input until it reaches the matching <code>}</code> and ignore any remaining characters.</p>
<p>Suppose the input looks like this:</p>
<pre><code class="hljs language-json"><span class="hljs-punctuation">{</span><span class="hljs-attr">&quot;key&quot;</span><span class="hljs-punctuation">:</span><span class="hljs-string">&quot;value&quot;</span><span class="hljs-punctuation">}</span>GARBAGE
</code></pre>
<p>Here, <code>deserializeJson()</code> reads the JSON object <code>{&quot;key&quot;:&quot;value&quot;}</code> and returns <code>Ok</code> ignoring the <code>GARBAGE</code> part.</p>
<p>This feature enables:</p>
<ol>
<li>deserializing in chunks</li>
<li>parsing <a href="https://en.wikipedia.org/wiki/JSON_streaming">JSON Streams</a>,</li>
<li>reading from non-zero-terminated input strings.</li>
</ol>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Garbage characters follow the input"},{id:"lint",page:178,label:"No",summary:"No garbage characters follow the input"}]},{content:`<p><code>deserializeJson()</code> stops reading as soon as the JSON document ends.
In your case, it will read the input until it reaches the matching <code>]</code> and ignore any remaining characters.</p>
<p>Suppose the input looks like this:</p>
<pre><code class="hljs language-json"><span class="hljs-punctuation">[</span><span class="hljs-number">1</span><span class="hljs-punctuation">,</span><span class="hljs-number">2</span><span class="hljs-punctuation">,</span><span class="hljs-number">3</span><span class="hljs-punctuation">]</span>GARBAGE
</code></pre>
<p>Here, <code>deserializeJson()</code> reads the JSON array <code>[1,2,3]</code> and returns <code>Ok</code> ignoring the <code>GARBAGE</code> part.</p>
<p>This feature enables:</p>
<ol>
<li>deserializing in chunks</li>
<li>parsing <a href="https://en.wikipedia.org/wiki/JSON_streaming">JSON Streams</a>,</li>
<li>reading from non-zero-terminated input strings.</li>
</ol>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Garbage characters follow the input"},{id:"lint",page:178,label:"No",summary:"No garbage characters follow the input"}]},{content:`<p><code>deserializeJson()</code> stops reading as soon as the JSON document ends.
In your case, it will read the input until it reaches the matching <code>&quot;</code> and ignore any remaining characters.</p>
<p>Suppose the input looks like this:</p>
<pre><code class="hljs language-json"><span class="hljs-string">&quot;hello&quot;</span>GARBAGE
</code></pre>
<p>Here, <code>deserializeJson()</code> reads the JSON string <code>&quot;hello&quot;</code> and returns <code>Ok</code> ignoring the <code>GARBAGE</code> part.</p>
<p>This feature enables:</p>
<ol>
<li>deserializing in chunks</li>
<li>parsing <a href="https://en.wikipedia.org/wiki/JSON_streaming">JSON Streams</a>,</li>
<li>reading from non-zero-terminated input strings.</li>
</ol>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Garbage characters follow the input"},{id:"lint",page:178,label:"No",summary:"No garbage characters follow the input"}]},{content:`<p>What is the type of the second argument passed to <code>deserializeJson()</code>?</p>
`,options:[{id:"char-ptr",page:174,label:"<code>char*</code> (or <code>char[]</code>)",summary:"Input type is `char*`"},{id:"const-char-ptr",page:1,label:"<code>const char*</code>",summary:"Input type is `const char*`"},{id:"string",page:1,label:"<code>String</code> (or <code>std::string</code>)",summary:"Input type is `String`"},{id:"stream",page:1,label:"<code>Stream</code> (or <code>std::istream)</code>",summary:"Input type is `Stream`"}]},{content:`<p>The easiest solution is to disable the zero-copy mode by passing a read-only input buffer. Casting the pointer will do the trick:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// replace this:</span>
<span class="hljs-built_in">deserializeJson</span>(doc, input, inputSize);

<span class="hljs-comment">// ...with this:</span>
<span class="hljs-built_in">deserializeJson</span>(doc, (<span class="hljs-type">const</span> <span class="hljs-type">char</span>*)input, inputSize);
</code></pre>
<p>Now that the zero-copy mode is disabled, you probably need a larger <code>JsonDocument</code>, so don't forget to update the capacity. As usual, use the <a href="/v6/assistant/">ArduinoJson Assistant</a> to compute the right capacity for your project.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Casting the pointer fixes the issue"},{id:"cast",page:1,label:"No",summary:"Casting the pointer doesn't fix the issue"}]},{content:`<p>The easiest solution is to remove the buffer and pass the input stream directly to <code>deserializeJson()</code>.</p>
<p>For example, assuming the JSON document comes from a file:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// replace this:</span>
<span class="hljs-function">std::unique_ptr&lt;<span class="hljs-type">char</span>[]&gt; <span class="hljs-title">buf</span><span class="hljs-params">(<span class="hljs-keyword">new</span> <span class="hljs-type">char</span>[size])</span></span>;
file.<span class="hljs-built_in">readBytes</span>(buf.<span class="hljs-built_in">get</span>(), size);
<span class="hljs-built_in">deserializeJson</span>(doc, buf.<span class="hljs-built_in">get</span>());

<span class="hljs-comment">// ...with this:</span>
<span class="hljs-built_in">deserializeJson</span>(doc, file);
</code></pre>
<p>Now that the zero-copy mode is disabled, you probably need a larger <code>JsonDocument</code>, so don't forget to update the capacity. As usual, use the <a href="/v6/assistant/">ArduinoJson Assistant</a> to compute the right capacity for your project.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Passing the stream to `deserializeJson()` fixes the issue"},{id:"cast",page:1,label:"No",summary:"Passing the stream to `deserializeJson()` doesn't fix the issue"}]},{content:`<p>When you pass a writeable buffer as the input of <code>deserializeJson()</code>, ArduinoJson uses the zero-copy mode. Instead of copying the strings from the input into the <code>JsonDocument</code>, it stores pointers to the input buffer.
Therefore, the input buffer must stay alive during the whole lifetime of the <code>JsonDocument</code>; otherwise, all the strings in the <code>JsonDocument</code> will be dangling pointers.</p>
<p>Does your program fills this buffer from a <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/"><code>Stream</code></a> (like <a href="https://www.arduino.cc/en/Reference/SD"><code>File</code></a>, <a href="https://www.arduino.cc/reference/en/language/functions/communication/serial/"><code>Serial</code></a>, <a href="https://www.arduino.cc/en/Reference/EthernetClient"><code>EthernetClient</code></a>, <a href="https://www.arduino.cc/en/Reference/WiFiClient"><code>WifiClient</code></a>...)?</p>
`,options:[{id:"success",page:173,label:"Yes, the input comes from a stream",summary:"Input comes from a stream"},{id:"cast",page:172,label:"No, it doesn't",summary:"Input doesn't come from a stream"}]},{content:`<p>When you pass a writeable buffer as the input of <code>deserializeJson()</code>, ArduinoJson uses the zero-copy mode. Instead of copying the strings from the input into the <code>JsonDocument</code>, it stores pointers to the input buffer.</p>
<p>While doing this, the parser modifies the input buffer to unescape special characters and add string terminator.
When <code>deserializeJson()</code> returns the input buffer doesn't contain a valid JSON document anymore.</p>
<p>For more information, please see <a href="/v6/issues/altered-input/">Why is the input modified?</a></p>
<p>If you must preserve the input as it is, you must disable the zero-copy mode by passing a read-only input buffer. Casting the pointer will do the trick:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// replace this:</span>
<span class="hljs-built_in">deserializeJson</span>(doc, input, inputSize);

<span class="hljs-comment">// ...with this:</span>
<span class="hljs-built_in">deserializeJson</span>(doc, (<span class="hljs-type">const</span> <span class="hljs-type">char</span>*)input, inputSize);
</code></pre>
<p>Now that the zero-copy mode is disabled, you probably need a larger <code>JsonDocument</code>, so don't forget to update the capacity. As usual, use the <a href="/v6/assistant/">ArduinoJson Assistant</a> to compute the right capacity for your project.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Casting the pointer fixes the issue"},{id:"cast",page:1,label:"No",summary:"Casting the pointer doesn't fix the issue"}]},{content:`<p>ArduinoJson isn't very picky about the input: its implementation favors code size and speed over strict conformance.
After all, size and speed are what matter the most for embedded software, right?</p>
<p>This means that ArduinoJson's parser may accept documents that would be rejected by other parsers.</p>
<p>For example, <code>deserializeJson()</code> tolerates the following substitutions:</p>
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
<p>As a result, you cannot use <code>deserializeJson</code> as a JSON validator because you'd get many false-negatives.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"acceptable",page:2,label:"Yes",summary:"`deserializeJson()` tolerates the error, and that's OK"},{id:"unacceptable",page:200,label:"No",summary:"`deserializeJson()` should not let this error pass"}]},{content:`<p>So, <code>deserializeJson()</code> returns <code>Ok</code>, and jsonlint confirms that the input is valid.</p>
<p>I don't see any issue here; maybe you should <a href="/v6/troubleshooter/">start over</a>?</p>
`},{content:`<p>Let's make sure that your input is actually invalid.</p>
<p>Please go to <a href="https://jsonlint.com/">jsonlint.com</a>, paste your input, and press &quot;Validate JSON.&quot;</p>
<p>What does it say?</p>
`,options:[{id:"valid",page:177,label:"Document is valid",summary:"jsonlint says the document is valid"},{id:"invalid",page:176,label:"Document is invalid",summary:"jsonlint says the document is invalid"}]},{content:`<p>Is the JSON document big?</p>
`,options:[{id:"big",page:180,label:"Yes, it contains hundred of values",summary:"The JSON document is large"},{id:"small",page:1,label:"No, it doesn't contain that many values",summary:"The JSON document is not large"}]},{content:`<p>Indeed, due to an optimization, a <code>JsonDocument</code> is limited in the number of nodes it can contain.
The following table shows the maximum number of nodes for each capacity:</p>
<table class="table">
<thead>
<tr>
<th>CPU architecture</th>
<th>Max nodes</th>
</tr>
</thead>
<tbody>
<tr>
<td>8-bit</td>
<td>127</td>
</tr>
<tr>
<td>32-bit</td>
<td>32767</td>
</tr>
<tr>
<td>64-bit</td>
<td>2147483647</td>
</tr>
</tbody>
</table>
<p>You can increase this limit by increasing <code>ARDUINOJSON_SLOT_OFFSET_SIZE</code>.
However, doing will significantly increase memory consumption, so you'll need to increase the capacity of your <code>JsonDocument</code>.
Unfortunately, you cannot count on the ArduinoJson Assistant anymore.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"nul",page:2,label:"Yes",summary:"Increasing `ARDUINOJSON_SLOT_OFFSET_SIZE` solves the issue"},{id:"no-nul",page:1,label:"No",summary:"Increasing `ARDUINOJSON_SLOT_OFFSET_SIZE` doesn't solve the issue"}]},{content:`<p>Do you use a filter (with <code>DeserializationOption::Filter</code>)?</p>
`,options:[{id:"filter",page:184,label:"Yes",summary:"Program uses `DeserializationOption::Filter`"},{id:"no-filter",page:188,label:"No",summary:"Program doesn't use `DeserializationOption::Filter`"}]},{content:`<p>When a program fails to extract the values from a <code>JsonDocument</code>, it's often because there is a confusion between arrays and objects.</p>
<p>For example, a common mistake is to write:</p>
<pre><code class="hljs language-c++"><span class="hljs-type">const</span> <span class="hljs-type">char</span>* temperature = doc[<span class="hljs-string">&quot;list&quot;</span>][<span class="hljs-string">&quot;main&quot;</span>][<span class="hljs-string">&quot;temp&quot;</span>];
</code></pre>
<p>instead of</p>
<pre><code class="hljs language-c++"><span class="hljs-type">const</span> <span class="hljs-type">char</span>* temperature = doc[<span class="hljs-string">&quot;list&quot;</span>][<span class="hljs-number">0</span>][<span class="hljs-string">&quot;main&quot;</span>][<span class="hljs-string">&quot;temp&quot;</span>];
</code></pre>
<p>You can find other examples in <a href="/v6/issues/cannot-get-values/">deserializeJson() succeeds but I cannot read any value</a>, but the simplest solution is to use the <a href="/v6/assistant/">ArduinoJson Assistant</a> because the last step shows how to extract the values.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Issue is a confusion between array and object"},{id:"array-object",page:1,label:"No",summary:"Issue is not a confusion between array and object"}]},{content:`<p>Maybe the filter excludes the part that it should keep. Let's verify that it's doing its job correctly.</p>
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
`,options:[{id:"success",page:2,label:"Yes",summary:"Fixing the filter solves the issue"},{id:"filter-ok",page:188,label:"No",summary:"Fixing the filter doesn't solve the issue"}]},{content:`<p>Please print the filter to the serial port like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-built_in">serializeJsonPretty</span>(filter, Serial);
</code></pre>
<p>Does the filter look as you expected?</p>
`,options:[{id:"size-ok",page:183,label:"Yes",summary:"The filter looks correct"},{id:"too-small",page:185,label:"No, some values are missing",summary:"The filter lacks some values"}]},{content:`<p>The filter's <code>JsonDocument</code> is too small; please increase its capacity and try again.</p>
<p>If you want, you can use the <a href="/v6/assistant/">ArduinoJson Assistant</a> to compute the required capacity.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Increasing the filter's capacity fixes the issue"},{id:"size-increased",page:183,label:"No",summary:"Increasing the filter's capacity doesn't fix the issue"}]},{content:`<p>Which function do you call to deserialize the input?</p>
`,options:[{id:"json",page:1,label:"<code>deserializeJson()</code>",summary:"Program calls `deserializeJson()`"},{id:"msgpack",page:187,label:"<code>deserializeMsgPack()</code>",summary:"Program calls `deserializeMsgPack()`"}]},{content:`<p>It seems that your program fed <code>deserializeMsgPack()</code> with garbage input.</p>
<p>Indeed, any byte in the following ranges is a valid one-byte MessagePack document:</p>
<ul>
<li><code>0x00</code>-<code>0x7f</code>: positive fixint</li>
<li><code>0xc0</code>: nil</li>
<li><code>0xc2</code>: false</li>
<li><code>0xc3</code>: true</li>
<li><code>0xe0</code>-<code>0xff</code>: negative fixint</li>
</ul>
<p>As you can see, these values cover about 63% of all possible values for a random byte; that's why they are very likely to occur.</p>
<p>When the first byte in the input is one of these, <code>deserializeMsgPack()</code> saves the corresponding value in the <code>JsonDocument</code> and immediately returns <code>Ok</code>, which is the correct behavior.</p>
<p>To fix this issue, you must repair the input.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"The input was incorrect"},{id:"not-garbage",page:1,label:"No",summary:"The input is correct"}]},{content:`<p>Please print the content of the <code>JsonDocument</code> to the serial port like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-built_in">serializeJson</span>(doc, Serial);
Serial.<span class="hljs-built_in">println</span>(); <span class="hljs-comment">// adds a line break (optional)</span>
</code></pre>
<p>What's the first character?</p>
`,options:[{id:"quote",page:191,label:"A quote (<code>&quot;</code>)",summary:"Serialized document starts with a quote"},{id:"bracket",page:182,label:"A square bracket (<code>[</code>)",summary:"Serialized document starts with a square bracket"},{id:"brace",page:182,label:"A curly brace (<code>{</code>)",summary:"Serialized document starts with a curly brace"},{id:"not-in-list",page:186,label:"None of the above",summary:"Serialized document starts with neither a quote, a bracket, nor a brace."}]},{content:`<p>If you cannot fix the server, you can at least reverse the double serialization (stringification) to get back the original object.</p>
<p>To do this, you must call <code>deserializeJson()</code> twice, like so:</p>
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
<p>Of course, if you need to use the <a href="/news/2020/03/22/version-6-15-0/">filtering feature</a>, you must pass <code>DeserializationOption::Filter</code> to the second call to <code>deserializeJson()</code>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Calling `deserializeJson()` twice fixes the issue"},{id:"call-twice",page:1,label:"No",summary:"Calling `deserializeJson()` twice doesn't fix the issue"}]},{content:`<p>In the server implementation, please look at the view that returns the faulty JSON.
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
`,options:[{id:"success",page:2,label:"Yes",summary:"Fixing the server fixes the issue"},{id:"server-ok",page:189,label:"No",summary:"Fixing the server doesn't fix the issue"}]},{content:`<p>If you see a double-quote at the beginning of the JSON input, it means that the whole document is neither an object or an array; it's a string. This happens when the input was incorrectly generated, by serializing (stringifying) to JSON twice.</p>
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
`,options:[{id:"server-fixable",page:190,label:"Yes",summary:"User can modify the server"},{id:"server-unfixable",page:189,label:"No",summary:"User cannot modify the server"}]},{content:`<p>Indeed, <code>deserializeJson()</code> can be pretty slow with unbuffered implementations of <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/"><code>Stream</code></a> (such as <code>File</code> and <code>WiFiClient</code>) because it reads characters one by one.</p>
<p>Why does it reads bytes one by one?<br>
Because it has to stop exactly at the end of the document to support <a href="https://en.wikipedia.org/wiki/JSON_streaming">JSON streaming</a> and similar techniques.</p>
<p>To speed up the process, we need to insert a buffer between the <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/"><code>Stream</code></a> and <code>deserializeJson()</code>.  The easiest way to do this is to use <code>ReadBufferingStream</code> from the <a href="https://github.com/bblanchon/ArduinoStreamUtils">StreamUtils library</a>:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// replace the following line:</span>
<span class="hljs-built_in">deserializeJson</span>(doc, stream);

<span class="hljs-comment">// with these two lines:</span>
<span class="hljs-function">ReadBufferingStream <span class="hljs-title">bufferedStream</span><span class="hljs-params">(stream, <span class="hljs-number">64</span>)</span></span>;
<span class="hljs-built_in">deserializeJson</span>(doc, bufferedStream);
</code></pre>
<p>Thanks to <code>ReadBufferingStream</code>, the program will read the input in chunks of 64 bytes, which will be much faster.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"`ReadBufferingStream` solves the issue"},{id:"buffered",page:1,label:"No",summary:"`ReadBufferingStream` doesn't solve the issue"}]},{content:`<p>Does the JSON input contain the Unicode character <code>\\u0000</code>?</p>
`,options:[{id:"nul",page:215,label:"Yes",summary:"The input contains `\\u0000`"},{id:"no-nul",page:199,label:"No",summary:"The input doesn't contain `\\u0000`"}]},{content:`<p>When you call <code>HTTPClient::getStream()</code>, you bypass the part that handles <a href="https://en.wikipedia.org/wiki/Chunked_transfer_encoding">Chunked Transfer Encoding</a>.
As a result, the response's body may be split in multiple chunks, making some strings look like they are truncated (in reality, they contain a line-break).</p>
<p>The most straightforward workaround is to downgrade the connection to HTTP 1.0.
To do this, add the following line <strong>before</strong> sending the request:</p>
<pre><code class="hljs language-c++">http.<span class="hljs-built_in">useHTTP10</span>(<span class="hljs-literal">true</span>);  <span class="hljs-comment">// avoid Chunked Transfer Encoding</span>
</code></pre>
<p>Did this solve your problem?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Calling `HTTPClient::useHTTP10(true)` solves the issue"},{id:"http10",page:1,label:"No",summary:"Calling `HTTPClient::useHTTP10(true)` doesn't solve the issue"}]},{content:`<p>Which function of <code>HTTPClient</code> do you call to get the response?</p>
`,options:[{id:"getstream",page:194,label:"<code>getStream()</code>",summary:"Response comes from `HTTPClient::getStream()`"},{id:"getstring",page:1,label:"<code>getString()</code>",summary:"Response comes from `HTTPClient::getString()`"}]},{content:`<p>When you use HTTP 1.1, the server can send the response with <a href="https://en.wikipedia.org/wiki/Chunked_transfer_encoding">Chunked Transfer Encoding</a>.
As a result, the response's body may be split in multiple chunks, making some strings look like they are truncated (in reality, they contain a line-break).</p>
<p>The most straightforward workaround is to downgrade the connection to HTTP 1.0.
To do this, replace <code>HTTP/1.1</code> with <code>HTTP/1.0</code> in the first line of the request.</p>
<p>Did this solve your problem?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Using `HTTP/1.0` solves the issue"},{id:"http10",page:1,label:"No",summary:"Using `HTTP/1.0` doesn't solve the issue"}]},{content:`<p>Unfortunately, I only know how to use the following HTTP libraries:</p>
<ul>
<li><a href="https://github.com/esp8266/Arduino/tree/master/libraries/ESP8266HTTPClient">ESP8266HTTPClient</a></li>
<li><a href="https://github.com/espressif/arduino-esp32/tree/master/libraries/HTTPClient">HTTPClient for ESP32</a></li>
</ul>
`,tags:["needs_assistance"]},{content:`<p>Do you use an HTTP library?</p>
`,options:[{id:"httpclient",page:195,label:"Yes, I'm using <code>HTTPClient</code>",summary:"Program uses `HTTPClient`"},{id:"http-library",page:197,label:"Yes, but it's not <code>HTTPClient</code>",summary:"Program uses an unknown HTTP library"},{id:"no-library",page:196,label:"No",summary:"Program doesn't use an HTTP library"}]},{content:`<p>Does the JSON input come from an HTTP response?</p>
`,options:[{id:"http",page:198,label:"Yes",summary:"The input comes from an HTTP response"},{id:"no-nul",page:1,label:"No",summary:"The input doesn't come from an HTTP response"}]},{content:`<p><code>deserializeJson()</code> accepted a JSON document that was clearly invalid.<br>
You need to talk to a human about that.</p>
`,tags:["needs_assistance"]},{content:`<p><code>NoMemory</code> means that the <code>JsonDocument</code> is too small to hold the entire document.</p>
<p>Please use the <a href="/v6/assistant/">ArduinoJson Assistant</a> to compute the right capacity for your document.
Use the recommended capacity when creating <code>JsonDocument</code> and retry.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Increasing the capacity of the `JsonDocument` fixes the issue"},{id:"increased-capacity",page:208,label:"No",summary:"Increasing the capacity of the `JsonDocument` doesn't fix the issue"}]},{content:`<p>I'm pretty confident the Assistant computes the right capacity; however, some settings can affect the result:</p>
<ol>
<li><em>Input type</em>, in step 1, should match the type of the argument passed to <code>deserializeJson()</code></li>
<li><em>Deduplicate values when measuring the capacity</em>, in step 3, should be unchecked, most likely.</li>
<li><em>Deduplicate keys when measuring the capacity</em>, in step 3, it should be unchecked if the keys are dynamic or if you used placeholders.</li>
</ol>
<p>Please verify that these settings are correct.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Changing the Assistant settings solves the issue"},{id:"failure",page:1,label:"No",summary:"Changing the Assistant settings doesn't solve the issue"}]},{content:`<p><code>doc.capacity()</code> returns <code>0</code>, which means <code>allocate()</code> returned <code>NULL</code>.</p>
<p>I think that, because <code>doc</code> is declared global, <code>allocate()</code> is called too early and the heap isn't ready.
I know this happens on ESP32 with the <code>SpiRamJsonDocument</code> shown in <a href="/v6/how-to/use-external-ram-on-esp32/">How to use external RAM on ESP32?</a>.</p>
<p>Please try to make <code>doc</code> a local variable.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Making `doc` local fixes the issue."},{id:"failure",page:1,label:"No",summary:"Making `doc` local doesn't fix the issue."}]},{content:`<p>Is <code>doc</code> a global variable?</p>
`,options:[{id:"global",page:203,label:"Yes",summary:"`doc` is a global variable"},{id:"local",page:202,label:"No",summary:"`doc` is not a global variable"}]},{content:`<p>Let's verify that the memory allocation succeeded.</p>
<p>Please print the capacity of the <code>JsonDocument</code> to the serial port, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(doc.<span class="hljs-built_in">capacity</span>());
</code></pre>
<p>What value does it show?</p>
`,options:[{id:"capacity-0",page:204,label:"<code>0</code>",summary:"`doc.capacity()` returns `0`"},{id:"capacity-ok",page:202,label:"The value passed to the constructor of <code>DynamicJsonDocument</code>",summary:"`doc.capacity()` returns the right value"}]},{content:`<p>Well, that's very bad news. It seems that your microcontroller doesn't have enough RAM to hold the JSON document.</p>
<p>Please read <a href="/v6/how-to/reduce-memory-usage/">How to reduce memory usage</a>.
It shows several techniques you can use to use less RAM.
Hopefully, you'll make enough room for the memory pool.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Reducing memory usage fixes the issue"},{id:"failure",page:1,label:"No",summary:"Reducing memory usage doesn't fix the issue"}]},{content:`<p>It's possible that the <code>DynamicJsonDocument</code> failed to allocate the memory pool.</p>
<p>Please print the capacity of the <code>DynamicJsonDocument</code> to the serial port, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(doc.<span class="hljs-built_in">capacity</span>());
</code></pre>
<p>What value does it show?</p>
`,options:[{id:"capacity-0",page:206,label:"<code>0</code>",summary:"`doc.capacity()` returns `0`"},{id:"capacity-ok",page:202,label:"The value passed to the constructor of <code>DynamicJsonDocument</code>",summary:"`doc.capacity()` returns the right value"}]},{content:`<p>What kind of <code>JsonDocument</code> are you using?</p>
`,options:[{id:"basic",page:205,label:"<code>BasicJsonDocument&lt;T&gt;</code>",summary:"The document is a `BasicJsonDocument<T>`"},{id:"dynamicjsondocument",page:207,label:"<code>DynamicJsonDocument</code>",summary:"The `JsonDocument` is a `DynamicJsonDocument`"},{id:"staticjsondocument",page:202,label:"<code>StaticJsonDocument</code>",summary:"The `JsonDocument` is a `StaticJsonDocument`"}]},{content:`<p><code>NotSupported</code> means that the document was valid but contained features not supported by the library.</p>
<p>This error code was removed in <a href="/news/2021/05/04/version-6-18-0/">ArduinoJson 6.18</a>, so you should not see it anymore.</p>
<p>Can you upgrade the library?</p>
`,options:[{id:"can-uprade",page:213,label:"Yes",summary:"Library can be upgraded"},{id:"cannot-upgrade",page:211,label:"No",summary:"Library cannot be upgraded"}]},{content:`<p>So, I guess that you're not using <code>deserializeJson()</code> but <code>deserializeMsgPack()</code>, right?</p>
<p>Indeed, before <a href="/news/2021/05/04/version-6-18-0/">ArduinoJson 6.18</a>, <code>deserializeMsgPack()</code> returned <code>NotSupported</code> as soon as the input contains an unsupported MsgPack value type:</p>
<ul>
<li>a binary value</li>
<li>an extension value</li>
<li>an object key that is not a string</li>
</ul>
<p>If that's your case, then you must upgrade the library. Instead of returning an error, newer versions simply ignore the unsupported values and replace them with nulls.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Upgrading solve the issue"},{id:"upgraded",page:1,label:"No",summary:"Upgrading doesn't solve the issue"}]},{content:`<p><code>deserializeJson()</code> returns <code>NotSupported</code> when is read an UTF-16 escape sequence but support is disabled.</p>
<p>To fix this issue, you must enable support UTF-16 escape sequences by defining <code>ARDUINOJSON_DECODE_UNICODE</code> to <code>1</code> before including <code>ArduinoJson.h</code>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-meta">#<span class="hljs-keyword">define</span> ARDUINOJSON_DECODE_UNICODE 1</span>
<span class="hljs-meta">#<span class="hljs-keyword">include</span> <span class="hljs-string">&lt;ArduinoJson.h&gt;</span></span>
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Defining `ARDUINOJSON_DECODE_UNICODE` solves the issue"},{id:"decode-unicode-set",page:210,label:"No",summary:"Defining `ARDUINOJSON_DECODE_UNICODE` doesn't solve the issue"}]},{content:`<p>If you're still seeing <code>NotSupported</code> after upgrading the library, it means that your code is not using the upgraded library.</p>
<p>Several versions of ArduinoJson are installed on your machine; you must either:</p>
<ul>
<li>removed the duplicates</li>
<li>upgrade the duplicates</li>
<li>make sure your project uses the right one</li>
</ul>
<p>To find the duplicates, run a disk search for a file named <code>ArduinoJson.h</code>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Removing duplicates fixes the issue"},{id:"duplicates-removed",page:211,label:"No",summary:"Removing duplicates doesn't fix the issue"}]},{content:`<p>Please upgrade ArduinoJson to the latest version.<br>
You may need to consult the <a href="https://github.com/bblanchon/ArduinoJson/blob/6.x/CHANGELOG.md">change log</a> to make sure there aren't any breaking changes that could break your existing code.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Upgrading solves the issue"},{id:"updraded",page:212,label:"No",summary:"Upgrading doesn't solves the issue"}]},{content:`<p><code>TooDeep</code> means that the input document has too many levels of nesting.</p>
<p><code>deserializeJson()</code> is implemented with a recursive function: it's fast, small, and efficient, but it can cause a stack-overflow if the input document has too many levels. To protect your program against malicious input that could trigger a stack-overflow on purpose, ArduinoJson sets a limit on how many levels it accepts.</p>
<p>The default nesting limit is configured by <code>ARDUINOJSON_DEFAULT_NESTING_LIMIT</code>, which is set to <code>10</code> by default. To increase the limit, you can change this setting, or you can pass an extra argument to <code>deserializeJson()</code>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-built_in">deserializeJson</span>(doc, input, DeserializationOption::<span class="hljs-built_in">NestingLimit</span>(<span class="hljs-number">20</span>));
</code></pre>
<p>The ArduinoJson Assistant shows an alert when your input overpasses the default limit and includes the appropriate <code>DeserializationOption::NestingLimit</code> in the sample program.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Increasing the limit fixes the issue"},{id:"limit-increased",page:1,label:"No",summary:"Increasing the limit doesn't fix the issue"}]},{content:`<p>First, ArduinoJson only supports NUL characters since <a href="/news/2022/01/08/arduinojson-6-19-0/">version 6.19</a>, so make sure you are up-to-date.</p>
<p>Next, the Arduino <a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a> class doesn't support NUL characters, so you have to use another string type, like <code>JsonString</code>, like this:</p>
<pre><code class="hljs language-c++">JsonString myString = doc[<span class="hljs-string">&quot;myString&quot;</span>];
<span class="hljs-type">const</span> <span class="hljs-type">char</span>* myStringData = myString.<span class="hljs-built_in">c_str</span>();
<span class="hljs-type">size_t</span> myStringSize = myString.<span class="hljs-built_in">size</span>();
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Using `JsonString` solves the issue"},{id:"failure",page:1,label:"No",summary:"Using `JsonString` doesn't solves the issue"}]},{content:`<p>What's the problem?</p>
`,options:[{id:"crash",page:217,label:"The program crashes",summary:"Program crashes"},{id:"empty",page:227,label:"The output is empty (e.g. <code>{}</code>, <code>[]</code>, or <code>null</code>)",summary:"Output is empty"},{id:"incomplete",page:256,label:"The output is incomplete",summary:"Output is incomplete"},{id:"garbage",page:239,label:"The output contains garbage",summary:"Output contains garbage"},{id:"empty-strings",page:233,label:"The output contains empty strings",summary:"Output contains empty strings"},{id:"null",page:256,label:"The output contains <code>null</code>",summary:"Output contains null"},{id:"float",page:236,label:"Floating-point values contain too many decimal digits",summary:"Floating-point values contain too many decimal digits"},{id:"slow",page:268,label:"It's slow",summary:"Serialization is slow"}]},{content:`<p>Do you use <code>DynamicJsonDocument</code> or <code>StaticJsonDocument</code>?</p>
`,options:[{id:"dynamicjsondocument",page:225,label:"<code>DynamicJsonDocument</code>",summary:"Program uses `DynamicJsonDocument`"},{id:"staticjsondocument",page:226,label:"<code>StaticJsonDocument</code>",summary:"Program uses `StaticJsonDocument`"}]},{content:`<p>Please replace all those string pointers with literals.</p>
<p>For example, replace:</p>
<pre><code class="hljs language-c++">doc[<span class="hljs-string">&quot;name&quot;</span>] = name;
</code></pre>
<p>with:</p>
<pre><code class="hljs language-c++">doc[<span class="hljs-string">&quot;name&quot;</span>] = <span class="hljs-string">&quot;name&quot;</span>;
</code></pre>
<p>Does your program still crash?</p>
`,options:[{id:"crash-with-literals",page:221,label:"Yes",summary:"Replacing string pointers with literals doesn't fix the crash"},{id:"no-crash-with-literals",page:219,label:"No",summary:"Replacing string pointers with literals fixes the crash"}]},{content:`<p>One of these string pointers is probably dangling or points to a non-zero-terminated string.</p>
<p>Please print them all to the serial port to find the faulty pointer.</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">print</span>(name);
doc[<span class="hljs-string">&quot;name&quot;</span>] = <span class="hljs-string">&quot;name&quot;</span>;
</code></pre>
<p>Can you locate the faulty string in the output?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Printing the string reveals the faulty pointer"},{id:"no-faulty-pointer",page:1,label:"No",summary:"Printing the string doesn't show any faulty pointer"}]},{content:`<p>Does your program insert string pointers in the <code>JsonDocument</code>?<br>
(for example, <code>doc[&quot;name&quot;] = name</code> where <code>name</code> is a <code>const char*</code>)</p>
`,options:[{id:"charptr",page:218,label:"Yes",summary:"Program inserts string pointers into the `JsonDocument`"},{id:"no-charptr",page:221,label:"No",summary:"Program doesn't insert string pointers into the `JsonDocument`"}]},{content:`<p>What is the type of the second argument passed to <code>serializeJson()</code>?</p>
`,options:[{id:"char-array",page:222,label:"<code>char[]</code>",summary:"Output type is `char[]`"},{id:"char-ptr",page:223,label:"<code>char*</code>",summary:"Output type is `char*`"},{id:"arduino-string",page:1,label:"<code>String</code>",summary:"Output type is `String`"},{id:"arduino-stream",page:1,label:"<code>Stream</code>",summary:"Output type is `Stream`"}]},{content:`<p>I think this output buffer could cause a <a href="https://en.wikipedia.org/wiki/Stack_buffer_overflow">stack overflow</a>.</p>
<p>Please try with a <a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a> instead of a <code>char[]</code>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Switching to `String` solves the issue"},{id:"failure",page:1,label:"No",summary:"Switching to `String` doesn't solve the issue"}]},{content:`<p>I think the output pointer is dangling.</p>
<p>Please try to use a <code>char[]</code> instead:</p>
<pre><code class="hljs language-c++"><span class="hljs-type">char</span> output[<span class="hljs-number">128</span>];
<span class="hljs-built_in">serializeJson</span>(doc, output);
</code></pre>
<p>Does your program still crash?</p>
`,options:[{id:"crash-with-char-array",page:1,label:"Yes",summary:"Replacing the output pointer with an array doesn't fix the crash"},{id:"no-crash-with-char-array",page:2,label:"No",summary:"Replacing the output pointer with an array fixes the crash"}]},{content:`<p>When you use <code>PROGMEM</code> with ArduinoJson (and any other Arduino code, really), you must make sure that the addresses in Flash memory aren't interpreted as addresses in RAM.</p>
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
`,options:[{id:"success",page:2,label:"Yes",summary:"Casting the pointer solves the issue"},{id:"failure",page:1,label:"No",summary:"Casting the pointer doesn't solve the issue"}]},{content:`<p>Do you use <code>PROGMEM</code> (Flash memory) in your program?</p>
`,options:[{id:"progmem",page:224,label:"Yes",summary:"Program uses `PROGMEM`"},{id:"no-progmem",page:220,label:"No",summary:"Program doesn't use `PROGMEM`"}]},{content:`<p>Because a <code>StaticJsonDocument</code> resides on the stack, it may cause a <a href="https://en.wikipedia.org/wiki/Stack_buffer_overflow">stack-overflow</a>.</p>
<p>Some platforms can detect stack overflows, in which case they raise an exception; others let the program do nothing and let the program crash on its own.
The tricky part with stack overflows is that the program doesn't always crash; it can also expose all kind of weird behavior.</p>
<p>If you have no idea of what I'm talking about, please have a look a &quot;The missing C++ course&quot; in <a href="/book/">Mastering ArduioJson</a>, it explains the roles of the different areas of memory, as well as many other important stuffs.</p>
<p>Please switch to a <code>DynamicJsonDocument</code></p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Switching to `DynamicJsonDocument` fixes the issue"},{id:"dynamicjsondocument-tried",page:225,label:"No",summary:"Switching to `DynamicJsonDocument` doesn't fix the issue"}]},{content:`<p>Please print the capacity of the <code>JsonDocument</code> to the serial port, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(doc.<span class="hljs-built_in">capacity</span>());
</code></pre>
<p>What value does it show?</p>
`,options:[{id:"capacity-0",page:231,label:"<code>0</code>",summary:"`doc.capacity()` returns `0`"},{id:"capacity-ok",page:232,label:"a positive integer",summary:"`doc.capacity()` looks good"}]},{content:`<p><code>doc.capacity()</code> returns <code>0</code>, which means <code>allocate()</code> returned <code>NULL</code>.</p>
<p>I think that, because <code>doc</code> is declared global, <code>allocate()</code> is called too early and the heap isn't ready.
I know this happens on ESP32 with the <code>SpiRamJsonDocument</code> shown in <a href="/v6/how-to/use-external-ram-on-esp32/">How to use external RAM on ESP32?</a>.</p>
<p>Please try to make <code>doc</code> a local variable.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Making `doc` local fixes the issue."},{id:"failure",page:1,label:"No",summary:"Making `doc` local doesn't fix the issue."}]},{content:`<p>Is <code>doc</code> a global variable?</p>
`,options:[{id:"global",page:228,label:"Yes",summary:"`doc` is a global variable"},{id:"local",page:230,label:"No",summary:"`doc` is not a global variable"}]},{content:`<p>Well, that's very bad news. It seems that your microcontroller doesn't have enough RAM to hold the JSON document.</p>
<p>Please read <a href="/v6/how-to/reduce-memory-usage/">How to reduce memory usage</a>.
It shows several techniques you can use to use less RAM.
Hopefully, you'll make enough room for the memory pool.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Reducing memory usage fixes the issue"},{id:"failure",page:1,label:"No",summary:"Reducing memory usage doesn't fix the issue"}]},{content:`<p>What kind of <code>JsonDocument</code> do you use?</p>
`,options:[{id:"basic",page:229,label:"<code>BasicJsonDocument&lt;T&gt;</code>",summary:"The document is a `BasicJsonDocument<T>`"},{id:"dynamic",page:230,label:"<code>DynamicJsonDocument</code>",summary:"The document is a `DynamicJsonDocument`"},{id:"static",page:1,label:"<code>StaticJsonDocument</code>",summary:"The document is a `StaticJsonDocument`"}]},{content:`<p>Please print the value of <code>JsonDocument::overflowed()</code>, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(doc.<span class="hljs-built_in">overflowed</span>());
</code></pre>
<p>What value does it print?</p>
`,options:[{id:"overflowed-1",page:266,label:"<code>1</code> (or <code>true</code>)",summary:"`JsonDocument::overflowed()` returns `true`"},{id:"overflowed-0",page:1,label:"<code>0</code> (or <code>false</code>)",summary:"`JsonDocument::overflowed()` returns `false`"}]},{content:`<p>Do you call <code>deserializeJson()</code> before calling <code>serializeJson()</code>? (with the same <code>JsonDocument</code>)</p>
`,options:[{id:"deserialize-yes",page:235,label:"Yes",summary:"Program calls `deserializeJson()`"},{id:"deserialize-no",page:1,label:"No",summary:"Program doesn't call `deserializeJson()`"}]},{content:`<p>When you pass a writeable buffer as the input of <code>deserializeJson()</code>, ArduinoJson uses the <strong>zero-copy mode</strong>. Instead of copying the strings from the input into the <code>JsonDocument</code>, it stores pointers to the input buffer.
Therefore, the input buffer must stay alive during the whole lifetime of the <code>JsonDocument</code>; otherwise, all the strings in the <code>JsonDocument</code> will be dangling pointers.
Usually, this produces grabage in the output, but it can sometimes produce empty strings.</p>
<p>The easiest solution is to disable the zero-copy mode by passing a read-only input buffer. Casting the pointer will do the trick:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// replace this:</span>
<span class="hljs-built_in">deserializeJson</span>(doc, input, inputSize);

<span class="hljs-comment">// ...with this:</span>
<span class="hljs-built_in">deserializeJson</span>(doc, (<span class="hljs-type">const</span> <span class="hljs-type">char</span>*)input, inputSize);
</code></pre>
<p>Now that the zero-copy mode is disabled, you probably need a larger <code>JsonDocument</code>, so don't forget to update the capacity. As usual, use the <a href="/v6/assistant/">ArduinoJson Assistant</a> to compute the right capacity for your project.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Casting the pointer fixes the issue"},{id:"casting-fails",page:1,label:"No",summary:"Casting the pointer doesn't fix the issue"}]},{content:`<p>What's the type of the second argument passed to <code>deserializeJson()</code>?</p>
`,options:[{id:"char-ptr",page:234,label:"<code>char*</code> (or <code>char[]</code>)",summary:"Input type is `char*`"},{id:"const-char-ptr",page:1,label:"<code>const char*</code>",summary:"Input type is `const char*`"},{id:"string",page:1,label:"<code>String</code> (or <code>std::string</code>)",summary:"Input type is `String`"},{id:"stream",page:1,label:"<code>Stream</code> (or <code>std::istream)</code>",summary:"Input type is `Stream`"}]},{content:`<p>Supposing that the JSON output looks like this:</p>
<pre><code class="hljs language-json"><span class="hljs-punctuation">{</span><span class="hljs-attr">&quot;value&quot;</span><span class="hljs-punctuation">:</span><span class="hljs-number">24.79999924</span><span class="hljs-punctuation">}</span>
</code></pre>
<p>I'm assuming you expect it to look like that:</p>
<pre><code class="hljs language-json"><span class="hljs-punctuation">{</span><span class="hljs-attr">&quot;value&quot;</span><span class="hljs-punctuation">:</span><span class="hljs-number">24.8</span><span class="hljs-punctuation">}</span>
</code></pre>
<p>Please change the type of the variable from <code>float</code> to <code>double</code> and try again.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Replacing `float` with `double` fixes the issue"},{id:"double",page:238,label:"No",summary:"Replacing `float` with `double` doesn't fix the issue"}]},{content:`<p>I'm surprised that the previous solution didn't work.</p>
<p>We can try to change ArduinoJson's storage type to see if it solves your issue.</p>
<p>Please define <code>ARDUINOJSON_USE_DOUBLE</code> to <code>0</code> before including <code>ArduinoJson.h</code>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-meta">#<span class="hljs-keyword">define</span> ARDUINOJSON_USE_DOUBLE 0</span>
<span class="hljs-meta">#<span class="hljs-keyword">include</span> <span class="hljs-string">&lt;ArduinoJson.h&gt;</span></span>
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Defining `ARDUINOJSON_USE_DOUBLE` to `0` fixes the issue"},{id:"failure",page:1,label:"No",summary:"Defining `ARDUINOJSON_USE_DOUBLE` to `0` doesn't fix the issue"}]},{content:`<p>Please add the following function somewhere in your program:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// rounds a number to 2 decimal places</span>
<span class="hljs-comment">// example: round(3.14159) -&gt; 3.14</span>
<span class="hljs-function"><span class="hljs-type">double</span> <span class="hljs-title">round2</span><span class="hljs-params">(<span class="hljs-type">double</span> value)</span> </span>{
   <span class="hljs-keyword">return</span> (<span class="hljs-type">int</span>)(value * <span class="hljs-number">100</span> + <span class="hljs-number">0.5</span>) / <span class="hljs-number">100.0</span>;
}
</code></pre>
<p>Now, call this function when inserting the value in the <code>JsonDocument</code>; for example:</p>
<pre><code class="hljs language-c++">doc[<span class="hljs-string">&quot;value&quot;</span>] = <span class="hljs-built_in">round2</span>(value);
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Rounding the value fixes the issue"},{id:"double",page:237,label:"No",summary:"Rounding the value doesn't fix the issue"}]},{content:`<p>What function produces the garbage?</p>
`,options:[{id:"json",page:246,label:"<code>serializeJson()</code> (or <code>serializeJsonPretty()</code>)",summary:"`serializeJson()` produces garbage"},{id:"msg",page:251,label:"<code>serializeMsgPack()</code>",summary:"`serializeMsgPack()` produces garbage"}]},{content:`<p>When you pass a writeable buffer as the input of <code>deserializeJson()</code>, ArduinoJson uses the <strong>zero-copy mode</strong>. Instead of copying the strings from the input into the <code>JsonDocument</code>, it stores pointers to the input buffer.
Therefore, the input buffer must stay alive during the whole lifetime of the <code>JsonDocument</code>; otherwise, all the strings in the <code>JsonDocument</code> will be dangling pointers.</p>
<p>The easiest solution is to disable the zero-copy mode by passing a read-only input buffer. Casting the pointer will do the trick:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// replace this:</span>
<span class="hljs-built_in">deserializeJson</span>(doc, input, inputSize);

<span class="hljs-comment">// ...with this:</span>
<span class="hljs-built_in">deserializeJson</span>(doc, (<span class="hljs-type">const</span> <span class="hljs-type">char</span>*)input, inputSize);
</code></pre>
<p>Now that the zero-copy mode is disabled, you probably need a larger <code>JsonDocument</code>, so don't forget to update the capacity. As usual, use the <a href="/v6/assistant/">ArduinoJson Assistant</a> to compute the right capacity for your project.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Casting the pointer fixes the issue"},{id:"casting-fails",page:255,label:"No",summary:"Casting the pointer doesn't fix the issue"}]},{content:`<p>What's the type of the second argument passed to <code>deserializeJson()</code>?</p>
`,options:[{id:"char-ptr",page:240,label:"<code>char*</code> (or <code>char[]</code>)",summary:"Input type is `char*`"},{id:"const-char-ptr",page:255,label:"<code>const char*</code>",summary:"Input type is `const char*`"},{id:"string",page:255,label:"<code>String</code> (or <code>std::string</code>)",summary:"Input type is `String`"},{id:"stream",page:255,label:"<code>Stream</code> (or <code>std::istream)</code>",summary:"Input type is `Stream`"}]},{content:`<p>You can insert <a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a> objects in a <code>JsonDocument</code>, but make sure you don't store the result of <a href="https://www.arduino.cc/reference/en/language/variables/data-types/string/functions/c_str/"><code>String::c_str()</code></a>.</p>
<p>The pointer returned by <a href="https://www.arduino.cc/reference/en/language/variables/data-types/string/functions/c_str/"><code>String::c_str()</code></a> is valid only if you don't modify or destroy the string.
Indeed, this function returns the address of the internal buffer of the <a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a> instance.
This buffer is freed by <a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a>'s destructor and may be reallocated each time the  <a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a> changes. It's crucial that you don't save the pointer returned of <a href="https://www.arduino.cc/reference/en/language/variables/data-types/string/functions/c_str/"><code>String::c_str()</code></a>; otherwise, the pointer may be dangling.</p>
<p>For example, the following lines create a dangling pointer:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// DON&#x27;T DO THAT!!!  💀</span>
doc[<span class="hljs-string">&quot;address&quot;</span>] = address.<span class="hljs-built_in">toString</span>().<span class="hljs-built_in">c_str</span>();
<span class="hljs-comment">// ...</span>
<span class="hljs-built_in">serializeJson</span>(doc, Serial);  <span class="hljs-comment">// &lt;- likely to produce garbage</span>
</code></pre>
<p>Here, <code>address.toString()</code> returns a temporary <a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a> which is destructed after executing the first statement. When <code>serializeJson()</code> runs, the pointer stored in the <code>JsonDocument</code> will be pointing to an invalid location. It may work by accident, but if the memory location is reused by another variable, it will print garbage to the serial port.</p>
<p>The solution is to duplicate string instead of saving a pointer.
Since ArduinoJson automatically duplicates <a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a> instances, all you need to do is  removing the call to <a href="https://www.arduino.cc/reference/en/language/variables/data-types/string/functions/c_str/"><code>String::c_str()</code></a>, like so:</p>
<pre><code class="hljs language-c++">doc[<span class="hljs-string">&quot;address&quot;</span>] = address.<span class="hljs-built_in">toString</span>(); <span class="hljs-comment">// &lt;- duplicates</span>
<span class="hljs-comment">// ...</span>
<span class="hljs-built_in">serializeJson</span>(doc, Serial);
</code></pre>
<p>Now, ArduinoJson sees a <a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a> and knows that it needs to make a copy of the string in the <code>JsonDocument</code>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Removing `.c_str()` fixes the issue"},{id:"failure",page:1,label:"No",summary:"Removing `.c_str()` doesn't fix the issue"}]},{content:`<p>Do you use <a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a> in your program?</p>
`,options:[{id:"string",page:242,label:"Yes",summary:"Program uses `String`"},{id:"no-string",page:1,label:"No",summary:"Program doesn't use `String`"}]},{content:`<p><code>StaticJsonDocument</code> stores its memory pool in the stack.
A large memory pool can overflow the stack a produce all kinds of strange behavior.
In particural, a <a href="https://en.wikipedia.org/wiki/Stack_buffer_overflow">stack overflow</a> can cause garbage in <code>serializeJson()</code>'s output.</p>
<p>Please switch to a <code>DynamicJsonDocument</code>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Switching to `DynamicJsonDocument` fixes the issue"},{id:"dynamic",page:243,label:"No",summary:"Switching to `DynamicJsonDocument` doesn't fix the issue"}]},{content:`<p>Which kind of <code>JsonDocument</code> do you use?</p>
`,options:[{id:"dynamic",page:243,label:"<code>DynamicJsonDocument</code>",summary:"Program uses `DynamicJsonDocument`"},{id:"static",page:244,label:"<code>StaticJsonDocument</code>",summary:"Program uses `StaticJsonDocument`"}]},{content:`<p>Do you call <code>deserializeJson()</code> before calling <code>serializeJson()</code>? (with the same <code>JsonDocument</code>)</p>
`,options:[{id:"deserialize-yes",page:241,label:"Yes",summary:"Program calls `deserializeJson()`"},{id:"deserialize-no",page:255,label:"No",summary:"Program doesn't call `deserializeJson()`"}]},{content:`<p><code>JsonArray</code> doesn't contain any data: it is a reference to an object stored in the <code>JsonDocument</code>. It becomes invalid as soon as the <code>JsonDocument</code> is destroyed; this could explain the garbage you see in the output.</p>
<p>For example, here is a function that creates a dangling <code>JsonArray</code>:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// DON&#x27;T DO THAT!!!  💀</span>
<span class="hljs-function">JsonArray <span class="hljs-title">createArray</span><span class="hljs-params">()</span> </span>{
  StaticJsonDocument&lt;<span class="hljs-number">200</span>&gt; doc;
  JsonArray arr = doc.<span class="hljs-built_in">to</span>&lt;JsonArray&gt;();
  arr.<span class="hljs-built_in">add</span>(<span class="hljs-string">&quot;hello&quot;</span>);
  arr.<span class="hljs-built_in">add</span>(<span class="hljs-string">&quot;world&quot;</span>);
  <span class="hljs-keyword">return</span> arr;
}
</code></pre>
<p>The <code>JsonArray</code> returned by this function points to a destructed <code>JsonDocument</code>, and therefore is likely to produce garbage or crash the program.</p>
<p>The best way to fix this function is to pass the <code>JsonDocument</code> as an argument:</p>
<pre><code class="hljs language-c++"><span class="hljs-function">JsonArray <span class="hljs-title">createArray</span><span class="hljs-params">(JsonDocument&amp; doc)</span> </span>{
  JsonArray arr = doc.<span class="hljs-built_in">to</span>&lt;JsonArray&gt;();
  arr.<span class="hljs-built_in">add</span>(<span class="hljs-string">&quot;hello&quot;</span>);
  arr.<span class="hljs-built_in">add</span>(<span class="hljs-string">&quot;world&quot;</span>);
  <span class="hljs-keyword">return</span> arr;
}
</code></pre>
<p>This way, you can keep the <code>JsonDocument</code> alive when you call <code>serializeJson()</code></p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Extending the lifetime of the `JsonDocument` solves the issue"},{id:"not-destroyed",page:254,label:"No",summary:"Extending the lifetime of the `JsonDocument` doesn't solve the issue"}]},{content:`<p><code>JsonObject</code> doesn't contain any data: it is a reference to an object stored in the <code>JsonDocument</code>. It becomes invalid as soon as the <code>JsonDocument</code> is destroyed; this could explain the garbage you see in the output.</p>
<p>For example, here is a function that creates a dangling <code>JsonObject</code>:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// DON&#x27;T DO THAT!!!  💀</span>
<span class="hljs-function">JsonObject <span class="hljs-title">createObject</span><span class="hljs-params">()</span> </span>{
  StaticJsonDocument&lt;<span class="hljs-number">200</span>&gt; doc;
  JsonObject obj = doc.<span class="hljs-built_in">to</span>&lt;JsonObject&gt;();
  obj[<span class="hljs-string">&quot;hello&quot;</span>] = <span class="hljs-string">&quot;world&quot;</span>;
  <span class="hljs-keyword">return</span> obj;
}
</code></pre>
<p>The <code>JsonObject</code> returned by this function points to a destructed <code>JsonDocument</code>, and therefore is likely to produce garbage or crash the program.</p>
<p>The best way to fix this function is to pass the <code>JsonDocument</code> as an argument:</p>
<pre><code class="hljs language-c++"><span class="hljs-function">JsonObject <span class="hljs-title">createObject</span><span class="hljs-params">(JsonDocument&amp; doc)</span> </span>{
  JsonObject obj = doc.<span class="hljs-built_in">to</span>&lt;JsonObject&gt;();
  obj[<span class="hljs-string">&quot;hello&quot;</span>] = <span class="hljs-string">&quot;world&quot;</span>;
  <span class="hljs-keyword">return</span> obj;
}
</code></pre>
<p>This way, you can keep the <code>JsonDocument</code> alive when you call <code>serializeJson()</code></p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Extending the lifetime of the `JsonDocument` solves the issue"},{id:"not-destroyed",page:254,label:"No",summary:"Extending the lifetime of the `JsonDocument` doesn't solve the issue"}]},{content:`<p><code>JsonVariant</code> doesn't contain any data: it is a reference to an object stored in the <code>JsonDocument</code>. It becomes invalid as soon as the <code>JsonDocument</code> is destroyed; this could explain the garbage you see in the output.</p>
<p>For example, here is a function that creates a dangling <code>JsonVariant</code>:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// DON&#x27;T DO THAT!!!  💀</span>
<span class="hljs-function">JsonVariant <span class="hljs-title">createVariant</span><span class="hljs-params">()</span> </span>{
  StaticJsonDocument&lt;<span class="hljs-number">200</span>&gt; doc;
  JsonVariant var = doc.<span class="hljs-built_in">to</span>&lt;JsonVariant&gt;();
  var[<span class="hljs-string">&quot;hello&quot;</span>] = <span class="hljs-string">&quot;world&quot;</span>;
  <span class="hljs-keyword">return</span> var;
}
</code></pre>
<p>The <code>JsonVariant</code> returned by this function points to a destructed <code>JsonDocument</code>, and therefore is likely to produce garbage or crash the program.</p>
<p>The best way to fix this function is to pass the <code>JsonDocument</code> as an argument:</p>
<pre><code class="hljs language-c++"><span class="hljs-function">JsonVariant <span class="hljs-title">createVariant</span><span class="hljs-params">(JsonDocument&amp; doc)</span> </span>{
  JsonVariant var = doc.<span class="hljs-built_in">to</span>&lt;JsonVariant&gt;();
  var[<span class="hljs-string">&quot;hello&quot;</span>] = <span class="hljs-string">&quot;world&quot;</span>;
  <span class="hljs-keyword">return</span> var;
}
</code></pre>
<p>This way, you can keep the <code>JsonDocument</code> alive when you call <code>serializeJson()</code></p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Extending the lifetime of the `JsonDocument` solves the issue"},{id:"not-destroyed",page:254,label:"No",summary:"Extending the lifetime of the `JsonDocument` doesn't solve the issue"}]},{content:`<p><code>serializeMsgPack()</code> share a lot of code with <code>serializeJson()</code>. There is no reason you should produce garbage with one and not the other. You may have found a bug.</p>
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
<p>I need you to edit your program to replace <code>serializeMsgPack()</code> with <code>serializeJson()</code>.</p>
<p>Do you see the garbage in the JSON output?</p>
`,options:[{id:"json",page:246,label:"Yes, <code>serializeJson()</code> produces garbage too",summary:"`serializeJson()` produces garbage too"},{id:"deserialize-no",page:250,label:"No, <code>serializeJson()</code> doesn't produces garbage",summary:"`serializeJson()` doesn't produces garbage"}]},{content:`<p><code>JsonDocument::garbageCollect()</code> invalidates all previously acquired <code>JsonArray</code>, <code>JsonObject</code>, and <code>JsonVariant</code>.</p>
<p>After you call it, make sure to reassign  every references, like so:</p>
<pre><code class="hljs language-c++">JsonObject cfg = doc.<span class="hljs-built_in">createNestedObject</span>(<span class="hljs-string">&quot;config&quot;</span>);
<span class="hljs-comment">// ...</span>
doc.<span class="hljs-built_in">garbageCollect</span>();
cfg = doc[<span class="hljs-string">&quot;config&quot;</span>];
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Reassigning references fixes the issue"},{id:"reassigned",page:245,label:"No",summary:"Reassigning references doesn't fix the issue"}]},{content:`<p><code>JsonDocument::shrinkToFit()</code> invalidates all previously acquired <code>JsonArray</code>, <code>JsonObject</code>, and <code>JsonVariant</code>.</p>
<p>After you call it, make sure to reassign  every references, like so:</p>
<pre><code class="hljs language-c++">JsonObject cfg = doc.<span class="hljs-built_in">createNestedObject</span>(<span class="hljs-string">&quot;config&quot;</span>);
<span class="hljs-comment">// ...</span>
doc.<span class="hljs-built_in">shrinkToFit</span>();
cfg = doc[<span class="hljs-string">&quot;config&quot;</span>];
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Reassigning references fixes the issue"},{id:"reassigned",page:245,label:"No",summary:"Reassigning references doesn't fix the issue"}]},{content:`<p>Do you use one of the following function?</p>
`,options:[{id:"garbagecollect",page:252,label:"<code>JsonDocument::garbageCollect()</code>",summary:"Program calls `JsonDocument::garbageCollect()`"},{id:"shrinktofit",page:253,label:"<code>JsonDocument::shrinkToFit()</code>",summary:"Program calls `JsonDocument::shrinkToFit()`"},{id:"none",page:245,label:"No",summary:"Program doesn't call an invalidating function"}]},{content:`<p>What is the type of the first argument passed to <code>serializeJson()</code>?</p>
`,options:[{id:"document",page:245,label:"<code>JsonDocument</code>",summary:"Program calls `serializeJson(const JsonDocument&, ...)`"},{id:"array",page:247,label:"<code>JsonArray</code> (or <code>JsonArrayConst</code>)",summary:"Program calls `serializeJson(JsonArrayConst, ...)`"},{id:"object",page:248,label:"<code>JsonObject</code> (or <code>JsonObjectConst</code>)",summary:"Program calls `serializeJson(JsonObjectConst, ...)`"},{id:"variant",page:249,label:"<code>JsonVariant</code> (or <code>JsonVariantConst</code>)",summary:"Program calls `serializeJson(JsonVariantConst, ...)`"}]},{content:`<p>Does your program call <code>serializeJson()</code> in a loop?</p>
`,options:[{id:"loop",page:263,label:"Yes",summary:"Program calls `serializeJson()` in a loop"},{id:"no-loop",page:264,label:"No",summary:"Program doesn't call `serializeJson()` in a loop"}]},{content:`<p>The ArduinoJson Assistant suggested a too small capacity because you didn't configure it properly.</p>
<p>Here are the things to watch for:</p>
<ol>
<li>the processor type in step 1</li>
<li>the tweaks in step 3, and &quot;Assume keys are const char* in particular</li>
</ol>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Reconfiguring the ArduinoJson Assistant solves the issue"},{id:"still-wrong",page:1,label:"No",summary:"Reconfiguring the ArduinoJson Assistant doesn't solve the issue."}]},{content:`<p>Well, that's very bad news. It seems that your microcontroller doesn't have enough RAM to hold the JSON document.</p>
<p>Please read <a href="/v6/how-to/reduce-memory-usage/">How to reduce memory usage</a>.
It shows several techniques you can use to use less RAM.
Hopefully, you'll make enough room for the memory pool.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Reducing memory usage fixes the issue"},{id:"failure",page:1,label:"No",summary:"Reducing memory usage doesn't fix the issue"}]},{content:`<p>Please print the value of <code>JsonDocument::capacity()</code>, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(doc.<span class="hljs-built_in">capacity</span>());
</code></pre>
<p>What value does it print?</p>
`,options:[{id:"capacity-zero",page:258,label:"<code>0</code>",summary:"`JsonDocument::capacity()` returns `0`"},{id:"capacity-nonzero",page:1,label:"A number greater than <code>0</code>",summary:"`JsonDocument::capacity()` returns a number greater than `0`"}]},{content:`<p>Is the JSON document big?</p>
`,options:[{id:"big",page:267,label:"Yes, it contains hundred of values",summary:"The JSON document is large"},{id:"small",page:1,label:"No, it doesn't contain that many values",summary:"The JSON document is not large"}]},{content:`<p>Please replace the call to <code>JsonDocument::clear()</code> with <code>JsonDocument::garbageCollect()</code>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Calling `JsonDocument::garbageCollect()` solves the issue"},{id:"gc",page:264,label:"No",summary:"Calling `JsonDocument::garbageCollect()` doesn't solve the issue"}]},{content:`<p>We can try to clear the content of the <code>JsonDocument</code>.</p>
<p>Please call <code>JsonDocument::clear()</code> at the beginning of the loop.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Calling `JsonDocument::clear()` solves the issue"},{id:"clear",page:264,label:"No",summary:"Calling `JsonDocument::clear()` doesn't solve the issue"},{id:"missing",page:261,label:"Yes, but now some values are missing",summary:"Calling `JsonDocument::clear()` solves the issue but removes other values"}]},{content:`<p>Calling <code>serializeJson()</code> is safe, but you'll run into issues if you modify the same <code>JsonDocument</code> in a loop.</p>
<p>The best workaround is to move the declaration of the <code>JsonDocument</code> inside the loop.</p>
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
`,options:[{id:"success",page:2,label:"Yes",summary:"Moving the `JsonDocument` inside the loop solves the issue"},{id:"inside",page:264,label:"No",summary:"Moving the `JsonDocument` inside the loop doesn't solve the issue"},{id:"outside",page:262,label:"I cannot move the declaration inside the loop",summary:"The `JsonDocument` cannot be moved inside the loop"}]},{content:`<p>Please print the value of <code>JsonDocument::overflowed()</code>, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(doc.<span class="hljs-built_in">overflowed</span>());
</code></pre>
<p>What value does it print?</p>
`,options:[{id:"overflowed-1",page:266,label:"<code>1</code> (or <code>true</code>)",summary:"`JsonDocument::overflowed()` returns `true`"},{id:"overflowed-0",page:265,label:"<code>0</code> (or <code>false</code>)",summary:"`JsonDocument::overflowed()` returns `false`"}]},{content:`<p>Does one of the strings in the <code>JsonDocument</code> contains a NUL (i.e.,  ASCII code 0, or <code>\\u0000</code>)?</p>
`,options:[{id:"nul",page:215,label:"Yes",summary:"One or more strings contain a NUL"},{id:"no-nul",page:260,label:"No",summary:"No string contains a NUL"}]},{content:`<p><code>JsonDocument::overflowed()</code> returns <code>true</code> when you try to insert a value in the <code>JsonDocument</code>, but there isn't enough room to store it.</p>
<p>The solution is to increase the capacity of the <code>JsonDocument</code>.<br>
As usual, use the <a href="/v6/assistant/">ArduinoJson Assistant</a> to compute the right capacity for your project.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Increasing the capacity of the `JsonDocument` solves the issue."},{id:"assistant-is-wrong",page:257,label:"Yes, but the required capacity is greater than what the ArduinJson Assistant says.",summary:"The required capacity is greater than what the ArduinJson Assistant says."},{id:"capacity-increased",page:259,label:"No",summary:"Increasing the capacity of the `JsonDocument` doesn't solve the issue."}]},{content:`<p>Indeed, due to an optimization, a <code>JsonDocument</code> is limited in the number of nodes it can contain.
The following table shows the maximum number of nodes for each architecture:</p>
<table class="table">
<thead>
<tr>
<th>CPU architecture</th>
<th>Max nodes</th>
</tr>
</thead>
<tbody>
<tr>
<td>8-bit</td>
<td>127</td>
</tr>
<tr>
<td>32-bit</td>
<td>32767</td>
</tr>
<tr>
<td>64-bit</td>
<td>2147483647</td>
</tr>
</tbody>
</table>
<p>You can increase this limit by increasing <code>ARDUINOJSON_SLOT_OFFSET_SIZE</code>.
However, doing will significantly increase memory consumption, so you'll need to increase the capacity of your <code>JsonDocument</code>.
Unfortunately, you cannot count on the ArduinoJson Assistant anymore.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"nul",page:2,label:"Yes",summary:"Increasing `ARDUINOJSON_SLOT_OFFSET_SIZE` solves the issue"},{id:"no-nul",page:1,label:"No",summary:"Increasing `ARDUINOJSON_SLOT_OFFSET_SIZE` doesn't solve the issue"}]},{content:`<p><code>serializeJson()</code> writes the JSON document mostly one character at a time, which can be pretty slow with unbuffered streams (such as <a href="https://www.arduino.cc/en/Reference/EthernetClient"><code>EthernetClient</code></a>, <a href="https://www.arduino.cc/en/Reference/WiFiClient"><code>WifiClient</code></a>, <a href="https://www.arduino.cc/en/Reference/SD"><code>File</code></a>, and <a href="https://github.com/knolleary/pubsubclient/">PubSubClient</a>).</p>
<p>To speed up the serialization process, you must insert a buffer between the stream and <code>serializeJson()</code>.
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
`,options:[{id:"success",page:2,label:"Yes",summary:"Adding `WriteBufferingStream` fixes the issue"},{id:"failure",page:1,label:"No",summary:"Adding `WriteBufferingStream` doesn't fix the issue"}]},{content:`<p>When does your issue happen?</p>
`,options:[{id:"compiletime",page:270,label:"At compile time",summary:"The issue happens at compile time"},{id:"runtime",page:280,label:"At run time",summary:"The issue happens at run time"}]},{content:`<p>Please look at the <strong>first</strong> error in the compiler output, and tell me what it is...</p>
`,options:[{id:"requires-cpp-compiler",page:85,label:"ArduinoJson requires a C++ compiler...",summary:'Error says "ArduinoJson requires a C++ compiler..."'},{id:"assignment-of-read-only-location",page:271,label:"assignment of read-only location",summary:'Error says "assignment of read-only location"'},{id:"ambiguous-string-assign",page:35,label:"ambiguous overload for <code>operator=</code> (operand types are <code>String</code> and ...)",summary:'Error says "ambiguous overload for `operator=` (operand types are `String` and ...)"'},{id:"begin-not-found",page:54,label:"<code>begin</code>: no matching overloaded function found",summary:'Error says "`begin`: no matching overloaded function found"'},{id:"error-constants",page:75,label:"<code>bits/error_constants.h</code>: No such file or directory",summary:'Error says "`bits/error_constants.h`: No such file or directory'},{id:"print-ambiguous",page:76,label:"call of overloaded <code>print(...)</code> is ambiguous",summary:'Error says "call of overloaded `print(...)` is ambiguous"'},{id:"cannot-bind-object-ref",page:73,label:"cannot bind non-const lvalue reference of type <code>ArduinoJson::JsonObject&amp;</code> ...",summary:'Error says "cannot bind non-const lvalue reference of type `ArduinoJson::JsonObject&` ..."'},{id:"class-has-no-member-named-read",page:279,label:"<code>class Xxx</code> has no member named <code>read</code>",summary:'Error says "`class Xxx` has no member named `read`"'},{id:"pointer-to-object",page:72,label:"<code>const void*</code> is not a pointer-to-object type",summary:'Error says "`const void*` is not a pointer-to-object type"'},{id:"doesnt-name-a-type",page:277,label:"<code>doc</code> does not name a type",summary:'Error says "`doc` does not name a type"'},{id:"dynamicjsonbuffer",page:272,label:"<code>DynamicJsonBuffer</code> is a class from ArduinoJson 5",summary:'Error says "`DynamicJsonBuffer` is a class from ArduinoJson 5"'},{id:"expected-identifier-before-string-constant",page:49,label:"expected identifier before string constant",summary:'Error says "expected identifier before string constant"'},{id:"char-pointer-conversion",page:39,label:"invalid conversion from <code>const char*</code> to <code>char*</code> [-fpermissive]",summary:'Error says "invalid conversion from `const char*` to `char*` [-fpermissive]"'},{id:"invalid-conversion",page:50,label:"invalid use of incomplete type <code>class InvalidConversion&lt;...&gt;</code>",summary:'Error says "invalid use of incomplete type `class InvalidConversion<...>`"'},{id:"jsondocument-not-declared",page:71,label:"<code>JsonDocument</code> was not declared in this scope",summary:'Error says "`JsonDocument` was not declared in this scope"'},{id:"no-matching-function",page:278,label:"no matching function for call to ...",summary:'Error says "no matching function for call to ..."'},{id:"passing-volatile-as-this-argument-discards-qualifiers",page:74,label:"passing <code>volatile ...</code> as <code>this</code> argument discards qualifiers [-fpermissive]",summary:'Error says "passing `volatile ...` as `this` argument discards qualifiers [-fpermissive]"'},{id:"cast-void-to-flashstringhelper",page:38,label:"reinterpret_cast from <code>const void</code> to <code>const __FlashStringHelper *</code> is not allowed",summary:'Error says "reinterpret_cast from `const void` to `const __FlashStringHelper *` is not allowed"'},{id:"request-for-member",page:77,label:"request for member ...",summary:'Error says "request for member ..."'},{id:"staticjsonbuffer",page:272,label:"<code>StaticJsonBuffer</code> is a class from ArduinoJson 5",summary:'Error says "`StaticJsonBuffer` is a class from ArduinoJson 5"'},{id:"struct-has-no-member-named-read",page:279,label:"<code>struct Xxx</code> has no member named <code>read</code>",summary:'Error says "`struct Xxx` has no member named `read`"'},{id:"range-based-for-requires-begin",page:54,label:"this range-based <code>for</code> statement requires a suitable &quot;begin&quot; function and none was found",summary:'Error says "this range-based `for` statement requires a suitable "begin" function and none was found"'},{id:"not-in-list",page:3,label:"None of the above",summary:"The error is not in the list"}]},{content:`<p>This error occurs when you pass a string to <code>JsonArray::operator[]</code>; i.e., when you use an array like an object.</p>
<p>For example, if you try to compile the following code:</p>
<pre><code class="hljs language-c++">JsonDocument doc;
JsonArray array = doc.<span class="hljs-built_in">to</span>&lt;JsonArray&gt;();
array[<span class="hljs-string">&quot;key&quot;</span>] = <span class="hljs-string">&quot;value&quot;</span>;  <span class="hljs-comment">// ERROR</span>
</code></pre>
<p>...you'll get the following error message:</p>
<pre><code class="hljs language-text">error: assignment of read-only location &#x27;*(((const char*)&quot;key&quot;) + ((sizetype)array.ArduinoJson::V700L1::JsonArray::operator bool()))&#x27;
 array[&quot;key&quot;] = &quot;value&quot;;  // ERROR
                ^~~~~~~
</code></pre>
<p>The solution is to use the array correctly or to switch to an object.</p>
<p>So do either this:</p>
<pre><code class="hljs language-c++">JsonDocument doc;
JsonArray array = doc.<span class="hljs-built_in">to</span>&lt;JsonArray&gt;();
array[<span class="hljs-number">0</span>] = <span class="hljs-string">&quot;value&quot;</span>;  <span class="hljs-comment">// ERROR</span>
</code></pre>
<p>...or that:</p>
<pre><code class="hljs language-c++">JsonDocument doc;
JsonObject obj = doc.<span class="hljs-built_in">to</span>&lt;JsonObject&gt;();
obj[<span class="hljs-string">&quot;key&quot;</span>] = <span class="hljs-string">&quot;value&quot;</span>;
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Using an integer or switching to an object fixes the issue"},{id:"failure",page:1,label:"No",summary:"Neither using an integer nor switching to an object fixes the issue"}]},{content:`<p>This error occurs when you try to use ArduinoJson 7 with a program written for ArduinoJson 5.</p>
<p>Is your program directly using ArduinoJson, or is it using a library that depends on ArduinoJson?</p>
`,options:[{id:"upgrade",page:273,label:"My program uses ArduinoJson directly",summary:"Program uses ArduinoJson directly"},{id:"keep-v5",page:275,label:"My program uses a library that depends on ArduinoJson",summary:"Program uses a library that depends on ArduinoJson"}]},{content:`<p>Can you upgrade the program or do you prefer keeping it as it is?</p>
`,options:[{id:"upgrade",page:276,label:"I'd like to upgrade to ArduinoJson 7",summary:"User prefers upgrading to ArduinoJson 7"},{id:"keep-v5",page:274,label:"I prefer not touching the program",summary:"User prefers keeping ArduinoJson 5"}]},{content:`<p>I recommend that you download <a href="https://github.com/bblanchon/ArduinoJson/releases/download/v5.13.5/ArduinoJson-v5.13.5.h"><code>ArduinoJson-v5.13.5.h</code></a> and save it among the project files, this way you're sure that the project is distributed with the right version of the library.</p>
<p>You can choose to keep the name <code>ArduinoJson-v5.13.5.h</code> and update the <code>#include</code> directive, or you can rename the file to <code>ArduinoJson.h</code>; either way is fine, as long as the header is in the same folder as the file that includes it.</p>
<p>Please see <a href="/v5/doc/installation/">installation instructions</a> for details</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Downloading ArduinoJson 5 fixes the issue"},{id:"failure",page:1,label:"No",summary:"Downloading ArduinoJson 5 doesn't fix the issue"}]},{content:`<p>Since you cannot upgrade the code of the library depending on ArduinoJson, the simplest solution is to downgrade ArduinoJson to version 5.</p>
<p>On the Arduino IDE, click on the Library Manager icon, then search ArduinoJson and install version 5.13.5.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Installing ArduinoJson 5 fixes the issue"},{id:"failure",page:1,label:"No",summary:"Installing ArduinoJson 5 doesn't fix the issue"}]},{content:`<p>Upgrading from v5 to v7 isn't trivial but isn't complicated either.<br>
Please follow the <a href="/v7/how-to/upgrade-from-v5/">upgrade instructions</a>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Upgrading fixes the issue"},{id:"failure",page:1,label:"No",summary:"Upgrading doesn't fix the issue"}]},{content:`<p>This error usually occurs when you write statements at the global scope, which isn't possible in C++.</p>
<p>Unlike many popular languages like Python or JavaScript, the C++ language doesn't allow statements at the global scope.
Instead, you must move all statements into a function.
The entry point for a regular C++ program is the <code>main()</code> function, but in an Arduino program, it's the <code>setup()</code> function.</p>
<p>For example, if your program is like this:</p>
<pre><code class="hljs language-c++">JsonDocument doc;
doc[<span class="hljs-string">&quot;hello&quot;</span>] = <span class="hljs-string">&quot;world&quot;</span>;
<span class="hljs-built_in">serializeJson</span>(doc, Serial);
</code></pre>
<p>...you must rewrite it like this:</p>
<pre><code class="hljs language-c++"><span class="hljs-function"><span class="hljs-type">void</span> <span class="hljs-title">setup</span><span class="hljs-params">()</span> </span>{
  JsonDocument doc;
  doc[<span class="hljs-string">&quot;hello&quot;</span>] = <span class="hljs-string">&quot;world&quot;</span>;
  <span class="hljs-built_in">serializeJson</span>(doc, Serial);
}
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Moving statement to `setup()` fixes the issue"},{id:"failure",page:1,label:"No",summary:"Moving statement to `setup()` doesn't fix the issue"}]},{content:`<p>Which error is it?</p>
`,options:[{id:"basicjsondocument",page:63,label:"no matching function for call to <code>BasicJsonDocument::BasicJsonDocument()</code>",summary:'Error says "no matching function for call to `BasicJsonDocument::BasicJsonDocument()`"'},{id:"converttojson",page:64,label:"no matching function for call to <code>convertToJson(...)</code>",summary:'Error says "no matching function for call to `convertToJson(...)`"'},{id:"deserializejson",page:65,label:"no matching function for call to <code>deserializeJson(StaticJsonDocument&lt;200&gt; (&amp;)(), ...)</code>",summary:'Error says "no matching function for call to `deserializeJson(StaticJsonDocument<200> (&)(), ...)`"'},{id:"unresolved-overloaded-function-type",page:67,label:"no matching function for call to <code>...(&lt;unresolved overloaded function type&gt;)</code>",summary:'Error says "no matching function for call to `...(<unresolved overloaded function type>)`"'},{id:"add-jsonarray",page:59,label:"no matching function for call to <code>...add&lt;JsonArray&gt;()</code>",summary:'Error says "no matching function for call to `...add<JsonArray>()`"'},{id:"add-jsonobject",page:60,label:"no matching function for call to <code>...add&lt;JsonObject&gt;()</code>",summary:'Error says "no matching function for call to `...add<JsonObject>()`"'},{id:"not-in-list",page:3,label:"None of the above",summary:"The error is not in the list"}]},{content:`<p>This error occurs when you pass an invalid input type to <code>deserializeJson()</code>.</p>
<p>For example, if you write this:</p>
<pre><code class="hljs language-c++"><span class="hljs-keyword">class</span> <span class="hljs-title class_">Input</span> {
  <span class="hljs-comment">// ...</span>
};

<span class="hljs-function"><span class="hljs-type">void</span> <span class="hljs-title">parseInput</span><span class="hljs-params">(Input input)</span> </span>{
  JsonDocument doc;
  <span class="hljs-built_in">deserializeJson</span>(doc, input);
  <span class="hljs-comment">// ...</span>
}
</code></pre>
<p>You'll get a long compiler output that includes this error:</p>
<pre><code class="hljs language-text">ArduinoJson/Deserialization/Reader.hpp:22:21: error: &#x27;class Input&#x27; has no member named &#x27;read&#x27;
     return source_-&gt;read();  // Error here? See https://arduinojson.org/v7/invalid-input/
</code></pre>
<p>Please double-check that you called <code>deserializeJson()</code> with the right arguments.</p>
<p>If you do want to read from an unsupported input type (like <code>Input</code> in the example above), you must implement <code>read()</code> and <code>readBytes()</code> in this class or an <a href="https://en.wikipedia.org/wiki/Adapter_pattern">adapter class</a>.
Please see <a href="/v7/api/json/deserializejson/#custom-reader">custom readers</a> for more details.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Passing a supported input type to `deserializeJson()` fixed the issue"},{id:"failure",page:1,label:"No",summary:"Passing a supported input type to `deserializeJson()` didn't fix the issue"}]},{content:`<p>Does your issue concern serialization or deserialization?</p>
`,options:[{id:"serialization",page:320,label:"Serialization",summary:"The issue concerns serialization"},{id:"deserialization",page:281,label:"Deserialization",summary:"The issue concerns deserialization"}]},{content:`<p>What is the value of <code>DeserializationError</code>?</p>
`,options:[{id:"ok",page:298,label:"<code>Ok</code>",summary:"`deserializeJson()` returns `Ok`"},{id:"emptyinput",page:287,label:"<code>EmptyInput</code>",summary:"`deserializeJson()` returns `EmptyInput`"},{id:"incompleteinput",page:291,label:"<code>IncompleteInput</code>",summary:"`deserializeJson()` returns `IncompleteInput`"},{id:"invalidinput",page:295,label:"<code>InvalidInput</code>",summary:"`deserializeJson()` returns `InvalidInput`"},{id:"nomemory",page:310,label:"<code>NoMemory</code>",summary:"`deserializeJson()` returns `NoMemory`"},{id:"toodeep",page:214,label:"<code>TooDeep</code>",summary:"`deserializeJson()` returns `TooDeep`"},{id:"crash",page:283,label:"I can't tell because the program crashes",summary:"The program crashes"},{id:"unknown",page:282,label:"I don't know what you're talking about",summary:"The program doesn't check the error"}]},{content:`<p><code>DeserializationError</code> is the return type of <code>deserializeJson()</code>. It tells whether the operation succeeded and indicates the cause of the error.</p>
<p>Modify your program to show the error code, like so:</p>
<pre><code class="hljs language-c++">DeserializationError error = <span class="hljs-built_in">deserializeJson</span>(doc, input);

Serial.<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;deserializeJson() returned &quot;</span>);
Serial.<span class="hljs-built_in">println</span>(error.<span class="hljs-built_in">c_str</span>());
</code></pre>
<p>Now, what does it show?</p>
`,options:[{id:"ok",page:298,label:"<code>Ok</code>",summary:"`deserializeJson()` returns `Ok`"},{id:"emptyinput",page:287,label:"<code>EmptyInput</code>",summary:"`deserializeJson()` returns `EmptyInput`"},{id:"incompleteinput",page:291,label:"<code>IncompleteInput</code>",summary:"`deserializeJson()` returns `IncompleteInput`"},{id:"invalidinput",page:295,label:"<code>InvalidInput</code>",summary:"`deserializeJson()` returns `InvalidInput`"},{id:"nomemory",page:310,label:"<code>NoMemory</code>",summary:"`deserializeJson()` returns `NoMemory`"},{id:"toodeep",page:214,label:"<code>TooDeep</code>",summary:"`deserializeJson()` returns `TooDeep`"}]},{content:`<p>I need to know for sure if the program crashes before or after calling <code>deserializeJson()</code>.</p>
<p>Please add some traces around the call to <code>deserializeJson()</code> and make sure to flush the Serial buffer. You can use the <a href="https://github.com/bblanchon/ArduinoTrace">ArduinoTrace library</a>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-built_in">TRACE</span>();
DeserializationError err = <span class="hljs-built_in">deserializeJson</span>(doc, input);
<span class="hljs-built_in">TRACE</span>();
</code></pre>
<p>How many traces can you see in the Serial Monitor?</p>
`,options:[{id:"before",page:285,label:"None: program crashes before calling <code>deserializeJson()</code>",summary:"Program crashes before calling `deserializeJson()`"},{id:"inside",page:286,label:"Only one: program crashes inside <code>deserializeJson()</code>",summary:"Program crashes inside `deserializeJson()`"},{id:"after",page:284,label:"Two traces: program crashes after calling <code>deserializeJson()</code>",summary:"Program crashes after calling `deserializeJson()`"}]},{content:`<p>A programs can also crash after calling <code>deserializeJson()</code> because it keeps a pointer to a string stored in the <code>JsonDocument</code>.</p>
<p>Indeed, when <code>JsonDocument</code> returns a <code>const char*</code>, it doesn't return a copy of the string, but the address of the string in the memory pool. When the <code>JsonDocument</code> is destructed, the memory pool gets released and the pointer dangles. Later, when the program tries to use the string, it reads at an invalid memory location and crashes.</p>
<p>For example, it happens with the following program:</p>
<pre><code class="hljs language-c++"><span class="hljs-type">const</span> <span class="hljs-type">char</span>* username;

<span class="hljs-function"><span class="hljs-type">void</span> <span class="hljs-title">loadConfig</span><span class="hljs-params">()</span> </span>{
  File file = SD.<span class="hljs-built_in">open</span>(filename);
  JsonDocument doc;
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
  JsonDocument doc;
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
<p>Alternatively, you can use a <code>char[]</code> and <a href="https://en.cppreference.com/w/c/string/byte/strcpy"><code>strcpy()</code></a>; I invite you to check the <a href="/v7/example/config/">JsonConfigFile.ino</a> for the details.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Replacing pointer with a `String` solves the issue"},{id:"no-dangling-pointer",page:92,label:"No",summary:"Replacing pointer with a `String` doesn't solve the issue"}]},{content:`<p>I think this could be a stack-overflow.</p>
<p>Please check in your code if there aren't some large variable in the stack. Look for things like:</p>
<ul>
<li><code>char buffer[1024]</code></li>
<li><code>int matrix[64][64][64]</code></li>
<li><code>alloca(1024)</code></li>
</ul>
<p>Move them to the heap by using one of the following:</p>
<ul>
<li><a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a></li>
<li><a href="https://en.cppreference.com/w/cpp/container/vector"><code>std::vector</code></a></li>
<li><a href="https://en.cppreference.com/w/cpp/string/basic_string">\`std::string</a></li>
<li><a href="https://en.cppreference.com/w/cpp/memory/unique_ptr"><code>std::unique_ptr</code></a></li>
</ul>
<p>In the last resort, you can use <a href="https://en.cppreference.com/w/c/memory/malloc"><code>malloc()</code></a> and <a href="https://en.cppreference.com/w/c/memory/free"><code>free()</code></a>.</p>
<p>Does your program still crash?</p>
`,options:[{id:"failure",page:1,label:"Yes",summary:"Reducing stack usage doesn't prevent the crash"},{id:"success",page:2,label:"No",summary:"Reducing stack usage prevents the crash"}]},{content:`<p>Passing a dangling pointer could cause a crash.</p>
<p>If you pass a pointer to <code>deserializeJson()</code>, make sure that this pointer is still valid. For example, if the pointer is returned by a function, inspect the function to make sure pointer is not refering to a stack variable:</p>
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
<p>If you pass <a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a> to <code>deserializeJson()</code>, make sure you don't call <code>c_str()</code> in between:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// 💀 DON&#x27;T DO THAT!!!</span>
<span class="hljs-type">const</span> <span class="hljs-type">char</span>* input = <span class="hljs-built_in">readInput</span>().<span class="hljs-built_in">c_str</span>();

<span class="hljs-comment">// Possible workaround</span>
String input = <span class="hljs-built_in">readInput</span>();
</code></pre>
<p>Please review your code to make sure you're not passsing a dangling pointer to <code>deserializeJson()</code>.</p>
<p>Does your program still crash?</p>
`,options:[{id:"no-dangling-ptr",page:285,label:"Yes",summary:"Removing dangling pointers doesn't prevent the crash"},{id:"success",page:2,label:"No",summary:"Removing dangling pointers prevents the crash"}]},{content:`<p><code>EmptyInput</code> means that the input was empty or contained only spaces or comments.</p>
<p>Where does your JSON input come from?</p>
`,options:[{id:"http",page:109,label:"An HTTP response",summary:"Input comes from an HTTP response"},{id:"file",page:288,label:"A file",summary:"Input comes from a file"},{id:"serial",page:290,label:"A serial port",summary:"Input comes from a serial port"},{id:"other",page:114,label:"Something else",summary:"Input comes neither from an HTTP response, nor a file, nor a serial port"}]},{content:`<p><code>EmptyInput</code> in the context of a file usually means:</p>
<ul>
<li>the file is closed</li>
<li>the file is opened in the wrong mode</li>
<li>the file is empty</li>
<li>the current position is at the end of the file</li>
</ul>
<p>Please, make sure that the file is opened in &quot;read&quot; mode and try to print the content to make sure it's not empty.</p>
<p>You can find an example using the SD library in <a href="/v7/example/config/">JsonConfigFile.ino</a> and one using LittleFS in <a href="/book/">Mastering ArduinoJson</a>.</p>
<p>Did this sole your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"The file was the problem"},{id:"failure",page:1,label:"No",summary:"The file is not the problem"}]},{content:`<p><code>deserializeJson()</code> also returns <code>EmptyInput</code> when the input contains only spaces.</p>
<p>For example, this can happen when you call <code>deserializeJson()</code> repeatedly and there are spaces (or line breaks) between the documents. Suppose you use the following program to parse JSON input from the serial port:</p>
<pre><code class="hljs language-c++"><span class="hljs-function"><span class="hljs-type">void</span> <span class="hljs-title">loop</span><span class="hljs-params">()</span> </span>{
  <span class="hljs-comment">// wait from an incoming message</span>
  <span class="hljs-keyword">while</span> (Serial.<span class="hljs-built_in">available</span>() == <span class="hljs-number">0</span>)
    <span class="hljs-built_in">delay</span>(<span class="hljs-number">100</span>);
    
  JsonDocument doc;
  DeserializationError err = <span class="hljs-built_in">deserializeJson</span>(doc, Serial);
  
  ...
}
</code></pre>
<p>If you use the default settings of the Arduino Serial Monitor, <code>err</code> will contains <code>Ok</code> and then <code>EmptyInput</code> each time you press &quot;Send&quot;.</p>
<p>Indeed, by default the Arduino Serial Monitor appends <a href="https://fr.wikipedia.org/wiki/Carriage_Return_Line_Feed">CRLF</a> at the end of the message, so when you enter <code>{&quot;hello&quot;:&quot;world&quot;}</code> in the input box, what is really sent is <code>{&quot;hello&quot;:&quot;world&quot;}\\r\\n</code>.
Since <code>deserializeJson()</code> stops reading immediately at the end of the object, the <code>\\r\\n</code> remains in the serial buffer.
Therefore, <a href="https://www.arduino.cc/reference/en/language/functions/communication/serial/available/"><code>Serial::available()</code></a> returns <code>2</code> and the program calls <code>deserializeJson()</code> again.
<code>deserializeJson()</code> reads <code>\\r\\n</code>, which are just white spaces for him, so it continues reading until a timeout occurs (1s by default), and it finally returns <code>EmptyInput</code>.</p>
<p>You can fix this problem by changing the configuration of the Serial Monitor to &quot;No line ending&quot;.
If you cannot remove the CR+LF at the end of the message, you must add a flush loop after <code>deserializeJson(doc, Serial)</code>, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-keyword">while</span> (<span class="hljs-built_in">isspace</span>(Serial.<span class="hljs-built_in">peek</span>())
  Serial.<span class="hljs-built_in">read</span>();
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Removing CRLF fixes the issue"},{id:"failure",page:1,label:"No",summary:"Removing CRLF doesn't fix the issue"}]},{content:`<p><code>EmptyInput</code> can be caused by a timeout while waiting for the input.</p>
<p>In that case, the solution is to wait until some data is available before calling <code>deserializeJson()</code>. A simple loop can do the trick:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// wait from an incoming message</span>
<span class="hljs-keyword">while</span> (Serial.<span class="hljs-built_in">available</span>() == <span class="hljs-number">0</span>)
  <span class="hljs-built_in">delay</span>(<span class="hljs-number">100</span>);

<span class="hljs-built_in">deserializeJson</span>(doc, Serial);
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Adding a wait loop fixes the issue"},{id:"available",page:289,label:"No",summary:"Adding a wait loop doesn't fix the issue"}]},{content:`<p><code>IncompleteInput</code> means that <code>deserializeJson()</code> managed to parse the beginning of the JSON document, but the end was missing.</p>
<p>What type of input do you pass to <code>deserializeJson()</code>?</p>
`,options:[{id:"stream",page:120,label:"A stream",summary:"Input comes from a stream"},{id:"string",page:292,label:"A string object (like <code>String</code>)",summary:"Input comes from a string object"},{id:"pointer",page:293,label:"A pointer (like <code>char*</code> or <code>const char*</code>)",summary:"Input comes from a pointer"}]},{content:`<p>Please print the content of the string to the serial port, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(input);
</code></pre>
<p>You should see that the JSON document is truncated.
This can be caused by a lack of RAM: the string object failed to allocate a buffer large enough for the whole document.</p>
<p>This issue may come from <a href="https://cpp4arduino.com/2018/11/06/what-is-heap-fragmentation.html">heap fragmentation</a>.
Fixing this problem is very hard because it involve fixing the whole program, not just the JSON deserialization.</p>
<p>Yet, you can try to preallocate the buffer by calling <a href="https://www.arduino.cc/reference/en/language/variables/data-types/string/functions/reserve/"><code>String::reserve()</code></a> before loading the content of the input, like so:</p>
<pre><code class="hljs language-c++">input.<span class="hljs-built_in">reserve</span>(<span class="hljs-number">1024</span>);  <span class="hljs-comment">// adapt the value to the size of your input</span>
</code></pre>
<p>Hopefully, you'll be able to reserve a buffer large enough to store the whole string.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"0",page:2,label:"Yes",summary:"Calling `String::reserve()` solves the issue"},{id:"1",page:294,label:"No",summary:"Calling `String::reserve()` doesn't solve the issue"}]},{content:`<p>I'll assume that your input is stored in a buffer similar to this one:</p>
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
`,options:[{id:"0",page:2,label:"Yes",summary:"Increasing the buffer size solves the issue"},{id:"1",page:294,label:"No",summary:"Increasing the buffer size doesn't solve the issue"}]},{content:`<p>To reduce the memory usage, you should try to pass the source (file, connection, stream, etc) directly to <code>deserializeJson()</code>, either via the <a href="https://www.arduino.cc/reference/en/language/functions/communication/stream/"><code>Stream</code></a> interface or via a <a href="/news/2019/11/01/version-6-13-0/">custom reader</a>. This will avoid the need for an intermediate buffer.</p>
<p>Additionaly, you can add a <a href="/news/2020/03/22/version-6-15-0/">filter</a> to remove all unneeded information from the <code>JsonDocument</code>.</p>
<p>You can see examples here:</p>
<ul>
<li><a href="/v7/example/config/">JsonConfigFile.ino</a></li>
<li><a href="/v7/example/http-client/">JsonHttpClient.ino</a></li>
<li><a href="/v7/doc/deserialization/">Deserialization tutorial</a></li>
<li><a href="/book/">Mastering ArduinoJson</a></li>
</ul>
<p>Did this solve your issue?</p>
`,options:[{id:"0",page:2,label:"Yes",summary:"Reading from stream fixes the issue"},{id:"1",page:1,label:"No",summary:"Reading from stream doesn't fix the issue"}]},{content:`<p>Where does the input come from?</p>
`,options:[{id:"http",page:133,label:"An HTTP response",summary:"Input comes from HTTP"},{id:"serial",page:297,label:"A serial port",summary:"Input comes from a serial port"},{id:"file",page:132,label:"A file",summary:"Input comes from a file"},{id:"stream",page:163,label:"A stream",summary:"Input comes from a stream"},{id:"string",page:165,label:"A string (like <code>String</code> or <code>const char*</code>)",summary:"Input comes from a string"}]},{content:`<p><code>deserializeJson()</code> may return <code>InvalidInput</code> because it starts reading the input mid-stream.</p>
<p>For example, it can happen if your program calls <code>deserializeJson()</code> in a loop like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-function"><span class="hljs-type">void</span> <span class="hljs-title">loop</span><span class="hljs-params">()</span> </span>{
  <span class="hljs-keyword">if</span> (Serial1.<span class="hljs-built_in">available</span>()) {
    JsonDocument doc;
    DeserializationError err = <span class="hljs-built_in">deserializeJson</span>(doc, Serial1);

    <span class="hljs-keyword">if</span> (err) {
      Serial.<span class="hljs-built_in">println</span>(err.<span class="hljs-built_in">c_str</span>());
      <span class="hljs-keyword">return</span>;
    }

    <span class="hljs-comment">// ...</span>
  }
}
</code></pre>
<p>The problem with this program is that, if <code>deserializeJson()</code> returns an error (such as <code>NoMemory</code>), any subsequent call to <code>deserializeJson()</code> will return <code>InvalidInput</code>. Indeed, <code>deserializeJson()</code> stops reading as soon as it encounters an error, so the remainder of the document is still in the serial buffer.</p>
<p>The solution is to flush the serial buffer any time an error is detected:</p>
<pre><code class="hljs language-c++"><span class="hljs-function"><span class="hljs-type">void</span> <span class="hljs-title">loop</span><span class="hljs-params">()</span> </span>{
  <span class="hljs-keyword">if</span> (Serial1.<span class="hljs-built_in">available</span>()) {
    JsonDocument doc;
    DeserializationError err = <span class="hljs-built_in">deserializeJson</span>(doc, Serial1);

    <span class="hljs-keyword">if</span> (err) {
      Serial.<span class="hljs-built_in">println</span>(err.<span class="hljs-built_in">c_str</span>());

      <span class="hljs-keyword">while</span> (Serial1.<span class="hljs-built_in">available</span>() &gt; <span class="hljs-number">0</span>)
        Serial1.<span class="hljs-built_in">read</span>();

      <span class="hljs-keyword">return</span>;
    }

    <span class="hljs-comment">// ...</span>

  }
}
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Flushing the serial buffer fixes the issue"},{id:"flush",page:159,label:"No",summary:"Flushing the serial buffer doesn't fix the issue"}]},{content:`<p>Are you using <a href="https://www.arduino.cc/en/Reference/SoftwareSerial"><code>SoftwareSerial</code></a>?</p>
`,options:[{id:"software",page:158,label:"Yes",summary:"Program uses `SoftwareSerial`"},{id:"hardware",page:296,label:"No",summary:"Program doesn't use `SoftwareSerial`"}]},{content:`<p>So, what's the problem then?</p>
`,options:[{id:"slow",page:192,label:"It's slow",summary:"Deserialisation is slow"},{id:"invalid",page:167,label:"I expected <code>InvalidInput</code> instead of <code>Ok</code>",summary:"`Ok` is incorrect; it should be `InvalidInput`"},{id:"crash",page:284,label:"My program crashes after calling <code>deserializeJson()</code>",summary:"Program crashes after calling `deserializeJson()`"},{id:"empty",page:299,label:"<code>JsonDocument</code> returns empty/null values",summary:"Program fails to extract values from the `JsonDocument`"},{id:"truncated-strings",page:193,label:"Some strings are truncated",summary:"Some strings are truncated"}]},{content:`<p>Do you use a filter (with <code>DeserializationOption::Filter</code>)?</p>
`,options:[{id:"filter",page:301,label:"Yes",summary:"Program uses `DeserializationOption::Filter`"},{id:"no-filter",page:306,label:"No",summary:"Program doesn't use `DeserializationOption::Filter`"}]},{content:`<p>When a program fails to extract the values from a <code>JsonDocument</code>, it's often because there is a confusion between arrays and objects.</p>
<p>For example, a common mistake is to write:</p>
<pre><code class="hljs language-c++"><span class="hljs-type">const</span> <span class="hljs-type">char</span>* temperature = doc[<span class="hljs-string">&quot;list&quot;</span>][<span class="hljs-string">&quot;main&quot;</span>][<span class="hljs-string">&quot;temp&quot;</span>];
</code></pre>
<p>instead of</p>
<pre><code class="hljs language-c++"><span class="hljs-type">const</span> <span class="hljs-type">char</span>* temperature = doc[<span class="hljs-string">&quot;list&quot;</span>][<span class="hljs-number">0</span>][<span class="hljs-string">&quot;main&quot;</span>][<span class="hljs-string">&quot;temp&quot;</span>];
</code></pre>
<p>They are many variations on this problem and I cannot list them all.</p>
<p>The simplest solution is to use the <a href="/v7/assistant/">ArduinoJson Assistant</a> because the last step shows how to extract the values.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Issue is a confusion between array and object"},{id:"array-object",page:1,label:"No",summary:"Issue is not a confusion between array and object"}]},{content:`<p>Please print the value of <code>JsonDocument::overflowed()</code>, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(filter.<span class="hljs-built_in">overflowed</span>());
</code></pre>
<p>What value does it print?</p>
`,options:[{id:"overflowed-1",page:303,label:"<code>1</code> (or <code>true</code>)",summary:"`filter.overflowed()` returns `true`"},{id:"overflowed-0",page:302,label:"<code>0</code> (or <code>false</code>)",summary:"`filter.overflowed()` returns `false`"}]},{content:`<p>Maybe the filter excludes the part that it should keep. Let's verify that it's doing its job correctly.</p>
<p>Open the <a href="/v7/assistant/">ArduinoJson Assistant</a>:</p>
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
`,options:[{id:"success",page:2,label:"Yes",summary:"Fixing the filter solves the issue"},{id:"filter-ok",page:306,label:"No",summary:"Fixing the filter doesn't solve the issue"}]},{content:`<p><code>JsonDocument::overflowed()</code> returns <code>true</code> when you try to insert a value in the <code>JsonDocument</code>, but the memory allocation fails.</p>
<p>The solution is to free some memory or upgrade your microcontroller.
You can use the <a href="/v7/assistant/">ArduinoJson Assistant</a> to check if your microcontroller has enough memory.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Freeing some memory solves the issue."},{id:"failure",page:302,label:"No",summary:"Freeing some memory doesn't solve the issue."}]},{content:`<p>Which function do you call to deserialize the input?</p>
`,options:[{id:"json",page:1,label:"<code>deserializeJson()</code>",summary:"Program calls `deserializeJson()`"},{id:"msgpack",page:305,label:"<code>deserializeMsgPack()</code>",summary:"Program calls `deserializeMsgPack()`"}]},{content:`<p>It seems that your program fed <code>deserializeMsgPack()</code> with garbage input.</p>
<p>Indeed, any byte in the following ranges is a valid one-byte MessagePack document:</p>
<ul>
<li><code>0x00</code>-<code>0x7f</code>: positive fixint</li>
<li><code>0xc0</code>: nil</li>
<li><code>0xc2</code>: false</li>
<li><code>0xc3</code>: true</li>
<li><code>0xe0</code>-<code>0xff</code>: negative fixint</li>
</ul>
<p>As you can see, these values cover about 63% of all possible values for a random byte; that's why they are very likely to occur.</p>
<p>When the first byte in the input is one of these, <code>deserializeMsgPack()</code> saves the corresponding value in the <code>JsonDocument</code> and immediately returns <code>Ok</code>, which is the correct behavior.</p>
<p>To fix this issue, you must repair the input.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"The input was incorrect"},{id:"not-garbage",page:1,label:"No",summary:"The input is correct"}]},{content:`<p>Please print the content of the <code>JsonDocument</code> to the serial port like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-built_in">serializeJson</span>(doc, Serial);
Serial.<span class="hljs-built_in">println</span>(); <span class="hljs-comment">// adds a line break (optional)</span>
</code></pre>
<p>What's the first character?</p>
`,options:[{id:"quote",page:309,label:"A quote (<code>&quot;</code>)",summary:"Serialized document starts with a quote"},{id:"bracket",page:300,label:"A square bracket (<code>[</code>)",summary:"Serialized document starts with a square bracket"},{id:"brace",page:300,label:"A curly brace (<code>{</code>)",summary:"Serialized document starts with a curly brace"},{id:"not-in-list",page:304,label:"None of the above",summary:"Serialized document starts with neither a quote, a bracket, nor a brace."}]},{content:`<p>If you cannot fix the server, you can at least reverse the double serialization (stringification) to get back the original object.</p>
<p>To do this, you must call <code>deserializeJson()</code> twice, like so:</p>
<pre><code class="hljs language-c++">JsonDocument doc1, doc2;
<span class="hljs-built_in">deserializeJson</span>(doc1, input);
<span class="hljs-built_in">deserializeJson</span>(doc2, doc1.<span class="hljs-built_in">as</span>&lt;<span class="hljs-type">const</span> <span class="hljs-type">char</span>*&gt;());
String value = doc2[<span class="hljs-string">&quot;hello&quot;</span>];
</code></pre>
<p>In this snippet, <code>doc1</code> is only used during the second deserialization and can be safely discarded after that.
The cleanest way to do this is to wrap the double deserialization in a function, like so:</p>
<pre><code class="hljs language-c++"><span class="hljs-function">DeserilizationError <span class="hljs-title">deserializeJsonTwice</span><span class="hljs-params">(JsonDocument&amp; doc, Stream&amp; input)</span> </span>{
  JsonDocument tmp;
  DeserializationError err = <span class="hljs-built_in">deserializeJson</span>(tmp, input);
  <span class="hljs-keyword">if</span> (err) <span class="hljs-keyword">return</span> err;
  <span class="hljs-keyword">return</span> <span class="hljs-built_in">deserializeJson</span>(doc, tmp.<span class="hljs-built_in">as</span>&lt;<span class="hljs-type">const</span> <span class="hljs-type">char</span>*&gt;());
}
</code></pre>
<p>Of course, if you need to use the <a href="/news/2020/03/22/version-6-15-0/">filtering feature</a>, you must pass <code>DeserializationOption::Filter</code> to the second call to <code>deserializeJson()</code>.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Calling `deserializeJson()` twice fixes the issue"},{id:"call-twice",page:1,label:"No",summary:"Calling `deserializeJson()` twice doesn't fix the issue"}]},{content:`<p>In the server implementation, please look at the view that returns the faulty JSON.
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
`,options:[{id:"success",page:2,label:"Yes",summary:"Fixing the server fixes the issue"},{id:"server-ok",page:307,label:"No",summary:"Fixing the server doesn't fix the issue"}]},{content:`<p>If you see a double-quote at the beginning of the JSON input, it means that the whole document is neither an object or an array; it's a string. This happens when the input was incorrectly generated, by serializing (stringifying) to JSON twice.</p>
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
`,options:[{id:"server-fixable",page:308,label:"Yes",summary:"User can modify the server"},{id:"server-unfixable",page:307,label:"No",summary:"User cannot modify the server"}]},{content:`<p>What type did you pass as <code>deserializeJson()</code>'s first argument?</p>
`,options:[{id:"jsonarray",page:311,label:"<code>JsonArray</code>",summary:"The first argument of `deserializeJson()` is a `JsonArray`"},{id:"jsondocument",page:314,label:"<code>JsonDocument</code>",summary:"The first argument of `deserializeJson()` is a `JsonDocument`"},{id:"jsonobject",page:312,label:"<code>JsonObject</code>",summary:"The first argument of `deserializeJson()` is a `JsonObject`"},{id:"jsonvariant",page:313,label:"<code>JsonVariant</code>",summary:"The first argument of `deserializeJson()` is a `JsonVariant`"}]},{content:`<p>You can pass a <code>JsonArray</code> as the first argument of <code>deserializeJson()</code>, but it has to point to an existing array.</p>
<p>For example, the following code fails because the <code>JsonArray</code> is null:</p>
<pre><code class="hljs language-cpp">JsonDocument doc;
JsonArray array = doc[<span class="hljs-string">&quot;values&quot;</span>];  <span class="hljs-comment">// array is null</span>
<span class="hljs-built_in">deserializeJson</span>(array, <span class="hljs-string">&quot;[1,2,3]&quot;</span>);  <span class="hljs-comment">// returns NoMemory</span>
</code></pre>
<p>To fix this issue, you need to explicitly create the array:</p>
<pre><code class="hljs language-cpp">JsonDocument doc;
JsonArray array = doc[<span class="hljs-string">&quot;values&quot;</span>].<span class="hljs-built_in">to</span>&lt;JsonArray&gt;();  <span class="hljs-comment">// create the array</span>
<span class="hljs-built_in">deserializeJson</span>(array, <span class="hljs-string">&quot;[1,2,3]&quot;</span>);  <span class="hljs-comment">// returns Ok</span>
<span class="hljs-comment">// Now, doc contains {&quot;values&quot;:[1,2,3]}</span>
</code></pre>
<p>Note that you can simplify the code by passing the <code>MemberProxy</code> directly to <code>deserializeJson()</code>:</p>
<pre><code class="hljs language-cpp">JsonDocument doc;
<span class="hljs-built_in">deserializeJson</span>(doc[<span class="hljs-string">&quot;values&quot;</span>], <span class="hljs-string">&quot;[1,2,3]&quot;</span>);  <span class="hljs-comment">// returns Ok</span>
<span class="hljs-comment">// Now, doc contains {&quot;values&quot;:[1,2,3]}</span>
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Initializing the array fixes the issue"},{id:"server-ok",page:314,label:"No",summary:"Initializing the array doesn't fix the issue"}]},{content:`<p>You can pass a <code>JsonObject</code> as the first argument of <code>deserializeJson()</code>, but it has to point to an existing object.</p>
<p>For example, the following code fails because the <code>JsonObject</code> is null:</p>
<pre><code class="hljs language-cpp">JsonDocument doc;
JsonObject object = doc[<span class="hljs-string">&quot;http&quot;</span>];  <span class="hljs-comment">// object is null</span>
<span class="hljs-built_in">deserializeJson</span>(object, <span class="hljs-string">&quot;{\\&quot;port\\&quot;:80}&quot;</span>);  <span class="hljs-comment">// returns NoMemory</span>
</code></pre>
<p>To fix this issue, you need to explicitly create the object:</p>
<pre><code class="hljs language-cpp">JsonDocument doc;
Jsonobject object = doc[<span class="hljs-string">&quot;http&quot;</span>].<span class="hljs-built_in">to</span>&lt;JsonObject&gt;();  <span class="hljs-comment">// create the object</span>
<span class="hljs-built_in">deserializeJson</span>(object, <span class="hljs-string">&quot;{\\&quot;port\\&quot;:80}&quot;</span>);  <span class="hljs-comment">// returns Ok</span>
<span class="hljs-comment">// Now, doc contains {&quot;http&quot;:{&quot;port&quot;:80}}</span>
</code></pre>
<p>Note that you can simplify the code by passing the <code>MemberProxy</code> directly to <code>deserializeJson()</code>:</p>
<pre><code class="hljs language-cpp">JsonDocument doc;
<span class="hljs-built_in">deserializeJson</span>(doc[<span class="hljs-string">&quot;http&quot;</span>], <span class="hljs-string">&quot;{\\&quot;port\\&quot;:80}&quot;</span>);  <span class="hljs-comment">// returns Ok</span>
<span class="hljs-comment">// Now, doc contains {&quot;http&quot;:{&quot;port&quot;:80}}</span>
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Initializing the object fixes the issue"},{id:"server-ok",page:314,label:"No",summary:"Initializing the object doesn't fix the issue"}]},{content:`<p>You can pass a <code>JsonVariant</code> as the first argument of <code>deserializeJson()</code>, but it has to point to an existing value.</p>
<p>For example, the following code fails because the <code>JsonVariant</code> is null:</p>
<pre><code class="hljs language-cpp">JsonDocument doc;
JsonVariant variant = doc[<span class="hljs-string">&quot;values&quot;</span>];  <span class="hljs-comment">// variant is null</span>
<span class="hljs-built_in">deserializeJson</span>(variant, <span class="hljs-string">&quot;[1,2,3]&quot;</span>);  <span class="hljs-comment">// returns NoMemory</span>
</code></pre>
<p>To fix this issue, you need to explicitly create the variant:</p>
<pre><code class="hljs language-cpp">JsonDocument doc;
JsonVariant variant = doc[<span class="hljs-string">&quot;values&quot;</span>].<span class="hljs-built_in">to</span>&lt;JsonVariant&gt;();  <span class="hljs-comment">// create the variant</span>
<span class="hljs-built_in">deserializeJson</span>(variant, <span class="hljs-string">&quot;[1,2,3]&quot;</span>);  <span class="hljs-comment">// returns Ok</span>
<span class="hljs-comment">// Now, doc contains {&quot;values&quot;:[1,2,3]}</span>
</code></pre>
<p>Note that you can simplify the code by passing the <code>MemberProxy</code> directly to <code>deserializeJson()</code>:</p>
<pre><code class="hljs language-cpp">JsonDocument doc;
<span class="hljs-built_in">deserializeJson</span>(doc[<span class="hljs-string">&quot;values&quot;</span>], <span class="hljs-string">&quot;[1,2,3]&quot;</span>);  <span class="hljs-comment">// returns Ok</span>
<span class="hljs-comment">// Now, doc contains {&quot;values&quot;:[1,2,3]}</span>
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Initializing the variant fixes the issue"},{id:"server-ok",page:314,label:"No",summary:"Initializing the variant doesn't fix the issue"}]},{content:`<p>Let's check with the <a href="/v7/assistant/">ArduinoJson Assistant</a> to see if you have enough memory for your JSON document.</p>
<ol>
<li>Open the <a href="/v7/assistant/">ArduinoJson Assistant</a>.</li>
<li>Set the configuration in step 1, then click &quot;Next&quot;.</li>
<li>Enter your JSON document in step 2.</li>
</ol>
<p>Look below the input field; the Assistant will show the amount of memory required for the JSON document below the input field.<br>
It will also tell you if this amount exceeds the available memory on your board.</p>
<p>What does the Assistant say?</p>
`,options:[{id:"loose",page:315,label:"There is a lot more memory than required",summary:"The Assistant says there is a lot more memory than required."},{id:"tight",page:318,label:"There should be enough memory",summary:"The Assistant says there should be just enough memory."},{id:"too-small",page:319,label:"There is not enough memory",summary:"The Assistant says there is not enough memory."}]},{content:`<p>What CPU architecture is this code running on?</p>
`,options:[{id:"8-bit",page:317,label:"8-bit",summary:"The code is running on an 8-bit CPU"},{id:"32-bit",page:316,label:"32-bit",summary:"The code is running on a 32-bit CPU"},{id:"64-bit",page:1,label:"64-bit",summary:"The code is running on a 64-bit CPU"}]},{content:`<p>Due to an optimization, a <code>JsonDocument</code> can only contain up to 65,535 nodes on a 32-bit CPU.
A node is a value, a key, or a member of an array.</p>
<p>You can push this limit by increasing <code>ARDUINOJSON_SLOT_ID_SIZE</code>, like so:</p>
<pre><code class="hljs language-cpp"><span class="hljs-meta">#<span class="hljs-keyword">define</span> ARDUINOJSON_SLOT_ID_SIZE 4</span>
<span class="hljs-meta">#<span class="hljs-keyword">include</span> <span class="hljs-string">&lt;ArduinoJson.h&gt;</span></span>
</code></pre>
<p>This will increase the limit to 4,294,967,295 nodes, but the memory consumption will increase by 50%.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Setting `ARDUINOJSON_SLOT_ID_SIZE` to 4 solves the issue."},{id:"slot-id-size-2",page:318,label:"No",summary:"Setting `ARDUINOJSON_SLOT_ID_SIZE` to 4 doesn't solve the issue."},{id:"fewer-than-255",page:318,label:"My JSON document contains fewer than 65,535 nodes",summary:"The JSON document contains fewer than 65,535 nodes."}]},{content:`<p>Due to an optimization, a <code>JsonDocument</code> can only contain up to 255 nodes on an 8-bit CPU.
A node is a value, a key, or a member of an array.</p>
<p>You can push this limit by increasing <code>ARDUINOJSON_SLOT_ID_SIZE</code>, like so:</p>
<pre><code class="hljs language-cpp"><span class="hljs-meta">#<span class="hljs-keyword">define</span> ARDUINOJSON_SLOT_ID_SIZE 2</span>
<span class="hljs-meta">#<span class="hljs-keyword">include</span> <span class="hljs-string">&lt;ArduinoJson.h&gt;</span></span>
</code></pre>
<p>This will increase the limit to 65535 nodes, but the memory consumption will increase by 12.5%.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Setting `ARDUINOJSON_SLOT_ID_SIZE` to 2 solves the issue."},{id:"slot-id-size-2",page:318,label:"No",summary:"Setting `ARDUINOJSON_SLOT_ID_SIZE` to 2 doesn't solve the issue."},{id:"fewer-than-255",page:318,label:"My JSON document contains fewer than 255 nodes",summary:"The JSON document contains fewer than 255 nodes."}]},{content:`<p>This means that ArduinoJson couldn't allocate enough memory for the JSON document.<br>
So you must free some memory.</p>
<p>See <a href="/v7/how-to/reduce-memory-usage/">How to reduce memory usage?</a> for some tips.</p>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Freeing some memory solves the issue."},{id:"failure",page:319,label:"No",summary:"Freeing some memory doesn't solve the issue."}]},{content:`<p class="display-4">☹️</p>
<p>I'm afraid you have no other choice but upgrade to a bigger microcontroller.</p>
`,tags:["needs_assistance"]},{content:`<p>What's the problem?</p>
`,options:[{id:"crash",page:225,label:"The program crashes",summary:"Program crashes"},{id:"empty",page:321,label:"The output is empty (e.g. <code>{}</code>, <code>[]</code>, or <code>null</code>)",summary:"Output is empty"},{id:"incomplete",page:330,label:"The output is incomplete",summary:"Output is incomplete"},{id:"garbage",page:322,label:"The output contains garbage",summary:"Output contains garbage"},{id:"null",page:330,label:"The output contains <code>null</code>",summary:"Output contains null"},{id:"float",page:236,label:"Floating-point values contain too many decimal digits",summary:"Floating-point values contain too many decimal digits"},{id:"slow",page:268,label:"It's slow",summary:"Serialization is slow"}]},{content:`<p>Please print the value of <code>JsonDocument::overflowed()</code>, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(doc.<span class="hljs-built_in">overflowed</span>());
</code></pre>
<p>What value does it print?</p>
`,options:[{id:"overflowed-1",page:314,label:"<code>1</code> (or <code>true</code>)",summary:"`JsonDocument::overflowed()` returns `true`"},{id:"overflowed-0",page:1,label:"<code>0</code> (or <code>false</code>)",summary:"`JsonDocument::overflowed()` returns `false`"}]},{content:`<p>Which function produces the garbage?</p>
`,options:[{id:"json",page:324,label:"<code>serializeJson()</code> (or <code>serializeJsonPretty()</code>)",summary:"`serializeJson()` produces garbage"},{id:"msg",page:329,label:"<code>serializeMsgPack()</code>",summary:"`serializeMsgPack()` produces garbage"}]},{content:`<p>Do you use <a href="https://www.arduino.cc/reference/en/language/variables/data-types/stringobject/"><code>String</code></a> in your program?</p>
`,options:[{id:"string",page:242,label:"Yes",summary:"Program uses `String`"},{id:"no-string",page:1,label:"No",summary:"Program doesn't use `String`"}]},{content:`<p>What is the type of the first argument passed to <code>serializeJson()</code>?</p>
`,options:[{id:"document",page:323,label:"<code>JsonDocument</code>",summary:"Program calls `serializeJson(const JsonDocument&, ...)`"},{id:"array",page:325,label:"<code>JsonArray</code> (or <code>JsonArrayConst</code>)",summary:"Program calls `serializeJson(JsonArrayConst, ...)`"},{id:"object",page:326,label:"<code>JsonObject</code> (or <code>JsonObjectConst</code>)",summary:"Program calls `serializeJson(JsonObjectConst, ...)`"},{id:"variant",page:327,label:"<code>JsonVariant</code> (or <code>JsonVariantConst</code>)",summary:"Program calls `serializeJson(JsonVariantConst, ...)`"}]},{content:`<p><code>JsonArray</code> doesn't contain any data: it is a reference to an object stored in the <code>JsonDocument</code>. It becomes invalid as soon as the <code>JsonDocument</code> is destroyed; this could explain the garbage you see in the output.</p>
<p>For example, here is a function that creates a dangling <code>JsonArray</code>:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// DON&#x27;T DO THAT!!!  💀</span>
<span class="hljs-function">JsonArray <span class="hljs-title">createArray</span><span class="hljs-params">()</span> </span>{
  JsonDocument doc;
  JsonArray arr = doc.<span class="hljs-built_in">to</span>&lt;JsonArray&gt;();
  arr.<span class="hljs-built_in">add</span>(<span class="hljs-string">&quot;hello&quot;</span>);
  arr.<span class="hljs-built_in">add</span>(<span class="hljs-string">&quot;world&quot;</span>);
  <span class="hljs-keyword">return</span> arr;
}
</code></pre>
<p>The <code>JsonArray</code> returned by this function points to a destructed <code>JsonDocument</code>, and therefore is likely to produce garbage or crash the program.</p>
<p>The best way to fix this function is to return the <code>JsonDocument</code>:</p>
<pre><code class="hljs language-c++"><span class="hljs-function">JsonDocument <span class="hljs-title">createArray</span><span class="hljs-params">()</span> </span>{
  JsonDocument doc;
  JsonArray arr = doc.<span class="hljs-built_in">to</span>&lt;JsonArray&gt;();
  arr.<span class="hljs-built_in">add</span>(<span class="hljs-string">&quot;hello&quot;</span>);
  arr.<span class="hljs-built_in">add</span>(<span class="hljs-string">&quot;world&quot;</span>);
  <span class="hljs-keyword">return</span> doc;
}
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Extending the lifetime of the `JsonDocument` solves the issue"},{id:"not-destroyed",page:323,label:"No",summary:"Extending the lifetime of the `JsonDocument` doesn't solve the issue"}]},{content:`<p><code>JsonObject</code> doesn't contain any data: it is a reference to an object stored in the <code>JsonDocument</code>. It becomes invalid as soon as the <code>JsonDocument</code> is destroyed; this could explain the garbage you see in the output.</p>
<p>For example, here is a function that creates a dangling <code>JsonObject</code>:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// DON&#x27;T DO THAT!!!  💀</span>
<span class="hljs-function">JsonObject <span class="hljs-title">createObject</span><span class="hljs-params">()</span> </span>{
  JsonDocument doc;
  JsonObject obj = doc.<span class="hljs-built_in">to</span>&lt;JsonObject&gt;();
  obj[<span class="hljs-string">&quot;hello&quot;</span>] = <span class="hljs-string">&quot;world&quot;</span>;
  <span class="hljs-keyword">return</span> obj;
}
</code></pre>
<p>The <code>JsonObject</code> returned by this function points to a destructed <code>JsonDocument</code>, and therefore is likely to produce garbage or crash the program.</p>
<p>The best way to fix this function is to return the <code>JsonDocument</code>:</p>
<pre><code class="hljs language-c++"><span class="hljs-function">JsonDocument <span class="hljs-title">createObject</span><span class="hljs-params">()</span> </span>{
  JsonDocument doc;
  JsonObject obj = doc.<span class="hljs-built_in">to</span>&lt;JsonObject&gt;();
  obj[<span class="hljs-string">&quot;hello&quot;</span>] = <span class="hljs-string">&quot;world&quot;</span>;
  <span class="hljs-keyword">return</span> doc;
}
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Extending the lifetime of the `JsonDocument` solves the issue"},{id:"not-destroyed",page:323,label:"No",summary:"Extending the lifetime of the `JsonDocument` doesn't solve the issue"}]},{content:`<p><code>JsonVariant</code> doesn't contain any data: it is a reference to an object stored in the <code>JsonDocument</code>. It becomes invalid as soon as the <code>JsonDocument</code> is destroyed; this could explain the garbage you see in the output.</p>
<p>For example, here is a function that creates a dangling <code>JsonVariant</code>:</p>
<pre><code class="hljs language-c++"><span class="hljs-comment">// DON&#x27;T DO THAT!!!  💀</span>
<span class="hljs-function">JsonVariant <span class="hljs-title">createVariant</span><span class="hljs-params">()</span> </span>{
  JsonDocument doc;
  JsonVariant var = doc.<span class="hljs-built_in">to</span>&lt;JsonVariant&gt;();
  var[<span class="hljs-string">&quot;hello&quot;</span>] = <span class="hljs-string">&quot;world&quot;</span>;
  <span class="hljs-keyword">return</span> var;
}
</code></pre>
<p>The <code>JsonVariant</code> returned by this function points to a destructed <code>JsonDocument</code>, and therefore is likely to produce garbage or crash the program.</p>
<p>The best way to fix this function is to return the <code>JsonDocument</code>:</p>
<pre><code class="hljs language-c++"><span class="hljs-function">JsonVariant <span class="hljs-title">createVariant</span><span class="hljs-params">()</span> </span>{
  JsonDocument doc;
  JsonVariant var = doc.<span class="hljs-built_in">to</span>&lt;JsonVariant&gt;();
  var[<span class="hljs-string">&quot;hello&quot;</span>] = <span class="hljs-string">&quot;world&quot;</span>;
  <span class="hljs-keyword">return</span> var;
}
</code></pre>
<p>Did this solve your issue?</p>
`,options:[{id:"success",page:2,label:"Yes",summary:"Extending the lifetime of the `JsonDocument` solves the issue"},{id:"not-destroyed",page:323,label:"No",summary:"Extending the lifetime of the `JsonDocument` doesn't solve the issue"}]},{content:`<p><code>serializeMsgPack()</code> share a lot of code with <code>serializeJson()</code>. There is no reason you should produce garbage with one and not the other. You may have found a bug.</p>
`,tags:["needs_assistance"]},{content:`<p><a href="https://msgpack.org/">MessagePack</a> is a binary format, so if you print a document to the serial port, the result would look weird.</p>
<p>For example, the following program:</p>
<pre><code class="hljs language-c++">JsonDocument doc;
doc[<span class="hljs-string">&quot;val&quot;</span>] = <span class="hljs-number">42</span>;
<span class="hljs-built_in">serializeMsgPack</span>(doc, Serial);
</code></pre>
<p>produces:</p>
<pre><code class="hljs language-text">⸮⸮val*
</code></pre>
<p>Yes. This is the expected result.</p>
<p>Now that this question is cleared, let's move on with the diagnostic.</p>
<p>I need you to edit your program to replace <code>serializeMsgPack()</code> with <code>serializeJson()</code>.</p>
<p>Do you see the garbage in the JSON output?</p>
`,options:[{id:"json",page:324,label:"Yes, <code>serializeJson()</code> produces garbage too",summary:"`serializeJson()` produces garbage too"},{id:"deserialize-no",page:328,label:"No, <code>serializeJson()</code> doesn't produces garbage",summary:"`serializeJson()` doesn't produces garbage"}]},{content:`<p>Please print the value of <code>JsonDocument::overflowed()</code>, like so:</p>
<pre><code class="hljs language-c++">Serial.<span class="hljs-built_in">println</span>(doc.<span class="hljs-built_in">overflowed</span>());
</code></pre>
<p>What value does it print?</p>
`,options:[{id:"overflowed-1",page:314,label:"<code>1</code> (or <code>true</code>)",summary:"`JsonDocument::overflowed()` returns `true`"},{id:"overflowed-0",page:331,label:"<code>0</code> (or <code>false</code>)",summary:"`JsonDocument::overflowed()` returns `false`"}]},{content:`<p>Does one of the strings in the <code>JsonDocument</code> contains a NUL (i.e.,  ASCII code 0, or <code>\\u0000</code>)?</p>
`,options:[{id:"nul",page:215,label:"Yes",summary:"One or more strings contain a NUL"},{id:"no-nul",page:1,label:"No",summary:"No string contains a NUL"}]}];function sa(e,s,n){var o;const t=ea[e];return{...t,number:n||1,hash:s||"#",options:(o=t.options)==null?void 0:o.map((a,i)=>({...a,inputId:`option-${e}-${i}`,hash:(s?s+"/":"#")+a.id,missing:!ea[a.page],selected:!1}))}}function dl(e){var n;const s=[sa(0)];if(e){let t=s[0];for(let o of e.substring(1).split("/")){const a=(n=t.options)==null?void 0:n.find(i=>i.id===o);if(!a){console.error(`Option "${o}" not found`);break}if(a.selected=!0,t.selectedOption=a,t=sa(a.page,a.hash,t.number+1),!t)break;s.push(t)}}return s}function hl(e){return e.map(s=>s.selectedOption).filter(s=>!!s).map((s,n)=>`${n+1}. ${s.summary}`).join(`
`)}const ml=e=>new Promise(s=>setTimeout(s,e)),fl={components:{AssistanceModal:Gr,TroubleshooterStep:ul},data(){return{reportCopied:!1,hash:""}},mounted(){this.hash=location.hash,window.addEventListener("hashchange",()=>this.hash=location.hash)},computed:{needsAssistance(){var s;return!!((s=this.steps[this.steps.length-1].tags)!=null&&s.includes("needs_assistance"))},steps(){return dl(this.hash)},report(){return hl(this.steps)}},methods:{choose(e){document.location.assign(e.hash),ga("set","page",document.location.pathname+document.location.hash),ga("send","pageview"),window.plausible("ArduinoJson Troubleshooter",{props:{hash:document.location.hash}})},async copyReport(){await navigator.clipboard.writeText(this.report),this.reportCopied=!0,await ml(2e3),this.reportCopied=!1}}},gl=se("div",null,[se("p",null,"Hi!"),se("p",null,[tn(" I'm the "),se("i",null,"ArduinoJson Troubleshooter"),tn(", and I'm here to help you fix your problem. I'll ask you a series of questions and give you some instructions along the way. ")]),se("p",null,"Ready? Here we go!")],-1),yl={key:0},bl=se("button",{type:"button",class:"btn btn-primary","data-toggle":"modal","data-target":"#assistance-modal"}," Contact support ",-1),jl=["disabled"];function wl(e,s,n,t,o,a){const i=Cn("TroubleshooterStep"),l=Cn("AssistanceModal");return me(),De("div",null,[gl,(me(!0),De(ve,null,uo(a.steps,(c,u)=>(me(),en(tt,{key:u,name:"fade",mode:"out-in"},{default:Zt(()=>[(me(),en(i,{key:c.hash,step:c,onChoose:a.choose,active:u==a.steps.length-1},null,8,["step","onChoose","active"]))]),_:2},1024))),128)),a.needsAssistance?(me(),De("div",yl,[bl,tn(),se("button",{class:ms(["btn",{"btn-outline-primary":!o.reportCopied,"btn-success":o.reportCopied}]),disabled:o.reportCopied,onClick:s[0]||(s[0]=(...c)=>a.copyReport&&a.copyReport(...c))},zs(o.reportCopied?"✓ Report copied":"Copy troubleshooter's report"),11,jl),ce(l,{id:"assistance-modal",report:a.report},null,8,["report"])])):Qn("",!0)])}Yr(rn(fl,[["render",wl]])).provide("debug",!1).mount("#troubleshooter-app")})();
