import { Component } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';

export interface PromptModel {
  title:string;
  question:string;
}

@Component({
  selector: 'prompt',
  template: `
    <div class="modal-content">
      <div class="modal-header">
        <h4>{{title || 'Prompt'}}</h4>
      </div>
      <div class="modal-body">
        <label>{{question}}</label>
        <input type="text" class="form-control" [(ngModel)]="message" name="name" />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-danger" (click)="close()">Bekor qilish</button>
        <button type="button" class="btn btn-primary" (click)="apply()">Tasdiqlash</button>
      </div>
    </div>
  `
})
export class PromptComponent extends SimpleModalComponent<PromptModel, string> implements PromptModel {
  title: string;
  question: string;
  message: string = '';
  constructor() {
    super();
  }
  apply() {
    this.result = this.message;
    this.close();
  }
}
  // showPrompt() {
  //   this.SimpleModalService.addModal(PromptComponent, {
  //     title: 'Name dialog',
  //     question: 'What is your name?: '})
  //     .subscribe((message) => {
  //       // We get modal result
  //       this.promptMessage = message;
  //     });
  // }