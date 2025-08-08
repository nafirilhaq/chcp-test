webpackJsonp([7],{

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TtpTutorialPageModule", function() { return TtpTutorialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ttp_tutorial__ = __webpack_require__(897);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TtpTutorialPageModule = /** @class */ (function () {
    function TtpTutorialPageModule() {
    }
    TtpTutorialPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ttp_tutorial__["a" /* TtpTutorialPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ttp_tutorial__["a" /* TtpTutorialPage */]),
            ],
        })
    ], TtpTutorialPageModule);
    return TtpTutorialPageModule;
}());

//# sourceMappingURL=ttp-tutorial.module.js.map

/***/ }),

/***/ 897:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TtpTutorialPage; });
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
 * Generated class for the TtpTutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TtpTutorialPage = /** @class */ (function () {
    function TtpTutorialPage(navCtrl, navParams, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
    }
    TtpTutorialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TtpTutorialPage');
    };
    TtpTutorialPage.prototype.back = function () {
        this.view.dismiss();
    };
    TtpTutorialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ttp-tutorial',template:/*ion-inline-start:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/ttp-tutorial/ttp-tutorial.html"*/'<!--\n  Generated template for the TtpTutorialPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header style="background-color: transparent;">\n  <ion-navbar>\n    <ion-title>Tap to Pay</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="content">\n    <div class="cont-top">\n      <!-- <div class="cont-header">\n        <div class="title-text">Tap to Pay</div>\n      </div> -->\n      <div class="cont-img">\n        <img src="assets/imgs/ttp-tutorial.svg">\n      </div>\n    </div>\n\n    <div class="cont-bottom">\n      <span style="font-size: 16px; color: #2D2D2D;">Transaksi Tap to Pay</span>\n      <p style="font-size: 14px; color: #636772; margin-right: 5px;">Kini Anda dapat lebih mudah bertransaksi pakai tap to pay, tinggal tap pada mesin EDC setelah login M-Smile</p>\n\n      <h1><span>Cara Pakai Tap to Pay</span></h1>\n\n      <div class="cont-howto">\n        <div class="cont-step">\n          <img src="assets/imgs/ttp-step1.png">\n          <span class="text-help">Belanja di merchant favorit Anda</span>\n        </div>\n        <div class="cont-step">\n          <img src="assets/imgs/ttp-step2.png">\n          <span class="text-help">Buka M-Smile, login, dan tap HP di Kasir</span>\n        </div>\n        <div class="cont-step">\n          <img src="assets/imgs/ttp-step3.png">\n          <span class="text-help" style="margin-left: 10px;">Transaksi berhasil!</span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n\n<ion-footer padding (click)="back()" style="background-color: #FFF;">\n  <button ion-button class="btn-lanjut-only">OK</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/ttp-tutorial/ttp-tutorial.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], TtpTutorialPage);
    return TtpTutorialPage;
}());

//# sourceMappingURL=ttp-tutorial.js.map

/***/ })

});
//# sourceMappingURL=7.js.map