webpackJsonp([31],{

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebounceSearchPageModule", function() { return DebounceSearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__debounce_search__ = __webpack_require__(868);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DebounceSearchPageModule = /** @class */ (function () {
    function DebounceSearchPageModule() {
    }
    DebounceSearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__debounce_search__["a" /* DebounceSearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__debounce_search__["a" /* DebounceSearchPage */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* ReactiveFormsModule */]
            ],
        })
    ], DebounceSearchPageModule);
    return DebounceSearchPageModule;
}());

//# sourceMappingURL=debounce-search.module.js.map

/***/ }),

/***/ 868:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DebounceSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
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
 * Generated class for the DebounceSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DebounceSearchPage = /** @class */ (function () {
    function DebounceSearchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items2 = [
            { title: "one" },
            { title: "two" },
            { title: "three" },
            { title: "four" },
            { title: "five" },
            { title: "six" }
        ];
        this.searchTerm = '';
        this.searching = false;
        this.searchControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
    }
    DebounceSearchPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.setFilteredItems("");
        this.searchControl.valueChanges.debounceTime(700).subscribe(function (search) {
            console.log(search);
            _this.searching = false;
            _this.setFilteredItems(search);
        });
    };
    DebounceSearchPage.prototype.onSearchInput = function () {
        this.searching = true;
    };
    DebounceSearchPage.prototype.setFilteredItems = function (search) {
        this.items = this.filterItems(search);
    };
    DebounceSearchPage.prototype.filterItems = function (searchTerm) {
        console.log(this.items);
        return this.items2.filter(function (item) {
            return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    DebounceSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-debounce-search',template:/*ion-inline-start:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/debounce-search/debounce-search.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title> Ionic Blank </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-searchbar\n    [formControl]="searchControl"\n    (ionChange)="onSearchInput()"\n  ></ion-searchbar>\n\n  <div *ngIf="searching" class="spinner-container">\n    <ion-spinner></ion-spinner>\n  </div>\n\n  <ion-list>\n    <ion-item *ngFor="let item of items"> {{ item.title }} </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/debounce-search/debounce-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */]])
    ], DebounceSearchPage);
    return DebounceSearchPage;
}());

//# sourceMappingURL=debounce-search.js.map

/***/ })

});
//# sourceMappingURL=31.js.map