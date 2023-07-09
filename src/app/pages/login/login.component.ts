import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginModel} from "../../model/loginModel";
import {ApiService} from "../../service/apiservice";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form= new FormGroup({
    email :new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)]),
    password:new FormControl('',Validators.required)
  })

  constructor(private formBuilder: FormBuilder,private adminService : ApiService, private router : Router) {}


  Login(){

    let usuario=this.form.controls.email.value;
    let clave=this.form.controls.password.value;

    let data:LoginModel={
      username:usuario==null ? "":usuario,
      password:clave==null ? "":clave
    }
    this.adminService.postData(data).subscribe(value => {
      alert(value.respuesta);
      if(value.respuesta=="Usuario Logeado"){
        this.router.navigate(['/chatHome'])
        localStorage.setItem("logeado","1")
        localStorage.setItem("usuario",usuario==null ? "":usuario)
        this.adminService.nombreUser.next(usuario==null ? "":usuario)
        this.adminService.logeadoUser.next(true)
      }else{
        localStorage.clear();
        this.adminService.logeadoUser.next(false)
      }



    })


  }

  onFileSelected(event: any) {

    const file: File = event.target.files[0];
    this.convertToBase64(file);

  }
  convertToBase64(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = reader.result as string;
      // Aquí puedes hacer lo que necesites con la imagen en formato Base64

      this.base64image=base64String;
    };
    reader.onerror = (error) => {
      console.log('Error al convertir la imagen a Base64:', error);
    };
  }

  base64image:string="";
}
