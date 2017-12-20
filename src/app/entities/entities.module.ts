import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { EntitiesRoutingModule } from './entities-routing.module';

import { EntitiesComponent } from './entities.component';
import { EntitiesCardComponent } from './entities-card.component';

@NgModule({
  imports: [
    SharedModule,
    EntitiesRoutingModule
  ],
  declarations: [
    EntitiesComponent,
    EntitiesCardComponent
  ]
})
export class EntitiesModule { }
