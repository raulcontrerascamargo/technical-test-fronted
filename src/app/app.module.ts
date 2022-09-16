import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { NewEmployeComponent } from './components/new-employe/new-employe.component';
import { ListComponent } from './components/list/list.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NewEmployeComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
