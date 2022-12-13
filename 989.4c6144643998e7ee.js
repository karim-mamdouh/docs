"use strict";(self.webpackChunkeshtri_core=self.webpackChunkeshtri_core||[]).push([[989],{8989:(_,f,r)=>{r.r(f),r.d(f,{DropdownsModule:()=>d});var Z=r(6895),p=r(433),s=r(8783),i=r(5377),b=r(5108),w=r(9199),e=r(8256),C=r(6354);class u{constructor(o,t){this._fb=o,this.toasterService=t,this.form=this._fb.group({control:[],textarea1:[{value:'<cic-dropdown [data]="data" controlName="control" label="Countries" placeholder="Countries"></cic-dropdown>',disabled:!0}],textarea2:[{value:'<cic-dropdown [floatLabel]="true" [data]="data" controlName="control" label="Countries" placeholder="Countries"></cic-dropdown>',disabled:!0}],textarea3:[{value:'<cic-dropdown [floatLabel]="true" [data]="data" controlName="control" label="Countries" placeholder="Countries" [autoComplete]="true"></cic-dropdown>',disabled:!0}],textarea4:[{value:'<cic-dropdown [floatLabel]="true" [data]="data" controlName="control" label="Countries" placeholder="Countries" [multiSelect]="true"></cic-dropdown>',disabled:!0}],textarea5:[{value:'<cic-dropdown [floatLabel]="true" [data]="data" controlName="control" label="Countries" placeholder="Countries" [enableFilter]="true"></cic-dropdown>',disabled:!0}],textarea6:[{value:'<cic-dropdown [floatLabel]="true" [data]="data" controlName="control" label="Countries" placeholder="Countries" [showClear]="true"></cic-dropdown>',disabled:!0}],textarea7:[{value:'<cic-dropdown [floatLabel]="true" [data]="data" controlName="control" label="Countries" placeholder="Countries" [multiSelect]="true" multiSelectMode="chip"></cic-dropdown>',disabled:!0}],textarea8:[{value:'<cic-dropdown [floatLabel]="true" [data]="data" controlName="control" label="Countries" placeholder="Countries" mode="text-flag"></cic-dropdown>',disabled:!0}],textarea9:[{value:'<cic-dropdown [floatLabel]="true" [data]="data" controlName="control" label="Countries" placeholder="Countries" [roundedFlagIcon]="true" mode="text-flag" [multiSelect]="true"></cic-dropdown>',disabled:!0}],textarea10:[{value:'<cic-dropdown [floatLabel]="true" [data]="data" controlName="control" label="Countries" placeholder="Countries" mode="text-icon"></cic-dropdown>',disabled:!0}],textarea11:[{value:"data: Array<DropDownItem> = [\n          { key: 'Egypt', value: 'EG', iconName: 'pi pi-user' },\n          { key: 'France', value: 'FR', iconName: 'pi pi-star' },\n          { key: 'Saudi-Arabia', value: 'SA', iconName: 'pi pi-cog' },\n          { key: 'Europe', value: 'EU', iconName: 'pi pi-heart' },\n          { key: 'Iraq', value: 'IR', iconName: 'pi pi-check' },\n        ];",disabled:!0}]}),this.data=[{key:"Egypt",value:"EG",iconName:"pi pi-user"},{key:"France",value:"FR",iconName:"pi pi-star"},{key:"Saudi-Arabia",value:"SA",iconName:"pi pi-cog"},{key:"Europe",value:"EU",iconName:"pi pi-heart"},{key:"Iraq",value:"IR",iconName:"pi pi-check"}]}ngOnInit(){}clicked(o){navigator.clipboard.writeText(this.form.controls[o].value),this.toasterService.toggleToaster("Copied to clipboard")}}u.\u0275fac=function(o){return new(o||u)(e.Y36(p.qu),e.Y36(C.M))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cic-dropdown-examples"]],decls:92,vars:33,consts:[[3,"formGroup"],[1,"container"],[1,"p-tag"],[1,"input-group"],["controlName","control","label","Countries","placeholder","Countries",3,"data"],["type","textarea","controlName","textarea1"],["btnIcon","pi-copy","label","Copy",3,"click"],["controlName","control","label","Countries","placeholder","Countries",3,"floatLabel","data"],["type","textarea","controlName","textarea2"],["controlName","control","label","Countries","placeholder","Countries",3,"floatLabel","data","autoComplete"],["type","textarea","controlName","textarea3"],["controlName","control","label","Countries","placeholder","Countries",3,"floatLabel","data","multiSelect"],["type","textarea","controlName","textarea4"],["controlName","control","label","Countries","placeholder","Countries",3,"floatLabel","data","enableFilter"],["type","textarea","controlName","textarea5"],["controlName","control","label","Countries","placeholder","Countries",3,"floatLabel","data","showClear"],["type","textarea","controlName","textarea6"],["controlName","control","label","Countries","placeholder","Countries","multiSelectMode","chip",3,"floatLabel","data","multiSelect"],["type","textarea","controlName","textarea7",3,"autoSize","rows"],["controlName","control","label","Countries","placeholder","Countries","mode","text-flag",3,"floatLabel","data"],["type","textarea","controlName","textarea8"],["controlName","control","label","Countries","placeholder","Countries","mode","text-flag",3,"floatLabel","data","roundedFlagIcon","multiSelect"],["type","textarea","controlName","textarea9",3,"autoSize","rows"],["controlName","control","label","Countries","placeholder","Countries","mode","text-icon",3,"floatLabel","data"],["type","textarea","controlName","textarea10"],["type","textarea","controlName","textarea11","label","TS",3,"autoSize","rows"]],template:function(o,t){1&o&&(e.TgZ(0,"form",0)(1,"div",1)(2,"p-divider")(3,"span",2),e._uU(4,"Dropdown with basic label"),e.qZA()(),e.TgZ(5,"div",3),e._UZ(6,"cic-dropdown",4),e.TgZ(7,"div"),e._UZ(8,"cic-input",5),e.TgZ(9,"cic-button",6),e.NdJ("click",function(){return t.clicked("textarea1")}),e.qZA()()()(),e.TgZ(10,"div",1)(11,"p-divider")(12,"span",2),e._uU(13,"Dropdown with floatlabel"),e.qZA()(),e.TgZ(14,"div",3),e._UZ(15,"cic-dropdown",7),e.TgZ(16,"div"),e._UZ(17,"cic-input",8),e.TgZ(18,"cic-button",6),e.NdJ("click",function(){return t.clicked("textarea2")}),e.qZA()()()(),e.TgZ(19,"div",1)(20,"p-divider")(21,"span",2),e._uU(22,"Dropdown with auto-complete"),e.qZA()(),e.TgZ(23,"div",3),e._UZ(24,"cic-dropdown",9),e.TgZ(25,"div"),e._UZ(26,"cic-input",10),e.TgZ(27,"cic-button",6),e.NdJ("click",function(){return t.clicked("textarea3")}),e.qZA()()()(),e.TgZ(28,"div",1)(29,"p-divider")(30,"span",2),e._uU(31,"Dropdown with multi-select"),e.qZA()(),e.TgZ(32,"div",3),e._UZ(33,"cic-dropdown",11),e.TgZ(34,"div"),e._UZ(35,"cic-input",12),e.TgZ(36,"cic-button",6),e.NdJ("click",function(){return t.clicked("textarea4")}),e.qZA()()()(),e.TgZ(37,"div",1)(38,"p-divider")(39,"span",2),e._uU(40,"Dropdown with search bar"),e.qZA()(),e.TgZ(41,"div",3),e._UZ(42,"cic-dropdown",13),e.TgZ(43,"div"),e._UZ(44,"cic-input",14),e.TgZ(45,"cic-button",6),e.NdJ("click",function(){return t.clicked("textarea5")}),e.qZA()()()(),e.TgZ(46,"div",1)(47,"p-divider")(48,"span",2),e._uU(49,"Dropdown with clear button"),e.qZA()(),e.TgZ(50,"div",3),e._UZ(51,"cic-dropdown",15),e.TgZ(52,"div"),e._UZ(53,"cic-input",16),e.TgZ(54,"cic-button",6),e.NdJ("click",function(){return t.clicked("textarea6")}),e.qZA()()()(),e.TgZ(55,"div",1)(56,"p-divider")(57,"span",2),e._uU(58,"Dropdown with chip selection"),e.qZA()(),e.TgZ(59,"div",3),e._UZ(60,"cic-dropdown",17),e.TgZ(61,"div"),e._UZ(62,"cic-input",18),e.TgZ(63,"cic-button",6),e.NdJ("click",function(){return t.clicked("textarea7")}),e.qZA()()()(),e.TgZ(64,"div",1)(65,"p-divider")(66,"span",2),e._uU(67,"Dropdown with flags"),e.qZA()(),e.TgZ(68,"div",3),e._UZ(69,"cic-dropdown",19),e.TgZ(70,"div"),e._UZ(71,"cic-input",20),e.TgZ(72,"cic-button",6),e.NdJ("click",function(){return t.clicked("textarea8")}),e.qZA()()()(),e.TgZ(73,"div",1)(74,"p-divider")(75,"span",2),e._uU(76,"Dropdown with rounded flags"),e.qZA()(),e.TgZ(77,"div",3),e._UZ(78,"cic-dropdown",21),e.TgZ(79,"div"),e._UZ(80,"cic-input",22),e.TgZ(81,"cic-button",6),e.NdJ("click",function(){return t.clicked("textarea9")}),e.qZA()()()(),e.TgZ(82,"div",1)(83,"p-divider")(84,"span",2),e._uU(85,"Dropdown with icons"),e.qZA()(),e.TgZ(86,"div",3),e._UZ(87,"cic-dropdown",23),e.TgZ(88,"div"),e._UZ(89,"cic-input",24),e.TgZ(90,"cic-button",6),e.NdJ("click",function(){return t.clicked("textarea10")}),e.qZA()()()(),e._UZ(91,"cic-input",25),e.qZA()),2&o&&(e.Q6J("formGroup",t.form),e.xp6(6),e.Q6J("data",t.data),e.xp6(9),e.Q6J("floatLabel",!0)("data",t.data),e.xp6(9),e.Q6J("floatLabel",!0)("data",t.data)("autoComplete",!0),e.xp6(9),e.Q6J("floatLabel",!0)("data",t.data)("multiSelect",!0),e.xp6(9),e.Q6J("floatLabel",!0)("data",t.data)("enableFilter",!0),e.xp6(9),e.Q6J("floatLabel",!0)("data",t.data)("showClear",!0),e.xp6(9),e.Q6J("floatLabel",!0)("data",t.data)("multiSelect",!0),e.xp6(2),e.Q6J("autoSize",!0)("rows",3),e.xp6(7),e.Q6J("floatLabel",!0)("data",t.data),e.xp6(9),e.Q6J("floatLabel",!0)("data",t.data)("roundedFlagIcon",!0)("multiSelect",!0),e.xp6(2),e.Q6J("autoSize",!0)("rows",3),e.xp6(7),e.Q6J("floatLabel",!0)("data",t.data),e.xp6(4),e.Q6J("autoSize",!0)("rows",7))},dependencies:[p._Y,p.JL,p.sg,i.ar,i.r2,b.i,i.HJ],styles:["form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px}form[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{background-color:#eff3f8a5;padding:20px;border-radius:20px}.input-group[_ngcontent-%COMP%]{display:flex;justify-content:space-evenly;gap:25px;align-items:center}.input-group[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;width:70%;gap:10px;align-items:flex-end}.input-group[_ngcontent-%COMP%]   .input-sizes[_ngcontent-%COMP%]{margin-top:20px;flex-direction:column;gap:30px;align-items:flex-start}"]});var a=r(5701);const x=[(0,a.G3)("label","string","undefined","Sets input label"),(0,a.G3)("placeholder","string",'"Placeholder"',"Sets input placeholder"),(0,a.G3)("controlName","string","undefined","Sets formControlName for input component, MUST BE PROVIDED for the component to operate"),(0,a.G3)("data","Array<DropDownItem>","[ ]","Data array to be viewed in dropdown"),(0,a.G3)("showClear","boolean","false","Shows/hides clear button for selected item"),(0,a.G3)("enableFilter","boolean","false","Shows/hides search bar inside dropdown list"),(0,a.G3)("multiSelect","boolean","false","Enables/disables multi selection for dropdown items (returns an array of selected items)"),(0,a.G3)("multiSelectMode","MultiMode: 'chip'","undefined","Changes selected items mode when multiSelect flag is active, for normal mode remove property"),(0,a.G3)("autoComplete","boolean","false","Enables/disables auto-complete when typing in dropdown"),(0,a.G3)("floatLabel","boolean","false","Shows the label provided as a floating label (refer to examples)"),(0,a.G3)("mode","DropDownMode: 'text-flag' | 'text-svg' | 'text-icon'","undefined","Changes viewing mode of dropdown, for normal mode remove property"),(0,a.G3)("roundedFlagIcon","boolean","false","Enables/disables rounded flag icons, USE ONLY IN TEXT-FLAG MODE")],h=[(0,a.yM)("key","string","Used as shown text for the dropdown"),(0,a.yM)("value","string","Value return when an item is selected"),(0,a.yM)("iconURL","string","Directory for icon image (USE WHEN IN TEXT-SVG MODE ONLY)"),(0,a.yM)("iconName","string","Icon name to be placed next to items in dropdown, USE ONLY WITH TEXT-ICON MODE (refer to http://primefaces.org/primeng/icons)")];class m{constructor(){this.usage='<form [formGroup]="form">\n  <cic-dropdown [data]="data" controlName="formControl"></cic-dropdown>\n</form>',this.properties=x,this.interfaces=h,this.propertyHeaders=[{title:"Property Name",type:"text",dataKey:"name"},{title:"Type",type:"text",dataKey:"type"},{title:"Default Value",type:"text",dataKey:"defaultValue"},{title:"Description",type:"text",dataKey:"description"}],this.eventInterfaceHeaders=[{title:"Property Name",type:"text",dataKey:"name"},{title:"Type",type:"text",dataKey:"type"},{title:"Description",type:"text",dataKey:"description"}]}ngOnInit(){}}m.\u0275fac=function(o){return new(o||m)},m.\u0275cmp=e.Xpm({type:m,selectors:[["cic-dropdown-install"]],decls:33,vars:6,consts:[[1,"container"],[1,"subtitle"],[1,"details-container"],["header","Properties","leftIcon","pi pi-cog"],[1,"table-container"],[3,"data","tableColumns"],["caption",""],["header","Interfaces","leftIcon","pi-list pi"],["summaryMessage","* ? indicates optional parameter *",3,"data","tableColumns"]],template:function(o,t){1&o&&(e.TgZ(0,"h1"),e._uU(1,"Dropdown"),e.qZA(),e.TgZ(2,"p"),e._uU(3," CIC-Dropdown is a generic component that contains all dropdown formats & types\n"),e.qZA(),e.TgZ(4,"h3"),e._uU(5,"Import"),e.qZA(),e.TgZ(6,"div",0)(7,"code"),e._uU(8),e.qZA()(),e.TgZ(9,"h3"),e._uU(10,"Basic usage"),e.qZA(),e.TgZ(11,"p",1),e._uU(12," Component needs to be wrapped with "),e.TgZ(13,"span"),e._uU(14,"form group ('form') & form control name ('formControl')"),e.qZA(),e._uU(15," should be provided\n"),e.qZA(),e.TgZ(16,"div",0)(17,"code"),e._uU(18),e.qZA()(),e.TgZ(19,"div",2)(20,"p-tabView")(21,"p-tabPanel",3)(22,"div",4)(23,"cic-data-table",5),e.ynx(24,6),e.TgZ(25,"h3"),e._uU(26,"Properties"),e.qZA(),e.BQk(),e.qZA()()(),e.TgZ(27,"p-tabPanel",7)(28,"div",4)(29,"cic-data-table",8),e.ynx(30,6),e.TgZ(31,"h3"),e._uU(32,"<DropDownItem> Interface"),e.qZA(),e.BQk(),e.qZA()()()()()),2&o&&(e.xp6(8),e.Oqu("import { CICDropdownModule } from 'cic-core-library'"),e.xp6(10),e.Oqu(t.usage),e.xp6(5),e.Q6J("data",t.properties)("tableColumns",t.propertyHeaders),e.xp6(6),e.Q6J("data",t.interfaces)("tableColumns",t.eventInterfaceHeaders))},dependencies:[s.xf,s.x4,i.uw],styles:["h1[_ngcontent-%COMP%]{margin-bottom:25px}.container[_ngcontent-%COMP%]{background-color:#eff3f8a5;padding:30px;border-radius:20px}h3[_ngcontent-%COMP%]{margin:30px 0 10px 10px}.subtitle[_ngcontent-%COMP%]{margin:0 0 10px 10px;font-size:.9rem}.subtitle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:orange;font-weight:600}.table-container[_ngcontent-%COMP%]{margin-top:50px}.table-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:20px 0}code[_ngcontent-%COMP%]{white-space:pre}"]});class g{constructor(){}ngOnInit(){}}g.\u0275fac=function(o){return new(o||g)},g.\u0275cmp=e.Xpm({type:g,selectors:[["cic-dropdowns"]],decls:5,vars:0,consts:[["header","Examples","leftIcon","pi pi-exclamation-circle"],["header","Installation","leftIcon","pi pi-download"]],template:function(o,t){1&o&&(e.TgZ(0,"p-tabView")(1,"p-tabPanel",0),e._UZ(2,"cic-dropdown-examples"),e.qZA(),e.TgZ(3,"p-tabPanel",1),e._UZ(4,"cic-dropdown-install"),e.qZA()())},dependencies:[s.xf,s.x4,u,m]});const v=[{path:"",component:g}];class c{}c.\u0275fac=function(o){return new(o||c)},c.\u0275mod=e.oAB({type:c}),c.\u0275inj=e.cJS({imports:[w.Bz.forChild(v),w.Bz]});class d{}d.\u0275fac=function(o){return new(o||d)},d.\u0275mod=e.oAB({type:d}),d.\u0275inj=e.cJS({imports:[Z.ez,p.UX,s.LU,i.Sq,i.ze,i.kw,b.x,c,i.T0]})}}]);