webpackJsonp([42],{

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashlineHistoryPageModule", function() { return CashlineHistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cashline_history__ = __webpack_require__(854);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CashlineHistoryPageModule = /** @class */ (function () {
    function CashlineHistoryPageModule() {
    }
    CashlineHistoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cashline_history__["a" /* CashlineHistoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cashline_history__["a" /* CashlineHistoryPage */]),
            ],
        })
    ], CashlineHistoryPageModule);
    return CashlineHistoryPageModule;
}());

//# sourceMappingURL=cashline-history.module.js.map

/***/ }),

/***/ 854:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CashlineHistoryPage; });
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
 * Generated class for the CashlineHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CashlineHistoryPage = /** @class */ (function () {
    function CashlineHistoryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.list_tab = [
            {
                id: '0',
                name: 'Diajukan',
                data: [
                    {
                        data: 'diajukan 1'
                    },
                    {
                        data: 'diajukan 2'
                    },
                ]
            },
            {
                id: '1',
                name: 'Berjalan',
                data: [
                    {
                        data: 'Berjalan 1'
                    }
                ]
            },
            {
                id: '2',
                name: 'Selesai',
                data: [
                    {
                        data: 'Selesai 1'
                    },
                    {
                        data: 'Selesai 2'
                    },
                    {
                        data: 'Selesai 3'
                    }
                ]
            }
        ];
        this.activeTab = 0;
    }
    CashlineHistoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CashlineHistoryPage');
        this.slides1.toArray()[1].lockSwipes(true);
    };
    CashlineHistoryPage.prototype.selectTab = function (id) {
        this.activeTab = id;
        this.slides1.toArray()[0].slideTo(id, 500);
    };
    CashlineHistoryPage.prototype.slideChanged = function () {
        var currentIndex = this.slides1.toArray()[0].getActiveIndex();
        if (currentIndex == 2) {
            this.slides1.toArray()[0].lockSwipeToNext(true);
        }
        else {
            this.slides1.toArray()[0].lockSwipeToNext(false);
        }
        this.activeTab = currentIndex;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
    ], CashlineHistoryPage.prototype, "slides1", void 0);
    CashlineHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-cashline-history',template:/*ion-inline-start:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/cashline-history/cashline-history.html"*/'<!--\n  Generated template for the CashlineHistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>cashline-history</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="margin-top: 16px;">\n  <div margin-top style="display: flex; flex: 1; flex-direction: column; justify-content: flex-start; align-items: flex-start;">\n    <ion-slides slidesPerView="1" spaceBetween="50" loop="false" autoplay="false" (ionSlideDidChange)="slideChanged()">\n      <ion-slide *ngFor="let item of list_tab; let i = index" style="align-items: flex-start;">\n        <div class="styleCont" *ngFor="let data of item.data">\n          <div class="top-content">\n            <div class="left-content">\n              <div class="item-text">Nominal Pencairan</div>\n              <div class="value-text">Rp. 12.500.000</div>\n            </div>\n            <div class="right-content">\n              <div class="item-text">Tagihan cicilan</div>\n              <div class="value-text" style="color: #FF881B; font-weight: 700;">Rp. 359.167/bulan</div>\n            </div>\n          </div>\n          <div class="bottom-content">\n            <div [ngClass]="item.id == \'0\' ? \'status-pengajuan\' : item.id == \'1\' ? \'status-berjalan\' : \'status-selesai\'">{{item.name}}</div>\n            <div class="right-content">\n              <div class="item-text">Tenor Dipilih</div>\n              <div class="value-text">36 Bulan</div>\n            </div>\n          </div>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</ion-content>\n\n<!-- TAB SECTION -->\n<div style="position: absolute; top: 8vh; left: 4vw; z-index: 999; background-color: #FFF;">\n  <ion-slides slidesPerView="auto" spaceBetween="6" loop="false" autoplay="false" style="width: max-content;">\n    <ion-slide *ngFor="let item of list_tab; let i = index" style="width: auto;">\n      <div class="styleTab" (click)="selectTab(item.id)" [ngClass]="item.id == activeTab ? \'tabActive\' : \'tabInActive\'">\n        {{item.name}}\n      </div>\n    </ion-slide>\n  </ion-slides>\n</div>'/*ion-inline-end:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/cashline-history/cashline-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], CashlineHistoryPage);
    return CashlineHistoryPage;
}());

//# sourceMappingURL=cashline-history.js.map

/***/ })

});
//# sourceMappingURL=42.js.map