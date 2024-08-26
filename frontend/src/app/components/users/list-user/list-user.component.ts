import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data.service';
import { HttpService } from 'src/app/shared/service/http.service';

interface tmp{
  loading: boolean;
}
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  public user_list = []
  tmp: tmp = {loading: true};
  constructor(
    private dataService: DataService,
    private httpService: HttpService
  ) {
    // dataService.pvoKaf$.subscribe(async(res)=>{
    //   this.user_list = await res;
    //   this.tmp.loading = false;
    // })
  }

  public settings = {
    delete: {
      confirmDelete: true,
      deleteButtonContent: '<a class="table_del_default_icon"></a>'
    },
    edit: {
      editButtonContent: 'EDIT ',
      saveButtonContent: 'SAVE ',
      cancelButtonContent: 'CANCEL ',
      confirmSave: true,
    },
    actions: {
      add: false,
      edit: true,
      delete: true,
      position: 'right'
    },
    columns: {
      // avatar: {
      //   title: 'Avatar',
      //   type: 'html'
      // },
      fname: {
        title: 'Ismi',
        editable: false
      },
      lname: {
        title: 'Familiyasi',
        editable: false
      },
      patronymic: {
        title: 'Sharifi',
        editable: false
      },
      born: {
        title: 'Tug‘ilgan yili'
      },
      rank: {
        title: 'Lavozimi',
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
              {value: 'Professor', title:'Professor'},
              {value: 'Dotsent', title:'Dotsent'},
              {value: 'Katta o‘qituvchi', title:'Katta o‘qituvchi'},
              {value: 'Assistent', title:'Assistent'},
              {value: 'Kafedra mudiri', title:'Kafedra mudiri'},
            ],
          },
        }
      },
      wagerate: {
        title: 'Stavkasi',
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
              {value: '1', title:'1'},
              {value: '1,5', title:'1,5'},
              {value: '0,5', title:'0,5'},
              {value: '0,25', title:'0,25'},
            ],
          },
        }
      },
      academic_degree: {
        title: 'Ilmiy darajasi',
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
              {value: 'Fan doktori', title:'Fan doktori'},
              {value: 'Fan nomzodi', title:'Fan nomzodi'},
            ],
          },
        }
      },
      academic_title: {
        title: 'Ilmiy unvoni',
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
              {value: 'Dotsent', title:'Dotsent'},
              {value: 'Professor', title:'Professor'},
            ],
          },
        }
      },
      state_type: {
        title: 'Shtat turi',
        editor: {
          type: 'list',
          config: {
            selectText: 'Select',
            list: [
              {value: 'Asosiy', title:'Asosiy'},
              {value: 'Ichki o‘rindosh', title:'Ichki o‘rindosh'},
              {value: 'Tashqi o‘rindosh', title:'Tashqi o‘rindosh'},
              {value: 'Soatbay', title:'Soatbay'},
            ],
          },
        }
      },
      fakul: {
        title: 'Fakultet',
        editable: false
      },
      kafed: {
        title: 'Kafedra',
        editable: false
      },
    },
  };

  ngOnInit() {
  }
  onEditConfirm(event){
    var data = event.newData;
    // console.log(data)
    var newData = {
      academic_degree: data['academic_degree'],
      academic_title: data['academic_title'],
      born: data['born'],
      rank: data['rank'],
      state_type: data['state_type'],
      wagerate: data['wagerate'],
    };
    this.httpService.editUserAccaunt(data['added_id'], newData)
    .subscribe((res:any)=>{
      if(res.status === 200){
        alert('Ma\'lumotlar muvaffaqiyatli yangilandi!');
      }else{
        alert('Nimadur hato ketti yana bir bor urinib ko\'ring!');  
      }
        // console.log('result ', res)
      event.confirm.resolve();
    },error=>{
      alert('Nimadur hato ketti yana bir bor urinib ko\'ring! Error: ' + JSON.stringify(error));
    })
    // console.log(newData)
  }
  onDeleteConfirm(event){
    this.httpService.removePvo(event.data.added_id)
    .subscribe((result:any)=>{
      if (result.status === 200) {
        alert('Foydalanuvchi muvaffaqiyatli ochirildi!');
        event.confirm.resolve();
      }else{
        alert('Nimadur hato ketti yana bir bor urinib ko\'ring!');
      }
    }, error =>{
      alert('Nimadur hato ketti yana bir bor urinib ko\'ring!');
      console.error(error);
    });
  }
}

