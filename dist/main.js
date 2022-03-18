(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+pDt":
/*!*****************************************************************!*\
  !*** ./src/app/components/zemogaNode/zemogaNode.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ6ZW1vZ2FOb2RlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Desarrollo\Personal\zemoga\front\src\main.ts */"zUnb");


/***/ }),

/***/ "2pPC":
/*!*******************************************************!*\
  !*** ./src/app/components/zemoga/zemoga.component.ts ***!
  \*******************************************************/
/*! exports provided: ZemogaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZemogaComponent", function() { return ZemogaComponent; });
/* harmony import */ var _raw_loader_zemoga_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./zemoga.component.html */ "HRvT");
/* harmony import */ var _zemoga_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zemoga.component.scss */ "WA/m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_zemoga_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/zemoga.service */ "Uk3Y");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};





var ZemogaComponent = /** @class */ (function () {
    function ZemogaComponent(zemogaService) {
        this.zemogaService = zemogaService;
        this.users = [];
        this.tweets = [];
        this.user = null;
        this.message = '';
    }
    ZemogaComponent.prototype.ngOnInit = function () {
        this.getUsers(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].ENDPOINT_J_GET_USER);
    };
    ZemogaComponent.prototype.getUsers = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.message = '';
                        if (!(url != '')) return [3 /*break*/, 4];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, this.zemogaService.getElement(url)];
                    case 2:
                        _a.users = _b.sent();
                        return [2 /*return*/, this.users];
                    case 3:
                        e_1 = _b.sent();
                        console.log(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ZemogaComponent.prototype.getTweets = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, e_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.message = '';
                        this.user = user;
                        this.tweets = [];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, this.zemogaService.getElement(new Array(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].ENDPOINT_J_GET_USER).concat(user.idportfolio).concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].ENDPOINT_J_GET_TWEET).join("/"))];
                    case 2:
                        _a.tweets = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _b.sent();
                        console.log(e_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ZemogaComponent.prototype.searchTweet = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, e_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(event.key === "Enter")) return [3 /*break*/, 4];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, this.zemogaService.getElement(new Array(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].ENDPOINT_J_GET_USER).concat(this.user.idportfolio).concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].ENDPOINT_J_GET_TWEET).concat(event.target.value).join("/"))];
                    case 2:
                        _a.tweets = _b.sent();
                        this.tweets = this.tweets.data.statuses;
                        return [3 /*break*/, 4];
                    case 3:
                        e_3 = _b.sent();
                        console.log(e_3);
                        return [3 /*break*/, 4];
                    case 4:
                        if (event.key === "Backspace" && (event.target.value.length == 1 || event.target.value.length == 0)) {
                            this.getTweets(this.user);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ZemogaComponent.prototype.saveInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, e_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.message = '';
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, this.zemogaService.updateElement(new Array(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].ENDPOINT_J_GET_USER).concat(this.user.idportfolio).join("/"), this.user)];
                    case 2:
                        _a.user = _b.sent();
                        this.message = 'User updated!!!';
                        return [3 /*break*/, 4];
                    case 3:
                        e_4 = _b.sent();
                        this.message = 'User does not updated';
                        console.log(e_4);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ZemogaComponent.ctorParameters = function () { return [
        { type: _service_zemoga_service__WEBPACK_IMPORTED_MODULE_3__["ZemogaService"] }
    ]; };
    ZemogaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-zemoga',
            template: _raw_loader_zemoga_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_zemoga_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_service_zemoga_service__WEBPACK_IMPORTED_MODULE_3__["ZemogaService"]])
    ], ZemogaComponent);
    return ZemogaComponent;
}());



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    ENDOPOINT_NG: 'http://localhost:3000/timeline',
    ENDOPOINT_NG_SEARCH: 'http://localhost:3000/search/',
    ENDPOINT_J_GET_USER: 'http://localhost:8082/user',
    ENDPOINT_J_GET_TWEET: 'tweets'
};


/***/ }),

/***/ "BO39":
/*!***************************************************************!*\
  !*** ./src/app/components/zemogaNode/zemogaNode.component.ts ***!
  \***************************************************************/
/*! exports provided: ZemogaNodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZemogaNodeComponent", function() { return ZemogaNodeComponent; });
/* harmony import */ var _raw_loader_zemogaNode_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./zemogaNode.component.html */ "exOv");
/* harmony import */ var _zemogaNode_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zemogaNode.component.scss */ "+pDt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_zemoga_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/zemoga.service */ "Uk3Y");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};





var ZemogaNodeComponent = /** @class */ (function () {
    function ZemogaNodeComponent(zemogaService) {
        this.zemogaService = zemogaService;
    }
    ZemogaNodeComponent.prototype.ngOnInit = function () {
        this.consultarServicio(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].ENDOPOINT_NG);
    };
    ZemogaNodeComponent.prototype.searchTweet = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(event.key === "Enter")) return [3 /*break*/, 4];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, this.zemogaService.getElement(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].ENDOPOINT_NG_SEARCH + event.target.value)];
                    case 2:
                        _a.data = _b.sent();
                        this.data = this.data.data.statuses;
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _b.sent();
                        console.log(e_1);
                        return [3 /*break*/, 4];
                    case 4:
                        if (event.key === "Backspace" && (event.target.value.length == 1 || event.target.value.length == 0)) {
                            this.consultarServicio(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].ENDOPOINT_NG);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ZemogaNodeComponent.prototype.consultarServicio = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, e_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(url != '')) return [3 /*break*/, 4];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, this.zemogaService.getElement(url)];
                    case 2:
                        _a.data = _b.sent();
                        this.data = this.data.data;
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _b.sent();
                        console.log(e_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ZemogaNodeComponent.ctorParameters = function () { return [
        { type: _service_zemoga_service__WEBPACK_IMPORTED_MODULE_3__["ZemogaService"] }
    ]; };
    ZemogaNodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-zemoga-node',
            template: _raw_loader_zemogaNode_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_zemogaNode_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_service_zemoga_service__WEBPACK_IMPORTED_MODULE_3__["ZemogaService"]])
    ], ZemogaNodeComponent);
    return ZemogaNodeComponent;
}());



/***/ }),

/***/ "EtQq":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "zRkE");
/* harmony import */ var _navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.component.scss */ "cruu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element) {
        this.location = location;
        this.element = element;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.isHome = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        if (titlee === '/home') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        if (titlee === '/documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-navbar',
            template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "HRvT":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/zemoga/zemoga.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"page-header page-header-xs\" data-parallax=\"true\" style=\"background-image: url('./assets/img/fabio-mangione.jpg');\">\n        <div class=\"filter\"></div>\n    </div>\n    <div class=\"section profile-content\">\n    \t<div >\n    \t\t<div class=\"row\">\n\t    \t\t<div class=\"col-md-5\">\n\t\t            <br/>\n\t\t            <div class=\"nav-tabs-navigation\">\n\t\t                <div class=\"nav-tabs-wrapper\">\n\t\t                    <ngb-tabset [justify]=\"'center'\">\n\t\t                        <ngb-tab title=\"Users\">\n\t\t\t                            <ng-template ngbTabContent >\n\t\t\t                                <div class=\"row following\" id=\"follows\">\n\t\t\t                                    <div class=\"col-md-6 ml-auto mr-auto\">\n\t\t\t                                        <ul class=\"list-unstyled follows\">\n\t\t\t                                        \t<div *ngFor=\"let user of this.users\">\n\t\t\t                                        \t\t<a href=\"javascript:void(0);\" (click)=\"getTweets(user)\">\n\t\t\t\t\t                                            <li >\n\t\t\t\t\t                                                <div class=\"row\">\n\t\t\t\t\t                                                    <div class=\"col-md-2 col-sm-2 ml-auto mr-auto\">\n\t\t\t\t\t                                                        <img src=\"{{user.imageUrl}}\" alt=\"User\" class=\"img-thumbnail img-no-padding img-responsive\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t          onerror=\"this.onerror=null; this.src='https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg';\">\n\t\t\t\t\t                                                    </div>\n\t\t\t\t\t                                                    <div class=\"col-md-7 col-sm-4 ml-auto\">\n\t\t\t\t\t                                                        <h6>{{user.twitterUserName}}<br/><small>{{user.description}}</small></h6>\n\t\t\t\t\t                                                    </div>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                            </li>\n\t\t\t\t\t                                            <hr />\n\t\t\t\t                                            </a>\n\t\t\t                                            </div>\n\t\t\t                                            \n\t\t\t                                        </ul>\n\t\t\t                                    </div>\n\t\t\t                                </div>\n\t\t\t                            </ng-template>\n\t\t\t                        </ngb-tab>\n\t\t                    </ngb-tabset>\n\t\t                </div>\n\t\t            </div>\n\t            </div>\n\t            <div class=\"col-md-6\">\n\t        \t\t<div *ngIf=\"this.user!=null\">    \t\n\t\t\t            <div class=\"owner\" >\n\t\t\t                <div class=\"avatar\">\n\t\t\t                    <img src=\"{{user.imageUrl}}\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\"\n\t\t\t                    onerror=\"this.onerror=null; this.src='https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg';\">\n\t\t\t                </div>\n\t\t\t                <div class=\"name\">\n\t\t\t                    <h4 class=\"title\">{{user.names}}  {{user.lastNames}}<br /></h4>\n\t\t\t                    <h6 class=\"description\">{{user.twitterUserName}} - Personal info</h6>\n\t\t\t                </div>\n\t\t\t            </div>\n\t\t\t            <div class=\"row\" style=\"padding: 3px;\">\n\t\t\t            \t<div class=\"col-md-3 ml-auto mr-auto text-left\">\n\t\t\t                    <p class=\"text-muted\">Names</p>\n\t\t\t                </div>\n\t\t\t               <div class=\"col-md-3 ml-auto mr-auto text-right\">\n\t\t\t            \t\t<input type=\"text\" class=\"form-control\" maxlength=\"255\" placeholder=\"Names\" [(ngModel)]=\"user.names\">\n\t\t\t            \t</div>\n\t\t\t            \t<div class=\"col-md-3 ml-auto mr-auto text-left\">\n\t\t\t                    <p class=\"text-muted\">Last names</p>\n\t\t\t                </div>\n\t\t\t                <div class=\"col-md-3 ml-auto mr-auto text-right\">\n\t\t\t            \t\t<input type=\"text\" class=\"form-control\" maxlength=\"255\" placeholder=\"Last names\" [(ngModel)]=\"user.lastNames\">\n\t\t\t            \t</div>\n\t\t\t            </div>\n\t\t\t            <div class=\"row\" style=\"padding: 3px;\">\n\t\t\t            \t<div class=\"col-md-3 ml-auto mr-auto text-left\">\n\t\t\t                    <p class=\"text-muted\">Name</p>\n\t\t\t                </div>\n\t\t\t            \t<div class=\"col-md-3 ml-auto mr-auto text-right\">\n\t\t\t            \t\t<input type=\"text\" class=\"form-control\" maxlength=\"255\" placeholder=\"Name\" [(ngModel)]=\"user.name\">\n\t\t\t            \t</div>\n\t\t\t            \t<div class=\"col-md-3 ml-auto mr-auto text-left\">\n\t\t\t                    <p class=\"text-muted\">Email</p>\n\t\t\t                </div>\n\t\t\t            \t<div class=\"col-md-3 ml-auto mr-auto text-right\">\n\t\t\t            \t\t<input type=\"text\" class=\"form-control\" maxlength=\"255\" placeholder=\"Email\" [(ngModel)]=\"user.email\">\n\t\t\t            \t</div>\n\t\t\t            </div>\n\t\t\t            <div class=\"row\" style=\"padding: 3px;\">\n\t\t\t            \t<div class=\"col-md-3 ml-auto mr-auto text-left\">\n\t\t\t                    <p class=\"text-muted\">Phone</p>\n\t\t\t                </div>\n\t\t\t                <div class=\"col-md-3 ml-auto mr-auto text-right\">\n\t\t\t            \t\t<input type=\"text\" class=\"form-control\" maxlength=\"255\" placeholder=\"Phone\" [(ngModel)]=\"user.phone\">\n\t\t\t            \t</div>\n\t\t\t            \t<div class=\"col-md-3 ml-auto mr-auto text-left\">\n\t\t\t                    <p class=\"text-muted\">Address</p>\n\t\t\t                </div>\n\t\t\t                <div class=\"col-md-3 ml-auto mr-auto text-right\">\n\t\t\t            \t\t<input type=\"text\" class=\"form-control\" maxlength=\"255\" placeholder=\"Address\" [(ngModel)]=\"user.address\">\n\t\t\t            \t</div>\n\t\t\t            \t\n\t\t\t            </div>\n\t\t\t            <div class=\"row\" style=\"padding: 3px;\">\n\t\t\t            \t<div class=\"col-md-3 ml-auto mr-auto text-left\">\n\t\t\t                    <p class=\"text-muted\">Zip code</p>\n\t\t\t                </div>\n\t\t\t            \t<div class=\"col-md-3 ml-auto mr-auto text-right\">\n\t\t\t            \t\t<input type=\"text\" class=\"form-control\" maxlength=\"255\" placeholder=\"Zip code\" [(ngModel)]=\"user.zipCode\">\n\t\t\t            \t</div>\n\t\t\t            \t<div class=\"col-md-3 ml-auto mr-auto text-left\">\n\t\t\t                    <p class=\"text-muted\">Image URL</p>\n\t\t\t                </div>\n\t\t\t                <div class=\"col-md-3 ml-auto mr-auto text-right\">\n\t\t\t            \t\t<input type=\"text\" class=\"form-control\" maxlength=\"255\" placeholder=\"Image url\" [(ngModel)]=\"user.imageUrl\">\n\t\t\t            \t</div>\n\t\t\t            </div>\n\t\t\t            <div class=\"row\" style=\"padding: 3px;\">\n\t\t\t            \t<div class=\"col-md-3 ml-auto mr-auto text-left\">\n\t\t\t                    <p class=\"text-muted\">Tittle</p>\n\t\t\t                </div>\n\t\t\t                <div class=\"col-md-3 ml-auto mr-auto text-right\">\n\t\t\t            \t\t<input type=\"text\" class=\"form-control\" maxlength=\"255\" placeholder=\"Tittle\" [(ngModel)]=\"user.tittle\">\n\t\t\t            \t</div>\n\t\t\t            \t<div class=\"col-md-3 ml-auto mr-auto text-left\">\n\t\t\t                    <p class=\"text-muted\">Description</p>\n\t\t\t                </div>\n\t\t\t                <div class=\"col-md-3 ml-auto mr-auto text-right\">\n\t\t\t            \t\t<input type=\"text\" class=\"form-control\" maxlength=\"255\" placeholder=\"Description\" [(ngModel)]=\"user.description\">\n\t\t\t            \t</div>\n\t\t\t            </div>\n\t\t\t            <div class=\"row\" style=\"padding: 3px;\">\n\t\t\t            \t<div class=\"col-md-3 ml-auto mr-auto text-left\">\n\t\t\t                    <p class=\"text-muted\">Experience summary</p>\n\t\t\t                </div>\n\t\t\t                <div class=\"col-md-3 ml-auto mr-auto text-right\">\n\t\t\t            \t\t<input type=\"text\" class=\"form-control\" maxlength=\"255\"  placeholder=\"Experience summary\" [(ngModel)]=\"user.experienceSummary\">\n\t\t\t            \t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3 ml-auto mr-auto text-left\">\n\t\t\t                    <p class=\"text-muted\">Experience</p>\n\t\t\t                </div>\n\t\t\t                <div class=\"col-md-3 ml-auto mr-auto text-right\">\n\t\t\t            \t\t<input type=\"text\" class=\"form-control\" maxlength=\"255\" placeholder=\"Experience\" [(ngModel)]=\"user.experience\">\n\t\t\t            \t</div>\n\t\t\t            </div>\n\t\t\t\n\t\t\t            <br/>\n\t\t\t            <div class=\"row\">\n\t                \t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t <button type=\"button\" class=\"btn btn-outline-primary btn-round\" (click)=\"saveInfo()\">Save</button>\n\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-md-3\">\n\t\t\t\t\t\t\t\t  <p class=\"text-danger\">{{message}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t            <div class=\"nav-tabs-navigation\">\n\t\t\t                <div class=\"nav-tabs-wrapper\">\n\t\t\t                <div>\n\t\t\t\t\t             <input type=\"text\" class=\"form-control\" style=\"width: 20%; margin: 0 auto; text-align: center;\" placeholder=\"Search\"\n\t\t\t\t\t             (keydown)=\"searchTweet($event)\">\n\t\t\t\t            </div>\n\t\t\t                    <ngb-tabset [justify]=\"'center'\">\n\t\t\t                        <ngb-tab title=\"Timeline\">\n\t\t\t                        \t\n\t\t\t\t                            <ng-template ngbTabContent >\n\t\t\t\t                                <div class=\"row following\" id=\"follows\">\n\t\t\t\t                                    <div class=\"col-md-6 ml-auto mr-auto\">\n\t\t\t\t                                        <ul class=\"list-unstyled follows\">\n\t\t\t\t                                        \t\n\t\t\t\t                                        \t<div *ngFor=\"let tweet of this.tweets \">\n\t\t\t\t\t                                            <li >\n\t\t\t\t\t                                                <div class=\"row\">\n\t\t\t\t\t                                                    <div class=\"col-md-2 col-sm-2 ml-auto mr-auto\">\n\t\t\t\t\t\t                                                    <img src=\"{{tweet.user.profileImageURL}}\" alt=\"User\" class=\"img-thumbnail img-no-padding img-responsive\"\n\t\t\t\t\t\t                                                    onerror=\"this.onerror=null; this.src='https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg';\">\n\t\t\t\t\t\t                                                   \n\t\t\t\t\t                                                    </div>\n\t\t\t\t\t                                                    <div class=\"col-md-7 col-sm-4 ml-auto\">\n\t\t\t\t\t                                                        <h6>{{tweet.user.screenName}}<br/><small>{{tweet.text}}</small></h6>\n\t\t\t\t\t                                                    </div>\n\t\t\t\t\t                                                </div>\n\t\t\t\t\t                                            </li>\n\t\t\t\t\t                                            <hr />\n\t\t\t\t                                            </div>\n\t\t\t\t                                        </ul>\n\t\t\t\t                                    </div>\n\t\t\t\t                                </div>\n\t\t\t\t                            </ng-template>\n\t\t\t\t                        </ngb-tab>\n\t\t\t                    </ngb-tabset>\n\t\t\t                    <br />\n\t\t\t                    <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-user-o\"></i> Go to account!</button>\n\t\t\t                </div>\n\t\t\t            </div>\n\t\t            </div>\n\t        \t</div>\n        \t</div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/filter */ "fjAU");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "EtQq");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.navbar.sidebarClose();
        });
        this.renderer.listen('window', 'scroll', function (event) {
            var number = window.scrollY;
            if (number > 150 || window.pageYOffset > 150) {
                // add logic
                navbar.classList.remove('navbar-transparent');
            }
            else {
                // remove logic
                navbar.classList.add('navbar-transparent');
            }
        });
        var ua = window.navigator.userAgent;
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        if (version) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('ie-background');
        }
    };
    AppComponent.prototype.removeFooter = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (titlee === 'signup' || titlee === 'nucleoicons') {
            return false;
        }
        else {
            return true;
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
    ]; };
    AppComponent.propDecorators = {
        navbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],] }]
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "Uk3Y":
/*!*******************************************!*\
  !*** ./src/app/service/zemoga.service.ts ***!
  \*******************************************/
/*! exports provided: ZemogaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZemogaService", function() { return ZemogaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ZemogaService = /** @class */ (function () {
    function ZemogaService(http) {
        this.http = http;
    }
    ZemogaService.prototype.getElement = function (endpoint) {
        return this.http.get(endpoint).toPromise();
    };
    ZemogaService.prototype.updateElement = function (endpoint, body) {
        return this.http.put(endpoint, body).toPromise();
    };
    ZemogaService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ZemogaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ZemogaService);
    return ZemogaService;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer *ngIf=\"removeFooter()\"></app-footer>\n");

/***/ }),

/***/ "WA/m":
/*!*********************************************************!*\
  !*** ./src/app/components/zemoga/zemoga.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ6ZW1vZ2EuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "EtQq");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/footer/footer.component */ "jQpT");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");
/* harmony import */ var _service_zemoga_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/zemoga.service */ "Uk3Y");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [_service_zemoga_service__WEBPACK_IMPORTED_MODULE_11__["ZemogaService"],],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_zemoga_zemoga_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/zemoga/zemoga.component */ "2pPC");
/* harmony import */ var _components_zemogaNode_zemogaNode_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/zemogaNode/zemogaNode.component */ "BO39");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _components_zemoga_zemoga_component__WEBPACK_IMPORTED_MODULE_4__["ZemogaComponent"] },
    { path: 'zemogaNode', component: _components_zemogaNode_zemogaNode_component__WEBPACK_IMPORTED_MODULE_5__["ZemogaNodeComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "crnd":
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
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "cruu":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "exOv":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/zemogaNode/zemogaNode.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"page-header page-header-xs\" data-parallax=\"true\" style=\"background-image: url('./assets/img/fabio-mangione.jpg');\">\n        <div class=\"filter\"></div>\n    </div>\n    <div class=\"section profile-content\">\n    \t<div >\t\t\n            <br/>\n            <div class=\"nav-tabs-navigation\">\n                <div class=\"nav-tabs-wrapper\">\n                <div>\n\t\t             <input type=\"text\" class=\"form-control\" style=\"width: 20%; margin: 0 auto; text-align: center;\" placeholder=\"Search\"\n\t\t             (keydown)=\"searchTweet($event)\">\n\t            </div>\n                    <ngb-tabset [justify]=\"'center'\">\n                        <ngb-tab title=\"Timeline\">\n                        \t\n\t                            <ng-template ngbTabContent >\n\t                                <div class=\"row following\" id=\"follows\">\n\t                                    <div class=\"col-md-6 ml-auto mr-auto\">\n\t                                        <ul class=\"list-unstyled follows\">\n\t                                        \t<div *ngFor=\"let tweet of this.data\">\n\t\t                                            <li >\n\t\t                                                <div class=\"row\">\n\t\t                                                    <div class=\"col-md-2 col-sm-2 ml-auto mr-auto\">\n\t\t                                                        <img src=\"{{tweet.user.profile_image_url}}\" alt=\"User\" class=\"img-thumbnail img-no-padding img-responsive\">\n\t\t                                                    </div>\n\t\t                                                    <div class=\"col-md-7 col-sm-4 ml-auto\">\n\t\t                                                        <h6>{{tweet.user.name}}<br/><small>{{tweet.full_text}}</small></h6>\n\t\t                                                    </div>\n\t\t                                                </div>\n\t\t                                            </li>\n\t\t                                            <hr />\n\t                                            </div>\n\t                                        </ul>\n\t                                    </div>\n\t                                </div>\n\t                            </ng-template>\n\t                        </ngb-tab>\n                    </ngb-tabset>\n                    <br />\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "f2YT":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _zemogaNode_zemogaNode_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./zemogaNode/zemogaNode.component */ "BO39");
/* harmony import */ var _zemoga_zemoga_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./zemoga/zemoga.component */ "2pPC");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            ],
            declarations: [
                _zemogaNode_zemogaNode_component__WEBPACK_IMPORTED_MODULE_4__["ZemogaNodeComponent"],
                _zemoga_zemoga_component__WEBPACK_IMPORTED_MODULE_5__["ZemogaComponent"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "jGP6":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <nav class=\"footer-nav\">\n                <ul>\n                    <li><a href=\"https://www.creative-tim.com\">Creative Tim</a></li>\n                    <li><a href=\"http://blog.creative-tim.com\">Blog</a></li>\n                    <li><a href=\"https://www.creative-tim.com/license\">Licenses</a></li>\n                </ul>\n            </nav>\n            <div class=\"credits ml-auto\">\n                <span class=\"copyright\">\n                    © {{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Creative Tim\n                </span>\n            </div>\n        </div>\n    </div>\n</footer>\n");

/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "jGP6");
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss */ "f2YT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent.ctorParameters = function () { return []; };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-footer',
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zRkE":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\" color-on-scroll=\"500\">\n    <div class=\"container\">\n        <div class=\"navbar-translate\">\n            <a class=\"navbar-brand\" href=\"https://www.creative-tim.com\">Paper Kit 2 Angular</a>\n            <button class=\"navbar-toggler navbar-burger\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\n                <span class=\"navbar-toggler-bar\"></span>\n                <span class=\"navbar-toggler-bar\"></span>\n                <span class=\"navbar-toggler-bar\"></span>\n            </button>\n        </div>        \n    </div>\n</nav>\n");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/*!

 =========================================================
 * Paper Kit 2 Angular - v1.4.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/paper-kit-2-angular
 * Copyright 2020 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/timcreative/paper-kit/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map