var B=Object.defineProperty;var F=(o,t,e)=>t in o?B(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var m=(o,t,e)=>(F(o,typeof t!="symbol"?t+"":t,e),e);import{G as K,B as w,M as y,a as l,V as N,W as H,b as T,S as _,O as V,C as X,P as Y,c as g,A as U,D as Z}from"./vendor.31c15a14.js";const J=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function e(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=e(n);fetch(n.href,i)}};J();const r={};window.addEventListener("keydown",function(o){r[o.code]=!0});window.addEventListener("keyup",function(o){r[o.code]=!1});var A;(A=document.querySelector("#left"))==null||A.addEventListener("touchstart",function(){r.left=!0});var k;(k=document.querySelector("#left"))==null||k.addEventListener("touchend",function(){r.left=!1});var z;(z=document.querySelector("#right"))==null||z.addEventListener("touchstart",function(){r.right=!0});var q;(q=document.querySelector("#right"))==null||q.addEventListener("touchend",function(){r.right=!1});var P;(P=document.querySelector("#accellerate"))==null||P.addEventListener("touchstart",function(){r.accellerate=!0});var W;(W=document.querySelector("#accellerate"))==null||W.addEventListener("touchend",function(){r.accellerate=!1});var G;(G=document.querySelector("#break"))==null||G.addEventListener("touchstart",function(){r.break=!0});var O;(O=document.querySelector("#break"))==null||O.addEventListener("touchend",function(){r.break=!1});const E=3,p=Math.PI/4;class Q{constructor(){m(this,"object");m(this,"velocity",0);m(this,"accelleration",0);m(this,"turn",0);this.object=this.createObject()}update(t){const e=r.KeyA||r.left||r.ArrowLeft,a=r.KeyD||r.right||r.ArrowRight,n=r.KeyW||r.accellerate||r.ArrowUp,i=r.KeyS||r.break||r.ArrowDown;e?(this.turn=Math.min(p,this.turn+.1),this.turn=Math.max(-p,this.turn)):a?(this.turn=Math.min(p,this.turn-.1),this.turn=Math.max(-p,this.turn)):(this.turn*=.8,Math.abs(this.turn)<.01&&(this.turn=0)),n?this.accelleration=.1:i?this.accelleration=-.1:(this.accelleration=0,this.velocity*=.95,Math.abs(this.velocity)<.01&&(this.velocity=0)),this.velocity=Math.min(E,this.velocity+this.accelleration),this.velocity=Math.max(-E,this.velocity),this.velocity!=0&&this.turn!=0&&this.object.rotateY(this.turn*this.velocity*t),this.object.translateZ(this.velocity)}createObject(){const t=new K,e=new w(10.6,4,4),a=new y({color:3355443}),n=new l(e,a);n.position.z=5.5;const i=new w(10.6,4,4),d=new y({color:3355443}),S=new l(i,d);S.position.z=-5.5;const C=new w(10,5,20),D=new y({color:1154734}),b=new l(C,D);b.position.y=2,b.castShadow=!0;const I=new w(8,5,10),R=new y({color:16777215}),M=new l(I,R);return M.position.y=7,M.position.z=-1,t.add(n),t.add(S),t.add(b),t.add(M),t.position.y=2,t}}const $=document.getElementById("score"),v=new N(-100,200,200),f=new H({antialias:!0,canvas:document.querySelector("canvas")});f.setPixelRatio(window.devicePixelRatio);f.setSize(window.innerWidth,window.innerHeight);f.shadowMap.enabled=!0;f.shadowMap.type=T;const h=new _,s=new V;ne(h);const j=oe();h.add(j);const c=new Q;h.add(c.object);ie(h);const ee=re(h),te=new X;let x=0;window.requestAnimationFrame(function o(){window.requestAnimationFrame(o);const t=te.getDelta();c.update(t);for(const e of ee){if(!e.visible)continue;Math.pow(e.position.x-c.object.position.x,2)+Math.pow(e.position.y-c.object.position.y,2)+Math.pow(e.position.z-c.object.position.z,2)<10*10&&(h.remove(e),x++,e.visible=!1,$.innerText=x.toString())}s.position.set(c.object.position.x+v.x,c.object.position.y+v.y,c.object.position.z+v.z),j.position.set(c.object.position.x,0,c.object.position.z),f.render(h,s)});let u=150;function L(){const o=window.innerWidth/window.innerHeight,t=u*o;s.left=t/-2,s.right=t/2,s.top=u/2,s.bottom=u/-2,s.updateProjectionMatrix()}L();s.position.set(-100,200,200);s.lookAt(0,0,0);window.addEventListener("resize",function(){L(),f.setSize(window.innerWidth,window.innerHeight)});window.addEventListener("wheel",function(o){u=Math.max(50,u+Math.sign(o.deltaY)*50),u=Math.min(500,u),L()});function oe(){const o=new Y(1e3,1e3),t=new g({color:4473924}),e=new l(o,t);return e.rotateX(-Math.PI/2),e.receiveShadow=!0,e}function ne(o){const t=new U(16777215,.5);o.add(t);const e=new Z(16777215,.7);e.position.set(100,300,50),e.castShadow=!0,e.shadow.mapSize.width=4096,e.shadow.mapSize.height=4096,e.shadow.camera.left=-1e3,e.shadow.camera.right=1e3,e.shadow.camera.top=1e3,e.shadow.camera.bottom=-1e3,e.shadow.camera.near=.5,e.shadow.camera.far=500,o.add(e)}function ie(o){for(let t=0;t<200;t++){const e=(Math.random()-.5)*1500,a=(Math.random()-.5)*1500,n=Math.random()*Math.PI*2,i=5+Math.random()*20,d=ae(e,a,i);d.rotation.y=n,o.add(d)}}function re(o){const t=new Array(200);for(let e=0;e<t.length;e++){const a=(Math.random()-.5)*1500,n=(Math.random()-.5)*1500,i=ce(a,n);o.add(i),t[e]=i}return t}function ae(o,t,e){const a=new w(e,e,e),n=new g({color:11184810}),i=new l(a,n);return i.castShadow=!0,i.position.set(o,e/2,t),i}function ce(o,t){const e=new w(4,4,4),a=new g({color:43520}),n=new l(e,a);return n.castShadow=!0,n.position.set(o,3,t),n}
