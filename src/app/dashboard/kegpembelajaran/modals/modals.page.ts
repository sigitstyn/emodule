import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.page.html',
  styleUrls: ['./modals.page.scss'],
})
export class ModalsPage implements OnInit {

  @Input() imageSrc: string;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss();
  }
}
