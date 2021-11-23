(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{17:function(e,t,a){e.exports={header:"Searchbar_header__1xxS5",form:"Searchbar_form__Cu6eA",input:"Searchbar_input__1So2L"}},21:function(e,t,a){e.exports={item:"ImageGalleryItem_item__2xsxO",image:"ImageGalleryItem_image__nRpga"}},23:function(e,t,a){e.exports={overlay:"Modal_overlay__3vNLE",modal:"Modal_modal__OGqs0"}},47:function(e,t,a){},6:function(e,t,a){e.exports={Button:"Button_Button__1uQjR",loadMore:"Button_loadMore__2v8dt",searchForm:"Button_searchForm__3X96L",close:"Button_close__2EWww"}},9:function(e,t,a){e.exports={idleText:"ImageGallery_idleText__2rlGV",errorText:"ImageGallery_errorText__1-G8F",slideRight:"ImageGallery_slideRight__3zPaN",title:"ImageGallery_title__3shVg",galleryGrid:"ImageGallery_galleryGrid__KDq8N"}},97:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),c=a.n(o),s=(a(47),a(4)),i=a(5),l=a(8),u=a(7),d=a(24),h=a(42),m=a(35),p=a.n(m),g=a(6),j=a.n(g),b=a(1),f=["className","onClick","children"];function O(e){var t=e.className,a=e.onClick,n=e.children,r=Object(h.a)(e,f),o=p()(j.a.Button,t);return Object(b.jsx)("button",Object(d.a)(Object(d.a)({},r),{},{onClick:a,className:o,children:n}))}O.defaultProps={onClick:function(){return null},children:null,className:null};var x=a(17),v=a.n(x),y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchInput:""},e.handleChange=function(t){e.setState({searchInput:t.currentTarget.value})},e.handleSubmit=function(t){if(t.preventDefault(),""===e.state.searchInput.trim())return window.alert("Please, provide search name!"),void e.clear();e.props.onSubmit(e.state.searchInput.toLowerCase().trim()),e.clear()},e.clear=function(){e.setState({searchInput:""})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(b.jsx)("header",{className:v.a.header,children:Object(b.jsxs)("form",{className:v.a.form,onSubmit:this.handleSubmit,children:[Object(b.jsx)(O,{type:"submit",className:j.a.searchForm,children:Object(b.jsx)("span",{className:"button-label",children:"Search"})}),Object(b.jsx)("input",{className:v.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChange,value:this.state.searchInput})]})})}}]),a}(n.Component);y.defaultProps={onSubmit:function(){return null}};var _,w=a(18),S=a(14),k=a(15),I=k.a.div(_||(_=Object(S.a)(["\n  max-width: 1200px;\n  margin: 0 auto;\n  height: auto;\n  padding: 0 15px;\n"])));function C(e){var t=e.children;return Object(b.jsx)(I,{children:t})}var N,M=a(39),L=a.n(M),B=k.a.div(N||(N=Object(S.a)(["\n  height: 150px;\n  width: 150px;\n  margin: 50px auto;\n"])));function R(){return Object(b.jsx)(B,{children:Object(b.jsx)(L.a,{type:"BallTriangle",color:"#00BFFF",height:150,width:150})})}var G=a(2),T=a.n(G),U=a(21),E=a.n(U);function D(e){var t=e.imgUrl,a=e.description,n=e.onClick,r=e.bigImgURL;return Object(b.jsx)("li",{className:E.a.item,children:Object(b.jsx)("img",{src:t,alt:a,srcSet:r,className:E.a.image,onClick:n})})}D.defaultProps={description:"image",bigImgURL:"../src/images/DefaultImage.png"},D.prototypes={imgUrl:T.a.string.isRequired,bigImgURL:T.a.string,description:T.a.string,onClick:T.a.func.isRequired};var F=a(22),V=a.n(F),P=a(40),q=a(41),A=a.n(q),K="23596764-fc841aad9a4a9806cf99f02b3";function J(e,t){return z.apply(this,arguments)}function z(){return(z=Object(P.a)(V.a.mark((function e(t,a){var n;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("https://pixabay.com/api/?q=".concat(t,"&page=").concat(a,"&key=").concat(K,"&image_type=photo&orientation=horizontal&per_page=9"));case 2:return n=e.sent,e.abrupt("return",n.data.hits);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var H=a(9),W=a.n(H),X=a(88),Q=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={images:null,error:null,status:"idle",moreLoadStatus:"idle",page:1},e.endElRef=Object(n.createRef)(),e.scrollToBottom=function(){e.endElRef.current.scrollIntoView({behavior:"smooth"})},e.handleButtonClick=function(){e.setState((function(e){return{page:e.page+1}}))},e.handleModalOpen=function(t){e.props.handleModalOpen(t.currentTarget.srcset)},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this,n=e.searchValue,r=t.page,o=this.props.searchValue,c=this.state.page;n!==o&&(this.setState({status:"pending"}),J(o,c).then((function(e){if(0===e.length)throw new Error('Unfortunately, nothing found with search name "'.concat(o,'" :( '));a.setState({images:Object(w.a)(e),status:"resolved"})})).catch((function(e){return a.setState({error:e,status:"rejected"})}))),c!==r&&(this.setState({moreLoadStatus:"pending"}),J(o,c).then((function(e){if(0===e.length)throw new Error("Images with tag ".concat(o," has been finished."));a.setState((function(t){return{images:[].concat(Object(w.a)(t.images),Object(w.a)(e)),moreLoadStatus:"resolved"}})),a.scrollToBottom()})).catch((function(e){return a.setState({error:e,moreLoadStatus:"rejected"})})))}},{key:"render",value:function(){var e=this,t=this.state,a=t.error,n=t.images,r=t.status,o=t.moreLoadStatus;return"idle"===r?Object(b.jsx)(C,{children:Object(b.jsxs)("p",{className:W.a.idleText,children:["Hi! Here you may find beautiful images for inspiration. ",Object(b.jsx)("br",{})," It's easy! Just enter a search name in the box at the top :)"]})}):"pending"===r?Object(b.jsx)(C,{children:Object(b.jsx)(R,{})}):"rejected"===r?Object(b.jsx)(C,{children:Object(b.jsx)("p",{className:W.a.errorText,children:a.message})}):"resolved"===r?Object(b.jsxs)(C,{children:[Object(b.jsx)("h1",{className:W.a.title,children:"Gallery"}),Object(b.jsx)("ul",{className:W.a.galleryGrid,children:n.map((function(t){var a=t.webformatURL,n=t.tags,r=t.largeImageURL;return Object(b.jsx)(D,{imgUrl:a,bigImgURL:r,description:n,onClick:e.handleModalOpen},X.generate())}))}),Object(b.jsx)("div",{ref:this.endElRef}),"pending"===o&&Object(b.jsx)(R,{}),"rejected"===o&&Object(b.jsx)("p",{className:W.a.errorText,children:a.message}),Object(b.jsx)(O,{type:"button",onClick:this.handleButtonClick,className:j.a.loadMore,children:"Load more"})]}):void 0}}]),a}(n.Component),Y=Q,Z=a(23),$=a.n(Z),ee=document.getElementById("modal-portal"),te=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(b.jsx)("div",{className:$.a.overlay,onClick:this.handleBackdropClick,children:Object(b.jsx)("div",{className:$.a.modal,children:this.props.children})}),ee)}}]),a}(n.Component);te.defaultProps={onClose:function(){}};var ae=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchValue:"",showModal:!1,largeImage:""},e.onSubmit=function(t){e.setState({searchValue:t})},e.handleModalOpen=function(t){e.setState({largeImage:t})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.largeImage!==this.state.largeImage&&this.toggleModal()}},{key:"render",value:function(){var e=this.state,t=e.searchValue,a=e.showModal,n=e.largeImage;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(y,{onSubmit:this.onSubmit}),Object(b.jsx)(Y,{searchValue:t,handleModalOpen:this.handleModalOpen}),a&&Object(b.jsxs)(te,{onClose:this.toggleModal,children:[Object(b.jsx)(O,{type:"button",className:j.a.close,onClick:this.toggleModal,children:"X"}),Object(b.jsx)("img",{src:n,alt:"#"})]})]})}}]),a}(n.Component),ne=ae;c.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(ne,{})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.e5c608fb.chunk.js.map