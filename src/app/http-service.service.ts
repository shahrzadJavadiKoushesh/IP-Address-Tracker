import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient,) { }

  public url = "https://geo.ipify.org/api/v2/country,city?apiKey=at_fi2fk5FunRtfBcGEAXUoJSMjLNcli&ipAddress=" ;

  getLocation(ipAddress: string) {
    return this.http.get(this.url + ipAddress);
  }
}