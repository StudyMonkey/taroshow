(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"114":function(e,t,n){},"127":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d});var o=n(122),a=n(1),r=n(2),i=n.n(r),c=n(7),s=n(126),l=n(137),u=n(135),p=n(77),f=(n(114),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}),h=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var d=function(e){function Login(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Login);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Login.__proto__||Object.getPrototypeOf(Login)).call(this));return e.config={"navigationBarTitleText":"登录"},e.handleSubmit=function(){e.state.phone&&e.state.passwd?(console.log(e.state),Object(p.b)("login",e.state).then(function(e){var t=e.data,n=t.code,a=t.msg,r=t.data,i=f({},r);200!==n?Object(p.f)(a):(Object(p.f)("登录成功"),Object(o.c)("person",i),console.log(e))})):Object(p.f)("用户名或密码不能为空")},e.handleUserInput=function(t){e.setState({"phone":t})},e.handlePasInput=function(t){e.setState({"passwd":t})},e.handleGoRegist=function(){a.a.navigateTo({"url":"/pages/regist/regist"})},e.state={"key":"00d91e8e0cca2b76f515926a36db68f5","phone":"","passwd":""},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Login,a["a"].Component),h(Login,[{"key":"render","value":function render(){return i.a.createElement(c.a,null,i.a.createElement(s.a,null,i.a.createElement(l.a,{"placeholder":"请输入用户名","title":"手机号码","type":"phone","value":this.state.phone,"onChange":this.handleUserInput}),i.a.createElement(l.a,{"placeholder":"请输入密码","title":"密码","type":"password","value":this.state.passwd,"onChange":this.handlePasInput}),i.a.createElement(u.a,{"className":"loginBtn","type":"primary","onClick":this.handleSubmit,"formType":"submit"},"登录"),i.a.createElement(u.a,{"className":"loginBtn","type":"primary","onClick":this.handleGoRegist},"注册")))}},{"key":"componentDidMount","value":function componentDidMount(){}},{"key":"componentDidShow","value":function componentDidShow(){}},{"key":"componentDidHide","value":function componentDidHide(){}}]),Login}()}}]);