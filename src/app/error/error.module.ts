import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '**', component: NotFoundComponent}
    ]),
    SharedModule
  ],
  declarations: [
    NotFoundComponent
  ],
  exports:[
    NotFoundComponent
  ]
})
export class ErrorModule { }
