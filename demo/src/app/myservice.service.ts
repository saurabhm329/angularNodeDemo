import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http: Http) { }

  getJsonResponce(){
    return this.http.get("./users/getdata")
        .pipe(map(response => response.json()))
  }  
  
}
