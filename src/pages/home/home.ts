import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddChartPage } from '../add-chart/add-chart';
import { ChartDetailPage } from '../chart-detail/chart-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public charts = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }

  ionViewDidLoad(){ 
  }

  addChart(){
    let addModal = this.modalCtrl.create(AddChartPage);
 
    addModal.onDidDismiss((chart) => {
 
          if(chart){
            this.saveChart(chart);
          }
 
    });
 
    addModal.present();
  }

  saveChart(chart){
    this.charts.push(chart);
  }
 
  viewChart(chart){
    this.navCtrl.push(ChartDetailPage, {
      chart: chart
    });
  }

}
