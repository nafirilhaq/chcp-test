webpackJsonp([10],{

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaptopayPageModule", function() { return TaptopayPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__taptopay__ = __webpack_require__(896);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TaptopayPageModule = /** @class */ (function () {
    function TaptopayPageModule() {
    }
    TaptopayPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__taptopay__["a" /* TaptopayPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__taptopay__["a" /* TaptopayPage */]),
            ],
        })
    ], TaptopayPageModule);
    return TaptopayPageModule;
}());

//# sourceMappingURL=taptopay.module.js.map

/***/ }),

/***/ 896:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaptopayPage; });
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
 * Generated class for the TaptopayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TaptopayPage = /** @class */ (function () {
    function TaptopayPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.coreColor = '#F5D669';
        this.radarColor = 'rgba(251, 241, 229, .5)';
        this.listSof = [
            {
                Card_Type: "C",
                acct_alias: "C03632023071713020089592",
                Cust_Name: "HARJONO SIDHODJOJO",
                type_product: "KARTU KREDIT VISA PLATINUM 1  ",
                Card_No: "4890870052090363",
                imgSrc: "assets/imgs/sofCard2/cc_gold.jpg",
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
                imgSrc: "assets/imgs/sofCard2/cc_transmart.jpg",
                maskCardNo: "489087xxxxxx9999",
                vCardId: "vLUYhE9VB0OJDNv6106VeQc=",
                default: true
            },
            {
                Card_Type: "C",
                acct_alias: "C03632023071713020089592",
                Cust_Name: "HARJONO SIDHODJOJO",
                type_product: "KARTU KREDIT CARREFOUR 1  ",
                Card_No: "489087005209999",
                imgSrc: "assets/imgs/sofCard2/cc_travel.jpg",
                maskCardNo: "489087xxxxxx9999",
                vCardId: "vLUYhE9VB0OJDNv6106VeQc=",
                default: true
            }
        ];
        this.listInfo = [
            {
                title: 'Langsung Tap dari Homepage',
                subtitle: 'Setelah login, Anda dapat langsung tap ke EDC kasir.',
                button: 'Lihat Tutorial',
                img: '../../assets/imgs/bg-info.png',
                width: { 'max-width': '200px' },
            },
            {
                title: 'Nomor Digital',
                subtitle: 'Nomor digital ini bukan untuk transaksi dan hanya akan muncul pada struk mesin EDC kasir',
                button: 'Lihat Nomor Digital',
                img: '../../assets/imgs/bg-info.png',
                width: { 'max-width': '300px' }
            },
            {
                title: 'Hapus Kartu Tap to Pay',
                subtitle: 'Kartu akan tidak bisa digunakan untuk transaksi Tap to Pay',
                button: 'Hapus Kartu Tap to Pay',
                img: '../../assets/imgs/bg-info.png',
                width: { 'max-width': '200px' }
            }
        ];
        this.modalCardNumber = false;
        this.noCard = "**** **** **** 1290";
    }
    TaptopayPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TaptopayPage');
    };
    TaptopayPage.prototype.slideChanged = function () {
        // let currentIndex = this.slides.getActiveIndex();
        // console.log('Current index is', currentIndex);
        // if (currentIndex == this.defaultSofIndex) {
        //   this.defaultSof = true;
        // } else {
        //   this.defaultSof = false;
        // }
        var currentIndex = this.slides1.toArray()[0].getActiveIndex();
        console.log('Current index is', currentIndex, typeof currentIndex);
        this.currentSofIndex = currentIndex;
        this.setPulse(currentIndex);
    };
    TaptopayPage.prototype.setPulse = function (idx) {
        if (idx == 0) {
            this.coreColor = '#F5D669';
            this.radarColor = 'rgba(251, 241, 229, .5)';
        }
        else if (idx == 1) {
            this.coreColor = '#6F0505';
            this.radarColor = 'rgba(245,122,122, .5)';
        }
        else if (idx == 2) {
            this.coreColor = 'white';
            this.radarColor = 'rgba(236, 240, 248, .5)';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], TaptopayPage.prototype, "slides1", void 0);
    TaptopayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-taptopay',template:/*ion-inline-start:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/taptopay/taptopay.html"*/'<!--\n  Generated template for the TaptopayPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>taptopay</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div style="display: flex; flex-direction: column;">\n    <div style="padding-top: 70px; background-color: rgb(217,225,241); z-index: 1;">\n      <div align="center"\n        style="position: absolute; z-index: -1; top: 20%; left: 50%; transform: translate(-50%, -50%);">\n        <svg class="svg-area" width="400px" height="400px" viewBox="0 0 400 400" version="1.1"\n          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n\n          <g transform="translate(200,200)">\n            <circle id="core" [ngStyle]="{\'fill\': coreColor}" cx="0" cy="0" r="36"></circle>\n            <circle id="radar" [ngStyle]="{\'fill\': radarColor}" cx="0" cy="0" r="36"></circle>\n          </g>\n        </svg>\n      </div>\n\n      <ion-slides [initialSlide]="defaultSofIndex" slidesPerView="1" spaceBetween="-100" speed="500"\n        centeredSlides="true" style="width:100%;" (ionSlideDidChange)="slideChanged()">\n        <ion-slide align="center" *ngFor="let item of listSof">\n          <div align="center">\n            <div style="width: 66%;">\n              <img [src]="item.imgSrc" style="width:232px; height: 146px; border-radius: 10px;">\n              <div style="position: absolute; top: 24vw; left: 20vw; color: white; font-size: 14px;">\n                {{item.Card_No}}\n              </div>\n              <div style="position: absolute; top: 33vw; left: 20vw; color: white; font-size: 3vw;">\n                {{item.Cust_Name}}\n              </div>\n            </div>\n          </div>\n        </ion-slide>\n\n        <ion-slide align="center">\n          <div align="center">\n            <div style="width: 66%;">\n              <div align="center" class="card-border" (click)="addCard()">\n                <div class="btn-activated">\n                  Tambah kartu kredit digital\n                </div>\n              </div>\n            </div>\n          </div>\n        </ion-slide>\n      </ion-slides>\n\n      <div *ngIf="!defaultSof" (click)="setDefault()"\n        style="background-color: white; border: 1px solid #33A6FC; width: fit-content; margin: 25px auto 35px; padding: 5px 12px; border-radius: 14px;">\n        <span style="color: #33A6FC; font-size: 14;">Jadikan Sumber Dana Utama</span>\n      </div>\n    </div>\n\n\n    <div style="display: flex; flex-direction: column; flex: 1; background-color: white; z-index: 2;" padding>\n      <div style="display: flex; flex: 1; flex-direction: column;">\n        <div>\n\n          <div align="center">\n            <img src="assets/imgs/ttp-step2.png" style="max-width: 140px; border: 0;">\n          </div>\n\n          <div class="card-info">\n            <b>Silakan tap atau dekatkan HP Anda pada EDC Kasir</b><br />\n            <span>Pastikan NFC HP Anda aktif saat transaksi</span>\n          </div>\n        </div>\n\n        <div *ngIf="isAddCard">\n          <div class="card-info">\n            Pilih kartu kredit untuk jadi sumber dana transaksi Tap to Pay\n          </div>\n        </div>\n      </div>\n      <div style="display: flex; flex: 1; flex-direction: column;">\n        <div style="margin: 40px 0 16px; font-size: 14px; font-weight: 700;">Penting untuk Anda</div>\n        <ion-slides slidesPerView="auto" spaceBetween="10" pager="true">\n          <ion-slide class="allo-slide-two" *ngFor="let item of listInfo, let i = index">\n            <div class="crd-img bg-spiner"\n              style="display: flex; flex-direction: column; background-image: url(\'../../assets/imgs/taptopay/bg-info.png\'); width: max-content; height: max-content; background-size: 100% 100%; padding: 10px 14px;">\n              <span style="max-width: 200px; font-size: 12px; text-align: left; font-weight: 700;">{{item.title}}</span>\n              <div [ngStyle]="item.width"\n                style="line-height: 15px; height: 30px; overflow: hidden; font-size: 14px; text-align: left; font-weight: 400; color: #979797; margin: 8px 0 8px;">\n                {{item.subtitle}}</div>\n              <span style="font-size: 14px; text-align: left; font-weight: 700; color: #FA9D1C;"\n                (click)="goNext(i)">{{item.button}}</span>\n            </div>\n          </ion-slide>\n          <ion-slide class="slide-space">&nbsp;</ion-slide>\n        </ion-slides>\n      </div>\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/taptopay/taptopay.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], TaptopayPage);
    return TaptopayPage;
}());

//# sourceMappingURL=taptopay.js.map

/***/ })

});
//# sourceMappingURL=10.js.map