webpackJsonp([17],{

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemittancePageModule", function() { return RemittancePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__remittance__ = __webpack_require__(893);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RemittancePageModule = /** @class */ (function () {
    function RemittancePageModule() {
    }
    RemittancePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__remittance__["a" /* RemittancePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__remittance__["a" /* RemittancePage */]),
            ],
        })
    ], RemittancePageModule);
    return RemittancePageModule;
}());

//# sourceMappingURL=remittance.module.js.map

/***/ }),

/***/ 893:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemittancePage; });
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
 * Generated class for the RemittancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RemittancePage = /** @class */ (function () {
    function RemittancePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RemittancePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RemittancePage');
    };
    RemittancePage.prototype.calc = function (e) {
        this.hasil = e * 14000;
    };
    RemittancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-remittance',template:/*ion-inline-start:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/remittance/remittance.html"*/'<!--\n  Generated template for the RemittancePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>remittance</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="detail-container">\n    <div style="color: #2D2D2D; font-size: 14px; font-weight: 700;">\n      Nominal Transaksi\n    </div>\n    <div>\n      <ul style="margin-left: -20px; color: #7C7C7C; font-size: 12px; font-weight: 400; line-height: 16px;">\n        <li>Maksimal nominal ekuivalen USD100.000</li>\n        <li>Nilai kurs akhir ditentukan di halaman konfirmasi</li>\n        <li>Biaya transfer remittance akan dipotong oleh Bank Koresponden dari nominal transaksi</li>\n      </ul>  \n    </div>\n\n    <div>\n      <ion-item no-padding>\n        <ion-input type="text" [(ngModel)]="curr" (keyup)="calc($event.target.value)"></ion-input>\n      </ion-item>\n     <div>{{hasil}}</div>\n    </div>\n  </div>\n\n</ion-content>\n\n<modal-custom *ngIf="isModalError" icon="assets/apply-cc/icon-warning-red.png">\n  <div style="font-size: 12px; font-weight: 400; color: #35405A;">Pastikan semua data terisi lengkap</div>\n  <button ion-button class="btn-lanjut-only" margin-top (click)="handlerHideModal()">Ok</button>\n</modal-custom>\n'/*ion-inline-end:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/remittance/remittance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], RemittancePage);
    return RemittancePage;
}());

//# sourceMappingURL=remittance.js.map

/***/ })

});
//# sourceMappingURL=17.js.map