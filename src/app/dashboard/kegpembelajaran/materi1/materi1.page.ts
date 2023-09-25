/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { Quiz } from '../models/quiz.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-materi1',
  templateUrl: './materi1.page.html',
  styleUrls: ['./materi1.page.scss'],
})
export class Materi1Page{
  selectTabs='0';
  constructor(
    private alertCtrl: AlertController
  ){}

  quizzes: Quiz[] = [
    {
      question: '1.	Mono mendorong sebuah meja dengan gaya 80 N dan meja berpindah sejauh 3 meter. Berapakah usaha yang dilakukan Mono?',
      options: ['a.	20 J',
                'b.	23,3 J',
                'c.	240 J',
                'd.	480 J'],
      answer: 'c.	240 J',
      explanation: `Diketahui :<br>
                  F = 80 N<br>
                  S = 3 m<br>
                  Ditanya : W ?<br>
                  Jawab :<br>
                  W = F x s<br>
                  W = 80 x 3  = <b>240 joule </b>(jawaban C)`
    },
  ];
  quizzes2: Quiz[] = [
    {
      question: '2. Berapa usaha yang dilakukan pada gambar tersebut?',
      options: ['a.	250 J',
                'b.	500 J',
                'c.	750 J',
                'd.	1000 J'],
      answer: 'b.	500 J',
      explanation: `Diketahui : <br>
                    F = 100 N dan s = 5 meter <br>
                    Ditanya : W ?<br>
                    Jawab :
                    W = F x s
                    W = 100 x 5 = <b>500 joule </b>(jawaban b)`
    },
  ];
  quizzes3: Quiz[] = [
    {
      question: '3.	Perhatikan gambar di bawah ini. Ada tiga gaya yang dikerjakan pada benda. Berapakah usaha yang bekerja pada benda?',
      options: ['a.	120 J',
                'b.	720 J',
                'c.	1080 J',
                'd.	1440 J'],
      answer: 'a.	120 J',
      explanation: `Diketahui : <br>
      gaya ke kanan positif sedangkan gaya ke kiri negatif<br>
      F1 = 100 N, F2 = -30 N, dan F3 = -50 N<br>
      S = 6 m<br>
      Harus dicari jumlah gayanya dulu baru dicari usahanya:<br>
      F = F1 – F2 – F3<br>
      F = 100 N – 30 N – 50 N<br>
      F = 20 N<br>
      Jawab :<br>
      W = F x s = 20 N x 6 m = <b>120 J </b>(jawaban a)`
    },
  ];
  quizzes4: Quiz[] = [
    {
      question: '4.	Besar usaha yang terjadi pada benda adalah 480 joule. Berapakah perpindahan benda?',
      options: ['a.	2 m',
                'b.	3 m',
                'c.	4 m',
                'd.	6 m'],
      answer: 'c.	4 m',
      explanation: `Jawab : <br>
                    Dicari terlebih dahulu jumlah gayanya<br>
                    F1  = 50 N, F2 = 70 N, dan W = 480 <br>
                    Kerena kedua gayanya sama-sama ke kiri, maka tinggal dijumlahkan saja.<br>
                    F = F1 + F2 = 50 N + 70 N = 120 N<br>
                    W = F x s<br>
                    s = W / F (usaha dibagi dengan gaya)<br>
                    s = 480 J / 120 N<br>
                    <b> s = 4 meter</b>`
    },
  ];
  quizzes5: Quiz[] = [
    {
      question: '5.	Budi mendorong gerobak bakso dengan gaya 80 N. Gerobak tidak bergerak sama sekali. Berapa besar usaha yang dilakukan Budi?',
      options: ['a.	Tak terhingga',
                'b.	Nol',
                'c.	80 N',
                'd.	120 N'],
      answer: 'b.	Nol',
      explanation: `karena benda yang dikenai gaya tidak berpindah maka sudah pasti usaha yang dilakukan itu <b>NOL</b>.`
    },
  ];
  //Daya
  quizzes6: Quiz[] = [
    {
      question: '6.	Seorang siswa yang beratnya 450 Newton menaiki tangga yang memiliki ketinggian 3 m. Siswa tersebut memerlukan waktu 6 detik untuk sampai ke atas. Tentukan daya yang dikeluarkan siswa untuk kegiatan tersebut!',
      options: ['a.	900 watt',
                'b.	225 watt',
                'c.	90,0 watt',
                'd.	22,5 watt'],
      answer: 'b.	225 watt',
      explanation: `Hubungan Daya (P) dan Usaha (W) serta waktu (t) : <br>
      P = W / t<br>
      Dimana :<br>
      W = Usaha (joule) , jangan keliru sebagai berat karena lambang berat w juga!<br>
      W = (gaya berat siswa) x (perpindahan siswa) = 450 x 3 = 1350 joule<br>
      Dengan demikian :<br>
      P = W/t<br>
      P = 1350 / 6<br>
      <b>P = 225 watt </b>`
    },{
      question: '7.	Seorang anak beratnya 300 N, menaiki tangga yang tingginya 5 m dalam waktu 30 sekon. Daya yang dilakukan anak tersebut adalah…',
      options: ['a.	50 W',
                'b.	150 W',
                'c.	500 W',
                'd.	1500 W'],
      answer: 'a.	50 W',
      explanation: `W = F x ∆s <br>
      = 300 N x 5 m <br>
      = 1500 J <br>
      Daya = P = W: t <br>
      P = 1500 J : 30 s <br>
      = 50 watt atau 50 W <br>
      Jadi daya yang dilakukan anak tersebut adalah <b> 50 W </b>
      `
    },
    {
      question: '8.	Sebuah mobil melaju dengan kecepatan 20 m/s. Berapkah daya mesin jika gaya gesekan sebesar 300 N?',
      options: ['a.	2 kW',
                'b.	4 kW',
                'c.	6 kW',
                'd.	9 kW'],
      answer: 'c.	6 kW',
      explanation: `W = F x ∆s <br>
      Daya = P = W: t <br>
      P = F x ∆s : t <br>
      Dimana perpindahan : waktu adalah kecepatan (v) sehingga: <br>
      P = F x v <br> 
      = 300 N x 20 m/s <br>
      = 6000 W <br>
      = 6 kW <br>
      Jadi daya mesin adalah <b>6 kW </b>
      `
    },
    {
      question: '9.	Farel mendorong meja dengan gaya 100 N sejauh 10 m selama 5 sekon. Besar daya yang dilakukan Farel adalah…',
      options: ['a.	200 W',
                'b.	500 W',
                'c.	2000 W',
                'd.	5000 W'],
      answer: 'a.	200 W',
      explanation: `W = F x ∆s <br>
      = 100 N x 10 m <br>
      = 1000 J <br>
      Daya = P = W: t <br>
      P = 1000 J : 5 s <br>
      = 200 watt atau 200 W <br>
      Jadi daya yang dilakukan Farel adalah <b>200 W </b>
      `
    },
    {
      question: '10.	Selama 5 menit terakhir, Malin telah memindahkan meja belajarnya ke sudut dengan usaha sebesar 1200 Joule. Berapa daya yang dikeluarkan oleh Malin?',
      options: ['a.	240 watt',
                'b.	60 watt',
                'c.	20 watt',
                'd.	4 watt'],
      answer: 'd.	4 watt',
      explanation: `Diketahui: <br>
                  W = 1200 J <br>
                  t = 5 menit <br>
                  = 5 x 60 sekon <br>
                  = 300 sekon <br>
                  Ditanyakan: P? <br>
                  Jawab: <br>
                  Rumus Daya, Contoh Soal, dan Penerapannya Sehari-hari 129 <br>
                  = 1200 / 300 <br>
                  = 4 Watt <br>
                  Jadi, daya yang dikeluarkan oleh Malin sebesar <b>4 Watt </b>. `
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
