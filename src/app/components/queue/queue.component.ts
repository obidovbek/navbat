import { Component, ViewChild } from "@angular/core";
import { HttpService } from 'src/app/shared/service/http.service';
import { DataService } from 'src/app/shared/service/data.service';
import { ButtonViewComponent } from './button-view/button-view.component'

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss'],
})

export class QueueComponent {
  title:string;
  context:string;
  public menu_list = []

  loading = true;
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
      },
      link: {
      	title: "Ichki menyu boshqarish",
        type: 'custom',
        renderComponent: ButtonViewComponent
      }
    },
  };
  constructor(
  	private httpService: HttpService,
  	public dataService: DataService,
  	) {
    this.getMenu(0);
  }

  ngOnInit() {
  }
  addMenu(){
    this.dataService.menuNew.symbol = this.dataService.menuNew.symbol_lang.en;
    this.dataService.menu.push(this.dataService.menuNew);
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
  getMenu(i:number){
    // if(this.dataService.menu){this.loading = false;return;};
    this.httpService.getMenu()
    .subscribe((res:any)=>{
          console.log(res);
        if(res.status===200){
          this.dataService.menu = res.menu;
          res.menu.forEach(m=>{
          	this.menu_list.push({symbol: m.symbol, title:m.title.uz})
          })
          this.loading = false;
          // localStorage.setItem("menu", JSON.stringify(res.menu));
        }else{
          alert("Bazaka ulana olmadim yana bir bor urinib ko‘ring!");
          window.location.reload();
        }
    },async (error)=>{
      if(i<10){
        setTimeout(()=>{this.getMenu(i+1)},1000);
      }else{
          alert("Bazaka ulana olmadim yana bir bor urinib ko‘ring!");
      }
    });
  }


  onDeleteConfirm(event){
    const symbol = event.data.symbol;
    var menu = [];
    this.dataService.menu.forEach((m,i)=>{
      if(m.symbol!==symbol){
        menu.push(m);
      }  
    });
    this.loading = true;
    this.updateMenu(menu);
  }
}
