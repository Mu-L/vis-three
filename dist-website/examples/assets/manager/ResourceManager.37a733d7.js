import{c as i,R as d,M as p}from"../Vis.es.6c39f639.js";import{p as g,d as l}from"../three.5dc0577a.js";import"../vis-three.a3d50446.js";var m=["/model/katana/katana.obj"];const t=new i,s=new d,f=new p().setDom(document.getElementById("app")).setStats(!0).setSize().play(),o=f.scene,r=new g("rgb(255, 255, 255)",1,100,.01);r.position.set(10,10,10);o.add(r);t.addEventListener("loaded",a=>{s.mappingResource(a.resourceMap),a.resourceMap.forEach((e,n)=>{e instanceof l&&(e.scale.set(30,30,30),o.add(e))})});s.addEventListener("mapped",a=>{console.log(a);let e="";a.configMap.forEach((n,c)=>{e+=`${c}: ${JSON.stringify(n)}
`}),e=e.replace(/",/g,`",
`).replace(/"},/g,`"},
`).replace(/{"/g,`{"
`),document.getElementById("mappingStructure").innerText=e});t.load(m);