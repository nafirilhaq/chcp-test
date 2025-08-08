webpackJsonp([35],{

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditShieldGuidePageModule", function() { return CreditShieldGuidePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__credit_shield_guide__ = __webpack_require__(861);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreditShieldGuidePageModule = /** @class */ (function () {
    function CreditShieldGuidePageModule() {
    }
    CreditShieldGuidePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__credit_shield_guide__["a" /* CreditShieldGuidePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__credit_shield_guide__["a" /* CreditShieldGuidePage */]),
            ],
        })
    ], CreditShieldGuidePageModule);
    return CreditShieldGuidePageModule;
}());

//# sourceMappingURL=credit-shield-guide.module.js.map

/***/ }),

/***/ 861:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditShieldGuidePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(45);
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
 * Generated class for the CreditShieldGuidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreditShieldGuidePage = /** @class */ (function () {
    function CreditShieldGuidePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.isHide = false;
        this.isHideSection1 = true;
        this.isHideSection2 = true;
        this.isHideSection3 = true;
        this.isHideSection4 = true;
        this.isHideSection5 = true;
        this.listCaraKlaim = [
            { image: "assets/icon/claim-step1.svg", label: "Pengajuan klaim dapat dilakukan melalui Megacall 08041500010." },
            { image: "assets/icon/claim-step2.svg", label: "Dokumen klaim wajib diserahkan secara lengkap saat pengajuan klaim." },
            { image: "assets/icon/claim-step3.svg", label: "Bank Mega melakukan verifikasi kelayakan kepesertaan Program dan mengirimkan data klaim ke PFI Mega Life Insurance lengkap beserta dokumen pendukung klaim." },
            { image: "assets/icon/claim-step4.svg", label: "PFI Mega Life Insurance akan melakukan verifikasi kelayakan klaim maksimal 3 (tiga) hari kerja kepada Bank Mega." },
            { image: "assets/icon/claim-step5.svg", label: "Klaim akan diproses maksimal 14 (empat belas) hari kerja apabila memenuhi kelayakan sejak dokumen lengkap diterima." },
            { image: "assets/icon/claim-step6.svg", label: "PFI Mega Life Insurance berhak untuk melakukan investigasi dan meminta dokumen lain yang dianggap perlu sebagaimana yang tercantum di dalam dokumen Sertifikat Asuransi atas klaim yang diajukan." },
        ];
        this.listAccident = [
            { label: "Surat pengajuan klaim meninggal dunia dari Pemegang Polis (Bank)." },
            { label: "Formulir pengajuan klaim meninggal dunia yang di isi dan ditandatangani oleh Yang Ditunjuk (Formulir yang dikeluarkan oleh Penanggung)." },
            { label: "Sertifikat Asuransi yang Asli." },
            { label: "Salinan KTP Peserta dan Yang Ditunjuk (Ahli Waris) yang masih berlaku serta salinan kartu keluarga." },
            { label: "Salinan SIM Peserta yang masih berlaku dalam hal Peserta bertindak sebagai pengemudi kendaraan (apabila meninggal dunia akibat Kecelakaan lalu lintas)." },
            { label: "Formulir keterangan Dokter pemeriksa tentang penyebab kematian/resume medis(Formulir yang dikeluarkan oleh Penanggung)." },
            { label: "Formulir kronologis kematian yang di isi dan dilengkapi oleh Yang Ditunjuk (Formulir yang dikeluarkan oleh Penanggung)." },
            { label: "Surat keterangan kematian dari rumah sakit (apabila meninggalnya di rumah sakit)." },
            { label: "Asli/legalisir akte kematian atau surat keterangan kematian dari Instansi yang berwenang." },
            { label: "Asli/legalisir surat keterangan Yang Ditunjuk (Ahli Waris) yang telah disahkan oleh pemerintah setempat." },
            { label: "Asli/legalisir surat keterangan penguburan/izin penggunaan tanah makam dari instansi yang berwenang." },
            { label: "Asli/legalisir hasil visum et repertum atau hasil autopsi Dokter, dalam hal meninggalnya tidak wajar." },
            { label: "Asli/legalisir surat keterangan dari Kedutaan Besar Republik Indonesia setempat dalam hal meninggalnya di luar negeri." },
        ];
        this.listNotAccident = [
            { label: "Surat pengajuan klaim meninggal dunia dari Pemegang Polis." },
            { label: "Formulir pengajuan klaim meninggal dunia yang di isi dan ditandatangani oleh Yang Ditunjuk (Ahli Waris)." },
            { label: "Sertifikat Asuransi yang Asli." },
            { label: "Salinan KTP Peserta dan Yang Ditunjuk (Ahli Waris) yang masih berlaku serta salinan kartu keluarga." },
            { label: "Formulir keterangan Dokter pemeriksa tentang penyebab kematian/resume medis." },
            { label: "Formulir kronologis kematian yang di isi dan dilengkapi oleh Yang Ditunjuk (Ahli Waris)." },
            { label: "Surat keterangan kematian dari rumah sakit (apabila meninggalnya di rumah sakit)." },
            { label: "Asli/legalisir akte kematian atau surat keterangan kematian dari Instansi yang berwenang." },
            { label: "Asli/legalisir surat keterangan Yang Ditunjuk (Ahli Waris) yang telah disahkan oleh pemerintah setempat." },
            { label: "Asli/legalisir surat keterangan penguburan/izin penggunaan tanah makam dari instansi yang berwenang." },
            { label: "Asli/legalisir surat keterangan dari Kedutaan Besar Republik Indonesia setempat dalam hal meninggalnya di luar negeri." },
        ];
        this.listPermanent = [
            { label: "Surat pengajuan klaim Cacat Sementara atau Cacat Tetap Total dari Pemegang Polis (Bank)." },
            { label: "Formulir-formulir klaim Cacat Sementara atau Cacat Tetap Total (Formulir yang dikeluarkan oleh Penanggung)." },
            { label: "Salinan identitas diri Peserta dan Yang Ditunjuk (KTP dan kartu keluarga) yang masih berlaku." },
            { label: "Salinan SIM Peserta yang masih berlaku dalam hal Peserta bertindak sebagai pengemudi kendaraan (apabila meninggal dunia akibat Kecelakaan lalu lintas)." },
            { label: "Salinan Sertifikat Asuransi Credit Shield dan/atau Sertifikat Asuransi Credit Shield yang Asli." },
            { label: "Salinan hasil pemeriksaan Penunjang Diagnostik (laboratorium/radiologi, dll)." },
            { label: "Pas foto sebelum dan sesudah kejadian." },
        ];
        this.listTemporary = [
            { label: "Surat pengajuan klaim Cacat Sementara atau Cacat Tetap Total dari Pemegang Polis (Bank)." },
            { label: "Formulir-formulir klaim Cacat Sementara atau Cacat Tetap Total (Formulir yang dikeluarkan oleh Penanggung)." },
            { label: "Salinan identitas diri Peserta dan Yang Ditunjuk (KTP dan kartu keluarga) yang masih berlaku." },
            { label: "Salinan SIM Peserta yang masih berlaku dalam hal Peserta bertindak sebagai pengemudi kendaraan (apabila meninggal dunia akibat Kecelakaan lalu lintas)." },
            { label: "Salinan Sertifikat Asuransi Credit Shield dan/atau Sertifikat Asuransi Credit Shield yang Asli." },
            { label: "Salinan hasil pemeriksaan Penunjang Diagnostik (laboratorium/radiologi, dll)." },
            { label: "Pas foto sebelum dan sesudah kejadian." },
        ];
        this.listCritical = [
            { label: "Surat pengajuan klaim Penyakit Kritis dari Pemegang Polis (Bank)." },
            { label: "Formulir-formulir klaim Penyakit Kritis (Formulir yang dikeluarkan oleh Penanggung)." },
            { label: "Sertifikat Asuransi yang asli." },
            { label: "Salinan identitas diri Peserta dan Yang Ditunjuk (KTP dan kartu keluarga) yang masih berlaku." },
            { label: "Asli/legalisir kuitansi pembayaran dan perincian biaya perawatan rumah sakit." },
            { label: "Salinan hasil pemeriksaan penunjang diagnostik (laboratorium / radiologi, dll)." },
        ];
    }
    CreditShieldGuidePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreditShieldGuidePage');
    };
    CreditShieldGuidePage.prototype.toggleDisplay = function (section) {
        switch (section) {
            case "0":
                this.isHide = !this.isHide;
                break;
            case "1":
                this.isHideSection1 = !this.isHideSection1;
                break;
            case "2":
                this.isHideSection2 = !this.isHideSection2;
                break;
            case "3":
                this.isHideSection3 = !this.isHideSection3;
                break;
            case "4":
                this.isHideSection4 = !this.isHideSection4;
                break;
            case "5":
                this.isHideSection5 = !this.isHideSection5;
                break;
            default:
                break;
        }
    };
    CreditShieldGuidePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-credit-shield-guide',template:/*ion-inline-start:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/credit-shield-guide/credit-shield-guide.html"*/'<!--\n  Generated template for the CreditShieldGuidePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Panduan Klaim</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div align="center" padding>\n    <div class="title-text">Cara Melakukan Klaim Asuransi Mega Ultima Shield</div>\n  </div>\n\n  <div padding-left padding-right >\n    <div class="periode-klaim-container" style="background-image: url(\'assets/imgs/periode-klaim-bg.png\');">\n      <img src="assets/icon/lamp-idea.png" alt="logo" class="img-idea">\n      <div style="display: flex; flex-direction: column;">\n        <div class="klaim-title">Periode Pengajuan Klaim</div>\n        <div class="klaim-subtitle">Pengajuan klaim asuransi dapat dilakukan selambat-lambatnya 90 (sembilan puluh) hari kalender sejak terjadinya risiko.</div>\n      </div>\n    </div>\n  </div>\n  \n  <div style="background-color: #F9F9F9; padding: 18px 16px 4px; margin-top: 12px;">\n    <ion-list class="liststy">\n      <div class="itemlist" (click) = "toggleDisplay(\'0\')" >\n        <div class="itemlist-label">Cara Klaim Asuransi</div>\n        <ion-icon [name]="isHide ? \'ios-arrow-down-outline\' : \'ios-arrow-up-outline\'" class="icosty"></ion-icon>\n      </div>\n      <ion-card-content style="margin-top: 14px;" [hidden] = "isHide">\n        <div class="card-container">\n          <div class="item-wrapper" *ngFor="let item of listCaraKlaim; last as isLast">\n            <div class="step-wrapper">\n              <img src="{{item.image}}" alt="logo" class="img-step">\n              <div class="dash-divider" [ngStyle]="{\'visibility\': isLast ? \'hidden\' : \'visible\'}"></div>\n            </div>\n            <div class="label-text" [ngStyle]="{\'padding-bottom\': isLast ? \'0px\' : \'\'}">\n              {{ item.label }}\n            </div>\n          </div>\n        </div>\n      </ion-card-content>\n    </ion-list>\n\n    <div class="doc-complete">Kelengkapan Dokumen</div>\n\n    <ion-list class="liststy">\n      <div class="itemlist" (click) = "toggleDisplay(\'1\')">\n        <div class="itemlist-label">Meninggal Dunia Bukan Karena Kecelakaan</div>\n        <ion-icon [name]="isHideSection1 ? \'ios-arrow-down-outline\' : \'ios-arrow-up-outline\'" class="icosty"></ion-icon>\n      </div>\n      <ion-card-content style="margin-top: 10px;" *ngIf = "isHideSection1" [@fadeInOut]>\n        <div class="card-container">\n          <div class="item-wrapper" *ngFor="let item of listNotAccident; let i = index; last as isLast">\n            <div class="label-number-doc" [ngStyle]="{\'padding-bottom\': isLast ? \'0px\' : \'\'}">{{i + 1}}.</div>\n            <div class="label-text-doc" [ngStyle]="{\'padding-bottom\': isLast ? \'0px\' : \'\'}">{{item.label}}</div>\n          </div>\n        </div>\n      </ion-card-content>\n    </ion-list>\n\n    <ion-list class="liststy">\n      <div class="itemlist"  (click) = "toggleDisplay(\'2\')">\n        <div class="itemlist-label">Meninggal Dunia Karena Kecelakaan</div>\n        <ion-icon [name]="isHideSection2 ? \'ios-arrow-down-outline\' : \'ios-arrow-up-outline\'" class="icosty"></ion-icon>\n      </div>\n      <ion-card-content style="margin-top: 10px;" [hidden] = "isHideSection2">\n        <div class="card-container">\n          <div class="item-wrapper" *ngFor="let item of listAccident; let i = index; last as isLast">\n            <div class="label-number-doc" [ngStyle]="{\'padding-bottom\': isLast ? \'0px\' : \'\'}">{{i + 1}}.</div>\n            <div class="label-text-doc" [ngStyle]="{\'padding-bottom\': isLast ? \'0px\' : \'\'}">{{item.label}}</div>\n          </div>\n        </div>\n      </ion-card-content>\n    </ion-list>\n  \n    <ion-list class="liststy">\n      <div class="itemlist"  (click) = "toggleDisplay(\'3\')">\n        <div class="itemlist-label">Cacat Tetap Total</div>\n        <ion-icon [name]="isHideSection3 ? \'ios-arrow-down-outline\' : \'ios-arrow-up-outline\'" class="icosty"></ion-icon>\n      </div>\n      <ion-card-content style="margin-top: 10px;" [hidden] = "isHideSection3">\n        <div class="card-container">\n          <div class="item-wrapper" *ngFor="let item of listPermanent; let i = index; last as isLast">\n            <div class="label-number-doc" [ngStyle]="{\'padding-bottom\': isLast ? \'0px\' : \'\'}">{{i + 1}}.</div>\n            <div class="label-text-doc" [ngStyle]="{\'padding-bottom\': isLast ? \'0px\' : \'\'}">{{item.label}}</div>\n          </div>\n        </div>\n      </ion-card-content>\n    </ion-list>\n  \n    <ion-list class="liststy">\n      <div class="itemlist"  (click) = "toggleDisplay(\'4\')">\n        <div class="itemlist-label">Cacat Sementara</div>\n        <ion-icon [name]="isHideSection4 ? \'ios-arrow-down-outline\' : \'ios-arrow-up-outline\'" class="icosty"></ion-icon>\n      </div>\n      <ion-card-content style="margin-top: 10px;" [hidden] = "isHideSection4">\n        <div class="card-container">\n          <div class="item-wrapper" *ngFor="let item of listTemporary; let i = index; last as isLast">\n            <div class="label-number-doc" [ngStyle]="{\'padding-bottom\': isLast ? \'0px\' : \'\'}">{{i + 1}}.</div>\n            <div class="label-text-doc" [ngStyle]="{\'padding-bottom\': isLast ? \'0px\' : \'\'}">{{item.label}}</div>\n          </div>\n        </div>\n      </ion-card-content>\n    </ion-list>\n  \n    <ion-list class="liststy">\n      <div class="itemlist" (click) = "toggleDisplay(\'5\')">\n        <div class="itemlist-label">Penyakit Kritis</div>\n        <ion-icon [name]="isHideSection5 ? \'ios-arrow-down-outline\' : \'ios-arrow-up-outline\'" class="icosty"></ion-icon>\n      </div>\n      <ion-card-content style="margin-top: 10px;" [hidden] = "isHideSection5">\n        <div class="card-container">\n          <div class="item-wrapper" *ngFor="let item of listCritical; let i = index; last as isLast">\n            <div class="label-number-doc" [ngStyle]="{\'padding-bottom\': isLast ? \'0px\' : \'\'}">{{i + 1}}.</div>\n            <div class="label-text-doc" [ngStyle]="{\'padding-bottom\': isLast ? \'0px\' : \'\'}">{{item.label}}</div>\n          </div>\n        </div>\n      </ion-card-content>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/credit-shield-guide/credit-shield-guide.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* trigger */])('fadeInOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateY(0%)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.2s', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateY(100%)' }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* transition */])('* => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateY(100%)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.2s', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* style */])({ transform: 'translateY(0)' }))
                    ])
                ])
            ],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */]])
    ], CreditShieldGuidePage);
    return CreditShieldGuidePage;
}());

//# sourceMappingURL=credit-shield-guide.js.map

/***/ })

});
//# sourceMappingURL=35.js.map