import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class TerrainService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/terrains');
  }
  remove(id:string){
    
   return this.http.delete('//localhost:8080/terrains/'+id);
  }
}
