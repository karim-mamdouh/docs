"use strict";(self.webpackChunkeshtri_core=self.webpackChunkeshtri_core||[]).push([[635],{3635:(v,g,i)=>{i.r(g),i.d(g,{FieldsetsModule:()=>d});var h=i(6895),s=i(433),p=i(8783),r=i(5377),u=i(5108),f=i(9199),e=i(8256),x=i(6354);class n{constructor(t,a){this.toasterService=t,this._fb=a,this.data={header:"text1",content:" ut labore et dolore magna "},this.data2={header:"text2",isToggleable:!0,content:"Lorem ipsum dolor bore et dolore magna "},this.data3=[{header:"text3",isToggleable:!1,content:"Lorem ipsum dolor bore et dolore magna "},{header:"text4",isToggleable:!0,content:"Lorem ipsum dolor bore et dolore magna "}],this.form=this._fb.group({textarea1:[{value:"//HTML\n <cic-fieldset [data]=\"data\"></cic-fieldset>\n\n//TS\ndata:FieldSetData={ header:'text1',content:'Lorem ipsum dolor bore et dolore magna'}\n         ",disabled:!0}],textarea2:[{value:"//HTML\n  <cic-fieldset [data]=\"data2\"></cic-fieldset>\n\n//TS\n data2:FieldSetData= {header:'text2',isToggleable:true,content:'Lorem ipsum dolor bore et dolore magna '}\n         ",disabled:!0}],textarea3:[{value:"//HTML\n  <cic-fieldset [data]=\"data2\"></cic-fieldset>\n\n//TS\n data3:Array<FieldSetData>= [\n {header:'text3',isToggleable:false,content:'Lorem ipsum dolor bore et dolore magna '},\n {header:'text4',isToggleable:true,content:'Lorem ipsum dolor bore et dolore magna '}]",disabled:!0}]})}ngOnInit(){}clicked(t){navigator.clipboard.writeText(this.form.controls[t].value),this.toasterService.toggleToaster("Copied to clipboard")}}n.\u0275fac=function(t){return new(t||n)(e.Y36(x.M),e.Y36(s.qu))},n.\u0275cmp=e.Xpm({type:n,selectors:[["cic-fieldset-examples"]],decls:24,vars:6,consts:[[1,"container"],[1,"text"],[1,"p-tag"],[3,"data"],[3,"formGroup"],["styleClass","cheak","type","textarea","controlName","textarea1"],["styleClass","cheak","type","textarea","controlName","textarea2"],["styleClass","cheak L","type","textarea","controlName","textarea3"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"p-divider")(3,"span",2),e._uU(4," Basic"),e.qZA()(),e._UZ(5,"cic-fieldset",3),e.qZA(),e.TgZ(6,"div",4),e._UZ(7,"cic-input",5),e.qZA()(),e.TgZ(8,"div",0)(9,"div",1)(10,"p-divider")(11,"span",2),e._uU(12," Toggleable"),e.qZA()(),e._UZ(13,"cic-fieldset",3),e.qZA(),e.TgZ(14,"div",4),e._UZ(15,"cic-input",6),e.qZA()(),e.TgZ(16,"div",0)(17,"div",1)(18,"p-divider")(19,"span",2),e._uU(20," Set data of Array"),e.qZA()(),e._UZ(21,"cic-fieldset",3),e.qZA(),e.TgZ(22,"div",4),e._UZ(23,"cic-input",7),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("data",a.data),e.xp6(1),e.Q6J("formGroup",a.form),e.xp6(7),e.Q6J("data",a.data2),e.xp6(1),e.Q6J("formGroup",a.form),e.xp6(7),e.Q6J("data",a.data3),e.xp6(1),e.Q6J("formGroup",a.form))},dependencies:[s.JL,s.sg,r.r2,u.i,r.Mu],styles:["h1[_ngcontent-%COMP%]{margin-bottom:25px}.container[_ngcontent-%COMP%]{background-color:#eff3f8a5;padding:30px;margin-bottom:2rem;border-radius:20px}.text[_ngcontent-%COMP%]{margin-bottom:1rem}h3[_ngcontent-%COMP%]{margin:30px 0 10px 10px}"]});class c{constructor(){this.Basic='<cic-fieldset [data]="data" ></cic-fieldset>'}ngOnInit(){}}c.\u0275fac=function(t){return new(t||c)},c.\u0275cmp=e.Xpm({type:c,selectors:[["cic-fieldset-install"]],decls:14,vars:2,consts:[[1,"container"]],template:function(t,a){1&t&&(e.TgZ(0,"h1"),e._uU(1,"Field Set"),e.qZA(),e.TgZ(2,"p"),e._uU(3,"CIC-Fieldset is a generic component that has all fieldSet & modes"),e.qZA(),e.TgZ(4,"h3"),e._uU(5,"Import"),e.qZA(),e.TgZ(6,"div",0)(7,"code"),e._uU(8),e.qZA()(),e.TgZ(9,"h3"),e._uU(10,"Basic usage"),e.qZA(),e.TgZ(11,"div",0)(12,"code"),e._uU(13),e.qZA()()),2&t&&(e.xp6(8),e.Oqu("import {CICFieldsetModule} from 'cic-core-library'"),e.xp6(5),e.hij(" ",a.Basic," "))},styles:["h1[_ngcontent-%COMP%]{margin-bottom:25px}.container[_ngcontent-%COMP%]{background-color:#eff3f8a5;padding:30px;border-radius:20px}h3[_ngcontent-%COMP%]{margin:30px 0 10px 10px}"]});class m{constructor(t,a){this.toasterService=t,this._fb=a,this.form=this._fb.group({textarea1:[{value:" ///Html\n         <cic-fieldset [data]=\"data\"></cic-fieldset>\n\n         ///Ts\n         data:FieldSetData={ header:'text1',content:'Lorem ipsum dolor bore et dolore magna'}\n         ",disabled:!0}],textarea2:[{value:"//Html\n         <cic-fieldset [data]=\"data2\"></cic-fieldset>\n\n         ///Ts\n         data2:FieldSetData= {header:'text2',isToggleable:true,content:'Lorem ipsum dolor bore et dolore magna '}\n         ",disabled:!0}],textarea3:[{value:"//Html\n         <cic-fieldset [data]=\"data2\"></cic-fieldset>\n\n         ///Ts\n         data3:Array<FieldSetData>= [\n          {header:'text3',isToggleable:false,content:'Lorem ipsum dolor bore et dolore magna '},\n          {header:'text4',isToggleable:true,content:'Lorem ipsum dolor bore et dolore magna '}\n         ]\n\n         ",disabled:!0}]})}ngOnInit(){}clicked(t){navigator.clipboard.writeText(this.form.controls[t].value),this.toasterService.toggleToaster("Copied to clipboard")}}m.\u0275fac=function(t){return new(t||m)(e.Y36(x.M),e.Y36(s.qu))},m.\u0275cmp=e.Xpm({type:m,selectors:[["app-fieldset"]],decls:5,vars:0,consts:[["header","Examples","leftIcon","pi pi-exclamation-circle"],["header","Installation","leftIcon","pi pi-download"]],template:function(t,a){1&t&&(e.TgZ(0,"p-tabView")(1,"p-tabPanel",0),e._UZ(2,"cic-fieldset-examples"),e.qZA(),e.TgZ(3,"p-tabPanel",1),e._UZ(4,"cic-fieldset-install"),e.qZA()())},dependencies:[p.xf,p.x4,n,c]});const b=[{path:"",component:m}];class l{}l.\u0275fac=function(t){return new(t||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[f.Bz.forChild(b),f.Bz]});class d{}d.\u0275fac=function(t){return new(t||d)},d.\u0275mod=e.oAB({type:d}),d.\u0275inj=e.cJS({imports:[h.ez,s.UX,p.LU,r.Sq,r.ze,r.kw,u.x,l,r.M8]})}}]);