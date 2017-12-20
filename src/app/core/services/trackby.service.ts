import { Injectable } from '@angular/core';

import {ICustomer, IEntity, IOrder} from '../../shared/interfaces';

@Injectable()
export class TrackByService {

  entity(index:number, entity: IEntity) {
    return entity._id;
  }

  customer(index:number, customer: ICustomer) {
    return customer.id;
  }

  order(index:number, order: IOrder) {
    return index;
  }



}
