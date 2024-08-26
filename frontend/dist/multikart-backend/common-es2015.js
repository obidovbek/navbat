(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "yrUK":
/*!*****************************************************!*\
  !*** ./src/app/shared/service/websocket.service.ts ***!
  \*****************************************************/
/*! exports provided: WebsocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return WebsocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_shared_service_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/service/http.service */ "uiMJ");
/* harmony import */ var src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/service/data.service */ "J8x5");
/* harmony import */ var src_app_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/service/auth.service */ "Da3E");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-socket-io */ "7JkF");







// import { NativeRingtones } from '@ionic-native/native-ringtones/ngx';
class WebsocketService {
    constructor(httpService, dataService, authService, socket) {
        this.httpService = httpService;
        this.dataService = dataService;
        this.authService = authService;
        this.socket = socket;
        // messaging: BehaviorSubject<any> = new BehaviorSubject(null);
        this.nextUserDisplay = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        // this.authService.user$.subscribe(user=>{this.user = user;})
        // this.messaging.next(0);
    }
    websocket_connection(user) {
        if (!user)
            return;
        this.socket.connect();
        // let name = `user-${new Date().getTime()}`;
        // this.currentUser = name;
        console.log('socket connected');
        this.socket.emit('set-name-queue', user.token);
        //  this.socket.fromEvent('users-changed').subscribe(data => {
        //   let user = data['user'];
        //   if (data['event'] === 'left') {
        //     console.log('User left: ' + user, data['users'])
        //     // this.showToast('User left: ' + user);
        //   } else {
        //     console.log('User joined: ' + user, data['users'])
        //     // this.showToast('User joined: ' + user);
        //   }
        // });
        this.socket.fromEvent('queue_next_user').subscribe(data => {
            console.log('queue_next_user', data);
            this.nextUserDisplay.next(data);
        });
        this.socket.fromEvent('queue_send_officer').subscribe(data => {
            console.log('queue_send_officer', data);
        });
    }
    queue_next(obj) {
        this.socket.emit('queue_next', obj);
    }
    queue_new_user(obj) {
        this.socket.emit('queue_new_user', obj);
    }
}
WebsocketService.ɵfac = function WebsocketService_Factory(t) { return new (t || WebsocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__["Socket"])); };
WebsocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WebsocketService, factory: WebsocketService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebsocketService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_app_shared_service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"] }, { type: src_app_shared_service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: src_app_shared_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__["Socket"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map