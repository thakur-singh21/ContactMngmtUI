import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {
  MatToolbarModule, MatInputModule, MatGridListModule, MatCardModule, MatMenuModule, MatIconModule,
  MatProgressSpinnerModule, MatDialogModule, MatButtonModule, MatFormFieldModule, MatDatepickerModule,
  MatNativeDateModule, MatSelectModule, MatOptionModule,
  MatSlideToggleModule, MatRadioModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { AccessGaurd } from './login/AccessGaurd';
import { RegistrationComponent } from './registration/registration.component';
import { CompaniesComponent } from './companies/companies.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MyDashboardComponent,
    RegistrationComponent,
    CompaniesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule, MatIconModule,
    MatProgressSpinnerModule, MatDialogModule, MatButtonModule, MatFormFieldModule, MatDatepickerModule,
    MatNativeDateModule, MatSelectModule, MatOptionModule,
    MatSlideToggleModule, MatRadioModule, FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule, LayoutModule, HttpClientModule
  ],
  providers: [AccessGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
