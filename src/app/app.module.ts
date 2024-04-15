import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { ArticleListComponent } from './news/components/article-list/article-list.component';
import {LogoApiService} from "./shared/services/logo-api.service";
import {NewsApiService} from "./news/services/news-api.service";
import { FooterContentComponent } from './public/components/footer-content/footer-content.component';
import { SideNavigationBarComponent } from './public/components/side-navigation-bar/side-navigation-bar.component';
import {NgOptimizedImage} from "@angular/common";
import {LayoutModule} from "@angular/cdk/layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatMenuModule} from "@angular/material/menu";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { LanguageSwitcherComponent } from './public/components/language-switcher/language-switcher.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    FooterContentComponent,
    SideNavigationBarComponent,
    LanguageSwitcherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    NgOptimizedImage,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    provideAnimationsAsync(),
    LogoApiService, NewsApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
