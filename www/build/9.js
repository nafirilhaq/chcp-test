webpackJsonp([9],{

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastModalPageModule", function() { return ToastModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast_modal__ = __webpack_require__(895);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ToastModalPageModule = /** @class */ (function () {
    function ToastModalPageModule() {
    }
    ToastModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__toast_modal__["a" /* ToastModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__toast_modal__["a" /* ToastModalPage */]),
            ],
        })
    ], ToastModalPageModule);
    return ToastModalPageModule;
}());

//# sourceMappingURL=toast-modal.module.js.map

/***/ }),

/***/ 895:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_nfc__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(45);
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
 * Generated class for the ToastModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ToastModalPage = /** @class */ (function () {
    function ToastModalPage(navCtrl, navParams, viewCtrl, nfc) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.nfc = nfc;
        var option = this.navParams.get('option');
        this.message = option.message ? option.message : '';
        this.icon = option.icon;
        if (option.duration)
            this.timeOut = option.duration;
        if (option.action)
            this.action = option.action;
    }
    ToastModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ToastModalPage');
    };
    ToastModalPage.prototype.nfcSetting = function () {
        this.viewCtrl.dismiss();
        this.nfc.showSettings();
    };
    ToastModalPage.prototype.back = function () {
        this.viewCtrl.dismiss();
    };
    ToastModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-toast-modal',template:/*ion-inline-start:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/toast-modal/toast-modal.html"*/'<!--\n  Generated template for the ToastModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<div class="toastToasan" align="center">\n  <img *ngIf="icon" class="icon" [src]="icon">\n  <p class="title" align="center">{{message}}</p>\n  <!-- <button ion-button class="btn-ok" (click)="buttonHandler()">OK</button>  -->\n  <div class="btns">\n    <button ion-button full (click)="nfcSetting()">Aktifkan</button>\n    <button ion-button full (click)="back()">Batalkan</button>\n </div>\n</div>'/*ion-inline-end:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/toast-modal/toast-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_nfc__["a" /* NFC */]])
    ], ToastModalPage);
    return ToastModalPage;
}());

//# sourceMappingURL=toast-modal.js.map

/***/ })

});
//# sourceMappingURL=9.js.map