(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{UQYE:function(l,n,a){"use strict";a.r(n);var u=a("CcnG"),o=function(){},e=a("pMnS"),t=a("NcP4"),i=a("t68o"),c=a("Ckq/"),r=a("BHnd"),b=a("y4qS"),s=a("21Lb"),d=a("OzfB"),p=a("tRTW"),h=a("seP3"),f=a("/dO6"),m=a("Fzqc"),k=a("gIcY"),g=a("Wf4p"),P=a("dWZg"),Y=a("pIm3"),Q=a("USZ+"),w=a("OiBZ"),B=a("Ip0R"),M=a("QoAl"),x=a("320Y"),y=a("ChgE"),C=a("fxml"),z=a("YzpY"),v=a("TeY9"),_=a("9OdR"),H=a("oA+A"),A=a("bujt"),L=a("6fnK"),T=a("t/Na"),S=a("UodH"),D=a("lLAP"),I=a("wFw1"),N=a("fNgX"),j=a("Hf/j"),O=a("ZYjt"),q=a("bcGG"),F=a("WjFU"),R=a("ZYCi"),K=a("hUWP"),W=a("fDe+"),G=a("jQpT"),U=a("1WY5"),X=a("wfyj"),Z=function(){function l(l,n,a){this.docs=l,this.titleService=n,this.share=a,this.code={npm:"npm i -S @ngx-share/core",yarn:"yarn add @ngx-share/core",import:"import { ShareModule } from '@ngx-share/core';\n\n@NgModule({\n  imports: [\n    HttpClientModule,       // (Required) For share counts\n    HttpClientJsonpModule,  // (Optional) Add if you want tumblr share counts\n    ShareModule.forRoot()\n  ]\n})",service:"import { ShareButtons } from '@ngx-share/core';\n\n@Component({\n  // ...\n})\nexport class MyComponent {\n  constructor(public share: ShareButtons) {\n  }\n}",example1:'<button mat-fab shareButton="facebook" [style.backgroundColor]="share.prop.facebook.color">\n  <fa-icon [icon]="share.prop.facebook.icon" size="lg"></fa-icon>\n</button>\n<button mat-fab shareButton="twitter" [style.backgroundColor]="share.prop.twitter.color">\n  <fa-icon [icon]="share.prop.twitter.icon" size="lg"></fa-icon>\n</button>\n<button mat-fab shareButton="linkedin" [style.backgroundColor]="share.prop.linkedin.color">\n  <fa-icon [icon]="share.prop.linkedin.icon" size="lg"></fa-icon>\n</button>\n<button mat-fab shareButton="whatsapp" [style.backgroundColor]="share.prop.whatsapp.color">\n  <fa-icon [icon]="share.prop.whatsapp.icon" size="lg"></fa-icon>\n</button>\n<button mat-fab shareButton="telegram" [style.backgroundColor]="share.prop.telegram.color">\n  <fa-icon [icon]="share.prop.telegram.icon" size="lg"></fa-icon>\n</button>\n<button mat-fab shareButton="pinterest" [style.backgroundColor]="share.prop.pinterest.color">\n  <fa-icon [icon]="share.prop.pinterest.icon" size="lg"></fa-icon>\n</button>',example2:'<button mat-icon-button shareButton="facebook" #fbBtn [style.color]="share.prop.facebook.color">\n  <fa-icon [icon]="share.prop.facebook.icon" size="lg"></fa-icon>\n</button>\n<button mat-icon-button shareButton="twitter" #twtBtn [style.color]="share.prop.twitter.color">\n  <fa-icon [icon]="share.prop.twitter.icon" size="lg"></fa-icon>\n</button>\n<button mat-icon-button shareButton="linkedin" #inBtn [style.color]="share.prop.linkedin.color">\n  <fa-icon [icon]="share.prop.linkedin.icon" size="lg"></fa-icon>\n</button>\n<button mat-icon-button shareButton="whatsapp" #wtsBtn [style.color]="share.prop.whatsapp.color">\n  <fa-icon [icon]="share.prop.whatsapp.icon" size="lg"></fa-icon>\n</button>\n<button mat-icon-button shareButton="telegram" #teleBtn [style.color]="share.prop.telegram.color">\n  <fa-icon [icon]="share.prop.telegram.icon" size="lg"></fa-icon>\n</button>\n<button mat-icon-button shareButton="pinterest" #pinBtn [style.color]="share.prop.pinterest.color">\n  <fa-icon [icon]="share.prop.pinterest.icon" size="lg"></fa-icon>\n</button>'},this.displayedColumns=["type","name","description"]}return l.prototype.ngOnInit=function(){this.titleService.setTitle("Share Button Directive");var l=new X.b(this.docs.getDirectiveApi());this.dataSource=new X.a(l)},l}(),E=u.Oa({encapsulation:0,styles:[[".example[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-right:15px}.example2[_ngcontent-%COMP%]   .mat-fab[_ngcontent-%COMP%]{color:#fff}.basic-example[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:18px}"]],data:{}});function J(l){return u.kb(0,[(l()(),u.Qa(0,0,null,null,3,"mat-header-cell",[["class","mat-header-cell"],["fxFlex","100px"],["role","columnheader"]],null,null,null,null,null)),u.Pa(1,16384,null,0,r.e,[b.d,u.k],null,null),u.Pa(2,737280,null,0,s.a,[d.i,u.k,[3,s.d],d.m,d.g],{flex:[0,"flex"]},null),(l()(),u.ib(-1,null,[" Type"]))],function(l,n){l(n,2,0,"100px")},null)}function V(l){return u.kb(0,[(l()(),u.Qa(0,0,null,null,12,"mat-cell",[["class","mat-cell"],["fxFlex","100px"],["role","gridcell"]],null,null,null,null,null)),u.Pa(1,16384,null,0,r.a,[b.d,u.k],null,null),u.Pa(2,737280,null,0,s.a,[d.i,u.k,[3,s.d],d.m,d.g],{flex:[0,"flex"]},null),(l()(),u.Qa(3,0,null,null,9,"mat-chip-list",[["class","mat-chip-list"]],[[1,"tabindex",0],[1,"aria-describedby",0],[1,"aria-required",0],[1,"aria-disabled",0],[1,"aria-invalid",0],[1,"aria-multiselectable",0],[1,"role",0],[2,"mat-chip-list-disabled",null],[2,"mat-chip-list-invalid",null],[2,"mat-chip-list-required",null],[1,"aria-orientation",0],[8,"id",0]],[[null,"focus"],[null,"blur"],[null,"keydown"]],function(l,n,a){var o=!0;return"focus"===n&&(o=!1!==u.ab(l,5).focus()&&o),"blur"===n&&(o=!1!==u.ab(l,5)._blur()&&o),"keydown"===n&&(o=!1!==u.ab(l,5)._keydown(a)&&o),o},p.b,p.a)),u.fb(6144,null,h.c,null,[f.c]),u.Pa(5,1556480,null,1,f.c,[u.k,u.h,[2,m.b],[2,k.l],[2,k.f],g.b,[8,null]],null,null),u.gb(603979776,8,{chips:1}),(l()(),u.Qa(7,0,null,0,5,"mat-chip",[["class","property mat-chip"],["role","option"]],[[2,"property-input",null],[1,"tabindex",0],[2,"mat-chip-selected",null],[2,"mat-chip-with-avatar",null],[2,"mat-chip-with-trailing-icon",null],[2,"mat-chip-disabled",null],[1,"disabled",0],[1,"aria-disabled",0],[1,"aria-selected",0]],[[null,"click"],[null,"keydown"],[null,"focus"],[null,"blur"]],function(l,n,a){var o=!0;return"click"===n&&(o=!1!==u.ab(l,8)._handleClick(a)&&o),"keydown"===n&&(o=!1!==u.ab(l,8)._handleKeydown(a)&&o),"focus"===n&&(o=!1!==u.ab(l,8).focus()&&o),"blur"===n&&(o=!1!==u.ab(l,8)._blur()&&o),o},null,null)),u.Pa(8,147456,[[8,4]],3,f.b,[u.k,u.y,P.a,[2,g.k]],null,null),u.gb(335544320,9,{avatar:0}),u.gb(335544320,10,{trailingIcon:0}),u.gb(335544320,11,{removeIcon:0}),(l()(),u.ib(12,null,[" ",""]))],function(l,n){l(n,2,0,"100px"),l(n,5,0)},function(l,n){l(n,3,1,[u.ab(n,5)._tabIndex,u.ab(n,5)._ariaDescribedby||null,u.ab(n,5).required.toString(),u.ab(n,5).disabled.toString(),u.ab(n,5).errorState,u.ab(n,5).multiple,u.ab(n,5).role,u.ab(n,5).disabled,u.ab(n,5).errorState,u.ab(n,5).required,u.ab(n,5).ariaOrientation,u.ab(n,5)._uid]),l(n,7,0,"input"===n.context.$implicit.type,u.ab(n,8).disabled?null:-1,u.ab(n,8).selected,u.ab(n,8).avatar,u.ab(n,8).trailingIcon||u.ab(n,8).removeIcon,u.ab(n,8).disabled,u.ab(n,8).disabled||null,u.ab(n,8).disabled.toString(),u.ab(n,8).ariaSelected),l(n,12,0,n.context.$implicit.type)})}function $(l){return u.kb(0,[(l()(),u.Qa(0,0,null,null,3,"mat-header-cell",[["class","mat-header-cell"],["fxFlex","130px"],["role","columnheader"]],null,null,null,null,null)),u.Pa(1,16384,null,0,r.e,[b.d,u.k],null,null),u.Pa(2,737280,null,0,s.a,[d.i,u.k,[3,s.d],d.m,d.g],{flex:[0,"flex"]},null),(l()(),u.ib(-1,null,[" Name"]))],function(l,n){l(n,2,0,"130px")},null)}function ll(l){return u.kb(0,[(l()(),u.Qa(0,0,null,null,4,"mat-cell",[["class","mat-cell"],["fxFlex","130px"],["role","gridcell"]],null,null,null,null,null)),u.Pa(1,16384,null,0,r.a,[b.d,u.k],null,null),u.Pa(2,737280,null,0,s.a,[d.i,u.k,[3,s.d],d.m,d.g],{flex:[0,"flex"]},null),(l()(),u.Qa(3,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.ib(4,null,["",""]))],function(l,n){l(n,2,0,"130px")},function(l,n){l(n,4,0,n.context.$implicit.name)})}function nl(l){return u.kb(0,[(l()(),u.Qa(0,0,null,null,2,"mat-header-cell",[["class","mat-header-cell"],["role","columnheader"]],null,null,null,null,null)),u.Pa(1,16384,null,0,r.e,[b.d,u.k],null,null),(l()(),u.ib(-1,null,[" Description"]))],null,null)}function al(l){return u.kb(0,[(l()(),u.Qa(0,0,null,null,2,"mat-cell",[["class","mat-cell"],["role","gridcell"]],null,null,null,null,null)),u.Pa(1,16384,null,0,r.a,[b.d,u.k],null,null),(l()(),u.ib(2,null,[" ",""]))],null,function(l,n){l(n,2,0,n.context.$implicit.description)})}function ul(l){return u.kb(0,[(l()(),u.Qa(0,0,null,null,1,"mat-header-row",[["class","mat-header-row"],["role","row"]],null,null,null,Y.d,Y.a)),u.Pa(1,49152,null,0,r.g,[],null,null)],null,null)}function ol(l){return u.kb(0,[(l()(),u.Qa(0,0,null,null,1,"mat-row",[["class","mat-row"],["role","row"]],null,null,null,Y.e,Y.b)),u.Pa(1,49152,null,0,r.i,[],null,null)],null,null)}function el(l){return u.kb(2,[(l()(),u.Qa(0,0,null,null,174,"ng-scrollbar",[["thumbClass","page-scrollbar-thumb"]],null,null,null,Q.b,Q.a)),u.Pa(1,4374528,null,0,w.a,[u.y,u.D,B.d],{autoHide:[0,"autoHide"],thumbClass:[1,"thumbClass"]},null),(l()(),u.Qa(2,0,null,0,3,"header",[],null,null,null,M.b,M.a)),u.Pa(3,49152,null,0,x.a,[],null,null),(l()(),u.Qa(4,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),u.ib(-1,null,["Share Button Directive"])),(l()(),u.Qa(6,0,null,0,166,"div",[["class","page-content container"]],null,null,null,null,null)),(l()(),u.Qa(7,0,null,null,7,"section",[],null,null,null,null,null)),(l()(),u.Qa(8,0,null,null,2,"section-title",[],null,null,null,y.b,y.a)),u.Pa(9,49152,null,0,C.a,[],null,null),(l()(),u.ib(-1,0,["Overview"])),(l()(),u.Qa(11,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),u.Qa(12,0,null,null,1,"code",[["class","hljs"]],null,null,null,null,null)),(l()(),u.ib(-1,null,["[shareButton]"])),(l()(),u.ib(-1,null,[" is a directive that converts its element to a share button."])),(l()(),u.Qa(15,0,null,null,13,"section",[],null,null,null,null,null)),(l()(),u.Qa(16,0,null,null,2,"section-title",[],null,null,null,y.b,y.a)),u.Pa(17,49152,null,0,C.a,[],null,null),(l()(),u.ib(-1,0,["Installation"])),(l()(),u.Qa(19,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),u.ib(-1,null,["Install the following packages"])),(l()(),u.Qa(21,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),u.ib(-1,null,["NPM"])),(l()(),u.Qa(23,0,null,null,1,"hl-code",[],null,null,null,z.b,z.a)),u.Pa(24,4243456,null,0,v.a,[u.h],{code:[0,"code"]},null),(l()(),u.Qa(25,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),u.ib(-1,null,["YARN"])),(l()(),u.Qa(27,0,null,null,1,"hl-code",[],null,null,null,z.b,z.a)),u.Pa(28,4243456,null,0,v.a,[u.h],{code:[0,"code"]},null),(l()(),u.Qa(29,0,null,null,83,"section",[],null,null,null,null,null)),(l()(),u.Qa(30,0,null,null,2,"section-title",[],null,null,null,y.b,y.a)),u.Pa(31,49152,null,0,C.a,[],null,null),(l()(),u.ib(-1,0,["Import the module"])),(l()(),u.Qa(33,0,null,null,1,"hl-code",[],null,null,null,z.b,z.a)),u.Pa(34,4243456,null,0,v.a,[u.h],{code:[0,"code"]},null),(l()(),u.Qa(35,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),u.ib(-1,null,["The most basic share button needs only the name of the social network. e.g: "])),(l()(),u.Qa(37,0,null,null,1,"code",[["class","hljs"]],null,null,null,null,null)),(l()(),u.ib(-1,null,['shareButton="twitter"'])),(l()(),u.Qa(39,0,null,null,32,"code-switcher",[],null,null,null,_.b,_.a)),u.Pa(40,49152,null,0,H.a,[],{code:[0,"code"],fill:[1,"fill"]},null),(l()(),u.Qa(41,0,null,0,30,"div",[["class","example example2"]],null,null,null,null,null)),(l()(),u.Qa(42,0,null,null,4,"button",[["mat-fab",""],["shareButton","facebook"]],[[4,"backgroundColor",null],[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,a){var o=!0;return"click"===n&&(o=!1!==u.ab(l,43).onClick()&&o),o},A.d,A.b)),u.Pa(43,540672,null,0,L.b,[L.c,T.c,u.D,u.h,u.k,u.A],{shareButton:[0,"shareButton"]},null),u.Pa(44,180224,null,0,S.b,[u.k,P.a,D.d,[2,I.a]],null,null),(l()(),u.Qa(45,0,null,0,1,"fa-icon",[["class","ng-fa-icon"],["size","lg"]],[[8,"innerHTML",1]],null,null,N.b,N.a)),u.Pa(46,573440,null,0,j.a,[O.c],{iconProp:[0,"iconProp"],size:[1,"size"]},null),(l()(),u.Qa(47,0,null,null,4,"button",[["mat-fab",""],["shareButton","twitter"]],[[4,"backgroundColor",null],[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,a){var o=!0;return"click"===n&&(o=!1!==u.ab(l,48).onClick()&&o),o},A.d,A.b)),u.Pa(48,540672,null,0,L.b,[L.c,T.c,u.D,u.h,u.k,u.A],{shareButton:[0,"shareButton"]},null),u.Pa(49,180224,null,0,S.b,[u.k,P.a,D.d,[2,I.a]],null,null),(l()(),u.Qa(50,0,null,0,1,"fa-icon",[["class","ng-fa-icon"],["size","lg"]],[[8,"innerHTML",1]],null,null,N.b,N.a)),u.Pa(51,573440,null,0,j.a,[O.c],{iconProp:[0,"iconProp"],size:[1,"size"]},null),(l()(),u.Qa(52,0,null,null,4,"button",[["mat-fab",""],["shareButton","linkedin"]],[[4,"backgroundColor",null],[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,a){var o=!0;return"click"===n&&(o=!1!==u.ab(l,53).onClick()&&o),o},A.d,A.b)),u.Pa(53,540672,null,0,L.b,[L.c,T.c,u.D,u.h,u.k,u.A],{shareButton:[0,"shareButton"]},null),u.Pa(54,180224,null,0,S.b,[u.k,P.a,D.d,[2,I.a]],null,null),(l()(),u.Qa(55,0,null,0,1,"fa-icon",[["class","ng-fa-icon"],["size","lg"]],[[8,"innerHTML",1]],null,null,N.b,N.a)),u.Pa(56,573440,null,0,j.a,[O.c],{iconProp:[0,"iconProp"],size:[1,"size"]},null),(l()(),u.Qa(57,0,null,null,4,"button",[["mat-fab",""],["shareButton","whatsapp"]],[[4,"backgroundColor",null],[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,a){var o=!0;return"click"===n&&(o=!1!==u.ab(l,58).onClick()&&o),o},A.d,A.b)),u.Pa(58,540672,null,0,L.b,[L.c,T.c,u.D,u.h,u.k,u.A],{shareButton:[0,"shareButton"]},null),u.Pa(59,180224,null,0,S.b,[u.k,P.a,D.d,[2,I.a]],null,null),(l()(),u.Qa(60,0,null,0,1,"fa-icon",[["class","ng-fa-icon"],["size","lg"]],[[8,"innerHTML",1]],null,null,N.b,N.a)),u.Pa(61,573440,null,0,j.a,[O.c],{iconProp:[0,"iconProp"],size:[1,"size"]},null),(l()(),u.Qa(62,0,null,null,4,"button",[["mat-fab",""],["shareButton","telegram"]],[[4,"backgroundColor",null],[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,a){var o=!0;return"click"===n&&(o=!1!==u.ab(l,63).onClick()&&o),o},A.d,A.b)),u.Pa(63,540672,null,0,L.b,[L.c,T.c,u.D,u.h,u.k,u.A],{shareButton:[0,"shareButton"]},null),u.Pa(64,180224,null,0,S.b,[u.k,P.a,D.d,[2,I.a]],null,null),(l()(),u.Qa(65,0,null,0,1,"fa-icon",[["class","ng-fa-icon"],["size","lg"]],[[8,"innerHTML",1]],null,null,N.b,N.a)),u.Pa(66,573440,null,0,j.a,[O.c],{iconProp:[0,"iconProp"],size:[1,"size"]},null),(l()(),u.Qa(67,0,null,null,4,"button",[["mat-fab",""],["shareButton","pinterest"]],[[4,"backgroundColor",null],[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,a){var o=!0;return"click"===n&&(o=!1!==u.ab(l,68).onClick()&&o),o},A.d,A.b)),u.Pa(68,540672,null,0,L.b,[L.c,T.c,u.D,u.h,u.k,u.A],{shareButton:[0,"shareButton"]},null),u.Pa(69,180224,null,0,S.b,[u.k,P.a,D.d,[2,I.a]],null,null),(l()(),u.Qa(70,0,null,0,1,"fa-icon",[["class","ng-fa-icon"],["size","lg"]],[[8,"innerHTML",1]],null,null,N.b,N.a)),u.Pa(71,573440,null,0,j.a,[O.c],{iconProp:[0,"iconProp"],size:[1,"size"]},null),(l()(),u.Qa(72,0,null,null,32,"code-switcher",[],null,null,null,_.b,_.a)),u.Pa(73,49152,null,0,H.a,[],{code:[0,"code"],fill:[1,"fill"]},null),(l()(),u.Qa(74,0,null,0,30,"div",[["class","example example3"]],null,null,null,null,null)),(l()(),u.Qa(75,0,null,null,4,"button",[["mat-icon-button",""],["shareButton","facebook"]],[[4,"color",null],[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,a){var o=!0;return"click"===n&&(o=!1!==u.ab(l,76).onClick()&&o),o},A.d,A.b)),u.Pa(76,540672,null,0,L.b,[L.c,T.c,u.D,u.h,u.k,u.A],{shareButton:[0,"shareButton"]},null),u.Pa(77,180224,[["fbBtn",4]],0,S.b,[u.k,P.a,D.d,[2,I.a]],null,null),(l()(),u.Qa(78,0,null,0,1,"fa-icon",[["class","ng-fa-icon"],["size","lg"]],[[8,"innerHTML",1]],null,null,N.b,N.a)),u.Pa(79,573440,null,0,j.a,[O.c],{iconProp:[0,"iconProp"],size:[1,"size"]},null),(l()(),u.Qa(80,0,null,null,4,"button",[["mat-icon-button",""],["shareButton","twitter"]],[[4,"color",null],[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,a){var o=!0;return"click"===n&&(o=!1!==u.ab(l,81).onClick()&&o),o},A.d,A.b)),u.Pa(81,540672,null,0,L.b,[L.c,T.c,u.D,u.h,u.k,u.A],{shareButton:[0,"shareButton"]},null),u.Pa(82,180224,[["twtBtn",4]],0,S.b,[u.k,P.a,D.d,[2,I.a]],null,null),(l()(),u.Qa(83,0,null,0,1,"fa-icon",[["class","ng-fa-icon"],["size","lg"]],[[8,"innerHTML",1]],null,null,N.b,N.a)),u.Pa(84,573440,null,0,j.a,[O.c],{iconProp:[0,"iconProp"],size:[1,"size"]},null),(l()(),u.Qa(85,0,null,null,4,"button",[["mat-icon-button",""],["shareButton","linkedin"]],[[4,"color",null],[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,a){var o=!0;return"click"===n&&(o=!1!==u.ab(l,86).onClick()&&o),o},A.d,A.b)),u.Pa(86,540672,null,0,L.b,[L.c,T.c,u.D,u.h,u.k,u.A],{shareButton:[0,"shareButton"]},null),u.Pa(87,180224,[["inBtn",4]],0,S.b,[u.k,P.a,D.d,[2,I.a]],null,null),(l()(),u.Qa(88,0,null,0,1,"fa-icon",[["class","ng-fa-icon"],["size","lg"]],[[8,"innerHTML",1]],null,null,N.b,N.a)),u.Pa(89,573440,null,0,j.a,[O.c],{iconProp:[0,"iconProp"],size:[1,"size"]},null),(l()(),u.Qa(90,0,null,null,4,"button",[["mat-icon-button",""],["shareButton","whatsapp"]],[[4,"color",null],[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,a){var o=!0;return"click"===n&&(o=!1!==u.ab(l,91).onClick()&&o),o},A.d,A.b)),u.Pa(91,540672,null,0,L.b,[L.c,T.c,u.D,u.h,u.k,u.A],{shareButton:[0,"shareButton"]},null),u.Pa(92,180224,[["wtsBtn",4]],0,S.b,[u.k,P.a,D.d,[2,I.a]],null,null),(l()(),u.Qa(93,0,null,0,1,"fa-icon",[["class","ng-fa-icon"],["size","lg"]],[[8,"innerHTML",1]],null,null,N.b,N.a)),u.Pa(94,573440,null,0,j.a,[O.c],{iconProp:[0,"iconProp"],size:[1,"size"]},null),(l()(),u.Qa(95,0,null,null,4,"button",[["mat-icon-button",""],["shareButton","telegram"]],[[4,"color",null],[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,a){var o=!0;return"click"===n&&(o=!1!==u.ab(l,96).onClick()&&o),o},A.d,A.b)),u.Pa(96,540672,null,0,L.b,[L.c,T.c,u.D,u.h,u.k,u.A],{shareButton:[0,"shareButton"]},null),u.Pa(97,180224,[["teleBtn",4]],0,S.b,[u.k,P.a,D.d,[2,I.a]],null,null),(l()(),u.Qa(98,0,null,0,1,"fa-icon",[["class","ng-fa-icon"],["size","lg"]],[[8,"innerHTML",1]],null,null,N.b,N.a)),u.Pa(99,573440,null,0,j.a,[O.c],{iconProp:[0,"iconProp"],size:[1,"size"]},null),(l()(),u.Qa(100,0,null,null,4,"button",[["mat-icon-button",""],["shareButton","pinterest"]],[[4,"color",null],[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(l,n,a){var o=!0;return"click"===n&&(o=!1!==u.ab(l,101).onClick()&&o),o},A.d,A.b)),u.Pa(101,540672,null,0,L.b,[L.c,T.c,u.D,u.h,u.k,u.A],{shareButton:[0,"shareButton"]},null),u.Pa(102,180224,[["pinBtn",4]],0,S.b,[u.k,P.a,D.d,[2,I.a]],null,null),(l()(),u.Qa(103,0,null,0,1,"fa-icon",[["class","ng-fa-icon"],["size","lg"]],[[8,"innerHTML",1]],null,null,N.b,N.a)),u.Pa(104,573440,null,0,j.a,[O.c],{iconProp:[0,"iconProp"],size:[1,"size"]},null),(l()(),u.Qa(105,0,null,null,0,"p",[],null,null,null,null,null)),(l()(),u.Qa(106,0,null,null,4,"p",[],null,null,null,null,null)),(l()(),u.ib(-1,null,["You can get the official colors and icons by injecting "])),(l()(),u.Qa(108,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.ib(-1,null,["ShareButtons"])),(l()(),u.ib(-1,null,[" service in your component"])),(l()(),u.Qa(111,0,null,null,1,"hl-code",[],null,null,null,z.b,z.a)),u.Pa(112,4243456,null,0,v.a,[u.h],{code:[0,"code"]},null),(l()(),u.Qa(113,0,null,null,6,"note",[],null,null,null,q.b,q.a)),u.Pa(114,49152,null,0,F.a,[],null,null),(l()(),u.ib(-1,0,[" By default, the core package does not load any icon from FontAwesome, if you wish to use them, you should import them manually. Follow the "])),(l()(),u.Qa(116,0,null,0,2,"a",[["routerLink","/icons"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,a){var o=!0;return"click"===n&&(o=!1!==u.ab(l,117).onClick(a.button,a.ctrlKey,a.metaKey,a.shiftKey)&&o),o},null,null)),u.Pa(117,671744,null,0,R.q,[R.o,R.a,B.i],{routerLink:[0,"routerLink"]},null),(l()(),u.ib(-1,null,["Icons Guide"])),(l()(),u.ib(-1,0,[". "])),(l()(),u.Qa(120,0,null,null,52,"section",[["fxHide.lt-md","true"],["fxShow",""]],null,null,null,null,null)),u.Pa(121,737280,null,0,K.c,[d.i,[8,null],u.k,d.m,u.A,[2,d.l]],{show:[0,"show"],hideLtMd:[1,"hideLtMd"]},null),(l()(),u.Qa(122,0,null,null,2,"section-title",[],null,null,null,y.b,y.a)),u.Pa(123,49152,null,0,C.a,[],null,null),(l()(),u.ib(-1,0,["API"])),(l()(),u.Qa(125,0,null,null,47,"mat-table",[["class","mat-table"]],null,null,null,Y.f,Y.c)),u.Pa(126,2342912,null,4,r.k,[u.r,u.h,u.k,[8,null]],{dataSource:[0,"dataSource"]},null),u.gb(603979776,1,{_contentColumnDefs:1}),u.gb(603979776,2,{_contentRowDefs:1}),u.gb(603979776,3,{_contentHeaderRowDefs:1}),u.gb(603979776,4,{_contentFooterRowDefs:1}),(l()(),u.Qa(131,0,null,null,11,null,null,null,null,null,null,null)),u.Pa(132,16384,null,3,r.c,[],{name:[0,"name"]},null),u.gb(335544320,5,{cell:0}),u.gb(335544320,6,{headerCell:0}),u.gb(335544320,7,{footerCell:0}),u.fb(2048,[[1,4]],b.d,null,[r.c]),(l()(),u.Ha(0,null,null,2,null,J)),u.Pa(138,16384,null,0,r.f,[u.M],null,null),u.fb(2048,[[6,4]],b.j,null,[r.f]),(l()(),u.Ha(0,null,null,2,null,V)),u.Pa(141,16384,null,0,r.b,[u.M],null,null),u.fb(2048,[[5,4]],b.b,null,[r.b]),(l()(),u.Qa(143,0,null,null,11,null,null,null,null,null,null,null)),u.Pa(144,16384,null,3,r.c,[],{name:[0,"name"]},null),u.gb(335544320,12,{cell:0}),u.gb(335544320,13,{headerCell:0}),u.gb(335544320,14,{footerCell:0}),u.fb(2048,[[1,4]],b.d,null,[r.c]),(l()(),u.Ha(0,null,null,2,null,$)),u.Pa(150,16384,null,0,r.f,[u.M],null,null),u.fb(2048,[[13,4]],b.j,null,[r.f]),(l()(),u.Ha(0,null,null,2,null,ll)),u.Pa(153,16384,null,0,r.b,[u.M],null,null),u.fb(2048,[[12,4]],b.b,null,[r.b]),(l()(),u.Qa(155,0,null,null,11,null,null,null,null,null,null,null)),u.Pa(156,16384,null,3,r.c,[],{name:[0,"name"]},null),u.gb(335544320,15,{cell:0}),u.gb(335544320,16,{headerCell:0}),u.gb(335544320,17,{footerCell:0}),u.fb(2048,[[1,4]],b.d,null,[r.c]),(l()(),u.Ha(0,null,null,2,null,nl)),u.Pa(162,16384,null,0,r.f,[u.M],null,null),u.fb(2048,[[16,4]],b.j,null,[r.f]),(l()(),u.Ha(0,null,null,2,null,al)),u.Pa(165,16384,null,0,r.b,[u.M],null,null),u.fb(2048,[[15,4]],b.b,null,[r.b]),(l()(),u.Ha(0,null,null,2,null,ul)),u.Pa(168,540672,null,0,r.h,[u.M,u.r],{columns:[0,"columns"]},null),u.fb(2048,[[3,4]],b.l,null,[r.h]),(l()(),u.Ha(0,null,null,2,null,ol)),u.Pa(171,540672,null,0,r.j,[u.M,u.r],{columns:[0,"columns"]},null),u.fb(2048,[[2,4]],b.n,null,[r.j]),(l()(),u.Qa(173,0,null,0,1,"footer",[],null,null,null,W.b,W.a)),u.Pa(174,49152,null,0,G.a,[],null,null)],function(l,n){var a=n.component;l(n,1,0,!0,"page-scrollbar-thumb"),l(n,24,0,a.code.npm),l(n,28,0,a.code.yarn),l(n,34,0,a.code.import),l(n,40,0,a.code.example1,!0),l(n,43,0,"facebook"),l(n,46,0,a.share.prop.facebook.icon,"lg"),l(n,48,0,"twitter"),l(n,51,0,a.share.prop.twitter.icon,"lg"),l(n,53,0,"linkedin"),l(n,56,0,a.share.prop.linkedin.icon,"lg"),l(n,58,0,"whatsapp"),l(n,61,0,a.share.prop.whatsapp.icon,"lg"),l(n,63,0,"telegram"),l(n,66,0,a.share.prop.telegram.icon,"lg"),l(n,68,0,"pinterest"),l(n,71,0,a.share.prop.pinterest.icon,"lg"),l(n,73,0,a.code.example2,!0),l(n,76,0,"facebook"),l(n,79,0,a.share.prop.facebook.icon,"lg"),l(n,81,0,"twitter"),l(n,84,0,a.share.prop.twitter.icon,"lg"),l(n,86,0,"linkedin"),l(n,89,0,a.share.prop.linkedin.icon,"lg"),l(n,91,0,"whatsapp"),l(n,94,0,a.share.prop.whatsapp.icon,"lg"),l(n,96,0,"telegram"),l(n,99,0,a.share.prop.telegram.icon,"lg"),l(n,101,0,"pinterest"),l(n,104,0,a.share.prop.pinterest.icon,"lg"),l(n,112,0,a.code.service),l(n,117,0,"/icons"),l(n,121,0,"","true"),l(n,126,0,a.dataSource),l(n,132,0,"type"),l(n,144,0,"name"),l(n,156,0,"description"),l(n,168,0,a.displayedColumns),l(n,171,0,a.displayedColumns)},function(l,n){var a=n.component;l(n,42,0,a.share.prop.facebook.color,u.ab(n,44).disabled||null,"NoopAnimations"===u.ab(n,44)._animationMode),l(n,45,0,u.ab(n,46).renderedIconHTML),l(n,47,0,a.share.prop.twitter.color,u.ab(n,49).disabled||null,"NoopAnimations"===u.ab(n,49)._animationMode),l(n,50,0,u.ab(n,51).renderedIconHTML),l(n,52,0,a.share.prop.linkedin.color,u.ab(n,54).disabled||null,"NoopAnimations"===u.ab(n,54)._animationMode),l(n,55,0,u.ab(n,56).renderedIconHTML),l(n,57,0,a.share.prop.whatsapp.color,u.ab(n,59).disabled||null,"NoopAnimations"===u.ab(n,59)._animationMode),l(n,60,0,u.ab(n,61).renderedIconHTML),l(n,62,0,a.share.prop.telegram.color,u.ab(n,64).disabled||null,"NoopAnimations"===u.ab(n,64)._animationMode),l(n,65,0,u.ab(n,66).renderedIconHTML),l(n,67,0,a.share.prop.pinterest.color,u.ab(n,69).disabled||null,"NoopAnimations"===u.ab(n,69)._animationMode),l(n,70,0,u.ab(n,71).renderedIconHTML),l(n,75,0,a.share.prop.facebook.color,u.ab(n,77).disabled||null,"NoopAnimations"===u.ab(n,77)._animationMode),l(n,78,0,u.ab(n,79).renderedIconHTML),l(n,80,0,a.share.prop.twitter.color,u.ab(n,82).disabled||null,"NoopAnimations"===u.ab(n,82)._animationMode),l(n,83,0,u.ab(n,84).renderedIconHTML),l(n,85,0,a.share.prop.linkedin.color,u.ab(n,87).disabled||null,"NoopAnimations"===u.ab(n,87)._animationMode),l(n,88,0,u.ab(n,89).renderedIconHTML),l(n,90,0,a.share.prop.whatsapp.color,u.ab(n,92).disabled||null,"NoopAnimations"===u.ab(n,92)._animationMode),l(n,93,0,u.ab(n,94).renderedIconHTML),l(n,95,0,a.share.prop.telegram.color,u.ab(n,97).disabled||null,"NoopAnimations"===u.ab(n,97)._animationMode),l(n,98,0,u.ab(n,99).renderedIconHTML),l(n,100,0,a.share.prop.pinterest.color,u.ab(n,102).disabled||null,"NoopAnimations"===u.ab(n,102)._animationMode),l(n,103,0,u.ab(n,104).renderedIconHTML),l(n,116,0,u.ab(n,117).target,u.ab(n,117).href)})}var tl=u.Ma("button-d",Z,function(l){return u.kb(0,[(l()(),u.Qa(0,0,null,null,1,"button-d",[],null,null,null,el,E)),u.Pa(1,114688,null,0,Z,[U.a,O.i,L.c],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),il=a("M2Lx"),cl=a("eDkP"),rl=a("uGex"),bl=a("v9Dh"),sl=a("o3x0"),dl=a("qAlS"),pl=a("Nsh5"),hl=a("kWGw"),fl=a("4c35"),ml=a("/VYK"),kl=a("b716"),gl=a("LC5p"),Pl=a("0/Q6"),Yl=a("SMsm"),Ql=a("u7R8"),wl=a("FVSy"),Bl=a("de3e"),Ml=a("w+lc"),xl=a("5dmV"),yl=a("3pJQ"),Cl=a("V9q+"),zl=a("OQP5"),vl=a("0Ux2"),_l=a("doue"),Hl=a("PCNd"),Al=a("YSh2");a.d(n,"ShareDirectivePageModuleNgFactory",function(){return Ll});var Ll=u.Na(o,[],function(l){return u.Xa([u.Ya(512,u.j,u.Ca,[[8,[e.a,t.a,i.a,c.a,tl]],[3,u.j],u.w]),u.Ya(4608,B.n,B.m,[u.t,[2,B.y]]),u.Ya(4608,g.b,g.b,[]),u.Ya(4608,il.c,il.c,[]),u.Ya(4608,O.f,g.c,[[2,g.g],[2,g.l]]),u.Ya(4608,cl.c,cl.c,[cl.i,cl.e,u.j,cl.h,cl.f,u.q,u.y,B.d,m.b]),u.Ya(5120,cl.j,cl.k,[cl.c]),u.Ya(5120,rl.a,rl.b,[cl.c]),u.Ya(5120,bl.b,bl.c,[cl.c]),u.Ya(5120,sl.c,sl.d,[cl.c]),u.Ya(4608,sl.e,sl.e,[cl.c,u.q,[2,B.h],[2,sl.b],sl.c,[3,sl.e],cl.e]),u.Ya(4608,d.k,d.j,[d.d,d.h]),u.Ya(5120,u.b,function(l,n){return[d.n(l,n)]},[B.d,u.A]),u.Ya(4608,k.p,k.p,[]),u.Ya(4608,k.d,k.d,[]),u.Ya(4608,T.i,T.s,[B.d,u.A,T.q]),u.Ya(4608,T.t,T.t,[T.i,T.r]),u.Ya(5120,T.a,function(l){return[l]},[T.t]),u.Ya(4608,T.p,T.p,[]),u.Ya(6144,T.l,null,[T.p]),u.Ya(4608,T.h,T.h,[T.l]),u.Ya(6144,T.b,null,[T.h]),u.Ya(4608,T.g,T.m,[T.b,u.q]),u.Ya(4608,T.c,T.c,[T.g]),u.Ya(1073742336,B.c,B.c,[]),u.Ya(1073742336,R.r,R.r,[[2,R.x],[2,R.o]]),u.Ya(1073742336,b.p,b.p,[]),u.Ya(1073742336,m.a,m.a,[]),u.Ya(1073742336,g.l,g.l,[[2,g.d]]),u.Ya(1073742336,r.l,r.l,[]),u.Ya(1073742336,f.d,f.d,[]),u.Ya(1073742336,P.b,P.b,[]),u.Ya(1073742336,dl.b,dl.b,[]),u.Ya(1073742336,pl.h,pl.h,[]),u.Ya(1073742336,g.v,g.v,[]),u.Ya(1073742336,il.d,il.d,[]),u.Ya(1073742336,hl.b,hl.b,[]),u.Ya(1073742336,fl.f,fl.f,[]),u.Ya(1073742336,cl.g,cl.g,[]),u.Ya(1073742336,g.t,g.t,[]),u.Ya(1073742336,g.r,g.r,[]),u.Ya(1073742336,h.d,h.d,[]),u.Ya(1073742336,rl.d,rl.d,[]),u.Ya(1073742336,bl.e,bl.e,[]),u.Ya(1073742336,ml.c,ml.c,[]),u.Ya(1073742336,kl.b,kl.b,[]),u.Ya(1073742336,S.c,S.c,[]),u.Ya(1073742336,g.m,g.m,[]),u.Ya(1073742336,gl.b,gl.b,[]),u.Ya(1073742336,Pl.c,Pl.c,[]),u.Ya(1073742336,Yl.b,Yl.b,[]),u.Ya(1073742336,Ql.a,Ql.a,[]),u.Ya(1073742336,wl.d,wl.d,[]),u.Ya(1073742336,Bl.a,Bl.a,[]),u.Ya(1073742336,sl.h,sl.h,[]),u.Ya(1073742336,Ml.b,Ml.b,[]),u.Ya(1073742336,xl.a,xl.a,[]),u.Ya(1073742336,d.e,d.e,[]),u.Ya(1073742336,s.b,s.b,[]),u.Ya(1073742336,K.b,K.b,[]),u.Ya(1073742336,yl.a,yl.a,[]),u.Ya(1073742336,Cl.a,Cl.a,[[2,d.l],u.A]),u.Ya(1073742336,k.o,k.o,[]),u.Ya(1073742336,k.g,k.g,[]),u.Ya(1073742336,k.n,k.n,[]),u.Ya(1073742336,w.b,w.b,[]),u.Ya(1073742336,zl.c,zl.c,[]),u.Ya(1073742336,T.f,T.f,[]),u.Ya(1073742336,T.e,T.e,[]),u.Ya(1073742336,L.e,L.e,[]),u.Ya(1073742336,j.e,j.e,[]),u.Ya(1073742336,vl.b,vl.b,[]),u.Ya(1073742336,_l.c,_l.c,[]),u.Ya(1073742336,Hl.a,Hl.a,[]),u.Ya(1073742336,o,o,[]),u.Ya(256,f.a,{separatorKeyCodes:[Al.f]},[]),u.Ya(256,T.q,"XSRF-TOKEN",[]),u.Ya(256,T.r,"X-XSRF-TOKEN",[]),u.Ya(1024,R.m,function(){return[[{path:"",component:Z}]]},[])])})}}]);