/* eslint-disable object-shorthand */
/* eslint-disable quote-props */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonSlides, ModalController } from '@ionic/angular';
import { Quiz } from '../models/quiz.model';
import { ModalsPage } from '../modals/modals.page';

@Component({
  selector: 'app-materi2',
  templateUrl: './materi2.page.html',
  styleUrls: ['./materi2.page.scss'],
})
export class Materi2Page{
  selectTabs='0';
  selectJenis='0';
  @ViewChild(IonSlides) slides: IonSlides;

  constructor(
    private alertCtrl: AlertController,
    public modalController: ModalController
  ){}


  quizzes: Quiz[] = [
    {
      question: '1.	Tuas dengan titik tumpu berada di antara titik beban dan titik kuasa disebut?',
      options: ['a.	Tuas jenis pertama',
                'b.	Tuas jenis kedua',
                'c.	Tuas jenis ketiga',
                'd.	Tuas katrol'],
      answer: 'a.	Tuas jenis pertama',
      explanation: `Tuas jenis/golongan pertama. <b>Tuas jenis pertama </b> memiliki titik tumpu di tengah, di antara gaya kuasa dan gaya beban.`
    },
    {
      question: '2.	Tuas yang panjangnya 1,5 m digunakan untuk mengangkat batu seberat 1.200 N. Jika titik tumpu diletakkan 0,5 m dari batu, hitung besar gaya yang harus dikeluarkan !',
      options: ['a.	600 N',
                'b.	1200 N',
                'c.	1800 N',
                'd.	2400 N'],
      answer: 'a.	600 N',
      explanation: `Diketahui: <br>
                    l = 1,5 m <br>
                    w = 1.200 N <br>
                    lb = 0,5 m <br>
                    lk = l - lb <br>
                        = 1,5 - 0,5 <br>
                        = 1 m  <br>
                    Ditanyakan : F....? <br>
                    Penyelesaian: <br>
                    F = lb/lk . w <br>
                      = 0,5/1 . 1.200 <br>
                      = 600 N <br>
                    Jadi, gaya yang harus dikeluarkan untuk mengangkat batu tersebut adalah <b>600 N</b>.
      `
    },
    {
      question: '3.	Sebuah batu yang beratnya 900 N diangkat dengan tuas yang panjangnya 2 m. Jika lengan beban 50 cm dan titik tumpu berada di antara beban dan kuasa. Gaya yang diperlukan dan keuntungan mekanisnya berturut-turut adalah...',
      options: ['a.	900 N dengan keuntungan mekanis 3',
                'b.	300 N dengan keuntungan mekanis 3',
                'c.	900 N dengan keuntungan mekanis 9',
                'd.	300 N dengan keuntungan mekanis 9'],
      answer: 'b.	300 N dengan keuntungan mekanis 3',
      explanation: `Diketahui:<br>
                    w = 900 N <br>
                    l = 2 m <br>
                    lb = 50 cm = 0,5 m<br>
                    lk = l - lb<br>
                        = 2 - 0,5     = 1,5 m<br>
                    Ditanyakan:<br>
                    A.	F...?<br>
                    B.	KM...?<br>
                    Pembahasan :<br>
                    A. Gaya yang diperlukan (F)<br>
                    F = lb/lk . w<br>
                      = 0,5/1,5 . 900<br>
                      = 300 N<br>
                    Jadi, gaya yang harus dikeluarkan untuk mengangkat batu tersebut adalah <b>300 N</b>.<br>
                    
                    B. Keuntungan Mekanis (KM)<br>
                    KM = w/F
                          = 900/300<br>
                          = 3<br>
                    Jadi, keuntungan mekanis (KM)  tuas tersebut adalah  <b>3</b>.
      `
    },
  ];
  quizzes2: Quiz[] = [
    {
      question: '4.	Tuas dalam keadaan seimbang saat posisi beban dan kuasa seperti gambar. Jika titik tumpu kemudian digeser 10 cm mendekati beban, agar tuas tetap seimbang yang harus dilakukan adalah… ',
      options: ['a.	Mengurangi kuasa sebesar 10 N',
                'b.	Menambah kuasa agar menjadi 200 N',
                'c.	Menggeser kuasa mendekati titik tumpu sejauh 50 cm',
                'd.	Menggeser kuasa mendekati titik tumpu sejauh 40 cm '],
      answer: 'c.	Menggeser kuasa mendekati titik tumpu sejauh 50 cm',
      explanation: `Diketahui: <br>
                    •	w = 800 N <br>
                    •	lb = 40 cm = 0,4 m <br>
                    •	lk = 160 cm = 1,6 m<br>
                    Ditanyakan : Apa yang harus dilakukan agar tuas tetap seimbang jika titik tumpu digeser 10 cm mendekati beban? <br>
                    Jawab :<br>
                    Syarat agar terjadi kesetimbangan pada tuas adalah jika bagian beban sama dengan bagian kuasa:<br>
                    w . lb = F . lk<br>
                    Langkah pertama, kita cari terlebih dahulu besar gaya kuasa (F) pada gambar:<br>
                    F = lb/lk . w<br>
                      = 0,4/1,6 . 800<br>
                      = 200 N<br>
                    Jadi, besar gaya kuasa pada gambar adalah 200 N.<br>
                    Langkah kedua, menggeser titik tumpu 10 cm atau 0,1 m ke titik beban. Setelah digeser, maka kondisi yang terjadi:<br>
                    lengan beban berkurang 0,1 m lengan kuasa bertambah 0,1 m<br>
                    w . (lb - 0,1) = F . (lk + 0,1)<br>
                    800  . (0,4 - 0,1) = 200 . (1,6 + 0, 1)<br>
                    800  . 0,3 = 200 . 1, 7<br>
                    240 =  340 (Belum seimbang )<br>
                    Untuk membuatnya seimbang, maka kita geser kuasa mendekati titik tumpu sejauh 50  cm atau 0,5 m, artinya panjang lengan kuasa akan berkurang 0,5 m.<br>
                    w . lb = F . (lk - 0,5)<br>
                    800  . 0,3 = 200 . (1,7 - 0, 5)<br>
                    240 =  20 . 1, 2<br>
                    240 =  240 (Seimbang )<br>
                    Jadi, terbukti bahwa tuas menjadi seimbang dengan menggeser kuasa mendekati titik tumpu sejauh <b>50 cm </b>.
                    
      `
    },
  ];
  quizzes3: Quiz[] = [
    {
      question: '5.	Tuas ini akan gaya menghasilkan kuasa F paling kecil bila beban w di letakkan titik...',
      options: ['a.	1, tumpu T di titik 2 dan F di titik 4',
                'b.	2, tumpu T di titik 3 dan F di titik 7',
                'c.	1, tumpu T di titik 5 dan F di titik 6',
                'd.	3, tumpu T di titik 4 dan F di titik 7 '],
      answer: 'b.	2, tumpu T di titik 3 dan F di titik 7',
      explanation: `Maksud dari soal ini adalah hanya dengan gaya kuasa kecil beban bisa terangkat. Besar gaya angkat pada tuas dipengaruhi oleh panjang lengan kuasa dan panjang lengan beban:<br>
                    •	Jika lengan kuasa lebih panjang dari lengan beban, maka gaya kuasa kecil.<br>
                    •	Jika lengan kuasa lebih pendek dari lengan beban, maka gaya kuasa besar.<br>
                    Mari kita periksa satu per satu pilihan di atas:<br>
                    a.	1, tumpu T di titik 2 dan F di titik 4, pada kondisi ini lk = 2 dan lb = 1, artinya gaya kuasa agak kecil. Berikut ini gambarnya:<br>
                        <div class="img-container" style="display: flex; justify-content: center; border: 1px solid #000; margin-bottom: 10px;">
                          <img src="./assets/materi/r10.jpg">
                        </div> 
                    b.	2, tumpu T di titik 3 dan F di titik 7, pada kondisi ini lk = 4 dan lb = 1, artinya gaya kuasa paling kecil. Berikut ini gambarnya:<br>
                        <div class="img-container" style="display: flex; justify-content: center; border: 1px solid #000; margin-bottom: 10px;">
                          <img src="./assets/materi/r11.png">
                        </div> 
                    c.	1, tumpu T di titik 5 dan F di titik 6, pada kondisi ini lk = 1 dan lb = 4, artinya gaya kuasa paling besar. Berikut ini gambarnya: <br>
                        <div class="img-container" style="display: flex; justify-content: center; border: 1px solid #000; margin-bottom: 10px;">
                          <img src="./assets/materi/r12.jpg">
                        </div> 
                    d.	3, tumpu T di titik 4 dan F di titik 7, pada kondisi ini lk = 3 dan lb = 1, artinya gaya kuasa kecil. Berikut ini gambarnya:<br>
                        <div class="img-container" style="display: flex; justify-content: center; border: 1px solid #000; margin-bottom: 10px;">
                         <img src="./assets/materi/r13.jpg">
                        </div>
      `
    },
  ];
  quizzes4: Quiz[] = [
    {
      question: '6.	Katrol tetap yang ditarik dengan gaya 40 N mampu menarik beban sebesar?',
      options: ['a.	400 N',
                'b.	200 N',
                'c.	40 N',
                'd.	20 N'],
      answer: 'c.	40 N',
      explanation: `Diketahui: <br>
                    F = 40 N <br>
                    Ditanyakan: <br>
                    w...? <br>
                    Penyelesaian: <br>
                    Pada katrol tetap, w = F, jadi beban yang bisa diangkat sama dengan gaya yang digunakan, yaitu <b>40 N</b>.
      
      `
    },
    {
      question: '7.	Sebuah katrol tetap digunakan untuk menimba air. Bila setiap timba air beratnya 100  N, berapa kuasa yang dibutuhkan?',
      options: ['a.	100 N',
                'b.	150 N',
                'c.	200 N',
                'd.	250 N'],
      answer: 'a.	100 N',
      explanation: `Diketahui :  <br>
                    w = 100 N<br>
                    Ditanyakan:<br>
                    F....?<br>
                    Penyelesaian:<br>
                    w/F = KM  100/F = 1<br>
                            F = 100 . 1<br>
                        F = 100 N<br>
                    Jadi, kuasa yang dibutuhkan untuk menimba air tersebut adalah <b>100 N</b>.
      `
    },
    {
      question: '8.	Sebuah katrol tetap digunakan untuk mengangkat beban sebesar 50 N. Jika lengan kuasanya 15 m. Berapakah gaya yang perlu dikeluarkan dan berapakah panjang lengan bebannya?',
      options: ['a.	Gaya yang perlu dikeluarkan : 15 N, Panjang lengan beban katrol : 50',
                'b.	Gaya yang perlu dikeluarkan : 15 N, Panjang lengan beban katrol : 15',
                'c.	Gaya yang perlu dikeluarkan : 50 N, Panjang lengan beban katrol : 15',
                'd.	Gaya yang perlu dikeluarkan : 50 N, Panjang lengan beban katrol : 50'],
      answer: 'c.	Gaya yang perlu dikeluarkan : 50 N, Panjang lengan beban katrol : 15',
      explanation: `Diketahui: <br>
                    w = 50 N lk = 15 m<br>
                    Ditanyakan:<br>
                    a.	F...?<br>
                    b.	lb...?<br>
                    Penyelesaian:<br>
                    w/F = KM<br>
                    50/F = 1<br>
                    F = 50 . 1<br>
                    F = 50 N<br>
                    Jadi, gaya yang dikeluarkan untuk mengangkat beban adalah 50 N.<br>
                    b.	lk/lb = KM    <br>
                    15/lb = 1 <br>
                    lb = 15 . 1        <br>
                    lb = 15 m<br>
                    Jadi, panjang lengan beban katrol adalah <b>15 meter</b>.
      `
    },
    {
      question: '9.	Sebuah katrol bergerak digunakan untuk mengangkat beban. Jika gaya yang diperluan untuk mengangkat beban tersebut 196 N, berapakah massa beban jika g = 9,8 m/s2?',
      options: ['a.	19,6 kg',
                'b.	20 kg',
                'c.	39,2 kg',
                'd.	40 kg'],
      answer: 'd.	40 kg',
      explanation: `Diketahui: <br>
                    F = 196 N <br>
                    g = 9,8 m/s2<br>
                    Ditanyakan : m....? <br>
                    Penyelesaian :<br>
                    F = 1/2 w <br>
                    w = 2 . F <br>
                    = 2 . 196     <br>
                    = 392 N<br>
                    w = m . g <br>
                    392 =  m . 9,8 <br>
                    m = 392/9,8<br>
                        = 40 kg<br>
                    Jadi, massa beban tersebut adalah <b>40 kg</b>.
      `
    },
    {
      question: '10.	Sebuah benda yang beratnya 2.000 N akan diangkat dengan katrol majemuk (takal). Jika gaya (kuasa) yang dikerjakan hanya 400 N, berapakah banyaknya katrol yang harus digunakan?',
      options: ['a.	5 buah',
                'b.	6 buah',
                'c.	7 buah',
                'd.	8 buah'],
      answer: 'a.	5 buah',
      explanation: `Diketahui:<br>
                    w = 2.000 N<br>
                    F = 400 N<br>
                    Ditanyakan: n....? <br>
                    Penyelesaian: 	<br>
                    n = w/F<br>
                    = 2.000/400<br>
                    = 5<br>
                    Jadi, jumlah katrol yang harus digunakan adalah <b>5 buah</b>.
      `
    },
    {
      question: '11.	Bidang miring sepanjang 2 m digunakan untuk menaikan box yang beratnya 5.000 N ke atas truk dengan gaya sebesar 2.500 N. Berapakah tinggi bak truk?',
      options: ['a.	2 meter',
                'b.	1,5 meter',
                'c.	1 meter',
                'd.	0,5 meter'],
      answer: 'c.	1 meter',
      explanation: `Diketahui: <br>
                    s = 2 m <br>
                    w = 5.000 N<br>
                    F = 2.500 N<br>
                    Ditanyakan : h....?<br>
                    Penyelesaian:<br>
                    h = F/w . s<br>
                      = 2.500/5.000 . 2<br>
                      = 1 m<br>
                    Jadi, tinggi bak truk tersebut adalah <b>1 meter</b>.
      `
    },
    {
      question: '12.	Bidang miring sepanjang 4 m digunakan untuk menaikan benda di ketinggian 1 m. Jika massa benda 60 kg berapa gaya dorong yang di perlukan?',
      options: ['a.	150 N',
                'b.	240 N',
                'c.	400 N',
                'd.	600 N'],
      answer: 'a.	150 N',
      explanation: `Diketahui: <br>
                    s = 4 m <br>
                    h = 1 m <br>
                    m = 60 kg <br>
                    g = 10 m/s2<br>
                    Ditanyakan:<br>
                    F....?<br>
                    Penyelesaian:<br>
                    F = h/s . m . g<br>
                      = 1/4 . 60 . 10<br>
                      = 150 N<br>
                    Jadi, gaya dorong yang diperlukan untuk menaikkan benda adalah <b>150 N</b>.
      `
    },
    {
      question: '13.	Papan miring sepanjang 2,5 meter digunakan untuk jalur mendorong benda untuk dinaikkan ke tempat dengan ketinggian 1 meter. Jika gaya didorong 50 N. Hitunglah berat benda yang didorong.',
      options: ['a.	20 N',
                'b.	50 N',
                'c.	125 N',
                'd.	150 N'],
      answer: 'c.	125 N',
      explanation: `Diketahui:<br>
                    s = 2,5 m <br>
                    h = 1 m<br>
                    F = 50 N<br>
                    Ditanyakan : w....? <br>
                    Penyelesaian:<br>
                    w = s/h .F<br>
                        = 2,5/1 . 50<br>
                        = 125 N<br>
                    Jadi, berat benda yang didorong adalah <b>125 N</b>.
      `
    },
  ];
  quizzes5: Quiz[] = [
    {
      question: '14.	Bidang miring digunakan untuk memindahkan benda bermassa 20 kg. Jika gaya geseknya diabaikan, maka besar gaya F yang diperlukan untuk menahan ke bawah adalah... (g = 10 m/s2)',
      options: ['a.	120 N',
                'b.	160 N',
                'c.	200 N',
                'd.	480 N'],
      answer: 'a.	120 N',
      explanation: `Diketahui: <br>
                    m = 20 kg h = 6 m g = 10 m/s2<br>
                    Panjang bidang miring (s) dicari menggunakan rumus Phytagoras untuk sisi miring:<br>
                    s = √62 + 82   <br>
                    = √36 + 64<br>
                    = √100   <br>
                    = 10 m <br>
                    Ditanyakan: F....?<br>
                    Penyelesaian:<br>
                    F = h/s . m . g<br>
                      = 6/10 . 20 . 10<br>
                      = 120 N<br>
                    Jadi, besar gaya F yang diperlukan untuk menahan ke bawah adalah <b>120 N</b>.
      `
    },
  ];
  //Daya
  quizzes6: Quiz[] = [
    {
      question: '15.	Sebuah bidang miring ujung atasnya setinggi 1 meter dari alasnya, sedangkan panjang bidang miring tersebut 4 meter, berat benda yang akan dinaikkan 1.000 Newton. Berapakah besarnya gaya dorong yang di perlukan bila bidang miring tersebut di anggap licin?',
      options: ['a.	200 N',
                'b.	250 N',
                'c.	333 N',
                'd.	400 N'],
      answer: 'b.	250 N',
      explanation: `Diketahui: <br>
                    h = 1 m  <br>
                    s = 4 m  <br>
                    w = 1.000 N <br>
                    Ditanyakan: F....? <br>
                    Penyelesaian: <br>
                    F = h/s . w <br>
                      = 1/4 .1.000 <br>
                      = 250 N <br>
                    Jadi, besar gaya dorong yang diperlukan adalah <b>250 N</b>. 
      `
    },
    {
      question: `16.	Sebuah benda yang beratnya 2.500 N dipindahkan ke suatu tempat yang tingginya 2 meter dengan menggunakan bidang miring. Jarak yang harus ditempuh benda adalah 8 meter. Anggap bidang miring itu licin.
                  <br>a.	Berapakah usaha yang harus diberikan untuk mengangkat benda secara langsung?
                  b.	Berapakah gaya yang harus dilakukan jika melalui bidang miring?
                  c.	Berapakah keuntungan mekanis bidang miring itu?
                 `,
      options: ['a.	W=5000 KJ, F=625 N & KM = 4',
                'b.	W=5000 Joule, F=62,5 N & KM = 2',
                'c.	W=5 KJ, F=625 N & KM = 4',
                'd.	W=5 Joule, F=62,5 N & KM = 2'],
      answer: 'c.	W=5 KJ, F=625 N & KM = 4',
      explanation: `a.	5.000  Joule atau 5 kJ <br>
                    b.	625 N<br>
                    c.	4 <br>
                    Diketahui:  <br>
                    w = 2.500 N  <br>
                    h = 2 m <br>
                    s = 8 m <br>
                    Ditanyakan: <br>
                    a.	W....? <br>
                    b.	F....? <br>
                    c.	KM...?  <br>
                    Penyelesaian: <br>
                    a. Usaha yang diberikan untuk mengangkat benda secara langsung ke ketinggian 2 meter. <br>
                    W = F . h = w . h <br>
                        = 2.500 . 2 <br>
                        = 5.000 J, atau <br>
                        = 5 kJ <br>
                    Jadi, usaha yang diperlukan untuk mengangkat benda secara langsung adalah 
                    5.000  Joule atau <b>5 kJ</b>. <br>
                    b. Gaya yang harus dilakukan jika melalui bidang miring <br>
                    F = h/s . w<br>
                      = 2/8 . 2.500 <br>
                      = <b>625 N</b> <br>
                    c. Keuntungan mekanis bidang miring <br>
                    KM = s/h  <br>
                          = 8/2<br>
                          = 4<br>
                    Jadi, keuntungan mekanis bidang miring tersebut adalah <b>4</b>. 
      `
    },
    {
      question: '17.	Keuntungan mekanis sebuah roda dengan jari-jari 28 cm yang dihubungkan dengan dengan poros dengan jari-jari 4 cm adalah ....',
      options: ['a.	28',
                'b.	21',
                'c.	14',
                'd.	7'],
      answer: 'd.	7',
      explanation: `Diketahui : <br>
                    R1 : 28 cm <br>
                    R2 : 4 cm <br>
                    Ditanya : KM ? <br>
                    Jawab : <br>
                    KM	= R1/R2 <br>
                      = 28 cm / 4 cm <br>
                      = <b>7</b>
      `
    },
    {
      question: '18.	Sebuah roda berporos memiliki jari-jari roda 3 kali lipat jari-jari poros, jari-jari poros 15 cm, digunakan untuk mengangkat beban. Keuntungan mekanis dari roda berporos tersebut adalah ....',
      options: ['a.	2',
                'b.	3',
                'c.	4',
                'd.	5'],
      answer: 'b.	3',
      explanation: `Diketahui : <br>
                    R2 = 15 <br>
                    R1 : 3 x R2 = 45 cm <br>
                    Ditanya : KM ? <br>
                    Jawab : <br> 
                    KM	= R1/R2 <br>
                        = 45 cm / 15 cm <br>
                        = <b> 3 </b>
      `
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

  slideOpts = {
    initialSlide: 0, // Kartu mana yang akan ditampilkan pertama kali
    speed: 500,      // Kecepatan animasi slide (ms)
    spaceBetween: 16 // Jarak antara kartu (px)
  };

  prevSlide() {
    this.slides.slidePrev();
  }

  nextSlide() {
    this.slides.slideNext();
  }

  async openModal(imageSrc: string) {
    const modal = await this.modalController.create({
      component: ModalsPage,
      componentProps: {
        'imageSrc': imageSrc
      }
    });
    return await modal.present();

  }
}
