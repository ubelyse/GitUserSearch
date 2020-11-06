import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string

  constructor(private http:HttpClient) {
    console.log("service is now")
    this.username='ubelyse'
  }

  getProfile(){
    this.http.get("https://api.github.com/users/"+ this.username)
  }
}
