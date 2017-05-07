import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ActionSheets } from '../pages/action-sheets/action-sheets';
import { Alert } from '../pages/alert/alert';
import { Button } from '../pages/button/button';
import { Checkbox } from '../pages/checkbox/checkbox';
import { Chip } from '../pages/chip/chip';
import { Badges } from '../pages/badges/badges';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ActionSheets,
    Alert,
    Button,
    Checkbox,
    Chip,
    Badges
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ActionSheets,
    Alert,
    Button,
    Checkbox,
    Chip,
    Badges
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
