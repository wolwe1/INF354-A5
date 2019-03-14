import { Component, OnInit } from '@angular/core';
import { Alert } from 'selenium-webdriver';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Style :Boolean = false;
  users : Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users = data
      console.log(this.users);
    });
  }

  onClick(){
    this.h1Style = !this.h1Style;
    this.data.firstClick();
  }
  
}
