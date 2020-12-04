(this.webpackJsonpjokeservice=this.webpackJsonpjokeservice||[]).push([[0],{18:function(e,t,a){e.exports=a(37)},23:function(e,t,a){},24:function(e,t,a){},26:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),n=a(14),s=a.n(n),c=a(16),i=(a(23),a(2)),l=a(3),u=a(4),m=a(5),p=(a(24),a(17)),h=a(6),d=a.n(h),v=a(8),k=(a(26),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"getHours",value:function(e){var t=Date.now();e=e.replace(" ","T").concat("Z");var a=new Date(e),r=Math.floor((t-a)/36e5);return 1===r?"1 hour ago":"".concat(r," hours ago")}},{key:"renderCategory",value:function(){if("joke_sidebar"===this.props.className)return null;var e=this.props.joke.categories;return e&&e.length>0?o.a.createElement("p",{className:"joke__category"},e[0]):o.a.createElement("p",null)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"joke ".concat(this.props.className||"")},o.a.createElement("img",{onClick:function(t){return e.props.onIconClick(e.props.joke)},className:"joke__love-icon",alt:"icon",src:"img/".concat(this.props.icon)}),o.a.createElement("div",{className:"joke__content"},o.a.createElement("div",{className:"joke__icon-box"},o.a.createElement("img",{className:"joke__text-icon",alt:"icon",src:"img/text-icon.svg"})),o.a.createElement("div",{className:"joke__layout "},o.a.createElement("div",{className:"joke__id"},o.a.createElement("p",{className:"joke__id-text"},"ID:",o.a.createElement("a",{href:this.props.joke.url,target:"_blank",rel:"noopener noreferrer"},o.a.createElement("span",{className:"joke__id-number"},this.props.joke.id),o.a.createElement("img",{className:"joke__id-icon",src:"img/share-icon.svg",alt:"icon"})))),o.a.createElement("div",{className:"joke__text-block"},o.a.createElement("p",{className:"joke__text"},this.props.joke.value)),o.a.createElement("div",{className:"joke__footer"},o.a.createElement("p",{className:"joke__update"},"Last update: ",o.a.createElement("span",{className:"joke__update-hours"},this.getHours(this.props.joke.updated_at))),this.renderCategory()))))}}]),a}(o.a.Component)),g=a(1),f=a.n(g);a(29),a(30);var y=function(e){return o.a.createElement("div",{className:"categories"},e.categoriesList.map((function(t){return o.a.createElement("div",{className:"category",key:t},o.a.createElement("input",{className:"sub-radio__input",type:"radio",id:"category__".concat(t),name:"category",value:"".concat(t),checked:e.activeCategory===t,onChange:function(t){return e.onChange(t.target.value)}}),o.a.createElement("label",{className:"sub-radio__label",htmlFor:"category__".concat(t)},"".concat(t)))})))},_=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];return(e=t.call.apply(t,[this].concat(o))).state={searchType:"random",activeCategory:"",search:"",queryError:" "},e.onSelectSeachByCategory=function(t){e.setState({activeCategory:t})},e.onSelectSearchByInputText=function(t){t.target.value.length<3||t.target.value.length>120?e.setState({search:t.target.value,queryError:"Plese input valid value"}):e.setState({search:t.target.value,queryError:""})},e.handleSubmit=function(t){t.preventDefault(),e.onGetJokeButtonClick(e.state.searchType)},e}return Object(l.a)(a,[{key:"onGetJokeButtonClick",value:function(e){switch(e){case"random":this.props.getJokes("random");break;case"category":this.props.getJokes("random?category=".concat(this.state.activeCategory));break;case"search":this.props.getJokes("search?query=".concat(this.state.search))}}},{key:"render",value:function(){var e=this;return o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("ul",{id:"search-type",className:"search-type"},o.a.createElement("li",{className:"search-type__item"},o.a.createElement("input",{className:"main-radio__input",type:"radio",id:"random",name:"getMethod",value:"random",checked:"random"===this.state.searchType,onChange:function(t){return e.setState({searchType:t.target.value})}}),o.a.createElement("label",{className:"main-radio__label",htmlFor:"random"},"Random")),o.a.createElement("li",{className:"search-type__item"},o.a.createElement("input",{className:"main-radio__input",type:"radio",id:"category",name:"getMethod",value:"category",checked:"category"===this.state.searchType,onChange:function(t){e.state.activeCategory?e.setState({searchType:t.target.value}):e.setState({searchType:t.target.value,activeCategory:e.props.jokeCategories[0]})}}),o.a.createElement("label",{className:"main-radio__label",htmlFor:"category"},"From category"),"category"===this.state.searchType?o.a.createElement(y,{categoriesList:this.props.jokeCategories,onChange:this.onSelectSeachByCategory,activeCategory:this.state.activeCategory}):null),o.a.createElement("li",{className:"search-type__item"},o.a.createElement("input",{className:"main-radio__input",type:"radio",id:"search",name:"getMethod",value:"search",checked:"search"===this.state.searchType,onChange:function(t){return e.setState({searchType:t.target.value})}}),o.a.createElement("label",{className:"main-radio__label",htmlFor:"search"},"Search")),"search"===this.state.searchType?o.a.createElement("div",{className:"input__box"},o.a.createElement("input",{className:"search__input",type:"text",id:"lname",name:"lname",value:this.state.search,placeholder:"Free text search...",onChange:this.onSelectSearchByInputText})):null),o.a.createElement("input",{disabled:this.state.queryError&&"search"===this.state.searchType,className:"search-type__button",type:"submit",value:"Get a joke"}))}}]),a}(o.a.Component),b=(a(31),function(e){return o.a.createElement("div",{className:"error"},e.children)}),j=(a(32),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={jokes:[],error:"",jokeCategories:""},e.getCategories=Object(v.a)(d.a.mark((function t(){var a,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.chucknorris.io/jokes/categories");case 2:return a=t.sent,t.next=5,a.json();case 5:r=t.sent,e.setState({jokeCategories:r});case 7:case"end":return t.stop()}}),t)}))),e.getJokes=function(){var t=Object(v.a)(d.a.mark((function t(a){var r,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat("https://api.chucknorris.io/jokes/"+a));case 2:return r=t.sent,t.next=5,r.json();case 5:(o=t.sent).result?o.result.length>0?e.setState({jokes:o.result,error:""}):e.setState({jokes:[],error:"Jokes was not found"}):o.error?e.setState({jokes:[],error:o.message}):e.setState({jokes:[o],error:""});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.isFavorite=function(t){var a,r=Object(p.a)(e.props.favoriteJokes);try{for(r.s();!(a=r.n()).done;){if(a.value.id===t.id)return!0}}catch(o){r.e(o)}finally{r.f()}return!1},e.createJokes=function(t){return o.a.createElement("div",{className:"jokes"},t.map((function(t){return e.isFavorite(t)?o.a.createElement(k,{key:t.id,onIconClick:e.props.removeFavoriteJokeHandler,icon:"love-icon_fill.svg",joke:t}):o.a.createElement(k,{key:t.id,onIconClick:e.props.addFavoriteJokeHandler,icon:"love-icon.svg",joke:t})})))},e}return Object(l.a)(a,[{key:"render",value:function(){return this.state.jokeCategories||this.getCategories(),o.a.createElement("div",{className:"main-block"},o.a.createElement("header",{className:"main-block__header"},o.a.createElement("p",{className:"main-block__logo"}," Msi 2020 "),o.a.createElement("h3",{className:"main-header"},"Hey!"),o.a.createElement("h4",{className:"sub-header"},"Let\u2019s try to find a joke for you:")),o.a.createElement(_,{getJokes:this.getJokes,jokeCategories:this.state.jokeCategories}),0!==this.state.jokes.length?this.createJokes(this.state.jokes):null,this.state.error?o.a.createElement(b,null,this.state.error):null)}}]),a}(o.a.Component));_.propTypes={favoriteJokes:f.a.array,addFavoriteJokeHandler:f.a.func,removeFavoriteJokeHandler:f.a.func};var E=j,N=(a(33),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",(function(){window.pageYOffset>20&&window.innerWidth<970?window.sidebar_header.style.opacity="0":window.sidebar_header.style.opacity="1"}))}},{key:"renderJokes",value:function(){var e=this;return this.props.jokes.length>0?o.a.createElement("div",{className:"jokes jokes_sidebar",id:"sidebar"},this.props.jokes.map((function(t){return o.a.createElement(k,{key:t.id,icon:"love-icon_fill.svg",className:"joke_sidebar",onIconClick:e.props.removeFavoriteJokeHandler,joke:t})}))):null}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"sidebar__backdrop ".concat(this.props.isSidebarOpen?"sidebar__backdrop_open":""),onClick:this.props.toggleIsSidebarOpen}),o.a.createElement("div",{className:"sidebar ".concat(this.props.isSidebarOpen?"sidebar_open":"")},o.a.createElement("div",{className:"sidebar__header",id:"sidebar_header"},o.a.createElement("div",{className:"sidebar__button ".concat(this.props.isSidebarOpen?"sidebar__button_open":""),onClick:this.props.toggleIsSidebarOpen},o.a.createElement("div",{className:"sidebar__burger"})),o.a.createElement("h3",{className:"sidebar__favorite"},"Favorite")),this.renderJokes()))}}]),a}(o.a.Component));k.propTypes={jokes:f.a.array,removeFavoriteJokeHandler:f.a.func,isSidebarOpen:f.a.bool,toggleIsSidebarOpen:f.a.func};var S=N,J=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];return(e=t.call.apply(t,[this].concat(o))).state={favoriteJokes:JSON.parse(localStorage.getItem("favoriteJokes"))||[],isSidebarOpen:!1},e.addFavoriteJoke=function(t){e.setState((function(e){return{favoriteJokes:e.favoriteJokes.concat(t)}}),(function(){localStorage.setItem("favoriteJokes",JSON.stringify(e.state.favoriteJokes))}))},e.removeFavoriteJoke=function(t){e.setState((function(e){return{favoriteJokes:e.favoriteJokes.filter((function(e){return e.id!==t.id}))}}),(function(){localStorage.setItem("favoriteJokes",JSON.stringify(e.state.favoriteJokes))}))},e.toggleIsSidebarOpen=function(){e.setState({isSidebarOpen:!e.state.isSidebarOpen})},e}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(E,{favoriteJokes:this.state.favoriteJokes,addFavoriteJokeHandler:this.addFavoriteJoke,removeFavoriteJokeHandler:this.removeFavoriteJoke}),o.a.createElement(S,{jokes:this.state.favoriteJokes,removeFavoriteJokeHandler:this.removeFavoriteJoke,isSidebarOpen:this.state.isSidebarOpen,toggleIsSidebarOpen:this.toggleIsSidebarOpen}))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(c.a,null,o.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.1998677b.chunk.js.map