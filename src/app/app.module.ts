import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { AppRouterModule } from './router/router.module';
import { LoginModule } from './auth/login/login.module';

@NgModule({
  declarations: [ 
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ProductModule,
    AppRouterModule,
    LoginModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
