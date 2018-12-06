import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'page-add-chart',
  templateUrl: 'add-chart.html',
})
export class AddChartPage {

  private chart : FormGroup;

  constructor(public navCtrl: NavController, public view: ViewController, public platform: Platform, private formBuilder: FormBuilder ) {
    this.chart = formBuilder.group({
      cname : ['', ],
      email : ['', ],
      ddate : ['', ],
      cnumber : ['', Validators.compose([Validators.pattern('[0-9]+$')])],
      snumber : ['', Validators.compose([Validators.pattern('[0-9]+$')])],
      camount : ['', Validators.compose([Validators.pattern('[0-9]+$')])]
    });
  }

  saveChart(){
    this.view.dismiss(this.chart.value);
  }

  close(){
    this.view.dismiss();
  }

}
