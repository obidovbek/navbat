import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  ValidatorFn,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../shared/service/auth.service';
import { HttpService } from 'src/app/shared/service/http.service';
import { DataService } from 'src/app/shared/service/data.service';
import { of } from 'rxjs';
@Component({
  selector: 'app-register-pvo',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  @ViewChild('tabSet', { static: false }) tabSet;
  public registerForm: FormGroup;

  loading: boolean = true;
  servicesData = [];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private httpService: HttpService,
    private dataService: DataService,
    private formBuilder: FormBuilder
  ) {
    this.getMenu(0);
  }

  getServices() {
    var items = [];
    this.dataService.menu.forEach((menu, idx) => {
      menu.inner_menu.forEach((inner) => {
        items.push({ title: inner.uz });
      });
    });
    console.log(items);
    return items;
  }

  private addCheckboxes() {
    this.servicesData.forEach(() =>
      this.servicesFormArray.push(new FormControl(false))
    );
  }
  get servicesFormArray() {
    return this.registerForm.controls.services as FormArray;
  }
  getMenu(i: number) {
    this.httpService.getMenu().subscribe(
      (menu: any) => {
        // console.log(res);
        // if (res.status === 200) {
        this.dataService.menu = menu;

        this.loading = false;
        this.createRegisterForm();
        of(this.getServices()).subscribe((orders) => {
          this.servicesData = orders;
          this.addCheckboxes();
        });
        // } else {
        //   alert('Bazaka ulana olmadim yana bir bor urinib ko‘ring! a7');
        //   window.location.reload();
        // }
      },
      async (error) => {
        if (i < 10) {
          setTimeout(() => {
            this.getMenu(i + 1);
          }, 1000);
        } else {
          alert('Bazaka ulana olmadim yana bir bor urinib ko‘ring! a8');
        }
      }
    );
  }

  async register() {
    console.log('register', this.registerForm.value);
    this.loading = true;
    var services = [];
    this.registerForm.value.services.forEach((sub, idx) => {
      if (sub) {
        services.push(this.getServices()[idx]);
      }
    });
    this.registerForm.value.services = services;
    try {
      await this.httpService.register(this.registerForm.value);
      this.registerForm.reset();
      alert("Foydalanuvchi muvaffaqiyatli qo'shildi!");
    } catch (error) {
      alert(error.error);
    }
    this.loading = false;
    // this.auth.signUp(this.registerForm.value).then(
    //   async (res) => {

    //   },
    //   async (err) => {
    //     this.loading = false;
    //     alert(err.message);
    //   }
    // );
  }

  createRegisterForm() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      first_name: ['', Validators.required],
      second_name: ['', Validators.required],
      reception_number: ['', Validators.required],
      patronymic: [''],
      services: new FormArray([], minSelectedCheckboxes(1)),
    });
  }

  ngOnInit() {}

  onSubmit() {}
}
function minSelectedCheckboxes(min = 1) {
  const validator: ValidatorFn = (formArray: FormArray) => {
    const totalSelected = formArray.controls
      .map((control) => control.value)
      .reduce((prev, next) => (next ? prev + next : prev), 0);

    return totalSelected >= min ? null : { required: true };
  };

  return validator;
}
