(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"123":function(e,t,n){},"140":function(e,t,n){"use strict";n.r(t);var o=n(81),r=n(1),a=n(2),i=n.n(a),c=n(9),l=n(139),s=n(148),u=n(110),p=n(11),f=n(87),h=(n(123),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}),d=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var b=function(e){function Login(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Login);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Login.__proto__||Object.getPrototypeOf(Login)).call(this,e));return t.config={"navigationBarTitleText":"登录"},t.handleSubmit=function(){t.state.phone&&t.state.passwd?(console.log(t.state),Object(p.b)("login",t.state).then(function(e){var t=e.data,n=t.code,a=t.msg,i=t.data,c=h({},i);200!==n?Object(p.f)(a):(Object(p.f)("登录成功"),Object(o.c)("person",c),r.a.redirectTo({"url":"/pages/person/person"}),console.log(e))})):Object(p.f)("用户名或密码不能为空")},t.handleUserInput=function(e){t.setState({"phone":e})},t.handlePasInput=function(e){t.setState({"passwd":e})},t.handleBackClick=function(){r.a.navigateBack(-1)},t.handleGoRegist=function(){r.a.navigateTo({"url":"/pages/regist/regist"})},t.state={"key":"00d91e8e0cca2b76f515926a36db68f5","phone":"","passwd":""},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Login,r["a"].Component),d(Login,[{"key":"render","value":function render(){return i.a.createElement(c.a,null,i.a.createElement(f.a,{"navTitle":"登陆"}),i.a.createElement(l.a,null,i.a.createElement(s.a,{"placeholder":"请输入用户名","title":"手机号码","type":"phone","value":this.state.phone,"onChange":this.handleUserInput}),i.a.createElement(s.a,{"placeholder":"请输入密码","title":"密码","type":"password","value":this.state.passwd,"onChange":this.handlePasInput}),i.a.createElement(u.a,{"className":"loginBtn","type":"primary","onClick":this.handleSubmit,"formType":"submit"},"登录"),i.a.createElement(u.a,{"className":"loginBtn","type":"primary","onClick":this.handleGoRegist},"注册")))}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"componentDidHide","value":function componentDidHide(){}}]),Login}();t.default=b},"87":function(e,t,n){"use strict";n.d(t,"a",function(){return s});var o=n(1),r=n(2),a=n.n(r),i=n(9),c=n(104),l=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=function(e){function NavBar(){var e,t,n;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,NavBar);for(var r=arguments.length,a=Array(r),i=0;i<r;i++)a[i]=arguments[i];return t=n=_possibleConstructorReturn(this,(e=NavBar.__proto__||Object.getPrototypeOf(NavBar)).call.apply(e,[this].concat(a))),n.state={"isH5":!0},n.handleBackClick=function(){o.a.navigateBack(-1)},_possibleConstructorReturn(n,t)}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(NavBar,o["a"].Component),l(NavBar,[{"key":"render","value":function render(){var e=this.props.navTitle,t=this.state.isH5;return a.a.createElement(i.a,null,t?a.a.createElement(c.a,{"leftIconType":"chevron-left","rightFirstIconType":"none","color":"#000","title":e,"onClickLeftIcon":this.handleBackClick}):null)}}]),NavBar}()}}]);