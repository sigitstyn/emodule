/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-glosarium',
  templateUrl: './glosarium.page.html',
  styleUrls: ['./glosarium.page.scss'],
})
export class GlosariumPage  implements OnInit{
  selectedWord: { kata: string; deskripsi: string } | null = null;
  words: { kata: string; deskripsi: string }[] = [
    {
      kata: 'Bidang miring',
      deskripsi: 'Salah satu jenis pesawat sederhana yang digunakan untuk memindahkan benda dengan lintasan yang miring ke ketinggian tertentu.'
    },
    {
      kata: 'Daya',
      deskripsi: 'Adalah besarnya energi yang dipergunakan dalam setiap detik, sehingga dapat ditentukan dengan cara membagi besar usaha dengan selang waktunya.'
    },
    {
      kata: 'Dongkrak hidrolik ',
      deskripsi: 'Salah satu alat dengan prinsip tuas yang digunakanuntuk mengangkat mobil ketika mengganti ban mobil.'
    },
    {
      kata: 'Gaya',
      deskripsi: 'Suatu dorongan atau tarikan.'
    },
    {
      kata: 'Gaya beban',
      deskripsi: 'Gaya yang dikerahkan pesawat kepada beban.'
    },
    {
      kata: 'Gaya kuasa',
      deskripsi: 'Gaya yang dikerahkan kepada pesawat.'
    },
    {
      kata: 'Katrol',
      deskripsi: 'Pesawat sederhana yang dapat memudahkan melakukanusaha berupa roda yang berputar pada porosnya.'
    },
    {
      kata: 'Keuntungan mekanik ',
      deskripsi: 'Perbandingan antara gaya beban dengan gaya kuasa sehingga memperingan kerja manusia.'
    },
    {
      kata: 'Kuasa',
      deskripsi: 'Gaya yang diperlukan untuk mengangkat beban.'
    },
    {
      kata: 'Lengan beban ',
      deskripsi: 'Jarak antara gaya beban dengan titik tumpu.'
    },
    {
      kata: 'Lengan kuasa ',
      deskripsi: 'jarak antara gaya kuasa dengan titik tumpu.'
    },
    {
      kata: 'Pesawat',
      deskripsi: 'Adalah alat yang membantu orang melakukan pekerjaan dengan lebih mudah.'
    },
    {
      kata: 'Pesawat sederhana ',
      deskripsi: 'Merupakan alat yang paling sederhana untuk mempermudah pekerjaan.'
    },
    {
      kata: 'Roda berporos',
      deskripsi: 'Pesawat sederhana yang terdiri dari dua roda yang dihubungkan dengan sebuah poros yang dapat berputar bersama-sama'
    },
    {
      kata: 'Tuas / pengungkit ',
      deskripsi: 'Adalah batang yang berporos dari titik tetap yang disebut titik tumpu.'
    },
    {
      kata: 'Usaha',
      deskripsi: ' Adalah energi yang disalurkan gaya ke sebuah benda sehingga benda tersebut bergerak.'
    },
    // Tambahkan kata dan deskripsi lainnya di sini
  ];

  searchTerm: string = '';
  filteredWords: { kata: string; deskripsi: string }[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;

  constructor() {
    this.sortWordsAscending();
  }

  ngOnInit() {
    this.filterWords(); // Ganti ini dari getWordsForCurrentPage()
  }

  sortWordsAscending() {
    this.words.sort((a, b) => {
      const wordA = a.kata.toLowerCase();
      const wordB = b.kata.toLowerCase();
      return wordA.localeCompare(wordB);
    });
  }

  filterWords() {
    const filtered = this.words.filter(word =>
      word.kata.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    this.filteredWords = filtered.slice(
      (this.currentPage - 1) * this.itemsPerPage,
      this.currentPage * this.itemsPerPage
    );
  }

  search() {
    this.currentPage = 1; // Setel halaman kembali ke 1 saat mencari kata-kata baru
    this.filterWords(); // Perbarui kata-kata yang ditampilkan
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.filterWords();
    }
  }

  nextPage() {
    const maxPage = Math.ceil(
      this.words.length / this.itemsPerPage
    );
    if (this.currentPage < maxPage) {
      this.currentPage++;
      this.filterWords();
    }
  }

  showDescription(word: { kata: string; deskripsi: string }) {
    this.selectedWord = word;
  }
  hideDescription() {
    this.selectedWord = null;
  }
}
