(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-language-user-language-user-module"],{

/***/ "/eTD":
/*!**************************************************************************!*\
  !*** ./src/app/components/language-user/language-user-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: LanguageUserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageUserRoutingModule", function() { return LanguageUserRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _language_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language-user.component */ "t2v/");





const routes = [
    {
        path: '',
        component: _language_user_component__WEBPACK_IMPORTED_MODULE_2__["LanguageUserComponent"],
    },
];
class LanguageUserRoutingModule {
}
LanguageUserRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LanguageUserRoutingModule });
LanguageUserRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LanguageUserRoutingModule_Factory(t) { return new (t || LanguageUserRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LanguageUserRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LanguageUserRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "0kNb":
/*!******************************************************************!*\
  !*** ./src/app/components/language-user/language-user.module.ts ***!
  \******************************************************************/
/*! exports provided: LanguageUserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageUserModule", function() { return LanguageUserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _language_user_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language-user-routing.module */ "/eTD");
/* harmony import */ var _language_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./language-user.component */ "t2v/");





class LanguageUserModule {
}
LanguageUserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LanguageUserModule });
LanguageUserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LanguageUserModule_Factory(t) { return new (t || LanguageUserModule)(); }, providers: [], imports: [[
            _language_user_routing_module__WEBPACK_IMPORTED_MODULE_2__["LanguageUserRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LanguageUserModule, { declarations: [_language_user_component__WEBPACK_IMPORTED_MODULE_3__["LanguageUserComponent"]], imports: [_language_user_routing_module__WEBPACK_IMPORTED_MODULE_2__["LanguageUserRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LanguageUserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _language_user_component__WEBPACK_IMPORTED_MODULE_3__["LanguageUserComponent"],
                ],
                imports: [
                    _language_user_routing_module__WEBPACK_IMPORTED_MODULE_2__["LanguageUserRoutingModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ],
                providers: [],
                bootstrap: [],
                entryComponents: []
            }]
    }], null, null); })();


/***/ }),

/***/ "t2v/":
/*!*********************************************************************!*\
  !*** ./src/app/components/language-user/language-user.component.ts ***!
  \*********************************************************************/
/*! exports provided: LanguageUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageUserComponent", function() { return LanguageUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment.prod */ "cxbk");
/* harmony import */ var src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/data.service */ "J8x5");
/* harmony import */ var src_app_shared_service_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/http.service */ "uiMJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








class LanguageUserComponent {
    constructor(dataService, httpService, router) {
        this.dataService = dataService;
        this.httpService = httpService;
        this.router = router;
        this.environment = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"];
        this.getMenu(0);
    }
    ngOnInit() { }
    selectLanguage(lang) {
        this.dataService.selected.lang = lang;
        this.router.navigateByUrl('/queue-user');
    }
    getMenu(i) {
        if (this.dataService.menu) {
            return;
        }
        this.httpService.getMenu().subscribe((res) => {
            console.log(res);
            // if (res.status === 200) {
            this.dataService.menu = res;
            localStorage.setItem('menu', JSON.stringify(res));
            // } else {
            //   alert('Bazaga ulana olmadim yana bir bor urinib ko‘ring!');
            //   window.location.reload();
            // }
        }, (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (i < 2) {
                setTimeout(() => {
                    this.getMenu(i + 1);
                }, 1000);
            }
            else {
                // alert("Bazaka ulana olmadim, oflayn rejimda ishlayapti!");
                this.dataService.menu = yield localStorage.getItem('menu');
                this.dataService.menu = JSON.parse(this.dataService.menu);
            }
        }));
    }
}
LanguageUserComponent.ɵfac = function LanguageUserComponent_Factory(t) { return new (t || LanguageUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
LanguageUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LanguageUserComponent, selectors: [["app-language-user"]], decls: 10, vars: 1, consts: [[1, "lang"], [3, "ngClass"], [1, "lang-text"], [1, "lang-inner", 3, "click"]], template: function LanguageUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Kelajakni birgalikda quramiz!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LanguageUserComponent_Template_div_click_4_listener() { return ctx.selectLanguage("uz"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "O'zbekcha");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LanguageUserComponent_Template_div_click_6_listener() { return ctx.selectLanguage("ru"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u0420\u0443\u0441\u0441\u043A\u0438\u0439");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LanguageUserComponent_Template_div_click_8_listener() { return ctx.selectLanguage("en"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "English");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.environment.otm === "tsuos" ? "img-tsuos-logo" : ctx.environment.otm === "tkti" ? "img-tkti-logo" : "img");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Quicksand\", sans-serif;\n  color: #fff;\n}\n\n.img[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 150px;\n  margin-top: -25px;\n  padding-top: 15px;\n  position: relative;\n  background-image: url('logo.png');\n  background-size: 250px;\n}\n\n.img-tsuos-logo[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  margin-top: -25px;\n  padding-top: 15px;\n  position: relative;\n  background-image: url('tsuos-logo.png');\n  background-size: 150px;\n}\n\n.img-tkti-logo[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  margin-top: -25px;\n  padding-top: 15px;\n  position: relative;\n  background-image: url('tkti-logo.png');\n  background-size: 150px;\n}\n\n.img[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.lang-text[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-family: \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif;\n  margin-bottom: 5px;\n}\n\n.lang[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 15px;\n  background-image: url('bg.jpg');\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.lang-inner[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 40%;\n  display: block;\n  padding: 30px;\n  border-radius: 5px;\n  font-size: 45px;\n  cursor: pointer;\n  background-color: #5757c5;\n  color: #fff;\n  transition: 0.3s;\n}\n\n.lang-inner[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: #2626f3;\n  transform: translateY(4%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsYW5ndWFnZS11c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFFQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUVBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBRUEsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtFQUNBLDZFQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFEQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSwrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUFJRjs7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBS0Y7O0FBSEE7RUFDRSx1QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQU1GIiwiZmlsZSI6Imxhbmd1YWdlLXVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtZmFtaWx5OiBcIlF1aWNrc2FuZFwiLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5pbWcge1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIC8vIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIG1hcmdpbi10b3A6IC0yNXB4O1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9xdWV1ZS9sb2dvLnBuZyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAyNTBweDtcclxufVxyXG4uaW1nLXRzdW9zLWxvZ28ge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIC8vIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIG1hcmdpbi10b3A6IC0yNXB4O1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9xdWV1ZS90c3Vvcy1sb2dvLnBuZyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxNTBweDtcclxufVxyXG4uaW1nLXRrdGktbG9nbyB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgLy8gb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgbWFyZ2luLXRvcDogLTI1cHg7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3F1ZXVlL3RrdGktbG9nby5wbmcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTUwcHg7XHJcbn1cclxuLmltZzpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4ubGFuZy10ZXh0IHtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiR2lsbCBTYW5zXCIsIFwiR2lsbCBTYW5zIE1UXCIsIENhbGlicmksIFwiVHJlYnVjaGV0IE1TXCIsIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbi5sYW5nIHtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDE1cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9xdWV1ZS9iZy5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuLmxhbmctaW5uZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogNDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtc2l6ZTogNDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg3LCA4NywgMTk3KTtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0cmFuc2l0aW9uOiAwLjNzO1xyXG59XHJcbi5sYW5nLWlubmVyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogcmdiKDM4LCAzOCwgMjQzKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNCUpO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LanguageUserComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-language-user',
                templateUrl: './language-user.component.html',
                styleUrls: ['./language-user.component.scss'],
            }]
    }], function () { return [{ type: src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: src_app_shared_service_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=components-language-user-language-user-module-es2015.js.map