import{w as b,$ as x,a0 as v}from"./three.3f33d046.js";import{s as g}from"./curve.0ba3d968.js";import{j as l,k as c,a as u,l as p}from"./vis-three.tdcm.es.ba892fff.js";class m extends l{constructor(){super(...arguments),this.selector=(r,e,o)=>e.isObject3D&&o.get(m)||null}parse(r){this.parseObject3D(r)}parseAnimation({url:r,resource:e,configMap:o,resourceMap:t}){t.set(r,e);const s=c[u.LOADANIMATIONCLIP]();s.vid=p(),s.url=r,s.name=e.name,o.set(r,s)}parseColor(r){return`rgb(${Math.round(255*r.r)}, ${Math.round(255*r.g)}, ${Math.round(255*r.b)})`}attributeEnhance(r){const e={};for(const o in r)o.startsWith("_")?e[o.slice(1)]=r[o]:e[o]=r[o];return e}parseTexture({url:r,resource:e,configMap:o,resourceMap:t}){t.set(r,e);const s=c[u.LOADTEXTURE]();o.set(r,s),s.vid=p(),s.url=r,g(e,s,{type:!0,vid:!0,url:!0})}parseMaterial({url:r,resource:e,configMap:o,resourceMap:t}){if(t.set(r,e),!c[e.type]){console.warn("can not found support config in vis for this resource",e);return}const s=c[e.type]();o.set(r,s),s.vid=p(),g(this.attributeEnhance(e),s,{type:!0,vid:!0});for(const n in e)if(e[n]){if(e[n].isColor)s[n]=this.parseColor(e[n]);else if(n.toLocaleLowerCase().endsWith("map")&&e[n]){const a=`${r}.${n}`;this.parseTexture({url:a,resource:e[n],configMap:o,resourceMap:t}),s[n]=o.get(a).vid}}}parseGeometry({url:r,resource:e,configMap:o,resourceMap:t}){t.set(r,e),e.computeBoundingBox();const s=e.boundingBox,n=s.getCenter(new b),a=c[u.LOADGEOMETRY]();a.vid=p(),a.url=r,a.position.x=n.x/(s.max.x-s.min.x)*2,a.position.y=n.y/(s.max.y-s.min.y)*2,a.position.z=n.z/(s.max.z-s.min.z)*2,o.set(r,a)}parseSkeleton({url:r,resource:e,configMap:o,resourceMap:t}){const s=c[u.SKELETON]();s.vid=p();const n=new WeakMap;for(const[a,i]of t.entries())i instanceof x&&n.set(i,o.get(a));for(const a of e.bones){if(!n.has(a)){console.warn("object3D parser can not fond bone in configMap",a);continue}s.bones.push(n.get(a).vid)}e.boneInverses.length&&(s.boneInverses=e.boneInverses.map(a=>[].concat(a.elements))),o.set(r,s)}parseObject3D({url:r,resource:e,configMap:o,resourceMap:t}){if(t.set(r,e),!c[e.type]){console.warn("can not found support config in middleware module for this resource",e);return}const s=c[e.type]();if(s.vid=p(),g(e,s,{type:!0,vid:!0,children:!0,geometry:!0,material:!0,parent:!0,lookAt:!0,skeleton:!0}),s.rotation.x=e.rotation.x,s.rotation.y=e.rotation.y,s.rotation.z=e.rotation.z,e.isMesh&&e.morphTargetInfluences&&e.morphTargetInfluences.length&&(s.morphTargetInfluences=[...e.morphTargetInfluences],s.morphTargetDictionary={...e.morphTargetDictionary}),e.isSkinnedMesh&&(s.bindMatrix=[].concat(e.bindMatrix.elements)),o.set(r,s),e.material)if(Array.isArray(e.material))s.material=[],e.material.forEach((n,a,i)=>{const E=`${r}.material.${a}`;this.parseMaterial({url:E,resource:n,configMap:o,resourceMap:t}),s.material.push(o.get(E).vid)});else{const n=`${r}.material`;this.parseMaterial({url:n,resource:e.material,configMap:o,resourceMap:t}),s.material=o.get(n).vid}if(e.geometry){const n=`${r}.geometry`;this.parseGeometry({url:n,resource:e.geometry,configMap:o,resourceMap:t}),s.geometry=o.get(n).vid}if(e.skeleton){const n=`${r}.skeleton`;this.parseSkeleton({url:n,resource:e.skeleton,configMap:o,resourceMap:t}),s.skeleton=o.get(n).vid}if(e.children&&e.children.length){const n=[];e.children.forEach((a,i)=>{a.type==="Bone"?n.unshift({index:i,object:a,type:a.type}):n.push({index:i,object:a,type:a.type})}),n.forEach(a=>{const i=`${r}.children.${a.index}`;this.parseObject3D({url:i,resource:a.object,configMap:o,resourceMap:t}),s.children.push(o.get(i).vid)})}e.animations&&e.animations.length&&Array.isArray(e.animations)&&e.animations.forEach((n,a)=>{const i=`${r}.animations.${a}`;this.parseAnimation({url:i,resource:n,configMap:o,resourceMap:t})})}}class A extends m{constructor(){super()}}class f extends l{constructor(){super(),this.object3DParser=new m,this.selector=(r,e,o)=>e.parser&&e.animations&&e.scene&&e.scenes&&o.get(f)||null}parse({url:r,resource:e,configMap:o,resourceMap:t}){this.object3DParser.parse({url:`${r}.scene`,resource:e.scene,configMap:o,resourceMap:t}),e.animations.forEach((s,n)=>{this.object3DParser.parseAnimation({url:`${r}.animations.${n}`,resource:s,configMap:o,resourceMap:t})})}}class M extends l{constructor(){super(...arguments),this.selector=(r,e,o)=>e instanceof HTMLCanvasElement&&o.get(M)||null}parse({url:r,resource:e,configMap:o,resourceMap:t}){const s=c[u.CANVASTEXTURE]();s.url=r,t.set(r,e),o.set(r,s)}}class h extends l{constructor(){super(...arguments),this.selector=(r,e,o)=>e instanceof HTMLImageElement&&o.get(h)||null}parse({url:r,resource:e,configMap:o,resourceMap:t}){const s=c[u.IMAGETEXTURE]();s.url=r,t.set(r,e),o.set(r,s)}}class d extends l{constructor(){super(...arguments),this.selector=(r,e,o)=>e instanceof HTMLVideoElement&&o.get(d)||null}parse({url:r,resource:e,configMap:o,resourceMap:t}){const s=c[u.VIDEOTEXTURE]();s.url=r,t.set(r,e),o.set(r,s)}}class y extends l{constructor(){super(...arguments),this.selector=(r,e,o)=>e instanceof v&&o.get(y)||null}parse({url:r,resource:e,configMap:o,resourceMap:t}){const s=c[u.LOADTEXTURE]();s.url=r,t.set(r,e),o.set(r,s)}}class T extends l{constructor(r="css3D"){super(),this.selector=(e,o,t)=>o instanceof HTMLElement&&t.get(T)||null,this.type=r}parse({url:r,resource:e,configMap:o,resourceMap:t}){const s=c[this.type==="css3D"?u.CSS3DPLANE:u.CSS2DPLANE]();s.element=r,t.set(r,e),o.set(r,s)}}var I=Object.freeze(Object.defineProperty({__proto__:null,FBXResourceParser:A,GLTFResourceParser:f,HTMLCanvasElementParser:M,HTMLElementParser:T,HTMLImageElementParser:h,HTMLVideoElementParser:d,Object3DParser:m,TextureParser:y},Symbol.toStringTag,{value:"Module"}));export{T,M as g,I as p,f as u};