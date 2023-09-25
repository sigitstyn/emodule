import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-petakonsep',
  templateUrl: './petakonsep.page.html',
  styleUrls: ['./petakonsep.page.scss'],
})
export class PetakonsepPage {

  constructor(private modalController: ModalController) {}

  async openImageModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: {
        imageUrl: 'assets/Konsep.png', // Ganti dengan URL gambar yang sesuai
      },
    });
    return await modal.present();
  }

}
