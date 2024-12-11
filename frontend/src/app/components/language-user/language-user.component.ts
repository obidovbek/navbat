import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data.service';
import { HttpService } from 'src/app/shared/service/http.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-language-user',
  templateUrl: './language-user.component.html',
  styleUrls: ['./language-user.component.scss'],
})
export class LanguageUserComponent implements OnInit {
  environment;
  constructor(
    public dataService: DataService,
    public httpService: HttpService,
    private router: Router
  ) {
    this.environment = environment;
    this.getMenu(0);
  }

  ngOnInit(): void {}
  selectLanguage(lang: any) {
    this.dataService.selected.lang = lang;
    this.router.navigateByUrl('/queue-user');
  }

  getMenu(i: number) {
    if (this.dataService.menu) {
      return;
    }
    this.httpService.getMenu().subscribe(
      (res: any) => {
        console.log(res);
        // if (res.status === 200) {
        this.dataService.menu = res;
        localStorage.setItem('menu', JSON.stringify(res));
        // } else {
        //   alert('Bazaga ulana olmadim yana bir bor urinib ko‘ring!');
        //   window.location.reload();
        // }
      },
      async (error) => {
        if (i < 2) {
          setTimeout(() => {
            this.getMenu(i + 1);
          }, 1000);
        } else {
          // alert("Bazaka ulana olmadim, oflayn rejimda ishlayapti!");
          this.dataService.menu = await localStorage.getItem('menu');
          this.dataService.menu = JSON.parse(this.dataService.menu);
        }
      }
    );
  }
}
