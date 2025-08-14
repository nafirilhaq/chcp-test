webpackJsonp([46],{

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyCashlineFinishBundlePageModule", function() { return ApplyCashlineFinishBundlePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apply_cashline_finish_bundle__ = __webpack_require__(849);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ApplyCashlineFinishBundlePageModule = /** @class */ (function () {
    function ApplyCashlineFinishBundlePageModule() {
    }
    ApplyCashlineFinishBundlePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__apply_cashline_finish_bundle__["a" /* ApplyCashlineFinishBundlePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__apply_cashline_finish_bundle__["a" /* ApplyCashlineFinishBundlePage */]),
            ],
        })
    ], ApplyCashlineFinishBundlePageModule);
    return ApplyCashlineFinishBundlePageModule;
}());

//# sourceMappingURL=apply-cashline-finish-bundle.module.js.map

/***/ }),

/***/ 849:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplyCashlineFinishBundlePage; });
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
 * Generated class for the ApplyCashlineFinishBundlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ApplyCashlineFinishBundlePage = /** @class */ (function () {
    function ApplyCashlineFinishBundlePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cashlineStatus = "process";
        this.tabunganStatus = "success";
        this.boxNominal = false;
        this.boxStatusTabungan = true;
        this.showInfoText = true;
    }
    ApplyCashlineFinishBundlePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ApplyCashlineFinishBundlePage');
        if (this.cashlineStatus == 'success') {
            this.illuImg = "assets/cashline/illu-success.svg";
            if (this.tabunganStatus == 'success') {
                this.boxNominal = true;
                this.statusText = "Terima kasih, pengajuan Mega Cash Line Anda telah berhasil";
                this.infoText = "Pencairan Mega Cash Line akan dikirimkan ke rekening tabungan di atas. Silakan cek inbox untuk mengetahui status pencairan maksimal 1 hari kerja.";
            }
            else {
                this.statusText = "Terima kasih, pengajuan Mega Cash Line Anda telah berhasil";
                this.infoText = "Pengajuan tabungan untuk pencairan dana tidak berhasil. Silakan apply tabungan di M-Smile dan cairkan dana Mega Cash Line melalui 'Akun Saya'.";
            }
        }
        else if (this.cashlineStatus == 'process') {
            this.illuImg = "assets/cashline/illu-process.svg";
            this.statusText = "Pengajuan Mega Cash Line Anda masih dalam proses. Kami akan menghubungi Anda melalui nomor 021-50690879 jika dibutuhkan verifikasi lebih lanjut";
            if (this.tabunganStatus == 'success') {
                this.infoText = "Silahkan cek Whatsapp dan inbox untuk mengetahui status pengajuan Mega Cash Line. Setelah disetujui, Mega Cash Line akan dicairkan ke rekening tabungan di atas maksimal 1 hari kerja.";
            }
            else {
                this.infoText = "Pengajuan tabungan untuk pencairan dana tidak berhasil. Setelah pengajuan Mega Cash Line Anda disetujui, silakan apply tabungan di M-Smile dan cairkan dana Mega Cash Line melalui 'Akun Saya'.";
            }
        }
        else if (this.cashlineStatus == 'failed') {
            this.illuImg = "assets/cashline/illu-failed.svg";
            if (this.tabunganStatus == 'success') {
                this.showInfoText = false;
                this.boxStatusTabungan = false;
                this.statusText = "Mohon maaf pengajuan Mega Cash Line Anda tidak dapat disetujui. Tapi tenang, Anda berhasil buka tabungan dan bisa menikmati berbagai fasilitas dan diskon hingga 10% di merchant favorit Anda.";
            }
            else {
                this.showInfoText = false;
                this.boxStatusTabungan = false;
                this.statusText = "Mohon maaf pengajuan Mega Cash Line Anda tidak dapat disetujui.";
            }
        }
    };
    ApplyCashlineFinishBundlePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-apply-cashline-finish-bundle',template:/*ion-inline-start:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/apply-cashline-finish-bundle/apply-cashline-finish-bundle.html"*/'<ion-content>\n  <div style="display: flex; flex-direction: column; flex: 1;">\n    <div class="illu-wrapper">\n      <img [src]="illuImg" class="illu-style" >\n    </div>\n\n    <div padding>\n      <div class="textbox-cont" [ngClass]="cashlineStatus == \'success\' ? \'textbox-success\' : cashlineStatus == \'process\' ? \'textbox-process\' : \'textbox-failed\'">\n        <div style="display: flex; align-items: center; justify-content: center;">\n          <img [src]="cashlineStatus == \'success\' ? \'assets/cashline/tick-icon.png\' : cashlineStatus == \'process\' ? \'assets/cashline/process-icon.png\' : \'assets/cashline/failed-icon.png\'" style="width: 20px; height: 20px;" >\n        </div>\n        <div class="textbox-text">{{cashlineStatus == \'success\' ? \'Apply Mega Cash Line Berhasil\' : cashlineStatus == \'process\' ? \'Apply Mega Cash Line Diproses\' : \'Apply Mega Cash Line Tidak Disetujui\'}}</div>\n      </div>\n\n      <div class="status-text" [ngStyle]="{\'font-size\': cashlineStatus == \'process\' ? \'12px\' : \'14px\', \'line-height\': cashlineStatus == \'process\' ? \'18px\' : \'20px\'}">\n        {{statusText}}\n      </div>\n\n      <div class="detail-box"> \n        <div class="nominal-box" [ngStyle]="{\'background-image\': boxNominal ? \'url(\' + \'assets/cashline/nominal-box-success.png\' + \')\' : \'url(\' + \'assets/cashline/nominal-box-process.png\' + \')\'}"  *ngIf="boxStatusTabungan">\n          <div style="font-size: 14px; font-weight: 400; line-height: 21px; color: #35405A;">{{cashlineStatus == \'success\' ? \'Nominal Pencairan\' : \'Nominal Pengajuan Pencairan\'}}</div>\n          <div style="font-size: 18px; font-weight: 700; line-height: 21px; color: #2D2D2D; margin-top: 2px;">Rp 15.000.000</div>\n        </div>\n\n        <div class="rekening-box" [ngStyle]="{\'background-image\': tabunganStatus == \'success\' ? \'url(\' + \'assets/cashline/box-bundle-success.png\' + \')\' : \'url(\' + \'assets/cashline/box-bundle-failed.png\' + \')\'}">\n          <div style="display: flex; align-items: center;">\n            <div style="font-size: 14px; font-weight: 400; line-height: 18px; color: #000000;">Pengajuan Tabungan</div>\n            <div style="display: flex; align-items: center; justify-content: center; padding: 4px 8px; border-radius: 14px; margin-left: 8px;" [ngStyle]="{\'background\': tabunganStatus == \'success\' ? \'linear-gradient(270deg, #05B199 0%, #8EC843 100%)\' : \'linear-gradient(270deg, #DF2675 0%, #FE5032 100%)\'}">\n              <img [src]="tabunganStatus == \'success\' ? \'assets/cashline/tick-icon.png\' : \'assets/cashline/failed-icon.png\'" style="width: 10px; height: 10px;"/>\n              <div style="font-size: 10px; font-weight: 500; line-height: 18px; color: #FFFFFF; margin-left: 4px;">{{tabunganStatus == \'success\' ? \'Berhasil\' : \'Tidak Disetujui\'}}</div>\n            </div>\n          </div>\n          <div *ngIf="tabunganStatus == \'success\'">\n            <div style="font-size: 14px; font-weight: 700; line-height: 18px; color: #434343; margin: 8px 0px 3px;">Mega Zaver <span style="color: #FA9D1C;">010740021145250</span></div>\n            <div style="font-size: 14px; font-weight: 500; line-height: 18px; color: #2D2D2D;">a/n MARSA WAFIRA</div>\n          </div>\n          <div *ngIf="tabunganStatus != \'success\'">\n            <div style="font-size: 14px; font-weight: 700; line-height: 18px; color: #FA9D1C; margin-top: 8px;">Rekening Tabungan Mega Dana</div>\n          </div>\n        </div>\n\n        <div class="info-box" *ngIf="showInfoText">\n          <img src="assets/cashline/info-icon.png" style="width: 32px; height: 29px;" >\n          <div class="info-text">{{infoText}}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div padding>\n    <button ion-button class="btn-lanjut-only" (click)="goDetail()" full *ngIf="cashlineStatus == \'success\'">Lihat Detail Cashline</button>\n    <button ion-button class="btn-lanjut-only" (click)="goDetail()" full *ngIf="cashlineStatus != \'success\'">Lanjut ke Homepage</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/apply-cashline-finish-bundle/apply-cashline-finish-bundle.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ApplyCashlineFinishBundlePage);
    return ApplyCashlineFinishBundlePage;
}());

//# sourceMappingURL=apply-cashline-finish-bundle.js.map

/***/ })

});
//# sourceMappingURL=46.js.map