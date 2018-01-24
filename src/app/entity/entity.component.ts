import { Component, OnInit } from '@angular/core';
import {DataService} from '../core/services/data.service';
import {IEntity, ISchema, IUniApiResponse} from '../shared/interfaces';
import {ActivatedRoute, Params} from '@angular/router';
import {FormControl, FormGroup, ValidationErrors} from '@angular/forms';
import {GrowlerMessageType, GrowlerService} from '../core/growler/growler.service';

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
    private dataService: DataService,
    private growler: GrowlerService
  ) { }

  ngOnInit() {
    this.route.parent.params.subscribe(
      (params: Params) => {
        const id = params['id'];
        this.dataService.getEntity(id)
          .subscribe((entity: IEntity) => {
            this.entity = entity;
            this.entityForm.patchValue(entity);
            // this.editingMode = true;
            this.entityForm.controls._id.disable();
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

  onAddPlugin(): void {
    this.initPluginEditing();
  }

  onPluginSelected(pluginId: string): void {
    this.pluginEditing = {
      index: null,
      pluginId: pluginId,
      pluginConfig: {}
    };
  }

  onPluginUpdated(index, newPluginData): void {
    const currentPlugins = this.entityForm.value.plugins;
    if (index === null) {
      currentPlugins.push(newPluginData);
    }
    else {
      currentPlugins[index] = newPluginData;
    }
    this.entityForm.patchValue({plugins: currentPlugins});
    this.entityForm.markAsDirty();
    this.pluginEditing.index = null;
    this.pluginEditing.pluginId = null;
  }

  onPluginRemoved(index): void {
    if (index !== null) {
      const currentPlugins = this.entityForm.value.plugins;
      currentPlugins.splice(index,1);
      this.entityForm.patchValue({plugins: currentPlugins});
      this.entityForm.markAsDirty();
    }
    this.initPluginEditing();
  }

  onSubmit(): void {
    if (this.entity._id === null) {
      if(0)
      this.dataService.insertEntity(this.entityForm.value, null, this.entityForm)
        .subscribe(
          (insertedEntity: IEntity) => {
            if (insertedEntity) {
              this.entity = insertedEntity;
              // this.entityForm.patchValue(insertedEntity);
              this.initPluginEditing();
            }
            else {
              this.growler.growl('Error inserting', GrowlerMessageType.Danger);
            }
          },
          (err: any) => console.log(err)
        );
    }

    else {
      this.dataService.updateEntity(
        this.entity._id,
        this.entityForm.value,
        null,
        this.entityForm
      )
        .subscribe(
          (response: IUniApiResponse<IEntity>) => {
            if (response.ok) {
              this.entity = this.entityForm.value;
              this.initPluginEditing();
            }
          },
          (response: IUniApiResponse<IEntity>) => console.log('erro response:', response)
        );
    }
  }

  hasChanges(): boolean {
    // @todo should rather compare loaded and current value
    return this.entityForm.dirty;
  }

  private initPluginEditing(): void {
    this.pluginEditing = {
      index: null,
      pluginId: null,
      pluginConfig: null
    };
  }

}
