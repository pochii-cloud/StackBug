"use strict";(self.webpackChunkStackBug=self.webpackChunkStackBug||[]).push([[754],{8754:(O,a,s)=>{s.r(a),s.d(a,{AskQuestionComponent:()=>k});var p=s(6895),d=s(4736),o=s(433),n=s(8256);function _(e,l){1&e&&(n.TgZ(0,"p",12),n._uU(1,"title is required."),n.qZA())}function c(e,l){if(1&e&&(n.TgZ(0,"div"),n.YNc(1,_,2,0,"p",11),n.qZA()),2&e){const i=n.oxw();let t;n.xp6(1),n.Q6J("ngIf",null==(t=i.askQestionForm.get("title"))||null==t.errors?null:t.errors.required)}}function m(e,l){1&e&&(n.TgZ(0,"p",12),n._uU(1,"description is required."),n.qZA())}function f(e,l){if(1&e&&(n.TgZ(0,"div"),n.YNc(1,m,2,0,"p",11),n.qZA()),2&e){const i=n.oxw();let t;n.xp6(1),n.Q6J("ngIf",null==(t=i.askQestionForm.get("problem"))||null==t.errors?null:t.errors.required)}}function x(e,l){1&e&&(n.TgZ(0,"p",12),n._uU(1,"field is required."),n.qZA())}function C(e,l){if(1&e&&(n.TgZ(0,"div"),n.YNc(1,x,2,0,"p",11),n.qZA()),2&e){const i=n.oxw();let t;n.xp6(1),n.Q6J("ngIf",null==(t=i.askQestionForm.get("expectations"))||null==t.errors?null:t.errors.required)}}let k=(()=>{class e{constructor(i){this.fb=i}ngOnInit(){this.askQestionForm=this.fb.group({title:["",o.kI.required],problem:["",o.kI.required],expectations:["",o.kI.required]})}}return e.\u0275fac=function(i){return new(i||e)(n.Y36(o.qu))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-ask-question"]],standalone:!0,features:[n.jDz],decls:29,vars:4,consts:[[1,"main"],[1,"guidelines"],[1,"ask-question-form"],[3,"formGroup"],["for","question-title"],["type","text","placeholder","enter question title","id","question-title","formControlName","title"],[4,"ngIf"],["for","question-problem"],["id","question-problem","formControlName","problem"],["for","question-expectations"],["id","question-expectations","formControlName","expectations"],["class","err",4,"ngIf"],[1,"err"]],template:function(i,t){if(1&i&&(n.TgZ(0,"div",0)(1,"div",1)(2,"h2"),n._uU(3,"Writing A Good Question"),n.qZA(),n.TgZ(4,"ul")(5,"li"),n._uU(6,"This is the guideline guideline1"),n.qZA(),n.TgZ(7,"li"),n._uU(8,"This is the guideline guideline2"),n.qZA(),n.TgZ(9,"li"),n._uU(10,"This is the guideline guideline3"),n.qZA()()(),n.TgZ(11,"div",2)(12,"form",3)(13,"h2"),n._uU(14,"Ask A Question"),n.qZA(),n.TgZ(15,"label",4),n._uU(16,"Title:"),n.qZA(),n._UZ(17,"input",5),n.YNc(18,c,2,1,"div",6),n.TgZ(19,"label",7),n._uU(20,"Problem Description:"),n.qZA(),n._UZ(21,"textarea",8),n.YNc(22,f,2,1,"div",6),n.TgZ(23,"label",9),n._uU(24,"What you tried and you were expecting:"),n.qZA(),n._UZ(25,"textarea",10),n.YNc(26,C,2,1,"div",6),n.TgZ(27,"button"),n._uU(28,"Ask Question"),n.qZA()()()()),2&i){let r,u,g;n.xp6(12),n.Q6J("formGroup",t.askQestionForm),n.xp6(6),n.Q6J("ngIf",(null==(r=t.askQestionForm.get("title"))?null:r.invalid)&&((null==(r=t.askQestionForm.get("title"))?null:r.dirty)||(null==(r=t.askQestionForm.get("title"))?null:r.touched))),n.xp6(4),n.Q6J("ngIf",(null==(u=t.askQestionForm.get("problem"))?null:u.invalid)&&((null==(u=t.askQestionForm.get("problem"))?null:u.dirty)||(null==(u=t.askQestionForm.get("problem"))?null:u.touched))),n.xp6(4),n.Q6J("ngIf",(null==(g=t.askQestionForm.get("expectations"))?null:g.invalid)&&((null==(g=t.askQestionForm.get("expectations"))?null:g.dirty)||(null==(g=t.askQestionForm.get("expectations"))?null:g.touched)))}},dependencies:[p.ez,p.O5,d.Bz,o.u5,o._Y,o.Fj,o.JJ,o.JL,o.UX,o.sg,o.u],styles:[".main[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;background-color:#f1f2f3;margin-top:50px}.guidelines[_ngcontent-%COMP%]{margin-top:50px;background-color:#ebf4fb;width:50%;height:auto;padding:20px 50px}.guidelines[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-weight:700;font-size:20px}.guidelines[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-top:30px}.guidelines[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:18px;margin-top:10px;list-style:circle}.ask-question-form[_ngcontent-%COMP%]{width:100%;padding:20px}form[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:50%;margin:auto;background-color:#fff;padding:20px}form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px;font-weight:700}.ask-question-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:2px solid black;height:40px}.ask-question-form[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{border:2px solid black;height:150px}.ask-question-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{margin-top:20px}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#0a95ff;padding:10px 15px;border:none;color:#fff;border-radius:5px;width:20%;margin-top:10px}@media screen and (max-width:768px){.main[_ngcontent-%COMP%]{width:100vw;padding:20px}.guidelines[_ngcontent-%COMP%]{width:90%}.ask-question-form[_ngcontent-%COMP%], form[_ngcontent-%COMP%]{width:100%}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:35vw}}"]}),e})()}}]);