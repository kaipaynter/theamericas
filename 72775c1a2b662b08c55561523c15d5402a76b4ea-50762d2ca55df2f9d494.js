(self.webpackChunktheamericas=self.webpackChunktheamericas||[]).push([[921],{8828:function(e){"use strict";e.exports=Object.assign},5183:function(e){e.exports={siteTitle:"The Americas",manifestName:"The Americas",manifestShortName:"Landing",manifestStartUrl:"/",manifestBackgroundColor:"#663399",manifestThemeColor:"#663399",manifestDisplay:"standalone",manifestIcon:"src/assets/images/icon.jpg",heading:"The Americas",socialLinks:[{style:"brands",icon:"fa-facebook",name:"Facebook",url:"https://www.facebook.com/profile.php?id=61565633052387"},{style:"brands",icon:"fa-instagram",name:"Instagram",url:"https://www.instagram.com/theamericastheatreco/"}]}},9463:function(e,t,n){"use strict";n.d(t,{A:function(){return we}});var r,o,i,a,c=n(7387),u=n(6540),s=n(5556),l=n.n(s),f=n(2098),p=n.n(f),d=n(115),m=n.n(d),h=n(8828),y=n.n(h),b="bodyAttributes",T="htmlAttributes",g="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},E=(Object.keys(v).map((function(e){return v[e]})),"charset"),w="cssText",A="href",C="http-equiv",O="innerHTML",S="itemprop",k="name",j="property",P="rel",L="src",I="target",x={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",N="defer",R="encodeSpecialCharacters",D="onChangeClientState",_="titleTemplate",B=Object.keys(x).reduce((function(e,t){return e[x[t]]=t,e}),{}),H=[v.NOSCRIPT,v.SCRIPT,v.STYLE],q="data-react-helmet",U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},K=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},W=function(e){var t=J(e,v.TITLE),n=J(e,_);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=J(e,M);return t||r||void 0},V=function(e){return J(e,D)||function(){}},$=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},G=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+U(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===P&&"canonical"===e[n].toLowerCase()||u===P&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==O&&c!==w&&c!==S||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=y()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},J=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),Z=function(e){return clearTimeout(e)},ee="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,te="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||Z:n.g.cancelAnimationFrame||Z,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},re=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;ce(v.BODY,r),ce(v.HTML,o),ae(f,p);var d={baseTag:ue(v.BASE,n),linkTags:ue(v.LINK,i),metaTags:ue(v.META,a),noscriptTags:ue(v.NOSCRIPT,c),scriptTags:ue(v.SCRIPT,s),styleTags:ue(v.STYLE,l)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=d[e].oldTags)})),t&&t(),u(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ae=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ce(v.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(q),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===o.indexOf(u)&&o.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(q):n.getAttribute(q)!==a.join(",")&&n.setAttribute(q,a.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"["+q+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(q,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},le=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[x[n]||n]=e[n],t}),t)},fe=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[q]=!0,o=le(n,r),[u.createElement(v.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=se(n),i=ie(t);return o?"<"+e+" "+q+'="true" '+o+">"+K(i,r)+"</"+e+">":"<"+e+" "+q+'="true">'+K(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case b:case T:return{toComponent:function(){return le(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[q]=!0,r);return Object.keys(t).forEach((function(e){var n=x[e]||e;if(n===O||n===w){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),u.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===O||e===w)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===H.indexOf(e);return t+"<"+e+" "+q+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:fe(v.BASE,t,r),bodyAttributes:fe(b,n,r),htmlAttributes:fe(T,o,r),link:fe(v.LINK,i,r),meta:fe(v.META,a,r),noscript:fe(v.NOSCRIPT,c,r),script:fe(v.SCRIPT,u,r),style:fe(v.STYLE,s,r),title:fe(v.TITLE,{title:f,titleAttributes:p},r)}},de=p()((function(e){return{baseTag:Q([A,I],e),bodyAttributes:$(b,e),defer:J(e,N),encode:J(e,R),htmlAttributes:$(T,e),linkTags:G(v.LINK,[P,A],e),metaTags:G(v.META,[k,E,C,j,S],e),noscriptTags:G(v.NOSCRIPT,[O],e),onChangeClientState:V(e),scriptTags:G(v.SCRIPT,[L,O],e),styleTags:G(v.STYLE,[w],e),title:W(e),titleAttributes:$(g,e)}}),(function(e){re&&te(re),e.defer?re=ee((function(){oe(e,(function(){re=null}))})):(oe(e),re=null)}),pe)((function(){return null})),me=(o=de,a=i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return Y({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Y({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case v.TITLE:return Y({},o,((t={})[r.type]=a,t.titleAttributes=Y({},i),t));case v.BODY:return Y({},o,{bodyAttributes:Y({},i)});case v.HTML:return Y({},o,{htmlAttributes:Y({},i)})}return Y({},o,((n={})[r.type]=Y({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var r;n=Y({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return u.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[B[n]||n]=e[n],t}),t)}(z(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=z(e,["children"]),r=Y({},n);return t&&(r=this.mapChildrenToProps(t,r)),u.createElement(o,r)},F(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(u.Component),i.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);me.renderStatic=me.rewind;var he=me,ye=n(8693),be=n(5183),Te=n.n(be);function ge(){return u.createElement("footer",{id:"footer"},u.createElement("ul",{className:"icons"},Te().socialLinks.map((e=>{const{style:t,icon:n,name:r,url:o}=e;return u.createElement("li",{key:o},u.createElement("a",{href:o,target:"_blank",rel:"noreferrer",className:"icon "+t+" "+n},u.createElement("span",{className:"label"},r)))}))),u.createElement("ul",{className:"copyright"},u.createElement("li",null,"© BearTiger Productions"),u.createElement("li",null,"Design: ",u.createElement("a",{href:"http://html5up.net"},"HTML5 UP"))))}function ve(e){let{onMenuToggle:t=()=>{}}=e;return u.createElement("nav",{id:"nav"},u.createElement("ul",null,u.createElement("li",{className:"special"},u.createElement("a",{href:"#menu",onClick:e=>{e.preventDefault(),t()},className:"menuToggle"},u.createElement("span",null,"Menu")),u.createElement("div",{id:"menu"},u.createElement("ul",null,u.createElement("li",null,u.createElement(ye.Link,{to:"/"},"Home")),u.createElement("li",null,u.createElement(ye.Link,{to:"/about"},"About")),u.createElement("li",null,u.createElement(ye.Link,{to:"/upcomingshows"},"Upcoming Shows")),u.createElement("li",null,u.createElement(ye.Link,{to:"/sponsorships"},"Sponsorships")),u.createElement("li",null,u.createElement(ye.Link,{to:"/submissions"},"Submissions")),u.createElement("li",null,u.createElement(ye.Link,{to:"/contact"},"Contact"))),u.createElement("a",{className:"close",onClick:e=>{e.preventDefault(),t()},href:"#menu"},"")))))}function Ee(e){let{fullMenu:t}=e;const{0:n,1:r}=(0,u.useState)(!1);return u.createElement("header",{id:"header",className:t?"":"alt"},u.createElement("h1",null,u.createElement(ye.Link,{to:"/"},"Home")),u.createElement("div",{className:n?"is-menu-visible":" "},u.createElement(ve,{onMenuToggle:()=>r(!n)})))}var we=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={isPreloaded:!0},n}(0,c.A)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.timeoutId=setTimeout((()=>{this.setState({isPreloaded:!1})}),100)},n.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},n.render=function(){const{children:e,fullMenu:t}=this.props,{isPreloaded:n}=this.state;return u.createElement(ye.StaticQuery,{query:"3649515864",render:r=>u.createElement(u.Fragment,null,u.createElement(he,{title:r.site.siteMetadata.title,meta:[{name:"description",content:"The Americas: A Theatre Company"},{name:"keywords",content:"Acting, Theatre, BearTigerProductions"}]},u.createElement("html",{lang:"en"})),u.createElement("div",{className:n?"landing main-body is-preload":"landing main-body"},u.createElement("div",{id:"page-wrapper"},u.createElement(Ee,{fullMenu:t}),e,u.createElement(ge,null))))})},t}(u.Component)},115:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,s,l;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;for(l=e.entries();!(u=l.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(u=l.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof a.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof a.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,s[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==s[u]&&"__v"!==s[u]&&"__o"!==s[u]||!e.$$typeof)&&!i(e[s[u]],a[s[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},2098:function(e,t,n){"use strict";var r,o=n(6540),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function l(){u=e(s.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}}}]);
//# sourceMappingURL=72775c1a2b662b08c55561523c15d5402a76b4ea-50762d2ca55df2f9d494.js.map