import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { SwipeTabsPage } from '../pages/swipe-tabs/swipe-tabs';
import { TabsPage } from '../pages/tabs/tabs';
import { ExplorePage } from '../pages/explore/explore';
import { FeedPage } from '../pages/feed/feed';
import { MePage } from '../pages/me/me';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    SwipeTabsPage,
    ExplorePage,
    FeedPage,
    MePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    SwipeTabsPage,
    ExplorePage,
    FeedPage,
    MePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
