import{d as a}from"../index.f2ecf0d4.js";import{M as r,B as i,a as s,P as m,L as p,b as d}from"../three.9c0f0dc6.js";import{W as g}from"../index.62b980cf.js";import{C as l}from"../index.45f20074.js";import{R as c}from"../index.e11efb4f.js";import{E as f,a as u}from"../index.134e4e63.js";import{G as y}from"../index.24c0872b.js";import"../Pass.609ff57c.js";const P=a({plugins:[c(),g({antialias:!0,alpha:!0}),f({WebGLMultisampleRenderTarget:!0}),l(),y()],strategy:[u()]}).setDom(document.getElementById("app")).setSize().play(),e=P.scene,t=new r(new i(10,10,10),new s({color:"rgb(255, 105, 100)"}));t.position.x=10;e.add(t);const n=new m("rgb(255, 255, 255)",1,300,0);n.position.y=30;e.add(n);const b=new p(t.geometry);e.add(b);const o=new d(t.geometry);o.position.x=-10;e.add(o);