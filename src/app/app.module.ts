import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './components/app/app.component';
import { HeaderComponent } from './components/header/header.component';
import { ServicesComponent } from './components/services/services.component';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { FaqComponent } from './/components/faq/faq.component';
import { WriteMeComponent } from './components/write-me/write-me.component';
import { PricesComponent } from './components/prices/prices.component';
import { PriceComponent } from './components/prices/price/price.component';

import { PriceService } from './components/prices/price.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicesComponent,
    SliderComponent,
    FooterComponent,
    AboutComponent,
    FaqComponent,
    WriteMeComponent,
    PricesComponent,
    PriceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [PriceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
