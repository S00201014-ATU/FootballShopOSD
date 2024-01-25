import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Order } from "../shared/models/Order";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class OrderService{

  constructor(private http:HttpClient) {}


}
