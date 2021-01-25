(this["webpackJsonpopen-library"]=this["webpackJsonpopen-library"]||[]).push([[0],{71:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),o=a.n(r),i=a(21),s=a.n(i),c=a(15),l=a(16),b=a(42),u="FETCH_BOOK_LIST",j="CLEAR_BOOK_LIST",h="FILTER_BOOK_LIST_BY_AUTHOR_AVAILABILITY",d="FILTER_BOOK_LIST_BY_COVER_AVAILABILITY",p="FILTER_BOOK_LIST_BY_YEAR_AVAILABILITY",m="FILTER_BOOK_LIST_BY_YEAR_RANGE",g="FILTER_BOOK_LIST_BY_SUBJECTS",O="SORT_BOOK_LIST_BY_KEY",x="SORT_BOOK_LIST_BY_ORDER",f="PAGINATE_BOOK_LIST_BY_PAGE_SIZE",v="PAGINATE_BOOK_LIST_BY_CURRENT_PAGE",k=a(4),y={onlyWithAuthorAvailable:!0,onlyWithCoverAvailable:!1,onlyWithYearAvailable:!0,minYear:"",maxYear:"",subjects:[]},C=a(39),N="key",B="title",L="author_name",S="first_publish_year",w="subject",A="cover_i",P={title:"title",author:"author",year:"year"},I=!0,Y=!1,_={previousPage:"<",nextPage:">",firstPage:1,pageSizes:[10,25,50,100]},T=a.n(C).a.create({baseURL:"https://openlibrary.org/"}),M=function(e){return Boolean(e)},R=function(e){return M(e)&&isFinite(String(e))},W=function(e){return R(e)&&e>=0},K=function(e){return"boolean"===typeof e},E={sortKey:P.title,sortOrder:I},F={pageSize:_.pageSizes[0],currentPage:_.firstPage},z=Object(l.b)({bookList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(b.a)(t.bookList);case j:return[];default:return e}},bookListFilter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(k.a)(Object(k.a)({},e),{},{onlyWithAuthorAvailable:t.onlyWithAuthorAvailable});case d:return Object(k.a)(Object(k.a)({},e),{},{onlyWithCoverAvailable:t.onlyWithCoverAvailable});case p:return Object(k.a)(Object(k.a)({},e),{},{onlyWithYearAvailable:t.onlyWithYearAvailable});case m:return Object(k.a)(Object(k.a)({},e),{},{minYear:t.minYear,maxYear:t.maxYear});case g:return Object(k.a)(Object(k.a)({},e),{},{subjects:t.subjects});default:return e}},bookListSort:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(k.a)(Object(k.a)({},e),{},{sortKey:t.sortKey});case x:return Object(k.a)(Object(k.a)({},e),{},{sortOrder:t.sortOrder});default:return e}},bookListPagination:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(k.a)(Object(k.a)({},e),{},{pageSize:t.pageSize,currentPage:F.currentPage});case v:return Object(k.a)(Object(k.a)({},e),{},{currentPage:t.currentPage});default:return e}}}),D=Object(l.d)(z,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());var U=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(Me,{iconClassName:"fas fa-info-circle",headerName:"About"})})},V=a(2);a(71);var G=function(){return Object(n.jsxs)(V.a,{basename:"/open-library",children:[Object(n.jsx)(Oe,{}),Object(n.jsx)(H,{}),Object(n.jsx)(ge,{})]})},X=a(5);a(75);var H=function(){return Object(n.jsx)("div",{className:"body container",children:Object(n.jsxs)(X.c,{children:[Object(n.jsx)(X.a,{exact:!0,path:"/",component:Ae}),Object(n.jsx)(X.a,{path:"/about",component:U}),Object(n.jsx)(X.a,{path:"/contact",component:de})]})})};a(76);var J=function(e){var t=e.book[A],a=e.book[B],r=e.book[L],o=e.book[S];return Object(n.jsx)("div",{className:"book col-12 col-sm-6 col-md-4 col-lg-3 mb-4",children:Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("img",{src:W(t)?"https://covers.openlibrary.org/b/id/"+t+"-M.jpg":window.location.origin+"/open-library/images/default_cover.png",className:"card-img-top img-responsive",alt:"Book cover"}),Object(n.jsxs)("div",{className:"card-body text-center p-2",children:[Object(n.jsx)("h5",{className:"card-title font-weight-bold text-truncate",children:M(a)?a:"Untitled book"}),Object(n.jsx)("p",{className:"card-text mb-2",children:M(r)?r.join(", "):"Unknown author"}),Object(n.jsx)("small",{className:"card-text",children:W(o)?o:"Unknown year"})]})]})})};var q=function(e){return Object(n.jsxs)("div",{className:"row mx-auto p-2",children:[Object(n.jsx)("div",{className:"col-12 col-lg-3",children:Object(n.jsx)(oe,{})}),Object(n.jsxs)("div",{className:"col-12 col-lg-9",children:[Object(n.jsxs)("div",{className:"row flex-column flex-lg-row justify-content-between mx-auto w-100 mb-4",children:[Object(n.jsx)(he,{}),Object(n.jsx)(le,{currentNumberOfBooks:e.currentNumberOfBooks})]}),Object(n.jsx)("div",{className:"row justify-content-center mx-auto w-100",children:e.list.map((function(e){return Object(n.jsx)(J,{book:e},e[N])}))})]})]})};var Z=function(e){return Object(n.jsxs)("div",{className:"mx-auto",children:[Object(n.jsx)("div",{className:"row mx-auto mb-3",children:Object(n.jsx)("h5",{className:"m-0",children:"Filters"})}),Object(n.jsxs)("div",{className:"row mx-auto mb-3",children:[Object(n.jsxs)("div",{className:"form-check mx-1 m-lg-0",children:[Object(n.jsx)("input",{id:"filterBookListByAuthorAvailabilityCheckbox",type:"checkbox",className:"form-check-input",checked:e.onlyWithAuthorAvailable,onChange:e.onOnlyWithAuthorAvailableCheckboxChange}),Object(n.jsx)("label",{className:"form-check-label",htmlFor:"filterBookListByAuthorAvailabilityCheckbox",children:"Show only books with known author"})]}),Object(n.jsxs)("div",{className:"form-check mx-1 m-lg-0",children:[Object(n.jsx)("input",{id:"filterBookListByCoverAvailabilityCheckbox",type:"checkbox",className:"form-check-input",checked:e.onlyWithCoverAvailable,onChange:e.onlyWithCoverAvailableCheckboxChange}),Object(n.jsx)("label",{className:"form-check-label",htmlFor:"filterBookListByCoverAvailabilityCheckbox",children:"Show only books with cover"})]}),Object(n.jsxs)("div",{className:"form-check mx-1 m-lg-0",children:[Object(n.jsx)("input",{id:"filterBookListByYearAvailabilityCheckbox",type:"checkbox",className:"form-check-input",checked:e.onlyWithYearAvailable,onChange:e.onlyWithYearAvailableCheckboxChange}),Object(n.jsx)("label",{className:"form-check-label",htmlFor:"filterBookListByYearAvailabilityCheckbox",children:"Show only books with known year"})]})]}),Object(n.jsx)("div",{className:"horizontal-divider"}),Object(n.jsxs)("div",{className:"row mx-auto mb-3",children:[Object(n.jsx)("label",{children:"Show only books with number of pages:"}),Object(n.jsxs)("div",{className:"input-group input-group-sm mx-auto mb-2",children:[Object(n.jsx)("div",{className:"input-group-prepend",children:Object(n.jsx)("span",{className:"input-group-text",children:"from"})}),Object(n.jsx)("input",{type:"number",className:"form-control",value:e.minYear,onChange:e.onMinYearInputChange}),Object(n.jsx)("div",{className:"input-group-prepend input-group-append",children:Object(n.jsx)("span",{className:"input-group-text",children:"to"})}),Object(n.jsx)("input",{type:"number",className:"form-control",value:e.maxYear,onChange:e.onMaxYearInputChange})]}),Object(n.jsx)("button",{type:"button",className:"btn btn-sm btn-block",onClick:e.onYearRangeResetButtonClick,children:"Reset"})]}),Object(n.jsx)("div",{className:"horizontal-divider"}),Object(n.jsxs)("div",{className:"row mx-auto mb-3",children:[Object(n.jsx)("label",{children:"Show only books with subjects:"}),Object(n.jsxs)("div",{className:"input-group input-group-sm mb-1",children:[Object(n.jsx)("input",{type:"text",className:"form-control",onKeyUp:e.onSubjectsInputKeyUp}),Object(n.jsx)("div",{className:"input-group-append",children:Object(n.jsx)("span",{className:"input-group-text",children:Object(n.jsx)("i",{className:"fas fa-hashtag"})})})]}),e.subjects.length?Object(n.jsx)("small",{className:"mx-auto",children:"Click on tag to remove"}):null,Object(n.jsx)(Ee,{tags:e.subjects,onTagClick:e.onSubjectTagClick}),e.subjects.length?Object(n.jsx)("button",{type:"button",className:"btn btn-sm btn-block",onClick:e.onSubjectsClearButtonClick,children:"Clear"}):null]})]})},Q=a(7),$=a(8),ee=a(10),te=a(9),ae=function(e){return{type:v,currentPage:e}},ne=function(e){Object(ee.a)(a,e);var t=Object(te.a)(a);function a(){var e;Object(Q.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onOnlyWithAuthorAvailableCheckboxChange=function(t){e.props.filterBookListByAuthorAvailability(t.currentTarget.checked),e.props.paginateBookListByCurrentPage(_.firstPage)},e.onlyWithCoverAvailableCheckboxChange=function(t){e.props.filterBookListByCoverAvailability(t.currentTarget.checked),e.props.paginateBookListByCurrentPage(_.firstPage)},e.onlyWithYearAvailableCheckboxChange=function(t){e.props.filterBookListByYearAvailability(t.currentTarget.checked),e.props.paginateBookListByCurrentPage(_.firstPage)},e.onMinYearInputChange=function(t){e.props.filterBookListByYearRange(t.currentTarget.value,e.props.bookListFilter.maxYear),e.props.paginateBookListByCurrentPage(_.firstPage)},e.onMaxYearInputChange=function(t){e.props.filterBookListByYearRange(e.props.bookListFilter.minYear,t.currentTarget.value),e.props.paginateBookListByCurrentPage(_.firstPage)},e.onYearRangeResetButtonClick=function(){e.props.filterBookListByYearRange("",""),e.props.paginateBookListByCurrentPage(_.firstPage)},e.onSubjectsInputKeyUp=function(t){var a=t.currentTarget.value;13===t.keyCode&&M(a)&&(t.preventDefault(),e.props.filterBookListBySubjects(Array.from(new Set(e.props.bookListFilter.subjects).add(a))),e.props.paginateBookListByCurrentPage(_.firstPage),t.currentTarget.value="")},e.onSubjectTagClick=function(t){var a=new Set(e.props.bookListFilter.subjects);a.delete(t.currentTarget.textContent),e.props.filterBookListBySubjects(Array.from(a)),e.props.paginateBookListByCurrentPage(_.firstPage)},e.onSubjectsClearButtonClick=function(){e.props.filterBookListBySubjects([]),e.props.paginateBookListByCurrentPage(_.firstPage)},e}return Object($.a)(a,[{key:"render",value:function(){return Object(n.jsx)(Z,{onlyWithAuthorAvailable:this.props.bookListFilter.onlyWithAuthorAvailable,onlyWithCoverAvailable:this.props.bookListFilter.onlyWithCoverAvailable,onlyWithYearAvailable:this.props.bookListFilter.onlyWithYearAvailable,onOnlyWithAuthorAvailableCheckboxChange:this.onOnlyWithAuthorAvailableCheckboxChange,onlyWithCoverAvailableCheckboxChange:this.onlyWithCoverAvailableCheckboxChange,onlyWithYearAvailableCheckboxChange:this.onlyWithYearAvailableCheckboxChange,minYear:this.props.bookListFilter.minYear,maxYear:this.props.bookListFilter.maxYear,onMinYearInputChange:this.onMinYearInputChange,onMaxYearInputChange:this.onMaxYearInputChange,onYearRangeResetButtonClick:this.onYearRangeResetButtonClick,subjects:this.props.bookListFilter.subjects,onSubjectsInputKeyUp:this.onSubjectsInputKeyUp,onSubjectTagClick:this.onSubjectTagClick,onSubjectsClearButtonClick:this.onSubjectsClearButtonClick})}}]),a}(o.a.Component),re={filterBookListByAuthorAvailability:function(e){return{type:h,onlyWithAuthorAvailable:e}},filterBookListByCoverAvailability:function(e){return{type:d,onlyWithCoverAvailable:e}},filterBookListByYearAvailability:function(e){return{type:p,onlyWithYearAvailable:e}},filterBookListByYearRange:function(e,t){return{type:m,minYear:e,maxYear:t}},filterBookListBySubjects:function(e){return{type:g,subjects:e}},paginateBookListByCurrentPage:ae},oe=Object(c.b)((function(e){return{bookListFilter:e.bookListFilter}}),re)(ne);var ie=function(e){return Object(n.jsxs)("div",{className:"d-flex flex-column flex-md-row justify-content-between",children:[Object(n.jsx)(Re,{numberOfPaginationItems:e.numberOfPaginationItems,currentPaginationItem:e.currentPage,onPaginationItemClick:e.onPageNumberPaginationItemClick}),Object(n.jsxs)("div",{className:"dropdown d-inline-block mx-auto mr-md-0",children:[Object(n.jsxs)("button",{className:"btn dropdown-toggle",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:[Object(n.jsx)("span",{children:"Show"})," ",Object(n.jsx)("span",{className:"font-weight-bold",children:e.pageSize})," ",Object(n.jsx)("span",{children:"books on page"})]}),Object(n.jsx)(pe,{isRight:!0,onDropdownMenuItemClick:e.onPageSizeDropdownMenuItemClick,items:_.pageSizes})]})]})},se=function(e){Object(ee.a)(a,e);var t=Object(te.a)(a);function a(){var e;Object(Q.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageSizeDropdownMenuItemClick=function(t){e.props.paginateBookListByPageSize(parseInt(t.currentTarget.textContent))},e.onPageNumberPaginationItemClick=function(t){var a=t.currentTarget.textContent;a===_.previousPage?e.props.paginateBookListByCurrentPage(e.props.bookListPagination.currentPage-1):a===_.nextPage?e.props.paginateBookListByCurrentPage(e.props.bookListPagination.currentPage+1):R(a)&&e.props.paginateBookListByCurrentPage(parseInt(a))},e}return Object($.a)(a,[{key:"render",value:function(){return Object(n.jsx)(ie,{numberOfPaginationItems:Math.ceil(this.props.currentNumberOfBooks/this.props.bookListPagination.pageSize),pageSize:this.props.bookListPagination.pageSize,onPageSizeDropdownMenuItemClick:this.onPageSizeDropdownMenuItemClick,currentPage:this.props.bookListPagination.currentPage,onPageNumberPaginationItemClick:this.onPageNumberPaginationItemClick})}}]),a}(o.a.Component),ce={paginateBookListByPageSize:function(e){return{type:f,pageSize:e}},paginateBookListByCurrentPage:ae},le=Object(c.b)((function(e){return{bookListPagination:e.bookListPagination}}),ce)(se);var be=function(e){return Object(n.jsxs)("div",{className:"mx-auto mx-md-0 mb-3 mb-lg-0",children:[Object(n.jsxs)("div",{className:"dropdown d-inline-block mr-2",children:[Object(n.jsxs)("button",{className:"btn dropdown-toggle",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:[Object(n.jsx)("span",{children:"Sort by"})," ",Object(n.jsx)("span",{className:"font-weight-bold",children:e.sortKey})]}),Object(n.jsx)(pe,{isRight:!1,onDropdownMenuItemClick:e.onSortKeyDropdownMenuItemClick,items:Object.keys(P)})]}),Object(n.jsx)(V.b,{to:"#",className:"text-reset text-decoration-none align-middle p-2",onClick:e.onSortOrderLinkClick,children:Object(n.jsx)("i",{className:e.sortOrder===I?"fas fa-sort-amount-up-alt fa-lg":"fas fa-sort-amount-down fa-lg"})})]})},ue=function(e){Object(ee.a)(a,e);var t=Object(te.a)(a);function a(){var e;Object(Q.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onSortKeyDropdownMenuItemClick=function(t){e.props.sortBookListByKey(t.currentTarget.textContent)},e.onSortOrderLinkClick=function(){e.props.sortBookListByOrder(!e.props.bookListSort.sortOrder)},e}return Object($.a)(a,[{key:"render",value:function(){return Object(n.jsx)(be,{sortKey:this.props.bookListSort.sortKey,onSortKeyDropdownMenuItemClick:this.onSortKeyDropdownMenuItemClick,sortOrder:this.props.bookListSort.sortOrder,onSortOrderLinkClick:this.onSortOrderLinkClick})}}]),a}(o.a.Component),je={sortBookListByKey:function(e){return{type:O,sortKey:e}},sortBookListByOrder:function(e){return{type:x,sortOrder:e}}},he=Object(c.b)((function(e){return{bookListSort:e.bookListSort}}),je)(ue);var de=function(){return Object(n.jsx)("div",{children:Object(n.jsx)(Me,{iconClassName:"fas fa-phone",headerName:"Contact"})})};var pe=function(e){var t=[];if(M(e.items))for(var a=Array.from(e.items),r=0;r<a.length;++r)t.push(Object(n.jsx)(V.b,{className:"dropdown-item",to:"#",onClick:e.onDropdownMenuItemClick,children:a[r]},"dropdownMenuItem"+r));return Object(n.jsx)("div",{className:"dropdown-menu "+(e.isRight?"dropdown-menu-right text-right":"dropdown-menu-left text-left"),children:t})};var me=function(e){return Object(n.jsx)("div",{className:"text-center",children:Object(n.jsx)("h4",{className:"text-danger",children:e.message})})};a(77);var ge=function(){return Object(n.jsx)("footer",{children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"row p-3",children:[Object(n.jsxs)("div",{className:"col-12 col-md-4",children:[Object(n.jsx)("h5",{className:"font-weight-bold",children:"OpenLibrary"}),Object(n.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec egestas nisl. Fusce vel vehicula libero, et placerat neque. Pellentesque luctus cursus volutpat. Morbi finibus lacus eros, eu gravida metus iaculis ac."})]}),Object(n.jsx)("div",{className:"col-12 col-md-4",children:Object(n.jsx)("h5",{className:"font-weight-bold",children:"Subjects"})}),Object(n.jsxs)("div",{className:"col-12 col-md-4",children:[Object(n.jsx)("h5",{className:"font-weight-bold",children:"Contact details"}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-3",children:Object(n.jsx)("p",{className:"font-weight-bold",children:"Address:"})}),Object(n.jsx)("div",{className:"col-9",children:Object(n.jsx)("p",{children:"69 Abbey Rd, London, United Kingdom"})})]}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-3",children:Object(n.jsx)("p",{className:"font-weight-bold",children:"Phone:"})}),Object(n.jsx)("div",{className:"col-9",children:Object(n.jsx)("p",{children:"+44 1632 960948"})})]}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-3",children:Object(n.jsx)("p",{className:"font-weight-bold",children:"E-mail:"})}),Object(n.jsx)("div",{className:"col-9",children:Object(n.jsx)("p",{children:"openlibrary@ol.com"})})]})]})]}),Object(n.jsx)("p",{className:"copyright-text",children:"Copyright \xa9 2020 Konrad Rembowski"})]})})};a(78);var Oe=function(){return Object(n.jsx)("header",{children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"d-flex flex-column flex-sm-row justify-content-between mx-auto",children:[Object(n.jsx)("div",{className:"px-md-5 mx-auto welcome-text",children:Object(n.jsx)("p",{className:"text-center p-1 m-0",children:"Welcome to OpenLibrary"})}),Object(n.jsx)("div",{className:"px-md-5 mx-auto",children:Object(n.jsxs)("div",{className:"p-1 text-center",children:[Object(n.jsx)(V.b,{to:"#",children:Object(n.jsx)("i",{className:"fab fa-facebook"})}),Object(n.jsx)(V.b,{to:"#",children:Object(n.jsx)("i",{className:"fab fa-linkedin"})}),Object(n.jsx)(V.b,{to:"#",children:Object(n.jsx)("i",{className:"fab fa-twitter"})}),Object(n.jsx)(V.b,{to:"#",children:Object(n.jsx)("i",{className:"fab fa-instagram"})}),Object(n.jsx)(V.b,{to:"#",children:Object(n.jsx)("i",{className:"fab fa-pinterest"})}),Object(n.jsx)(V.b,{to:"#",children:Object(n.jsx)("i",{className:"fab fa-tumblr"})}),Object(n.jsx)(V.b,{to:"#",children:Object(n.jsx)("i",{className:"fab fa-youtube"})}),Object(n.jsx)(V.b,{to:"#",children:Object(n.jsx)("i",{className:"fab fa-facebook-messenger"})}),Object(n.jsx)(V.b,{to:"#",children:Object(n.jsx)("i",{className:"fab fa-skype"})}),Object(n.jsx)(V.b,{to:"#",children:Object(n.jsx)("i",{className:"fab fa-discord"})})]})})]}),Object(n.jsx)(Ie,{})]})})};var xe=function(e){return Object(n.jsxs)("div",{children:[Object(n.jsx)(Me,{iconClassName:"fas fa-home",headerName:"Home"}),Object(n.jsx)("div",{className:"m-4",children:Object(n.jsx)(Ke,{onSubmit:e.onSearchSubmit})}),e.bookList]})},fe=function(e,t){var a=function(e,t){var a=!!K(t)&&t;return e.filter((function(e){return!a||!!M(e[L])}))}(e,t.onlyWithAuthorAvailable);return a=function(e,t){var a=Array.from(t);return e.filter((function(e){var t=e[w];return!(!M(t)&&a.length)&&a.every((function(e){return t.includes(e)}))}))}(a=function(e,t,a){var n=W(t),r=W(a),o=n?t:0,i=r?a:Number.MAX_VALUE;return e.filter((function(e){return W(e[S])?e[S]>=o&&e[S]<=i:!n&&!r}))}(a=function(e,t){var a=!!K(t)&&t;return e.filter((function(e){return!a||!!W(e[S])}))}(a=function(e,t){var a=!!K(t)&&t;return e.filter((function(e){return!a||!!W(e[A])}))}(a,t.onlyWithCoverAvailable),t.onlyWithYearAvailable),t.minYear,t.maxYear),t.subjects)};var ve=function(e,t){for(var a=W(t.pageSize)?t.pageSize:_.pageSizes[0],n=a*((W(t.currentPage)?t.currentPage:_.firstPage)-1),r=n+Math.min(e.length-(n+1),a-1),o=[],i=n;i<=r;++i)o.push(e[i]);return o},ke=function(e,t){switch(t.sortKey){case P.title:return e.sort(ye(B,t.sortOrder));case P.author:return e.sort(ye(L,t.sortOrder));case P.year:return e.sort(ye(S,t.sortOrder));default:return e}};function ye(e,t){switch(t){case I:return function(e){return function(t,a){var n=t[e],r=a[e];return M(n)&&M(r)&&n<r||!M(r)?-1:M(n)&&M(r)&&n>r||!M(n)?1:0}}(e);case Y:return function(e){return function(t,a){var n=t[e],r=a[e];return M(n)&&M(r)&&n>r||!M(r)?-1:M(n)&&M(r)&&n<r||!M(n)?1:0}}(e);default:return 0}}var Ce=a(22),Ne=function(e){return function(t){Object(ee.a)(r,t);var a=Object(te.a)(r);function r(){return Object(Q.a)(this,r),a.apply(this,arguments)}return Object($.a)(r,[{key:"render",value:function(){var t=this.props,a=t.errorMessage,r=Object(Ce.a)(t,["errorMessage"]);return a?Object(n.jsx)(me,{message:a}):Object(n.jsx)(e,Object(k.a)({},r))}}]),r}(o.a.Component)},Be=function(e){return function(t){Object(ee.a)(r,t);var a=Object(te.a)(r);function r(){return Object(Q.a)(this,r),a.apply(this,arguments)}return Object($.a)(r,[{key:"render",value:function(){var t=this.props,a=t.isLoading,r=Object(Ce.a)(t,["isLoading"]);return a?Object(n.jsx)(Pe,{}):Object(n.jsx)(e,Object(k.a)({},r))}}]),r}(o.a.Component)},Le=Object(l.c)(Ne,Be)(q),Se=function(e){Object(ee.a)(a,e);var t=Object(te.a)(a);function a(){var e;Object(Q.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isSearching:!1,errorMessage:e.props.bookList.length>0?"":" "},e.onSearchSubmit=function(t,a){e.setState({isSearching:M(t),errorMessage:""}),e.props.clearBookList(),M(t)?T.get("search.json?".concat(a,"=").concat(t)).then((function(t){e.setState({isSearching:!1});var a=t.data.docs;a.length?e.props.fetchBookList(a):e.setState({errorMessage:"Nothing found..."})})).catch((function(){e.setState({isSearching:!1,errorMessage:"Search failed!"})})):e.setState({errorMessage:" "})},e}return Object($.a)(a,[{key:"render",value:function(){return Object(n.jsx)(xe,{onSearchSubmit:this.onSearchSubmit,bookList:Object(n.jsx)(Le,{errorMessage:this.state.errorMessage,isLoading:this.state.isSearching,list:this.props.bookList,currentNumberOfBooks:this.props.currentNumberOfBooks})})}}]),a}(o.a.Component),we={fetchBookList:function(e){return{type:u,bookList:e}},clearBookList:function(){return{type:j}}},Ae=Object(c.b)((function(e){var t=fe(e.bookList,e.bookListFilter);return{bookList:ve(ke(t,e.bookListSort),e.bookListPagination),currentNumberOfBooks:t.length}}),we)(Se);a(79);var Pe=function(){return Object(n.jsx)("div",{className:"loader"})};var Ie=function(){return Object(n.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark justify-content-between align-items-center p-0",children:[Object(n.jsxs)(V.b,{className:"logotype",to:"/",children:[Object(n.jsx)("h1",{children:"Open"}),Object(n.jsx)("h1",{children:"Library"})]}),Object(n.jsxs)("button",{className:"btn nav-button",type:"button","data-toggle":"collapse","data-target":"#navbarList","aria-expanded":"false","aria-controls":"navbarList",children:[Object(n.jsx)("i",{className:"fas fa-bars align-middle"}),Object(n.jsx)("span",{className:"d-none d-md-inline align-middle ml-2",children:"Menu"})]}),Object(n.jsx)("div",{id:"navbarList",className:"collapse navbar-collapse",children:Object(n.jsx)(Te,{pages:[["/","Home"],["/about","About"],["/contact","Contact"]],currentPage:Object(X.f)().pathname})})]})},Ye=a(41),_e=a(40);var Te=function(e){var t=[];if(M(e.pages)){var a,r=new Map(e.pages),o=Object(_e.a)(r);try{for(o.s();!(a=o.n()).done;){var i=Object(Ye.a)(a.value,2),s=i[0],c=i[1];t.push(Object(n.jsx)("li",{className:s===e.currentPage?"current":"",children:Object(n.jsx)(V.b,{to:s,children:c})},"navItem("+s+")"))}}catch(l){o.e(l)}finally{o.f()}}return Object(n.jsx)("ul",{className:"nav-list",children:t})};var Me=function(e){return Object(n.jsxs)("h2",{className:"font-weight-bold",children:[Object(n.jsx)("i",{className:e.iconClassName})," ",e.headerName]})};a(80);var Re=function(e){for(var t=[],a=0;a<e.numberOfPaginationItems;++a){var r=a+1;t.push(Object(n.jsx)("li",{className:"page-item ".concat(r===e.currentPaginationItem?"active":""),children:Object(n.jsx)(V.b,{className:"page-link",to:"#",onClick:e.onPaginationItemClick,children:r})},"paginationItem"+a))}return Object(n.jsx)("nav",{className:"align-self-center align-middle mx-auto mx-md-0 mb-3 mb-md-0 mr-md-3",children:Object(n.jsxs)("ul",{className:"pagination pagination-sm m-0",children:[Object(n.jsx)("li",{className:"page-item ".concat(e.currentPaginationItem<=_.firstPage?"disabled":""),children:Object(n.jsx)(V.b,{className:"page-link",to:"#",onClick:e.onPaginationItemClick,children:_.previousPage},"paginationItemPrev")}),t,Object(n.jsx)("li",{className:"page-item ".concat(e.currentPaginationItem>=t.length?"disabled":""),children:Object(n.jsx)(V.b,{className:"page-link",to:"#",onClick:e.onPaginationItemClick,children:_.nextPage},"paginationItemNext")})]})})};var We=function(e){return Object(n.jsxs)("form",{onSubmit:e.onSubmit,children:[Object(n.jsx)("h3",{className:"text-center mb-3",children:"Search books"}),Object(n.jsxs)("div",{className:"input-group input-group-lg",children:[Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"Search",onChange:e.onInputChange}),Object(n.jsxs)("div",{className:"input-group-append",children:[Object(n.jsxs)("div",{className:"dropdown",children:[Object(n.jsxs)("button",{className:"btn btn-block dropdown-toggle rounded-0 h-100 caret-off",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:[Object(n.jsx)("span",{className:"d-none d-md-inline",children:"Search by"})," ",Object(n.jsx)("span",{className:"font-weight-bold",children:e.searchByLabel})]}),Object(n.jsx)(pe,{isRight:!0,onDropdownMenuItemClick:e.onSearchByDropdownMenuItemClick,items:["title","author"]})]}),Object(n.jsx)("span",{className:"input-group-text",children:Object(n.jsx)("i",{className:"fas fa-search fa-flip-horizontal"})})]})]})]})},Ke=function(e){Object(ee.a)(a,e);var t=Object(te.a)(a);function a(){var e;Object(Q.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchPhrase:"",searchBy:"title",searchByLabel:"title"},e.onInputChange=function(t){e.setState({searchPhrase:t.target.value})},e.onSearchByDropdownMenuItemClick=function(t){e.setState({searchBy:t.target.textContent,searchByLabel:t.target.textContent})},e.onSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.searchPhrase,e.state.searchBy)},e}return Object($.a)(a,[{key:"render",value:function(){return Object(n.jsx)(We,{searchByLabel:this.state.searchByLabel,onSubmit:this.onSubmit,onInputChange:this.onInputChange,onSearchByDropdownMenuItemClick:this.onSearchByDropdownMenuItemClick})}}]),a}(o.a.Component);var Ee=function(e){var t=[];if(M(e.tags))for(var a=Array.from(e.tags),r=0;r<a.length;++r)t.push(Object(n.jsx)(V.b,{className:"text-reset text-decoration-none",to:"#",onClick:e.onTagClick,children:Object(n.jsx)("span",{className:"badge m-1",children:a[r]})},"tag"+r));return Object(n.jsx)("div",{className:"d-flex flex-wrap w-100 m-1",children:t})};s.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(c.a,{store:D,children:Object(n.jsx)(G,{})})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.f17b0c27.chunk.js.map