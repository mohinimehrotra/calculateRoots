import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BisectionComponent } from './bisection/bisection.component';
import { RegularfalsiComponent } from './regularfalsi/regularfalsi.component';
import { SecantComponent } from './secant/secant.component';

const routes: Routes = [{
  path : 'regularfalsi',
  component : RegularfalsiComponent
},

{
  path : 'bisection',
  component : BisectionComponent
},
{
  path : 'secant',
  component : SecantComponent
},
{
  path : '**',
  redirectTo : 'regularfalsi'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
