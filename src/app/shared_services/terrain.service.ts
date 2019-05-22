import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class TerrainService {
  terrain={
    nom:'',
    lieu:''
  }
  url='//localhost:8080/terrains'
  

  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get(this.url);
  }
  remove(id:string){
    
   return this.http.delete(this.url+'/'+id);
  }
  save(data :any){
    this.terrain.nom=data.nom;
    this.terrain.lieu=data.lieu;
    const options = {headers: {'Content-Type': 'application/json'}};
    console.log('data',this.terrain);
    return this.http.post(this.url,JSON.stringify(this.terrain),options).subscribe(data => {
      console.log('data',this.terrain);
  });
  }
  get(id:string):any{
    return this.http.get(this.url+'/'+id);
  }
}
