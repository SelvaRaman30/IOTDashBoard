import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  sites = ["Site 1" , "Site 2"]
  constructor() { }

  ngOnInit() {
  }

  SelectionChange(event){
    console.log(event);
  }

}
