import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Request } from './request';
import { Requestout } from './requestout';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable({providedIn:'root'})
export class ApiService {
   
  baseURL: string = "https://appservice-poc01.azurewebsites.net/api/tax-report/process";
 
  constructor(private http: HttpClient) {
  }
 
 
  ejecutar(request:Requestout): Observable<any> {
    const headers = { 'content-type': 'application/json'}          
    const body=JSON.stringify(request);
    console.log(body)
    return this.http.post(this.baseURL, body,{'headers':headers})
  }
  
  download(fileUrl: string): Observable<any> {
    return this.http.get(fileUrl, { responseType: 'arraybuffer' });    
  }
}