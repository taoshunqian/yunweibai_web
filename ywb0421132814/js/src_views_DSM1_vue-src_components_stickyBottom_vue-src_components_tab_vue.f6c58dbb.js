"use strict";
(self["webpackChunkyunweibao_ad"] = self["webpackChunkyunweibao_ad"] || []).push([["src_views_DSM1_vue-src_components_stickyBottom_vue-src_components_tab_vue"],{

/***/ "./node_modules/_thread-loader@3.0.4@thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-41!./node_modules/_vue-loader@17.0.0@vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/DSM1.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_thread-loader@3.0.4@thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-41!./node_modules/_vue-loader@17.0.0@vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/DSM1.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue */ "./node_modules/_vue@3.2.39@vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _components_tab_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/tab.vue */ "./src/components/tab.vue");
/* harmony import */ var _components_stickyBottom_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/stickyBottom.vue */ "./src/components/stickyBottom.vue");
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vant */ "./node_modules/_vant@3.6.2@vant/es/dialog/function-call.mjs");
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vant */ "./node_modules/_vant@3.6.2@vant/es/toast/function-call.mjs");
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vant */ "./node_modules/_vant@3.6.2@vant/es/button/index.mjs");
/* harmony import */ var _utlis_AdApi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utlis/AdApi */ "./src/utlis/AdApi.js");
/* harmony import */ var _utlis_QueryStr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utlis/QueryStr */ "./src/utlis/QueryStr.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue-router */ "./node_modules/_vue-router@4.1.5@vue-router/dist/vue-router.mjs");
/* harmony import */ var vue_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-i18n */ "./node_modules/_vue-i18n@9.2.2@vue-i18n/dist/vue-i18n.esm-bundler.js");







var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_5__.createTextVNode)("HOD");

var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_5__.createTextVNode)("BSD1");

var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_5__.createTextVNode)("BSD2");

var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_5__.createTextVNode)("BSD3");



 // Checkbox






/* harmony default export */ __webpack_exports__["default"] = ({
  __name: 'DSM1',
  setup: function setup(__props) {
    var _useI18n = (0,vue_i18n__WEBPACK_IMPORTED_MODULE_10__.useI18n)(),
        t = _useI18n.t;

    var model = sessionStorage.model;
    var route = (0,vue_router__WEBPACK_IMPORTED_MODULE_11__.useRoute)();
    var guideRouter = route.query.guide; // import { useI18n } from "vue-i18n";
    // const { t } = useI18n();
    // 标题

    var navTitle = (0,vue__WEBPACK_IMPORTED_MODULE_5__.ref)(t("dsm.navTitle"));
    var guide = (0,vue__WEBPACK_IMPORTED_MODULE_5__.ref)(true);
    var nowCmd = (0,vue__WEBPACK_IMPORTED_MODULE_5__.ref)(""); // 当前使用的指令

    var loading = (0,vue__WEBPACK_IMPORTED_MODULE_5__.ref)(false);

    var calibrationFn = function calibrationFn(num) {
      loading.value = true;
      setTimeout(function () {
        loading.value = false;
      }, 2000);
      _utlis_AdApi__WEBPACK_IMPORTED_MODULE_8__.postAN.calibrationFn(num, "");
    };

    var BottomSubmit = function BottomSubmit() {
      vant__WEBPACK_IMPORTED_MODULE_12__.Dialog.confirm({
        title: t("dsm.dialog[0]"),
        message: t("dsm.dialog[1]"),
        confirmButtonText: t("dsm.dialog[2]"),
        cancelButtonText: t("dsm.dialog[3]")
      }).then(function () {
        // eslint-disable-next-line no-undef
        _utlis_AdApi__WEBPACK_IMPORTED_MODULE_8__.postAN.finishWeb();
      })["catch"](function () {// on cancel
      });
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_5__.defineComponent)({
      name: "yunweibao-Demarcate"
    }); // -------------------------------------------------------------------
    // 安卓回调函数

    var callJSResult = function callJSResult(str) {
      var cmds = str.split(";")[0];
      var cmdArr = cmds.split(",").splice(1);
      console.log(cmdArr);
    }; // 安卓成功失败回调


    var callJSResult_Status = function callJSResult_Status(str) {
      if (str.indexOf("Success") !== -1) {
        vant__WEBPACK_IMPORTED_MODULE_13__.Toast.success(t("toast[1]"));
      } else {
        vant__WEBPACK_IMPORTED_MODULE_13__.Toast.fail(t("toast[2]"));
      }
    }; // 向安卓发送指令


    var androidStatus_fn = function androidStatus_fn() {
      var param = "";

      if (guideRouter) {
        var guideIndex = sessionStorage.guideIndex;
        guide.value = true;
        var guideArr = JSON.parse(sessionStorage.guide);
        param = guideArr[guideIndex].split("@");
      } else {
        param = (0,_utlis_QueryStr__WEBPACK_IMPORTED_MODULE_9__.getQueryString)("param").split("@"); // 解析出指令
      }

      nowCmd.value = param[1];
      _utlis_AdApi__WEBPACK_IMPORTED_MODULE_8__.postAN.ANSend(param[1]);
    };

    androidStatus_fn();
    (0,vue__WEBPACK_IMPORTED_MODULE_5__.onMounted)(function () {
      window.callJSResult = callJSResult;
      window.callJSResult_Status = callJSResult_Status;
    });
    return function (_ctx, _cache) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_5__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_5__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_5__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_5__.createVNode)(_components_tab_vue__WEBPACK_IMPORTED_MODULE_6__["default"], {
        navTitle: navTitle.value,
        leftArrow: false
      }, null, 8, ["navTitle"]), (0,vue__WEBPACK_IMPORTED_MODULE_5__.createVNode)((0,vue__WEBPACK_IMPORTED_MODULE_5__.unref)(vant__WEBPACK_IMPORTED_MODULE_14__.Button), {
        type: "primary",
        style: {
          "width": "90%",
          "margin-left": "5%",
          "margin-top": "30%"
        },
        size: "large",
        onClick: _cache[0] || (_cache[0] = function ($event) {
          return calibrationFn(2);
        }),
        loading: loading.value
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_5__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_5__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_5__.toDisplayString)(_ctx.$t("dsm.button[0]")), 1)];
        }),
        _: 1
      }, 8, ["loading"]), (0,vue__WEBPACK_IMPORTED_MODULE_5__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_5__.createVNode)((0,vue__WEBPACK_IMPORTED_MODULE_5__.unref)(vant__WEBPACK_IMPORTED_MODULE_14__.Button), {
        type: "primary",
        style: {
          "width": "90%",
          "margin-left": "5%",
          "margin-top": "2%"
        },
        size: "large",
        onClick: _cache[1] || (_cache[1] = function ($event) {
          return calibrationFn(3);
        }),
        loading: loading.value
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_5__.withCtx)(function () {
          return [_hoisted_1];
        }),
        _: 1
      }, 8, ["loading"]), [[vue__WEBPACK_IMPORTED_MODULE_5__.vShow, (0,vue__WEBPACK_IMPORTED_MODULE_5__.unref)(model) != 'Ios']]), (0,vue__WEBPACK_IMPORTED_MODULE_5__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_5__.createVNode)((0,vue__WEBPACK_IMPORTED_MODULE_5__.unref)(vant__WEBPACK_IMPORTED_MODULE_14__.Button), {
        type: "primary",
        style: {
          "width": "90%",
          "margin-left": "5%",
          "margin-top": "2%"
        },
        size: "large",
        onClick: _cache[2] || (_cache[2] = function ($event) {
          return calibrationFn(4);
        }),
        loading: loading.value
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_5__.withCtx)(function () {
          return [_hoisted_2];
        }),
        _: 1
      }, 8, ["loading"]), [[vue__WEBPACK_IMPORTED_MODULE_5__.vShow, (0,vue__WEBPACK_IMPORTED_MODULE_5__.unref)(model) != 'Ios']]), (0,vue__WEBPACK_IMPORTED_MODULE_5__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_5__.createVNode)((0,vue__WEBPACK_IMPORTED_MODULE_5__.unref)(vant__WEBPACK_IMPORTED_MODULE_14__.Button), {
        type: "primary",
        style: {
          "width": "90%",
          "margin-left": "5%",
          "margin-top": "2%"
        },
        size: "large",
        onClick: _cache[3] || (_cache[3] = function ($event) {
          return calibrationFn(5);
        }),
        loading: loading.value
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_5__.withCtx)(function () {
          return [_hoisted_3];
        }),
        _: 1
      }, 8, ["loading"]), [[vue__WEBPACK_IMPORTED_MODULE_5__.vShow, (0,vue__WEBPACK_IMPORTED_MODULE_5__.unref)(model) != 'Ios']]), (0,vue__WEBPACK_IMPORTED_MODULE_5__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_5__.createVNode)((0,vue__WEBPACK_IMPORTED_MODULE_5__.unref)(vant__WEBPACK_IMPORTED_MODULE_14__.Button), {
        type: "primary",
        style: {
          "width": "90%",
          "margin-left": "5%",
          "margin-top": "2%"
        },
        size: "large",
        onClick: _cache[4] || (_cache[4] = function ($event) {
          return calibrationFn(6);
        }),
        loading: loading.value
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_5__.withCtx)(function () {
          return [_hoisted_4];
        }),
        _: 1
      }, 8, ["loading"]), [[vue__WEBPACK_IMPORTED_MODULE_5__.vShow, (0,vue__WEBPACK_IMPORTED_MODULE_5__.unref)(model) != 'Ios']]), (0,vue__WEBPACK_IMPORTED_MODULE_5__.createVNode)(_components_stickyBottom_vue__WEBPACK_IMPORTED_MODULE_7__["default"], {
        guide: guide.value,
        onBottomSubmit: BottomSubmit
      }, null, 8, ["guide"])], 64);
    };
  }
});

/***/ }),

/***/ "./src/views/DSM1.vue":
/*!****************************!*\
  !*** ./src/views/DSM1.vue ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DSM1_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DSM1.vue?vue&type=script&setup=true&lang=js */ "./src/views/DSM1.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _DSM1_vue_vue_type_style_index_0_id_69fd7634_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DSM1.vue?vue&type=style&index=0&id=69fd7634&lang=css */ "./src/views/DSM1.vue?vue&type=style&index=0&id=69fd7634&lang=css");



;

const __exports__ = _DSM1_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"];

/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/DSM1.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************!*\
  !*** ./src/views/DSM1.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_thread_loader_3_0_4_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_1_node_modules_babel_loader_lib_index_js_clonedRuleSet_41_node_modules_vue_loader_17_0_0_vue_loader_dist_index_js_ruleSet_0_use_0_DSM1_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_thread_loader_3_0_4_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_1_node_modules_babel_loader_lib_index_js_clonedRuleSet_41_node_modules_vue_loader_17_0_0_vue_loader_dist_index_js_ruleSet_0_use_0_DSM1_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_thread-loader@3.0.4@thread-loader/dist/cjs.js!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-41!../../node_modules/_vue-loader@17.0.0@vue-loader/dist/index.js??ruleSet[0].use[0]!./DSM1.vue?vue&type=script&setup=true&lang=js */ "./node_modules/_thread-loader@3.0.4@thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-41!./node_modules/_vue-loader@17.0.0@vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/DSM1.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/views/DSM1.vue?vue&type=style&index=0&id=69fd7634&lang=css":
/*!************************************************************************!*\
  !*** ./src/views/DSM1.vue?vue&type=style&index=0&id=69fd7634&lang=css ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_17_0_0_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_17_0_0_vue_loader_dist_index_js_ruleSet_0_use_0_DSM1_vue_vue_type_style_index_0_id_69fd7634_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/_vue-loader@17.0.0@vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/_vue-loader@17.0.0@vue-loader/dist/index.js??ruleSet[0].use[0]!./DSM1.vue?vue&type=style&index=0&id=69fd7634&lang=css */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/_vue-loader@17.0.0@vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/_vue-loader@17.0.0@vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/DSM1.vue?vue&type=style&index=0&id=69fd7634&lang=css");


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/_vue-loader@17.0.0@vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/_vue-loader@17.0.0@vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/DSM1.vue?vue&type=style&index=0&id=69fd7634&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/_vue-loader@17.0.0@vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/_vue-loader@17.0.0@vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/DSM1.vue?vue&type=style&index=0&id=69fd7634&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=src_views_DSM1_vue-src_components_stickyBottom_vue-src_components_tab_vue.f6c58dbb.js.map