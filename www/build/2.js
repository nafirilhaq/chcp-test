webpackJsonp([2],{

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveValidationPageModule", function() { return LiveValidationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__live_validation__ = __webpack_require__(878);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(879);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(358);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LiveValidationPageModule = /** @class */ (function () {
    function LiveValidationPageModule() {
    }
    LiveValidationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__live_validation__["a" /* LiveValidationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__live_validation__["a" /* LiveValidationPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], LiveValidationPageModule);
    return LiveValidationPageModule;
}());

//# sourceMappingURL=live-validation.module.js.map

/***/ }),

/***/ 878:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveValidationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_custom_currency_custom_currency__ = __webpack_require__(356);
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
 * Generated class for the LiveValidationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LiveValidationPage = /** @class */ (function () {
    function LiveValidationPage(changeDetectorRef, navCtrl, navParams, customCurrencyPipe) {
        this.changeDetectorRef = changeDetectorRef;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.customCurrencyPipe = customCurrencyPipe;
        this.userData = { "username": "", "password": "", "email": "", "name": "", "nominal": "" };
        this.submitted = false;
        this.hasError = false;
        document.documentElement.style.setProperty('--border-colour', '#d8dce8');
    }
    LiveValidationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LiveValidationPage');
    };
    LiveValidationPage.prototype.ngOnInit = function () {
        var EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.signupform = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].maxLength(10)]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].maxLength(12)]),
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern('[a-zA-Z ]*'), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].maxLength(30)]),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].pattern(EMAILPATTERN)]),
            // nominal: new FormControl('', [Validators.required, Validators.min(999999), Validators.max(10000000), Validators.pattern(/\b(500000|[1-9]\d*00000)\b/)]),
            nominal: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* Validators */].required, this.ValidateNominal]),
        }, {});
    };
    LiveValidationPage.prototype.ValidateNominal = function (control) {
        if (control.value.length) {
            var newValue = control.value.replace(/[\D\s\._\-]+/g, "");
            console.log('newvalue', newValue);
            if (newValue < 1000000) {
                return { 'min': true };
            }
            if (newValue % 500000 != 0) {
                return { 'vatMatchesMultiple': true };
            }
        }
        return null;
    };
    LiveValidationPage.prototype.matchingPasswords = function (passwordKey) {
        return function (group) {
            var password = group.controls[passwordKey];
            if (password.value == 'testvalue') {
                console.log('value cocok');
                password.setErrors({ 'vatMatchesName': true });
            }
            return null;
        };
    };
    LiveValidationPage.prototype.multiples500K = function (field) {
        return function (group) {
            var number = group.controls[field];
            console.log(number.value.length);
            if (number.value.length > 0 && number.value % 500000 != 0) {
                number.setErrors({ 'vatMatchesMultiple': true });
            }
            if (number.value < 500000) {
                number.setErrors({ 'vatMatchesMin': true });
            }
            return;
        };
    };
    LiveValidationPage.prototype.signup = function () {
        console.log(this.signupform);
        console.log(this.signupform.controls);
        console.log(this.userData);
        this.submitted = true;
        this.hasError = this.signupform.controls.nominal.errors ? true : false;
        if (this.signupform.valid) {
            var adduser = {
                username: this.signupform.controls['username'].value,
                password: this.signupform.controls['password'].value,
                name: this.signupform.controls['name'].value,
                email: this.signupform.controls['email'].value,
                nominal: this.signupform.controls['nominal'].value,
            };
            console.log(adduser);
        }
        else {
            console.log('invalid');
        }
    };
    LiveValidationPage.prototype.getAllErrors = function (form) {
        var _this = this;
        var hasError = false;
        var result = Object.keys(form.controls).reduce(function (acc, key) {
            var control = form.get(key);
            var errors = (control instanceof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */] || control instanceof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormArray */])
                ? _this.getAllErrors(control)
                : control.errors;
            if (errors) {
                acc[key] = errors;
                hasError = true;
            }
            return acc;
        }, {});
        return hasError ? result : null;
    };
    LiveValidationPage.prototype.removeSubmitted = function () {
        console.log('removeSubmitted');
        console.log(this.signupform);
        this.changeDetectorRef.detectChanges();
        this.changeDetectorRef.markForCheck();
        this.hasError = this.signupform.controls.nominal.errors ? true : false;
        document.documentElement.style.setProperty('--border-colour', this.hasError ? 'red' : '#d8dce8');
        this.submitted = false;
    };
    LiveValidationPage.prototype.nominalClear = function () {
        return this.nominal.replace(/[^0-9]/g, '');
    };
    LiveValidationPage.prototype.nominalCurr = function () {
        this.nominal = this.nominal.replace(/[\D\s\._\-]+/g, "");
        this.nominal = this.nominal ? parseInt(this.nominal, 10) : 0;
        this.nominal = this.nominal.toLocaleString("id-ID");
    };
    LiveValidationPage.prototype.updateAmount = function (e) {
        console.log(e);
        this.userData.nominal = this.customCurrencyPipe.transform(this.userData.nominal, '');
    };
    LiveValidationPage.prototype.setNominal = function (e) {
        console.log(this.userData.nominal.length);
        this.userData.nominal = this.userData.nominal.replace(/[\D\s\._\-]+/g, "");
        this.userData.nominal = this.userData.nominal ? parseInt(this.userData.nominal, 10) : 0;
        this.userData.nominal = this.userData.nominal.toLocaleString("id-ID");
        // let angka: any = 500000;
        // this.nominal = angka.toLocaleString("id-ID");
        console.log('nominal', this.nominal);
        this.changeDetectorRef.detectChanges();
        this.changeDetectorRef.markForCheck();
    };
    LiveValidationPage.prototype.modelChange = function (e) {
        console.log('modelChange', e);
    };
    LiveValidationPage.prototype.back = function () {
        this.navCtrl.getPrevious().data.newGame = {
            nama: 'test',
            id: 22
        };
        this.navCtrl.pop();
    };
    LiveValidationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-live-validation',template:/*ion-inline-start:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/live-validation/live-validation.html"*/'<!--\n  Generated template for the LiveValidationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>live-validation</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <form (ngSubmit)="signup()" [formGroup]="signupform">\n      <!-- <ion-item>\n        <ion-label floating>Nominal </ion-label>\n        <ion-input type="number" [(ngModel)]="userData.nominal" formControlName="nominal" [class.error1]="!signupform.controls.nominal.valid && signupform.controls.nominal.dirty"></ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf="( signupform.get(\'nominal\').hasError(\'min\') || signupform.get(\'nominal\').hasError(\'max\') ||signupform.get(\'nominal\').hasError(\'pattern\') ||signupform.get(\'nominal\').hasError(\'required\') || signupform.get(\'nominal\').hasError(\'vatMatchesName\') )">\n        <div class="error" *ngIf="signupform.get(\'nominal\').hasError(\'required\') && signupform.get(\'nominal\').dirty">\n          Please input your nominal\n        </div>\n        <div class="error" *ngIf="(submitted && signupform.controls.nominal.errors) || (signupform.get(\'nominal\').hasError(\'min\') && signupform.get(\'nominal\').dirty)">\n          Minimal nominal pencairan Rp1.000.000\n        </div>\n        <div class="error" *ngIf="signupform.get(\'nominal\').hasError(\'max\') && signupform.get(\'nominal\').dirty">\n          Nominal pencairan melebihi batas maksimal pencairan\n        </div>\n        <div class="error" *ngIf="signupform.get(\'nominal\').hasError(\'pattern\') && signupform.get(\'nominal\').dirty && !signupform.get(\'nominal\').hasError(\'min\') && !signupform.get(\'nominal\').hasError(\'max\')">\n          Nominal harus kelipatan Rp500.000\n        </div>\n      </ion-item> -->\n\n      <div style="margin: 15px 0px;">\n        <ion-item no-padding [class.my-invalid]="submitted && signupform.get(\'nominal\').invalid"\n        [class.my-valid]="submitted && signupform.get(\'nominal\').valid">\n        <!-- <ion-item no-padding class="ketik"> -->\n          <ion-label floating no-margin disabled="true">Nominal</ion-label>\n          <ion-input type="tel" [(ngModel)]="userData.nominal" formControlName="nominal" (keyup)="setNominal($event.target.value)"></ion-input>\n        </ion-item>\n\n        <div no-lines *ngIf="( signupform.get(\'nominal\').hasError(\'min\') || signupform.get(\'nominal\').hasError(\'max\') ||signupform.get(\'nominal\').hasError(\'pattern\') ||signupform.get(\'nominal\').hasError(\'required\') || signupform.get(\'nominal\').hasError(\'vatMatchesName\') || signupform.get(\'nominal\').hasError(\'vatMatchesMultiple\') )">\n          <div class="error" *ngIf="signupform.get(\'nominal\').hasError(\'vatMatchesMultiple\') && signupform.get(\'nominal\').dirty && !signupform.get(\'nominal\').hasError(\'min\') && !signupform.get(\'nominal\').hasError(\'max\')">\n            Nominal harus kelipatan Rp500.000\n          </div>\n          <div class="error" *ngIf="(submitted && signupform.controls.nominal.errors.required || signupform.controls.nominal.errors.min) || (signupform.get(\'nominal\').hasError(\'min\') || signupform.get(\'nominal\').hasError(\'required\') && signupform.get(\'nominal\').dirty)">\n            Minimal nominal pencairan Rp1.000.000\n          </div>\n          <div class="error" *ngIf="signupform.get(\'nominal\').hasError(\'max\') && signupform.get(\'nominal\').dirty">\n            Nominal pencairan melebihi batas maksimal pencairan\n          </div>\n          <!-- <div class="error" *ngIf="signupform.get(\'nominal\').hasError(\'vatMatchesMultiple\') && signupform.get(\'nominal\').dirty && !signupform.get(\'nominal\').hasError(\'min\') && !signupform.get(\'nominal\').hasError(\'max\')"> -->\n       \n        </div>\n      </div>\n      <button type="submit" ion-button block color="primary">SIGNUP</button>\n    </form>\n\n    <button full ion-button (click)="back()">Back</button>\n\n    <!-- <form (ngSubmit)="signup()" [formGroup]="signupform">\n      <ion-item>\n        <ion-label floating>Name </ion-label>\n        <ion-input type="text" [(ngModel)]="userData.name" formControlName="name" [class.error1]="!signupform.controls.name.valid && signupform.controls.name.dirty"></ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf="( signupform.get(\'name\').hasError(\'minlength\') || signupform.get(\'name\').hasError(\'maxlength\') ||signupform.get(\'name\').hasError(\'pattern\') ||signupform.get(\'name\').hasError(\'required\') || signupform.get(\'name\').hasError(\'vatMatchesName\') )">\n        <div class="error" *ngIf="signupform.get(\'name\').hasError(\'required\') && signupform.get(\'name\').dirty">\n          Please input your name\n        </div>\n        <div class="error" *ngIf="signupform.get(\'name\').hasError(\'minlength\') && signupform.get(\'name\').dirty">\n          Minimum 4 characters\n        </div>\n        <div class="error" *ngIf="signupform.get(\'name\').hasError(\'maxlength\') && signupform.get(\'name\').dirty">\n          Maximum 30 characters\n        </div>\n        <div class="error" *ngIf="signupform.get(\'name\').hasError(\'vatMatchesName\') && signupform.get(\'name\').dirty">\n          Just use alphabet character\n        </div>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Nominal </ion-label>\n        <ion-input type="number" [(ngModel)]="userData.nominal" formControlName="nominal" [class.error1]="!signupform.controls.nominal.valid && signupform.controls.nominal.dirty"></ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf="( signupform.get(\'nominal\').hasError(\'min\') || signupform.get(\'nominal\').hasError(\'max\') ||signupform.get(\'nominal\').hasError(\'pattern\') ||signupform.get(\'nominal\').hasError(\'required\') || signupform.get(\'nominal\').hasError(\'vatMatchesName\') )">\n        <div class="error" *ngIf="signupform.get(\'nominal\').hasError(\'required\') && signupform.get(\'nominal\').dirty">\n          Please input your nominal\n        </div>\n        <div class="error" *ngIf="signupform.get(\'nominal\').hasError(\'min\') && signupform.get(\'nominal\').dirty">\n          Minimal nominal pencairan Rp1.000.000\n        </div>\n        <div class="error" *ngIf="signupform.get(\'nominal\').hasError(\'max\') && signupform.get(\'nominal\').dirty">\n          Nominal pencairan melebihi batas maksimal pencairan\n        </div>\n        <div class="error" *ngIf="signupform.get(\'nominal\').hasError(\'pattern\') && signupform.get(\'nominal\').dirty && !signupform.get(\'nominal\').hasError(\'min\') && !signupform.get(\'nominal\').hasError(\'max\')">\n          Nominal harus kelipatan Rp500.000\n        </div>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input type="text" [(ngModel)]="userData.email" formControlName="email" [class.error1]="!signupform.controls.email.valid && signupform.controls.email.dirty"></ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf="( signupform.get(\'email\').hasError(\'minlength\') || signupform.get(\'email\').hasError(\'pattern\') ||signupform.get(\'email\').hasError(\'required\') ) && signupform.get(\'email\').touched">\n        <div class="error" *ngIf="signupform.get(\'email\').hasError(\'required\') && signupform.get(\'email\').touched">\n          Please input your email\n        </div>\n        <div class="error" *ngIf="signupform.get(\'email\').hasError(\'pattern\') && signupform.get(\'email\').touched">\n          Email address invalid\n        </div>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Username</ion-label>\n        <ion-input type="text" [(ngModel)]="userData.username" formControlName="username" [class.error1]="!signupform.controls.username.valid && signupform.controls.username.dirty"></ion-input>\n      </ion-item>\n\n      <ion-item no-lines *ngIf="( signupform.get(\'username\').hasError(\'minlength\') || signupform.get(\'username\').hasError(\'maxlength\') ||signupform.get(\'username\').hasError(\'pattern\') ||signupform.get(\'username\').hasError(\'required\') ) && signupform.get(\'username\').touched">\n        <div class="error" *ngIf="signupform.get(\'username\').hasError(\'required\') && signupform.get(\'username\').touched">\n          Please input your username\n        </div>\n        <div class="error" *ngIf="signupform.get(\'username\').hasError(\'minlength\') && signupform.get(\'username\').touched">\n          Minimum 4 characters\n        </div>\n        <div class="error" *ngIf="signupform.get(\'username\').hasError(\'maxlength\') && signupform.get(\'username\').touched">\n          Maximum 10 characters\n        </div>\n        <div class="error" *ngIf="signupform.get(\'username\').hasError(\'pattern\') && signupform.get(\'username\').touched">\n          Just use alphabet character\n        </div>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input type="password" [(ngModel)]="userData.password" formControlName="password" [class.error1]="!signupform.controls.password.valid && signupform.controls.password.dirty"></ion-input>\n      </ion-item>\n\n      <ion-item no-lines *ngIf="( signupform.get(\'password\').hasError(\'minlength\') || signupform.get(\'password\').hasError(\'maxlength\') ||signupform.get(\'password\').hasError(\'required\') ) && signupform.get(\'password\').touched">\n        <div class="error" *ngIf="signupform.get(\'password\').hasError(\'required\') && signupform.get(\'password\').touched">\n          Please input your password\n        </div>\n        <div class="error" *ngIf="signupform.get(\'password\').hasError(\'minlength\') && signupform.get(\'password\').touched">\n          Minimum 6 characters\n        </div>\n        <div class="error" *ngIf="signupform.get(\'password\').hasError(\'maxlength\') && signupform.get(\'password\').touched">\n          Maximum 12 characters\n        </div>\n      </ion-item>\n\n      <ion-item>\n        <ion-label floating>Nominal</ion-label>\n        <ion-input type="number" [(ngModel)]="userData.nominal" formControlName="nominal" [class.error1]="!signupform.controls.nominal.valid && signupform.controls.nominal.dirty"></ion-input>\n      </ion-item>\n\n      <ion-item no-lines *ngIf="( signupform.get(\'nominal\').hasError(\'minlength\') || signupform.get(\'nominal\').hasError(\'maxlength\') ||signupform.get(\'nominal\').hasError(\'required\') ) && signupform.get(\'nominal\').touched">\n        <div class="error" *ngIf="signupform.get(\'nominal\').hasError(\'required\') && signupform.get(\'nominal\').touched">\n          Please input your nominal\n        </div>\n        <div class="error" *ngIf="signupform.get(\'nominal\').hasError(\'pattern\') && signupform.get(\'nominal\').touched">\n          Minimal nominal pencairan Rp1.000.000\n        </div>\n        <div class="error" *ngIf="signupform.get(\'nominal\').hasError(\'maxlength\') && signupform.get(\'nominal\').touched">\n          Maximum 12 characters\n        </div>\n      </ion-item>\n      <button type="submit" ion-button block color="primary">SIGNUP</button>\n    </form> -->\n  </ion-list>\n</ion-content>\n<style type="text/css">\n  .error {\n    color: rgb(223, 62, 62);\n    font-size: 11px;\n  }\n\n  .error1 {\n    color: rgb(75, 75, 75);\n    border-bottom: 1px solid #ff0000;\n  }\n  </style>\n'/*ion-inline-end:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/live-validation/live-validation.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__pipes_custom_currency_custom_currency__["a" /* CustomCurrencyPipe */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__pipes_custom_currency_custom_currency__["a" /* CustomCurrencyPipe */]])
    ], LiveValidationPage);
    return LiveValidationPage;
}());

//# sourceMappingURL=live-validation.js.map

/***/ }),

/***/ 879:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__new_textbox_input_validation_new_textbox_input_validation__ = __webpack_require__(880);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__new_textbox_input_new_textbox_input__ = __webpack_require__(881);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_module__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_0__new_textbox_input_validation_new_textbox_input_validation__["a" /* NewTextboxInputValidationComponent */],
                __WEBPACK_IMPORTED_MODULE_0__new_textbox_input_validation_new_textbox_input_validation__["a" /* NewTextboxInputValidationComponent */],
                __WEBPACK_IMPORTED_MODULE_1__new_textbox_input_new_textbox_input__["a" /* NewTextboxInputComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular_module__["a" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_0__new_textbox_input_validation_new_textbox_input_validation__["a" /* NewTextboxInputValidationComponent */],
                __WEBPACK_IMPORTED_MODULE_0__new_textbox_input_validation_new_textbox_input_validation__["a" /* NewTextboxInputValidationComponent */],
                __WEBPACK_IMPORTED_MODULE_1__new_textbox_input_new_textbox_input__["a" /* NewTextboxInputComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_2__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 880:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewTextboxInputValidationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewTextboxInputValidationComponent = /** @class */ (function () {
    function NewTextboxInputValidationComponent() {
        this.disabled = false;
        this.valueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.formControlName = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onKeyup = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onBlur = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onFocus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    NewTextboxInputValidationComponent.prototype.keyup = function (event) {
        this.onKeyup.emit(event);
    };
    NewTextboxInputValidationComponent.prototype.change = function (event) {
        this.onChange.emit(event);
    };
    NewTextboxInputValidationComponent.prototype.modelChange = function (event) {
        this.value = event;
        this.valueChange.emit(this.value);
    };
    NewTextboxInputValidationComponent.prototype.blur = function (ev) {
        this.onBlur.emit(ev);
    };
    NewTextboxInputValidationComponent.prototype.focus = function (ev) {
        this.onFocus.emit(ev);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NewTextboxInputValidationComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NewTextboxInputValidationComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NewTextboxInputValidationComponent.prototype, "maxlength", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NewTextboxInputValidationComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NewTextboxInputValidationComponent.prototype, "currency", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NewTextboxInputValidationComponent.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NewTextboxInputValidationComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], NewTextboxInputValidationComponent.prototype, "valueChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], NewTextboxInputValidationComponent.prototype, "formControlName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], NewTextboxInputValidationComponent.prototype, "onKeyup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], NewTextboxInputValidationComponent.prototype, "onChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], NewTextboxInputValidationComponent.prototype, "onBlur", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], NewTextboxInputValidationComponent.prototype, "onFocus", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NewTextboxInputValidationComponent.prototype, "warnText", void 0);
    NewTextboxInputValidationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "new-textbox-input-validation",
            // template: `
            //   <div class="newTextBox">
            //     <ion-item no-lines no-padding>
            //       <ion-label stacked>{{label}}</ion-label>
            //       <ion-input
            //         [ngModel]="value"
            //         (ngModelChange)="modelChange($event)"
            //         type="{{type}}"
            //         placeholder="{{placeholder}}"
            //         maxlength="{{maxlength}}"
            //         (keyup)="keyup($event)"
            //         (change)="change($event)"
            //       ></ion-input>
            //     </ion-item>
            //   </div>
            // `,
            template: "\n    <div class=\"newTextBoxFloating\">\n      <ion-item no-lines no-padding>\n        <ion-label floating>{{label}}</ion-label>\n        <div item-start margin-left *ngIf=\"currency\">{{currency}}</div>\n        <ion-input\n          [ngModel]=\"value\"\n          (ngModelChange)=\"modelChange($event)\"\n          type=\"{{type}}\"\n          [formControlName]=\"formControlName\"    \n          maxlength=\"{{maxlength}}\"\n          (keyup)=\"keyup($event)\"\n          (change)=\"change($event)\"\n          (blur)=\"blur($event)\"\n          (focus)=\"focus($event)\"\n          [disabled]=\"disabled\"\n        ></ion-input>\n      </ion-item>\n      <small style=\"display: block;margin-top:5px\" *ngIf=\"warnText\">{{warnText}}</small>\n    </div>\n  ",
        }),
        __metadata("design:paramtypes", [])
    ], NewTextboxInputValidationComponent);
    return NewTextboxInputValidationComponent;
}());

//# sourceMappingURL=new-textbox-input-validation.js.map

/***/ }),

/***/ 881:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewTextboxInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewTextboxInputComponent = /** @class */ (function () {
    function NewTextboxInputComponent() {
        this.disabled = false;
        this.valueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onKeyup = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onBlur = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onFocus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    NewTextboxInputComponent.prototype.keyup = function (event) {
        this.onKeyup.emit(event);
    };
    NewTextboxInputComponent.prototype.change = function (event) {
        this.onChange.emit(event);
    };
    NewTextboxInputComponent.prototype.modelChange = function (event) {
        this.value = event;
        this.valueChange.emit(this.value);
    };
    NewTextboxInputComponent.prototype.blur = function (ev) {
        this.onBlur.emit(ev);
    };
    NewTextboxInputComponent.prototype.focus = function (ev) {
        this.onFocus.emit(ev);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NewTextboxInputComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NewTextboxInputComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NewTextboxInputComponent.prototype, "maxlength", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NewTextboxInputComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NewTextboxInputComponent.prototype, "currency", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], NewTextboxInputComponent.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], NewTextboxInputComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], NewTextboxInputComponent.prototype, "valueChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], NewTextboxInputComponent.prototype, "onKeyup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], NewTextboxInputComponent.prototype, "onChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], NewTextboxInputComponent.prototype, "onBlur", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], NewTextboxInputComponent.prototype, "onFocus", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], NewTextboxInputComponent.prototype, "warnText", void 0);
    NewTextboxInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "new-textbox-input",
            // template: `
            //   <div class="newTextBox">
            //     <ion-item no-lines no-padding>
            //       <ion-label stacked>{{label}}</ion-label>
            //       <ion-input
            //         [ngModel]="value"
            //         (ngModelChange)="modelChange($event)"
            //         type="{{type}}"
            //         placeholder="{{placeholder}}"
            //         maxlength="{{maxlength}}"
            //         (keyup)="keyup($event)"
            //         (change)="change($event)"
            //       ></ion-input>
            //     </ion-item>
            //   </div>
            // `,
            template: "\n    <div class=\"newTextBoxFloating\">\n      <ion-item no-lines no-padding [ngStyle]=\"{'background-color': disabled ? '#D8DCE8' : '#fff'}\">\n        <ion-label floating>{{label}}</ion-label>\n        <ion-input\n          [ngModel]=\"value\"\n          (ngModelChange)=\"modelChange($event)\"\n          type=\"{{type}}\"          \n          maxlength=\"{{maxlength}}\"\n          (keyup)=\"keyup($event)\"\n          (change)=\"change($event)\"\n          (blur)=\"blur($event)\"\n          (focus)=\"focus($event)\"\n          [disabled]=\"disabled\"\n        ></ion-input>\n      </ion-item>\n      <small style=\"display: block;margin-top:5px\" *ngIf=\"warnText\">{{warnText}}</small>\n    </div>\n  ",
        }),
        __metadata("design:paramtypes", [])
    ], NewTextboxInputComponent);
    return NewTextboxInputComponent;
}());

//# sourceMappingURL=new-textbox-input.js.map

/***/ })

});
//# sourceMappingURL=2.js.map