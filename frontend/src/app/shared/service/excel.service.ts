import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';


@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() { }


  exportAsExcelFile(element, ){
             // console.log('element', element)
     const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

     const wb: XLSX.WorkBook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

     XLSX.writeFile(wb, 'Excel' + '_export_' + new Date().getTime() + EXCEL_EXTENSION);

  }


}
