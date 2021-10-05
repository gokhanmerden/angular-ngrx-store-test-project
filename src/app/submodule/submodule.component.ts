import { Component, OnInit } from '@angular/core';
import { FeatureState } from './store/reducers/submodule.reducer';
import { Store} from '@ngrx/store';
import { LoadData } from './store/actions/submodule.actions';
import * as fromSelectors from './store/selectors/submodule.selector';
@Component({
  selector: 'app-submodule',
  templateUrl: './submodule.component.html',
  styleUrls: ['./submodule.component.css']
})
export class SubmoduleComponent implements OnInit {

  constructor( private store: Store<FeatureState>) { }

  ngOnInit(): void {
    this.store.dispatch(LoadData());
    this.store.select(fromSelectors.selectFeatureCount).subscribe( res => {
      console.log("submodule component");
      console.log(res);
    });
  }

}
