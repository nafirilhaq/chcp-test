webpackJsonp([44],{

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyCashlineMobPageModule", function() { return ApplyCashlineMobPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apply_cashline_mob__ = __webpack_require__(850);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ApplyCashlineMobPageModule = /** @class */ (function () {
    function ApplyCashlineMobPageModule() {
    }
    ApplyCashlineMobPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__apply_cashline_mob__["a" /* ApplyCashlineMobPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__apply_cashline_mob__["a" /* ApplyCashlineMobPage */]),
            ],
        })
    ], ApplyCashlineMobPageModule);
    return ApplyCashlineMobPageModule;
}());

//# sourceMappingURL=apply-cashline-mob.module.js.map

/***/ }),

/***/ 850:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplyCashlineMobPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__(86);
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
 * Generated class for the ApplyCashlineMobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ApplyCashlineMobPage = /** @class */ (function () {
    function ApplyCashlineMobPage(navCtrl, navParams, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.limitA = 15000000;
        this.limitB = 30000000;
        this.isShowSimulasi = false;
    }
    ApplyCashlineMobPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ApplyCashlineMobPage');
        document.documentElement.style.setProperty('--stepper-from', '3');
    };
    ApplyCashlineMobPage.prototype.selectCc = function (type) {
        var _this = this;
        this.cc_ownership = type;
        if (this.isShowSimulasi) {
            if (type == false) {
                this.isShowSimulasi = false;
                var loading_1 = this.loadingCtrl.create({
                    content: '<div class="custom-loader-container"><div class="custom-loader-bar"></div></div>',
                    spinner: 'dots',
                    cssClass: 'msmile-loading'
                    // dismissOnPageChange: true
                });
                loading_1.present();
                setTimeout(function () {
                    if (_this.cc_ownership == false) {
                        _this.limit = _this.limitA;
                    }
                    else {
                        _this.limit = _this.limitB;
                    }
                    _this.isShowSimulasi = true;
                    loading_1.dismiss();
                }, 1000);
            }
            else {
                this.isShowSimulasi = false;
            }
        }
    };
    ApplyCashlineMobPage.prototype.selectCc2 = function (type) {
        var _this = this;
        this.cc_over_12_months = type;
        if (this.isShowSimulasi) {
            this.isShowSimulasi = false;
            var loading_2 = this.loadingCtrl.create({
                content: '<div class="custom-loader-container"><div class="custom-loader-bar"></div></div>',
                spinner: 'dots',
                cssClass: 'msmile-loading'
                // dismissOnPageChange: true
            });
            loading_2.present();
            setTimeout(function () {
                if (_this.cc_over_12_months == false) {
                    _this.limit = _this.limitA;
                }
                else {
                    _this.limit = _this.limitB;
                }
                _this.isShowSimulasi = true;
                loading_2.dismiss();
            }, 1000);
        }
    };
    ApplyCashlineMobPage.prototype.showSimulasi = function () {
        var _this = this;
        if (this.cc_ownership == false || (this.cc_ownership == true && (this.cc_over_12_months == true || this.cc_over_12_months == false))) {
            var loading_3 = this.loadingCtrl.create({
                content: '<div class="custom-loader-container"><div class="custom-loader-bar"></div></div>',
                spinner: 'dots',
                cssClass: 'msmile-loading'
                // dismissOnPageChange: true
            });
            loading_3.present();
            setTimeout(function () {
                _this.limit = _this.limitA;
                if (_this.cc_ownership == false) {
                    _this.limit = _this.limitA;
                }
                else {
                    if (_this.cc_over_12_months) {
                        _this.limit = _this.limitB;
                    }
                }
                _this.isShowSimulasi = true;
                loading_3.dismiss();
            }, 1000);
        }
    };
    ApplyCashlineMobPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-apply-cashline-mob',template:/*ion-inline-start:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/apply-cashline-mob/apply-cashline-mob.html"*/'<!--\n  Generated template for the ApplyCashlineMobPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Apply Mega Cash Line</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="stepper-container">\n    <div class="stepper-title">\n      <div class="step-number">2/5</div>\n      <div class="step-title">Simulasi Pencairan & Pilih Tenor</div>\n    </div>\n    <div class="stepper-progress-full">\n      <div class="stepper-progress"></div>\n    </div>\n  </div>\n\n  <div class="content-container">\n    <div class="info-wrapper">\n      <div class="sof-wrapper">\n        <img src="assets/cashline/mob-info.png" class="img-info">\n      </div>\n      <div class="info-text">Harap jawab pertanyaan berikut yang akan digunakan untuk \n        menentukan estimasi limit maksimal yang bisa Anda dapatkan.</div>\n    </div>\n    \n    <div class="box-question">\n      <div class="title-question">Apakah Anda memiliki kartu kredit?</div>\n      <div class="radio-wrapper">\n        <div class="radio-item" style="width: 35%;">\n          <ion-radio color="mega-orange" [checked]="cc_ownership" (click)="selectCc(true)"></ion-radio>\n          <span class="radio-text" (click)="selectCc(true)">Ya</span>\n        </div>\n        <div class="radio-item">\n          <ion-radio color="mega-orange" [checked]="cc_ownership == false" (click)="selectCc(false)"></ion-radio>\n          <span class="radio-text" (click)="selectCc(false)">Tidak</span>\n        </div>\n      </div>\n    </div>\n\n    <div class="box-question" style="margin-top: 14px;" *ngIf="cc_ownership" [@boxAnimation]>\n      <div class="title-question">Sudah berapa lama Anda memiliki kartu kredit ini? </div>\n      <div class="radio-wrapper">\n        <div class="radio-item" style="width: 35%;">\n          <ion-radio color="mega-orange" [checked]="cc_over_12_months == false" (click)="selectCc2(false)"></ion-radio>\n          <span class="radio-text">< 12 Bulan</span>\n        </div>\n        <div class="radio-item">\n          <ion-radio color="mega-orange" [checked]="cc_over_12_months" (click)="selectCc2(true)"></ion-radio>\n          <span class="radio-text">≥ 12 Bulan</span>\n        </div>\n      </div>\n    </div>\n\n    <div class="simulasi-container" *ngIf="isShowSimulasi" [@simulasiAnimation]>\n      <div class="Kalkulator-title">Kalkulator Simulasi</div>\n      \n      <div class="form-wrapper" style="margin-top: 14px;">\n        <div class="form-title">Estimasi Limit Mega Cash Line Anda</div>\n        <div class="form-subtitle">Limit yang didapat akan dicairkan seluruhnya</div>\n        <div class="form-input">\n          <div class="input-label">Estimasi Limit Maksimal</div>\n          <div class="input-value">{{limit}}</div>\n          <img src="assets/cashline/limit-ornament.png" class="limit-ornament" >\n        </div>\n        <div class="form-info">Limit ditentukan analis dan bisa berbeda dengan estimasi di atas</div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n\n<ion-footer padding style="box-shadow: 0px -8px 6px -6px rgba(0, 0, 0, 0.1); background-color: white;" *ngIf="!isShowSimulasi">\n  <button class="btnLanjut" no-margin ion-button full (click)="showSimulasi()">Lihat Simulasi</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/apply-cashline-mob/apply-cashline-mob.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('boxAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])(':enter', [Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'translateX(-100%)', opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('300ms', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'translateX(0)', 'opacity': 1 }))]),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])(':leave', [Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'translateX(0)', 'opacity': 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('300ms', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'translateX(100%)', 'opacity': 0 }))])
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('simulasiAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])(':enter', [Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'translateY(100%)', opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('300ms', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'translateY(0)', 'opacity': 1 }))]),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])(':leave', [Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'translateY(0)', 'opacity': 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('300ms', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'translateY(100%)', 'opacity': 0 }))])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], ApplyCashlineMobPage);
    return ApplyCashlineMobPage;
}());

//# sourceMappingURL=apply-cashline-mob.js.map

/***/ })

});
//# sourceMappingURL=44.js.map