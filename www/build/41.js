webpackJsonp([41],{

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashlineInquiryPageModule", function() { return CashlineInquiryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cashline_inquiry__ = __webpack_require__(855);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CashlineInquiryPageModule = /** @class */ (function () {
    function CashlineInquiryPageModule() {
    }
    CashlineInquiryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cashline_inquiry__["a" /* CashlineInquiryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cashline_inquiry__["a" /* CashlineInquiryPage */]),
            ],
        })
    ], CashlineInquiryPageModule);
    return CashlineInquiryPageModule;
}());

//# sourceMappingURL=cashline-inquiry.module.js.map

/***/ }),

/***/ 855:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CashlineInquiryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(25);
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
 * Generated class for the CashlineInquiryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CashlineInquiryPage = /** @class */ (function () {
    function CashlineInquiryPage(navCtrl, navParams, changeDetectorRef) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.changeDetectorRef = changeDetectorRef;
        this.sof = {
            Card_Type: "C",
            acct_alias: "C03632023071713020089592",
            Cust_Name: "HARJONO SIDHODJOJO",
            type_product: "KARTU KREDIT VISA PLATINUM 1  ",
            Card_No: "4890870052090363",
            imgSrc: "assets/imgs/sofCard2/cc_barca.jpg",
            maskCardNo: "489087xxxxxx0363",
            vCardId: "vLUYhE9VB0OJDNv6106VeQc=",
            default: false
        };
        this.cashLineData = { "nominal": "" };
        this.submitted = false;
        this.hasError = false;
        this.hasInputForm = false;
        document.documentElement.style.setProperty('--border-colour', '#d8dce8');
    }
    CashlineInquiryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CashlineInquiryPage');
    };
    CashlineInquiryPage.prototype.ionViewWillLoad = function () {
        this.cashlineForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            nominal: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, this.ValidateNominal]),
        });
    };
    CashlineInquiryPage.prototype.ngOnInit = function () {
    };
    CashlineInquiryPage.prototype.ValidateNominal = function (control) {
        if (control.value.length) {
            var newValue = control.value.replace(/[\D\s\._\-]+/g, "");
            console.log('newvalue', newValue);
            if (newValue < 1000000) {
                return { 'min': true };
            }
            if (newValue % 500000 != 0) {
                return { 'multiple500K': true };
            }
            if (newValue > 5000000) {
                return { 'max': true };
            }
        }
        return null;
    };
    CashlineInquiryPage.prototype.setNominal = function (e) {
        this.hasInputForm = true;
        this.cashLineData.nominal = this.cashLineData.nominal.replace(/[\D\s\._\-]+/g, "");
        this.cashLineData.nominal = this.cashLineData.nominal ? parseInt(this.cashLineData.nominal, 10) : 0;
        this.cashLineData.nominal = this.cashLineData.nominal.toLocaleString("id-ID");
        this.hasError = this.cashlineForm.controls.nominal.errors ? true : false;
        document.documentElement.style.setProperty('--border-colour', this.hasError ? 'red' : '#d8dce8');
        this.changeDetectorRef.detectChanges();
        this.changeDetectorRef.markForCheck();
    };
    CashlineInquiryPage.prototype.submit = function () {
        this.submitted = true;
        console.log(this.cashlineForm);
        console.log(this.cashlineForm.controls);
        this.hasError = this.cashlineForm.controls.nominal.errors ? true : false;
        document.documentElement.style.setProperty('--border-colour', this.hasError ? 'red' : '#d8dce8');
    };
    CashlineInquiryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cashline-inquiry',template:/*ion-inline-start:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/cashline-inquiry/cashline-inquiry.html"*/'<!--\n  Generated template for the CashlineInquiryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>cashline-inquiry</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div align="center">\n    <div class="choose-card-title">Kartu yang dipilih</div>\n    \n    <div style="width: 66%;">\n      <div [ngStyle]="{\'background-image\':\'url(\' + sof.imgSrc + \')\'}" class="cardSty">\n        <div class="card-detail">**** 9445</div>\n        <div class="card-detail" style="margin-top: 6px;">Savira Bunga Puspita</div>\n      </div>\n    </div>\n\n    <div class="cont-limit">\n      <span *ngIf="!isHideBalance">Sisa Limit: Rp. 80.300.000</span>\n      <span *ngIf="isHideBalance">Sisa Limit: Rp. xxxxxxxx</span>\n      <ion-icon [name]="iconEye" (click)="showVisibility()"></ion-icon>\n    </div>\n\n    <!-- FORM -->\n    <form (ngSubmit)="submit()" [formGroup]="cashlineForm">\n      <div style="margin: 15px 0px;">\n        <ion-item no-padding>\n          <ion-label floating no-margin>Nominal Pencairan (kelipatan Rp500.000)</ion-label>\n          <ion-input type="tel" [(ngModel)]="cashLineData.nominal" formControlName="nominal" (keyup)="setNominal($event.target.value)"></ion-input>\n        </ion-item>\n\n        <div class="error-text" style="color: #2D2D2D;" *ngIf="!hasInputForm">\n          Minimal nominal pencairan Rp1.000.000\n        </div>\n\n        <div no-lines *ngIf="( cashlineForm.get(\'nominal\').hasError(\'min\') || cashlineForm.get(\'nominal\').hasError(\'max\') ||cashlineForm.get(\'nominal\').hasError(\'pattern\') ||cashlineForm.get(\'nominal\').hasError(\'required\') || cashlineForm.get(\'nominal\').hasError(\'multiple500K\') )">\n          <div class="error-text" *ngIf="cashlineForm.get(\'nominal\').hasError(\'multiple500K\') && cashlineForm.get(\'nominal\').dirty && !cashlineForm.get(\'nominal\').hasError(\'min\') && !cashlineForm.get(\'nominal\').hasError(\'max\')">\n            Nominal harus kelipatan Rp500.000\n          </div>\n          <div class="error-text" *ngIf="(submitted && cashlineForm.controls.nominal.errors.required || cashlineForm.controls.nominal.errors.min) || (cashlineForm.get(\'nominal\').hasError(\'min\') || cashlineForm.get(\'nominal\').hasError(\'required\') && cashlineForm.get(\'nominal\').dirty)">\n            Minimal nominal pencairan Rp1.000.000\n          </div>\n          <div class="error-text" *ngIf="cashlineForm.get(\'nominal\').hasError(\'max\') && cashlineForm.get(\'nominal\').dirty">\n            Nominal pencairan melebihi batas maksimal pencairan\n          </div>\n        </div>\n      </div>\n      <button type="submit" ion-button block color="primary">Lanjut</button>\n    </form>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/cashline-inquiry/cashline-inquiry.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], CashlineInquiryPage);
    return CashlineInquiryPage;
}());

//# sourceMappingURL=cashline-inquiry.js.map

/***/ })

});
//# sourceMappingURL=41.js.map