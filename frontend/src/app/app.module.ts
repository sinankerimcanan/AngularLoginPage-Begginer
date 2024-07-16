import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppRoutingModule } from './router/app-routing.module';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DataService } from './service/data.service';
import { SecondComponent } from './page/second/second.component';
import { ThirdComponent } from './page/third/third.component';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './component/alert/alert.component';
import { CardComponent } from './component/card/card.component';
import { HeaderComponent } from './component/header/header.component';
import { UrunComponent } from './component/urun/urun.component';
import { AboutComponent } from './component/about/about.component';
import { UploadUrunComponent } from './component/upload-urun/upload-urun.component';
import { SepetComponent } from './component/sepet/sepet.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    ThirdComponent,
    LoginPageComponent,
    AlertComponent,
    CardComponent,
    HeaderComponent,
    UrunComponent,
    AboutComponent,
    UploadUrunComponent,
    SepetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [provideClientHydration(), provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}
