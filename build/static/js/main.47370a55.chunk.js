(this["webpackJsonphealthcare-project"]=this["webpackJsonphealthcare-project"]||[]).push([[0],{81:function(e,t,c){},82:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},97:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(35),i=c.n(a),r=(c(81),c(30)),j=c(16),l=(c(82),c(12)),d=c(53),o=c(72),b={apiKey:"AIzaSyBPPIm9htNFNvKysG8QQQDIOgVtZibrcZc",authDomain:"healthcare-center-32e54.firebaseapp.com",projectId:"healthcare-center-32e54",storageBucket:"healthcare-center-32e54.appspot.com",messagingSenderId:"543290779904",appId:"1:543290779904:web:6e2b4fb0b82a4dd54a6be5"};(function(){Object(o.a)(b)})();var h=function(){var e=Object(n.useState)({}),t=Object(l.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(!0),i=Object(l.a)(a,2),r=i[0],j=i[1],o=Object(d.b)();Object(n.useEffect)((function(){var e=Object(d.c)(o,(function(e){s(e||{}),j(!1)}));return function(){return e}}),[]);return{user:c,isLoading:r,singInUsingGoogle:function(){j(!0);var e=new d.a;Object(d.d)(o,e).then((function(e){s(e.user)})).finally((function(){return j(!1)}))},logOut:function(){Object(d.e)(o).then((function(){})).finally((function(){return j(!1)}))}}},u=c(2),O=Object(n.createContext)(),x=function(e){var t=e.children,c=h();return Object(u.jsx)(O.Provider,{value:c,children:t})},m=function(){var e=Object(j.g)().serviceId,t=Object(n.useState)([]),c=Object(l.a)(t,2),s=c[0],a=c[1],i=Object(n.useState)({}),r=Object(l.a)(i,2),d=r[0],o=r[1];return Object(n.useEffect)((function(){fetch("/details.json").then((function(e){return e.json()})).then((function(e){return a(e.employees)}))}),[]),Object(n.useEffect)((function(){var t=s.find((function(t){return t.login.serviceId===e}));o(t)}),[s]),Object(u.jsxs)("div",{children:[Object(u.jsxs)("h1",{children:["this is id:",e]}),Object(u.jsxs)("h1",{children:["this is deatils:",null===d||void 0===d?void 0:d.name]})]})},f=c(31),p=function(){return Object(n.useContext)(O)},g=function(){var e=p().singInUsingGoogle;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Please Login"}),Object(u.jsxs)("div",{className:"",children:[Object(u.jsx)(f.a,{onClick:e,className:"btn btn-danger mt-2",children:"Google Sign In"})," ",Object(u.jsx)("br",{}),Object(u.jsx)(f.a,{className:"btn btn-warning mt-2",children:"Github Sign In"}),Object(u.jsx)("br",{})]})]})},v=c.p+"static/media/about1.a87e8929.jpg",N=(c(89),function(e){var t=e.user,c=t.img,n=t.name,s=t.description;return Object(u.jsxs)("div",{className:"team mt-4 col-lg-4 col-md-6 col-12",children:[Object(u.jsx)("img",{src:c,alt:""}),Object(u.jsx)("h5",{className:"",children:n}),Object(u.jsx)("p",{children:s})]})}),I=(c(90),function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){fetch("./team.json").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]),Object(u.jsxs)("div",{id:"teams",className:"container-teams",children:[Object(u.jsx)("h1",{className:"text-danger",children:"Meet Our Health Care Team"}),Object(u.jsx)("div",{className:"row",children:c.map((function(e){return Object(u.jsx)(N,{user:e},e.id)}))})]})}),C=(c(91),function(){return Object(u.jsxs)("div",{id:"abouts",className:"container mt-4 ",children:[Object(u.jsx)("h1",{className:"text-warning",children:"About Us"}),Object(u.jsxs)("div",{className:"about d-flex m-4",children:[Object(u.jsx)("div",{className:"row-6 ",children:Object(u.jsx)("img",{width:"450px",height:"300px",src:v,alt:""})}),Object(u.jsxs)("div",{className:"text-container row-6 ps-5 pt-2",children:[Object(u.jsx)("h5",{children:"Praesent massa orci, condimen vitae mattis quis, imperdiet non massa"}),Object(u.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur ag elit. Proin ipsum augue, rhoncus ac arcu ut, auclum est. AEtiam ligula orci, condim at turpis sed.Ppulvinar, poserat vitae, ultrices quis semper nisi porttitor. Aenean vel libero at nulla pulvinar placerat mauris Phasellus.."}),Object(u.jsx)(f.a,{className:"btn btn-danger",children:"Read More"})]})]}),Object(u.jsx)("div",{children:Object(u.jsx)(I,{})})]})}),S=c(103),k=c.p+"static/media/men-with-protection.jpg3.jpg1 (2).dd9fd52a.jpg",w=c.p+"static/media/flat-hand-drawn-hospital.jpg2 (2).27a0291b.jpg",y=c.p+"static/media/healthcare-medical-concept.jpg1 (2).82df108b.jpg",L=function(){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(S.a,{fade:!0,children:[Object(u.jsxs)(S.a.Item,{children:[Object(u.jsx)("img",{className:"d-block w-100",src:k,alt:"First slide"}),Object(u.jsxs)(S.a.Caption,{children:[Object(u.jsx)("h1",{children:"Meet Our Doctor's Team"}),Object(u.jsx)("p",{children:"Nulla vitae elit libero, a pharetra augue mollis interdum."})]})]}),Object(u.jsxs)(S.a.Item,{children:[Object(u.jsx)("img",{className:"d-block w-100",src:w,alt:"Second slide"}),Object(u.jsxs)(S.a.Caption,{children:[Object(u.jsx)("h1",{children:"Meet Our Doctor's Team"}),Object(u.jsx)("h4",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]})]}),Object(u.jsxs)(S.a.Item,{children:[Object(u.jsx)("img",{className:"d-block w-100",src:y,alt:"Third slide"}),Object(u.jsxs)(S.a.Caption,{children:[Object(u.jsx)("h1",{children:"Meet Our Doctor's Team"}),Object(u.jsx)("p",{children:"Praesent commodo cursus magna, vel scelerisque nisl consectetur."})]})]})]})})},T=c(105),F=c(106),P=c(99),E=c(107),A=function(){return Object(u.jsxs)("div",{className:"container mb-4 ",children:[Object(u.jsx)("h1",{className:"text-danger",children:"Contact Us"}),Object(u.jsxs)("div",{className:" d-flex bg-secondary  ",children:[Object(u.jsx)("div",{id:"contacts",className:"row-6 container ",children:Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{className:"mt-5 text-white",children:"Leave a Message"}),Object(u.jsxs)(T.a,{className:"mb-3",children:[Object(u.jsx)(T.a.Text,{id:"basic-addon1",children:"@"}),Object(u.jsx)(F.a,{placeholder:"First Name:","aria-label":"First Name","aria-describedby":"basic-addon1"})]}),Object(u.jsxs)(T.a,{className:"mb-3",children:[Object(u.jsx)(T.a.Text,{id:"basic-addon1",children:"@"}),Object(u.jsx)(F.a,{placeholder:"Email:","aria-label":"Email","aria-describedby":"basic-addon1"})]}),Object(u.jsxs)(T.a,{children:[Object(u.jsx)(T.a.Text,{children:"With textarea"}),Object(u.jsx)(F.a,{as:"textarea","aria-label":"With textarea"})]}),Object(u.jsx)(P.a,{className:"m-2 ",variant:"primary",type:"submit",children:"Submit"})]})}),Object(u.jsx)("div",{className:" row-6 mt-5 m-5 container",children:Object(u.jsxs)(E.a,{variant:"flush",children:[Object(u.jsx)("h3",{className:" text-center text-white",children:"Contact"}),Object(u.jsx)(E.a.Item,{children:"121 King St, Melbourne VIC 3000, Australia"}),Object(u.jsx)(E.a.Item,{children:"+999 0170000"}),Object(u.jsx)(E.a.Item,{children:"info@healthcare.com"}),Object(u.jsx)(E.a.Item,{})]})})]})]})},M=(c(92),function(){return Object(u.jsx)("div",{className:"footer ",children:Object(u.jsxs)("p",{children:["Copyright ",Object(u.jsx)("i",{class:"far fa-copyright"})," 2021 Health Care Center. All Rights Reserved"]})})}),D=(c(93),function(e){var t=e.service,c=t.img,n=t.services,s=t.price,a=t.description,i=t.id;return Object(u.jsxs)("div",{className:"container service mt-3",children:[Object(u.jsx)("img",{src:c,alt:""}),Object(u.jsx)("h4",{children:n}),Object(u.jsxs)("h5",{children:["$",s]}),Object(u.jsx)("p",{children:a}),Object(u.jsx)(r.c,{to:"/details/".concat(i),children:Object(u.jsx)("button",{className:"btn btn-danger button",children:"Details Service"})})]})}),B=(c(94),function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){fetch("/fackdata.json").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]),Object(u.jsxs)("div",{id:"services",children:[Object(u.jsx)("h2",{className:"mt-4 text-danger",children:"Our Services"}),Object(u.jsx)("div",{className:"services-container",children:c.map((function(e){return Object(u.jsx)(D,{service:e},e.id)}))})]})}),G=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(L,{}),Object(u.jsx)(B,{}),Object(u.jsx)(C,{}),Object(u.jsx)(A,{}),Object(u.jsx)(M,{})]})},H=c(5),U=c(9),q=c(100),K=["children"],Q=function(e){var t=e.children,c=Object(U.a)(e,K),n=p(),s=n.user;return n.isLoading?Object(u.jsx)(q.a,{animation:"border",variant:"danger"}):Object(u.jsx)(j.b,Object(H.a)(Object(H.a)({},c),{},{render:function(e){var c=e.location;return s.email?t:Object(u.jsx)(j.a,{to:{pathname:"/login",state:{from:c}}})}}))},R=c.p+"static/media/img.825f7300.jpg",J=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{src:R,alt:""}),Object(u.jsx)(r.b,{to:"/home",children:Object(u.jsx)("button",{children:"Back Home page"})})]})},V=c(102),W=c(101),Z=c(104),z=c(52),$=function(){var e=p(),t=e.user,c=e.logOut;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(V.a,{bg:"dark",variant:"dark",sticky:"top",collapseOnSelect:!0,expand:"lg",children:Object(u.jsxs)(W.a,{children:[Object(u.jsx)(V.a.Brand,{href:"#home",children:"healthcare Center"}),Object(u.jsx)(V.a.Toggle,{}),Object(u.jsxs)(V.a.Collapse,{className:"justify-content-end",children:[Object(u.jsx)(Z.a.Link,{as:z.a,to:"/home#home",children:"Home"}),Object(u.jsx)(Z.a.Link,{as:z.a,to:"/home#services",children:"Services"}),Object(u.jsx)(Z.a.Link,{as:z.a,to:"/home#abouts",children:"About"}),Object(u.jsx)(Z.a.Link,{as:z.a,to:"/home#teams",children:"Teams"}),Object(u.jsx)(Z.a.Link,{as:z.a,to:"/home#contacts",children:"Contacts"}),(null===t||void 0===t?void 0:t.email)?Object(u.jsx)(P.a,{onClick:c,variant:"light",children:"Logout"}):Object(u.jsx)(Z.a.Link,{as:r.b,to:"/login",children:"Login"}),Object(u.jsxs)(V.a.Text,{children:["Signed in as: ",Object(u.jsx)("a",{href:"#login",children:null===t||void 0===t?void 0:t.displayName})]})]})]})})})};var X=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(x,{children:Object(u.jsxs)(r.a,{children:[Object(u.jsx)($,{}),Object(u.jsxs)(j.d,{children:[Object(u.jsx)(j.b,{exact:!0,path:"/",children:Object(u.jsx)(G,{})}),Object(u.jsx)(j.b,{path:"/home",children:Object(u.jsx)(G,{})}),Object(u.jsx)(j.b,{path:"/login",children:Object(u.jsx)(g,{})}),Object(u.jsx)(j.b,{path:"/services",children:Object(u.jsx)(B,{})}),Object(u.jsx)(Q,{path:"/details/:serviceId",children:Object(u.jsx)(m,{})}),Object(u.jsx)(j.b,{path:"*",children:Object(u.jsx)(J,{})})]})]})})})},Y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,108)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(X,{})}),document.getElementById("root")),Y()}},[[97,1,2]]]);
//# sourceMappingURL=main.47370a55.chunk.js.map