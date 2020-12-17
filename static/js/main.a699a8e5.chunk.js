(this["webpackJsonpopen-library"]=this["webpackJsonpopen-library"]||[]).push([[0],{60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),s=c.n(n),r=c(27),i=c.n(r),o=c(2),l=c(3),j=c(5),b=c(4),d=c(7),h=c(28),u=c.n(h).a.create({baseURL:"http://openlibrary.org/"}),O=function(e){var t=e.split("/");return"/"+t[t.length-1]},m=function(e){return Boolean(e)},x=function(e){return function(e){return m(e)&&isFinite(String(e))}(e)&&e>-1},p=function(e){Object(j.a)(c,e);var t=Object(b.a)(c);function c(){var e;Object(o.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={links:[]},e.setCurrentPage=function(){for(var t=O(window.location.href),c=0;c<e.state.links.length;++c)e.state.links[c].parentElement.classList.toggle("current",O(e.state.links[c].href)===t)},e}return Object(l.a)(c,[{key:"componentDidMount",value:function(){var e=this;this.setState({links:document.querySelectorAll(".navList > li > a")},(function(){e.setCurrentPage()}))}},{key:"render",value:function(){return Object(a.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark justify-content-between align-items-center p-0",children:[Object(a.jsxs)(d.b,{className:"logotype",to:"/",children:[Object(a.jsx)("h1",{children:"Open"}),Object(a.jsx)("h1",{children:"Library"})]}),Object(a.jsxs)("button",{className:"btn navButton",type:"button","data-toggle":"collapse","data-target":"#navbarList","aria-expanded":"false","aria-controls":"navbarList",children:[Object(a.jsx)("i",{className:"fas fa-bars align-middle"}),Object(a.jsx)("span",{className:"d-none d-md-inline align-middle ml-2",children:"Menu"})]}),Object(a.jsx)("div",{id:"navbarList",className:"collapse navbar-collapse",children:Object(a.jsxs)("ul",{className:"navList",children:[Object(a.jsx)("li",{onClick:this.setCurrentPage,children:Object(a.jsx)(d.b,{to:"/",children:"Home"})}),Object(a.jsx)("li",{onClick:this.setCurrentPage,children:Object(a.jsx)(d.b,{to:"/about",children:"About"})}),Object(a.jsx)("li",{onClick:this.setCurrentPage,children:Object(a.jsx)(d.b,{to:"/contact",children:"Contact"})})]})})]})}}]),c}(s.a.Component),f=(c(60),function(e){Object(j.a)(c,e);var t=Object(b.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(a.jsx)("header",{children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("div",{className:"d-flex flex-column flex-sm-row justify-content-between mx-auto",children:[Object(a.jsx)("div",{className:"px-md-5 mx-auto welcomeText",children:Object(a.jsx)("p",{className:"text-center p-1 m-0",children:"Welcome to OpenLibrary"})}),Object(a.jsx)("div",{className:"px-md-5 mx-auto",children:Object(a.jsxs)("div",{className:"p-1 text-center",children:[Object(a.jsx)(d.b,{to:"#",children:Object(a.jsx)("i",{className:"fab fa-facebook"})}),Object(a.jsx)(d.b,{to:"#",children:Object(a.jsx)("i",{className:"fab fa-linkedin"})}),Object(a.jsx)(d.b,{to:"#",children:Object(a.jsx)("i",{className:"fab fa-twitter"})}),Object(a.jsx)(d.b,{to:"#",children:Object(a.jsx)("i",{className:"fab fa-instagram"})}),Object(a.jsx)(d.b,{to:"#",children:Object(a.jsx)("i",{className:"fab fa-pinterest"})}),Object(a.jsx)(d.b,{to:"#",children:Object(a.jsx)("i",{className:"fab fa-tumblr"})}),Object(a.jsx)(d.b,{to:"#",children:Object(a.jsx)("i",{className:"fab fa-youtube"})}),Object(a.jsx)(d.b,{to:"#",children:Object(a.jsx)("i",{className:"fab fa-facebook-messenger"})}),Object(a.jsx)(d.b,{to:"#",children:Object(a.jsx)("i",{className:"fab fa-skype"})}),Object(a.jsx)(d.b,{to:"#",children:Object(a.jsx)("i",{className:"fab fa-discord"})})]})})]}),Object(a.jsx)(p,{})]})})}}]),c}(s.a.Component)),v=c(6),g=function(e){Object(j.a)(c,e);var t=Object(b.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){var e=this.props.book.cover_i,t=this.props.book.title,c=this.props.book.author_name,n=this.props.book.first_publish_year;return Object(a.jsx)("div",{className:"book col-12 col-sm-6 col-md-4 col-lg-3 mb-4 text-center",children:Object(a.jsxs)("div",{className:"card h-100",children:[Object(a.jsx)("img",{src:x(e)?"http://covers.openlibrary.org/b/id/"+e+"-M.jpg":window.location.pathname+"/images/default_cover.png",className:"card-img-top img-responsive",alt:"Book cover"}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h5",{className:"card-title font-weight-bold text-truncate",children:m(t)?t:"Untitled book"}),Object(a.jsx)("p",{children:m(c)?c:"Unknown author"}),Object(a.jsx)("p",{children:Object(a.jsx)("small",{children:x(n)?n:"Unknown year"})})]})]})})}}]),c}(s.a.Component),N=(c(61),function(e){Object(j.a)(c,e);var t=Object(b.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"row justify-content-center mx-auto w-100 my-4",children:this.props.list.map((function(e){return Object(a.jsx)(g,{book:e},e.key)}))})}}]),c}(s.a.Component)),y=function(e){Object(j.a)(c,e);var t=Object(b.a)(c);function c(){var e;Object(o.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={searchPhrase:""},e.onInputChange=function(t){e.setState({searchPhrase:t.target.value})},e.onSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.searchPhrase)},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(a.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(a.jsx)("h3",{className:"text-center mb-3",children:"Search books, authors and more"}),Object(a.jsxs)("div",{className:"input-group input-group-lg",children:[Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Search",onChange:this.onInputChange}),Object(a.jsx)("div",{className:"input-group-append",children:Object(a.jsx)("span",{className:"input-group-text",children:Object(a.jsx)("i",{className:"fas fa-search fa-flip-horizontal"})})})]})]})}}]),c}(s.a.Component),k=function(e){Object(j.a)(c,e);var t=Object(b.a)(c);function c(){var e;Object(o.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={bookList:[],bookSearching:!1,errorMessage:""},e.onSearchSubmit=function(t){e.setState({bookList:[],bookSearching:!0}),u.get("search.json",{params:{title:t}}).then((function(c){e.setState({bookSearching:!1,errorMessage:""}),m(t)&&e.setState({bookList:c.data.docs})})).catch((function(){e.setState({bookSearching:!1}),m(t)&&e.setState({errorMessage:"Search failed!"})}))},e}return Object(l.a)(c,[{key:"render",value:function(){var e=Object(a.jsx)(N,{list:this.state.bookList});return this.state.bookSearching?e=Object(a.jsx)("div",{className:"loader"}):this.state.errorMessage&&(e=Object(a.jsx)("div",{className:"text-center",children:Object(a.jsx)("h4",{className:"text-danger",children:this.state.errorMessage})})),Object(a.jsxs)("div",{children:[Object(a.jsxs)("h2",{className:"font-weight-bold",children:[Object(a.jsx)("i",{className:"fas fa-home"})," Home"]}),Object(a.jsx)("div",{className:"m-5",children:Object(a.jsx)(y,{onSubmit:this.onSearchSubmit})}),e]})}}]),c}(s.a.Component),w=function(e){Object(j.a)(c,e);var t=Object(b.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("h2",{className:"font-weight-bold",children:[Object(a.jsx)("i",{className:"fas fa-info-circle"})," About"]})})}}]),c}(s.a.Component),S=function(e){Object(j.a)(c,e);var t=Object(b.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("h2",{className:"font-weight-bold",children:[Object(a.jsx)("i",{className:"fas fa-phone"})," Contact"]})})}}]),c}(s.a.Component),C=(c(62),function(e){Object(j.a)(c,e);var t=Object(b.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"body container",children:Object(a.jsxs)(v.c,{children:[Object(a.jsx)(v.a,{exact:!0,path:"/",component:k}),Object(a.jsx)(v.a,{path:"/about",component:w}),Object(a.jsx)(v.a,{path:"/contact",component:S})]})})}}]),c}(s.a.Component)),L=(c(63),function(e){Object(j.a)(c,e);var t=Object(b.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(a.jsx)("footer",{children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("div",{className:"row p-3",children:[Object(a.jsxs)("div",{className:"col-12 col-md-4",children:[Object(a.jsx)("h5",{className:"font-weight-bold",children:"OpenLibrary"}),Object(a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec egestas nisl. Fusce vel vehicula libero, et placerat neque. Pellentesque luctus cursus volutpat. Morbi finibus lacus eros, eu gravida metus iaculis ac."})]}),Object(a.jsx)("div",{className:"col-12 col-md-4",children:Object(a.jsx)("h5",{className:"font-weight-bold",children:"Subjects"})}),Object(a.jsxs)("div",{className:"col-12 col-md-4",children:[Object(a.jsx)("h5",{className:"font-weight-bold",children:"Contact details"}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-3",children:Object(a.jsx)("p",{className:"font-weight-bold",children:"Address:"})}),Object(a.jsx)("div",{className:"col-9",children:Object(a.jsx)("p",{children:"69 Abbey Rd, London, United Kingdom"})})]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-3",children:Object(a.jsx)("p",{className:"font-weight-bold",children:"Phone:"})}),Object(a.jsx)("div",{className:"col-9",children:Object(a.jsx)("p",{children:"+44 1632 960948"})})]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-3",children:Object(a.jsx)("p",{className:"font-weight-bold",children:"E-mail:"})}),Object(a.jsx)("div",{className:"col-9",children:Object(a.jsx)("p",{children:"openlibrary@ol.com"})})]})]})]}),Object(a.jsx)("p",{className:"copyrightText",children:"Copyright \xa9 2020 Konrad Rembowski"})]})})}}]),c}(s.a.Component)),M=(c(64),function(e){Object(j.a)(c,e);var t=Object(b.a)(c);function c(){return Object(o.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(a.jsxs)(d.a,{basename:"/open-library",children:[Object(a.jsx)(f,{}),Object(a.jsx)(C,{}),Object(a.jsx)(L,{})]})}}]),c}(s.a.Component));i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(M,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.a699a8e5.chunk.js.map