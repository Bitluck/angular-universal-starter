import * as fromRouter from '@ngrx/router-store';
import { TransferBackPageState } from 'app/transfer-back/shared/store/state';

export class AppState {
  public router: fromRouter.RouterReducerState<any>;
  public transferBackPage?: TransferBackPageState;
}
