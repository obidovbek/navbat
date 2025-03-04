(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-user-display-user-display-module"],{

/***/ "arP0":
/*!************************************************************************!*\
  !*** ./src/app/components/user-display/user-display-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: UserDisplayRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDisplayRoutingModule", function() { return UserDisplayRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _user_display_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-display.component */ "nJJ3");





const routes = [
    {
        path: '',
        component: _user_display_component__WEBPACK_IMPORTED_MODULE_2__["UserDisplayComponent"],
        data: {
            title: "Navbat olish",
            breadcrumb: "Navbat olish"
        }
    },
];
class UserDisplayRoutingModule {
}
UserDisplayRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserDisplayRoutingModule });
UserDisplayRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserDisplayRoutingModule_Factory(t) { return new (t || UserDisplayRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserDisplayRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDisplayRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "jfr+":
/*!****************************************************************!*\
  !*** ./src/app/components/user-display/user-display.module.ts ***!
  \****************************************************************/
/*! exports provided: UserDisplayModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDisplayModule", function() { return UserDisplayModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _user_display_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-display-routing.module */ "arP0");
/* harmony import */ var _user_display_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-display.component */ "nJJ3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-smart-table */ "RS3s");







class UserDisplayModule {
}
UserDisplayModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserDisplayModule });
UserDisplayModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserDisplayModule_Factory(t) { return new (t || UserDisplayModule)(); }, providers: [], imports: [[
            _user_display_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserDisplayRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["Ng2SmartTableModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserDisplayModule, { declarations: [_user_display_component__WEBPACK_IMPORTED_MODULE_3__["UserDisplayComponent"]], imports: [_user_display_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserDisplayRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["Ng2SmartTableModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDisplayModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _user_display_component__WEBPACK_IMPORTED_MODULE_3__["UserDisplayComponent"],
                ],
                imports: [
                    _user_display_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserDisplayRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["Ng2SmartTableModule"]
                ],
                providers: [],
                bootstrap: [],
                entryComponents: []
            }]
    }], null, null); })();


/***/ }),

/***/ "nJJ3":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-display/user-display.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDisplayComponent", function() { return UserDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_service_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/service/http.service */ "uiMJ");
/* harmony import */ var src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/data.service */ "J8x5");
/* harmony import */ var src_app_shared_service_websocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/websocket.service */ "yrUK");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






const _c0 = ["myAudio"];
function UserDisplayComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Statistika");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Xizmatdan ", ctx_r0.service_used_number, " marta foydalanildi. ");
} }
function UserDisplayComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r1.current_queues_loop[0].symbol, "", ctx_r1.current_queues_loop[0].next_number - 1, "");
} }
function UserDisplayComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r2.current_queues_loop[1].symbol, "", ctx_r2.current_queues_loop[1].next_number - 1, "");
} }
function UserDisplayComponent_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r3.current_queues_loop[2].symbol, "", ctx_r3.current_queues_loop[2].next_number - 1, "");
} }
function UserDisplayComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r4.current_queues_loop[3].symbol, "", ctx_r4.current_queues_loop[3].next_number - 1, "");
} }
function UserDisplayComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r5.current_queues_loop[4].symbol, "", ctx_r5.current_queues_loop[4].next_number - 1, "");
} }
function UserDisplayComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r6.current_queues_new.symbol, "", ctx_r6.current_queues_new.next_number - 1, "");
} }
function UserDisplayComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.current_queues_loop[0].officer_id);
} }
function UserDisplayComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.current_queues_loop[1].officer_id);
} }
function UserDisplayComponent_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.current_queues_loop[2].officer_id);
} }
function UserDisplayComponent_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.current_queues_loop[3].officer_id);
} }
function UserDisplayComponent_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.current_queues_loop[4].officer_id);
} }
function UserDisplayComponent_span_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.current_queues_new.officer_id);
} }
class UserDisplayComponent {
    constructor(httpService, dataService, socket) {
        this.httpService = httpService;
        this.dataService = dataService;
        this.socket = socket;
        this.current_queues_new = null;
        this.current_queues = [];
        this.current_queues_loop = [];
        var user = { token: 'user-display' };
        this.socket.websocket_connection(user);
        this.nextUserDisplay();
        this.current_queues_loop_func(0);
    }
    current_queues_loop_func(i) {
        this.current_queues_loop = [];
        setTimeout(() => {
            const a = i * 5;
            const b = (i * 5) + 5;
            for (var x = a; x < b; x++) {
                if (this.current_queues[x]) {
                    this.current_queues_loop.push(this.current_queues[x]);
                }
                else {
                    i = -1;
                }
            }
        }, 500);
        setTimeout(() => { this.current_queues_loop_func(i + 1); }, 10000);
    }
    getStatistics() {
        this.httpService.getStatistics()
            .subscribe((res) => {
            console.log('res', res);
            this.service_used_number = res.queue_orders.length;
            // this.genTable(res.queue_orders);
            // this.dataSource.load(res.queue_orders.reverse());
        }, error => {
            console.error(error);
        });
    }
    nextUserDisplay() {
        this.getStatistics();
        this.socket.nextUserDisplay.subscribe((res) => {
            if (res) {
                console.log(res.data);
                this.current_queues_new = res.data;
                this.audio.nativeElement.play();
                setTimeout(() => {
                    this.current_queues_new = null;
                    var found = false;
                    this.current_queues.forEach((h, h_idx) => {
                        if (h.officer_id && h.officer_id === res.data.officer_id) {
                            found = true;
                            this.current_queues[h_idx] = res.data;
                        }
                        if (((h_idx + 1) === this.current_queues.length) && !found) {
                            this.current_queues.push(res.data);
                        }
                    });
                    if (!this.current_queues.length) {
                        this.current_queues.push(res.data);
                    }
                }, 5000);
                // if(this.current_queues.find(h=>(!h.officer_id)||(h.officer_id!==res.data.officer_id))){
                // console.log('nextUserDisplay: ',res)
                // 	this.current_queues.push(res.data);
                // }
            }
        });
    }
}
UserDisplayComponent.ɵfac = function UserDisplayComponent_Factory(t) { return new (t || UserDisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"])); };
UserDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserDisplayComponent, selectors: [["app-user-display"]], viewQuery: function UserDisplayComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.audio = _t.first);
    } }, decls: 38, vars: 13, consts: [[1, "container_2"], [1, "header"], [1, "main"], ["width", "100%", "height", "100%", "src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://www.youtube.com/embed/uf3c3JgYIus?autoplay=1&loop=1&playlist=uf3c3JgYIus"), "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 2, "border-radius", "5px"], ["class", "advert", 4, "ngIf"], [1, "talon"], [1, "section", "a1"], [4, "ngIf"], [1, "section", "a2"], [1, "section", "a3"], [1, "section", "a4"], [1, "section", "a5"], [1, "section", "a6"], [1, "oyna"], [1, "section2", "b1"], [1, "section2", "b2"], [1, "section2", "b3"], [1, "section2", "b4"], [1, "section2", "b5"], [1, "section2", "b6"], ["myAudio", ""], ["src", "https://navbat.ferpi.uz/assets/ringtones/new_user.ogg", "type", "audio/ogg"], ["scr", "https://navbat.ferpi.uz/assets/ringtones/new_user.mp3", "type", "audio/mpeg"], [1, "advert"], ["href", "https://navbat.ferpi.uz/statistics", "target", "_blank", 2, "color", "black", "text-decoration", "underline"]], template: function UserDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Farg\u2018ona politexnika instituti talabalarga xizmat ko\u2018rsatish ofisiga XUSH KELIBSIZ!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "iframe", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserDisplayComponent_div_5_Template, 4, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "CHEK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UserDisplayComponent_span_9_Template, 2, 2, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UserDisplayComponent_span_11_Template, 2, 2, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UserDisplayComponent_span_13_Template, 2, 2, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UserDisplayComponent_span_15_Template, 2, 2, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, UserDisplayComponent_span_17_Template, 2, 2, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, UserDisplayComponent_span_19_Template, 2, 2, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "OYNA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, UserDisplayComponent_span_23_Template, 2, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, UserDisplayComponent_span_25_Template, 2, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, UserDisplayComponent_span_27_Template, 2, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, UserDisplayComponent_span_29_Template, 2, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, UserDisplayComponent_span_31_Template, 2, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, UserDisplayComponent_span_33_Template, 2, 1, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "audio", null, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "source", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "source", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.service_used_number);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current_queues_loop[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current_queues_loop[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current_queues_loop[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current_queues_loop[3]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current_queues_loop[4]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current_queues_new);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current_queues_loop[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current_queues_loop[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current_queues_loop[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current_queues_loop[3]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current_queues_loop[4]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.current_queues_new);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Quicksand\", sans-serif;\n}\n\n.container_2[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n  padding: 5px;\n  font-size: 18px;\n  font-weight: bold;\n  background-color: #6056f1;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(7, 1fr);\n  gap: 5px;\n  padding: 10px;\n}\n\n.container_2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.938);\n  border: 1px solid rgba(255, 255, 255, 0.534);\n  border-radius: 3px;\n}\n\n.header[_ngcontent-%COMP%], .talon[_ngcontent-%COMP%], .oyna[_ngcontent-%COMP%] {\n  background-color: rgba(230, 252, 33, 0.918);\n  color: #443c3c !important;\n  font-size: 25px;\n}\n\n.header[_ngcontent-%COMP%] {\n  grid-column: 1/7;\n  font-size: 26px;\n  text-align: center;\n}\n\n.talon[_ngcontent-%COMP%] {\n  grid-column: 7/9;\n  font-size: 30px;\n}\n\n.section[_ngcontent-%COMP%] {\n  grid-column: 7/9;\n  gap: 5px;\n  position: relative;\n  padding: 15px;\n  transition: all 0.3s linear;\n}\n\n.section[_ngcontent-%COMP%], .section2[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n\n\n\n.oyna[_ngcontent-%COMP%] {\n  grid-column: 9/11;\n  grid-row: 1/2;\n  font-size: 30px;\n}\n\n\n\n.b1[_ngcontent-%COMP%] {\n  grid-column: 9/11;\n  grid-row: 2/3;\n}\n\n.b2[_ngcontent-%COMP%] {\n  grid-column: 9/11;\n  grid-row: 3/4;\n}\n\n.b3[_ngcontent-%COMP%] {\n  grid-column: 9/11;\n  grid-row: 4/5;\n}\n\n.b4[_ngcontent-%COMP%] {\n  grid-column: 9/11;\n  grid-row: 5/6;\n}\n\n.b5[_ngcontent-%COMP%] {\n  grid-column: 9/11;\n  grid-row: 6/7;\n}\n\n.b6[_ngcontent-%COMP%] {\n  grid-column: 9/11;\n  grid-row: 7/8;\n}\n\n.main[_ngcontent-%COMP%] {\n  grid-column: 1/7;\n  grid-row: 2/7;\n  overflow: hidden;\n  border: none !important;\n}\n\n.advert[_ngcontent-%COMP%] {\n  grid-column: 1/7;\n  grid-row: 7/8;\n}\n\n.video[_ngcontent-%COMP%] {\n  outline: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1c2VyLWRpc3BsYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNDQUFBO0VBQ0Esa0NBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtBQUVKOztBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0FBR0o7O0FBREE7RUFDSSwyQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUlKOztBQUZBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFLSjs7QUFIQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQU1KOztBQUpBO0VBQ0ksZ0JBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7QUFPSjs7QUFMQTtFQUNJLGVBQUE7QUFRSjs7QUFOQSxVQUFBOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQVNKOztBQVBBLGFBQUE7O0FBQ0E7RUFDSSxpQkFBQTtFQUNBLGFBQUE7QUFVSjs7QUFSQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtBQVdKOztBQVRBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0FBWUo7O0FBVkE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7QUFhSjs7QUFYQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtBQWNKOztBQVpBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0FBZUo7O0FBWkE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBZUo7O0FBYkE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7QUFnQko7O0FBZEE7RUFDSSxVQUFBO0FBaUJKIiwiZmlsZSI6InVzZXItZGlzcGxheS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxufVxyXG4uY29udGFpbmVyXzJ7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTYsIDg2LCAyNDEpO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNywgMWZyKTtcclxuICAgIGdhcDogNXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4uY29udGFpbmVyXzIgZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTM4KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MzQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcbi5oZWFkZXIsIC50YWxvbiwgLm95bmF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMCwgMjUyLCAzMywgMC45MTgpO1xyXG4gICAgY29sb3I6IHJnYig2OCwgNjAsIDYwKSFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn0gXHJcbi5oZWFkZXJ7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIDc7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRhbG9ue1xyXG4gICAgZ3JpZC1jb2x1bW46IDcgLyA5O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbi5zZWN0aW9ue1xyXG4gICAgZ3JpZC1jb2x1bW46IDcgLyA5O1xyXG4gICAgZ2FwOiA1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xyXG59XHJcbi5zZWN0aW9uLCAuc2VjdGlvbjJ7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuLyogb3luYSAgKi9cclxuLm95bmF7XHJcbiAgICBncmlkLWNvbHVtbjogOSAvIDExO1xyXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbi8qIHNlY3Rpb24yICovXHJcbi5iMXtcclxuICAgIGdyaWQtY29sdW1uOiA5IC8gMTE7XHJcbiAgICBncmlkLXJvdzogMiAvIDM7XHJcbn1cclxuLmIye1xyXG4gICAgZ3JpZC1jb2x1bW46IDkgLyAxMTtcclxuICAgIGdyaWQtcm93OiAzIC8gNDtcclxufVxyXG4uYjN7XHJcbiAgICBncmlkLWNvbHVtbjogOSAvIDExO1xyXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xyXG59XHJcbi5iNHtcclxuICAgIGdyaWQtY29sdW1uOiA5IC8gMTE7XHJcbiAgICBncmlkLXJvdzogNSAvIDY7XHJcbn1cclxuLmI1e1xyXG4gICAgZ3JpZC1jb2x1bW46IDkgLyAxMTtcclxuICAgIGdyaWQtcm93OiA2IC8gNztcclxufVxyXG4uYjZ7ICAgIFxyXG4gICAgZ3JpZC1jb2x1bW46IDkgLyAxMTtcclxuICAgIGdyaWQtcm93OiA3IC8gODtcclxufVxyXG5cclxuLm1haW57XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIDc7XHJcbiAgICBncmlkLXJvdzogMiAvIDc7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyOiBub25lIWltcG9ydGFudDtcclxufVxyXG4uYWR2ZXJ0e1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyA3O1xyXG4gICAgZ3JpZC1yb3c6IDcgLyA4O1xyXG59XHJcbi52aWRlb3tcclxuICAgIG91dGxpbmU6IDA7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-display',
                templateUrl: './user-display.component.html',
                styleUrls: ['./user-display.component.scss'],
            }]
    }], function () { return [{ type: src_app_shared_service_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }, { type: src_app_shared_service_websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"] }]; }, { audio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["myAudio"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=components-user-display-user-display-module-es2015.js.map