import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-queue-user',
  templateUrl: './queue-user.component.html',
  styleUrls: ['./queue-user.component.scss']
})
export class QueueUserComponent implements OnInit {

  lang = this.dataService.selected.lang;
  constructor(
  	public dataService: DataService,
    private router: Router,
  	) {
    if(!this.dataService.selected.lang)this.router.navigateByUrl('/language-user');
  }

  ngOnInit(): void {
  }
  selectSymbol(idx:any){
  	this.dataService.selected.index = idx
    this.router.navigateByUrl('/queue-menu-user');
  }
  navigateBack(){
      console.log('navigateBack')
      this.router.navigateByUrl('/language-user');
  }
}
