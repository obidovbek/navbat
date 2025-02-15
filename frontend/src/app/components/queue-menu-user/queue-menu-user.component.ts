import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/service/data.service';
import { HttpService } from 'src/app/shared/service/http.service';
import { Router } from '@angular/router';
import { NgxPrintElementService } from 'ngx-print-element';
import { environment } from 'src/environments/environment.prod';
interface changes {
  idx1?: number;
  idx2?: number;
  queue?: number;
}

@Component({
  selector: 'app-queue-menu-user',
  templateUrl: './queue-menu-user.component.html',
  styleUrls: ['./queue-menu-user.component.scss'],
})
export class QueueMenuUserComponent implements OnInit {
  isDialogVisible = false;
  dialogContent = '';

  queue_number = '';
  queue_differ = 0;
  service_name = '';
  environment;
  row = this.dataService.selected.index;
  lang = this.dataService.selected.lang;
  symbol;
  constructor(
    public dataService: DataService,
    public httpService: HttpService,
    private router: Router,
    public print: NgxPrintElementService
  ) {
    this.environment = environment;
    if (!this.dataService.selected.lang)
      this.router.navigateByUrl('/#/infokios');
    this.symbol = this.dataService.menu[this.dataService.selected.index].symbol;
  }
  public config = {
    printMode: 'template-popup',
    popupProperties:
      'toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,fullscreen=yes',
    pageTitle: 'Hello World',
    // templateString: '<header>I\'m part of the template header</header>{{printBody}}<footer>I\'m part of the template footer</footer>',
    // stylesheets: [{ rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' }],
    // styles: ['.table { color: red; }', '.table td { color: green; }']
  };
  ngOnInit(): void {}
  selectSymbol() {
    return this.dataService.menu[this.dataService.selected.index].inner_menu;
  }
  openDialog(): void {
    console.log(environment.otm);
    if (environment.otm === 'tkti') {
      this.isDialogVisible = true;
      return;
    }
    this.dialogContent = this.queuePrintContent();
  }

  closeDialog(): void {
    this.isDialogVisible = false;
    this.router.navigateByUrl('infokios').then(() => window.location.reload());
  }
  async selectedItem(idx: number) {
    var changes: any = await localStorage.getItem('changes');
    this.dataService.changes = JSON.parse(changes);
    if (!this.dataService.changes) this.dataService.changes = [];
    const d = new Date();
    this.dataService.changes?.push({
      idx1: this.dataService.selected.index,
      idx2: idx,
      queue:
        this.dataService.menu[this.dataService.selected.index].inner_menu[idx]
          .queue.overall + 1,
      idx2_name:
        this.dataService.menu[this.dataService.selected.index].inner_menu[idx]
          .uz,
      date: d.getDate(),
    });
    console.log('item selected');
    this.httpService.addQueue(this.dataService.selected.index, idx).subscribe(
      (menu: any) => {
        // console.log(res);
        // if (res.status === 200) {
        this.dataService.menu = menu;
        this.dataService.changes = [];
        const selectedService =
          this.dataService.menu[this.dataService.selected.index].inner_menu[
            idx
          ];
        this.queue_number =
          this.dataService.menu[this.dataService.selected.index].symbol +
          (idx + 1).toString() +
          '-' +
          selectedService.queue.overall;
        this.queue_differ =
          selectedService.queue.overall - selectedService.queue.current;
        this.service_name = selectedService[this.lang];
        if (environment.otm !== 'tkti') {
          this.printElem(document.getElementById('queue_print').innerHTML);
        }
        localStorage.setItem(
          'changes',
          JSON.stringify(this.dataService.changes)
        );
        localStorage.setItem('menu', JSON.stringify(menu));
        this.openDialog();
        // } else {
        //   alert('Nimadur hato yana bir bor urinib ko‘ring!');
        // }
      },
      (error) => {
        console.log('oflayn');
        this.dataService.menu[this.dataService.selected.index].inner_menu[idx]
          .queue.overall++;
        localStorage.setItem(
          'changes',
          JSON.stringify(this.dataService.changes)
        );
        this.router.navigateByUrl('/#/infokios');
      }
    );
    // console.log(this.symbol, (this.dataService.menu[this.dataService.selected.index].inner_menu[idx])[(this.lang==="en")?"en":((this.lang==="ru")?"ru":"uz")])

    // alert('Navbat: '+ this.queue_number);
    // this.print?.print('queue_print');
    // setTimeout(() => {}, 3000);
  }
  navigateBack() {
    console.log('navigateBack');
    this.router.navigateByUrl('/queue-user');
  }
  queuePrintContent() {
    var queue_print =
      "<div id='queue_print' style='display:flex; font-size: 14px; justify-content: center;flex-direction: column;align-items: center;'>";
    queue_print += '<div>Sizning raqamingiz</div>';
    queue_print +=
      "<div style='font-size: 35px;font-weight: 900;padding: 8px 0;'>" +
      this.queue_number +
      '';
    queue_print +=
      '</div><div><strong>' + this.service_name + '</strong></div>';
    queue_print +=
      '<div>Sizdan oldin <strong>' +
      this.queue_differ +
      '</strong> ta navbat bor</div>';
    queue_print += '<div>Operator chaqirishini kuting</div>';
    queue_print += "<div style='margin-top:10px; font-size:1px;'>a</div>";

    queue_print += '</div>';
    return queue_print;
  }
  printElem(elem) {
    // var mywindow = window.open('', 'PRINT', 'height=400,width=600');
    // var oldWindow = window;
    var a1 = 'Sizning raqamingiz';
    if (this.lang === 'uz') {
      a1 = 'Sizning raqamingiz';
    } else if (this.lang === 'ru') {
      a1 = 'Sizning raqamingiz';
    } else if (this.lang === 'en') {
    }
    var queue_print =
      "<div id='queue_print' style='display:flex; font-size: 14px; justify-content: center;flex-direction: column;align-items: center;'>";
    queue_print += '<div>Sizning raqamingiz</div>';
    queue_print +=
      "<div style='font-size: 35px;font-weight: 900;padding: 8px 0;'>" +
      this.queue_number +
      '';
    queue_print +=
      '</div><div><strong>' + this.service_name + '</strong></div>';
    queue_print +=
      '<div>Sizdan oldin <strong>' +
      this.queue_differ +
      '</strong> ta navbat bor</div>';
    queue_print += '<div>Operator chaqirishini kuting</div>';
    queue_print += "<div style='margin-top:10px; font-size:1px;'>a</div>";

    if (this.environment.otm === 'ferpi') {
      queue_print +=
        "<div><svg version='1.0' xmlns='http://www.w3.org/2000/svg'";
      queue_print +=
        " width='100.000000pt' height='51.000000pt' viewBox='0 0 100.000000 51.000000'";
      queue_print += " preserveAspectRatio='xMidYMid meet'>";

      queue_print +=
        "<g transform='translate(0.000000,51.000000) scale(0.100000,-0.100000)'";
      queue_print += " fill='#000000' stroke='none'>";
      queue_print +=
        "<path d='M0 458 c0 -30 0 -31 20 -13 15 14 17 21 9 32 -19 22 -29 15 -29 -19z'/>";
      queue_print +=
        "<path d='M71 472 c-63 -34 -71 -63 -71 -269 0 -106 4 -183 9 -183 24 0 41 34 ";
      queue_print +=
        '41 82 0 44 2 49 18 43 60 -27 129 -12 162 35 24 34 26 99 5 140 -27 51 -106 ';
      queue_print +=
        '76 -157 49 -11 -6 -22 -8 -25 -5 -13 12 19 58 47 69 21 8 30 18 30 34 0 28 ';
      queue_print +=
        '-14 29 -59 5z m114 -167 c30 -30 32 -64 4 -99 -29 -37 -89 -37 -118 0 -62 79 ';
      queue_print += "43 170 114 99z'/>";
      queue_print +=
        "<path d='M333 423 c-15 -6 -18 -83 -3 -83 6 0 10 7 10 15 0 7 8 19 18 24 16 ";
      queue_print +=
        '10 16 10 0 11 -10 0 -18 5 -18 10 0 6 9 10 21 10 11 0 17 5 14 10 -7 11 -22 ';
      queue_print += "12 -42 3z'/>";
      queue_print +=
        "<path d='M600 415 c0 -8 4 -15 10 -15 5 0 7 7 4 15 -4 8 -8 15 -10 15 -2 0 -4 ";
      queue_print += "-7 -4 -15z'/>";
      queue_print +=
        "<path d='M414 391 c19 -7 19 -8 -3 -14 -23 -6 -25 -27 -3 -35 7 -2 10 2 6 12 ";
      queue_print +=
        '-3 9 -1 16 4 16 6 0 13 -8 15 -17 3 -10 5 -3 6 15 1 27 -2 32 -21 31 -21 0 ';
      queue_print += "-22 -1 -4 -8z'/>";
      queue_print +=
        "<path d='M471 368 c1 -21 3 -26 6 -13 3 11 12 26 21 33 14 11 13 12 -6 12 -18 ";
      queue_print += "0 -22 -5 -21 -32z'/>";
      queue_print +=
        "<path d='M529 383 c-5 -68 -5 -68 21 -68 33 0 42 35 8 36 l-23 0 23 9 c30 13 ";
      queue_print +=
        '29 40 -3 40 -17 0 -25 -6 -26 -17z m31 -3 c0 -5 -4 -10 -10 -10 -5 0 -10 5 ';
      queue_print +=
        '-10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z m5 -50 c-3 -5 -10 -10 -16 -10 -5 0 ';
      queue_print += "-9 5 -9 10 0 6 7 10 16 10 8 0 12 -4 9 -10z'/>";
      queue_print +=
        "<path d='M634 386 c-10 -26 4 -48 28 -44 17 2 23 10 23 28 0 18 -6 26 -23 28 ";
      queue_print +=
        '-13 2 -25 -3 -28 -12z m36 -16 c0 -11 -4 -20 -10 -20 -5 0 -10 9 -10 20 0 11 ';
      queue_print += "5 20 10 20 6 0 10 -9 10 -20z'/>";
      queue_print +=
        "<path d='M710 370 c0 -16 5 -30 10 -30 6 0 10 11 10 25 0 34 18 32 23 -2 4 ";
      queue_print += "-26 4 -26 6 5 1 28 -2 32 -24 32 -21 0 -25 -5 -25 -30z'/>";
      queue_print +=
        "<path d='M805 391 c17 -8 18 -10 3 -10 -11 -1 -18 -9 -18 -21 0 -15 7 -20 26 ";
      queue_print +=
        '-20 22 0 25 4 22 28 -2 21 -9 28 -28 29 -23 2 -23 2 -5 -6z m15 -31 c0 -5 -4 ';
      queue_print +=
        "-10 -10 -10 -5 0 -10 5 -10 10 0 6 5 10 10 10 6 0 10 -4 10 -10z'/>";
      queue_print +=
        "<path d='M320 261 c0 -23 5 -41 10 -41 6 0 10 4 10 9 0 5 9 11 21 14 32 9 22 ";
      queue_print +=
        '51 -13 55 -27 3 -28 1 -28 -37z m50 9 c0 -5 -7 -10 -15 -10 -8 0 -15 5 -15 10 ';
      queue_print += "0 6 7 10 15 10 8 0 15 -4 15 -10z'/>";
      queue_print +=
        "<path d='M480 260 c0 -22 3 -40 8 -40 4 0 6 18 4 40 -2 22 -6 40 -8 40 -2 0 ";
      queue_print += "-4 -18 -4 -40z'/>";
      queue_print +=
        "<path d='M870 260 c0 -22 5 -40 10 -40 6 0 10 5 10 11 0 8 6 7 17 -2 14 -12 ";
      queue_print +=
        '16 -12 11 1 -3 8 -1 23 4 33 5 9 6 17 2 17 -4 0 -13 -8 -20 -17 -12 -16 -13 ';
      queue_print += "-15 -14 10 0 15 -4 27 -10 27 -5 0 -10 -18 -10 -40z'/>";
      queue_print +=
        "<path d='M566 282 c-10 -16 7 -62 23 -61 10 0 11 2 4 6 -15 6 -17 33 -3 33 6 ";
      queue_print += "0 10 4 10 9 0 11 -28 22 -34 13z'/>";
      queue_print +=
        "<path d='M407 273 c-13 -12 -7 -51 9 -57 22 -8 22 -8 34 15 17 30 -20 66 -43 ";
      queue_print +=
        '42z m33 -28 c0 -8 -4 -15 -10 -15 -5 0 -10 7 -10 15 0 8 5 15 10 15 6 0 10 -7 ';
      queue_print += "10 -15z'/>";
      queue_print +=
        "<path d='M520 250 c0 -16 5 -30 10 -30 6 0 10 14 10 30 0 17 -4 30 -10 30 -5 ";
      queue_print += "0 -10 -13 -10 -30z'/>";
      queue_print +=
        "<path d='M621 262 c-14 -26 11 -63 30 -44 11 10 9 12 -6 13 -17 0 -17 2 3 10 ";
      queue_print +=
        '13 5 22 15 20 21 -7 21 -36 21 -47 0z m29 -2 c0 -5 -5 -10 -11 -10 -5 0 -7 5 ';
      queue_print += "-4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z'/>";
      queue_print +=
        "<path d='M689 266 c6 -7 9 -20 6 -28 -4 -9 1 -14 14 -14 11 0 17 4 15 8 -3 4 ";
      queue_print +=
        '0 17 6 28 6 12 7 20 1 20 -5 0 -12 -6 -15 -12 -5 -10 -7 -10 -12 0 -3 6 -10 ';
      queue_print += "12 -16 12 -7 0 -6 -5 1 -14z'/>";
      queue_print +=
        "<path d='M761 246 c1 -23 3 -26 6 -8 2 12 11 22 18 22 7 0 16 -10 18 -22 4 ";
      queue_print +=
        "-16 5 -13 4 7 -2 24 -7 30 -24 31 -20 1 -23 -4 -22 -30z'/>";
      queue_print +=
        "<path d='M830 250 c0 -16 5 -30 10 -30 6 0 10 14 10 30 0 17 -4 30 -10 30 -5 ";
      queue_print += "0 -10 -13 -10 -30z'/>";
      queue_print +=
        "<path d='M950 271 c0 -6 8 -11 18 -12 12 0 11 -3 -7 -10 -18 -7 -21 -12 -12 ";
      queue_print +=
        "-23 7 -8 21 -12 32 -9 29 8 22 57 -8 61 -13 2 -23 -1 -23 -7z'/>";
      queue_print +=
        "<path d='M320 150 c0 -22 5 -40 10 -40 6 0 10 18 10 40 0 22 -4 40 -10 40 -5 ";
      queue_print += "0 -10 -18 -10 -40z'/>";
      queue_print +=
        "<path d='M514 180 c-13 -13 -5 -70 10 -70 7 0 11 14 10 36 -2 41 -6 48 -20 34z'/>";
      queue_print +=
        "<path d='M608 178 c-9 -25 5 -68 21 -67 10 0 11 2 4 6 -15 5 -17 40 -4 45 5 2 ";
      queue_print += "3 8 -4 15 -10 9 -15 9 -17 1z'/>";
      queue_print +=
        "<path d='M738 178 c-9 -25 5 -68 21 -67 10 0 11 2 4 6 -15 5 -17 40 -4 45 5 2 ";
      queue_print += "3 8 -4 15 -10 9 -15 9 -17 1z'/>";
      queue_print +=
        "<path d='M360 141 c0 -17 5 -31 10 -31 6 0 10 9 10 19 0 11 5 23 10 26 6 4 10 ";
      queue_print +=
        '-5 10 -19 0 -14 5 -26 11 -26 6 0 9 12 7 28 -2 21 -9 28 -30 30 -25 3 -28 0 ';
      queue_print += "-28 -27z'/>";
      queue_print +=
        "<path d='M440 150 c0 -12 7 -20 18 -21 14 0 14 -2 -3 -9 -18 -8 -17 -9 8 -9 ";
      queue_print +=
        "33 -1 37 24 5 33 -22 7 -22 7 -3 16 19 8 19 9 -2 9 -17 1 -23 -5 -23 -19z'/>";
      queue_print +=
        "<path d='M560 140 c0 -16 5 -30 10 -30 6 0 10 14 10 30 0 17 -4 30 -10 30 -5 ";
      queue_print += "0 -10 -13 -10 -30z'/>";
      queue_print +=
        "<path d='M661 143 c-1 -29 2 -33 24 -33 22 0 25 4 24 33 -1 29 -2 29 -8 8 -9 ";
      queue_print += "-35 -29 -37 -34 -4 -4 27 -4 27 -6 -4z'/>";
      queue_print +=
        "<path d='M790 140 c0 -16 5 -30 10 -30 6 0 10 14 10 30 0 17 -4 30 -10 30 -5 ";
      queue_print += "0 -10 -13 -10 -30z'/>";
      queue_print += '</g>';
      queue_print += '</svg></div>';
    }

    // queue_print += "<div style='margin-top: 15px; width: 100px; height: 60px; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover; background-color: #000; border-radius: 26%;'></div>"
    // queue_print += "<img src='https://navbat.ferpi.uz/assets/images/queue/logo.png'>";
    queue_print += '</div>';

    window.document.write('<html><head>');
    window.document.write('</head><body >');
    window.document.write(queue_print);
    window.document.write('</body></html>');

    window.document.close(); // necessary for IE >= 10
    window.focus(); // necessary for IE >= 10*/

    window.print();
    window.close();
    // this.router.navigate(['/infokios']).then(() => {
    //   // After navigation is successful, reload the page
    //   window.location.reload();
    // });
  }
}
