webpackJsonp([20],{

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page3PageModule", function() { return Page3PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page3__ = __webpack_require__(885);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Page3PageModule = /** @class */ (function () {
    function Page3PageModule() {
    }
    Page3PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__page3__["a" /* Page3Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__page3__["a" /* Page3Page */]),
            ],
        })
    ], Page3PageModule);
    return Page3PageModule;
}());

//# sourceMappingURL=page3.module.js.map

/***/ }),

/***/ 885:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page3Page; });
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
 * Generated class for the Page3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Page3Page = /** @class */ (function () {
    function Page3Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Page3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Page3Page');
    };
    Page3Page.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter Page3Page');
        console.log('getViews', this.navCtrl.getViews());
        console.log('indexOf', this.navCtrl.indexOf(this.navCtrl.getActive()));
        console.log('length', this.navCtrl.length());
        console.log('getByIndex', this.navCtrl.getByIndex(1));
    };
    Page3Page.prototype.goPage = function () {
        // this.navCtrl.push("Page4Page");
        this.navCtrl.popToRoot();
    };
    Page3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-page3',template:/*ion-inline-start:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/page3/page3.html"*/'<!--\n  Generated template for the Page3Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>page3</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="sofCardContainer" margin-bottom>\n    <div>\n      <img src="assets/imgs/cc_barca.jpg" style="width:100%; height: 100%; border-radius: 10px;">\n      <div class="shadow ccNoCardF">\n        19203809128309182309\n      </div>\n      <div class="shadow ccNamaF">\n        Savira Bunga Puspita\n      </div>\n    </div>\n    <div class="creditShieldBadge">\n      <img src="assets/icon/shield-badge.svg">\n      <div class="creditShieldBadgeText">Terlindungi Mega Ultima Shield</div>\n    </div>\n  </div>\n\n  <button full no-margin ion-button (click)="goPage()">Go Page 4</button>\n</ion-content>\n'/*ion-inline-end:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/page3/page3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], Page3Page);
    return Page3Page;
}());

//# sourceMappingURL=page3.js.map

/***/ })

});
//# sourceMappingURL=20.js.map