(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+803": function _(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function () {
        return BreadcrumbComponent;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/internal/operators */
      "yrbL");
      /* harmony import */


      var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../feather-icons/feather-icons.component */
      "pqks");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function BreadcrumbComponent_li_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.breadcrumbs == null ? null : ctx_r0.breadcrumbs.parentBreadcrumb, " ");
        }
      }

      function BreadcrumbComponent_li_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.breadcrumbs == null ? null : ctx_r1.breadcrumbs.childBreadcrumb, " ");
        }
      }

      var BreadcrumbComponent = /*#__PURE__*/function () {
        function BreadcrumbComponent(activatedRoute, router) {
          var _this = this;

          _classCallCheck(this, BreadcrumbComponent);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
          })).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
            return _this.activatedRoute;
          })).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (route) {
            while (route.firstChild) {
              route = route.firstChild;
            }

            return route;
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (route) {
            return route.outlet === _angular_router__WEBPACK_IMPORTED_MODULE_1__["PRIMARY_OUTLET"];
          })).subscribe(function (route) {
            var snapshot = _this.router.routerState.snapshot;
            var title = route.snapshot.data['title'];
            var parent = route.parent.snapshot.data['breadcrumb'];
            var child = route.snapshot.data['breadcrumb'];
            _this.breadcrumbs = {};
            _this.title = title;
            _this.breadcrumbs = {
              "parentBreadcrumb": parent,
              "childBreadcrumb": child
            };
          });
        }

        _createClass(BreadcrumbComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }]);

        return BreadcrumbComponent;
      }();

      BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) {
        return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      BreadcrumbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BreadcrumbComponent,
        selectors: [["app-breadcrumb"]],
        decls: 16,
        vars: 5,
        consts: [[1, "container-fluid"], [1, "page-header"], [1, "row"], [1, "col-lg-6"], [1, "page-header-left"], [1, "breadcrumb", "pull-right"], [1, "breadcrumb-item"], [3, "routerLink"], [3, "icon"], ["class", "breadcrumb-item", 4, "ngIf"], ["class", "breadcrumb-item active", 4, "ngIf"], [1, "breadcrumb-item", "active"]],
        template: function BreadcrumbComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "small");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Xizmat ko\u2018rsatish");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ol", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-feather-icons", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BreadcrumbComponent_li_14_Template, 2, 1, "li", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, BreadcrumbComponent_li_15_Template, 2, 1, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.title, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.breadcrumbs == null ? null : ctx.breadcrumbs.parentBreadcrumb);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.breadcrumbs == null ? null : ctx.breadcrumbs.childBreadcrumb);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_4__["FeatherIconsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-breadcrumb',
            templateUrl: './breadcrumb.component.html',
            styleUrls: ['./breadcrumb.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "+IRR": function IRR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContentLayoutComponent", function () {
        return ContentLayoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/animations */
      "R0Ic");
      /* harmony import */


      var ng_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng-animate */
      "5Rqa");
      /* harmony import */


      var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../service/auth.service */
      "Da3E");
      /* harmony import */


      var _service_nav_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../service/nav.service */
      "9HF/");
      /* harmony import */


      var _service_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../service/data.service */
      "J8x5");
      /* harmony import */


      var _service_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../service/http.service */
      "uiMJ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../components/header/header.component */
      "aZ8m");
      /* harmony import */


      var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../components/sidebar/sidebar.component */
      "BAfr");
      /* harmony import */


      var _components_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../components/right-sidebar/right-sidebar.component */
      "SvO3");
      /* harmony import */


      var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../components/breadcrumb/breadcrumb.component */
      "+803");

      function ContentLayoutComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-header", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rightSidebarEvent", function ContentLayoutComponent_div_0_Template_app_header_rightSidebarEvent_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.rightSidebar($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-right-sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-breadcrumb");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContentLayoutComponent_div_0_Template_div_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.clickRtl(ctx_r5.layoutType);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx_r0.navServices.collapseSidebar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx_r0.right_side_bar);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("rtl", ctx_r0.layoutClass);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.layoutType);
        }
      }

      function ContentLayoutComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ContentLayoutComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var ContentLayoutComponent = /*#__PURE__*/function () {
        function ContentLayoutComponent(authServices, navServices, dataService, httpService, route, router) {
          _classCallCheck(this, ContentLayoutComponent);

          this.authServices = authServices;
          this.navServices = navServices;
          this.dataService = dataService;
          this.httpService = httpService;
          this.route = route;
          this.router = router;
          this.layoutType = 'RTL';
          this.layoutClass = false;
          this.loading = true;
        }

        _createClass(ContentLayoutComponent, [{
          key: "getRouterOutletState",
          value: function getRouterOutletState(outlet) {
            return outlet.isActivated ? outlet.activatedRoute : '';
          }
        }, {
          key: "rightSidebar",
          value: function rightSidebar($event) {
            this.right_side_bar = $event;
          }
        }, {
          key: "clickRtl",
          value: function clickRtl(val) {
            if (val === 'RTL') {
              document.body.className = 'rtl';
              this.layoutClass = true;
              this.layoutType = 'LTR';
            } else {
              document.body.className = '';
              this.layoutClass = false;
              this.layoutType = 'RTL';
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.authServices.user.subscribe(function (user) {
              console.log(user);
              _this2.user = user;
              _this2.loading = false;
            });
          }
        }]);

        return ContentLayoutComponent;
      }();

      ContentLayoutComponent.ɵfac = function ContentLayoutComponent_Factory(t) {
        return new (t || ContentLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_nav_service__WEBPACK_IMPORTED_MODULE_4__["NavService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]));
      };

      ContentLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContentLayoutComponent,
        selectors: [["app-content-layout"]],
        decls: 3,
        vars: 3,
        consts: [[4, "ngIf"], ["class", "lds-wrap", 4, "ngIf"], [1, "page-wrapper"], [3, "rightSidebarEvent"], [1, "page-body-wrapper"], [1, "page-sidebar"], ["id", "right_side_bar", 1, "right-sidebar"], [1, "page-body"], [1, "btn-light", "custom-theme", 3, "click"], [1, "lds-wrap"], [1, "lds-dual-ring"]],
        template: function ContentLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ContentLayoutComponent_div_0_Template, 14, 7, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContentLayoutComponent_div_1_Template, 2, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContentLayoutComponent_div_2_Template, 2, 0, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.user && ctx.user.role === "ADMIN");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.user && ctx.user.role !== "ADMIN");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"], _components_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["RightSidebarComponent"], _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_12__["BreadcrumbComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"]],
        styles: [".hide[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY29udGVudC1sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFBO0FBQ0QiLCJmaWxlIjoiY29udGVudC1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGlkZXtcclxuXHRkaXNwbGF5OiBub25lO1xyXG59Il19 */"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('animateRoute', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_2__["fadeIn"], {// Set the duration to 5seconds and delay to 2 seconds
            //params: { timing: 3}
          }))])]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentLayoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-content-layout',
            templateUrl: './content-layout.component.html',
            styleUrls: ['./content-layout.component.scss'],
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('animateRoute', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["useAnimation"])(ng_animate__WEBPACK_IMPORTED_MODULE_2__["fadeIn"], {// Set the duration to 5seconds and delay to 2 seconds
              //params: { timing: 3}
            }))])]
          }]
        }], function () {
          return [{
            type: _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
          }, {
            type: _service_nav_service__WEBPACK_IMPORTED_MODULE_4__["NavService"]
          }, {
            type: _service_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
          }, {
            type: _service_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    0: function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! D:\projects\navbat\frontend\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "2hHS": function hHS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportsComponent", function () {
        return ReportsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/data/chart */
      "XjTe");
      /* harmony import */


      var src_app_shared_tables_report__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/tables/report */
      "fwv6");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng2-charts */
      "LPYB");
      /* harmony import */


      var ng_chartist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng-chartist */
      "Cr32");
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng2-smart-table */
      "RS3s");
      /* harmony import */


      var ng2_google_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng2-google-charts */
      "OPJD");

      var ReportsComponent = /*#__PURE__*/function () {
        function ReportsComponent() {
          _classCallCheck(this, ReportsComponent);

          this.report = []; // lineChart

          this.salesChartData = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["salesChartData"];
          this.salesChartLabels = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["salesChartLabels"];
          this.salesChartOptions = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["salesChartOptions"];
          this.salesChartColors = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["salesChartColors"];
          this.salesChartLegend = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["salesChartLegend"];
          this.salesChartType = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["salesChartType"];
          this.areaChart1 = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["areaChart1"];
          this.columnChart1 = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["columnChart1"];
          this.lineChart = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["lineChart"];
          this.chart5 = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["chart6"];
          this.settings = {
            actions: {
              position: 'right'
            },
            columns: {
              name: {
                title: 'Name'
              },
              id: {
                title: 'Transfer Id',
                type: 'html'
              },
              date: {
                title: 'Date'
              },
              total: {
                title: 'Total'
              }
            }
          };
          this.report = src_app_shared_tables_report__WEBPACK_IMPORTED_MODULE_2__["reportDB"].report;
        }

        _createClass(ReportsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ReportsComponent;
      }();

      ReportsComponent.ɵfac = function ReportsComponent_Factory(t) {
        return new (t || ReportsComponent)();
      };

      ReportsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ReportsComponent,
        selectors: [["app-reports"]],
        decls: 51,
        vars: 14,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-8", "col-md-6"], [1, "card"], [1, "card-header"], [1, "card-body", "sell-graph"], ["baseChart", "", "id", "myGraph", 3, "datasets", "labels", "options", "colors", "legend", "chartType"], [1, "col-xl-4", "col-md-6"], [1, "card", "report-employee"], [1, "mb-0"], [1, "card-body", "p-0", "o-hidden"], [1, "ct-4", "flot-chart-container", "report-full"], [3, "type", "data", "options"], [1, "col-sm-12"], [1, "card-body"], ["id", "batchDelete", 1, "custom-datatable"], [1, "table-responsive"], [3, "settings", "source"], [1, "col-lg-6"], [1, "card-body", "expense-chart"], ["id", "area-chart1", 1, "chart-overflow"], [3, "data"], [1, "sales-chart"]],
        template: function ReportsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sales Summary");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "canvas", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "75%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h6", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Employees Satisfied");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "x-chartist", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Transfer Report");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "ng2-smart-table", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Expenses");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "google-chart", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Sales / Purchase");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "google-chart", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Sales / Purchase Return");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "google-chart", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.salesChartData)("labels", ctx.salesChartLabels)("options", ctx.salesChartOptions)("colors", ctx.salesChartColors)("legend", ctx.salesChartLegend)("chartType", ctx.salesChartType);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.chart5.type)("data", ctx.chart5.data)("options", ctx.chart5.options);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.report);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.areaChart1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.columnChart1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.lineChart);
          }
        },
        directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_3__["BaseChartDirective"], ng_chartist__WEBPACK_IMPORTED_MODULE_4__["ChartistComponent"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["Ng2SmartTableComponent"], ng2_google_charts__WEBPACK_IMPORTED_MODULE_6__["GoogleChartComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnRzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-reports',
            templateUrl: './reports.component.html',
            styleUrls: ['./reports.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "5+sL": function sL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
        return DashboardModule;
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


      var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard-routing.module */
      "VpI2");
      /* harmony import */


      var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./dashboard.component */
      "Lquv");
      /* harmony import */


      var angular_count_to__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angular-count-to */
      "a5BO");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng2-charts */
      "LPYB");
      /* harmony import */


      var ng2_google_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng2-google-charts */
      "OPJD");
      /* harmony import */


      var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @swimlane/ngx-charts */
      "zQsl");
      /* harmony import */


      var ng_chartist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-chartist */
      "Cr32");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../shared/shared.module */
      "PCNd");

      var DashboardModule = function DashboardModule() {
        _classCallCheck(this, DashboardModule);
      };

      DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DashboardModule
      });
      DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DashboardModule_Factory(t) {
          return new (t || DashboardModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"], angular_count_to__WEBPACK_IMPORTED_MODULE_4__["CountToModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"], ng2_google_charts__WEBPACK_IMPORTED_MODULE_6__["Ng2GoogleChartsModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__["NgxChartsModule"], ng_chartist__WEBPACK_IMPORTED_MODULE_8__["ChartistModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, {
          declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"], angular_count_to__WEBPACK_IMPORTED_MODULE_4__["CountToModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"], ng2_google_charts__WEBPACK_IMPORTED_MODULE_6__["Ng2GoogleChartsModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__["NgxChartsModule"], ng_chartist__WEBPACK_IMPORTED_MODULE_8__["ChartistModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"], angular_count_to__WEBPACK_IMPORTED_MODULE_4__["CountToModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"], ng2_google_charts__WEBPACK_IMPORTED_MODULE_6__["Ng2GoogleChartsModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__["NgxChartsModule"], ng_chartist__WEBPACK_IMPORTED_MODULE_8__["ChartistModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "9HF/": function HF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavService", function () {
        return NavService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _windows_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./windows.service */
      "J80p");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./data.service */
      "J8x5");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./auth.service */
      "Da3E");

      var NavService = /*#__PURE__*/function () {
        function NavService(window, dataService, authService) {
          var _this3 = this;

          _classCallCheck(this, NavService);

          this.window = window;
          this.dataService = dataService;
          this.authService = authService;
          this.collapseSidebar = false;
          this.MENUITEMS = []; // Array

          this.items = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.MENUITEMS);
          this.onResize();

          if (this.screenWidth < 991) {
            this.collapseSidebar = true;
          }

          this.authService.user.subscribe(function (user) {
            if (user) {
              switch (user.role) {
                case "ADMIN":
                  _this3.getMenuItemsAdmin();

                  break;

                case "PVO":
                  _this3.getMenuItemsPvo(); // code...


                  break;

                default:
                  // code...
                  break;
              }
            }
          });
        } // Windows width


        _createClass(NavService, [{
          key: "onResize",
          value: function onResize(event) {
            this.screenWidth = window.innerWidth;
          }
        }, {
          key: "getMenuItemsPvo",
          value: function getMenuItemsPvo() {// this.MENUITEMS = [
            // 	{
            // 		title: 'Uy', path: '/home', icon: 'home', type: 'link', active: false
            // 	},
            // 	{
            // 		title: 'Ma\'lumotlar', icon: 'file-text', type: 'sub', active: false, children: []
            // 	},
            // 	{
            // 		title: 'E\'lonlar', path: '/announce', icon: 'twitch', type: 'link', active: false
            // 	},
            // 	{
            // 		title: 'Tekshirilayotgan', path: '/being-checked', icon: 'help-circle', type: 'link', active: false
            // 	},
            // 	{
            // 		title: 'Rad etilgan', path: '/rejected-field', icon: 'thumbs-down', type: 'link', active: false
            // 	},
            // 	{
            // 		title: 'Baholash', icon: 'sidebar', type: 'sub', active: false, children: [
            // 			{ path: '/rating/fakul-table', title: 'Fakultet', type: 'link' },
            // 			{ path: '/rating/kaf-table', title: 'Kafedra', type: 'link' },
            // 			{ path: '/rating/teachers', title: 'O\'qituvchilar', type: 'link' },
            // 		]
            // 	}
            // ]
            // this.dataService.field$.subscribe(fields=>{
            // 	this.MENUITEMS = [
            // 		{
            // 			title: 'Uy', path: '/home', icon: 'home', type: 'link', active: false
            // 		},
            // 		{
            // 			title: 'Ma\'lumotlar', icon: 'file-text', type: 'sub', active: false, children: []
            // 		},
            // 		{
            // 			title: 'E\'lonlar', path: '/announce', icon: 'twitch', type: 'link', active: false
            // 		},
            // 		{
            // 			title: 'Tekshirilayotgan', path: '/being-checked', icon: 'help-circle', type: 'link', active: false
            // 		},
            // 		{
            // 			title: 'Rad etilgan', path: '/rejected-field', icon: 'thumbs-down', type: 'link', active: false
            // 		},
            // 		{
            // 			title: 'Baholash', icon: 'sidebar', type: 'sub', active: false, children: [
            // 				{ path: '/rating/fakul-table', title: 'Fakultet', type: 'link' },
            // 				{ path: '/rating/kaf-table', title: 'Kafedra', type: 'link' },
            // 				{ path: '/rating/teachers', title: 'O\'qituvchilar', type: 'link' },
            // 			]
            // 		}
            // 	]
            // 	this.items.next(this.MENUITEMS);
            // })
            // this.items.next(this.MENUITEMS);
          }
        }, {
          key: "getMenuItemsAdmin",
          value: function getMenuItemsAdmin() {
            this.MENUITEMS = [{
              title: 'Menu qo‘shish',
              path: '/queue',
              icon: 'home',
              type: 'link',
              active: false
            }, {
              title: 'Foydalanuvchilar',
              icon: 'user-plus',
              type: 'sub',
              active: false,
              children: [{
                path: '/users/register-new',
                title: 'Yangi foydalanuvchi',
                type: 'link'
              }]
            }]; // this.dataService.field$.subscribe(fields=>{
            // 	this.MENUITEMS = [
            // 		{
            // 			title: 'Uy', path: '/queue', icon: 'home', type: 'link', active: false
            // 		},
            // 		{
            // 			title: 'Foydalanuvchilar', icon: 'user-plus', type: 'sub', active: false, children: [
            // 				{ path: '/users/register-new', title: 'Yangi foydalanuvchi', type: 'link' },
            // 			]
            // 		}
            // 	]
            // 	this.items.next(this.MENUITEMS);
            // })

            this.items.next(this.MENUITEMS);
          }
        }]);

        return NavService;
      }();

      NavService.ɵfac = function NavService_Factory(t) {
        return new (t || NavService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_windows_service__WEBPACK_IMPORTED_MODULE_2__["WINDOW"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]));
      };

      NavService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: NavService,
        factory: NavService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_windows_service__WEBPACK_IMPORTED_MODULE_2__["WINDOW"]]
            }]
          }, {
            type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
          }, {
            type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
          }];
        }, {
          onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["window:resize", ['$event']]
          }]
        });
      })();

      function replaceAll(str, from, to) {
        var n = '';

        if (str) {
          var _iterator = _createForOfIteratorHelper(str),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var g = _step.value;

              if (g === from) {
                g = to;
              }

              n += g;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        return n;
      }
      /***/

    },

    /***/
    "9UTC": function UTC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function () {
        return UsersRoutingModule;
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


      var _list_user_list_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./list-user/list-user.component */
      "VrLt");
      /* harmony import */


      var _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./create-user/create-user.component */
      "Uy5Q");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./register/register.component */
      "YXTU");

      var routes = [{
        path: '',
        children: [{
          path: 'list-user',
          component: _list_user_list_user_component__WEBPACK_IMPORTED_MODULE_2__["ListUserComponent"],
          data: {
            title: "Ro\'yxat",
            breadcrumb: "Ro\'yxat"
          }
        }, {
          path: 'create-user',
          component: _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_3__["CreateUserComponent"],
          data: {
            title: "Yaratish",
            breadcrumb: "Yaratish"
          }
        }, {
          path: 'register-new',
          component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
          data: {
            title: "Yangi foydalanuvchi",
            breadcrumb: "Yangi foydalanuvchi"
          }
        }]
      }];

      var UsersRoutingModule = function UsersRoutingModule() {
        _classCallCheck(this, UsersRoutingModule);
      };

      UsersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: UsersRoutingModule
      });
      UsersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function UsersRoutingModule_Factory(t) {
          return new (t || UsersRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UsersRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersRoutingModule, [{
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
    "AytR": function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "BAfr": function BAfr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
        return SidebarComponent;
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


      var _service_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../service/nav.service */
      "9HF/");
      /* harmony import */


      var _service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../service/data.service */
      "J8x5");
      /* harmony import */


      var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../service/auth.service */
      "Da3E");
      /* harmony import */


      var _service_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../service/http.service */
      "uiMJ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../feather-icons/feather-icons.component */
      "pqks");

      function SidebarComponent_li_7_a_1_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("badge badge-", menuItem_r1.badgeType, " ml-3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuItem_r1.badgeValue);
        }
      }

      function SidebarComponent_li_7_a_1_i_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 16);
        }
      }

      function SidebarComponent_li_7_a_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_li_7_a_1_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.toggletNavActive(menuItem_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-feather-icons", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarComponent_li_7_a_1_span_4_Template, 2, 4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarComponent_li_7_a_1_i_5_Template, 1, 0, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", menuItem_r1.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuItem_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r1.badgeType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r1.children);
        }
      }

      function SidebarComponent_li_7_a_2_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("badge badge-", menuItem_r1.badgeType, " ml-3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuItem_r1.badgeValue);
        }
      }

      function SidebarComponent_li_7_a_2_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.checkFieldLength);
        }
      }

      function SidebarComponent_li_7_a_2_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r16.fieldsRejectedLength);
        }
      }

      function SidebarComponent_li_7_a_2_i_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 16);
        }
      }

      var _c0 = function _c0(a0) {
        return [a0];
      };

      function SidebarComponent_li_7_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-feather-icons", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarComponent_li_7_a_2_span_4_Template, 2, 4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarComponent_li_7_a_2_div_5_Template, 2, 1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SidebarComponent_li_7_a_2_div_6_Template, 2, 1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SidebarComponent_li_7_a_2_i_7_Template, 1, 0, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("closed", menuItem_r1.status === "closed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", !menuItem_r1.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, menuItem_r1.path));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", menuItem_r1.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuItem_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r1.badgeType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r1.path === "/check-ind" && ctx_r3.checkFieldLength !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r1.path === "/rejected-field" && ctx_r3.fieldsRejectedLength !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r1.children);
        }
      }

      function SidebarComponent_li_7_a_3_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("badge badge-", menuItem_r1.badgeType, " ml-3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuItem_r1.badgeValue);
        }
      }

      function SidebarComponent_li_7_a_3_i_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 16);
        }
      }

      function SidebarComponent_li_7_a_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-feather-icons", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarComponent_li_7_a_3_span_4_Template, 2, 4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarComponent_li_7_a_3_i_5_Template, 1, 0, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", !menuItem_r1.type ? null : menuItem_r1.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", menuItem_r1.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuItem_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r1.badgeType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r1.children);
        }
      }

      function SidebarComponent_li_7_a_4_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("badge badge-", menuItem_r1.badgeType, " ml-3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuItem_r1.badgeValue);
        }
      }

      function SidebarComponent_li_7_a_4_i_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 16);
        }
      }

      function SidebarComponent_li_7_a_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-feather-icons", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarComponent_li_7_a_4_span_4_Template, 2, 4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarComponent_li_7_a_4_i_5_Template, 1, 0, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", !menuItem_r1.type ? null : menuItem_r1.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", menuItem_r1.icon);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuItem_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r1.badgeType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r1.children);
        }
      }

      function SidebarComponent_li_7_ul_5_li_1_a_1_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("badge badge-", childrenItem_r29.badgeType, " pull-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](childrenItem_r29.badgeValue);
        }
      }

      function SidebarComponent_li_7_ul_5_li_1_a_1_i_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 31);
        }
      }

      function SidebarComponent_li_7_ul_5_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_li_7_ul_5_li_1_a_1_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40);

            var childrenItem_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r38.toggletNavActive(childrenItem_r29);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarComponent_li_7_ul_5_li_1_a_1_span_4_Template, 2, 4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarComponent_li_7_ul_5_li_1_a_1_i_5_Template, 1, 0, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", childrenItem_r29.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childrenItem_r29.badgeType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childrenItem_r29.children);
        }
      }

      function SidebarComponent_li_7_ul_5_li_1_a_2_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("badge badge-", childrenItem_r29.badgeType, " pull-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](childrenItem_r29.badgeValue);
        }
      }

      function SidebarComponent_li_7_ul_5_li_1_a_2_i_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 31);
        }
      }

      var _c1 = function _c1() {
        return {
          exact: true
        };
      };

      function SidebarComponent_li_7_ul_5_li_1_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarComponent_li_7_ul_5_li_1_a_2_span_4_Template, 2, 4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarComponent_li_7_ul_5_li_1_a_2_i_5_Template, 1, 0, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", !childrenItem_r29.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, childrenItem_r29.path))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", childrenItem_r29.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childrenItem_r29.badgeType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childrenItem_r29.children);
        }
      }

      function SidebarComponent_li_7_ul_5_li_1_a_3_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("badge badge-", childrenItem_r29.badgeType, " pull-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](childrenItem_r29.badgeValue);
        }
      }

      function SidebarComponent_li_7_ul_5_li_1_a_3_i_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 31);
        }
      }

      function SidebarComponent_li_7_ul_5_li_1_a_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarComponent_li_7_ul_5_li_1_a_3_span_4_Template, 2, 4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarComponent_li_7_ul_5_li_1_a_3_i_5_Template, 1, 0, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", !childrenItem_r29.type ? null : childrenItem_r29.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", childrenItem_r29.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childrenItem_r29.badgeType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childrenItem_r29.children);
        }
      }

      function SidebarComponent_li_7_ul_5_li_1_a_4_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("badge badge-", childrenItem_r29.badgeType, " pull-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](childrenItem_r29.badgeValue);
        }
      }

      function SidebarComponent_li_7_ul_5_li_1_a_4_i_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 31);
        }
      }

      function SidebarComponent_li_7_ul_5_li_1_a_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarComponent_li_7_ul_5_li_1_a_4_span_4_Template, 2, 4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarComponent_li_7_ul_5_li_1_a_4_i_5_Template, 1, 0, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", !childrenItem_r29.type ? null : childrenItem_r29.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", childrenItem_r29.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childrenItem_r29.badgeType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childrenItem_r29.children);
        }
      }

      function SidebarComponent_li_7_ul_5_li_1_ul_5_li_1_a_1_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenSubItem_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("badge badge-", childrenSubItem_r55.badgeType, " pull-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](childrenSubItem_r55.badgeValue);
        }
      }

      function SidebarComponent_li_7_ul_5_li_1_ul_5_li_1_a_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarComponent_li_7_ul_5_li_1_ul_5_li_1_a_1_span_4_Template, 2, 4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenSubItem_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", !childrenSubItem_r55.type ? null : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, childrenSubItem_r55.path))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", childrenSubItem_r55.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childrenSubItem_r55.badgeType);
        }
      }

      function SidebarComponent_li_7_ul_5_li_1_ul_5_li_1_a_2_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenSubItem_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("badge badge-", childrenSubItem_r55.badgeType, " pull-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](childrenSubItem_r55.badgeValue);
        }
      }

      function SidebarComponent_li_7_ul_5_li_1_ul_5_li_1_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarComponent_li_7_ul_5_li_1_ul_5_li_1_a_2_span_4_Template, 2, 4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenSubItem_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", !childrenSubItem_r55.type ? null : childrenSubItem_r55.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", childrenSubItem_r55.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childrenSubItem_r55.badgeType);
        }
      }

      function SidebarComponent_li_7_ul_5_li_1_ul_5_li_1_a_3_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenSubItem_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("badge badge-", childrenSubItem_r55.badgeType, " pull-right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](childrenSubItem_r55.badgeValue);
        }
      }

      function SidebarComponent_li_7_ul_5_li_1_ul_5_li_1_a_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarComponent_li_7_ul_5_li_1_ul_5_li_1_a_3_span_4_Template, 2, 4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenSubItem_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", !childrenSubItem_r55.type ? null : childrenSubItem_r55.path, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", childrenSubItem_r55.title, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childrenSubItem_r55.badgeType);
        }
      }

      function SidebarComponent_li_7_ul_5_li_1_ul_5_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_li_7_ul_5_li_1_ul_5_li_1_a_1_Template, 5, 7, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarComponent_li_7_ul_5_li_1_ul_5_li_1_a_2_Template, 5, 5, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidebarComponent_li_7_ul_5_li_1_ul_5_li_1_a_3_Template, 5, 3, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenSubItem_r55 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childrenSubItem_r55.type === "link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childrenSubItem_r55.type === "extLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childrenSubItem_r55.type === "extTabLink");
        }
      }

      function SidebarComponent_li_7_ul_5_li_1_ul_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_li_7_ul_5_li_1_ul_5_li_1_Template, 4, 3, "li", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", childrenItem_r29.children);
        }
      }

      var _c2 = function _c2(a0) {
        return {
          active: a0
        };
      };

      function SidebarComponent_li_7_ul_5_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_li_7_ul_5_li_1_a_1_Template, 6, 3, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarComponent_li_7_ul_5_li_1_a_2_Template, 6, 8, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidebarComponent_li_7_ul_5_li_1_a_3_Template, 6, 6, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarComponent_li_7_ul_5_li_1_a_4_Template, 6, 4, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarComponent_li_7_ul_5_li_1_ul_5_Template, 2, 1, "ul", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var childrenItem_r29 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, childrenItem_r29.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childrenItem_r29.type === "sub");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childrenItem_r29.type === "link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childrenItem_r29.type === "extLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childrenItem_r29.type === "extTabLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", childrenItem_r29.children);
        }
      }

      var _c3 = function _c3(a0, a1) {
        return {
          "menu-open": a0,
          "menu-close": a1
        };
      };

      function SidebarComponent_li_7_ul_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_li_7_ul_5_li_1_Template, 6, 8, "li", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c3, menuItem_r1.active, !menuItem_r1.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menuItem_r1.children);
        }
      }

      function SidebarComponent_li_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarComponent_li_7_a_1_Template, 6, 4, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SidebarComponent_li_7_a_2_Template, 8, 11, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SidebarComponent_li_7_a_3_Template, 6, 5, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SidebarComponent_li_7_a_4_Template, 6, 5, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SidebarComponent_li_7_ul_5_Template, 2, 5, "ul", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var menuItem_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, menuItem_r1.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r1.type === "sub");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r1.type === "link");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r1.type === "extLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r1.type === "extTabLink");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menuItem_r1.children);
        }
      }

      var SidebarComponent = /*#__PURE__*/function () {
        function SidebarComponent(router, navServices, dataService, authService, httpService) {
          var _this4 = this;

          _classCallCheck(this, SidebarComponent);

          this.router = router;
          this.navServices = navServices;
          this.dataService = dataService;
          this.authService = authService;
          this.httpService = httpService;
          this.checkFieldLength = 0;
          this.fieldsRejectedLength = 0;
          this.navServices.items.subscribe(function (menuItems) {
            _this4.menuItems = menuItems;

            _this4.router.events.subscribe(function (event) {
              if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                menuItems.filter(function (items) {
                  if (items.path === event.url) _this4.setNavActive(items);
                  if (!items.children) return false;
                  items.children.filter(function (subItems) {
                    if (subItems.path === event.url) _this4.setNavActive(subItems);
                    if (!subItems.children) return false;
                    subItems.children.filter(function (subSubItems) {
                      if (subSubItems.path === event.url) _this4.setNavActive(subSubItems);
                    });
                  });
                });
              }
            });
          }); // this.authService.user.subscribe(user=>{
          //   this.user = user;
          //   switch (user.role) {
          //     case "ADMIN":
          //       this.checkField(0);
          //       break;
          //     case "PVO":
          //       this.fieldsRejected(0);
          //       break;        
          //     default:
          //       // code...
          //       break;
          //   }
          // })
        } // checkField(i){
        //   if (i===0) {
        //     this.dataService.checkFieldLength$.subscribe(res=>{
        //       this.checkFieldLength = res
        //     })
        //   }
        //   this.httpService.getDoc(["checkfield"]).subscribe(data => {
        //     if (data) {
        //       this.dataService.checkFieldLength$.next((Object.keys(data)).length)
        //       this.dataService.checkField$.next(data)
        //     }
        //   }, error=>{
        //     if (i<10) {
        //       setTimeout(()=>{
        //         this.checkField(i+1);
        //       },1000)
        //     }
        //   })
        // }
        // fieldsRejected(i){
        //   if (i===0) {
        //     this.dataService.fieldsRejected$.subscribe(res=>{
        //       this.fieldsRejectedLength = res;
        //     })
        //   }
        //   this.httpService.getDoc(["fieldsRejected"]).subscribe(data => {
        //       // console.log('data 5: ',data);
        //     if (data) {
        //       var arr = data;
        //       var arrNew = [];
        //       (Object.keys(arr)).forEach((key)=>{
        //           if (arr[key] && (this.user.email === (arr[key][(arr[key]).length-1].user))) {
        //             arrNew.push(arr[key])
        //           }
        //       // })
        //       })
        //       this.dataService.fieldsRejected$.next(arrNew.length)
        //     }
        //   }, error=>{
        //     if (i<10) {
        //       setTimeout(()=>{
        //         this.fieldsRejected(i+1);
        //       },1000)
        //     }
        //   })
        // }
        // Active Nave state


        _createClass(SidebarComponent, [{
          key: "setNavActive",
          value: function setNavActive(item) {
            this.menuItems.filter(function (menuItem) {
              if (menuItem != item) menuItem.active = false;
              if (menuItem.children && menuItem.children.includes(item)) menuItem.active = true;

              if (menuItem.children) {
                menuItem.children.filter(function (submenuItems) {
                  if (submenuItems.children && submenuItems.children.includes(item)) {
                    menuItem.active = true;
                    submenuItems.active = true;
                  }
                });
              }
            });
          } // Click Toggle menu

        }, {
          key: "toggletNavActive",
          value: function toggletNavActive(item) {
            var _this5 = this;

            if (!item.active) {
              this.menuItems.forEach(function (a) {
                if (_this5.menuItems.includes(item)) a.active = false;
                if (!a.children) return false;
                a.children.forEach(function (b) {
                  if (a.children.includes(item)) {
                    b.active = false;
                  }
                });
              });
            }

            item.active = !item.active;
          } //Fileupload

        }, {
          key: "readUrl",
          value: function readUrl(event) {
            var _this6 = this;

            if (event.target.files.length === 0) return; //Image upload validation

            var mimeType = event.target.files[0].type;

            if (mimeType.match(/image\/*/) == null) {
              return;
            } // Image upload


            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);

            reader.onload = function (_event) {
              _this6.url = reader.result;
            };
          }
        }]);

        return SidebarComponent;
      }();

      SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
        return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_nav_service__WEBPACK_IMPORTED_MODULE_2__["NavService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]));
      };

      SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SidebarComponent,
        selectors: [["app-sidebar"]],
        decls: 8,
        vars: 2,
        consts: [[1, "main-header-left", "d-none", "d-lg-block"], [1, "logo-wrapper", "header-side-title-rt-2"], [3, "routerLink"], [1, "sidebar", "custom-scrollbar"], [1, "sidebar-menu"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], ["href", "javascript:void(0)", "class", "sidebar-header", 3, "click", 4, "ngIf"], ["routerLinkActive", "active", "class", "sidebar-header", 3, "routerLink", "closed", 4, "ngIf"], ["class", "sidebar-header", 3, "href", 4, "ngIf"], ["target", "_blank", "class", "sidebar-header", 3, "href", 4, "ngIf"], ["class", "sidebar-submenu", 3, "ngClass", 4, "ngIf"], ["href", "javascript:void(0)", 1, "sidebar-header", 3, "click"], [3, "icon"], [3, "class", 4, "ngIf"], ["class", "fa fa-angle-right pull-right", 4, "ngIf"], [1, "fa", "fa-angle-right", "pull-right"], ["routerLinkActive", "active", 1, "sidebar-header", 3, "routerLink"], ["class", "pull-right mar-st-7 red", 4, "ngIf"], [1, "pull-right", "mar-st-7", "red"], [1, "sidebar-header", 3, "href"], ["target", "_blank", 1, "sidebar-header", 3, "href"], [1, "sidebar-submenu", 3, "ngClass"], ["href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", 4, "ngIf"], ["routerLinkActive", "active", 3, "href", "routerLinkActiveOptions", 4, "ngIf"], ["target", "_blank", 3, "href", 4, "ngIf"], ["class", "sidebar-submenu", 4, "ngIf"], ["href", "javascript:void(0)", 3, "click"], [1, "fa", "fa-circle"], ["class", "fa fa-angle-down pull-right", 4, "ngIf"], [1, "fa", "fa-angle-down", "pull-right"], ["routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions"], ["routerLinkActive", "active", 3, "href", "routerLinkActiveOptions"], ["target", "_blank", 3, "href"], [1, "sidebar-submenu"], [4, "ngFor", "ngForOf"]],
        template: function SidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Xizmat ko\u2018rsatish");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SidebarComponent_li_7_Template, 6, 8, "li", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_7__["FeatherIconsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
        styles: [".mar-st-7 {\n  margin-right: 7px;\n}\n\n.red {\n  color: red;\n}\n\n.closed {\n  color: red !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGlCQUFBO0FBQ0Q7O0FBQ0E7RUFDQyxVQUFBO0FBRUQ7O0FBQUE7RUFDQyxxQkFBQTtBQUdEIiwiZmlsZSI6InNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFyLXN0LTd7XHJcblx0bWFyZ2luLXJpZ2h0OiA3cHg7XHJcbn1cclxuLnJlZHtcclxuXHRjb2xvcjogcmVkO1xyXG59XHJcbi5jbG9zZWR7XHJcblx0Y29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG59Il19 */"],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-sidebar',
            templateUrl: './sidebar.component.html',
            styleUrls: ['./sidebar.component.scss'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _service_nav_service__WEBPACK_IMPORTED_MODULE_2__["NavService"]
          }, {
            type: _service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
          }, {
            type: _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
          }, {
            type: _service_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Da3E": function Da3E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthService", function () {
        return AuthService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! firebase/app */
      "Jgta");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb"); // import * as firebase from 'firebase/app';


      var AuthService = /*#__PURE__*/function () {
        // userR: userInt = {
        //   // role: "ADMIN",
        //   role: "PVO",
        //   email: 'test@gmail.com'
        // };
        // user$ = new BehaviorSubject<userInt>(this.userR);
        function AuthService(afAuth, db, router) {
          _classCallCheck(this, AuthService);

          this.afAuth = afAuth;
          this.db = db;
          this.router = router;
          this.currentUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
          this.autoLog();
        }

        _createClass(AuthService, [{
          key: "autoLog",
          value: function autoLog() {
            var _this7 = this;

            this.user = this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (user) {
              if (user) {
                return _this7.db.doc("users/".concat(user.uid)).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
                  data['id'] = user.uid;

                  _this7.currentUser.next(data);
                }));
              } else {
                _this7.currentUser.next(null);

                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
              }
            }));
          }
        }, {
          key: "signUp",
          value: function signUp(credentials) {
            var _this8 = this;

            return this.afAuth.createUserWithEmailAndPassword(credentials.email, credentials.password).then(function (data) {
              // console.log('createUserWithEmailAndPassword', data.user)
              return _this8.db.doc("users/".concat(data.user.uid)).set({
                first_name: credentials.first_name,
                last_name: credentials.last_name,
                patronymic: credentials.patronymic,
                password: credentials.password,
                email: data.user.email,
                officer_id: credentials.officer_id,
                role: 'OFFICER',
                services: credentials.services,
                permissions: [],
                created: firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].firestore.FieldValue.serverTimestamp()
              });
            });
          } // async resetPassport(email){
          //   return this.afAuth.sendPasswordResetEmail(email).then(res => {
          //     return 'success';
          //   },err => {
          //     return err;
          //   })
          // }

        }, {
          key: "recoverPass",
          value: function recoverPass(code, password) {
            return this.afAuth.confirmPasswordReset(code, password);
          }
        }, {
          key: "signIn",
          value: function signIn(credentials) {
            var _this9 = this;

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(this.afAuth.signInWithEmailAndPassword(credentials.email, credentials.password)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (user) {
              if (user) {
                return _this9.db.doc("users/".concat(user.user.uid)).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
              } else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
              }
            }));
          }
        }, {
          key: "signOut",
          value: function signOut() {
            var _this10 = this;

            return this.afAuth.signOut().then(function () {
              _this10.router.navigateByUrl('/auth/login');
            });
          }
        }, {
          key: "hasPermissions",
          value: function hasPermissions(permissions) {
            var _iterator2 = _createForOfIteratorHelper(permissions),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var perm = _step2.value;

                if (!this.currentUser.value || !this.currentUser.value.permissions.includes(perm)) {
                  return false;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return true;
          }
        }, {
          key: "resetPw",
          value: function resetPw(email) {
            return this.afAuth.sendPasswordResetEmail(email);
          }
        }]);

        return AuthService;
      }();

      AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
      };

      AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthService,
        factory: AuthService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
          }, {
            type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "DzK7": function DzK7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "transactionsDB", function () {
        return transactionsDB;
      });

      var transactionsDB = function transactionsDB() {
        _classCallCheck(this, transactionsDB);
      };

      transactionsDB.data = [{
        order_id: "142",
        transaction_id: "#212145214510",
        date: "Sep 2,19",
        pay_method: "Paypal",
        delivery_status: "Pending",
        amount: "$175/-"
      }, {
        order_id: "217",
        transaction_id: "#784561421721",
        date: "Dec 10,19",
        pay_method: "Stripe",
        delivery_status: "Process",
        amount: "$845/-"
      }, {
        order_id: "546",
        transaction_id: "#476547821142",
        date: "Feb 15,19",
        pay_method: "Stripe",
        delivery_status: "Delivered",
        amount: "$314/-"
      }, {
        order_id: "617",
        transaction_id: "#745384127541",
        date: "Mar 27,19",
        pay_method: "Paypal",
        delivery_status: "Pending",
        amount: "$217/-"
      }, {
        order_id: "565",
        transaction_id: "#96725125102",
        date: "Sep 1,19",
        pay_method: "Stripe",
        delivery_status: "Process",
        amount: "$542/-"
      }, {
        order_id: "754",
        transaction_id: "#547121023651",
        date: "May 18,19",
        pay_method: "Paypal",
        delivery_status: "Pending",
        amount: "$2141/-"
      }, {
        order_id: "164",
        transaction_id: "#876412242215",
        date: "Jan 14,19",
        pay_method: "Stripe",
        delivery_status: "Delivered",
        amount: "$4872/-"
      }, {
        order_id: "841",
        transaction_id: "#31534221621",
        date: "Apr 22,19",
        pay_method: "Paypal",
        delivery_status: "Process ",
        amount: "$7841/-"
      }, {
        order_id: "354",
        transaction_id: "#78412457421",
        date: "Mar 26,19",
        pay_method: "Paypal",
        delivery_status: "Pending",
        amount: "$2784/-"
      }, {
        order_id: "784",
        transaction_id: "#241524757448",
        date: "Feb 29,19",
        pay_method: "Stripe",
        delivery_status: "Delivered",
        amount: "$461/-"
      }, {
        order_id: "142",
        transaction_id: "#212145214510",
        date: "Sep 2,19",
        pay_method: "Paypal",
        delivery_status: "Pending",
        amount: "$147/-"
      }, {
        order_id: "217",
        transaction_id: "#784561421721",
        date: "Dec 10,19",
        pay_method: "Stripe",
        delivery_status: "Process ",
        amount: "$845/-"
      }, {
        order_id: "547",
        transaction_id: "#476547821142",
        date: "Feb 15,19",
        pay_method: "Stripe",
        delivery_status: "Delivered ",
        amount: "$317/-"
      }, {
        order_id: "671",
        transaction_id: "#745384127541",
        date: "Mar 27,19",
        pay_method: "Paypal",
        delivery_status: "Pending",
        amount: "$217/-"
      }, {
        order_id: "565",
        transaction_id: "#96725125102",
        date: "Sep 1,19",
        pay_method: "Stripe",
        delivery_status: "Process ",
        amount: "$542/-"
      }];
      /***/
    },

    /***/
    "E6va": function E6va(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersModule", function () {
        return UsersModule;
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


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng2-smart-table */
      "RS3s");
      /* harmony import */


      var _users_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./users-routing.module */
      "9UTC");
      /* harmony import */


      var _list_user_list_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./list-user/list-user.component */
      "VrLt");
      /* harmony import */


      var _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./create-user/create-user.component */
      "Uy5Q");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./register/register.component */
      "YXTU");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var UsersModule = function UsersModule() {
        _classCallCheck(this, UsersModule);
      };

      UsersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: UsersModule
      });
      UsersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function UsersModule_Factory(t) {
          return new (t || UsersModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["Ng2SmartTableModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _users_routing_module__WEBPACK_IMPORTED_MODULE_3__["UsersRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UsersModule, {
          declarations: [_list_user_list_user_component__WEBPACK_IMPORTED_MODULE_4__["ListUserComponent"], _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_5__["CreateUserComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["Ng2SmartTableModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _users_routing_module__WEBPACK_IMPORTED_MODULE_3__["UsersRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_list_user_list_user_component__WEBPACK_IMPORTED_MODULE_4__["ListUserComponent"], _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_5__["CreateUserComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["Ng2SmartTableModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _users_routing_module__WEBPACK_IMPORTED_MODULE_3__["UsersRoutingModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "H7tG": function H7tG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingRoutingModule", function () {
        return SettingRoutingModule;
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


      var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profile/profile.component */
      "uM38");

      var routes = [{
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"],
        data: {
          title: "Profile",
          breadcrumb: "Profile"
        }
      }];

      var SettingRoutingModule = function SettingRoutingModule() {
        _classCallCheck(this, SettingRoutingModule);
      };

      SettingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SettingRoutingModule
      });
      SettingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SettingRoutingModule_Factory(t) {
          return new (t || SettingRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SettingRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingRoutingModule, [{
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
    "HqJu": function HqJu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "listPagesDB", function () {
        return listPagesDB;
      });

      var listPagesDB = function listPagesDB() {
        _classCallCheck(this, listPagesDB);
      };

      listPagesDB.list_pages = [{
        "name": "Product List",
        "status": "<i class=\"fa fa-circle font-success f-12\"></i>",
        "created on": "Sep 5,18"
      }, {
        "name": "Digital Product",
        "status": "<i class=\"fa fa-circle font-danger f-12\"></i>",
        "created on": "Mar 10,18"
      }, {
        "name": "User Media",
        "status": "<i class=\"fa fa-circle font-success f-12\"></i>",
        "created on": "Aug 24,18"
      }, {
        "name": "About Product",
        "status": "<i class=\"fa fa-circle font-success f-12\"></i>",
        "created on": "Jun 12,18"
      }, {
        "name": "User Profile",
        "status": "<i class=\"fa fa-circle font-warning f-12\"></i>",
        "created on": "May 26,18"
      }, {
        "name": "Discount Product",
        "status": "<i class=\"fa fa-circle font-danger f-12\"></i>",
        "created on": "Sep 13,18"
      }, {
        "name": "About Invoice",
        "status": "<i class=\"fa fa-circle font-success f-12\"></i>",
        "created on": "Dec 30,18"
      }];
      /***/
    },

    /***/
    "HzFZ": function HzFZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../shared/service/auth.service */
      "Da3E");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["tabSet"];

      function LoginComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Kirish");
        }
      }

      function LoginComponent_ng_template_11_span_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "...");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_ng_template_11_Template_form_ngSubmit_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r5.login();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Eslab qolish");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_ng_template_11_Template_a_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r7.lostLink();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "parolni tiklash");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Kirish");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, LoginComponent_ng_template_11_span_16_Template, 2, 0, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r2.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r2.loginForm.valid || ctx_r2.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.loading);
        }
      }

      function LoginComponent_ngb_tab_12_ng_template_1_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_ngb_tab_12_ng_template_1_ng_template_2_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

            return ctx_r10.resetPassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Parolni unitdingizmi?");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Jo'natish");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r9.resetPwForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r9.resetPwForm.valid);
        }
      }

      function LoginComponent_ngb_tab_12_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Tiklash ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LoginComponent_ngb_tab_12_ng_template_1_ng_template_2_Template, 9, 2, "ng-template", 11);
        }
      }

      function LoginComponent_ngb_tab_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ngb-tab", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_ngb_tab_12_ng_template_1_Template, 3, 0, "ng-template", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(fb, router, auth, formBuilder) {
          _classCallCheck(this, LoginComponent);

          this.fb = fb;
          this.router = router;
          this.auth = auth;
          this.formBuilder = formBuilder;
          this.loading = false;
          this.lostPassword = false;
          this.owlcarousel = [{
            title: "Welcome to Multikart",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
          }, {
            title: "Welcome to Multikart",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
          }, {
            title: "Welcome to Multikart",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy."
          }];
          this.owlcarouselOptions = {
            loop: true,
            items: 1,
            dots: true
          };
          this.createLoginForm();
          this.createRegisterForm();
          this.recoverPass();
        }

        _createClass(LoginComponent, [{
          key: "login",
          value: function login() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this11 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.loading = true;
                      this.auth.signIn(this.loginForm.value).subscribe(function (user) {
                        _this11.loading = false;

                        _this11.router.navigateByUrl('/home');
                      }, function (err) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  this.loading = false;
                                  alert(err.message);

                                case 2:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        }));
                      });

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "changeTab",
          value: function changeTab(e) {
            if (e.nextId !== "recoverTab") {
              this.lostPassword = false;
            }
          }
        }, {
          key: "register",
          value: function register() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this12 = this;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      this.loading = true;
                      this.auth.signUp(this.registerForm.value).then(function (res) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this12, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                          return regeneratorRuntime.wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  alert("Foydalanuvchi muvaffaqiyatli qo'shildi!");
                                  this.router.navigateByUrl('/home');
                                  this.loading = false;

                                case 3:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3, this);
                        }));
                      }, function (err) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this12, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                          return regeneratorRuntime.wrap(function _callee4$(_context4) {
                            while (1) {
                              switch (_context4.prev = _context4.next) {
                                case 0:
                                  alert(err.message);
                                  this.loading = false;

                                case 2:
                                case "end":
                                  return _context4.stop();
                              }
                            }
                          }, _callee4, this);
                        }));
                      });

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "lostLink",
          value: function lostLink() {
            var _this13 = this;

            this.lostPassword = true;
            setTimeout(function () {
              _this13.tabSet.select('recoverTab');
            }, 100);
          }
        }, {
          key: "resetPassword",
          value: function resetPassword() {
            this.resetPw(this.resetPwForm.value.email);
          }
        }, {
          key: "resetPw",
          value: function resetPw(email) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this14 = this;

              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      this.loading = true;
                      this.auth.resetPw(email).then(function (res) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this14, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                          return regeneratorRuntime.wrap(function _callee6$(_context6) {
                            while (1) {
                              switch (_context6.prev = _context6.next) {
                                case 0:
                                  this.lostPassword = false;
                                  alert("Emailni tekshiring!");
                                  this.loading = false;

                                case 3:
                                case "end":
                                  return _context6.stop();
                              }
                            }
                          }, _callee6, this);
                        }));
                      }, function (err) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this14, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
                          return regeneratorRuntime.wrap(function _callee7$(_context7) {
                            while (1) {
                              switch (_context7.prev = _context7.next) {
                                case 0:
                                  alert(err.message);
                                  this.loading = false;

                                case 2:
                                case "end":
                                  return _context7.stop();
                              }
                            }
                          }, _callee7, this);
                        }));
                      });

                    case 2:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "createLoginForm",
          value: function createLoginForm() {
            this.loginForm = this.fb.group({
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
            });
          }
        }, {
          key: "createRegisterForm",
          value: function createRegisterForm() {
            this.registerForm = this.fb.group({
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
              first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              acceptTerms: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue]
            });
          }
        }, {
          key: "recoverPass",
          value: function recoverPass() {
            this.resetPwForm = this.fb.group({
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]]
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit() {}
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        viewQuery: function LoginComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tabSet = _t.first);
          }
        },
        decls: 13,
        vars: 1,
        consts: [[1, "page-wrapper"], [1, "authentication-box"], [1, "container"], [1, "row"], [1, "col-md-7", "p-0", "card-right"], [1, "card", "tab2-card"], [1, "card-body"], [1, "tab-coupon", "mb-0", 3, "tabChange"], ["tabSet", "ngbTabset"], ["id", "loginTab"], ["ngbTabTitle", ""], ["ngbTabContent", ""], ["id", "recoverTab", 4, "ngIf"], [1, "icon-user", "mr-2"], ["id", "account", "role", "tabpanel", "aria-labelledby", "account-tab", 1, "tab-pane", "fade", "active", "show"], ["novalidate", "", 1, "form-horizontal", "auth-form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["required", "", "type", "email", "placeholder", "email", "id", "exampleInputEmail1", "formControlName", "email", 1, "form-control"], ["required", "", "formControlName", "password", "type", "password", "placeholder", "parol", 1, "form-control"], [1, "form-terms"], [1, "custom-control", "custom-checkbox", "mr-sm-2"], ["type", "checkbox", "id", "customControlAutosizing", 1, "custom-control-input"], ["for", "customControlAutosizing", 1, "custom-control-label"], ["href", "javascript:void(0)", 1, "btn", "btn-default", "forgot-pass", 3, "click"], [1, "form-button"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], ["id", "recoverTab"], [1, "icon-unlock", "mr-2"], [1, "form-group", 2, "text-align", "center"], ["for", "exampleInputEmail21"], ["required", "", "type", "email", "placeholder", "Emailni kirgizing", "id", "exampleInputEmail21", "formControlName", "email", 1, "form-control"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ngb-tabset", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("tabChange", function LoginComponent_Template_ngb_tabset_tabChange_7_listener($event) {
              return ctx.changeTab($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ngb-tab", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, LoginComponent_ng_template_10_Template, 2, 0, "ng-template", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LoginComponent_ng_template_11_Template, 17, 3, "ng-template", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, LoginComponent_ngb_tab_12_Template, 2, 0, "ngb-tab", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.lostPassword);
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTabTitle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbTabContent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]],
        styles: [".card-right[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 100%;\n}\n\n.authentication-box[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 525px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxPQUFBO0VBQ0EsZUFBQTtBQUNEOztBQUNBO0VBQ0MsZ0JBQUE7QUFFRCIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXJpZ2h0e1xyXG5cdGZsZXg6IDE7XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbi5hdXRoZW50aWNhdGlvbi1ib3ggLmNvbnRhaW5lcntcclxuXHRtYXgtd2lkdGg6IDUyNXB4O1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _shared_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }];
        }, {
          tabSet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['tabSet', {
              "static": false
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "IbxU": function IbxU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
        return AuthModule;
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


      var _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth-routing.module */
      "wOdu");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login/login.component */
      "HzFZ");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-owl-carousel-o */
      "bhfF");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shared/shared.module */
      "PCNd");

      var AuthModule = function AuthModule() {
        _classCallCheck(this, AuthModule);
      };

      AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AuthModule
      });
      AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AuthModule_Factory(t) {
          return new (t || AuthModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__["CarouselModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, {
          declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__["CarouselModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__["CarouselModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "J80p": function J80p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WINDOW", function () {
        return WINDOW;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WindowRef", function () {
        return WindowRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BrowserWindowRef", function () {
        return BrowserWindowRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "windowFactory", function () {
        return windowFactory;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "browserWindowProvider", function () {
        return browserWindowProvider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "windowProvider", function () {
        return windowProvider;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WINDOW_PROVIDERS", function () {
        return WINDOW_PROVIDERS;
      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* Create a new injection token for injecting the window into a component. */


      var WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('WindowToken');
      /* Define abstract class for obtaining reference to the global window object. */

      var WindowRef = /*#__PURE__*/function () {
        function WindowRef() {
          _classCallCheck(this, WindowRef);
        }

        _createClass(WindowRef, [{
          key: "nativeWindow",
          get: function get() {
            throw new Error('Not implemented.');
          }
        }]);

        return WindowRef;
      }();
      /* Define class that implements the abstract class and returns the native window object. */


      var BrowserWindowRef = /*#__PURE__*/function (_WindowRef) {
        _inherits(BrowserWindowRef, _WindowRef);

        var _super = _createSuper(BrowserWindowRef);

        function BrowserWindowRef() {
          _classCallCheck(this, BrowserWindowRef);

          return _super.call(this);
        }

        _createClass(BrowserWindowRef, [{
          key: "nativeWindow",
          get: function get() {
            return window;
          }
        }]);

        return BrowserWindowRef;
      }(WindowRef);

      BrowserWindowRef.ɵfac = function BrowserWindowRef_Factory(t) {
        return new (t || BrowserWindowRef)();
      };

      BrowserWindowRef.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: BrowserWindowRef,
        factory: BrowserWindowRef.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BrowserWindowRef, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [];
        }, null);
      })();
      /* Create an factory function that returns the native window object. */


      function windowFactory(browserWindowRef, platformId) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(platformId)) {
          return browserWindowRef.nativeWindow;
        }

        return new Object();
      }
      /* Create a injectable provider for the WindowRef token that uses the BrowserWindowRef class. */


      var browserWindowProvider = {
        provide: WindowRef,
        useClass: BrowserWindowRef
      };
      /* Create an injectable provider that uses the windowFactory function for returning the native window object. */

      var windowProvider = {
        provide: WINDOW,
        useFactory: windowFactory,
        deps: [WindowRef, _angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
      };
      /* Create an array of providers. */

      var WINDOW_PROVIDERS = [browserWindowProvider, windowProvider];
      /***/
    },

    /***/
    "J8x5": function J8x5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataService", function () {
        return DataService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var DataService = function DataService() {
        _classCallCheck(this, DataService);

        this.field = [];
        this.field$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.field);
        this.selected = {
          lang: "",
          index: 0
        };
        this.changes = [];
        this.menuNew = {
          symbol: "",
          symbol_lang: {
            uz: "",
            ru: "",
            en: ""
          },
          title: {
            uz: "",
            ru: "",
            en: ""
          },
          inner_menu: []
        };
        this.menuNewSub = {
          uz: "",
          ru: "",
          en: "",
          queue: {
            current: 1,
            overall: 1,
            date: 1
          }
        };
      };

      DataService.ɵfac = function DataService_Factory(t) {
        return new (t || DataService)();
      };

      DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DataService,
        factory: DataService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "LFOy": function LFOy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AutoLoginGuard", function () {
        return AutoLoginGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/service/auth.service */
      "Da3E");

      var AutoLoginGuard = /*#__PURE__*/function () {
        function AutoLoginGuard(router, auth) {
          _classCallCheck(this, AutoLoginGuard);

          this.router = router;
          this.auth = auth;
        }

        _createClass(AutoLoginGuard, [{
          key: "canActivate",
          value: function canActivate(route) {
            var _this15 = this;

            var expectedRole = route.data.role;
            return this.auth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (user) {
              if (!user) {
                return true;
              } else {
                var role = user['role'];

                if (role === "PVO") {
                  _this15.router.navigateByUrl('/home');

                  return false;
                } else if (role === "ADMIN") {
                  _this15.router.navigateByUrl('/home-admin');

                  return false;
                } else {
                  alert('login as PVO or register');

                  _this15.auth.signOut();

                  return true;
                }
              }
            }));
          }
        }]);

        return AutoLoginGuard;
      }();

      AutoLoginGuard.ɵfac = function AutoLoginGuard_Factory(t) {
        return new (t || AutoLoginGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
      };

      AutoLoginGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AutoLoginGuard,
        factory: AutoLoginGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutoLoginGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _shared_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Lquv": function Lquv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/data/chart */
      "XjTe");
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment.prod */
      "cxbk");

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent() {
          _classCallCheck(this, DashboardComponent);

          this.doughnutData = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["doughnutData"];
          this.pieData = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["pieData"]; // doughnut 2

          this.view = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["view"];
          this.doughnutChartColorScheme = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["doughnutChartcolorScheme"];
          this.doughnutChartShowLabels = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["doughnutChartShowLabels"];
          this.doughnutChartGradient = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["doughnutChartGradient"];
          this.doughnutChartTooltip = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["doughnutChartTooltip"];
          this.chart5 = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["chart5"]; // lineChart

          this.lineChartData = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["lineChartData"];
          this.lineChartLabels = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["lineChartLabels"];
          this.lineChartOptions = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["lineChartOptions"];
          this.lineChartColors = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["lineChartColors"];
          this.lineChartLegend = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["lineChartLegend"];
          this.lineChartType = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["lineChartType"]; // lineChart

          this.smallLineChartData = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["smallLineChartData"];
          this.smallLineChartLabels = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["smallLineChartLabels"];
          this.smallLineChartOptions = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["smallLineChartOptions"];
          this.smallLineChartColors = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["smallLineChartColors"];
          this.smallLineChartLegend = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["smallLineChartLegend"];
          this.smallLineChartType = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["smallLineChartType"]; // lineChart

          this.smallLine2ChartData = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["smallLine2ChartData"];
          this.smallLine2ChartLabels = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["smallLine2ChartLabels"];
          this.smallLine2ChartOptions = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["smallLine2ChartOptions"];
          this.smallLine2ChartColors = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["smallLine2ChartColors"];
          this.smallLine2ChartLegend = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["smallLine2ChartLegend"];
          this.smallLine2ChartType = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["smallLine2ChartType"]; // lineChart

          this.smallLine3ChartData = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["smallLine3ChartData"];
          this.smallLine3ChartLabels = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["smallLine3ChartLabels"];
          this.smallLine3ChartOptions = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["smallLine3ChartOptions"];
          this.smallLine3ChartColors = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["smallLine3ChartColors"];
          this.smallLine3ChartLegend = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["smallLine3ChartLegend"];
          this.smallLine3ChartType = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["smallLine3ChartType"]; // lineChart

          this.smallLine4ChartData = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["smallLine4ChartData"];
          this.smallLine4ChartLabels = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["smallLine4ChartLabels"];
          this.smallLine4ChartOptions = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["smallLine4ChartOptions"];
          this.smallLine4ChartColors = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["smallLine4ChartColors"];
          this.smallLine4ChartLegend = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["smallLine4ChartLegend"];
          this.smallLine4ChartType = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["smallLine4ChartType"];
          this.chart3 = _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["chart3"];
          this.environment = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"];
          Object.assign(this, {
            doughnutData: _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["doughnutData"],
            pieData: _shared_data_chart__WEBPACK_IMPORTED_MODULE_1__["pieData"]
          });
        } // events


        _createClass(DashboardComponent, [{
          key: "chartClicked",
          value: function chartClicked(e) {}
        }, {
          key: "chartHovered",
          value: function chartHovered(e) {}
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || DashboardComponent)();
      };

      DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DashboardComponent,
        selectors: [["app-dashboard"]],
        decls: 9,
        vars: 4,
        consts: [[1, "navbar"], [3, "href"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Infokiosk");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ekran");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dispetcher");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "", ctx.environment.url, "/#/infokios", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "", ctx.environment.url, "/#/display", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "", ctx.environment.url, "/#/queue-officer", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "", ctx.environment.url, "/#/queue", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          }
        },
        styles: [".navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  background: #333;\n  padding: 10px 0;\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n  z-index: 1000;\n}\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n  padding: 10px 15px;\n  border-radius: 5px;\n  transition: background 0.3s;\n}\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #555;\n}\n\n.section[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 24px;\n  font-family: Arial, sans-serif;\n}\n\n.home[_ngcontent-%COMP%] {\n  background: #2980b9;\n}\n\n.about[_ngcontent-%COMP%] {\n  background: #27ae60;\n}\n\n.services[_ngcontent-%COMP%] {\n  background: #8e44ad;\n}\n\n.contact[_ngcontent-%COMP%] {\n  background: #e67e22;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUVBO0VBQU8sbUJBQUE7QUFFUDs7QUFEQTtFQUFRLG1CQUFBO0FBS1I7O0FBSkE7RUFBVyxtQkFBQTtBQVFYOztBQVBBO0VBQVUsbUJBQUE7QUFXViIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogIzMzMztcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMjBweDtcclxuICAgIHotaW5kZXg6IDEwMDA7XHJcbn1cclxuXHJcbi5uYXZiYXIgYSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3M7XHJcbn1cclxuXHJcbi5uYXZiYXIgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNTU1O1xyXG59XHJcblxyXG4uc2VjdGlvbiB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmhvbWUge2JhY2tncm91bmQ6ICMyOTgwYjk7fVxyXG4uYWJvdXQge2JhY2tncm91bmQ6ICMyN2FlNjA7fVxyXG4uc2VydmljZXMge2JhY2tncm91bmQ6ICM4ZTQ0YWQ7fVxyXG4uY29udGFjdCB7YmFja2dyb3VuZDogI2U2N2UyMjt9Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "PCNd": function PCNd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/feather-icons/feather-icons.component */
      "pqks");
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/footer/footer.component */
      "aF9I");
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/header/header.component */
      "aZ8m");
      /* harmony import */


      var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/sidebar/sidebar.component */
      "BAfr");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _directives_fullscreen_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./directives/fullscreen.directive */
      "jArk");
      /* harmony import */


      var _layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./layout/content-layout/content-layout.component */
      "+IRR");
      /* harmony import */


      var _service_nav_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./service/nav.service */
      "9HF/");
      /* harmony import */


      var _service_windows_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./service/windows.service */
      "J80p");
      /* harmony import */


      var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/breadcrumb/breadcrumb.component */
      "+803");
      /* harmony import */


      var _components_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/right-sidebar/right-sidebar.component */
      "SvO3");
      /* harmony import */


      var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/loading/loading.component */
      "fqV1");
      /* harmony import */


      var _components_multi_select_dropdown_multi_select_dropdown_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/multi-select-dropdown/multi-select-dropdown.component */
      "g+1y");
      /* harmony import */


      var _components_alert_alert_alert_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./components/alert/alert/alert.component */
      "nsWP");
      /* harmony import */


      var _components_alert_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./components/alert/confirm/confirm.component */
      "zSqk");
      /* harmony import */


      var _components_alert_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./components/alert/prompt/prompt.component */
      "s26Z");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SharedModule
      });
      SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SharedModule_Factory(t) {
          return new (t || SharedModule)();
        },
        providers: [_service_nav_service__WEBPACK_IMPORTED_MODULE_10__["NavService"], _service_windows_service__WEBPACK_IMPORTED_MODULE_11__["WINDOW_PROVIDERS"]],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
          declarations: [_directives_fullscreen_directive__WEBPACK_IMPORTED_MODULE_8__["ToggleFullscreenDirective"], _components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_3__["FeatherIconsComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_9__["ContentLayoutComponent"], _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_12__["BreadcrumbComponent"], _components_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["RightSidebarComponent"], _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__["LoadingComponent"], _components_multi_select_dropdown_multi_select_dropdown_component__WEBPACK_IMPORTED_MODULE_15__["MultiSelectDropdownComponent"], _components_alert_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_18__["PromptComponent"], _components_alert_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_17__["ConfirmComponent"], _components_alert_alert_alert_component__WEBPACK_IMPORTED_MODULE_16__["AlertComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]],
          exports: [_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_3__["FeatherIconsComponent"], _directives_fullscreen_directive__WEBPACK_IMPORTED_MODULE_8__["ToggleFullscreenDirective"], _components_multi_select_dropdown_multi_select_dropdown_component__WEBPACK_IMPORTED_MODULE_15__["MultiSelectDropdownComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_directives_fullscreen_directive__WEBPACK_IMPORTED_MODULE_8__["ToggleFullscreenDirective"], _components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_3__["FeatherIconsComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_9__["ContentLayoutComponent"], _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_12__["BreadcrumbComponent"], _components_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["RightSidebarComponent"], _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_14__["LoadingComponent"], _components_multi_select_dropdown_multi_select_dropdown_component__WEBPACK_IMPORTED_MODULE_15__["MultiSelectDropdownComponent"], _components_alert_prompt_prompt_component__WEBPACK_IMPORTED_MODULE_18__["PromptComponent"], _components_alert_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_17__["ConfirmComponent"], _components_alert_alert_alert_component__WEBPACK_IMPORTED_MODULE_16__["AlertComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]],
            providers: [_service_nav_service__WEBPACK_IMPORTED_MODULE_10__["NavService"], _service_windows_service__WEBPACK_IMPORTED_MODULE_11__["WINDOW_PROVIDERS"]],
            exports: [_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_3__["FeatherIconsComponent"], _directives_fullscreen_directive__WEBPACK_IMPORTED_MODULE_8__["ToggleFullscreenDirective"], _components_multi_select_dropdown_multi_select_dropdown_component__WEBPACK_IMPORTED_MODULE_15__["MultiSelectDropdownComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Qqv8": function Qqv8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreatePageComponent", function () {
        return CreatePageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var ngx_ckeditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ngx-ckeditor */
      "eLGb");

      function CreatePageComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "General");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "ck-editor", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Enable the Page");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.generalForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullPage", false);
        }
      }

      function CreatePageComponent_ng_template_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "SEO");
        }
      }

      function CreatePageComponent_ng_template_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "SEO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Meta Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Meta Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "textarea", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.seoForm);
        }
      }

      var CreatePageComponent = /*#__PURE__*/function () {
        function CreatePageComponent(formBuilder) {
          _classCallCheck(this, CreatePageComponent);

          this.formBuilder = formBuilder;
          this.createGeneralForm();
          this.createSeoForm();
        }

        _createClass(CreatePageComponent, [{
          key: "createGeneralForm",
          value: function createGeneralForm() {
            this.generalForm = this.formBuilder.group({
              name: [''],
              desc: [''],
              status: ['']
            });
          }
        }, {
          key: "createSeoForm",
          value: function createSeoForm() {
            this.seoForm = this.formBuilder.group({
              title: [''],
              keyword: [''],
              meta_desc: ['']
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CreatePageComponent;
      }();

      CreatePageComponent.ɵfac = function CreatePageComponent_Factory(t) {
        return new (t || CreatePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
      };

      CreatePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CreatePageComponent,
        selectors: [["app-create-page"]],
        decls: 15,
        vars: 0,
        consts: [[1, "container-fluid"], [1, "card"], [1, "card-header"], [1, "card-body", "tab2-card"], [1, "tab-coupon"], ["title", "General"], ["ngbTabContent", ""], ["ngbTabTitle", ""], [1, "pull-right"], ["type", "button", 1, "btn", "btn-primary"], ["novalidate", "", 1, "needs-validation", 3, "formGroup"], [1, "form-group", "row"], ["for", "validationCustom0", 1, "col-xl-3", "col-md-4"], ["formControlName", "name", "id", "validationCustom0", "type", "text", "required", "", 1, "form-control", "col-xl-8", "col-md-7"], [1, "form-group", "row", "editor-label"], [1, "col-xl-3", "col-md-4"], [1, "col-xl-8", "col-md-7", "editor-space"], ["id", "editor1", "name", "editor1", "cols", "30", "rows", "10", "language", "en", 3, "fullPage"], [1, "checkbox", "checkbox-primary", "col-xl-8", "col-md-7"], ["id", "checkbox-primary-2", "formControlName", "status", "type", "checkbox", "data-original-title", "", "title", ""], ["for", "checkbox-primary-2"], ["for", "validationCustom2", 1, "col-xl-3", "col-md-4"], ["formControlName", "title", "id", "validationCustom2", "type", "text", "required", "", 1, "form-control", "col-xl-8", "col-md-7"], ["rows", "4", "formControlName", "meta_desc", 1, "col-xl-8", "col-md-7"]],
        template: function CreatePageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add Page");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ngb-tabset", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ngb-tab", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CreatePageComponent_ng_template_8_Template, 23, 2, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ngb-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CreatePageComponent_ng_template_10_Template, 1, 0, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CreatePageComponent_ng_template_11_Template, 11, 1, "ng-template", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTabContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbTabTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], ngx_ckeditor__WEBPACK_IMPORTED_MODULE_3__["CKEditorComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreatePageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-create-page',
            templateUrl: './create-page.component.html',
            styleUrls: ['./create-page.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "RnhZ": function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "SvO3": function SvO3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RightSidebarComponent", function () {
        return RightSidebarComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function RightSidebarComponent_li_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var user_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", user_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r1.status, "");
        }
      }

      var RightSidebarComponent = /*#__PURE__*/function () {
        function RightSidebarComponent() {
          _classCallCheck(this, RightSidebarComponent);

          this.users = [{
            img: "assets/images/dashboard/user.png",
            name: "Vincent Porter",
            status: "Online"
          }, {
            img: "assets/images/dashboard/user1.jpg",
            name: "Ain Chavez",
            status: "28 minutes ago"
          }, {
            img: "assets/images/dashboard/user2.jpg",
            name: "Kori Thomas",
            status: "Online"
          }, {
            img: "assets/images/dashboard/user3.jpg",
            name: "Erica Hughes",
            status: "Online"
          }, {
            img: "assets/images/dashboard/man.png",
            name: "Ginger Johnston",
            status: "2 minutes ago"
          }, {
            img: "assets/images/dashboard/user5.jpg",
            name: "Prasanth Anand",
            status: "2 hour ago"
          }, {
            img: "assets/images/dashboard/designer.jpg",
            name: "Hileri Jecno",
            status: "Online"
          }];
        }

        _createClass(RightSidebarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RightSidebarComponent;
      }();

      RightSidebarComponent.ɵfac = function RightSidebarComponent_Factory(t) {
        return new (t || RightSidebarComponent)();
      };

      RightSidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RightSidebarComponent,
        selectors: [["app-right-sidebar"]],
        decls: 16,
        vars: 1,
        consts: [[1, "container", "p-0"], [1, "modal-header", "p-l-20", "p-r-20"], [1, "col-sm-8", "p-0"], [1, "modal-title", "font-weight-bold"], [1, "col-sm-4", "text-right", "p-0"], ["data-feather", "settings", 1, "mr-2"], [1, "friend-list-search", "mt-0"], ["type", "text", "placeholder", "search friend"], [1, "fa", "fa-search"], [1, "p-l-30", "p-r-30"], [1, "chat-box"], [1, "people-list", "friend-list"], [1, "list"], ["class", "clearfix", 4, "ngFor", "ngForOf"], [1, "clearfix"], ["alt", "", 1, "rounded-circle", "user-image", "blur-up", "lazyloaded", 3, "src"], [1, "status-circle", "online"], [1, "about"], [1, "name"], [1, "status"]],
        template: function RightSidebarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "FRIEND LIST");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RightSidebarComponent_li_15_Template, 8, 3, "li", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.users);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyaWdodC1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RightSidebarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-right-sidebar',
            templateUrl: './right-sidebar.component.html',
            styleUrls: ['./right-sidebar.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n": function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'multikart-backend';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "TZ7e": function TZ7e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function () {
        return ReportsRoutingModule;
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


      var _reports_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./reports.component */
      "2hHS");

      var routes = [{
        path: '',
        component: _reports_component__WEBPACK_IMPORTED_MODULE_2__["ReportsComponent"],
        data: {
          title: "Reports",
          breadcrumb: "Reports"
        }
      }];

      var ReportsRoutingModule = function ReportsRoutingModule() {
        _classCallCheck(this, ReportsRoutingModule);
      };

      ReportsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ReportsRoutingModule
      });
      ReportsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ReportsRoutingModule_Factory(t) {
          return new (t || ReportsRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReportsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportsRoutingModule, [{
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
    "U5OH": function U5OH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SalesRoutingModule", function () {
        return SalesRoutingModule;
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


      var _orders_orders_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./orders/orders.component */
      "XsfW");
      /* harmony import */


      var _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./transactions/transactions.component */
      "foZk");

      var routes = [{
        path: '',
        children: [{
          path: 'orders',
          component: _orders_orders_component__WEBPACK_IMPORTED_MODULE_2__["OrdersComponent"],
          data: {
            title: "Orders",
            breadcrumb: "Orders"
          }
        }, {
          path: 'transactions',
          component: _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_3__["TransactionsComponent"],
          data: {
            title: "Transactions",
            breadcrumb: "Transactions"
          }
        }]
      }];

      var SalesRoutingModule = function SalesRoutingModule() {
        _classCallCheck(this, SalesRoutingModule);
      };

      SalesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SalesRoutingModule
      });
      SalesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SalesRoutingModule_Factory(t) {
          return new (t || SalesRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SalesRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SalesRoutingModule, [{
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
    "UTcu": function UTcu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
        return AuthGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/service/auth.service */
      "Da3E");

      var AuthGuard = /*#__PURE__*/function () {
        function AuthGuard(router, auth) {
          _classCallCheck(this, AuthGuard);

          this.router = router;
          this.auth = auth;
        }

        _createClass(AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route) {
            var _this16 = this;

            var expectedRole = route.data.role;
            return this.auth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (user) {
              if (!user) {
                _this16.router.navigateByUrl('/auth/login');

                return false;
              } else {
                var role = user['role'];

                if (role === expectedRole) {
                  return true;
                } else if (role === "ADMIN") {
                  _this16.router.navigateByUrl('/home-admin');
                } else if (role === "PVO") {
                  _this16.router.navigateByUrl('/home');
                } else {
                  alert('Foydalanuvchi rolini o\'zgartiring!');

                  _this16.auth.signOut();

                  return false;
                }
              }
            }));
          }
        }]);

        return AuthGuard;
      }();

      AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
      };

      AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AuthGuard,
        factory: AuthGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _shared_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Uy5Q": function Uy5Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateUserComponent", function () {
        return CreateUserComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared_service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/service/data.service */
      "J8x5");
      /* harmony import */


      var _shared_service_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared/service/http.service */
      "uiMJ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function CreateUserComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.tmp.error);
        }
      }

      function CreateUserComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Qator to'ldirilishi shart!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateUserComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Qator to'ldirilishi shart!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateUserComponent_div_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Qator to'ldirilishi shart!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateUserComponent_div_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Qator to'ldirilishi shart!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function CreateUserComponent_option_122_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r8.fakultet);
        }
      }

      function CreateUserComponent_div_123_option_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10);
        }
      }

      function CreateUserComponent_div_123_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Kafedra ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " -- tanlash -- ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CreateUserComponent_div_123_option_9_Template, 2, 1, "option", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.tanKafedra().kafedralar);
        }
      }

      function CreateUserComponent_div_127_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      var CreateUserComponent = /*#__PURE__*/function () {
        function CreateUserComponent(formBuilder, dataService, httpService) {
          _classCallCheck(this, CreateUserComponent);

          this.formBuilder = formBuilder;
          this.dataService = dataService;
          this.httpService = httpService;
          this.tmp = {
            error: "",
            loading: false
          };
          this.createAccountForm();
          this.createPermissionForm(); // this.tizim = dataService.tizim;
          // dataService.pvoKaf$.subscribe(res=>{
          //   this.pvoKaf = res;
          // })
        }

        _createClass(CreateUserComponent, [{
          key: "createAccountForm",
          value: function createAccountForm() {
            this.accountForm = this.formBuilder.group({
              fname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              lname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              patronymic: [''],
              born: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              rank: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              wagerate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              academic_degree: [''],
              academic_title: [''],
              state_type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              kafed: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              fakul: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "tanKafedra",
          value: function tanKafedra() {
            var _this17 = this;

            return this.tizim.filter(function (res) {
              return res.fakultet === _this17.accountForm.value.fakul;
            })[0];
          }
        }, {
          key: "createPermissionForm",
          value: function createPermissionForm() {
            this.permissionForm = this.formBuilder.group({});
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "f",
          get: function get() {
            return this.accountForm.controls;
          }
        }, {
          key: "onAdd",
          value: function onAdd(event) {
            var _this18 = this;

            var value = this.accountForm.value;
            this.tmp.loading = true;

            if (this.pvoKaf.find(function (res) {
              var _a, _b, _c, _d;

              return ((_a = res.fname) === null || _a === void 0 ? void 0 : _a.replace(/[ ,.]/g, "")) === ((_b = value.fname) === null || _b === void 0 ? void 0 : _b.replace(/[ ,.]/g, "")) && ((_c = res.lname) === null || _c === void 0 ? void 0 : _c.replace(/[ ,.]/g, "")) === ((_d = value.lname) === null || _d === void 0 ? void 0 : _d.replace(/[ ,.]/g, "")) && (res.patronymic ? res.patronymic : '').replace(/[ ,.]/g, "") === (value.patronymic ? value.patronymic : '').replace(/[ ,.]/g, "");
            })) {
              this.tmp.loading = false;
              return this.tmp.error = "Bunday ism va sharifli o'qituvchi mavjud!";
            }

            this.httpService.setNewPvo(value).subscribe(function (result) {
              // console.log('result', result);
              if (result.status === 200) {
                _this18.accountForm.reset();

                _this18.tmp.loading = false;
                alert('Ma\'lumotlar muvaffaqiyatli saqlandi!');
                _this18.tmp.error = '';
              } else {
                alert('Nimadur hato ketti!');
              }
            }, function (error) {
              console.error(error);
            });
          }
        }]);

        return CreateUserComponent;
      }();

      CreateUserComponent.ɵfac = function CreateUserComponent_Factory(t) {
        return new (t || CreateUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_service_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]));
      };

      CreateUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CreateUserComponent,
        selectors: [["app-create-user"]],
        decls: 128,
        vars: 22,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card", "tab2-card"], [1, "card-header"], [1, "card-body", "tab2-card"], ["class", "red", 4, "ngIf"], ["novalida", "", 1, "needs-validation", "user-add", 3, "formGroup", "submit"], [1, "form-group", "row"], ["for", "validationCustom1", 1, "col-xl-3", "col-md-4"], [1, "col-md-8"], ["formControlName", "fname", "placeholder", "Ismi", "type", "text", "id", "validationCustom1", 1, "form-control", 3, "ngClass"], ["for", "validationCustom2", 1, "col-xl-3", "col-md-4"], ["formControlName", "lname", "placeholder", "Familiyasi", "type", "text", "id", "validationCustom2", 1, "form-control", 3, "ngClass"], ["for", "validationCustom3", 1, "col-xl-3", "col-md-4"], ["formControlName", "patronymic", "placeholder", "Sharifi", "type", "text", "id", "validationCustom3", 1, "form-control", 3, "ngClass"], ["for", "validationCustom31", 1, "col-xl-3", "col-md-4"], ["formControlName", "born", "placeholder", "Tug\u2018ilgan yili", "type", "number", "id", "validationCustom31", 1, "form-control", 3, "ngClass"], ["for", "validationCustom32", 1, "col-xl-3", "col-md-4"], ["formControlName", "rank", 1, "form-control", "digits"], ["disabled", "", "selected", "", "value", ""], ["for", "validationCustom33", 1, "col-xl-3", "col-md-4"], ["formControlName", "wagerate", 1, "form-control", "digits"], ["for", "validationCustom34", 1, "col-xl-3", "col-md-4"], ["formControlName", "academic_degree", 1, "form-control", "digits"], ["for", "validationCustom35", 1, "col-xl-3", "col-md-4"], ["formControlName", "academic_title", 1, "form-control", "digits"], ["for", "validationCustom36", 1, "col-xl-3", "col-md-4"], ["formControlName", "state_type", 1, "form-control", "digits"], ["for", "validationCustom4", 1, "col-xl-3", "col-md-4"], ["formControlName", "fakul", 1, "form-control", "digits"], [4, "ngFor", "ngForOf"], ["class", "form-group row", 4, "ngIf"], [1, "pull-right"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], ["class", "lds-wrap", 4, "ngIf"], [1, "red"], ["for", "validationCustom5", 1, "col-xl-3", "col-md-4"], ["formControlName", "kafed", 1, "form-control", "digits"], [1, "lds-wrap"], [1, "lds-dual-ring"]],
        template: function CreateUserComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Foydalanuvchi qo'shish");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CreateUserComponent_div_8_Template, 2, 1, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function CreateUserComponent_Template_form_submit_9_listener($event) {
              return ctx.onAdd($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Ismi ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CreateUserComponent_div_17_Template, 2, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Familiyasi ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CreateUserComponent_div_25_Template, 2, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Sharifi ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, CreateUserComponent_div_31_Template, 2, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Tug\u2018ilgan yili ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, CreateUserComponent_div_37_Template, 2, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Lavozimi ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "select", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " -- tanlash -- ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Professor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Dotsent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "katta o\u2018qituvchi");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Assistent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Kafedra mudiri");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Stavkasi ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "select", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " -- tanlash -- ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "1,5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "0,5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "0,25");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " Ilmiy darajasi ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "select", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " -- tanlash -- ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Fan doktori");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Fan nomzodi");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "label", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " Ilmiy unvoni ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "select", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, " -- tanlash -- ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Dotsent");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Professor");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "label", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Shtat turi ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "select", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " -- tanlash -- ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Asosiy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Ichki o'rindosh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Tashqi o'rindosh");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Soatbay");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "label", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " Fakultet ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "select", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "option", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, " -- tanlash -- ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](122, CreateUserComponent_option_122_Template, 2, 1, "option", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, CreateUserComponent_div_123_Template, 10, 1, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "button", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Qo'shish");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](127, CreateUserComponent_div_127_Template, 2, 0, "div", 35);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tmp.error);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.accountForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.f.fname.touched && ctx.f.fname.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.fname.touched && ctx.f.fname.errors && ctx.f.fname.errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.f.lname.touched && ctx.f.lname.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.lname.touched && ctx.f.lname.errors && ctx.f.lname.errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.f.patronymic.touched && ctx.f.patronymic.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.patronymic.touched && ctx.f.patronymic.errors && ctx.f.patronymic.errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx.f.born.touched && ctx.f.born.errors));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.born.touched && ctx.f.born.errors && ctx.f.born.errors.required);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](85);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tizim);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.accountForm.value.fakul);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.accountForm.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tmp.loading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUtdXNlci5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateUserComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-create-user',
            templateUrl: './create-user.component.html',
            styleUrls: ['./create-user.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _shared_service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
          }, {
            type: _shared_service_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "VpI2": function VpI2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
        return DashboardRoutingModule;
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


      var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dashboard.component */
      "Lquv");

      var routes = [{
        path: '',
        children: [{
          path: 'default',
          component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
          data: {
            title: "Dashboard",
            breadcrumb: "Dashboard"
          }
        }]
      }];

      var DashboardRoutingModule = function DashboardRoutingModule() {
        _classCallCheck(this, DashboardRoutingModule);
      };

      DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DashboardRoutingModule
      });
      DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DashboardRoutingModule_Factory(t) {
          return new (t || DashboardRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardRoutingModule, [{
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
    "VrLt": function VrLt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListUserComponent", function () {
        return ListUserComponent;
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


      var src_app_shared_service_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/service/http.service */
      "uiMJ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng2-smart-table */
      "RS3s");

      function ListUserComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Foydalanuvchilar ma'lumotlari");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Foydalanuvchi yaratish");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ng2-smart-table", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleteConfirm", function ListUserComponent_div_0_Template_ng2_smart_table_deleteConfirm_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.onDeleteConfirm($event);
          })("editConfirm", function ListUserComponent_div_0_Template_ng2_smart_table_editConfirm_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.onEditConfirm($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/users/create-user");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx_r0.settings)("source", ctx_r0.user_list);
        }
      }

      function ListUserComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var ListUserComponent = /*#__PURE__*/function () {
        function ListUserComponent(dataService, httpService) {
          _classCallCheck(this, ListUserComponent);

          this.dataService = dataService;
          this.httpService = httpService;
          this.user_list = [];
          this.tmp = {
            loading: true
          };
          this.settings = {
            "delete": {
              confirmDelete: true,
              deleteButtonContent: '<a class="table_del_default_icon"></a>'
            },
            edit: {
              editButtonContent: 'EDIT ',
              saveButtonContent: 'SAVE ',
              cancelButtonContent: 'CANCEL ',
              confirmSave: true
            },
            actions: {
              add: false,
              edit: true,
              "delete": true,
              position: 'right'
            },
            columns: {
              // avatar: {
              //   title: 'Avatar',
              //   type: 'html'
              // },
              fname: {
                title: 'Ismi',
                editable: false
              },
              lname: {
                title: 'Familiyasi',
                editable: false
              },
              patronymic: {
                title: 'Sharifi',
                editable: false
              },
              born: {
                title: 'Tug‘ilgan yili'
              },
              rank: {
                title: 'Lavozimi',
                editor: {
                  type: 'list',
                  config: {
                    selectText: 'Select',
                    list: [{
                      value: 'Professor',
                      title: 'Professor'
                    }, {
                      value: 'Dotsent',
                      title: 'Dotsent'
                    }, {
                      value: 'Katta o‘qituvchi',
                      title: 'Katta o‘qituvchi'
                    }, {
                      value: 'Assistent',
                      title: 'Assistent'
                    }, {
                      value: 'Kafedra mudiri',
                      title: 'Kafedra mudiri'
                    }]
                  }
                }
              },
              wagerate: {
                title: 'Stavkasi',
                editor: {
                  type: 'list',
                  config: {
                    selectText: 'Select',
                    list: [{
                      value: '1',
                      title: '1'
                    }, {
                      value: '1,5',
                      title: '1,5'
                    }, {
                      value: '0,5',
                      title: '0,5'
                    }, {
                      value: '0,25',
                      title: '0,25'
                    }]
                  }
                }
              },
              academic_degree: {
                title: 'Ilmiy darajasi',
                editor: {
                  type: 'list',
                  config: {
                    selectText: 'Select',
                    list: [{
                      value: 'Fan doktori',
                      title: 'Fan doktori'
                    }, {
                      value: 'Fan nomzodi',
                      title: 'Fan nomzodi'
                    }]
                  }
                }
              },
              academic_title: {
                title: 'Ilmiy unvoni',
                editor: {
                  type: 'list',
                  config: {
                    selectText: 'Select',
                    list: [{
                      value: 'Dotsent',
                      title: 'Dotsent'
                    }, {
                      value: 'Professor',
                      title: 'Professor'
                    }]
                  }
                }
              },
              state_type: {
                title: 'Shtat turi',
                editor: {
                  type: 'list',
                  config: {
                    selectText: 'Select',
                    list: [{
                      value: 'Asosiy',
                      title: 'Asosiy'
                    }, {
                      value: 'Ichki o‘rindosh',
                      title: 'Ichki o‘rindosh'
                    }, {
                      value: 'Tashqi o‘rindosh',
                      title: 'Tashqi o‘rindosh'
                    }, {
                      value: 'Soatbay',
                      title: 'Soatbay'
                    }]
                  }
                }
              },
              fakul: {
                title: 'Fakultet',
                editable: false
              },
              kafed: {
                title: 'Kafedra',
                editable: false
              }
            }
          }; // dataService.pvoKaf$.subscribe(async(res)=>{
          //   this.user_list = await res;
          //   this.tmp.loading = false;
          // })
        }

        _createClass(ListUserComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onEditConfirm",
          value: function onEditConfirm(event) {
            var data = event.newData; // console.log(data)

            var newData = {
              academic_degree: data['academic_degree'],
              academic_title: data['academic_title'],
              born: data['born'],
              rank: data['rank'],
              state_type: data['state_type'],
              wagerate: data['wagerate']
            };
            this.httpService.editUserAccaunt(data['added_id'], newData).subscribe(function (res) {
              if (res.status === 200) {
                alert('Ma\'lumotlar muvaffaqiyatli yangilandi!');
              } else {
                alert('Nimadur hato ketti yana bir bor urinib ko\'ring!');
              } // console.log('result ', res)


              event.confirm.resolve();
            }, function (error) {
              alert('Nimadur hato ketti yana bir bor urinib ko\'ring! Error: ' + JSON.stringify(error));
            }); // console.log(newData)
          }
        }, {
          key: "onDeleteConfirm",
          value: function onDeleteConfirm(event) {
            this.httpService.removePvo(event.data.added_id).subscribe(function (result) {
              if (result.status === 200) {
                alert('Foydalanuvchi muvaffaqiyatli ochirildi!');
                event.confirm.resolve();
              } else {
                alert('Nimadur hato ketti yana bir bor urinib ko\'ring!');
              }
            }, function (error) {
              alert('Nimadur hato ketti yana bir bor urinib ko\'ring!');
              console.error(error);
            });
          }
        }]);

        return ListUserComponent;
      }();

      ListUserComponent.ɵfac = function ListUserComponent_Factory(t) {
        return new (t || ListUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]));
      };

      ListUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ListUserComponent,
        selectors: [["app-list-user"]],
        decls: 2,
        vars: 2,
        consts: [["class", "container-fluid", 4, "ngIf"], ["class", "lds-wrap", 4, "ngIf"], [1, "container-fluid"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "btn-popup", "pull-right"], [1, "btn", "btn-primary", 3, "routerLink"], ["id", "batchDelete", 1, "category-table", "custom-datatable", "transcation-datatable", "user-image"], [1, "table-responsive"], [3, "settings", "source", "deleteConfirm", "editConfirm"], [1, "lds-wrap"], [1, "lds-dual-ring"]],
        template: function ListUserComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ListUserComponent_div_0_Template, 12, 3, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ListUserComponent_div_1_Template, 2, 0, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.tmp.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tmp.loading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_5__["Ng2SmartTableComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LXVzZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListUserComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-list-user',
            templateUrl: './list-user.component.html',
            styleUrls: ['./list-user.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]
          }, {
            type: src_app_shared_service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "WOLP": function WOLP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function () {
        return PagesRoutingModule;
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


      var _list_page_list_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./list-page/list-page.component */
      "elBU");
      /* harmony import */


      var _create_page_create_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./create-page/create-page.component */
      "Qqv8");

      var routes = [{
        path: '',
        children: [{
          path: 'list-page',
          component: _list_page_list_page_component__WEBPACK_IMPORTED_MODULE_2__["ListPageComponent"],
          data: {
            title: "List Page",
            breadcrumb: "List Page"
          }
        }, {
          path: 'create-page',
          component: _create_page_create_page_component__WEBPACK_IMPORTED_MODULE_3__["CreatePageComponent"],
          data: {
            title: "Create Page",
            breadcrumb: "Create Page"
          }
        }]
      }];

      var PagesRoutingModule = function PagesRoutingModule() {
        _classCallCheck(this, PagesRoutingModule);
      };

      PagesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PagesRoutingModule
      });
      PagesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PagesRoutingModule_Factory(t) {
          return new (t || PagesRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesRoutingModule, [{
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
    "XjTe": function XjTe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "doughnutData", function () {
        return doughnutData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "view", function () {
        return view;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "pieData", function () {
        return pieData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "doughnutChartShowLabels", function () {
        return doughnutChartShowLabels;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "doughnutChartTooltip", function () {
        return doughnutChartTooltip;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "doughnutChartGradient", function () {
        return doughnutChartGradient;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "doughnutChartcolorScheme", function () {
        return doughnutChartcolorScheme;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "chart5", function () {
        return chart5;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChartData", function () {
        return lineChartData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChartLabels", function () {
        return lineChartLabels;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChartOptions", function () {
        return lineChartOptions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChartColors", function () {
        return lineChartColors;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChartLegend", function () {
        return lineChartLegend;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChartType", function () {
        return lineChartType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "smallLineChartData", function () {
        return smallLineChartData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "smallLineChartLabels", function () {
        return smallLineChartLabels;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "smallLineChartOptions", function () {
        return smallLineChartOptions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "smallLineChartColors", function () {
        return smallLineChartColors;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "smallLineChartLegend", function () {
        return smallLineChartLegend;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "smallLineChartType", function () {
        return smallLineChartType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "smallLine2ChartData", function () {
        return smallLine2ChartData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "smallLine2ChartLabels", function () {
        return smallLine2ChartLabels;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "smallLine2ChartOptions", function () {
        return smallLine2ChartOptions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "smallLine2ChartColors", function () {
        return smallLine2ChartColors;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "smallLine2ChartLegend", function () {
        return smallLine2ChartLegend;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "smallLine2ChartType", function () {
        return smallLine2ChartType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "smallLine3ChartData", function () {
        return smallLine3ChartData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "smallLine3ChartLabels", function () {
        return smallLine3ChartLabels;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "smallLine3ChartOptions", function () {
        return smallLine3ChartOptions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "smallLine3ChartColors", function () {
        return smallLine3ChartColors;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "smallLine3ChartLegend", function () {
        return smallLine3ChartLegend;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "smallLine3ChartType", function () {
        return smallLine3ChartType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "smallLine4ChartData", function () {
        return smallLine4ChartData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "smallLine4ChartLabels", function () {
        return smallLine4ChartLabels;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "smallLine4ChartOptions", function () {
        return smallLine4ChartOptions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "smallLine4ChartColors", function () {
        return smallLine4ChartColors;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "smallLine4ChartLegend", function () {
        return smallLine4ChartLegend;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "smallLine4ChartType", function () {
        return smallLine4ChartType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "chart3", function () {
        return chart3;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "salesChartData", function () {
        return salesChartData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "salesChartLabels", function () {
        return salesChartLabels;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "salesChartOptions", function () {
        return salesChartOptions;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "salesChartColors", function () {
        return salesChartColors;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "salesChartLegend", function () {
        return salesChartLegend;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "salesChartType", function () {
        return salesChartType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "areaChart1", function () {
        return areaChart1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "columnChart1", function () {
        return columnChart1;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineChart", function () {
        return lineChart;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "chart6", function () {
        return chart6;
      });

      var doughnutData = [{
        value: 100,
        name: "Frontend"
      }, {
        value: 150,
        name: "Backend"
      }, {
        value: 150,
        name: "Api"
      }, {
        value: 100,
        name: "Issues"
      }];
      var view = [218, 408];
      var pieData = [{
        value: 300,
        name: "Frontend"
      }, {
        value: 50,
        name: "Backend"
      }, {
        value: 100,
        name: "Api"
      }]; //Options

      var doughnutChartShowLabels = false;
      var doughnutChartTooltip = false;
      var doughnutChartGradient = false;
      var doughnutChartcolorScheme = {
        domain: ["#ff7f83", "#02cccd", "#a5a5a5", "#ffbc58"]
      }; // Chart 5 Line chart with area

      var chart5 = {
        type: 'Line',
        data: {
          labels: ["Mexanika - mashinasozlik", "Energetika", "Kimyo texnologiya", "Qurilish", "Ishlab chiqarishda boshqaruv", "Yengil sanoat va to'qimachilik", "Arxitektura va qurilish materiallari", "Kompyuterlashgan loyihalash tizimlari"],
          series: [[5, 9, 7, 8, 5, 3, 5, 4]]
        },
        options: {
          showArea: true,
          height: '600',
          low: 0
        }
      }; //line chart

      var lineChartData = [{
        data: [20, 5, 80, 10, 100, 15]
      }, {
        data: [0, 50, 20, 70, 30, 27]
      }, {
        data: [0, 30, 40, 10, 86, 40]
      }];
      var lineChartLabels = ["1 min.", "10 min.", "20 min.", "30 min.", "40 min.", "50 min."];
      var lineChartOptions = {
        scaleShowGridLines: true,
        scaleGridLineWidth: 1,
        scaleShowHorizontalLines: true,
        scaleShowVerticalLines: true,
        bezierCurve: true,
        bezierCurveTension: 0.4,
        pointDot: true,
        pointDotRadius: 4,
        pointDotStrokeWidth: 1,
        pointHitDetectionRadius: 20,
        datasetStroke: true,
        datasetStrokeWidth: 2,
        datasetFill: true,
        responsive: true,
        maintainAspectRatio: false
      };
      var lineChartColors = [{
        backgroundColor: "transparent",
        borderColor: "#01cccd",
        pointColor: "#01cccd",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "#000"
      }, {
        backgroundColor: "transparent",
        borderColor: "#a5a5a5",
        pointColor: "#a5a5a5",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#000",
        pointHighlightStroke: "rgba(30, 166, 236, 1)"
      }, {
        backgroundColor: "transparent",
        borderColor: "#ff7f83",
        pointColor: "#ff7f83",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#000",
        pointHighlightStroke: "rgba(30, 166, 236, 1)"
      }];
      var lineChartLegend = false;
      var lineChartType = 'line'; //line chart

      var smallLineChartData = [{
        data: [20, 5, 120, 10, 140, 15]
      }];
      var smallLineChartLabels = ["", "", "", "", "", ""];
      var smallLineChartOptions = {
        scaleShowHorizontalLines: false,
        pointDotStrokeWidth: 0,
        scaleShowVerticalLines: false,
        responsive: true,
        elements: {
          point: {
            radius: 0
          },
          line: {
            tension: 0
          }
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }]
        }
      };
      var smallLineChartColors = [{
        backgroundColor: "transparent",
        borderColor: "#ff8084",
        pointColor: "#ff8084"
      }];
      var smallLineChartLegend = false;
      var smallLineChartType = 'line'; //line chart

      var smallLine2ChartData = [{
        data: [85, 83, 90, 70, 85, 60, 65, 63, 68, 68, 65, 40, 60, 75, 70, 90]
      }];
      var smallLine2ChartLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17'];
      var smallLine2ChartOptions = {
        scaleShowHorizontalLines: false,
        scaleShowVerticalLines: false,
        pointDot: false,
        pointDotRadius: 0,
        pointDotStrokeWidth: 0,
        responsive: true,
        elements: {
          point: {
            radius: 0
          },
          line: {
            tension: 0
          }
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }]
        }
      };
      var smallLine2ChartColors = [{
        backgroundColor: "transparent",
        borderColor: "#13c9ca",
        pointColor: "#13c9ca"
      }];
      var smallLine2ChartLegend = false;
      var smallLine2ChartType = 'line'; //line chart

      var smallLine3ChartData = [{
        data: [85, 83, 90, 70, 85, 60, 65, 63, 68, 68, 65, 40, 60, 75, 70, 90]
      }];
      var smallLine3ChartLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17'];
      var smallLine3ChartOptions = {
        scaleShowHorizontalLines: false,
        pointDotStrokeWidth: 0,
        scaleShowVerticalLines: false,
        responsive: true,
        elements: {
          point: {
            radius: 0
          },
          line: {
            tension: 0
          }
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }]
        }
      };
      var smallLine3ChartColors = [{
        backgroundColor: "transparent",
        borderColor: "#f0b54d",
        pointColor: "#f0b54d"
      }];
      var smallLine3ChartLegend = false;
      var smallLine3ChartType = 'line'; //line chart

      var smallLine4ChartData = [{
        data: [85, 83, 90, 70, 85, 60, 65, 63, 68, 68, 65, 40, 60, 68, 75, 70, 90]
      }];
      var smallLine4ChartLabels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17'];
      var smallLine4ChartOptions = {
        scaleShowHorizontalLines: false,
        scaleShowVerticalLines: false,
        pointDot: false,
        pointDotRadius: 0,
        pointDotStrokeWidth: 0,
        responsive: true,
        elements: {
          point: {
            radius: 0
          },
          line: {
            tension: 0
          }
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }]
        }
      };
      var smallLine4ChartColors = [{
        backgroundColor: "transparent",
        borderColor: "#a5a5a5",
        pointColor: "#a5a5a5",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "#000"
      }];
      var smallLine4ChartLegend = false;
      var smallLine4ChartType = 'line'; // Chart 3

      var chart3 = {
        type: 'Bar',
        data: {
          labels: ['100', '200', '300', '400', '500', '600', '700', '800'],
          series: [[2.5, 3, 3, 0.9, 1.3, 1.8, 3.8, 1.5], [3.8, 1.8, 4.3, 2.3, 3.6, 2.8, 2.8, 2.8]]
        },
        options: {
          height: 303,
          seriesBarDistance: 12,
          axisX: {
            showGrid: false,
            labelInterpolationFnc: function labelInterpolationFnc(value) {
              return value[0];
            }
          }
        },
        events: {
          created: function created(data) {}
        }
      }; //report component
      //line chart

      var salesChartData = [{
        data: [10, 50, 0, 80, 10, 70]
      }, {
        data: [20, 40, 15, 70, 30, 27]
      }, {
        data: [5, 30, 20, 40, 50, 20]
      }];
      var salesChartLabels = ["1 min.", "10 min.", "20 min.", "30 min.", "40 min.", "50 min."];
      var salesChartOptions = {
        scaleShowGridLines: true,
        scaleGridLineWidth: 1,
        scaleShowHorizontalLines: true,
        scaleShowVerticalLines: true,
        bezierCurve: true,
        bezierCurveTension: 0.4,
        pointDot: true,
        pointDotRadius: 4,
        pointDotStrokeWidth: 1,
        pointHitDetectionRadius: 20,
        datasetStroke: true,
        datasetStrokeWidth: 2,
        datasetFill: true,
        responsive: true,
        maintainAspectRatio: false
      };
      var salesChartColors = [{
        backgroundColor: "transparent",
        borderColor: "#01cccd",
        pointColor: "#01cccd",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "#000"
      }, {
        backgroundColor: "transparent",
        borderColor: "#a5a5a5",
        pointColor: "#a5a5a5",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#000",
        pointHighlightStroke: "rgba(30, 166, 236, 1)"
      }, {
        backgroundColor: "transparent",
        borderColor: "#ff7f83",
        pointColor: "#ff7f83",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#000",
        pointHighlightStroke: "rgba(30, 166, 236, 1)"
      }];
      var salesChartLegend = false;
      var salesChartType = 'line';
      var areaChart1 = {
        chartType: 'AreaChart',
        dataTable: [['Year', 'Sales', 'Expenses'], ['2013', 1000, 400], ['2014', 1170, 460], ['2015', 660, 1120], ['2016', 1030, 540]],
        options: {
          title: 'Company Performance',
          hAxis: {
            title: 'Year',
            titleTextStyle: {
              color: '#333'
            }
          },
          vAxis: {
            minValue: 0
          },
          width: '100%',
          height: 340,
          colors: ["#ff7f83", "#a5a5a5"],
          backgroundColor: 'transparent'
        }
      };
      var columnChart1 = {
        chartType: 'ColumnChart',
        dataTable: [["Year", "Sales", "Expenses"], ["100", 2.5, 3.8], ["200", 3, 1.8], ["300", 3, 4.3], ["400", 0.9, 2.3], ["500", 1.3, 3.6], ["600", 1.8, 2.8], ["700", 3.8, 2.8], ["800", 1.5, 2.8]],
        options: {
          legend: {
            position: 'none'
          },
          bars: "vertical",
          vAxis: {
            format: "decimal"
          },
          height: 340,
          width: '100%',
          colors: ["#ff7f83", "#a5a5a5"],
          backgroundColor: 'transparent'
        }
      };
      var lineChart = {
        chartType: 'LineChart',
        dataTable: [['Month', 'Guardians of the Galaxy', 'The Avengers'], [10, 20, 60], [20, 40, 10], [30, 20, 40], [40, 50, 30], [50, 20, 80], [60, 60, 30], [70, 10, 20], [80, 40, 90], [90, 20, 0]],
        options: {
          colors: ["#ff8084", "#a5a5a5"],
          legend: {
            position: 'none'
          },
          height: 500,
          width: '100%',
          backgroundColor: 'transparent'
        }
      };
      var chart6 = {
        type: 'Line',
        data: {
          labels: [],
          series: [[3, 4, 3, 5, 4, 3, 5]]
        },
        options: {
          showScale: false,
          fullWidth: !0,
          showArea: !0,
          label: false,
          width: '600',
          height: '358',
          low: 0,
          offset: 0,
          axisX: {
            showLabel: false,
            showGrid: false
          },
          axisY: {
            showLabel: false,
            showGrid: false,
            low: 0,
            offset: -10
          }
        }
      };
      /***/
    },

    /***/
    "XsfW": function XsfW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersComponent", function () {
        return OrdersComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "lDzL");
      /* harmony import */


      var _shared_tables_order_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/tables/order-list */
      "ZNFz");

      var OrdersComponent = /*#__PURE__*/function () {
        function OrdersComponent() {
          _classCallCheck(this, OrdersComponent);

          this.order = [];
          this.temp = [];
          this.order = _shared_tables_order_list__WEBPACK_IMPORTED_MODULE_2__["orderDB"].list_order;
        }

        _createClass(OrdersComponent, [{
          key: "updateFilter",
          value: function updateFilter(event) {
            var val = event.target.value.toLowerCase(); // filter our data

            var temp = this.temp.filter(function (d) {
              return d.name.toLowerCase().indexOf(val) !== -1 || !val;
            }); // update the rows

            this.order = temp; // Whenever the filter changes, always go back to the first page

            this.table.offset = 0;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OrdersComponent;
      }();

      OrdersComponent.ɵfac = function OrdersComponent_Factory(t) {
        return new (t || OrdersComponent)();
      };

      OrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OrdersComponent,
        selectors: [["app-orders"]],
        viewQuery: function OrdersComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 18,
        vars: 6,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "custom-datatable"], ["type", "text", "placeholder", "Search...", 1, "filter-ngx", "form-control", 3, "keyup"], [1, "bootstrap", 3, "rows", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit"], ["prop", "order id"], ["name", "Product"], ["prop", "payment status"], ["prop", "paymeny method"], ["prop", "order status"], ["name", "Date"], ["name", "Total"]],
        template: function OrdersComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Manage Order");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function OrdersComponent_Template_input_keyup_9_listener($event) {
              return ctx.updateFilter($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ngx-datatable", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "ngx-datatable-column", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "ngx-datatable-column", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "ngx-datatable-column", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "ngx-datatable-column", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "ngx-datatable-column", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "ngx-datatable-column", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "ngx-datatable-column", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx.order)("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "auto")("limit", 5);
          }
        },
        directives: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DataTableColumnDirective"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlcnMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrdersComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-orders',
            templateUrl: './orders.component.html',
            styleUrls: ['./orders.component.scss']
          }]
        }], function () {
          return [];
        }, {
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], {
              "static": false
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "YXPf": function YXPf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportsModule", function () {
        return ReportsModule;
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


      var _reports_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./reports-routing.module */
      "TZ7e");
      /* harmony import */


      var _reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./reports.component */
      "2hHS");
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng2-smart-table */
      "RS3s");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng2-charts */
      "LPYB");
      /* harmony import */


      var ng2_google_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ng2-google-charts */
      "OPJD");
      /* harmony import */


      var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @swimlane/ngx-charts */
      "zQsl");
      /* harmony import */


      var ng_chartist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-chartist */
      "Cr32");

      var ReportsModule = function ReportsModule() {
        _classCallCheck(this, ReportsModule);
      };

      ReportsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ReportsModule
      });
      ReportsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ReportsModule_Factory(t) {
          return new (t || ReportsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"], ng2_google_charts__WEBPACK_IMPORTED_MODULE_6__["Ng2GoogleChartsModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__["NgxChartsModule"], ng_chartist__WEBPACK_IMPORTED_MODULE_8__["ChartistModule"], _reports_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReportsRoutingModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReportsModule, {
          declarations: [_reports_component__WEBPACK_IMPORTED_MODULE_3__["ReportsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"], ng2_google_charts__WEBPACK_IMPORTED_MODULE_6__["Ng2GoogleChartsModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__["NgxChartsModule"], ng_chartist__WEBPACK_IMPORTED_MODULE_8__["ChartistModule"], _reports_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReportsRoutingModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_reports_component__WEBPACK_IMPORTED_MODULE_3__["ReportsComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_5__["ChartsModule"], ng2_google_charts__WEBPACK_IMPORTED_MODULE_6__["Ng2GoogleChartsModule"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_7__["NgxChartsModule"], ng_chartist__WEBPACK_IMPORTED_MODULE_8__["ChartistModule"], _reports_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReportsRoutingModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "YXTU": function YXTU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../shared/service/auth.service */
      "Da3E");
      /* harmony import */


      var src_app_shared_service_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/service/http.service */
      "uiMJ");
      /* harmony import */


      var src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/service/data.service */
      "J8x5");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["tabSet"];

      function RegisterComponent_div_0_div_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r5 = ctx.index;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "checkbox-primary-2", i_r5, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", i_r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("for", "checkbox-primary-2", i_r5, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.servicesData[i_r5].title);
        }
      }

      function RegisterComponent_div_0_span_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "...");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Yangi Foydalanuvchi");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_div_0_Template_form_ngSubmit_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r6.register();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Ismi ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Familiyasi ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Sharifi ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " Parol ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " Qabul raqami ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, RegisterComponent_div_0_div_49_Template, 6, 4, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " Qo'shish");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](53, RegisterComponent_div_0_span_53_Template, 2, 0, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.registerForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.servicesFormArray.controls);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r0.registerForm.valid || ctx_r0.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.loading);
        }
      }

      function RegisterComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(fb, router, auth, httpService, dataService, formBuilder) {
          _classCallCheck(this, RegisterComponent);

          this.fb = fb;
          this.router = router;
          this.auth = auth;
          this.httpService = httpService;
          this.dataService = dataService;
          this.formBuilder = formBuilder;
          this.loading = true;
          this.servicesData = [];
          this.getMenu(0);
        }

        _createClass(RegisterComponent, [{
          key: "getServices",
          value: function getServices() {
            var items = [];
            this.dataService.menu.forEach(function (menu, idx) {
              menu.inner_menu.forEach(function (inner) {
                items.push({
                  title: inner.uz
                });
              });
            });
            return items;
          }
        }, {
          key: "addCheckboxes",
          value: function addCheckboxes() {
            var _this19 = this;

            this.servicesData.forEach(function () {
              return _this19.servicesFormArray.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false));
            });
          }
        }, {
          key: "servicesFormArray",
          get: function get() {
            return this.registerForm.controls.services;
          }
        }, {
          key: "getMenu",
          value: function getMenu(i) {
            var _this20 = this;

            this.httpService.getMenu().subscribe(function (res) {
              console.log(res);

              if (res.status === 200) {
                _this20.dataService.menu = res.menu;
                _this20.loading = false;

                _this20.createRegisterForm();

                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_this20.getServices()).subscribe(function (orders) {
                  _this20.servicesData = orders;

                  _this20.addCheckboxes();
                });
              } else {
                alert("Bazaka ulana olmadim yana bir bor urinib ko‘ring!");
                window.location.reload();
              }
            }, function (error) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this20, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                var _this21 = this;

                return regeneratorRuntime.wrap(function _callee9$(_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        if (i < 10) {
                          setTimeout(function () {
                            _this21.getMenu(i + 1);
                          }, 1000);
                        } else {
                          alert("Bazaka ulana olmadim yana bir bor urinib ko‘ring!");
                        }

                      case 1:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, _callee9);
              }));
            });
          }
        }, {
          key: "register",
          value: function register() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var _this22 = this;

              var services;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      this.loading = true;
                      services = [];
                      this.registerForm.value.services.forEach(function (sub, idx) {
                        if (sub) {
                          services.push(_this22.getServices()[idx]);
                        }
                      });
                      this.registerForm.value.services = services;
                      this.auth.signUp(this.registerForm.value).then(function (res) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this22, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
                          return regeneratorRuntime.wrap(function _callee10$(_context10) {
                            while (1) {
                              switch (_context10.prev = _context10.next) {
                                case 0:
                                  this.loading = false;
                                  this.registerForm.reset();
                                  alert("Foydalanuvchi muvaffaqiyatli qo'shildi!");

                                case 3:
                                case "end":
                                  return _context10.stop();
                              }
                            }
                          }, _callee10, this);
                        }));
                      }, function (err) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this22, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                          return regeneratorRuntime.wrap(function _callee11$(_context11) {
                            while (1) {
                              switch (_context11.prev = _context11.next) {
                                case 0:
                                  this.loading = false;
                                  alert(err.message);

                                case 2:
                                case "end":
                                  return _context11.stop();
                              }
                            }
                          }, _callee11, this);
                        }));
                      });

                    case 5:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "createRegisterForm",
          value: function createRegisterForm() {
            this.registerForm = this.fb.group({
              email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
              password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
              first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              officer_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              patronymic: [''],
              services: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([], minSelectedCheckboxes(1))
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit() {}
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]));
      };

      RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: RegisterComponent,
        selectors: [["app-register-pvo"]],
        viewQuery: function RegisterComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tabSet = _t.first);
          }
        },
        decls: 2,
        vars: 2,
        consts: [["class", "container-fluid", 4, "ngIf"], ["class", "lds-wrap", 4, "ngIf"], [1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card", "tab2-card"], [1, "card-header"], [1, "card-body", "tab2-card"], ["novalida", "", 1, "needs-validation", "user-add", 3, "formGroup", "ngSubmit"], [1, "form-group", "row"], ["for", "validationCustom1", 1, "col-xl-3", "col-md-4"], [1, "col-md-8"], ["formControlName", "first_name", "placeholder", "Ismi", "type", "text", "id", "validationCustom1", 1, "form-control"], ["for", "validationCustom2", 1, "col-xl-3", "col-md-4"], ["formControlName", "last_name", "placeholder", "Familiyasi", "type", "text", "id", "validationCustom2", 1, "form-control"], ["for", "validationCustom21", 1, "col-xl-3", "col-md-4"], ["formControlName", "patronymic", "placeholder", "Sharifi", "type", "text", "id", "validationCustom21", 1, "form-control"], ["for", "validationCustom3", 1, "col-xl-3", "col-md-4"], ["formControlName", "email", "placeholder", "email", "type", "email", "id", "validationCustom3", 1, "form-control"], ["for", "validationCustom4", 1, "col-xl-3", "col-md-4"], ["formControlName", "password", "placeholder", "parol", "type", "password", "id", "validationCustom4", 1, "form-control"], ["for", "validationCustom211", 1, "col-xl-3", "col-md-4"], ["formControlName", "officer_id", "placeholder", "Qabul raqami", "type", "text", "id", "validationCustom211", 1, "form-control"], ["class", "form-group row", "formArrayName", "services", 4, "ngFor", "ngForOf"], [1, "pull-left"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], ["formArrayName", "services", 1, "form-group", "row"], [1, "checkbox", "checkbox-primary"], ["type", "checkbox", 3, "id", "formControlName"], [3, "for"], [1, "lds-wrap"], [1, "lds-dual-ring"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, RegisterComponent_div_0_Template, 54, 4, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_div_1_Template, 2, 0, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"]],
        styles: [".card-right[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 100%;\n}\n\n.authentication-box[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  max-width: 525px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxPQUFBO0VBQ0EsZUFBQTtBQUNEOztBQUNBO0VBQ0MsZ0JBQUE7QUFFRCIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLXJpZ2h0e1xyXG5cdGZsZXg6IDE7XHJcblx0bWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcbi5hdXRoZW50aWNhdGlvbi1ib3ggLmNvbnRhaW5lcntcclxuXHRtYXgtd2lkdGg6IDUyNXB4O1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RegisterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-register-pvo',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _shared_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
          }, {
            type: src_app_shared_service_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"]
          }, {
            type: src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }];
        }, {
          tabSet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['tabSet', {
              "static": false
            }]
          }]
        });
      })();

      function minSelectedCheckboxes() {
        var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

        var validator = function validator(formArray) {
          var totalSelected = formArray.controls.map(function (control) {
            return control.value;
          }).reduce(function (prev, next) {
            return next ? prev + next : prev;
          }, 0);
          return totalSelected >= min ? null : {
            required: true
          };
        };

        return validator;
      }
      /***/

    },

    /***/
    "ZAI4": function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _components_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/dashboard/dashboard.module */
      "5+sL");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./shared/shared.module */
      "PCNd");
      /* harmony import */


      var _components_sales_sales_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/sales/sales.module */
      "sv8t");
      /* harmony import */


      var _components_pages_pages_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/pages/pages.module */
      "sFyk");
      /* harmony import */


      var _components_users_users_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/users/users.module */
      "E6va");
      /* harmony import */


      var _components_setting_setting_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/setting/setting.module */
      "wGPJ");
      /* harmony import */


      var _components_reports_reports_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/reports/reports.module */
      "YXPf");
      /* harmony import */


      var _components_auth_auth_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/auth/auth.module */
      "IbxU");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/fire/auth */
      "UbJi");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "I/3d");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/fire */
      "spgP");
      /* harmony import */


      var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ngx-simple-modal */
      "aWE5");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./../environments/environment.prod */
      "cxbk");
      /* harmony import */


      var firebase_app__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! firebase/app */
      "Jgta");
      /* harmony import */


      var firebase_storage__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! firebase/storage */
      "WI49");
      /* harmony import */


      var firebase_analytics__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! firebase/analytics */
      "AAub");
      /* harmony import */


      var firebase_auth__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! firebase/auth */
      "6nsN");
      /* harmony import */


      var firebase_database__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! firebase/database */
      "Zs65");
      /* harmony import */


      var firebase_firestore__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! firebase/firestore */
      "5x/H");
      /* harmony import */


      var ngx_socket_io__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ngx-socket-io */
      "7JkF"); // import { MatSliderModule } from '@angular/material/slider';


      ; // const config: SocketIoConfig = { url: 'http://213.230.99.94:55000', options: { transports : ['websocket'] } };

      var config = {
        url: 'wss://ferpi.tsnqb.uz/socket.io',
        options: {
          transports: ['websocket']
        }
      };

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);

        firebase_app__WEBPACK_IMPORTED_MODULE_20__["default"].initializeApp(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_19__["environment"].firebaseConfig);
        firebase_app__WEBPACK_IMPORTED_MODULE_20__["default"].database();
        firebase_app__WEBPACK_IMPORTED_MODULE_20__["default"].storage();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_13__["LocationStrategy"],
          useClass: _angular_common__WEBPACK_IMPORTED_MODULE_13__["HashLocationStrategy"]
        }],
        imports: [[_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({
          appId: 'serverApp'
        }), _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _components_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__["DashboardModule"], _components_setting_setting_module__WEBPACK_IMPORTED_MODULE_10__["SettingModule"], _components_reports_reports_module__WEBPACK_IMPORTED_MODULE_11__["ReportsModule"], _components_auth_auth_module__WEBPACK_IMPORTED_MODULE_12__["AuthModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _components_sales_sales_module__WEBPACK_IMPORTED_MODULE_7__["SalesModule"], _components_pages_pages_module__WEBPACK_IMPORTED_MODULE_8__["PagesModule"], _components_users_users_module__WEBPACK_IMPORTED_MODULE_9__["UsersModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_16__["AngularFireModule"].initializeApp(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_19__["environment"].firebaseConfig), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"], ngx_simple_modal__WEBPACK_IMPORTED_MODULE_17__["SimpleModalModule"].forRoot({
          container: "modal-container"
        }), _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_26__["SocketIoModule"].forRoot(config)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
          imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _components_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__["DashboardModule"], _components_setting_setting_module__WEBPACK_IMPORTED_MODULE_10__["SettingModule"], _components_reports_reports_module__WEBPACK_IMPORTED_MODULE_11__["ReportsModule"], _components_auth_auth_module__WEBPACK_IMPORTED_MODULE_12__["AuthModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _components_sales_sales_module__WEBPACK_IMPORTED_MODULE_7__["SalesModule"], _components_pages_pages_module__WEBPACK_IMPORTED_MODULE_8__["PagesModule"], _components_users_users_module__WEBPACK_IMPORTED_MODULE_9__["UsersModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_16__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"], ngx_simple_modal__WEBPACK_IMPORTED_MODULE_17__["SimpleModalModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_26__["SocketIoModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({
              appId: 'serverApp'
            }), _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _components_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_5__["DashboardModule"], _components_setting_setting_module__WEBPACK_IMPORTED_MODULE_10__["SettingModule"], _components_reports_reports_module__WEBPACK_IMPORTED_MODULE_11__["ReportsModule"], _components_auth_auth_module__WEBPACK_IMPORTED_MODULE_12__["AuthModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _components_sales_sales_module__WEBPACK_IMPORTED_MODULE_7__["SalesModule"], _components_pages_pages_module__WEBPACK_IMPORTED_MODULE_8__["PagesModule"], _components_users_users_module__WEBPACK_IMPORTED_MODULE_9__["UsersModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_16__["AngularFireModule"].initializeApp(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_19__["environment"].firebaseConfig), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"], ngx_simple_modal__WEBPACK_IMPORTED_MODULE_17__["SimpleModalModule"].forRoot({
              container: "modal-container"
            }), _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_26__["SocketIoModule"].forRoot(config)],
            providers: [{
              provide: _angular_common__WEBPACK_IMPORTED_MODULE_13__["LocationStrategy"],
              useClass: _angular_common__WEBPACK_IMPORTED_MODULE_13__["HashLocationStrategy"]
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "ZNFz": function ZNFz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "orderDB", function () {
        return orderDB;
      });

      var orderDB = function orderDB() {
        _classCallCheck(this, orderDB);
      };

      orderDB.list_order = [{
        "order id": "#51240",
        "product": "<img src='assets/images/electronics/product/25.jpg' class='img-30 mr-2'><img src='assets/images/electronics/product/13.jpg' class='img-30 mr-2'><img src='assets/images/electronics/product/16.jpg' class='img-30'>",
        "payment status": "<span class='badge badge-secondary'>Cash On Delivery</span>",
        "paymeny method": "Paypal",
        "order status": "<span class='badge badge-success'>Delivered</span>",
        "date": "Dec 10,18",
        "total": "$54671"
      }, {
        "order id": "#51241",
        "product": "<img src='assets/images/electronics/product/12.jpg' class='img-30 mr-2'><img src='assets/images/electronics/product/3.jpg' class='img-30'>",
        "payment status": "<span class='badge badge-success'>Paid</span>",
        "paymeny method": "Master Card",
        "order status": "<span class='badge badge-primary'>Shipped</span>",
        "date": "Feb 15,18",
        "total": "$2136"
      }, {
        "order id": "#51242",
        "product": "<img src='assets/images/electronics/product/14.jpg' class='img-30'>",
        "payment status": "<span class='badge badge-warning'>Awaiting Authentication</span>",
        "paymeny method": "Debit Card",
        "order status": "<span class='badge badge-warning'>Processing</span>",
        "date": "Mar 27,18",
        "total": "$8791"
      }, {
        "order id": "#51243",
        "product": "<img src='assets/images/electronics/product/6.jpg' class='img-30 mr-2'><img src='assets/images/furniture/8.jpg' class='img-30'>",
        "payment status": "<span class='badge badge-danger'>Payment Failed</span>",
        "paymeny method": "Debit Card",
        "order status": "<span class='badge badge-danger'>Cancelled</span>",
        "date": "Sep 1,18",
        "total": "$139"
      }, {
        "order id": "#51244",
        "product": "<img src='assets/images/jewellery/pro/18.jpg' class='img-30 mr-2'><img src='assets/images/fashion/pro/06.jpg' class='img-30'>",
        "payment status": "<span class='badge badge-success'>Paid</span>",
        "paymeny method": "Paypal",
        "order status": "<span class='badge badge-primary'>Shipped</span>",
        "date": "Sep 1,18",
        "total": "$139"
      }, {
        "order id": "#51245",
        "product": "<img src='assets/images/electronics/product/19.jpg' class='img-30 mr-2'><img src='assets/images/electronics/product/20.jpg' class='img-30 mr-2'><img src='assets/images/electronics/product/23.jpg' class='img-30'>",
        "payment status": "<span class='badge badge-success'>Paid</span>",
        "paymeny method": "Visa",
        "order status": "<span class='badge badge-success'>Delivered</span>",
        "date": "Jan 14,18",
        "total": "$6791"
      }, {
        "order id": "#51246",
        "product": "<img src='assets/images/electronics/product/24.jpg' class='img-30'>",
        "payment status": "<span class='badge badge-warning'>Awaiting Authentication</span>",
        "paymeny method": "Credit Card",
        "order status": "<span class='badge badge-warning'>Processing</span>",
        "date": "Apr 22,18",
        "total": "$976"
      }, {
        "order id": "#51247",
        "product": "<img src='assets/images/electronics/product/21.jpg' class='img-30 mr-2'><img src='assets/images/electronics/product/8.jpg' class='img-30'>",
        "payment status": "<span class='badge badge-danger'>Payment Failed</span>",
        "paymeny method": "Master Card",
        "order status": "<span class='badge badge-danger'>Cancelled</span>",
        "date": "Mar 26,18",
        "total": "$3212"
      }, {
        "order id": "#51248",
        "product": "<img src='assets/images/electronics/product/18.jpg' class='img-30 mr-2'><img src='assets/images/electronics/product/8.jpg' class='img-30'>",
        "payment status": "<span class='badge badge-success'>Paid</span>",
        "paymeny method": "Paypal",
        "order status": "<span class='badge badge-primary'>Shipped</span>",
        "date": "Feb 29,18",
        "total": "$6791"
      }, {
        "order id": "#51249",
        "product": "<img src='assets/images/electronics/product/17.jpg' class='img-30'>",
        "payment status": "<span class='badge badge-success'>Paid</span>",
        "paymeny method": "Master Card",
        "order status": "<span class='badge badge-secondary'>Processing</span>",
        "date": "Sep 2,18",
        "total": "$9765"
      }, {
        "order id": "#51250",
        "product": "<img src='assets/images/electronics/product/7.jpg' class='img-30 mr-2'><img src='assets/images/electronics/product/4.jpg' class='img-30'>",
        "payment status": "<span class='badge badge-success'>Paid</span>",
        "paymeny method": "Credit Card",
        "order status": "<span class='badge badge-primary'>Shipped</span>",
        "date": "Dec 10,18",
        "total": "$9705"
      }, {
        "order id": "#51251",
        "product": "<img src='assets/images/electronics/product/22.jpg' class='img-30 mr-2'><img src='assets/images/electronics/product/20.jpg' class='img-30'>",
        "payment status": "<span class='badge badge-secondary'>Cash On Delivery</span>",
        "paymeny method": "Paypal",
        "order status": "<span class='badge badge-primary'>Shipped</span>",
        "date": "Feb 15,18",
        "total": "$1500"
      }, {
        "order id": "#51252",
        "product": "<img src='assets/images/electronics/product/3.jpg' class='img-30'>",
        "payment status": "<span class='badge badge-danger'>Payment Failed</span>",
        "paymeny method": "Credit Card",
        "order status": "<span class='badge badge-danger'>Cancelled</span>",
        "date": "Mar 27,18",
        "total": "$18.97"
      }, {
        "order id": "#51253",
        "product": "<img src='assets/images/flower/blog/insta/8.jpg' class='img-30'>",
        "payment status": "<span class='badge badge-success'>Paid</span>",
        "paymeny method": "Master Card",
        "order status": "<span class='badge badge-success'>Delivered</span>",
        "date": "Dec 17,18",
        "total": "$19.47"
      }, {
        "order id": "#51254",
        "product": "<img src='assets/images/electronics/product/11.jpg' class='img-30 mr-2'><img src='assets/images/electronics/product/2.jpg' class='img-30 mr-2'><img src='assets/images/electronics/product/9.jpg' class='img-30'>",
        "payment status": "<span class='badge badge-success'>Paid</span>",
        "paymeny method": "Master Card",
        "order status": "<span class='badge badge-primary'>Shipped</span>",
        "date": "Nov 29,18",
        "total": "$7.48"
      }];
      /***/
    },

    /***/
    "aF9I": function aF9I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 9,
        vars: 0,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-md-6", "footer-copyright"], [1, "mb-0"], [1, "col-md-6"], [1, "pull-right", "mb-0"], [1, "fa", "fa-heart"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Copyright 2021 \xA9 All rights reserved.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Hand crafted & made with");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "aZ8m": function aZ8m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
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


      var _service_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../service/nav.service */
      "9HF/");
      /* harmony import */


      var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../service/auth.service */
      "Da3E");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../feather-icons/feather-icons.component */
      "pqks");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _directives_fullscreen_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../directives/fullscreen.directive */
      "jArk");

      function HeaderComponent_li_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_li_27_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.backUpDb(0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-feather-icons", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " zaxira nusxalari ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "settings");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "open": a0
        };
      };

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent(navServices, authService) {
          var _this23 = this;

          _classCallCheck(this, HeaderComponent);

          this.navServices = navServices;
          this.authService = authService;
          this.right_sidebar = false;
          this.open = false;
          this.openNav = false;
          this.otm_name = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].otm_name;
          this.rightSidebarEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.authService.user.subscribe(function (user) {
            _this23.user = user;
          });
        }

        _createClass(HeaderComponent, [{
          key: "collapseSidebar",
          value: function collapseSidebar() {
            this.open = !this.open;
            this.navServices.collapseSidebar = !this.navServices.collapseSidebar;
          }
        }, {
          key: "right_side_bar",
          value: function right_side_bar() {
            this.right_sidebar = !this.right_sidebar;
            this.rightSidebarEvent.emit(this.right_sidebar);
          }
        }, {
          key: "openMobileNav",
          value: function openMobileNav() {
            this.openNav = !this.openNav;
          }
        }, {
          key: "signOut",
          value: function signOut() {
            this.authService.signOut();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "backUpDb",
          value: function backUpDb(i) {
            var baza = ['checkfield', 'fieldData', 'fieldsInform', 'fieldsRejected', 'lastId', 'pvoIns']; // if (i<baza.length) {
            //   this.firebabeService.getDoc(baza[i]).then(snapshot=>{
            //     if (snapshot.exists()) {
            //       console.log('snapshot ', snapshot.val());
            //       const blob = new Blob([JSON.stringify(snapshot.val())], {type: "text/plain;charset=utf-8"});
            //       saveAs(blob, `${baza[i]}.txt`);
            //       setTimeout(()=>{
            //         this.backUpDb(i+1);
            //       }, 2000)
            //     }
            //   }).catch(error=>{
            //     alert('#536 xato ketti ' + error);
            //   })
            // }
          }
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_nav_service__WEBPACK_IMPORTED_MODULE_2__["NavService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        outputs: {
          rightSidebarEvent: "rightSidebarEvent"
        },
        decls: 34,
        vars: 11,
        consts: [[1, "page-main-header"], [1, "main-header-right", "row"], [1, "main-header-left", "d-lg-none"], [1, "logo-wrapper", "logo-wrapper-mbs"], [3, "routerLink"], [1, "mobile-sidebar"], [1, "media-body", "text-right", "switch-sm"], [1, "switch"], ["id", "sidebar-toggle", 3, "icon", "click"], [1, "color-primary", "header-title-rt-2"], [1, "nav-right", "col"], [1, "nav-menus", 3, "ngClass"], ["href", "javascript:void(0)", "toggleFullscreen", "", 1, "text-dark"], [3, "icon"], [1, "onhover-dropdown"], [1, "media", "align-items-center"], ["src", "assets/images/dashboard/man.png", "alt", "header-user", 1, "align-self-center", "pull-right", "img-50", "rounded-circle"], [1, "dotted-animation"], [1, "animate-circle"], [1, "main-circle"], [1, "profile-dropdown", "onhover-show-div", "p-20", "profile-dropdown-hover"], [4, "ngIf"], [3, "click"], [1, "d-lg-none", "mobile-toggle", "pull-right", 3, "click"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "RTTM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-feather-icons", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_app_feather_icons_click_11_listener() {
              return ctx.collapseSidebar();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "RTTM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-feather-icons", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, HeaderComponent_li_27_Template, 4, 1, "li", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_29_listener() {
              return ctx.signOut();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "app-feather-icons", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Chiqish ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_32_listener() {
              return ctx.openMobileNav();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-feather-icons", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("open", ctx.open);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "align-left");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.openNav));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "maximize-2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user && ctx.user.role === "ADMIN");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "log-out");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "more-horizontal");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_5__["FeatherIconsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _directives_fullscreen_directive__WEBPACK_IMPORTED_MODULE_7__["ToggleFullscreenDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss']
          }]
        }], function () {
          return [{
            type: _service_nav_service__WEBPACK_IMPORTED_MODULE_2__["NavService"]
          }, {
            type: _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
          }];
        }, {
          rightSidebarEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "cxbk": function cxbk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); //ferpi///////////
      // export const environment = {
      //   production: true,
      //   url: 'https://navbat.ferpi.uz',
      //   otm: 'ferpi',
      //   otm_name:
      //     "Farg'ona Politexnika Instituti ta'lim sifatini nazorat qilish bo'limi",
      //   firebaseConfig: {
      //     // pvorey
      //     apiKey: 'AIzaSyBmzKSP6a7bHTJWRZTqRgF3u8ucSJB2_fg',
      //     authDomain: 'pvorey.firebaseapp.com',
      //     databaseURL:
      //       'https://pvorey-default-rtdb.asia-southeast1.firebasedatabase.app',
      //     projectId: 'pvorey',
      //     storageBucket: 'pvorey.appspot.com',
      //     messagingSenderId: '975847085157',
      //     appId: '1:975847085157:web:5008868ba373c480ffa28c',
      //     measurementId: 'G-GRE7FMXH99',
      //   },
      //   http: {
      //     setNewPvo: {
      //       path: 'http://tsnqb.uz/db_ferpi/2022/set_new_pvo.php',
      //     },
      //     removePvo: {
      //       path: 'http://tsnqb.uz/db_ferpi/2022/remove_pvo.php',
      //     },
      //     editUserAccaunt: {
      //       path: 'http://tsnqb.uz/db_ferpi/2022/edit_user_account.php',
      //     },
      //     get_menu: {
      //       path: 'https://navbat.ferpi.uz/db/get_data.php',
      //     },
      //     add_queue: {
      //       path: 'https://navbat.ferpi.uz/db/add_queue.php',
      //     },
      //     update_menu: {
      //       path: 'https://navbat.ferpi.uz/db/update_menu.php',
      //     },
      //     officer_next_item: {
      //       path: 'https://navbat.ferpi.uz/db/officer_next_item.php',
      //     },
      //     getStatistics: {
      //       path: 'https://navbat.ferpi.uz/db/get_statistics.php',
      //     },
      //   },
      // };
      //tsuos///////////


      var environment = {
        production: true,
        otm: 'tsuos',
        otm_name: 'Toshkent Davlat sharqshunoslik universiteti',
        url: 'https://navbat.tsuos.uz',
        firebaseConfig: {
          // pvorey
          apiKey: 'AIzaSyBmzKSP6a7bHTJWRZTqRgF3u8ucSJB2_fg',
          authDomain: 'pvorey.firebaseapp.com',
          databaseURL: 'https://pvorey-default-rtdb.asia-southeast1.firebasedatabase.app',
          projectId: 'pvorey',
          storageBucket: 'pvorey.appspot.com',
          messagingSenderId: '975847085157',
          appId: '1:975847085157:web:5008868ba373c480ffa28c',
          measurementId: 'G-GRE7FMXH99'
        },
        http: {
          setNewPvo: {
            path: 'http://tsnqb.uz/db_ferpi/2022/set_new_pvo.php'
          },
          removePvo: {
            path: 'http://tsnqb.uz/db_ferpi/2022/remove_pvo.php'
          },
          editUserAccaunt: {
            path: 'http://tsnqb.uz/db_ferpi/2022/edit_user_account.php'
          },
          get_menu: {
            path: 'https://navbat.tsuos.uz/db/get_data.php'
          },
          add_queue: {
            path: 'https://navbat.tsuos.uz/db/add_queue.php'
          },
          update_menu: {
            path: 'https://navbat.tsuos.uz/db/update_menu.php'
          },
          officer_next_item: {
            path: 'https://navbat.tsuos.uz/db/officer_next_item.php'
          },
          getStatistics: {
            path: 'https://navbat.tsuos.uz/db/get_statistics.php'
          }
        }
      };
      /***/
    },

    /***/
    "elBU": function elBU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListPageComponent", function () {
        return ListPageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_shared_tables_list_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/tables/list-pages */
      "HqJu");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "lDzL");

      var ListPageComponent = /*#__PURE__*/function () {
        function ListPageComponent() {
          _classCallCheck(this, ListPageComponent);

          this.list_pages = [];
          this.selected = [];
          this.list_pages = src_app_shared_tables_list_pages__WEBPACK_IMPORTED_MODULE_1__["listPagesDB"].list_pages;
        }

        _createClass(ListPageComponent, [{
          key: "onSelect",
          value: function onSelect(_ref) {
            var _this$selected;

            var selected = _ref.selected;
            this.selected.splice(0, this.selected.length);

            (_this$selected = this.selected).push.apply(_this$selected, _toConsumableArray(selected));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ListPageComponent;
      }();

      ListPageComponent.ɵfac = function ListPageComponent_Factory(t) {
        return new (t || ListPageComponent)();
      };

      ListPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ListPageComponent,
        selectors: [["app-list-page"]],
        decls: 19,
        vars: 16,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "custom-datatable"], [1, "btn", "btn-primary", "mr-1", "mb-3", 2, "float", "right"], [1, "clearfix"], [1, "bootstrap", 3, "rows", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit", "selected", "selectionType", "selectAllRowsOnPage", "select"], [3, "width", "sortable", "canAutoResize", "draggable", "resizeable", "headerCheckboxable", "checkboxable"], ["type", "button", 1, "btn", "btn-primery"], ["name", "Name"], ["name", "Status"], ["prop", "created on"]],
        template: function ListPageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Page Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ngx-datatable", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("select", function ListPageComponent_Template_ngx_datatable_select_12_listener($event) {
              return ctx.onSelect($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ngx-datatable-column", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "ngx-datatable-column", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "ngx-datatable-column", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "ngx-datatable-column", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx.list_pages)("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "auto")("limit", 5)("selected", ctx.selected)("selectionType", "checkbox")("selectAllRowsOnPage", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 30)("sortable", false)("canAutoResize", false)("draggable", false)("resizeable", false)("headerCheckboxable", true)("checkboxable", true);
          }
        },
        directives: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_2__["DataTableColumnDirective"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListPageComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-list-page',
            templateUrl: './list-page.component.html',
            styleUrls: ['./list-page.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "foZk": function foZk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TransactionsComponent", function () {
        return TransactionsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_shared_tables_transactions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/tables/transactions */
      "DzK7");
      /* harmony import */


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng2-smart-table */
      "RS3s");

      var TransactionsComponent = /*#__PURE__*/function () {
        function TransactionsComponent() {
          _classCallCheck(this, TransactionsComponent);

          this.transactions = [];
          this.settings = {
            actions: false,
            hideSubHeader: true,
            columns: {
              order_id: {
                title: 'Order Id',
                filter: false
              },
              transaction_id: {
                title: 'Transaction Id',
                filter: false
              },
              date: {
                title: 'Date',
                filter: false
              },
              pay_method: {
                title: 'Payment Method',
                filter: false,
                type: 'html'
              },
              delivery_status: {
                title: 'Delivery Status',
                filter: false
              },
              amount: {
                title: 'Amount',
                filter: false
              }
            }
          };
          this.transactions = src_app_shared_tables_transactions__WEBPACK_IMPORTED_MODULE_1__["transactionsDB"].data;
        }

        _createClass(TransactionsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TransactionsComponent;
      }();

      TransactionsComponent.ɵfac = function TransactionsComponent_Factory(t) {
        return new (t || TransactionsComponent)();
      };

      TransactionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TransactionsComponent,
        selectors: [["app-transactions"]],
        decls: 11,
        vars: 2,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-body"], ["id", "batchDelete", 1, "category-table", "custom-datatable", "transcation-datatable"], [1, "table-responsive"], [3, "settings", "source"]],
        template: function TransactionsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Transaction Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ng2-smart-table", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("settings", ctx.settings)("source", ctx.transactions);
          }
        },
        directives: [ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["Ng2SmartTableComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFuc2FjdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-transactions',
            templateUrl: './transactions.component.html',
            styleUrls: ['./transactions.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "fqV1": function fqV1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadingComponent", function () {
        return LoadingComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var LoadingComponent = /*#__PURE__*/function () {
        function LoadingComponent() {
          _classCallCheck(this, LoadingComponent);
        }

        _createClass(LoadingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LoadingComponent;
      }();

      LoadingComponent.ɵfac = function LoadingComponent_Factory(t) {
        return new (t || LoadingComponent)();
      };

      LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoadingComponent,
        selectors: [["app-loading"]],
        decls: 4,
        vars: 0,
        consts: [[1, "loading_wrap"], [1, "loading_wrap_inner"], [1, "loader"]],
        template: function LoadingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".loader[_ngcontent-%COMP%] {\n  border: 10px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 10px solid #007bff;\n  width: 80px;\n  height: 80px;\n  -webkit-animation: spin 2s linear infinite;\n  \n  animation: spin 2s linear infinite;\n}\n\n.loading_wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  z-index: 1000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.7);\n  padding: 0 20px;\n}\n\n.loading_wrap_inner[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px;\n  max-width: 120px;\n  background: white;\n  border-radius: 25px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbG9hZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFBNEMsV0FBQTtFQUM1QyxrQ0FBQTtBQUVGOztBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUFHSjs7QUFGSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFJUiIsImZpbGUiOiJsb2FkaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRlciB7XHJcbiAgYm9yZGVyOiAxMHB4IHNvbGlkICNmM2YzZjM7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgIzAwN2JmZjtcclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlOyAvKiBTYWZhcmkgKi9cclxuICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcbi5sb2FkaW5nX3dyYXB7XHJcbiAgICB3aWR0aDoxMDAlOyBcclxuICAgIGhlaWdodDoxMDAlOyBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICB0b3A6MDsgXHJcbiAgICB6LWluZGV4OiAxMDAwOyBcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNyk7IFxyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgJl9pbm5lcntcclxuICAgICAgICB3aWR0aDogMTAwJTsgXHJcbiAgICAgICAgcGFkZGluZzogMjBweDsgXHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMjBweDsgXHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDsgXHJcbiAgICAgICAgZGlzcGxheTogZmxleDsgXHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-loading',
            templateUrl: './loading.component.html',
            styleUrls: ['./loading.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "fwv6": function fwv6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "reportDB", function () {
        return reportDB;
      });

      var reportDB = function reportDB() {
        _classCallCheck(this, reportDB);
      };

      reportDB.report = [{
        name: "Gray Brody",
        id: "14783112",
        date: "Nov 20, 2018",
        total: "$745"
      }, {
        name: "Perez Alonzo",
        id: "87541221",
        date: "Dec 25, 2018",
        total: "$8136"
      }, {
        name: "woters maxine",
        id: "213514462",
        date: "Feb 04, 2019",
        total: "$564"
      }, {
        name: "Rowan torres",
        id: "7512785568",
        date: "Jan 07, 2019",
        total: "$2364"
      }, {
        name: "Lane Skylar",
        id: "7614585124",
        date: "Apr 15, 2019",
        total: "$671"
      }, {
        name: "alexander",
        id: "574225447",
        date: "Mar 21, 2019",
        total: "$8914"
      }, {
        name: "christian",
        id: "235896144",
        date: "Mar 28, 2019",
        total: "$7952"
      }, {
        name: "stephanie",
        id: "5781425474",
        date: "Feb 30, 2019",
        total: "$1236"
      }, {
        name: "victoria",
        id: "636512214",
        date: "Mar 12, 2019",
        total: "$8914"
      }, {
        name: "campbell",
        id: "461178242",
        date: "Apr 19, 2019",
        total: "$94174"
      }, {
        name: "austin",
        id: "548212314",
        date: "Jan 26, 2019",
        total: "$8914"
      }];
      /***/
    },

    /***/
    "g+1y": function g1y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MultiSelectDropdownComponent", function () {
        return MultiSelectDropdownComponent;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function MultiSelectDropdownComponent_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " -- tanlang -- ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function MultiSelectDropdownComponent_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.checkedList.join(", "));
        }
      }

      function MultiSelectDropdownComponent_div_6_label_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MultiSelectDropdownComponent_div_6_label_1_Template_input_ngModelChange_1_listener($event) {
            var a_r4 = ctx.$implicit;
            return a_r4.checked = $event;
          })("change", function MultiSelectDropdownComponent_div_6_label_1_Template_input_change_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var a_r4 = ctx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r6.getSelectedValue(a_r4.checked, a_r4.name);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var a_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", a_r4.checked);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](a_r4.name);
        }
      }

      function MultiSelectDropdownComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultiSelectDropdownComponent_div_6_label_1_Template, 4, 2, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.list);
        }
      }

      var MultiSelectDropdownComponent = /*#__PURE__*/function () {
        function MultiSelectDropdownComponent() {
          _classCallCheck(this, MultiSelectDropdownComponent);

          this.shareCheckedList = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.checkedList = [];
        }

        _createClass(MultiSelectDropdownComponent, [{
          key: "getSelectedValue",
          value: function getSelectedValue(status, value) {
            if (status) {
              this.checkedList.push(value);
            } else {
              var index = this.checkedList.indexOf(value);
              this.checkedList.splice(index, 1);
            }

            this.currentSelected = {
              checked: status,
              name: value
            }; //share checked list

            this.shareCheckedlist(); //share individual selected item
            // this.shareIndividualStatus();
          }
        }, {
          key: "shareCheckedlist",
          value: function shareCheckedlist() {
            this.shareCheckedList.emit(this.checkedList);
          }
        }]);

        return MultiSelectDropdownComponent;
      }();

      MultiSelectDropdownComponent.ɵfac = function MultiSelectDropdownComponent_Factory(t) {
        return new (t || MultiSelectDropdownComponent)();
      };

      MultiSelectDropdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MultiSelectDropdownComponent,
        selectors: [["app-multi-select-dropdown"]],
        inputs: {
          list: "list"
        },
        outputs: {
          shareCheckedList: "shareCheckedList"
        },
        decls: 7,
        vars: 3,
        consts: [[3, "mouseleave"], [1, "drop-toggle", "flat", 3, "click"], [4, "ngIf"], [1, "fa", "fa-angle-down"], ["class", "drop-show", 4, "ngIf"], [1, "drop-show"], [4, "ngFor", "ngForOf"], ["type", "checkbox", 3, "ngModel", "ngModelChange", "change"]],
        template: function MultiSelectDropdownComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function MultiSelectDropdownComponent_Template_div_mouseleave_1_listener() {
              return ctx.showDropDown = false;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelectDropdownComponent_Template_button_click_2_listener() {
              return ctx.showDropDown = !ctx.showDropDown;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MultiSelectDropdownComponent_span_3_Template, 2, 0, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MultiSelectDropdownComponent_span_4_Template, 2, 1, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MultiSelectDropdownComponent_div_6_Template, 2, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkedList.length <= 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.checkedList.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDropDown);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
        styles: [".drop-toggle[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border: none;\n  padding: 6px 3px 6px 15px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n  border: 1px solid #ccc;\n  width: 100%;\n  text-align: left;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n}\n.drop-toggle[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  float: right;\n  font-weight: 900;\n  margin-top: 5px;\n}\n.drop-show[_ngcontent-%COMP%] {\n  padding: 6px 6px 0px 13px;\n  background-color: #FFF;\n  border: 1px solid #BABABA;\n  position: absolute;\n  left: 15px;\n  right: 15px;\n  z-index: 100;\n  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);\n  margin-left: 1px;\n}\n.drop-show[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 15px;\n  cursor: pointer;\n  margin-bottom: 2.5px;\n}\n.drop-show[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  vertical-align: top;\n  margin-right: 5px;\n}\n.drop-show[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbXVsdGktc2VsZWN0LWRyb3Bkb3duLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUFBO0FBR0E7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFFQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDSjtBQUNBO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFHQSwwQ0FBQTtFQUNBLGdCQUFBO0FBRUo7QUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFHSjtBQURBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQUlKO0FBREE7RUFDSSxxQkFBQTtBQUlKIiwiZmlsZSI6Im11bHRpLXNlbGVjdC1kcm9wZG93bi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKipcclxuICAgIGNzcyBmb3IgbXVsdGkgc2VsZWN0IGRyb3AgZG93blxyXG4qKi9cclxuLmRyb3AtdG9nZ2xle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDZweCAzcHggNnB4IDE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjdXJzb3I6IGhhbmQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcblxyXG59XHJcbi5kcm9wLXRvZ2dsZSBpe1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5kcm9wLXNob3cge1xyXG4gICAgcGFkZGluZzogNnB4IDZweCAwcHggMTNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQkFCQUJBO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIHJpZ2h0OiAxNXB4O1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDZweCAxMHB4IHJnYmEoMCwwLDAsLjE1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMCA2cHggMTBweCByZ2JhKDAsMCwwLC4xNSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDZweCAxMHB4IHJnYmEoMCwwLDAsLjE1KTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxcHg7XHJcbn1cclxuLmRyb3Atc2hvdyBsYWJlbHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6MTVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDIuNXB4O1xyXG59XHJcbi5kcm9wLXNob3cgbGFiZWwgaW5wdXR7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcblxyXG59XHJcbi5kcm9wLXNob3cgbGFiZWwgc3BhbntcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultiSelectDropdownComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-multi-select-dropdown',
            templateUrl: './multi-select-dropdown.component.html',
            styleUrls: ['./multi-select-dropdown.component.scss']
          }]
        }], function () {
          return [];
        }, {
          list: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          shareCheckedList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "j1Tj": function j1Tj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "contentOfficer", function () {
        return contentOfficer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "contentAdmin", function () {
        return contentAdmin;
      });

      var contentOfficer = [{
        path: 'queue-officer',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | components-queue-officer-queue-officer-module */
          [__webpack_require__.e("common"), __webpack_require__.e("components-queue-officer-queue-officer-module")]).then(__webpack_require__.bind(null,
          /*! ../../components/queue-officer/queue-officer.module */
          "BQJQ")).then(function (m) {
            return m.QueueOfficerModule;
          });
        },
        data: {
          breadcrumb: "Menyu"
        }
      }];
      var contentAdmin = [{
        path: 'users',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ../../components/users/users.module */
          "E6va")).then(function (m) {
            return m.UsersModule;
          });
        },
        data: {
          breadcrumb: "Foydalanuvchilar"
        }
      }, {
        path: 'queue',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | components-queue-queue-module */
          "components-queue-queue-module").then(__webpack_require__.bind(null,
          /*! ../../components/queue/queue.module */
          "7qBR")).then(function (m) {
            return m.QueueModule;
          });
        },
        data: {
          breadcrumb: "Menyu"
        }
      }, {
        path: 'queue-sub',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | components-queue-sub-queue-sub-module */
          "components-queue-sub-queue-sub-module").then(__webpack_require__.bind(null,
          /*! ../../components/queue-sub/queue-sub.module */
          "uXf1")).then(function (m) {
            return m.QueueSubModule;
          });
        },
        data: {
          breadcrumb: "Menyu"
        }
      }];
      /***/
    },

    /***/
    "jArk": function jArk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToggleFullscreenDirective", function () {
        return ToggleFullscreenDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var screenfull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! screenfull */
      "k7+O");
      /* harmony import */


      var screenfull__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_1__);

      var ToggleFullscreenDirective = /*#__PURE__*/function () {
        function ToggleFullscreenDirective() {
          _classCallCheck(this, ToggleFullscreenDirective);
        }

        _createClass(ToggleFullscreenDirective, [{
          key: "onClick",
          value: function onClick() {
            if (screenfull__WEBPACK_IMPORTED_MODULE_1__["isEnabled"]) {
              screenfull__WEBPACK_IMPORTED_MODULE_1__["toggle"]();
            }
          }
        }]);

        return ToggleFullscreenDirective;
      }();

      ToggleFullscreenDirective.ɵfac = function ToggleFullscreenDirective_Factory(t) {
        return new (t || ToggleFullscreenDirective)();
      };

      ToggleFullscreenDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: ToggleFullscreenDirective,
        selectors: [["", "toggleFullscreen", ""]],
        hostBindings: function ToggleFullscreenDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToggleFullscreenDirective_click_HostBindingHandler() {
              return ctx.onClick();
            });
          }
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToggleFullscreenDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[toggleFullscreen]'
          }]
        }], null, {
          onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
          }]
        });
      })();
      /***/

    },

    /***/
    "nsWP": function nsWP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
        return AlertComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-simple-modal */
      "aWE5");

      var AlertComponent = /*#__PURE__*/function (_ngx_simple_modal__WE) {
        _inherits(AlertComponent, _ngx_simple_modal__WE);

        var _super2 = _createSuper(AlertComponent);

        function AlertComponent() {
          _classCallCheck(this, AlertComponent);

          return _super2.call(this);
        }

        return AlertComponent;
      }(ngx_simple_modal__WEBPACK_IMPORTED_MODULE_1__["SimpleModalComponent"]);

      AlertComponent.ɵfac = function AlertComponent_Factory(t) {
        return new (t || AlertComponent)();
      };

      AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AlertComponent,
        selectors: [["alert"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 10,
        vars: 2,
        consts: [[1, "modal-content"], [1, "modal-header"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]],
        template: function AlertComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_Template_button_click_8_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "OK");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title || "Alert!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message || "TADAA-AM!");
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'alert',
            template: "\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4>{{title || 'Alert!'}}</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>{{message || 'TADAA-AM!'}}</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"close()\">OK</button>\n      </div>\n    </div>\n  "
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "pqks": function pqks(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeatherIconsComponent", function () {
        return FeatherIconsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! feather-icons */
      "d8Z/");
      /* harmony import */


      var feather_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(feather_icons__WEBPACK_IMPORTED_MODULE_1__);

      var FeatherIconsComponent = /*#__PURE__*/function () {
        function FeatherIconsComponent() {
          _classCallCheck(this, FeatherIconsComponent);
        }

        _createClass(FeatherIconsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            setTimeout(function () {
              feather_icons__WEBPACK_IMPORTED_MODULE_1__["replace"]();
            });
          }
        }]);

        return FeatherIconsComponent;
      }();

      FeatherIconsComponent.ɵfac = function FeatherIconsComponent_Factory(t) {
        return new (t || FeatherIconsComponent)();
      };

      FeatherIconsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FeatherIconsComponent,
        selectors: [["app-feather-icons"]],
        inputs: {
          icon: "icon"
        },
        decls: 1,
        vars: 1,
        template: function FeatherIconsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-feather", ctx.icon);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWF0aGVyLWljb25zLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeatherIconsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-feather-icons',
            templateUrl: './feather-icons.component.html',
            styleUrls: ['./feather-icons.component.scss']
          }]
        }], function () {
          return [];
        }, {
          icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['icon']
          }]
        });
      })();
      /***/

    },

    /***/
    "s26Z": function s26Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PromptComponent", function () {
        return PromptComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-simple-modal */
      "aWE5");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var PromptComponent = /*#__PURE__*/function (_ngx_simple_modal__WE2) {
        _inherits(PromptComponent, _ngx_simple_modal__WE2);

        var _super3 = _createSuper(PromptComponent);

        function PromptComponent() {
          var _this24;

          _classCallCheck(this, PromptComponent);

          _this24 = _super3.call(this);
          _this24.message = '';
          return _this24;
        }

        _createClass(PromptComponent, [{
          key: "apply",
          value: function apply() {
            this.result = this.message;
            this.close();
          }
        }]);

        return PromptComponent;
      }(ngx_simple_modal__WEBPACK_IMPORTED_MODULE_1__["SimpleModalComponent"]);

      PromptComponent.ɵfac = function PromptComponent_Factory(t) {
        return new (t || PromptComponent)();
      };

      PromptComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PromptComponent,
        selectors: [["prompt"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 13,
        vars: 3,
        consts: [[1, "modal-content"], [1, "modal-header"], [1, "modal-body"], ["type", "text", "name", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]],
        template: function PromptComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PromptComponent_Template_input_ngModelChange_7_listener($event) {
              return ctx.message = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PromptComponent_Template_button_click_9_listener() {
              return ctx.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Bekor qilish");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PromptComponent_Template_button_click_11_listener() {
              return ctx.apply();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Tasdiqlash");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title || "Prompt");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.question);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.message);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PromptComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'prompt',
            template: "\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4>{{title || 'Prompt'}}</h4>\n      </div>\n      <div class=\"modal-body\">\n        <label>{{question}}</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"message\" name=\"name\" />\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"close()\">Bekor qilish</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"apply()\">Tasdiqlash</button>\n      </div>\n    </div>\n  "
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "sFyk": function sFyk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PagesModule", function () {
        return PagesModule;
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


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ngx_ckeditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-ckeditor */
      "eLGb");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "lDzL");
      /* harmony import */


      var _pages_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pages-routing.module */
      "WOLP");
      /* harmony import */


      var _list_page_list_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./list-page/list-page.component */
      "elBU");
      /* harmony import */


      var _create_page_create_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./create-page/create-page.component */
      "Qqv8");

      var PagesModule = function PagesModule() {
        _classCallCheck(this, PagesModule);
      };

      PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PagesModule
      });
      PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PagesModule_Factory(t) {
          return new (t || PagesModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _pages_routing_module__WEBPACK_IMPORTED_MODULE_6__["PagesRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_ckeditor__WEBPACK_IMPORTED_MODULE_4__["CKEditorModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesModule, {
          declarations: [_list_page_list_page_component__WEBPACK_IMPORTED_MODULE_7__["ListPageComponent"], _create_page_create_page_component__WEBPACK_IMPORTED_MODULE_8__["CreatePageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _pages_routing_module__WEBPACK_IMPORTED_MODULE_6__["PagesRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_ckeditor__WEBPACK_IMPORTED_MODULE_4__["CKEditorModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_list_page_list_page_component__WEBPACK_IMPORTED_MODULE_7__["ListPageComponent"], _create_page_create_page_component__WEBPACK_IMPORTED_MODULE_8__["CreatePageComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _pages_routing_module__WEBPACK_IMPORTED_MODULE_6__["PagesRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_ckeditor__WEBPACK_IMPORTED_MODULE_4__["CKEditorModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "sv8t": function sv8t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SalesModule", function () {
        return SalesModule;
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


      var ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ng2-smart-table */
      "RS3s");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "lDzL");
      /* harmony import */


      var _sales_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./sales-routing.module */
      "U5OH");
      /* harmony import */


      var _orders_orders_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./orders/orders.component */
      "XsfW");
      /* harmony import */


      var _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./transactions/transactions.component */
      "foZk");

      var SalesModule = function SalesModule() {
        _classCallCheck(this, SalesModule);
      };

      SalesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SalesModule
      });
      SalesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SalesModule_Factory(t) {
          return new (t || SalesModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _sales_routing_module__WEBPACK_IMPORTED_MODULE_4__["SalesRoutingModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["Ng2SmartTableModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["NgxDatatableModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SalesModule, {
          declarations: [_orders_orders_component__WEBPACK_IMPORTED_MODULE_5__["OrdersComponent"], _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_6__["TransactionsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _sales_routing_module__WEBPACK_IMPORTED_MODULE_4__["SalesRoutingModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["Ng2SmartTableModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["NgxDatatableModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SalesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_orders_orders_component__WEBPACK_IMPORTED_MODULE_5__["OrdersComponent"], _transactions_transactions_component__WEBPACK_IMPORTED_MODULE_6__["TransactionsComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _sales_routing_module__WEBPACK_IMPORTED_MODULE_4__["SalesRoutingModule"], ng2_smart_table__WEBPACK_IMPORTED_MODULE_2__["Ng2SmartTableModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["NgxDatatableModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "uM38": function uM38(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
        return ProfileComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/components/feather-icons/feather-icons.component */
      "pqks");

      function ProfileComponent_ng_template_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-feather-icons", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Profile");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "user");
        }
      }

      function ProfileComponent_ng_template_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "First Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Johan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Last Name:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Deo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "johndeo@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Gender:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Male");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Mobile Number:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "2124821463");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "DOB:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Dec, 15 1993");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Location:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "USA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_ng_template_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Contact");
        }
      }

      function ProfileComponent_ng_template_56_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Notifications");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Allow Desktop Notifications ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Enable Notifications ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Get notification for my own activity ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " DND ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Deactivate Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " I have a privacy concern ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " This is temporary ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Other ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Deactivate Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h5", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Delete Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " No longer usable ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Want to switch on other account ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Other ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Delete Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var ProfileComponent = /*#__PURE__*/function () {
        function ProfileComponent() {
          _classCallCheck(this, ProfileComponent);
        }

        _createClass(ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProfileComponent;
      }();

      ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
        return new (t || ProfileComponent)();
      };

      ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProfileComponent,
        selectors: [["app-profile"]],
        decls: 57,
        vars: 0,
        consts: [[1, "container-fluid"], [1, "row"], [1, "col-xl-4"], [1, "card"], [1, "card-body"], [1, "profile-details", "text-center"], ["src", "assets/images/dashboard/designer.jpg", "alt", "", 1, "img-fluid", "img-90", "rounded-circle", "blur-up", "lazyloaded"], [1, "f-w-600", "mb-0"], [1, "social"], [1, "form-group", "btn-showcase"], [1, "btn", "social-btn", "btn-fb", "d-inline-block"], [1, "fa", "fa-facebook"], [1, "btn", "social-btn", "btn-twitter", "d-inline-block"], [1, "fa", "fa-google"], [1, "btn", "social-btn", "btn-google", "d-inline-block", "mr-0"], [1, "fa", "fa-twitter"], [1, "project-status"], [1, "f-w-600"], [1, "media"], [1, "media-body"], [1, "pull-right"], [1, "progress", "sm-progress-bar"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", 2, "width", "90%"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-secondary", 2, "width", "60%"], ["role", "progressbar", "aria-valuenow", "25", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-danger", 2, "width", "70%"], [1, "col-xl-8"], [1, "card", "tab2-card"], [1, "tab-coupon", "profile-tabs"], ["ngbTabTitle", ""], ["ngbTabContent", ""], [3, "icon"], ["id", "top-profile", "role", "tabpanel", "aria-labelledby", "top-profile-tab", 1, "tab-pane", "fade", "show", "active"], [1, "table-responsive", "profile-table"], [1, "table", "table-responsive"], ["data-feather", "settings"], [1, "account-setting"], [1, "col"], ["for", "chk-ani", 1, "d-block"], ["id", "chk-ani", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani1", 1, "d-block"], ["id", "chk-ani1", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani2", 1, "d-block"], ["id", "chk-ani2", "type", "checkbox", 1, "checkbox_animated"], ["for", "chk-ani3", 1, "d-block", "mb-0"], ["id", "chk-ani3", "type", "checkbox", "checked", "", 1, "checkbox_animated"], [1, "account-setting", "deactivate-account"], ["for", "edo-ani", 1, "d-block"], ["id", "edo-ani", "type", "radio", "name", "rdo-ani", "checked", "", 1, "radio_animated"], ["for", "edo-ani1", 1, "d-block"], ["id", "edo-ani1", "type", "radio", "name", "rdo-ani", 1, "radio_animated"], ["for", "edo-ani2", 1, "d-block", "mb-0"], ["id", "edo-ani2", "type", "radio", "name", "rdo-ani", "checked", "", 1, "radio_animated"], ["type", "button", 1, "btn", "btn-primary"], ["for", "edo-ani3", 1, "d-block"], ["id", "edo-ani3", "type", "radio", "name", "rdo-ani1", "checked", "", 1, "radio_animated"], ["for", "edo-ani4", 1, "d-block"], ["id", "edo-ani4", "type", "radio", "name", "rdo-ani1", 1, "radio_animated"], ["for", "edo-ani5", 1, "d-block", "mb-0"], ["id", "edo-ani5", "type", "radio", "name", "rdo-ani1", "checked", "", 1, "radio_animated"]],
        template: function ProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "John deo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "johndeo@gmail.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h5", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Employee Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Performance");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "80%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Overtime ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "60%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h6");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Leaves taken");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "70%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ngb-tabset", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "ngb-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, ProfileComponent_ng_template_52_Template, 2, 1, "ng-template", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ProfileComponent_ng_template_53_Template, 41, 0, "ng-template", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "ngb-tab");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ProfileComponent_ng_template_55_Template, 2, 0, "ng-template", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ProfileComponent_ng_template_56_Template, 49, 0, "ng-template", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabTitle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbTabContent"], _shared_components_feather_icons_feather_icons_component__WEBPACK_IMPORTED_MODULE_2__["FeatherIconsComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "uiMJ": function uiMJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HttpService", function () {
        return HttpService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../environments/environment.prod */
      "cxbk");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var HttpService = /*#__PURE__*/function () {
        function HttpService(http) {
          _classCallCheck(this, HttpService);

          this.http = http;
        }

        _createClass(HttpService, [{
          key: "getMenu",
          value: function getMenu() {
            return this.http.post(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].http.get_menu.path, {});
          }
        }, {
          key: "updateMenu",
          value: function updateMenu(menuNew) {
            return this.http.post(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].http.update_menu.path, {
              menu_new: menuNew
            });
          }
        }, {
          key: "addQueue",
          value: function addQueue(changes) {
            return this.http.post(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].http.add_queue.path, {
              changes: changes
            });
          }
        }, {
          key: "setNewPvo",
          value: function setNewPvo(new_pvo) {
            return this.http.post(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].http.setNewPvo.path, {
              new_pvo: new_pvo
            });
          }
        }, {
          key: "removePvo",
          value: function removePvo(pvo_added_id) {
            return this.http.post(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].http.removePvo.path, {
              pvo_added_id: pvo_added_id
            });
          }
        }, {
          key: "editUserAccaunt",
          value: function editUserAccaunt(pvo_added_id, new_data) {
            return this.http.post(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].http.editUserAccaunt.path, {
              pvo_added_id: pvo_added_id,
              new_data: new_data
            });
          }
        }, {
          key: "officerNextItem",
          value: function officerNextItem(menu_idx, menu_sub_idx) {
            return this.http.post(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].http.officer_next_item.path, {
              menu_idx: menu_idx,
              menu_sub_idx: menu_sub_idx
            });
          }
        }, {
          key: "getStatistics",
          value: function getStatistics() {
            return this.http.post(_environments_environment_prod__WEBPACK_IMPORTED_MODULE_1__["environment"].http.getStatistics.path, {});
          }
        }]);

        return HttpService;
      }();

      HttpService.ɵfac = function HttpService_Factory(t) {
        return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: HttpService,
        factory: HttpService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A": function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _shared_routes_content_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shared/routes/content-routes */
      "j1Tj");
      /* harmony import */


      var _shared_layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shared/layout/content-layout/content-layout.component */
      "+IRR");
      /* harmony import */


      var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/auth/login/login.component */
      "HzFZ");
      /* harmony import */


      var _guards_auto_login_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./guards/auto-login.guard */
      "LFOy");
      /* harmony import */


      var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./guards/auth.guard */
      "UTcu");

      var routes = [{
        path: '',
        redirectTo: '/default',
        pathMatch: 'full'
      }, {
        path: '',
        component: _shared_layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_3__["ContentLayoutComponent"],
        children: _shared_routes_content_routes__WEBPACK_IMPORTED_MODULE_2__["contentOfficer"],
        data: {
          role: "OFFICER"
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
      }, {
        path: '',
        component: _shared_layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_3__["ContentLayoutComponent"],
        children: _shared_routes_content_routes__WEBPACK_IMPORTED_MODULE_2__["contentAdmin"],
        data: {
          role: "ADMIN"
        },
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
      }, {
        path: 'auth/login',
        component: _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
        canActivate: [_guards_auto_login_guard__WEBPACK_IMPORTED_MODULE_5__["AutoLoginGuard"]]
      }, {
        path: 'statistics',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | components-statistics-statistics-module */
          [__webpack_require__.e("common"), __webpack_require__.e("components-statistics-statistics-module")]).then(__webpack_require__.bind(null,
          /*! ./components/statistics/statistics.module */
          "dw5w")).then(function (m) {
            return m.StatisticsModule;
          });
        },
        data: {
          breadcrumb: "Statistika"
        }
      }, {
        path: 'display',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | components-user-display-user-display-module */
          [__webpack_require__.e("common"), __webpack_require__.e("components-user-display-user-display-module")]).then(__webpack_require__.bind(null,
          /*! ./components/user-display/user-display.module */
          "jfr+")).then(function (m) {
            return m.UserDisplayModule;
          });
        },
        data: {
          breadcrumb: "Foydalanuvchi ekrani"
        }
      }, {
        path: 'queue-user',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | components-queue-user-queue-user-module */
          "components-queue-user-queue-user-module").then(__webpack_require__.bind(null,
          /*! ./components/queue-user/queue-user.module */
          "/xmp")).then(function (m) {
            return m.QueueUserModule;
          });
        }
      }, {
        path: 'queue-menu-user',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | components-queue-menu-user-queue-menu-user-module */
          "components-queue-menu-user-queue-menu-user-module").then(__webpack_require__.bind(null,
          /*! ./components/queue-menu-user/queue-menu-user.module */
          "FD+4")).then(function (m) {
            return m.QueueMenuUserModule;
          });
        }
      }, {
        path: 'infokios',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | components-language-user-language-user-module */
          "components-language-user-language-user-module").then(__webpack_require__.bind(null,
          /*! ./components/language-user/language-user.module */
          "0kNb")).then(function (m) {
            return m.LanguageUserModule;
          });
        }
      }, {
        path: '**',
        redirectTo: '/default'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          scrollPositionRestoration: 'enabled',
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
              scrollPositionRestoration: 'enabled',
              relativeLinkResolution: 'legacy'
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "wGPJ": function wGPJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingModule", function () {
        return SettingModule;
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


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _setting_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./setting-routing.module */
      "H7tG");
      /* harmony import */


      var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile/profile.component */
      "uM38");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared/shared.module */
      "PCNd");

      var SettingModule = function SettingModule() {
        _classCallCheck(this, SettingModule);
      };

      SettingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SettingModule
      });
      SettingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SettingModule_Factory(t) {
          return new (t || SettingModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _setting_routing_module__WEBPACK_IMPORTED_MODULE_4__["SettingRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SettingModule, {
          declarations: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _setting_routing_module__WEBPACK_IMPORTED_MODULE_4__["SettingRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _setting_routing_module__WEBPACK_IMPORTED_MODULE_4__["SettingRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "wOdu": function wOdu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () {
        return AuthRoutingModule;
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


      var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login/login.component */
      "HzFZ");

      var routes = [{
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
      }];

      var AuthRoutingModule = function AuthRoutingModule() {
        _classCallCheck(this, AuthRoutingModule);
      };

      AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AuthRoutingModule
      });
      AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AuthRoutingModule_Factory(t) {
          return new (t || AuthRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthRoutingModule, [{
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
    "zSqk": function zSqk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmComponent", function () {
        return ConfirmComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_simple_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-simple-modal */
      "aWE5");

      var ConfirmComponent = /*#__PURE__*/function (_ngx_simple_modal__WE3) {
        _inherits(ConfirmComponent, _ngx_simple_modal__WE3);

        var _super4 = _createSuper(ConfirmComponent);

        function ConfirmComponent() {
          _classCallCheck(this, ConfirmComponent);

          return _super4.call(this);
        }

        _createClass(ConfirmComponent, [{
          key: "confirm",
          value: function confirm() {
            // on click on confirm button we set dialog result as true,
            // ten we can get dialog result from caller code
            this.result = true;
            this.close();
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.result = false;
            this.close();
          }
        }]);

        return ConfirmComponent;
      }(ngx_simple_modal__WEBPACK_IMPORTED_MODULE_1__["SimpleModalComponent"]);

      ConfirmComponent.ɵfac = function ConfirmComponent_Factory(t) {
        return new (t || ConfirmComponent)();
      };

      ConfirmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ConfirmComponent,
        selectors: [["confirm"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        decls: 12,
        vars: 2,
        consts: [[1, "modal-content"], [1, "modal-header"], [1, "modal-body"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]],
        template: function ConfirmComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmComponent_Template_button_click_8_listener() {
              return ctx.cancel();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmComponent_Template_button_click_10_listener() {
              return ctx.confirm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "OK");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title || "Confirm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message || "Are you sure?");
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'confirm',
            template: "\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4>{{title || 'Confirm'}}</h4>\n      </div>\n      <div class=\"modal-body\">\n        <p>{{message || 'Are you sure?'}}</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"cancel()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"confirm()\">OK</button>\n      </div>\n    </div>\n  "
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb": function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P": function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map