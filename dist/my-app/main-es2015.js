(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner\n  bdColor=\"rgba(51,51,51,0.8)\"\n  size=\"medium\"\n  color=\"#fff\"\n  type=\"ball-scale-multiple\">\n <p style=\"font-size: 20px; color: white\">Loading...</p>\n</ngx-spinner>\n\n<div style=\"z-index: 2;height: 100%;\">\n        <h2 class=\"mt-5 mb-5 text-center home-title\"  style=\"color:indigo; margin: 10px;\">MyContacts</h2>\n        <router-outlet></router-outlet>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contactOverview/contactOverview.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contactOverview/contactOverview.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <mat-card class=\"example-card\" style=\"margin: 4px;\">\n\n      <mat-card-header>\n        <div mat-card-avatar class=\"example-header-image\"></div>\n        <mat-card-title>{{peopleService.selectedFirstName}} {{peopleService.selectedLastName}}</mat-card-title>\n        <mat-card-subtitle>{{peopleService.selectedMobile}}</mat-card-subtitle>\n      </mat-card-header>\n    <mat-card-content style=\"display: flex;flex-direction: column;justify-content: space-between;\">\n\n\n      <form class=\"example-form\" [formGroup]=\"this.peopleService.form\">\n\n        <div class=\"form-group\">\n              <div style=\"display: flex;flex-direction: row;justify-content: space-between;\">\n                <mat-form-field style=\"margin-right: 2px;width: 45%;\">\n                    <input matInput formControlName=\"firstName\" class=\"form-control\" [ngClass]=\"{'is-invalid':submitted && formControls.firstName.errors}\">\n                    <mat-placeholder >First Name</mat-placeholder>\n                    <div class=\"invalid-feedback\" *ngIf=\"submitted && formControls.firstName.errors\" style=\"color: red;\">This field is required</div>\n                  </mat-form-field>\n                <!--div class=\"form-group\"-->\n                  <mat-form-field style=\"width: 45%;\">\n                    <input matInput placeholder=\"Last name\" formControlName=\"lastName\">\n                  </mat-form-field>\n                <!--/div-->\n              </div>\n        </div>\n\n\n        <div class=\"form-group\">\n          <mat-form-field style=\"width: 45%;\">\n            <input matInput formControlName=\"mobile\" class=\"form-control\" [ngClass]=\"{'is-invalid':submitted && formControls.mobile.errors}\">\n              <mat-placeholder>\n                Mobile\n              </mat-placeholder>\n              <div class=\"invalid-feedback\" *ngIf=\"submitted && formControls.mobile.errors\">\n                <label *ngIf=\"formControls.mobile.errors.required\" style=\"color: red;\">This field is required.</label>\n                <label *ngIf=\"formControls.mobile.errors.minlength\" style=\"color: red;\">At least 8 numbers.</label>\n              </div>\n            </mat-form-field>\n        </div>\n\n        <div class=\"form-group\">\n          <mat-form-field style=\"width: 45%;\">\n            <input matInput formControlName=\"email\" class=\"form-control\" [ngClass]=\"{'is-invalid':submitted && formControls.email.errors}\">\n            <mat-placeholder>Email</mat-placeholder>\n            <div class=\"invalid-feedback\" *ngIf=\"submitted && formControls.email.errors\" style=\"color: red;\">Invalid Email Address</div>\n          </mat-form-field>\n        </div>\n\n        <div class=\"form-group\">\n          <mat-form-field style=\"width: 45%;\">\n            <input matInput placeholder=\"Address\" formControlName=\"address\">\n          </mat-form-field>\n\n        <table class=\"example-full-width\" cellspacing=\"0\">\n          <tr>\n            <mat-form-field class=\"example-full-width\">\n                <textarea matInput placeholder=\"Note\" formControlName=\"note\"></textarea>\n            </mat-form-field>\n          </tr>\n        </table>\n      </div>\n\n    </form>\n\n    <mat-action-row style=\"display: flex;justify-content: space-between;padding: 10px;\">\n        <a class=\"nav-link\" href=\"#home\">\n            <button mat-button color=\"primary\">BACK</button>\n        </a>\n\n\n        <a class=\"nav-link\" href=\"#home\">\n          <button mat-button color=\"warn\" (click)=\"delete()\">DELETE</button>\n        </a>\n\n        <button mat-button color=\"primary\" (click)=\"onSubmit()\" style=\"right: 0px;\">SAVE</button>\n\n      </mat-action-row>\n  </mat-card-content>\n\n</mat-card>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contacts.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contacts.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row components-wrap\">\n  <div class=\"col-sm-12 col-md-12 col-lg-9 people-list-component-wrap\">\n    <app-people-list></app-people-list>\n    <a class=\"nav-link\" href=\"#search\">\n      <button mat-fab color=\"primary\" style=\"position:fixed; right: 0px;\" (click)=\"new()\">\n        New\n      </button>\n    </a>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/people-list/people-list.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/people-list/people-list.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n\n    <form class=\"mb-5 form-inline\">\n        <mat-form-field style=\"width: 100%;\">\n          <input matInput name=\"searchInput\" #searchInput=\"ngModel\" [(ngModel)]=\"searchText\" style=\"width: 100%;\">\n          <mat-placeholder style=\"color:white\">Search</mat-placeholder>\n        </mat-form-field>\n    </form>\n\n    <mat-accordion class=\"example-headers-align\">\n      <mat-expansion-panel [disabled]=\"true\">\n        <mat-expansion-panel-header>\n          <mat-panel-title (click)='orderByFirstName()' style=\"color: black;\">\n            <button mat-raised-button color=\"primary\">FIRST NAME</button>\n          </mat-panel-title>\n          <mat-panel-title (click)='orderByLastName()' style=\"color: black;\">\n            <button mat-raised-button color=\"primary\">LAST NAME</button>\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n      </mat-expansion-panel>\n\n      <mat-expansion-panel *ngFor=\"let people of peopleArray\"  hideToggle>\n        <mat-expansion-panel-header *ngIf=\"filterConditionFirstName(people) || filterConditionLastName(people) || filterConditionNumber(people)\">\n          <mat-panel-title>\n            {{people.firstName}}\n          </mat-panel-title>\n          <mat-panel-title>\n            {{people.lastName}}\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n\n        <mat-panel-title>\n            mobile:\n        </mat-panel-title>\n        <mat-panel-description>\n          {{people.mobile}}\n        </mat-panel-description>\n\n        <mat-panel-title>\n          Email:\n        </mat-panel-title>\n        <mat-panel-description>\n          {{people.email}}\n        </mat-panel-description>\n        <mat-panel-title>\n          Address:\n        </mat-panel-title>\n        <mat-panel-description>\n          {{people.address}}\n        </mat-panel-description>\n        <mat-panel-title>\n          Note:\n        </mat-panel-title>\n        <mat-panel-description>\n          {{people.note}}\n        </mat-panel-description>\n\n        <mat-action-row>\n          <button mat-button color=\"warn\" (click)=\"onDelete(people.$key)\">DELETE</button>\n          <a class=\"nav-link\" href=\"#search\">\n          <button mat-button color=\"primary\" (click)=\"peopleService.populateForm(people)\" >EDIT</button>\n        </a>\n        </mat-action-row>\n\n\n      </mat-expansion-panel>\n\n    </mat-accordion>\n\n</div>\n\n\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\nh2 {\n    color: white;\n}\n\n.home-title {\n    font-size: 36px;\n    font-weight: bold;\n    text-transform: uppercase;\n    color: #FFF;\n    position: relative;\n    text-shadow: 6px 6px 8px rgba(0,0,0,0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQix3Q0FBd0M7QUFDNUMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbmgyIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5ob21lLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1zaGFkb3c6IDZweCA2cHggOHB4IHJnYmEoMCwwLDAsMC4zKTtcbn0iXX0= */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");



let AppComponent = class AppComponent {
    constructor(spinner) {
        this.spinner = spinner;
        this.title = 'MyContacts';
    }
    getAnimationData(outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }
    ngOnInit() {
        this.spinner.show();
        setTimeout(() => {
            this.spinner.hide();
        }, 3000);
    }
};
AppComponent.ctorParameters = () => [
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _contactOverview_contactOverview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contactOverview/contactOverview.component */ "./src/app/contactOverview/contactOverview.component.ts");
/* harmony import */ var _people_list_people_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./people-list/people-list.component */ "./src/app/people-list/people-list.component.ts");
/* harmony import */ var _my_service_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./my-service.service */ "./src/app/my-service.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");

/* Firebase Setup */



/*Angular */






/*Spinner */

/*Components */




/*Service */

/* Material Design */



const Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'find', redirectTo: 'search' },
    { path: 'home', component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_12__["ContactsComponent"] },
    { path: 'search', component: _contactOverview_contactOverview_component__WEBPACK_IMPORTED_MODULE_13__["ContactOverviewComponent"] },
    { path: '**', component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_12__["ContactsComponent"] }
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
            _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_12__["ContactsComponent"],
            _people_list_people_list_component__WEBPACK_IMPORTED_MODULE_14__["PeopleListComponent"],
            _contactOverview_contactOverview_component__WEBPACK_IMPORTED_MODULE_13__["ContactOverviewComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(Routes, { useHash: true }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_2__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["firebaseConfig"]),
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabaseModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"]
        ],
        providers: [
            _my_service_service__WEBPACK_IMPORTED_MODULE_15__["PeopleService"],
        ],
        bootstrap: [
            _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/contactOverview/contactOverview.component.css":
/*!***************************************************************!*\
  !*** ./src/app/contactOverview/contactOverview.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n.example-header-image {\n  background-image: url('account.png');\n  background-size: cover;\n}\n\n.example-form {\n  min-width: 150px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\ntd {\n  padding-right: 8px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdE92ZXJ2aWV3L2NvbnRhY3RPdmVydmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7RUFDRSxvQ0FBbUQ7RUFDbkQsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RPdmVydmlldy9jb250YWN0T3ZlcnZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uL2Fzc2V0cy9hY2NvdW50LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRkIHtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/contactOverview/contactOverview.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/contactOverview/contactOverview.component.ts ***!
  \**************************************************************/
/*! exports provided: ContactOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactOverviewComponent", function() { return ContactOverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _my_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../my-service.service */ "./src/app/my-service.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");




let ContactOverviewComponent = class ContactOverviewComponent {
    constructor(peopleService, _snackBar) {
        this.peopleService = peopleService;
        this._snackBar = _snackBar;
        this.formControls = this.peopleService.form.controls;
    }
    ngOnInit() {
    }
    delete() {
        if (confirm('Are you sure to delete this record?')) {
            this.peopleService.deletePeople(this.peopleService.key);
            this._snackBar.open("Deleted successfully", "", {
                duration: 5 * 1000,
            });
        }
    }
    onSubmit() {
        this.submitted = true;
        if (this.peopleService.form.valid) {
            if (this.peopleService.form.get('$key').value == null) {
                this.peopleService.insertPeople(this.peopleService.form.value);
                this._snackBar.open("Contact added successfully", "", {
                    duration: 5 * 1000,
                });
            }
            else {
                this.peopleService.updatePeople(this.peopleService.form.value);
                this._snackBar.open("Contact modified successfully", "", {
                    duration: 5 * 1000,
                });
            }
            this.submitted = false;
        }
    }
};
ContactOverviewComponent.ctorParameters = () => [
    { type: _my_service_service__WEBPACK_IMPORTED_MODULE_2__["PeopleService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
];
ContactOverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contactOverview',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contactOverview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contactOverview/contactOverview.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contactOverview.component.css */ "./src/app/contactOverview/contactOverview.component.css")).default]
    })
], ContactOverviewComponent);



/***/ }),

/***/ "./src/app/contacts/contacts.component.css":
/*!*************************************************!*\
  !*** ./src/app/contacts/contacts.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".people-component-wrap {\n    background: rgba(0, 0, 0, 0.6) none repeat scroll 0 0;\n    margin: 0px 10px;\n    min-width: 20%;\n    padding: 30px;\n}\n\n.people-list-component-wrap {\n    background: rgba(0, 0, 0, 0.6) none repeat scroll 0 0;\n    margin: 0px 10px;\n    padding: 30px;\n}\n\n.form-control {\n    padding: 0px !important;\n    border: 0px !important;\n    margin: 0px !important;\n    background: none !important;\n    border-radius: 0px!important;\n    top: 0px!important;\n    bottom: 0px!important;\n    outline: none!important;\n    box-shadow: none!important;\n    height: 17px!important;\n    transition: none!important;\n\n\n}\n\n@media (max-width: 768px) {\n    .home-title {\n        font-size: 25px!important;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFEQUFxRDtJQUNyRCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxxREFBcUQ7SUFDckQsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIsMEJBQTBCOzs7QUFHOUI7O0FBR0E7SUFDSTtRQUNJLHlCQUF5QjtJQUM3QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wZW9wbGUtY29tcG9uZW50LXdyYXAge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuICAgIG1hcmdpbjogMHB4IDEwcHg7XG4gICAgbWluLXdpZHRoOiAyMCU7XG4gICAgcGFkZGluZzogMzBweDtcbn1cblxuLnBlb3BsZS1saXN0LWNvbXBvbmVudC13cmFwIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNikgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcbiAgICBtYXJnaW46IDBweCAxMHB4O1xuICAgIHBhZGRpbmc6IDMwcHg7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IWltcG9ydGFudDtcbiAgICB0b3A6IDBweCFpbXBvcnRhbnQ7XG4gICAgYm90dG9tOiAwcHghaW1wb3J0YW50O1xuICAgIG91dGxpbmU6IG5vbmUhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMTdweCFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogbm9uZSFpbXBvcnRhbnQ7XG5cblxufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5ob21lLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4IWltcG9ydGFudDtcbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/contacts/contacts.component.ts":
/*!************************************************!*\
  !*** ./src/app/contacts/contacts.component.ts ***!
  \************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _my_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../my-service.service */ "./src/app/my-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let ContactsComponent = class ContactsComponent {
    constructor(peopleService) {
        this.peopleService = peopleService;
        this.formControls = this.peopleService.form.controls;
        this.durationInSeconds = 5;
    }
    ngOnInit() {
    }
    new() {
        this.peopleService.form.reset();
        this.peopleService.selectedFirstName = '';
        this.peopleService.selectedLastName = '';
        this.peopleService.selectedMobile = '';
    }
};
ContactsComponent.ctorParameters = () => [
    { type: _my_service_service__WEBPACK_IMPORTED_MODULE_1__["PeopleService"] }
];
ContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-contacts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contacts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contacts/contacts.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contacts.component.css */ "./src/app/contacts/contacts.component.css")).default]
    })
], ContactsComponent);



/***/ }),

/***/ "./src/app/my-service.service.ts":
/*!***************************************!*\
  !*** ./src/app/my-service.service.ts ***!
  \***************************************/
/*! exports provided: PeopleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleService", function() { return PeopleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/@angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");




let PeopleService = class PeopleService {
    constructor(firebase) {
        this.firebase = firebase;
        this.form = new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            $key: new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            firstName: new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            lastName: new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            email: new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email),
            address: new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            mobile: new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]),
            note: new _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    getPeople() {
        this.peopleList = this.firebase.list('peoples');
        return this.peopleList.snapshotChanges();
    }
    insertPeople(people) {
        this.peopleList.push({
            firstName: people.firstName,
            lastName: people.lastName,
            email: people.email,
            address: people.address,
            mobile: people.mobile,
            note: people.note
        });
    }
    populateForm(people) {
        this.form.reset();
        this.selectedFirstName = people.firstName;
        this.selectedLastName = people.lastName;
        this.selectedMobile = people.mobile;
        this.key = people.$key;
        this.form.patchValue(people);
    }
    updatePeople(people) {
        this.peopleList.update(people.$key, {
            firstName: people.firstName,
            lastName: people.lastName,
            email: people.email,
            address: people.address,
            mobile: people.mobile,
            note: people.note
        });
    }
    deletePeople($key) {
        this.peopleList.remove($key);
    }
};
PeopleService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] }
];
PeopleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PeopleService);



/***/ }),

/***/ "./src/app/people-list/people-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/people-list/people-list.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center;\n}\n\nmat-form-field {\n  margin-right: 12px;\n}\n\n@media (min-width: 780px) {\n   .search-close-x {\n       margin-left: 10px;\n   }\n}\n\n@media (max-width: 780px) {\n   .search-close-x {\n       margin: 0px;\n   }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVvcGxlLWxpc3QvcGVvcGxlLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUdBO0dBQ0c7T0FDSSxpQkFBaUI7R0FDckI7QUFDSDs7QUFFQTtHQUNHO09BQ0ksV0FBVztHQUNmO0FBQ0giLCJmaWxlIjoic3JjL2FwcC9wZW9wbGUtbGlzdC9wZW9wbGUtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtaGVhZGVycy1hbGlnbiAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsXG4uZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gIGZsZXgtYmFzaXM6IDA7XG59XG5cbi5leGFtcGxlLWhlYWRlcnMtYWxpZ24gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzgwcHgpIHtcbiAgIC5zZWFyY2gtY2xvc2UteCB7XG4gICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3ODBweCkge1xuICAgLnNlYXJjaC1jbG9zZS14IHtcbiAgICAgICBtYXJnaW46IDBweDtcbiAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/people-list/people-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/people-list/people-list.component.ts ***!
  \******************************************************/
/*! exports provided: PeopleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleListComponent", function() { return PeopleListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _my_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../my-service.service */ "./src/app/my-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");




let PeopleListComponent = class PeopleListComponent {
    constructor(peopleService, _snackBar) {
        this.peopleService = peopleService;
        this._snackBar = _snackBar;
        this.peopleArray = [];
        this.searchText = '';
    }
    ngOnInit() {
        this.peopleService.getPeople().subscribe(list => {
            this.peopleArray = list.map(item => {
                return Object.assign({ $key: item.key }, item.payload.val());
            });
        });
    }
    onDelete($key) {
        if (confirm('Are you sure to delete this record?')) {
            this.peopleService.deletePeople($key);
            this._snackBar.open("Deleted successfully", "", {
                duration: 5 * 1000,
            });
        }
    }
    filterConditionFirstName(people) {
        return people.firstName.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1;
    }
    filterConditionNumber(people) {
        return people.mobile.indexOf(this.searchText) !== -1;
    }
    filterConditionLastName(people) {
        return people.lastName.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1;
    }
    orderByFirstName() {
        console.log('Ordino per nome');
        this.peopleArray.sort(function (a, b) {
            var textA = a.firstName.toUpperCase();
            var textB = b.firstName.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
    }
    orderByLastName() {
        console.log('Ordino per cognome');
        this.peopleArray.sort(function (a, b) {
            var textA = a.lastName.toUpperCase();
            var textB = b.lastName.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
    }
};
PeopleListComponent.ctorParameters = () => [
    { type: _my_service_service__WEBPACK_IMPORTED_MODULE_1__["PeopleService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
];
PeopleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-people-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./people-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/people-list/people-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./people-list.component.css */ "./src/app/people-list/people-list.component.css")).default]
    })
], PeopleListComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment, firebaseConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const environment = {
    production: false
};
const firebaseConfig = {
    apiKey: "AIzaSyDYXvvWOyXap4dbh1A7eJhQwaT5DS2p5_c",
    authDomain: "mycontacts-8a68f.firebaseapp.com",
    databaseURL: "https://mycontacts-8a68f.firebaseio.com",
    projectId: "mycontacts-8a68f",
    storageBucket: "mycontacts-8a68f.appspot.com",
    messagingSenderId: "107412119311",
    appId: "1:107412119311:web:d23e9fb5a01b576c97a87a",
    measurementId: "G-976MY3FMPF"
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/caste/Scrivania/mycontacts/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map