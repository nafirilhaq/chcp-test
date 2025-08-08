webpackJsonp([37],{

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditShieldBottomModalPageModule", function() { return CreditShieldBottomModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__credit_shield_bottom_modal__ = __webpack_require__(861);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreditShieldBottomModalPageModule = /** @class */ (function () {
    function CreditShieldBottomModalPageModule() {
    }
    CreditShieldBottomModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__credit_shield_bottom_modal__["a" /* CreditShieldBottomModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__credit_shield_bottom_modal__["a" /* CreditShieldBottomModalPage */]),
            ],
        })
    ], CreditShieldBottomModalPageModule);
    return CreditShieldBottomModalPageModule;
}());

//# sourceMappingURL=credit-shield-bottom-modal.module.js.map

/***/ }),

/***/ 861:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditShieldBottomModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CreditShieldBottomModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreditShieldBottomModalPage = /** @class */ (function () {
    function CreditShieldBottomModalPage(navCtrl, navParams, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.isModalManfaat = this.navParams.get("isModalManfaat") || false;
        this.isModalAttention = this.navParams.get("isModalAttention") || false;
        this.isModalProductDetail = this.navParams.get("isModalProductDetail") || false;
        this.isModalCompanyAbout = this.navParams.get("isModalCompanyAbout") || false;
        this.listItemManfaat = [
            { value: "Bila Peserta meninggal dunia bukan karena Kecelakaan maka kepada Pemegang Polis akan dibayarkan manfaat sebesar 200% dari Tagihan Fasilitas Pinjaman (Tagihan Kartu Kredit) saat terjadi risiko." },
            { value: "Bila Peserta meninggal dunia karena Kecelakaan maka kepada Pemegang Polis akan dibayarkan manfaat sebesar 500% dari Tagihan Fasilitas Pinjaman (Tagihan Kartu Kredit) saat terjadi risiko." },
            { value: "Bila Peserta mengalami Cacat Tetap Total karena sakit/Kecelakaan maka kepada Pemegang Polis akan dibayarkan manfaat sebesar 100% dari Tagihan Fasilitas Pinjaman (Tagihan Kartu Kredit) pada saat Peserta dinyatakan mengalami Cacat Tetap Total dan telah memenuhi definisi sebagaimana tercantum pada Sertifikat Asuransi." },
            { value: "Bila Peserta mengalami Cacat Sementara karena sakit/Kecelakaan selama sekurang-kurangnya 30 hari kalender berturut-turut maka kepada Pemegang Polis akan dibayarkan manfaat sebesar 10% dari Tagihan Fasilitas Pinjaman (Tagihan Kartu Kredit) atau Rp50.000 (mana yang lebih tinggi), setiap bulannya selama Peserta mengalami Cacat Sementara sampai maksimal 12 bulan dan maksimal sebesar Tagihan Fasilitas Pinjaman (Tagihan Kartu Kredit) pada saat Peserta dinyatakan mengalami Cacat Sementara dan telah memenuhi definisi sebagaimana tercantum pada Sertifikat Asuransi atau hingga nilai maksimum yang telah ditentukan (mana yang lebih dulu terjadi)." },
            { value: "Bila Peserta terdiagnosa untuk pertama kali salah satu penyakit dari 5 (lima) Penyakit Kritis, maka kepada Pemegang Polis akan dibayarkan manfaat sebesar 100% dari Tagihan Fasilitas Pinjaman (Tagihan Kartu Kredit)." },
            { value: "Apabila manfaat yang dibayarkan Penanggung kepada Pemegang Polis atas risiko yang dialami oleh Peserta melebihi dari jumlah Tagihan Fasilitas Pinjaman (Tagihan Kartu Kredit), maka sisa manfaat tersebut akan diserahkan kepada pihak Yang Ditunjuk (Ahli Waris)." },
            { value: "Maksimum Uang Pertanggungan adalah sebesar Rp350.000.000 atau sesuai dengan limit dari Fasilitas Pinjaman (Kartu Kredit)." }
        ];
        this.listItemAttention = [
            { value: "Mega Ultima Shield adalah produk asuransi dari PT PFI Mega Life Insurance selaku Penanggung. Produk ini BUKAN produk bank, BUKAN tabungan, BUKAN deposito, BUKAN kewajiban dan TIDAK dijamin oleh Bank Mega. Produk asuransi ini tidak termasuk dalam cakupan program penjaminan Lembaga Penjamin Simpanan (LPS). Peran Bank Mega sebagai Pemegang Polis dan penggunaan logo Bank Mega adalah wujud kerjasama pemasaran dengan model bisnis distribusi produk antara Bank Mega dengan PT PFI Mega Life dan tidak dapat diartikan bahwa produk asuransi ini merupakan produk Bank Mega. Keikutsertaan Pemegang Kartu dalam produk asuransi PT PFI Mega Life bersifat opsional (pilihan nasabah)." },
            { value: "Rincian manfaat dan syarat dan ketentuan terdapat dalam Sertifikat Asuransi yang diterbitkan oleh PT PFI Mega Life Insurance. Bank Mega tidak bertanggung jawab atas isi dari Sertifikat Asuransi yang diterbitkan oleh PT PFI Mega Life Insurance terkait dengan produk asuransi. Pembeli produk asuransi wajib membaca dan tunduk pada syarat dan ketentuan sebagaimana tercantum dalam Sertifikat Asuransi. Ada beberapa kondisi dimana Manfaat Asuransi tidak dapat dibayarkan. Hal ini tercantum pada ketentuan Pengecualian yang tertera pada Sertifikat Asuransi. Pemegang Kartu disarankan untuk membaca Sertifikat Asuransi untuk mendapatkan informasi yang lebih lengkap mengenai daftar pengecualian manfaat ini." },
            { value: "Dalam hal terjadinya penolakan akan pembayaran Manfaat Asuransi, maka Bank Mega selaku Pemegang Polis tidak berkewajiban untuk menjelaskan alasan penolakan tersebut." },
        ];
        this.listItemProductDetail = [
            { label: "Penanggung", value: "PT PFI Mega Life Insurance" },
            { label: "Nama Produk", value: "Mega Ultima Shield" },
            { label: "Mata Uang", value: "Rupiah (Rp)" },
            { label: "Jenis Produk", value: "Asuransi Jiwa Kumpulan Ekawarsa" },
            { label: "Pemegang Polis", value: "Bank Mega" },
            { label: "Peserta", value: "Pemegang Kartu Kredit Utama Bank Mega" },
            { label: "Masa Asuransi", value: "1 bulan dan dapat diperpanjang sampai Peserta mencapai usia 65 tahun selama Premi terbayar" },
            { label: "Mulai Asuransi", value: "Sejak aplikasi disetujui oleh pihak Asuransi PFI Mega Life dan Premi pertama berhasil didebet/diterima Penanggung" },
            { label: "Uang Pertanggungan", value: "Manfaat Asuransi yang akan diterima oleh Pemegang Polis dan/atau Ahli Waris atas risiko yang terjadi dalam Masa Asuransi" },
            { label: "Usia Masuk Peserta", value: "18 tahun - 64 tahun <br/><br/> Perhitungan usia menggunakan metode ulang tahun terdekat (nearest birthday)" },
            { label: "Cara Pembayaran Premi", value: "Premi dibayarkan secara bulanan dan langsung didebet melalui Kartu Kredit Bank Mega. Berlaku hanya jika ada Tagihan Fasilitas Pinjaman (Tagihan Kartu Kredit saja)" },
            { label: "Premi", value: "0.68% dari Tagihan Fasilitas Pinjaman (Tagihan Kartu Kredit)" }
        ];
    }
    CreditShieldBottomModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreditShieldBottomModalPage');
        if (this.isModalManfaat) {
            this.title = "Manfaat Asuransi";
            this.listItem = this.listItemManfaat;
        }
        else if (this.isModalAttention) {
            this.title = "Untuk Diperhatikan";
            this.listItem = this.listItemAttention;
        }
        else if (this.isModalProductDetail) {
            this.title = "Rincian Produk";
            this.listItem = this.listItemProductDetail;
        }
        else if (this.isModalCompanyAbout) {
            this.title = "Tentang Perusahaan Asuransi";
        }
    };
    CreditShieldBottomModalPage.prototype.back = function () {
        this.view.dismiss();
    };
    CreditShieldBottomModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-credit-shield-bottom-modal',template:/*ion-inline-start:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/credit-shield-bottom-modal/credit-shield-bottom-modal.html"*/'<!--\n  Generated template for the CreditShieldBottomModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  <div id="option-modal">\n    <div class="container">\n      <ion-card class="crd">\n        <ion-card-header>\n          <div style="display: flex; align-items: center;">\n            <img src="assets/icon/close.svg" alt="logo" class="img-close" (click)="back()">\n            <ion-label style="font-weight: 600;font-size: 16px;">{{ title }}</ion-label>\n          </div>\n        </ion-card-header>\n\n        <!-- content modal manfaat & attention -->\n        <ion-card-content *ngIf="!isModalProductDetail && !isModalCompanyAbout"\n          style="overflow-y: auto;max-height: 90%;">\n          <div class="item-content" *ngFor="let item of listItem; let i = index;">\n            <div class="point-wrapper"><span>{{ i + 1 }}.</span><span style="margin-left: 2px;">{{ item.value }}</span>\n            </div>\n          </div>\n        </ion-card-content>\n\n        <!-- content product detail -->\n        <ion-card-content *ngIf="isModalProductDetail" style="overflow-y: auto;max-height: 90%;">\n          <div class="item-content" style="padding: 0px !important;">\n            <div class="product-detail-text">\n              Mega Ultima Shield adalah produk asuransi jiwa kumpulan yang diterbitkan oleh PT PFI Mega Life Insurance\n              memberikan perlindungan finansial kepada setiap Peserta atas risiko meninggal dunia, cacat tetap total,\n              cacat sementara atau sakit kritis dimana manfaat asuransi akan diberikan untuk melunasi sisa fasilitas\n              pinjaman (kartu kredit) kepada Pemegang Fasilitas Pinjaman (Pemegang Kartu Kredit Utama) dan/atau\n              Yang Ditunjuk (Ahli Waris).\n            </div>\n            <div *ngFor="let item of listItem; let i = index; first as isFirst; last as isLast">\n              <div class="product-detail-wrapper"\n                [ngClass]="isFirst ? \'product-detail-wrapper-first\' : isLast ? \'product-detail-wrapper-last\' : \'\'">\n                <div class="product-detail-label">{{ item.label }}</div>\n                <!-- <div class="product-detail-label" style="margin-left: -25px;">{{ item.value }}</div> -->\n                <div class="product-detail-label" style="margin-left: -25px;" [innerHtml]="item.value"></div>\n              </div>\n            </div>\n          </div>\n        </ion-card-content>\n\n        <!-- content tentang perusahaan asuransi -->\n        <ion-card-content *ngIf="isModalCompanyAbout" style="overflow-y: auto;max-height: 90%;">\n          <div class="item-content" style="padding: 0px !important;">\n            <img src="assets/imgs/company-partner.png" alt="logo" class="img-company-partner">\n            <div class="product-detail-text">\n              PFI Mega Life Insurance merupakan bagian dari CT Corporation yang menyediakan rangkaian lengkap produk\n              asuransi jiwa untuk melayani nasabah dengan jangkauan luas, dari korporasi besar hingga individu serta\n              mendukung permintaan pasar asuransi untuk menjadi perusahaan asuransi yang terpercaya. PFI Mega Life\n              Insurance berizin dan diawasi oleh Otoritas Jasa Keuangan (OJK).\n            </div>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/credit-shield-bottom-modal/credit-shield-bottom-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], CreditShieldBottomModalPage);
    return CreditShieldBottomModalPage;
}());

//# sourceMappingURL=credit-shield-bottom-modal.js.map

/***/ })

});
//# sourceMappingURL=37.js.map