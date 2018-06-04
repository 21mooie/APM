import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from '../home/welcome.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: '',redirectTo:'welcome', pathMatch:'full'},
      {path: '**', redirectTo:'welcome', pathMatch:'full'}
    ])
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouterModule { }
