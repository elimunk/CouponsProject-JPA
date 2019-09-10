(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <app-header></app-header>\n</header>\n\n<body>\n  <router-outlet></router-outlet>\n</body>\n\n<footer>\n  <app-footer></app-footer>\n</footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Coupons';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/customer/customer.component */ "./src/app/components/customer/customer.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_company_company_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/company/company.component */ "./src/app/components/company/company.component.ts");
/* harmony import */ var _components_sign_out_sign_out_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/sign-out/sign-out.component */ "./src/app/components/sign-out/sign-out.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/cart/cart.component */ "./src/app/components/cart/cart.component.ts");
/* harmony import */ var _components_thank_thank_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/thank/thank.component */ "./src/app/components/thank/thank.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _components_masage_masage_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/masage/masage.component */ "./src/app/components/masage/masage.component.ts");



























var routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"] },
    { path: 'signOut', component: _components_sign_out_sign_out_component__WEBPACK_IMPORTED_MODULE_13__["SignOutComponent"] },
    { path: 'customer', component: _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_9__["CustomerComponent"] },
    { path: 'admin', component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_10__["AdminComponent"] },
    { path: 'company', component: _components_company_company_component__WEBPACK_IMPORTED_MODULE_12__["CompanyComponent"] },
    { path: 'cart', component: _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_15__["CartComponent"] },
    { path: 'thankyou', component: _components_thank_thank_component__WEBPACK_IMPORTED_MODULE_16__["ThankComponent"] },
    { path: 'message', component: _components_masage_masage_component__WEBPACK_IMPORTED_MODULE_26__["MasageComponent"] },
    { path: '', redirectTo: "home", pathMatch: "full" },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _components_customer_customer_component__WEBPACK_IMPORTED_MODULE_9__["CustomerComponent"],
                _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_10__["AdminComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _components_company_company_component__WEBPACK_IMPORTED_MODULE_12__["CompanyComponent"],
                _components_sign_out_sign_out_component__WEBPACK_IMPORTED_MODULE_13__["SignOutComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
                _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_15__["CartComponent"],
                _components_thank_thank_component__WEBPACK_IMPORTED_MODULE_16__["ThankComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_18__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
                _components_masage_masage_component__WEBPACK_IMPORTED_MODULE_26__["MasageComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routes),
                _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_21__["MatSelectModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_25__["MatCardModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/admin/admin.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/admin/admin.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body  ,p{\r\n    font-family:cursive;\r\n        text-align: center; \r\n}\r\n\r\n.coupons{\r\n  text-align: center;\r\n}\r\n\r\n.example-card {\r\n  max-width: 200px;\r\n  margin: 6px;\r\n  float: left;\r\n}\r\n\r\n.example-header-image {\r\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n  background-size: cover;\r\n}\r\n\r\n.card-image{\r\n  width: 200px;\r\n  height: 120px;\r\n}\r\n\r\n.card-logo{\r\n  width: 60px;\r\n  height: 60px;\r\n}\r\n\r\n.price{\r\n  color: rgb(0, 146, 151);\r\n\r\n}\r\n\r\n#companyName{\r\n  text-align: right;\r\n}\r\n\r\na , button{\r\n    font-family:cursive;\r\n    text-align: center;\r\n   padding: 8px 14px;\r\n   background-color: white;\r\n   color: rgb(151, 0, 0);\r\n   text-decoration: none;\r\n   border:0px;\r\n   margin: 10px;\r\n   border-radius: 2em;\r\n    }\r\n\r\nbutton2:hover {\r\n        background-color: rgb(0, 146, 151);\r\n        color: white;\r\n      }\r\n\r\n#button2{\r\n        font-family:cursive;\r\n        text-align: center;\r\n      padding-bottom: 3.5px ;\r\n      padding-top : 3.5px; \r\n      margin: auto;\r\n      background-color: rgb(0, 146, 151);;\r\n      color: rgb(255, 255, 255);\r\n      text-decoration: none;\r\n      border: 1px solid  rgb(255, 255, 255);\r\n    margin: 6px;\r\n        }\r\n\r\n/* ----get coupon---- */\r\n\r\n#c2 {\r\n        text-align: center;\r\n        -webkit-margin-after: 18px;\r\n                margin-block-end: 18px;\r\n        -webkit-padding-before: 18px;\r\n                padding-block-start: 18px;\r\n        -webkit-padding-after: 18px;\r\n                padding-block-end: 18px;\r\n        -webkit-margin-start: auto;\r\n                margin-inline-start: auto;\r\n        -webkit-margin-end: auto;\r\n                margin-inline-end: auto;\r\n        /* padding: 50px; */\r\n        font-family:Arial, Helvetica, sans-serif;\r\n    \r\n        \r\n    }\r\n\r\ntable {\r\n        background-color:ghostwhite ;\r\n        position: -webkit-sticky;\r\n        position: sticky;\r\n        -webkit-margin-start: auto;\r\n                margin-inline-start: auto;\r\n        -webkit-margin-end: auto;\r\n                margin-inline-end: auto;\r\n        border-collapse: collapse;\r\n        width: 100%;\r\n     }\r\n\r\nth , td{\r\n        text-align: left;\r\n        padding: 10px;\r\n    }\r\n\r\ntable {\r\n        border-collapse: collapse;\r\n        width: 60%;\r\n        text-align: left;\r\n      }\r\n\r\n#companiesTable {\r\n        width: 30%;\r\n      }\r\n\r\ndiv{\r\n        font-family:Arial, Helvetica, sans-serif;\r\n      }\r\n\r\ninput , select{\r\n   font-size:11px;\r\n    width: 30%;\r\n    padding: 12px 20px;\r\n    margin: 6px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n   \r\n  }\r\n\r\n.description{\r\n    padding: 0px;\r\n    -webkit-padding-start: 6px ;\r\n            padding-inline-start: 6px ;\r\n    padding-top: 6px;\r\n    padding-bottom: 80px;\r\n    padding-right: 50px;\r\n    text-align : left;\r\n  }\r\n\r\n#confirm {\r\n    background-color: rgb(199, 3, 3);\r\n    color: white;\r\n    padding: 12px 16px;\r\n    margin: 6px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 30%;\r\n  }\r\n\r\n#reste{\r\n      font-family:cursive;\r\n      background-color: rgb(77, 173, 80);\r\n      color: white;\r\n      padding: 2px 10px;\r\n      margin: 4px 0;\r\n      border: none;\r\n      cursor: pointer;\r\n      width: auto;\r\n      font-size:10px;\r\n      text-align: center;\r\n      border-radius: 2em;\r\n    }\r\n\r\nbutton:hover {\r\n    opacity: 0.8;\r\n  }\r\n\r\nform{\r\n      font-size: 13px;\r\n  }\r\n\r\np{\r\n    color: rgb(4, 2, 110); \r\n    font-size: 15px;\r\n    font-family: cursive;\r\n  }\r\n\r\n.area{\r\n    text-align: center;\r\n        font-size:16px; \r\n     font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  }\r\n\r\nhr{\r\n    opacity: 0.3;  \r\n    }\r\n\r\n#center{\r\n      text-align: center;\r\n    }\r\n\r\n#comment{\r\n      font-size: 12px;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO1FBQ2Ysa0JBQWtCO0FBQzFCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtRkFBbUY7RUFDbkYsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7O0FBRXpCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtHQUNuQixpQkFBaUI7R0FDakIsdUJBQXVCO0dBQ3ZCLHFCQUFxQjtHQUNyQixxQkFBcUI7R0FDckIsVUFBVTtHQUNWLFlBQVk7R0FDWixrQkFBa0I7SUFDakI7O0FBRUE7UUFDSSxrQ0FBa0M7UUFDbEMsWUFBWTtNQUNkOztBQUVBO1FBQ0UsbUJBQW1CO1FBQ25CLGtCQUFrQjtNQUNwQixzQkFBc0I7TUFDdEIsbUJBQW1CO01BQ25CLFlBQVk7TUFDWixrQ0FBa0M7TUFDbEMseUJBQXlCO01BQ3pCLHFCQUFxQjtNQUNyQixxQ0FBcUM7SUFDdkMsV0FBVztRQUNQOztBQUVSLHVCQUF1Qjs7QUFDakI7UUFDRSxrQkFBa0I7UUFDbEIsMEJBQXNCO2dCQUF0QixzQkFBc0I7UUFDdEIsNEJBQXlCO2dCQUF6Qix5QkFBeUI7UUFDekIsMkJBQXVCO2dCQUF2Qix1QkFBdUI7UUFDdkIsMEJBQXlCO2dCQUF6Qix5QkFBeUI7UUFDekIsd0JBQXVCO2dCQUF2Qix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLHdDQUF3Qzs7O0lBRzVDOztBQUVBO1FBQ0ksNEJBQTRCO1FBQzVCLHdCQUFnQjtRQUFoQixnQkFBZ0I7UUFDaEIsMEJBQXlCO2dCQUF6Qix5QkFBeUI7UUFDekIsd0JBQXVCO2dCQUF2Qix1QkFBdUI7UUFDdkIseUJBQXlCO1FBQ3pCLFdBQVc7S0FDZDs7QUFFQTtRQUNHLGdCQUFnQjtRQUNoQixhQUFhO0lBQ2pCOztBQUNBO1FBQ0kseUJBQXlCO1FBQ3pCLFVBQVU7UUFDVixnQkFBZ0I7TUFDbEI7O0FBRUE7UUFDRSxVQUFVO01BQ1o7O0FBRUE7UUFDRSx3Q0FBd0M7TUFDMUM7O0FBR047R0FDRyxjQUFjO0lBQ2IsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixzQkFBc0I7O0VBRXhCOztBQUVBO0lBQ0UsWUFBWTtJQUNaLDJCQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0UsZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2YsVUFBVTtFQUNaOztBQUdHO01BQ0MsbUJBQW1CO01BQ25CLGtDQUFrQztNQUNsQyxZQUFZO01BQ1osaUJBQWlCO01BQ2pCLGFBQWE7TUFDYixZQUFZO01BQ1osZUFBZTtNQUNmLFdBQVc7TUFDWCxjQUFjO01BQ2Qsa0JBQWtCO01BQ2xCLGtCQUFrQjtJQUNwQjs7QUFFRjtJQUNFLFlBQVk7RUFDZDs7QUFFQTtNQUNJLGVBQWU7RUFDbkI7O0FBRUE7SUFDRSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLG9CQUFvQjtFQUN0Qjs7QUFFQTtJQUNFLGtCQUFrQjtRQUNkLGNBQWM7S0FDakIsZ0RBQWdEO0VBQ25EOztBQUVBO0lBQ0UsWUFBWTtJQUNaOztBQUVBO01BQ0Usa0JBQWtCO0lBQ3BCOztBQUVBO01BQ0UsZUFBZTtJQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkgICxwe1xyXG4gICAgZm9udC1mYW1pbHk6Y3Vyc2l2ZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG59XHJcblxyXG4uY291cG9uc3tcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmV4YW1wbGUtY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxuICBtYXJnaW46IDZweDtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uY2FyZC1pbWFnZXtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxufVxyXG4uY2FyZC1sb2dve1xyXG4gIHdpZHRoOiA2MHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxufVxyXG5cclxuLnByaWNle1xyXG4gIGNvbG9yOiByZ2IoMCwgMTQ2LCAxNTEpO1xyXG5cclxufVxyXG5cclxuI2NvbXBhbnlOYW1le1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG5hICwgYnV0dG9ue1xyXG4gICAgZm9udC1mYW1pbHk6Y3Vyc2l2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgcGFkZGluZzogOHB4IDE0cHg7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICBjb2xvcjogcmdiKDE1MSwgMCwgMCk7XHJcbiAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgYm9yZGVyOjBweDtcclxuICAgbWFyZ2luOiAxMHB4O1xyXG4gICBib3JkZXItcmFkaXVzOiAyZW07XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uMjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE0NiwgMTUxKTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICNidXR0b24ye1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OmN1cnNpdmU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMy41cHggO1xyXG4gICAgICBwYWRkaW5nLXRvcCA6IDMuNXB4OyBcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTQ2LCAxNTEpOztcclxuICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAgcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgbWFyZ2luOiA2cHg7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4vKiAtLS0tZ2V0IGNvdXBvbi0tLS0gKi9cclxuICAgICAgI2MyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJsb2NrLWVuZDogMThweDtcclxuICAgICAgICBwYWRkaW5nLWJsb2NrLXN0YXJ0OiAxOHB4O1xyXG4gICAgICAgIHBhZGRpbmctYmxvY2stZW5kOiAxOHB4O1xyXG4gICAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IGF1dG87XHJcbiAgICAgICAgLyogcGFkZGluZzogNTBweDsgKi9cclxuICAgICAgICBmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgXHJcbiAgICAgICAgXHJcbiAgICB9IFxyXG4gICAgXHJcbiAgICB0YWJsZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpnaG9zdHdoaXRlIDtcclxuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IGF1dG87XHJcbiAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICB9XHJcbiAgICBcclxuICAgICB0aCAsIHRke1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuICAgIHRhYmxlIHtcclxuICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgI2NvbXBhbmllc1RhYmxlIHtcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgZGl2e1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OkFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICAgIH1cclxuXHJcblxyXG5pbnB1dCAsIHNlbGVjdHtcclxuICAgZm9udC1zaXplOjExcHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICAgbWFyZ2luOiA2cHggMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICBcclxuICB9XHJcblxyXG4gIC5kZXNjcmlwdGlvbntcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA2cHggO1xyXG4gICAgcGFkZGluZy10b3A6IDZweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICAgIHRleHQtYWxpZ24gOiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgI2NvbmZpcm0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5OSwgMywgMyk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICBtYXJnaW46IDZweCAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICB9XHJcblxyXG4gIFxyXG4gICAgICNyZXN0ZXtcclxuICAgICAgZm9udC1mYW1pbHk6Y3Vyc2l2ZTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc3LCAxNzMsIDgwKTtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBwYWRkaW5nOiAycHggMTBweDtcclxuICAgICAgbWFyZ2luOiA0cHggMDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICBmb250LXNpemU6MTBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyZW07XHJcbiAgICB9XHJcbiAgXHJcbiAgYnV0dG9uOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICB9XHJcblxyXG4gIGZvcm17XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcblxyXG4gIHB7XHJcbiAgICBjb2xvcjogcmdiKDQsIDIsIDExMCk7IFxyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5hcmVhe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZToxNnB4OyBcclxuICAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4gIGhye1xyXG4gICAgb3BhY2l0eTogMC4zOyAgXHJcbiAgICB9XHJcblxyXG4gICAgI2NlbnRlcntcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgICNjb21tZW50e1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <label class=\"area\">Administrators area<br> Hello {{myUserService.user.userName}} :) </label>\n  <br>\n  <br>\n\n  <!-- buttons menu -->\n  <div>\n    <button (click)=\"showFormAddCompany()\"> Add company</button>\n    <span> | </span>\n    <button (click)=\"showFormAddAdminUser()\">Add Admin User</button>\n    <span> | </span>\n    <button (click)=\"getAllCompanies()\">All companies</button>\n    <span> | </span>\n    <button (click)=\"getAllUsers()\">All users</button>\n    <!-- <span> | </span> -->\n    <!-- <button (click)=\"getAllCustomers()\">All customers</button> -->\n    <span> | </span>\n    <button (click)=\"getAllCoupons()\">All coupons</button>\n    <span> | </span>\n    <button (click)=\"showUserDetails()\">Update login details</button>\n    <span> | </span>\n    <button (click)=\"showFormAddDiscount()\">Add discount code</button>\n    <span> | </span>\n    <button (click)=\"getAllDiscount()\">All discounts codes</button>\n\n    <hr />\n  </div>\n\n  <!-- text message -->\n  <h3 *ngIf=\"showText\">{{text}}</h3>\n\n\n  <!-- Show Companiens -->\n  <div id=\"c2\" *ngIf=\"isShowAllCompanies\">\n    <h3>All Companies</h3>\n    <div *ngFor=\"let c of myCompanyService.wrapper.companies; index as i\">\n      <p>Company No {{i+1}}</p>\n      <table id=\"companiesTable\">\n        <tr>\n          <th> Company ID </th>\n          <td>{{c.id}}</td>\n        </tr>\n        <tr>\n          <th> Company name </th>\n          <td>{{c.name}}</td>\n        </tr>\n        <tr>\n          <th> Company logo </th>\n          <td><img class=\"card-logo\" src={{c.logo}}></td>\n        </tr>\n      </table>\n      <button id=\"button2\" (click)=\"updateCompany(c)\">Update company</button>\n      <button id=\"button2\" (click)=\"showFormDeleteCompany(c)\">Delete company</button>\n      <button id=\"button2\" (click)=\"showFormAddCompanyUser(c)\">Add company user</button>\n      <button id=\"button2\" (click)=\"getCompanyUsers(c)\">Users company</button>\n      <br>\n    </div>\n  </div>\n\n\n  <!-- Show Companies users-->\n  <div id=\"c2\" *ngIf=\"isShowAllCompaniesUsers\">\n    <h3>Users of company '{{this.company.name}}'</h3>\n    <label style=\"text-align: left\">\n      <table border=\"1\" id=\"companiesTable\">\n        <tr id=\"center\">\n          <th> No </th>\n          <th> User Id</th>\n          <th> Username</th>\n          <th> Password</th>\n          <th> Company Id</th>\n          <th> Type</th>\n        </tr>\n        <tr *ngFor=\"let c of myUserService.companyUsers; index as i\">\n          <td> {{i+1}} </td>\n          <td>{{c.id}}</td>\n          <td>{{c.userName}}</td>\n          <td>{{c.password}}</td>\n          <td>{{c.companyId}}</td>\n          <td>{{c.type}}</td>\n        </tr>\n      </table>\n      <br>\n    </label>\n  </div>\n\n\n  <!-- Show Users -->\n  <div id=\"c2\" *ngIf=\"isShowAllUsers\">\n    <h3>All users</h3>\n    <label>\n      <table border=\"1\">\n        <tr id=\"center\">\n          <th> No </th>\n          <th> User Id</th>\n          <th> Username</th>\n          <th> Password</th>\n          <th> Type</th>\n          <th> Company </th>\n          <th>Delete user</th>\n        </tr>\n        <tr *ngFor=\"let c of myUserService.users; index as i\">\n          <td> {{i+1}} </td>\n          <td>{{c.id}}</td>\n          <td>{{c.userName}}</td>\n          <td>{{c.password}}</td>\n          <td>{{c.type}}</td>\n          <td *ngIf=\"c.company!=undefine\">{{c.company.name}}</td>\n          <td *ngIf=\"c.company==undefine\"></td>\n          <td><button id=\"reste\" (click)=\"deleteUser(c)\">delete</button></td>\n        </tr>\n      </table>\n      <br>\n    </label>\n  </div>\n\n\n  <!-- Add Company User -->\n  <form *ngIf=isAddCompanyUser>\n    <h3>Create user for company '{{company.name}}'</h3>\n    <H4>Choose username</H4>\n    Minimum 5 characters or email address, and only this characters [ a-z A-Z 0-9 . @ _ - ] allowed\n    <br>\n    <input type=\"text\" placeholder=\"username or email...\" name=\"username\" [(ngModel)]=\"user.userName\">\n    <br>\n    <H4>Choose password</H4>\n    The password must contains 8 characters only. and at least one letter and one number. Example\n    'a1234567'\n    <br>\n    <input type=\"password\" placeholder=\"Password...\" name=\"password\" [(ngModel)]=\"user.password\">\n    <br>\n    <button id=\"button2\" (click)=\"addUser()\">create company user</button>\n    <br>\n    <input id=\"reste\" value=\"reset\" type=\"reset\" />\n  </form>\n\n\n  <!-- Add Company -->\n  <div *ngIf=\"isAddCompany\">\n    <h3>Add a new Company</h3>\n    name: <input type=\"text\" placeholder=\"name \" name=\"name\" [(ngModel)]=\"company.name\" required>\n    <br>\n    logo: <input type=\"text\" placeholder=\"logo \" name=\"logo\" [(ngModel)]=\"company.logo\" required>\n    <br>\n    <button id=\"button2\" (click)=\"addCompany()\">create company</button>\n  </div>\n\n\n\n  <!-- Show Coupons -->\n  <div class=\"c2\" *ngIf=\"isShowCoupons\">\n    <h3>All coupons</h3>\n    <label class=\"coupons\" *ngFor=\"let c of myCouponService.wrapper.coupons; index as i\">\n      <mat-card class=\"example-card\">\n        <mat-card-header>\n          <label mat-card-avatar class=\"example-header-image\"></label>\n          <mat-card-title>{{c.title}}</mat-card-title>\n          <mat-card-subtitle>Expired: {{c.endDate}}</mat-card-subtitle>\n        </mat-card-header>\n        <img mat-card-image class=\"card-image\" src={{c.image}} alt=\"Photo of a Shiba Inu\">\n        <mat-card-content>\n          <p>\n            {{c.description}}\n          </p>\n          <label class=\"price\">{{c.price}}$ only!</label>\n        </mat-card-content>\n      </mat-card>\n    </label>\n  </div>\n  <br>\n\n\n\n  <!-- Delete company -->\n  <div *ngIf=\"isDeleteCompany\" style=\"color: rgb(71, 11, 11)\">\n    <br>\n    <h3>Are you shure that you want to delete company '{{company.name}}' ?</h3>\n    <button id=\"confirm\" (click)=\"deleteCompany()\">Confirm delete company '{{company.name}}'</button>\n    <br>\n  </div>\n  <h2 *ngIf=\"isDeleted\">{{text}}</h2>\n\n\n\n\n  <!-- Update details / step 1 -->\n  <form id=\"c2\" *ngIf=\"isUpdateDetails\" style=\"color: rgb(71, 11, 11)\">\n    <h3>Update login details</h3>\n    <p id=\"text\">First, insert your current details\n    </p>\n    <input type=\"text\" placeholder=\"your current username\" name=\"username\" [(ngModel)]=\"tempUsername\">\n    <br>\n    <input type=\"password\" placeholder=\"your current password\" name=\"password\" [(ngModel)]=\"tempPassword\">\n    <br>\n    <button id=\"confirm\" type=\"submit\" (click)=\"validateUserNameAndPassword()\">Continue</button>\n  </form>\n\n\n\n  <!-- Update details / step 2 -->\n  <form id=\"c2\" *ngIf=\"showUpdateDetails\">\n    <h3>Update login details</h3>\n    <p id=\"text\"> Choose new username and passowrd\n    </p>\n    <input type=\"text\" placeholder=\"Choose new username\" name=\"username\" [(ngModel)]=\"user.userName\">\n    <br>\n    <input type=\"password\" placeholder=\"Choose new password\" name=\"password\" [(ngModel)]=\"user.password\">\n    <br>\n    <button id=\"confirm\" type=\"submit\" (click)=\"updateUserDetails()\">confirm update</button>\n    <h2>{{text}}</h2>\n  </form>\n\n\n  <!-- Add Admin User -->\n  <form *ngIf=\"isAddAdminUser\">\n    <h3>Create Admin user</h3>\n    <H4>Choose username</H4>\n    Minimum 5 characters or email address, and only this characters [ a-z A-Z 0-9 . @ _ - ] allowed\n    <br>\n    <input type=\"text\" placeholder=\"username or email...\" name=\"username\" [(ngModel)]=\"user.userName\">\n    <br>\n    <H4>Choose password</H4>\n    The password must contains 8 characters only. and at least one letter and one number. Example\n    'a1234567'\n    <br>\n    <input type=\"password\" placeholder=\"Password...\" name=\"password\" [(ngModel)]=\"user.password\">\n    <br>\n    <button id=\"button2\" (click)=\"addUser()\">create Admin user</button>\n    <br>\n    <input id=\"reste\" value=\"reset\" type=\"reset\" />\n  </form>\n\n  <!-- Add discount code -->\n  <form id=\"c2\" *ngIf=\"isAddDiscount\">\n    <h3>Add discount code</h3>\n    <input type=\"text\" placeholder=\"New discount code\" name=\"code\" [(ngModel)]=\"discountCode.code\">\n    <br>\n    <input type=\"number\" placeholder=\"Percent number\" name=\"code\" [(ngModel)]=\"discountCode.discount\">\n    <br>\n    <input type=\"date\" name=\"endDate\" [(ngModel)]=\"discountCode.expired\">\n    <br>\n    <input type=\"number\" placeholder=\"Amount\" name=\"code\" [(ngModel)]=\"discountCode.amount\" [(ngModel)]= \"discountCode.amountLeft\">\n    <br>\n    <button id=\"confirm\" type=\"submit\" (click)=\"addDiscount()\">confirm</button>\n  </form>\n\n<!-- Show discounts -->\n<div id=\"c2\" *ngIf=\"isShowDiscounts\">\n    <h3>All discounts</h3>\n    <label>\n      <table border=\"1\">\n        <tr id=\"center\">\n          <th> No </th>\n          <th> Code</th>\n          <th> Discount percent</th>\n          <th> Expired</th>\n          <th> Amount </th>\n          <th> Amount of uses</th>\n          <th> Amount left</th>\n          <th> Delete</th>\n        </tr>\n        <tr *ngFor=\"let c of myCodeService.couponCods; index as i\">\n          <td> {{i+1}} </td>\n          <td>{{c.code}}</td>\n          <td>{{c.discount}} %</td>\n          <td>{{c.expired}}</td>\n          <td>{{c.amount}}</td>\n          <td>{{c.amountOfUses}}</td>\n          <td>{{c.amountLeft}}</td>\n          <td><button id=\"reste\" (click)=\"deleteDiscount(c)\">delete</button></td>\n        </tr>\n      </table>\n      <br>\n    </label>\n  </div>\n</body>"

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_company__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/company */ "./src/app/shared/models/company.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/models/user */ "./src/app/shared/models/user.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _shared_services_company_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/company.service */ "./src/app/shared/services/company.service.ts");
/* harmony import */ var src_app_shared_services_coupon_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/coupon.service */ "./src/app/shared/services/coupon.service.ts");
/* harmony import */ var src_app_shared_services_customer_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/customer.service */ "./src/app/shared/services/customer.service.ts");
/* harmony import */ var src_app_shared_services_message_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/message.service */ "./src/app/shared/services/message.service.ts");
/* harmony import */ var src_app_shared_models_discount__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/models/discount */ "./src/app/shared/models/discount.ts");
/* harmony import */ var src_app_shared_services_coupon_cods_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/coupon-cods.service */ "./src/app/shared/services/coupon-cods.service.ts");












var AdminComponent = /** @class */ (function () {
    // cntr
    function AdminComponent(myCodeService, myCustomerService, myUserService, myCompanyService, myCouponService, router, messageService) {
        this.myCodeService = myCodeService;
        this.myCustomerService = myCustomerService;
        this.myUserService = myUserService;
        this.myCompanyService = myCompanyService;
        this.myCouponService = myCouponService;
        this.router = router;
        this.messageService = messageService;
        this.showText = false;
        this.isShowAllCompanies = false;
        this.isAddCompany = false;
        this.isAddCompanyUser = false;
        this.isDeleteCompany = false;
        this.isShowCoupons = false;
        this.isUpdated = false;
        this.isDeleted = false;
        this.isUpdateDetails = false;
        this.showUpdateDetails = false;
        this.isShowAllCompaniesUsers = false;
        this.isShowAllUsers = false;
        this.isShowAllCustomers = false;
        this.isAddAdminUser = false;
        this.isAddDiscount = false;
        this.isShowDiscounts = false;
        this.token = sessionStorage.getItem("token");
        this.userId = parseInt(sessionStorage.getItem("id"));
        this.company = new _shared_models_company__WEBPACK_IMPORTED_MODULE_2__["Company"]();
        this.user = new _shared_models_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.discountCode = new src_app_shared_models_discount__WEBPACK_IMPORTED_MODULE_10__["Discount"]();
    }
    // functions 
    AdminComponent.prototype.addDiscount = function () {
        this.myCodeService.setCouponCode(this.discountCode, this.token);
    };
    AdminComponent.prototype.addCompany = function () {
        this.showText = false;
        this.myCompanyService.createCompany(this.company, this.token);
    };
    AdminComponent.prototype.getAllCompanies = function () {
        this.myCompanyService.getAllCompanies(this.token);
        this.isShowAllCompanies = true;
        this.isAddCompany = false;
        this.isShowAllCompaniesUsers = false;
        this.isUpdateDetails = false;
        this.isShowAllUsers = false;
        this.isDeleteCompany = false;
        this.isAddAdminUser = false;
        this.isAddDiscount = false;
        this.isShowDiscounts = false;
    };
    AdminComponent.prototype.getCompanyUsers = function (company) {
        this.company = company;
        this.myUserService.getCompanyUsers(company.id, this.token);
        this.isShowAllCompanies = false;
        this.isAddCompanyUser = false;
        this.isShowAllUsers = false;
        this.isShowCoupons = false;
        this.isDeleteCompany = false;
        this.isAddDiscount = false;
        this.isShowAllCompaniesUsers = true;
        this.isShowDiscounts = false;
    };
    AdminComponent.prototype.showFormAddCompany = function () {
        this.company = new _shared_models_company__WEBPACK_IMPORTED_MODULE_2__["Company"]();
        this.isShowAllCompanies = false;
        this.isShowCoupons = false;
        this.isAddCompanyUser = false;
        this.isAddCompany = true;
        this.isShowAllCompaniesUsers = false;
        this.isUpdateDetails = false;
        this.isAddAdminUser = false;
        this.isDeleteCompany = false;
        this.isShowAllUsers = false;
        this.isAddDiscount = false;
        this.isShowDiscounts = false;
    };
    AdminComponent.prototype.showFormAddCompanyUser = function (company) {
        this.company = company;
        this.user.company = this.company;
        this.user.type = "COMPANY";
        this.isShowAllCompanies = false;
        this.isShowCoupons = false;
        this.isAddCompany = false;
        this.isDeleteCompany = false;
        this.isAddAdminUser = false;
        this.isDeleteCompany = false;
        this.isAddCompanyUser = true;
        this.isAddDiscount = false;
        this.isShowDiscounts = false;
    };
    AdminComponent.prototype.updateCompany = function () {
        this.myCompanyService.updateCompany(this.company, this.token);
    };
    AdminComponent.prototype.showFormDeleteCompany = function (company) {
        this.company = company;
        this.isShowAllCompanies = false;
        this.isShowCoupons = false;
        this.isAddCompany = false;
        this.isAddCompanyUser = false;
        this.showUpdateDetails = false;
        this.isDeleteCompany = true;
        this.isAddAdminUser = false;
        this.isAddDiscount = false;
        this.isShowDiscounts = false;
    };
    AdminComponent.prototype.deleteCompany = function () {
        this.myCompanyService.deleteCompany(this.company, this.token);
        this.isDeleted = true;
    };
    AdminComponent.prototype.getAllCoupons = function () {
        this.myCouponService.getAllCoupons(this.token);
        this.showFormCoupons();
        this.isAddCompany = false;
        this.isShowAllCompaniesUsers = false;
        this.isShowAllUsers = false;
        this.isUpdateDetails = false;
        this.isAddAdminUser = false;
        this.isAddDiscount = false;
        this.isDeleteCompany = false;
        this.isShowDiscounts = false;
    };
    AdminComponent.prototype.getAllDiscount = function () {
        this.myCodeService.getCouponCodes(this.token);
        this.isAddCompany = false;
        this.isShowAllCompaniesUsers = false;
        this.isShowAllUsers = false;
        this.isUpdateDetails = false;
        this.isAddAdminUser = false;
        this.isAddDiscount = false;
        this.isDeleteCompany = false;
        this.isShowCoupons = false;
        this.isShowDiscounts = true;
    };
    AdminComponent.prototype.showFormCoupons = function () {
        this.showUpdateDetails = false;
        this.isShowAllCompanies = false;
        this.isShowCoupons = true;
        this.isAddCompany = false;
        this.isAddCompanyUser = false;
        this.isShowAllCompaniesUsers = false;
        this.isShowAllUsers = false;
        this.isAddAdminUser = false;
        this.isUpdateDetails = false;
        this.isDeleteCompany = false;
        this.isAddDiscount = false;
        this.isShowDiscounts = false;
    };
    AdminComponent.prototype.showUserDetails = function () {
        this.isAddCompany = false;
        this.isShowAllCompanies = false;
        this.isUpdateDetails = true;
        this.showUpdateDetails = false;
        this.isUpdated = false;
        this.isDeleted = false;
        this.isShowCoupons = false;
        this.isAddCompanyUser = false;
        this.isShowAllCompaniesUsers = false;
        this.isShowAllUsers = false;
        this.isAddAdminUser = false;
        this.isDeleteCompany = false;
        this.isAddDiscount = false;
        this.isShowDiscounts = false;
    };
    AdminComponent.prototype.showFormAddAdminUser = function () {
        this.user.type = "ADMINISTRATOR";
        this.isShowAllCompanies = false;
        this.isShowCoupons = false;
        this.isAddCompany = false;
        this.isAddCompanyUser = false;
        this.isUpdateDetails = false;
        this.isShowAllUsers = false;
        this.isAddAdminUser = true;
        this.isDeleteCompany = false;
        this.isAddDiscount = false;
        this.isShowDiscounts = false;
    };
    AdminComponent.prototype.addUser = function () {
        this.showText = false;
        this.myUserService.addUser(this.user, this.token);
        this.text = "User '" + this.user.userName + "' created successfully";
        this.showText = true;
    };
    AdminComponent.prototype.getAllUsers = function () {
        this.myUserService.getAllUsers(this.token);
        this.isShowAllUsers = true;
        this.isShowAllCompanies = false;
        this.isShowCoupons = false;
        this.isAddCompanyUser = false;
        this.isAddCompany = false;
        this.isShowAllCompaniesUsers = false;
        this.isUpdateDetails = false;
        this.isAddAdminUser = false;
        this.isDeleteCompany = false;
        this.isAddDiscount = false;
        this.isShowDiscounts = false;
    };
    AdminComponent.prototype.showFormAddDiscount = function () {
        this.isShowAllUsers = false;
        this.isShowAllCompanies = false;
        this.isShowCoupons = false;
        this.isAddCompanyUser = false;
        this.isAddCompany = false;
        this.isShowAllCompaniesUsers = false;
        this.isUpdateDetails = false;
        this.isAddAdminUser = false;
        this.isDeleteCompany = false;
        this.isAddDiscount = true;
        this.isShowDiscounts = false;
    };
    AdminComponent.prototype.deleteUser = function (user) {
        var con = confirm("Are you shure that you want to delete this user?");
        if (con == true) {
            if (user.type == "CUSTOMER") {
                this.myCustomerService.deleteCustomer(user.id, this.token);
            }
            else {
                this.myUserService.deleteUser(user, this.token);
            }
        }
    };
    AdminComponent.prototype.deleteDiscount = function (discount) {
        var con = confirm("Are you shure that you want to delete this user?");
        if (con == true) {
            this.myCodeService.deleteDiscount(discount.code, this.token);
        }
    };
    AdminComponent.prototype.updateUserDetails = function () {
        this.text = "Update login details";
        this.myUserService.updateUser(this.user, this.token);
        this.myUserService.gatUser(this.userId, this.token);
        this.showUpdateDetails = false;
        this.text = "User updated successfully!";
    };
    AdminComponent.prototype.validateUserNameAndPassword = function () {
        if (this.tempUsername != undefined && this.tempPassword != undefined) {
            if (this.tempUsername == this.myUserService.user.userName && this.tempPassword == this.myUserService.user.password) {
                this.user.id = this.userId;
                this.tempUsername = undefined;
                this.tempPassword = undefined;
                this.isUpdateDetails = false;
                this.showUpdateDetails = true;
            }
            else {
                alert("You insert wrong details");
            }
        }
        else {
            alert("you must fill the inbox");
        }
    };
    AdminComponent.prototype.ngOnInit = function () {
        this.myUserService.gatUser(this.userId, this.token);
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/components/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_coupon_cods_service__WEBPACK_IMPORTED_MODULE_11__["DiscountService"], src_app_shared_services_customer_service__WEBPACK_IMPORTED_MODULE_8__["CustomerService"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _shared_services_company_service__WEBPACK_IMPORTED_MODULE_6__["CompanyService"], src_app_shared_services_coupon_service__WEBPACK_IMPORTED_MODULE_7__["CouponService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_shared_services_message_service__WEBPACK_IMPORTED_MODULE_9__["MessageService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/components/cart/cart.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/cart/cart.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body , h2 , h3 ,p {\r\n    font-family:cursive;\r\n        text-align: center; \r\n  }\r\n  #title{\r\n      font-size: 26px;\r\n  }\r\n  div{\r\n    text-align: center;\r\n  }\r\n  #amount{\r\n    font-size:11px;\r\n    width: 12%;\r\n    padding: 7px 12px;\r\n    margin: 7px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n  }\r\n  #companyName{\r\n  text-align: right;\r\n  }\r\n  button{\r\n    font-family:cursive;\r\n    text-align: center;\r\n  padding: 15px 25px;\r\n  margin: auto;\r\n  background-color: white;\r\n  color: rgb(151, 0, 0);\r\n  text-decoration: none;\r\n  border: 1.5px solid green;\r\n  margin: 12px;\r\n  border-radius: 2em;\r\n  \r\n    }\r\n  button:hover {\r\n        background-color: green;\r\n        color: white;\r\n      }\r\n  i {\r\n        color: rgb(87, 85, 85);\r\n      }\r\n  i:hover {\r\n        color:black;\r\n      }\r\n  #button2{\r\n        font-family:cursive;\r\n        text-align: center;\r\n      padding-bottom: 3.5px ;\r\n      padding-top : 3.5px; \r\n      background-color: unset;\r\n      color: rgb(151, 0, 0);\r\n      text-decoration: none;\r\n      border: 1.5px solid green;\r\n    margin: 6px;\r\n        }\r\n  #c2 {\r\n        -webkit-margin-start: auto;\r\n                margin-inline-start: auto;\r\n        -webkit-margin-end: auto;\r\n                margin-inline-end: auto;\r\n        padding: 50px;\r\n        width: 70%;\r\n    }\r\n  table {\r\n        background-color:ghostwhite ;\r\n        position: -webkit-sticky;\r\n        position: sticky;\r\n        -webkit-margin-start: auto;\r\n                margin-inline-start: auto;\r\n        -webkit-margin-end: auto;\r\n                margin-inline-end: auto;\r\n        border-collapse: collapse;\r\n        width: 100%;\r\n        width: 40%;\r\n     }\r\n  #note {\r\n\r\n      width: 40%;\r\n      content: 500 px;\r\n      padding-inline: 400 px;\r\n      -webkit-padding-start: 6px ;\r\n              padding-inline-start: 6px ;\r\n      padding-top: 6px;\r\n      padding-bottom: 80px;\r\n      padding-right: 50px;\r\n     }\r\n  #code {\r\n\r\n      width: 27%;\r\n     }\r\n  th , td{\r\n        text-align: left;\r\n        padding: 10px;\r\n    }\r\n  input , select{\r\n  font-size:11px;\r\n    width: 30%;\r\n    padding: 12px 20px;\r\n    margin: 6px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n   \r\n  }\r\n  .description{\r\n    padding: 0px;\r\n    -webkit-padding-start: 6px ;\r\n            padding-inline-start: 6px ;\r\n    padding-top: 6px;\r\n    padding-bottom: 80px;\r\n    padding-right: 50px;\r\n    text-align : left;\r\n    \r\n     \r\n  }\r\n  #confirm {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 12px 16px;\r\n    margin: 6px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 30%;\r\n  }\r\n  #reste{\r\n      font-family:cursive;\r\n      background-color: rgb(77, 173, 80);\r\n      color: white;\r\n      padding: 2px 4px;\r\n      margin: 4px 0;\r\n      border: none;\r\n      cursor: pointer;\r\n      width: 6%;\r\n      font-size:10px;\r\n      text-align: center;\r\n      border-radius: 2em;\r\n  \r\n    }\r\n  button:hover {\r\n    opacity: 0.8;\r\n  }\r\n  form , div{\r\n      font-size: 13px;\r\n  }\r\n  p{\r\n    color: rgb(4, 2, 110); \r\n    font-size: 15px;\r\n    font-family: cursive;\r\n  }\r\n  .area{\r\n    text-align: center;\r\n        font-size:16px; \r\n     font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  }\r\n  .card-image{\r\n    width: 200px;\r\n    height: 120px;\r\n  }\r\n  .security-image{\r\n  width: 220px;\r\n  height: 30px;\r\n}\r\n  hr{\r\n    opacity: 0.3;  \r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXJ0L2NhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtRQUNmLGtCQUFrQjtFQUN4QjtFQUNBO01BQ0ksZUFBZTtFQUNuQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBRUE7SUFDRSxjQUFjO0lBQ2QsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixzQkFBc0I7RUFDeEI7RUFFQTtFQUNBLGlCQUFpQjtFQUNqQjtFQUVDO0lBQ0MsbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUNwQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCOztJQUVoQjtFQUVBO1FBQ0ksdUJBQXVCO1FBQ3ZCLFlBQVk7TUFDZDtFQUVBO1FBQ0Usc0JBQXNCO01BQ3hCO0VBQ0E7UUFDRSxXQUFXO01BQ2I7RUFFQTtRQUNFLG1CQUFtQjtRQUNuQixrQkFBa0I7TUFDcEIsc0JBQXNCO01BQ3RCLG1CQUFtQjtNQUNuQix1QkFBdUI7TUFDdkIscUJBQXFCO01BQ3JCLHFCQUFxQjtNQUNyQix5QkFBeUI7SUFDM0IsV0FBVztRQUNQO0VBRUY7UUFDRSwwQkFBeUI7Z0JBQXpCLHlCQUF5QjtRQUN6Qix3QkFBdUI7Z0JBQXZCLHVCQUF1QjtRQUN2QixhQUFhO1FBQ2IsVUFBVTtJQUNkO0VBRUE7UUFDSSw0QkFBNEI7UUFDNUIsd0JBQWdCO1FBQWhCLGdCQUFnQjtRQUNoQiwwQkFBeUI7Z0JBQXpCLHlCQUF5QjtRQUN6Qix3QkFBdUI7Z0JBQXZCLHVCQUF1QjtRQUN2Qix5QkFBeUI7UUFDekIsV0FBVztRQUNYLFVBQVU7S0FDYjtFQUVBOztNQUVDLFVBQVU7TUFDVixlQUFlO01BQ2Ysc0JBQXNCO01BQ3RCLDJCQUEwQjtjQUExQiwwQkFBMEI7TUFDMUIsZ0JBQWdCO01BQ2hCLG9CQUFvQjtNQUNwQixtQkFBbUI7S0FDcEI7RUFDQTs7TUFFQyxVQUFVO0tBQ1g7RUFHQTtRQUNHLGdCQUFnQjtRQUNoQixhQUFhO0lBQ2pCO0VBR0Y7RUFDQSxjQUFjO0lBQ1osVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixzQkFBc0I7O0VBRXhCO0VBRUE7SUFDRSxZQUFZO0lBQ1osMkJBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixpQkFBaUI7OztFQUduQjtFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2YsVUFBVTtFQUNaO0VBRUc7TUFDQyxtQkFBbUI7TUFDbkIsa0NBQWtDO01BQ2xDLFlBQVk7TUFDWixnQkFBZ0I7TUFDaEIsYUFBYTtNQUNiLFlBQVk7TUFDWixlQUFlO01BQ2YsU0FBUztNQUNULGNBQWM7TUFDZCxrQkFBa0I7TUFDbEIsa0JBQWtCOztJQUVwQjtFQUVGO0lBQ0UsWUFBWTtFQUNkO0VBRUQ7TUFDSyxlQUFlO0VBQ25CO0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLG9CQUFvQjtFQUN0QjtFQUVBO0lBQ0Usa0JBQWtCO1FBQ2QsY0FBYztLQUNqQixnREFBZ0Q7RUFDbkQ7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0VBQ2Y7RUFFQTtFQUNBLFlBQVk7RUFDWixZQUFZO0FBQ2Q7RUFFRTtJQUNFLFlBQVk7SUFDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5ICwgaDIgLCBoMyAscCB7XHJcbiAgICBmb250LWZhbWlseTpjdXJzaXZlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgfVxyXG4gICN0aXRsZXtcclxuICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gIH1cclxuICBkaXZ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAjYW1vdW50e1xyXG4gICAgZm9udC1zaXplOjExcHg7XHJcbiAgICB3aWR0aDogMTIlO1xyXG4gICAgcGFkZGluZzogN3B4IDEycHg7XHJcbiAgICBtYXJnaW46IDdweCAwO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIFxyXG4gICNjb21wYW55TmFtZXtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB9XHJcbiAgXHJcbiAgIGJ1dHRvbntcclxuICAgIGZvbnQtZmFtaWx5OmN1cnNpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTVweCAyNXB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogcmdiKDE1MSwgMCwgMCk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJvcmRlcjogMS41cHggc29saWQgZ3JlZW47XHJcbiAgbWFyZ2luOiAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJlbTtcclxuICBcclxuICAgIH1cclxuICBcclxuICAgIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpIHtcclxuICAgICAgICBjb2xvcjogcmdiKDg3LCA4NSwgODUpO1xyXG4gICAgICB9XHJcbiAgICAgIGk6aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAjYnV0dG9uMntcclxuICAgICAgICBmb250LWZhbWlseTpjdXJzaXZlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDMuNXB4IDtcclxuICAgICAgcGFkZGluZy10b3AgOiAzLjVweDsgXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xyXG4gICAgICBjb2xvcjogcmdiKDE1MSwgMCwgMCk7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgYm9yZGVyOiAxLjVweCBzb2xpZCBncmVlbjtcclxuICAgIG1hcmdpbjogNnB4O1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgI2MyIHtcclxuICAgICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgIH0gXHJcbiAgICBcclxuICAgIHRhYmxlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOmdob3N0d2hpdGUgO1xyXG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogYXV0bztcclxuICAgICAgICBtYXJnaW4taW5saW5lLWVuZDogYXV0bztcclxuICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgfVxyXG4gICAgXHJcbiAgICAgI25vdGUge1xyXG5cclxuICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgY29udGVudDogNTAwIHB4O1xyXG4gICAgICBwYWRkaW5nLWlubGluZTogNDAwIHB4O1xyXG4gICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogNnB4IDtcclxuICAgICAgcGFkZGluZy10b3A6IDZweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbiAgICAgfVxyXG4gICAgICNjb2RlIHtcclxuXHJcbiAgICAgIHdpZHRoOiAyNyU7XHJcbiAgICAgfVxyXG5cclxuICAgICBcclxuICAgICB0aCAsIHRke1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuXHJcbiAgXHJcbiAgaW5wdXQgLCBzZWxlY3R7XHJcbiAgZm9udC1zaXplOjExcHg7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gICAgbWFyZ2luOiA2cHggMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICBcclxuICB9XHJcblxyXG4gIC5kZXNjcmlwdGlvbntcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA2cHggO1xyXG4gICAgcGFkZGluZy10b3A6IDZweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICAgIHRleHQtYWxpZ24gOiBsZWZ0O1xyXG4gICAgXHJcbiAgICAgXHJcbiAgfVxyXG4gIFxyXG4gICNjb25maXJtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgICBtYXJnaW46IDZweCAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICB9XHJcbiAgXHJcbiAgICAgI3Jlc3Rle1xyXG4gICAgICBmb250LWZhbWlseTpjdXJzaXZlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzcsIDE3MywgODApO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHBhZGRpbmc6IDJweCA0cHg7XHJcbiAgICAgIG1hcmdpbjogNHB4IDA7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB3aWR0aDogNiU7XHJcbiAgICAgIGZvbnQtc2l6ZToxMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJlbTtcclxuICBcclxuICAgIH1cclxuICBcclxuICBidXR0b246aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxuICAgXHJcbiBmb3JtICwgZGl2e1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIFxyXG4gIHB7XHJcbiAgICBjb2xvcjogcmdiKDQsIDIsIDExMCk7IFxyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5hcmVhe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZToxNnB4OyBcclxuICAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLWltYWdle1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICB9XHJcblxyXG4gIC5zZWN1cml0eS1pbWFnZXtcclxuICB3aWR0aDogMjIwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG59XHJcbiAgXHJcbiAgaHJ7XHJcbiAgICBvcGFjaXR5OiAwLjM7ICBcclxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/cart/cart.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/cart/cart.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p id=\"title\">Your cart</p>\n<hr />\n\n<body>\n\n  <label style=\"float: left\">\n\n    <a (click)=\"backClicked()\">\n\n      <Back</a> </label> <h3 *ngIf=\"countItems == 0 || countItems == undefined\"> Your cart is empty</h3>\n\n        <p>{{text}}</p>\n\n        <form class=\"c2\" style=\"float: center\">\n          <p *ngIf=\"countItems > 0\">\n            you have {{countItems}} items in your cart\n          </p>\n\n          <div *ngFor=\"let c of myCartItems\">\n            <table>\n              <tr style=\"float: center\">\n                <td colspan=\"2\"><img class=\"card-image\" src={{c.image}}></td>\n                <td style=\"float: right\">\n                    <i class=\"material-icons\"  (click)=\"removeFromCart(c)\" cancel>\n                         cancel </i> \n                 </td>\n              </tr>\n              <tr>\n                <!-- <th> Name </th> -->\n                <td colspan=\"2\">{{c.title}}</td>\n              </tr>\n              <tr>\n                <th> Company </th>\n                <td>{{c.company.name}}</td>\n              </tr>\n              <tr>\n                <th> Category </th>\n                <td>{{c.category}}</td>\n              </tr>\n              <tr>\n                <th> Description </th>\n                <td colspan=\"2\">{{c.description}}</td>\n              </tr>\n              <tr>\n                <th> End date </th>\n                <td>{{c.endDate}}</td>\n              </tr>\n              <tr>\n                <th> Amount availble </th>\n                <td>{{c.amount}}</td>\n              </tr>\n\n              <tr>\n                <th>Price </th>\n                <td style=\"color: green\">{{c.price}}$</td>\n             \n              </tr>\n            </table>\n            <input id=\"note\" type=\"text\" placeholder=\"Note: \" name=\"note\" [(ngModel)]=\"purchase.note\">\n            <br>\n            <input id=\"code\" type=\"text\" placeholder=\"Coupon Code: \" name=\"code\" [(ngModel)]=\"discountCode\">\n            <button id=\"button2\" (click)=\"getDiscount()\">Enter</button>\n            <button id=\"button2\" (click)=\"cleanDiscount()\">Clean</button>\n            <br>\n            Amount: <input id=\"amount\" type=\"number\" placeholder=\"Choose amount \" name=\"amount\"\n            [(ngModel)]=\"purchase.amount\">\n            <br>\n            <h4 *ngIf=\"discount==0\">Total price: {{(c.price-((c.price*discount)/100))*purchase.amount}} $</h4>\n            <p *ngIf=\"discount!=0\" style=\"color: red\">Your total price: {{(c.price-((c.price*code.discount)/100))*purchase.amount}} $</p>\n            <img class=\"security-image\" src=\"https://user-images.githubusercontent.com/52581/44384465-5e312780-a570-11e8-9336-7b54978a9e64.png\">\n            <br>\n            <button id=\"button2\" (click)=\"purchaseCoupon(c)\">Buy now</button>\n            <br>\n            <!-- <br>\n            <button id=\"button2\" (click)=\"removeFromCart(c)\">Remove</button> -->\n          </div>\n          <label>\n            <!-- <button id=\"button2\" (click)=\"backClicked()\">Back</button> -->\n          </label>\n        </form>\n        \n</body>"

/***/ }),

/***/ "./src/app/components/cart/cart.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/cart/cart.component.ts ***!
  \***************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_models_purchase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/purchase */ "./src/app/shared/models/purchase.ts");
/* harmony import */ var src_app_shared_services_purchase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/purchase.service */ "./src/app/shared/services/purchase.service.ts");
/* harmony import */ var src_app_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/cart.service */ "./src/app/shared/services/cart.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_services_customer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/customer.service */ "./src/app/shared/services/customer.service.ts");
/* harmony import */ var src_app_shared_services_coupon_cods_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/coupon-cods.service */ "./src/app/shared/services/coupon-cods.service.ts");








var CartComponent = /** @class */ (function () {
    function CartComponent(myCodeService, myPurchaseService, myCustomerService, myCartService, location) {
        this.myCodeService = myCodeService;
        this.myPurchaseService = myPurchaseService;
        this.myCustomerService = myCustomerService;
        this.myCartService = myCartService;
        this.location = location;
        this.token = sessionStorage.getItem("token");
        this.customerId = parseInt(sessionStorage.getItem("id"));
        this.purchase = new src_app_shared_models_purchase__WEBPACK_IMPORTED_MODULE_2__["Purchase"]();
        this.purchase.amount = 1;
        this.discount = 0;
    }
    CartComponent.prototype.getCart = function () {
        this.myCartItems = this.myCartService.getLocal();
    };
    CartComponent.prototype.getDiscount = function () {
        if (this.discountCode) {
            this.code = this.myCodeService.getCouponCode(this.discountCode, this.token);
            this.discount = this.code.discount;
        }
    };
    CartComponent.prototype.cleanDiscount = function () {
        this.discountCode = "";
    };
    CartComponent.prototype.removeFromCart = function (coupon) {
        this.myCartService.removeFromCart(coupon);
        this.myCartItems = this.myCartService.getLocal();
        this.countItems = this.myCartService.getCountItems();
    };
    CartComponent.prototype.purchaseCoupon = function (coupon) {
        this.purchase.customer = this.customer;
        this.purchase.coupon = coupon;
        this.purchase.date = new Date();
        this.purchase.discountCode = this.code.code;
        this.purchase.totalPrice = (((coupon.price * this.code.discount) / 100) * this.purchase.amount);
        this.purchseId = this.myPurchaseService.createPurchase(this.token, this.purchase);
        this.removeFromCart(coupon);
    };
    // - ((coupon.price * this.code.discount) / 100)
    CartComponent.prototype.backClicked = function () {
        this.location.back();
    };
    CartComponent.prototype.ngOnInit = function () {
        this.customer = this.myCustomerService.getCustomer(this.customerId, this.token);
        this.getCart();
        this.countItems = this.myCartService.getCountItems();
    };
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/components/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/components/cart/cart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_coupon_cods_service__WEBPACK_IMPORTED_MODULE_7__["DiscountService"], src_app_shared_services_purchase_service__WEBPACK_IMPORTED_MODULE_3__["PurchaseService"], src_app_shared_services_customer_service__WEBPACK_IMPORTED_MODULE_6__["CustomerService"], src_app_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/components/company/company.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/company/company.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body , h2 , h3 ,p {\r\n    font-family:cursive;\r\n        text-align: center; \r\n}\r\n\r\n.card-image{\r\n  width: 200px;\r\n  height: 120px ;\r\n}\r\n\r\n#companyName{\r\n  text-align: right;\r\n}\r\n\r\nbutton{\r\n    font-family:cursive;\r\n    text-align: center;\r\n    padding: 8px 14px;\r\n    margin: auto;\r\n  background-color: white;\r\n  color: rgb(151, 0, 0);\r\n  text-decoration: none;\r\n  border: 1.5px solid green;\r\nmargin: 12px;\r\nborder-radius: 2em;\r\n\r\n    }\r\n\r\nbutton:hover {\r\n        background-color: green;\r\n        color: white;\r\n      }\r\n\r\n#button2 ,#Go{\r\n        font-family:cursive;\r\n        text-align: center;\r\n      padding-bottom: 3.5px ;\r\n      padding-top : 3.5px; \r\n      margin: auto;\r\n      background-color: unset;\r\n      color: rgb(151, 0, 0);\r\n      text-decoration: none;\r\n      border: 1.5px solid green;\r\n    margin: 6px;\r\n        }\r\n\r\n#c2 {\r\n        -webkit-margin-after: 18px;\r\n                margin-block-end: 18px;\r\n        -webkit-padding-before: 18px;\r\n                padding-block-start: 18px;\r\n        -webkit-padding-after: 18px;\r\n                padding-block-end: 18px;\r\n        -webkit-margin-start: auto;\r\n                margin-inline-start: auto;\r\n        -webkit-margin-end: auto;\r\n                margin-inline-end: auto;\r\n        /* padding: 50px; */\r\n        font-family:Arial, Helvetica, sans-serif;\r\n    }\r\n\r\ntable {\r\n      border-block-start-width: 0.2cm;\r\n        background-color:white ;\r\n        position: -webkit-sticky;\r\n        position: sticky;\r\n        -webkit-margin-start: auto;\r\n                margin-inline-start: auto;\r\n        -webkit-margin-end: auto;\r\n                margin-inline-end: auto;\r\n        border-collapse: collapse;\r\n        width: 100%;\r\n     }\r\n\r\nth , td{\r\n        text-align: left;\r\n        padding: 10px;\r\n        \r\n    }\r\n\r\ntable {\r\n        border-collapse: collapse;\r\n        width: 40%;\r\n        text-align: left;\r\n      }\r\n\r\ndiv{\r\n        font-family:Arial, Helvetica, sans-serif;\r\n      }\r\n\r\ninput , select{\r\n   font-size:11px;\r\n    width: 30%;\r\n    padding: 12px 20px;\r\n    margin: 6px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n   \r\n  }\r\n\r\n#p1{\r\n    margin: 1px;\r\n  }\r\n\r\n#select{\r\n    width: 15%;\r\n    padding-bottom: 6px ;\r\n    padding-top : 8px; \r\n    margin: 3px;\r\n  }\r\n\r\n.description{\r\n    padding: 0px;\r\n    -webkit-padding-start: 6px ;\r\n            padding-inline-start: 6px ;\r\n    padding-top: 6px;\r\n    padding-bottom: 80px;\r\n    padding-right: 50px;\r\n    text-align : left;\r\n  }\r\n\r\n#confirm {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 12px 16px;\r\n    margin: 6px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 30%;\r\n  }\r\n\r\n#reste{\r\n      font-family:cursive;\r\n      background-color: rgb(77, 173, 80);\r\n      color: white;\r\n      padding: 2px 4px;\r\n      margin: 4px 0;\r\n      border: none;\r\n      cursor: pointer;\r\n      width: 6%;\r\n      font-size:10px;\r\n      text-align: center;\r\n      border-radius: 2em;\r\n\r\n    }\r\n\r\nbutton:hover {\r\n    opacity: 0.8;\r\n  }\r\n\r\nform{\r\n      font-size: 13px;\r\n  }\r\n\r\ndiv, header{\r\n    font-family: cursive;\r\n      text-align:center;\r\n    }\r\n\r\nh1{\r\n    color: rgba(151, 0, 0, 0.815);\r\n    /* background-color: aliceblue; */\r\n    padding: 2px;\r\n    font-size: 35px;\r\n    font-family:  cursive;\r\n  }\r\n\r\np{\r\n      color: rgb(4, 2, 110); \r\n      font-size: 15px;\r\n      font-family: cursive;\r\n    }\r\n\r\n#home{\r\n    float: left;\r\n  }\r\n\r\n#login{\r\n    float: right;\r\n  }\r\n\r\n.area{\r\n    text-align: center;\r\n        font-size:16px; \r\n     font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n  }\r\n\r\nhr{\r\nopacity: 0.3;  \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wYW55L2NvbXBhbnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtRQUNmLGtCQUFrQjtBQUMxQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVFO0lBQ0UsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtFQUNkLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQUMzQixZQUFZO0FBQ1osa0JBQWtCOztJQUVkOztBQUVBO1FBQ0ksdUJBQXVCO1FBQ3ZCLFlBQVk7TUFDZDs7QUFFQTtRQUNFLG1CQUFtQjtRQUNuQixrQkFBa0I7TUFDcEIsc0JBQXNCO01BQ3RCLG1CQUFtQjtNQUNuQixZQUFZO01BQ1osdUJBQXVCO01BQ3ZCLHFCQUFxQjtNQUNyQixxQkFBcUI7TUFDckIseUJBQXlCO0lBQzNCLFdBQVc7UUFDUDs7QUFFRjtRQUNFLDBCQUFzQjtnQkFBdEIsc0JBQXNCO1FBQ3RCLDRCQUF5QjtnQkFBekIseUJBQXlCO1FBQ3pCLDJCQUF1QjtnQkFBdkIsdUJBQXVCO1FBQ3ZCLDBCQUF5QjtnQkFBekIseUJBQXlCO1FBQ3pCLHdCQUF1QjtnQkFBdkIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQix3Q0FBd0M7SUFDNUM7O0FBRUE7TUFDRSwrQkFBK0I7UUFDN0IsdUJBQXVCO1FBQ3ZCLHdCQUFnQjtRQUFoQixnQkFBZ0I7UUFDaEIsMEJBQXlCO2dCQUF6Qix5QkFBeUI7UUFDekIsd0JBQXVCO2dCQUF2Qix1QkFBdUI7UUFDdkIseUJBQXlCO1FBQ3pCLFdBQVc7S0FDZDs7QUFFQTtRQUNHLGdCQUFnQjtRQUNoQixhQUFhOztJQUVqQjs7QUFDQTtRQUNJLHlCQUF5QjtRQUN6QixVQUFVO1FBQ1YsZ0JBQWdCO01BQ2xCOztBQUVBO1FBQ0Usd0NBQXdDO01BQzFDOztBQUdOO0dBQ0csY0FBYztJQUNiLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsc0JBQXNCOztFQUV4Qjs7QUFFQTtJQUNFLFdBQVc7RUFDYjs7QUFFQTtJQUNFLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLFdBQVc7RUFDYjs7QUFFQTtJQUNFLFlBQVk7SUFDWiwyQkFBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLFVBQVU7RUFDWjs7QUFFRztNQUNDLG1CQUFtQjtNQUNuQixrQ0FBa0M7TUFDbEMsWUFBWTtNQUNaLGdCQUFnQjtNQUNoQixhQUFhO01BQ2IsWUFBWTtNQUNaLGVBQWU7TUFDZixTQUFTO01BQ1QsY0FBYztNQUNkLGtCQUFrQjtNQUNsQixrQkFBa0I7O0lBRXBCOztBQUVGO0lBQ0UsWUFBWTtFQUNkOztBQUVBO01BQ0ksZUFBZTtFQUNuQjs7QUFFQTtJQUNFLG9CQUFvQjtNQUNsQixpQkFBaUI7SUFDbkI7O0FBRUY7SUFDRSw2QkFBNkI7SUFDN0IsaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixlQUFlO0lBQ2YscUJBQXFCO0VBQ3ZCOztBQUNFO01BQ0UscUJBQXFCO01BQ3JCLGVBQWU7TUFDZixvQkFBb0I7SUFDdEI7O0FBRUY7SUFDRSxXQUFXO0VBQ2I7O0FBQ0E7SUFDRSxZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxrQkFBa0I7UUFDZCxjQUFjO0tBQ2pCLGdEQUFnRDtFQUNuRDs7QUFFQTtBQUNGLFlBQVk7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tcGFueS9jb21wYW55LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5ICwgaDIgLCBoMyAscCB7XHJcbiAgICBmb250LWZhbWlseTpjdXJzaXZlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbn1cclxuXHJcbi5jYXJkLWltYWdle1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDEyMHB4IDtcclxufVxyXG5cclxuI2NvbXBhbnlOYW1le1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4gIGJ1dHRvbntcclxuICAgIGZvbnQtZmFtaWx5OmN1cnNpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA4cHggMTRweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogcmdiKDE1MSwgMCwgMCk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGJvcmRlcjogMS41cHggc29saWQgZ3JlZW47XHJcbm1hcmdpbjogMTJweDtcclxuYm9yZGVyLXJhZGl1czogMmVtO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBidXR0b246aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgI2J1dHRvbjIgLCNHb3tcclxuICAgICAgICBmb250LWZhbWlseTpjdXJzaXZlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDMuNXB4IDtcclxuICAgICAgcGFkZGluZy10b3AgOiAzLjVweDsgXHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XHJcbiAgICAgIGNvbG9yOiByZ2IoMTUxLCAwLCAwKTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBib3JkZXI6IDEuNXB4IHNvbGlkIGdyZWVuO1xyXG4gICAgbWFyZ2luOiA2cHg7XHJcbiAgICAgICAgfVxyXG4gIFxyXG4gICAgICAjYzIge1xyXG4gICAgICAgIG1hcmdpbi1ibG9jay1lbmQ6IDE4cHg7XHJcbiAgICAgICAgcGFkZGluZy1ibG9jay1zdGFydDogMThweDtcclxuICAgICAgICBwYWRkaW5nLWJsb2NrLWVuZDogMThweDtcclxuICAgICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiBhdXRvO1xyXG4gICAgICAgIC8qIHBhZGRpbmc6IDUwcHg7ICovXHJcbiAgICAgICAgZm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIH0gXHJcbiAgICBcclxuICAgIHRhYmxlIHtcclxuICAgICAgYm9yZGVyLWJsb2NrLXN0YXJ0LXdpZHRoOiAwLjJjbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlIDtcclxuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IGF1dG87XHJcbiAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICB9XHJcbiAgICBcclxuICAgICB0aCAsIHRke1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHRhYmxlIHtcclxuICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIGRpdntcclxuICAgICAgICBmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgICB9XHJcblxyXG5cclxuaW5wdXQgLCBzZWxlY3R7XHJcbiAgIGZvbnQtc2l6ZToxMXB4O1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgIG1hcmdpbjogNnB4IDA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgXHJcbiAgfVxyXG5cclxuICAjcDF7XHJcbiAgICBtYXJnaW46IDFweDtcclxuICB9XHJcblxyXG4gICNzZWxlY3R7XHJcbiAgICB3aWR0aDogMTUlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDZweCA7XHJcbiAgICBwYWRkaW5nLXRvcCA6IDhweDsgXHJcbiAgICBtYXJnaW46IDNweDtcclxuICB9XHJcblxyXG4gIC5kZXNjcmlwdGlvbntcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiA2cHggO1xyXG4gICAgcGFkZGluZy10b3A6IDZweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICAgIHRleHQtYWxpZ24gOiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgI2NvbmZpcm0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICAgIG1hcmdpbjogNnB4IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gIH1cclxuXHJcbiAgICAgI3Jlc3Rle1xyXG4gICAgICBmb250LWZhbWlseTpjdXJzaXZlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzcsIDE3MywgODApO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIHBhZGRpbmc6IDJweCA0cHg7XHJcbiAgICAgIG1hcmdpbjogNHB4IDA7XHJcbiAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB3aWR0aDogNiU7XHJcbiAgICAgIGZvbnQtc2l6ZToxMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJlbTtcclxuXHJcbiAgICB9XHJcbiAgXHJcbiAgYnV0dG9uOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICB9XHJcblxyXG4gIGZvcm17XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcblxyXG4gIGRpdiwgaGVhZGVye1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgfVxyXG4gIFxyXG4gIGgxe1xyXG4gICAgY29sb3I6IHJnYmEoMTUxLCAwLCAwLCAwLjgxNSk7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7ICovXHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBmb250LWZhbWlseTogIGN1cnNpdmU7XHJcbiAgfVxyXG4gICAgcHtcclxuICAgICAgY29sb3I6IHJnYig0LCAyLCAxMTApOyBcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIH1cclxuXHJcbiAgI2hvbWV7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcbiAgI2xvZ2lue1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICAuYXJlYXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6MTZweDsgXHJcbiAgICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxuXHJcbiAgaHJ7XHJcbm9wYWNpdHk6IDAuMzsgIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/company/company.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/company/company.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p class=\"area\">Companies area</p>\n\n<body>\n  <label style=\"float: left\">Hello {{myUserService.user.userName}} :)</label> <label style=\"float:right;\"\n    id=\"companyName\">Your company is: {{myUserService.user.company.name}}</label>\n\n  <br>\n  <p>What do you want to do next?</p>\n\n  <!-- Nevigation -->\n  <div>\n    <button (click)=\"showUserDetails()\">Update login details</button>\n    <button (click)=\"showFormCreate()\">Create coupon</button>\n    <button (click)=\"showCoupons()\">Coupons of company: {{myUserService.user.company.name}}</button>\n    <button (click)=\"getPurchases()\">Purchases of company: {{myUserService.user.company.name}}</button>\n  </div>\n\n\n  <!-- Company coupons -->\n  <form id=\"c2\" *ngIf=\"isShowCoupons\">\n    <h3>Coupons of {{myUserService.user.company.name}}</h3>\n    <h2>{{text}}</h2>\n    Filter by: <select name=\"category\" [(ngModel)]=\"selected\" placeholder=\"All\">\n      <option>All</option>\n      <option>Category</option>\n      <option>Max price</option>\n    </select>\n\n    <label id=\"p1\" *ngIf=\"selected=='All'\">\n      <button id=\"Go\" (click)=\"showCoupons()\">Search</button>\n    </label>\n\n    <p id=\"p1\" *ngIf=\"selected=='Category'\">\n      <select id=\"select\" name=\"category\" [(ngModel)]=\"category\" placeholder=\"gg\">\n        <option *ngFor=\"let c of categories\"> {{ c }} </option>\n      </select>\n      <button id=\"Go\" (click)=\"showCouponsByCategory()\">Search</button>\n    </p>\n\n    <p id=\"p1\" *ngIf=\"selected=='Max price'\">\n      <input id=\"select\" type=\"text\" placeholder=\"max price..\" name=\"maxPrice\" [(ngModel)]=\"maxPrice\">\n      <button id=\"Go\" (click)=\"showCouponsByMaxPrice()\">Search</button>\n    </p>\n\n    <div *ngFor=\"let c of myCouponService.wrapper.coupons; index as i\">\n      <p>Coupon No {{i+1}}</p>\n      <table>\n        <tr>\n          <th> Image </th>\n          <td><img class=\"card-image\" src={{c.image}}></td>\n        </tr>\n        <tr>\n          <th> ID </th>\n          <td id=\"gatId\">{{c.id}}</td>\n        </tr>\n        <tr>\n          <th> Name </th>\n          <td>{{c.title}}</td>\n        </tr>\n        <tr>\n          <th> Company</th>\n          <td>{{c.company.name}}</td>\n        </tr>\n        <tr>\n          <th> Category </th>\n          <td>{{c.category}}</td>\n        </tr>\n        <tr>\n          <th> Description </th>\n          <td colspan=\"2\">{{c.description}}</td>\n        </tr>\n        <tr>\n          <th> Start date </th>\n          <td>{{c.startDate}}</td>\n        </tr>\n        <tr>\n          <th> End date </th>\n          <td>{{c.endDate}}</td>\n        </tr>\n        <tr>\n          <th> Price </th>\n          <td>{{c.price}} $</td>\n        </tr>\n        <tr>\n          <th> Amount </th>\n          <td>{{c.amount}}</td>\n        </tr>\n      </table>\n      <button id=\"button2\" (click)=\"showFormUpdate(c)\">Update coupon</button>\n      <span></span>\n      <button id=\"button2\" (click)=\"showFormDelete(c)\">Delete coupon</button>\n      <br>\n    </div>\n\n  </form>\n\n\n  <!-- Create coupon -->\n  <form class=\"create\" *ngIf=\"isCreate\" style=\"color: rgb(71, 11, 11)\">\n    <h3>Create coupon</h3>\n    <br>\n    category<br>\n    <select name=\"category\" [(ngModel)]=\"coupon.category\" placeholder=\"gg\">\n      <option *ngFor=\"let c of categories\">{{c}}</option>\n    </select>\n    <br>\n    title<br><input type=\"text\" placeholder=\"text.. (minimum 2 character)\" name=\"title\" [(ngModel)]=\"coupon.title\">\n    <br>\n    description<br><input type=\"text\" placeholder=\"text..(minimum 15 character)\" name=\"description\"\n      [(ngModel)]=\"coupon.description\">\n    <br>\n    start date<br><input type=\"date\" placeholder=\"choose date \" name=\"startDate\" [(ngModel)]=\"coupon.startDate\">\n    <br>\n    end date<br><input type=\"date\" name=\"endDate\" [(ngModel)]=\"coupon.endDate\">\n    <br>\n    amount<br><input type=\"number\" placeholder=\"choose amount of the coupon\" name=\"amount\" [(ngModel)]=\"coupon.amount\">\n    <br>\n    price<br><input type=\"number\" placeholder=\"choose number above 0\" name=\"price\" [(ngModel)]=\"coupon.price\">\n    <br>\n    image<br><input type=\"text\" placeholder=\"text for now\" name=\"image\" [(ngModel)]=\"coupon.image\">\n    <br>\n    <input id=\"reste\" value=\"reset\" type=\"reset\" />\n    <br>\n    <button id=\"confirm\" (click)=\"createCoupon()\">Confirm</button>\n  </form>\n  <h2 *ngIf=\"isCreated\">{{text}}</h2>\n\n\n  <!-- Update coupon -->\n  <form class=\"create\" *ngIf=\"isUpdate\" style=\"color: rgb(71, 11, 11)\">\n    <h3>Update coupon</h3>\n    <br>\n    Deacription<br><input type=\"text\" placeholder={{coupon.deacription}} name=\"description\"\n      [(ngModel)]=\"coupon.description\">\n    <br>\n    End date<br><input type=\"date\" placeholder={{coupon.endDate}} name=\"endDate\" [(ngModel)]=\"coupon.endDate\">\n    <br>\n    Amount<br><input type=\"number\" placeholder={{coupon.amount}} name=\"amount\" [(ngModel)]=\"coupon.amount\">\n    <br>\n    Price<br><input type=\"number\" placeholder={{coupon.price}} name=\"price\" [(ngModel)]=\"coupon.price\">\n    <br>\n    Image<br><input type=\"text\" placeholder={{coupon.image}} name=\"image\" [(ngModel)]=\"coupon.image\">\n    <br>\n    <br>\n    <input id=\"reste\" value=\"reset\" type=\"reset\" />\n    <br>\n    <button id=\"confirm\" (click)=\"updateCoupon()\">Confirm</button>\n    <br>\n  </form>\n  <h2 *ngIf=\"isUpdated\">{{text}}</h2>\n\n\n  <!-- Delete coupon -->\n  <div *ngIf=\"isDelete\" style=\"color: rgb(71, 11, 11)\">\n    <br>\n    <h3>Are you shure that you want to delete coupon '{{coupon.title}}' ?</h3>\n    <button id=\"confirm\" (click)=\"deleteCoupon()\">Confirm delete the coupon </button>\n    <br>\n  </div>\n  <h2 *ngIf=\"isDeleted\">{{text}}</h2>\n\n\n  <!-- Purchases -->\n  <div id=\"c2\" *ngIf=\"isShowPurchases\">\n    <h3>Purchases of {{myUserService.user.company.name}}</h3>\n    <label>\n      <table>\n        <tr id=\"center\" border=\"1\">\n          <th> No </th>\n          <th> Purchase Id</th>\n          <th> Coupon Id</th>\n          <th> Customer </th>\n          <th> Amount</th>\n        </tr>\n        <tr *ngFor=\"let p of myPurchaseService.wrapper.purchases; index as i\">\n          <td> {{i+1}} </td>\n          <td>{{p.id}}</td>\n          <td>{{p.coupon.id}}</td>\n          <td>{{p.customer.firstName}} {{p.customer.lastName}}</td>\n          <td>{{p.amount}}</td>\n        </tr>\n      </table>\n      <br>\n      <label *ngIf=\"showCustomer\">\n        <table>\n          <tr>\n            <th> First name </th>\n            <td>{{customer.firstName}}</td>\n          </tr>\n          <tr>\n            <th> Last name </th>\n            <td>{{customer.lastName}}</td>\n          </tr>\n          <tr>\n            <th> Email address </th>\n            <td>{{customer.email}}</td>\n          </tr>\n          <tr>\n            <th> Phone number </th>\n            <td>{{customer.phoneNumber}}</td>\n          </tr>\n        </table>\n        <button id=\"details\" (click)=\"showFormUpdate()\">Update details</button>\n        <br>\n      </label>\n      <br>\n    </label>\n  </div>\n\n\n  <!-- Update details / step 1 -->\n  <form id=\"c2\" *ngIf=\"isUpdateDetails\" style=\"color: rgb(71, 11, 11)\">\n    <h3>Update login details</h3>\n    <p id=\"text\">First, insert your current details\n    </p>\n    <input type=\"text\" placeholder=\"your current username\" name=\"username\" [(ngModel)]=\"tempUsername\">\n    <br>\n    <input type=\"password\" placeholder=\"your current password\" name=\"password\" [(ngModel)]=\"tempPassword\">\n    <br>\n    <button id=\"confirm\" type=\"submit\" (click)=\"validateUserNameAndPassword()\">Continue</button>\n  </form>\n\n\n  <!-- Update details / step 2 -->\n  <form id=\"c2\" *ngIf=\"showUpdateDetails\">\n    <h3>Update login details</h3>\n    <p id=\"text\"> Choose new username and passowrd\n    </p>\n    <input type=\"text\" placeholder=\"Choose new username\" name=\"username\" [(ngModel)]=\"user.userName\">\n    <br>\n    <input type=\"password\" placeholder=\"Choose new password\" name=\"password\" [(ngModel)]=\"user.password\">\n    <br>\n    <button id=\"confirm\" type=\"submit\" (click)=\"updateUserDetails()\">confirm update</button>\n  </form>\n\n\n</body>\n\n<!-- Purchases -option2 -->\n<!-- <form id=\"c2\" *ngIf=\"isShowPurchases\" style=\"color: rgb(71, 11, 11)\">\n      <h3>Purchases of '{{myCompanyService.wrapper.company.name}}'</h3>\n      <div *ngFor=\"let p of myPurchaseService.wrapper.purchases; index as i\">\n        <p>Purchase No {{i+1}}</p>\n        <table>\n          <tr>\n            <th> ID </th>\n            <td id=\"gatId\">{{p.id}}</td>\n          </tr>\n          <tr>\n            <th> Coupon Id </th>\n            <td>{{p.couponId}}</td>\n          </tr>\n          <tr>\n            <th> Customer Id </th>\n            <td>{{p.customerId}}</td>\n          </tr>\n          <tr>\n            <th> Amount </th>\n            <td>{{p.amount}}</td>\n          </tr>\n        </table>\n        <button id=\"button2\" (click)=\"showFormDeletePurchase(p.id)\">Cancel Purchase</button>\n        <br>\n      </div>\n    </form> -->"

/***/ }),

/***/ "./src/app/components/company/company.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/company/company.component.ts ***!
  \*********************************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_coupon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/coupon */ "./src/app/shared/models/coupon.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _shared_services_categories_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/categories.service */ "./src/app/shared/services/categories.service.ts");
/* harmony import */ var _shared_models_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/models/user */ "./src/app/shared/models/user.ts");
/* harmony import */ var _shared_services_company_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/services/company.service */ "./src/app/shared/services/company.service.ts");
/* harmony import */ var _shared_services_coupon_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/services/coupon.service */ "./src/app/shared/services/coupon.service.ts");
/* harmony import */ var _shared_services_purchase_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/services/purchase.service */ "./src/app/shared/services/purchase.service.ts");











var CompanyComponent = /** @class */ (function () {
    function CompanyComponent(myCompanyService, myCouponService, myPurchaseService, http, router, myUserService, myCategories) {
        this.myCompanyService = myCompanyService;
        this.myCouponService = myCouponService;
        this.myPurchaseService = myPurchaseService;
        this.http = http;
        this.router = router;
        this.myUserService = myUserService;
        this.myCategories = myCategories;
        this.coupon = new _shared_models_coupon__WEBPACK_IMPORTED_MODULE_2__["Coupon"]();
        this.companyDeatails = null;
        this.coupons = [];
        this.index = 1;
        this.isCreate = false;
        this.isUpdate = false;
        this.isShowCoupons = false;
        this.isShowPurchases = false;
        this.isCreated = false;
        this.isUpdated = false;
        this.isDelete = false;
        this.isDeleted = false;
        this.isUpdateDetails = false;
        this.showUpdateDetails = false;
        this.categories = this.myCategories.categories;
        this.token = sessionStorage.getItem("token");
        this.userId = parseInt(sessionStorage.getItem("id"));
        this.companyId = parseInt(sessionStorage.getItem("companyId"));
        this.user = new _shared_models_user__WEBPACK_IMPORTED_MODULE_7__["User"]();
    }
    CompanyComponent.prototype.showCoupons = function () {
        this.myCouponService.getCouponsByCompany(this.companyId, this.token);
        this.showFormCoupons();
    };
    CompanyComponent.prototype.showCouponsByCategory = function () {
        this.myCouponService.getCouponsByCompanyAndCategory(this.category, this.companyId, this.token);
        this.showFormCoupons();
    };
    CompanyComponent.prototype.showCouponsByMaxPrice = function () {
        this.myCouponService.getCouponsByCompanyAndMaxPrice(this.maxPrice, this.companyId, this.token);
        this.showFormCoupons();
    };
    CompanyComponent.prototype.createCoupon = function () {
        this.coupon.inStock = false;
        this.myCouponService.createCoupon(this.token, this.coupon);
        this.text = "coupon created successfully!";
        this.isCreate = false;
        this.isCreated = true;
    };
    CompanyComponent.prototype.updateCoupon = function () {
        this.myCouponService.updateCoupon(this.token, this.coupon);
        this.text = "coupon updated successfully!";
        this.isUpdated = true;
        this.isUpdate = false;
    };
    CompanyComponent.prototype.deleteCoupon = function () {
        this.myCouponService.deleteCoupon(this.coupon.id, this.token);
        this.text = "coupon deleted successfully!";
        this.isDeleted = true;
        this.isDelete = false;
    };
    CompanyComponent.prototype.getPurchases = function () {
        this.myPurchaseService.getPurchasesByCompany(this.companyId, this.token);
        this.showFormPurchases();
    };
    CompanyComponent.prototype.updateUserDetails = function () {
        this.user.type = "COMPANY";
        this.myUserService.updateUser(this.user, this.token);
        this.myUserService.gatUser(this.userId, this.token);
        this.showUpdateDetails = false;
        this.text = "User updated successfully!";
    };
    CompanyComponent.prototype.validateUserNameAndPassword = function () {
        if (this.tempUsername != undefined && this.tempPassword != undefined) {
            if (this.tempUsername == this.myUserService.user.userName && this.tempPassword == this.myUserService.user.password) {
                this.user.id = this.userId;
                this.tempUsername = undefined;
                this.tempPassword = undefined;
                this.isUpdateDetails = false;
                this.showUpdateDetails = true;
            }
            else {
                alert("You insert wrong details");
            }
        }
        else {
            alert("you must fill the inbox");
        }
    };
    CompanyComponent.prototype.showUserDetails = function () {
        this.isUpdateDetails = true;
        this.showUpdateDetails = false;
        this.isCreate = false;
        this.isCreated = false;
        this.isUpdate = false;
        this.isUpdated = false;
        this.isDelete = false;
        this.isDeleted = false;
        this.isShowCoupons = false;
        this.isShowPurchases = false;
    };
    CompanyComponent.prototype.showFormCreate = function () {
        this.coupon = new _shared_models_coupon__WEBPACK_IMPORTED_MODULE_2__["Coupon"]();
        this.isCreate = true;
        this.isCreated = false;
        this.isDelete = false;
        this.isDeleted = false;
        this.isUpdate = false;
        this.isUpdated = false;
        this.isShowCoupons = false;
        this.isShowPurchases = false;
        this.isUpdateDetails = false;
    };
    CompanyComponent.prototype.showFormUpdate = function (c) {
        this.coupon = c;
        this.isUpdate = true;
        this.isCreate = false;
        this.isCreated = false;
        this.isUpdated = false;
        this.isDelete = false;
        this.isDeleted = false;
        this.isShowCoupons = false;
        this.isShowPurchases = false;
        this.isUpdateDetails = false;
    };
    CompanyComponent.prototype.showFormDelete = function (coupon) {
        this.coupon = coupon;
        this.isDelete = true;
        this.isDeleted = false;
        this.isUpdate = false;
        this.isUpdated = false;
        this.isCreate = false;
        this.isCreated = false;
        this.isShowCoupons = false;
        this.isShowPurchases = false;
        this.isUpdateDetails = false;
    };
    CompanyComponent.prototype.showFormCoupons = function () {
        this.isShowCoupons = true;
        this.isCreate = false;
        this.isCreated = false;
        this.isUpdate = false;
        this.isUpdated = false;
        this.isDelete = false;
        this.isDeleted = false;
        this.isShowPurchases = false;
        this.isUpdateDetails = false;
    };
    CompanyComponent.prototype.showFormPurchases = function () {
        this.isShowPurchases = true;
        this.isCreate = false;
        this.isCreated = false;
        this.isUpdate = false;
        this.isUpdated = false;
        this.isDelete = false;
        this.isDeleted = false;
        this.isShowCoupons = false;
        this.isUpdateDetails = false;
    };
    CompanyComponent.prototype.ngOnInit = function () {
        this.myUserService.gatUser(this.userId, this.token);
        this.myCompanyService.getCompany(this.companyId, this.token);
        this.myUserService.isCompany = true;
    };
    CompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-company',
            template: __webpack_require__(/*! ./company.component.html */ "./src/app/components/company/company.component.html"),
            styles: [__webpack_require__(/*! ./company.component.css */ "./src/app/components/company/company.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_company_service__WEBPACK_IMPORTED_MODULE_8__["CompanyService"], _shared_services_coupon_service__WEBPACK_IMPORTED_MODULE_9__["CouponService"], _shared_services_purchase_service__WEBPACK_IMPORTED_MODULE_10__["PurchaseService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], _shared_services_categories_service__WEBPACK_IMPORTED_MODULE_6__["CategoriesService"]])
    ], CompanyComponent);
    return CompanyComponent;
}());



/***/ }),

/***/ "./src/app/components/customer/customer.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/customer/customer.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body , h2 , h3 ,p{\r\n  font-family:cursive;\r\n      text-align: center; \r\n}\r\n\r\n.example-card {\r\n  max-width: 200px;\r\n  margin: 6px;\r\n  font-display: initial;\r\n  float: left;\r\n}\r\n\r\n.example-header-image {\r\n  background-image: url(\"https://img.etimg.com/thumb/msid-65402560,width-643,imgsize-111756,resizemode-4/mcdonalds.jpg\");\r\n  background-size: cover;\r\n}\r\n\r\n.card-image{\r\n  width: 200px;\r\n  height: 120px;\r\n}\r\n\r\n.price{\r\n  color: rgb(0, 146, 151);\r\n}\r\n\r\na , button{\r\n  font-family:cursive;\r\n  text-align: center;\r\n  padding: 8px 14px;\r\nmargin: auto;\r\nbackground-color: white;\r\ncolor: rgb(151, 0, 0);\r\ntext-decoration: none;\r\nmargin: 12px;\r\nborder:0px;\r\nborder-radius: 2em;\r\n\r\n  }\r\n\r\n.material-icons {\r\n     font-size: 24px;\r\n   }\r\n\r\nbutton:hover {\r\n      background-color: green;\r\n      color: white;\r\n    }\r\n\r\n#details{\r\n      font-family:cursive;\r\n      text-align: center;\r\n    padding-bottom: 3.5px ;\r\n    padding-top : 3.5px; \r\n    /* margin: auto; */\r\n    background-color: unset;\r\n    color: rgb(151, 0, 0);\r\n    text-decoration: none;\r\n    border: 1.5px solid green;\r\n  margin: 6px;\r\n      }\r\n\r\n#c2 {\r\n      /* margin-block-end: 18px;\r\n      padding-block-start: 18px;\r\n      padding-block-end: 18px; */\r\n      -webkit-margin-start: auto;\r\n              margin-inline-start: auto;\r\n      -webkit-margin-end: auto;\r\n              margin-inline-end: auto;\r\n      padding: 50px;\r\n      width: 70%;\r\n  }\r\n\r\ntable {\r\n      background-color:ghostwhite ;\r\n      position: -webkit-sticky;\r\n      position: sticky;\r\n      -webkit-margin-start: auto;\r\n              margin-inline-start: auto;\r\n      -webkit-margin-end: auto;\r\n              margin-inline-end: auto;\r\n      border-collapse: collapse;\r\n      width: 100%;\r\n   }\r\n\r\nth , td{\r\n      text-align: left;\r\n      padding: 10px;\r\n      \r\n  }\r\n\r\ntable {\r\n      border-collapse: collapse;\r\n      width: 40%;\r\n    }\r\n\r\ninput , select{\r\nfont-size:11px;\r\n  width: 30%;\r\n  padding: 12px 20px;\r\n  margin: 6px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  box-sizing: border-box;\r\n \r\n}\r\n\r\n#amount{\r\n  width: 12%;\r\n  padding: 4px 4px 4px;\r\n\r\n}\r\n\r\n.description{\r\n  padding: 0px;\r\n  -webkit-padding-start: 6px ;\r\n          padding-inline-start: 6px ;\r\n  padding-top: 6px;\r\n  padding-bottom: 80px;\r\n  padding-right: 50px;\r\n}\r\n\r\n#confirm {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 12px 16px;\r\n  margin: 6px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 30%;\r\n}\r\n\r\n#reste{\r\n    font-family:cursive;\r\n    background-color: rgb(77, 173, 80);\r\n    color: white;\r\n    padding: 2px 4px;\r\n    margin: 4px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 6%;\r\n    font-size:10px;\r\n    text-align: center;\r\n    border-radius: 2em;\r\n\r\n  }\r\n\r\nbutton:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\nform , div{\r\n    font-size: 13px;\r\n}\r\n\r\np{\r\n  color: rgb(4, 2, 110); \r\n  font-size: 15px;\r\n  font-family: cursive;\r\n}\r\n\r\n.area{\r\n  text-align: center;\r\n      font-size:16px; \r\n   font-family: Verdana, Geneva, Tahoma, sans-serif;\r\n}\r\n\r\nhr{\r\n  opacity: 0.3;  \r\n  }\r\n\r\n#couponList, td{\r\n    text-align: center;\r\n  }\r\n\r\n#p1{\r\n    margin: 1px;\r\n  }\r\n\r\n#select{\r\n    width: 15%;\r\n    padding-bottom: 6px ;\r\n    padding-top : 8px; \r\n    margin: 3px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdXN0b21lci9jdXN0b21lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO01BQ2Ysa0JBQWtCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsV0FBVztBQUNiOztBQUVBO0VBQ0Usc0hBQXNIO0VBQ3RILHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQixZQUFZO0FBQ1osdUJBQXVCO0FBQ3ZCLHFCQUFxQjtBQUNyQixxQkFBcUI7QUFDckIsWUFBWTtBQUNaLFVBQVU7QUFDVixrQkFBa0I7O0VBRWhCOztBQUNBO0tBQ0csZUFBZTtHQUNqQjs7QUFFRDtNQUNJLHVCQUF1QjtNQUN2QixZQUFZO0lBQ2Q7O0FBRUE7TUFDRSxtQkFBbUI7TUFDbkIsa0JBQWtCO0lBQ3BCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLHlCQUF5QjtFQUMzQixXQUFXO01BQ1A7O0FBRUY7TUFDRTs7Z0NBRTBCO01BQzFCLDBCQUF5QjtjQUF6Qix5QkFBeUI7TUFDekIsd0JBQXVCO2NBQXZCLHVCQUF1QjtNQUN2QixhQUFhO01BQ2IsVUFBVTtFQUNkOztBQUVBO01BQ0ksNEJBQTRCO01BQzVCLHdCQUFnQjtNQUFoQixnQkFBZ0I7TUFDaEIsMEJBQXlCO2NBQXpCLHlCQUF5QjtNQUN6Qix3QkFBdUI7Y0FBdkIsdUJBQXVCO01BQ3ZCLHlCQUF5QjtNQUN6QixXQUFXO0dBQ2Q7O0FBRUE7TUFDRyxnQkFBZ0I7TUFDaEIsYUFBYTs7RUFFakI7O0FBQ0E7TUFDSSx5QkFBeUI7TUFDekIsVUFBVTtJQUNaOztBQUVKO0FBQ0EsY0FBYztFQUNaLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsc0JBQXNCOztBQUV4Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7O0FBRXRCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDJCQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUc7SUFDQyxtQkFBbUI7SUFDbkIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2YsU0FBUztJQUNULGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCOztFQUVwQjs7QUFFRjtFQUNFLFlBQVk7QUFDZDs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtNQUNkLGNBQWM7R0FDakIsZ0RBQWdEO0FBQ25EOztBQUVBO0VBQ0UsWUFBWTtFQUNaOztBQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UsV0FBVztFQUNiOztBQUVBO0lBQ0UsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jdXN0b21lci9jdXN0b21lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSAsIGgyICwgaDMgLHB7XHJcbiAgZm9udC1mYW1pbHk6Y3Vyc2l2ZTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxufVxyXG5cclxuLmV4YW1wbGUtY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxuICBtYXJnaW46IDZweDtcclxuICBmb250LWRpc3BsYXk6IGluaXRpYWw7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9pbWcuZXRpbWcuY29tL3RodW1iL21zaWQtNjU0MDI1NjAsd2lkdGgtNjQzLGltZ3NpemUtMTExNzU2LHJlc2l6ZW1vZGUtNC9tY2RvbmFsZHMuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5jYXJkLWltYWdle1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG59XHJcblxyXG4ucHJpY2V7XHJcbiAgY29sb3I6IHJnYigwLCAxNDYsIDE1MSk7XHJcbn1cclxuXHJcbmEgLCBidXR0b257XHJcbiAgZm9udC1mYW1pbHk6Y3Vyc2l2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogOHB4IDE0cHg7XHJcbm1hcmdpbjogYXV0bztcclxuYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbmNvbG9yOiByZ2IoMTUxLCAwLCAwKTtcclxudGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5tYXJnaW46IDEycHg7XHJcbmJvcmRlcjowcHg7XHJcbmJvcmRlci1yYWRpdXM6IDJlbTtcclxuXHJcbiAgfVxyXG4gIC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICB9XHJcblxyXG4gIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgI2RldGFpbHN7XHJcbiAgICAgIGZvbnQtZmFtaWx5OmN1cnNpdmU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzLjVweCA7XHJcbiAgICBwYWRkaW5nLXRvcCA6IDMuNXB4OyBcclxuICAgIC8qIG1hcmdpbjogYXV0bzsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xyXG4gICAgY29sb3I6IHJnYigxNTEsIDAsIDApO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCBncmVlbjtcclxuICBtYXJnaW46IDZweDtcclxuICAgICAgfVxyXG5cclxuICAgICNjMiB7XHJcbiAgICAgIC8qIG1hcmdpbi1ibG9jay1lbmQ6IDE4cHg7XHJcbiAgICAgIHBhZGRpbmctYmxvY2stc3RhcnQ6IDE4cHg7XHJcbiAgICAgIHBhZGRpbmctYmxvY2stZW5kOiAxOHB4OyAqL1xyXG4gICAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4taW5saW5lLWVuZDogYXV0bztcclxuICAgICAgcGFkZGluZzogNTBweDtcclxuICAgICAgd2lkdGg6IDcwJTtcclxuICB9IFxyXG4gIFxyXG4gIHRhYmxlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjpnaG9zdHdoaXRlIDtcclxuICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgbWFyZ2luLWlubGluZS1zdGFydDogYXV0bztcclxuICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IGF1dG87XHJcbiAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICB9XHJcbiAgXHJcbiAgIHRoICwgdGR7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIFxyXG4gIH1cclxuICB0YWJsZSB7XHJcbiAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICB9XHJcblxyXG5pbnB1dCAsIHNlbGVjdHtcclxuZm9udC1zaXplOjExcHg7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgbWFyZ2luOiA2cHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gXHJcbn1cclxuXHJcbiNhbW91bnR7XHJcbiAgd2lkdGg6IDEyJTtcclxuICBwYWRkaW5nOiA0cHggNHB4IDRweDtcclxuXHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbntcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDZweCA7XHJcbiAgcGFkZGluZy10b3A6IDZweDtcclxuICBwYWRkaW5nLWJvdHRvbTogODBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4jY29uZmlybSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTJweCAxNnB4O1xyXG4gIG1hcmdpbjogNnB4IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4gICAjcmVzdGV7XHJcbiAgICBmb250LWZhbWlseTpjdXJzaXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDc3LCAxNzMsIDgwKTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDJweCA0cHg7XHJcbiAgICBtYXJnaW46IDRweCAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6IDYlO1xyXG4gICAgZm9udC1zaXplOjEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyZW07XHJcblxyXG4gIH1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG5mb3JtICwgZGl2e1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG5we1xyXG4gIGNvbG9yOiByZ2IoNCwgMiwgMTEwKTsgXHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG59XHJcblxyXG4uYXJlYXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZToxNnB4OyBcclxuICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5ocntcclxuICBvcGFjaXR5OiAwLjM7ICBcclxuICB9XHJcblxyXG4gICNjb3Vwb25MaXN0LCB0ZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICNwMXtcclxuICAgIG1hcmdpbjogMXB4O1xyXG4gIH1cclxuXHJcbiAgI3NlbGVjdHtcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNnB4IDtcclxuICAgIHBhZGRpbmctdG9wIDogOHB4OyBcclxuICAgIG1hcmdpbjogM3B4O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/customer/customer.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/customer/customer.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"myCustomerService.customer.firstName\">Good {{message}} {{myCustomerService.customer.firstName}} :) </p>\n\n<body>\n\n  <!-- Menu -->\n  <button id=\"menu\" (click)=\"getAllCoupons()\">See all coupon</button>\n  <span> | </span>\n  <button id=\"menu\" (click)=\"getCouponPurchases()\">My purchases</button>\n  <span> | </span>\n  <button id=\"menu\" (click)=\"getDetails()\">My deatails</button>\n  <button id=\"menu\" style=\"float: right\" (click)=\"goToCart()\"><i class=\"material-icons\">\n      shopping_cart\n    </i>\n  </button>\n  <br>\n  <hr />\n\n  <!-- messages -->\n  <h3>{{text}}</h3>\n\n\n\n  <!-- show all coupons -->\n\n  <div class=\"c2\" *ngIf=\"isShowCoupons\">\n    Filter by: <select name=\"category\" [(ngModel)]=\"selected\" placeholder=\"All\">\n      <option>All</option>\n      <option>Category</option>\n      <option>Max price</option>\n    </select>\n\n    <label id=\"p1\" *ngIf=\"selected=='All'\">\n      <button id=\"Go\" (click)=\"getAllCoupons()\">Search</button>\n    </label>\n\n    <p id=\"p1\" *ngIf=\"selected=='Category'\">\n      <select id=\"select\" name=\"category\" [(ngModel)]=\"category\" placeholder=\"gg\">\n        <option *ngFor=\"let c of categories\"> {{ c }} </option>\n      </select>\n      <button id=\"Go\" (click)=\"showCouponsByCategory()\">Search</button>\n    </p>\n\n    <p id=\"p1\" *ngIf=\"selected=='Max price'\">\n      <input id=\"select\" type=\"text\" placeholder=\"max price..\" name=\"maxPrice\" [(ngModel)]=\"maxPrice\">\n      <button id=\"Go\" (click)=\"showCouponsByMaxPrice()\">Search</button>\n    </p>\n    <br>\n    <label class=\"coupons\" *ngFor=\"let c of myCouponService.wrapper.coupons; index as i\">\n      <mat-card class=\"example-card\">\n        <mat-card-header>\n          <label mat-card-avatar class=\"example-header-image\"></label>\n          <mat-card-title>{{c.title}}</mat-card-title>\n          <!-- <mat-card-subtitle>Expired: {{c.endDate}}</mat-card-subtitle> -->\n        </mat-card-header>\n        <img mat-card-image class=\"card-image\" src={{c.image}} alt=\"Photo of a Shiba Inu\">\n        <mat-card-content>\n          <p>\n            {{c.description}}\n          </p>\n          <label class=\"price\">{{c.price}}$ only!</label>\n          <br>\n          <label style=\"color: red\" *ngIf=\"c.inStock==false\"> Out of stock </label>\n          <label style=\"color: green\" *ngIf=\"c.inStock\"> In stock </label>\n          <mat-card-actions>\n            <button color=\"warn\" id=\"button2\" (click)=\"selectedPurchase(c)\">I want this coupon</button>\n          </mat-card-actions>\n        </mat-card-content>\n      </mat-card>\n    </label>\n    <div></div>\n  </div>\n\n\n\n  <!-- purchases -->\n  <div class=\"c2\" *ngIf=\"isShowPurchases\">\n    <label *ngFor=\"let c of myPurchaseService.wrapper.purchases; index as i\">\n      <p>Purchase No {{i+1}}</p>\n      <table>\n        <tr>\n          <td colspan=\"2\"><img class=\"card-image\" src={{c.coupon.image}}></td>\n        </tr>\n        <tr>\n          <!-- <th> Coupon name </th> -->\n          <td colspan=\"2\">{{c.coupon.title}}</td>\n        </tr>\n        <tr>\n          <th> Purchase id </th>\n          <td>{{c.id}}\n          </td>\n        <tr>\n          <th> Coupon company </th>\n          <td>{{c.coupon.company.name}}\n          </td>\n        </tr>\n        <tr>\n          <th> Category </th>\n          <td>{{c.coupon.category}}</td>\n        </tr>\n        <tr>\n          <th> Description </th>\n          <td colspan=\"2\">{{c.coupon.description}}</td>\n        </tr>\n        <tr>\n          <th>Purchase date </th>\n          <td>{{c.date}}</td>\n        </tr>\n        <tr>\n          <th> Price </th>\n          <td>{{c.coupon.price}} $</td>\n        </tr>\n        <tr>\n          <th> Purchase amount </th>\n          <td>{{c.amount}}</td>\n        </tr>\n        <tr *ngIf=\"c.code\">\n          <th> Discount </th>\n          <td>{{c.discount}} %</td>\n        </tr>\n        <tr>\n          <th> Total price </th>\n          <td>{{c.totalPrice}} $</td>\n        </tr>\n        <tr>\n          <th> Note </th>\n          <td>{{c.note}}\n          </td>\n      </table>\n    </label>\n  </div>\n\n\n\n  <!-- customer details -->\n  <div id=\"c2\" *ngIf=\"isShowDetails\">\n    <label>\n      <table>\n        <tr>\n          <th> First name </th>\n          <td>{{customer.firstName}}</td>\n        </tr>\n        <tr>\n          <th> Last name </th>\n          <td>{{customer.lastName}}</td>\n        </tr>\n        <tr>\n          <th> Email address </th>\n          <td>{{customer.email}}</td>\n        </tr>\n        <tr>\n          <th> Phone number </th>\n          <td>{{customer.phoneNumber}}</td>\n        </tr>\n        <tr>\n          <th> Address </th>\n          <td>\n            {{customer.address.street}}\n            {{customer.address.number}}\n            <br>\n            {{customer.address.city}}\n            <br>\n            {{customer.address.country}}\n            <br>\n            {{customer.address.zipCode}}\n          </td>\n        </tr>\n      </table>\n      <button id=\"details\" (click)=\"showFormUpdate()\">Update details</button>\n      <br>\n    </label>\n  </div>\n\n\n\n  <!--update customer details -->\n  <form *ngIf=\"isShowUpdateDetauls\">\n    <br>\n    <p id=\"text\">First name\n    </p>\n    <input type=\"text\" placeholder=\"firstName...\" name=\"firstName\" [(ngModel)]=\"customer.firstName\">\n    <p id=\"text\">Last name\n    </p>\n    <input type=\"text\" placeholder=\"lastName...\" name=\"lastName\" [(ngModel)]=\"customer.lastName\">\n    <p id=\"text\">Email address\n    </p>\n    <input type=\"text\" placeholder=\"email...\" name=\"email\" [(ngModel)]=\"customer.email\">\n    <p id=\"text\">PhoneNumber\n    </p>\n    <input type=\"text\" placeholder=\"phoneNumber...\" name=\"phoneNumber\" [(ngModel)]=\"customer.phoneNumber\">\n    <br>\n    <input id=\"reste\" value=\"reset\" type=\"reset\" />\n    <br>\n    <button id=\"details\" (click)=\"updateDetails()\">Confirm update details</button>\n  </form>\n\n</body>"

/***/ }),

/***/ "./src/app/components/customer/customer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/customer/customer.component.ts ***!
  \***********************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_coupon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/coupon */ "./src/app/shared/models/coupon.ts");
/* harmony import */ var _shared_models_purchase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/models/purchase */ "./src/app/shared/models/purchase.ts");
/* harmony import */ var _shared_services_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/customer.service */ "./src/app/shared/services/customer.service.ts");
/* harmony import */ var _shared_services_purchase_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/purchase.service */ "./src/app/shared/services/purchase.service.ts");
/* harmony import */ var _shared_services_coupon_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/coupon.service */ "./src/app/shared/services/coupon.service.ts");
/* harmony import */ var src_app_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/cart.service */ "./src/app/shared/services/cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_services_categories_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/categories.service */ "./src/app/shared/services/categories.service.ts");










var CustomerComponent = /** @class */ (function () {
    // cntr
    function CustomerComponent(router, myCouponService, myCustomerService, myPurchaseService, myCartService, myCategories) {
        this.router = router;
        this.myCouponService = myCouponService;
        this.myCustomerService = myCustomerService;
        this.myPurchaseService = myPurchaseService;
        this.myCartService = myCartService;
        this.myCategories = myCategories;
        this.categories = this.myCategories.categories;
        this.isShowText = true;
        this.token = sessionStorage.getItem("token");
        this.customerId = parseInt(sessionStorage.getItem("id"));
        this.purchase = new _shared_models_purchase__WEBPACK_IMPORTED_MODULE_3__["Purchase"]();
        this.coupon = new _shared_models_coupon__WEBPACK_IMPORTED_MODULE_2__["Coupon"]();
    }
    // functions
    CustomerComponent.prototype.getDetails = function () {
        this.customer = this.myCustomerService.getCustomer(this.customerId, this.token);
        this.showFormDetails();
    };
    CustomerComponent.prototype.updateDetails = function () {
        this.myCustomerService.updateCustomer(this.customer, this.token);
        this.text = "Your details updated successfully!";
        this.isShowUpdateDetauls = false;
    };
    CustomerComponent.prototype.getAllCoupons = function () {
        this.myCouponService.getAllCoupons(this.token);
        this.ShowFormCoupons();
    };
    CustomerComponent.prototype.showCouponsByCategory = function () {
        this.myCouponService.getCouponsByCategory(this.category, this.token);
        this.ShowFormCoupons();
    };
    CustomerComponent.prototype.showCouponsByMaxPrice = function () {
        this.myCouponService.getCouponsByMaxPrice(this.maxPrice, this.token);
        this.ShowFormCoupons();
    };
    CustomerComponent.prototype.selectedPurchase = function (c) {
        this.coupon = c;
        this.myCartService.addToCart(c);
        this.router.navigate(["/cart"]);
    };
    CustomerComponent.prototype.goToCart = function () {
        this.router.navigate(["/cart"]);
    };
    CustomerComponent.prototype.getCouponPurchases = function () {
        this.myCouponService.getCouponsByCustomer(this.customerId, this.token);
        this.myPurchaseService.getPurchasesByCustomer(this.customerId, this.token);
        this.showFormPurchases();
    };
    // define what will be show in the html 
    CustomerComponent.prototype.showFormUpdate = function () {
        this.text = "Update details";
        this.isShowDetails = false;
        this.isShowPurchases = false;
        this.isShowSelected = false;
        this.isShowCoupons = false;
        this.isShowUpdateDetauls = true;
    };
    CustomerComponent.prototype.showFormDetails = function () {
        this.text = "Your details";
        this.isShowPurchases = false;
        this.isShowSelected = false;
        this.isShowCoupons = false;
        this.isShowDetails = true;
        this.isShowUpdateDetauls = false;
    };
    CustomerComponent.prototype.showFormPurchases = function () {
        this.text = "My purchases";
        this.isShowCoupons = false;
        this.isShowPurchases = true;
        this.isShowDetails = false;
        this.isShowSelected = false;
        this.isShowUpdateDetauls = false;
    };
    CustomerComponent.prototype.ShowFormCoupons = function () {
        this.text = "Find your coupon here";
        this.isShowDetails = false;
        this.isShowSelected = false;
        this.isShowPurchases = false;
        this.isShowCoupons = true;
        this.isShowUpdateDetauls = false;
    };
    CustomerComponent.prototype.showSelected = function () {
        this.isShowDetails = false;
        this.isShowCoupons = false;
        this.isShowPurchases = false;
        this.isShowSelected = true;
        this.isShowUpdateDetauls = false;
        this.text = "Your cart";
    };
    CustomerComponent.prototype.changeMessage = function () {
        var time = new Date();
        if (time.getHours() < 6) {
            this.message = "night";
        }
        if (time.getHours() > 6 && time.getHours() < 12) {
            this.message = "morning";
        }
        if (time.getHours() >= 12 && time.getHours() < 16) {
            this.message = "afternoon";
        }
        if (time.getHours() >= 16 && time.getHours() < 24) {
            this.message = "evening";
        }
    };
    CustomerComponent.prototype.ngOnInit = function () {
        this.myCustomerService.getCustomer(this.customerId, this.token);
        this.getAllCoupons();
        this.changeMessage();
    };
    CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/components/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.css */ "./src/app/components/customer/customer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], _shared_services_coupon_service__WEBPACK_IMPORTED_MODULE_6__["CouponService"], _shared_services_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"], _shared_services_purchase_service__WEBPACK_IMPORTED_MODULE_5__["PurchaseService"], src_app_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"], src_app_shared_services_categories_service__WEBPACK_IMPORTED_MODULE_9__["CategoriesService"]])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-footer{\r\n   font-size: 12px;\r\n   padding: 2%;\r\n   position: fixed-bottom;\r\n   color:#4b525a;\r\n   font-family:Verdana, Geneva, Tahoma, sans-serif;\r\n   text-align: center; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7R0FDRyxlQUFlO0dBQ2YsV0FBVztHQUNYLHNCQUFzQjtHQUN0QixhQUFhO0dBQ2IsK0NBQStDO0dBQy9DLGtCQUFrQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtZm9vdGVye1xyXG4gICBmb250LXNpemU6IDEycHg7XHJcbiAgIHBhZGRpbmc6IDIlO1xyXG4gICBwb3NpdGlvbjogZml4ZWQtYm90dG9tO1xyXG4gICBjb2xvcjojNGI1MjVhO1xyXG4gICBmb250LWZhbWlseTpWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- Footer -->\n<footer class=\"page-footer font-small blue fixed-bottom\">\n\n    <!-- Copyright -->\n    <div class=\"footer-copyright text-center py-3\">© 2019 Copyright:\n      <a href=\"http://localhost:4200/home\"> Coupons.com</a>\n    </div>\n    <!-- Copyright -->\n\n  </footer>\n  <!-- Footer -->"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div, header{\r\n    font-family: cursive;\r\n      text-align:center;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7TUFDbEIsaUJBQWlCO0lBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYsIGhlYWRlcntcclxuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xyXG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <label style=\"float: left\">\n    <a routerLink=\"/home\">Home</a>\n\n  </label>\n  <label style=\"float: right\">\n    <a routerLink=\"/register\">Register</a>\n    <span> | </span>\n    <a routerLink=\"/login\">Login</a>\n    <span> | </span>\n    <a routerLink=\"/signOut\">Sign out</a>\n\n  </label>\n</div>\n<br>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n  width: 100%;\r\n    margin: 0%;\r\n    padding: 0%;\r\n}\r\n\r\ndiv, header{\r\n  font-family: cursive;\r\n    text-align:center;\r\n  }\r\n\r\nh1{\r\n\r\n    padding: 300px;\r\n    margin: 250px;\r\n  color: rgb(151, 0, 0);\r\n  /* background-color: aliceblue; */\r\n  padding: 2px;\r\n  font-size: 35px;\r\n  font-family:  cursive;\r\n}\r\n\r\np{\r\n    color: rgb(4, 2, 110); \r\n    font-size: 15px;\r\n    font-family: cursive;\r\n\r\n  }\r\n\r\nform{\r\n     \r\n    font-size: 13px;\r\n}\r\n\r\n#home{\r\n  float: left;\r\n}\r\n\r\n#login{\r\n  float: right;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7SUFDVCxVQUFVO0lBQ1YsV0FBVztBQUNmOztBQUVBO0VBQ0Usb0JBQW9CO0lBQ2xCLGlCQUFpQjtFQUNuQjs7QUFFRjs7SUFFSSxjQUFjO0lBQ2QsYUFBYTtFQUNmLHFCQUFxQjtFQUNyQixpQ0FBaUM7RUFDakMsWUFBWTtFQUNaLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUU7SUFDRSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLG9CQUFvQjs7RUFFdEI7O0FBQ0E7O0lBRUUsZUFBZTtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwJTtcclxuICAgIHBhZGRpbmc6IDAlO1xyXG59XHJcblxyXG5kaXYsIGhlYWRlcntcclxuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIH1cclxuXHJcbmgxe1xyXG5cclxuICAgIHBhZGRpbmc6IDMwMHB4O1xyXG4gICAgbWFyZ2luOiAyNTBweDtcclxuICBjb2xvcjogcmdiKDE1MSwgMCwgMCk7XHJcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlOyAqL1xyXG4gIHBhZGRpbmc6IDJweDtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgZm9udC1mYW1pbHk6ICBjdXJzaXZlO1xyXG59XHJcblxyXG4gIHB7XHJcbiAgICBjb2xvcjogcmdiKDQsIDIsIDExMCk7IFxyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcblxyXG4gIH1cclxuICBmb3Jte1xyXG4gICAgIFxyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcblxyXG4jaG9tZXtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4jbG9naW57XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<body>\n      <h1 style=\"color: rgb(151, 0, 0); text-align: center\">\n          Welcome to coupuns! \n          <p >Find your next discount. it's free ,easy, and save your money!</p>\n        </h1 >\n</body>\n\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {font-family:cursive;\r\ntext-align: center\r\n}\r\n\r\n/* Full-width input fields */\r\n\r\ninput[type=text], input[type=password] {\r\n  width: 25%;\r\n  padding: 12px 20px;\r\n  margin: 4px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  box-sizing: border-box;\r\n\r\n}\r\n\r\n/* Set a style for all buttons */\r\n\r\nbutton {\r\n  background-color: #4CAF50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 25%;\r\n}\r\n\r\nbutton:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\n.container {\r\n  padding: 12px;\r\n}\r\n\r\nspan.psw {\r\n  float: right;\r\n  padding-top: 16px;\r\n}\r\n\r\n/* Set a style for all buttons */\r\n\r\n#reste{\r\n    font-family:cursive;\r\n    background-color: rgb(77, 173, 80);\r\n    color: white;\r\n    padding: 2px 4px;\r\n    margin: 4px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 6%;\r\n    font-size:10px;\r\n    text-align: center;\r\n\r\n  }\r\n\r\nbody{\r\n    margin: 0%;\r\n    padding: 0%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sbUJBQW1CO0FBQ3pCO0FBQ0E7O0FBRUEsNEJBQTRCOztBQUM1QjtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsc0JBQXNCOztBQUV4Qjs7QUFFQSxnQ0FBZ0M7O0FBQ2hDO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUlBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFRyxnQ0FBZ0M7O0FBQ2hDO0lBQ0MsbUJBQW1CO0lBQ25CLGtDQUFrQztJQUNsQyxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLFNBQVM7SUFDVCxjQUFjO0lBQ2Qsa0JBQWtCOztFQUVwQjs7QUFDQTtJQUNFLFVBQVU7SUFDVixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtmb250LWZhbWlseTpjdXJzaXZlO1xyXG50ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG5cclxuLyogRnVsbC13aWR0aCBpbnB1dCBmaWVsZHMgKi9cclxuaW5wdXRbdHlwZT10ZXh0XSwgaW5wdXRbdHlwZT1wYXNzd29yZF0ge1xyXG4gIHdpZHRoOiAyNSU7XHJcbiAgcGFkZGluZzogMTJweCAyMHB4O1xyXG4gIG1hcmdpbjogNHB4IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbn1cclxuXHJcbi8qIFNldCBhIHN0eWxlIGZvciBhbGwgYnV0dG9ucyAqL1xyXG5idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDE0cHggMjBweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuYnV0dG9uOmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcblxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMTJweDtcclxufVxyXG5cclxuc3Bhbi5wc3cge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwYWRkaW5nLXRvcDogMTZweDtcclxufVxyXG5cclxuICAgLyogU2V0IGEgc3R5bGUgZm9yIGFsbCBidXR0b25zICovXHJcbiAgICNyZXN0ZXtcclxuICAgIGZvbnQtZmFtaWx5OmN1cnNpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzcsIDE3MywgODApO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMnB4IDRweDtcclxuICAgIG1hcmdpbjogNHB4IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogNiU7XHJcbiAgICBmb250LXNpemU6MTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgfSBcclxuICBib2R5e1xyXG4gICAgbWFyZ2luOiAwJTtcclxuICAgIHBhZGRpbmc6IDAlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n    <form style=\"color: rgb(71, 11, 11)\">\n\n        <p>Please enter your username & password to login</p>\n\n        <input type=\"text\" placeholder=\"Username\" name=\"username\" required [(ngModel)]=\"user.userName\">\n        <br>\n        <input type=\"password\" ng=required placeholder=\"Password\" name=\"password\" [(ngModel)]=\"user.password\">\n        <br>\n        <label style=font-size:10px; *ngIf=\"isMessageShow\">{{message}}</label>\n        <br>\n        <button (click)=\"login()\">Sign in</button>\n        <br>\n        <input id=\"reste\" value=\"reset\" type=\"reset\" />\n    </form>\n</body>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/user */ "./src/app/shared/models/user.ts");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(myUserService) {
        this.myUserService = myUserService;
        this.isMessageShow = false;
        this.user = new _shared_models_user__WEBPACK_IMPORTED_MODULE_2__["User"]();
    }
    LoginComponent.prototype.login = function () {
        if (this.user.userName == undefined && this.user.password == undefined) {
            this.isMessageShow = false;
            alert("you must fill the inbox");
            return;
        }
        if (!this.validateUsername()) {
            this.isMessageShow = true;
            return;
        }
        if (!this.validatePassword()) {
            this.isMessageShow = true;
            return;
        }
        this.isMessageShow = false;
        this.myUserService.login(this.user);
    };
    LoginComponent.prototype.validateUsername = function () {
        this.message = "Invalid username!";
        if (this.user.userName != undefined && this.user.userName.match("^([a-zA-Z0-9.@_-]){5,40}$")) {
            return true;
        }
        return false;
    };
    LoginComponent.prototype.validatePassword = function () {
        this.message = "Invalid passowrd!";
        if (this.user.password != undefined && this.user.password.match("^(?=.*[a-z])(?=.*[0-9])[0-9a-z]{8}$")) {
            return true;
        }
        return false;
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/masage/masage.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/masage/masage.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body , h2 , h3 ,p{\r\n    font-family:cursive;\r\n        text-align: center; \r\n\r\n  }\r\n\r\n  button {\r\n    font-family:cursive;\r\n    text-align: center;\r\n padding: 8px 14px;\r\n  background-color: unset;\r\n  color: rgb(151, 0, 0);\r\n  text-decoration: none;\r\n  border: 1px solid green;\r\nmargin: 8px;\r\nborder-radius: 2em;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYXNhZ2UvbWFzYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7UUFDZixrQkFBa0I7O0VBRXhCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGtCQUFrQjtDQUNyQixpQkFBaUI7RUFDaEIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsdUJBQXVCO0FBQ3pCLFdBQVc7QUFDWCxrQkFBa0I7RUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21hc2FnZS9tYXNhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkgLCBoMiAsIGgzICxwe1xyXG4gICAgZm9udC1mYW1pbHk6Y3Vyc2l2ZTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG5cclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBmb250LWZhbWlseTpjdXJzaXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gcGFkZGluZzogOHB4IDE0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XHJcbiAgY29sb3I6IHJnYigxNTEsIDAsIDApO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcclxubWFyZ2luOiA4cHg7XHJcbmJvcmRlci1yYWRpdXM6IDJlbTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/masage/masage.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/masage/masage.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n    <h3>\n      {{message}}\n    </h3>\n  \n    <label>\n      <button id=\"button2\" (click)=\"backClicked()\">Finish</button>\n    </label>\n  \n  \n  </body>"

/***/ }),

/***/ "./src/app/components/masage/masage.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/masage/masage.component.ts ***!
  \*******************************************************/
/*! exports provided: MasageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasageComponent", function() { return MasageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/message.service */ "./src/app/shared/services/message.service.ts");




var MasageComponent = /** @class */ (function () {
    function MasageComponent(location, messageService) {
        this.location = location;
        this.messageService = messageService;
        this.message = messageService.wrapper.message;
    }
    MasageComponent.prototype.backClicked = function () {
        this.location.back();
    };
    MasageComponent.prototype.ngOnInit = function () {
    };
    MasageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-masage',
            template: __webpack_require__(/*! ./masage.component.html */ "./src/app/components/masage/masage.component.html"),
            styles: [__webpack_require__(/*! ./masage.component.css */ "./src/app/components/masage/masage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], src_app_shared_services_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"]])
    ], MasageComponent);
    return MasageComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {font-family:cursive;\r\n    text-align: center\r\n    }\r\n    \r\n#text{\r\n    font-size: 12px;\r\n}\r\n    \r\ninput[type=text], input[type=password] {\r\n      width: 35%;\r\n      padding: 12px 20px;\r\n      margin: 6px 0;\r\n      display: inline-block;\r\n      border: 1px solid #ccc;\r\n      box-sizing: border-box;\r\n     \r\n    }\r\n    \r\n/* Set a style for all buttons */\r\n    \r\nbutton {\r\n      background-color: #4CAF50;\r\n      color: white;\r\n      padding: 14px 20px;\r\n      margin: 8px 0;\r\n      border: none;\r\n      cursor: pointer;\r\n      width: 35%;\r\n    }\r\n    \r\nbutton:hover {\r\n      opacity: 0.8;\r\n    }\r\n    \r\n#reste{\r\n    font-family:cursive;\r\n    background-color: rgb(77, 173, 80);\r\n    color: white;\r\n    padding: 2px 4px;\r\n    margin: 4px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 6%;\r\n    font-size:10px;\r\n    text-align: center;\r\n\r\n  }  \r\n    \r\n    \r\n    \r\n    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sbUJBQW1CO0lBQ3JCO0lBQ0E7O0FBRUo7SUFDSSxlQUFlO0FBQ25COztBQUNJO01BQ0UsVUFBVTtNQUNWLGtCQUFrQjtNQUNsQixhQUFhO01BQ2IscUJBQXFCO01BQ3JCLHNCQUFzQjtNQUN0QixzQkFBc0I7O0lBRXhCOztBQUVBLGdDQUFnQzs7QUFDaEM7TUFDRSx5QkFBeUI7TUFDekIsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixhQUFhO01BQ2IsWUFBWTtNQUNaLGVBQWU7TUFDZixVQUFVO0lBQ1o7O0FBRUE7TUFDRSxZQUFZO0lBQ2Q7O0FBRUQ7SUFDQyxtQkFBbUI7SUFDbkIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFlBQVk7SUFDWixlQUFlO0lBQ2YsU0FBUztJQUNULGNBQWM7SUFDZCxrQkFBa0I7O0VBRXBCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7Zm9udC1mYW1pbHk6Y3Vyc2l2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4gICAgfVxyXG4gICAgXHJcbiN0ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbiAgICBpbnB1dFt0eXBlPXRleHRdLCBpbnB1dFt0eXBlPXBhc3N3b3JkXSB7XHJcbiAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICAgIHBhZGRpbmc6IDEycHggMjBweDtcclxuICAgICAgbWFyZ2luOiA2cHggMDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiBTZXQgYSBzdHlsZSBmb3IgYWxsIGJ1dHRvbnMgKi9cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgd2lkdGg6IDM1JTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICNyZXN0ZXtcclxuICAgIGZvbnQtZmFtaWx5OmN1cnNpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzcsIDE3MywgODApO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMnB4IDRweDtcclxuICAgIG1hcmdpbjogNHB4IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogNiU7XHJcbiAgICBmb250LXNpemU6MTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgfSAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICAiXX0= */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form style=\"color: rgb(71, 11, 11)\">\n\n  <h3>Create new account</h3>\n\n  <!-- step 1 -->\n  <form *ngIf=showForm1>\n    Choose username\n    <br>\n    <p id=\"text\">Minimum 5 characters or email address,<br> and only this characters [ a-z A-Z 0-9 . @ _ - ] allowed</p>\n    <input type=\"text\" required placeholder=\"username...\" name=\"username\" [(ngModel)]=\"user.userName\">\n    <br>\n    Choose password\n    <br>\n    <p id=\"text\">The password must contains 8 characters only.<br> and at least one letter and one number. Example\n      'a1234567'</p>\n    <input type=\"password\" placeholder=\"Password...\" name=\"password\" [(ngModel)]=\"user.password\">\n    <br>\n    <button id=\"continue\" (click)=\"nextStepRegister()\">Continue 1/3</button>\n    <br>\n    <input id=\"reste\" value=\"reset\" type=\"reset\" />\n  </form>\n\n\n  <!-- step 2 -->\n  <form *ngIf=showForm2>\n    <br>\n    <p id=\"text\">First name</p>\n    <input type=\"text\" placeholder=\"firstName...\" name=\"firstName\" [(ngModel)]=\"customer.firstName\">\n    <p id=\"text\">Last name</p>\n    <input type=\"text\" placeholder=\"lastName...\" name=\"lastName\" [(ngModel)]=\"customer.lastName\">\n    <p id=\"text\">Email address </p>\n    <input type=\"text\" placeholder=\"email...\" name=\"email\" [(ngModel)]=\"customer.email\">\n    <p id=\"text\">PhoneNumber </p>\n    <input type=\"text\" placeholder=\"phoneNumber...\" name=\"phoneNumber\" [(ngModel)]=\"customer.phoneNumber\">\n    <br>\n    <input id=\"reste\" value=\"reset\" type=\"reset\" />\n    <br>\n    <button id=\"continue\" (click)=\"nextStepRegister2()\">Continue 2/3</button>\n  </form>\n\n\n    <!-- step 3 -->\n    <form *ngIf=showForm3>\n        <br>\n        <p id=\"text\">Street</p>\n        <input type=\"text\" placeholder=\"street...\" name=\"firstName\" [(ngModel)]=\"address.street\">\n        <p id=\"text\">Number</p>\n        <input type=\"text\" placeholder=\"house number...\" name=\"lastName\" [(ngModel)]=\"address.number\">\n        <p id=\"text\">City</p>\n        <input type=\"text\" placeholder=\"city...\" name=\"email\" [(ngModel)]=\"address.city\">\n        <p id=\"text\">Country </p>\n        <input type=\"text\" placeholder=\"country...\" name=\"phoneNumber\" [(ngModel)]=\"address.country\">\n        <p id=\"text\">Zip code </p>\n        <input type=\"text\" placeholder=\"zip code...\" name=\"phoneNumber\" [(ngModel)]=\"address.zipCode\">\n        <br>\n        <input id=\"reste\" value=\"reset\" type=\"reset\" />\n        <br>\n        <button (click)=\"CustomerRegister()\">Your fun start here</button>\n      </form>\n\n</form>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/customer */ "./src/app/shared/models/customer.ts");
/* harmony import */ var _shared_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/models/user */ "./src/app/shared/models/user.ts");
/* harmony import */ var _shared_services_customer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/customer.service */ "./src/app/shared/services/customer.service.ts");
/* harmony import */ var src_app_shared_models_address__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/models/address */ "./src/app/shared/models/address.ts");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(myCustomerService) {
        this.myCustomerService = myCustomerService;
        this.showForm1 = true;
        this.showForm2 = false;
        this.showForm3 = false;
        this.customer = new _shared_models_customer__WEBPACK_IMPORTED_MODULE_2__["Customer"]();
        this.user = new _shared_models_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.address = new src_app_shared_models_address__WEBPACK_IMPORTED_MODULE_5__["Address"]();
    }
    RegisterComponent.prototype.nextStepRegister = function () {
        if (this.user.userName == undefined && this.user.password == undefined) {
            alert("you must coose username & password to continue register!");
            return;
        }
        if (!this.validateUsername()) {
            alert("Invalid username!");
            return;
        }
        if (!this.validatePassword()) {
            alert("Invalid password!");
            return;
        }
        this.showForm1 = false;
        this.showForm2 = true;
    };
    RegisterComponent.prototype.nextStepRegister2 = function () {
        this.showForm1 = false;
        this.showForm2 = false;
        this.showForm3 = true;
    };
    RegisterComponent.prototype.CustomerRegister = function () {
        if (this.customer.firstName == undefined || this.customer.lastName == undefined || this.customer.email == undefined || this.customer.phoneNumber == undefined) {
            alert("you must fill the fields for continue register!");
            return;
        }
        this.user.type = "CUSTOMER";
        this.customer.userCustomer = this.user;
        this.customer.address = this.address;
        console.log(this.customer);
        this.myCustomerService.CustomerRegister(this.customer);
    };
    RegisterComponent.prototype.validateUsername = function () {
        if (this.user.userName != undefined && this.user.userName.match("^([a-zA-Z0-9.@_-]){5,40}$")) {
            return true;
        }
        return false;
    };
    RegisterComponent.prototype.validatePassword = function () {
        if (this.user.password != undefined && this.user.password.match("^(?=.*[a-z])(?=.*[0-9])[0-9a-z]{8}$")) {
            return true;
        }
        return false;
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_customer_service__WEBPACK_IMPORTED_MODULE_4__["CustomerService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/sign-out/sign-out.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/sign-out/sign-out.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p{\r\n    font-family:cursive;\r\n        text-align: center; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWduLW91dC9zaWduLW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO1FBQ2Ysa0JBQWtCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaWduLW91dC9zaWduLW91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcclxuICAgIGZvbnQtZmFtaWx5OmN1cnNpdmU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/sign-out/sign-out.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/sign-out/sign-out.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"wasIn\">\n    <p>\n        You sign out successfully!\n    </p>\n</div>\n\n<div *ngIf=\"!wasIn\">\n    <p>\n        Your not in!\n    </p>\n</div>"

/***/ }),

/***/ "./src/app/components/sign-out/sign-out.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/sign-out/sign-out.component.ts ***!
  \***********************************************************/
/*! exports provided: SignOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignOutComponent", function() { return SignOutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");



var SignOutComponent = /** @class */ (function () {
    function SignOutComponent(myUserService) {
        this.myUserService = myUserService;
    }
    SignOutComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem("token") == undefined) {
            this.wasIn = false;
        }
        else {
            this.wasIn = true;
            this.myUserService.signUot();
        }
    };
    SignOutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-out',
            template: __webpack_require__(/*! ./sign-out.component.html */ "./src/app/components/sign-out/sign-out.component.html"),
            styles: [__webpack_require__(/*! ./sign-out.component.css */ "./src/app/components/sign-out/sign-out.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], SignOutComponent);
    return SignOutComponent;
}());



/***/ }),

/***/ "./src/app/components/thank/thank.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/thank/thank.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body , h2 , h3 ,p{\r\n    font-family:cursive;\r\n        text-align: center; \r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aGFuay90aGFuay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO1FBQ2Ysa0JBQWtCO0VBQ3hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90aGFuay90aGFuay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSAsIGgyICwgaDMgLHB7XHJcbiAgICBmb250LWZhbWlseTpjdXJzaXZlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/thank/thank.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/thank/thank.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n\n  <h2>\n    Thank you!\n  </h2>\n\n  <p>\n    <br>Your purchase is complite! <br>\n    Your purchase ID: {{id}}\n  </p>\n\n  <label>\n    <button id=\"button2\" (click)=\"backClicked()\">Back</button>\n  </label>\n\n\n</body>"

/***/ }),

/***/ "./src/app/components/thank/thank.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/thank/thank.component.ts ***!
  \*****************************************************/
/*! exports provided: ThankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankComponent", function() { return ThankComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var ThankComponent = /** @class */ (function () {
    function ThankComponent(location) {
        this.location = location;
        this.purchaseId = JSON.parse(localStorage.getItem("purchase"));
        this.id = this.purchaseId;
    }
    ThankComponent.prototype.backClicked = function () {
        this.location.back();
    };
    ThankComponent.prototype.ngOnInit = function () {
    };
    ThankComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-thank',
            template: __webpack_require__(/*! ./thank.component.html */ "./src/app/components/thank/thank.component.html"),
            styles: [__webpack_require__(/*! ./thank.component.css */ "./src/app/components/thank/thank.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], ThankComponent);
    return ThankComponent;
}());



/***/ }),

/***/ "./src/app/shared/models/address.ts":
/*!******************************************!*\
  !*** ./src/app/shared/models/address.ts ***!
  \******************************************/
/*! exports provided: Address */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
var Address = /** @class */ (function () {
    function Address(id, country, city, street, number, zipCode) {
        this.id = id;
        this.country = country;
        this.city = city;
        this.street = street;
        this.number = number;
        this.zipCode = zipCode;
    }
    return Address;
}());



/***/ }),

/***/ "./src/app/shared/models/company.ts":
/*!******************************************!*\
  !*** ./src/app/shared/models/company.ts ***!
  \******************************************/
/*! exports provided: Company */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Company", function() { return Company; });
var Company = /** @class */ (function () {
    function Company(id, name, logo) {
        this.id = id;
        this.name = name;
        this.logo = logo;
    }
    return Company;
}());



/***/ }),

/***/ "./src/app/shared/models/coupon.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/models/coupon.ts ***!
  \*****************************************/
/*! exports provided: Coupon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coupon", function() { return Coupon; });
var Coupon = /** @class */ (function () {
    function Coupon(id, category, title, description, startDate, endDate, amount, price, image, company, inStock) {
        this.id = id;
        this.category = category;
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.amount = amount;
        this.price = price;
        this.image = image;
        this.company = company;
        this.inStock = inStock;
    }
    return Coupon;
}());



/***/ }),

/***/ "./src/app/shared/models/customer.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/models/customer.ts ***!
  \*******************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer(userCustomer, firstName, lastName, email, phoneNumber, address) {
        this.userCustomer = userCustomer;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }
    return Customer;
}());



/***/ }),

/***/ "./src/app/shared/models/discount.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/models/discount.ts ***!
  \*******************************************/
/*! exports provided: Discount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Discount", function() { return Discount; });
var Discount = /** @class */ (function () {
    function Discount(code, discount, expired, amount, amountOfUses, amountLeft) {
        this.code = code;
        this.discount = discount;
        this.expired = expired;
        this.amount = amount;
        this.amountOfUses = amountOfUses;
        this.amountLeft = amountLeft;
    }
    return Discount;
}());



/***/ }),

/***/ "./src/app/shared/models/purchase.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/models/purchase.ts ***!
  \*******************************************/
/*! exports provided: Purchase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Purchase", function() { return Purchase; });
var Purchase = /** @class */ (function () {
    function Purchase(purchaseId, customer, coupon, amount, note, date, totalPrice, discountCode) {
        this.purchaseId = purchaseId;
        this.customer = customer;
        this.coupon = coupon;
        this.amount = amount;
        this.note = note;
        this.date = date;
        this.totalPrice = totalPrice;
        this.discountCode = discountCode;
    }
    return Purchase;
}());



/***/ }),

/***/ "./src/app/shared/models/user.ts":
/*!***************************************!*\
  !*** ./src/app/shared/models/user.ts ***!
  \***************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(id, userName, password, type, company) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.type = type;
        this.company = company;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/shared/services/cart.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/cart.service.ts ***!
  \*************************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CartService = /** @class */ (function () {
    function CartService() {
    }
    CartService.prototype.removeFromCart = function (coupon) {
        var couponsArray = this.getLocal();
        var index = couponsArray.indexOf(coupon);
        couponsArray.splice(index, 1);
        localStorage.setItem("coupons", this.setLocal(couponsArray));
    };
    CartService.prototype.addToCart = function (c) {
        var couponsArray = this.getLocal();
        if (couponsArray == null) {
            couponsArray = [];
        }
        couponsArray.push(c);
        var couponsStr = JSON.stringify(couponsArray);
        localStorage.setItem("coupons", couponsStr);
    };
    CartService.prototype.setLocal = function (couponsArray) {
        var couponsStr = JSON.stringify(couponsArray);
        return couponsStr;
    };
    CartService.prototype.getLocal = function () {
        var couponStr = localStorage.getItem("coupons");
        var couponsObj = JSON.parse(couponStr);
        return couponsObj;
    };
    CartService.prototype.getCountItems = function () {
        var couponsArray = this.getLocal();
        return couponsArray.length;
    };
    CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/shared/services/categories.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/categories.service.ts ***!
  \*******************************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CategoriesService = /** @class */ (function () {
    function CategoriesService() {
        this.categories = [
            "FOOD",
            "DRINKS",
            "ELECTRONICS",
            "CLOTHING",
            "WATCHES",
            "HOTELS",
            "FLIGHTS",
            "RENTAL_CAR",
            "BOOKS",
            "BABY",
            "TOYS",
            "SPORT",
            "SOFTWARE",
            "BEAUTY",
            "PETS",
            "ARTS",
            "FASHION",
            "CAMERAS"
        ];
    }
    CategoriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CategoriesService);
    return CategoriesService;
}());



/***/ }),

/***/ "./src/app/shared/services/company.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/company.service.ts ***!
  \****************************************************/
/*! exports provided: CompanyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyService", function() { return CompanyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories.service */ "./src/app/shared/services/categories.service.ts");
/* harmony import */ var _models_company__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/company */ "./src/app/shared/models/company.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./message.service */ "./src/app/shared/services/message.service.ts");







var CompanyService = /** @class */ (function () {
    function CompanyService(http, myCategories, router, messageService) {
        this.http = http;
        this.myCategories = myCategories;
        this.router = router;
        this.messageService = messageService;
        this.wrapper = {
            companyId: null,
            company: null,
            companies: null,
            userId: null,
            coupon: null,
            coupons: null,
            couponId: null,
            purchases: null,
            user: null,
            token: null,
            message: null
        };
        this.categories = this.myCategories.categories;
        this.wrapper.company = new _models_company__WEBPACK_IMPORTED_MODULE_4__["Company"]();
    }
    CompanyService.prototype.createCompany = function (company, token) {
        var _this = this;
        var observable = this.http.post("http://localhost:8080/companies/?token=" + token, company);
        observable.subscribe(function (res) {
            console.log("Create company success !\n", _this.wrapper.company);
            _this.messageService.wrapper.message = "Company '" + company.name + "' created successfully!";
            _this.router.navigate(["/message"]);
        }, function (err) {
            alert("Create company faild!");
            alert("Error: " + err.status + ", Message: " + err.error.message);
        });
    };
    CompanyService.prototype.getCompany = function (companyId, token) {
        var _this = this;
        var observable = this.http.get("http://localhost:8080/companies/" + companyId + "?token=" + token);
        observable.subscribe(function (res) {
            _this.wrapper.company = res;
            console.log("Company " + companyId + "geted successfully!");
            console.log(_this.wrapper.company);
        }, function (err) {
            alert("Error: " + err.status + ", Message: " + err.error.message);
        });
        return this.wrapper.company;
    };
    CompanyService.prototype.deleteCompany = function (company, token) {
        var _this = this;
        var observable = this.http.delete("http://localhost:8080/companies/" + company.id + "?token=" + token);
        observable.subscribe(function (res) {
            console.log("Company " + company.name + " deleted  successfully!");
            _this.messageService.wrapper.message = "Company'" + company.name + "' deleted  successfully!";
            _this.router.navigate(["/message"]);
        }, function (err) {
            alert("Error: " + err.status + ", Message: " + err.error.message);
        });
    };
    CompanyService.prototype.updateCompany = function (company, token) {
        var _this = this;
        var observable = this.http.put("http://localhost:8080/companies?token=" + token, company);
        observable.subscribe(function (res) {
            console.log("Company " + company.id + "updated successfully!");
            _this.messageService.wrapper.message = "Company'" + company.name + "'updated successfully!";
            _this.router.navigate(["/message"]);
        }, function (err) {
            alert("Error: " + err.status + ", Message: " + err.error.message);
        });
    };
    CompanyService.prototype.getAllCompanies = function (token) {
        var _this = this;
        var observable = this.http.get("http://localhost:8080/companies/?token=" + token);
        observable.subscribe(function (res) {
            _this.wrapper.companies = res;
            console.log("Companies geted successfully!");
            console.log(_this.wrapper.companies);
        }, function (err) {
            alert("Error: " + err.status + ", Message: " + err.error.message);
        });
        return this.wrapper.companies;
    };
    CompanyService.prototype.getUserName = function () {
        return this.wrapper.user.userName;
    };
    CompanyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _categories_service__WEBPACK_IMPORTED_MODULE_3__["CategoriesService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"]])
    ], CompanyService);
    return CompanyService;
}());



/***/ }),

/***/ "./src/app/shared/services/coupon-cods.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/coupon-cods.service.ts ***!
  \********************************************************/
/*! exports provided: DiscountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountService", function() { return DiscountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DiscountService = /** @class */ (function () {
    function DiscountService(http) {
        this.http = http;
    }
    DiscountService.prototype.setCouponCode = function (code, token) {
        var observable = this.http.post("http://localhost:8080/discountes/?token=" + token, code);
        observable.subscribe(function (res) {
            alert("Your code is complite");
            console.log("code successful \n");
        }, function (err) {
            alert("code failed ! Error: \n" + err.status + "\n Message: " + err.error.message);
        });
    };
    DiscountService.prototype.getCouponCode = function (code, token) {
        var _this = this;
        var observable = this.http.get("http://localhost:8080/discountes/" + code + "?token=" + token);
        observable.subscribe(function (res) {
            _this.couponCode = res;
            console.log("get Discount  success !");
            console.log(_this.couponCode);
        }, function (err) {
            alert("get Discount failed ! Error: \n" + err.status + "\n Message: " + err.error.message);
        });
        return this.couponCode;
    };
    DiscountService.prototype.getCouponCodes = function (token) {
        var _this = this;
        var observable = this.http.get("http://localhost:8080/discountes?token=" + token);
        observable.subscribe(function (res) {
            _this.couponCods = res;
            console.log("get Discounts  success !");
            console.log(_this.couponCods);
        }, function (err) {
            alert("get Discounts failed ! Error: \n" + err.status + "\n Message: " + err.error.message);
        });
        return this.couponCods;
    };
    DiscountService.prototype.deleteDiscount = function (code, token) {
        var observable = this.http.delete("http://localhost:8080/discountes/" + code + "?token=" + token);
        observable.subscribe(function (res) {
            console.log("Discount No: " + code + " deleted successfully!");
        }, function (err) {
            alert("Error: " + err.status + ", Message: " + err.error.message);
        });
    };
    DiscountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DiscountService);
    return DiscountService;
}());



/***/ }),

/***/ "./src/app/shared/services/coupon.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/coupon.service.ts ***!
  \***************************************************/
/*! exports provided: CouponService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponService", function() { return CouponService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CouponService = /** @class */ (function () {
    function CouponService(http) {
        this.http = http;
        this.wrapper = {
            coupon: null,
            coupons: null,
            couponPurchases: null
        };
    }
    CouponService.prototype.getAllCoupons = function (token) {
        var _this = this;
        var observable = this.http.get("http://localhost:8080/coupons?token=" + token);
        observable.subscribe(function (res) {
            _this.wrapper.coupons = res;
            console.log("get Coupon success ! \n number of coupons: " + _this.wrapper.coupons.length);
            console.log(_this.wrapper.coupons);
            _this.wrapper.coupons = res;
            return res;
        }, function (err) {
            _this.wrapper.coupons = null;
            alert("get coupons failed ! Error: \n" + err.status + "\n Message: " + err.error.message);
        });
        return this.wrapper.coupons;
    };
    CouponService.prototype.getCouponsByCompany = function (companyId, token) {
        var _this = this;
        var observable = this.http.get("http://localhost:8080/coupons/byCompany?id=" + companyId + "&token=" + token);
        observable.subscribe(function (res) {
            _this.wrapper.coupons = res;
            console.log("get Coupon success ! \n number of coupons: " + _this.wrapper.coupons.length);
            console.log(_this.wrapper.coupons);
            _this.wrapper.coupons = res;
        }, function (err) {
            _this.wrapper.coupons = null;
            alert("get coupons failed ! Error: \n" + err.status + "\n Message: " + err.error.message);
        });
    };
    CouponService.prototype.getCouponsByCompanyAndCategory = function (category, companyId, token) {
        var _this = this;
        var observable = this.http.get("http://localhost:8080/coupons/byCompany/category?id=" + companyId + "&category=" + category + "&token=" + token);
        observable.subscribe(function (res) {
            _this.wrapper.coupons = res;
            console.log("get By Company And Category Coupon success ! \n number of coupons: " + _this.wrapper.coupons.length);
            console.log(_this.wrapper.coupons);
            _this.wrapper.coupons = res;
        }, function (err) {
            _this.wrapper.coupons = null;
            alert("get coupons failed ! Error: \n" + err.status + "\n Message: " + err.error.message);
        });
    };
    CouponService.prototype.getCouponsByCategory = function (category, token) {
        var _this = this;
        var observable = this.http.get("http://localhost:8080/coupons/byCategory?category=" + category + "&token=" + token);
        observable.subscribe(function (res) {
            _this.wrapper.coupons = res;
            console.log("get By Company And Category Coupon success ! \n number of coupons: " + _this.wrapper.coupons.length);
            console.log(_this.wrapper.coupons);
            _this.wrapper.coupons = res;
        }, function (err) {
            _this.wrapper.coupons = null;
            alert("get coupons failed ! Error: \n" + err.status + "\n Message: " + err.error.message);
        });
    };
    CouponService.prototype.getCouponsByCompanyAndMaxPrice = function (maxPrice, companyId, token) {
        var _this = this;
        var observable = this.http.get("http://localhost:8080/coupons/byCompany/maxPrice?id=" + companyId + "&maxPrice=" + maxPrice + "&token=" + token);
        observable.subscribe(function (res) {
            _this.wrapper.coupons = res;
            console.log("get Coupon By Company And Max Price success ! \n number of coupons: " + _this.wrapper.coupons.length);
            console.log(_this.wrapper.coupons);
            _this.wrapper.coupons = res;
        }, function (err) {
            _this.wrapper.coupons = null;
            alert("get coupons failed ! Error: \n" + err.status + "\n Message: " + err.error.message);
        });
    };
    CouponService.prototype.getCouponsByMaxPrice = function (maxPrice, token) {
        var _this = this;
        var observable = this.http.get("http://localhost:8080/coupons/byMaxPrice?maxPrice=" + maxPrice + "&token=" + token);
        observable.subscribe(function (res) {
            _this.wrapper.coupons = res;
            console.log("get Coupon By Company And Max Price success ! \n number of coupons: " + _this.wrapper.coupons.length);
            console.log(_this.wrapper.coupons);
            _this.wrapper.coupons = res;
        }, function (err) {
            _this.wrapper.coupons = null;
            alert("get coupons failed ! Error: \n" + err.status + "\n Message: " + err.error.message);
        });
    };
    CouponService.prototype.getCouponsByCustomer = function (ustomerId, token) {
        var _this = this;
        var observable = this.http.get("http://localhost:8080/coupons/byCustomer?id=" + ustomerId + "&token=" + token);
        observable.subscribe(function (res) {
            _this.wrapper.couponPurchases = res;
            console.log("get Coupon success ! \n number of coupons: " + _this.wrapper.couponPurchases.length);
            console.log(_this.wrapper.couponPurchases);
            return _this.wrapper.couponPurchases;
        }, function (err) {
            _this.wrapper.couponPurchases = null;
            alert("get coupons failed ! Error: \n" + err.status + "\n Message: " + err.error.message);
        });
        return this.wrapper.couponPurchases;
    };
    CouponService.prototype.createCoupon = function (token, coupon) {
        var observable = this.http.post("http://localhost:8080/coupons/?token=" + token, coupon);
        observable.subscribe(function (res) {
            console.log("coupon No: " + res + " crated successfully!");
        }, function (err) {
            alert("Error: " + err.status + ",\n Message: " + err.error.message);
        });
    };
    CouponService.prototype.updateCoupon = function (token, coupon) {
        var observable = this.http.put("http://localhost:8080/coupons/?token=" + token, coupon);
        observable.subscribe(function (res) {
            console.log("coupon No: " + coupon.id + "updated successfully!");
        }, function (err) {
            alert("Error: " + err.status + "\n Update faild.\n Message: " + err.error.message);
        });
    };
    CouponService.prototype.deleteCoupon = function (id, token) {
        var observable = this.http.delete("http://localhost:8080/coupons/" + id + "/?token=" + token);
        observable.subscribe(function (res) {
            console.log("coupon No: " + id + " deleted successfully!");
        }, function (err) {
            alert("Error: " + err.status + ", Message: " + err.error.message);
        });
    };
    CouponService.prototype.getCoupon = function (id, token) {
        var _this = this;
        var observable = this.http.get("http://localhost:8080/coupons/" + id + "?token=" + token);
        observable.subscribe(function (res) {
            _this.wrapper.coupon = res;
            console.log("get Coupon  success !");
            console.log(_this.wrapper.coupon);
            _this.wrapper.coupon = res;
        }, function (err) {
            _this.wrapper.coupons = null;
            alert("get coupon failed ! Error: \n" + err.status + "\n Message: " + err.error.message);
        });
        return this.wrapper.coupon;
    };
    CouponService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CouponService);
    return CouponService;
}());



/***/ }),

/***/ "./src/app/shared/services/customer.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/customer.service.ts ***!
  \*****************************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var CustomerService = /** @class */ (function () {
    function CustomerService(http, router) {
        this.http = http;
        this.router = router;
    }
    CustomerService.prototype.CustomerRegister = function (customer) {
        var _this = this;
        var observable = this.http.post("http://localhost:8080/customers", customer);
        observable.subscribe(function (res) {
            alert("Your register is complite");
            console.log("Register successful \n");
            _this.router.navigate(["/login"]);
        }, function (err) {
            alert("Register failed ! Error: \n" + err.status + "\n Message: " + err.error.message);
        });
    };
    CustomerService.prototype.updateCustomer = function (customer, token) {
        var _this = this;
        var observable = this.http.put("http://localhost:8080/customers?token=" + token, customer);
        observable.subscribe(function (res) {
            alert("Your update is complite");
            console.log("Update customer successful \n");
            _this.router.navigate(["/customer"]);
        }, function (err) {
            alert("Update failed ! Error: \n" + err.status + "\n Message: " + err.error.message);
        });
    };
    CustomerService.prototype.getCustomer = function (id, token) {
        var _this = this;
        var observable = this.http.get("http://localhost:8080/customers/" + id + "?token=" + token);
        {
            observable.subscribe(function (res) {
                _this.customer = res;
                console.log(_this.customer);
            }, function (err) {
                alert("Error: " + err.status + ", Message: " + err.error.message);
            });
        }
        return this.customer;
    };
    CustomerService.prototype.deleteCustomer = function (id, token) {
        var observable = this.http.delete("http://localhost:8080/customers/" + id + "?token=" + token);
        observable.subscribe(function (res) {
            alert("Customer delete successfully");
            console.log("Customer delete successfully");
        }, function (err) {
            alert("delete failed ! Error: \n" + err.status + "\n Message: " + err.error.message);
        });
    };
    CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/shared/services/message.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/message.service.ts ***!
  \****************************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var MessageService = /** @class */ (function () {
    function MessageService(router) {
        this.router = router;
        this.wrapper = {
            message: null
        };
    }
    MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/app/shared/services/purchase.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/purchase.service.ts ***!
  \*****************************************************/
/*! exports provided: PurchaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseService", function() { return PurchaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PurchaseService = /** @class */ (function () {
    function PurchaseService(http, router) {
        this.http = http;
        this.router = router;
        this.wrapper = {
            purchase: null,
            purchases: null,
        };
    }
    PurchaseService.prototype.createPurchase = function (token, purchase) {
        var _this = this;
        var observable = this.http.post("http://localhost:8080/purchases/?token=" + token, purchase);
        observable.subscribe(function (res) {
            console.log("the purchase is: " + res);
            localStorage.setItem("purchase", JSON.stringify(res));
            _this.router.navigate(["/thankyou"]);
            return res;
        }, function (err) {
            alert("Error: " + err.status + ", Message: " + err.error.message);
        });
        return null;
    };
    PurchaseService.prototype.getPurchase = function (purchaseId, token) {
        var _this = this;
        var observable = this.http.get("http://localhost:8080/purchases/" + purchaseId + "?token=" + token);
        observable.subscribe(function (res) {
            _this.wrapper.purchase = res;
            console.log("purchase no'" + res.purchaseId + " geted successfully !");
            console.log(_this.wrapper.purchases);
        }, function (err) {
            alert("Error: " + err.status + ", Message: " + err.error.message);
        });
        return this.wrapper.purchase;
    };
    PurchaseService.prototype.getPurchasesByCompany = function (companyId, token) {
        var _this = this;
        var observable = this.http.get("http://localhost:8080/purchases/byCompany?id=" + companyId + "&token=" + token);
        observable.subscribe(function (res) {
            _this.wrapper.purchases = res;
            console.log("get purchases success ! \nnumber of purchases: " + _this.wrapper.purchases.length);
            console.log(_this.wrapper.purchases);
        }, function (err) {
            alert("Error: " + err.status + ", Message: " + err.error.message);
        });
        return this.wrapper.purchases;
    };
    PurchaseService.prototype.getPurchasesByCustomer = function (customerId, token) {
        var _this = this;
        var observable = this.http.get("http://localhost:8080/purchases/byCustomer?id=" + customerId + "&token=" + token);
        observable.subscribe(function (res) {
            _this.wrapper.purchases = res;
            console.log("get purchases success ! \nnumber of purchases: " + _this.wrapper.purchases.length);
            console.log(_this.wrapper.purchases);
        }, function (err) {
            alert("Error: " + err.status + ", Message: " + err.error.message);
        });
        return this.wrapper.purchases;
    };
    PurchaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PurchaseService);
    return PurchaseService;
}());



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./message.service */ "./src/app/shared/services/message.service.ts");





var UserService = /** @class */ (function () {
    function UserService(http, router, messageService) {
        this.http = http;
        this.router = router;
        this.messageService = messageService;
    }
    UserService.prototype.login = function (user) {
        var _this = this;
        var observable = this.http.post("http://localhost:8080/users/login", user);
        observable.subscribe(function (res) {
            _this.loggedData = res;
            alert("Login successful");
            if (_this.loggedData.userType == 'COMPANY') {
                _this.isCompany = true;
                _this.router.navigate(["/company"]);
            }
            else if (_this.loggedData.userType == 'CUSTOMER') {
                _this.isCustomer = true;
                _this.router.navigate(["/customer"]);
            }
            else {
                _this.isAdmin = true;
                _this.router.navigate(["/admin"]);
            }
            sessionStorage.setItem("token", _this.loggedData.userToken);
            sessionStorage.setItem("id", _this.loggedData.userId + "");
            sessionStorage.setItem("companyId", _this.loggedData.companyId + "");
        }, function (err) {
            alert("Login failed ! Error: \n" + err.status + "\n Message: " + err.error.message);
        });
    };
    UserService.prototype.gatUser = function (id, token) {
        var _this = this;
        var observable = this.http.get("http://localhost:8080/users/" + id + "?token=" + token);
        observable.subscribe(function (res) {
            _this.user = res;
            console.log("Get user successfully \n");
            console.log(_this.user);
        }, function (err) {
            alert("Get user failed ! Error: \n" + err.status + "\n Message: " + err.error.message);
        });
        return this.user;
    };
    UserService.prototype.getAllUsers = function (token) {
        var _this = this;
        var observable = this.http.get("http://localhost:8080/users?token=" + token);
        observable.subscribe(function (res) {
            _this.users = res;
            console.log("Get users successfully \n");
            console.log(_this.users);
        }, function (err) {
            alert("Get user failed ! Error: \n" + err.status + "\n Message: " + err.error.message);
        });
        return this.users;
    };
    UserService.prototype.getCompanyUsers = function (companyId, token) {
        var _this = this;
        var observable = this.http.get("http://localhost:8080/users/byCompany?id=" + companyId + "&token=" + token);
        observable.subscribe(function (res) {
            _this.companyUsers = res;
            console.log("Get company users successfully \n");
            console.log(_this.companyUsers);
        }, function (err) {
            alert("Get company users failed ! Error: \n" + err.status + "\n Message: " + err.error.message);
        });
        return this.companyUsers;
    };
    UserService.prototype.addUser = function (user, token) {
        var _this = this;
        var observable = this.http.post("http://localhost:8080/users?token=" + token, user);
        observable.subscribe(function (res) {
            console.log("User added successfully \n");
            _this.messageService.wrapper.message = "User  No " + res + " created successfully!";
            _this.router.navigate(["/message"]);
        }, function (err) {
            alert("Add user ! Error: \n" + err.status + "\n Message: " + err.error.message);
        });
    };
    UserService.prototype.updateUser = function (user, token) {
        var _this = this;
        var observable = this.http.put("http://localhost:8080/users/?token=" + token, user);
        observable.subscribe(function (res) {
            alert("Updated successfully");
            console.log("User updated successfully");
            _this.router.navigate(["/login"]);
        }, function (err) {
            alert("Update user failed ! Error: \n" + err.status + "\n Message: " + err.error.message);
        });
    };
    UserService.prototype.deleteUser = function (user, token) {
        var _this = this;
        var observable = this.http.delete("http://localhost:8080/users/" + user.id + "?token=" + token);
        observable.subscribe(function (res) {
            console.log("User deleted successfully");
            _this.messageService.wrapper.message = "User  No " + user.id + " deleted successfully!";
            _this.router.navigate(["/message"]);
        }, function (err) {
            alert("Delete user failed ! Error: \n" + err.status + "\n Message: " + err.error.message);
        });
    };
    UserService.prototype.signUot = function () {
        sessionStorage.clear();
        this.user = undefined;
        alert("signUot successful");
        this.router.navigate(["/home"]);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Java\Final project\couponsWebSide\coupons\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map