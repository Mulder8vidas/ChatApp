import {LoginModel} from "../model/loginModel";
import {BehaviorSubject, Observable} from "rxjs";
import {RespuestaModel} from "../model/respuestaModel";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlLogin='http://localhost:8080/login'
  logeadoUser=new BehaviorSubject(false);
  $obsLogeado=this.logeadoUser.asObservable();
  nombreUser:BehaviorSubject<any>=new BehaviorSubject(null);
  $obsNombre=this.nombreUser.asObservable();
  constructor(private http: HttpClient) { }
  postData(data:LoginModel):Observable<RespuestaModel>{
    return this.http.post<RespuestaModel>(this.urlLogin,data);
  }
}
