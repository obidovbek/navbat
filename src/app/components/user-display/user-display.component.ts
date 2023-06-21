import { Component,ElementRef, ViewChild, } from "@angular/core";
import { HttpService } from 'src/app/shared/service/http.service';
import { DataService } from 'src/app/shared/service/data.service';
import { WebsocketService } from 'src/app/shared/service/websocket.service';
import { Router } from '@angular/router'
// import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
interface tmp{
  loading: boolean;
  emptyPage: boolean;
}
@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.scss'],
})

export class UserDisplayComponent {
    @ViewChild("myAudio") audio: ElementRef;
	current_queues_new = null;
	current_queues = [];
	service_used_number;
	current_queues_loop = [];
	constructor(
		private httpService: HttpService,
	  	public dataService: DataService,
	  	private socket: WebsocketService
  	){
  		var user = {token: 'user-display'}
        this.socket.websocket_connection(user);
        this.nextUserDisplay();
        this.current_queues_loop_func(0);
	}
	current_queues_loop_func(i){
		this.current_queues_loop = [];
		setTimeout(()=>{
			const a = i*5; 
			const b = (i*5)+5; 
			for(var x=a;x<b;x++){
				if(this.current_queues[x]){
					this.current_queues_loop.push(this.current_queues[x]);
				}else{
					i = -1;
				}
			}
		},500)
		setTimeout(()=>{this.current_queues_loop_func(i+1);},10000)
	}
	getStatistics(){
		this.httpService.getStatistics()
		.subscribe((res:any)=>{
			console.log('res', res)
			this.service_used_number = res.queue_orders.length;
			// this.genTable(res.queue_orders);
			// this.dataSource.load(res.queue_orders.reverse());
		},error=>{
			console.error(error);
		})
	}
	nextUserDisplay(){
		this.getStatistics();
        this.socket.nextUserDisplay.subscribe((res:any)=>{
        	if(res){
        		console.log(res.data)
        		this.current_queues_new = res.data;
			    this.audio.nativeElement.play();
        		setTimeout(()=>{
        			this.current_queues_new = null;
	        		var found = false;
	        		this.current_queues.forEach((h, h_idx)=>{
	        			if(h.officer_id&&h.officer_id===res.data.officer_id){
	        				found = true;
	        				this.current_queues[h_idx] = res.data;
	        			}
	        			if(((h_idx+1)===this.current_queues.length)&&!found){
			        		this.current_queues.push(res.data);
	        			}
	        		})
	        		if(!this.current_queues.length){
		        		this.current_queues.push(res.data);
	        		}
        		},5000)
        		// if(this.current_queues.find(h=>(!h.officer_id)||(h.officer_id!==res.data.officer_id))){
	        	// console.log('nextUserDisplay: ',res)
	        	// 	this.current_queues.push(res.data);
        		// }
        	}
        })

	}
 //    tmp: tmp = {loading: true, emptyPage: false};
 //  	dataSource: LocalDataSource = new LocalDataSource();
	// constructor(
	// 	private httpService: HttpService,
	//   	public dataService: DataService
 //  	){
	//     this.getMenu(0);
	// }
	// getMenu(i:number){
	//     if(this.dataService.menu){return;};
	//     this.httpService.getMenu()
	//     .subscribe((res:any)=>{
	//           console.log(res);
	//         if(res.status===200){
	//           this.dataService.menu = res.menu;
	//           this.genTable();
	//         }else{
	//           alert("Bazaka ulana olmadim yana bir bor urinib ko‘ring!");
	//           window.location.reload();
	//         }
	//     },async (error)=>{
	//       if(i<10){
	//         setTimeout(()=>{this.getMenu(i+1)},1000);
	//       }else{
	//           alert("Bazaka ulana olmadim yana bir bor urinib ko‘ring!");
	//       }
	//     });
 //    }
 //    genTable(){
 //    	var items = [];
 //    	this.dataService.menu
 //    	.forEach(menu=>{
 //    		menu.inner_menu.forEach((inner_menu, idx)=>{
 //    			items.push({symbol: menu.symbol + (idx+1), context: inner_menu.uz, overall: inner_menu.queue.overall, current: inner_menu.queue.current})
 //    		});
 //    	});
 //    	this.dataSource.load(items);
 //    	this.tmp.loading = false;
 //    }
	// public settings = {
	//     actions: {
	//       add: false,
	//       edit: false,
	//       delete: false,
	//       position: 'none'
	//     },
	//     pager: {
	// 	    perPage: 100
	//     },
	//     columns: {
	//       symbol: {
	//         title: 'Ramzi',
	//       },
	//       current: {
	//       	title: "Hozirgi"
	//       },
	//       overall: {
	//       	title: "Umumiy"
	//       },
	//       context: {
	//         title: 'Mazmuni',
	//       },
	//     },
	// };
}
