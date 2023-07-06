"use strict";
(self["webpackChunkyunweibao_ad"] = self["webpackChunkyunweibao_ad"] || []).push([["src_views_plaseThree_TextSend_vue-src_components_stickyBottom_vue-src_components_tab_vue"],{

/***/ "./node_modules/_thread-loader@3.0.4@thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-41!./node_modules/_vue-loader@17.0.0@vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/plaseThree/TextSend.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_thread-loader@3.0.4@thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-41!./node_modules/_vue-loader@17.0.0@vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/plaseThree/TextSend.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/_vue@3.2.39@vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vant */ "./node_modules/_vant@3.6.2@vant/es/field/index.mjs");
/* harmony import */ var _mixins_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/mixins/index.js */ "./src/mixins/index.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  __name: 'TextSend',
  setup: function setup(__props) {
    var _mixins = (0,_mixins_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(),
        t = _mixins.t,
        TabHeaders = _mixins.TabHeaders,
        postAN = _mixins.postAN,
        StickyBottom = _mixins.StickyBottom,
        callJSResult_Status = _mixins.callJSResult_Status;

    var sendMessage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(""); // 下发指令

    var getMessage = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(""); // 获取到指令

    var navTitle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(t("TextSend.navTitle")); // 标题
    // 设置

    var BottomSearch = function BottomSearch() {
      getMessage.value = "";
      var req = sendMessage.value;
      postAN.ANsendSetting(req);
      return false;
    }; // 发送


    var BottomSubmit = function BottomSubmit() {
      getMessage.value = "";
      postAN.ANSend(sendMessage.value);
      return false;
    }; // -------------------------------------------------------------------
    // 安卓回调函数


    var callJSResult = function callJSResult(str) {
      getMessage.value = str;
    };

    (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
      window.callJSResult = callJSResult;
      window.callJSResult_Status = callJSResult_Status;
    });
    return function (_ctx, _cache) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(TabHeaders), {
        navTitle: navTitle.value,
        leftArrow: false
      }, null, 8, ["navTitle"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(vant__WEBPACK_IMPORTED_MODULE_2__.Field), {
        modelValue: sendMessage.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return sendMessage.value = $event;
        }),
        modelModifiers: {
          trim: true
        },
        rows: "5",
        label: _ctx.$t('TextSend.sendMsg'),
        autosize: "",
        type: "textarea",
        style: {
          "margin-top": "10px"
        },
        placeholder: _ctx.$t('TextSend.sendPlace')
      }, null, 8, ["modelValue", "label", "placeholder"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(vant__WEBPACK_IMPORTED_MODULE_2__.Field), {
        modelValue: getMessage.value,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return getMessage.value = $event;
        }),
        modelModifiers: {
          trim: true
        },
        rows: "5",
        label: _ctx.$t('TextSend.getMsg'),
        autosize: "",
        type: "textarea",
        style: {
          "margin-top": "30px"
        },
        disabled: "true"
      }, null, 8, ["modelValue", "label"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(StickyBottom), {
        onBottomSearch: BottomSearch,
        onBottomSubmit: BottomSubmit,
        confrimTitle: _ctx.$t('TextSend.confrim'),
        searchTitle: _ctx.$t('TextSend.search')
      }, null, 8, ["confrimTitle", "searchTitle"])], 64);
    };
  }
});

/***/ }),

/***/ "./src/views/plaseThree/TextSend.vue":
/*!*******************************************!*\
  !*** ./src/views/plaseThree/TextSend.vue ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextSend_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextSend.vue?vue&type=script&setup=true&lang=js */ "./src/views/plaseThree/TextSend.vue?vue&type=script&setup=true&lang=js");



const __exports__ = _TextSend_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"];

/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/plaseThree/TextSend.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************!*\
  !*** ./src/views/plaseThree/TextSend.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_thread_loader_3_0_4_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_1_node_modules_babel_loader_lib_index_js_clonedRuleSet_41_node_modules_vue_loader_17_0_0_vue_loader_dist_index_js_ruleSet_0_use_0_TextSend_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_thread_loader_3_0_4_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_1_node_modules_babel_loader_lib_index_js_clonedRuleSet_41_node_modules_vue_loader_17_0_0_vue_loader_dist_index_js_ruleSet_0_use_0_TextSend_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_thread-loader@3.0.4@thread-loader/dist/cjs.js!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-41!../../../node_modules/_vue-loader@17.0.0@vue-loader/dist/index.js??ruleSet[0].use[0]!./TextSend.vue?vue&type=script&setup=true&lang=js */ "./node_modules/_thread-loader@3.0.4@thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-41!./node_modules/_vue-loader@17.0.0@vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/plaseThree/TextSend.vue?vue&type=script&setup=true&lang=js");
 

/***/ })

}]);
//# sourceMappingURL=src_views_plaseThree_TextSend_vue-src_components_stickyBottom_vue-src_components_tab_vue.730ffafa.js.map