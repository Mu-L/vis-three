import"../modulepreload-polyfill.b7f2da20.js";import{W as n,C as r}from"../index.1d3a6ec0.js";import{d as i}from"../index.202ebdec.js";import{A as o}from"../index.ea2b9d59.js";import"../three.237d835c.js";const t=i({plugins:[n({antialias:!0,alpha:!0}),r(),o({length:40})]}).setDom(document.getElementById("app")).setSize();t.render();let e=!0;document.getElementById("operate").onclick=a=>{e=!e,t.setAxesHelper(e),t.render()};