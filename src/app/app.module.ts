import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Keyboard } from '@ionic-native/keyboard';
import { SignaturePadModule } from 'angular2-signaturepad';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddChartPage } from '../pages/add-chart/add-chart';
import { ChartDetailPage } from '../pages/chart-detail/chart-detail';
import { ChartEditNotePage } from '../pages/chart-edit-note/chart-edit-note';
import { SlidesPage } from '../pages/slides/slides';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddChartPage,
    ChartDetailPage,
    ChartEditNotePage,
    SlidesPage
  ],
  imports: [
    BrowserModule, SignaturePadModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddChartPage,
    ChartDetailPage,
    ChartEditNotePage,
    SlidesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
