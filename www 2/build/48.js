webpackJsonp([48],{

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AkunSayaPageModule", function() { return AkunSayaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__akun_saya__ = __webpack_require__(846);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AkunSayaPageModule = /** @class */ (function () {
    function AkunSayaPageModule() {
    }
    AkunSayaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__akun_saya__["a" /* AkunSayaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__akun_saya__["a" /* AkunSayaPage */]),
            ],
        })
    ], AkunSayaPageModule);
    return AkunSayaPageModule;
}());

//# sourceMappingURL=akun-saya.module.js.map

/***/ }),

/***/ 846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AkunSayaPage; });
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
 * Generated class for the AkunSayaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AkunSayaPage = /** @class */ (function () {
    function AkunSayaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.isLoadingData = false;
        this.akunList = akunlist;
        this.isShowModalMenu = false;
        this.listMenuGear = [{
                title: 'Atur Sumber Dana',
                img: 'assets/imgs/gen-z/atur-limit.png'
            },
            {
                title: 'Download Dokumen',
                img: 'assets/imgs/gen-z/blokir-kartu.png'
            }];
    }
    AkunSayaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AkunSayaPage');
    };
    AkunSayaPage.prototype.showModalMenu = function (val) {
        this.isShowModalMenu = val;
    };
    AkunSayaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-akun-saya',template:/*ion-inline-start:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/akun-saya/akun-saya.html"*/'<!--\n  Generated template for the AkunSayaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Akun Saya</ion-title>\n    <div class="btn-header-group">\n      <img\n        src="assets/new_icon/icon_gear.svg"\n        class="img-icon-setting"\n        (click)="showModalMenu(true)"\n      />\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf="!isLoadingData">\n    <div *ngFor="let akun of akunList; let x = index; last as isLast">\n      <div *ngIf="akun.sof.length > 0">\n        <div class="akun-section">\n          <div class="akun-title">{{akun.title}}</div>\n\n          <div *ngFor="let item of akun.sof; let i = index">\n            <div class="akun-item">\n              <img [src]="item.imgSrcHrz || item.imgSrc" class="sof-img" />\n              <div class="akun-info">\n                <div class="product-sty">{{item.type_product}}</div>\n                <div class="card-no-sty">{{item.Card_No}}</div>\n                <div class="dashed"></div>\n                <div class="balance-wrapper">\n                  <div class="balance-sty">Rp xxx</div>\n                  <img src="assets/imgs/gen-z/eye-on.png" style="width: 13px; height: 11px; margin-left: 10px;" />\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf="isLoadingData">\n    <div class="akun-section" *ngFor="let item of [0,1]">\n      <div class="skeleton skeleton-text"></div>\n      <div class="akun-item" *ngFor="let item of [0,1]">\n        <div class="skeleton skeleton-img"></div>\n        <div class="akun-info">\n          <div class="skeleton skeleton-text"></div>\n          <div class="skeleton skeleton-text"></div>\n          <div class="skeleton skeleton-text"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<!-- Modal Menu CC Gear (START) -->\n<div\n  class="custom-modal-backdrop"\n  *ngIf="isShowModalMenu"\n  [@fadeInOut]\n  (click)="showModalMenu(false)"\n></div>\n\n<div class="custom-modal" *ngIf="isShowModalMenu" [@slideUpDown]>\n  <div class="modal-header">\n    <img\n      src="assets/icon/verify-email/close.svg"\n      alt="logo"\n      class="img-close"\n      (click)="showModalMenu(false)"\n    />\n    <span class="title-text">Lainnya</span>\n  </div>\n\n  <div class="modal-body">\n    <div *ngFor="let menu of listMenuGear, last as isLast">\n      <div\n        class="list-menu-gear"\n        [ngStyle]="{\'margin-bottom\': isLast ? \'0px\' : \'16px\'}"\n      >\n        <div style="width: 25px">\n          <img [src]="menu.img" alt="menu" />\n        </div>\n        <div class="menu-sty">{{menu.title}}</div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Modal Menu CC Gear (END) -->\n'/*ion-inline-end:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/akun-saya/akun-saya.html"*/,
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
    ], AkunSayaPage);
    return AkunSayaPage;
}());

var akunlist = [
    {
        "title": "Tabungan",
        "img": "assets/icon/color/debit-card.svg",
        "color": "#ff885c",
        "isSofLength": 2,
        "sof": [
            {
                "Card_Type": "S",
                "sccode": "T0",
                "acct_alias": "S003420250723112001400346",
                "flag_show": true,
                "relasi": "",
                "kode_kartu": "A001",
                "allow_trx": "Y",
                "Cust_Name": "CHAIRUL UMYAN",
                "currency": "IDR",
                "mobileNo": "081218923849",
                "Card_No": "010740025010034",
                "type_product": "MEGA SALARY",
                "maskIcon": "eye-off",
                "isMask": false,
                "typeCard": "Tabungan",
                "maskingCardNo": "010740•••••0034",
                "imgSrc": "assets/imgs/sofCard2/dd_dana.jpg",
                "isSof": true,
                "saldo": "xxxxxxx"
            },
            {
                "Card_Type": "S",
                "sccode": "H0",
                "acct_alias": "S649320250723112001464935",
                "flag_show": true,
                "relasi": "",
                "kode_kartu": "A010",
                "allow_trx": "Y",
                "Cust_Name": "CHAIRUL UMYAN",
                "currency": "IDR",
                "mobileNo": "081218923849",
                "Card_No": "010740020186493",
                "type_product": "MEGA PAYROLL",
                "maskIcon": "eye-off",
                "isMask": false,
                "typeCard": "Tabungan",
                "maskingCardNo": "010740•••••6493",
                "imgSrc": "assets/imgs/sofCard2/dd_payroll.jpg",
                "isSof": false,
                "saldo": "xxxxxxx"
            }
        ]
    },
    {
        "title": "Rekening Dana Nasabah",
        "img": "assets/icon/color/debit-card.svg",
        "color": "#929a37",
        "sof": []
    },
    {
        "title": "Giro",
        "img": "assets/icon/color/debit-card.svg",
        "color": "#f75b17",
        "sof": []
    },
    {
        "title": "Kartu Kredit",
        "img": "assets/icon/color/credit-card.svg",
        "color": "#854d85",
        "sof": [
            {
                "Card_Type": "C",
                "sccode": "",
                "acct_alias": "C194020250723112001465261",
                "flag_show": false,
                "relasi": "P",
                "kode_kartu": "",
                "allow_trx": "Y",
                "Cust_Name": "CHAIRUL UMYAN",
                "currency": " ",
                "mobileNo": "081218923849",
                "Card_No": "4714390011771940",
                "type_product": "MEGA METRO CARD ",
                "maskIcon": "eye-off",
                "isMask": false,
                "typeCard": "Kartu Kredit",
                "maskingCardNo": "471439••••••1940",
                "imgSrc": "assets/imgs/sofCard2/metro_new_bin.png",
                "isSof": true,
                "saldo": "xxxxxxx"
            },
            {
                "Card_Type": "C",
                "sccode": "",
                "acct_alias": "C019020250723112001465264",
                "flag_show": false,
                "relasi": "P",
                "kode_kartu": "",
                "allow_trx": "Y",
                "Cust_Name": "CHAIRUL UMYAN",
                "currency": "",
                "mobileNo": "081218923849",
                "Card_No": "5242610051350190",
                "type_product": "METRO MEGA CARD",
                "maskIcon": "eye-off",
                "isMask": false,
                "typeCard": "Kartu Kredit",
                "maskingCardNo": "524261••••••0190",
                "imgSrc": "assets/imgs/ccCard/metro.jpg",
                "isSof": false,
                "saldo": "xxxxxxx"
            },
            {
                "Card_Type": "C",
                "sccode": "",
                "acct_alias": "C08192025072316210496585",
                "flag_show": false,
                "relasi": "P",
                "kode_kartu": "",
                "allow_trx": "Y",
                "Cust_Name": "CHAIRUL UMYAN",
                "currency": "",
                "mobileNo": "081218923849",
                "Card_No": "4784870100000819",
                "type_product": "BLIV CARD",
                "maskIcon": "eye-off",
                "isMask": false,
                "typeCard": "Kartu Kredit",
                "maskingCardNo": "478487••••••0819",
                "imgSrc": "assets/imgs/sofCard2/cc_bliv_yellow_vertical.jpg",
                "isSof": true,
                "cardStyle": "vertical",
                "imgSrcHrz": "assets/imgs/sofCard2/cc_bliv_yellow_horizontal.jpg",
                "saldo": "xxxxxxx"
            },
            {
                "Card_Type": "C",
                "sccode": "",
                "acct_alias": "C194020250723112001465261",
                "flag_show": false,
                "relasi": "P",
                "kode_kartu": "temp4",
                "allow_trx": "Y",
                "Cust_Name": "FRISKA ULFADINA",
                "currency": " ",
                "mobileNo": "082208229911",
                "Card_No": "4784870170000669",
                "type_product": "Mega Bliv Card",
                "maskIcon": "eye-off",
                "isMask": false,
                "typeCard": "Kartu Kredit",
                "maskingCardNo": "478487••••••0669",
                "imgSrc": "assets/imgs/gen-z/bliv-ver-temp4.png",
                "isSof": true,
                "cardStyle": "vertical",
                "imgSrcHrz": "assets/imgs/sofCard2/cc_bliv_yellow_horizontal.jpg",
                "saldo": "xxxxxxx"
            }
        ]
    },
    {
        "title": "M-Money",
        "img": "assets/icon/color/wallet.svg",
        "color": "#583673",
        "sof": []
    },
    {
        "title": "Deposito",
        "img": "assets/icon/color/debit-card.svg",
        "color": "#53a192",
        "sof": []
    },
    {
        "title": "Reksa Dana",
        "img": "assets/icon/color/debit-card.svg",
        "color": "#f4ba25",
        "sof": []
    },
    {
        "title": "Obligasi",
        "img": "assets/icon/color/debit-card.svg",
        "color": "#f4ba25",
        "sof": [
            {
                "type_product": "REPUBLIC OF INDONESIA 2071",
                "fhcode": null,
                "Cust_Name": "CHAIRUL UMYAN",
                "prodCode": "INDON 71",
                "Card_Type": "O",
                "imgSrc": "assets/imgs/sofCard2/obligasi.jpg"
            }
        ]
    },
    {
        "title": "Pinjaman",
        "img": "assets/icon/color/credit-card.svg",
        "color": "#a12380",
        "sof": []
    }
];
//# sourceMappingURL=akun-saya.js.map

/***/ })

});
//# sourceMappingURL=48.js.map