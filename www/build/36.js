webpackJsonp([36],{

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditShieldFailedPageModule", function() { return CreditShieldFailedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__credit_shield_failed__ = __webpack_require__(867);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreditShieldFailedPageModule = /** @class */ (function () {
    function CreditShieldFailedPageModule() {
    }
    CreditShieldFailedPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__credit_shield_failed__["a" /* CreditShieldFailedPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__credit_shield_failed__["a" /* CreditShieldFailedPage */]),
            ],
        })
    ], CreditShieldFailedPageModule);
    return CreditShieldFailedPageModule;
}());

//# sourceMappingURL=credit-shield-failed.module.js.map

/***/ }),

/***/ 867:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditShieldFailedPage; });
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
 * Generated class for the CreditShieldFailedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreditShieldFailedPage = /** @class */ (function () {
    function CreditShieldFailedPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CreditShieldFailedPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreditShieldFailedPage');
        this.status = this.navParams.get("status");
        if (this.status == 'noCard') {
            this.infoImg = "assets/icon/icon-no-cc.svg";
            this.infoText = "Anda <b>belum memiliki kartu kredit.</b> <br/>Apply kartu kredit untuk mengikuti Asuransi Mega Ultima Shield.";
        }
        else if (this.status == 'onProcess') {
            this.infoImg = "assets/icon/icon-on-process.svg";
            this.infoText = "<b>Semua kartu Anda sedang dalam proses pengajuan asuransi Mega Ultima Shield.</b> Silakan cek status pengajuan secara berkala di inbox.";
        }
        else if (this.status == 'notEligible') {
            this.infoImg = "assets/icon/icon-not-eligible.svg";
            this.infoText = "Maaf, saat ini kartu kredit yang Anda miliki <b>belum dapat melanjutkan pengajuan asuransi Mega Ultima Shield.</b> Info lanjut, silakan hubungi Megacall 08041500010.";
        }
    };
    CreditShieldFailedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-credit-shield-failed',template:/*ion-inline-start:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/credit-shield-failed/credit-shield-failed.html"*/'<!--\n  Generated template for the CreditShieldFailedPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  <div class="header-cust" style="background-image: url(\'assets/imgs/banner-apply.png\');">\n    <div class="header-cont" padding-left padding-right>  \n      <img src="assets/icon/icon-back.svg" alt="" class="icon-back" (click)="goBack()">\n      <div class="header-title">Asuransi</div>\n      <div style="width: 32px; height: 32px;"></div>\n    </div>\n    <div class="mega-ultima-title">Mega Ultima Shield</div>\n  </div>\n\n  <div class="card-section-container" padding>\n    <div class="content-card">\n      <img [src]="infoImg" alt="icon-no-cc" style="margin-top: -60px;">\n      <div class="info-cont">\n        <div class="info-text" [innerHTML]="infoText">\n        </div>\n      </div>\n    </div>\n    <div *ngIf="status == \'noCard\'">\n      <button ion-button class="btn-lanjut-only" (click)="next()">\n        Apply Kartu Kredit\n      </button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/credit-shield-failed/credit-shield-failed.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], CreditShieldFailedPage);
    return CreditShieldFailedPage;
}());

//# sourceMappingURL=credit-shield-failed.js.map

/***/ })

});
//# sourceMappingURL=36.js.map