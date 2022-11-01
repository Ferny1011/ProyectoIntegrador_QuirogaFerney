import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HardSkills } from '../model/hard-skills';

@Injectable({
  providedIn: 'root'
})
export class HardskillsService {
  URL=environment.URL + "hard/";

  constructor(private HttpClient: HttpClient) { }

  public lista(): Observable<HardSkills[]>{
    return this.HttpClient.get<HardSkills[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<HardSkills>{
    return this.HttpClient.get<HardSkills>(this.URL + `detail/${id}`);
  }

  public save(hardSkills: HardSkills): Observable<HardSkills>{
    return this.HttpClient.post<any>(this.URL + 'create', hardSkills);
  }

  public update(id: number, hardSkills:HardSkills): Observable<any>{
    return this.HttpClient.put<any>(this.URL + `update/${id}`, hardSkills);
  }

  public delete(id: number): Observable<any>{
    return this.HttpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
