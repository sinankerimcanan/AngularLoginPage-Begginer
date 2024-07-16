import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondComponent } from '../page/second/second.component';
import { ThirdComponent } from '../page/third/third.component';
import { AppComponent } from '../app.component';
import { LoginPageComponent } from '../page/login-page/login-page.component';
import { AuthService } from '../service/auth.service';
import { UrunComponent } from '../component/urun/urun.component';
import { AboutComponent } from '../component/about/about.component';
import { UploadUrunComponent } from '../component/upload-urun/upload-urun.component';
import { SepetComponent } from '../component/sepet/sepet.component';

const routes: Routes = [
  { path: '', component: ThirdComponent },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'second',
    component: SecondComponent,
    canActivate: [AuthService],
    children: [
      { path: '', component: UrunComponent },
      { path: 'urun', component: UrunComponent },
      { path: 'about', component: AboutComponent },
      { path: 'upload', component: UploadUrunComponent},
      { path: 'sepet' , component: SepetComponent},
    ],
  },

  // { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
