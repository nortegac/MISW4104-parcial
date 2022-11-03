import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Plant } from './plant';

@Injectable({
  providedIn: 'root',
})
export class PlantsService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getPlants(): Observable<Plant[]> {
    return this.http.get<Plant[]>(this.apiUrl);
  }
}
