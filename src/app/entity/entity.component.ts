import { Component, OnInit } from '@angular/core';
import {DataService} from '../core/services/data.service';
import {IEntity, ISchema} from '../shared/interfaces';
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
  schemas: ISchema[] = [];
  pluginEditing = {
    index: null,
    pluginId: null,
    pluginConfig: null
  };

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
    this.dataService.getSchemas()
      .subscribe((schemas: ISchema[]) => {
        this.schemas = schemas;
      });
  }

  editPlugin(index: number, pluginConfig: any): void {
    this.pluginEditing = {...this.pluginEditing,
      index: index,
      pluginId: pluginConfig.pluginId,
      pluginConfig: pluginConfig
    };
  }

  addPlugin(): void {
    this.pluginEditing = {...this.pluginEditing,
      index: null,
      pluginId: null,
      pluginConfig: null
    };
  }

  onPluginSelected(pluginId: string): void {
    this.pluginEditing = {...this.pluginEditing,
      index: null,
      pluginId: pluginId,
      pluginConfig: {}
    };
  }

  onPluginUpdated(index, newPluginData): void {
    let currentPlugins = this.entityForm.value.plugins;
    // console.log('currentPlugins', currentPlugins);
    if (index === null) {
      currentPlugins.push(newPluginData);
    }
    else {
      currentPlugins[index] = newPluginData;
    }
    this.entityForm.patchValue({plugins: currentPlugins});
    this.pluginEditing.index = null;
    this.pluginEditing.pluginId = null;
  }

}
