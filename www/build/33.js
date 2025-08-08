webpackJsonp([33],{

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditShieldPageModule", function() { return CreditShieldPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__credit_shield__ = __webpack_require__(865);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreditShieldPageModule = /** @class */ (function () {
    function CreditShieldPageModule() {
    }
    CreditShieldPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__credit_shield__["a" /* CreditShieldPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__credit_shield__["a" /* CreditShieldPage */]),
            ],
        })
    ], CreditShieldPageModule);
    return CreditShieldPageModule;
}());

//# sourceMappingURL=credit-shield.module.js.map

/***/ }),

/***/ 865:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditShieldPage; });
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
 * Generated class for the CreditShieldPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreditShieldPage = /** @class */ (function () {
    function CreditShieldPage(navCtrl, navParams, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.isDetailPage = this.navParams.get("isDetailPage") || false;
        this.banner = [
            {
                img: "assets/imgs/banner1.png"
            },
            {
                img: "assets/imgs/banner2.png"
            }
        ];
        this.listMenu = [
            {
                title: "Rincian Produk",
                handler: "modalProductDetail"
            },
            {
                title: "Untuk Diperhatikan",
                handler: "modalAttention"
            },
            {
                title: "Tentang Perusahaan Asuransi",
                handler: "modalCompanyAbout"
            }
        ];
        this.listCard = [
            {
                nama: "ADHIE KAMA ESHVARA        ",
                alias: "C59562023113015370183673",
                noHp: "0817293132     ",
                card: "4201920095155956",
                email: "adhieprimavera@gmail.com                "
            },
            {
                nama: "ADHIE KAMA ESHVARA        ",
                alias: "C74122023113015370183672",
                noHp: "0817293132     ",
                card: "4890870051977412",
                email: "adhieprimavera@gmail.com                "
            },
            {
                nama: "ADHIE KAMA ESHVARA        ",
                alias: "C74122023113015370183897",
                noHp: "0817293132     ",
                card: "4890870051978972",
                email: "adhieprimavera@gmail.com                "
            }
        ];
        this.myModalOptions = {
            showBackdrop: true,
            enableBackdropDismiss: true,
            enterAnimation: 'modal-md-slide-in',
            leaveAnimation: 'modal-md-slide-out',
        };
    }
    CreditShieldPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreditShieldPage');
        if (!this.isDetailPage) {
            // this.slides.lockSwipeToPrev(true);
        }
        else {
            var menu = {
                title: "Manfaat Asuransi",
                handler: "modalCompanyAbout"
            };
            this.listMenu.splice(0, 0, menu);
        }
    };
    CreditShieldPage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        console.log('Current index is', currentIndex);
        // if (currentIndex == 0) {
        //   this.slides.lockSwipeToPrev(true);
        //   this.slides.lockSwipeToNext(false);
        // } else if (currentIndex == 1) {
        //   this.slides.lockSwipeToPrev(false);
        //   this.slides.lockSwipeToNext(true);
        // }
    };
    CreditShieldPage.prototype.handlerMenu = function (item) {
        if (item == 'modalAttention') {
            this.myModalOptions.cssClass = 'modal-bg';
            this.toModalAttention();
        }
        if (item == 'modalProductDetail') {
            this.myModalOptions.cssClass = 'modal-bg';
            this.toModalProductDetail();
        }
        if (item == 'modalCompanyAbout') {
            this.myModalOptions.cssClass = 'modal-company-bg';
            this.toModalCompanyAbout();
        }
    };
    CreditShieldPage.prototype.toModalManfaat = function () {
        var modalManfaat = this.modal.create("CreditShieldBottomModalPage", { isModalManfaat: true }, this.myModalOptions);
        modalManfaat.present();
    };
    CreditShieldPage.prototype.toModalAttention = function () {
        var modalManfaat = this.modal.create("CreditShieldBottomModalPage", { isModalAttention: true }, this.myModalOptions);
        modalManfaat.present();
    };
    CreditShieldPage.prototype.toModalProductDetail = function () {
        var modalManfaat = this.modal.create("CreditShieldBottomModalPage", { isModalProductDetail: true }, this.myModalOptions);
        modalManfaat.present();
    };
    CreditShieldPage.prototype.toModalCompanyAbout = function () {
        var modalManfaat = this.modal.create("CreditShieldBottomModalPage", { isModalCompanyAbout: true }, this.myModalOptions);
        modalManfaat.present();
    };
    CreditShieldPage.prototype.toPanduanKlaim = function () {
        this.navCtrl.push("CreditShieldGuidePage");
    };
    CreditShieldPage.prototype.toApply = function () {
        this.listCard.forEach(function (element) {
            element["model"] = false;
        });
        console.log('listCard', this.listCard);
        this.navCtrl.push("CreditShieldApplyPage");
    };
    CreditShieldPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], CreditShieldPage.prototype, "slides", void 0);
    CreditShieldPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-credit-shield',template:/*ion-inline-start:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/credit-shield/credit-shield.html"*/'<!--\n  Generated template for the CreditShieldPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  <!-- Header pengajuan -->\n  <div *ngIf="!isDetailPage">\n    <ion-slides slidesPerView="1" speed="500" autoplay="3000" loop="true" pager="true" (ionSlideDidChange)="slideChanged()" centeredSlides="true"\n      style="width:100%;" class="pager-bottom">\n      <ion-slide align="center" *ngFor="let item of banner">\n        <div align="center" class="bg-slide" [ngStyle]="{\'background-image\':\'url(\' + item.img + \')\'}">\n          <!-- <div align="center"> -->\n          <!-- <img [src]="item.img" style="margin-top: -90px;"> -->\n          <div class="header-cont" padding-left padding-right>\n            <img src="assets/icon/icon-back.svg" alt="" class="icon-back" (click)="goBack()">\n            <div class="header-title">Asuransi</div>\n            <div style="width: 32px; height: 32px;"></div>\n          </div>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n  <!-- Header Detail Credit Shield -->\n  <div *ngIf="isDetailPage">\n    <div class="header-cust" style="background-image: url(\'assets/imgs/credit-shield-detail.png\');">\n      <div class="header-cont" padding-left padding-right>\n        <img src="assets/icon/icon-back.svg" alt="" class="icon-back" (click)="goBack()">\n        <div class="header-title">Asuransi Anda</div>\n        <div style="width: 32px; height: 32px;"></div>\n      </div>\n    </div>\n  </div>\n\n  <div class="main-content" [ngStyle]="{\'background-color\': isDetailPage ? \'#FAFAFA\' : \'#FFF\', \'margin-top\': isDetailPage ? \'0px\' : \'-30px\'}">\n    <div class="pengajuan-page" *ngIf="!isDetailPage">\n      <p class="title" *ngIf="!isDetailPage">Asuransi Mega Ultima Shield</p>\n      <span class="product-desc">Asuransi Jiwa Kredit yang memberikan manfaat berupa perlindungan terhadap tagihan\n        fasilitas pinjaman (tagihan\n        kartu kredit) ketika terjadi risiko meninggal dunia, risiko cacat sementara/cacat tetap total, karena sakit\n        ataupun kecelakaan, maupun risiko terdiagnosa pertama kali atas 5 penyakit kritis.</span>\n\n      <div class="info-container">\n        <span class="title-info">Premi asuransi 0,68% dari total tagihan terhutang setiap bulan.</span>\n      </div>\n\n      <div class="company-service">\n        <div class="company-partner">Perusahaan penyedia asuransi :</div>\n        <img src="assets/imgs/company-partner.png" alt="logo" class="img-company-partner">\n        <img src="assets/icon/credit-shield-plus.png" alt="logo" class="img-natural">\n      </div>\n\n      <div class="manfaat-asuransi-bg">\n        <div class="manfaat-asuransi">\n          <div class="title">\n            <img src="assets/icon/lamp-idea.png" alt="logo" class="img-idea">\n            <div class="title-text">Manfaat Asuransi</div>\n          </div>\n          <div class="manfaat-asuransi-point">\n            <div style="display: flex; flex-direction: row; align-items: baseline;">\n              <img src="assets/icon/point-green.png" alt="logo" class="img-point">\n              <div class="text-point">Pelunasan tagihan fasilitas pinjaman (tagihan kartu kredit) jika:</div>\n            </div>\n            <div class="manfaat-condition">\n              <div class="point-wrapper"><span>1.</span><span style="margin-left: 2px;">Tutup usia bukan karena\n                  kecelakaan\n                  hingga 200% dari total tagihan</span></div>\n              <div class="point-wrapper"><span>2.</span><span style="margin-left: 2px;">Tutup usia karena kecelakaan\n                  hingga 500% dari total tagihan</span></div>\n              <div class="point-wrapper"><span>3.</span><span style="margin-left: 2px;">Terdiagnosa salah satu dari 5\n                  penyakit kritis hingga 100% dari total tagihan</span></div>\n              <div class="point-wrapper"><span>4.</span><span style="margin-left: 2px;">Terjadi risiko cacat tetap total\n                  karena sakit atau kecelakaan hingga 100% dari total tagihan</span></div>\n            </div>\n\n            <div style="display: flex; flex-direction: row; align-items: baseline; margin-top: 14px;">\n              <img src="assets/icon/point-green.png" alt="logo" class="img-point">\n              <div class="text-point">Manfaat dari tagihan fasilitas pinjaman (tagihan kartu kredit) jika terjadi risiko\n                cacat sementara karena sakit atau kecelakaan selama maksimal 12 bulan (sesuai Sertifikat Asuransi)\n                hingga\n                10%</div>\n            </div>\n\n            <div style="text-align: center; font-size: 12px; color: #FA9D1C; margin-top: 22px;"\n              (click)="toModalManfaat()">Lihat Lebih Detail</div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class="klaim-asuransi" *ngIf="!isDetailPage">\n      <span class="title">Klaim Asuransi</span>\n      <div class="container-klaim">\n        <img src="assets/icon/lamp-idea.png" alt="logo" class="klaim-left-content">\n        <div class="klaim-right-content">\n          <span class="text-top">Klaim dengan Mudah!</span>\n          <span class="text-mid">Jangan takut ribet klaim asuransi dengan mudah dan aman sekarang!</span>\n          <span class="text-bottom" (click)="toPanduanKlaim()">Lihat Panduan Klaim</span>\n        </div>\n      </div>\n    </div>\n\n    <div class="detail-wrapper" *ngIf="isDetailPage">\n      <div class="title-detail">\n        <div style="font-size: 16px; color: #194E5A; font-weight: 700;">Detail Keikutsertaan Asuransi</div>\n        <img src="assets/icon/credit-shield-plus2.png" alt="logo" class="img-natural2">\n      </div>\n      \n      <div class="title-section" style="margin-top: 40px;">Kartu Kredit Terdaftar</div>\n      <div class="card-container">\n        <img src="assets/imgs/cc_barca.jpg" alt="logo" class="img-card">\n        <div class="card-detail">\n          <div class="card-name">Mega Travel Card</div>\n          <div class="card-no">4312-2678-9012-3456</div>\n        </div>\n      </div>\n\n      <div class="title-section" style="margin-top: 20px;">Biaya Premi</div>\n      <div class="biaya-premi">0.68% dari Tagihan Fasilitas Pinjaman (Tagihan Kartu Kredit)</div>\n\n      <div class="title-section" style="margin-top: 22px;">Penyedia Asuransi</div>\n      <img src="assets/imgs/company-partner.png" alt="logo" class="img-company-partner">\n      \n      <div class="line-divider"></div>\n      \n      <div class="sert-wrapper">\n        <img src="assets/icon/icon-cert.svg" alt="logo" class="img-cert">\n        <div class="desc-section">\n          <div style="font-size: 16px; color: #194E5A; font-weight: 700;">Sertifikat Asuransi Anda</div>\n          <div style="font-size: 12px; color: #979797; font-weight: 400; margin-top: 2px; line-height: 18px; max-width: 220px;">\n            Cek email untuk melihat sertifikat. Silakan akses <span style="color: #6D6A6A; font-weight: 500;">Meli Chatbox</span> via www.pfimegalife.co.id \n            atau Whatsapp 081197900111 jika ada pertanyaan atau permintaan Sertifikat Asuransi.</div>\n          </div>\n        </div>\n    </div>\n\n    <div class="klaim-wrapper" *ngIf="isDetailPage">\n      <span class="title">Klaim Asuransi</span>\n      <div class="container-klaim">\n        <img src="assets/icon/lamp-idea.png" alt="logo" class="klaim-left-content">\n        <div class="klaim-right-content">\n          <span class="text-top">Klaim dengan Mudah!</span>\n          <span class="text-mid">Jangan takut ribet klaim asuransi dengan mudah dan aman sekarang!</span>\n          <span class="text-bottom" (click)="toPanduanKlaim()">Lihat Panduan Klaim</span>\n        </div>\n      </div>\n    </div>\n\n    <div class="informasi-peserta-wrapper" *ngIf="isDetailPage">\n      <div class="title">Informasi Peserta Asuransi</div>\n      <div class="label-text">Nama Lengkap</div>\n      <div class="value-text">Marsa Wafira</div>\n\n      <div class="label-text">Tanggal Lahir</div>\n      <div class="value-text">Marsa Wafira</div>\n\n      <div class="label-text">Email</div>\n      <div class="value-text">Marsa Wafira</div>\n    </div>\n\n    <div class="list-menu-container">\n      <div *ngFor="let item of listMenu">\n        <div class="item-list-wrapper" (click)="handlerMenu(item.handler)">\n          <span class="item-title">{{item.title}}</span>\n          <img src="assets/icon/arrow-list-item.png" alt="logo" class="img-arrow">\n        </div>\n      </div>\n    </div>\n\n    <div class="note">\n      <img src="assets/icon/phone.png" alt="logo" class="img-phone">\n      <div class="note-text">Jika terdapat kendala terkait Asuransi Mega Ultima Shield, hubungi\n        <span class="note-text-bold">Megacall 08041500010</span> atau <span class="note-text-bold">PFI Megalife\n          02129545555</span>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n\n<ion-footer padding *ngIf="!isDetailPage">\n  <button ion-button class="btn-lanjut-only" (click)="toApply()">Ajukan Sekarang</button>\n</ion-footer>'/*ion-inline-end:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/credit-shield/credit-shield.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], CreditShieldPage);
    return CreditShieldPage;
}());

//# sourceMappingURL=credit-shield.js.map

/***/ })

});
//# sourceMappingURL=33.js.map