import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NavService, Menu } from '../../service/nav.service';
import { DataService } from '../../service/data.service';
import { HttpService } from '../../service/http.service';
import { AuthService, userInt } from '../../service/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent {

  public menuItems: Menu[];
  public url: any;
  public fileurl: any;
  checkFieldLength = 0;
  fieldsRejectedLength = 0;
  user: userInt;
  constructor(
    private router: Router, 
    public navServices: NavService, 
    private dataService: DataService,
    private authService: AuthService,
    private httpService: HttpService
  ) {
    this.navServices.items.subscribe(menuItems => {
      this.menuItems = menuItems
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          menuItems.filter(items => {
            if (items.path === event.url)
              this.setNavActive(items)
            if (!items.children) return false
            items.children.filter(subItems => {
              if (subItems.path === event.url)
                this.setNavActive(subItems)
              if (!subItems.children) return false
              subItems.children.filter(subSubItems => {
                if (subSubItems.path === event.url)
                  this.setNavActive(subSubItems)
              })
            })
          })
        }
      })
    })
    // this.authService.user.subscribe(user=>{
    //   this.user = user;
    //   switch (user.role) {
    //     case "ADMIN":
    //       this.checkField(0);
    //       break;
    //     case "PVO":
    //       this.fieldsRejected(0);
    //       break;        
    //     default:
    //       // code...
    //       break;
    //   }
    // })
  }
  // checkField(i){
  //   if (i===0) {
  //     this.dataService.checkFieldLength$.subscribe(res=>{
  //       this.checkFieldLength = res
  //     })
  //   }
  //   this.httpService.getDoc(["checkfield"]).subscribe(data => {
  //     if (data) {
  //       this.dataService.checkFieldLength$.next((Object.keys(data)).length)
  //       this.dataService.checkField$.next(data)
  //     }
  //   }, error=>{
  //     if (i<10) {
  //       setTimeout(()=>{
  //         this.checkField(i+1);
  //       },1000)
  //     }
  //   })
  // }
  // fieldsRejected(i){
  //   if (i===0) {
  //     this.dataService.fieldsRejected$.subscribe(res=>{
  //       this.fieldsRejectedLength = res;
  //     })
  //   }
  //   this.httpService.getDoc(["fieldsRejected"]).subscribe(data => {
  //       // console.log('data 5: ',data);
  //     if (data) {
  //       var arr = data;
  //       var arrNew = [];
  //       (Object.keys(arr)).forEach((key)=>{
  //           if (arr[key] && (this.user.email === (arr[key][(arr[key]).length-1].user))) {
  //             arrNew.push(arr[key])
  //           }
  //       // })
  //       })
  //       this.dataService.fieldsRejected$.next(arrNew.length)
  //     }
  //   }, error=>{
  //     if (i<10) {
  //       setTimeout(()=>{
  //         this.fieldsRejected(i+1);
  //       },1000)
  //     }
  //   })
  // }
  // Active Nave state
  setNavActive(item) {
    this.menuItems.filter(menuItem => {
      if (menuItem != item)
        menuItem.active = false
      if (menuItem.children && menuItem.children.includes(item))
        menuItem.active = true
      if (menuItem.children) {
        menuItem.children.filter(submenuItems => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true
            submenuItems.active = true
          }
        })
      }
    })
  }

  // Click Toggle menu
  toggletNavActive(item) {
    if (!item.active) {
      this.menuItems.forEach(a => {
        if (this.menuItems.includes(item))
          a.active = false
        if (!a.children) return false
        a.children.forEach(b => {
          if (a.children.includes(item)) {
            b.active = false
          }
        })
      });
    }
    item.active = !item.active
  }

  //Fileupload
  readUrl(event: any) {
    if (event.target.files.length === 0)
      return;
    //Image upload validation
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    // Image upload
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.url = reader.result;
    }
  }

}
