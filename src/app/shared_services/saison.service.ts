import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})

export class SaisonService {
  

  url='//localhost:8080/saisons'
  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get(this.url);
  }
  remove(id:string){
    
   return this.http.delete(this.url+'/'+id);
  }
  save(data :any){
    
    const options = {headers: {'Content-Type': 'application/json'}};
    let saved = null;
    return axios.post(this.url,data)
    .then(response=>{
      return response.data
    })
    .catch(e=>console.log(e));
   
  }
  get(id:string):any{
    return this.http.get(this.url+'/'+id);
    
  }
  update(data :any,id:string){
   
  
    return axios.patch(this.url+'/'+id,data).then(response=>{
      return response.data
    });
    //const options = {headers: {'Content-Type': 'application/json'}};
    //return this.http.patch(this.url+'/'+id,JSON.stringify(this.terrain),options).subscribe(data => {

  }

}
