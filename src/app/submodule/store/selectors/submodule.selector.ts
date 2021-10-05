import { FeatureState,scoreboardFeatureKey } from './../reducers/submodule.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Posts } from '../models/posts.model';
//import { AppState } from '../reducers/submodule.reducer';

/*
export const getPostsState = createFeatureSelector<FeatureState>('posts');
export const getPosts = createSelector(
  getPostsState,
  (state: FeatureState) => state.posts || []
);
*/
/*
export const getPostsState = (state: AppState) => state.featureState;

export const getPosts = createSelector(
  getPostsState,
  (state: FeatureState) => state.posts || []
);
*/
//export const selectPosts = (state: FeatureState) => state.posts;
export const getPostsState = createFeatureSelector<FeatureState>(scoreboardFeatureKey);

export const selectFeatureCount = createSelector(
  getPostsState,
  (state: FeatureState) => state.posts
);
