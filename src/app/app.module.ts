import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductaplicationComponent } from './productaplication/productaplication.component';
import { ProfileapplicationComponent } from './profileapplication/profileapplication.component';
import { AccueilapplicatoinComponent } from './accueilapplicatoin/accueilapplicatoin.component';
import { LoginpageComponent } from './accueilapplicatoin/loginpage/loginpage.component';
import { LandinpageComponent } from './accueilapplicatoin/landinpage/landinpage.component';
import { FooterComponent } from './accueilapplicatoin/footer/footer.component';
import { NavbareComponent } from './accueilapplicatoin/navbare/navbare.component';
import { SigninpageComponent } from './accueilapplicatoin/signinpage/signinpage.component';
import { ListproductpageComponent } from './productaplication/listproductpage/listproductpage.component';
import { PanierComponent } from './productaplication/panier/panier.component';
import { PaymentpageComponent } from './productaplication/paymentpage/paymentpage.component';
import { NavbarprodctComponent } from './productaplication/navbarprodct/navbarprodct.component';
import { ContactuspageComponent } from './accueilapplicatoin/contactuspage/contactuspage.component';
import { ProductpageComponent } from './productaplication/productpage/productpage.component';
import { OrderDetailpageComponent } from './productaplication/order-detailpage/order-detailpage.component';
import { FAQpageComponent } from './accueilapplicatoin/faqpage/faqpage.component';
import { AboutuspageComponent } from './accueilapplicatoin/aboutuspage/aboutuspage.component';
import { ErrorepageComponent } from './errorepage/errorepage.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterproductComponent } from './productaplication/footerproduct/footerproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProductaplicationComponent,
    ProfileapplicationComponent,
    AccueilapplicatoinComponent,
    LoginpageComponent,
    LandinpageComponent,
    FooterComponent,
    NavbareComponent,
    SigninpageComponent,
    ListproductpageComponent,
    PanierComponent,
    PaymentpageComponent,
    NavbarprodctComponent,
    ContactuspageComponent,
    ProductpageComponent,
    OrderDetailpageComponent,
    FAQpageComponent,
    AboutuspageComponent,
    ErrorepageComponent,
    FooterproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
