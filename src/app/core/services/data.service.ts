import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators';

import {ICustomer, IOrder, IState, IPagedResults, IApiResponse, IEntity, ISchema, IPlugin, IUniApiResponse} from '../../shared/interfaces';
import {FormGroup} from '@angular/forms';
import {GrowlerMessageType, GrowlerService} from '../growler/growler.service';

@Injectable()
export class DataService {

  entityBaseUrl: string = '/config/entity';
  schemaBaseUrl: string = '/config/schema';
  pluginBaseUrl: string = '/config/plugin';
  customersBaseUrl: string = '/api/customers';
  ordersBaseUrl: string = '/api/orders';
  orders: IOrder[];
  states: IState[];

  constructor(
    private http: HttpClient,
    private growler: GrowlerService
  ) { }

  getEntities(): Observable<IEntity[]> {
    return this.http.get<IEntity[]>(this.entityBaseUrl);
  }

  getEntity(id: string): Observable<IEntity> {
    return this.http.get<IEntity>(this.entityBaseUrl + '/' + id);
  }

  insertEntity(
    entity: IEntity,
    defaultErrorMessage?: string,
    entityForm?: FormGroup
  ): Observable<IEntity> {
    return this.http.post<IEntity>(this.entityBaseUrl + '/', entity)
      // .pipe(
      //   map((response: IUniApiResponse<IEntity>) => {
      //
      //   }),
      //   catchError(this.handleError)
      // )
    ;
  }

  updateEntity(
    oldId: string,
    entity: IEntity,
    defaultErrorMessage?: string,
    entityForm?: FormGroup
  ): Observable<IUniApiResponse<IEntity>> {

    return this.http.put<IUniApiResponse<IEntity>>(this.entityBaseUrl + '/' + oldId, entity)
      .pipe(
        map((response: IUniApiResponse<IEntity>): IUniApiResponse<IEntity> => {
          if (!response.ok) {
            this.handleUniApiError(response, defaultErrorMessage, entityForm);
          }
          else if (entityForm) {
            entityForm.patchValue(response.result);
            entityForm.markAsPristine();
          }
          return response;
        }),
        // catchError(this.handleUniApiError)
        catchError((response: HttpErrorResponse) => {
          this.handleUniApiError(response, defaultErrorMessage, entityForm);
          return Observable.throw(response);
        })
      )
    ;
  }

  deleteEntity(id: string): Observable<boolean> {
    return this.http.delete<IApiResponse>(this.entityBaseUrl + '/' + id)
      .pipe(
        map(res => res.status),
        catchError(this.handleError)
      );
  }

  getSchemas(): Observable<ISchema[]> {
    return this.http.get<ISchema[]>(this.schemaBaseUrl);
  }

  getSchema(id: string): Observable<ISchema> {
    return this.http.get<ISchema>(this.schemaBaseUrl + '/' + id);
  }

  getPlugins(): Observable<IPlugin[]> {
    return this.http.get<IPlugin[]>(this.pluginBaseUrl);
  }

  getPlugin(id: string): Observable<IPlugin> {
    return this.http.get<IPlugin>(this.pluginBaseUrl + '/' + id);
  }

    getCustomersPage(page: number, pageSize: number): Observable<IPagedResults<ICustomer[]>> {
        return this.http.get<ICustomer[]>(
            `${this.customersBaseUrl}/page/${page}/${pageSize}`,
            { observe: 'response' })
            .pipe(
                map(res => {
                    const totalRecords = +res.headers.get('X-InlineCount');
                    let customers = res.body as ICustomer[];
                    this.calculateCustomersOrderTotal(customers);
                    return {
                        results: customers,
                        totalRecords: totalRecords
                    };
                }),
                catchError(this.handleError)
            );
    }

    getCustomers(): Observable<ICustomer[]> {
        return this.http.get<ICustomer[]>(this.customersBaseUrl)
            .pipe(
                map(customers => {
                    this.calculateCustomersOrderTotal(customers);
                    return customers;
                }),
                catchError(this.handleError)
            );
    }

    getCustomer(id: number): Observable<ICustomer> {
        return this.http.get<ICustomer>(this.customersBaseUrl + '/' + id)
            .pipe(
                map(customer => {
                    this.calculateCustomersOrderTotal([customer]);
                    return customer;
                }),
                catchError(this.handleError)
            );
    }

    insertCustomer(customer: ICustomer): Observable<ICustomer> {
        return this.http.post<ICustomer>(this.customersBaseUrl, customer)
            .pipe(catchError(this.handleError))
    }

    updateCustomer(customer: ICustomer): Observable<boolean> {
        return this.http.put<IApiResponse>(this.customersBaseUrl + '/' + customer.id, customer)
            .pipe(
                map(res => res.status),
                catchError(this.handleError)
            );
    }

    deleteCustomer(id: number): Observable<boolean> {
        return this.http.delete<IApiResponse>(this.customersBaseUrl + '/' + id)
            .pipe(
                map(res => res.status),
                catchError(this.handleError)
            );
    }

    getStates(): Observable<IState[]> {
        return this.http.get<IState[]>('/api/states')
            .pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            let errMessage = error.error.message;
            return Observable.throw(errMessage);
            // Use the following instead if using lite-server
            //return Observable.throw(err.text() || 'backend server error');
        }
        return Observable.throw(error || 'Node.js server error');
    }

  private handleUniApiError(
    response: IUniApiResponse<any>,
    defaultErrorMessage?: string,
    entityForm?: FormGroup
  ) {
    if (entityForm) {
      entityForm.setErrors(response.error);
    }
    this.growler.growl(
      response.errorMessage || defaultErrorMessage || 'API responded with errors',
      GrowlerMessageType.Danger
    );
  }

    calculateCustomersOrderTotal(customers: ICustomer[]) {
        for (let customer of customers) {
            if (customer && customer.orders) {
                let total = 0;
                for (let order of customer.orders) {
                    total += order.itemCost;
                }
                customer.orderTotal = total;
            }
        }
    }

    //Not using now but leaving since they show how to create
    //and work with custom observables

    //Would need following import added:
    //import { Observer } from 'rxjs/Observer';

    // createObservable(data: any): Observable<any> {
    //     return Observable.create((observer: Observer<any>) => {
    //         observer.next(data);
    //         observer.complete();
    //     });
    // }

}
