import { Component, ViewChild } from '@angular/core';
import { ModalController,IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import {SignaturePad} from 'angular2-signaturepad/signature-pad';
import { ChartEditNotePage } from '../chart-edit-note/chart-edit-note';


@Component({
  selector: 'page-chart-detail',
  templateUrl: 'chart-detail.html',
})
export class ChartDetailPage {

  @ViewChild(SignaturePad) public signaturePad : SignaturePad;

  public signaturePadOptions : Object = {
    'minWidth': 2,
    'canvasWidth': this.platform.width() - 44,
    'canvasHeight': 200
  };
  public signatureImage : string;

  public chart : any;
  public containers = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl : ModalController, public platform : Platform) {
    this.chart = navParams.get('chart');
    console.log(this.chart);
    for(var i = 1; i <= this.chart.camount; i++){
      this.containers.push({cnumber : i, status : 0, note : ""});
    }
    console.log(this.platform.width());
  }

  changeStatus(container){
    switch(container.status){
      case 0:
        container.status = 1;
        break;
      case 1:
        container.status = 2;
        break;
      case 2:
        container.status = 0;
        break;
    }
  }

  editNote(container){
    let editModal = this.modalCtrl.create(ChartEditNotePage, {container : container});
 
    editModal.onDidDismiss((note) => {
          if(note){
            container.note = note;
          }
    });
 
    editModal.present();
  }

  canvasResize() {
    let canvas = document.querySelector('canvas');
    this.signaturePad.set('minWidth', 1);
    this.signaturePad.set('canvasWidth', this.platform.width() - 44);
    this.signaturePad.set('canvasHeight', canvas.offsetHeight);
  }

  ngAfterViewInit() {
        this.signaturePad.clear();
        this.canvasResize();
  }

  clearSignature(){
    this.signaturePad.clear();
  }

  public ionViewDidEnter(): void {
    this.navCtrl.swipeBackEnabled = false;
}

public ionViewDidLeave(): void {
    this.navCtrl.swipeBackEnabled = true;
}



}
