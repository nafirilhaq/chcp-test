webpackJsonp([6],{

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValasPageModule", function() { return ValasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__valas__ = __webpack_require__(899);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ValasPageModule = /** @class */ (function () {
    function ValasPageModule() {
    }
    ValasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__valas__["a" /* ValasPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__valas__["a" /* ValasPage */]),
            ],
        })
    ], ValasPageModule);
    return ValasPageModule;
}());

//# sourceMappingURL=valas.module.js.map

/***/ }),

/***/ 899:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValasPage; });
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
 * Generated class for the ValasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ValasPage = /** @class */ (function () {
    function ValasPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tabActive = 2;
        this.isLoading = false;
    }
    ValasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ValasPage');
    };
    ValasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-valas',template:/*ion-inline-start:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/valas/valas.html"*/'<!--\n  Generated template for the ValasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n\n\n  <div class="header-bg">\n    <div class="header-cont">\n      <img\n        src="assets/icon/icon-back.svg"\n        alt=""\n        class="icon-back"\n        (click)="goBack()"\n      />\n      <div class="header-title">Kurs Valuta Asing</div>\n      <div style="width: 32px; height: 32px"></div>\n    </div>\n\n    <div class="menu-tab">\n      <!-- <div [ngClass]="tabActive == 0 ? \'menu-sty-active\' : \'menu-sty-inactive\'">Kurs M-Smile</div> -->\n      <!-- <div [ngClass]="tabActive == 1 ? \'menu-sty-active\' : \'menu-sty-inactive\'">Kurs Counter</div> -->\n      <div [ngClass]="tabActive == 2 ? \'menu-sty-active\' : \'menu-sty-inactive\'">Bank Note</div>\n    </div>\n\n    <div class="info-kurs">\n      Kurs di bawah merupakan counter rate di Cabang Bank Mega dan kurs dapat\n      berubah sewaktu-waktu tanpa pemberitahuan.\n    </div>\n\n    <div *ngIf="isLoading" class="skeleton-table" margin>\n      <div class="skeleton-row header">\n        <div class="skeleton-cell"> </div>\n        <div class="skeleton-cell"> </div>\n        <div class="skeleton-cell"> </div>\n      </div>\n  \n      <div class="skeleton-row" *ngFor="let i of [1,2,3]">\n        <div class="skeleton-cell loading"></div>\n        <div class="skeleton-cell loading"></div>\n        <div class="skeleton-cell loading"></div>\n      </div>\n    </div>\n\n    <div *ngIf="!isLoading">\n      <div class="table">\n        <div class="table-header">\n          <div class="table-cell">Kurs</div>\n          <div class="table-cell">Beli</div>\n          <div class="table-cell">Jual</div>\n        </div>\n        <div class="table-row">\n          <div class="table-cell">Andi</div>\n          <div class="table-cell">25</div>\n          <div class="table-cell">Jakarta</div>\n        </div>\n        <div class="line-row"></div>\n        <div class="table-row">\n          <div class="table-cell">Sari</div>\n          <div class="table-cell" style="text-align: left">1.882,5388</div>\n          <div class="table-cell" style="text-align: left">1.908,6693</div>\n        </div>\n        <div class="table-row">\n          <div class="table-cell">Budi</div>\n          <div class="table-cell">Surabaya</div>\n          <div class="table-cell">Surabaya</div>\n        </div>\n      </div>\n\n      <div class="update-text">\n        Tanggal Update: 10/08/2022 08:14:27\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/valas/valas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ValasPage);
    return ValasPage;
}());

//# sourceMappingURL=valas.js.map

/***/ })

});
//# sourceMappingURL=6.js.map