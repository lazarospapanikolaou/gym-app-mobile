"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[688],{3688:(f,_,s)=>{s.r(_),s.d(_,{ExercisesComponent:()=>E});var a=s(177),t=s(3972),d=s(5431),e=s(4438),m=s(70);function u(n,r){if(1&n){const o=e.RV6();e.j41(0,"ion-card",8),e.bIt("click",function(){const c=e.eBV(o).$implicit,l=e.XpG(2);return e.Njj(l.goToExercise(c.id))}),e.j41(1,"ion-card-content")(2,"ion-grid")(3,"ion-row",9)(4,"ion-col",10),e.EFF(5),e.k0s(),e.j41(6,"ion-col",11)(7,"div"),e.EFF(8),e.k0s()()()()()()}if(2&n){const o=r.$implicit;e.R7$(5),e.JRh(o.title),e.R7$(3),e.SpI("",o.estimatedTime," m")}}function p(n,r){if(1&n&&(e.qex(0),e.DNE(1,u,9,2,"ion-card",7),e.bVm()),2&n){const o=e.XpG();e.R7$(),e.Y8G("ngForOf",o.exercises)}}function g(n,r){1&n&&(e.j41(0,"div",12),e.nrm(1,"ion-spinner",13),e.j41(2,"span"),e.EFF(3,"Please wait..."),e.k0s()())}let E=(()=>{var n;class r{constructor(i,c){this.route=i,this.router=c,this.exercises=[],this.loading=!0}ngOnInit(){this.route.queryParams.subscribe(i=>{this.id=i.id}),this.getReload()}ionViewWillEnter(){this.getReload()}getReload(){this.loading=!0,setTimeout(()=>{this.exercises.push({id:1,title:"Biseps",estimatedTime:20},{id:2,title:"Legs",estimatedTime:30},{id:3,title:"Chest",estimatedTime:40}),this.loading=!1},500)}goToExercise(i){this.router.navigate(["/tabs/programs/exercise"],{queryParams:{id:i}})}}return(n=r).\u0275fac=function(i){return new(i||n)(e.rXU(m.nX),e.rXU(m.Ix))},n.\u0275cmp=e.VBU({type:n,selectors:[["app-exercises"]],standalone:!0,features:[e.aNF],decls:16,vars:4,consts:[["loadingTemplate",""],[3,"translucent"],["size","auto"],["size","auto",2,"visibility","hidden"],[3,"fullscreen"],[4,"ngIf","ngIfElse"],[1,"ion-padding"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],[1,"ion-justify-content-between"],[1,"start"],[1,"end"],[1,"spinner-container"],["name","crescent"]],template:function(i,c){if(1&i&&(e.j41(0,"ion-header",1)(1,"ion-toolbar")(2,"ion-grid")(3,"ion-row")(4,"ion-col",2),e.nrm(5,"ion-back-button"),e.k0s(),e.j41(6,"ion-col")(7,"ion-title"),e.EFF(8," Exercises "),e.k0s()(),e.j41(9,"ion-col",3),e.nrm(10,"ion-back-button"),e.k0s()()()()(),e.j41(11,"ion-content",4),e.DNE(12,p,2,1,"ng-container",5),e.k0s(),e.DNE(13,g,4,0,"ng-template",null,0,e.C5r),e.nrm(15,"component-slider-confirm",6)),2&i){const l=e.sdS(14);e.Y8G("translucent",!0),e.R7$(11),e.Y8G("fullscreen",!0),e.R7$(),e.Y8G("ngIf",!c.loading)("ngIfElse",l)}},dependencies:[t.w2,t.eU,t.ai,t.BC,t.W9,a.MD,a.Sq,a.bT,t.el,t.hU,t.ln,t.lO,t.b_,t.I9,d.H],styles:[".start[_ngcontent-%COMP%]{text-align:start}.end[_ngcontent-%COMP%]{text-align:end}"]}),r})()}}]);