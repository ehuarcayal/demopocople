import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
 
import { AppComponent } from "./app.component";
import { TabViewModule } from "primeng/tabview";
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
      imports: [BrowserModule, 
          BrowserAnimationsModule, 
          TabViewModule,
          InputTextModule,
          ButtonModule,
          PasswordModule,
          FormsModule,
          HttpClientModule,
    ],
      declarations: [AppComponent],
      bootstrap: [AppComponent],
})
 
export class AppModule{}