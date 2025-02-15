import { Component, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/shared/service/auth.service';
import { HttpService } from 'src/app/shared/service/http.service';
import { DataService } from 'src/app/shared/service/data.service';
import { WebsocketService } from 'src/app/shared/service/websocket.service';
import { Router } from '@angular/router';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import {
  PvoKafInter,
  FieldData,
  Chart,
} from 'src/app/shared/interface/field.interface';
import { trigger, style, animate, transition } from '@angular/animations';
import { ExcelService } from 'src/app/shared/service/excel.service';
import * as XLSX from 'xlsx';

interface tmp {
  loading: boolean;
  emptyPage: boolean;
}
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('500ms', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('500ms', style({ transform: 'translateX(100%)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class StatisticsComponent {
  tmp: tmp = { loading: true, emptyPage: false };
  service_used_number;
  dataSource: LocalDataSource = new LocalDataSource();
  statistics_chart: Chart = {
    type: 'Line',
    data: {
      labels: [],
      series: [],
    },
    options: {
      showArea: true,
      height: '600',
      // width: '1500px',
      low: 0,
      axisX: {
        offset: 100,
      },
    },
  };
  public settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
      position: 'none',
    },
    pager: {
      display: false,
      // perPage: 10
    },
    columns: {
      service_name: {
        title: 'Hizmat nomi',
      },
      date: {
        title: 'Sana/vaqt',
      },
    },
  };
  // user_symbol;
  // type_services = []
  constructor(
    private httpService: HttpService,
    public dataService: DataService,
    public authService: AuthService,
    private excelService: ExcelService,
    private socket: WebsocketService
  ) {
    this.getStatistics();
    // var user = {token: '123d'}
    //     this.socket.websocket_connection(user);
    //  this.authService.user.subscribe(user=>{
    //  	console.log('user', user)
    //  	this.type_services = user.services;
    //  	this.user_symbol = user.reception_number;
    //   this.getMenu(0);
    //  })
  }
  fileName = 'statistika.xlsx';
  exportexcel(): void {
    /* table id is passed over here */
    this.tmp.loading = true;
    this.settings.pager.display = false;
    setTimeout(() => {
      this.tmp.loading = false;
      setTimeout(() => {
        // this.excelService.exportAsExcelFile(document.getElementById('excelTable').children[0]);
        const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(
          document.getElementById('excelTable').children[0]
        );

        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

        XLSX.writeFile(wb, this.fileName);
      }, 1000);
    }, 1000);
  }
  getStatistics() {
    this.httpService.getStatistics().subscribe(
      (res: any) => {
        console.log('res', res);
        this.service_used_number = res.queue_orders.length;
        this.genTable(res.queue_orders);
        this.dataSource.load(res.queue_orders.reverse());
      },
      (error) => {
        console.error(error);
      }
    );
  }
  genTable(data) {
    var new_data = {};
    data.map((service) => {
      if (service.service_name) {
        if (!new_data[service.service_name]) {
          new_data[service.service_name] = 1;
        } else {
          new_data[service.service_name] += 1;
        }
      }
      // ()?():();
    });
    var services_used = [];
    var services_used_ng2 = [];
    Object.keys(new_data).map((item) => {
      this.statistics_chart.data.labels.push(item as never);
      // services_used_ng2.push({service_name: item, times_});
      services_used.push(new_data[item]);
    });
    this.statistics_chart.data.series.push(services_used as never);
    this.tmp.loading = false;
    console.log('services_used', services_used);
  }

  getMenu(i: number) {
    if (this.dataService.menu) {
      return;
    }
    this.httpService.getMenu().subscribe(
      (res: any) => {
        console.log(res);
        if (res.status === 200) {
          this.dataService.menu = res.menu;
          this.genTable('load');
        } else {
          alert('Bazaka ulana olmadim yana bir bor urinib ko‘ring! a5');
          window.location.reload();
        }
      },
      async (error) => {
        if (i < 10) {
          setTimeout(() => {
            this.getMenu(i + 1);
          }, 1000);
        } else {
          alert('Bazaka ulana olmadim yana bir bor urinib ko‘ring! a6');
        }
      }
    );
  }
  // genTable(type){
  // var items = [];
  // this.dataService.menu
  // .forEach(menu=>{
  // 	menu.inner_menu.forEach((inner_menu, idx)=>{
  // 		if(this.type_services.find(h=>h.title===inner_menu.uz)){
  // 			items.push({symbol: menu.symbol + (idx+1), context: inner_menu.uz, overall: inner_menu.queue.overall, current: inner_menu.queue.current})
  // 		}
  // 	});
  // });
  // this.dataSource.load(items);
  // if(type==='refresh')this.dataSource.refresh();
  // this.tmp.loading = false;
  // }
}
