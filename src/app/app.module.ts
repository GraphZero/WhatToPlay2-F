import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {LoginService} from './index/login/login.service';
import {RoutingModule} from './routing.module';
import {HeaderComponent} from './index/header/header.component';
import {CarouselComponent} from './index/carousel/carousel.component';
import {LoginModalComponent} from './index/login-modal/login-modal.component';
import {IndexComponent} from './index/index.component';
import {HomePageComponent} from './home/home-page.component';
import {UserService} from './home/user.service';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {RecommendationsComponent} from './home/recommendations/recommendations.component';
import {GamesService} from './home/recommendations/games.service';

import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {NgbDropdown, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        CarouselComponent,
        LoginModalComponent,
        IndexComponent,
        HomePageComponent,
        RecommendationsComponent,
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        RoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        Ng4LoadingSpinnerModule.forRoot(),
        NgbModule.forRoot(),
        FormsModule
    ],
    providers: [
        LoginService,
        UserService,
        GamesService,
        NgbDropdown
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
