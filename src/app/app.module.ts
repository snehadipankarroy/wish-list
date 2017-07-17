import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { WishDetailComponent } from './wish-detail.component';
import { WishesComponent } from './wishes.component';
import { WishService } from './wish.service';
import { WishSearchComponent } from './wish-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    WishesComponent,
    WishDetailComponent,
    WishSearchComponent
  ],
  providers: [WishService],
  bootstrap: [AppComponent]
})

export class AppModule { }
