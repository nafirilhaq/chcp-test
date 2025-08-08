webpackJsonp([16],{

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SampleLottiePageModule", function() { return SampleLottiePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sample_lottie__ = __webpack_require__(902);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_lottie__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SampleLottiePageModule = /** @class */ (function () {
    function SampleLottiePageModule() {
    }
    SampleLottiePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sample_lottie__["a" /* SampleLottiePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sample_lottie__["a" /* SampleLottiePage */]),
                __WEBPACK_IMPORTED_MODULE_3_ng_lottie__["a" /* LottieAnimationViewModule */].forRoot()
            ],
        })
    ], SampleLottiePageModule);
    return SampleLottiePageModule;
}());

//# sourceMappingURL=sample-lottie.module.js.map

/***/ }),

/***/ 902:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleLottiePage; });
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
 * Generated class for the SampleLottiePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SampleLottiePage = /** @class */ (function () {
    function SampleLottiePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lottieConfig = {
            path: 'assets/file/tes-lottie.json',
            renderer: 'canvas',
            autoplay: true,
            loop: true
        };
    }
    SampleLottiePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SampleLottiePage');
    };
    SampleLottiePage.prototype.handleAnimation = function (anim) {
        console.log('anim', anim);
        this.anim = anim;
        this.anim.setSpeed(1);
    };
    SampleLottiePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sample-lottie',template:/*ion-inline-start:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/sample-lottie/sample-lottie.html"*/'<!--\n  Generated template for the SampleLottiePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>sampleLottie</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div>\n    <lottie-animation-view\n      [options]="lottieConfig"\n      [width]="340"\n      [height]="340"\n      (animCreated)="handleAnimation($event)">\n    </lottie-animation-view>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/sample-lottie/sample-lottie.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SampleLottiePage);
    return SampleLottiePage;
}());

//# sourceMappingURL=sample-lottie.js.map

/***/ })

});
//# sourceMappingURL=16.js.map