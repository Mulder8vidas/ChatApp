import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-chat-home',
  templateUrl: './chat-home.component.html',
  styleUrls: ['./chat-home.component.css']
})
export class ChatHomeComponent {
  product: any[]=[];
  constructor(private router: Router) {
  }
 redirigir(){
   this.router.navigate(['/chat']);

 }

}
