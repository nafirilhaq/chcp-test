webpackJsonp([14],{

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SofPageModule", function() { return SofPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sof__ = __webpack_require__(894);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SofPageModule = /** @class */ (function () {
    function SofPageModule() {
    }
    SofPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sof__["a" /* SofPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sof__["a" /* SofPage */]),
            ],
        })
    ], SofPageModule);
    return SofPageModule;
}());

//# sourceMappingURL=sof.module.js.map

/***/ }),

/***/ 894:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SofPage; });
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
 * Generated class for the SofPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SofPage = /** @class */ (function () {
    function SofPage(navCtrl, alertCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
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
    SofPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SofPage');
        console.log('listSof', this.listSof);
        // this.initSof();
    };
    SofPage.prototype.initSof = function () {
        var _this = this;
        this.listSof.filter(function (item, idx) {
            if (item.default == true) {
                _this.defaultSofIndex = idx;
            }
        });
        console.log('default index', this.defaultSofIndex);
        if (this.defaultSofIndex == 0) {
            this.defaultSof = true;
        }
        else {
            this.defaultSof = false;
        }
    };
    SofPage.prototype.goNext = function (index) {
        var _this = this;
        switch (index) {
            case 0:
                var modal = this.modalCtrl.create("TtpTutorialPage");
                modal.present();
                modal.onDidDismiss(function (data) {
                    console.log('modal dismiss', data);
                });
                break;
            case 1:
                this.modalCardNumber = true;
                break;
            case 2:
                var alert_1 = this.alertCtrl.create({
                    message: "Yakin ingin menghapus favorit?",
                    buttons: [
                        {
                            text: "Tidak",
                        },
                        {
                            text: "Ya",
                            handler: function () {
                                var newSof = _this.listSof.filter(function (el, idx) {
                                    return idx != _this.currentSofIndex;
                                });
                                _this.listSof = newSof;
                                console.log('list new', newSof);
                            },
                        },
                    ],
                });
                alert_1.present();
            default:
                break;
        }
    };
    SofPage.prototype.slideChanged = function () {
        // let currentIndex = this.slides.getActiveIndex();
        // console.log('Current index is', currentIndex);
        // if (currentIndex == this.defaultSofIndex) {
        //   this.defaultSof = true;
        // } else {
        //   this.defaultSof = false;
        // }
        var currentIndex = this.slides1.toArray()[0].getActiveIndex();
        console.log('Current index is', currentIndex);
        this.currentSofIndex = currentIndex;
    };
    SofPage.prototype.slideInfoChanged = function () {
        var currentIndex = this.slides1.toArray()[1].getActiveIndex();
        console.log('Current index is', currentIndex);
    };
    SofPage.prototype.handleSmoothSlide = function () {
        var currentIndex = this.slides1.toArray()[1].getActiveIndex();
        console.log('prev index', currentIndex);
        if (currentIndex == 1) {
            this.slides1.toArray()[1].slideTo(0, 0);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], SofPage.prototype, "slides1", void 0);
    SofPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sof',template:/*ion-inline-start:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/sof/sof.html"*/'<!--\n  Generated template for the SofPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>sof</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <!-- <div class="div-highlight" *ngIf="listSof.length > 0">\n    <ion-slides slidesPerView="1" spaceBetween="-120" loop="true" speed="500" [autoplay]="3000" style="height: 100%; width:100%; position: absolute; left:0; right: 0; top: 0; bottom: 0; margin:auto;z-index: 3;" pager="true" class="pager-bottom">\n      <ion-slide align="center" *ngFor="let item of listSof">\n        <div align="center">\n          <div class="sofCardFront">\n            <button class="btn-link" (click)="openWithSystemBrowser(item.redirect_link)">\n              <div style="width: 100%; height: 100%;" class="bg-spiner">\n                <img [src]="item.gambar_promo" class="img-highlight">\n              </div>\n            </button>\n          </div>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div> -->\n  <div style="display: flex; flex-direction: column;">\n    <div>\n      <h6 text-center>Sumber Dana</h6>\n    </div>\n    <div>\n      <ion-slides [initialSlide]="defaultSofIndex" slidesPerView="1" spaceBetween="-100" speed="500"\n        centeredSlides="true" style="width:100%;" (ionSlideDidChange)="slideChanged()">\n        <ion-slide align="center" *ngFor="let item of listSof">\n          <div align="center">\n            <div style="width: 66%;">\n              <img [src]="item.imgSrc" style="width:232px; height: 146px; border-radius: 10px;">\n              <div style="position: absolute; top: 24vw; left: 20vw; color: white; font-size: 14px;">\n                {{item.Card_No}}\n              </div>\n              <div style="position: absolute; top: 33vw; left: 20vw; color: white; font-size: 3vw;">\n                {{item.Cust_Name}}\n              </div>\n            </div>\n          </div>\n        </ion-slide>\n\n        <ion-slide align="center">\n          <div align="center">\n            <div style="width: 66%;">\n              <div align="center" class="card-border" (click)="addCard()">\n                <div class="btn-activated">\n                  Tambah kartu kredit digital\n                </div>\n              </div>\n            </div>\n          </div>\n        </ion-slide>\n      </ion-slides>\n\n      \n\n      <div *ngIf="defaultSof"\n        style="background-color: #33A6FC; width: fit-content; margin: 20px auto 0; padding: 5px 12px; border-radius: 14px;">\n        <span style="color: white; font-size: 14;">Sumber Dana Utama</span>\n      </div>\n      <div *ngIf="!defaultSof" (click)="setDefault()"\n        style="background-color: white; border: 1px solid #33A6FC; width: fit-content; margin: 20px auto 0; padding: 5px 12px; border-radius: 14px;">\n        <span style="color: #33A6FC; font-size: 14;">Jadikan Sumber Dana Utama</span>\n      </div>\n    </div>\n\n    <!-- <div>\n      <ion-slides slidesPerView="auto" spaceBetween="7">\n        <ion-slide class="slide-space">&nbsp;</ion-slide>\n      \n        <ion-slide *ngFor="let item of listInfo">\n          <div\n            style="background-image: url(\'../../assets/imgs/bg-info.png\'); width: 230px !important; height: 95px; background-size: 100% 100%;">\n          </div>\n        </ion-slide>\n      \n        <ion-slide class="slide-space">&nbsp;</ion-slide>\n      </ion-slides>\n    </div> -->\n    <div>\n      <ion-slides slidesPerView="auto" spaceBetween="10" (ionSlideDidChange)="slideInfoChanged()" pager="true">\n          <ion-slide class="allo-slide-two" *ngFor="let item of listInfo, let i = index">\n            <div class="crd-img bg-spiner" [ngStyle]="i == 0 && {\'margin-left\': \'16px\'}"\n              style="display: flex; flex-direction: column; background-image: url(\'../../assets/imgs/bg-info.png\'); width: max-content; height: max-content; background-size: 100% 100%; padding: 10px 14px;">\n              <span style="max-width: 200px; font-size: 12px; text-align: left; font-weight: 700;">{{item.title}}</span>\n              <div [ngStyle]="item.width"\n                style="line-height: 15px; height: 30px; overflow: hidden; font-size: 14px; text-align: left; font-weight: 400; color: #979797; margin: 8px 0 8px;">\n                {{item.subtitle}}</div>\n              <span style="font-size: 14px; text-align: left; font-weight: 700; color: #FA9D1C;" (click)="goNext(i)">{{item.button}}</span>\n            </div>\n          </ion-slide>\n          <ion-slide class="slide-space">&nbsp;</ion-slide>\n        </ion-slides>\n      </div>\n  </div>\n\n  <div align="center">\n    <svg class="svg-area" width="250px" height="250px"  viewBox="0 0 400 400" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n      \n      <g transform="translate(200,200)"> \n        <circle id="core" cx="0" cy="0" r="36"></circle>\n        <circle id="radar" cx="0" cy="0" r="36"></circle>\n      </g>\n    </svg>\n  </div>\n</ion-content>\n\n<div id="option-modal" *ngIf="modalCardNumber">\n  <div class="container">\n    <ion-card class="crd">\n      <ion-card-header>\n        <div style="display: flex; align-items: center;">\n          <img src="assets/icon/close.svg" alt="logo" class="img-close" (click)="modalCardNumber=false">\n          <ion-label style="font-weight: 600;font-size: 16px;">Nomor Kartu Digital</ion-label>\n        </div>\n      </ion-card-header>\n\n      <ion-card-content>\n        <span style="font-size: 12px; color: #2D2D2D; font-weight: 500;">Nomor digital bukan untuk transaksi</span>\n        <ion-item no-padding style="margin-top: 10px;">\n          <ion-label floating no-margin disabled="true">Nomor Digital</ion-label>\n          <ion-input type="text" [(ngModel)]="noCard" no-lines disabled="true" style="pointer-events: auto;"></ion-input>\n          <img icon-only item-end src="assets/icon/visa-logo.png" alt="" style="width: 53px; height: 24px; z-index: 99;">\n        </ion-item>\n      </ion-card-content>\n      <div padding-left padding-right padding-bottom>\n        <span style="font-size: 10px; color: #2D2D2D; font-weight: 400; line-height: 15px;">Nomor digital ini bukan untuk transaksi dan hanya akan muncul pada struk mesin EDC kasir</span>\n      </div>\n    </ion-card>\n  </div>\n</div>'/*ion-inline-end:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/sof/sof.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], SofPage);
    return SofPage;
}());

//# sourceMappingURL=sof.js.map

/***/ })

});
//# sourceMappingURL=14.js.map