import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MalTypeService {


  constructor(private httpClient: HttpClient) { }
  path = "http://localhost:60805/api"

  getMalType(pageIndex: number = 0, pageSize: number = 10): Observable<any> {
    const url = `${this.path}/MalTypes?PageIndex=${pageIndex}&PageSize=${pageSize}`;
    return this.httpClient.get(url);
  }
}
