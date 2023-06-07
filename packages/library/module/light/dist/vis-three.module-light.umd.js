(function(o,i){typeof exports=="object"&&typeof module!="undefined"?i(exports,require("@vis-three/module-object"),require("three"),require("@vis-three/middleware")):typeof define=="function"&&define.amd?define(["exports","@vis-three/module-object","three","@vis-three/middleware"],i):(o=typeof globalThis!="undefined"?globalThis:o||self,i((o["vis-three"]=o["vis-three"]||{},o["vis-three"]["module-light"]={}),o.moduleObject,o.three,o.middleware))})(this,function(o,i,n,r){"use strict";class a extends i.ObjectCompiler{constructor(){super()}}const l=function(e,t){i.ObjectRule(e,t)},g=function(){return Object.assign(i.getObjectConfig(),{type:"Light",color:"rgb(255, 255, 255)",intensity:1})},u=function(){return Object.assign(i.getObjectConfig(),{color:"rgb(255, 255, 255)",intensity:1})},f=function(){return Object.assign(g(),{distance:30,decay:.01})},p=function(){return Object.assign(g(),{distance:30,angle:Math.PI/180*45,penumbra:.01,decay:.01})},L=function(){return Object.assign(g(),{shadow:{mapSize:{width:512,height:512},camera:{near:.5,far:500}}})},d=function(){return Object.assign(g(),{color:"rgb(255, 255, 255)",groundColor:"rgb(0, 0, 0)"})},C=function(){return Object.assign(g(),{width:10,height:10})},m=function({target:e,value:t}){e.color.copy(new n.Color(t))},s=function(e,t,h,H){return e.color.copy(new n.Color(t.color)),i.objectCreate(e,t,{color:!0,scale:!0,rotation:!0,lookAt:!0,...h},H)},c=Object.assign({},i.objectCommands,{set:{color:m,scale:r.emptyHandler,rotation:r.emptyHandler,lookAt:r.emptyHandler}});var y=r.defineProcessor({type:"AmbientLight",config:u,commands:c,create(e,t){return s(new n.AmbientLight,e,{},t)},dispose:i.objectDispose}),b=r.defineProcessor({type:"DirectionalLight",config:L,commands:c,create(e,t){return s(new n.DirectionalLight,e,{},t)},dispose:i.objectDispose}),P=r.defineProcessor({type:"HemisphereLight",config:d,commands:{set:{...c.set,groundColor:function({target:e,value:t}){e.groundColor.copy(new n.Color(t))}}},create(e,t){const h=new n.HemisphereLight;return h.groundColor.copy(new n.Color(e.groundColor)),s(h,e,{groundColor:!0},t)},dispose:i.objectDispose}),v=r.defineProcessor({type:"PointLight",config:f,commands:c,create(e,t){return s(new n.PointLight,e,{},t)},dispose:i.objectDispose}),j=r.defineProcessor({type:"RectAreaLight",config:C,commands:c,create(e,t){return s(new n.RectAreaLight,e,{},t)},dispose:i.objectDispose}),A=r.defineProcessor({type:"SpotLight",config:p,commands:c,create(e,t){return s(new n.SpotLight,e,{},t)},dispose:i.objectDispose}),D={type:"light",object:!0,compiler:a,rule:l,processors:[y,v,b,P,j,A],lifeOrder:r.SUPPORT_LIFE_CYCLE.THREE};o.LightCompiler=a,o.default=D,o.getAmbientLightConfig=u,o.getDirectionalLightConfig=L,o.getHemisphereLightConfig=d,o.getPointLightConfig=f,o.getRectAreaLightConfig=C,o.getSpotLightConfig=p,Object.defineProperties(o,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});