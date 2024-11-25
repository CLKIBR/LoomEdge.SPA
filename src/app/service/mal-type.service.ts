import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MalTypeService {

  private path = "http://localhost:60805/api";

  constructor(private httpClient: HttpClient) { }

  // MalType verilerini sayfalama ile almak için
  getMalType(pageIndex: number = 0, pageSize: number = 10): Observable<any> {
    const url = `${this.path}/MalTypes?PageIndex=${pageIndex}&PageSize=${pageSize}`;
    return this.httpClient.get(url).pipe(
      catchError(error => {
        console.error("Veri alınırken hata oluştu:", error);
        return of({ error: "Veri alınırken hata oluştu" });  // Hata durumunda geri dönülecek bir değer
      })
    );
  }

  // MalType silme işlemi
  deleteMalType(id: string): Observable<any> {
    const url = `${this.path}/MalTypes/${id}`;
    console.log(`Silme isteği: ${url}`);
    return this.httpClient.delete(url).pipe(
      catchError(error => {
        console.error("Silme işlemi sırasında hata oluştu:", error);
        return of({ error: "Silme işlemi sırasında hata oluştu" });  // Hata durumunda geri dönülecek bir değer
      })
    );
  }

  getMalTypeById(id: string): Observable<any> {
    const url = `${this.path}/MalTypes/${id}`; // id'ye göre veri çekmek için URL
    return this.httpClient.get<any>(url).pipe(
      catchError(error => {
        console.error("Veri alınırken hata oluştu:", error);
        return of({ error: "Veri alınırken hata oluştu" });  // Hata durumunda geri dönecek bir değer
      })
    );
  }

  updateMalType(id: string, updatedMalType: string): Observable<any> {
    return this.httpClient.put<any>(`${this.path}/malTypes/`, updatedMalType, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }
}
