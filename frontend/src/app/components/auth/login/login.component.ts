import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../shared/service/auth.service';
import { HttpService } from 'src/app/shared/service/http.service';
import { DataService } from 'src/app/shared/service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  @ViewChild('tabSet', { static: false }) tabSet;
  public loginForm: FormGroup;
  public registerForm: FormGroup;
  public resetPwForm: FormGroup;

  loading: boolean = false;
  lostPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private httpService: HttpService,
    private dataService: DataService,
    private formBuilder: FormBuilder
  ) {
    this.createLoginForm();
    this.createRegisterForm();
    this.recoverPass();
  }

  async login() {
    console.log('login', this.loginForm.value);
    try {
      // this.loading = true;
      const user: any = await this.httpService.login(this.loginForm.value);
      console.log('login', user);
      this.dataService.user = user;
      localStorage.setItem('jwtToken', user.token);
      if (user) {
        if (user.role === 'OFFICER') {
          return this.router.navigateByUrl('/queue-officer');
        } else if (user.role === 'ADMIN') {
          return this.router.navigateByUrl('/queue');
        }
      }
    } catch (error) {
      alert('Kirishda hatolik boldi');
      console.log(error);
    }
    // this.auth.signIn(this.loginForm.value).subscribe(
    //   user => {
    //     this.loading = false;
    //     this.router.navigateByUrl('/home');
    //   },
    //   async err => {
    //     this.loading = false;
    //     alert(err.message);
    //   }
    // );
  }
  changeTab(e) {
    if (e.nextId !== 'recoverTab') {
      this.lostPassword = false;
    }
  }
  async register() {
    this.loading = true;

    this.auth.signUp(this.registerForm.value).then(
      async (res) => {
        alert("Foydalanuvchi muvaffaqiyatli qo'shildi!");
        this.router.navigateByUrl('/home');
        this.loading = false;
      },
      async (err) => {
        alert(err.message);
        this.loading = false;
      }
    );
  }
  lostLink() {
    this.lostPassword = true;
    setTimeout(() => {
      this.tabSet.select('recoverTab');
    }, 100);
  }
  resetPassword() {
    this.resetPw(this.resetPwForm.value.email);
  }
  async resetPw(email) {
    this.loading = true;
    this.auth.resetPw(email).then(
      async (res) => {
        this.lostPassword = false;
        alert('Emailni tekshiring!');
        this.loading = false;
      },
      async (err) => {
        alert(err.message);
        this.loading = false;
      }
    );
  }
  createLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  createRegisterForm() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
    });
  }
  recoverPass() {
    this.resetPwForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {}
  owlcarousel = [
    {
      title: 'Welcome to Multikart',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    },
    {
      title: 'Welcome to Multikart',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    },
    {
      title: 'Welcome to Multikart',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    },
  ];
  owlcarouselOptions = {
    loop: true,
    items: 1,
    dots: true,
  };

  onSubmit() {}
}
