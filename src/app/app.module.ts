// angular
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// libs
// import { CookieService, CookieModule } from '@gorniv/ngx-universal';
import { TransferHttpCacheModule } from '@nguniversal/common';
// shared
// import { SharedModule } from '@shared/shared.module';
import { TranslatesService } from '@shared/translates';
import { AuthService } from '@shared/services/auth.service';
// components
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { UniversalStorage } from '@shared/storage/universal.storage';
// interceptors
import { TokenInterceptor } from '@shared/interceptors/token.interceptor';
import { ErrorInterceptor } from '@shared/interceptors/error.interceptor';
import { AuthGuard } from '@shared/guards/auth.guard';
import { UnAuthGuard } from '@shared/guards/un-auth.guard';
// ngrx
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'environments/environment';
import { LayoutsModule } from '@shared/layouts/layouts.module';
import { SharedMetaModule } from '@shared/shared-meta';
import { TransferHttpModule } from '@gorniv/ngx-universal';

export function initLanguage(translateService: TranslatesService): Function {
  return (): Promise<any> => translateService.initLanguage();
}

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    TransferHttpCacheModule,
    HttpClientModule,
    RouterModule,
    AppRoutes,
    BrowserAnimationsModule,
    // CookieModule.forRoot(),
    LayoutsModule,
    SharedMetaModule,
    TransferHttpModule,
    // SharedModule.forRoot(),
    // ngrx store
    StoreModule.forRoot({
      router: routerReducer
    }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  declarations: [AppComponent],
  providers: [
    // CookieService,
    UniversalStorage,
    AuthService,
    // Guards
    AuthGuard,
    UnAuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: APP_INITIALIZER, useFactory: initLanguage, multi: true, deps: [TranslatesService] },
  ],
})
export class AppModule {
}
