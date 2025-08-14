webpackJsonp([49],{

/***/ 163:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/akun-saya/akun-saya.module": [
		695,
		48
	],
	"../pages/animation/animation.module": [
		696,
		47
	],
	"../pages/apply-cashline-finish-bundle/apply-cashline-finish-bundle.module": [
		698,
		46
	],
	"../pages/apply-cashline-finish/apply-cashline-finish.module": [
		697,
		45
	],
	"../pages/apply-cashline-mob/apply-cashline-mob.module": [
		699,
		44
	],
	"../pages/apply-cashline-tenor/apply-cashline-tenor.module": [
		700,
		3
	],
	"../pages/apply-cashline-waiting/apply-cashline-waiting.module": [
		702,
		43
	],
	"../pages/cashline-history/cashline-history.module": [
		701,
		42
	],
	"../pages/cashline-inquiry/cashline-inquiry.module": [
		703,
		41
	],
	"../pages/cashline-snk/cashline-snk.module": [
		704,
		40
	],
	"../pages/change-sof-detail/change-sof-detail.module": [
		705,
		39
	],
	"../pages/credit-shield-apply/credit-shield-apply.module": [
		706,
		38
	],
	"../pages/credit-shield-bottom-modal/credit-shield-bottom-modal.module": [
		707,
		37
	],
	"../pages/credit-shield-failed/credit-shield-failed.module": [
		708,
		36
	],
	"../pages/credit-shield-guide/credit-shield-guide.module": [
		709,
		35
	],
	"../pages/credit-shield-snk/credit-shield-snk.module": [
		710,
		34
	],
	"../pages/credit-shield/credit-shield.module": [
		711,
		33
	],
	"../pages/custom-bottom-modal/custom-bottom-modal.module": [
		713,
		32
	],
	"../pages/cvv/cvv.module": [
		712,
		5
	],
	"../pages/debounce-search/debounce-search.module": [
		715,
		31
	],
	"../pages/emoji/emoji.module": [
		714,
		4
	],
	"../pages/home-new/home-new.module": [
		717,
		30
	],
	"../pages/infinite-scroll/infinite-scroll.module": [
		716,
		29
	],
	"../pages/lifestyle-check-status/lifestyle-check-status.module": [
		718,
		28
	],
	"../pages/lifestyle-check/lifestyle-check.module": [
		719,
		27
	],
	"../pages/lifestyle-inquiry/lifestyle-inquiry.module": [
		720,
		26
	],
	"../pages/live-validation/live-validation.module": [
		724,
		2
	],
	"../pages/modal-bottom/modal-bottom.module": [
		721,
		25
	],
	"../pages/mstore-snk/mstore-snk.module": [
		722,
		24
	],
	"../pages/new-taptopay/new-taptopay.module": [
		723,
		23
	],
	"../pages/page1/page1.module": [
		725,
		22
	],
	"../pages/page2/page2.module": [
		726,
		21
	],
	"../pages/page3/page3.module": [
		727,
		20
	],
	"../pages/page4/page4.module": [
		728,
		19
	],
	"../pages/page5/page5.module": [
		734,
		18
	],
	"../pages/pdf-viewer/pdf-viewer.module": [
		729,
		1
	],
	"../pages/remittance/remittance.module": [
		730,
		17
	],
	"../pages/sample-lottie/sample-lottie.module": [
		731,
		16
	],
	"../pages/slide/slide.module": [
		732,
		15
	],
	"../pages/sof/sof.module": [
		733,
		14
	],
	"../pages/supplement-reg/supplement-reg.module": [
		735,
		13
	],
	"../pages/taptopay-activate/taptopay-activate.module": [
		736,
		12
	],
	"../pages/taptopay-check/taptopay-check.module": [
		737,
		11
	],
	"../pages/taptopay/taptopay.module": [
		738,
		10
	],
	"../pages/toast-modal/toast-modal.module": [
		739,
		9
	],
	"../pages/ttp-finish/ttp-finish.module": [
		741,
		8
	],
	"../pages/ttp-tutorial/ttp-tutorial.module": [
		743,
		7
	],
	"../pages/valas/valas.module": [
		740,
		6
	],
	"../pages/zoom/zoom.module": [
		742,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 208;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_nfc__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_local_notifications__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_eruda__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_eruda___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_eruda__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navParams, renderer, navCtrl, localNotifications, modalCtrl, nfc, modal, datePicker, loadingCtrl) {
        // this.nfc.addTagDiscoveredListener((nfcEvent) => {
        //   console.log("success" + JSON.stringify(nfcEvent.tag, null, 4));
        // }, (fail) => {
        //   console.log("failed for NDEF Tags." + fail);
        // });
        //     this.nfc.addTagDiscoveredListener((res) => {
        //   console.log('successfully attached discovered listener', res);
        // }, (err) => {
        //   console.log('error attaching discovered listener', err);
        // }).subscribe((event) => {
        //   console.log('nfc discovered event', event);
        // });
        this.navParams = navParams;
        this.renderer = renderer;
        this.navCtrl = navCtrl;
        this.localNotifications = localNotifications;
        this.modalCtrl = modalCtrl;
        this.nfc = nfc;
        this.modal = modal;
        this.datePicker = datePicker;
        this.loadingCtrl = loadingCtrl;
        this.showCustKeyboard = false;
        this.nominal = "0";
        this.modalCardNumber = false;
        this.noCard = "4512********0968";
        this.showModal = false;
    }
    HomePage.prototype.showKeyboard = function (element) {
        // Keyboard.hide();
        // let yOffset = document.getElementById(element).offsetTop;
        // console.log(yOffset)
        // this.content.scrollTo(0, 200, 1000)
        this.showCustKeyboard = !this.showCustKeyboard;
    };
    HomePage.prototype.hideKeyboard = function () {
        this.showCustKeyboard = false;
    };
    HomePage.prototype.input = function (num) {
        if (num == '000' && this.nominal.substring(0, 1) == '0') {
            return;
        }
        if (this.nominal.substring(0, 1) == '0') {
            this.nominal = '';
        }
        this.nominal += num;
    };
    HomePage.prototype.del = function () {
        if (this.nominal.length == 1) {
            this.nominal = '0';
        }
        else if (this.nominal.length > 0 && this.nominal.substring(0, 1) != '0') {
            this.nominal = this.nominal.substring(0, this.nominal.length - 1);
        }
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad');
        // this.initVisa();
    };
    HomePage.prototype.ionViewWillEnter = function () {
        console.log('ionViewWillEnter HomePage', this.navParams.get('newGame'));
    };
    HomePage.prototype.modalHandler = function () {
        this.showModal = !this.showModal;
    };
    HomePage.prototype.customModalBottom = function () {
        var modal = this.modalCtrl.create("CustomBottomModalPage", {}, { cssClass: 'adaptable-modal bottom-drawer' });
        modal.present();
    };
    HomePage.prototype.visaBranding = function () {
        setTimeout(function () {
            window.VisaSensoryBranding.show();
        }, 3000);
    };
    HomePage.prototype.initVisa = function () {
        setTimeout(function () {
            window.VisaSensoryBranding.init({
                constrained: true,
                checkmark: 'checkmarkWithText',
                checkmarkTextOption: 'approve',
                color: "ffffff",
                language: "en",
                sound: false
            }, 'assets/VisaSensoryBrandingSDK');
        }, 300);
    };
    HomePage.prototype.toCvv = function () {
        this.navCtrl.push("CvvPage", {}, {
            animate: true,
            animation: "ios-transition",
            direction: "forward",
            duration: 500
        });
        __WEBPACK_IMPORTED_MODULE_5_eruda___default.a.init();
    };
    HomePage.prototype.toSlide = function () {
        this.navCtrl.push("SlidePage");
    };
    HomePage.prototype.infiniteScroll = function () {
        this.navCtrl.push("InfiniteScrollPage");
    };
    HomePage.prototype.toSof = function () {
        this.navCtrl.push("SofPage");
    };
    HomePage.prototype.cashlineTenor = function () {
        this.navCtrl.push("ApplyCashlineTenorPage");
    };
    HomePage.prototype.cashlineMob = function () {
        this.navCtrl.push("ApplyCashlineMobPage");
    };
    HomePage.prototype.cashlineFinish = function () {
        this.navCtrl.push("ApplyCashlineFinishBundlePage");
    };
    HomePage.prototype.cashlineWaiting = function () {
        this.navCtrl.push("ApplyCashlineWaitingPage");
    };
    HomePage.prototype.openNfc = function () {
        this.nfc.showSettings();
        // this.nfc.enabled().then(res => {
        //   console.log('res', res);
        // }).catch(err => {
        //   console.log('err', err);
        // })
    };
    HomePage.prototype.ttpFinish = function () {
        this.navCtrl.push("TtpFinishPage");
    };
    HomePage.prototype.toFormVal = function () {
        this.navCtrl.push("LiveValidationPage");
    };
    HomePage.prototype.zoomArea = function () {
        this.navCtrl.push("ZoomPage");
    };
    HomePage.prototype.akunSaya = function () {
        this.navCtrl.push("AkunSayaPage");
    };
    HomePage.prototype.detailAkun = function () {
        this.navCtrl.push("ChangeSofDetailPage");
    };
    HomePage.prototype.supplementReg = function () {
        this.navCtrl.push("SupplementRegPage");
    };
    HomePage.prototype.creditShield = function () {
        // this.navCtrl.push("CreditShieldPage");
        this.navCtrl.push("CreditShieldPage", { isDetailPage: true });
    };
    HomePage.prototype.cashline = function () {
        this.navCtrl.push("CashlineInquiryPage");
    };
    HomePage.prototype.inqCekStatus = function () {
        this.navCtrl.push("LifestyleCheckStatusPage");
    };
    HomePage.prototype.cashlineSnk = function () {
        this.navCtrl.push("CashlineSnkPage");
    };
    HomePage.prototype.remittance = function () {
        this.navCtrl.push("RemittancePage");
    };
    HomePage.prototype.debounceSearch = function () {
        this.navCtrl.push("DebounceSearchPage");
    };
    HomePage.prototype.lottie = function () {
        this.navCtrl.push("SampleLottiePage");
    };
    HomePage.prototype.toValas = function () {
        this.navCtrl.push("ValasPage");
    };
    HomePage.prototype.homeNew = function () {
        this.navCtrl.push("HomeNewPage");
    };
    HomePage.prototype.creditShieldFailed = function () {
        this.navCtrl.push("CreditShieldFailedPage", { status: "notEligible" });
    };
    HomePage.prototype.toNavCtrl = function () {
        this.navCtrl.push("Page1Page");
    };
    HomePage.prototype.toAnimation = function () {
        this.navCtrl.push("AnimationPage");
    };
    HomePage.prototype.toEmoji = function () {
        this.navCtrl.push("EmojiPage");
    };
    HomePage.prototype.toTtp = function () {
        navigator.vibrate(500);
        this.navCtrl.push("TaptopayPage");
    };
    HomePage.prototype.toTtpNew = function () {
        this.navCtrl.push("NewTaptopayPage");
    };
    HomePage.prototype.toMstore = function () {
        this.navCtrl.push("LifestyleCheckPage");
    };
    HomePage.prototype.toMstoreInquiry = function () {
        this.navCtrl.push("LifestyleInquiryPage");
    };
    HomePage.prototype.toTtpActivate = function () {
        this.navCtrl.push("TaptopayActivatePage");
    };
    HomePage.prototype.ripple = function () {
        var _this = this;
        this.renderer.addClass(this.btn.nativeElement, 'bounce');
        setTimeout(function () {
            _this.renderer.removeClass(_this.btn.nativeElement, 'bounce');
        }, 200);
    };
    HomePage.prototype.showToast = function () {
        var option = {
            icon: 'assets/icon/ttp.svg',
            message: "Tap to Pay sudah aktif. Anda sudah dapat transaksi menggunakan Tap to Pay",
            cssClass: 'notifToast',
        };
        this.modalCtrl.create("ToastModalPage", { option: option }, { cssClass: 'fcmModal' }).present();
    };
    HomePage.prototype.modalBottom = function () {
        document.documentElement.style.setProperty('--modal-visa', '30%');
        var modal = this.modalCtrl.create("ModalBottomPage", { noCard: this.noCard }, { cssClass: "modal-visa" });
        modal.present();
        modal.onDidDismiss(function (data) {
            console.log('modal dismiss', data);
        });
    };
    HomePage.prototype.date = function () {
        var skg = new Date();
        skg.setDate(skg.getDate() + 4);
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            allowOldDates: false,
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then(function (date) { return console.log('Got date: ', date); }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
    HomePage.prototype.firebasex = function () {
        window.FirebasePlugin.grantPermission(function (hasPermission) {
            console.log("Notifications permission was " + (hasPermission ? "granted" : "denied"));
        });
    };
    HomePage.prototype.checkNotif = function () {
        var permissions = cordova.plugins.permissions;
        permissions.checkPermission(permissions.POST_NOTIFICATIONS, function (status) {
            if (status.hasPermission) {
                console.log("Yes :D ");
            }
            else {
                console.warn("No :( ");
                permissions.requestPermission(permissions.POST_NOTIFICATIONS, function (status) {
                    if (!status.hasPermission) {
                        console.log("req Yes :D ");
                    }
                    else {
                        console.log("req NO :D ");
                    }
                });
            }
        });
        // this.localNotifications.hasPermission().then(res => {
        //   console.log('res',res);
        // })
        // cordova.plugins.notification.local.requestPermission(function (granted) { 
        //   console.log('granted', granted)
        //  });
        // let permission = "android.permission.POST_NOTIFICATIONS";
        // Permission.has(permission, (res) => {
        //   console.log('permiss', res)
        //   if (!res[permission]) {
        //     console.log('permiss not')
        //     Permission.request(permission, function(results) {
        //       console.log('permiss req')
        //       if (results[permission]) {
        //           // permission is granted
        //       }
        //   }, alert)
        //   } else {
        //     console.log('permiss yes')
        //   }
        // }, alert)
    };
    HomePage.prototype.toPdf = function () {
        this.navCtrl.push("PdfViewerPage");
    };
    HomePage.prototype.loading = function () {
        var loading = this.loadingCtrl.create({
            content: '<div class="custom-loader-container"><div class="custom-loader-bar"></div></div>',
            spinner: 'dots',
            cssClass: 'msmile-loading'
            // dismissOnPageChange: true
        });
        loading.present();
    };
    HomePage.prototype.scrollTo = function (element) {
        var yOffset = document.getElementById(element).offsetTop;
        console.log(yOffset);
        this.content.scrollTo(0, yOffset, 2000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], HomePage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('btn'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], HomePage.prototype, "btn", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n\nNAFIRIL HAQ ANNIBRAS TES AGAIN AFTER CHANGE\n  <!-- <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v3">docs</a> will be your guide.\n  </p> -->\n\n  <img src="assets/imgs/gen-z/eye-on.png" style="width: 13px; height: 11px; margin-left: 10px;" />\n  <img src="assets/imgs/gen-z/eye-on.png" style="width: 13px; height: 11px; margin-left: 10px;" />\n  <img src="assets/imgs/gen-z/eye-on.png" style="width: 13px; height: 11px; margin-left: 10px;" />\n\n  <button full ion-button (click)="toCvv()">CVV BERUBAH</button>\n  <button full ion-button (click)="toSlide()">Slide</button>\n  <button full ion-button (click)="toSof()">Sof</button>\n  <button full ion-button (click)="openNfc()">Open NFC Setting</button>\n  <button full ion-button (click)="ttpFinish()">TTP Finish</button>\n  <button id="visa" full ion-button (click)="visaBranding()">Visa Branding</button>\n  <button full ion-button (click)="date()">Date Picker</button>\n  <button full ion-button (click)="cashlineTenor()">Cashline Tenor</button>\n  <button full ion-button (click)="cashlineMob()">Cashline MOB</button>\n  <button full ion-button (click)="cashlineFinish()">Cashline Finish</button>\n  <button full ion-button (click)="cashlineWaiting()">Cashline Waiting</button>\n  <button full ion-button (click)="supplementReg()">Supplement Reg</button>\n  <button full ion-button (click)="lottie()">Lottie</button>\n\n  <button full ion-button (click)="zoomArea()">Zoom Area</button>\n  <button full ion-button (click)="creditShield()">Credit Shield</button>\n  <button full ion-button (click)="cashline()">Cashline</button>\n  <button full ion-button (click)="cashlineSnk()">Cashline SNK</button>\n  <button full ion-button (click)="creditShieldFailed()">Credit Shield Failed</button>\n  <button full ion-button (click)="infiniteScroll()">Infinite Scroll</button>\n  <button full ion-button (click)="toValas()">Valas</button>\n  <button full ion-button (click)="inqCekStatus()">Inq Cek Status</button>\n  <button full ion-button (click)="akunSaya()">Akun Saya</button>\n  <button full ion-button (click)="detailAkun()">Detail Akun</button>\n\n  <ion-item id="nominal" no-padding class="floating" style="margin-top: 16px; padding: 4px 16px 4px 16px;" [ngStyle]="{\'background-color\': cardNumberDisable ? \'#F1F3F9\' : \'#fff\'}">\n    <ion-label floating no-margin class="title-label">Nominal</ion-label>\n    <!-- <ion-input hideKeyboard type="tel" [(ngModel)]="nominal" style="margin-top: -6px; font-weight: 500;" maxlength="19"></ion-input> -->\n    <ion-input hideKeyboard type="tel" [(ngModel)]="nominal" style="margin-top: -6px; font-weight: 500;" maxlength="19" (tap)="showKeyboard(\'visa\')"></ion-input>\n    <!-- <ion-input type="tel" [(ngModel)]="nominal" style="margin-top: -6px; font-weight: 500;" maxlength="19"></ion-input> -->\n  </ion-item>\n  <button full ion-button (click)="modalBottom()">Modal Bottom</button>\n  <button full ion-button (click)="showToast()">Toast</button>\n  <button full ion-button (click)="scrollTo(\'visa\')">Nav Ctrl</button>\n  <button full ion-button (click)="toNavCtrl()">Nav Ctrl</button>\n  <button full ion-button (click)="debounceSearch()">Debounce Search</button>\n  <button full ion-button (click)="remittance()">Remittance</button>\n  <button full ion-button (click)="homeNew()">Home New</button>\n\n  <button full ion-button (click)="firebasex()">Check Notif</button>\n  <button full ion-button (click)="toPdf()">PDF</button>\n  <button full ion-button (click)="toAnimation()">Animation</button>\n  <button full ion-button (click)="toTtp()">Taptopay</button>\n  <button full ion-button (click)="toEmoji()">Emoji</button>\n  <button full ion-button (click)="toTtpNew()">Taptopay New</button>\n  <button full ion-button (click)="toMstore()">MStore</button>\n  <button full ion-button (click)="toMstoreInquiry()">MStore Inquiry</button>\n  <button full ion-button (click)="toTtpActivate()">Taptopay Activate</button>\n  <button full ion-button (click)="toFormVal()">Live Form Validation</button>\n  <button full ion-button (click)="loading()">Loading</button>\n  <button #btn full ion-button (click)="ripple()">Ripple</button>\n  <!-- <button full ion-button style="margin-top: 50vh;" (click)="scrollTo(\'visa\')">Scroll</button> -->\n\n  <div [ngStyle]="{\'margin-bottom\': showCustKeyboard ? \'100vh\' : \'0\'}"></div>\n  <div>\n    <div id="visa-sensory-branding"></div>\n  </div>\n\n\n</ion-content>\n\n<ion-footer *ngIf="showCustKeyboard">\n  <div class="custKeyboard">\n    <div class="backdrop"></div>\n    <div class="number-container">\n      <div class="number-box" (click)="input(\'1\')">1</div>\n      <div class="number-box" (click)="input(\'2\')">2</div>\n      <div class="number-box" (click)="input(\'3\')">3</div>\n      <div class="number-box" (click)="input(\'4\')">4</div>\n      <div class="number-box" (click)="input(\'5\')">5</div>\n      <div class="number-box" (click)="input(\'6\')">6</div>\n      <div class="number-box" (click)="input(\'7\')">7</div>\n      <div class="number-box" (click)="input(\'8\')">8</div>\n      <div class="number-box" (click)="input(\'9\')">9</div>\n      <div class="number-box" (click)="input(\'0\')">0</div>\n      <div class="number-box" (click)="input(\'000\')">000</div>\n      <div class="number-box" (click)="del()">Del</div>\n      <button full ion-button style="margin-top: 18px;" (click)="hideKeyboard()">OK</button>\n    </div>\n  </div>\n</ion-footer>\n\n<div id="backdrop-modal" *ngIf="showModal">\n  <div class="foreground-modal">      \n      <ion-card class="card-modal">\n          <ion-card-header text-center>              \n              <img *ngIf="!ionIcon" class="icon" [src]="icon">\n              <h2 *ngIf="title"><b>{{ title }}</b></h2>\n            </ion-card-header>\n            \n            <ion-card-content text-center>\n            <button ion-button class="btn-lanjut-only" margin-top (click)="modalHandler()">OK</button> \n          \n          <ng-content></ng-content>   \n          \n          </ion-card-content>          \n      </ion-card>\n  </div>\n</div>\n\n\n'/*ion-inline-end:"/Users/nafirilhaq/Documents/Project/devSample/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_local_notifications__["a" /* LocalNotifications */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_nfc__["a" /* NFC */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__["a" /* DatePicker */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomCurrencyPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CustomCurrencyPipe = /** @class */ (function () {
    function CustomCurrencyPipe() {
    }
    CustomCurrencyPipe.prototype.transform = function (amount, symbol, decimalSeparator, thousandsSeparator, nDecimalDigits) {
        if (decimalSeparator === void 0) { decimalSeparator = ","; }
        if (thousandsSeparator === void 0) { thousandsSeparator = "."; }
        if (nDecimalDigits === void 0) { nDecimalDigits = 0; }
        decimalSeparator = typeof decimalSeparator !== 'undefined' ? decimalSeparator : ',';
        thousandsSeparator = typeof thousandsSeparator !== 'undefined' ? thousandsSeparator : '.';
        nDecimalDigits = typeof nDecimalDigits !== 'undefined' ? nDecimalDigits : 0;
        amount = typeof amount !== 'undefined' || amount !== 'null' ? amount : 0;
        var num = amount;
        if (typeof num == 'string') {
            num = parseFloat(num);
        }
        if (isNaN(num)) {
            return "";
        }
        var fixed = num.toFixed(nDecimalDigits);
        var parts = new RegExp('^(-?\\d{1,3})((?:\\d{3})+)(\\.(\\d{' + nDecimalDigits + '}))?$').exec(fixed);
        var result;
        var finalResult;
        if (parts) {
            result = parts[1] + parts[2].replace(/\d{3}/g, thousandsSeparator + '$&') + (parts[4] ? decimalSeparator + parts[4] : '');
        }
        else {
            result = fixed.replace('.', decimalSeparator);
        }
        if (symbol != "") {
            finalResult = symbol + " " + result;
        }
        else {
            finalResult = result;
        }
        return finalResult;
    };
    CustomCurrencyPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'customCurrency',
        })
    ], CustomCurrencyPipe);
    return CustomCurrencyPipe;
}());

//# sourceMappingURL=custom-currency.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_currency_custom_currency__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__custom_currency_custom_currency__["a" /* CustomCurrencyPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__custom_currency_custom_currency__["a" /* CustomCurrencyPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(364);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_nfc__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_date_picker__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic2_zoom_area__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_local_notifications__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_mobile_accessibility__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ngx_emoji_picker__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pipes_pipes_module__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng_lottie__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13_ngx_emoji_picker__["a" /* NgxEmojiPickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_10_ionic2_zoom_area__["a" /* ZoomAreaModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/akun-saya/akun-saya.module#AkunSayaPageModule', name: 'AkunSayaPage', segment: 'akun-saya', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/animation/animation.module#AnimationPageModule', name: 'AnimationPage', segment: 'animation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/apply-cashline-finish/apply-cashline-finish.module#ApplyCashlineFinishPageModule', name: 'ApplyCashlineFinishPage', segment: 'apply-cashline-finish', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/apply-cashline-finish-bundle/apply-cashline-finish-bundle.module#ApplyCashlineFinishBundlePageModule', name: 'ApplyCashlineFinishBundlePage', segment: 'apply-cashline-finish-bundle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/apply-cashline-mob/apply-cashline-mob.module#ApplyCashlineMobPageModule', name: 'ApplyCashlineMobPage', segment: 'apply-cashline-mob', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/apply-cashline-tenor/apply-cashline-tenor.module#ApplyCashlineTenorPageModule', name: 'ApplyCashlineTenorPage', segment: 'apply-cashline-tenor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cashline-history/cashline-history.module#CashlineHistoryPageModule', name: 'CashlineHistoryPage', segment: 'cashline-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/apply-cashline-waiting/apply-cashline-waiting.module#ApplyCashlineWaitingPageModule', name: 'ApplyCashlineWaitingPage', segment: 'apply-cashline-waiting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cashline-inquiry/cashline-inquiry.module#CashlineInquiryPageModule', name: 'CashlineInquiryPage', segment: 'cashline-inquiry', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cashline-snk/cashline-snk.module#CashlineSnkPageModule', name: 'CashlineSnkPage', segment: 'cashline-snk', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/change-sof-detail/change-sof-detail.module#ChangeSofDetailPageModule', name: 'ChangeSofDetailPage', segment: 'change-sof-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/credit-shield-apply/credit-shield-apply.module#CreditShieldApplyPageModule', name: 'CreditShieldApplyPage', segment: 'credit-shield-apply', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/credit-shield-bottom-modal/credit-shield-bottom-modal.module#CreditShieldBottomModalPageModule', name: 'CreditShieldBottomModalPage', segment: 'credit-shield-bottom-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/credit-shield-failed/credit-shield-failed.module#CreditShieldFailedPageModule', name: 'CreditShieldFailedPage', segment: 'credit-shield-failed', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/credit-shield-guide/credit-shield-guide.module#CreditShieldGuidePageModule', name: 'CreditShieldGuidePage', segment: 'credit-shield-guide', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/credit-shield-snk/credit-shield-snk.module#CreditShieldSnkPageModule', name: 'CreditShieldSnkPage', segment: 'credit-shield-snk', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/credit-shield/credit-shield.module#CreditShieldPageModule', name: 'CreditShieldPage', segment: 'credit-shield', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cvv/cvv.module#CvvPageModule', name: 'CvvPage', segment: 'cvv', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/custom-bottom-modal/custom-bottom-modal.module#CustomBottomModalPageModule', name: 'CustomBottomModalPage', segment: 'custom-bottom-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/emoji/emoji.module#EmojiPageModule', name: 'EmojiPage', segment: 'emoji', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/debounce-search/debounce-search.module#DebounceSearchPageModule', name: 'DebounceSearchPage', segment: 'debounce-search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/infinite-scroll/infinite-scroll.module#InfiniteScrollPageModule', name: 'InfiniteScrollPage', segment: 'infinite-scroll', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home-new/home-new.module#HomeNewPageModule', name: 'HomeNewPage', segment: 'home-new', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lifestyle-check-status/lifestyle-check-status.module#LifestyleCheckStatusPageModule', name: 'LifestyleCheckStatusPage', segment: 'lifestyle-check-status', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lifestyle-check/lifestyle-check.module#LifestyleCheckPageModule', name: 'LifestyleCheckPage', segment: 'lifestyle-check', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/lifestyle-inquiry/lifestyle-inquiry.module#LifestyleInquiryPageModule', name: 'LifestyleInquiryPage', segment: 'lifestyle-inquiry', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-bottom/modal-bottom.module#ModalBottomPageModule', name: 'ModalBottomPage', segment: 'modal-bottom', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mstore-snk/mstore-snk.module#MstoreSnkPageModule', name: 'MstoreSnkPage', segment: 'mstore-snk', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-taptopay/new-taptopay.module#NewTaptopayPageModule', name: 'NewTaptopayPage', segment: 'new-taptopay', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/live-validation/live-validation.module#LiveValidationPageModule', name: 'LiveValidationPage', segment: 'live-validation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/page1/page1.module#Page1PageModule', name: 'Page1Page', segment: 'page1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/page2/page2.module#Page2PageModule', name: 'Page2Page', segment: 'page2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/page3/page3.module#Page3PageModule', name: 'Page3Page', segment: 'page3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/page4/page4.module#Page4PageModule', name: 'Page4Page', segment: 'page4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pdf-viewer/pdf-viewer.module#PdfViewerPageModule', name: 'PdfViewerPage', segment: 'pdf-viewer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/remittance/remittance.module#RemittancePageModule', name: 'RemittancePage', segment: 'remittance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sample-lottie/sample-lottie.module#SampleLottiePageModule', name: 'SampleLottiePage', segment: 'sample-lottie', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide/slide.module#SlidePageModule', name: 'SlidePage', segment: 'slide', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sof/sof.module#SofPageModule', name: 'SofPage', segment: 'sof', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/page5/page5.module#Page5PageModule', name: 'Page5Page', segment: 'page5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/supplement-reg/supplement-reg.module#SupplementRegPageModule', name: 'SupplementRegPage', segment: 'supplement-reg', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/taptopay-activate/taptopay-activate.module#TaptopayActivatePageModule', name: 'TaptopayActivatePage', segment: 'taptopay-activate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/taptopay-check/taptopay-check.module#TaptopayCheckPageModule', name: 'TaptopayCheckPage', segment: 'taptopay-check', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/taptopay/taptopay.module#TaptopayPageModule', name: 'TaptopayPage', segment: 'taptopay', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/toast-modal/toast-modal.module#ToastModalPageModule', name: 'ToastModalPage', segment: 'toast-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/valas/valas.module#ValasPageModule', name: 'ValasPage', segment: 'valas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ttp-finish/ttp-finish.module#TtpFinishPageModule', name: 'TtpFinishPage', segment: 'ttp-finish', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/zoom/zoom.module#ZoomPageModule', name: 'ZoomPage', segment: 'zoom', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ttp-tutorial/ttp-tutorial.module#TtpTutorialPageModule', name: 'TtpTutorialPage', segment: 'ttp-tutorial', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_16_ng_lottie__["a" /* LottieAnimationViewModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_15__pipes_pipes_module__["a" /* PipesModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_nfc__["a" /* NFC */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_date_picker__["a" /* DatePicker */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_mobile_accessibility__["a" /* MobileAccessibility */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common__["c" /* CurrencyPipe */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_mobile_accessibility__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, mobileAccessibility) {
        var _this = this;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            mobileAccessibility.usePreferredTextZoom(false);
            _this.checkAndInstallUpdate();
        });
    }
    MyApp.prototype.checkAndInstallUpdate = function () {
        var _this = this;
        // pastikan chcp sudah tersedia (plugin sudah ready)
        if (!window["chcp"]) {
            console.warn("CHCP plugin not available");
            return;
        }
        window["chcp"].getVersionInfo(function (error, data) {
            if (error) {
                console.log("❌ getVersionInfo error:", error);
            }
            else {
                console.log("Current web version: " + data.currentWebVersion);
                console.log("Previous web version: " + data.previousWebVersion);
                console.log("Loaded and ready for installation web version: " +
                    data.readyToInstallWebVersion);
                console.log("Application version name: " + data.appVersion);
                console.log("Application build version: " + data.buildVersion);
            }
        });
        // window["chcp"].getConfiguration((error, config) => {
        //   if (error) {
        //     console.log("❌ getConfiguration error:", error);
        //   } else {
        //     console.log("✅ Configuration:", config);
        //     console.log("Config URL:", config.configFileURL);
        //   }
        // });
        window["chcp"].isUpdateAvailableForInstallation(function (error, data) {
            console.log('isUpdateAvailableForInstallation', error, 'data : ', data);
            if (error) {
                console.log("No update ready to install, fetching update...");
                window["chcp"].fetchUpdate(function (error, data) {
                    console.log('fetch update', error, 'data : ', data);
                    if (error) {
                        console.log("❌ fetchUpdate error:", error);
                        console.log("Error code:", error.code);
                        console.log("Error description:", error.description);
                        // Tampilkan error codes
                        _this.explainErrorCode(error.code);
                    }
                    else {
                        console.log("✅ Update available:", data);
                        console.log("New version:", data.currentWebVersion);
                        console.log("Ready to install");
                        window["chcp"].installUpdate(function (error) {
                            if (error) {
                                console.log('Install error:', error);
                            }
                            else {
                                console.log('Update installed successfully');
                            }
                        });
                    }
                });
            }
            else {
                console.log("Current version:", data.currentVersion);
                console.log("Ready to install version:", data.readyToInstallVersion);
                window["chcp"].installUpdate(function (installError) {
                    if (installError) {
                        console.error("Failed to install update", installError);
                    }
                    else {
                        console.log("Update installed!");
                        // reload app agar update aktif
                        window.location.reload();
                    }
                });
            }
        });
    };
    MyApp.prototype.explainErrorCode = function (code) {
        var errorCodes = {
            1: "NOTHING_TO_UPDATE - No update available",
            2: "FAILED_TO_DOWNLOAD_APPLICATION_CONFIG - Cannot download chcp.json",
            3: "APPLICATION_BUILD_VERSION_TOO_LOW - App version too old",
            4: "FAILED_TO_DOWNLOAD_CONTENT_MANIFEST - Cannot download chcp.manifest",
            5: "FAILED_TO_DOWNLOAD_UPDATE_FILES - Cannot download update files",
            6: "FAILED_TO_MOVE_LOADED_FILES_TO_INSTALLATION_FOLDER - Install failed",
            7: "UPDATE_IS_INVALID - Update validation failed",
            8: "FAILED_TO_COPY_FILES_FROM_PREVIOUS_RELEASE - Copy failed",
            9: "FAILED_TO_COPY_NEW_CONTENT_FILES - New content copy failed",
            10: "LOCAL_VERSION_OF_APPLICATION_CONFIG_NOT_FOUND - Local config missing",
            11: "LOCAL_VERSION_OF_MANIFEST_NOT_FOUND - Local manifest missing",
            12: "LOADED_VERSION_OF_APPLICATION_CONFIG_NOT_FOUND - Loaded config missing",
            13: "LOADED_VERSION_OF_MANIFEST_NOT_FOUND - Loaded manifest missing",
            14: "FAILED_TO_LOAD_UPDATE_FROM_FILE_SYSTEM - Failed to load from storage",
            15: "CORRUPTED_UPDATE_FILES - Update files corrupted",
        };
        console.log("Error " + code + ": " + (errorCodes[code] || "Unknown error"));
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/nafirilhaq/Documents/Project/devSample/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/nafirilhaq/Documents/Project/devSample/src/app/app.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_mobile_accessibility__["a" /* MobileAccessibility */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[359]);
//# sourceMappingURL=main.js.map