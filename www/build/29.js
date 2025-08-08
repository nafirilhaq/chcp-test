webpackJsonp([29],{

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfiniteScrollPageModule", function() { return InfiniteScrollPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__infinite_scroll__ = __webpack_require__(872);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InfiniteScrollPageModule = /** @class */ (function () {
    function InfiniteScrollPageModule() {
    }
    InfiniteScrollPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__infinite_scroll__["a" /* InfiniteScrollPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__infinite_scroll__["a" /* InfiniteScrollPage */]),
            ],
        })
    ], InfiniteScrollPageModule);
    return InfiniteScrollPageModule;
}());

//# sourceMappingURL=infinite-scroll.module.js.map

/***/ }),

/***/ 872:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfiniteScrollPage; });
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
 * Generated class for the InfiniteScrollPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfiniteScrollPage = /** @class */ (function () {
    function InfiniteScrollPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.itemsToDisplay = [];
    }
    InfiniteScrollPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InfiniteScrollPage');
        this.itemsToDisplay = Array(450).fill(0).map(function (e, i) { return i; });
        //  for(let i=0; i< 50; i++) {
        //   this.itemsToDisplay.push(this.data[i]);
        //  }
    };
    InfiniteScrollPage.prototype.doInfinite = function (e) {
        var _this = this;
        console.log(e);
        var len = this.itemsToDisplay.length;
        setTimeout(function () {
            console.log('Done');
            //loading some data from server
            e.state = "closed";
            if (_this.itemsToDisplay.length > 100) {
                e.target.disabled = true;
            }
        }, 500);
    };
    InfiniteScrollPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-infinite-scroll',template:/*ion-inline-start:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/infinite-scroll/infinite-scroll.html"*/'<!--\n  Generated template for the InfiniteScrollPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>infinite-scroll</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let i of itemsToDisplay">{{i}}</ion-item>\n  </ion-list>\n\n  <ion-infinite-scroll threshold="100px" (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content \n    loadingSpinner="bubbles"\n    loadingText="Loading more data..."></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/infinite-scroll/infinite-scroll.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], InfiniteScrollPage);
    return InfiniteScrollPage;
}());

//# sourceMappingURL=infinite-scroll.js.map

/***/ })

});
//# sourceMappingURL=29.js.map