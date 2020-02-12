import { Action, Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  map,
  switchMap,
  withLatestFrom,
  mergeMap
} from 'rxjs/operators';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, EMPTY } from 'rxjs';
import { transferBackPageActions } from './actions';
import { AppState } from '@shared/store/state';

@Injectable()
export class TransferBackPageEffects {
  public getUsers$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(transferBackPageActions.getUsers),
      switchMap(() => {
        return this.httpClient
          .get('https://reqres.in/api/users?delay=3')
            /* .subscribe((result) => {
              this.resultHttpClient = result;
            }) */
          .pipe(
            map((users) => transferBackPageActions.getUsersSuccess({ users })),
            catchError((response: HttpErrorResponse) => {
              console.log({ response });

              return of(transferBackPageActions.getUsersFailure());
            })
          );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private httpClient: HttpClient
  ) { }
}
