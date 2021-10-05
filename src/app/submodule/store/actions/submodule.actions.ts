import { createAction, props } from '@ngrx/store';
import { Posts } from '../models/posts.model';

export const LoadData = createAction(
  '[Load Data]'
);

export const LoadDataSuccess = createAction(
  '[Load Data] Success',
  props<{ loadedPosts: Posts[]}>()
);
