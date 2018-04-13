import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ProductsComponent } from './products/products.component';
import { ProductsDisplayComponent } from './products/products-display/products-display.component';
import { ProductsAddComponent } from './products/products-add/products-add.component';
import { UsersAddComponent } from './users/users-add/users-add.component';
import { UsersDisplayComponent } from './users/users-display/users-display.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsService } from './products/products.service';
import { MoneyPipe } from './shared/money.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ProductsComponent,
    ProductsDisplayComponent,
    ProductsAddComponent,
    UsersAddComponent,
    UsersDisplayComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    MoneyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
