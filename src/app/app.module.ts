import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {LoginService} from './index/login/login.service';
import {RoutingModule} from './routing.module';
import { HeaderComponent } from './index/header/header.component';
import { CarouselComponent } from './index/carousel/carousel.component';
import { FooterComponent } from './index/footer/footer.component';
import { LoginModalComponent } from './index/login-modal/login-modal.component';
import { IndexComponent } from './index/index.component';
import { HomePageComponent } from './home/home-page.component';
import {UserService} from './home/user.service';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import { RecommendationsComponent } from './home/recommendations/recommendations.component';
import {GamesService} from './home/recommendations/games.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    FooterComponent,
    LoginModalComponent,
    IndexComponent,
    HomePageComponent,
    RecommendationsComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    UserService,
    GamesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
