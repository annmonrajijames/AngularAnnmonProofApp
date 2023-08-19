import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { StreamComponent } from './pages/stream/stream.component';
import { Bluetooth1Component } from './pages/bluetooth1/bluetooth1.component';
//... other imports

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'stream', component: StreamComponent },
  { path: 'bluetooth1', component: Bluetooth1Component },
  //... other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
