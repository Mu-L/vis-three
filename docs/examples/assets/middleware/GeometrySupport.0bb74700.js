import"../modulepreload-polyfill.b7f2da20.js";import{M as z}from"../index.887e5a6e.js";import{g as e,i as t}from"../index.f4616ae6.js";import"../index.8051b4a0.js";import"../index.553ea369.js";import"../index.322afd23.js";import"../index.b6f9a1a5.js";import"../index.54dc275e.js";import"../index.6949873b.js";import"../index.40bdee24.js";import"../three.53c13b85.js";import"../index.0ac2cd23.js";import"../index.d5cadf5a.js";import"../index.cb88c218.js";import"../index.10df2fa4.js";import"../index.4dfb083f.js";import"../index.3d2d386e.js";import"../index.382e9bf2.js";import"../index.4d68b12a.js";import"../Antdv.35288747.js";import"../index.687db21f.js";import"../index.b0fe2ce4.js";import"../TextureDisplayer.d47ce54e.js";import"../index.e35148e2.js";import"../index.dc401cd6.js";import"../index.73cd6fe7.js";import"../index.c5c75baa.js";import"../index.c346d9e8.js";import"../index.0e5858b5.js";import"../index.e72b23c1.js";import"../index.0357ebfa.js";import"../index.e4863e82.js";import"../index.d9d3455e.js";import"../UnrealBloomPass.3e69e790.js";import"../index.8445d065.js";import"../index.adb60d71.js";import"../index.ef0218c2.js";import"../index.99d2f4c4.js";import"../index.26301b51.js";import"../G6.cf5ff0af.js";const m=new z().setDom(document.getElementById("app")).setSize().setStats(!0).play();e.injectEngine=m;const a=e("Scene");m.setSceneBySymbol(a.vid);e.injectScene=!0;e("PointLight",{position:{y:50},distance:150});const i=e("MeshStandardMaterial"),c=[t.BOXGEOMETRY,t.SPHEREGEOMETRY,t.PLANEGEOMETRY,t.CIRCLEGEOMETRY,t.CONEGEOMETRY,t.CYLINDERGEOMETRY,t.RINGGEOMETRY,t.TORUSGEOMETRY],n=15;c.forEach((s,x)=>{const y=e(s),r=x+1,p=e("Mesh",{material:i.vid,geometry:y.vid,position:{x:r%2?-(Math.floor(r/2)+1)*n:Math.floor(r/2)*n},scale:{x:2,y:2,z:2}});m.applyConfig(y,p),a.children.push(p.vid)});const o=e("LineBasicMaterial",{color:"white"}),l=e("LineCurveGeometry",{path:[{x:0,y:0,z:-5},{x:0,y:0,z:5},{x:0,y:5,z:5},{x:0,y:5,z:10},{x:10,y:5,z:10}]}),d=e("SplineCurveGeometry",{path:[{x:0,y:0,z:-5},{x:0,y:0,z:5},{x:0,y:5,z:5},{x:0,y:5,z:10},{x:10,y:5,z:10}]}),E=e("CubicBezierCurveGeometry",{path:[{x:0,y:0,z:-5},{x:0,y:20,z:5},{x:0,y:-15,z:5},{x:0,y:5,z:10},{x:10,y:5,z:10},{x:10,y:0,z:10},{x:0,y:0,z:20},{x:10,y:0,z:10}]}),v=e("QuadraticBezierCurveGeometry",{path:[{x:0,y:0,z:-5},{x:0,y:0,z:5},{x:0,y:5,z:5},{x:0,y:5,z:10},{x:10,y:5,z:10}]}),G=e("SplineTubeGeometry",{path:[{x:0,y:0,z:-5},{x:0,y:0,z:5},{x:0,y:5,z:5},{x:0,y:5,z:10},{x:10,y:5,z:10}],radialSegments:8}),h=e("LineTubeGeometry",{path:[{x:0,y:0,z:-5},{x:0,y:0,z:5},{x:0,y:5,z:5},{x:0,y:5,z:10},{x:10,y:5,z:10}],radialSegments:8});e("Line",{geometry:l.vid,material:o.vid});e("Line",{geometry:d.vid,material:o.vid,position:{y:10}});e("Line",{geometry:E.vid,material:o.vid,position:{y:20}});e("Line",{geometry:v.vid,material:o.vid,position:{y:30}});e("Mesh",{geometry:G.vid,material:i.vid,position:{y:-10}});e("Mesh",{geometry:h.vid,material:i.vid,position:{y:-20}});const g=e("LineShapeGeometry",{path:[{x:-5,y:5},{x:0,y:10},{x:5,y:5},{x:5,y:-5},{x:-5,y:-5}]});e("Mesh",{geometry:g.vid,material:i.vid,position:{x:15,y:20}});