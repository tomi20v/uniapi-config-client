import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';

import { EntityRoutingModule } from './entity-routing.module';
import { EntityComponent } from './entity.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    SharedModule,
    EntityRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [EntityComponent]
})
export class EntityModule { }
