import { ProductaplicationComponent } from './productaplication/productaplication.component';
import { PaymentpageComponent } from './productaplication/paymentpage/paymentpage.component';
import { PanierComponent } from './productaplication/panier/panier.component';
import { OrderDetailpageComponent } from './productaplication/order-detailpage/order-detailpage.component';
import { ListproductpageComponent } from './productaplication/listproductpage/listproductpage.component';
import { ErrorepageComponent } from './errorepage/errorepage.component';
import { ProductpageComponent } from './productaplication/productpage/productpage.component';
import { ProfileapplicationComponent } from './profileapplication/profileapplication.component';
import { AccueilapplicatoinComponent } from './accueilapplicatoin/accueilapplicatoin.component';
import { FAQpageComponent } from './accueilapplicatoin/faqpage/faqpage.component';
import { ContactuspageComponent } from './accueilapplicatoin/contactuspage/contactuspage.component';
import { AboutuspageComponent } from './accueilapplicatoin/aboutuspage/aboutuspage.component';
import { SigninpageComponent } from './accueilapplicatoin/signinpage/signinpage.component';
import { LoginpageComponent } from './accueilapplicatoin/loginpage/loginpage.component';
import { LandinpageComponent } from './accueilapplicatoin/landinpage/landinpage.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  {
    path: 'page',
    component: AccueilapplicatoinComponent,
    children: [
      { path: 'Landingpage', component: LandinpageComponent },
      { path: 'Login', component: LoginpageComponent },
      { path: 'signin', component: SigninpageComponent },
      { path: 'aboutus', component: AboutuspageComponent },
      { path: 'conactus', component: ContactuspageComponent },
      { path: 'faq', component: FAQpageComponent },
    ],
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileapplicationComponent },
  { path: 'product', component: ProductaplicationComponent ,
  children: [
    { path: 'listproduct', component: ListproductpageComponent },
    { path: 'orderdetile', component: OrderDetailpageComponent },
    { path: 'panier', component: PanierComponent },
    { path: 'payment', component: PaymentpageComponent },
    { path: 'overview', component: ProductpageComponent },

  ],},
  { path: '404', component: ErrorepageComponent },
  { path: '', component: ErrorepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
