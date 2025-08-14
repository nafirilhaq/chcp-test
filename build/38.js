webpackJsonp([38],{

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditShieldApplyPageModule", function() { return CreditShieldApplyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__credit_shield_apply__ = __webpack_require__(860);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreditShieldApplyPageModule = /** @class */ (function () {
    function CreditShieldApplyPageModule() {
    }
    CreditShieldApplyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__credit_shield_apply__["a" /* CreditShieldApplyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__credit_shield_apply__["a" /* CreditShieldApplyPage */]),
            ],
        })
    ], CreditShieldApplyPageModule);
    return CreditShieldApplyPageModule;
}());

//# sourceMappingURL=credit-shield-apply.module.js.map

/***/ }),

/***/ 860:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditShieldApplyPage; });
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
 * Generated class for the CreditShieldApplyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreditShieldApplyPage = /** @class */ (function () {
    function CreditShieldApplyPage(navCtrl, navParams, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modal = modal;
        this.listCard = [
            {
                image: 'assets/imgs/cc_barca.jpg',
                cardName: 'Mega Travel Card',
                cardNo: '4312-2678-9012-3456',
                model: false
            },
            {
                image: 'assets/imgs/cc_barca.jpg',
                cardName: 'Mega Carrefour Card',
                cardNo: '4312-2678-9012-3456',
                model: false
            },
            {
                image: 'assets/imgs/cc_barca.jpg',
                cardName: 'Mega Platinum Card',
                cardNo: '4312-2678-9012-3456',
                model: false
            },
        ];
        this.snk = false;
        this.isChecked = false;
    }
    CreditShieldApplyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreditShieldApplyPage');
    };
    CreditShieldApplyPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    CreditShieldApplyPage.prototype.selectCard = function (item) {
        item.checked = !item.checked;
    };
    CreditShieldApplyPage.prototype.openSnk = function () {
        this.navCtrl.push("CreditShieldSnkPage");
    };
    CreditShieldApplyPage.prototype.handlerRiplay = function (value) {
        var _this = this;
        if (value == false) {
            this.isChecked = !this.isChecked;
        }
        else {
            var modalManfaat = this.modal.create("PdfViewerPage");
            modalManfaat.present();
            modalManfaat.onDidDismiss(function () {
                _this.isChecked = true;
            });
        }
    };
    CreditShieldApplyPage.prototype.next = function () {
        if (!this.snk || !this.isChecked) {
            alert("Pastikan Anda telah mengisi seluruh data dan menyetujui Syarat & Ketentuan serta Ringkasan Informasi Produk & Layanan untuk melanjutkan");
            return false;
        }
        else {
            console.log('listCard', this.listCard);
            var selectedCard_1 = [];
            this.listCard.forEach(function (el) {
                if (el.model == true) {
                    selectedCard_1.push({
                        nama: el.cardName,
                        card: el.cardNo
                    });
                }
            });
            console.log('selectedListCard', selectedCard_1);
        }
    };
    CreditShieldApplyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-credit-shield-apply',template:/*ion-inline-start:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/credit-shield-apply/credit-shield-apply.html"*/'<!--\n  Generated template for the CreditShieldApplyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n  <div class="header-cust" style="background-image: url(\'assets/imgs/banner-apply.png\');">\n    <div class="header-cont" padding-left padding-right>  \n      <img src="assets/icon/icon-back.svg" alt="" class="icon-back" (click)="goBack()">\n      <div class="header-title">Asuransi</div>\n      <div style="width: 32px; height: 32px;"></div>\n    </div>\n    <div class="mega-ultima-title">Mega Ultima Shield</div>\n  </div>\n\n  <!-- <div>\n    <ion-buttons left>\n      <button ion-button clear (click)="goBack()" class="custom-back-btn">\n        <img src="assets/icon/icon-back.svg" alt="" class="icon-back">\n      </button>\n    </ion-buttons>\n    <img src="assets/imgs/banner-apply.png" alt="logo" class="img-company-partner">\n  </div> -->\n\n  <div class="card-section-container" padding>\n    <div class="banner-idea">\n      <img src="assets/icon/lamp-idea.png" alt="logo" class="img-idea">\n      <div class="text-idea">Kartu yang ditampilkan hanya kartu yang dapat melakukan pengajuan Mega Ultima Shield &\n        sudah aktivasi sumber dana.</div>\n    </div>\n\n    <div>\n      <div class="text-choose-title" style="margin: 18px 0 2px;">Pilih Kartu Kredit</div>\n      <div class="text-choose-subtitle">Dapat memilih lebih dari satu</div>\n    </div>\n\n    <div *ngFor="let item of listCard">\n      <div class="list-card-container">\n        <img src="{{item.image}}" alt="logo" class="img-card">\n        <div class="card-detail">\n          <div class="card-name">{{item.cardName}}</div>\n          <div class="card-no">{{item.cardNo}}</div>\n        </div>\n        <ion-checkbox [(ngModel)]="item.model"></ion-checkbox>\n      </div>\n    </div>\n\n    <div class="banner-notif">\n      <img src="assets/icon/notif-banner.svg" alt="logo" class="img-notif">\n      <div class="text-notif">Jika Anda telah terdaftar pada asuransi Credit Shield selain Mega Ultima Shield,\n        maka otomatis perlindungan Anda akan berubah ke asuransi Mega Ultima Shield dengan segala ketentuannya.\n        Kepesertaan Anda pada Asuransi Credit Shield yang lama akan otomatis nonaktif/berakhir.\n      </div>\n    </div>\n  </div>\n\n  <div class="detail-insurance-bg">\n    <div class="detail-insurance-container" padding>\n      <div class="text-choose-title">Detail Pengiriman Sertifikat Asuransi</div>\n\n      <div class="email-wrapper">\n        <img src="assets/icon/email.svg" alt="logo-email" class="img-idea">\n        <div class="right-content">\n          <div class="email-label">Email</div>\n          <div class="email-value">marsawafiraa@gmail.com</div>\n        </div>\n      </div>\n\n      <div class="email-info">Email ini adalah alamat email yang terdaftar di sistem Bank Mega</div>\n\n      <div class="important-note">\n        <img src="assets/icon/notice.svg" alt="logo-important" class="img-important">\n        <div class="text-note">\n          <div class="text-important">Penting untuk Anda</div>\n          <ul style="margin-left: -2em;">\n            <li>Sebagai bukti keikutsertaan Bapak/Ibu pada produk ini, maka PT PFI Mega Life Insurance akan menerbitkan\n              Sertifikat Asuransi dan mengirimkan ke alamat email <span\n                style="font-weight: 500;">marsawafiraa@gmail.com</span></li>\n            <li style="margin-top: 4px;">Jika terdapat perubahan e-mail, silakan lakukan perubahan e-mail melalui fitur\n              <span style="font-weight: 500;">Perubahan Data</span> di Menu <span style="font-weight: 500;">\'Layanan\' >\n                \'Kartu Kredit\'</span>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class="submit-container" padding>\n    <div class="tnc-wrapper">\n      <ion-checkbox [(ngModel)]="snk"></ion-checkbox>\n      <div style="margin-left: 6px;">Dengan ini saya menyatakan telah membaca, mengerti, menerima dan menyetujui <span\n          style="color: #FA9D1C; font-weight: 700; text-decoration: underline;" (click)="openSnk()">Syarat dan Ketentuan</span> pengajuan\n        asuransi Mega Ultima Shield di Bank Mega</div>\n    </div>\n    <div class="tnc-wrapper" style="margin-top: 18px;">\n      <ion-checkbox checked="isChecked" (ionChange)="handlerRiplay($event.value)"></ion-checkbox>\n      <div style="margin-left: 6px;">Dengan ini saya menyatakan telah membaca, mengerti, menerima dan menyetujui <span\n          style="color: #FA9D1C; font-weight: 700; text-decoration: underline;" (click)="handlerRiplay($event.value)">Ringkasan Informasi Produk &\n          Layanan</span> Asuransi Mega Ultima Shield</div>\n    </div>\n\n    <div padding-left padding-right padding-bottom>\n      <button ion-button class="btn-lanjut-only" (click)="next()">\n        Ajukan Asuransi\n      </button>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/credit-shield-apply/credit-shield-apply.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], CreditShieldApplyPage);
    return CreditShieldApplyPage;
}());

//# sourceMappingURL=credit-shield-apply.js.map

/***/ })

});
//# sourceMappingURL=38.js.map