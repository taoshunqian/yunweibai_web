"use strict";
(self["webpackChunkyunweibao_ad"] = self["webpackChunkyunweibao_ad"] || []).push([["src_views_PlatformStatus_vue-src_components_stickyBottom_vue-src_components_tab_vue"],{

/***/ "./node_modules/_thread-loader@3.0.4@thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-41!./node_modules/_vue-loader@17.0.0@vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/PlatformStatus.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_thread-loader@3.0.4@thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-41!./node_modules/_vue-loader@17.0.0@vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/PlatformStatus.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vant */ "./node_modules/_vant@3.6.2@vant/es/collapse/index.mjs");
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vant */ "./node_modules/_vant@3.6.2@vant/es/collapse-item/index.mjs");
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vant */ "./node_modules/_vant@3.6.2@vant/es/cell/index.mjs");
/* harmony import */ var _utlis_QueryStr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utlis/QueryStr */ "./src/utlis/QueryStr.js");
/* harmony import */ var _mixins_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mixins/index.js */ "./src/mixins/index.js");




 // Checkbox




/* harmony default export */ __webpack_exports__["default"] = ({
  __name: 'PlatformStatus',
  setup: function setup(__props) {
    // import StickyBottom from "@/components/stickyBottom.vue";
    var _mixins = (0,_mixins_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(),
        t = _mixins.t,
        postAN = _mixins.postAN,
        TabHeaders = _mixins.TabHeaders,
        callJSResult_Status = _mixins.callJSResult_Status; // const { lang } = inject("lang");
    // const International = ref(lang.value);


    var i8nColumns3 = t("platformStatus.columns3");
    var i8nColumns4 = t("platformStatus.columns4"); // 标题

    var navTitle = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(t("platformStatus.navTitle"));
    var activeNames = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(["1"]);
    var maxNum = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(0);
    var deviceState = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)([]);
    var sendNum = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(1);
    var resultAll = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)("");
    var jtsvrStatus = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)([]);
    var columns2 = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(["JT808-2013", "JT808-2019", "JT808-2011", "JT905"]);
    var columns3 = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(i8nColumns3.split(","));
    var columns4 = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(i8nColumns4.split(",")); // const cmds = ref(["$JTSVR2,","$JTSVR3,","$JTSVR4,","$JTSVR5,","$NETSTATE"])

    var getResultCmds = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)([]);
    (0,vue__WEBPACK_IMPORTED_MODULE_3__.defineComponent)({
      name: "yunweibao-SettingsIP"
    }); // const settingServe = (e,index) => {
    //   console.log(e);
    //   router.push({
    //     path: "/ServeInfo",
    //     query: {
    //       item: e,
    //       index
    //     },
    //   });
    // };

    function filterStartState(name) {
      var ti = "";

      switch (name) {
        case "1":
          ti = t("platformStatus.serveState[0]");
          break;

        case "0":
          ti = t("platformStatus.serveState[1]");
          break;

        default:
          ti = t("platformStatus.serveState[2]");
      }

      return ti;
    }

    function filterDeviceState(name) {
      var device = t("platformStatus.deviceState[0]").split(",");
      return device[name]; // let ti = "";
      // switch (name) {
      //   case "1":
      //     ti = t("platformStatus.deviceState[0]");
      //     break;
      //   case "0":
      //     ti = t("platformStatus.deviceState[1]");
      //     break;
      //   default:
      //     ti = t("platformStatus.deviceState[2]");
      // }
      // return ti;
    }

    function filterLogonState(name) {
      var ti = "";

      switch (name) {
        case "1":
          ti = t("platformStatus.logonState[0]");
          break;

        case "0":
          ti = t("platformStatus.logonState[1]");
          break;

        default:
          ti = t("platformStatus.logonState[2]");
      }

      return ti;
    } // -------------------------------------------------------------------
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
        } // console.log(jtsvrState);


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
      var param = (0,_utlis_QueryStr__WEBPACK_IMPORTED_MODULE_4__.getQueryString)("param").split("@"); // 解析出指令
      // alert(param);

      if (param[7] != undefined) {
        return false;
      }

      postAN.ANSend("$JTNUM"); // postAN.ANSend(param[1]);
      // postAN.ANSend("$JTSVR2,");
      // postAN.ANSend("$JTSVR3,");
      // postAN.ANSend("$JTSVR4,");
      // postAN.ANSend("$JTSVR5,");
      // postAN.ANSend("$NETSTATE");
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_3__.onMounted)(function () {
      window.callJSResult = callJSResult;
      window.callJSResult_Status = callJSResult_Status;
      androidStatus_fn();
    });
    return function (_ctx, _cache) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_3__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_3__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_3__.createVNode)((0,vue__WEBPACK_IMPORTED_MODULE_3__.unref)(TabHeaders), {
        navTitle: navTitle.value,
        leftArrow: false
      }, null, 8, ["navTitle"]), ((0,vue__WEBPACK_IMPORTED_MODULE_3__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_3__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_3__.renderList)(getResultCmds.value, function (item, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_3__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_3__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_3__.unref)(vant__WEBPACK_IMPORTED_MODULE_6__.CellGroup), {
          inset: "",
          style: {
            "margin-top": "10px"
          },
          key: index
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_3__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_3__.createVNode)((0,vue__WEBPACK_IMPORTED_MODULE_3__.unref)(vant__WEBPACK_IMPORTED_MODULE_7__.Collapse), {
              modelValue: activeNames.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
                return activeNames.value = $event;
              })
            }, {
              "default": (0,vue__WEBPACK_IMPORTED_MODULE_3__.withCtx)(function () {
                return [(0,vue__WEBPACK_IMPORTED_MODULE_3__.createVNode)((0,vue__WEBPACK_IMPORTED_MODULE_3__.unref)(vant__WEBPACK_IMPORTED_MODULE_8__.CollapseItem), {
                  title: _ctx.$t('platformStatus.title[0]') + (index + 1),
                  name: '' + (index + 1)
                }, {
                  "default": (0,vue__WEBPACK_IMPORTED_MODULE_3__.withCtx)(function () {
                    return [(0,vue__WEBPACK_IMPORTED_MODULE_3__.createVNode)((0,vue__WEBPACK_IMPORTED_MODULE_3__.unref)(vant__WEBPACK_IMPORTED_MODULE_9__.Cell), {
                      title: _ctx.$t('platformStatus.title[1]'),
                      value: item[1]
                    }, null, 8, ["title", "value"]), (0,vue__WEBPACK_IMPORTED_MODULE_3__.createVNode)((0,vue__WEBPACK_IMPORTED_MODULE_3__.unref)(vant__WEBPACK_IMPORTED_MODULE_9__.Cell), {
                      title: _ctx.$t('platformStatus.title[2]'),
                      value: item[2]
                    }, null, 8, ["title", "value"]), (0,vue__WEBPACK_IMPORTED_MODULE_3__.createVNode)((0,vue__WEBPACK_IMPORTED_MODULE_3__.unref)(vant__WEBPACK_IMPORTED_MODULE_9__.Cell), {
                      title: _ctx.$t('platformStatus.title[3]')
                    }, {
                      "right-icon": (0,vue__WEBPACK_IMPORTED_MODULE_3__.withCtx)(function () {
                        return [(0,vue__WEBPACK_IMPORTED_MODULE_3__.createElementVNode)("span", {
                          style: (0,vue__WEBPACK_IMPORTED_MODULE_3__.normalizeStyle)({
                            color: item[3] == 1 ? '#5fb878' : 'red'
                          })
                        }, (0,vue__WEBPACK_IMPORTED_MODULE_3__.toDisplayString)(filterStartState(item[3])), 5)];
                      }),
                      _: 2
                    }, 1032, ["title"]), (0,vue__WEBPACK_IMPORTED_MODULE_3__.createVNode)((0,vue__WEBPACK_IMPORTED_MODULE_3__.unref)(vant__WEBPACK_IMPORTED_MODULE_9__.Cell), {
                      title: _ctx.$t('platformStatus.title[4]'),
                      value: filterLogonState(item[4])
                    }, null, 8, ["title", "value"]), (0,vue__WEBPACK_IMPORTED_MODULE_3__.createVNode)((0,vue__WEBPACK_IMPORTED_MODULE_3__.unref)(vant__WEBPACK_IMPORTED_MODULE_9__.Cell), {
                      title: _ctx.$t('platformStatus.title[5]'),
                      value: columns2.value[item[5]]
                    }, null, 8, ["title", "value"]), (0,vue__WEBPACK_IMPORTED_MODULE_3__.createVNode)((0,vue__WEBPACK_IMPORTED_MODULE_3__.unref)(vant__WEBPACK_IMPORTED_MODULE_9__.Cell), {
                      title: _ctx.$t('platformStatus.title[6]'),
                      value: columns3.value[item[6]]
                    }, null, 8, ["title", "value"]), (0,vue__WEBPACK_IMPORTED_MODULE_3__.createVNode)((0,vue__WEBPACK_IMPORTED_MODULE_3__.unref)(vant__WEBPACK_IMPORTED_MODULE_9__.Cell), {
                      title: _ctx.$t('platformStatus.title[7]'),
                      value: columns4.value[item[7]]
                    }, null, 8, ["title", "value"]), (0,vue__WEBPACK_IMPORTED_MODULE_3__.createVNode)((0,vue__WEBPACK_IMPORTED_MODULE_3__.unref)(vant__WEBPACK_IMPORTED_MODULE_9__.Cell), {
                      title: _ctx.$t('platformStatus.title[8]')
                    }, {
                      "right-icon": (0,vue__WEBPACK_IMPORTED_MODULE_3__.withCtx)(function () {
                        return [(0,vue__WEBPACK_IMPORTED_MODULE_3__.createElementVNode)("span", {
                          style: (0,vue__WEBPACK_IMPORTED_MODULE_3__.normalizeStyle)({
                            color: deviceState.value[index] == 1 ? '#5fb878' : 'red'
                          })
                        }, (0,vue__WEBPACK_IMPORTED_MODULE_3__.toDisplayString)(filterDeviceState(deviceState.value[index])), 5)];
                      }),
                      _: 2
                    }, 1032, ["title"])];
                  }),
                  _: 2
                }, 1032, ["title", "name"])];
              }),
              _: 2
            }, 1032, ["modelValue"])];
          }),
          _: 2
        }, 1024);
      }), 128))], 64);
    };
  }
});

/***/ }),

/***/ "./src/views/PlatformStatus.vue":
/*!**************************************!*\
  !*** ./src/views/PlatformStatus.vue ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PlatformStatus_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PlatformStatus.vue?vue&type=script&setup=true&lang=js */ "./src/views/PlatformStatus.vue?vue&type=script&setup=true&lang=js");



const __exports__ = _PlatformStatus_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"];

/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/PlatformStatus.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************!*\
  !*** ./src/views/PlatformStatus.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_thread_loader_3_0_4_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_1_node_modules_babel_loader_lib_index_js_clonedRuleSet_41_node_modules_vue_loader_17_0_0_vue_loader_dist_index_js_ruleSet_0_use_0_PlatformStatus_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_thread_loader_3_0_4_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_1_node_modules_babel_loader_lib_index_js_clonedRuleSet_41_node_modules_vue_loader_17_0_0_vue_loader_dist_index_js_ruleSet_0_use_0_PlatformStatus_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_thread-loader@3.0.4@thread-loader/dist/cjs.js!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-41!../../node_modules/_vue-loader@17.0.0@vue-loader/dist/index.js??ruleSet[0].use[0]!./PlatformStatus.vue?vue&type=script&setup=true&lang=js */ "./node_modules/_thread-loader@3.0.4@thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-41!./node_modules/_vue-loader@17.0.0@vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/PlatformStatus.vue?vue&type=script&setup=true&lang=js");
 

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


/***/ }),

/***/ "./node_modules/_vant@3.6.2@vant/es/collapse-item/CollapseItem.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/_vant@3.6.2@vant/es/collapse-item/CollapseItem.mjs ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ stdin_default; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/_vue@3.2.39@vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _cell_Cell_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cell/Cell.mjs */ "./node_modules/_vant@3.6.2@vant/es/cell/Cell.mjs");
/* harmony import */ var _utils_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/index.mjs */ "./node_modules/_vant@3.6.2@vant/es/utils/create.mjs");
/* harmony import */ var _utils_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/index.mjs */ "./node_modules/_vant@3.6.2@vant/es/utils/basic.mjs");
/* harmony import */ var _utils_index_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/index.mjs */ "./node_modules/_vant@3.6.2@vant/es/utils/props.mjs");
/* harmony import */ var _collapse_Collapse_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../collapse/Collapse.mjs */ "./node_modules/_vant@3.6.2@vant/es/collapse/Collapse.mjs");
/* harmony import */ var _vant_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vant/use */ "./node_modules/_@vant_use@1.4.2@@vant/use/dist/index.esm.mjs");
/* harmony import */ var _composables_use_expose_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../composables/use-expose.mjs */ "./node_modules/_vant@3.6.2@vant/es/composables/use-expose.mjs");
/* harmony import */ var _composables_use_lazy_render_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../composables/use-lazy-render.mjs */ "./node_modules/_vant@3.6.2@vant/es/composables/use-lazy-render.mjs");
/* harmony import */ var _cell_index_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../cell/index.mjs */ "./node_modules/_vant@3.6.2@vant/es/cell/index.mjs");









const [name, bem] = (0,_utils_index_mjs__WEBPACK_IMPORTED_MODULE_1__.createNamespace)("collapse-item");
const CELL_SLOTS = ["icon", "title", "value", "label", "right-icon"];
const collapseItemProps = (0,_utils_index_mjs__WEBPACK_IMPORTED_MODULE_2__.extend)({}, _cell_Cell_mjs__WEBPACK_IMPORTED_MODULE_3__.cellSharedProps, {
  name: _utils_index_mjs__WEBPACK_IMPORTED_MODULE_4__.numericProp,
  isLink: _utils_index_mjs__WEBPACK_IMPORTED_MODULE_4__.truthProp,
  disabled: Boolean,
  readonly: Boolean,
  lazyRender: _utils_index_mjs__WEBPACK_IMPORTED_MODULE_4__.truthProp
});
var stdin_default = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name,
  props: collapseItemProps,

  setup(props, {
    slots
  }) {
    const wrapperRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
    const contentRef = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)();
    const {
      parent,
      index
    } = (0,_vant_use__WEBPACK_IMPORTED_MODULE_5__.useParent)(_collapse_Collapse_mjs__WEBPACK_IMPORTED_MODULE_6__.COLLAPSE_KEY);

    if (!parent) {
      if (false) {}

      return;
    }

    const name2 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => {
      var _a;

      return (_a = props.name) != null ? _a : index.value;
    });
    const expanded = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => parent.isExpanded(name2.value));
    const show = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(expanded.value);
    const lazyRender = (0,_composables_use_lazy_render_mjs__WEBPACK_IMPORTED_MODULE_7__.useLazyRender)(() => show.value || !props.lazyRender);

    const onTransitionEnd = () => {
      if (!expanded.value) {
        show.value = false;
      } else if (wrapperRef.value) {
        wrapperRef.value.style.height = "";
      }
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.watch)(expanded, (value, oldValue) => {
      if (oldValue === null) {
        return;
      }

      if (value) {
        show.value = true;
      }

      const tick = value ? vue__WEBPACK_IMPORTED_MODULE_0__.nextTick : _vant_use__WEBPACK_IMPORTED_MODULE_5__.raf;
      tick(() => {
        if (!contentRef.value || !wrapperRef.value) {
          return;
        }

        const {
          offsetHeight
        } = contentRef.value;

        if (offsetHeight) {
          const contentHeight = `${offsetHeight}px`;
          wrapperRef.value.style.height = value ? "0" : contentHeight;
          (0,_vant_use__WEBPACK_IMPORTED_MODULE_5__.doubleRaf)(() => {
            if (wrapperRef.value) {
              wrapperRef.value.style.height = value ? contentHeight : "0";
            }
          });
        } else {
          onTransitionEnd();
        }
      });
    });

    const toggle = (newValue = !expanded.value) => {
      parent.toggle(name2.value, newValue);
    };

    const onClickTitle = () => {
      if (!props.disabled && !props.readonly) {
        toggle();
      }
    };

    const renderTitle = () => {
      const {
        border,
        disabled,
        readonly
      } = props;
      const attrs = (0,_utils_index_mjs__WEBPACK_IMPORTED_MODULE_2__.pick)(props, Object.keys(_cell_Cell_mjs__WEBPACK_IMPORTED_MODULE_3__.cellSharedProps));

      if (readonly) {
        attrs.isLink = false;
      }

      if (disabled || readonly) {
        attrs.clickable = false;
      }

      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_cell_index_mjs__WEBPACK_IMPORTED_MODULE_8__.Cell, (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({
        "role": "button",
        "class": bem("title", {
          disabled,
          expanded: expanded.value,
          borderless: !border
        }),
        "aria-expanded": String(expanded.value),
        "onClick": onClickTitle
      }, attrs), (0,_utils_index_mjs__WEBPACK_IMPORTED_MODULE_2__.pick)(slots, CELL_SLOTS));
    };

    const renderContent = lazyRender(() => {
      var _a;

      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
        "ref": wrapperRef,
        "class": bem("wrapper"),
        "onTransitionend": onTransitionEnd
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
        "ref": contentRef,
        "class": bem("content")
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)])]), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, show.value]]);
    });
    (0,_composables_use_expose_mjs__WEBPACK_IMPORTED_MODULE_9__.useExpose)({
      toggle,
      expanded,
      itemName: name2
    });
    return () => (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
      "class": [bem({
        border: index.value && props.border
      })]
    }, [renderTitle(), renderContent()]);
  }

});


/***/ }),

/***/ "./node_modules/_vant@3.6.2@vant/es/collapse-item/index.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/_vant@3.6.2@vant/es/collapse-item/index.mjs ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollapseItem": function() { return /* binding */ CollapseItem; },
/* harmony export */   "default": function() { return /* binding */ stdin_default; }
/* harmony export */ });
/* harmony import */ var _utils_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index.mjs */ "./node_modules/_vant@3.6.2@vant/es/utils/with-install.mjs");
/* harmony import */ var _CollapseItem_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CollapseItem.mjs */ "./node_modules/_vant@3.6.2@vant/es/collapse-item/CollapseItem.mjs");


const CollapseItem = (0,_utils_index_mjs__WEBPACK_IMPORTED_MODULE_0__.withInstall)(_CollapseItem_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]);
var stdin_default = CollapseItem;


/***/ }),

/***/ "./node_modules/_vant@3.6.2@vant/es/collapse/Collapse.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/_vant@3.6.2@vant/es/collapse/Collapse.mjs ***!
  \****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COLLAPSE_KEY": function() { return /* binding */ COLLAPSE_KEY; },
/* harmony export */   "default": function() { return /* binding */ stdin_default; }
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/_vue@3.2.39@vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _utils_index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/index.mjs */ "./node_modules/_vant@3.6.2@vant/es/utils/create.mjs");
/* harmony import */ var _utils_index_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/index.mjs */ "./node_modules/_vant@3.6.2@vant/es/utils/props.mjs");
/* harmony import */ var _utils_index_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/index.mjs */ "./node_modules/_vant@3.6.2@vant/es/utils/constant.mjs");
/* harmony import */ var _vant_use__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vant/use */ "./node_modules/_@vant_use@1.4.2@@vant/use/dist/index.esm.mjs");
/* harmony import */ var _composables_use_expose_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../composables/use-expose.mjs */ "./node_modules/_vant@3.6.2@vant/es/composables/use-expose.mjs");





const [name, bem] = (0,_utils_index_mjs__WEBPACK_IMPORTED_MODULE_1__.createNamespace)("collapse");
const COLLAPSE_KEY = Symbol(name);
const collapseProps = {
  border: _utils_index_mjs__WEBPACK_IMPORTED_MODULE_2__.truthProp,
  accordion: Boolean,
  modelValue: {
    type: [String, Number, Array],
    default: ""
  }
};

function validateModelValue(modelValue, accordion) {
  if (accordion && Array.isArray(modelValue)) {
    console.error('[Vant] Collapse: "v-model" should not be Array in accordion mode');
    return false;
  }

  if (!accordion && !Array.isArray(modelValue)) {
    console.error('[Vant] Collapse: "v-model" should be Array in non-accordion mode');
    return false;
  }

  return true;
}

var stdin_default = (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
  name,
  props: collapseProps,
  emits: ["change", "update:modelValue"],

  setup(props, {
    emit,
    slots
  }) {
    const {
      linkChildren,
      children
    } = (0,_vant_use__WEBPACK_IMPORTED_MODULE_3__.useChildren)(COLLAPSE_KEY);

    const updateName = name2 => {
      emit("change", name2);
      emit("update:modelValue", name2);
    };

    const toggle = (name2, expanded) => {
      const {
        accordion,
        modelValue
      } = props;

      if (accordion) {
        updateName(name2 === modelValue ? "" : name2);
      } else if (expanded) {
        updateName(modelValue.concat(name2));
      } else {
        updateName(modelValue.filter(activeName => activeName !== name2));
      }
    };

    const toggleAll = (options = {}) => {
      if (props.accordion) {
        return;
      }

      if (typeof options === "boolean") {
        options = {
          expanded: options
        };
      }

      const {
        expanded,
        skipDisabled
      } = options;
      const expandedChildren = children.filter(item => {
        if (item.disabled && skipDisabled) {
          return item.expanded.value;
        }

        return expanded != null ? expanded : !item.expanded.value;
      });
      const names = expandedChildren.map(item => item.itemName.value);
      updateName(names);
    };

    const isExpanded = name2 => {
      const {
        accordion,
        modelValue
      } = props;

      if (false) {}

      return accordion ? modelValue === name2 : modelValue.includes(name2);
    };

    (0,_composables_use_expose_mjs__WEBPACK_IMPORTED_MODULE_4__.useExpose)({
      toggleAll
    });
    linkChildren({
      toggle,
      isExpanded
    });
    return () => {
      var _a;

      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
        "class": [bem(), {
          [_utils_index_mjs__WEBPACK_IMPORTED_MODULE_5__.BORDER_TOP_BOTTOM]: props.border
        }]
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }

});


/***/ }),

/***/ "./node_modules/_vant@3.6.2@vant/es/collapse/index.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/_vant@3.6.2@vant/es/collapse/index.mjs ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Collapse": function() { return /* binding */ Collapse; },
/* harmony export */   "default": function() { return /* binding */ stdin_default; }
/* harmony export */ });
/* harmony import */ var _utils_index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index.mjs */ "./node_modules/_vant@3.6.2@vant/es/utils/with-install.mjs");
/* harmony import */ var _Collapse_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Collapse.mjs */ "./node_modules/_vant@3.6.2@vant/es/collapse/Collapse.mjs");


const Collapse = (0,_utils_index_mjs__WEBPACK_IMPORTED_MODULE_0__.withInstall)(_Collapse_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]);
var stdin_default = Collapse;


/***/ })

}]);
//# sourceMappingURL=src_views_PlatformStatus_vue-src_components_stickyBottom_vue-src_components_tab_vue.e945aafa.js.map