import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  teamValue=0;
  teamsArray=[];
  Playercount = 0;
  WeeketKeeperCount = 0 ;
  BowlerCount = 0 ;
  BatsmanCount = 0 ;
  AllRounderCount = 0;
  TeamRedCount = 0;
  TeamBlueCount = 0;
  data= [
    {
      "PlayerName": "Q de Kock",
      "Team": "RED",
      "ID": 1,
      "Role": 1,
      "Value": 10
    },
    {
      "PlayerName": "F du Plessis",
      "Team": "RED",
      "ID": 2,
      "Role": 2,
      "Value": 10
    },
    {
      "PlayerName": "D Miller",
      "Team": "RED",
      "ID": 3,
      "Role": 2,
      "Value": 9
    },
    {
      "PlayerName": "R Hendricks",
      "Team": "RED",
      "ID": 4,
      "Role": 2,
      "Value": 8.5
    },
    {
      "PlayerName": "R van der-Dussen",
      "Team": "RED",
      "ID": 5,
      "Role": 2,
      "Value": 8.5
    },
    {
      "PlayerName": "A Markram",
      "Team": "RED",
      "ID": 6,
      "Role": 2,
      "Value": 8
    },
    {
      "PlayerName": "J Duminy",
      "Team": "RED",
      "ID": 7,
      "Role": 3,
      "Value": 9.5
    },
    {
      "PlayerName": "A Phehlukwoyo",
      "Team": "RED",
      "ID": 8,
      "Role": 3,
      "Value": 8.5
    },
    {
      "PlayerName": "D Pretorius",
      "Team": "RED",
      "ID": 9,
      "Role": 3,
      "Value": 8
    },
    {
      "PlayerName": "I Tahir",
      "Team": "RED",
      "ID": 10,
      "Role": 4,
      "Value": 9.5
    },
    {
      "PlayerName": "K Rabada",
      "Team": "RED",
      "ID": 11,
      "Role": 4,
      "Value": 9
    },
    {
      "PlayerName": "L Ngidi",
      "Team": "RED",
      "ID": 12,
      "Role": 4,
      "Value": 8.5
    },
    {
      "PlayerName": "D Styen",
      "Team": "RED",
      "ID": 13,
      "Role": 4,
      "Value": 8.5
    },
    {
      "PlayerName": "T Shamsi",
      "Team": "RED",
      "ID": 14,
      "Role": 4,
      "Value": 8
    },
    {
      "PlayerName": "A Nortje",
      "Team": "RED",
      "ID": 15,
      "Role": 4,
      "Value": 8
    },
    {
      "PlayerName": "Kusal-Mendis",
      "Team": "BLUE",
      "ID": 16,
      "Role": 1,
      "Value": 9
    },
    {
      "PlayerName": "N DickWella",
      "Team": "BLUE",
      "ID": 17,
      "Role": 1,
      "Value": 8.5
    },
    {
      "PlayerName": "S Samrwikrama",
      "Team": "BLUE",
      "ID": 18,
      "Role": 2,
      "Value": 8.5
    },
    {
      "PlayerName": "Angelo-perera",
      "Team": "BLUE",
      "ID": 19,
      "Role": 2,
      "Value": 8.5
    },
    {
      "PlayerName": "Avishka-Fernando",
      "Team": "BLUE",
      "ID": 20,
      "Role": 2,
      "Value": 8
    },
    {
      "PlayerName": "Priyamal Perera",
      "Team": "BLUE",
      "ID": 21,
      "Role": 2,
      "Value": 8
    },
    {
      "PlayerName": "Thisara Perera",
      "Team": "BLUE",
      "ID": 22,
      "Role": 3,
      "Value": 9.5
    },
    {
      "PlayerName": "D de silva",
      "Team": "BLUE",
      "ID": 23,
      "Role": 3,
      "Value": 9
    },
    {
      "PlayerName": "Kamnidu Mendis",
      "Team": "BLUE",
      "ID": 24,
      "Role": 3,
      "Value": 8.5
    },
    {
      "PlayerName": "S Lakmal",
      "Team": "BLUE",
      "ID": 25,
      "Role": 4,
      "Value": 9
    },
    {
      "PlayerName": "I Udana",
      "Team": "BLUE",
      "ID": 26,
      "Role": 4,
      "Value": 8.5
    },
    {
      "PlayerName": "L Malinga",
      "Team": "BLUE",
      "ID": 27,
      "Role": 4,
      "Value": 8.5
    },
    {
      "PlayerName": "A Dhananjaya",
      "Team": "BLUE",
      "ID": 28,
      "Role": 4,
      "Value": 8.5
    },
    {
      "PlayerName": "L sandakan",
      "Team": "BLUE",
      "ID": 29,
      "Role": 4,
      "Value": 8.5
    },
    {
      "PlayerName": "Asitha Fernando",
      "Team": "BLUE",
      "ID": 30,
      "Role": 4,
      "Value": 8
    },
    {
      "PlayerName": "J Vandersay",
      "Team": "BLUE",
      "ID": 31,
      "Role": 4,
      "Value": 8
    }
  ]
  constructor() { }

  ngOnInit() {
  
  

  




  }

}
