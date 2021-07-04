import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md'
import {AppComponent} from './app.component';
import {ProductListComponent} from './product-list/product-list.component';
import {CartComponent} from './cart/cart.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
// For MDB Angular Free
import { NavbarModule, WavesModule, ButtonsModule  } from 'angular-bootstrap-md'
import { ProfileService } from './profile.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
