"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[240],{5240:(u,l,i)=>{i.r(l),i.d(l,{ProgramsComponent:()=>M});var _=i(467),g=i(177),d=i(1577),e=i(3972),c=i(5873),n=i(4438),P=i(70),p=i(9885);function O(t,r){if(1&t){const a=n.RV6();n.j41(0,"ion-card",5)(1,"ion-badge",6),n.EFF(2,"70"),n.k0s(),n.j41(3,"ion-card-content",7)(4,"ion-grid",8)(5,"ion-row")(6,"ion-col",9)(7,"video",10),n.nrm(8,"source",11),n.EFF(9," Your browser does not support the video tag. "),n.k0s()(),n.j41(10,"ion-col",12)(11,"ion-row")(12,"div",13),n.EFF(13),n.k0s()(),n.j41(14,"ion-row")(15,"ion-col")(16,"div",14),n.nrm(17,"ion-icon",15),n.j41(18,"p"),n.EFF(19),n.k0s()()(),n.j41(20,"ion-col")(21,"div",14),n.nrm(22,"ion-icon",16),n.j41(23,"p"),n.EFF(24,"55"),n.k0s()()(),n.j41(25,"ion-col")(26,"div",14),n.nrm(27,"ion-icon",17),n.j41(28,"p"),n.EFF(29,"36"),n.k0s()()()()(),n.j41(30,"ion-col",18)(31,"div",19),n.bIt("click",function(){const s=n.eBV(a).$implicit,m=n.XpG(2);return n.Njj(m.goToExercise(s.id))}),n.nrm(32,"ion-icon",20),n.k0s()()()()()()}if(2&t){const a=r.$implicit;n.R7$(13),n.SpI(" ",a.gym," "),n.R7$(6),n.SpI("",a.estimatedTime,"m")}}function h(t,r){if(1&t&&(n.qex(0),n.DNE(1,O,33,2,"ion-card",4),n.bVm()),2&t){const a=n.XpG();n.R7$(),n.Y8G("ngForOf",a.myPrograms)}}function C(t,r){1&t&&(n.j41(0,"div",21),n.nrm(1,"ion-spinner",22),n.j41(2,"span"),n.EFF(3,"Please wait..."),n.k0s()())}let M=(()=>{var t;class r{constructor(o,s){this.router=o,this.userService=s,this.myPrograms=[],this.loading=!0,(0,d.a)({logOutOutline:c.z_V,chevronForwardOutline:c.N05,ellipsisVerticalOutline:c.k4i,lockOpenOutline:c.IVO,timeOutline:c.CVk,heartOutline:c.neQ,chatbubbleOutline:c.DD4})}ngOnInit(){}ionViewWillEnter(){this.getReload()}getReload(){this.loading=!0,this.myPrograms=[],setTimeout(()=>{this.myPrograms.push({id:1,gym:"Quads/Abductors/Adductor",exercises:12,estimatedTime:90},{id:2,gym:"Back/Rear Delt",exercises:12,estimatedTime:100},{id:3,gym:"Chest",exercises:12,estimatedTime:120},{id:4,gym:"Calves/Abs/Neck",exercises:12,estimatedTime:90},{id:5,gym:"Hamstrings/Glutes",exercises:12,estimatedTime:80}),this.loading=!1},500)}goToExercise(o){this.router.navigate(["/tabs/programs/program"],{queryParams:{id:o}})}logout(){var o=this;return(0,_.A)(function*(){yield o.userService.purgeAuth(),o.router.navigate(["/login"])})()}}return(t=r).\u0275fac=function(o){return new(o||t)(n.rXU(P.Ix),n.rXU(p.D))},t.\u0275cmp=n.VBU({type:t,selectors:[["app-programs"]],standalone:!0,features:[n.aNF],decls:11,vars:4,consts:[["loadingTemplate",""],[3,"translucent"],[3,"fullscreen"],[4,"ngIf","ngIfElse"],["class","ion-margin-bottom card",4,"ngFor","ngForOf"],[1,"ion-margin-bottom","card"],["color","warning",1,"badge"],["positionV","bottom",1,"ion-no-padding","card-content"],[1,"grid-content"],["size","4"],["controls","","poster","path/to/video-screenshot.jpg"],["src","http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4","type","video/mp4"],["size","7",1,"middle-col"],[1,"ion-text-start",2,"font-weight","bold","font-size","11px","padding-bottom","25px"],[1,"chat-message"],["size","small","name","time-outline","slot","icon-only"],["size","small","name","heart-outline","slot","icon-only"],["size","small","name","chatbubble-outline","slot","icon-only"],["size","1"],[1,"more",3,"click"],["name","ellipsis-vertical-outline",1,"more-icon"],[1,"spinner-container"],["name","crescent"]],template:function(o,s){if(1&o&&(n.j41(0,"ion-header",1)(1,"ion-toolbar")(2,"ion-grid")(3,"ion-row")(4,"ion-col")(5,"ion-title"),n.EFF(6," Programs "),n.k0s()()()()()(),n.j41(7,"ion-content",2),n.DNE(8,h,2,1,"ng-container",3),n.k0s(),n.DNE(9,C,4,0,"ng-template",null,0,n.C5r)),2&o){const m=n.sdS(10);n.Y8G("translucent",!0),n.R7$(7),n.Y8G("fullscreen",!0),n.R7$(),n.Y8G("ngIf",!s.loading)("ngIfElse",m)}},dependencies:[e.w2,e.iq,g.MD,g.Sq,g.bT,e.eU,e.ai,e.BC,e.W9,e.b_,e.I9,e.lO,e.hU,e.ln,e.In],styles:[".start[_ngcontent-%COMP%]{text-align:start;display:flex;align-items:center}.end[_ngcontent-%COMP%]{text-align:end;align-items:center}.center[_ngcontent-%COMP%]{text-align:center;align-items:center}ion-item[_ngcontent-%COMP%]::part(native){background-color:transparent}.ion-margin-end[_ngcontent-%COMP%]{--margin-end: var(--ion-margin, 20px);margin-inline-end:var(--ion-margin, 20px)}.grid-content[_ngcontent-%COMP%]{padding-bottom:0;padding-right:0;padding-left:0}.middle-col[_ngcontent-%COMP%]{padding:3%}.chats[_ngcontent-%COMP%]{padding:0}.chats[_ngcontent-%COMP%]   .chat-item[_ngcontent-%COMP%]   .chat-item-info[_ngcontent-%COMP%]{margin-inline-end:1rem}.chats[_ngcontent-%COMP%]   .chat-item[_ngcontent-%COMP%]   .chat-item-info[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem}.chats[_ngcontent-%COMP%]   .chat-item[_ngcontent-%COMP%]   .chat-item-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.chats[_ngcontent-%COMP%]   .chat-item[_ngcontent-%COMP%]   .chat-item-info[_ngcontent-%COMP%]   p.status-text[_ngcontent-%COMP%]{font-size:.75rem}.chats[_ngcontent-%COMP%]   .chat-item[_ngcontent-%COMP%]   .chat-item-info[_ngcontent-%COMP%]   p.status-date[_ngcontent-%COMP%]{font-size:.625rem}.chats[_ngcontent-%COMP%]   .chat-item[_ngcontent-%COMP%]   .chat-item-info[_ngcontent-%COMP%]   .status.open[_ngcontent-%COMP%]{color:var(--ion-color-warning)}.chats[_ngcontent-%COMP%]   .chat-item[_ngcontent-%COMP%]   .chat-item-info[_ngcontent-%COMP%]   .status.closed[_ngcontent-%COMP%]{color:var(--ion-color-danger)}.chats[_ngcontent-%COMP%]   .chat-item[_ngcontent-%COMP%]   .chat-item-info[_ngcontent-%COMP%]   .status.check[_ngcontent-%COMP%]{color:var(--ion-color-success)}.chats[_ngcontent-%COMP%]   .chat-item[_ngcontent-%COMP%]   .chat-elevators[_ngcontent-%COMP%]{display:flex;min-width:0}.chats[_ngcontent-%COMP%]   .chat-item[_ngcontent-%COMP%]   .chat-elevators[_ngcontent-%COMP%]   .first[_ngcontent-%COMP%]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.chats[_ngcontent-%COMP%]   .chat-item[_ngcontent-%COMP%]   .chat-elevators[_ngcontent-%COMP%]   .more[_ngcontent-%COMP%]{flex-shrink:0;margin-right:.5rem}ion-grid[_ngcontent-%COMP%]{padding:0}ion-col[_ngcontent-%COMP%]{padding:0}.chat-message[_ngcontent-%COMP%]{display:flex;gap:2px;font-size:.75rem;color:var(--ion-color-medium)}.chat-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:0%}video[_ngcontent-%COMP%]{width:100%;height:100%}.more-icon[_ngcontent-%COMP%]{height:100%}.more[_ngcontent-%COMP%]{display:flex;height:100%}.card[_ngcontent-%COMP%], .card-content[_ngcontent-%COMP%]{position:relative}.badge[_ngcontent-%COMP%]{position:relative;float:right;margin-top:-10px;margin-right:-10px;overflow:visible}"]}),r})()}}]);