import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

/**
 * Generated class for the ChartEditNotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-chart-edit-note',
  templateUrl: 'chart-edit-note.html',
})
export class ChartEditNotePage {

  private noteGroup : FormGroup;
  private container;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder : FormBuilder, public view: ViewController) {
    this.container = navParams.get('container');
    this.noteGroup = formBuilder.group({
      note : [this.container.note, ]
    });
  }

  saveNote(){
    this.view.dismiss(this.noteGroup.value.note);
  }

}
