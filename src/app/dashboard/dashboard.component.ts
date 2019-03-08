import { Component, OnInit, ViewChild } from '@angular/core';
import { MapComponent } from './map/map.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild(MapComponent) mapComponent:MapComponent;

  currentHeight:number;
  currentColumns:number;
  isMapShow:boolean    = true;
  isDataShow:boolean   = true;
  isMeterShow:boolean  = true;
  isReportsShow:boolean= true;
  isFullScreen:boolean = false;
  constructor() { }

  ngOnInit() {
    this.currentHeight = (window.innerHeight - 51) / 2;
    this.currentColumns = 2;
  }

  ngAfterViewInit() {

  }

  onResize(evt){
    this.isFullScreen ? (this.currentHeight = (window.innerHeight - 51)) : (this.currentHeight = (window.innerHeight - 51) / 2);
  }

  toggleFullScreen(evt){
    if(evt ==="fullscreen"){
      this.isFullScreen = true;
      this.currentColumns = 1;
      this.currentHeight = (window.innerHeight - 51);
      this.isDataShow     = false;
      this.isMeterShow    = false;
      this.isReportsShow  = false;
      this.mapComponent.updateMapSize();
     
    }else if(evt ==="fullscreen_exit"){
      this.currentColumns = 2;
      this.isFullScreen = false;
      this.currentHeight = (window.innerHeight - 51) / 2;
      this.isDataShow     = true;
      this.isMeterShow    = true;
      this.isReportsShow  = true;
      this.mapComponent.updateMapSize();
    }
  }
  
  

}
