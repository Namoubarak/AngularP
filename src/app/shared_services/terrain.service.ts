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
  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/terrains');
  }
  remove(id:string){
    
   return this.http.delete('//localhost:8080/terrains/'+id);
  }
  save(nom,lieu){
    this.terrain.nom=nom;
    this.terrain.lieu=lieu;
    return this.http.post('//localhost:8080/terrains',this.terrain).toPromise;
  }
}
