(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-queue-queue-module"], {
    /***/
    "0dW4": function dW4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ButtonViewComponent", function () {
        return ButtonViewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/service/data.service */
      "J8x5");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var ButtonViewComponent = /*#__PURE__*/function () {
        function ButtonViewComponent(dataService, router) {
          _classCallCheck(this, ButtonViewComponent);

          this.dataService = dataService;
          this.router = router;
        }

        _createClass(ButtonViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {} // delete() {
          //   console.log('Deleting', this.rowData);
          //   this.save.emit(this.rowData);
          // }

        }, {
          key: "addMenu",
          value: function addMenu() {
            var _this = this;

            var _a;

            console.log('addMenu', this.dataService.menu);
            (_a = this.dataService.menu) === null || _a === void 0 ? void 0 : _a.forEach(function (m, i) {
              if (m.symbol === _this.rowData.symbol) {
                _this.dataService.selected.index = i;

                _this.router.navigateByUrl('/queue-sub');
              }
            }); // console.log('Editing', this.rowData);
            // this.save.emit(this.rowData);
          }
        }]);

        return ButtonViewComponent;
      }();

      ButtonViewComponent.ɵfac = function ButtonViewComponent_Factory(t) {
        return new (t || ButtonViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      ButtonViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ButtonViewComponent,
        selectors: [["button-view"]],
        inputs: {
          value: "value",
          rowData: "rowData"
        },
        decls: 6,
        vars: 0,
        consts: [[1, "d-flex", "flex-nowrap", "text-white", 2, "display", "flex", "justify-content", "center"], ["type", "button", 1, "btn", "btn-info", 3, "click"], [1, "fa", "fa-plus"], [1, "fa", "fa-minus"]],
        template: function ButtonViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonViewComponent_Template_button_click_1_listener() {
              return ctx.addMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "/");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonViewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'button-view',
            template: "\n    <div\n      class=\"d-flex flex-nowrap text-white\"\n      style=\"display:flex; justify-content:center;\"\n    >\n      <button type=\"button\" class=\"btn btn-info\" (click)=\"addMenu()\">\n        <i class=\"fa fa-plus\"></i><strong>/</strong>\n        <i class=\"fa fa-minus\"></i>\n      </button>\n    </div>\n  "
          }]
        }], function () {
          return [{
            type: src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, {
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          rowData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "7qBR": function qBR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QueueModule", function () {
        return QueueModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _queue_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./queue-routing.module */
      "V5qB");
      /* harmony import */


      var _queue_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./queue.component */
      "NcHq");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng2-smart-table */
      "RS3s");

      var QueueModule = function QueueModule() {
        _classCallCheck(this, QueueModule);
      };

      QueueModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: QueueModule
      });
      QueueModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function QueueModule_Factory(t) {
          return new (t || QueueModule)();
        },
        providers: [],
        imports: [[_queue_routing_module__WEBPACK_IMPORTED_MODULE_2__["QueueRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["Ng2SmartTableModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](QueueModule, {
          declarations: [_queue_component__WEBPACK_IMPORTED_MODULE_3__["QueueComponent"]],
          imports: [_queue_routing_module__WEBPACK_IMPORTED_MODULE_2__["QueueRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["Ng2SmartTableModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QueueModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_queue_component__WEBPACK_IMPORTED_MODULE_3__["QueueComponent"]],
            imports: [_queue_routing_module__WEBPACK_IMPORTED_MODULE_2__["QueueRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["Ng2SmartTableModule"]],
            providers: [],
            bootstrap: [],
            entryComponents: []
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "NcHq": function NcHq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QueueComponent", function () {
        return QueueComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _button_view_button_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./button-view/button-view.component */
      "0dW4");
      /* harmony import */


      var src_app_shared_service_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/service/http.service */
      "uiMJ");
      /* harmony import */


      var src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/service/data.service */
      "J8x5");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng2-smart-table */
      "RS3s");

      function QueueComponent_div_47_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Menyu");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ng2-smart-table", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("deleteConfirm", function QueueComponent_div_47_Template_ng2_smart_table_deleteConfirm_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r2.onDeleteConfirm($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("settings", ctx_r0.settings)("source", ctx_r0.menu_list);
        }
      }

      function QueueComponent_div_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var QueueComponent = /*#__PURE__*/function () {
        function QueueComponent(httpService, dataService) {
          _classCallCheck(this, QueueComponent);

          this.httpService = httpService;
          this.dataService = dataService;
          this.menu_list = [];
          this.loading = true;
          this.settings = {
            "delete": {
              confirmDelete: true,
              deleteButtonContent: '<a class="table_del_default_icon"></a>'
            },
            actions: {
              add: false,
              edit: false,
              "delete": true,
              position: 'right'
            },
            columns: {
              symbol: {
                title: 'Ramzi'
              },
              title: {
                title: 'Sarlavha'
              },
              link: {
                title: 'Ichki menyu boshqarish',
                type: 'custom',
                renderComponent: _button_view_button_view_component__WEBPACK_IMPORTED_MODULE_2__["ButtonViewComponent"]
              }
            }
          };
          console.log('QueueComponent');
          this.getMenu(0);
        }

        _createClass(QueueComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "addMenu",
          value: function addMenu() {
            this.dataService.menuNew.symbol = this.dataService.menuNew.symbol_lang.en;
            this.dataService.menu.push(this.dataService.menuNew);
            this.loading = true;
            this.updateMenu(this.dataService.menu);
          }
        }, {
          key: "updateMenu",
          value: function updateMenu(menu) {
            var _this2 = this;

            this.httpService.updateMenu(menu).subscribe(function (res) {
              console.log(res);

              if (res.status === 200) {
                _this2.loading = false;
                alert("Ma'lumotlar muvafaqqiyatli yangilandi!");
                window.location.reload();
              } else {
                alert('Bazaka ulana olmadim yana bir bor urinib ko‘ring!1');
                window.location.reload();
              }
            }, function (error) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        alert('Bazaka ulana olmadim yana bir bor urinib ko‘ring! a1 Error:' + JSON.stringify(error));

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));
            });
          }
        }, {
          key: "getMenu",
          value: function getMenu(i) {
            var _this3 = this;

            // if(this.dataService.menu){this.loading = false;return;};
            this.httpService.getMenu().subscribe(function (menu) {
              // console.log(res);
              // if(res.status===200){
              _this3.dataService.menu = menu;
              menu.forEach(function (m) {
                _this3.menu_list.push({
                  symbol: m.symbol,
                  title: m.title.uz
                });
              });
              _this3.loading = false;
              localStorage.setItem('menu', JSON.stringify(menu)); // }else{
              //   alert("Bazaka ulana olmadim yana bir bor urinib ko‘ring!");
              //   window.location.reload();
              // }
            }, function (error) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var _this4 = this;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        if (i < 10) {
                          setTimeout(function () {
                            _this4.getMenu(i + 1);
                          }, 1000);
                        } else {
                          alert('Bazaka ulana olmadim yana bir bor urinib ko‘ring! 2');
                        }

                      case 1:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));
            });
          }
        }, {
          key: "onDeleteConfirm",
          value: function onDeleteConfirm(event) {
            var symbol = event.data.symbol;
            var menu = [];
            this.dataService.menu.forEach(function (m, i) {
              if (m.symbol !== symbol) {
                menu.push(m);
              }
            });
            this.loading = true;
            this.updateMenu(menu);
          }
        }]);

        return QueueComponent;
      }();

      QueueComponent.ɵfac = function QueueComponent_Factory(t) {
        return new (t || QueueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]));
      };

      QueueComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: QueueComponent,
        selectors: [["app-queue"]],
        decls: 49,
        vars: 9,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "needs-validation"], [1, "form-group", "row"], ["for", "validationCustom0", 1, "col-xl-3", "col-md-4"], ["id", "validationCustom0", "type", "text", "required", "", 1, "form-control", "col-md-8", 3, "ngModel", "ngModelChange"], ["for", "validationCustom01", 1, "col-xl-3", "col-md-4"], ["id", "validationCustom01", "type", "text", "required", "", 1, "form-control", "col-md-8", 3, "ngModel", "ngModelChange"], ["for", "validationCustom02", 1, "col-xl-3", "col-md-4"], ["id", "validationCustom02", "type", "text", "required", "", 1, "form-control", "col-md-8", 3, "ngModel", "ngModelChange"], ["for", "validationCustom1", 1, "col-xl-3", "col-md-4"], ["id", "validationCustom1", "required", "", 1, "form-control", "col-md-8", 3, "ngModel", "ngModelChange"], ["for", "validationCustom11", 1, "col-xl-3", "col-md-4"], ["id", "validationCustom11", "required", "", 1, "form-control", "col-md-8", 3, "ngModel", "ngModelChange"], ["for", "validationCustom12", 1, "col-xl-3", "col-md-4"], ["id", "validationCustom12", "required", "", 1, "form-control", "col-md-8", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"], ["class", "container-fluid", 4, "ngIf"], ["class", "lds-wrap", 4, "ngIf"], ["id", "batchDelete", 1, "category-table", "custom-datatable", "transcation-datatable", "user-image"], [1, "table-responsive"], [3, "settings", "source", "deleteConfirm"], [1, "lds-wrap"], [1, "lds-dual-ring"]],
        template: function QueueComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Menyu qo\u2018shish");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Ramzi uz");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function QueueComponent_Template_input_ngModelChange_14_listener($event) {
              return ctx.dataService.menuNew.symbol_lang.uz = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Ramzi ru");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function QueueComponent_Template_input_ngModelChange_20_listener($event) {
              return ctx.dataService.menuNew.symbol_lang.ru = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Ramzi en");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function QueueComponent_Template_input_ngModelChange_26_listener($event) {
              return ctx.dataService.menuNew.symbol_lang.en = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Sarlavha uz");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "textarea", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function QueueComponent_Template_textarea_ngModelChange_32_listener($event) {
              return ctx.dataService.menuNew.title.uz = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, " Sarlavha ru");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "textarea", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function QueueComponent_Template_textarea_ngModelChange_38_listener($event) {
              return ctx.dataService.menuNew.title.ru = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "label", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " Sarlavha en");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "textarea", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function QueueComponent_Template_textarea_ngModelChange_44_listener($event) {
              return ctx.dataService.menuNew.title.en = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QueueComponent_Template_button_click_45_listener() {
              return ctx.addMenu();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Qo'shish");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, QueueComponent_div_47_Template, 9, 2, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, QueueComponent_div_48_Template, 2, 0, "div", 22);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.dataService.menuNew.symbol_lang.uz);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.dataService.menuNew.symbol_lang.ru);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.dataService.menuNew.symbol_lang.en);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.dataService.menuNew.title.uz);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.dataService.menuNew.title.ru);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.dataService.menuNew.title.en);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.dataService.menuNew.symbol_lang.uz || !ctx.dataService.menuNew.symbol_lang.ru || !ctx.dataService.menuNew.symbol_lang.en || !ctx.dataService.menuNew.title.uz || !ctx.dataService.menuNew.title.ru || !ctx.dataService.menuNew.title.en);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__["Ng2SmartTableComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWV1ZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QueueComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-queue',
            templateUrl: './queue.component.html',
            styleUrls: ['./queue.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_shared_service_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
          }, {
            type: src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "V5qB": function V5qB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QueueRoutingModule", function () {
        return QueueRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _queue_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./queue.component */
      "NcHq");

      var routes = [{
        path: '',
        component: _queue_component__WEBPACK_IMPORTED_MODULE_2__["QueueComponent"],
        data: {
          title: "Navbat olish",
          breadcrumb: "Navbat olish"
        }
      }];

      var QueueRoutingModule = function QueueRoutingModule() {
        _classCallCheck(this, QueueRoutingModule);
      };

      QueueRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: QueueRoutingModule
      });
      QueueRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function QueueRoutingModule_Factory(t) {
          return new (t || QueueRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](QueueRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QueueRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=components-queue-queue-module-es5.js.map