import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {

  @Input() imageUrl: string;

  constructor(private modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss();
  }
}
