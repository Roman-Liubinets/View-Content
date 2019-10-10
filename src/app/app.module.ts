import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { MastedComponent } from './masted/masted.component';
import { ColoryDirective } from './colory.directive';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    MastedComponent,
    ColoryDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
