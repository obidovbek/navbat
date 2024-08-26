import * as Chartist from 'chartist';
import { ChartEvent, ChartType } from 'ng-chartist';

export interface Validator {
  name: string;
  validator?: any;
  message: string;
  type?: string;
}
export interface FieldConfig {
  label?: string;
  name?: string;
  inputType?: string;
  options?: string[];
  collections?: any;
  type: string;
  value?: any;
  validations?: Validator[];
  comment?: string;
  fileSave?: boolean;
  pvoNames?: boolean;
  grade?: string;
  // onUpload?: (event: any) => string;
}
export interface FieldData {
  id: string;
  config: FieldConfig[];
  title: string;
  coeff: number;
  status?: FieldDataStatus;
}
export interface FieldDataStatus {
  title?: string;
  content?: string;
}
export interface PvoKafInter{
      fname?: string,
      lname?: string,
      patronymic?: string,
      fakul?: string,
      kafed?: string,
      added_id?: string
}
export interface Chart {
  type: ChartType;
  data: Chartist.IChartistData;
  options?: any;
  responsiveOptions?: any;
  events?: ChartEvent;
  plotOptions?: any
}
