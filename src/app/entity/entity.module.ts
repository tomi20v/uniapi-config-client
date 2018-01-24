import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import { JsonSchemaFormModule } from 'angular2-json-schema-form';

import { EntityRoutingModule } from './entity-routing.module';
import { EntityComponent } from './entity.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PluginEditorComponent } from './plugin-editor/plugin-editor.component';
import { PluginChooserComponent } from './plugin-chooser/plugin-chooser.component';

@NgModule({
  imports: [
    SharedModule,
    EntityRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    JsonSchemaFormModule
  ],
  declarations: [EntityComponent, PluginEditorComponent, PluginChooserComponent]
})
export class EntityModule { }
