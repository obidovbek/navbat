import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../../../shared/service/data.service';
import { HttpService } from '../../../shared/service/http.service';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  public accountForm: FormGroup;
  public permissionForm: FormGroup;
  tizim;
  tmp = {error: "", loading: false};
  pvoKaf;
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private httpService: HttpService,
  ) {
    this.createAccountForm();
    this.createPermissionForm();
    // this.tizim = dataService.tizim;
    // dataService.pvoKaf$.subscribe(res=>{
    //   this.pvoKaf = res;
    // })
  }

  createAccountForm() {
    this.accountForm = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      patronymic: [''],
      born: ['', Validators.required],
      rank: ['', Validators.required],
      wagerate: ['', Validators.required],
      academic_degree: [''],
      academic_title: [''],
      state_type: ['', Validators.required],
      kafed: ['', Validators.required],
      fakul: ['', Validators.required],
    })
  }
  tanKafedra(){
    return (this.tizim.filter(res => res.fakultet === this.accountForm.value.fakul))[0];
  }
  createPermissionForm() {
    this.permissionForm = this.formBuilder.group({
    })
  }
  ngOnInit() {
  }
  get f(){
    return this.accountForm.controls;
  }
  onAdd(event){
    var value = this.accountForm.value
    this.tmp.loading = true;
    if (this.pvoKaf.find(res=> ((res.fname)?.replace(/[ ,.]/g, "") === (value.fname)?.replace(/[ ,.]/g, "")) && ((res.lname)?.replace(/[ ,.]/g, "") === (value.lname)?.replace(/[ ,.]/g, "")) && ((res.patronymic?res.patronymic:'').replace(/[ ,.]/g, "") === (value.patronymic?value.patronymic:'').replace(/[ ,.]/g, "")))) {
      this.tmp.loading = false;
      return this.tmp.error="Bunday ism va sharifli o'qituvchi mavjud!";
    }
    this.httpService.setNewPvo(value)
    .subscribe((result:any)=>{
      // console.log('result', result);
      if (result.status === 200) {
              this.accountForm.reset();
              this.tmp.loading = false;
              alert('Ma\'lumotlar muvaffaqiyatli saqlandi!')
              this.tmp.error = ''
      }else{
        alert('Nimadur hato ketti!')
      }
    }, error =>{
      console.error(error);
    })
  }
}
