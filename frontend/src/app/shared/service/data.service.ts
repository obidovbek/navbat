import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {
  FieldConfig,
  FieldData,
  PvoKafInter,
  Chart,
} from '../interface/field.interface';
import { environment } from 'src/environments/environment.prod';

interface changes {
  idx1?: number;
  idx2?: number;
  queue?: number;
  date?: number;
  idx2_name?: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  user: any;
  field: FieldData[] = [];
  field$ = new BehaviorSubject<FieldData[]>(this.field);
  menu: any;
  selected = { lang: '', index: 0 };
  changes: changes[] = [];
  menuNew = {
    symbol: '',
    symbol_lang: {
      uz: '',
      ru: '',
      en: '',
    },
    title: {
      uz: '',
      ru: '',
      en: '',
    },
    inner_menu: [],
  };
  menuNewSub = {
    uz: '',
    ru: '',
    en: '',
    queue: {
      current: 1,
      overall: 1,
      date: 1,
    },
  };
  constructor() {}
}
