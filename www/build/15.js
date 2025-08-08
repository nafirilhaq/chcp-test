webpackJsonp([15],{

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidePageModule", function() { return SlidePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slide__ = __webpack_require__(891);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SlidePageModule = /** @class */ (function () {
    function SlidePageModule() {
    }
    SlidePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__slide__["a" /* SlidePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__slide__["a" /* SlidePage */]),
            ],
        })
    ], SlidePageModule);
    return SlidePageModule;
}());

//# sourceMappingURL=slide.module.js.map

/***/ }),

/***/ 891:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidePage; });
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
 * Generated class for the SlidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SlidePage = /** @class */ (function () {
    function SlidePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imgSlide = [
            {
                img: "assets/imgs/logo.png"
            },
            {
                img: "assets/imgs/logo.png"
            },
            {
                img: "assets/imgs/logo.png"
            }
        ];
    }
    SlidePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad SlidePage');
        this.slides.lockSwipes(true);
        setTimeout(function () {
            _this.slides.lockSwipes(false);
            _this.slides.slideTo(1, 500);
            _this.slides.lockSwipes(true);
        }, 3000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], SlidePage.prototype, "slides", void 0);
    SlidePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-slide',template:/*ion-inline-start:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/slide/slide.html"*/'<!--\n  Generated template for the SlidePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>slide</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">\n    <ion-slides slidesPerView="1" speed="500"\n      style="height: 100%; width:100%; height:auto; margin:auto;"\n      pager="false" class="pager-bottom">\n      <ion-slide align="center" *ngFor="let item of imgSlide">\n        <div align="center">\n          <div style="width: 204px; height: 204px;">\n            <img [src]="item.img" class="img-highlight">\n          </div>\n        </div>\n      </ion-slide>\n      \n      <ion-slide align="center">\n        <div align="center" class="card-border" (click)="addCard()">\n          <div class="btn-activated">\n            Tambah kartu kredit digital\n          </div>\n        </div>\n      </ion-slide>\n    </ion-slides>\n    <!-- <div align="center">\n      <img src="assets/imgs/taptopay/ttp_logo.png" style="max-width: 220px; border: 0; margin-top: 4em;">\n    </div> -->\n\n    <div class="card-info">\n      Mohon tunggu, pengajuan Anda sedang diproses. <br />\n      Harap tidak menutup atau refresh halaman ini karena <br />\n      akan mengulang proses pengajuan\n    </div>\n\n    <div align="center">\n      <ion-spinner color="primary" style="height: 3em; width: 3em;"></ion-spinner>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/slide/slide.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SlidePage);
    return SlidePage;
}());

//# sourceMappingURL=slide.js.map

/***/ })

});
//# sourceMappingURL=15.js.map