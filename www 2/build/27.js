webpackJsonp([27],{

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifestyleCheckPageModule", function() { return LifestyleCheckPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lifestyle_check__ = __webpack_require__(875);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LifestyleCheckPageModule = /** @class */ (function () {
    function LifestyleCheckPageModule() {
    }
    LifestyleCheckPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__lifestyle_check__["a" /* LifestyleCheckPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lifestyle_check__["a" /* LifestyleCheckPage */]),
            ],
        })
    ], LifestyleCheckPageModule);
    return LifestyleCheckPageModule;
}());

//# sourceMappingURL=lifestyle-check.module.js.map

/***/ }),

/***/ 875:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LifestyleCheckPage; });
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
 * Generated class for the LifestyleCheckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LifestyleCheckPage = /** @class */ (function () {
    function LifestyleCheckPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LifestyleCheckPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad LifestyleCheckPage');
        setTimeout(function () {
            _this.navCtrl.push("MstoreSnkPage");
        }, 5000);
    };
    LifestyleCheckPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-lifestyle-check',template:/*ion-inline-start:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/lifestyle-check/lifestyle-check.html"*/'<!--\n  Generated template for the LifestyleCheckPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<div style="position: absolute; z-index: 10;">\n  <img src="assets/new_icon/mstore/polem.png" alt="polem" style="width: 100vw; height: auto;">\n</div>\n  \n<ion-content padding>\n  <div align="center">\n    <div>\n      <svg width="90" height="48" viewBox="0 0 45 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n          <circle class="top" cx="24" cy="8" r="8" fill="#FA9D1C" />\n          <circle class="bottom" cx="24" cy="40" r="8" fill="#FA9D1C" />\n          <circle class="right" cx="40" cy="24" r="8" fill="#FFCA08" />\n          <circle class="left" cx="8" cy="24" r="8" fill="#FFCA08" />\n      </svg>\n    </div>\n    <div class="text-sty">Mohon tunggu sebentar, Lifestyle sedang menyiapkan kebutuhan Anda </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/lifestyle-check/lifestyle-check.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], LifestyleCheckPage);
    return LifestyleCheckPage;
}());

//# sourceMappingURL=lifestyle-check.js.map

/***/ })

});
//# sourceMappingURL=27.js.map