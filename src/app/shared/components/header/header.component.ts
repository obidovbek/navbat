import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavService } from '../../service/nav.service';
import { AuthService } from '../../service/auth.service';
import { saveAs } from 'file-saver'
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public right_sidebar: boolean = false;
  public open: boolean = false;
  public openNav: boolean = false;
  public isOpenMobile : boolean;
  user;
  otm_name = environment.otm_name;
  
  @Output() rightSidebarEvent = new EventEmitter<boolean>();

  constructor(public navServices: NavService, private authService: AuthService) { 
    this.authService.user.subscribe(user=>{
      this.user = user;
    })
  }

  collapseSidebar() {
    this.open = !this.open;
    this.navServices.collapseSidebar = !this.navServices.collapseSidebar
  }
  right_side_bar() {
    this.right_sidebar = !this.right_sidebar
    this.rightSidebarEvent.emit(this.right_sidebar)
  }

  openMobileNav() {
    this.openNav = !this.openNav;
  }

  signOut(){
    this.authService.signOut();
  }

  ngOnInit() {  }
  backUpDb(i){
    const baza = ['checkfield', 'fieldData', 'fieldsInform', 'fieldsRejected', 'lastId', 'pvoIns']
    // if (i<baza.length) {
    //   this.firebabeService.getDoc(baza[i]).then(snapshot=>{
    //     if (snapshot.exists()) {
    //       console.log('snapshot ', snapshot.val());
    //       const blob = new Blob([JSON.stringify(snapshot.val())], {type: "text/plain;charset=utf-8"});
    //       saveAs(blob, `${baza[i]}.txt`);
    //       setTimeout(()=>{
    //         this.backUpDb(i+1);
    //       }, 2000)
    //     }
    //   }).catch(error=>{
    //     alert('#536 xato ketti ' + error);
    //   })
    // }
  }
}
