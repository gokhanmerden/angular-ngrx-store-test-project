import { SubmoduleComponent } from './submodule.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', redirectTo:'/submodule', pathMatch: 'full'},
{ path: 'submodule', component: SubmoduleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubModuleRoutingModule { }
