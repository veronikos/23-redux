(this["webpackJsonptyler-potts-login-form"]=this["webpackJsonptyler-potts-login-form"]||[]).push([[0],{17:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(6),s=n.n(i),r=(n(17),n(4)),o=n(2),m=n.n(o),j=n(0);function l(){return Object(j.jsxs)("form",{className:m()(r.form),children:[Object(j.jsx)("p",{className:m()(r.p),children:"Type your comment and enter URL"}),Object(j.jsx)("input",{type:"text",placeholder:"Type your comment",className:m()(r.input)}),Object(j.jsx)("input",{type:"text",placeholder:"Enter link to the photo",className:m()(r.input)}),Object(j.jsx)("p",{className:m()(r.p),children:"Choose the author"}),Object(j.jsxs)("select",{className:m()(r.input),children:[Object(j.jsx)("option",{children:"Author 1"}),Object(j.jsx)("option",{children:"Author 2"}),Object(j.jsx)("option",{children:"Author 3"})]}),Object(j.jsx)("button",{type:"submit",className:m()(r.button),children:"Submit"})]})}var d=n(7),u=function(e){var t=e.level,n=void 0===t?"h1":t,c=e.children;return Object(j.jsx)(n,{children:c})},b=n(3);var h=function(e){return Object(j.jsxs)("div",{className:m()(b.userInfo),children:[Object(j.jsx)("img",{className:m()(b.avatar),src:e.user.photo,alt:e.user.name}),Object(j.jsx)("div",{className:m()(b.name),children:e.user.name}),Object(j.jsx)("div",{className:m()(b.nickname),children:e.user.nickname}),Object(j.jsx)("div",{className:m()(b.comment_date),children:e.user.date})]})};function p(e){return Object(j.jsxs)("div",{className:m()(b.comment),children:[Object(j.jsx)(h,{user:e.author}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:m()(b.comment_text),children:e.comment}),Object(j.jsx)("img",{className:m()(b.image),src:e.image,alt:e.image}),Object(j.jsxs)("div",{className:m()(b.social),children:[Object(j.jsxs)("div",{className:m()(b.p),children:[Object(j.jsx)("i",{class:"fa fa-heart"}),Object(j.jsx)("p",{children:"1"})]}),Object(j.jsxs)("div",{className:m()(b.p),children:[Object(j.jsx)("i",{class:"fa fa-comment"}),Object(j.jsx)("p",{children:"1"})]}),Object(j.jsxs)("div",{className:m()(b.p),children:[Object(j.jsx)("i",{class:"fa fa-retweet"}),Object(j.jsx)("p",{children:"1"})]})]})]})]})}var O=[{author:{name:"Anakin Skywalker",photo:"https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",nickname:"@dart_vader",date:"26 fev."},comment:"WTF? Who is Ray? Why she is Skywalker? Luke...?",image:"https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale"},{author:{name:"Hermione Granger",photo:"https://i.pinimg.com/originals/b0/49/db/b049dbae23f549bb8782e20d5ea76e92.jpg",nickname:"@hermione",date:"18 apr."},comment:"I mean, you could claim that anything\u2019s real if the only basis for believing in it is that nobody\u2019s proved it doesn\u2019t exist!",image:"https://image.winudf.com/v2/image1/Y29tLm1hZ2ljZmx1aWRzLmRlbW9fc2NyZWVuXzFfMTYwODIyODg5Nl8wMDY/screen-1.jpg?fakeurl=1&type=.jpg"}];var x=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(u,{}),O.map((function(e){return Object(j.jsx)(p,{author:Object(d.a)({},e.author),comment:e.comment,image:e.image})}))]})},_=n(11),f=n(12),g={items:["Bob","Bond","Smith","Alice"]},v=Object(f.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"load_item":return console.log(e.items),Object(d.a)({},e);case"add_items":return console.log("add_items",e.items),{items:[].concat(Object(_.a)(e.items),[t.payload.toLowerCase()])};default:return e}})),y=n(5),N=function(){var e=Object(y.c)((function(e){return e.items}));return Object(j.jsx)("ul",{children:e.map((function(e){return Object(j.jsx)("li",{children:e},e)}))})},k=function(){var e=Object(y.b)(),t=null;return Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{className:m()(r.input),onChange:function(e){return t=e.target.value}}),Object(j.jsx)("button",{className:m()(r.button),onClick:function(n){return e({type:"add_items",payload:t})},children:"Add item"})]})},M=function(){var e=Object(y.b)();return Object(c.useEffect)((function(){e({type:"load_item"})}),[e]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Redux"}),Object(j.jsx)(k,{}),Object(j.jsx)(N,{}),Object(j.jsx)(l,{}),Object(j.jsx)(x,{})]})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),i(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(y.a,{store:v,children:Object(j.jsx)(M,{})})}),document.getElementById("root")),w()},3:function(e,t,n){e.exports={avatar:"Media_avatar__ndErR",image:"Media_image__3aZN8",comment:"Media_comment__3hK2t",comment_text:"Media_comment_text__2kuU_",userInfo:"Media_userInfo__356JS",name:"Media_name__2_vt5",nickname:"Media_nickname__3nJDT",comment_date:"Media_comment_date__10OO4",p:"Media_p__11TKD",social:"Media_social__2qbPa"}},4:function(e,t,n){e.exports={form:"Input_form__3Itof",button:"Input_button__2Ob10",input:"Input_input__1GFm5",p:"Input_p__1V5qg"}}},[[23,1,2]]]);
//# sourceMappingURL=main.247bd335.chunk.js.map