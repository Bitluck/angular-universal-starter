import { AppState } from '@shared/store/state';
import { createSelector } from '@ngrx/store';
import { TransferBackPageState } from './state';

const selectFeature = (state: AppState) => state.transferBackPage;

export const transferBackPageSelectors = {
  isLoading: createSelector(
    selectFeature,
    (state: TransferBackPageState) => state.isLoading
  ),
  users: createSelector(
    selectFeature,
    (state: TransferBackPageState) => state.users
  )
};
