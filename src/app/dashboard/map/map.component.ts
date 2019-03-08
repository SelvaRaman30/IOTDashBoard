import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import { transform } from 'ol/proj';
import OSM from 'ol/source/OSM';
import Tile from 'ol/layer/Tile';
import TileWMS from 'ol/source/TileWMS';
import { MatGridTile } from '@angular/material';
import Attribution from 'ol/control/Attribution';
import MousePosition from 'ol/control/MousePosition';
import {createStringXY} from 'ol/coordinate';
import { defaults as defaultControls, ScaleLine } from 'ol/control.js';
import { NgxUiLoaderService  } from 'ngx-ui-loader';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Output() fEvent = new EventEmitter<string>();

 
  isfullscreen : boolean;
  map : any;
  
  constructor(private ngxService: NgxUiLoaderService) {
    this.map = new Map();
   }

  ngOnInit() {
    this.ngxService.startLoader('loader-map');
    setTimeout(()=>{
        let mousePositionControl = new MousePosition({
        coordinateFormat: createStringXY(5),
        projection: 'EPSG:4326',
        className: 'custom-mouse-position',
        target: document.getElementById("widget-coordinate"),
        undefinedHTML: '&nbsp;'
      });
      this.map = new Map({
        target:'map',
        controls: defaultControls({ attribution: false }).extend([
          mousePositionControl
        ]),
        layers:[
          new Tile({
              source: new OSM({
                url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              })
          })
        ],
        view : new View({
          center : transform([72.894089 , 19.113209], 'EPSG:4326', 'EPSG:3857'),
          zoom: 15,
          minZoom: 1,
          maxZoom: 25
        })
      });
      this.ngxService.stopLoader('loader-map');
    },500);
   }

  ngAfterViewInit(){
    
 }
  
 

  viewFullScreen(evt){
    this.isfullscreen =  this.isfullscreen ? false :true;
    this.fEvent.next(evt.target.innerHTML);
  }

  updateMapSize(){
    this.ngxService.startLoader('loader-map');
    setTimeout(()=>{
    this.map.updateSize();
    this.ngxService.stopLoader('loader-map');
    },500);
  }
}
