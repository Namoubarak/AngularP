import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ArbitreServiceService {
  arbitre={
    cin:'',
    date_naissance:'',
    n_license:'',
    nom:'',
    prenom:'',
    photo:'' 	

  }
  url='//localhost:8080/arbitres'
  

  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get(this.url);
  }

  save(data :any){
    this.arbitre.cin=data.cin;
    this.arbitre.nom=data.nom;
    this.arbitre.date_naissance=data.date_naissance;
    this.arbitre.prenom=data.prenom;
    this.arbitre.n_license=data.n_license;
    this.arbitre.photo=data.photo
    const options = {headers: {'Content-Type': 'application/json'}};
    return axios.post(this.url,this.arbitre)
    .then(response=>{
      return response.data
    })
    .catch(e=>console.log(e));
   
  }

  get(id:string):any{
    return this.http.get(this.url+'/'+id);
    
  }
  update(data :any,id:string){
    this.arbitre.cin=data.cin;
    this.arbitre.nom=data.nom;
    this.arbitre.date_naissance=data.date_naissance;
    this.arbitre.prenom=data.prenom;
    this.arbitre.n_license=data.n_license;
    this.arbitre.photo=data.photo
    return axios.patch(this.url+'/'+id,this.arbitre).then(response=>{
      return response.data
    });
    //const options = {headers: {'Content-Type': 'application/json'}};
    //return this.http.patch(this.url+'/'+id,JSON.stringify(this.terrain),options).subscribe(data => {

  }
  remove(id:string){
    
    return this.http.delete(this.url+'/'+id);
   }
}
