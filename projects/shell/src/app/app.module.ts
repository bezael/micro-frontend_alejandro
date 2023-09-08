import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingInterceptor } from './shared/interceptor/loading.interceptor';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { NabvarReactComponent } from './shared/components/nabvar-react/nabvar-react.component';
import { LoginComponent } from './components/auth/login/login.component';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoadingComponent,
    NabvarReactComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
