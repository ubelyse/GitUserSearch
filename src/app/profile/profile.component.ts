import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile.service';
import {Userclass} from '../userclass'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  userclass:Userclass[];

  constructor (private profserv:ProfileService) { 
    this.userclass=this.userclass;
  }

  ngOnInit(){
    this.profserv.profileRequest;
  }

}
