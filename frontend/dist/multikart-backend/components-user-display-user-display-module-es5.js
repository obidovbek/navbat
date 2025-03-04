(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-user-display-user-display-module"], {
    /***/
    "arP0": function arP0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserDisplayRoutingModule", function () {
        return UserDisplayRoutingModule;
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


      var _user_display_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-display.component */
      "nJJ3");

      var routes = [{
        path: '',
        component: _user_display_component__WEBPACK_IMPORTED_MODULE_2__["UserDisplayComponent"],
        data: {
          title: "Navbat olish",
          breadcrumb: "Navbat olish"
        }
      }];

      var UserDisplayRoutingModule = function UserDisplayRoutingModule() {
        _classCallCheck(this, UserDisplayRoutingModule);
      };

      UserDisplayRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: UserDisplayRoutingModule
      });
      UserDisplayRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function UserDisplayRoutingModule_Factory(t) {
          return new (t || UserDisplayRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserDisplayRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDisplayRoutingModule, [{
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
    "jfr+": function jfr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserDisplayModule", function () {
        return UserDisplayModule;
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


      var _user_display_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-display-routing.module */
      "arP0");
      /* harmony import */


      var _user_display_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./user-display.component */
      "nJJ3");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng2-smart-table */
      "RS3s");

      var UserDisplayModule = function UserDisplayModule() {
        _classCallCheck(this, UserDisplayModule);
      };

      UserDisplayModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: UserDisplayModule
      });
      UserDisplayModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function UserDisplayModule_Factory(t) {
          return new (t || UserDisplayModule)();
        },
        providers: [],
        imports: [[_user_display_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserDisplayRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["Ng2SmartTableModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserDisplayModule, {
          declarations: [_user_display_component__WEBPACK_IMPORTED_MODULE_3__["UserDisplayComponent"]],
          imports: [_user_display_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserDisplayRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["Ng2SmartTableModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDisplayModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_user_display_component__WEBPACK_IMPORTED_MODULE_3__["UserDisplayComponent"]],
            imports: [_user_display_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserDisplayRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["Ng2SmartTableModule"]],
            providers: [],
            bootstrap: [],
            entryComponents: []
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "nJJ3": function nJJ3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserDisplayComponent", function () {
        return UserDisplayComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "cxbk");
      /* harmony import */


      var src_app_shared_service_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/service/http.service */
      "uiMJ");
      /* harmony import */


      var src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/service/data.service */
      "J8x5");
      /* harmony import */


      var src_app_shared_service_websocket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/service/websocket.service */
      "yrUK");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["myAudio"];

      function UserDisplayComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 23);
        }
      }

      function UserDisplayComponent_span_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx_r1.current_queues_loop[0].symbol, "", ctx_r1.current_queues_loop[0].subMenuIndex + 1, "-", ctx_r1.current_queues_loop[0].next_number, "");
        }
      }

      function UserDisplayComponent_span_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx_r2.current_queues_loop[1].symbol, "", ctx_r2.current_queues_loop[1].subMenuIndex + 1, "-", ctx_r2.current_queues_loop[1].next_number, "");
        }
      }

      function UserDisplayComponent_span_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx_r3.current_queues_loop[2].symbol, "", ctx_r3.current_queues_loop[2].subMenuIndex + 1, "-", ctx_r3.current_queues_loop[2].next_number, "");
        }
      }

      function UserDisplayComponent_span_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx_r4.current_queues_loop[3].symbol, "", ctx_r4.current_queues_loop[3].subMenuIndex + 1, "-", ctx_r4.current_queues_loop[3].next_number, "");
        }
      }

      function UserDisplayComponent_span_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx_r5.current_queues_loop[4].symbol, "", ctx_r5.current_queues_loop[4].subMenuIndex + 1, "-", ctx_r5.current_queues_loop[4].next_number, "");
        }
      }

      function UserDisplayComponent_span_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx_r6.current_queues_new.symbol, "", ctx_r6.current_queues_new.subMenuIndex + 1, "-", ctx_r6.current_queues_new.next_number, "");
        }
      }

      function UserDisplayComponent_span_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.current_queues_loop[0].reception_number);
        }
      }

      function UserDisplayComponent_span_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.current_queues_loop[1].reception_number);
        }
      }

      function UserDisplayComponent_span_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.current_queues_loop[2].reception_number);
        }
      }

      function UserDisplayComponent_span_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.current_queues_loop[3].reception_number);
        }
      }

      function UserDisplayComponent_span_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.current_queues_loop[4].reception_number);
        }
      }

      function UserDisplayComponent_span_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.current_queues_new.reception_number);
        }
      }

      var UserDisplayComponent = /*#__PURE__*/function () {
        function UserDisplayComponent(httpService, dataService, socket) {
          _classCallCheck(this, UserDisplayComponent);

          this.httpService = httpService;
          this.dataService = dataService;
          this.socket = socket;
          this.current_queues_new = null;
          this.current_queues = [];
          this.current_queues_loop = [];
          this.environmet = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"];
          var user = {
            token: 'user-display'
          };
          this.socket.websocket_connection(user);
          this.socket.connect_user_display();
          this.nextServiceDisplay();
          this.current_queues_loop_func(0);
        }

        _createClass(UserDisplayComponent, [{
          key: "current_queues_loop_func",
          value: function current_queues_loop_func(i) {
            var _this = this;

            this.current_queues_loop = [];
            setTimeout(function () {
              var a = i * 5;
              var b = i * 5 + 5;

              for (var x = a; x < b; x++) {
                if (_this.current_queues[x]) {
                  _this.current_queues_loop.push(_this.current_queues[x]);
                } else {
                  i = -1;
                }
              }
            }, 500);
            setTimeout(function () {
              _this.current_queues_loop_func(i + 1);
            }, 10000);
          }
        }, {
          key: "getStatistics",
          value: function getStatistics() {
            var _this2 = this;

            this.httpService.getStatistics().subscribe(function (res) {
              console.log('res', res);
              _this2.service_used_number = res.queue_orders.length; // this.genTable(res.queue_orders);
              // this.dataSource.load(res.queue_orders.reverse());
            }, function (error) {
              console.error(error);
            });
          }
        }, {
          key: "nextServiceDisplay",
          value: function nextServiceDisplay() {
            var _this3 = this;

            this.getStatistics();
            this.socket.next_service_display().subscribe(function (next_queue) {
              console.log('next_queue', next_queue);

              if (next_queue) {
                _this3.current_queues_new = next_queue;

                _this3.audio.nativeElement.play();

                setTimeout(function () {
                  _this3.current_queues_new = null;
                  var found = false;

                  _this3.current_queues.forEach(function (h, h_idx) {
                    if (h.reception_number && h.reception_number === next_queue.reception_number) {
                      found = true;
                      _this3.current_queues[h_idx] = next_queue;
                    }

                    if (h_idx + 1 === _this3.current_queues.length && !found) {
                      _this3.current_queues.push(next_queue);
                    }
                  });

                  if (!_this3.current_queues.length) {
                    _this3.current_queues.push(next_queue);
                  }
                }, 5000); // if(this.current_queues.find(h=>(!h.reception_number)||(h.reception_number!==res.data.reception_number))){
                // console.log('nextUserDisplay: ',res)
                // 	this.current_queues.push(res.data);
                // }
              }
            });
          }
        }]);

        return UserDisplayComponent;
      }();

      UserDisplayComponent.ɵfac = function UserDisplayComponent_Factory(t) {
        return new (t || UserDisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_websocket_service__WEBPACK_IMPORTED_MODULE_4__["WebsocketService"]));
      };

      UserDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UserDisplayComponent,
        selectors: [["app-user-display"]],
        viewQuery: function UserDisplayComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.audio = _t.first);
          }
        },
        decls: 38,
        vars: 14,
        consts: [[1, "container_2"], [1, "header"], [1, "main"], ["width", "100%", "height", "100%", "src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://www.youtube.com/embed/x_Ao9O5g5JM?si=XMnDAoXApct1mebQ&autoplay=1&loop=1"), "title", "YouTube video player", "frameborder", "0", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", "referrerpolicy", "strict-origin-when-cross-origin", "allowfullscreen", ""], ["class", "advert", 4, "ngIf"], [1, "talon"], [1, "section", "a1"], [4, "ngIf"], [1, "section", "a2"], [1, "section", "a3"], [1, "section", "a4"], [1, "section", "a5"], [1, "section", "a6"], [1, "oyna"], [1, "section2", "b1"], [1, "section2", "b2"], [1, "section2", "b3"], [1, "section2", "b4"], [1, "section2", "b5"], [1, "section2", "b6"], ["myAudio", ""], ["src", "https://navbat.ferpi.uz/assets/ringtones/new_user.ogg", "type", "audio/ogg"], ["scr", "https://navbat.ferpi.uz/assets/ringtones/new_user.mp3", "type", "audio/mpeg"], [1, "advert"]],
        template: function UserDisplayComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "iframe", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserDisplayComponent_div_5_Template, 1, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "CHEK");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UserDisplayComponent_span_9_Template, 2, 3, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UserDisplayComponent_span_11_Template, 2, 3, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UserDisplayComponent_span_13_Template, 2, 3, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UserDisplayComponent_span_15_Template, 2, 3, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, UserDisplayComponent_span_17_Template, 2, 3, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, UserDisplayComponent_span_19_Template, 2, 3, "span", 7);

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
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.environmet.otm_name, " talabalarga xizmat ko\u2018rsatish ofisiga XUSH KELIBSIZ! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

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
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
        styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"Quicksand\", sans-serif;\n}\n\n.container_2[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 100vw;\n  padding: 5px;\n  font-size: 18px;\n  font-weight: bold;\n  background-color: #6056f1;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(7, 1fr);\n  gap: 5px;\n  padding: 10px;\n}\n\n.container_2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  color: rgba(255, 255, 255, 0.938);\n  border: 1px solid rgba(255, 255, 255, 0.534);\n  border-radius: 3px;\n}\n\n.header[_ngcontent-%COMP%], .talon[_ngcontent-%COMP%], .oyna[_ngcontent-%COMP%] {\n  background-color: rgba(230, 252, 33, 0.918);\n  color: #443c3c !important;\n  font-size: 25px;\n}\n\n.header[_ngcontent-%COMP%] {\n  grid-column: 1/7;\n  font-size: 26px;\n  text-align: center;\n}\n\n.talon[_ngcontent-%COMP%] {\n  grid-column: 7/9;\n  font-size: 30px;\n}\n\n.section[_ngcontent-%COMP%] {\n  grid-column: 7/9;\n  gap: 5px;\n  position: relative;\n  padding: 15px;\n  transition: all 0.3s linear;\n}\n\n.section[_ngcontent-%COMP%], .section2[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n\n\n\n.oyna[_ngcontent-%COMP%] {\n  grid-column: 9/11;\n  grid-row: 1/2;\n  font-size: 30px;\n}\n\n\n\n.b1[_ngcontent-%COMP%] {\n  grid-column: 9/11;\n  grid-row: 2/3;\n}\n\n.b2[_ngcontent-%COMP%] {\n  grid-column: 9/11;\n  grid-row: 3/4;\n}\n\n.b3[_ngcontent-%COMP%] {\n  grid-column: 9/11;\n  grid-row: 4/5;\n}\n\n.b4[_ngcontent-%COMP%] {\n  grid-column: 9/11;\n  grid-row: 5/6;\n}\n\n.b5[_ngcontent-%COMP%] {\n  grid-column: 9/11;\n  grid-row: 6/7;\n}\n\n.b6[_ngcontent-%COMP%] {\n  grid-column: 9/11;\n  grid-row: 7/8;\n}\n\n.main[_ngcontent-%COMP%] {\n  grid-column: 1/7;\n  grid-row: 2/7;\n  overflow: hidden;\n  border: none !important;\n}\n\n.advert[_ngcontent-%COMP%] {\n  grid-column: 1/7;\n  grid-row: 7/8;\n}\n\n.video[_ngcontent-%COMP%] {\n  outline: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1c2VyLWRpc3BsYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNDQUFBO0VBQ0Esa0NBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtBQUVKOztBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0FBR0o7O0FBREE7RUFDSSwyQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUlKOztBQUZBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFLSjs7QUFIQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQU1KOztBQUpBO0VBQ0ksZ0JBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7QUFPSjs7QUFMQTtFQUNJLGVBQUE7QUFRSjs7QUFOQSxVQUFBOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQVNKOztBQVBBLGFBQUE7O0FBQ0E7RUFDSSxpQkFBQTtFQUNBLGFBQUE7QUFVSjs7QUFSQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtBQVdKOztBQVRBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0FBWUo7O0FBVkE7RUFDSSxpQkFBQTtFQUNBLGFBQUE7QUFhSjs7QUFYQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtBQWNKOztBQVpBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0FBZUo7O0FBWkE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBZUo7O0FBYkE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7QUFnQko7O0FBZEE7RUFDSSxVQUFBO0FBaUJKIiwiZmlsZSI6InVzZXItZGlzcGxheS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxufVxyXG4uY29udGFpbmVyXzJ7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTYsIDg2LCAyNDEpO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNywgMWZyKTtcclxuICAgIGdhcDogNXB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4uY29udGFpbmVyXzIgZGl2e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTM4KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MzQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcbi5oZWFkZXIsIC50YWxvbiwgLm95bmF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMCwgMjUyLCAzMywgMC45MTgpO1xyXG4gICAgY29sb3I6IHJnYig2OCwgNjAsIDYwKSFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn0gXHJcbi5oZWFkZXJ7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIDc7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRhbG9ue1xyXG4gICAgZ3JpZC1jb2x1bW46IDcgLyA5O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbi5zZWN0aW9ue1xyXG4gICAgZ3JpZC1jb2x1bW46IDcgLyA5O1xyXG4gICAgZ2FwOiA1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgbGluZWFyO1xyXG59XHJcbi5zZWN0aW9uLCAuc2VjdGlvbjJ7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbn1cclxuLyogb3luYSAgKi9cclxuLm95bmF7XHJcbiAgICBncmlkLWNvbHVtbjogOSAvIDExO1xyXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbi8qIHNlY3Rpb24yICovXHJcbi5iMXtcclxuICAgIGdyaWQtY29sdW1uOiA5IC8gMTE7XHJcbiAgICBncmlkLXJvdzogMiAvIDM7XHJcbn1cclxuLmIye1xyXG4gICAgZ3JpZC1jb2x1bW46IDkgLyAxMTtcclxuICAgIGdyaWQtcm93OiAzIC8gNDtcclxufVxyXG4uYjN7XHJcbiAgICBncmlkLWNvbHVtbjogOSAvIDExO1xyXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xyXG59XHJcbi5iNHtcclxuICAgIGdyaWQtY29sdW1uOiA5IC8gMTE7XHJcbiAgICBncmlkLXJvdzogNSAvIDY7XHJcbn1cclxuLmI1e1xyXG4gICAgZ3JpZC1jb2x1bW46IDkgLyAxMTtcclxuICAgIGdyaWQtcm93OiA2IC8gNztcclxufVxyXG4uYjZ7ICAgIFxyXG4gICAgZ3JpZC1jb2x1bW46IDkgLyAxMTtcclxuICAgIGdyaWQtcm93OiA3IC8gODtcclxufVxyXG5cclxuLm1haW57XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIDc7XHJcbiAgICBncmlkLXJvdzogMiAvIDc7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYm9yZGVyOiBub25lIWltcG9ydGFudDtcclxufVxyXG4uYWR2ZXJ0e1xyXG4gICAgZ3JpZC1jb2x1bW46IDEgLyA3O1xyXG4gICAgZ3JpZC1yb3c6IDcgLyA4O1xyXG59XHJcbi52aWRlb3tcclxuICAgIG91dGxpbmU6IDA7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserDisplayComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-user-display',
            templateUrl: './user-display.component.html',
            styleUrls: ['./user-display.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_shared_service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
          }, {
            type: src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
          }, {
            type: src_app_shared_service_websocket_service__WEBPACK_IMPORTED_MODULE_4__["WebsocketService"]
          }];
        }, {
          audio: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['myAudio']
          }]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=components-user-display-user-display-module-es5.js.map