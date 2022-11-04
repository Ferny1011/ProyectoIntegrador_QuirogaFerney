import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skills } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  URL = environment.URL + "skill/";

  constructor(private HttpClient: HttpClient) { }

  public lista(): Observable<Skills[]> {
    return this.HttpClient.get<Skills[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Skills> {
    return this.HttpClient.get<Skills>(this.URL + `detail/${id}`);
  }

  public save(skill: Skills): Observable<Skills> {
    return this.HttpClient.post<any>(this.URL + 'create', skill);
  }

  public update(id: number, skill: Skills): Observable<any> {
    return this.HttpClient.put<any>(this.URL + `update/${id}`, skill);
  }

  public delete(id: number): Observable<any> {
    return this.HttpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
