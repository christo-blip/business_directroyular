import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SelectedServiceService {

  private apiUrl = 'http://localhost/business-directory/retrivedata.php';


  constructor(private http:HttpClient) { }

  getCategoryData(category: string): Observable<any[]> {
    const headers = new HttpHeaders({
     'Content-Type': 'application/json'
    });
    const body ={category};
    return this.http.post<any[]>(this.apiUrl, body,{ headers });
  }
}
