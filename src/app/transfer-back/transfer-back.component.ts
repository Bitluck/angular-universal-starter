import { Component, OnInit, Inject, ChangeDetectionStrategy, OnDestroy } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '@shared/store/state';
import { transferBackPageActions } from './shared/store/actions';
import { transferBackPageSelectors } from './shared/store/selectors';

@Component({
  selector: 'app-transfer-back',
  templateUrl: './transfer-back.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransferBackComponent implements OnInit, OnDestroy {
  public resultHttpClient: any;
  public resultStore$: any;
  public isLoadingStore$: any;
  // public resultPost: any;

  constructor(
    private httpClient: HttpClient,
    private store: Store<AppState>
    // @Inject('ORIGIN_URL') public baseUrl: string,
  ) {
    // console.log(`ORIGIN_URL=${baseUrl}`);
    this.resultStore$ = this.store.select(transferBackPageSelectors.users);
    this.isLoadingStore$ = this.store.select(transferBackPageSelectors.isLoading);
  }

  ngOnInit(): void {
    this.store.dispatch(transferBackPageActions.getUsers());
    // this.loadData();
  }

  ngOnDestroy(): void {
    this.store.dispatch(transferBackPageActions.refreshState());
  }

  public async loadData(): Promise<void> {
    this.httpClient.get('https://reqres.in/api/users?delay=3').subscribe((result) => {
      this.resultHttpClient = result;
    });
    /* this.http
      .post(
        'https://reqres.in/api/users',
        JSON.stringify({
          name: 'morpheus',
          job: 'leader',
        }),
      )
      .subscribe((result) => {
        this.resultPost = result;
      }); */
  }
}
