(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"104":function(e,t,n){"use strict";n.d(t,"a",function(){return h});var o=n(2),r=n.n(o),a=n(9),i=n(108),s=n(82),c=n.n(s),u=n(5),l=n.n(u),p=n(83),f=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}var h=function(e){function AtNavBar(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtNavBar),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtNavBar.__proto__||Object.getPrototypeOf(AtNavBar)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtNavBar,p["a"]),f(AtNavBar,[{"key":"handleClickLeftView","value":function handleClickLeftView(){var e;(e=this.props).onClickLeftIcon.apply(e,arguments)}},{"key":"handleClickSt","value":function handleClickSt(){var e;(e=this.props).onClickRgIconSt.apply(e,arguments)}},{"key":"handleClickNd","value":function handleClickNd(){var e;(e=this.props).onClickRgIconNd.apply(e,arguments)}},{"key":"render","value":function render(){var e=this.props,t=e.customStyle,n=e.className,o=e.color,s=e.fixed,c=e.border,u=e.leftIconType,p=e.leftText,f=e.title,h=e.rightFirstIconType,b=e.rightSecondIconType,y={"color":o},d=l()("at-icon",_defineProperty({},"at-icon-"+u,u)),m=l()("at-icon",_defineProperty({},"at-icon-"+h,h)),g=l()("at-icon",_defineProperty({},"at-icon-"+b,b));return r.a.createElement(a.a,{"className":l()({"at-nav-bar":!0,"at-nav-bar--fixed":s,"at-nav-bar--no-border":!c},n),"style":t},r.a.createElement(a.a,{"className":"at-nav-bar__left-view","onClick":this.handleClickLeftView.bind(this),"style":y},u&&r.a.createElement(i.a,{"className":d}),r.a.createElement(i.a,{"className":"at-nav-bar__text"},p)),r.a.createElement(a.a,{"className":"at-nav-bar__title"},f),r.a.createElement(a.a,{"className":"at-nav-bar__right-view"},r.a.createElement(a.a,{"className":l()({"at-nav-bar__container":!0,"at-nav-bar__container--hide":!b}),"style":y,"onClick":this.handleClickNd.bind(this)},b&&r.a.createElement(i.a,{"className":g})),r.a.createElement(a.a,{"className":l()({"at-nav-bar__container":!0,"at-nav-bar__container--hide":!h}),"style":y,"onClick":this.handleClickSt.bind(this)},h&&r.a.createElement(i.a,{"className":m}))))}}]),AtNavBar}();h.defaultProps={"customStyle":"","className":"","fixed":!1,"border":!0,"color":"","leftIconType":"","leftText":"","title":"","rightFirstIconType":"","rightSecondIconType":"","onClickLeftIcon":function onClickLeftIcon(){},"onClickRgIconSt":function onClickRgIconSt(){},"onClickRgIconNd":function onClickRgIconNd(){}},h.propTypes={"customStyle":c.a.oneOfType([c.a.object,c.a.string]),"className":c.a.oneOfType([c.a.array,c.a.string]),"fixed":c.a.bool,"border":c.a.bool,"color":c.a.string,"leftIconType":c.a.string,"leftText":c.a.string,"title":c.a.string,"rightFirstIconType":c.a.string,"rightSecondIconType":c.a.string,"onClickLeftIcon":c.a.func,"onClickRgIconSt":c.a.func,"onClickRgIconNd":c.a.func}},"105":function(e,t,n){var o=n(106);"string"==typeof o&&(o=[[e.i,o,""]]);var r={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(18)(o,r);o.locals&&(e.exports=o.locals)},"106":function(e,t,n){(e.exports=n(17)(!1)).push([e.i,"input {\n  display: block;\n  height: 1.4rem;\n  text-align: inherit;\n  text-overflow: clip;\n  overflow: hidden;\n  white-space: nowrap;\n}",""])},"108":function(e,t,n){"use strict";n(7);var o=n(2),r=n.n(o),a=n(19),i=n.n(a),s=n(5),c=n.n(s),u=(n(91),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}),l=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var p=function(e){function Text(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Text),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Text.__proto__||Object.getPrototypeOf(Text)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Text,r.a.Component),l(Text,[{"key":"render","value":function render(){var e=this.props,t=e.className,n=e.selectable,o=void 0!==n&&n,a=c()("taro-text",{"taro-text__selectable":o},t);return r.a.createElement("span",u({},i()(this.props,["selectable","className"]),{"className":a}),this.props.children)}}]),Text}();t.a=p},"109":function(e,t,n){"use strict";n(7);var o=n(2),r=n.n(o),a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var i=function(e){function Form(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Form);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Form.__proto__||Object.getPrototypeOf(Form)).apply(this,arguments));return e.Forms=[],e.onSubmit=e.onSubmit.bind(e),e.onReset=e.onReset.bind(e),e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Form,r.a.Component),a(Form,[{"key":"onSubmit","value":function onSubmit(e){e.preventDefault();for(var t=r.a.findDOMNode(this),n=[],o=t.getElementsByTagName("input"),a=0;a<o.length;a++)n.push(o[a]);var i={},s={};n.forEach(function(e){-1===e.className.indexOf("weui-switch")?"radio"!==e.type?"checkbox"!==e.type?i[e.name]=e.value:e.checked?s[e.name]?i[e.name].push(e.value):(s[e.name]=!0,i[e.name]=[e.value]):s[e.name]||(i[e.name]=[]):e.checked?(s[e.name]=!0,i[e.name]=e.value):s[e.name]||(i[e.name]=""):i[e.name]=e.checked});for(var c=t.getElementsByTagName("textarea"),u=[],l=0;l<c.length;l++)u.push(c[l]);u.forEach(function(e){i[e.name]=e.value}),Object.defineProperty(e,"detail",{"enumerable":!0,"value":{"value":i}}),this.props.onSubmit(e)}},{"key":"onReset","value":function onReset(e){e.preventDefault(),this.props.onReset()}},{"key":"render","value":function render(){var e=this.props,t=e.className,n=e.style;return r.a.createElement("form",{"className":t,"style":n,"onSubmit":this.onSubmit,"onReset":this.onReset},this.props.children)}}]),Form}();t.a=i},"110":function(e,t,n){"use strict";var o=n(1),r=n(2),a=n.n(r),i=n(9),s=(n(7),n(19)),c=n.n(s),u=n(5),l=n.n(u),p=(n(94),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}),f=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}var h=function(e){function Button(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Button);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Button.__proto__||Object.getPrototypeOf(Button)).apply(this,arguments));return e.state={"hover":!1,"touch":!1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Button,a.a.Component),f(Button,[{"key":"render","value":function render(){var e,t=this,n=this.props,o=n.children,r=n.disabled,i=n.className,s=n.style,u=n.onClick,f=n.onTouchStart,h=n.onTouchEnd,b=n.hoverClass,y=void 0===b?"button-hover":b,d=n.hoverStartTime,m=void 0===d?20:d,g=n.hoverStayTime,v=void 0===g?70:g,_=n.size,C=n.plain,P=n.loading,O=void 0!==P&&P,w=n.type,k=void 0===w?"default":w,E=i||l()("weui-btn",(_defineProperty(e={},""+y,this.state.hover&&!r),_defineProperty(e,"weui-btn_plain-"+k,C),_defineProperty(e,"weui-btn_"+k,!C&&k),_defineProperty(e,"weui-btn_mini","mini"===_),_defineProperty(e,"weui-btn_loading",O),_defineProperty(e,"weui-btn_disabled",r),e));return a.a.createElement("button",p({},c()(this.props,["hoverClass","onTouchStart","onTouchEnd"]),{"className":E,"style":s,"onClick":u,"disabled":r,"onTouchStart":function _onTouchStart(e){t.setState(function(){return{"touch":!0}}),y&&!r&&setTimeout(function(){t.state.touch&&t.setState(function(){return{"hover":!0}})},m),f&&f(e)},"onTouchEnd":function _onTouchEnd(e){t.setState(function(){return{"touch":!1}}),y&&!r&&setTimeout(function(){t.state.touch||t.setState(function(){return{"hover":!1}})},v),h&&h(e)}}),O&&a.a.createElement("i",{"class":"weui-loading"}),o)}}]),Button}(),b=n(109),y=n(82),d=n.n(y),m=n(83),g=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var v=function(e){function AtLoading(){return function loading_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtLoading),function loading_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtLoading.__proto__||Object.getPrototypeOf(AtLoading)).apply(this,arguments))}return function loading_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtLoading,m["a"]),g(AtLoading,[{"key":"render","value":function render(){var e=this.props,t=e.color,n=e.size,r={"width":n?""+o.a.pxTransform(parseInt(n)):"","height":n?""+o.a.pxTransform(parseInt(n)):""},s={"border":t?"1px solid "+t:"","border-color":t?t+" transparent transparent transparent":""},c=Object.assign({},s,r);return a.a.createElement(i.a,{"className":"at-loading","style":r},a.a.createElement(i.a,{"className":"at-loading__ring","style":c}),a.a.createElement(i.a,{"className":"at-loading__ring","style":c}),a.a.createElement(i.a,{"className":"at-loading__ring","style":c}))}}]),AtLoading}();v.defaultProps={"size":0,"color":""},v.propTypes={"size":d.a.oneOfType([d.a.string,d.a.number]),"color":d.a.oneOfType([d.a.string,d.a.number])},n.d(t,"a",function(){return O});var _=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();function button_defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}var C={"normal":"normal","small":"small"},P={"primary":"primary","secondary":"secondary"},O=function(e){function AtButton(){!function button_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtButton);var e=function button_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtButton.__proto__||Object.getPrototypeOf(AtButton)).apply(this,arguments));return e.state={"isWEB":o.a.getEnv()===o.a.ENV_TYPE.WEB,"isWEAPP":o.a.getEnv()===o.a.ENV_TYPE.WEAPP,"isALIPAY":o.a.getEnv()===o.a.ENV_TYPE.ALIPAY},e}return function button_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtButton,m["a"]),_(AtButton,[{"key":"onClick","value":function onClick(){var e;this.props.disabled||this.props.onClick&&(e=this.props).onClick.apply(e,arguments)}},{"key":"onGetUserInfo","value":function onGetUserInfo(){var e;this.props.onGetUserInfo&&(e=this.props).onGetUserInfo.apply(e,arguments)}},{"key":"onContact","value":function onContact(){var e;this.props.onContact&&(e=this.props).onContact.apply(e,arguments)}},{"key":"onGetPhoneNumber","value":function onGetPhoneNumber(){var e;this.props.onGetPhoneNumber&&(e=this.props).onGetPhoneNumber.apply(e,arguments)}},{"key":"onError","value":function onError(){var e;this.props.onError&&(e=this.props).onError.apply(e,arguments)}},{"key":"onOpenSetting","value":function onOpenSetting(){var e;this.props.onOpenSetting&&(e=this.props).onOpenSetting.apply(e,arguments)}},{"key":"onSumit","value":function onSumit(){this.state.isWEAPP&&this.$scope.triggerEvent("submit",arguments[0].detail,{"bubbles":!0,"composed":!0})}},{"key":"onReset","value":function onReset(){this.state.isWEAPP&&this.$scope.triggerEvent("reset",arguments[0].detail,{"bubbles":!0,"composed":!0})}},{"key":"render","value":function render(){var e,t=this.props,n=t.size,o=void 0===n?"normal":n,r=t.type,s=void 0===r?"":r,c=t.circle,u=t.full,p=t.loading,f=t.disabled,y=t.customStyle,d=t.formType,m=t.openType,g=t.lang,_=t.sessionFrom,O=t.sendMessageTitle,w=t.sendMessagePath,k=t.sendMessageImg,E=t.showMessageCard,T=t.appParameter,S=this.state,j=S.isWEAPP,x=S.isALIPAY,N=["at-button"],I=(button_defineProperty(e={},"at-button--"+C[o],C[o]),button_defineProperty(e,"at-button--disabled",f),button_defineProperty(e,"at-button--"+s,P[s]),button_defineProperty(e,"at-button--circle",c),button_defineProperty(e,"at-button--full",u),e),A="primary"===s?"#fff":"",F="small"===o?"30":0,R=void 0;p&&(R=a.a.createElement(i.a,{"className":"at-button__icon"},a.a.createElement(v,{"color":A,"size":F})),N.push("at-button--icon"));var B=a.a.createElement(h,{"className":"at-button__wxbutton","formType":d,"openType":m,"lang":g,"sessionFrom":_,"sendMessageTitle":O,"sendMessagePath":w,"sendMessageImg":k,"showMessageCard":E,"appParameter":T,"onGetUserInfo":this.onGetUserInfo.bind(this),"onGetPhoneNumber":this.onGetPhoneNumber.bind(this),"onOpenSetting":this.onOpenSetting.bind(this),"onError":this.onError.bind(this),"onContact":this.onContact.bind(this)});return a.a.createElement(i.a,{"className":l()(N,I,this.props.className),"style":y,"onClick":this.onClick.bind(this)},j&&!f&&a.a.createElement(b.a,{"reportSubmit":!0,"onSubmit":this.onSumit.bind(this),"onReset":this.onReset.bind(this)},B),x&&!f&&B,R,a.a.createElement(i.a,{"className":"at-button__text"},this.props.children))}}]),AtButton}();O.defaultProps={"size":"normal","type":"","circle":!1,"full":!1,"loading":!1,"disabled":!1,"customStyle":{},"onClick":function onClick(){},"formType":"","openType":"","lang":"en","sessionFrom":"","sendMessageTitle":"","sendMessagePath":"","sendMessageImg":"","showMessageCard":!1,"appParameter":"","onGetUserInfo":function onGetUserInfo(){},"onContact":function onContact(){},"onGetPhoneNumber":function onGetPhoneNumber(){},"onError":function onError(){},"onOpenSetting":function onOpenSetting(){}},O.propTypes={"size":d.a.oneOf(["normal","small"]),"type":d.a.oneOf(["primary","secondary",""]),"circle":d.a.bool,"full":d.a.bool,"loading":d.a.bool,"disabled":d.a.bool,"onClick":d.a.func,"customStyle":d.a.oneOfType([d.a.object,d.a.string]),"formType":d.a.oneOf(["submit","reset",""]),"openType":d.a.oneOf(["contact","share","getUserInfo","getPhoneNumber","launchApp","openSetting","feedback","getRealnameAuthInfo",""]),"lang":d.a.string,"sessionFrom":d.a.string,"sendMessageTitle":d.a.string,"sendMessagePath":d.a.string,"sendMessageImg":d.a.string,"showMessageCard":d.a.bool,"appParameter":d.a.string,"onGetUserInfo":d.a.func,"onContact":d.a.func,"onGetPhoneNumber":d.a.func,"onError":d.a.func,"onOpenSetting":d.a.func}},"122":function(e,t,n){"use strict";n(7);var o=n(2),r=n.n(o),a=n(19),i=n.n(a),s=n(5),c=n.n(s),u=(n(105),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}),l=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();function getTrueType(e,t,n){if(!e)throw new Error("unexpected type");return"search"===t&&(e="search"),n&&(e="password"),"digit"===e&&(e="number"),e}var p=function(e){function Input(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Input);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Input.__proto__||Object.getPrototypeOf(Input)).apply(this,arguments));return e.onInput=e.onInput.bind(e),e.onFocus=e.onFocus.bind(e),e.onBlur=e.onBlur.bind(e),e.onKeyDown=e.onKeyDown.bind(e),e.handleComposition=e.handleComposition.bind(e),e.isOnComposition=!1,e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Input,r.a.Component),l(Input,[{"key":"componentDidMount","value":function componentDidMount(){"file"===this.props.type&&this.inputRef.addEventListener("change",this.onInput)}},{"key":"componentWillUnMount","value":function componentWillUnMount(){"file"===this.props.type&&this.inputRef.removeEventListener("change",this.onInput)}},{"key":"onInput","value":function onInput(e){var t=this.props,n=t.type,o=t.maxLength,r=t.confirmType,a=t.password,i=t.onInput,onInput=void 0===i?"":i,s=t.onChange,c=void 0===s?"":s;if(!this.isOnComposition){var u=e.target.value,l=getTrueType(n,r,a);if("number"===l&&u&&o<=u.length&&(u=u.substring(0,o),e.target.value=u),Object.defineProperty(e,"detail",{"enumerable":!0,"value":{"value":u}}),!["number","file"].includes(l)){var p=e.target.selectionEnd;setTimeout(function(){e.target.selectionStart=p,e.target.selectionEnd=p})}if(c)return c(e);if(onInput)return onInput(e)}}},{"key":"onFocus","value":function onFocus(e){var onFocus=this.props.onFocus;Object.defineProperty(e,"detail",{"enumerable":!0,"value":{"value":e.target.value}}),onFocus&&onFocus(e)}},{"key":"onBlur","value":function onBlur(e){var onBlur=this.props.onBlur;Object.defineProperty(e,"detail",{"enumerable":!0,"value":{"value":e.target.value}}),onBlur&&onBlur(e)}},{"key":"onKeyDown","value":function onKeyDown(e){var t=this.props.onConfirm;13===e.keyCode&&t&&(Object.defineProperty(e,"detail",{"enumerable":!0,"value":{"value":e.target.value}}),t(e))}},{"key":"handleComposition","value":function handleComposition(e){e.target instanceof HTMLInputElement&&("compositionend"===e.type?this.isOnComposition=!1:this.isOnComposition=!0,this.onInput(e))}},{"key":"render","value":function render(){var e=this,t=this.props,n=t.className,o=void 0===n?"":n,a=t.placeholder,s=t.type,l=void 0===s?"text":s,p=t.password,f=t.disabled,h=t.maxLength,b=t.confirmType,y=void 0===b?"":b,d=t.focus,m=void 0!==d&&d,g=t.value,v=c()("weui-input",o),_=i()(this.props,["className","placeholder","disabled","max","onChange","onFocus","onBlur","type","focus"]);return"value"in this.props&&(_.value=function fixControlledValue(e){return void 0===e||null===e?"":e}(g)),r.a.createElement("input",u({"ref":function ref(t){e.inputRef=t,t&&m&&t.focus()}},_,{"className":v,"placeholder":a,"disabled":f,"max":h,"onInput":this.onInput,"onFocus":this.onFocus,"onBlur":this.onBlur,"autofocus":m,"onKeyDown":this.onKeyDown,"type":getTrueType(l,y,p),"onCompositionStart":this.handleComposition,"onCompositionEnd":this.handleComposition}))}}]),Input}();p.defaultProps={"type":"text"},t.a=p},"139":function(e,t,n){"use strict";n.d(t,"a",function(){return f});var o=n(2),r=n.n(o),a=n(109),i=n(82),s=n.n(i),c=n(5),u=n.n(c),l=n(83),p=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var f=function(e){function AtForm(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtForm),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtForm.__proto__||Object.getPrototypeOf(AtForm)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtForm,l["a"]),p(AtForm,[{"key":"onSubmit","value":function onSubmit(){var e;(e=this.props).onSubmit.apply(e,arguments)}},{"key":"onReset","value":function onReset(){var e;(e=this.props).onReset.apply(e,arguments)}},{"key":"render","value":function render(){var e=this.props,t=e.customStyle,n=e.className,o=e.reportSubmit,i=u()("at-form",n);return r.a.createElement(a.a,{"className":i,"style":t,"onSubmit":this.onSubmit.bind(this),"reportSubmit":o,"onReset":this.onReset.bind(this)},this.props.children)}}]),AtForm}();f.defaultProps={"customStyle":"","className":"","reportSubmit":!1,"onSubmit":function onSubmit(){},"onReset":function onReset(){}},f.propTypes={"customStyle":s.a.oneOfType([s.a.object,s.a.string]),"className":s.a.oneOfType([s.a.array,s.a.string]),"reportSubmit":s.a.bool,"onSubmit":s.a.func,"onReset":s.a.func}},"148":function(e,t,n){"use strict";var o=n(2),r=n.n(o),a=n(9),i=(n(7),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());var s=function(e){function Label(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Label),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Label.__proto__||Object.getPrototypeOf(Label)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Label,r.a.Component),i(Label,[{"key":"render","value":function render(){var e=function _objectWithoutProperties(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(this.props,[]);return r.a.createElement("label",e,this.props.children)}}]),Label}(),c=n(122),u=n(108),l=n(82),p=n.n(l),f=n(5),h=n.n(f),b=n(83);n.d(t,"a",function(){return d});var y=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();function input_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var d=function(e){function AtInput(){var e,t,n;!function input_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtInput);for(var o=arguments.length,r=Array(o),a=0;a<o;a++)r[a]=arguments[a];return t=n=input_possibleConstructorReturn(this,(e=AtInput.__proto__||Object.getPrototypeOf(AtInput)).call.apply(e,[this].concat(r))),n.onInput=function(e){for(var t,o=arguments.length,r=Array(o>1?o-1:0),a=1;a<o;a++)r[a-1]=arguments[a];return(t=n.props).onChange.apply(t,[e.target.value].concat(r))},n.onFocus=function(e){for(var t,o=arguments.length,r=Array(o>1?o-1:0),a=1;a<o;a++)r[a-1]=arguments[a];return(t=n.props).onFocus.apply(t,[e.target.value].concat(r))},n.onBlur=function(e){for(var t,o=arguments.length,r=Array(o>1?o-1:0),a=1;a<o;a++)r[a-1]=arguments[a];return(t=n.props).onBlur.apply(t,[e.target.value].concat(r))},n.onConfirm=function(e){for(var t,o=arguments.length,r=Array(o>1?o-1:0),a=1;a<o;a++)r[a-1]=arguments[a];return(t=n.props).onConfirm.apply(t,[e.target.value].concat(r))},n.onClick=function(){var e;return!n.props.editable&&(e=n.props).onClick.apply(e,arguments)},n.clearValue=function(){for(var e,t=arguments.length,o=Array(t),r=0;r<t;r++)o[r]=arguments[r];return(e=n.props).onChange.apply(e,[""].concat(o))},n.onErrorClick=function(){var e;return(e=n.props).onErrorClick.apply(e,arguments)},input_possibleConstructorReturn(n,t)}return function input_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtInput,b["a"]),y(AtInput,[{"key":"render","value":function render(){var e=this.props,t=e.className,n=e.customStyle,o=e.name,i=e.cursorSpacing,l=e.confirmType,p=e.cursor,f=e.selectionStart,b=e.selectionEnd,y=e.adjustPosition,d=e.border,m=e.title,g=e.error,v=e.clear,_=e.placeholder,C=e.placeholderStyle,P=e.placeholderClass,O=e.autoFocus,w=e.focus,k=e.value,E=function getInputProps(e){var t={"type":e.type,"maxLength":e.maxLength,"disabled":e.disabled,"password":!1};switch(t.type){case"phone":t.type="number",t.maxLength=11;break;case"password":t.password=!0}return e.disabled||e.editable||(t.disabled=!0),t}(this.props),T=E.type,S=E.maxLength,j=E.disabled,x=E.password,N=h()("at-input",{"at-input--without-border":!d},t),I=h()("at-input__container",{"at-input--error":g,"at-input--disabled":j}),A=h()("at-input__overlay",{"at-input__overlay--hidden":!j}),F=h()("placeholder",P);return r.a.createElement(a.a,{"className":N,"style":n},r.a.createElement(a.a,{"className":I},r.a.createElement(a.a,{"className":A,"onClick":this.onClick}),m&&r.a.createElement(s,{"className":"at-input__title","for":o},m),r.a.createElement(c.a,{"className":"at-input__input","id":o,"name":o,"type":T,"password":x,"placeholderStyle":C,"placeholderClass":F,"placeholder":_,"cursorSpacing":i,"maxLength":S,"autoFocus":O,"focus":w,"value":k,"confirmType":l,"cursor":p,"selectionStart":f,"selectionEnd":b,"adjustPosition":y,"onInput":this.onInput,"onFocus":this.onFocus,"onBlur":this.onBlur,"onConfirm":this.onConfirm}),v&&k&&r.a.createElement(a.a,{"className":"at-input__icon","onTouchStart":this.clearValue},r.a.createElement(u.a,{"className":"at-icon at-icon-close-circle at-input__icon-close"})),g&&r.a.createElement(a.a,{"className":"at-input__icon","onTouchStart":this.onErrorClick},r.a.createElement(u.a,{"className":"at-icon at-icon-alert-circle at-input__icon-alert"})),r.a.createElement(a.a,{"className":"at-input__children"},this.props.children)))}}]),AtInput}();d.defaultProps={"className":"","customStyle":"","value":"","name":"","placeholder":"","placeholderStyle":"","placeholderClass":"","title":"","cursorSpacing":50,"confirmType":"完成","cursor":0,"selectionStart":-1,"selectionEnd":-1,"adjustPosition":!0,"maxLength":140,"type":"text","disabled":!1,"border":!0,"editable":!0,"error":!1,"clear":!1,"autoFocus":!1,"focus":!1,"onChange":function onChange(){},"onFocus":function onFocus(){},"onBlur":function onBlur(){},"onConfirm":function onConfirm(){},"onErrorClick":function onErrorClick(){},"onClick":function onClick(){}},d.propTypes={"className":p.a.oneOfType([p.a.string,p.a.array]),"customStyle":p.a.oneOfType([p.a.string,p.a.object]),"value":p.a.oneOfType([p.a.string,p.a.number]),"name":p.a.string,"placeholder":p.a.string,"placeholderStyle":p.a.string,"placeholderClass":p.a.string,"title":p.a.string,"confirmType":p.a.string,"cursor":p.a.oneOfType([p.a.string,p.a.number]),"selectionStart":p.a.oneOfType([p.a.string,p.a.number]),"selectionEnd":p.a.oneOfType([p.a.string,p.a.number]),"adjustPosition":p.a.bool,"cursorSpacing":p.a.oneOfType([p.a.string,p.a.number]),"maxLength":p.a.oneOfType([p.a.string,p.a.number]),"type":p.a.string,"disabled":p.a.bool,"border":p.a.bool,"editable":p.a.bool,"error":p.a.bool,"clear":p.a.bool,"backgroundColor":p.a.string,"autoFocus":p.a.bool,"focus":p.a.bool,"onChange":p.a.func,"onFocus":p.a.func,"onBlur":p.a.func,"onConfirm":p.a.func,"onErrorClick":p.a.func,"onClick":p.a.func}},"82":function(e,t,n){e.exports=n(85)()},"83":function(e,t,n){"use strict";n.d(t,"a",function(){return u});var o,r,a=n(1),i=(n(2),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}()),s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var c=function objectToString(e){if(e&&"object"===(void 0===e?"undefined":s(e))){var t="";return Object.keys(e).forEach(function(n){var o=n.replace(/([A-Z])/g,"-$1").toLowerCase();t+=o+":"+e[n]+";"}),t}return e&&"string"==typeof e?e:""},u=(r=o=function(e){function AtComponent(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtComponent),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtComponent.__proto__||Object.getPrototypeOf(AtComponent)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtComponent,a["a"].Component),i(AtComponent,[{"key":"mergeStyle","value":function mergeStyle(e,t){return e&&"object"===(void 0===e?"undefined":s(e))&&t&&"object"===(void 0===t?"undefined":s(t))?Object.assign({},e,t):c(e)+c(t)}}]),AtComponent}(),o.options={"addGlobalClass":!0},r)},"85":function(e,t,n){"use strict";var o=n(86);function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction,e.exports=function(){function shim(e,t,n,r,a,i){if(i!==o){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function getShim(){return shim}shim.isRequired=shim;var e={"array":shim,"bool":shim,"func":shim,"number":shim,"object":shim,"string":shim,"symbol":shim,"any":shim,"arrayOf":getShim,"element":shim,"elementType":shim,"instanceOf":getShim,"node":shim,"objectOf":getShim,"oneOf":getShim,"oneOfType":getShim,"shape":getShim,"exact":getShim,"checkPropTypes":emptyFunctionWithReset,"resetWarningCache":emptyFunction};return e.PropTypes=e,e}},"86":function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"91":function(e,t,n){var o=n(92);"string"==typeof o&&(o=[[e.i,o,""]]);var r={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(18)(o,r);o.locals&&(e.exports=o.locals)},"92":function(e,t,n){(e.exports=n(17)(!1)).push([e.i,".taro-text {\n  -moz-user-select: none;\n  -webkit-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.taro-text__selectable {\n  -moz-user-select: text;\n  -webkit-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n}",""])},"94":function(e,t,n){var o=n(95);"string"==typeof o&&(o=[[e.i,o,""]]);var r={"sourceMap":!1,"insertAt":"top","hmr":!0,"transform":void 0,"insertInto":void 0};n(18)(o,r);o.locals&&(e.exports=o.locals)},"95":function(e,t,n){(e.exports=n(17)(!1)).push([e.i,"button {\n  position: relative;\n  display: block;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 14px;\n  padding-right: 14px;\n  box-sizing: border-box;\n  font-size: 18px;\n  text-align: center;\n  text-decoration: none;\n  line-height: 2.55555556;\n  border-radius: 5px;\n  -webkit-tap-highlight-color: transparent;\n  overflow: hidden;\n  color: #000000;\n  background-color: #F8F8F8;\n}\n\nbutton[plain] {\n  color: #353535;\n  border: 1px solid #353535;\n  background-color: transparent;\n}\n\nbutton[plain][disabled] {\n  color: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  background-color: #F7F7F7;\n}\n\nbutton[type=primary] {\n  color: #FFFFFF;\n  background-color: #1AAD19;\n}\n\nbutton[type=primary][plain] {\n  color: #1aad19;\n  border: 1px solid #1aad19;\n  background-color: transparent;\n}\n\nbutton[type=primary][plain][disabled] {\n  color: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  background-color: #F7F7F7;\n}",""])}}]);