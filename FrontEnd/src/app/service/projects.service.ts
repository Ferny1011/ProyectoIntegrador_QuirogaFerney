import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Projects } from '../model/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  URL = environment.URL + "projectos/";

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Projects[]> {
    return this.httpClient.get<Projects[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Projects> {
    return this.httpClient.get<Projects>(this.URL + `detail/${id}`);
  }

  public save(projects: Projects): Observable<Projects> {
    return this.httpClient.post<any>(this.URL + 'create', projects);
  }

  public update(id: number, projects: Projects): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, projects);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
