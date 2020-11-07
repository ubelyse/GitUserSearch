import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Userclass } from './userclass';
import {environment } from '../environments/environment';
import {Repo} from '../app/repo'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  userclass:Userclass;
  repo:Repo[];

  constructor(private http:HttpClient) {
    
    this.userclass=new Userclass('','',0,0,0,new Date())
    this.repo= []
   }
   profileRequest(userInput){
  
    var userName=userInput;
    
    interface ApiResponse{
      name:string;
      location:string;
      followers:number;
      following:number;
      public_repos:number;
      
      
     
    }

    let promise =new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>('https://api.github.com/ubelyse/' + userName+'?access_token='+ environment.apikey).toPromise().then(response=>{
          
          this.userclass.username=response.name
          this.userclass.location=response.location
          this.userclass.followers=response.followers
          this.userclass.following=response.following
          this.userclass.repository=response.public_repos
         
        
          resolve()
      },
      error=>{
              this.userclass.username="Sorry the user name can not be found!"

              reject(error)
          }
      )
  })

  return promise
  
}

repositoryrequest(userInput){
  
  var userName=userInput;
  
  interface ApiReposito{
    name:string;
    description:string;
    
    
   
  }

  let promises =new Promise((resolve,reject)=>{
    this.http.get<ApiReposito>('https://api.github.com/users/'+userName+'/repos?access_token='+ environment.apikey).toPromise().then(response=>{
        for (var i in response){
          console.log(i)
          this.repo.push(new Repo(response[i].name,response[i].description))
        }
        
        // this.repository.description=response.description
      //  for(let counter in response){
      //    this.all.push(response[counter])
      //  }
      // console.log(this.repository)
        resolve()
    },
    error=>{
            // this.repository.name="Sorry the repository can not be found!"
            // this.repository.description="??????????????????????"

            reject(error)
        }
    )
})

return promises
}
}
