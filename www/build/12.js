webpackJsonp([12],{

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaptopayActivatePageModule", function() { return TaptopayActivatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__taptopay_activate__ = __webpack_require__(896);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TaptopayActivatePageModule = /** @class */ (function () {
    function TaptopayActivatePageModule() {
    }
    TaptopayActivatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__taptopay_activate__["a" /* TaptopayActivatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__taptopay_activate__["a" /* TaptopayActivatePage */]),
            ],
        })
    ], TaptopayActivatePageModule);
    return TaptopayActivatePageModule;
}());

//# sourceMappingURL=taptopay-activate.module.js.map

/***/ }),

/***/ 896:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaptopayActivatePage; });
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
 * Generated class for the TaptopayActivatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TaptopayActivatePage = /** @class */ (function () {
    function TaptopayActivatePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imgSlide = [
            {
                img: "assets/imgs/taptopay/ttp_logo1.svg"
            },
            {
                img: "assets/imgs/taptopay/ttp_logo2.svg"
            },
            {
                img: "assets/imgs/taptopay/ttp_logo3.svg"
            }
        ];
        this.width = 0;
    }
    TaptopayActivatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TaptopayActivatePage');
        this.btnTry = document.getElementById("myBar");
    };
    TaptopayActivatePage.prototype.progress = function (num) {
        this.progressRun(num);
    };
    TaptopayActivatePage.prototype.progressRun = function (num) {
        var _this = this;
        if (num == 20) {
            this.width = 0;
        }
        this.interval = setInterval(function () {
            if (_this.width >= num) {
                clearInterval(_this.interval);
            }
            else {
                _this.width++;
                _this.btnTry.style.width = _this.width + '%';
                _this.btnTry.innerHTML = _this.width * 1 + '%';
            }
        }, 20);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myBar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], TaptopayActivatePage.prototype, "dynamic", void 0);
    TaptopayActivatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-taptopay-activate',template:/*ion-inline-start:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/taptopay-activate/taptopay-activate.html"*/'<!--\n  Generated template for the TaptopayActivatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>taptopay-activate</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">\n    <ion-slides slidesPerView="1" speed="500" style="height: 100%; width:100%; height:auto; margin:0 auto; background-color: salmon;" pager="false"\n      class="pager-bottom">\n      <ion-slide *ngFor="let item of imgSlide">\n        <div>\n          <img [src]="item.img" class="img-highlight">\n        </div>\n      </ion-slide>\n    </ion-slides>\n\n    <div class="card-info">\n      Mohon tunggu, pengajuan Anda sedang diproses. <br />\n      Harap tidak menutup atau refresh halaman ini karena <br />\n      akan mengulang proses pengajuan\n    </div>\n\n    <div align="center">\n      <ion-spinner color="primary" style="height: 3em; width: 3em;"></ion-spinner>\n    </div>\n\n    <div style="background-color:blue; width: 100%; height: 20px; border-radius: 10px">\n      <div id="myBar" style="background-color: yellow; width:20px; height: 20px; text-align: center; border-radius: 10px">0%</div>\n    </div>\n\n    <button full ion-button (click)="progress(20)">Click 20</button>\n    <button full ion-button (click)="progress(60)">Click 60</button>\n    <button full ion-button (click)="progress(100)">Click 100</button>\n\n\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/taptopay-activate/taptopay-activate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], TaptopayActivatePage);
    return TaptopayActivatePage;
}());

//# sourceMappingURL=taptopay-activate.js.map

/***/ })

});
//# sourceMappingURL=12.js.map