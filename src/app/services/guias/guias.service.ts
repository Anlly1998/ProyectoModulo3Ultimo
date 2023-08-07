import { Injectable } from '@angular/core';
import { ListGuiaI } from '../../components/models/list.guias';
import { ResponseI } from '../../components/models/response.interface';
import { GuiaI } from '../../components/models/guia.interface';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GuiasService {

  url:string = 'http://localhost:8000/api/';

  constructor( private http:HttpClient) { }

  //Lista de guias
  getAllguias(): Observable<ListGuiaI[]>{
    let direccion = this.url + "guias";
    return this.http.get<ListGuiaI[]>(direccion);
  }

  //Actualizar guia
  getSingleGuia(guiaId:any):Observable<GuiaI>{
    let direccion = this.url + "info-guia/" + guiaId;
    return this.http.get<GuiaI>(direccion);
  }

  //put
  putGuia(form:GuiaI):Observable<ResponseI>{
    let direccion = this.url + "update-guia";
    return this.http.put<ResponseI>(direccion, form);
  }

  //Guarduar guia
  postGuia(form:GuiaI):Observable<ResponseI>{
    let direccion = this.url + "register-guias";
    return this.http.post<ResponseI>(direccion, form);
  }


}
