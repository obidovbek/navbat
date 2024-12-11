import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
  selector: 'button-view',
  template: `
    <div
      class="d-flex flex-nowrap text-white"
      style="display:flex; justify-content:center;"
    >
      <button type="button" class="btn btn-info" (click)="addMenu()">
        <i class="fa fa-plus"></i><strong>/</strong>
        <i class="fa fa-minus"></i>
      </button>
    </div>
  `,
})
export class ButtonViewComponent implements ViewCell, OnInit {
  @Input() value: string | number;
  @Input() rowData: any;

  constructor(public dataService: DataService, private router: Router) {}

  ngOnInit() {}

  // delete() {
  //   console.log('Deleting', this.rowData);
  //   this.save.emit(this.rowData);
  // }
  addMenu() {
    console.log('addMenu', this.dataService.menu);
    this.dataService.menu?.forEach((m, i) => {
      if (m.symbol === this.rowData.symbol) {
        this.dataService.selected.index = i;
        this.router.navigateByUrl('/queue-sub');
      }
    });
    // console.log('Editing', this.rowData);
    // this.save.emit(this.rowData);
  }
}
