import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-queue-user',
  templateUrl: './queue-user.component.html',
  styleUrls: ['./queue-user.component.scss'],
})
export class QueueUserComponent implements OnInit {
  environment;
  lang = this.dataService.selected.lang;
  constructor(public dataService: DataService, private router: Router) {
    this.environment = environment;
    if (!this.dataService.selected.lang)
      this.router.navigateByUrl('/language-user');
  }

  ngOnInit(): void {}
  selectSymbol(idx: any) {
    this.dataService.selected.index = idx;
    this.router.navigateByUrl('/queue-menu-user');
  }
  navigateBack() {
    console.log('navigateBack');
    this.router.navigateByUrl('/language-user');
  }
}
