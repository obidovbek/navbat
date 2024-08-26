(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "yrUK": function yrUK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WebsocketService", function () {
        return WebsocketService;
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


      var src_app_shared_service_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/service/http.service */
      "uiMJ");
      /* harmony import */


      var src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/service/data.service */
      "J8x5");
      /* harmony import */


      var src_app_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/service/auth.service */
      "Da3E");
      /* harmony import */


      var ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-socket-io */
      "7JkF"); // import { NativeRingtones } from '@ionic-native/native-ringtones/ngx';


      var WebsocketService = /*#__PURE__*/function () {
        function WebsocketService(httpService, dataService, authService, socket) {
          _classCallCheck(this, WebsocketService);

          this.httpService = httpService;
          this.dataService = dataService;
          this.authService = authService;
          this.socket = socket; // messaging: BehaviorSubject<any> = new BehaviorSubject(null);

          this.nextUserDisplay = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null); // this.authService.user$.subscribe(user=>{this.user = user;})
          // this.messaging.next(0);
        }

        _createClass(WebsocketService, [{
          key: "websocket_connection",
          value: function websocket_connection(user) {
            var _this = this;

            if (!user) return;
            this.socket.connect(); // let name = `user-${new Date().getTime()}`;
            // this.currentUser = name;

            console.log('socket connected');
            this.socket.emit('set-name-queue', user.token); //  this.socket.fromEvent('users-changed').subscribe(data => {
            //   let user = data['user'];
            //   if (data['event'] === 'left') {
            //     console.log('User left: ' + user, data['users'])
            //     // this.showToast('User left: ' + user);
            //   } else {
            //     console.log('User joined: ' + user, data['users'])
            //     // this.showToast('User joined: ' + user);
            //   }
            // });

            this.socket.fromEvent('queue_next_user').subscribe(function (data) {
              console.log('queue_next_user', data);

              _this.nextUserDisplay.next(data);
            });
            this.socket.fromEvent('queue_send_officer').subscribe(function (data) {
              console.log('queue_send_officer', data);
            });
          }
        }, {
          key: "queue_next",
          value: function queue_next(obj) {
            this.socket.emit('queue_next', obj);
          }
        }, {
          key: "queue_new_user",
          value: function queue_new_user(obj) {
            this.socket.emit('queue_new_user', obj);
          }
        }]);

        return WebsocketService;
      }();

      WebsocketService.ɵfac = function WebsocketService_Factory(t) {
        return new (t || WebsocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__["Socket"]));
      };

      WebsocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: WebsocketService,
        factory: WebsocketService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebsocketService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: src_app_shared_service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
          }, {
            type: src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
          }, {
            type: src_app_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
          }, {
            type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__["Socket"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map