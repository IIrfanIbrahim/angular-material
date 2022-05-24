import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
// import { MatSliderModule } from '@angular/material/slider';
import { MaterialExampleModule } from 'src/material.module';

// import {Component} from '@angular/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    // MatSliderModule,
    MaterialExampleModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class CardFancyExample {}



// @Component({
//   selector: 'card-fancy-example',
//   templateUrl: 'card-fancy-example.html',
//   styleUrls: ['card-fancy-example.css'],
// })