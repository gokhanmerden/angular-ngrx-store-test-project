import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { SubmoduleService } from '../../submodule.service';
import * as fromActions from '../actions/submodule.actions';

@Injectable()
export class SubModuleEffects {

  loadPosts$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.LoadData),
    mergeMap(() => this.submoduleService.getAll()
      .pipe(
        map(posts =>  {
          console.log("effects");
          console.log(posts);
          return fromActions.LoadDataSuccess( { loadedPosts: posts}) }),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private submoduleService: SubmoduleService
  ) {}
}
