import { Component, OnInit } from '@angular/core';
import {DataService} from '../core/services/data.service';
import {IEntity} from '../shared/interfaces';
import {ActivatedRoute, Params} from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'cm-entity',
  templateUrl: './entity.component.html'
})
export class EntityComponent implements OnInit {

  entity: IEntity;
  entityForm = new FormGroup({
    _id: new FormControl(),
    name: new FormControl(),
    crstamp: new FormControl(),
    tstamp: new FormControl(),
    plugins: new FormControl(),
    schema: new FormControl()
  });

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.route.parent.params.subscribe(
      (params: Params) => {
        const id = params['id'];
        this.dataService.getEntity(id)
          .subscribe((entity: IEntity) => {
            this.entity = entity;
            this.entityForm.patchValue(entity);
          });
      }
    );
  }

}