webpackJsonp([20],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { SQLite, SQLiteObject } from '@ionic-native/sqlite';



/**
 * Generated class for the AlertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlertPage = /** @class */ (function () {
    function AlertPage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        var localData = http.get('assets/location.json').map(function (res) { return res.json().locations; });
        localData.subscribe(function (data) {
            _this.information = data;
        });
    }
    AlertPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlertPage');
    };
    AlertPage.prototype.ionViewWillEnter = function () {
    };
    AlertPage.prototype.home = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    AlertPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alert',template:/*ion-inline-start:"C:\Users\USER\pralay\storetech2\src\pages\alert\alert.html"*/'<ion-content padding id="home_page">\n  <img class="header_image" src="../assets/imgs/brand.png"/>\n  \n    <h2 class="mtitle">Alerts</h2>\n\n    <ion-col col-12>\n        <ion-item>\n            <ion-label>Select</ion-label>\n            <ion-select [(ngModel)]="toppings">\n              <ion-option>Today</ion-option>\n              <ion-option>This Week</ion-option>\n              <ion-option>Last Week</ion-option>\n            </ion-select>\n          </ion-item>\n    </ion-col>\n    <ion-col col-12>\n            <ion-row class="header">\n              <ion-col col-4>Location</ion-col>\n              <ion-col col-4>Time of Alert</ion-col>\n              <ion-col col-4>Signed Off</ion-col>\n            </ion-row>\n            \n            \n            <ion-row *ngFor="let item of information; let i = index">\n              <ion-col col-4>{{ item.store }} {{ item.department }} </ion-col>\n              <ion-col col-4>{{ item.timeofalert }}</ion-col>\n              <ion-col col-4></ion-col>\n            </ion-row>\n            \n\n            <ion-row class="blk_font">\n              <ion-col col-4>B2 F2 Mens</ion-col>\n              <ion-col col-4>18/10/18 16:30</ion-col>\n              <ion-col col-4>A.Jones 16:45</ion-col>\n            </ion-row>\n\n            <!-- <ion-row>\n              <ion-col col-4>B6 F2 Men</ion-col>\n              <ion-col col-4>14.00</ion-col>\n              <ion-col col-4></ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-4>B6 F3 Female</ion-col>\n              <ion-col col-4>15.00</ion-col>\n              <ion-col col-4></ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-4>B2 F2 Mens</ion-col>\n              <ion-col col-4>16.30</ion-col>\n              <ion-col col-4>A. Jones 16:45</ion-col>\n            </ion-row> -->\n    </ion-col>\n  <ion-grid class="dsah_imag">\n    <ion-col col-12>\n        <button ion-button color="textlight" full (click)=home() large>Home</button>\n        <!-- <button ion-button color="textlight" full (click)="addData()"> show data </button> -->\n    </ion-col>\n  </ion-grid>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\USER\pralay\storetech2\src\pages\alert\alert.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], AlertPage);
    return AlertPage;
}());

//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signoff2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signoff_signoff__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
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
 * Generated class for the Signoff2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Signoff2Page = /** @class */ (function () {
    // abc={};
    // data: any[];
    function Signoff2Page(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.text = {};
        this.text = navParams.get('data');
        var localData = http.get('assets/locationbak.json').map(function (res) { return res.json().locations; });
        localData.subscribe(function (data) {
            _this.loc = data;
        });
    }
    Signoff2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Signoff2Page');
    };
    Signoff2Page.prototype.dashbd = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    Signoff2Page.prototype.signoff = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signoff_signoff__["a" /* SignoffPage */]);
    };
    Signoff2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signoff2',template:/*ion-inline-start:"C:\Users\USER\pralay\storetech2\src\pages\signoff2\signoff2.html"*/'<ion-content padding id="home_page">\n  <img class="header_image" src="../assets/imgs/brand.png"/>\n  \n    <h2 class="mtitle" >Sign Off</h2>\n\n    <div class="scan-item" >\n    <ion-card *ngFor="let item of loc">\n      <h3 class="text_center" *ngIf="text == item.qrcode">You are about to sign off cleaning for {{item.store}} {{item.department}} </h3>\n    </ion-card>\n    \n    <!-- <ion-card >\n      <h3 class="text_center">Abcd </h3>\n    </ion-card> -->\n    </div>\n\n    <!-- <h3 class="text_center">You are about to sign off cleaning for {{abc.store}} {{abc.department}} </h3>   -->\n<ion-grid class="dsah_imag">\n  <button ion-button color="secondary" full (click) = dashbd() large>Sign Off cleaning<br/> for this location here</button>\n  <button ion-button color="dark" full (click) = signoff()  large>Cancel and return <br/>to scan QR code</button>\n  <button ion-button color="textlight" full (click) = dashbd()  large>Home</button>\n</ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\USER\pralay\storetech2\src\pages\signoff2\signoff2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
    ], Signoff2Page);
    return Signoff2Page;
}());

//# sourceMappingURL=signoff2.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReghubPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reghub2_reghub2__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(47);
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
 * Generated class for the ReghubPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReghubPage = /** @class */ (function () {
    function ReghubPage(navCtrl, navParams, barcodeScaner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScaner = barcodeScaner;
        this.data = {};
    }
    ReghubPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReghubPage');
    };
    ReghubPage.prototype.scan = function () {
        var _this = this;
        this.option = {
            prompt: "Focus the Hub's QR code in the window below to register HUB"
        };
        this.barcodeScaner.scan(this.option).then(function (barcodeData) {
            console.log(barcodeData);
            _this.data = barcodeData;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__reghub2_reghub2__["a" /* Reghub2Page */]);
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    ReghubPage.prototype.reghub2 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__reghub2_reghub2__["a" /* Reghub2Page */]);
    };
    ReghubPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reghub',template:/*ion-inline-start:"C:\Users\USER\pralay\storetech2\src\pages\reghub\reghub.html"*/'<ion-content padding id="home_page">\n  <img class="header_image" src="../assets/imgs/brand.png"/>\n  \n    <h2 class="mtitle">Register Hub</h2>\n\n    <ion-col col-12>\n        \n        <h3 class="text_center" >Focus the hub\'s  QR code in the window below</h3>\n        <div class="qrscaner">\n\n        </div>\n<ion-grid class="dsah_imag">  \n  <button ion-button color="secondary" full (click) = scan() large>Capture QR Code</button>\n  <!-- <button ion-button color="primary" full (click) = reghub2() >Test hub2</button> -->\n</ion-grid>\n  </ion-col>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\USER\pralay\storetech2\src\pages\reghub\reghub.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], ReghubPage);
    return ReghubPage;
}());

//# sourceMappingURL=reghub.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reghub2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reghub3_reghub3__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__ = __webpack_require__(183);
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
 * Generated class for the Reghub2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Reghub2Page = /** @class */ (function () {
    function Reghub2Page(navCtrl, navParams, keyboard) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.keyboard = keyboard;
    }
    Reghub2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Reghub2Page');
    };
    Reghub2Page.prototype.reghub3 = function () {
        // des = des || 'No Description Entered';
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__reghub3_reghub3__["a" /* Reghub3Page */], { text: this.des });
    };
    Reghub2Page.prototype.onDeviceReady = function () {
        this.keyboard.show();
    };
    Reghub2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reghub2',template:/*ion-inline-start:"C:\Users\USER\pralay\storetech2\src\pages\reghub2\reghub2.html"*/'<ion-content padding id="home_page">\n  <img class="header_image" src="../assets/imgs/brand.png"/>\n  \n    <h2 class="mtitle">Register Hub</h2>\n\n    <ion-col col-12>\n        <h3 class="text_center" >Now give a brief description of the hub\'s location</h3>\n\n        <ion-item class="des_box" >\n            <!-- <ion-label>Description</ion-label> -->\n            <ion-input placeholder="Description" [(ngModel)]="des"></ion-input>\n        </ion-item>\n<ion-grid class="dsah_imag">\n  <!-- <button ion-button color="primary" full (click)=newhub() >Register a New Hub</button>\n  <button ion-button color="primary" full (click)=regsensor() >Register Sensor</button> -->\n  <button ion-button color="secondary" full (click)=reghub3() large>Save</button>\n</ion-grid>\n    </ion-col>\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\USER\pralay\storetech2\src\pages\reghub2\reghub2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__["a" /* Keyboard */]])
    ], Reghub2Page);
    return Reghub2Page;
}());

//# sourceMappingURL=reghub2.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reghub3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(21);
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
 * Generated class for the Reghub3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Reghub3Page = /** @class */ (function () {
    function Reghub3Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.text = this.navParams.get('text');
    }
    Reghub3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Reghub3Page');
    };
    Reghub3Page.prototype.dashbd = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    Reghub3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reghub3',template:/*ion-inline-start:"C:\Users\USER\pralay\storetech2\src\pages\reghub3\reghub3.html"*/'<ion-content padding id="home_page">\n  <img class="header_image" src="../assets/imgs/brand.png"/>\n \n    <h2 class="mtitle">Registered Hub</h2>\n\n    <ion-col col-12>\n        \n      <h3 class="text_center" >Please Confirm Details</h3>\n\n        <ion-item class="des_box" >\n          <h3> {{text}} </h3>\n        </ion-item>\n    <ion-grid class="dsah_imag">\n      <button ion-button color="secondary" full (click)=dashbd() large>Save</button>\n    </ion-grid>\n    </ion-col>\n  \n</ion-content>'/*ion-inline-end:"C:\Users\USER\pralay\storetech2\src\pages\reghub3\reghub3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], Reghub3Page);
    return Reghub3Page;
}());

//# sourceMappingURL=reghub3.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegsenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__regsen2_regsen2__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(47);
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
 * Generated class for the RegsenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegsenPage = /** @class */ (function () {
    function RegsenPage(navCtrl, navParams, barcodeScaner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScaner = barcodeScaner;
        this.sensor = {};
    }
    RegsenPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegsenPage');
    };
    RegsenPage.prototype.scan = function () {
        var _this = this;
        this.option = {
            prompt: "Focus the sensors QR codein the window below to Register Sensor"
        };
        this.barcodeScaner.scan(this.option).then(function (barcodeData) {
            console.log(barcodeData);
            _this.sensor = barcodeData;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__regsen2_regsen2__["a" /* Regsen2Page */], { data: barcodeData.text });
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    RegsenPage.prototype.sensor2 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__regsen2_regsen2__["a" /* Regsen2Page */]);
    };
    RegsenPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-regsen',template:/*ion-inline-start:"C:\Users\USER\pralay\storetech2\src\pages\regsen\regsen.html"*/'<ion-content padding id="home_page">\n  <img class="header_image" src="../assets/imgs/brand.png"/>\n  \n    <h2 class="mtitle">Register Sensor</h2>\n    <ion-col col-12>\n        <h3 class="text_center" >Focus the sensors QR code in the window below</h3>\n        <div class="qrscaner">\n        </div>\n    <ion-grid class="dsah_imag">\n    <button ion-button color="secondary" full (click) = scan() large>Capture QR Code</button>\n    <!-- <button ion-button color="primary" full (click) = sensor2() >Sensor 2</button> -->\n  </ion-grid>\n  </ion-col>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\USER\pralay\storetech2\src\pages\regsen\regsen.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], RegsenPage);
    return RegsenPage;
}());

//# sourceMappingURL=regsen.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Regsen2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__regsen3_regsen3__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(184);
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
 * Generated class for the Regsen2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Regsen2Page = /** @class */ (function () {
    function Regsen2Page(navCtrl, navParams, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.qrtext = {};
        this.qrtext = navParams.get('data');
    }
    Regsen2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Regsen2Page');
    };
    Regsen2Page.prototype.estatelist = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__regsen3_regsen3__["a" /* Regsen3Page */], { data: _this.qrtext });
        }, function (err) {
            // Handle error
        });
    };
    Regsen2Page.prototype.regsensor = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__regsen3_regsen3__["a" /* Regsen3Page */]);
    };
    Regsen2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-regsen2',template:/*ion-inline-start:"C:\Users\USER\pralay\storetech2\src\pages\regsen2\regsen2.html"*/'<ion-content padding id="home_page">\n  <img class="header_image" src="../assets/imgs/brand.png"/>\n\n    <h2 class="mtitle">Picture of the Sensor</h2>\n\n    <ion-row align-items-center>\n    <ion-col col-12>\n        <h3 class="text_center" >Now take a picture of the sensor</h3>\n        \n        <!-- <ion-list>\n          <ion-item>\n            <h3>Cancelled: {{sensor.cancelled}}</h3>\n            <h3>Format: {{sensor.format}}</h3>\n            <h3>Text: {{sensor.text}}</h3>\n          </ion-item>\n        </ion-list> -->\n\n        <div class="sensor_photo"> </div>\n        <p class="text_center">Please Include entire entrance and camera in the picture.</p>\n      <ion-grid class="dsah_imag">\n        <!-- <button ion-button color="primary" full (click)=newhub() >Register a New Hub</button>\n        <button ion-button color="primary" full (click)=regsensor() >Register Sensor</button> -->\n        <button ion-button color="secondary" full (click) = estatelist() large>Take Picture</button>\n        <!-- <button ion-button color="primary" full (click) = regsensor() >page 3rd test</button> -->\n      </ion-grid>\n    </ion-col>\n    </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\USER\pralay\storetech2\src\pages\regsen2\regsen2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */]])
    ], Regsen2Page);
    return Regsen2Page;
}());

//# sourceMappingURL=regsen2.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Regsen3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__regsen4_regsen4__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
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
 * Generated class for the Regsen3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Regsen3Page = /** @class */ (function () {
    function Regsen3Page(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.qrtext = {};
        var localData = http.get('assets/information.json').map(function (res) { return res.json().items; });
        localData.subscribe(function (data) {
            _this.information = data;
        });
        this.qrtext = navParams.get('data');
    }
    Regsen3Page.prototype.toggleSection = function (i) {
        this.information[i].open = !this.information[i].open;
    };
    Regsen3Page.prototype.toggleItem = function (i, j) {
        this.information[i].children[j].open = !this.information[i].children[j].open;
    };
    Regsen3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Regsen3Page');
    };
    Regsen3Page.prototype.regsen4 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__regsen4_regsen4__["a" /* Regsen4Page */], { data: this.qrtext });
    };
    Regsen3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-regsen3',template:/*ion-inline-start:"C:\Users\USER\pralay\storetech2\src\pages\regsen3\regsen3.html"*/'<ion-content padding id="home_page" >\n  <img class="header_image" src="../assets/imgs/brand.png"/>\n  \n      <ion-row>\n          <ion-col col-12>\n          <ion-searchbar class="assets_search"></ion-searchbar>\n          <button ion-button color="secondary" class="right" >Expand</button>\n          </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-12>\n                <h6>Location</h6>\n                <ion-list class="accordion-list">\n                        <!-- First Level -->\n                        <ion-list-header *ngFor="let item of information; let i = index" no-lines no-padding>\n                          <!-- Toggle Button -->\n                          <button ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n                              {{ item.name }}\n                            <ion-icon item-left name="add" *ngIf="!item.open"></ion-icon>\n                            <ion-icon item-left name="remove" *ngIf="item.open"></ion-icon>\n                          </button>\n                    \n                          <ion-list *ngIf="item.children && item.open" no-lines>\n                            <!-- Second Level -->\n                            <ion-list radio-group >\n\n                            <ion-item *ngFor="let child of item.children">\n                              <ion-label>{{ child.name }} </ion-label>\n                              <ion-radio  value="{{ item.name }} {{ child.name }} "></ion-radio>\n                            </ion-item>\n\n                            </ion-list>\n\n                          </ion-list>\n                          \n                        </ion-list-header>\n                      </ion-list>\n            \n        </ion-col>\n\n    \n      <ion-col col-12>\n      <ion-grid class="dsah_imag">\n        <button ion-button color="secondary" full (click)=regsen4() large>Select</button>\n      </ion-grid>\n      </ion-col>\n    \n    </ion-row>\n \n</ion-content>\n'/*ion-inline-end:"C:\Users\USER\pralay\storetech2\src\pages\regsen3\regsen3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], Regsen3Page);
    return Regsen3Page;
}());

//# sourceMappingURL=regsen3.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Regsen4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
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
 * Generated class for the Regsen4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Regsen4Page = /** @class */ (function () {
    function Regsen4Page(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.qrtext = {};
        this.qrtext = navParams.get('data');
        var localData = http.get('assets/locationbak.json').map(function (res) { return res.json().locations; });
        localData.subscribe(function (data) {
            _this.loc = data;
        });
    }
    Regsen4Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Regsen4Page');
    };
    Regsen4Page.prototype.dashbd = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    Regsen4Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-regsen4',template:/*ion-inline-start:"C:\Users\USER\pralay\storetech2\src\pages\regsen4\regsen4.html"*/'<ion-content padding id="home_page">\n  <img class="header_image" src="../assets/imgs/brand.png"/>\n  <h2 class="mtitle">Register Sensor</h2>\n  <ion-grid >\n  <ion-row justify-content-center align-items-center style="height: 100%">\n    <ion-col col-12>\n        <h3 class="text_center" >Confirm your sensor\'s location</h3>\n        <ion-card *ngFor="let item of loc">\n          <div *ngIf="qrtext == item.qrcode" class="sensor_photo">\n            <h6> Serial number: {{item.qrcode}}</h6>\n            <h6>Location name: {{item.store | slice:3:9}} {{item.department}}</h6>\n            <h6>Location ID: {{item.store | slice:3:5}}{{item.store | slice:6:8}}{{item.department | slice:0:1}}</h6>\n          </div>\n        </ion-card>\n    </ion-col>\n    \n      <ion-col col-12 class="text_center" >\n          <ion-grid class="dsah_imag">\n            <button ion-button full color="secondary" (click)=dashbd() large>Save</button>\n            <button ion-button full color="dark" (click)=dashbd() large>Cancel & Back</button>\n          </ion-grid>\n      </ion-col>\n  \n  </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\USER\pralay\storetech2\src\pages\regsen4\regsen4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], Regsen4Page);
    return Regsen4Page;
}());

//# sourceMappingURL=regsen4.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SensorconPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sensorloc_sensorloc__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__device_device__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
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
 * Generated class for the SensorconPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SensorconPage = /** @class */ (function () {
    function SensorconPage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.text = {};
        this.text = navParams.get('data');
        var localData = http.get('assets/locationbak.json').map(function (res) { return res.json().locations; });
        localData.subscribe(function (data) {
            _this.loc = data; // json file data
        });
    }
    SensorconPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SensorconPage');
    };
    SensorconPage.prototype.senloc = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sensorloc_sensorloc__["a" /* SensorlocPage */]);
    };
    SensorconPage.prototype.device = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__device_device__["a" /* DevicePage */]);
    };
    SensorconPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sensorcon',template:/*ion-inline-start:"C:\Users\USER\pralay\storetech2\src\pages\sensorcon\sensorcon.html"*/'<ion-content padding id="home_page">\n  <img class="header_image" src="../assets/imgs/brand.png"/>\n  <h2 class="mtitle">New Device Settings</h2>\n\n  <ion-col col-12>\n     \n    <ion-card *ngFor="let item of loc">\n        <p *ngIf="text == item.qrcode">\n            Serial Number: {{item.qrcode}}<br/>\n            Location Name: {{item.store | slice:3:9}} {{item.department}}<br/>\n            Location Id: {{item.store | slice:3:5}}{{item.store | slice:6:8}}{{item.department | slice:0:1}}<br/>\n            Last Seen: <br/>\n            Battery Level: {{item.batterylavel}}<br/>\n            dBm: {{item.receivepower}}<br/>\n        </p>\n      </ion-card>\n  <ion-grid class="dsah_imag">\n      <!-- <button ion-button color="primary" full (click)=newhub() >Register a New Hub</button>\n      <button ion-button color="primary" full (click)=regsensor() >Register Sensor</button> -->\n      <button ion-button color="yellow" full (click)=device() large> Save</button>\n      <button ion-button color="dark" full (click)=senloc() large>Cancel And Back</button>\n  </ion-grid>\n  </ion-col>\n</ion-content>\n'/*ion-inline-end:"C:\Users\USER\pralay\storetech2\src\pages\sensorcon\sensorcon.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
    ], SensorconPage);
    return SensorconPage;
}());

//# sourceMappingURL=sensorcon.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HubconPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hubloc_hubloc__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__device_device__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
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
 * Generated class for the HubconPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HubconPage = /** @class */ (function () {
    function HubconPage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.text = {};
        this.text = navParams.get('data'); //bar code data //
        var localData = http.get('assets/locationbak.json').map(function (res) { return res.json().locations; });
        localData.subscribe(function (data) {
            _this.loc = data; // json file data
        });
    }
    HubconPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HubconPage');
    };
    HubconPage.prototype.hubloc = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__hubloc_hubloc__["a" /* HublocPage */]);
    };
    HubconPage.prototype.device = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__device_device__["a" /* DevicePage */]);
    };
    HubconPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hubcon',template:/*ion-inline-start:"C:\Users\USER\pralay\storetech2\src\pages\hubcon\hubcon.html"*/'<ion-content padding id="home_page">\n    <img class="header_image" src="../assets/imgs/brand.png"/>\n    <h2 class="mtitle">New Device Settings</h2>\n  \n    <ion-col col-12>\n        <ion-card *ngFor="let item of loc">\n            <p *ngIf="text == item.qrcode">\n                Location Name: {{item.store | slice:3:9}} {{item.department}}<br/>\n                Location Id: {{item.store | slice:3:5}}{{item.store | slice:6:8}}{{item.department | slice:0:1}}<br/>\n                Last Seen: {{item.lastseen}}<br/>\n                Network Type: {{item.networktype}}<br/>\n                dBm: {{item.localnoise}}<br/>\n            </p>\n          </ion-card>\n        <ion-grid class="dsah_imag">\n            <!-- <button ion-button color="primary" full (click)=newhub() >Register a New Hub</button>\n            <button ion-button color="primary" full (click)=regsensor() >Register Sensor</button> -->\n            <button ion-button color="secondary" full (click)=device() large>Save</button>\n            <button ion-button color="dark" full (click)=hubloc() large>Cancel & Back</button>\n        </ion-grid>\n  \n    </ion-col>\n  </ion-content>\n  '/*ion-inline-end:"C:\Users\USER\pralay\storetech2\src\pages\hubcon\hubcon.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
    ], HubconPage);
    return HubconPage;
}());

//# sourceMappingURL=hubcon.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
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
 * Generated class for the EstatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EstatePage = /** @class */ (function () {
    function EstatePage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        var localData = http.get('assets/information.json').map(function (res) { return res.json().items; });
        localData.subscribe(function (data) {
            _this.information = data;
        });
    }
    EstatePage.prototype.toggleSection = function (i) {
        this.information[i].open = !this.information[i].open;
    };
    EstatePage.prototype.toggleItem = function (i, j) {
        this.information[i].children[j].open = !this.information[i].children[j].open;
    };
    EstatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EstatePage');
    };
    EstatePage.prototype.desbd = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    EstatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-estate',template:/*ion-inline-start:"C:\Users\USER\pralay\storetech2\src\pages\estate\estate.html"*/'<!--\n  Generated template for the EstatePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding id="home_page" >\n  <img class="header_image" src="../assets/imgs/brand.png"/>\n  <ion-row>\n      <ion-col col-12>\n      <ion-searchbar class="assets_search"></ion-searchbar>\n      <button ion-button color="textlight" class="right" >Expand</button>\n      </ion-col>\n  </ion-row>\n\n<ion-row>\n    \n\n  <ion-col col-12>\n      <h6>Location</h6>\n      <ion-list class="accordion-list">\n        <!-- First Level -->\n        <ion-list-header *ngFor="let item of information; let i = index" no-lines no-padding>\n          <!-- Toggle Button -->\n          <button ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n              {{ item.name }}\n            <ion-icon item-left name="add" *ngIf="!item.open"></ion-icon>\n            <ion-icon item-left name="remove" *ngIf="item.open"></ion-icon>\n          </button>\n     \n          <ion-list *ngIf="item.children && item.open" no-lines>\n            <!-- Second Level -->\n            <ion-list radio-group >\n\n            <ion-item *ngFor="let child of item.children">\n              <ion-label>{{ child.name }} </ion-label>\n              <ion-radio  value="{{ item.name }} {{ child.name }} "></ion-radio>\n            </ion-item>\n\n            </ion-list>\n\n          </ion-list>\n          \n        </ion-list-header>\n      </ion-list>\n      \n  </ion-col>\n\n\n  <ion-col col-12>\n      <ion-grid class="dsah_imag">\n    <button ion-button color="textlight" full (click)=desbd() large>Home</button>\n    </ion-grid>\n  </ion-col>\n</ion-row>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\USER\pralay\storetech2\src\pages\estate\estate.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], EstatePage);
    return EstatePage;
}());

//# sourceMappingURL=estate.js.map

/***/ }),

/***/ 140:
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
webpackEmptyAsyncContext.id = 140;

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/alert/alert.module": [
		328,
		19
	],
	"../pages/dashboard/dashboard.module": [
		329,
		18
	],
	"../pages/dashbosrd/dashbosrd.module": [
		330,
		0
	],
	"../pages/device/device.module": [
		331,
		17
	],
	"../pages/estate/estate.module": [
		332,
		16
	],
	"../pages/hubcon/hubcon.module": [
		333,
		15
	],
	"../pages/hubdtl/hubdtl.module": [
		334,
		14
	],
	"../pages/hubloc/hubloc.module": [
		335,
		13
	],
	"../pages/reghub/reghub.module": [
		336,
		10
	],
	"../pages/reghub2/reghub2.module": [
		337,
		12
	],
	"../pages/reghub3/reghub3.module": [
		338,
		11
	],
	"../pages/regsen/regsen.module": [
		339,
		6
	],
	"../pages/regsen2/regsen2.module": [
		340,
		9
	],
	"../pages/regsen3/regsen3.module": [
		341,
		8
	],
	"../pages/regsen4/regsen4.module": [
		342,
		7
	],
	"../pages/sensorcon/sensorcon.module": [
		343,
		5
	],
	"../pages/sensordtl/sensordtl.module": [
		344,
		4
	],
	"../pages/sensorloc/sensorloc.module": [
		345,
		3
	],
	"../pages/signoff/signoff.module": [
		346,
		1
	],
	"../pages/signoff2/signoff2.module": [
		347,
		2
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
webpackAsyncContext.id = 181;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_alert__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signoff_signoff__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reghub_reghub__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__regsen_regsen__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__device_device__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__estate_estate__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home__ = __webpack_require__(91);
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
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage.prototype.alertpg = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__alert_alert__["a" /* AlertPage */]);
    };
    DashboardPage.prototype.signoffpg = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signoff_signoff__["a" /* SignoffPage */]);
    };
    DashboardPage.prototype.reghubpg = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__reghub_reghub__["a" /* ReghubPage */]);
    };
    DashboardPage.prototype.regsensorpg = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__regsen_regsen__["a" /* RegsenPage */]);
    };
    DashboardPage.prototype.devicepg = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__device_device__["a" /* DevicePage */]);
    };
    DashboardPage.prototype.estatepg = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__estate_estate__["a" /* EstatePage */]);
    };
    DashboardPage.prototype.logout = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__home_home__["a" /* HomePage */]);
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"C:\Users\USER\pralay\storetech2\src\pages\dashboard\dashboard.html"*/'\n<ion-content padding id="home_page">\n  <img class="header_image" src="../assets/imgs/brand.png"/>\n  <ion-grid class="dsah_imag">\n      <ion-row>\n        <ion-col col-6><img (click)=alertpg()  src="../assets/imgs/alert.PNG"><p>Alerts</p></ion-col>\n        <ion-col col-6><img (click)=signoffpg() src="../assets/imgs/Timer.PNG"><p>Sign off cleaning</p></ion-col>\n        <ion-col col-6><img (click)=reghubpg() src="../assets/imgs/box.PNG"><p>Register hub</p></ion-col>\n        <ion-col col-6><img (click)=regsensorpg() src="../assets/imgs/Reg_sensor.PNG"><p>Register sensor</p></ion-col>\n        <ion-col col-6><img (click)=devicepg() src="../assets/imgs/services2.PNG"><p>View/edit devices</p></ion-col>\n        <ion-col col-6><img (click)=estatepg() src="../assets/imgs/Estate2.PNG"><p>View estate</p></ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col col-12>\n            <button ion-button color="dark" full (click)=logout() large>Log Out</button>\n          </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\USER\pralay\storetech2\src\pages\dashboard\dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(257);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_pro__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_pro___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__ionic_pro__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_alert_alert__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signoff_signoff__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signoff2_signoff2__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_reghub_reghub__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_reghub2_reghub2__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_regsen_regsen__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_regsen2_regsen2__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_device_device__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_estate_estate__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_reghub3_reghub3__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_regsen3_regsen3__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_regsen4_regsen4__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_sensordtl_sensordtl__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_sensorloc_sensorloc__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_sensorcon_sensorcon__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_hubdtl_hubdtl__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_hubloc_hubloc__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_hubcon_hubcon__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_keyboard__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_camera__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_barcode_scanner__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_sqlite__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_toast__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_store_store__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























// import { QRScanner } from '@ionic-native/qr-scanner';
// import { Toast } from '@ionic-native/toast';
// import { DataServiceProvider } from '../providers/data-service/data-service';







__WEBPACK_IMPORTED_MODULE_0__ionic_pro__["Pro"].init('34b51387', {
    appVersion: '1.0'
});
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_alert_alert__["a" /* AlertPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signoff_signoff__["a" /* SignoffPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signoff2_signoff2__["a" /* Signoff2Page */],
                __WEBPACK_IMPORTED_MODULE_12__pages_reghub_reghub__["a" /* ReghubPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_reghub2_reghub2__["a" /* Reghub2Page */],
                __WEBPACK_IMPORTED_MODULE_18__pages_reghub3_reghub3__["a" /* Reghub3Page */],
                __WEBPACK_IMPORTED_MODULE_14__pages_regsen_regsen__["a" /* RegsenPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_regsen2_regsen2__["a" /* Regsen2Page */],
                __WEBPACK_IMPORTED_MODULE_19__pages_regsen3_regsen3__["a" /* Regsen3Page */],
                __WEBPACK_IMPORTED_MODULE_20__pages_regsen4_regsen4__["a" /* Regsen4Page */],
                __WEBPACK_IMPORTED_MODULE_16__pages_device_device__["a" /* DevicePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_estate_estate__["a" /* EstatePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_sensordtl_sensordtl__["a" /* SensordtlPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_sensorloc_sensorloc__["a" /* SensorlocPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_sensorcon_sensorcon__["a" /* SensorconPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_hubdtl_hubdtl__["a" /* HubdtlPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_hubloc_hubloc__["a" /* HublocPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_hubcon_hubcon__["a" /* HubconPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/alert/alert.module#AlertPageModule', name: 'AlertPage', segment: 'alert', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashboard/dashboard.module#DashboardPageModule', name: 'DashboardPage', segment: 'dashboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dashbosrd/dashbosrd.module#DashbosrdPageModule', name: 'DashbosrdPage', segment: 'dashbosrd', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/device/device.module#DevicePageModule', name: 'DevicePage', segment: 'device', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/estate/estate.module#EstatePageModule', name: 'EstatePage', segment: 'estate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hubcon/hubcon.module#HubconPageModule', name: 'HubconPage', segment: 'hubcon', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hubdtl/hubdtl.module#HubdtlPageModule', name: 'HubdtlPage', segment: 'hubdtl', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hubloc/hubloc.module#HublocPageModule', name: 'HublocPage', segment: 'hubloc', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reghub/reghub.module#ReghubPageModule', name: 'ReghubPage', segment: 'reghub', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reghub2/reghub2.module#Reghub2PageModule', name: 'Reghub2Page', segment: 'reghub2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reghub3/reghub3.module#Reghub3PageModule', name: 'Reghub3Page', segment: 'reghub3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/regsen/regsen.module#RegsenPageModule', name: 'RegsenPage', segment: 'regsen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/regsen2/regsen2.module#Regsen2PageModule', name: 'Regsen2Page', segment: 'regsen2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/regsen3/regsen3.module#Regsen3PageModule', name: 'Regsen3Page', segment: 'regsen3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/regsen4/regsen4.module#Regsen4PageModule', name: 'Regsen4Page', segment: 'regsen4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sensorcon/sensorcon.module#SensorconPageModule', name: 'SensorconPage', segment: 'sensorcon', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sensordtl/sensordtl.module#SensordtlPageModule', name: 'SensordtlPage', segment: 'sensordtl', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sensorloc/sensorloc.module#SensorlocPageModule', name: 'SensorlocPage', segment: 'sensorloc', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signoff/signoff.module#SignoffPageModule', name: 'SignoffPage', segment: 'signoff', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signoff2/signoff2.module#Signoff2PageModule', name: 'Signoff2Page', segment: 'signoff2', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_alert_alert__["a" /* AlertPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signoff_signoff__["a" /* SignoffPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signoff2_signoff2__["a" /* Signoff2Page */],
                __WEBPACK_IMPORTED_MODULE_12__pages_reghub_reghub__["a" /* ReghubPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_reghub2_reghub2__["a" /* Reghub2Page */],
                __WEBPACK_IMPORTED_MODULE_18__pages_reghub3_reghub3__["a" /* Reghub3Page */],
                __WEBPACK_IMPORTED_MODULE_14__pages_regsen_regsen__["a" /* RegsenPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_regsen2_regsen2__["a" /* Regsen2Page */],
                __WEBPACK_IMPORTED_MODULE_19__pages_regsen3_regsen3__["a" /* Regsen3Page */],
                __WEBPACK_IMPORTED_MODULE_20__pages_regsen4_regsen4__["a" /* Regsen4Page */],
                __WEBPACK_IMPORTED_MODULE_16__pages_device_device__["a" /* DevicePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_estate_estate__["a" /* EstatePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_sensordtl_sensordtl__["a" /* SensordtlPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_sensorloc_sensorloc__["a" /* SensorlocPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_sensorcon_sensorcon__["a" /* SensorconPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_hubdtl_hubdtl__["a" /* HubdtlPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_hubloc_hubloc__["a" /* HublocPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_hubcon_hubcon__["a" /* HubconPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_keyboard__["a" /* Keyboard */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_31__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_toast__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_33__providers_store_store__["a" /* StoreProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(91);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\USER\pralay\storetech2\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\USER\pralay\storetech2\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pouchdb__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pouchdb_adapter_cordova_sqlite__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pouchdb_adapter_cordova_sqlite___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_pouchdb_adapter_cordova_sqlite__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StoreProvider = /** @class */ (function () {
    function StoreProvider(http) {
        this.http = http;
        console.log('Hello StoreProvider Provider');
    }
    StoreProvider.prototype.createPouchDB = function () {
        __WEBPACK_IMPORTED_MODULE_3_pouchdb__["plugin"](__WEBPACK_IMPORTED_MODULE_4_pouchdb_adapter_cordova_sqlite___default.a);
        this.pdb = new __WEBPACK_IMPORTED_MODULE_3_pouchdb__('store.db', { adapter: 'cordova-sqlite' });
    };
    StoreProvider.prototype.create = function (employee) {
        return this.pdb.post(employee);
    };
    StoreProvider.prototype.update = function (employee) {
        return this.pdb.put(employee);
    };
    StoreProvider.prototype.delete = function (employee) {
        return this.pdb.delete(employee);
    };
    StoreProvider.prototype.read = function () {
        function allDocs() {
            var _this = this;
            this.pdb.allDocs({ include_docs: true })
                .then(function (docs) {
                _this.employees = docs.rows.map(function (row) {
                    row.doc.Date = new Date(row.doc.Date);
                    return row.doc;
                });
                return _this.employees;
            });
        }
    };
    StoreProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], StoreProvider);
    return StoreProvider;
}());

//# sourceMappingURL=store.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sensordtl_sensordtl__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hubdtl_hubdtl__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
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
 * Generated class for the DevicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DevicePage = /** @class */ (function () {
    function DevicePage(navCtrl, navParams, barcodeScaner, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScaner = barcodeScaner;
        this.http = http;
        this.text = {};
        this.data = {};
        this.loadLoc = {};
        var localData = http.get('assets/locationbak.json').map(function (res) { return res.json().locations; });
        localData.subscribe(function (data) {
            _this.loc = data; //JSON file Data
        });
    }
    DevicePage.prototype.scan2 = function () {
        var _this = this;
        this.option = {
            prompt: "Focus the sensors QR code in the window below."
        };
        this.barcodeScaner.scan(this.option).then(function (barcodeData) {
            console.log(barcodeData);
            _this.text = barcodeData.text; // bar code data
            _this.loadCart();
        })
            .catch(function (err) {
            console.log('Error', err);
        });
    };
    // scan2(){
    //   this.text = '0:0:0:0:0:0:0:05'; // bar code data
    //   this.loadCart();
    // }
    DevicePage.prototype.loadCart = function () {
        for (var _i = 0, _a = this.loc; _i < _a.length; _i++) {
            var item = _a[_i];
            if (this.text == item.qrcode && item.type == 'sensor') {
                this.dsensor();
            }
            else if (this.text == item.qrcode && item.type == 'hub') {
                this.dhub();
            }
        }
    };
    DevicePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DevicePage');
    };
    DevicePage.prototype.dsensor = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sensordtl_sensordtl__["a" /* SensordtlPage */], { data: this.text });
    };
    DevicePage.prototype.dhub = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__hubdtl_hubdtl__["a" /* HubdtlPage */], { data: this.text });
    };
    DevicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-device',template:/*ion-inline-start:"C:\Users\USER\pralay\storetech2\src\pages\device\device.html"*/'<ion-content padding id="home_page">\n  <img class="header_image" src="../assets/imgs/brand.png"/>\n  <h2 class="mtitle">View / Edit Device</h2>\n\n<ion-col col-12>\n    <h3 class="text_center" >Focus the hub or sensors QR code in the window below to edit its location.</h3>\n    <div class="qrscaner">\n    </div>\n    <ion-grid class="dsah_imag">\n      <button ion-button color="secondary" full (click) = scan2() large> Capture QR Code </button>\n    </ion-grid>\n\n      <!-- <div *ngFor="let item of loc">\n        <div *ngIf="text == item.qrcode && item.type == \'sensor\'  ? dsensor() : end" >\n            \n        </div>\n      </div>\n\n      <ion-card *ngFor="let item of loc">\n        <p *ngIf="text == item.qrcode && item.type == \'hub\' ? dhub() : end"> </p>\n      </ion-card> -->\n\n      <!-- <ion-item *ngFor="let item of loc" *ngIf="text == loc.qrcode && loc.type == \'sensor\' ? dsensor() : end"></ion-item> -->\n\n\n        <!-- <ng-template #elsetag>\n          <div>\n            {{item.type}}\n          </div>\n        </ng-template> -->\n      \n     <!-- <h2> {{text.text}}</h2> -->\n\n</ion-col>\n<!-- <ion-col col-12 class="text_center" >\n  <button ion-button full color="secondary" (click) = dsensor() >If Sensor Selected</button>\n  <button ion-button full color="dark" (click) = dhub()>If HUB Selected</button>\n</ion-col> -->\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\USER\pralay\storetech2\src\pages\device\device.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]])
    ], DevicePage);
    return DevicePage;
}());

//# sourceMappingURL=device.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignoffPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signoff2_signoff2__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { Toast } from '@ionic-native/toast';
// import { DataServiceProvider } from '../../providers/data-service/data-service';
// import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
var SignoffPage = /** @class */ (function () {
    function SignoffPage(navCtrl, navParams, barcodeScaner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScaner = barcodeScaner;
        this.data = {};
    }
    SignoffPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignoffPage');
    };
    SignoffPage.prototype.scan2 = function () {
        var _this = this;
        this.option = {
            prompt: "Focus the sensors QR codein the window below to sign off cleaning"
        };
        this.barcodeScaner.scan(this.option).then(function (barcodeData) {
            console.log(barcodeData);
            _this.data = barcodeData;
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signoff2_signoff2__["a" /* Signoff2Page */], { data: barcodeData.text });
        })
            .catch(function (err) {
            console.log('Error', err);
        });
    };
    SignoffPage.prototype.signoff2 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signoff2_signoff2__["a" /* Signoff2Page */]);
    };
    SignoffPage.prototype.scan = function () {
        // this.selectedProduct = {};
        // this.barcodeScanner.scan().then((barcodeData) => {
        //   this.selectedProduct = this.products.find(product => product.plu === barcodeData.text);
        //   if(this.selectedProduct !== undefined) {
        //     this.productFound = true;
        //   } else {
        //     this.productFound = false;
        //     this.toast.show(`Product not found`, '5000', 'center').subscribe(
        //       toast => {
        //         console.log(toast);
        //       }
        //     );
        //   }
        // }, (err) => {
        //   this.toast.show(err, '5000', 'center').subscribe(
        //     toast => {
        //       console.log(toast);
        //     }
        //   );
        // });
    };
    SignoffPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signoff',template:/*ion-inline-start:"C:\Users\USER\pralay\storetech2\src\pages\signoff\signoff.html"*/'<ion-content padding id="home_page">\n  <img class="header_image" src="../assets/imgs/brand.png"/>\n \n      <h2 class="mtitle" >Scan QR Code</h2>\n\n      <ion-col col-12>\n          \n          <h3 class="text_center" >If you have finished cleaning this location please scan the sensor\'s QR code in the window below to sign off cleaning</h3>\n\n          <div class="qrscaner" >\n\n          </div> \n\n          <!-- <ion-list>\n            <ion-item>\n              <h3>Cancelled: {{data.cancelled}}</h3>\n              <h3>Format: {{data.format}}</h3>\n              <p>Text: {{data.text}}</p>  \n          </ion-item>\n          </ion-list> -->\n\n\n          <!-- <ion-card *ngIf="productFound">\n              <ion-card-header>\n                <h2>Price: $ {{selectedProduct.price}}</h2>\n              </ion-card-header>\n              <ion-card-content>\n                <ul>\n                  <li>{{selectedProduct.plu}}</li>\n                  <li>{{selectedProduct.name}}</li>\n                  <li>{{selectedProduct.desc}}</li>\n                </ul>\n              </ion-card-content>\n            </ion-card> -->\n      \n\n    <ion-grid class="dsah_imag">\n        <button ion-button color="secondary" full (click) = scan2() large>Capture QR Code</button>\n        <!-- <button ion-button color="primary" full (click) = signoff2()>test sign off 2</button> -->\n    </ion-grid>\n    </ion-col>\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\USER\pralay\storetech2\src\pages\signoff\signoff.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], SignoffPage);
    return SignoffPage;
}());

//# sourceMappingURL=signoff.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SensordtlPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__device_device__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sensorloc_sensorloc__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
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
 * Generated class for the SensordtlPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SensordtlPage = /** @class */ (function () {
    function SensordtlPage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.text = {};
        this.text = navParams.get('data'); //bar code data //navParams.get('data')
        var localData = http.get('assets/locationbak.json').map(function (res) { return res.json().locations; });
        localData.subscribe(function (data) {
            _this.loc = data; // json file data
        });
    }
    SensordtlPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SensordtlPage');
    };
    SensordtlPage.prototype.dashbd = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    SensordtlPage.prototype.device = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__device_device__["a" /* DevicePage */]);
    };
    SensordtlPage.prototype.senloc = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__sensorloc_sensorloc__["a" /* SensorlocPage */], { data: this.text });
    };
    SensordtlPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sensordtl',template:/*ion-inline-start:"C:\Users\USER\pralay\storetech2\src\pages\sensordtl\sensordtl.html"*/'<ion-content padding id="home_page">\n  <img class="header_image" src="../assets/imgs/brand.png"/>\n  <h2 class="mtitle">Sensor Details</h2>\n\n  <ion-col col-12>\n      <p>Below are the current settings for this device</p>\n\n      <!-- <ion-card *ngFor="let item of loc">\n        <h3 class="text_center" *ngIf="text == item.qrcode">You are about to sign off cleaning for {{item.store}} {{item.department}} </h3> \n      </ion-card> -->\n\n      <ion-card *ngFor="let item of loc">\n          <p *ngIf="text == item.qrcode">\n              Serial Number: {{item.qrcode}}<br/>\n              Location Name: {{item.store | slice:3:9}} {{item.department}}<br/>\n              Location Id: {{item.store | slice:3:5}}{{item.store | slice:6:8}}{{item.department | slice:0:1}}<br/>\n              Last Seen: <br/>\n              Battery Level: {{item.batterylavel}}<br/>\n              dBm: {{item.receivepower}}<br/>\n          </p>\n        </ion-card>\n  <ion-grid class="dsah_imag">\n    <button ion-button color="violate" full (click)=senloc() large>Edit Location</button>\n    <button ion-button color="yellow" full (click)=device() large>Scan Another Device</button>\n    <button ion-button color="primary" full (click)=dashbd() large>Home</button>\n  </ion-grid>\n\n  </ion-col>\n</ion-content>\n'/*ion-inline-end:"C:\Users\USER\pralay\storetech2\src\pages\sensordtl\sensordtl.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]])
    ], SensordtlPage);
    return SensordtlPage;
}());

//# sourceMappingURL=sensordtl.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SensorlocPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sensorcon_sensorcon__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sensordtl_sensordtl__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
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
 * Generated class for the SensorlocPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SensorlocPage = /** @class */ (function () {
    function SensorlocPage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.text = {};
        this.text = navParams.get('data'); //bar code data //
        var localData = http.get('assets/information.json').map(function (res) { return res.json().items; });
        localData.subscribe(function (data) {
            _this.information = data;
        });
    }
    SensorlocPage.prototype.toggleSection = function (i) {
        this.information[i].open = !this.information[i].open;
    };
    SensorlocPage.prototype.toggleItem = function (i, j) {
        this.information[i].children[j].open = !this.information[i].children[j].open;
    };
    SensorlocPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SensorlocPage');
    };
    SensorlocPage.prototype.sencof = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sensorcon_sensorcon__["a" /* SensorconPage */], { data: this.text });
    };
    SensorlocPage.prototype.sendtl = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sensordtl_sensordtl__["a" /* SensordtlPage */]);
    };
    SensorlocPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sensorloc',template:/*ion-inline-start:"C:\Users\USER\pralay\storetech2\src\pages\sensorloc\sensorloc.html"*/'<ion-content padding id="home_page" >\n  <img class="header_image" src="../assets/imgs/brand.png"/>\n  <ion-row>\n      <ion-col col-12>\n      <ion-searchbar class="assets_search"></ion-searchbar>\n      <button ion-button color="textlight" class="right" >Expand</button>\n      </ion-col>\n  </ion-row>\n\n<ion-row>\n  <ion-col col-12>\n        <h6>Location</h6>\n        <ion-list class="accordion-list">\n          <!-- First Level -->\n          <ion-list-header *ngFor="let item of information; let i = index" no-lines no-padding>\n            <!-- Toggle Button -->\n            <button ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n                {{ item.name }}\n              <ion-icon item-left name="add" *ngIf="!item.open"></ion-icon>\n              <ion-icon item-left name="remove" *ngIf="item.open"></ion-icon>\n            </button>\n       \n            <ion-list *ngIf="item.children && item.open" no-lines>\n              <!-- Second Level -->\n              <ion-list radio-group >\n\n              <ion-item *ngFor="let child of item.children">\n                <ion-label>{{ child.name }} </ion-label>\n                <ion-radio  value="{{ item.name }} {{ child.name }} "></ion-radio>\n              </ion-item>\n\n              </ion-list>\n\n            </ion-list>\n            \n          </ion-list-header>\n        </ion-list>\n  </ion-col>\n\n  <!-- <ion-col col-12>\n      <accordion></accordion>\n      \n  </ion-col> -->\n\n\n  <ion-col col-12>\n      <ion-grid class="dsah_imag">\n    <button ion-button color="secondary" full (click)=sencof() large>Select</button>\n    <!-- <button ion-button color="textlight" full (click)=sendtl()>Back</button> -->\n    </ion-grid>\n  </ion-col>\n</ion-row>\n\n</ion-content>'/*ion-inline-end:"C:\Users\USER\pralay\storetech2\src\pages\sensorloc\sensorloc.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
    ], SensorlocPage);
    return SensorlocPage;
}());

//# sourceMappingURL=sensorloc.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HubdtlPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hubloc_hubloc__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__device_device__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
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
 * Generated class for the HubdtlPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HubdtlPage = /** @class */ (function () {
    function HubdtlPage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.text = {};
        this.text = navParams.get('data'); //bar code data //navParams.get('data')
        var localData = http.get('assets/locationbak.json').map(function (res) { return res.json().locations; });
        localData.subscribe(function (data) {
            _this.loc = data; // json file data
        });
    }
    HubdtlPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HubdtlPage');
    };
    HubdtlPage.prototype.dashbd = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    HubdtlPage.prototype.device = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__device_device__["a" /* DevicePage */]);
    };
    HubdtlPage.prototype.hubloc = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__hubloc_hubloc__["a" /* HublocPage */], { data: this.text });
    };
    HubdtlPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hubdtl',template:/*ion-inline-start:"C:\Users\USER\pralay\storetech2\src\pages\hubdtl\hubdtl.html"*/'<ion-content padding id="home_page">\n  <img class="header_image" src="../assets/imgs/brand.png"/>\n  <h2 class="mtitle">Hub Details</h2>\n\n  <ion-col col-12>\n      <p>Below are the current settings for this device</p>\n\n      <ion-card *ngFor="let item of loc">\n        <p *ngIf="text == item.qrcode">\n            Location Name: {{item.store | slice:3:9}} {{item.department}}<br/>\n            Location Id: {{item.store | slice:3:5}}{{item.store | slice:6:8}}{{item.department | slice:0:1}}<br/>\n            Last Seen: {{item.lastseen}}<br/>\n            Network Type: {{item.networktype}}<br/>\n            dBm: {{item.localnoise}}<br/>\n        </p>\n      </ion-card>\n\n      <ion-grid class="dsah_imag">\n        <button ion-button color="violate" full (click)=hubloc() large>Edit Location</button>\n        <button ion-button color="yellow" full (click)=device() large>Scan Another Device</button>\n        <button ion-button color="secondary" full (click)=dashbd() large>Home</button>\n      </ion-grid>\n\n  </ion-col>\n</ion-content>'/*ion-inline-end:"C:\Users\USER\pralay\storetech2\src\pages\hubdtl\hubdtl.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]])
    ], HubdtlPage);
    return HubdtlPage;
}());

//# sourceMappingURL=hubdtl.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HublocPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hubcon_hubcon__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hubdtl_hubdtl__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
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
 * Generated class for the HublocPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HublocPage = /** @class */ (function () {
    function HublocPage(navCtrl, navParams, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.text = {};
        this.text = navParams.get('data'); //bar code data // 
        var localData = http.get('assets/information.json').map(function (res) { return res.json().items; });
        localData.subscribe(function (data) {
            _this.information = data;
        });
    }
    HublocPage.prototype.toggleSection = function (i) {
        this.information[i].open = !this.information[i].open;
    };
    HublocPage.prototype.toggleItem = function (i, j) {
        this.information[i].children[j].open = !this.information[i].children[j].open;
    };
    HublocPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HublocPage');
    };
    HublocPage.prototype.hubcof = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__hubcon_hubcon__["a" /* HubconPage */], { data: this.text });
    };
    HublocPage.prototype.hubdtl = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__hubdtl_hubdtl__["a" /* HubdtlPage */]);
    };
    HublocPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hubloc',template:/*ion-inline-start:"C:\Users\USER\pralay\storetech2\src\pages\hubloc\hubloc.html"*/'<ion-content padding id="home_page" >\n    <img class="header_image" src="../assets/imgs/brand.png"/>\n    <ion-row>\n        <ion-col col-12>\n        <ion-searchbar class="assets_search"></ion-searchbar>\n        <button ion-button color="textlight" class="right" >Expand</button>\n        </ion-col>\n    </ion-row>\n  \n  <ion-row>\n    <ion-col col-12>\n            <h6>Location</h6>\n            <ion-list class="accordion-list">\n              <!-- First Level -->\n              <ion-list-header *ngFor="let item of information; let i = index" no-lines no-padding>\n                <!-- Toggle Button -->\n                <button ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n                    {{ item.name }}\n                  <ion-icon item-left name="add" *ngIf="!item.open"></ion-icon>\n                  <ion-icon item-left name="remove" *ngIf="item.open"></ion-icon>\n                </button>\n           \n                <ion-list *ngIf="item.children && item.open" no-lines>\n                  <!-- Second Level -->\n                  <ion-list radio-group >\n\n                  <ion-item *ngFor="let child of item.children">\n                    <ion-label>{{ child.name }} </ion-label>\n                    <ion-radio  value="{{ item.name }} {{ child.name }} "></ion-radio>\n                  </ion-item>\n\n                  </ion-list>\n\n                </ion-list>\n                \n              </ion-list-header>\n            </ion-list>\n    </ion-col>\n  \n    <!-- <ion-col col-12>\n        <accordion></accordion>\n        \n    </ion-col> -->\n  \n  \n    <ion-col col-12>\n        <ion-grid class="dsah_imag">\n            <button ion-button color="secondary" full (click)=hubcof() large>Select</button>\n      <!-- <button ion-button color="textlight" full (click)=hubdtl()>Back</button> -->\n      </ion-grid>\n    </ion-col>\n  </ion-row>\n  \n  </ion-content>\n'/*ion-inline-end:"C:\Users\USER\pralay\storetech2\src\pages\hubloc\hubloc.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Http */]])
    ], HublocPage);
    return HublocPage;
}());

//# sourceMappingURL=hubloc.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(21);
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
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\USER\pralay\storetech2\src\pages\home\home.html"*/'\n<ion-content padding id="home_page">\n  <!-- <img class="header_image" src="../assets/imgs/Logo2.PNG"/> -->\n  <h1><img class="logo_text" src="../assets/imgs/brand.png"/></h1>\n  <h6>Flexicount<br/> Powered By StoreTech</h6>\n\n  <h6>Please Sign In</h6>\n\n  <ion-list class="login_area">\n      <ion-row>\n        <ion-col col-12>\n            <ion-item class="ref_input">\n              <ion-label fixed>Username</ion-label>\n              <ion-input type="text" value=""></ion-input>\n            </ion-item>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n          <ion-col col-12>\n            <ion-item class="ref_input">\n              <ion-label fixed>Password</ion-label>\n              <ion-input type="password"></ion-input>\n            </ion-item>\n          </ion-col>\n      </ion-row>\n\n      <ion-row>\n          <ion-col col-6>\n              <ion-item>\n                <ion-label>English</ion-label>\n                <ion-select [(ngModel)]="language">\n                  <ion-option value="Russin">Russian</ion-option>\n                  <ion-option value="Urdu">Urdu</ion-option>\n                  <ion-option value="Hindi">Hindi</ion-option>\n                  <ion-option value="Chinise">Chinise</ion-option>\n                  <ion-option value="Spainish">Spainish</ion-option>\n                  <ion-option value="German">German</ion-option>\n                </ion-select>\n              </ion-item>\n          </ion-col>\n          <ion-col col-6>\n              <ion-item class="ckbx">\n                  <ion-label>Remember Me</ion-label>\n                  <ion-checkbox  checked="true"></ion-checkbox>\n              </ion-item>\n          </ion-col>\n      </ion-row>\n\n      <ion-row>\n          <ion-col col-12>\n            <button ion-button color="textlight" full (click)=login()>Log In</button>\n          </ion-col>\n      </ion-row>\n\n      <!-- <ion-row>\n          <ion-col col-6 class="text left">\n              privacy\n          </ion-col>\n          <ion-col col-6 class="text right">\n              forgot Password?\n          </ion-col>\n      </ion-row> -->\n\n    \n    </ion-list>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\USER\pralay\storetech2\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[236]);
//# sourceMappingURL=main.js.map