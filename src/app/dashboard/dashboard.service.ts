import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
url="http://localhost:3000/petition";
  constructor(private http: HttpClient) { }

  getList(){
  return this.http.get(this.url);
  }
  addPetition(petition:any){
    return this.http.post(this.url,petition)
  }
  getCurrentPetition(id:string){
    return this.http.get(`${this.url}/${id}`)
  }
}
