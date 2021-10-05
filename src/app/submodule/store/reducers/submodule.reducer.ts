import { Posts } from './../models/posts.model';
import * as submoduleActions from '../actions/submodule.actions';
import { Action, createReducer, on} from '@ngrx/store';

export const scoreboardFeatureKey = 'featureState';
/*
export interface AppState {
    featureState: FeatureState
}*/
export interface FeatureState {
  posts: Posts[];
}
export const initialState: FeatureState = {
    posts : []
}

const submoduleReducer = createReducer(
    initialState,
    on(submoduleActions.LoadDataSuccess, (state, {loadedPosts}) => ({ ...state, posts : loadedPosts }))
  );
  /*
on(ScoreboardPageActions.awayScore, state => ({ ...state, away: state.away + 1 })),
    on(ScoreboardPageActions.resetScore, state => ({ home: 0, away: 0 })),
    on(ScoreboardPageActions.setScores, (state, { game }) => ({ home: game.home, away: game.away }))
  */
// tslint:disable-next-line:typedef
export function reducer(state: FeatureState | undefined, action: Action) {
    return submoduleReducer(state, action);
}
