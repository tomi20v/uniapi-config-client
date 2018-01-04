import {Component, OnInit} from '@angular/core';
import {IEntity} from '../../shared/interfaces';
import {DataService} from '../../core/services/data.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'cm-entity-details',
  templateUrl: './entity-details.component.html'
})
export class EntityDetailsComponent implements OnInit {

  entity: IEntity;
  activeTab: string;

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
          });
      }
    );
  }

  showTab(tab: string) {

  }

}
