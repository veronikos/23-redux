(this["webpackJsonptyler-potts-login-form"]=this["webpackJsonptyler-potts-login-form"]||[]).push([[0],{17:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(7),i=n.n(s),o=(n(17),n(5)),r=n(2),m=n.n(r),l=n(4),d=n(11),j=n(6),u=n(12),p={posts:[],authors:[{name:"Hermione Granger",photo:"https://i.pinimg.com/originals/b0/49/db/b049dbae23f549bb8782e20d5ea76e92.jpg",nickname:"@hermione",date:"18 apr."},{name:"Harry Potter",photo:"https://i.pinimg.com/originals/17/75/bf/1775bfeae9ce04d7c8ef60ac775f3a78.jpg",nickname:"@harry",date:"18 apr."},{name:"Ron Weasley",photo:"https://i.pinimg.com/474x/e9/b3/a1/e9b3a1f3938d87bf8fe09707dad63cca.jpg",nickname:"@ronw",date:"18 apr."},{name:"Anakin Skywalker",photo:"https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",nickname:"@dart_vader",date:"26 fev."}]},b=Object(u.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"load_item":return console.log(e),Object(j.a)({},e);case"add_posts":return console.log("add_posts",e.posts),Object(j.a)(Object(j.a)({},e),{},{posts:[t.payload].concat(Object(d.a)(e.posts))});default:return e}})),h=n(0);function _(){var e=Object(l.c)((function(e){return e.authors})),t=Object(l.b)(),n=null,a=null,c=[];return Object(h.jsxs)("form",{className:m()(o.form),children:[Object(h.jsx)("p",{className:m()(o.p),children:"Type your comment and enter URL"}),Object(h.jsx)("input",{type:"text",placeholder:"Type your comment",className:m()(o.input),onChange:function(e){return n=e.target.value}}),Object(h.jsx)("input",{type:"text",placeholder:"Enter link to the photo",className:m()(o.input),onChange:function(e){return a=e.target.value}}),Object(h.jsx)("p",{className:m()(o.p),children:"Choose the author"}),Object(h.jsxs)("select",{className:m()(o.input),onChange:function(t){return n=t.target.value,c=e.filter((function(e){return e.name===n}))[0],void console.log(c);var n},children:[Object(h.jsx)("option",{children:"Choose one from above"}),e.map((function(e){return Object(h.jsx)("option",{children:e.name})}))]}),Object(h.jsx)("button",{type:"button",className:m()(o.button),onClick:function(){return t({type:"add_posts",payload:{author:c,comment:n,image:a}})},children:"Submit"})]})}var f=function(e){var t=e.level,n=void 0===t?"h1":t,a=e.children;return Object(h.jsx)(n,{children:a})},O=n(3);var x=function(e){return Object(h.jsxs)("div",{className:m()(O.userInfo),children:[Object(h.jsx)("img",{className:m()(O.avatar),src:e.user.photo,alt:e.user.name}),Object(h.jsx)("div",{className:m()(O.name),children:e.user.name}),Object(h.jsx)("div",{className:m()(O.nickname),children:e.user.nickname}),Object(h.jsx)("div",{className:m()(O.comment_date),children:e.user.date})]})};function g(e){return Object(h.jsxs)("div",{className:m()(O.comment),children:[Object(h.jsx)(x,{user:e.author}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:m()(O.comment_text),children:e.comment}),Object(h.jsx)("img",{className:m()(O.image),src:e.image,alt:e.image}),Object(h.jsxs)("div",{className:m()(O.social),children:[Object(h.jsxs)("div",{className:m()(O.p),children:[Object(h.jsx)("i",{class:"fa fa-heart"}),Object(h.jsx)("p",{children:"0"})]}),Object(h.jsxs)("div",{className:m()(O.p),children:[Object(h.jsx)("i",{class:"fa fa-comment"}),Object(h.jsx)("p",{children:"0"})]}),Object(h.jsxs)("div",{className:m()(O.p),children:[Object(h.jsx)("i",{class:"fa fa-retweet"}),Object(h.jsx)("p",{children:"0"})]})]})]})]})}var v=function(){var e=Object(l.c)((function(e){return e.posts}));return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f,{}),e.map((function(e){return Object(h.jsx)(g,{author:Object(j.a)({},e.author),comment:e.comment,image:e.image})}))]})},N=function(){var e=Object(l.b)();return Object(a.useEffect)((function(){e({type:"load_item"})}),[e]),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Redux"}),Object(h.jsx)(_,{}),Object(h.jsx)(v,{})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(l.a,{store:b,children:Object(h.jsx)(N,{})})}),document.getElementById("root")),k()},3:function(e,t,n){e.exports={avatar:"Media_avatar__ndErR",image:"Media_image__3aZN8",comment:"Media_comment__3hK2t",comment_text:"Media_comment_text__2kuU_",userInfo:"Media_userInfo__356JS",name:"Media_name__2_vt5",nickname:"Media_nickname__3nJDT",comment_date:"Media_comment_date__10OO4",p:"Media_p__11TKD",social:"Media_social__2qbPa"}},5:function(e,t,n){e.exports={form:"Input_form__3Itof",button:"Input_button__2Ob10",input:"Input_input__1GFm5",p:"Input_p__1V5qg"}}},[[23,1,2]]]);
//# sourceMappingURL=main.f54190b7.chunk.js.map