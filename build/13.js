webpackJsonp([13],{

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplementRegPageModule", function() { return SupplementRegPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__supplement_reg__ = __webpack_require__(894);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SupplementRegPageModule = /** @class */ (function () {
    function SupplementRegPageModule() {
    }
    SupplementRegPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__supplement_reg__["a" /* SupplementRegPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__supplement_reg__["a" /* SupplementRegPage */]),
            ],
        })
    ], SupplementRegPageModule);
    return SupplementRegPageModule;
}());

//# sourceMappingURL=supplement-reg.module.js.map

/***/ }),

/***/ 894:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupplementRegPage; });
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
 * Generated class for the SupplementRegPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SupplementRegPage = /** @class */ (function () {
    function SupplementRegPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.isLoading = false;
    }
    SupplementRegPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SupplementRegPage');
    };
    SupplementRegPage.prototype.handlerSection = function () {
        this.isLoading = !this.isLoading;
    };
    SupplementRegPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-supplement-reg',template:/*ion-inline-start:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/supplement-reg/supplement-reg.html"*/'<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons start>\n      <div class="skeleton icon-back"></div>\n    </ion-buttons>\n    <ion-title>\n      <div class="skeleton title"></div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <!-- Ilustrasi / gambar utama -->\n  <div class="skeleton image-placeholder"></div>\n\n  <!-- Teks deskripsi -->\n  <div class="skeleton text-line medium"></div>\n  <div class="skeleton text-line long"></div>\n  <div class="skeleton text-line short"></div>\n\n  <!-- Card list -->\n  <ion-card>\n    <ion-item>\n      <div class="skeleton thumb" item-start></div>\n      <div class="info">\n        <div class="skeleton text-line medium"></div>\n        <div class="skeleton text-line short"></div>\n      </div>\n    </ion-item>\n  </ion-card>\n\n  <ion-card>\n    <ion-item>\n      <div class="skeleton thumb" item-start></div>\n      <div class="info">\n        <div class="skeleton text-line medium"></div>\n        <div class="skeleton text-line short"></div>\n      </div>\n    </ion-item>\n  </ion-card>\n\n  <!-- Tombol -->\n  <div class="skeleton button"></div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/supplement-reg/supplement-reg.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SupplementRegPage);
    return SupplementRegPage;
}());

//# sourceMappingURL=supplement-reg.js.map

/***/ })

});
//# sourceMappingURL=13.js.map