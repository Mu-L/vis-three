import"../common.006007ed.js";import{D as o}from"../three.1b4256b1.js";import{M as d,g as n}from"../Vis.es.dd28f8ae.js";import{g as m}from"../lil-gui.module.min.2e05211e.js";import"../vis-three.72224a55.js";const r=new d().setDom(document.getElementById("app")).setSize().setStats(!0);n.injectEngine=r;const u=n("Scene");r.setScene(u.vid);n.injectScene=!0;const s=n("MeshBasicMaterial",{side:o,transparent:!0,color:"rgb(200, 100, 200)"}),e=n("ShaderMaterial",{shader:"BloomShader",side:o,transparent:!0}),g=n("SphereGeometry",{radius:10,groups:[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}]});n("Mesh",{material:[s.vid,e.vid],geometry:g.vid});r.play();window.engine=r;window.material=s;const a=new m,i={extend:e.uniforms.extend.value,color:e.uniforms.color.value,brightness:e.uniforms.brightness.value,range:e.uniforms.range.value};a.addColor(i,"color");a.add(i,"extend",0,10,1).onChange(t=>{e.uniforms.extend.value=t});a.add(i,"brightness",0,1,.01).onChange(t=>{e.uniforms.brightness.value=t});a.add(i,"range",0,20,1).onChange(t=>{e.uniforms.range.value=t});