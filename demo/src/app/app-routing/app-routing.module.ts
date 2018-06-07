import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/Login',
        pathMatch: 'full'
      },
      {
        path: 'Login',
        component: LoginComponent,
      },
    ], { useHash: true })
  ],
  declarations: [],
})
export class AppRoutingModule { }
