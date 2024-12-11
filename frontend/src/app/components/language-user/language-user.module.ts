import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { LanguageUserRoutingModule } from './language-user-routing.module';
import { LanguageUserComponent } from './language-user.component';

@NgModule({
  declarations: [
    LanguageUserComponent,
    
  ],
  imports: [
    LanguageUserRoutingModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [
  ],
  entryComponents: [
  ]
})
export class LanguageUserModule { }
