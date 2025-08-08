webpackJsonp([43],{

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyCashlineWaitingPageModule", function() { return ApplyCashlineWaitingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__apply_cashline_waiting__ = __webpack_require__(854);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ApplyCashlineWaitingPageModule = /** @class */ (function () {
    function ApplyCashlineWaitingPageModule() {
    }
    ApplyCashlineWaitingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__apply_cashline_waiting__["a" /* ApplyCashlineWaitingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__apply_cashline_waiting__["a" /* ApplyCashlineWaitingPage */]),
            ],
        })
    ], ApplyCashlineWaitingPageModule);
    return ApplyCashlineWaitingPageModule;
}());

//# sourceMappingURL=apply-cashline-waiting.module.js.map

/***/ }),

/***/ 854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplyCashlineWaitingPage; });
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
 * Generated class for the ApplyCashlineWaitingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ApplyCashlineWaitingPage = /** @class */ (function () {
    function ApplyCashlineWaitingPage(navCtrl, platform, app, navParams) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.app = app;
        this.navParams = navParams;
        this.timeSecond = 72;
    }
    ApplyCashlineWaitingPage.prototype.ionViewWillLeave = function () {
        // Unregister the custom back button action for this page
        this.unregisterBackButtonAction && this.unregisterBackButtonAction();
    };
    ApplyCashlineWaitingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ApplyCashlineWaitingPage');
        this.timer();
        this.retryCount = (this.timeSecond / 10) - 2;
    };
    ApplyCashlineWaitingPage.prototype.timer = function () {
        var _this = this;
        this.displayTime(this.timeSecond);
        var countDown = setInterval(function () {
            _this.timeSecond--;
            _this.displayTime(_this.timeSecond);
            if (_this.timeSecond < 1) {
                clearInterval(countDown);
            }
        }, 1000);
    };
    ApplyCashlineWaitingPage.prototype.displayTime = function (second) {
        var min = Math.floor(second / 60);
        var sec = Math.floor(second % 60);
        this.min = min < 10 ? "0" + min : min;
        this.sec = sec < 10 ? "0" + sec : sec;
        ;
    };
    ApplyCashlineWaitingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-apply-cashline-waiting',template:/*ion-inline-start:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/apply-cashline-waiting/apply-cashline-waiting.html"*/'<!--\n  Generated template for the ApplyCashlineWaitingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Apply Mega Cash Line</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div align="center">\n    <img src="assets/cashline/illu-waiting.svg" >\n  </div>\n\n  <div class="info-box">\n    <div class="info-text">Pengajuan Anda sudah lengkap. Silakan tunggu status pengajuan Anda di halaman ini. <br/><br/></div>\n    <div class="info-text">Harap tidak menutup halaman ini, karena akan mengulang proses pengajuan.</div>\n  </div>\n\n  <div class="timer-box">\n    <div class="timer-wrapper">\n      <div class="minutes-box">\n        <div class="number">{{min}}</div>\n        <div class="time-unit">Menit</div>\n      </div>\n      <div>\n        <div class="number" style="margin: 0px 10px;">:</div>\n        <div style="visibility: hidden;">-</div>\n      </div>\n      <div class="seconds-box">\n        <div class="number">{{sec}}</div>\n        <div class="time-unit">Detik</div>\n      </div>\n    </div>\n  </div>\n\n  <div class="box-info">\n      <img src="assets/cashline/mega-zaver-ornament.png" class="img-produk" />\n    <div class="box-text">\n      Dengan mengajukan Cashline, Anda perlu melengkapi data di bawah ini \n      untuk melakukan pembukaan rekening Bank Mega sebagai rekening penerimaan dana.\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/apply-cashline-waiting/apply-cashline-waiting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ApplyCashlineWaitingPage);
    return ApplyCashlineWaitingPage;
}());

//# sourceMappingURL=apply-cashline-waiting.js.map

/***/ })

});
//# sourceMappingURL=43.js.map