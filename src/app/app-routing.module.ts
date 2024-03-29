import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules, NoPreloading } from '@angular/router';

import { PreloadModulesStrategy } from './core/strategies/preload-modules.strategy';

const app_routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/entities' },
  { path: 'entity/:id', loadChildren: 'app/entity/entity.module#EntityModule' },
  { path: 'entities', loadChildren: 'app/entities/entities.module#EntitiesModule' },
  { path: 'customers/:id', loadChildren: 'app/customer/customer.module#CustomerModule' },
  { path: 'customers', loadChildren: 'app/customers/customers.module#CustomersModule' },
  { path: 'orders', loadChildren: 'app/orders/orders.module#OrdersModule' },
  { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
  { path: '**', pathMatch: 'full', redirectTo: '/entities' } // catch any unfound routes and redirect to home page
];

@NgModule({
  imports: [ RouterModule.forRoot(app_routes, { preloadingStrategy: PreloadAllModules }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
