import { SubmoduleService } from './submodule.service';
import { SubModuleRoutingModule } from './submodule-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmoduleComponent } from './submodule.component';
import * as fromSubmodule from './store/reducers/submodule.reducer';
import { StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SubModuleEffects } from './store/effects/submodule.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SubmoduleComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(fromSubmodule.scoreboardFeatureKey, fromSubmodule.reducer),
    EffectsModule.forFeature([SubModuleEffects]),
    SubModuleRoutingModule
  ]
})
export class SubmoduleModule { }
