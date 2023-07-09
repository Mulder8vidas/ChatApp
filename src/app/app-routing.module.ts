import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {ChatHomeComponent} from "./pages/chat-home/chat-home.component";
import {ChatComponent} from "./pages/chat/chat.component";


const routes: Routes = [
  {path : '', component :LoginComponent},
  {path : 'chatHome', component :ChatHomeComponent},
  {path:'chat', component:ChatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
