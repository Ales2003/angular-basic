import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    //перечисляем наши компоненти
    CardComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    //для 2-w байндинга
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
