"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dialoguePage",{

/***/ "./src/pages/dialoguePage.js":
/*!***********************************!*\
  !*** ./src/pages/dialoguePage.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_assert_this_initialized.mjs */ \"./node_modules/@swc/helpers/src/_assert_this_initialized.mjs\");\n/* harmony import */ var _swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_class_call_check.mjs */ \"./node_modules/@swc/helpers/src/_class_call_check.mjs\");\n/* harmony import */ var _swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_create_class.mjs */ \"./node_modules/@swc/helpers/src/_create_class.mjs\");\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_inherits.mjs */ \"./node_modules/@swc/helpers/src/_inherits.mjs\");\n/* harmony import */ var _swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_create_super.mjs */ \"./node_modules/@swc/helpers/src/_create_super.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Components_hintCloud__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/hintCloud */ \"./src/Components/hintCloud.js\");\n/* harmony import */ var _Components_prompt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/prompt */ \"./src/Components/prompt.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n\n\n\n\n\nvar assembler = __webpack_require__(/*! ../Components/assembler_Obj */ \"./src/Components/assembler_Obj.js\");\n/**\n * The dialogue window\n * \n * Different prompts arise based on where the user is in the creation\n * journey.\n * \n * User gives any input.\n * \n * Tips are provided on the page as word-clouds related to given prompt.\n * \n * User can decide to quit/restart the process.\n * If inactive for X seconds, the user is asked if they want more ideas /\n * wish to start over / quit.\n * \n * Final page before the query is sent to be generated should show the resulting\n * sentence for user revision.\n * \n */ var DialoguePage = /*#__PURE__*/ function(_Component) {\n    \"use strict\";\n    (0,_swc_helpers_src_inherits_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(DialoguePage, _Component);\n    var _super = (0,_swc_helpers_src_create_super_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(DialoguePage);\n    function DialoguePage() {\n        (0,_swc_helpers_src_class_call_check_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(this, DialoguePage);\n        var _this;\n        _this = _super.apply(this, arguments);\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_this), \"state\", {\n            stage: 0,\n            medium: \"\",\n            numStages: 6,\n            stageNames: [\n                \"emotions\",\n                \"structure_form\",\n                \"looks_techniques\",\n                \"art_styles\",\n                \"artists\"\n            ],\n            query: \"\"\n        });\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_this), \"incrementStage\", function() {\n            //increase value of current stage by 1, and update the buttons accordingly\n            var currentStage = _this.state.stage;\n            /**\n         * Button to previous stage:\n         * is enabled only if the current stage is greater than 1,\n         * otherwise it is disabled. \n         */ //return button appears after the increment button is first clicked\n            document.querySelector(\"#btn-previous-stage\").style.display = \"block\";\n            //enable the return button after the stage is larger than 1\n            if (currentStage >= 1) {\n                document.querySelector(\"#btn-previous-stage\").disabled = false;\n            }\n            /***\n         * Button to next stage:\n         * is enabled only if the current stage is less than last,\n         * at last stage is replaced by submit button which redirects to loading page.\n         * \n         * Text field is emptied and value stored.\n         */ //hide forward button, create a submit button\n            if (currentStage === _this.state.numStages - 1) {\n                //hide forward button\n                document.querySelector(\"#btn-next-stage\").style.display = \"none\";\n                //show submit button\n                document.querySelector(\"#btn-result\").style.display = \"block\";\n            }\n            //get text from input field and store it in the query array\n            var input = document.querySelector(\"#dialogue-input\").value;\n            //TODO: change to fit the correct structure\n            _this.setState({\n                query: input\n            });\n            //empty the input field\n            document.querySelector(\"#dialogue-input\").value = \"\";\n            //increase stage by 1\n            _this.setState({\n                stage: currentStage + 1\n            });\n        });\n        (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,_swc_helpers_src_assert_this_initialized_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(_this), \"returnToPreviousStage\", function() {\n            //decrease current stage by 1\n            var currentStage = _this.state.stage;\n            //disable the return button once the stage is 1\n            if (currentStage == 2) {\n                document.querySelector(\"#btn-previous-stage\").disabled = true;\n            }\n            //display correct forward button\n            if (currentStage != _this.state.numStages - 1) {\n                //hide submit button\n                document.querySelector(\"#btn-result\").style.display = \"none\";\n                //show forward button\n                document.querySelector(\"#btn-next-stage\").style.display = \"block\";\n            }\n            //TODO: fill input field with the last value in the query array\n            document.querySelector(\"#dialogue-input\").value = _this.state.query[_this.state.stage - 1];\n            _this.setState({\n                stage: currentStage - 1\n            });\n        });\n        return _this;\n    }\n    (0,_swc_helpers_src_create_class_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])(DialoguePage, [\n        {\n            key: \"render\",\n            value: function render() {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: \"Dialogue Page\"\n                        }, void 0, false, {\n                            fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/art-generator/src/pages/dialoguePage.js\",\n                            lineNumber: 114,\n                            columnNumber: 16\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_prompt__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            medium: this.state.medium,\n                            stage: this.state.stage,\n                            input: this.state.query\n                        }, void 0, false, {\n                            fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/art-generator/src/pages/dialoguePage.js\",\n                            lineNumber: 119,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            id: \"btn-previous-stage\",\n                            type: \"submit\",\n                            onClick: this.returnToPreviousStage,\n                            value: \"Previous stage\"\n                        }, void 0, false, {\n                            fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/art-generator/src/pages/dialoguePage.js\",\n                            lineNumber: 121,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            id: \"dialogue-input\",\n                            type: \"text\"\n                        }, void 0, false, {\n                            fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/art-generator/src/pages/dialoguePage.js\",\n                            lineNumber: 126,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            id: \"btn-next-stage\",\n                            type: \"submit\",\n                            onClick: this.incrementStage,\n                            value: \"Next\"\n                        }, void 0, false, {\n                            fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/art-generator/src/pages/dialoguePage.js\",\n                            lineNumber: 128,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            id: \"btn-result\",\n                            href: \"/loadingPage\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"Results\"\n                            }, void 0, false, {\n                                fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/art-generator/src/pages/dialoguePage.js\",\n                                lineNumber: 134,\n                                columnNumber: 21\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/art-generator/src/pages/dialoguePage.js\",\n                            lineNumber: 133,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/annahruba/Desktop/hybrid-bridge/art-generator/art-generator/src/pages/dialoguePage.js\",\n                    lineNumber: 113,\n                    columnNumber: 13\n                }, this);\n            }\n        }\n    ]);\n    return DialoguePage;\n}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));\n/* harmony default export */ __webpack_exports__[\"default\"] = (DialoguePage);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxFQUFDLFlBQVk7NEJBQUNHLElBQUksRUFBRSxjQUFjO3NDQUN0Qyw0RUFBQ0MsUUFBTTswQ0FBQyxTQUVSOzs7OztvQ0FBUzs7Ozs7Z0NBQ047Ozs7Ozt3QkFFTCxDQUVUO2FBQ0o7Ozs7Q0FFSixDQXJIMkIvQix3REFBZSxDQXFIMUM7QUFFRCwrREFBZU0sWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9kaWFsb2d1ZVBhZ2UuanM/NzMzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGludENsb3VkIGZyb20gXCIuLi9Db21wb25lbnRzL2hpbnRDbG91ZFwiO1xuaW1wb3J0IFByb21wdCBmcm9tIFwiLi4vQ29tcG9uZW50cy9wcm9tcHRcIjtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IGFzc2VtYmxlciA9IHJlcXVpcmUoJy4uL0NvbXBvbmVudHMvYXNzZW1ibGVyX09iaicpXG5cbi8qKlxuICogVGhlIGRpYWxvZ3VlIHdpbmRvd1xuICogXG4gKiBEaWZmZXJlbnQgcHJvbXB0cyBhcmlzZSBiYXNlZCBvbiB3aGVyZSB0aGUgdXNlciBpcyBpbiB0aGUgY3JlYXRpb25cbiAqIGpvdXJuZXkuXG4gKiBcbiAqIFVzZXIgZ2l2ZXMgYW55IGlucHV0LlxuICogXG4gKiBUaXBzIGFyZSBwcm92aWRlZCBvbiB0aGUgcGFnZSBhcyB3b3JkLWNsb3VkcyByZWxhdGVkIHRvIGdpdmVuIHByb21wdC5cbiAqIFxuICogVXNlciBjYW4gZGVjaWRlIHRvIHF1aXQvcmVzdGFydCB0aGUgcHJvY2Vzcy5cbiAqIElmIGluYWN0aXZlIGZvciBYIHNlY29uZHMsIHRoZSB1c2VyIGlzIGFza2VkIGlmIHRoZXkgd2FudCBtb3JlIGlkZWFzIC9cbiAqIHdpc2ggdG8gc3RhcnQgb3ZlciAvIHF1aXQuXG4gKiBcbiAqIEZpbmFsIHBhZ2UgYmVmb3JlIHRoZSBxdWVyeSBpcyBzZW50IHRvIGJlIGdlbmVyYXRlZCBzaG91bGQgc2hvdyB0aGUgcmVzdWx0aW5nXG4gKiBzZW50ZW5jZSBmb3IgdXNlciByZXZpc2lvbi5cbiAqIFxuICovXG5cbiBjbGFzcyBEaWFsb2d1ZVBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIHN0YWdlOiAwLFxuICAgICAgICBtZWRpdW06IFwiXCIsXG4gICAgICAgIG51bVN0YWdlczogNixcbiAgICAgICAgc3RhZ2VOYW1lczogW1xuICAgICAgICAgICAgJ2Vtb3Rpb25zJywgJ3N0cnVjdHVyZV9mb3JtJywgJ2xvb2tzX3RlY2huaXF1ZXMnLCAnYXJ0X3N0eWxlcycsICdhcnRpc3RzJ1xuICAgICAgICBdLFxuICAgICAgICBxdWVyeTogXCJcIixcbiAgICB9XG5cbiAgICBpbmNyZW1lbnRTdGFnZSA9ICgpID0+IHtcbiAgICAgICAgLy9pbmNyZWFzZSB2YWx1ZSBvZiBjdXJyZW50IHN0YWdlIGJ5IDEsIGFuZCB1cGRhdGUgdGhlIGJ1dHRvbnMgYWNjb3JkaW5nbHlcbiAgICAgICAgXG4gICAgICAgIGxldCBjdXJyZW50U3RhZ2UgPSB0aGlzLnN0YXRlLnN0YWdlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBCdXR0b24gdG8gcHJldmlvdXMgc3RhZ2U6XG4gICAgICAgICAqIGlzIGVuYWJsZWQgb25seSBpZiB0aGUgY3VycmVudCBzdGFnZSBpcyBncmVhdGVyIHRoYW4gMSxcbiAgICAgICAgICogb3RoZXJ3aXNlIGl0IGlzIGRpc2FibGVkLiBcbiAgICAgICAgICovXG5cbiAgICAgICAgLy9yZXR1cm4gYnV0dG9uIGFwcGVhcnMgYWZ0ZXIgdGhlIGluY3JlbWVudCBidXR0b24gaXMgZmlyc3QgY2xpY2tlZFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuLXByZXZpb3VzLXN0YWdlJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICAgICAgLy9lbmFibGUgdGhlIHJldHVybiBidXR0b24gYWZ0ZXIgdGhlIHN0YWdlIGlzIGxhcmdlciB0aGFuIDFcbiAgICAgICAgaWYoY3VycmVudFN0YWdlID49IDEpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG4tcHJldmlvdXMtc3RhZ2UnKS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqKlxuICAgICAgICAgKiBCdXR0b24gdG8gbmV4dCBzdGFnZTpcbiAgICAgICAgICogaXMgZW5hYmxlZCBvbmx5IGlmIHRoZSBjdXJyZW50IHN0YWdlIGlzIGxlc3MgdGhhbiBsYXN0LFxuICAgICAgICAgKiBhdCBsYXN0IHN0YWdlIGlzIHJlcGxhY2VkIGJ5IHN1Ym1pdCBidXR0b24gd2hpY2ggcmVkaXJlY3RzIHRvIGxvYWRpbmcgcGFnZS5cbiAgICAgICAgICogXG4gICAgICAgICAqIFRleHQgZmllbGQgaXMgZW1wdGllZCBhbmQgdmFsdWUgc3RvcmVkLlxuICAgICAgICAgKi9cblxuICAgICAgICAvL2hpZGUgZm9yd2FyZCBidXR0b24sIGNyZWF0ZSBhIHN1Ym1pdCBidXR0b25cbiAgICAgICAgaWYoY3VycmVudFN0YWdlID09PSB0aGlzLnN0YXRlLm51bVN0YWdlcyAtIDEpIHtcbiAgICAgICAgICAgIC8vaGlkZSBmb3J3YXJkIGJ1dHRvblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bi1uZXh0LXN0YWdlJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICAgICAgLy9zaG93IHN1Ym1pdCBidXR0b25cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG4tcmVzdWx0Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIH1cblxuICAgICAgICAvL2dldCB0ZXh0IGZyb20gaW5wdXQgZmllbGQgYW5kIHN0b3JlIGl0IGluIHRoZSBxdWVyeSBhcnJheVxuICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlhbG9ndWUtaW5wdXQnKS52YWx1ZTtcbiAgICAgICAgLy9UT0RPOiBjaGFuZ2UgdG8gZml0IHRoZSBjb3JyZWN0IHN0cnVjdHVyZVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtxdWVyeTogaW5wdXR9KTtcblxuICAgICAgICAvL2VtcHR5IHRoZSBpbnB1dCBmaWVsZFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlhbG9ndWUtaW5wdXQnKS52YWx1ZSA9ICcnO1xuXG4gICAgICAgIC8vaW5jcmVhc2Ugc3RhZ2UgYnkgMVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtzdGFnZTogY3VycmVudFN0YWdlICsgMX0pO1xuICAgIH1cblxuICAgIHJldHVyblRvUHJldmlvdXNTdGFnZSA9ICgpID0+IHtcbiAgICAgICAgLy9kZWNyZWFzZSBjdXJyZW50IHN0YWdlIGJ5IDFcbiAgICAgICAgbGV0IGN1cnJlbnRTdGFnZSA9IHRoaXMuc3RhdGUuc3RhZ2U7XG5cbiAgICAgICAgLy9kaXNhYmxlIHRoZSByZXR1cm4gYnV0dG9uIG9uY2UgdGhlIHN0YWdlIGlzIDFcbiAgICAgICAgaWYoY3VycmVudFN0YWdlID09IDIpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG4tcHJldmlvdXMtc3RhZ2UnKS5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvL2Rpc3BsYXkgY29ycmVjdCBmb3J3YXJkIGJ1dHRvblxuICAgICAgICBpZihjdXJyZW50U3RhZ2UgIT0gdGhpcy5zdGF0ZS5udW1TdGFnZXMgLSAxKSB7XG4gICAgICAgICAgICAvL2hpZGUgc3VibWl0IGJ1dHRvblxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bi1yZXN1bHQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgLy9zaG93IGZvcndhcmQgYnV0dG9uXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuLW5leHQtc3RhZ2UnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vVE9ETzogZmlsbCBpbnB1dCBmaWVsZCB3aXRoIHRoZSBsYXN0IHZhbHVlIGluIHRoZSBxdWVyeSBhcnJheVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGlhbG9ndWUtaW5wdXQnKS52YWx1ZSA9IHRoaXMuc3RhdGUucXVlcnlbdGhpcy5zdGF0ZS5zdGFnZSAtIDFdO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3N0YWdlOiBjdXJyZW50U3RhZ2UgLSAxfSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgIDxoMT5EaWFsb2d1ZSBQYWdlPC9oMT5cblxuICAgICAgICAgICAgICAgIHsvKiBUT0RPOiB1cGRhdGUgaGludCBjbG91ZCAqL31cbiAgICAgICAgICAgICAgICB7LyogPEhpbnRDbG91ZCBjdXJyZW50U3RhZ2U9e3RoaXMuc3RhdGUuc3RhZ2VOYW1lc1t0aGlzLnN0YXRlLnN0YWdlXX0vPiAqL31cblxuICAgICAgICAgICAgICAgIDxQcm9tcHQgbWVkaXVtPXt0aGlzLnN0YXRlLm1lZGl1bX0gc3RhZ2U9e3RoaXMuc3RhdGUuc3RhZ2V9IGlucHV0PXt0aGlzLnN0YXRlLnF1ZXJ5fS8+XG5cbiAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJidG4tcHJldmlvdXMtc3RhZ2VcIiB0eXBlPSdzdWJtaXQnXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9IHsgdGhpcy5yZXR1cm5Ub1ByZXZpb3VzU3RhZ2UgfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT0nUHJldmlvdXMgc3RhZ2UnXG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImRpYWxvZ3VlLWlucHV0XCIgdHlwZT0ndGV4dCc+PC9pbnB1dD5cblxuICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImJ0bi1uZXh0LXN0YWdlXCIgdHlwZT0nc3VibWl0J1xuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPSB7IHRoaXMuaW5jcmVtZW50U3RhZ2UgfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9ICdOZXh0J1xuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICA8TGluayBpZD1cImJ0bi1yZXN1bHRcIiBocmVmPXsnL2xvYWRpbmdQYWdlJ30+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICBSZXN1bHRzIFxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICApXG4gICAgfSBcblxufVxuXG5leHBvcnQgZGVmYXVsdCBEaWFsb2d1ZVBhZ2U7Il0sIm5hbWVzIjpbIlJlYWN0IiwiSGludENsb3VkIiwiUHJvbXB0IiwiTGluayIsImFzc2VtYmxlciIsInJlcXVpcmUiLCJEaWFsb2d1ZVBhZ2UiLCJzdGF0ZSIsInN0YWdlIiwibWVkaXVtIiwibnVtU3RhZ2VzIiwic3RhZ2VOYW1lcyIsInF1ZXJ5IiwiaW5jcmVtZW50U3RhZ2UiLCJjdXJyZW50U3RhZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImRpc3BsYXkiLCJkaXNhYmxlZCIsImlucHV0IiwidmFsdWUiLCJzZXRTdGF0ZSIsInJldHVyblRvUHJldmlvdXNTdGFnZSIsInJlbmRlciIsImRpdiIsImgxIiwiaWQiLCJ0eXBlIiwib25DbGljayIsImhyZWYiLCJidXR0b24iLCJDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/dialoguePage.js\n"));

/***/ })

});