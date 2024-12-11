import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/service/http.service';
import { AuthService } from 'src/app/shared/service/auth.service';
import { DataService } from 'src/app/shared/service/data.service';
import { Socket } from 'ngx-socket-io';
import { Observable, BehaviorSubject } from 'rxjs';
// import { NativeRingtones } from '@ionic-native/native-ringtones/ngx';
@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  user: any;
  // messaging: BehaviorSubject<any> = new BehaviorSubject(null);
  // nextUserDisplay: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(
    private httpService: HttpService,
    private dataService: DataService,
    private authService: AuthService,
    private socket: Socket // private ringtones: NativeRingtones
  ) {
    // this.authService.user$.subscribe(user=>{this.user = user;})
    // this.messaging.next(0);
  }
  websocket_server;
  disconnect_officer(callback) {
    this.socket
      ?.fromEvent('disconnect_officer')
      .subscribe(this.disconnect_officer);
  }
  websocket_connection(user) {
    if (!user) return;
    this.socket.connect();
    // let name = `user-${new Date().getTime()}`;
    // this.currentUser = name;
    console.log('socket connected');
    // this.socket.emit('set-name-queue', user.token);
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

    // this.socket.fromEvent('queue_next_user').subscribe((data) => {
    //   console.log('queue_next_user', data);
    //   // this.nextUserDisplay.next(data);
    // });
    this.socket.fromEvent('queue_send_officer').subscribe((data) => {
      console.log('queue_send_officer', data);
    });
  }
  menu_updated() {
    return this.socket.fromEvent('menu_updated');
  }
  next_service_display() {
    return this.socket.fromEvent('next_service_display');
  }
  connect_user_display() {
    this.socket.emit('connect_user_display', { ok: true });
  }
  next_service_officer() {
    return this.socket.fromEvent('next_service_officer');
  }
  queue_next(obj) {
    this.socket.emit('queue_next', obj);
  }
  queue_officer(user) {
    this.socket.emit('queue_officer', user);
  }
  queue_new_user(obj) {
    this.socket.emit('queue_new_user', obj);
  }
}

// import { Injectable } from '@angular/core';
// import { HttpService } from '@app/services/http.service';
// import { DataService } from '@app/services/data.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class WebsocketService {

//   constructor(
//       private httpService: HttpService,
//       private dataService: DataService
//     ) { }
//   websocket_server;
//   websocket_connection(user){
//       if(!user)return;
//       // this.websocket_server = new WebSocket("ws://2shtest.uz:8080");
//       // this.websocket_server = new WebSocket("ws://213.230.99.94:55000");
//       var websocket_server = new WebSocket("ws://192.168.10.250:8888");
//       var th = this;
//       this.websocket_server.onopen = function(e) {
//         console.log('onopen');
//         th.websocket_server.send(
//           JSON.stringify({
//             'type': 'socket',
//             'user_id': user.token,
//           })
//         );
//       };
//       this.websocket_server.onerror = function(e) {
//         console.log('onerror', e)
//       }
//       this.websocket_server.onmessage = function(e) {
//         console.log('onmessage', e.data)
//         if (e.data) {
//           var data = JSON.parse(e.data);
//           switch (data.type) {
//             case "unsubs_to_order":
//             case "subs_to_order":
//               th.httpService.get_data_active_order([data.driver_id, data.order_id])
//               .subscribe((res:any)=>{
//                 console.log('type', data.type);
//                 console.log('order has new subscribtion', res);
//                 if (res.status===200) {
//                   th.dataService.offeredRides.forEach(offer=>{
//                     if (offer.id === res.data.id)offer.subs = res.data.subs;
//                   })
//                   console.log('offers', th.dataService.offeredRides);
//                 }
//               })
//               break;
//             // case "unsubs_to_order":
//             case "going_order":
//             case "rejected_order":
//               th.httpService.get_data_active_order([data.driver_id, data.order_id])
//               .subscribe((res:any)=>{
//                 console.log('type', data.type);
//                 console.log('order has new subscribtion', res);
//                 if (res.status===200) {
//                   th.dataService.bookedRides.forEach(book=>{
//                     if (book.id === res.data.id)book.subs = res.data.subs;
//                   })
//                   console.log('offers', th.dataService.bookedRides);
//                 }
//               })
//               break;

//             default:
//               // code...
//               break;
//           }
//         }
//       }
//   }
//   websocket_send_msg(obj){
//     this.websocket_server.send(
//       JSON.stringify(obj)
//     );
//     // {
//     //     'type': 'subs_to_order',
//     //     'user_id': this.user.token,
//     //     'send_to': ['XVoSTKMnjbuG8lF9MnMV8jUSWMgi'],
//     //     'order_id': "Salom"
//     //   }
//   }
//   // getUsers(obj_path){
//   //   return this.http.post(environment.http.getUsers.path,
//   //     {
//   //       file_path: environment.http.getUsers.file,
//   //       obj_path: obj_path,
//   //     }
//   //   );
//   // }
//   // setUsers(obj_path, obj){
//   //   return this.http.post(environment.http.setUsers.path,
//   //     {
//   //       file_path: environment.http.setUsers.file,
//   //       obj_path: obj_path,
//   //       obj: obj,
//   //     }
//   //   );
//   // }

// }
