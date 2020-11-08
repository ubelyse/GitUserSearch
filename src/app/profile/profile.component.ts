import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile.service';
import {Userclass} from '../userclass'
import { Repo } from '../repo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  
  userclass:Userclass;
  repo:Repo[];

  userName=""

  constructor (private profileservice:ProfileService,private router:Router) {}

  SearchName(){
    this.profileservice.profileRequest(this.userName)
    this.profileservice.repositoryrequest(this.userName)
  }

  ngOnInit(){
    this.profileservice.profileRequest('ubelyse');
    this.profileservice.repositoryrequest('helloworld')
         
    this.userclass=this.profileservice.userclass
    this.repo=this.profileservice.repo
    console.log(this.repo)
  }

}
