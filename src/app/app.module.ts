import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardModule } from './components/dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { SalesModule } from './components/sales/sales.module';
import { PagesModule } from './components/pages/pages.module';
import { UsersModule } from './components/users/users.module';

import { SettingModule } from './components/setting/setting.module';;
import { ReportsModule } from './components/reports/reports.module';
import { AuthModule } from './components/auth/auth.module';


import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestore } from '@angular/fire/firestore';
import { SimpleModalModule } from 'ngx-simple-modal';

import { HttpClientModule } from '@angular/common/http';

import { environment } from './../environments/environment.prod';
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
// import { MatSliderModule } from '@angular/material/slider';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
// const config: SocketIoConfig = { url: 'http://213.230.99.94:55000', options: { transports : ['websocket'] } };
const config: SocketIoConfig = { url: 'http://192.168.10.0:3001', options: { transports : ['websocket'] } };

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    DashboardModule,
    SettingModule,
    ReportsModule,
    AuthModule,
    SharedModule,
    SalesModule,
    PagesModule,
    UsersModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    SimpleModalModule.forRoot({container: "modal-container"}),
    HttpClientModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(){
    firebase.initializeApp(environment.firebaseConfig);
    firebase.database();
    firebase.storage();
  }
}
