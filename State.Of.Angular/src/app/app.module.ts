import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';

import { AppRouting } from './app.routing';
import { AppComponent } from './components/app/app.component';
import { HomeModule } from './components/home/home.module';
import { HomeState } from './components/home/home.store';
import { NotfoundModule } from './notfound/notfound.module';

// https://github.com/ngxs/store
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([HomeState]),
    AppRouting,
    HomeModule,
    NotfoundModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
