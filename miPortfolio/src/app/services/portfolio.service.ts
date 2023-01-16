import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  url:string="https://portfolio-leandrolivera.koyeb.app/"
  constructor(private http:HttpClient) { }

  obtenerDatos():Observable<any>{
    console.log("El servicio Portfolio está funcionando ok.")
    return this.http.get<any>(this.url+"persona");
  }
}
