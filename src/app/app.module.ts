import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';

import { ChatHomeComponent } from './pages/chat-home/chat-home.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ApiService} from "./service/apiservice";
import {HttpClientModule} from "@angular/common/http";
import {TableModule} from 'primeng/table';
import { ChatComponent } from './pages/chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatHomeComponent,
    ChatComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
