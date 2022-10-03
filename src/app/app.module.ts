import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { NewEmployeComponent } from './components/new-employe/new-employe.component';
import { ListComponent } from './components/list/list.component';
import { MonthConverterPipe } from './pipes/month-converter.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { PerformanceConverterPipe } from './pipes/performance-converter.pipe';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';
import { FavPageComponent } from './pages/fav-page/fav-page.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NewEmployeComponent,
    ListComponent,
    MonthConverterPipe,
    FooterComponent,
    BannerComponent,
    PerformanceConverterPipe,
    EmployeesPageComponent,
    FavPageComponent,
  
  ],
  imports: [CommonModule, BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
