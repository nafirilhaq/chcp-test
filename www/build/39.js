webpackJsonp([39],{

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeSofDetailPageModule", function() { return ChangeSofDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__change_sof_detail__ = __webpack_require__(858);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_lottie__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ChangeSofDetailPageModule = /** @class */ (function () {
    function ChangeSofDetailPageModule() {
    }
    ChangeSofDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__change_sof_detail__["a" /* ChangeSofDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__change_sof_detail__["a" /* ChangeSofDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ng_lottie__["a" /* LottieAnimationViewModule */].forRoot()
            ],
        })
    ], ChangeSofDetailPageModule);
    return ChangeSofDetailPageModule;
}());

//# sourceMappingURL=change-sof-detail.module.js.map

/***/ }),

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeSofDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__(86);
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
 * Generated class for the ChangeSofDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangeSofDetailPage = /** @class */ (function () {
    function ChangeSofDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bgCekCC = "assets/imgs/gen-z/bliv-ver-temp5.png";
        this.isLottie = false;
        this.isLoading = false;
        this.isShowModalDetailCC = false;
        this.isShowModalMenuCC = false;
        this.listMenu = [{
                title: 'Bayar',
                img: 'assets/imgs/gen-z/menu-bayar.png'
            },
            {
                title: 'Ubah Cicilan',
                img: 'assets/imgs/gen-z/menu-bayar.png'
            },
            {
                title: 'Mega Bill',
                img: 'assets/imgs/gen-z/menu-bayar.png'
            },
            {
                title: 'Credit Shield',
                img: 'assets/imgs/gen-z/menu-bayar.png'
            }];
        this.listMenuGear = [{
                title: 'Pengaturan Limit',
                img: 'assets/imgs/gen-z/atur-limit.png'
            },
            {
                title: 'Blokir & Ganti Kartu',
                img: 'assets/imgs/gen-z/blokir-kartu.png'
            },
            {
                title: 'Ubah PIN Kartu Kredit',
                img: 'assets/imgs/gen-z/ubah-pin.png'
            },
            {
                title: 'Registrasi Kartu Tambahan',
                img: 'assets/imgs/gen-z/regis-supplement.png'
            },
            {
                title: 'Atur Jenis Transaksi',
                img: 'assets/imgs/gen-z/atur-transaksi.png'
            },
            {
                title: 'Loan On Card',
                img: 'assets/imgs/gen-z/loc.png'
            }];
        this.animatedValue = 0;
        this.lottieConfig = {
            path: 'assets/file/cat-lottie.json',
            renderer: 'canvas',
            autoplay: true,
            loop: true
        };
    }
    ChangeSofDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangeSofDetailPage');
    };
    ChangeSofDetailPage.prototype.showModalDetailCC = function (val) {
        this.isShowModalDetailCC = val;
    };
    ChangeSofDetailPage.prototype.showModalMenuCC = function (val) {
        this.isShowModalMenuCC = val;
    };
    ChangeSofDetailPage.prototype.handleAnimation = function (anim) {
        console.log('anim', anim);
        this.anim = anim;
        this.anim.setSpeed(1);
    };
    ChangeSofDetailPage.prototype.setLottie = function () {
        this.isLottie = !this.isLottie;
    };
    ChangeSofDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-change-sof-detail',template:/*ion-inline-start:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/change-sof-detail/change-sof-detail.html"*/'<!--\n  Generated template for the ChangeSofDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>change-sof-detail</ion-title>\n    <div class="btn-header-group">\n      <img\n        src="assets/new_icon/icon_gear.svg"\n        class="img-icon-setting"\n        (click)="isLoading = !isLoading"\n      />\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf="!isLoading">\n    <!-- card section -->\n    <div class="card-section">\n      <img\n        src="assets/imgs/gen-z/bg-moon.png"\n        alt=""\n        style="\n          width: 100%;\n          position: absolute;\n          transform: translate(-50%, -50%);\n          z-index: 1;\n          top: 15%;\n          left: 40%;\n        "\n      />\n      <div class="top-section">\n        <!-- <div style="width: 56px"></div> -->\n\n        <!-- <img\n          src="assets/imgs/sofCard2/bliv-template.png"\n          alt=""\n          class="card-style"\n          *ngIf="!isLottie"\n        /> -->\n        <div\n          [ngStyle]="{\'background-image\':\'url(\' + bgCekCC + \')\'}"\n          style="\n    width: 146px;\n    height: 232px;\n    background-size: 100% 100%;\n    background-position: center;\n    background-repeat: no-repeat;\n    border-radius: 12px;\n    margin: auto;\n    background-color: red;\n  "\n          *ngIf="!isLottie"\n        >\n          <!-- <img src="bgCekCC" style="width: 146px; height: 232px; margin: auto;" /> -->\n        </div>\n\n        <div *ngIf="isLottie">\n          <lottie-animation-view\n            [options]="lottieConfig"\n            [width]="240"\n            [height]="240"\n            (animCreated)="handleAnimation($event)"\n          >\n          </lottie-animation-view>\n        </div>\n\n        <div style="width: 56px; text-align: center; position: absolute; right: 0;">\n          <div\n            style="\n              display: flex;\n              align-items: center;\n              justify-content: center;\n              width: 56px;\n              height: 56px;\n            "\n          >\n            <img\n              src="assets/file/gen-z-ai.gif"\n              alt=""\n              style="width: 80px; position: absolute; z-index: 1; max-width: 1000%;"\n            />\n            <img\n              src="assets/imgs/gen-z/ai.png"\n              alt=""\n              style="width: 24px; z-index: 10"\n            />\n          </div>\n          <div class="ubah-text">Ubah</div>\n        </div>\n      </div>\n\n      <div class="credit-shield-badge">\n        <img src="assets/credit-shield/icon/shield-badge.svg">\n        <div style="margin-left: 8px;">Terlindungi Mega Ultima Shield</div>\n      </div>\n\n      <!-- card basic/supplement info -->\n      <div class="basic-supplement-box">\n        Kartu Kredit Tambahan\n      </div>\n\n      <!-- CVV section -->\n      <div>\n        <div\n          class="textbox-info"\n          style="\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n          "\n        >\n          <div style="display: flex; flex: 1; flex-direction: column">\n            <div class="textbox-font">Nomor Kartu Kredit</div>\n            <div class="textbox-font" style="font-weight: 700; margin-top: 4px">\n              **** **** **** 1234\n            </div>\n          </div>\n          <!-- <img\n            src="assets/imgs/gen-z/eye-off.png"\n            alt=""\n            style="width: 24px"\n            (click)="showModalMenuCC(true)"\n          /> -->\n          <ion-spinner color="primary" (click)="setLottie()"></ion-spinner>\n        </div>\n\n        <div style="display: flex; justify-content: space-between; gap: 8px">\n          <div class="textbox-info" style="flex: 1">\n            <div class="textbox-font">CVV</div>\n            <div class="textbox-font" style="font-weight: 700; margin-top: 4px">\n              ***\n            </div>\n          </div>\n          <div class="textbox-info" style="flex: 1">\n            <div class="textbox-font">Exp Date</div>\n            <div class="textbox-font" style="font-weight: 700; margin-top: 4px">\n              **/**\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- shortcut menu section -->\n      <div class="menu-container">\n        <div *ngFor="let menu of listMenu" class="menu-item">\n          <div class="icon-wrapper">\n            <img [src]="menu.img" alt="menu" />\n          </div>\n          <div class="menu-label">{{menu.title}}</div>\n        </div>\n      </div>\n    </div>\n\n    <!-- cashback section -->\n    <div class="cashback-section">\n      <img src="assets/imgs/gen-z/coins-money.png" style="position: absolute; height: 60px;" />\n      <div class="cashback-content">\n        <div class="cashback-amount" *ngIf="cashbackError">Rp350rb</div>\n        <div style="width: 40px;">\n          <ion-spinner color="primary" *ngIf="!cashbackError"></ion-spinner>\n        </div>\n        <div class="cashback-info">\n          <div class="cashback-amount cashback-get">Cashback didapatkan 🤩</div>\n          <div class="cashback-detail">Cek detail perolehan cashback</div>\n        </div>\n        <img src="assets/imgs/gen-z/arrow-yellow.png" style="width: 12px;" (click)="cashbackError = !cashbackError" />\n      </div>\n    </div>\n\n    <!-- info card section -->\n    <div class="card-section">\n      <div\n        style="\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          padding-bottom: 16px;\n        "\n      >\n        <div class="info-cc">Informasi Kartu Kredit</div>\n        <div class="info-cc-see-all" (click)="showModalDetailCC(true)">\n          Lihat Semua\n        </div>\n      </div>\n      <div class="dashed"></div>\n      <div\n        style="\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          padding-bottom: 16px;\n        "\n      >\n        <div class="info-cc-label">Informasi Kartu Kredit</div>\n        <div class="info-cc-label" style="font-weight: 700">Rp10.291.801</div>\n      </div>\n      <div\n        style="\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          padding-bottom: 16px;\n        "\n      >\n        <div class="info-cc-label">Informasi Kartu Kredit</div>\n        <div class="info-cc-label" style="font-weight: 700">Rp4.708.199</div>\n      </div>\n      <div\n        style="\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n        "\n      >\n        <div class="info-cc-label">Informasi Kartu Kredit</div>\n        <div class="info-cc-label" style="font-weight: 700">Rp15.000.000</div>\n      </div>\n    </div>\n\n    <!-- bottom menu -->\n    <div class="bottom-menu">\n      <div class="btn-wrapper">Mutasi</div>\n      <div class="btn-wrapper">e-Billing</div>\n    </div>\n  </div>\n\n  <div *ngIf="isLoading">\n    <!-- Kartu Credit -->\n    <div class="card-section">\n      <div class="skeleton-box card-container">\n        <div class="skeleton card-image"></div>\n\n        <div class="skeleton card-line"></div>\n\n        <div class="row">\n          <div class="skeleton card-line half"></div>\n          <div class="skeleton card-line half"></div>\n        </div>\n\n        <div class="row">\n          <div class="skeleton card-button"></div>\n          <div class="skeleton card-button"></div>\n          <div class="skeleton card-button"></div>\n          <div class="skeleton card-button"></div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Informasi Kartu Kredit -->\n    <div class="card-section">\n      <div class="skeleton-box info-container">\n        <div class="row space-between">\n          <div class="skeleton info-title short"></div>\n          <div class="skeleton info-title shorter"></div>\n        </div>\n        <div class="skeleton info-line"></div>\n        <div class="skeleton info-line"></div>\n        <div class="skeleton info-line"></div>\n      </div>\n    </div>\n\n    <!-- Tombol Bawah -->\n    <div style="margin: 20px 20px">\n      <div class="row">\n        <div class="skeleton bottom-button"></div>\n        <div class="skeleton bottom-button"></div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<!-- Modal Info CC Detail (START) -->\n<div\n  class="custom-modal-backdrop"\n  *ngIf="isShowModalDetailCC"\n  [@fadeInOut]\n  (click)="showModalDetailCC(false)"\n></div>\n\n<div class="custom-modal" *ngIf="isShowModalDetailCC" [@slideUpDown]>\n  <div class="modal-header">\n    <img\n      src="assets/icon/verify-email/close.svg"\n      alt="logo"\n      class="img-close"\n      (click)="showModalDetailCC(false)"\n    />\n    <span class="title-text">Informasi Kartu Kredit</span>\n  </div>\n\n  <div\n    class="modal-body"\n    style="border: 1px solid #e9ecf5; border-radius: 12px; padding: 24px 16px"\n  >\n    <div\n      style="\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding-bottom: 16px;\n      "\n    >\n      <div class="info-cc-label">Sisa Limit Kredit</div>\n      <div class="info-cc-label font-14" style="font-weight: 700">\n        Rp15.000.000\n      </div>\n    </div>\n\n    <div class="dashed"></div>\n\n    <div\n      style="\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding-bottom: 16px;\n      "\n    >\n      <div class="info-cc-label">Limit Kredit</div>\n      <div class="info-cc-label" style="font-weight: 700">Rp15.000.000</div>\n    </div>\n    <div\n      style="\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding-bottom: 16px;\n      "\n    >\n      <div class="info-cc-label">Limit Tarik Tunai</div>\n      <div class="info-cc-label" style="font-weight: 700">Rp750.000</div>\n    </div>\n    <div\n      style="\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding-bottom: 16px;\n      "\n    >\n      <div class="info-cc-label">Sisa Limit Tarik Tunai</div>\n      <div class="info-cc-label" style="font-weight: 700">Rp750.000</div>\n    </div>\n\n    <div class="dashed"></div>\n\n    <div\n      style="\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding-bottom: 16px;\n      "\n    >\n      <div class="info-cc-label">Tanggal Cetak Tagihan</div>\n      <div class="info-cc-label" style="font-weight: 700">Rp15.000.000</div>\n    </div>\n    <div\n      style="\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding-bottom: 16px;\n      "\n    >\n      <div class="info-cc-label">Tanggal Jatuh Tempo</div>\n      <div class="info-cc-label" style="font-weight: 700">Rp750.000</div>\n    </div>\n    <div\n      style="\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding-bottom: 16px;\n      "\n    >\n      <div class="info-cc-label">Total Tagihan</div>\n      <div class="info-cc-label" style="font-weight: 700">Rp750.000</div>\n    </div>\n    <div\n      style="\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding-bottom: 16px;\n      "\n    >\n      <div class="info-cc-label">Minimum Pembayaran</div>\n      <div class="info-cc-label" style="font-weight: 700">Rp750.000</div>\n    </div>\n\n    <div class="dashed"></div>\n\n    <div\n      style="\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        padding-bottom: 16px;\n      "\n    >\n      <div class="info-cc-label">Tanggal Pembayaran Terakhir</div>\n      <div class="info-cc-label" style="font-weight: 700">Rp15.000.000</div>\n    </div>\n    <div\n      style="display: flex; justify-content: space-between; align-items: center"\n    >\n      <div class="info-cc-label">Pembayaran Terakhir</div>\n      <div class="info-cc-label" style="font-weight: 700">Rp750.000</div>\n    </div>\n  </div>\n</div>\n<!-- Modal Info CC Detail (END) -->\n\n<!-- Modal Menu CC Gear (START) -->\n<div\n  class="custom-modal-backdrop"\n  *ngIf="isShowModalMenuCC"\n  [@fadeInOut]\n  (click)="showModalMenuCC(false)"\n></div>\n\n<div class="custom-modal" *ngIf="isShowModalMenuCC" [@slideUpDown]>\n  <div class="modal-header">\n    <img\n      src="assets/icon/verify-email/close.svg"\n      alt="logo"\n      class="img-close"\n      (click)="showModalMenuCC(false)"\n    />\n    <span class="title-text">Atur Kartu Kredit</span>\n  </div>\n\n  <div class="modal-body">\n    <div *ngFor="let menu of listMenuGear, last as isLast">\n      <div\n        class="list-menu-gear"\n        [ngStyle]="{\'margin-bottom\': isLast ? \'0px\' : \'16px\'}"\n      >\n        <div style="width: 25px">\n          <img [src]="menu.img" alt="menu" />\n        </div>\n        <div class="menu-sty">{{menu.title}}</div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Modal Menu CC Gear (END) -->\n'/*ion-inline-end:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/change-sof-detail/change-sof-detail.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('fadeInOut', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('200ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('200ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ opacity: 0 }))
                    ])
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* trigger */])('slideUpDown', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'translateY(100%)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('250ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'translateY(0)' }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('250ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["h" /* style */])({ transform: 'translateY(100%)' }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ChangeSofDetailPage);
    return ChangeSofDetailPage;
}());

//# sourceMappingURL=change-sof-detail.js.map

/***/ })

});
//# sourceMappingURL=39.js.map