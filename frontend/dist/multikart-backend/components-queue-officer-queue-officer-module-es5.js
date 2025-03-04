(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-queue-officer-queue-officer-module"], {
    /***/
    "BQJQ": function BQJQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QueueOfficerModule", function () {
        return QueueOfficerModule;
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


      var _queue_officer_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./queue-officer-routing.module */
      "HJUg");
      /* harmony import */


      var _queue_officer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./queue-officer.component */
      "YFa9");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng2-smart-table */
      "RS3s");

      var QueueOfficerModule = function QueueOfficerModule() {
        _classCallCheck(this, QueueOfficerModule);
      };

      QueueOfficerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: QueueOfficerModule
      });
      QueueOfficerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function QueueOfficerModule_Factory(t) {
          return new (t || QueueOfficerModule)();
        },
        providers: [],
        imports: [[_queue_officer_routing_module__WEBPACK_IMPORTED_MODULE_2__["QueueOfficerRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["Ng2SmartTableModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](QueueOfficerModule, {
          declarations: [_queue_officer_component__WEBPACK_IMPORTED_MODULE_3__["QueueOfficerComponent"]],
          imports: [_queue_officer_routing_module__WEBPACK_IMPORTED_MODULE_2__["QueueOfficerRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["Ng2SmartTableModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QueueOfficerModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_queue_officer_component__WEBPACK_IMPORTED_MODULE_3__["QueueOfficerComponent"]],
            imports: [_queue_officer_routing_module__WEBPACK_IMPORTED_MODULE_2__["QueueOfficerRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["Ng2SmartTableModule"]],
            providers: [],
            bootstrap: [],
            entryComponents: []
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "HJUg": function HJUg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QueueOfficerRoutingModule", function () {
        return QueueOfficerRoutingModule;
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


      var _queue_officer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./queue-officer.component */
      "YFa9");

      var routes = [{
        path: '',
        component: _queue_officer_component__WEBPACK_IMPORTED_MODULE_2__["QueueOfficerComponent"],
        data: {
          title: "Navbat olish",
          breadcrumb: "Navbat olish"
        }
      }];

      var QueueOfficerRoutingModule = function QueueOfficerRoutingModule() {
        _classCallCheck(this, QueueOfficerRoutingModule);
      };

      QueueOfficerRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: QueueOfficerRoutingModule
      });
      QueueOfficerRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function QueueOfficerRoutingModule_Factory(t) {
          return new (t || QueueOfficerRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](QueueOfficerRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QueueOfficerRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "YFa9": function YFa9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QueueOfficerComponent", function () {
        return QueueOfficerComponent;
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


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng2-smart-table */
      "RS3s");
      /* harmony import */


      var src_app_shared_service_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/service/http.service */
      "uiMJ");
      /* harmony import */


      var src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/service/data.service */
      "J8x5");
      /* harmony import */


      var src_app_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/service/auth.service */
      "Da3E");
      /* harmony import */


      var src_app_shared_service_websocket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/service/websocket.service */
      "yrUK");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["myAudio"];

      function QueueOfficerComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Ma'lumot yo'q");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function QueueOfficerComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Navbat");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QueueOfficerComponent_div_3_Template_div_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r4.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h6");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Chiqish");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function QueueOfficerComponent_div_3_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r6.connectToQueue();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "ng2-smart-table", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Keyingi navbat ", ctx_r1.current_queue ? ctx_r1.current_queue : "", "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.officerSocketStatus ? "Bandman" : "Qabul", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("settings", ctx_r1.settings)("source", ctx_r1.dataSource);
        }
      }

      function QueueOfficerComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var QueueOfficerComponent = /*#__PURE__*/function () {
        function QueueOfficerComponent(httpService, dataService, authService, socket) {
          var _this = this;

          _classCallCheck(this, QueueOfficerComponent);

          this.httpService = httpService;
          this.dataService = dataService;
          this.authService = authService;
          this.socket = socket;
          this.tmp = {
            loading: true,
            emptyPage: false
          };
          this.dataSource = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["LocalDataSource"]();
          this.officerSocketStatus = false;
          this.current_queue = '';
          this.type_services = [];
          this.settings = {
            actions: {
              add: false,
              edit: false,
              "delete": false,
              position: 'none'
            },
            pager: {
              perPage: 100
            },
            columns: {
              symbol: {
                title: 'Ramzi'
              },
              current: {
                title: 'Hozirgi'
              },
              overall: {
                title: 'Umumiy'
              },
              context: {
                title: 'Mazmuni'
              }
            }
          };
          var user = {
            token: '123d'
          };
          this.socket.websocket_connection(user);
          this.socket.menu_updated().subscribe(function (res) {
            console.log('menu_updated', res);
            _this.dataService.menu = res.menu;

            _this.genTable('load');
          });
          this.socket.next_service_officer().subscribe(function (next_service) {
            _this.dataService.menu = next_service.menu;

            _this.genTable('load');

            _this.officerSocketStatus = false;

            _this.audio.nativeElement.play();

            var _next_service$message = next_service.message,
                menuIndex = _next_service$message.menuIndex,
                next_number = _next_service$message.next_number,
                reception_number = _next_service$message.reception_number,
                subMenuIndex = _next_service$message.subMenuIndex,
                symbol = _next_service$message.symbol;
            _this.current_queue = next_service.menu[menuIndex].inner_menu[subMenuIndex].uz + ' ' + symbol + (subMenuIndex + 1) + '-' + next_number;
          }); // this.authService.user.subscribe((user) => {

          console.log('this.dataService.user', this.dataService.user); // const user = this.dataService.user

          this.type_services = this.dataService.user.services;
          this.user_symbol = this.dataService.user.reception_number;
          this.getMenu(0); // });

          this.socket.disconnect_officer(function () {
            _this.officerSocketStatus = false;
          });
        }

        _createClass(QueueOfficerComponent, [{
          key: "connectToQueue",
          value: function connectToQueue() {
            this.socket.queue_officer(Object.assign(Object.assign({}, this.dataService.user), {
              status: !this.officerSocketStatus ? 'waiting' : 'serving'
            }));
            this.officerSocketStatus = !this.officerSocketStatus;
          }
        }, {
          key: "nextItem",
          value: function nextItem() {
            var _this2 = this;

            this.tmp.loading = true;
            var found = -1;
            var found_title = '';

            for (var i = 0; i < this.type_services.length; i++) {
              if (!this.type_services[i]['tmp_served']) {
                this.type_services[i]['tmp_served'] = true;
                found = i;
                found_title = this.type_services[i].title; // alert(i)

                if (i + 1 === this.type_services.length && found >= 0) {
                  for (var b = 0; b < this.type_services.length; b++) {
                    this.type_services[b]['tmp_served'] = false;
                  }
                }

                i = this.type_services.length;
              }
            }

            this.dataService.menu.forEach(function (menu, idx_m) {
              menu.inner_menu.forEach(function (inner_menu, idx_i) {
                if (found_title === inner_menu.uz) {
                  _this2.nextItemHttpReq(idx_m, idx_i, found);
                }
              });
            });
          }
        }, {
          key: "nextItemHttpReq",
          value: function nextItemHttpReq(menu_idx, menu_sub_idx, service_title_idx) {
            var _this3 = this;

            this.httpService.officerNextItem(menu_idx, menu_sub_idx).subscribe(function (res) {
              console.log(res);

              if (res.status === 200) {
                _this3.dataService.menu = res.menu;

                _this3.socket.queue_next({
                  reception_number: _this3.user_symbol,
                  next_number: _this3.dataService.menu[menu_idx].inner_menu[menu_sub_idx].queue.current,
                  symbol: _this3.dataService.menu[menu_idx].symbol + (menu_sub_idx + 1).toString()
                });

                _this3.genTable('refresh');
              } else if (res.status === 201) {
                setTimeout(function () {
                  _this3.type_services[service_title_idx]['full_served'] = true;
                  console.log(service_title_idx); // if(service_title_idx!==0){

                  var full_served_found = true;

                  _this3.type_services.forEach(function (ser, ser_idx) {
                    if (!ser['full_served']) {
                      full_served_found = false;
                    }

                    if (ser_idx + 1 === _this3.type_services.length) {
                      if (full_served_found) {
                        _this3.tmp.loading = false;
                        alert("Navbatda hech kim yo'q!");
                      } else {
                        _this3.dataService.menu = res.menu;

                        _this3.nextItem();
                      }
                    }
                  }); // }else{
                  // 	console.log(3)
                  //  this.dataService.menu = res.menu;
                  // 	this.nextItem();
                  // }

                }, 2000);
              } else {
                alert('Nimadur hato ketti yana bir bor urinib ko‘ring! 3'); // window.location.reload();
              }
            }, function (error) {
              alert('Bazaka ulana olmadim yana bir bor urinib ko‘ring! 4');
            });
          }
        }, {
          key: "getMenu",
          value: function getMenu(i) {
            var _this4 = this;

            if (this.dataService.menu) {
              return;
            }

            this.httpService.getMenu().subscribe(function (menu) {
              // console.log(res);
              // if (res.status === 200) {
              _this4.dataService.menu = menu;

              _this4.genTable('load'); // } else {
              //   alert('Bazaka ulana olmadim yana bir bor urinib ko‘ring! 6');
              //   window.location.reload();
              // }

            }, function (error) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _this5 = this;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        if (i < 10) {
                          setTimeout(function () {
                            _this5.getMenu(i + 1);
                          }, 1000);
                        } else {
                          alert('Bazaka ulana olmadim yana bir bor urinib ko‘ring! 5');
                        }

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
          key: "logout",
          value: function logout() {
            this.authService.signOut(); // this.afAuth
            //   .signOut()
            //   .then(() => {
            //     this.router.navigate(['/auth/login']);
            //   })
            //   .catch((error) => {
            //     console.error('Error during logout:', error);
            //   });
          }
        }, {
          key: "genTable",
          value: function genTable(type) {
            var _this6 = this;

            var _a;

            var items = [];
            console.log('this.dataService.menu', this.dataService.menu);
            console.log('this.type_services', this.type_services);
            (_a = this.dataService.menu) === null || _a === void 0 ? void 0 : _a.forEach(function (menu) {
              menu.inner_menu.forEach(function (inner_menu, idx) {
                if (_this6.type_services.find(function (h) {
                  return h.title === inner_menu.uz;
                })) {
                  items.push({
                    symbol: menu.symbol + (idx + 1),
                    context: inner_menu.uz,
                    overall: inner_menu.queue.overall,
                    current: inner_menu.queue.current
                  });
                }
              });
            });
            console.log('items load', items);
            this.dataSource.load(items);
            if (type === 'refresh') this.dataSource.refresh();
            this.tmp.loading = false;
          }
        }]);

        return QueueOfficerComponent;
      }();

      QueueOfficerComponent.ɵfac = function QueueOfficerComponent_Factory(t) {
        return new (t || QueueOfficerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_websocket_service__WEBPACK_IMPORTED_MODULE_6__["WebsocketService"]));
      };

      QueueOfficerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: QueueOfficerComponent,
        selectors: [["app-queue-officer"]],
        viewQuery: function QueueOfficerComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.audio = _t.first);
          }
        },
        decls: 9,
        vars: 3,
        consts: [[1, "container-fluid"], [1, "card"], ["class", "card-header", 4, "ngIf"], [4, "ngIf"], ["myAudio", ""], ["src", "https://navbat.ferpi.uz/assets/ringtones/new_user.ogg", "type", "audio/ogg"], ["scr", "https://navbat.ferpi.uz/assets/ringtones/new_user.mp3", "type", "audio/mpeg"], ["class", "lds-wrap", 4, "ngIf"], [1, "card-header"], [1, "card-header", 2, "display", "flex", "justify-content", "space-between"], [2, "cursor", "pointer", 3, "click"], [1, "card-body"], [2, "display", "flex", "justify-content", "space-between"], [1, "btn-popup"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["id", "batchDelete", 1, "category-table", "custom-datatable", "transcation-datatable", "user-image"], [1, "table-responsive"], [3, "settings", "source"], [1, "lds-wrap"], [1, "lds-dual-ring"]],
        template: function QueueOfficerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, QueueOfficerComponent_div_2_Template, 3, 0, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, QueueOfficerComponent_div_3_Template, 19, 4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "audio", null, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "source", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "source", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, QueueOfficerComponent_div_8_Template, 2, 0, "div", 7);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tmp.emptyPage);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.tmp.emptyPage && !ctx.tmp.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tmp.loading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["Ng2SmartTableComponent"]],
        styles: [".main[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.main[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 1;\n  background-image: url('shutterstock_14685019.jpg');\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxxdWV1ZS1vZmZpY2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msa0JBQUE7QUFDRDs7QUFDQTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0csa0RBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBRUEsc0JBQUE7QUFFSiIsImZpbGUiOiJxdWV1ZS1vZmZpY2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW57XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5tYWluOmJlZm9yZXtcclxuXHRjb250ZW50OiAnJztcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6MDtcclxuXHRib3R0b206IDA7XHJcblx0cmlnaHQ6MDtcclxuXHR6LWluZGV4OiAxO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3NodXR0ZXJzdG9ja18xNDY4NTAxOS5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](QueueOfficerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-queue-officer',
            templateUrl: './queue-officer.component.html',
            styleUrls: ['./queue-officer.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_shared_service_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
          }, {
            type: src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]
          }, {
            type: src_app_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
          }, {
            type: src_app_shared_service_websocket_service__WEBPACK_IMPORTED_MODULE_6__["WebsocketService"]
          }];
        }, {
          audio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['myAudio']
          }]
        });
      })();

      function makeid(length) {
        var result = '';
        var characters = '123456789'; // var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        var charactersLength = characters.length;

        for (var i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=components-queue-officer-queue-officer-module-es5.js.map