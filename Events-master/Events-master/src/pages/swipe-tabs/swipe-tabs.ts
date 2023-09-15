import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';

@Component({
  selector: 'page-swipe-tabs',
  templateUrl: 'swipe-tabs.html',
})
export class SwipeTabsPage {

 @ViewChild('pageSlider') pageSlider: Slides;
  @ViewChild('headerSlider') headerSlider: Slides;

  tabs: any = '0';
  slide:any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  ionViewDidLoad() {
    this.slide = document.getElementById("slide");
  }

  selectTab(index) {
    console.log(index);
    this.pageSlider.slideTo(index);
  }

  changeWillSlide($event) {
    console.log($event);
    this.tabs = $event._snapIndex.toString();
  }
}
