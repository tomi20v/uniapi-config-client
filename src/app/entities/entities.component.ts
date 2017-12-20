import { Component, OnInit } from '@angular/core';

import { DataService } from '../core/services/data.service';
import {IEntity} from '../shared/interfaces';

@Component({
  selector: 'cm-entities',
  templateUrl: './entities.component.html'
})
export class EntitiesComponent implements OnInit {

  entities: IEntity[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getEntities();
  }

  private getEntities() {
    this.dataService.getEntities()
      .subscribe(
        (response: IEntity[]) => {
          this.entities = response;
        },
        (err: any) => console.log('getEntities', err)
      );
  }
}
