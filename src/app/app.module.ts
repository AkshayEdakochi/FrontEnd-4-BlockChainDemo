import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
// import { ProfileComponent } from './profile/profile.component';
import { TransactComponent } from './components/transact/transact.component';
import { ApiService } from './service/api.service';
import { HttpClientModule } from '@angular/common/http';

const appRoutes : Routes = [
  { path : 'profile', component: ProfileComponent},
  { path : 'transact', component: TransactComponent},
  // { path : 'profile', component: ProfileComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    TransactComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
