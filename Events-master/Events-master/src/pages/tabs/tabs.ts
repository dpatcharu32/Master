import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { FeedPage } from '../feed/feed';
import { ExplorePage } from '../explore/explore';
import { MePage } from '../me/me';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root: any = FeedPage;
  tab2Root: any = ExplorePage;
  tab3Root: any = MePage;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }
}
