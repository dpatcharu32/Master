import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  events = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.events = [
      {
        title: 'WILLIAMSBURG BRONZE EXHIBIT',
        timestart: 'Wed Jun 21 2017 at 12:00 pm',
        thumbnail: 'https://cdn2.allevents.in/thumbs/thumb593cc7476e55e.png',
        venue: 'Condor Hotel, 56 Franklin Avenue, Brooklyn, United States',
        u_id: '1ds35a1fa31sf'
      },
      {
        title: 'Long Island Health, Wellness & Fitness Expo presented by PKL PT',
        timestart: 'Sat Jun 24 2017 at 09:00 am',
        thumbnail: 'https://cdn-az.allevents.in/banners/6ea3791278a90eb5fda2e560392442ac',
        venue: 'Condor Hotel, 56 Franklin Avenue, Brooklyn, United States',
        u_id: '1ds35a1fa31sf'
      },
      {
        title: 'SIP. SHOP. EAT! at The Collective Market | Lower East Side',
        timestart: 'Sat Jul 08 2017 at 12:00 pm',
        thumbnail: 'https://cdn2.allevents.in/thumbs/thumb59374418759fc.png',
        venue: 'Condor Hotel, 56 Franklin Avenue, Brooklyn, United States',
        u_id: '1ds35a1fa31sf'
      },
      {
        title: 'Network Spinal Care - FREE TALK',
        timestart: 'Sat Jul 15 2017 at 02:00 pm',
        thumbnail: 'https://cdn-az.allevents.in/banners/4642e1bd461aff41255fa6ce747b25b0',
        venue: 'Condor Hotel, 56 Franklin Avenue, Brooklyn, United States',
        u_id: '1ds35a1fa31sf'
      },
      {
        title: 'SHAKE & SHOP (Pheon, Kym and Betty)',
        timestart: 'Sat Jun 24 2017 at 09:00 am',
        thumbnail: 'https://cdn-az.allevents.in/banners/5d28e5cf85c13b2af85051f4336256ae',
        venue: 'Condor Hotel, 56 Franklin Avenue, Brooklyn, United States',
        u_id: '1ds35a1fa31sf'
      },
      {
        title: 'SUMMER CAMP',
        timestart: 'Mon Jul 03 2017 at 08:00 am',
        thumbnail: 'https://cdn2.allevents.in/thumbs/thumb59405b4b4c2d3.png',
        venue: 'Condor Hotel, 56 Franklin Avenue, Brooklyn, United States',
        u_id: '1ds35a1fa31sf'
      },
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
  }

}
