webpackJsonp([25],{

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBottomPageModule", function() { return ModalBottomPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_bottom__ = __webpack_require__(878);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalBottomPageModule = /** @class */ (function () {
    function ModalBottomPageModule() {
    }
    ModalBottomPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_bottom__["a" /* ModalBottomPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_bottom__["a" /* ModalBottomPage */]),
            ],
        })
    ], ModalBottomPageModule);
    return ModalBottomPageModule;
}());

//# sourceMappingURL=modal-bottom.module.js.map

/***/ }),

/***/ 878:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalBottomPage; });
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
 * Generated class for the ModalBottomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalBottomPage = /** @class */ (function () {
    function ModalBottomPage(navCtrl, view, navParams) {
        this.navCtrl = navCtrl;
        this.view = view;
        this.navParams = navParams;
    }
    ModalBottomPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModalBottomPage');
        // this.noCard = this.navParams.get('noCard').replace(/^.{4}/g, '****').match(/.{4}/g).join(' ');;
    };
    ModalBottomPage.prototype.back = function () {
        this.view.dismiss();
    };
    ModalBottomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modal-bottom',template:/*ion-inline-start:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/modal-bottom/modal-bottom.html"*/'<!--\n  Generated template for the ModalBottomPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n  <div class="page">\n    <ion-card class="crd">\n      <ion-card-header>\n        <div style="display: flex; align-items: center;">\n          <img src="assets/icon/close.svg" alt="logo" class="img-close" (click)="back()">\n          <ion-label style="font-weight: 600;font-size: 16px;">Nomor Kartu Digital</ion-label>\n        </div>\n      </ion-card-header>\n\n      <ion-card-content>\n        <span style="font-size: 12px; color: #2D2D2D; font-weight: 500;">Nomor digital bukan untuk transaksi</span>\n        <ion-item no-padding style="margin-top: 10px;">\n          <ion-label floating no-margin disabled="true">Nomor Digital</ion-label>\n          <ion-input type="text" [(ngModel)]="noCard" no-lines disabled="true" style="pointer-events: auto;"></ion-input>\n          <img icon-only item-end src="assets/icon/visa-logo.png" alt="" style="width: 53px; height: 24px; z-index: 99;">\n        </ion-item>\n      </ion-card-content>\n      <div padding-left padding-right padding-bottom>\n        <span style="font-size: 10px; color: #2D2D2D; font-weight: 400; line-height: 15px;">Nomor digital ini bukan untuk transaksi dan hanya akan muncul pada struk mesin EDC kasir</span>\n      </div>\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/modal-bottom/modal-bottom.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ModalBottomPage);
    return ModalBottomPage;
}());

//# sourceMappingURL=modal-bottom.js.map

/***/ })

});
//# sourceMappingURL=25.js.map