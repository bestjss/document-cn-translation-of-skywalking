(window.webpackJsonp=window.webpackJsonp||[]).push([[314],{319:function(t,s,e){"use strict";e.r(s);var r=e(0),i=Object(r.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),e("p",[t._v("服务网格探针使用了服务网格实现者中提供的可扩展机制，比如 Istio。")]),t._v(" "),t._m(1),t._v(" "),e("p",[t._v("下面的解释来自Istio文档。")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),e("p",[t._v("从探针中，您可以看到在这种探针中一定没有相关的跟踪，那么为什么 SkyWalking 平台仍然可以工作？")]),t._v(" "),e("p",[t._v("服务网格探针从每个请求收集遥测数据，因此它知道源、目标、端点、延迟和状态。通过这些，后端可以通过将这些调用合并为行来描述整个拓扑图，以及每个节点通过传入请求的度量。后端解析跟踪数据，请求相同的度量数据。因此，正确的表述是：")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),e("ul",[e("li",[t._v("如果你想使用服务网格探针，阅读 "),e("router-link",{attrs:{to:"./../setup/#on-service-mesh"}},[t._v("SkyWalking 关于服务网格的设定")]),t._v(" 文档.")],1)])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"服务网格探针"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务网格探针"}},[this._v("#")]),this._v(" 服务网格探针")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"什么是服务网格"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是服务网格"}},[this._v("#")]),this._v(" 什么是服务网格")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("服务网格通常用于描述组成此类应用程序的微服务网络以及它们之间的交互。随着服务网格的大小和复杂性的增长，它会变得更难理解和管理。它需要包括发现、负载平衡、故障恢复、度量和监视以及更复杂的操作需求A/B测试、金丝雀发布、限流、访问控制和端到端身份验证。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"探针从哪里采集数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#探针从哪里采集数据"}},[this._v("#")]),this._v(" 探针从哪里采集数据")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Istio 是一个非常典型的服务网格的设计和实现。它定义了 "),s("strong",[this._v("控制平面")]),this._v(" 和 "),s("strong",[this._v("数据平面")]),this._v("，被广泛使用。下面是 Istio 的架构 :")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"https://istio.io/latest/docs/ops/deployment/architecture/arch.svg",alt:"Istio 架构"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("服务网格探针可以选择从 "),s("strong",[this._v("控制平面")]),this._v(" 和 "),s("strong",[this._v("数据平面")]),this._v(" 采集数据。在 Istio 中，指的是从 Mixer(Control Panel) 或者 Envoy sidecar(Data Panel) 中采集遥测数据。探针从客户端和服务器端收集每个请求的两个遥测实体，它们其实是相同的数据。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"服务网格如何使后端工作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务网格如何使后端工作"}},[this._v("#")]),this._v(" 服务网格如何使后端工作")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("服务网格度量就是跟踪解析器生成的度量。他们是相同的。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"下一步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下一步"}},[this._v("#")]),this._v(" 下一步")])}],!1,null,null,null);s.default=i.exports}}]);