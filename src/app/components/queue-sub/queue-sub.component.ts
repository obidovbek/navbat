import { Component, ViewChild } from "@angular/core";
import { HttpService } from 'src/app/shared/service/http.service';
import { DataService } from 'src/app/shared/service/data.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-queue-sub',
  templateUrl: './queue-sub.component.html',
  styleUrls: ['./queue-sub.component.scss'],
})

export class QueueSubComponent {
  title:string;
  context:string;
  public menu_sub_list = []

  loading = false;
  public settings = {
    delete: {
      confirmDelete: true,
      deleteButtonContent: '<a class="table_del_default_icon"></a>'
    },
    actions: {
      add: false,
      edit: false,
      delete: true,
      position: 'right'
    },
    columns: {
      symbol: {
        title: 'Ramzi',
      },
      title: {
        title: 'Sarlavha'
      }
    },
  };
  constructor(
  	private httpService: HttpService,
  	public dataService: DataService,
    private router: Router
  	) {
    this.getMenu();
  }

  ngOnInit() {
  }
  getMenu(){
      if(!this.dataService.menu){
        this.router.navigateByUrl('/queue');
        return;
      }
      this.dataService.menu[this.dataService.selected.index].inner_menu.forEach(m=>{
      	this.menu_sub_list.push({symbol: this.dataService.menu[this.dataService.selected.index].symbol, title:m.uz})
      })
      this.loading = false;
  }
  addMenuSub(){
    
    this.dataService.menu[this.dataService.selected.index].inner_menu.push(this.dataService.menuNewSub);
    this.loading = true;
    this.updateMenu(this.dataService.menu);
  }
  updateMenu(menu){
    this.httpService.updateMenu(menu)
    .subscribe((res:any)=>{
          console.log(res);
        if(res.status===200){
          this.loading = false;
          alert("Ma'lumotlar muvafaqqiyatli yangilandi!");
          window.location.reload();
        }else{
          alert("Bazaka ulana olmadim yana bir bor urinib ko‘ring!");
          window.location.reload();
        }
    },async (error)=>{
          alert("Bazaka ulana olmadim yana bir bor urinib ko‘ring! Error:" + JSON.stringify(error));
    });
  }
  onDeleteConfirm(event){
    const title = event.data.title;
    var menuSub = [];
    this.dataService.menu[this.dataService.selected.index].inner_menu.forEach((m,i)=>{
      if(m.uz!==title){
        menuSub.push(m);
      }  
    });
    this.dataService.menu[this.dataService.selected.index].inner_menu = menuSub;
    this.loading = true;
    // console.log(this.dataService.menu)
    this.updateMenu(this.dataService.menu);
  }
}
