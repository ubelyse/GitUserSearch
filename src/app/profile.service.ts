import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Userclass } from './userclass';
import {environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  user:Userclass

  constructor(private http:HttpClient) {
    console.log("service is now")
    this.user= new Userclass('','',0,0,0, new Date())
  }

  getProfile(){
    interface ApiResponse{
      user:string;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apikey).toPromise().then(response=>{
        this.user.username = response.user

        resolve()
      },
      error=>{
        this.user.username = "belyse"
  
        reject(error)
      })
    })
    return promise
  }
}
