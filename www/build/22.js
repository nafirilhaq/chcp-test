webpackJsonp([22],{

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page1PageModule", function() { return Page1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page1__ = __webpack_require__(881);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Page1PageModule = /** @class */ (function () {
    function Page1PageModule() {
    }
    Page1PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__page1__["a" /* Page1Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__page1__["a" /* Page1Page */]),
            ],
        })
    ], Page1PageModule);
    return Page1PageModule;
}());

//# sourceMappingURL=page1.module.js.map

/***/ }),

/***/ 881:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page1Page; });
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
 * Generated class for the Page1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Page1Page = /** @class */ (function () {
    function Page1Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.listSof = [
            {
                Card_Type: "C",
                acct_alias: "C03632023071713020089592",
                Cust_Name: "HARJONO SIDHODJOJO",
                type_product: "KARTU KREDIT VISA PLATINUM 1  ",
                Card_No: "4890870052090363",
                imgSrc: "assets/imgs/cc_barca.jpg",
                maskCardNo: "489087xxxxxx0363",
                vCardId: "vLUYhE9VB0OJDNv6106VeQc=",
                default: false
            },
            {
                Card_Type: "C",
                acct_alias: "C03632023071713020089592",
                Cust_Name: "HARJONO SIDHODJOJO",
                type_product: "KARTU KREDIT CARREFOUR 1  ",
                Card_No: "489087005209999",
                imgSrc: "assets/imgs/cc_barca.jpg",
                maskCardNo: "489087xxxxxx9999",
                vCardId: "vLUYhE9VB0OJDNv6106VeQc=",
                default: true
            }
        ];
        this.item = {
            Card_Type: "C",
            acct_alias: "C03632023071713020089592",
            Cust_Name: "HARJONO SIDHODJOJO",
            type_product: "KARTU KREDIT CARREFOUR 1  ",
            Card_No: "489087005209999",
            imgSrc: "assets/imgs/cc_barca.jpg",
            maskCardNo: "489087xxxxxx9999",
            vCardId: "vLUYhE9VB0OJDNv6106VeQc=",
            default: true
        };
    }
    Page1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Page1Page');
        console.log(this.navCtrl.length());
    };
    Page1Page.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter Page1Page');
        console.log('after', this.navCtrl.getViews());
    };
    Page1Page.prototype.goPage = function () {
        this.navCtrl.push("Page2Page");
    };
    Page1Page.prototype.activateHandler = function () {
        alert('activate');
    };
    Page1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-page1',template:/*ion-inline-start:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/page1/page1.html"*/'<!--\n  Generated template for the Page1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>page1</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div margin-top margin-bottom>\n    <ion-slides [initialSlide]="defaultSofIndex" slidesPerView="1" spaceBetween="-110" speed="500" centeredSlides="true"\n      class="image-slider">\n      <ion-slide *ngFor="let item of listSof">\n        <div class="img-sof" [ngStyle]="{\'background-image\':\'url(\' + item.imgSrc + \')\'}">\n          <div style="position: absolute; top: 22vw; left: 5vw; color: white; font-size: 14px;">\n            {{item.Card_No}}\n          </div>\n          <div style="position: absolute; top: 31vw; left: 5vw; color: white; font-size: 3vw;">\n            {{item.Cust_Name}}\n          </div>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n  <div style="position: relative; width: 230px; height: 146px; margin: 0 auto;">\n    <div margin-top margin-bottom class="img-sof" [ngStyle]="{\'background-image\':\'url(\' + item.imgSrc + \')\'}" style="filter: blur(4px);">\n      <div style="position: absolute; top: 22vw; left: 5vw; color: white; font-size: 14px;">\n        {{item.Card_No}}\n      </div>\n      <div style="position: absolute; top: 31vw; left: 5vw; color: white; font-size: 3vw;">\n        {{item.Cust_Name}}\n      </div>\n    </div>\n    <div class="btn-activate" (click)="activateHandler()">\n      Aktivasi Kartu Kredit\n    </div>\n  </div>\n\n  <div padding>\n    <button full no-margin ion-button (click)="goPage()">Go Page 2</button>\n    <div class="print-card">\n      <div class="print-card-container">\n        <div class="top-content">\n          <img src="assets/icon/print-card-logo.svg" class="img-highlight">\n          <div class="title-wrapper">\n            <span class="title">Cetak kartu kredit fisik</span>\n            <span class="subtitle">Anda belum memiliki kartu kredit Fisik</span>\n          </div>\n        </div>\n        <button ion-button (click)="pickData()" class="btn-lanjut-only" style="font-size: 12px; padding: 8px;">Ajukan Cetak Sekarang</button>\n      </div>\n    </div>\n  </div>\n\n  <div class="container-img">\n    <img src="assets/ubah-cicilan/banner-tenor.png" alt="image tenor" style="width: 100%;">\n    <div class="wrap-txt">\n        <span class="txt-title">INDOMARET KIARACONDONG</span>\n        <span class="txt-title-desc">28 Juli 2022</span>\n    </div>\n    <!-- <span class="txt-nominal">Rp. {{list.IDR | number: \'1.0-0\'}}</span> -->\n    <span class="txt-nominal">Rp99.000.000</span>\n  </div>\n\n  <div margin class="banner-img">\n    <div class="banner-left">\n      <div class="merchant-name">Shopee JKT ID Shopee JKT ID Shopee JKT ID Shopee JKT ID Shopee JKT ID</div>\n      <div class="date-text">28 Juli 2022</div>\n    </div>\n    <div class="banner-right">\n      Rp. 1.000.000\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/page1/page1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], Page1Page);
    return Page1Page;
}());

//# sourceMappingURL=page1.js.map

/***/ })

});
//# sourceMappingURL=22.js.map