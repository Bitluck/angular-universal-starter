import { createAction, props } from '@ngrx/store';

export const transferBackPageActions = {
  refreshState: createAction(
    '[Transfer Back Page] Refresh State'
  ),
  getUsers: createAction(
    '[Transfer Back Page] Get Users'
  ),
  getUsersSuccess: createAction(
    '[Transfer Back Success Page] Get Users Success',
    props<{ users: any }>()
  ),
  getUsersFailure: createAction(
    '[Transfer Back Failure Page] Get Users Failure'
  )
};
