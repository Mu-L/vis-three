import"../modulepreload-polyfill.b7f2da20.js";import{M as i}from"../index.1133522a.js";import{g as t}from"../vis-three.tdcm.es.ba892fff.js";import"../three.3f33d046.js";import"../index.c0df7946.js";import"../curve.0ba3d968.js";import"../index.0317c091.js";import"../ShaderPass.025732a5.js";import"../vis-three.plugin-orbit-controls.es.1508a7f8.js";import"../index.98a0d82e.js";import"../index.ca8957d4.js";import"../index.bdebbb5d.js";import"../index.5b5c1015.js";import"../index.336b965b.js";import"../vis-three.plugin-transform-controls.es.5244fee5.js";import"../index.9b9e13dd.js";import"../vis-three.plugin-keyboard-manager.es.16e92de2.js";import"../Antdv.7b6104cc.js";import"../index.fd7db63a.js";import"../CSS3DRenderer.56d2804d.js";import"../index.0a430562.js";import"../index.fe593856.js";import"../index.cee1ad1a.js";import"../index.e2e75f8b.js";import"../index.f411c2bc.js";import"../index.457fa50b.js";import"../index.b5597af3.js";import"../vis-three.plugin-pointer-manager.es.28277630.js";import"../index.2c9e736c.js";import"../index.bbdc45c2.js";import"../index.e7386c00.js";import"../index.82f2a702.js";import"../index.82346856.js";import"../vis-three.module-particle.es.2f619925.js";import"../UnrealBloomPass.a03f7d16.js";import"../vis-three.library-modifier.es.9bf56217.js";import"../vis-three.convenient.es.3345d486.js";import"../index.f17582aa.js";import"../vis-three.strategy-orbit-controls-support.es.bfc29c0d.js";import"../index.4caff7a1.js";import"../vis-three.module-helper.es.c2fc8b4c.js";import"../vis-three.library-parser.es.0233fa92.js";import"../vis-three.strategy-multi-renderer.es.91c74cfe.js";import"../vis-three.strategy-selection-prompt.es.9e058aa8.js";import"../vis-three.plugin-loader-manager.es.3fc670d5.js";import"../G6.30609706.js";const e=new i().setDom(document.getElementById("app")).setStats(!0).setSize().play();e.registerResources({"examples.css3DObject":document.getElementById("element1"),"examples.css3DObject2":document.getElementById("element2"),"examples.css3DObject3":document.getElementById("element3")});t.injectEngine=e;const o=t("Scene");e.setSceneBySymbol(o.vid);t.injectScene=!0;t("PointLight",{position:{x:30,y:50},distance:100});const m=t("MeshStandardMaterial",{color:"rgb(255, 0, 0)"}),r=t("BoxGeometry",{width:20,height:40,depth:60});t("BoxGeometry",{width:20,height:40,depth:60});t("Mesh",{geometry:r.vid,material:m.vid});t("CSS3DPlane",{element:"examples.css3DObject",width:200,height:200,position:{x:-50,y:10},rotation:{y:Math.PI/180*20},scale:{x:.1,y:.1,z:.1}});t("CSS3DPlane",{element:"examples.css3DObject2",width:200,height:220,position:{x:50,y:10},rotation:{y:-(Math.PI/180)*20},scale:{x:.1,y:.1,z:.1}});t("CSS2DPlane",{element:"examples.css3DObject3",width:200,height:100,position:{z:-30,y:10},scale:{x:.5,y:.5,z:.5}});window.engine=e;