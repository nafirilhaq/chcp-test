webpackJsonp([21],{

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2PageModule", function() { return Page2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page2__ = __webpack_require__(884);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Page2PageModule = /** @class */ (function () {
    function Page2PageModule() {
    }
    Page2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__page2__["a" /* Page2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__page2__["a" /* Page2Page */]),
            ],
        })
    ], Page2PageModule);
    return Page2PageModule;
}());

//# sourceMappingURL=page2.module.js.map

/***/ }),

/***/ 884:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page2Page; });
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
 * Generated class for the Page2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Page2Page = /** @class */ (function () {
    function Page2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bgCekCC = 'assets/imgs/cek-cc-bg.png';
    }
    Page2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Page2Page');
    };
    Page2Page.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter Page2Page');
        console.log('after', this.navCtrl.getViews());
    };
    Page2Page.prototype.goPage = function () {
        console.log(this.birthDate);
        this.navCtrl.push("Page3Page");
    };
    Page2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-page2',template:/*ion-inline-start:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/page2/page2.html"*/'<!--\n  Generated template for the Page2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>page2</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="stepper-container">\n    <div class="stepper-title">\n      <div class="step-number">1/5</div>\n      <div class="step-title">Input Nomor Handphone & e-KTP</div>\n    </div>\n    <div class="stepper-progress-full">\n      <div class="stepper-progress"></div>\n    </div>\n  </div>\n\n  <ion-datetime [(ngModel)]="birthDate" class="input-dob" displayFormat="DD-MM-YYYY" pickerFormat="DD-MMMM-YYYY" min="1900-01-01T00:00:00"></ion-datetime>\n\n  <button full margin-top ion-button (click)="goPage()">Go Page 3</button>\n\n  <div margin-top class="bg-cek-cc" [ngStyle]="{\'background-image\':\'url(\' + \'assets/imgs/cek-cc-bg.png\' + \')\'}">\n    <div>\n      <img src="assets/icon/icon-home-time.png" class="icon-img" />\n    </div>\n    <div class="content-wrapper">\n      <span class="title">\n        Aktivasi Kartu Kredit Fisik\n      </span>\n      <span class="subtitle">\n        Cek Aktivasi Kartu Kredit Fisik Disini\n      </span>\n    </div>\n    <div>\n      <img src="assets/icon/icon-home-time.png" class="icon-img" />\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/page2/page2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], Page2Page);
    return Page2Page;
}());

//# sourceMappingURL=page2.js.map

/***/ })

});
//# sourceMappingURL=21.js.map