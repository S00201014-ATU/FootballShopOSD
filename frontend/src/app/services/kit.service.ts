import { Kit_BY_ID_URL } from './../shared/constants/urls';
import { provideHttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Kit } from './../shared/models/Kit';
import { Injectable } from '@angular/core';
import { sample_kits } from '../../data';
import { HttpClient } from '@angular/common/http';
import { KITSS_BY_SEARCH_URL, KITS_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class KitService {

  constructor(private http:HttpClient) { }



  getAllKitsBySearchTerm(searchTerm:string){
    return this.http.get<Kit[]>(KITSS_BY_SEARCH_URL + searchTerm);
  }

  getKitById(kitId:string):Observable<Kit>{
    return this.http.get<Kit>(Kit_BY_ID_URL + kitId)
  }


  getAll():Observable<Kit[]>{
    return this.http.get<Kit[]>(KITS_URL);
  }


}
