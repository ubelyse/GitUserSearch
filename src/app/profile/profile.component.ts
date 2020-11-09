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

  githubusername="";

  constructor (private profileservice:ProfileService) {}

  SearchName(){
    this.profileservice.profileRequest(this.githubusername)
    this.profileservice.repositoryrequest(this.githubusername)
  }

  ngOnInit(){
    this.profileservice.profileRequest('ubelyse');
    this.profileservice.repositoryrequest('ubelyse');
         
    this.userclass=this.profileservice.userclass
    this.repo=this.profileservice.repo
    console.log(this.repo)
  }

}
