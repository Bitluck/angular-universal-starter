import { Action, createReducer, on } from '@ngrx/store';
import { transferBackPageActions } from './actions';
import { TransferBackPageState } from './state';

export const initialState = new TransferBackPageState();

const reducers = createReducer(
  initialState,
  on(transferBackPageActions.refreshState, (state) => ({
    ...state,
    ...initialState
  })),
  on(transferBackPageActions.getUsers, (state) => ({
    ...state,
    isLoading: true
  })),
  on(transferBackPageActions.getUsersSuccess, (state, action) => ({
    ...state,
    users: action.users,
    isLoading: false
  })),
  on(transferBackPageActions.getUsersFailure, (state) => ({
    ...state,
    isLoading: false
  }))
);

export function reducer(state: TransferBackPageState | undefined, action: Action): TransferBackPageState {
  return reducers(state, action);
}
