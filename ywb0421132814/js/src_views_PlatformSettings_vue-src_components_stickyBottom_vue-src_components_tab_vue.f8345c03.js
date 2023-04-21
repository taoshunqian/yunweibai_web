"use strict";
(self["webpackChunkyunweibao_ad"] = self["webpackChunkyunweibao_ad"] || []).push([["src_views_PlatformSettings_vue-src_components_stickyBottom_vue-src_components_tab_vue"],{

/***/ "./node_modules/_thread-loader@3.0.4@thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-41!./node_modules/_vue-loader@17.0.0@vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/PlatformSettings.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_thread-loader@3.0.4@thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-41!./node_modules/_vue-loader@17.0.0@vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/PlatformSettings.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/_vue@3.2.39@vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vant */ "./node_modules/_vant@3.6.2@vant/es/cell-group/index.mjs");
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vant */ "./node_modules/_vant@3.6.2@vant/es/cell/index.mjs");
/* harmony import */ var _utlis_QueryStr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utlis/QueryStr */ "./src/utlis/QueryStr.js");
/* harmony import */ var _mixins_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mixins/index.js */ "./src/mixins/index.js");




var _hoisted_1 = {
  style: {
    "margin-right": "10px",
    "font-size": "13px"
  }
};
var _hoisted_2 = {
  style: {
    "margin": "0px",
    "padding-top": "5px",
    "font-size": "13px"
  }
};
var _hoisted_3 = {
  style: {
    "margin": "0px",
    "padding-top": "5px",
    "font-size": "13px"
  }
};
var _hoisted_4 = {
  style: {
    "font-size": "13px"
  }
};
var _hoisted_5 = {
  style: {
    "margin": "0px"
  }
};
var _hoisted_6 = {
  style: {
    "margin-top": "5px"
  }
};
 // Checkbox




/* harmony default export */ __webpack_exports__["default"] = ({
  __name: 'PlatformSettings',
  setup: function setup(__props) {
    var _mixins = (0,_mixins_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(),
        t = _mixins.t,
        postAN = _mixins.postAN,
        TabHeaders = _mixins.TabHeaders,
        StickyBottom = _mixins.StickyBottom,
        useRoute = _mixins.useRoute,
        router = _mixins.router,
        callJSResult_Status = _mixins.callJSResult_Status;

    var _inject = (0,vue__WEBPACK_IMPORTED_MODULE_3__.inject)("lang"),
        lang = _inject.lang;

    var International = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(lang.value);
    var route = useRoute();
    var guideRouter = route.query.guide; // 标题

    var navTitle = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(t("platformSettings.navTitle"));
    var sendNum = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(1);
    var deviceState = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)([]);
    var maxNum = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(0);
    var resultAll = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)("");
    var jtsvrStatus = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)([]);
    var guide = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(false); // 是否是向导模式

    var getResultCmds = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)([]); // 下一步

    var BottomNext = function BottomNext() {};

    var settingServe = function settingServe(e, index) {
      console.log(e);
      router.push({
        path: "/ServeInfo",
        query: {
          item: e,
          index: index,
          state: deviceState.value[index]
        }
      });
    };

    function filterServeState(name) {
      var ti = "";

      switch (name) {
        case "1":
          ti = t("platformSettings.serveState[0]");
          break;

        case "0":
          ti = t("platformSettings.serveState[1]");
          break;

        default:
          ti = t("platformSettings.serveState[2]");
      }

      return ti;
    }

    function filterDeviceState(name) {
      // let ti = "";
      var device = t("platformSettings.deviceState[0]").split(","); // console.log(name)

      return device[name]; // switch (name) {
      //   case "1":
      //     ti = t("platformSettings.deviceState[0]");
      //     break;
      //   default:
      //     ti = t("platformSettings.deviceState[1]");
      //   // case "0":
      //   //   ti = t("platformSettings.deviceState[1]");
      //   //   break;
      //   // default:
      //   //   ti = t("platformSettings.deviceState[2]");
      // }
      // return ti;
    }

    (0,vue__WEBPACK_IMPORTED_MODULE_3__.defineComponent)({
      name: "yunweibao-SettingsIP"
    }); // -------------------------------------------------------------------
    // 安卓回调函数

    var callJSResult = function callJSResult(str) {
      var cmds = str.split(";")[0];

      if (cmds.indexOf("JTNUM") !== -1 || cmds.length == 0) {
        maxNum.value = cmds.split(",")[1];

        if (maxNum.value == "" || maxNum.value == undefined || maxNum.value == null) {
          maxNum.value = 8;
        }

        if (sendNum.value == 1) {
          postAN.ANSend("$JTSVR");
        }

        return false;
      }

      if (sendNum.value == +maxNum.value + 1) {
        resultAll.value += cmds;
        var cmd = [];
        var items = resultAll.value.split("!");
        var devices = items[items.length - 1].split(",");
        var state = [];

        for (var k = 0; k < devices.length; k++) {
          if (devices[k].indexOf("JTSVR") !== -1) {
            state.push(devices[k].split("*")[1]);
          }
        } // console.log(state);


        deviceState.value = state;
        var net = cmds.split(",");
        var jtsvrState = [];

        for (var j = 0; j < net.length; j++) {
          if (net[j].indexOf("JTSVR") !== -1) {
            jtsvrState.push(net[j]);
          }
        }

        jtsvrStatus.value = jtsvrState;

        for (var i = 0; i < items.length - 1; i++) {
          var item = items[i].split(",");
          cmd.push(item);
        }

        getResultCmds.value = cmd;
        return false;
      }

      resultAll.value += cmds + "!";

      if (sendNum.value == maxNum.value) {
        postAN.ANSend("$NETSTATE");
      } else {
        if (sendNum.value <= maxNum.value) {
          postAN.ANSend("$JTSVR" + [sendNum.value + 1]);
        }
      }

      sendNum.value++;
    }; // 向安卓发送指令


    var androidStatus_fn = function androidStatus_fn() {
      var param = "";

      if (guideRouter) {
        var guideIndex = sessionStorage.guideIndex;
        guide.value = true;
        var guideArr = JSON.parse(sessionStorage.guide);
        param = guideArr[guideIndex].split("@");
      } else {
        param = (0,_utlis_QueryStr__WEBPACK_IMPORTED_MODULE_4__.getQueryString)("param").split("@"); // 解析出指令
      }

      console.log(param); // var param = getQueryString("param").split("@"); // 解析出指令
      // if (param[7] != undefined) {
      //   return false;
      // }

      postAN.ANSend("$JTNUM"); // postAN.ANSend("$JTSVR2,");
      // postAN.ANSend("$JTSVR3,");
      // postAN.ANSend("$JTSVR4,");
      // postAN.ANSend("$JTSVR5,");
      // postAN.ANSend("$NETSTATE");
    };

    androidStatus_fn();
    (0,vue__WEBPACK_IMPORTED_MODULE_3__.onMounted)(function () {
      window.callJSResult = callJSResult;
      window.callJSResult_Status = callJSResult_Status;
    });
    return function (_ctx, _cache) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_3__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_3__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_3__.createVNode)((0,vue__WEBPACK_IMPORTED_MODULE_3__.unref)(TabHeaders), {
        navTitle: navTitle.value,
        leftArrow: false
      }, null, 8, ["navTitle"]), ((0,vue__WEBPACK_IMPORTED_MODULE_3__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_3__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_3__.renderList)(getResultCmds.value, function (item, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_3__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_3__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_3__.unref)(vant__WEBPACK_IMPORTED_MODULE_6__.CellGroup), {
          inset: "",
          style: {
            "margin": "10px"
          },
          "class": "cellGroup",
          key: index,
          onClick: function onClick($event) {
            return settingServe(item, index);
          }
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_3__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_3__.createVNode)((0,vue__WEBPACK_IMPORTED_MODULE_3__.unref)(vant__WEBPACK_IMPORTED_MODULE_7__.Cell), null, {
              title: (0,vue__WEBPACK_IMPORTED_MODULE_3__.withCtx)(function () {
                return [(0,vue__WEBPACK_IMPORTED_MODULE_3__.createElementVNode)("label", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_3__.toDisplayString)(_ctx.$t("platformSettings.title[0]")) + ": " + (0,vue__WEBPACK_IMPORTED_MODULE_3__.toDisplayString)(index + 1), 1), (0,vue__WEBPACK_IMPORTED_MODULE_3__.createElementVNode)("p", _hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_3__.toDisplayString)(_ctx.$t("platformSettings.title[1]")) + ": " + (0,vue__WEBPACK_IMPORTED_MODULE_3__.toDisplayString)(item[1]), 1), (0,vue__WEBPACK_IMPORTED_MODULE_3__.createElementVNode)("p", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_3__.toDisplayString)(_ctx.$t("platformSettings.title[2]")) + ": " + (0,vue__WEBPACK_IMPORTED_MODULE_3__.toDisplayString)(item[2]), 1)];
              }),
              "right-icon": (0,vue__WEBPACK_IMPORTED_MODULE_3__.withCtx)(function () {
                return [(0,vue__WEBPACK_IMPORTED_MODULE_3__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_3__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_3__.createElementVNode)("p", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_3__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_3__.toDisplayString)(_ctx.$t("platformSettings.title[3]")) + ": ", 1), (0,vue__WEBPACK_IMPORTED_MODULE_3__.createElementVNode)("span", {
                  style: (0,vue__WEBPACK_IMPORTED_MODULE_3__.normalizeStyle)({
                    color: item[3] == 1 ? '#5fb878' : 'red'
                  })
                }, (0,vue__WEBPACK_IMPORTED_MODULE_3__.toDisplayString)(filterServeState(item[3])), 5)], 512), [[vue__WEBPACK_IMPORTED_MODULE_3__.vShow, International.value]]), (0,vue__WEBPACK_IMPORTED_MODULE_3__.createElementVNode)("p", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_3__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_3__.toDisplayString)(_ctx.$t("platformSettings.title[4]")) + ": ", 1), (0,vue__WEBPACK_IMPORTED_MODULE_3__.createElementVNode)("span", {
                  style: (0,vue__WEBPACK_IMPORTED_MODULE_3__.normalizeStyle)({
                    color: deviceState.value[index] == 1 ? '#5fb878' : 'red'
                  })
                }, (0,vue__WEBPACK_IMPORTED_MODULE_3__.toDisplayString)(filterDeviceState(deviceState.value[index])), 5)])])];
              }),
              _: 2
            }, 1024)];
          }),
          _: 2
        }, 1032, ["onClick"]);
      }), 128)), (0,vue__WEBPACK_IMPORTED_MODULE_3__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_3__.createVNode)((0,vue__WEBPACK_IMPORTED_MODULE_3__.unref)(StickyBottom), {
        guide: guide.value,
        onBottomNext: BottomNext
      }, null, 8, ["guide"]), [[vue__WEBPACK_IMPORTED_MODULE_3__.vShow, guide.value]])], 64);
    };
  }
});

/***/ }),

/***/ "./src/views/PlatformSettings.vue":
/*!****************************************!*\
  !*** ./src/views/PlatformSettings.vue ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PlatformSettings_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlatformSettings.vue?vue&type=script&setup=true&lang=js */ "./src/views/PlatformSettings.vue?vue&type=script&setup=true&lang=js");



const __exports__ = _PlatformSettings_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"];

/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/PlatformSettings.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************!*\
  !*** ./src/views/PlatformSettings.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_thread_loader_3_0_4_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_1_node_modules_babel_loader_lib_index_js_clonedRuleSet_41_node_modules_vue_loader_17_0_0_vue_loader_dist_index_js_ruleSet_0_use_0_PlatformSettings_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_thread_loader_3_0_4_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_1_node_modules_babel_loader_lib_index_js_clonedRuleSet_41_node_modules_vue_loader_17_0_0_vue_loader_dist_index_js_ruleSet_0_use_0_PlatformSettings_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_thread-loader@3.0.4@thread-loader/dist/cjs.js!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-41!../../node_modules/_vue-loader@17.0.0@vue-loader/dist/index.js??ruleSet[0].use[0]!./PlatformSettings.vue?vue&type=script&setup=true&lang=js */ "./node_modules/_thread-loader@3.0.4@thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-41!./node_modules/_vue-loader@17.0.0@vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/PlatformSettings.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./node_modules/_vant@3.6.2@vant/es/cell-group/CellGroup.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/_vant@3.6.2@vant/es/cell-group/CellGroup.mjs ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ stdin_default; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/_vue@3.2.39@vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _utils_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/index.mjs */ "./node_modules/_vant@3.6.2@vant/es/utils/create.mjs");
/* harmony import */ var _utils_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/index.mjs */ "./node_modules/_vant@3.6.2@vant/es/utils/props.mjs");
/* harmony import */ var _utils_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/index.mjs */ "./node_modules/_vant@3.6.2@vant/es/utils/constant.mjs");



const [name, bem] = (0,_utils_index_mjs__WEBPACK_IMPORTED_MODULE_1__.createNamespace)("cell-group");
const cellGroupProps = {
  title: String,
  inset: Boolean,
  border: _utils_index_mjs__WEBPACK_IMPORTED_MODULE_2__.truthProp
};
var stdin_default = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name,
  inheritAttrs: false,
  props: cellGroupProps,

  setup(props, {
    slots,
    attrs
  }) {
    const renderGroup = () => {
      var _a;

      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
        "class": [bem({
          inset: props.inset
        }), {
          [_utils_index_mjs__WEBPACK_IMPORTED_MODULE_3__.BORDER_TOP_BOTTOM]: props.border && !props.inset
        }]
      }, attrs), [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };

    const renderTitle = () => (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
      "class": bem("title", {
        inset: props.inset
      })
    }, [slots.title ? slots.title() : props.title]);

    return () => {
      if (props.title || slots.title) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [renderTitle(), renderGroup()]);
      }

      return renderGroup();
    };
  }

});


/***/ }),

/***/ "./node_modules/_vant@3.6.2@vant/es/cell-group/index.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/_vant@3.6.2@vant/es/cell-group/index.mjs ***!
  \***************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CellGroup": function() { return /* binding */ CellGroup; },
/* harmony export */   "default": function() { return /* binding */ stdin_default; }
/* harmony export */ });
/* harmony import */ var _utils_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index.mjs */ "./node_modules/_vant@3.6.2@vant/es/utils/with-install.mjs");
/* harmony import */ var _CellGroup_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CellGroup.mjs */ "./node_modules/_vant@3.6.2@vant/es/cell-group/CellGroup.mjs");


const CellGroup = (0,_utils_index_mjs__WEBPACK_IMPORTED_MODULE_0__.withInstall)(_CellGroup_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]);
var stdin_default = CellGroup;


/***/ }),

/***/ "./node_modules/_vant@3.6.2@vant/es/cell/Cell.mjs":
/*!********************************************************!*\
  !*** ./node_modules/_vant@3.6.2@vant/es/cell/Cell.mjs ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cellSharedProps": function() { return /* binding */ cellSharedProps; },
/* harmony export */   "default": function() { return /* binding */ stdin_default; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/_vue@3.2.39@vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _utils_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/index.mjs */ "./node_modules/_vant@3.6.2@vant/es/utils/create.mjs");
/* harmony import */ var _utils_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/index.mjs */ "./node_modules/_vant@3.6.2@vant/es/utils/props.mjs");
/* harmony import */ var _utils_index_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/index.mjs */ "./node_modules/_vant@3.6.2@vant/es/utils/basic.mjs");
/* harmony import */ var _utils_index_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/index.mjs */ "./node_modules/_vant@3.6.2@vant/es/utils/validate.mjs");
/* harmony import */ var _composables_use_route_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../composables/use-route.mjs */ "./node_modules/_vant@3.6.2@vant/es/composables/use-route.mjs");
/* harmony import */ var _icon_index_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icon/index.mjs */ "./node_modules/_vant@3.6.2@vant/es/icon/index.mjs");





const [name, bem] = (0,_utils_index_mjs__WEBPACK_IMPORTED_MODULE_1__.createNamespace)("cell");
const cellSharedProps = {
  icon: String,
  size: String,
  title: _utils_index_mjs__WEBPACK_IMPORTED_MODULE_2__.numericProp,
  value: _utils_index_mjs__WEBPACK_IMPORTED_MODULE_2__.numericProp,
  label: _utils_index_mjs__WEBPACK_IMPORTED_MODULE_2__.numericProp,
  center: Boolean,
  isLink: Boolean,
  border: _utils_index_mjs__WEBPACK_IMPORTED_MODULE_2__.truthProp,
  required: Boolean,
  iconPrefix: String,
  valueClass: _utils_index_mjs__WEBPACK_IMPORTED_MODULE_2__.unknownProp,
  labelClass: _utils_index_mjs__WEBPACK_IMPORTED_MODULE_2__.unknownProp,
  titleClass: _utils_index_mjs__WEBPACK_IMPORTED_MODULE_2__.unknownProp,
  titleStyle: null,
  arrowDirection: String,
  clickable: {
    type: Boolean,
    default: null
  }
};
const cellProps = (0,_utils_index_mjs__WEBPACK_IMPORTED_MODULE_3__.extend)({}, cellSharedProps, _composables_use_route_mjs__WEBPACK_IMPORTED_MODULE_4__.routeProps);
var stdin_default = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name,
  props: cellProps,

  setup(props, {
    slots
  }) {
    const route = (0,_composables_use_route_mjs__WEBPACK_IMPORTED_MODULE_4__.useRoute)();

    const renderLabel = () => {
      const showLabel = slots.label || (0,_utils_index_mjs__WEBPACK_IMPORTED_MODULE_5__.isDef)(props.label);

      if (showLabel) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
          "class": [bem("label"), props.labelClass]
        }, [slots.label ? slots.label() : props.label]);
      }
    };

    const renderTitle = () => {
      if (slots.title || (0,_utils_index_mjs__WEBPACK_IMPORTED_MODULE_5__.isDef)(props.title)) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
          "class": [bem("title"), props.titleClass],
          "style": props.titleStyle
        }, [slots.title ? slots.title() : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", null, [props.title]), renderLabel()]);
      }
    };

    const renderValue = () => {
      const slot = slots.value || slots.default;
      const hasValue = slot || (0,_utils_index_mjs__WEBPACK_IMPORTED_MODULE_5__.isDef)(props.value);

      if (hasValue) {
        const hasTitle = slots.title || (0,_utils_index_mjs__WEBPACK_IMPORTED_MODULE_5__.isDef)(props.title);
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
          "class": [bem("value", {
            alone: !hasTitle
          }), props.valueClass]
        }, [slot ? slot() : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", null, [props.value])]);
      }
    };

    const renderLeftIcon = () => {
      if (slots.icon) {
        return slots.icon();
      }

      if (props.icon) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_icon_index_mjs__WEBPACK_IMPORTED_MODULE_6__.Icon, {
          "name": props.icon,
          "class": bem("left-icon"),
          "classPrefix": props.iconPrefix
        }, null);
      }
    };

    const renderRightIcon = () => {
      if (slots["right-icon"]) {
        return slots["right-icon"]();
      }

      if (props.isLink) {
        const name2 = props.arrowDirection ? `arrow-${props.arrowDirection}` : "arrow";
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_icon_index_mjs__WEBPACK_IMPORTED_MODULE_6__.Icon, {
          "name": name2,
          "class": bem("right-icon")
        }, null);
      }
    };

    return () => {
      var _a, _b;

      const {
        size,
        center,
        border,
        isLink,
        required
      } = props;
      const clickable = (_a = props.clickable) != null ? _a : isLink;
      const classes = {
        center,
        required,
        clickable,
        borderless: !border
      };

      if (size) {
        classes[size] = !!size;
      }

      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
        "class": bem(classes),
        "role": clickable ? "button" : void 0,
        "tabindex": clickable ? 0 : void 0,
        "onClick": route
      }, [renderLeftIcon(), renderTitle(), renderValue(), renderRightIcon(), (_b = slots.extra) == null ? void 0 : _b.call(slots)]);
    };
  }

});


/***/ }),

/***/ "./node_modules/_vant@3.6.2@vant/es/cell/index.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/_vant@3.6.2@vant/es/cell/index.mjs ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cell": function() { return /* binding */ Cell; },
/* harmony export */   "default": function() { return /* binding */ stdin_default; }
/* harmony export */ });
/* harmony import */ var _utils_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index.mjs */ "./node_modules/_vant@3.6.2@vant/es/utils/with-install.mjs");
/* harmony import */ var _Cell_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cell.mjs */ "./node_modules/_vant@3.6.2@vant/es/cell/Cell.mjs");


const Cell = (0,_utils_index_mjs__WEBPACK_IMPORTED_MODULE_0__.withInstall)(_Cell_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]);
var stdin_default = Cell;


/***/ })

}]);
//# sourceMappingURL=src_views_PlatformSettings_vue-src_components_stickyBottom_vue-src_components_tab_vue.f8345c03.js.map