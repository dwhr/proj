import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatPaginatorModule} from '@angular/material';
import { RegComponent } from './reg/reg.component';
import { from } from 'rxjs';
import { SignComponent } from './sign/sign.component';
import { CompleteListComponent } from './complete-list/complete-list.component';
import { EditingComponent } from './editing/editing.component';
import { FilterdataPipe } from './complete-list/filterdata.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RegComponent,
    SignComponent,
    CompleteListComponent,
    EditingComponent,
    FilterdataPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
