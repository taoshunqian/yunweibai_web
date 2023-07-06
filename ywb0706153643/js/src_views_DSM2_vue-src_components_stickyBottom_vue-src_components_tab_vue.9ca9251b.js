"use strict";
(self["webpackChunkyunweibao_ad"] = self["webpackChunkyunweibao_ad"] || []).push([["src_views_DSM2_vue-src_components_stickyBottom_vue-src_components_tab_vue"],{

/***/ "./node_modules/_thread-loader@3.0.4@thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-41!./node_modules/_vue-loader@17.0.0@vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/DSM2.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_thread-loader@3.0.4@thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-41!./node_modules/_vue-loader@17.0.0@vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/DSM2.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/_vue@3.2.39@vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _components_tab_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/tab.vue */ "./src/components/tab.vue");
/* harmony import */ var _components_stickyBottom_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/stickyBottom.vue */ "./src/components/stickyBottom.vue");
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vant */ "./node_modules/_vant@3.6.2@vant/es/button/index.mjs");
/* harmony import */ var _utlis_AdApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utlis/AdApi */ "./src/utlis/AdApi.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("开始标定");



 // Checkbox


 // 标题

/* harmony default export */ __webpack_exports__["default"] = ({
  __name: 'DSM2',
  setup: function setup(__props) {
    var navTitle = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)("DSM2 标定");
    var guide = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(true);

    var calibrationFn = function calibrationFn(num) {
      _utlis_AdApi__WEBPACK_IMPORTED_MODULE_3__.postAN.calibrationFn(num);
    }; // const EndModel = () => {
    //   postAN.finishWeb();
    // };


    (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineComponent)({
      name: "yunweibao-Demarcate"
    });
    return function (_ctx, _cache) {
      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_components_tab_vue__WEBPACK_IMPORTED_MODULE_1__["default"], {
        navTitle: navTitle.value,
        leftArrow: false
      }, null, 8, ["navTitle"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.unref)(vant__WEBPACK_IMPORTED_MODULE_4__.Button), {
        type: "primary",
        style: {
          "width": "90%",
          "margin-left": "5%",
          "margin-top": "50%"
        },
        size: "large",
        onClick: _cache[0] || (_cache[0] = function ($event) {
          return calibrationFn(3);
        })
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [_hoisted_1];
        }),
        _: 1
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_components_stickyBottom_vue__WEBPACK_IMPORTED_MODULE_2__["default"], {
        guide: guide.value,
        onBottomNext: _ctx.BottomNext
      }, null, 8, ["guide", "onBottomNext"])], 64);
    };
  }
});

/***/ }),

/***/ "./src/views/DSM2.vue":
/*!****************************!*\
  !*** ./src/views/DSM2.vue ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DSM2_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DSM2.vue?vue&type=script&setup=true&lang=js */ "./src/views/DSM2.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _DSM2_vue_vue_type_style_index_0_id_cff39d02_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DSM2.vue?vue&type=style&index=0&id=cff39d02&lang=css */ "./src/views/DSM2.vue?vue&type=style&index=0&id=cff39d02&lang=css");



;

const __exports__ = _DSM2_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"];

/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./src/views/DSM2.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************!*\
  !*** ./src/views/DSM2.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_thread_loader_3_0_4_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_1_node_modules_babel_loader_lib_index_js_clonedRuleSet_41_node_modules_vue_loader_17_0_0_vue_loader_dist_index_js_ruleSet_0_use_0_DSM2_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_thread_loader_3_0_4_thread_loader_dist_cjs_js_node_modules_babel_loader_lib_index_js_clonedRuleSet_40_use_1_node_modules_babel_loader_lib_index_js_clonedRuleSet_41_node_modules_vue_loader_17_0_0_vue_loader_dist_index_js_ruleSet_0_use_0_DSM2_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_thread-loader@3.0.4@thread-loader/dist/cjs.js!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-41!../../node_modules/_vue-loader@17.0.0@vue-loader/dist/index.js??ruleSet[0].use[0]!./DSM2.vue?vue&type=script&setup=true&lang=js */ "./node_modules/_thread-loader@3.0.4@thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/babel-loader/lib/index.js??clonedRuleSet-41!./node_modules/_vue-loader@17.0.0@vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/DSM2.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/views/DSM2.vue?vue&type=style&index=0&id=cff39d02&lang=css":
/*!************************************************************************!*\
  !*** ./src/views/DSM2.vue?vue&type=style&index=0&id=cff39d02&lang=css ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_clonedRuleSet_12_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_17_0_0_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_vue_loader_17_0_0_vue_loader_dist_index_js_ruleSet_0_use_0_DSM2_vue_vue_type_style_index_0_id_cff39d02_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../node_modules/_vue-loader@17.0.0@vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../node_modules/_vue-loader@17.0.0@vue-loader/dist/index.js??ruleSet[0].use[0]!./DSM2.vue?vue&type=style&index=0&id=cff39d02&lang=css */ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/_vue-loader@17.0.0@vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/_vue-loader@17.0.0@vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/DSM2.vue?vue&type=style&index=0&id=cff39d02&lang=css");


/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/_vue-loader@17.0.0@vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/_vue-loader@17.0.0@vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/DSM2.vue?vue&type=style&index=0&id=cff39d02&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/_vue-loader@17.0.0@vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/_vue-loader@17.0.0@vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/DSM2.vue?vue&type=style&index=0&id=cff39d02&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=src_views_DSM2_vue-src_components_stickyBottom_vue-src_components_tab_vue.9ca9251b.js.map