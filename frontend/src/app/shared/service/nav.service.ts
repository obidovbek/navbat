import { Injectable, HostListener, Inject } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { WINDOW } from './windows.service';
import { DataService } from './data.service';
import { AuthService } from './auth.service';
// Menu
export interface Menu {
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  badgeType?: string;
  badgeValue?: string;
  active?: boolean;
  bookmark?: boolean;
  children?: Menu[];
  indexId?: string;
  status?: string;
}

@Injectable({
  providedIn: 'root',
})
export class NavService {
  public screenWidth: any;
  public collapseSidebar: boolean = false;

  constructor(
    @Inject(WINDOW) private window,
    private dataService: DataService,
    private authService: AuthService
  ) {
    this.onResize();
    if (this.screenWidth < 991) {
      this.collapseSidebar = true;
    }
    if (this.dataService.user) {
      switch (this.dataService.user.role) {
        case 'ADMIN':
          this.getMenuItemsAdmin();
          break;
        case 'OFFICER':
          this.getMenuItemsPvo();
          // code...
          break;
        default:
          // code...
          break;
      }
    }
  }

  // Windows width
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenWidth = window.innerWidth;
  }
  getMenuItemsPvo() {
    // this.MENUITEMS = [
    // 	{
    // 		title: 'Uy', path: '/home', icon: 'home', type: 'link', active: false
    // 	},
    // 	{
    // 		title: 'Ma\'lumotlar', icon: 'file-text', type: 'sub', active: false, children: []
    // 	},
    // 	{
    // 		title: 'E\'lonlar', path: '/announce', icon: 'twitch', type: 'link', active: false
    // 	},
    // 	{
    // 		title: 'Tekshirilayotgan', path: '/being-checked', icon: 'help-circle', type: 'link', active: false
    // 	},
    // 	{
    // 		title: 'Rad etilgan', path: '/rejected-field', icon: 'thumbs-down', type: 'link', active: false
    // 	},
    // 	{
    // 		title: 'Baholash', icon: 'sidebar', type: 'sub', active: false, children: [
    // 			{ path: '/rating/fakul-table', title: 'Fakultet', type: 'link' },
    // 			{ path: '/rating/kaf-table', title: 'Kafedra', type: 'link' },
    // 			{ path: '/rating/teachers', title: 'O\'qituvchilar', type: 'link' },
    // 		]
    // 	}
    // ]
    // this.dataService.field$.subscribe(fields=>{
    // 	this.MENUITEMS = [
    // 		{
    // 			title: 'Uy', path: '/home', icon: 'home', type: 'link', active: false
    // 		},
    // 		{
    // 			title: 'Ma\'lumotlar', icon: 'file-text', type: 'sub', active: false, children: []
    // 		},
    // 		{
    // 			title: 'E\'lonlar', path: '/announce', icon: 'twitch', type: 'link', active: false
    // 		},
    // 		{
    // 			title: 'Tekshirilayotgan', path: '/being-checked', icon: 'help-circle', type: 'link', active: false
    // 		},
    // 		{
    // 			title: 'Rad etilgan', path: '/rejected-field', icon: 'thumbs-down', type: 'link', active: false
    // 		},
    // 		{
    // 			title: 'Baholash', icon: 'sidebar', type: 'sub', active: false, children: [
    // 				{ path: '/rating/fakul-table', title: 'Fakultet', type: 'link' },
    // 				{ path: '/rating/kaf-table', title: 'Kafedra', type: 'link' },
    // 				{ path: '/rating/teachers', title: 'O\'qituvchilar', type: 'link' },
    // 			]
    // 		}
    // 	]
    // 	this.items.next(this.MENUITEMS);
    // })
    // this.items.next(this.MENUITEMS);
  }
  getMenuItemsAdmin() {
    this.MENUITEMS = [
      {
        title: 'Menu qo‘shish',
        path: '/queue',
        icon: 'home',
        type: 'link',
        active: false,
      },
      {
        title: 'Foydalanuvchilar',
        icon: 'user-plus',
        type: 'sub',
        active: false,
        children: [
          {
            path: '/users/register-new',
            title: 'Yangi foydalanuvchi',
            type: 'link',
          },
          {
            path: '/users/list-user',
            title: "Foydalanuvchilar ro'yhati",
            type: 'link',
          },
        ],
      },
    ];

    // this.dataService.field$.subscribe(fields=>{
    // 	this.MENUITEMS = [
    // 		{
    // 			title: 'Uy', path: '/queue', icon: 'home', type: 'link', active: false
    // 		},
    // 		{
    // 			title: 'Foydalanuvchilar', icon: 'user-plus', type: 'sub', active: false, children: [
    // 				{ path: '/users/register-new', title: 'Yangi foydalanuvchi', type: 'link' },
    // 			]
    // 		}
    // 	]
    // 	this.items.next(this.MENUITEMS);
    // })
    this.items.next(this.MENUITEMS);
  }

  MENUITEMS: Menu[] = [];
  // Array
  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
function replaceAll(str, from, to) {
  var n = '';
  if (str) {
    for (let g of str) {
      if (g === from) {
        g = to;
      }
      n += g;
    }
  }
  return n;
}
