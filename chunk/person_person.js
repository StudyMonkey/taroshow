(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"107":function(e,t,n){},"123":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return f});var o=n(119),r=n(1),c=n(2),a=n.n(c),i=n(7),u=n(95),s=n(77),l=(n(107),n(117)),p=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var f=function(e){function Person(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Person);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Person.__proto__||Object.getPrototypeOf(Person)).call(this));return e.handleLogout=function(){Object(o.b)("person"),r.a.redirectTo({"url":"/pages/login/login"})},e.handleGoSearch=function(e){console.log(e),r.a.navigateTo({"url":"/pages/search/search?type="+e})},e.state={"person":Object(s.c)("person")},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Person,r["a"].Component),p(Person,[{"key":"render","value":function render(){return a.a.createElement(i.a,null,a.a.createElement(i.a,{"className":"imagePersonWrap"},a.a.createElement(u.a,{"className":"bgImage","src":"","alt":"底部图片"}),a.a.createElement(i.a,{"className":"personCon"}),a.a.createElement(l.a,{"onClick":this.handleGoSearch.bind(this,1)},"查询天气"),a.a.createElement(l.a,{"onClick":this.handleGoSearch.bind(this,2)},"查询古诗词作者信息"),this.state.person?a.a.createElement(l.a,{"onClick":this.handleLogout,"type":"danger","className":"logoutBtn"},"退出登录"):a.a.createElement(l.a,{"onClick":this.handleLogin,"type":"primary","className":"logoutBtn"},"登录")))}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"componentDidHide","value":function componentDidHide(){}}]),Person}()},"77":function(e,t,n){"use strict";n.d(t,"a",function(){return get}),n.d(t,"b",function(){return getApi}),n.d(t,"c",function(){return getStorage}),n.d(t,"d",function(){return showToast});var o=n(132),r=n(118),c=n(119),a=(n(2),"https://www.apiopen.top/"),i="https://api.apiopen.top/";function get(e,t){return new Promise(function(n,c){Object(o.b)({"title":"加载中..."}),Object(r.a)({"url":a+e,"data":t,"success":function success(e){return n(e)},"error":function error(e){return c(e)},"complete":function complete(){Object(o.a)()}})})}function getApi(e,t){return new Promise(function(n,c){Object(o.b)({"title":"加载中..."}),Object(r.a)({"url":i+e,"data":t,"success":function success(e){return n(e)},"error":function error(e){return c(e)},"complete":function complete(){Object(o.a)()}})})}function getStorage(e){var t=Object(c.a)(e);return t?JSON.stringify(t):""}function showToast(e){Object(o.c)({"title":e,"icon":"none"})}}}]);