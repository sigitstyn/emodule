/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { Evaluasi, Quiz } from './models/quiz.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-kegpembelajaran',
  templateUrl: './kegpembelajaran.page.html',
  styleUrls: ['./kegpembelajaran.page.scss'],
})
export class KegpembelajaranPage {
  selectTabs='0';
  constructor(
    private alertCtrl: AlertController
  ){}

  quizzes: Evaluasi[] = [
    {
      question: '1.	Seseorang menyangga beban bermassa 13 kg dikepalanya selama 9 detik tanpa perpindahan tempat. Usaha yang dilakukan adalah ...',
      options: ['a.	117 J',
                'b.	11,7 J',
                'c.	1,17 J',
                'd.	0 J'],
      answer: 'd.	0 J'
    },
  ];
  quizzes2: Quiz[] = [
  ];
  quizzes3: Evaluasi[] = [
    {
      question: '3.	Siti menarik sebuah gerobak berisi pasir dengan gaya sebesar 750 N sehingga gerobak tersebut berpindah sejauh 5 m. Berdasarkan pernyataan tersebut, besar usaha yang dilakukan Siti adalah … J. ',
      options: ['a.	3,75',
                'b.	37,5',
                'c.	375',
                'd.	3750'],
      answer: 'd.	3750'
    },
    {
      question: '4.	Sebuah mesin memiliki daya 135 W. Usaha yang dilakukan mesin tersebut dalam 25 detik adalah ...',
      options: ['a.	100 J',
                'b.	120 J',
                'c.	200 J',
                'd.	2000 J'],
      answer: 'd.	2000 J',
    },
    {
      question: '5.	Jarak yang ditempuh oleh mobil saat melaju dengan usaha sebesar 12.250 J dan gaya sebesar 250 N adalah … m',
      options: ['a.	45 ',
                'b.	47',
                'c.	49',
                'd.	51'],
      answer: 'c.	49',
    },
    {
      question: '6.	Pada sistem katrol. Gaya konstan 45 Newton dapat digunakan untuk menaiki sebuah peti setinggi 5 M. Jika hal ini dilakukan selama 9 detik. Maka daya sistem katrol tersebut adalah ..',
      options: ['a.	12,5 Watt',
                'b.	25 Watt',
                'c.	125 Watt',
                'd.	2025 Watt'],
      answer: 'd.	2025 Watt'
    },

  ];
  quizzes4: Evaluasi[] = [
    {
      question: '8.	Dua buah benda didorong dengan gaya yang sama pada jarak tempuh yang sama pula dapat menghasilkan daya yang berbeda. Hal ini disebabkan...',
      options: ['a.	Usaha yang dilakukan tidak sama',
                'b.	Waktu tempuh yang berbeda',
                'c.	Gaya gesek benda terhadap permukaan lantai berbeda',
                'd.	Percepatan suatu benda berbeda dengan benda lain'],
      answer: 'b.	Waktu tempuh yang berbeda'
    },
  ];
  quizzes5: Evaluasi[] = [
    /*{
      question: '',
      options: ['',
                '',
                '',
                ''],
      answer: '',
      explanation: ''
    },*/
    {
      question: '11.	Sebuah batu yang memiliki berat 1000 N digerakkan dengan tongkat yang panjangnya 3 m. Jika titik tumpu berjarak 0,5 m dari batu, maka gaya tekan tangan yang diperlukan sebesar...',
      options: ['a.	200 Newton',
                'b.	500 Newton',
                'c.	600 Newton',
                'd.	3000 Newton'],
      answer: 'a.	200 Newton'
    },
  ];
  //Daya
  quizzes6: Evaluasi[] = [
    {
      question: '18.	Nenek Putri yang mengidap stroke harus menaiki kursi roda ketika hendak berjalan keluar rumah. Kursi roda tersebut memiliki roda jari-jari roda 4 kali lipat jari-jari poros, jari-jari poros 15 cm. Jika massa tubuh nenek Putri 60 kg, maka keuntungan mekanis dari roda berporos tersebut adalah...',
      options: ['a.	2',
                'b.	3',
                'c.	3,5',
                'd.	4'],
      answer: 'd.	4',
    },
    {
      question: '19.	Papan miring sepanjang 2,625 meter digunakan untuk jalur mendorong benda untuk dinaikkan ke tempat dengan ketinggian 1,5 meter. Jika gaya didorong 80 N. Maka berat benda yang didorong adalah ...',
      options: ['a.	130 N',
                'b.	135 N',
                'c.	140 N',
                'd.	145 N'],
      answer: 'c.	140 N',
    },
    {
      question: '20.	Sebuah katrol tetap digunakan untuk menimba air. Bila setiap timba air beratnya 100  N, berapa kuasa yang dibutuhkan?',
      options: ['a.	100 N',
                'b.	200 N',
                'c.	10 N',
                'd.	20 N'],
      answer: 'a.	100 N',
    },
  ];


  //abc
  userAnswers: { [question: string]: string } = {};
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  score: number = 0;
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  showExplanation: boolean = false;

  selectOption(question: string, answer: string) {
    this.userAnswers[question] = answer;
  }

  async submitQuiz() {
    this.score = 0;
    // Menggabungkan array quizzes menjadi satu array
    const allQuizzes = [...this.quizzes, ...this.quizzes2, ...this.quizzes3, ...this.quizzes4, ...this.quizzes5, ...this.quizzes6];

    for (const quiz of allQuizzes) {
      if (this.userAnswers[quiz.question] === quiz.answer) {
        this.score++;
      }
    }

    const alert = await this.alertCtrl.create({
      header: 'Hasil Kuis',
      message: `Skor Anda: ${this.score} / ${allQuizzes.length}`,
      buttons: [
        {
          text: 'Tutup',
          handler: () => {
            // Apa yang ingin Anda lakukan setelah pengguna menutup alert?
          }
        }
      ]
    });

    await alert.present();

    this.showExplanation = true;
  }



  resetQuiz() {
    this.userAnswers = {};
    this.score = 0;
    this.showExplanation = false;
  }
  getOptionIndex(option: string): number {
    return option.charCodeAt(0) - 97; // Mendapatkan indeks berdasarkan ASCII ('a' -> 0, 'b' -> 1, dst.)
  }

  getOptionValue(index: number): string {
    return String.fromCharCode(97 + index); // Mendapatkan nilai berdasarkan indeks ASCII (0 -> 'a', 1 -> 'b', dst.)
  }
  getOptionLetter(index: number): string {
    return String.fromCharCode(97 + index).toUpperCase(); // Mengembalikan huruf besar (A, B, C, D)
  }
  isOptionCorrect(option: string, answer: string): boolean {
    return option === answer;
  }

}
