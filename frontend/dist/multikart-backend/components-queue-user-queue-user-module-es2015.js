(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-queue-user-queue-user-module"],{

/***/ "+jgn":
/*!********************************************************************!*\
  !*** ./src/app/components/queue-user/queue-user-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: QueueUserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueUserRoutingModule", function() { return QueueUserRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _queue_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queue-user.component */ "yorT");





const routes = [
    {
        path: '',
        component: _queue_user_component__WEBPACK_IMPORTED_MODULE_2__["QueueUserComponent"],
    },
];
class QueueUserRoutingModule {
}
QueueUserRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: QueueUserRoutingModule });
QueueUserRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function QueueUserRoutingModule_Factory(t) { return new (t || QueueUserRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](QueueUserRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QueueUserRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "/xmp":
/*!************************************************************!*\
  !*** ./src/app/components/queue-user/queue-user.module.ts ***!
  \************************************************************/
/*! exports provided: QueueUserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueUserModule", function() { return QueueUserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _queue_user_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queue-user-routing.module */ "+jgn");
/* harmony import */ var _queue_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./queue-user.component */ "yorT");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class QueueUserModule {
}
QueueUserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: QueueUserModule });
QueueUserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function QueueUserModule_Factory(t) { return new (t || QueueUserModule)(); }, providers: [], imports: [[
            _queue_user_routing_module__WEBPACK_IMPORTED_MODULE_2__["QueueUserRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](QueueUserModule, { declarations: [_queue_user_component__WEBPACK_IMPORTED_MODULE_3__["QueueUserComponent"]], imports: [_queue_user_routing_module__WEBPACK_IMPORTED_MODULE_2__["QueueUserRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QueueUserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _queue_user_component__WEBPACK_IMPORTED_MODULE_3__["QueueUserComponent"],
                ],
                imports: [
                    _queue_user_routing_module__WEBPACK_IMPORTED_MODULE_2__["QueueUserRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ],
                providers: [],
                bootstrap: [],
                entryComponents: []
            }]
    }], null, null); })();


/***/ }),

/***/ "yorT":
/*!***************************************************************!*\
  !*** ./src/app/components/queue-user/queue-user.component.ts ***!
  \***************************************************************/
/*! exports provided: QueueUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueueUserComponent", function() { return QueueUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
/* harmony import */ var src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/data.service */ "J8x5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function QueueUserComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QueueUserComponent_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const idx_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.selectSymbol(idx_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.symbol);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.title[ctx_r0.lang === "en" ? "en" : ctx_r0.lang === "ru" ? "ru" : "uz"], " ");
} }
class QueueUserComponent {
    constructor(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.lang = this.dataService.selected.lang;
        this.environment = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"];
        if (!this.dataService.selected.lang)
            this.router.navigateByUrl('/language-user');
    }
    ngOnInit() { }
    selectSymbol(idx) {
        this.dataService.selected.index = idx;
        this.router.navigateByUrl('/queue-menu-user');
    }
    navigateBack() {
        console.log('navigateBack');
        this.router.navigateByUrl('/language-user');
    }
}
QueueUserComponent.ɵfac = function QueueUserComponent_Factory(t) { return new (t || QueueUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
QueueUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QueueUserComponent, selectors: [["app-queue-user"]], decls: 7, vars: 2, consts: [[1, "bolim"], [3, "ngClass"], [1, "bolim-group"], ["class", "bolim-inner", 3, "click", 4, "ngFor", "ngForOf"], ["version", "1.0", "xmlns", "http://www.w3.org/2000/svg", "width", "250", "height", "150", "viewBox", "0 0 512.000000 512.000000", "preserveAspectRatio", "xMidYMid meet", 1, "back_button", 3, "click"], ["transform", "translate(0.000000,512.000000) scale(0.100000,-0.100000)", "fill", "#ffffff", "stroke", "none"], ["d", "M2427 3379 c-19 -11 -978 -744 -1054 -806 -51 -41 -55 -68 -15 -105\n54 -50 1066 -821 1084 -826 10 -2 28 4 38 13 19 17 20 32 20 243 l0 225 133\n-6 c289 -14 559 -77 759 -178 131 -66 225 -142 330 -267 31 -38 62 -41 83 -9\n13 20 13 42 5 157 -18 235 -75 424 -175 580 -65 103 -210 243 -310 301 -204\n119 -440 179 -704 179 l-121 0 0 239 c0 237 0 240 -22 255 -26 19 -27 19 -51\n5z m-10 -590 c12 -10 48 -13 148 -11 150 4 310 -16 443 -54 387 -112 623 -385\n686 -791 14 -93 21 -91 -64 -21 -135 110 -358 206 -600 257 -149 32 -215 40\n-405 52 -244 14 -224 33 -227 -222 l-3 -200 -462 353 c-254 194 -461 358 -459\n363 1 6 209 168 462 362 l459 352 3 -214 c2 -182 5 -215 19 -226z", 1, "icon"], [1, "bolim-inner", 3, "click"], [1, "bolim1"], [1, "bolim2"]], template: function QueueUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, QueueUserComponent_div_3_Template, 5, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QueueUserComponent_Template__svg_svg_click_4_listener() { return ctx.navigateBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.environment.otm === "tsuos" ? "img-tsuos-logo" : "img");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataService.menu);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Quicksand\", sans-serif;\n  color: #fff;\n}\n\n.bolim[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  background-image: url('bg.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n\n.img[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 150px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  margin-bottom: 20px;\n  padding-top: 15px;\n  margin-top: -50px;\n  background-image: url('logo.png');\n  background-size: 250px;\n}\n\n.img-tsuos-logo[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  margin-top: -25px;\n  padding-top: 15px;\n  position: relative;\n  margin-bottom: 35px;\n  background-image: url('tsuos-logo.png');\n  background-size: 150px;\n}\n\n.back_button[_ngcontent-%COMP%] {\n  -o-object-fit: content;\n     object-fit: content;\n  position: absolute;\n  bottom: -20px;\n  left: -60px;\n  cursor: pointer;\n}\n\n.back_button[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\n  fill: black;\n}\n\n.bolim-group[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 15px;\n  font-size: 30px;\n  padding: 0 250px;\n}\n\n.bolim-inner[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 5px;\n  background-color: #5757c5;\n  color: #fff;\n  box-shadow: 0px 6px 48px rgba(0, 0, 0, 0.1);\n  transition: all 0.4s ease;\n  cursor: pointer;\n}\n\n.bolim-inner[_ngcontent-%COMP%]:hover {\n  transform: translateY(4%);\n}\n\n.bolim-inner[_ngcontent-%COMP%]:hover   .bolim2[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #2626f3;\n}\n\n.bolim1[_ngcontent-%COMP%] {\n  border-right: 1px solid #383636;\n  height: 100%;\n  left: 0px;\n  width: 20%;\n  height: 100%;\n  padding: 20px 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #29df29;\n}\n\n.bolim2[_ngcontent-%COMP%] {\n  transition: all 0.4s ease;\n  width: 80%;\n  padding: 25px;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxxdWV1ZS11c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0Esc0JBQUE7QUFHRjs7QUFEQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBRUEsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1Q0FBQTtFQUNBLHNCQUFBO0FBR0Y7O0FBREE7RUFDRSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFJRjs7QUFGQTtFQUNFLFdBQUE7QUFLRjs7QUFGQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFLRjs7QUFIQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLDJDQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBTUY7O0FBSkE7RUFDRSx5QkFBQTtBQU9GOztBQUxBO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0FBUUY7O0FBTkE7RUFDRSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBU0Y7O0FBUEE7RUFDRSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBVUYiLCJmaWxlIjoicXVldWUtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgZm9udC1mYW1pbHk6IFwiUXVpY2tzYW5kXCIsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmJvbGltIHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9xdWV1ZS9iZy5qcGcpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uaW1nIHtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcXVldWUvbG9nby5wbmcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMjUwcHg7XHJcbn1cclxuLmltZy10c3Vvcy1sb2dvIHtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICAvLyBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBtYXJnaW4tdG9wOiAtMjVweDtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9xdWV1ZS90c3Vvcy1sb2dvLnBuZyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxNTBweDtcclxufVxyXG4uYmFja19idXR0b24ge1xyXG4gIG9iamVjdC1maXQ6IGNvbnRlbnQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogLTIwcHg7XHJcbiAgbGVmdDogLTYwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5iYWNrX2J1dHRvbjpob3ZlciAuaWNvbiB7XHJcbiAgZmlsbDogYmxhY2s7XHJcbn1cclxuXHJcbi5ib2xpbS1ncm91cCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gIGdhcDogMTVweDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgcGFkZGluZzogMCAyNTBweDtcclxufVxyXG4uYm9saW0taW5uZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4NywgODcsIDE5Nyk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDZweCA0OHB4IHJnYigwIDAgMCAvIDEwJSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmJvbGltLWlubmVyOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNCUpO1xyXG59XHJcbi5ib2xpbS1pbm5lcjpob3ZlciAuYm9saW0yIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogcmdiKDM4LCAzOCwgMjQzKTtcclxufVxyXG4uYm9saW0xIHtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2IoNTYsIDU0LCA1NCk7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGxlZnQ6IDBweDtcclxuICB3aWR0aDogMjAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiByZ2IoNDEsIDIyMywgNDEpO1xyXG59XHJcbi5ib2xpbTIge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QueueUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-queue-user',
                templateUrl: './queue-user.component.html',
                styleUrls: ['./queue-user.component.scss'],
            }]
    }], function () { return [{ type: src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=components-queue-user-queue-user-module-es2015.js.map