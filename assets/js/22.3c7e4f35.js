(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{219:function(t,n,o){},220:function(t,n,o){},291:function(t,n,o){"use strict";var e=o(219);o.n(e).a},293:function(t,n,o){"use strict";var e=o(220);o.n(e).a},301:function(t,n,o){"use strict";o.r(n);var e=o(221),s=o(170);o(0).a.use(e.a);var c={name:"toast-demo1",components:{"g-button":s.a},data:function(){return{content:"\n      <style>\n        .gulu-toast {\n          z-index: 30;\n        }\n      </style>\n      <div>\n        <g-button @click=\"onClickButton\">上方弹出</g-button>\n      </div>\n      methods: {\n        onClickButton () {\n          this.$toast('你知道我在等你吗？', {\n            closeButton: {\n              text: '知道了',\n              callback: () => {\n                console.log('他说知道了')\n              }\n            }\n          })\n        }\n      },\n  "}},methods:{onClickButton:function(){this.$toast('<strong style="color:red;">加粗的提示</strong>',{enableHtml:!0})}}},i=(o(291),o(293),o(1)),u=Object(i.a)(c,function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticStyle:{"padding-top":"16px"}},[o("h2",[t._v("支持 HTML")]),t._v(" "),t._m(0),t._v(" "),o("div",[o("g-button",{on:{click:t.onClickButton}},[t._v("上方弹出")])],1),t._v(" "),t._m(1),t._v(" "),o("pre",[o("code",[t._v(t._s(t.content))])])])},[function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("预览")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("p",[n("strong",[this._v("代码")])])}],!1,null,"de3fd002",null);u.options.__file="toast-demo3.vue";n.default=u.exports}}]);