import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public url = "https://geo.ipify.org/api/v2/country?apiKey=at_fi2fk5FunRtfBcGEAXUoJSMjLNcli&ipAddress=91.232.65.1";

  getLocation() {
    return this.http.get(this.url);
  }
}
