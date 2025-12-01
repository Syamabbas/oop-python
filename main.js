// class Siswa {
//     namaSekolah="SD Negeri 1";
//     constructor(nama) {
//         console.log(`inisialisasi data ${nama}`);
//         this._nama = nama;
//     };
//     halo() {
//         document.write(`Halo nama saya ${this.nama} dari sekolah ${this.namaSekolah}`);
//     }
//     get nama(){
//         let namabaru;
//         namabaru = this._nama.toUpperCase();
//         return namabaru;
//     }
//     set nama(value) {
//         if (value.length < 3) {
//             alert('Silahkan masukkan nama');
//             return;
//         }
//         this._nama = value;
//     }
// }

// let teman1 = new Siswa('tono');
// teman1.nama = 'budi';
// document.write(`Nama siswa: ${teman1.nama}`)

// class Hewan {
//     static tempatHidup = 'darat';
//     constructor(nama) {
//         this.nama = nama;
//     }
//     jalan() {
//         document.write(`${this.nama} berjalan`);
//     }
//     static berhenti(){
//         document.write(`Hewan berhenti`);
//     }
// }

// class Burung extends Hewan {
//     constructor(nama,warna){
//         super(nama);
//         this.warna = warna;
//     }
//     terbang() {
//         document.write(`${this.nama} Terbang`);
//     }
//     jalan() {
//         // super.jalan();
//         // document.write('<br>');
//         document.write(`${this.nama} ${this.warna} berjalan 2 <br>`);
//         // this.terbang();
//     }
// }
// // let gajah = new Hewan('Gajah');
// Hewan.berhenti();

class Counter {
    #count = 0;
    #increment() {
        return this.#count++;
    }
    getIncrement(){
        this.#increment();
    }
    getCount() {
        return this.#count;
    }
}

let counter = new Counter();
counter.getIncrement();
counter.getIncrement();
counter.count = 1000;
document.write(`count berisi ${counter.getCount()}`);