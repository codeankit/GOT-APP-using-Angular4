import { Component, OnInit  } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GotService} from "../GOT.service";
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 characters=[ ];
  activatedRoute: ActivatedRoute;
  gotService:GotService;



  constructor(activatedRoute:ActivatedRoute, gotService:GotService) {
this.activatedRoute = activatedRoute;
this.gotService = gotService;
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.characters = this.gotService.getCharacters(params.side)
      }
    );
  }

}
