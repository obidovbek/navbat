import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/shared/service/auth.service';
import { HttpService } from 'src/app/shared/service/http.service';
import { DataService } from 'src/app/shared/service/data.service';
import { WebsocketService } from 'src/app/shared/service/websocket.service';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
interface tmp {
  loading: boolean;
  emptyPage: boolean;
}
@Component({
  selector: 'app-queue-officer',
  templateUrl: './queue-officer.component.html',
  styleUrls: ['./queue-officer.component.scss'],
})
export class QueueOfficerComponent {
  @ViewChild('myAudio') audio: ElementRef;
  tmp: tmp = { loading: true, emptyPage: false };
  dataSource: LocalDataSource = new LocalDataSource();
  user_symbol;
  officerSocketStatus = false;
  current_queue = '';
  type_services = [];
  constructor(
    private httpService: HttpService,
    public dataService: DataService,
    public authService: AuthService,
    private socket: WebsocketService
  ) {
    var user = { token: '123d' };
    this.socket.websocket_connection(user);
    this.socket.menu_updated().subscribe((res: any) => {
      console.log('menu_updated', res);
      this.dataService.menu = res.menu;
      this.genTable('load');
    });
    this.socket.next_service_officer().subscribe((next_service: any) => {
      this.dataService.menu = next_service.menu;
      this.genTable('load');
      this.officerSocketStatus = false;
      this.audio.nativeElement.play();
      const { menuIndex, next_number, reception_number, subMenuIndex, symbol } =
        next_service.message;
      this.current_queue =
        next_service.menu[menuIndex].inner_menu[subMenuIndex].uz +
        ' ' +
        symbol +
        (subMenuIndex + 1) +
        '-' +
        next_number;
    });
    // this.authService.user.subscribe((user) => {
    console.log('this.dataService.user', this.dataService.user);
    // const user = this.dataService.user
    this.type_services = this.dataService.user.services;
    this.user_symbol = this.dataService.user.reception_number;
    this.getMenu(0);
    // });
    this.socket.disconnect_officer(() => {
      this.officerSocketStatus = false;
    });
  }
  connectToQueue() {
    this.socket.queue_officer({
      ...this.dataService.user,
      status: !this.officerSocketStatus ? 'waiting' : 'serving',
    });
    this.officerSocketStatus = !this.officerSocketStatus;
  }
  nextItem() {
    this.tmp.loading = true;
    var found = -1;
    var found_title = '';
    for (var i = 0; i < this.type_services.length; i++) {
      if (!this.type_services[i]['tmp_served']) {
        this.type_services[i]['tmp_served'] = true;
        found = i;
        found_title = this.type_services[i].title;
        // alert(i)
        if (i + 1 === this.type_services.length && found >= 0) {
          for (var b = 0; b < this.type_services.length; b++) {
            this.type_services[b]['tmp_served'] = false;
          }
        }
        i = this.type_services.length;
      }
    }
    this.dataService.menu.forEach((menu, idx_m) => {
      menu.inner_menu.forEach((inner_menu, idx_i) => {
        if (found_title === inner_menu.uz) {
          this.nextItemHttpReq(idx_m, idx_i, found);
        }
      });
    });
  }
  nextItemHttpReq(menu_idx, menu_sub_idx, service_title_idx) {
    this.httpService.officerNextItem(menu_idx, menu_sub_idx).subscribe(
      (res: any) => {
        console.log(res);
        if (res.status === 200) {
          this.dataService.menu = res.menu;
          this.socket.queue_next({
            reception_number: this.user_symbol,
            next_number:
              this.dataService.menu[menu_idx].inner_menu[menu_sub_idx].queue
                .current,
            symbol:
              this.dataService.menu[menu_idx].symbol +
              (menu_sub_idx + 1).toString(),
          });
          this.genTable('refresh');
        } else if (res.status === 201) {
          setTimeout(() => {
            this.type_services[service_title_idx]['full_served'] = true;
            console.log(service_title_idx);
            // if(service_title_idx!==0){
            var full_served_found = true;
            this.type_services.forEach((ser, ser_idx) => {
              if (!ser['full_served']) {
                full_served_found = false;
              }
              if (ser_idx + 1 === this.type_services.length) {
                if (full_served_found) {
                  this.tmp.loading = false;
                  alert("Navbatda hech kim yo'q!");
                } else {
                  this.dataService.menu = res.menu;
                  this.nextItem();
                }
              }
            });
            // }else{
            // 	console.log(3)
            //  this.dataService.menu = res.menu;
            // 	this.nextItem();
            // }
          }, 2000);
        } else {
          alert('Nimadur hato ketti yana bir bor urinib ko‘ring! 3');
          // window.location.reload();
        }
      },
      (error) => {
        alert('Bazaka ulana olmadim yana bir bor urinib ko‘ring! 4');
      }
    );
  }
  getMenu(i: number) {
    if (this.dataService.menu) {
      return;
    }
    this.httpService.getMenu().subscribe(
      (menu: any) => {
        // console.log(res);
        // if (res.status === 200) {
        this.dataService.menu = menu;
        this.genTable('load');
        // } else {
        //   alert('Bazaka ulana olmadim yana bir bor urinib ko‘ring! 6');
        //   window.location.reload();
        // }
      },
      async (error) => {
        if (i < 10) {
          setTimeout(() => {
            this.getMenu(i + 1);
          }, 1000);
        } else {
          alert('Bazaka ulana olmadim yana bir bor urinib ko‘ring! 5');
        }
      }
    );
  }
  logout() {
    this.authService.signOut();
    // this.afAuth
    //   .signOut()
    //   .then(() => {
    //     this.router.navigate(['/auth/login']);
    //   })
    //   .catch((error) => {
    //     console.error('Error during logout:', error);
    //   });
  }
  genTable(type) {
    var items = [];
    console.log('this.dataService.menu', this.dataService.menu);
    console.log('this.type_services', this.type_services);
    this.dataService.menu?.forEach((menu) => {
      menu.inner_menu.forEach((inner_menu, idx) => {
        if (this.type_services.find((h) => h.title === inner_menu.uz)) {
          items.push({
            symbol: menu.symbol + (idx + 1),
            context: inner_menu.uz,
            overall: inner_menu.queue.overall,
            current: inner_menu.queue.current,
          });
        }
      });
    });
    console.log('items load', items);
    this.dataSource.load(items);
    if (type === 'refresh') this.dataSource.refresh();
    this.tmp.loading = false;
  }
  public settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
      position: 'none',
    },
    pager: {
      perPage: 100,
    },
    columns: {
      symbol: {
        title: 'Ramzi',
      },
      current: {
        title: 'Hozirgi',
      },
      overall: {
        title: 'Umumiy',
      },
      context: {
        title: 'Mazmuni',
      },
    },
  };
}
function makeid(length) {
  var result = '';
  var characters = '123456789';
  // var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
