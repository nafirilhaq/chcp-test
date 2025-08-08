webpackJsonp([45],{

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyCashlineFinishPageModule", function() { return ApplyCashlineFinishPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apply_cashline_finish__ = __webpack_require__(847);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ApplyCashlineFinishPageModule = /** @class */ (function () {
    function ApplyCashlineFinishPageModule() {
    }
    ApplyCashlineFinishPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__apply_cashline_finish__["a" /* ApplyCashlineFinishPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__apply_cashline_finish__["a" /* ApplyCashlineFinishPage */]),
            ],
        })
    ], ApplyCashlineFinishPageModule);
    return ApplyCashlineFinishPageModule;
}());

//# sourceMappingURL=apply-cashline-finish.module.js.map

/***/ }),

/***/ 847:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplyCashlineFinishPage; });
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
 * Generated class for the ApplyCashlineFinishPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ApplyCashlineFinishPage = /** @class */ (function () {
    function ApplyCashlineFinishPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.status = "success";
    }
    ApplyCashlineFinishPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ApplyCashlineFinishPage');
        if (this.status == 'success') {
            this.illuImg = "assets/cashline/illu-success.svg";
            this.statusText = "Terima kasih, pengajuan Mega Cash Line Anda telah berhasil";
            this.infoText = "Pencairan Mega Cash Line akan dikirimkan ke rekening tabungan di atas. Silakan cek inbox untuk mengetahui status pencairan maksimal 1 hari kerja.";
        }
        else if (this.status == 'process') {
            this.illuImg = "assets/cashline/illu-process.svg";
            this.statusText = "Pengajuan Mega Cash Line Anda masih dalam proses. Kami akan menghubungi Anda melalui nomor 021-50690879 jika dibutuhkan verifikasi lebih lanjut";
            this.infoText = "Silahkan cek Whatsapp dan inbox untuk mengetahui status pengajuan Mega Cash Line. Setelah disetujui, Mega Cash Line akan dicairkan ke rekening tabungan di atas maksimal 1 hari kerja.";
        }
        else if (this.status == 'failed') {
            this.illuImg = "assets/cashline/illu-failed.svg";
            this.statusText = "Mohon maaf pengajuan Mega Cash Line Anda tidak dapat disetujui.";
        }
    };
    ApplyCashlineFinishPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-apply-cashline-finish',template:/*ion-inline-start:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/apply-cashline-finish/apply-cashline-finish.html"*/'<!--\n  Generated template for the ApplyCashlineFinishPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n  <div style="display: flex; flex-direction: column; flex: 1;">\n    <div class="illu-wrapper">\n      <img [src]="illuImg" class="illu-style" >\n    </div>\n\n    <div padding>\n      <div class="textbox-cont" [ngClass]="status == \'success\' ? \'textbox-success\' : status == \'process\' ? \'textbox-process\' : \'textbox-failed\'">\n        <div style="display: flex; align-items: center; justify-content: center;">\n          <img [src]="status == \'success\' ? \'assets/cashline/tick-icon.png\' : status == \'process\' ? \'assets/cashline/process-icon.png\' : \'assets/cashline/failed-icon.png\'" style="width: 20px; height: 20px;" >\n        </div>\n        <div class="textbox-text">{{status == \'success\' ? \'Apply Mega Cash Line Berhasil\' : status == \'process\' ? \'Apply Mega Cash Line Diproses\' : \'Apply Mega Cash Line Tidak Disetujui\'}}</div>\n      </div>\n\n      <div class="status-text" [ngStyle]="{\'font-size\': status == \'process\' ? \'12px\' : \'14px\', \'line-height\': status == \'process\' ? \'18px\' : \'20px\'}">\n        {{statusText}}\n      </div>\n\n      <div class="detail-box" *ngIf="status != \'failed\'"> \n        <div class="nominal-box" [ngStyle]="{\'background-image\': status == \'success\' ? \'url(\' + \'assets/cashline/nominal-box-success.png\' + \')\' : \'url(\' + \'assets/cashline/nominal-box-process.png\' + \')\'}">\n          <div style="font-size: 14px; font-weight: 400; line-height: 21px; color: #35405A;">{{status == \'success\' ? \'Nominal Pencairan\' : \'Nominal Pengajuan Pencairan\'}}</div>\n          <div style="font-size: 18px; font-weight: 700; line-height: 21px; color: #2D2D2D; margin-top: 2px;">Rp 15.000.000</div>\n        </div>\n\n        <div style="padding: 14px 20px;">\n          <div style="font-size: 12px; font-weight: 400; line-height: 16px; color: #2D2D2D;">Rekening Penerima Dana</div>\n          <div style="font-size: 14px; font-weight: 600; line-height: 18px; color: #2D2D2D; margin: 6px 0px 2px;">Mega Zaver 010740021145250</div>\n          <div style="font-size: 14px; font-weight: 500; line-height: 18px; color: #2D2D2D;">a/n MARSA WAFIRA</div>\n        </div>\n      </div>\n\n      <div class="info-box" *ngIf="status != \'failed\'">\n        <img src="assets/cashline/info-icon.png" style="width: 32px; height: 29px;" >\n        <div class="info-text">{{infoText}}</div>\n      </div>\n    </div>\n  </div>\n\n  <div padding>\n    <button ion-button class="btn-lanjut-only" (click)="goDetail()" full *ngIf="status == \'success\'">Lihat Detail Cashline</button>\n    <button ion-button class="btn-lanjut-only" (click)="goDetail()" full *ngIf="status != \'success\'">Lanjut ke Homepage</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/apply-cashline-finish/apply-cashline-finish.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ApplyCashlineFinishPage);
    return ApplyCashlineFinishPage;
}());

//# sourceMappingURL=apply-cashline-finish.js.map

/***/ })

});
//# sourceMappingURL=45.js.map