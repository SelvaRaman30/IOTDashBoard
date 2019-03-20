import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  sites = ["Site 1" , "Site 2"]
  constructor(private router : Router) { }

  ngOnInit() {
  }

  SelectionChange(event){
    console.log(event);
  }

  logout($event){
    this.router.navigate(['/login']);
  }

}
