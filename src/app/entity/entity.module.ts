import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';

import { EntityRoutingModule } from './entity-routing.module';
import { EntityDetailsComponent } from './entity-details/entity-details.component';
import { EntityComponent } from './entity.component';

@NgModule({
  imports: [
    SharedModule,
    EntityRoutingModule
  ],
  declarations: [EntityComponent, EntityDetailsComponent]
})
export class EntityModule { }
